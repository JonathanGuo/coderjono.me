const path = require('path')
const proxy = require('http-proxy-middleware');

require('dotenv').config({
  path: '.env',
});

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    title: `Jonathan Guo`,
    description: `My personal website`,
    author: `Jonathan Guo <coderjono@gmail.com>`,
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    apiBaseUri: process.env.API_BASEURI,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-tslint',
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-recaptcha',
      options: {
        async: true,
        defer: true,
        args: `?render=explicit`,
      },
    },
    // Add after these plugins if used
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "App": path.resolve(__dirname, 'src'),
        },
        extensions: []
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro:300,400,700&display=swap']
        }
      }
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Guo`,
        short_name: `CoderJono`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // automatically generate typings from graphql schema
      resolve: 'gatsby-plugin-generate-typings',
      options: {
        dest: './src/types/graphql-types.d.ts',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145342146-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        cookieDomain: "coderjono.me",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};