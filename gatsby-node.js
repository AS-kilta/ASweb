import path from 'path';
import { createFilePath } from '`gatsby-source-filesystem`';

// Create slug for MDX pages from file path, pass lang as node field

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `mdx-pages` });
    const lang = slug.split('/')[1] === 'en' ? 'en' : 'fi';
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `lang`,
      value: lang,
    });
  }
};

// Create MDX pages programmatically

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            layout
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  const mdxPages = result.data.allMdx.nodes;

  mdxPages.forEach((node) => {
    const layout = node.frontmatter.layout ? node.frontmatter.layout : 'page';
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/${layout}.tsx`) + `?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};

// Add page context, handle localized 404

exports.onCreatePage = async ({ page, actions }) => {
  // If lang exists in context => return. (as the page is already processed, prevents infinite looping)
  if (page.context.lang) return;

  const { createPage, deletePage } = actions;

  const oldPage = { ...page };
  // Extract the lang code from path
  const lang = page.path.split('/')[1] === 'en' ? 'en' : 'fi';
  let pagePath = page.path;
  // Handle localized 404
  if (page.path.match(/\/404$/)) {
    pagePath = lang === 'fi' ? `/404.html` : `/${lang}/404.html`;
    page.matchPath = `/${lang}/*`;
  }
  // Recreate modified pages with context
  deletePage(oldPage);
  createPage({
    ...page,
    path: pagePath,
    context: {
      ...page.context,
      slug: page.path,
      lang: lang,
      translation: page.context.frontmatter ? page.context.frontmatter.translation : undefined,
    },
  });
};

// Customize GraphQL schema

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      title: TranslatedMetadata!
      description: TranslatedMetadata!
      author: String
      robots: String
    }
    type TranslatedMetadata {
      fi: String!
      en: String!
    }
    type MdxFrontmatter {
      title: String!
      layout: String
      lead: String
      description: String
      background: String
      heroHeight: String
      robots: String
    }
    type CounselorYaml implements Node {
      title: TranslatedMetadata!
      name: String!
      email: String!
      phone: String
      telegram: String!
      picture: File @fileByRelativePath
      description: TranslatedMetadata
    }
  `;
  createTypes(typeDefs);
};

/* Ignore CSS ordering warnings, as CSS modules are being used.
   Set alias "@src" for "src" directory. */

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  const config = getConfig();
  if (stage === 'develop' || stage === 'build-javascript') {
    const plugin = config.plugins.find((el) => el.constructor.name === 'MiniCssExtractPlugin');
    if (plugin) plugin.options.ignoreOrder = true;
  }
  config.resolve.alias['@src'] = path.resolve(__dirname, 'src');
  actions.replaceWebpackConfig(config);
};
