module.exports = {
  siteMetadata: {
    title: {
      fi: "Automaatio- ja systeemitekniikan kilta",
      en: "Guild of Automation and Systems Technology"
    },
    description: {
      fi: "AS:n uudet nettisivut",
      en: "New website for AS"
    },
    author: `AS`,
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@use "src/styles/_variables" as *;`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Automaatio- ja systeemitekniikan kilta`,
        short_name: `AS`,
        start_url: `/`,
        background_color: `#6e4077`,
        theme_color: `#6e4077`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/mdx-pages`,
        name: "mdx-pages",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`]
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
  ],
}
