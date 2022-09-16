"use strict";

exports.__esModule = true;
exports.headHandlerForBrowser = headHandlerForBrowser;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _reachRouter = require("@gatsbyjs/reach-router");

var _reactDomUtils = require("../react-dom-utils");

var _fireCallbackInEffect = require("./components/fire-callback-in-effect");

var _constants = require("./constants");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const hiddenRoot = document.createElement(`div`);

const removePrevHeadElements = () => {
  const prevHeadNodes = document.querySelectorAll(`[data-gatsby-head]`);

  for (const node of prevHeadNodes) {
    node.parentNode.removeChild(node);
  }
};

const onHeadRendered = () => {
  const validHeadNodes = [];
  const seenIds = new Map();

  for (const node of hiddenRoot.childNodes) {
    var _node$attributes, _node$attributes$id;

    const nodeName = node.nodeName.toLowerCase();
    const id = (_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : (_node$attributes$id = _node$attributes.id) === null || _node$attributes$id === void 0 ? void 0 : _node$attributes$id.value;

    if (!_constants.VALID_NODE_NAMES.includes(nodeName)) {
      (0, _utils.warnForInvalidTags)(nodeName);
    } else {
      let clonedNode = node.cloneNode(true);
      clonedNode.setAttribute(`data-gatsby-head`, true); // Create an element for scripts to make script work

      if (clonedNode.nodeName.toLowerCase() === `script`) {
        const script = document.createElement(`script`);

        for (const attr of clonedNode.attributes) {
          script.setAttribute(attr.name, attr.value);
        }

        script.innerHTML = clonedNode.innerHTML;
        clonedNode = script;
      }

      if (id) {
        if (!seenIds.has(id)) {
          validHeadNodes.push(clonedNode);
          seenIds.set(id, validHeadNodes.length - 1);
        } else {
          var _validHeadNodes$index;

          const indexOfPreviouslyInsertedNode = seenIds.get(id);
          (_validHeadNodes$index = validHeadNodes[indexOfPreviouslyInsertedNode].parentNode) === null || _validHeadNodes$index === void 0 ? void 0 : _validHeadNodes$index.removeChild(validHeadNodes[indexOfPreviouslyInsertedNode]);
          validHeadNodes[indexOfPreviouslyInsertedNode] = clonedNode;
        }
      } else {
        validHeadNodes.push(clonedNode);
      }
    }
  }

  const existingHeadElements = document.querySelectorAll(`[data-gatsby-head]`);

  if (existingHeadElements.length === 0) {
    document.head.append(...validHeadNodes);
    return;
  }

  const newHeadNodes = [];
  (0, _utils.diffNodes)({
    oldNodes: existingHeadElements,
    newNodes: validHeadNodes,
    onStale: node => node.parentNode.removeChild(node),
    onNew: node => newHeadNodes.push(node)
  });
  document.head.append(...newHeadNodes);
};

if (process.env.BUILD_STAGE === `develop`) {
  // We set up observer to be able to regenerate <head> after react-refresh
  // updates our hidden element.
  const observer = new MutationObserver(onHeadRendered);
  observer.observe(hiddenRoot, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });
}

function headHandlerForBrowser({
  pageComponent,
  staticQueryResults,
  pageComponentProps
}) {
  (0, _react.useEffect)(() => {
    if (pageComponent !== null && pageComponent !== void 0 && pageComponent.Head) {
      (0, _utils.headExportValidator)(pageComponent.Head);
      const {
        render
      } = (0, _reactDomUtils.reactDOMUtils)();
      const Head = pageComponent.Head;
      render(
      /*#__PURE__*/
      // just a hack to call the callback after react has done first render
      // Note: In dev, we call onHeadRendered twice( in FireCallbackInEffect and after mutualution observer dectects initail render into hiddenRoot) this is for hot reloading
      // In Prod we only call onHeadRendered in FireCallbackInEffect to render to head
      _react.default.createElement(_fireCallbackInEffect.FireCallbackInEffect, {
        callback: onHeadRendered
      }, /*#__PURE__*/_react.default.createElement(_gatsby.StaticQueryContext.Provider, {
        value: staticQueryResults
      }, /*#__PURE__*/_react.default.createElement(_reachRouter.LocationProvider, null, /*#__PURE__*/_react.default.createElement(Head, (0, _utils.filterHeadProps)(pageComponentProps))))), hiddenRoot);
    }

    return () => {
      removePrevHeadElements();
    };
  });
}