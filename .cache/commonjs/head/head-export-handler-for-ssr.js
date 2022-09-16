"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.headHandlerForSSR = headHandlerForSSR;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

const React = require(`react`);

const {
  grabMatchParams
} = require(`../find-path`);

const {
  createElement
} = require(`react`);

const {
  StaticQueryContext
} = require(`gatsby`);

const {
  headExportValidator,
  filterHeadProps,
  warnForInvalidTags
} = require(`./utils`);

const {
  ServerLocation,
  Router
} = require(`@gatsbyjs/reach-router`);

const {
  renderToString
} = require(`react-dom/server`);

const {
  parse
} = require(`node-html-parser`);

const {
  VALID_NODE_NAMES
} = require(`./constants`);

function headHandlerForSSR({
  pageComponent,
  setHeadComponents,
  staticQueryContext,
  pageData,
  pagePath
}) {
  if (pageComponent !== null && pageComponent !== void 0 && pageComponent.Head) {
    headExportValidator(pageComponent.Head);

    function HeadRouteHandler(props) {
      var _pageData$result, _pageData$result$page;

      const _props = { ...props,
        ...pageData.result,
        params: { ...grabMatchParams(props.location.pathname),
          ...(((_pageData$result = pageData.result) === null || _pageData$result === void 0 ? void 0 : (_pageData$result$page = _pageData$result.pageContext) === null || _pageData$result$page === void 0 ? void 0 : _pageData$result$page.__params) || {})
        }
      };
      return createElement(pageComponent.Head, filterHeadProps(_props));
    }

    const routerElement = /*#__PURE__*/React.createElement(StaticQueryContext.Provider, {
      value: staticQueryContext
    }, /*#__PURE__*/React.createElement(ServerLocation, {
      url: `${__BASE_PATH__}${pagePath}`
    }, /*#__PURE__*/React.createElement(Router, {
      baseuri: __BASE_PATH__,
      component: ({
        children
      }) => /*#__PURE__*/React.createElement(React.Fragment, null, children)
    }, /*#__PURE__*/React.createElement(HeadRouteHandler, {
      path: "/*"
    })))); // extract head nodes from string

    const rawString = renderToString(routerElement);
    const headNodes = parse(rawString).childNodes;
    const validHeadNodes = [];
    const seenIds = new Map();

    for (const node of headNodes) {
      var _node$attributes;

      const {
        rawTagName
      } = node;
      const id = (_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.id;

      if (!VALID_NODE_NAMES.includes(rawTagName)) {
        warnForInvalidTags(rawTagName);
      } else {
        let element;
        const attributes = { ...node.attributes,
          "data-gatsby-head": true
        };

        if (rawTagName === `script`) {
          element = /*#__PURE__*/React.createElement("script", (0, _extends2.default)({}, attributes, {
            dangerouslySetInnerHTML: {
              __html: node.text
            }
          }));
        } else {
          var _node$childNodes$;

          element = /*#__PURE__*/React.createElement(node.rawTagName, attributes, (_node$childNodes$ = node.childNodes[0]) === null || _node$childNodes$ === void 0 ? void 0 : _node$childNodes$.textContent);
        }

        if (id) {
          if (!seenIds.has(id)) {
            validHeadNodes.push(element);
            seenIds.set(id, validHeadNodes.length - 1);
          } else {
            const indexOfPreviouslyInsertedNode = seenIds.get(id);
            validHeadNodes[indexOfPreviouslyInsertedNode] = element;
          }
        } else {
          validHeadNodes.push(element);
        }
      }
    }

    setHeadComponents(validHeadNodes);
  }
}