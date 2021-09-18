/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Alcove: The all-in-one solution to all things interior",
    description: "We provide an all round solution for all things interior starting from furnishing your house to selling other products for your house's decor",
    url: "https://alcove-istebits.netlify.app/",
    twitterUsername: "@saisambhav",
    author: "Kumar Shantanu"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: 'https://alcove-istebits.netlify.app',
        sitemap: 'https://alcove-istebits.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Alcove ISTEBITS",
        short_name: "Alcove",
        start_url: "/",
        background_color: "#32564C",
        theme_color: "#D77512",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/favicon.ico", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
