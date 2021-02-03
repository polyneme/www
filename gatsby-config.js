module.exports = {
  siteMetadata: {
    title: `Polyneme LLC`,
    description: `At Polyneme LLC, we amplify the capacity of researchers to perform data-intensive science together.`,
    author: `@donnywinston`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Polyneme LLC`,
        short_name: `Polyneme`,
        start_url: `/`,
        background_color: `#222639`,
        theme_color: `#bb99ff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
