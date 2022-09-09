const path = require("path")

// Add page context, handle localized 404

exports.onCreatePage = async ({ page, graphql, actions }) => {

  // If lang exists in context => return. (as the page is already processed, prevents infinite looping)
  if (page.context.lang)
    return;

  const { createPage, deletePage } = actions

  const oldPage = { ...page }
  // Extract the lang code from path
  const lang = page.path.split("/")[1] === "en" ? "en" : "fi"
  let pagePath = page.path
  // Handle localized 404
  if (page.path.match(/\/404\/$/)) {
    pagePath = lang === "fi" ? `/404.html` : `/${lang}/404.html`
    page.matchPath = `/${lang}/*`
  }
  // Recreate modified pages with context
  deletePage(oldPage)
  createPage({
    ...page,
    path: pagePath,
    context: {
      ...page.context,
      slug: page.path,
      lang: lang,
      translation: page.context.frontmatter ? page.context.frontmatter.translation : undefined
    },
  })

}

// Customize GraphQL schema

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteSiteMetadata {
      title: TranslatedMetadata!
      description: TranslatedMetadata!
      author: String
    }
    type TranslatedMetadata {
      fi: String!
      en: String!
    }
    type MdxFrontmatter {
      title: String!
      layout: String
      lead: String
      background: String
    }
  `
  createTypes(typeDefs)
}

/* Ignore CSS ordering warnings, as CSS modules are being used.
   Set alias "@src" for "src" directory. */

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  const config = getConfig();
  if (stage === "develop" || stage === "build-javascript") {
    const plugin = config.plugins.find( (el) => el.constructor.name === "MiniCssExtractPlugin" );
    if (plugin) plugin.options.ignoreOrder = true;
  }
  config.resolve.alias["@src"] = path.resolve(__dirname, "src");
  actions.replaceWebpackConfig(config);
}
