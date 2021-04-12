const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'R.A.D. Routes Documentation',
    description: 'R.A.D. Routes Documentation',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'R.A.D. Routes Documentation',
        description: 'R.A.D. Routes Documentation',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz',
          templates:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz',
          cache:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz\\.cache',
          app: 'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz\\app',
          appPackageJson:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\package.json',
          appTsConfig:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz\\app\\index.html',
          db:
            'C:\\Users\\Beast\\Desktop\\code\\React\\rrdocz\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
