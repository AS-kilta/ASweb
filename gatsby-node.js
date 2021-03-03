exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              template
              lang
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/templates/${node.frontmatter.template}.js`),
      context: {
        slug: node.frontmatter.slug,
        langKey: node.frontmatter.lang
      },
    })
  })
}

exports.onCreatePage = async ({ page, graphql, actions }) => {
  const { createPage, deletePage } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}
