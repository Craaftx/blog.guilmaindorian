module.exports = {
  siteMetadata: {
    title: 'Dorian G',
    twitterHandle: '@Craaftx1',
    author: '@Craaftx',
    description: 'Blog technique où je parle de code, de CSS et de design.',
    siteURL: 'https://blog.guilmaindorian.com',
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Lato'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `guilmaindorian`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'blog-headless.guilmaindorian.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
  ],
}
