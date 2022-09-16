"use strict";
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 3953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ Navbar)
});

// EXTERNAL MODULE: external "/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/node_modules/react/index.js"
var index_js_ = __webpack_require__(2201);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 5 modules
var gatsby_browser_entry = __webpack_require__(9572);
;// CONCATENATED MODULE: ./src/assets/logo/overvue-nav.png
/* harmony default export */ const overvue_nav = (__webpack_require__.p + "static/overvue-nav-fe945487d1c39a3d04ed186dd4ec327c.png");
;// CONCATENATED MODULE: ./src/components/Navbar/navbar.js
function Navbar(){return/*#__PURE__*/index_js_default().createElement("nav",{className:"nav"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"nav__logo",to:"/"},/*#__PURE__*/index_js_default().createElement("img",{src:overvue_nav,alt:"logo"})),/*#__PURE__*/index_js_default().createElement("div",{className:"nav__actions"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"nav__action",to:"/docs"},"Docs"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"nav__action",to:"/examples"},"Examples"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/open-source-labs/OverVue"},/*#__PURE__*/index_js_default().createElement("img",{src:"/Users/emma/Desktop/Codesmith/OverVueWebsite/OverVuePage/src/assets/logo/GitHub-Mark-120px-plus.png",alt:"black github logo"}))));}
;// CONCATENATED MODULE: ./src/components/Navbar/index.js


/***/ }),

/***/ 1574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: external "/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/node_modules/react/index.js"
var index_js_ = __webpack_require__(2201);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/data/sidebar-links.js
const links={'getting_started':[{label:"Installation",link:"/docs/installation"},{label:"Core Features",link:"/docs/core-features"}],features:[{label:"feature link",link:"/docs/feature-link"}]};
// EXTERNAL MODULE: ./src/components/Navbar/index.js + 2 modules
var Navbar = __webpack_require__(3953);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 5 modules
var gatsby_browser_entry = __webpack_require__(9572);
;// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.js
function Sidebar({links}){console.log(links);return/*#__PURE__*/index_js_default().createElement("div",{className:"sidebar"},/*#__PURE__*/index_js_default().createElement("div",{className:"sidebar__inner"},/*#__PURE__*/index_js_default().createElement("h3",null,"Getting Started"),links.getting_started.map(({label,link})=>/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"sidebar__link",to:link},label)),/*#__PURE__*/index_js_default().createElement("h3",null,"Features"),links.features.map(({label,link})=>/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"sidebar__link",to:link},label))));}
;// CONCATENATED MODULE: ./src/components/Sidebar/index.js

;// CONCATENATED MODULE: ./src/layouts/docs-layout.js
function Layout({children}){return/*#__PURE__*/index_js_default().createElement("div",{className:"docs__layout"},/*#__PURE__*/index_js_default().createElement(Navbar/* Navbar */.w,null),/*#__PURE__*/index_js_default().createElement("div",{className:"docs__body"},/*#__PURE__*/index_js_default().createElement(Sidebar,{links:links}),children));}
;// CONCATENATED MODULE: ./src/layouts/index.js


/***/ }),

/***/ 3456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Installation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2201);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1574);
function Installation(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts__WEBPACK_IMPORTED_MODULE_1__/* .DocsLayout */ .z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"docs__content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,"Introduction"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null," ","OverVue is a prototyping tool that allows developers to dynamically create and visualize a Vue application, implementing a real-time intuitive tree display of component hierarchy and a live-generated code preview. The resulting boilerplate can be exported as a template for further development."," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,"Installation Instructions"),"\u200B",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"1. Download the desktop App."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"2. Install Dependencies"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"3. Run electron app in dev mode (nb. Vue Devtools will launch automatically)"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"4. Run build")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null," ")));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-docs-installation-js.js.map