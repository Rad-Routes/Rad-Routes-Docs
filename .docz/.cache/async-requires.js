// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("./../../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-coming-soon-mdx": () => import("./../../../../src/ComingSoon.mdx" /* webpackChunkName: "component---src-coming-soon-mdx" */),
  "component---src-hello-world-mdx": () => import("./../../../../src/helloWorld.mdx" /* webpackChunkName: "component---src-hello-world-mdx" */),
  "component---src-index-mdx": () => import("./../../../../src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-prereq-mdx": () => import("./../../../../src/prereq.mdx" /* webpackChunkName: "component---src-prereq-mdx" */)
}

