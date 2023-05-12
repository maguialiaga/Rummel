/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: ``,
    description: `Rummel Audio - Mix & Mastering - 1:1 Production Lessons`,
    author: `Magdalena Aliaga`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:300,400,500,700`,
          `Inter:wght@200,300,400,500,`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `@bond-london/gatsby-transformer-video`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
  ],
};
