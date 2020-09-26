module.exports = {
  siteMetadata: {
    title: 'Blog - Dorian G',
    twitterHandle: '@Craaftx1',
    author: '@Craaftx',
    description: 'Blog technique où je parle de code, de CSS et de design.',
    siteUrl: 'https://blog.guilmaindorian.com',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guilmain Dorian - Blog`,
        short_name: `Dorian G`,
        start_url: `/`,
        background_color: `#42406f`,
        theme_color: `#42406f`,
        display: `minimal-ui`,
        icon: `static/img/icon.png`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-79846325-7',
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
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'blog.guilmaindorian.com',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/tags/*', '/author/*', '/politique-de-confidentialite/'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://blog.guilmaindorian.com',
        sitemap: 'https://blog.guilmaindorian.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}
