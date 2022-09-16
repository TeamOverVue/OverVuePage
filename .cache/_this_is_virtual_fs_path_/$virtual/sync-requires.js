
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-docs-core-features-js": preferDefault(require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/src/pages/docs/core-features.js")),
  "component---src-pages-docs-index-js": preferDefault(require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/src/pages/docs/index.js")),
  "component---src-pages-docs-installation-js": preferDefault(require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/src/pages/docs/installation.js")),
  "component---src-pages-examples-index-js": preferDefault(require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/src/pages/examples/index.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/src/pages/index.js"))
}

