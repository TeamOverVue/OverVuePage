"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _apiRunnerBrowser = require("./api-runner-browser");

var _findPath = require("./find-path");

var _headExportHandlerForBrowser = require("./head/head-export-handler-for-browser");

// Renders page
function PageRenderer(props) {
  const pageComponentProps = { ...props,
    params: { ...(0, _findPath.grabMatchParams)(props.location.pathname),
      ...props.pageResources.json.pageContext.__params
    }
  };

  const preferDefault = m => m && m.default || m;

  const pageElement = /*#__PURE__*/(0, _react.createElement)(preferDefault(props.pageResources.component), { ...pageComponentProps,
    key: props.path || props.pageResources.page.path
  });
  const pageComponent = props.pageResources.head;
  (0, _headExportHandlerForBrowser.headHandlerForBrowser)({
    pageComponent,
    staticQueryResults: props.pageResources.staticQueryResults,
    pageComponentProps
  });
  const wrappedPage = (0, _apiRunnerBrowser.apiRunner)(`wrapPageElement`, {
    element: pageElement,
    props: pageComponentProps
  }, pageElement, ({
    result
  }) => {
    return {
      element: result,
      props: pageComponentProps
    };
  }).pop();
  return wrappedPage;
}

PageRenderer.propTypes = {
  location: _propTypes.default.object.isRequired,
  pageResources: _propTypes.default.object.isRequired,
  data: _propTypes.default.object,
  pageContext: _propTypes.default.object.isRequired
};
var _default = PageRenderer;
exports.default = _default;