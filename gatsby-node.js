exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                template
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: require.resolve(`./src/templates/${node.frontmatter.template}.js`),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  }
