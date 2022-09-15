exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/lib/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/lib/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? (0, _invariant2.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "criticallyDampedSpring": () => (/* binding */ criticallyDampedSpring),
/* harmony export */   "getDefaultTransition": () => (/* binding */ getDefaultTransition),
/* harmony export */   "linearTween": () => (/* binding */ linearTween),
/* harmony export */   "underDampedSpring": () => (/* binding */ underDampedSpring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");



var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var criticallyDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if ((0,_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ to: to }, transitionFactory(to));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/easing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/easing.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easingDefinitionToFunction": () => (/* binding */ easingDefinitionToFunction),
/* harmony export */   "isEasingArray": () => (/* binding */ isEasingArray)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/cubic-bezier.js");




var easingLookup = {
    linear: popmotion__WEBPACK_IMPORTED_MODULE_1__.linear,
    easeIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.circIn,
    circInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circInOut,
    circOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circOut,
    backIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.backIn,
    backInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backInOut,
    backOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backOut,
    anticipate: popmotion__WEBPACK_IMPORTED_MODULE_1__.anticipate,
    bounceIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceIn,
    bounceInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceInOut,
    bounceOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceOut,
};
var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return easingLookup[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimatable": () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimationControls": () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isKeyframesTarget": () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/transitions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTransitionToAnimationOptions": () => (/* binding */ convertTransitionToAnimationOptions),
/* harmony export */   "getDelayFromTransition": () => (/* binding */ getDelayFromTransition),
/* harmony export */   "getPopmotionAnimationOptions": () => (/* binding */ getPopmotionAnimationOptions),
/* harmony export */   "getValueTransition": () => (/* binding */ getValueTransition),
/* harmony export */   "getZeroUnit": () => (/* binding */ getZeroUnit),
/* harmony export */   "hydrateKeyframes": () => (/* binding */ hydrateKeyframes),
/* harmony export */   "isTransitionDefined": () => (/* binding */ isTransitionDefined),
/* harmony export */   "isZero": () => (/* binding */ isZero),
/* harmony export */   "startAnimation": () => (/* binding */ startAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/inertia.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/index.js");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/time-conversion.js */ "./node_modules/framer-motion/dist/es/utils/time-conversion.js");
/* harmony import */ var _easing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing.js */ "./node_modules/framer-motion/dist/es/animation/utils/easing.js");
/* harmony import */ var _is_animatable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-animatable.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js");
/* harmony import */ var _default_transitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/dom/value-types/animatable-none.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js");









/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    _a.when; _a.delay; _a.delayChildren; _a.staggerChildren; _a.staggerDirection; _a.repeat; _a.repeatType; _a.repeatDelay; _a.from; var transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition);
    if (times)
        options["offset"] = times;
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = (0,_easing_js__WEBPACK_IMPORTED_MODULE_3__.isEasingArray)(ease)
            ? ease.map(_easing_js__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)
            : (0,_easing_js__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    /**
     * TODO: These options are officially removed from the API.
     */
    if (yoyo || loop || flip) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
        legacyRepeatWarning = true;
        if (yoyo) {
            options.repeatType = "reverse";
        }
        else if (loop) {
            options.repeatType = "loop";
        }
        else if (flip) {
            options.repeatType = "mirror";
        }
        options.repeat = loop || yoyo || flip || transition.repeat;
    }
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(options.to));
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
        (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
    }
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition), (0,_default_transitions_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultTransition)(key, options.to));
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = (0,_is_animatable_js__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        /**
         * If we're trying to animate from "none", try and get an animatable version
         * of the target. This could be improved to work both ways.
         */
        origin = (0,_render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_6__.getAnimatableNone)(key, target);
    }
    else if (isZero(origin) && typeof target === "string") {
        origin = getZeroUnit(target);
    }
    else if (!Array.isArray(target) &&
        isZero(target) &&
        typeof origin === "string") {
        target = getZeroUnit(origin);
    }
    var isOriginAnimatable = (0,_is_animatable_js__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, origin);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? (0,popmotion__WEBPACK_IMPORTED_MODULE_7__.inertia)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), valueTransition))
            : (0,popmotion__WEBPACK_IMPORTED_MODULE_8__.animate)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function (v) {
                    var _a;
                    options.onUpdate(v);
                    (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                }, onComplete: function () {
                    var _a;
                    options.onComplete();
                    (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                } }));
    }
    function set() {
        var _a;
        value.set(target);
        onComplete();
        (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
function isZero(value) {
    return (value === 0 ||
        (typeof value === "string" &&
            parseFloat(value) === 0 &&
            value.indexOf(" ") === -1));
}
function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number"
        ? 0
        : (0,_render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_6__.getAnimatableNone)("", potentialUnitType);
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = setTimeout(start, (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPresent": () => (/* binding */ isPresent),
/* harmony export */   "useIsPresent": () => (/* binding */ useIsPresent),
/* harmony export */   "usePresence": () => (/* binding */ usePresence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");




/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__.PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__.PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return (0,_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__.useConstant)(incrementId); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Presence": () => (/* binding */ Presence),
/* harmony export */   "VisibilityAction": () => (/* binding */ VisibilityAction)
/* harmony export */ });
/**
 * @public
 */
var Presence;
(function (Presence) {
    Presence[Presence["Entering"] = 0] = "Entering";
    Presence[Presence["Present"] = 1] = "Present";
    Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
/**
 * @public
 */
var VisibilityAction;
(function (VisibilityAction) {
    VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
    VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBatcher": () => (/* binding */ createBatcher)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");
/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../render/dom/utils/batch-layout.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js");
/* harmony import */ var _render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../render/utils/compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");







/**
 * Default handlers for batching VisualElements
 */
var defaultHandler = {
    layoutReady: function (child) { return child.notifyLayoutReady(); },
};
/**
 * Create a batcher to process VisualElements
 */
function createBatcher() {
    var queue = new Set();
    return {
        add: function (child) { return queue.add(child); },
        flush: function (_a) {
            var _b = _a === void 0 ? defaultHandler : _a, layoutReady = _b.layoutReady, parent = _b.parent;
            (0,_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_1__.batchLayout)(function (read, write) {
                var order = Array.from(queue).sort(_render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_2__.compareByDepth);
                var ancestors = parent
                    ? (0,_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__.collectProjectingAncestors)(parent)
                    : [];
                write(function () {
                    var allElements = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(ancestors)), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(order));
                    allElements.forEach(function (element) { return element.resetTransform(); });
                });
                read(function () {
                    order.forEach(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__.updateLayoutMeasurement);
                });
                write(function () {
                    ancestors.forEach(function (element) { return element.restoreTransform(); });
                    order.forEach(layoutReady);
                });
                read(function () {
                    /**
                     * After all children have started animating, ensure any Entering components are set to Present.
                     * If we add deferred animations (set up all animations and then start them in two loops) this
                     * could be moved to the start loop. But it needs to happen after all the animations configs
                     * are generated in AnimateSharedLayout as this relies on presence data
                     */
                    order.forEach(function (child) {
                        if (child.isPresent)
                            child.presence = _types_js__WEBPACK_IMPORTED_MODULE_5__.Presence.Present;
                    });
                });
                write(function () {
                    /**
                     * Starting these animations will have queued jobs on the frame loop. In some situations,
                     * like when removing an element, these will be processed too late after the DOM is manipulated,
                     * leaving a flash of incorrectly-projected content. By manually flushing these jobs
                     * we ensure there's no flash.
                     */
                    framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.preRender();
                    framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.render();
                });
                read(function () {
                    /**
                     * Schedule a callback at the end of the following frame to assign the latest projection
                     * box to the prevViewportBox snapshot. Once global batching is in place this could be run
                     * synchronously. But for now it ensures that if any nested `AnimateSharedLayout` top-level
                     * child attempts to calculate its previous relative position against a prevViewportBox
                     * it will be against its latest projection box instead, as the snapshot is useless beyond this
                     * render.
                     */
                    framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(function () {
                        return order.forEach(assignProjectionToSnapshot);
                    });
                    queue.clear();
                });
            });
            // TODO: Need to find a layout-synchronous way of flushing this
            (0,_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_1__.flushLayout)();
        },
    };
}
function assignProjectionToSnapshot(child) {
    child.prevViewportBox = child.projection.target;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutGroupContext": () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @internal
 */
var LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LazyContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyContext": () => (/* binding */ LazyContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ strict: false });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionConfigContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionConfigContext": () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @public
 */
var MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: function (p) { return p; },
    isStatic: false,
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/create.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateMotionContext": () => (/* binding */ useCreateMotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.js");




function useCreateMotionContext(props, isStatic) {
    var _a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentTreeVariants)(props, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index_js__WEBPACK_IMPORTED_MODULE_2__.MotionContext)), initial = _a.initial, animate = _a.animate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return ({ initial: initial, animate: animate }); }, 
    /**
     * Only break memoisation in static mode
     */
    isStatic
        ? [
            variantLabelsAsDependency(initial),
            variantLabelsAsDependency(animate),
        ]
        : []);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionContext": () => (/* binding */ MotionContext),
/* harmony export */   "useVisualElementContext": () => (/* binding */ useVisualElementContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MotionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useVisualElementContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MotionContext).visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentTreeVariants": () => (/* binding */ getCurrentTreeVariants)
/* harmony export */ });
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");


function getCurrentTreeVariants(props, context) {
    if ((0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__.checkIfControllingVariants)(props)) {
        var initial = props.initial, animate = props.animate;
        return {
            initial: initial === false || (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(initial)
                ? initial
                : undefined,
            animate: (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/PresenceContext.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresenceContext": () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @public
 */
var PresenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FramerTreeLayoutContext": () => (/* binding */ FramerTreeLayoutContext),
/* harmony export */   "SharedLayoutContext": () => (/* binding */ SharedLayoutContext),
/* harmony export */   "isSharedLayout": () => (/* binding */ isSharedLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AnimateSharedLayout/utils/batcher.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js");



var SharedLayoutContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((0,_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__.createBatcher)());
/**
 * @internal
 */
var FramerTreeLayoutContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((0,_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__.createBatcher)());
function isSharedLayout(context) {
    return !!context.forceUpdate;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/event-info.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/event-info.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractEventInfo": () => (/* binding */ extractEventInfo),
/* harmony export */   "getViewportPointFromEvent": () => (/* binding */ getViewportPointFromEvent),
/* harmony export */   "wrapHandler": () => (/* binding */ wrapHandler)
/* harmony export */ });
/* harmony import */ var _gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gestures/utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");


/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: (0,_gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__.isTouchEvent)(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
function getViewportPointFromEvent(event) {
    return extractEventInfo(event, "client");
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    var listener = function (event) {
        return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-dom-event.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-dom-event.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDomEvent": () => (/* binding */ addDomEvent),
/* harmony export */   "useDomEvent": () => (/* binding */ useDomEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-pointer-event.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPointerEvent": () => (/* binding */ addPointerEvent),
/* harmony export */   "usePointerEvent": () => (/* binding */ usePointerEvent)
/* harmony export */ });
/* harmony import */ var _use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _event_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/events/utils.js");




var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.supportsPointerEvents)()) {
        return name;
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.supportsTouchEvents)()) {
        return touchEventNames[name];
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.supportsMouseEvents)()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return (0,_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.addDomEvent)(target, getPointerEventName(eventName), (0,_event_info_js__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return (0,_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(ref, getPointerEventName(eventName), handler && (0,_event_info_js__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsMouseEvents": () => (/* binding */ supportsMouseEvents),
/* harmony export */   "supportsPointerEvents": () => (/* binding */ supportsPointerEvents),
/* harmony export */   "supportsTouchEvents": () => (/* binding */ supportsTouchEvents)
/* harmony export */ });
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");


// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onmousedown === null;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/PanSession.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/PanSession.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanSession": () => (/* binding */ PanSession)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/time-conversion.js */ "./node_modules/framer-motion/dist/es/utils/time-conversion.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.js");








/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.distance)(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
            _this.history.push((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        this.handlePointerMove = function (event, info) {
            _this.lastMoveEvent = event;
            _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
            // Because Safari doesn't trigger mouseup events when it's above a `<select>`
            if ((0,_utils_event_type_js__WEBPACK_IMPORTED_MODULE_3__.isMouseEvent)(event) && event.buttons === 0) {
                _this.handlePointerUp(event, info);
                return;
            }
            // Throttle mouse move event to once per frame
            framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(_this.updatePoint, true);
        };
        this.handlePointerUp = function (event, info) {
            _this.end();
            var _a = _this.handlers, onEnd = _a.onEnd, onSessionEnd = _a.onSessionEnd;
            var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
            if (_this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if ((0,_utils_event_type_js__WEBPACK_IMPORTED_MODULE_3__.isTouchEvent)(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = (0,_events_event_info_js__WEBPACK_IMPORTED_MODULE_4__.extractEventInfo)(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
        this.history = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0,popmotion__WEBPACK_IMPORTED_MODULE_5__.pipe)((0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointermove", this.handlePointerMove), (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointerup", this.handlePointerUp), (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointercancel", this.handlePointerUp));
    }
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(this.updatePoint);
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            (0,_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_7__.secondsToMilliseconds)(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualElementDragControls": () => (/* binding */ VisualElementDragControls),
/* harmony export */   "elementDragControls": () => (/* binding */ elementDragControls)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../PanSession.js */ "./node_modules/framer-motion/dist/es/gestures/PanSession.js");
/* harmony import */ var _utils_lock_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events/event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/constraints.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js");
/* harmony import */ var _render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../render/dom/projection/measure.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony import */ var _render_dom_projection_convert_to_relative_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../render/dom/projection/convert-to-relative.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/convert-to-relative.js");
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../motion/features/layout/utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/dom/utils/batch-layout.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");






















var elementDragControls = new WeakMap();
/**
 *
 */
var lastPointerEvent;
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(_a) {
        var visualElement = _a.visualElement;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * The per-axis resolved elastic values.
         *
         * @internal
         */
        this.elastic = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.axisBox)();
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {};
        /**
         * @internal
         */
        this.hasMutatedConstraints = false;
        /**
         * Track the initial position of the cursor relative to the dragging element
         * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
         * an ideal bounding box for the VisualElement renderer to project into every frame.
         *
         * @internal
         */
        this.cursorProgress = {
            x: 0.5,
            y: 0.5,
        };
        // When updating _dragX, or _dragY instead of the VisualElement,
        // persist their values between drag gestures.
        this.originPoint = {};
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        this.visualElement = visualElement;
        this.visualElement.enableLayoutProjection();
        elementDragControls.set(visualElement, this);
    }
    /**
     * Instantiate a PanSession for the drag gesture
     *
     * @public
     */
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
        var onSessionStart = function (event) {
            var _a;
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopMotion();
            /**
             * Save the initial point. We'll use this to calculate the pointer's position rather
             * than the one we receive when the gesture actually starts. By then, the pointer will
             * have already moved, and the perception will be of the pointer "slipping" across the element
             */
            var initialPoint = (0,_events_event_info_js__WEBPACK_IMPORTED_MODULE_3__.getViewportPointFromEvent)(event).point;
            (_a = _this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(_this);
            _this.cancelLayout = (0,_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_4__.batchLayout)(function (read, write) {
                var ancestors = (0,_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_5__.collectProjectingAncestors)(_this.visualElement);
                var children = (0,_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_5__.collectProjectingChildren)(_this.visualElement);
                var tree = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)(ancestors)), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)(children));
                var hasManuallySetCursorOrigin = false;
                /**
                 * Apply a simple lock to the projection target. This ensures no animations
                 * can run on the projection box while this lock is active.
                 */
                _this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
                write(function () {
                    tree.forEach(function (element) { return element.resetTransform(); });
                });
                read(function () {
                    (0,_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_5__.updateLayoutMeasurement)(_this.visualElement);
                    children.forEach(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_5__.updateLayoutMeasurement);
                });
                write(function () {
                    tree.forEach(function (element) { return element.restoreTransform(); });
                    if (snapToCursor) {
                        hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
                    }
                });
                read(function () {
                    var isRelativeDrag = Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag());
                    if (!isRelativeDrag) {
                        _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
                    }
                    _this.visualElement.scheduleUpdateLayoutProjection();
                    /**
                     * When dragging starts, we want to find where the cursor is relative to the bounding box
                     * of the element. Every frame, we calculate a new bounding box using this relative position
                     * and let the visualElement renderer figure out how to reproject the element into this bounding
                     * box.
                     *
                     * By doing it this way, rather than applying an x/y transform directly to the element,
                     * we can ensure the component always visually sticks to the cursor as we'd expect, even
                     * if the DOM element itself changes layout as a result of React updates the user might
                     * make based on the drag position.
                     */
                    var projection = _this.visualElement.projection;
                    (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
                        if (!hasManuallySetCursorOrigin) {
                            var _a = projection.target[axis], min = _a.min, max = _a.max;
                            _this.cursorProgress[axis] = cursorProgress
                                ? cursorProgress[axis]
                                : (0,popmotion__WEBPACK_IMPORTED_MODULE_8__.progress)(min, max, initialPoint[axis]);
                        }
                        /**
                         * If we have external drag MotionValues, record their origin point. On pointermove
                         * we'll apply the pan gesture offset directly to this value.
                         */
                        var axisValue = _this.getAxisMotionValue(axis);
                        if (axisValue) {
                            _this.originPoint[axis] = axisValue.get();
                        }
                    });
                });
                write(function () {
                    framesync__WEBPACK_IMPORTED_MODULE_1__.flushSync.update();
                    framesync__WEBPACK_IMPORTED_MODULE_1__.flushSync.preRender();
                    framesync__WEBPACK_IMPORTED_MODULE_1__.flushSync.render();
                    framesync__WEBPACK_IMPORTED_MODULE_1__.flushSync.postRender();
                });
                read(function () { return _this.resolveDragConstraints(); });
            });
        };
        var onStart = function (event, info) {
            var _a, _b, _c;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _d = _this.props, drag = _d.drag, dragPropagation = _d.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = (0,_utils_lock_js__WEBPACK_IMPORTED_MODULE_9__.getGlobalLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            (0,_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_4__.flushLayout)();
            // Set current drag status
            _this.isDragging = true;
            _this.currentDirection = null;
            // Fire onDragStart event
            (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
            (_c = _this.visualElement.animationState) === null || _c === void 0 ? void 0 : _c.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_10__.AnimationType.Drag, true);
        };
        var onMove = function (event, info) {
            var _a, _b, _c, _d;
            var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", info.point, offset);
            _this.updateAxis("y", info.point, offset);
            // Fire onDrag event
            (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
            // Update the last pointer event
            lastPointerEvent = event;
        };
        var onSessionEnd = function (event, info) {
            return _this.stop(event, info);
        };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new _PanSession_js__WEBPACK_IMPORTED_MODULE_11__.PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onSessionEnd: onSessionEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    VisualElementDragControls.prototype.resolveDragConstraints = function () {
        var _this = this;
        var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
        var layout = this.visualElement.getLayoutState().layoutCorrected;
        if (dragConstraints) {
            this.constraints = (0,_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_12__.isRefObject)(dragConstraints)
                ? this.resolveRefConstraints(layout, dragConstraints)
                : (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.calcRelativeConstraints)(layout, dragConstraints);
        }
        else {
            this.constraints = false;
        }
        this.elastic = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (this.constraints && !this.hasMutatedConstraints) {
            (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.rebaseAxisConstraints)(layout[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
        var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
        var constraintsElement = constraints.current;
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        this.constraintsBox = (0,_render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_14__.getBoundingBox)(constraintsElement, transformPagePoint);
        var measuredConstraints = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.calcViewportConstraints)(layoutBox, this.constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints((0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.convertAxisBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.convertBoundingBoxToAxisBox)(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.cancelDrag = function () {
        var _a, _b;
        this.visualElement.unlockProjectionTarget();
        (_a = this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(this);
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_10__.AnimationType.Drag, false);
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var _a, _b, _c;
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var velocity = info.velocity;
        this.animateDragEnd(velocity);
        (_c = (_b = this.props).onDragEnd) === null || _c === void 0 ? void 0 : _c.call(_b, event, info);
    };
    VisualElementDragControls.prototype.snapToCursor = function (point) {
        var _this = this;
        return (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
            var drag = _this.props.drag;
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, _this.currentDirection))
                return;
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var box = _this.visualElement.getLayoutState().layout;
                var length_1 = box[axis].max - box[axis].min;
                var center = box[axis].min + length_1 / 2;
                var offset = point[axis] - center;
                _this.originPoint[axis] = point[axis];
                axisValue.set(offset);
            }
            else {
                _this.cursorProgress[axis] = 0.5;
                return true;
            }
        }).includes(true);
    };
    /**
     * Update the specified axis with the latest pointer information.
     */
    VisualElementDragControls.prototype.updateAxis = function (axis, point, offset) {
        var drag = this.props.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection))
            return;
        return this.getAxisMotionValue(axis)
            ? this.updateAxisMotionValue(axis, offset)
            : this.updateVisualElementAxis(axis, point);
    };
    VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!offset || !axisValue)
            return;
        var nextValue = this.originPoint[axis] + offset[axis];
        var update = this.constraints
            ? (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.applyConstraints)(nextValue, this.constraints[axis], this.elastic[axis])
            : nextValue;
        axisValue.set(update);
    };
    VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, point) {
        var _a;
        // Get the actual layout bounding box of the element
        var axisLayout = this.visualElement.getLayoutState().layout[axis];
        // Calculate its current length. In the future we might want to lerp this to animate
        // between lengths if the layout changes as we change the DOM
        var axisLength = axisLayout.max - axisLayout.min;
        // Get the initial progress that the pointer sat on this axis on gesture start.
        var axisProgress = this.cursorProgress[axis];
        // Calculate a new min point based on the latest pointer position, constraints and elastic
        var min = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.calcConstrainedMinPoint)(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
        // Update the axis viewport target with this new min and the length
        this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
    };
    VisualElementDragControls.prototype.setProps = function (_a) {
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? _utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.defaultElastic : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - If the component will perform layout animations, we output the gesture to the component's
     *      visual bounding box
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
        var dragKey = "_drag" + axis.toUpperCase();
        if (this.props[dragKey]) {
            return this.props[dragKey];
        }
        else if (!layout && layoutId === undefined) {
            return this.visualElement.getValue(axis, 0);
        }
    };
    VisualElementDragControls.prototype.isLayoutDrag = function () {
        return !this.getAxisMotionValue("x");
    };
    VisualElementDragControls.prototype.isExternalDrag = function () {
        var _a = this.props, _dragX = _a._dragX, _dragY = _a._dragY;
        return _dragX || _dragY;
    };
    VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
        /**
         * Everything beyond the drag gesture should be performed with
         * relative projection so children stay in sync with their parent element.
         */
        var isRelative = (0,_render_dom_projection_convert_to_relative_js__WEBPACK_IMPORTED_MODULE_15__.convertToRelativeProjection)(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
        /**
         * If we had previously resolved constraints relative to the viewport,
         * we need to also convert those to a relative coordinate space for the animation
         */
        var constraints = this.constraints || {};
        if (isRelative &&
            Object.keys(constraints).length &&
            this.isLayoutDrag()) {
            var projectionParent = this.visualElement.getProjectionParent();
            if (projectionParent) {
                var relativeConstraints_1 = (0,_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_16__.calcRelativeOffset)(projectionParent.projection.targetFinal, constraints);
                (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
                    var _a = relativeConstraints_1[axis], min = _a.min, max = _a.max;
                    constraints[axis] = {
                        min: isNaN(min) ? undefined : min,
                        max: isNaN(max) ? undefined : max,
                    };
                });
            }
        }
        var momentumAnimations = (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
            var _a;
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.getAxisMotionValue(axis)
                ? _this.startAxisValueAnimation(axis, inertia)
                : _this.visualElement.startLayoutAnimation(axis, inertia, isRelative);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            var _a, _b;
            (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    };
    VisualElementDragControls.prototype.stopMotion = function () {
        var _this = this;
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            axisValue
                ? axisValue.stop()
                : _this.visualElement.stopLayoutAnimation();
        });
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!axisValue)
            return;
        var currentValue = axisValue.get();
        axisValue.set(currentValue);
        axisValue.set(currentValue); // Set twice to hard-reset velocity
        return (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_17__.startAnimation)(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
        if (!(0,_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_12__.isRefObject)(dragConstraints) || !this.constraintsBox)
            return;
        // Stop any current animations as there can be some visual glitching if we resize mid animation
        this.stopMotion();
        // Record the relative progress of the targetBox relative to the constraintsBox
        var boxProgress = { x: 0, y: 0 };
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
            boxProgress[axis] = (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_18__.calcOrigin)(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
        });
        /**
         * For each axis, calculate the current progress of the layout axis within the constraints.
         * Then, using the latest layout and constraints measurements, reposition the new layout axis
         * proportionally within the constraints.
         */
        this.updateConstraints(function () {
            (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_7__.eachAxis)(function (axis) {
                if (!shouldDrag(axis, drag, null))
                    return;
                // Calculate the position of the targetBox relative to the constraintsBox using the
                // previously calculated progress
                var _a = (0,_utils_constraints_js__WEBPACK_IMPORTED_MODULE_13__.calcPositionFromProgress)(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
                _this.visualElement.setProjectionTargetAxis(axis, min, max);
            });
        });
        /**
         * If any other draggable components are queuing the same tasks synchronously
         * this will wait until they've all been scheduled before flushing.
         */
        setTimeout(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_4__.flushLayout, 1);
    };
    VisualElementDragControls.prototype.updateConstraints = function (onReady) {
        var _this = this;
        this.cancelLayout = (0,_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_4__.batchLayout)(function (read, write) {
            var ancestors = (0,_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_5__.collectProjectingAncestors)(_this.visualElement);
            write(function () {
                return ancestors.forEach(function (element) { return element.resetTransform(); });
            });
            read(function () { return (0,_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_5__.updateLayoutMeasurement)(_this.visualElement); });
            write(function () {
                return ancestors.forEach(function (element) { return element.restoreTransform(); });
            });
            read(function () {
                _this.resolveDragConstraints();
            });
            if (onReady)
                write(onReady);
        });
    };
    VisualElementDragControls.prototype.mount = function (visualElement) {
        var _this = this;
        var element = visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_19__.addPointerEvent)(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = (0,_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_20__.addDomEvent)(window, "resize", function () {
            _this.scalePoint();
        });
        /**
         * Ensure drag constraints are resolved correctly relative to the dragging element
         * whenever its layout changes.
         */
        var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
            if (_this.isDragging) {
                _this.resolveDragConstraints();
            }
        });
        /**
         * If the previous component with this same layoutId was dragging at the time
         * it was unmounted, we want to continue the same gesture on this component.
         */
        var prevDragCursor = visualElement.prevDragCursor;
        if (prevDragCursor) {
            this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
        }
        /**
         * Return a function that will teardown the drag gesture
         */
        return function () {
            stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
            stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
            stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
            _this.cancelDrag();
        };
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrag": () => (/* binding */ useDrag)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisualElementDragControls.js */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");






/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement = props.visualElement;
    var transformPagePoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__.MotionConfigContext).transformPagePoint;
    var dragControls = (0,_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__.useConstant)(function () {
        return new _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__.VisualElementDragControls({
            visualElement: visualElement,
        });
    });
    dragControls.setProps((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, props), { transformPagePoint: transformPagePoint }));
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    // Mount the drag controls with the visualElement
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return dragControls.mount(visualElement); }, []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyConstraints": () => (/* binding */ applyConstraints),
/* harmony export */   "calcConstrainedMinPoint": () => (/* binding */ calcConstrainedMinPoint),
/* harmony export */   "calcPositionFromProgress": () => (/* binding */ calcPositionFromProgress),
/* harmony export */   "calcRelativeAxisConstraints": () => (/* binding */ calcRelativeAxisConstraints),
/* harmony export */   "calcRelativeConstraints": () => (/* binding */ calcRelativeConstraints),
/* harmony export */   "calcViewportAxisConstraints": () => (/* binding */ calcViewportAxisConstraints),
/* harmony export */   "calcViewportConstraints": () => (/* binding */ calcViewportConstraints),
/* harmony export */   "defaultElastic": () => (/* binding */ defaultElastic),
/* harmony export */   "rebaseAxisConstraints": () => (/* binding */ rebaseAxisConstraints),
/* harmony export */   "resolveAxisElastic": () => (/* binding */ resolveAxisElastic),
/* harmony export */   "resolveDragElastic": () => (/* binding */ resolveDragElastic),
/* harmony export */   "resolvePointElastic": () => (/* binding */ resolvePointElastic)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");



/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculates a min projection point based on a pointer, pointer progress
 * within the drag target, and constraints.
 *
 * For instance if an element was 100px width, we were dragging from 0.25
 * along this axis, the pointer is at 200px, and there were no constraints,
 * we would calculate a min projection point of 175px.
 */
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
    // Calculate a min point for this axis and apply it to the current pointer
    var min = point - length * progress;
    return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)([max, min], 2), min = _a[0], max = _a[1];
    }
    return {
        min: layoutAxis.min + min,
        max: layoutAxis.min + max,
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate the an axis position based on two axes and a progress value.
 */
function calcPositionFromProgress(axis, constraints, progress) {
    var axisLength = axis.max - axis.min;
    var min = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(constraints.min, constraints.max - axisLength, progress);
    return { min: min, max: min + axisLength };
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number"
        ? dragElastic
        : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLock": () => (/* binding */ createLock),
/* harmony export */   "getGlobalLock": () => (/* binding */ getGlobalLock),
/* harmony export */   "isDragActive": () => (/* binding */ isDragActive)
/* harmony export */ });
function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFocusGesture": () => (/* binding */ useFocusGesture)
/* harmony export */ });
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");



/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement = _a.visualElement;
    var onFocus = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, true);
    };
    var onBlur = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, false);
    };
    (0,_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "focus", whileFocus ? onFocus : undefined);
    (0,_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "blur", whileFocus ? onBlur : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHoverGesture": () => (/* binding */ useHoverGesture)
/* harmony export */ });
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag/utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");





function createHoverEvent(visualElement, isActive, callback) {
    return function (event, info) {
        var _a;
        if (!(0,_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__.isMouseEvent)(event) || (0,_drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_1__.isDragActive)())
            return;
        callback === null || callback === void 0 ? void 0 : callback(event, info);
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_2__.AnimationType.Hover, isActive);
    };
}
function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement = _a.visualElement;
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerenter", onHoverStart || whileHover
        ? createHoverEvent(visualElement, true, onHoverStart)
        : undefined);
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerleave", onHoverEnd || whileHover
        ? createHoverEvent(visualElement, false, onHoverEnd)
        : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePanGesture": () => (/* binding */ usePanGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanSession.js */ "./node_modules/framer-motion/dist/es/gestures/PanSession.js");






/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var transformPagePoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__.MotionConfigContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new _PanSession_js__WEBPACK_IMPORTED_MODULE_2__.PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerdown", hasPanEvents && onPointerDown);
    (0,_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_4__.useUnmountEffect)(function () { return panSession.current && panSession.current.end(); });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTapGesture": () => (/* binding */ useTapGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-node-or-child.js */ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag/utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");








/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var cancelPointerEndListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    function removePointerEndListener() {
        var _a;
        (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        var _a;
        removePointerEndListener();
        isPressing.current = false;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, false);
        return !(0,_drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_2__.isDragActive)();
    }
    function onPointerUp(event, info) {
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !(0,_utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_3__.isNodeOrChild)(visualElement.getInstance(), event.target)
            ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info)
            : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
        if (!checkPointerEnd())
            return;
        onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
        var _a;
        removePointerEndListener();
        if (isPressing.current)
            return;
        isPressing.current = true;
        cancelPointerEndListeners.current = (0,popmotion__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointerup", onPointerUp), (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointercancel", onPointerCancel));
        onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, true);
    }
    (0,_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__.usePointerEvent)(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined);
    (0,_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_6__.useUnmountEffect)(removePointerEndListener);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/event-type.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMouseEvent": () => (/* binding */ isMouseEvent),
/* harmony export */   "isTouchEvent": () => (/* binding */ isTouchEvent)
/* harmony export */ });
function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeOrChild": () => (/* binding */ isNodeOrChild)
/* harmony export */ });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animations.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animations": () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/animation-state.js */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");









var animations = {
    animation: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (_a) {
        var visualElement = _a.visualElement, animate = _a.animate;
        /**
         * We dynamically generate the AnimationState manager as it contains a reference
         * to the underlying animation library. We only want to load that if we load this,
         * so people can optionally code split it out using the `m` component.
         */
        visualElement.animationState || (visualElement.animationState = (0,_render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_2__.createAnimationState)(visualElement));
        /**
         * Subscribe any provided AnimationControls to the component's VisualElement
         */
        if ((0,_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_3__.isAnimationControls)(animate)) {
            (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return animate.subscribe(visualElement); }, [animate]);
        }
    }),
    exit: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (props) {
        var custom = props.custom, visualElement = props.visualElement;
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_5__.usePresence)(), 2), isPresent = _a[0], onExitComplete = _a[1];
        var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_6__.PresenceContext);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            var _a, _b;
            var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
            !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(onExitComplete));
        }, [isPresent]);
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/definitions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featureDefinitions": () => (/* binding */ featureDefinitions),
/* harmony export */   "loadFeatures": () => (/* binding */ loadFeatures)
/* harmony export */ });
var createDefinition = function (propNames) { return ({
    isEnabled: function (props) { return propNames.some(function (name) { return !!props[name]; }); },
}); };
var featureDefinitions = {
    measureLayout: createDefinition([
        "layout",
        "layoutId",
        "drag",
        "_layoutResetTransform",
    ]),
    animation: createDefinition([
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
    ]),
    layoutAnimation: createDefinition(["layout", "layoutId"]),
};
function loadFeatures(features) {
    for (var key in features) {
        var Component = features[key];
        if (Component !== null)
            featureDefinitions[key].Component = Component;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/drag.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/drag/use-drag.js */ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js");
/* harmony import */ var _gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-pan-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");




var drag = {
    pan: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__.usePanGesture),
    drag: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_2__.useDrag),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/gestures.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gestureAnimations": () => (/* binding */ gestureAnimations)
/* harmony export */ });
/* harmony import */ var _gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/use-focus-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js");
/* harmony import */ var _gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestures/use-hover-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js");
/* harmony import */ var _gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-tap-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");





var gestureAnimations = {
    tap: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_1__.useTapGesture),
    focus: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_2__.useFocusGesture),
    hover: (0,_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_3__.useHoverGesture),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateLayoutContextProvider": () => (/* binding */ AnimateLayoutContextProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AnimateSharedLayout/types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../render/dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../render/dom/projection/default-scale-correctors.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js");











var progressTarget = 1000;
var Animate = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Animate, _super);
    function Animate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A mutable object that tracks the target viewport box
         * for the current animation frame.
         */
        _this.frameTarget = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.axisBox)();
        /**
         * The current animation target, we use this to check whether to start
         * a new animation or continue the existing one.
         */
        _this.currentAnimationTarget = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.axisBox)();
        /**
         * Track whether we're animating this axis.
         */
        _this.isAnimating = {
            x: false,
            y: false,
        };
        _this.stopAxisAnimation = {
            x: undefined,
            y: undefined,
        };
        _this.isAnimatingTree = false;
        _this.animate = function (target, origin, _a) {
            if (_a === void 0) { _a = {}; }
            var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, shouldStackAnimate = _a.shouldStackAnimate, onComplete = _a.onComplete, prevParent = _a.prevParent, config = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]);
            var _b = _this.props, visualElement = _b.visualElement, layout = _b.layout;
            /**
             * Early return if we've been instructed not to animate this render.
             */
            if (shouldStackAnimate === false) {
                _this.isAnimatingTree = false;
                return _this.safeToRemove();
            }
            /**
             * Prioritise tree animations
             */
            if (_this.isAnimatingTree && shouldStackAnimate !== true) {
                return;
            }
            else if (shouldStackAnimate) {
                _this.isAnimatingTree = true;
            }
            /**
             * Allow the measured origin (prev bounding box) and target (actual layout) to be
             * overridden by the provided config.
             */
            origin = originBox || origin;
            target = targetBox || target;
            /**
             * If this element has a projecting parent, there's an opportunity to animate
             * it relatively to that parent rather than relatively to the viewport. This
             * allows us to add orchestrated animations.
             */
            var isRelative = false;
            var projectionParent = visualElement.getProjectionParent();
            if (projectionParent) {
                var prevParentViewportBox = projectionParent.prevViewportBox;
                var parentLayout = projectionParent.getLayoutState().layout;
                /**
                 * If we're being provided a previous parent VisualElement by AnimateSharedLayout
                 */
                if (prevParent) {
                    /**
                     * If we've been provided an explicit target box it means we're animating back
                     * to this previous parent. So we can make a relative box by comparing to the previous
                     * parent's layout
                     */
                    if (targetBox) {
                        parentLayout = prevParent.getLayoutState().layout;
                    }
                    /**
                     * Likewise if we've been provided an explicit origin box it means we're
                     * animating out from a different element. So we should figure out where that was
                     * on screen relative to the new parent element.
                     */
                    if (originBox &&
                        !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.checkIfParentHasChanged)(prevParent, projectionParent) &&
                        prevParent.prevViewportBox) {
                        prevParentViewportBox = prevParent.prevViewportBox;
                    }
                }
                if (prevParentViewportBox &&
                    isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox)) {
                    isRelative = true;
                    origin = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.calcRelativeOffset)(prevParentViewportBox, origin);
                    target = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.calcRelativeOffset)(parentLayout, target);
                }
            }
            var boxHasMoved = hasMoved(origin, target);
            var animations = (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                var _a, _b;
                /**
                 * If layout is set to "position", we can resize the origin box based on the target
                 * box and only animate its position.
                 */
                if (layout === "position") {
                    var targetLength = target[axis].max - target[axis].min;
                    origin[axis].max = origin[axis].min + targetLength;
                }
                if (visualElement.projection.isTargetLocked) {
                    return;
                }
                else if (visibilityAction !== undefined) {
                    visualElement.setVisibility(visibilityAction === _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__.VisibilityAction.Show);
                }
                else if (boxHasMoved) {
                    // If the box has moved, animate between it's current visual state and its
                    // final state
                    return _this.animateAxis(axis, target[axis], origin[axis], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, config), { isRelative: isRelative }));
                }
                else {
                    (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a);
                    // If the box has remained in the same place, immediately set the axis target
                    // to the final desired state
                    return visualElement.setProjectionTargetAxis(axis, target[axis].min, target[axis].max, isRelative);
                }
            });
            // Force a render to ensure there's no flash of uncorrected bounding box.
            visualElement.syncRender();
            /**
             * If this visualElement isn't present (ie it's been removed from the tree by the user but
             * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
             * have successfully finished.
             */
            return Promise.all(animations).then(function () {
                _this.isAnimatingTree = false;
                onComplete && onComplete();
                visualElement.notifyLayoutAnimationComplete();
            });
        };
        return _this;
    }
    Animate.prototype.componentDidMount = function () {
        var _this = this;
        var visualElement = this.props.visualElement;
        visualElement.animateMotionValue = _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__.startAnimation;
        visualElement.enableLayoutProjection();
        this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
        visualElement.layoutSafeToRemove = function () { return _this.safeToRemove(); };
        (0,_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_7__.addScaleCorrection)(_render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_8__.defaultScaleCorrectors);
    };
    Animate.prototype.componentWillUnmount = function () {
        var _this = this;
        this.unsubLayoutReady();
        (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) { var _a, _b; return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a); });
    };
    /**
     * TODO: This manually performs animations on the visualElement's layout progress
     * values. It'd be preferable to amend the startLayoutAxisAnimation
     * API to accept more custom animations like this.
     */
    Animate.prototype.animateAxis = function (axis, target, origin, _a) {
        var _this = this;
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, transition = _d.transition, isRelative = _d.isRelative;
        /**
         * If we're not animating to a new target, don't run this animation
         */
        if (this.isAnimating[axis] &&
            axisIsEqual(target, this.currentAnimationTarget[axis])) {
            return;
        }
        (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
        this.isAnimating[axis] = true;
        var visualElement = this.props.visualElement;
        var frameTarget = this.frameTarget[axis];
        var layoutProgress = visualElement.getProjectionAnimationProgress()[axis];
        /**
         * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
         * be re-incoporated into a subsequent spring animation.
         */
        layoutProgress.clearListeners();
        layoutProgress.set(0);
        layoutProgress.set(0);
        /**
         * Create an animation function to run once per frame. This will tween the visual bounding box from
         * origin to target using the latest progress value.
         */
        var frame = function () {
            // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
            var p = layoutProgress.get() / progressTarget;
            // Tween the axis and update the visualElement with the latest values
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.tweenAxis)(frameTarget, origin, target, p);
            visualElement.setProjectionTargetAxis(axis, frameTarget.min, frameTarget.max, isRelative);
        };
        // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
        frame();
        // Create a function to stop animation on this specific axis
        var unsubscribeProgress = layoutProgress.onChange(frame);
        this.stopAxisAnimation[axis] = function () {
            _this.isAnimating[axis] = false;
            layoutProgress.stop();
            unsubscribeProgress();
        };
        this.currentAnimationTarget[axis] = target;
        var layoutTransition = transition ||
            visualElement.getDefaultTransition() ||
            defaultLayoutTransition;
        // Start the animation on this axis
        var animation = (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__.startAnimation)(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, layoutTransition && (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_6__.getValueTransition)(layoutTransition, "layout")).then(this.stopAxisAnimation[axis]);
        return animation;
    };
    Animate.prototype.safeToRemove = function () {
        var _a, _b;
        (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Animate.prototype.render = function () {
        return null;
    };
    return Animate;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
function AnimateLayoutContextProvider(props) {
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_9__.usePresence)(), 2), safeToRemove = _a[1];
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animate, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, props, { safeToRemove: safeToRemove }));
}
function hasMoved(a, b) {
    return (!isZeroBox(a) &&
        !isZeroBox(b) &&
        (!axisIsEqual(a.x, b.x) || !axisIsEqual(a.y, b.y)));
}
var zeroAxis = { min: 0, max: 0 };
function isZeroBox(a) {
    return axisIsEqual(a.x, zeroAxis) && axisIsEqual(a.y, zeroAxis);
}
function axisIsEqual(a, b) {
    return a.min === b.min && a.max === b.max;
}
var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox) {
    return prevParent || (!prevParent && !(originBox || targetBox));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeasureContextProvider": () => (/* binding */ MeasureContextProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SharedLayoutContext.js */ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");





/**
 * This component is responsible for scheduling the measuring of the motion component
 */
var Measure = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Measure, _super);
    function Measure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * If this is a child of a SyncContext, register the VisualElement with it on mount.
     */
    Measure.prototype.componentDidMount = function () {
        var _a = this.props, syncLayout = _a.syncLayout, framerSyncLayout = _a.framerSyncLayout, visualElement = _a.visualElement;
        (0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout) && syncLayout.register(visualElement);
        (0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(framerSyncLayout) &&
            framerSyncLayout.register(visualElement);
        visualElement.onUnmount(function () {
            if ((0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout)) {
                syncLayout.remove(visualElement);
            }
            if ((0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(framerSyncLayout)) {
                framerSyncLayout.remove(visualElement);
            }
        });
    };
    /**
     * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
     * handle the snapshotting.
     *
     * If it is stand-alone component, add it to the batcher.
     */
    Measure.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if ((0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout)) {
            syncLayout.syncUpdate();
        }
        else {
            (0,_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__.snapshotViewportBox)(visualElement);
            syncLayout.add(visualElement);
        }
        return null;
    };
    Measure.prototype.componentDidUpdate = function () {
        var syncLayout = this.props.syncLayout;
        if (!(0,_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.isSharedLayout)(syncLayout))
            syncLayout.flush();
    };
    Measure.prototype.render = function () {
        return null;
    };
    return Measure;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component)));
function MeasureContextProvider(props) {
    var syncLayout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.SharedLayoutContext);
    var framerSyncLayout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__.FramerTreeLayoutContext);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Measure, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, props, { syncLayout: syncLayout, framerSyncLayout: framerSyncLayout })));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layoutAnimations": () => (/* binding */ layoutAnimations)
/* harmony export */ });
/* harmony import */ var _Animate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animate.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js");
/* harmony import */ var _Measure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Measure.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js");



var layoutAnimations = {
    measureLayout: _Measure_js__WEBPACK_IMPORTED_MODULE_0__.MeasureContextProvider,
    layoutAnimation: _Animate_js__WEBPACK_IMPORTED_MODULE_1__.AnimateLayoutContextProvider,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/utils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcRelativeOffset": () => (/* binding */ calcRelativeOffset),
/* harmony export */   "calcRelativeOffsetAxis": () => (/* binding */ calcRelativeOffsetAxis),
/* harmony export */   "checkIfParentHasChanged": () => (/* binding */ checkIfParentHasChanged),
/* harmony export */   "tweenAxis": () => (/* binding */ tweenAxis)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");


function tweenAxis(target, prev, next, p) {
    target.min = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(prev.min, next.min, p);
    target.max = (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(prev.max, next.max, p);
}
function calcRelativeOffsetAxis(parent, child) {
    return {
        min: child.min - parent.min,
        max: child.max - parent.min,
    };
}
function calcRelativeOffset(parent, child) {
    return {
        x: calcRelativeOffsetAxis(parent.x, child.x),
        y: calcRelativeOffsetAxis(parent.y, child.y),
    };
}
function checkIfParentHasChanged(prev, next) {
    var prevId = prev.getLayoutId();
    var nextId = next.getLayoutId();
    return prevId !== nextId || (nextId === undefined && prev !== next);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-features.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/use-features.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFeatures": () => (/* binding */ useFeatures)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.js */ "./node_modules/framer-motion/dist/es/motion/features/definitions.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LazyContext.js */ "./node_modules/framer-motion/dist/es/context/LazyContext.js");







var featureNames = Object.keys(_definitions_js__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */
function useFeatures(props, visualElement, preloadedFeatures) {
    var features = [];
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__.LazyContext);
    if (!visualElement)
        return null;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if ( true &&
        preloadedFeatures &&
        lazyContext.strict) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (var i = 0; i < numFeatures; i++) {
        var name_1 = featureNames[i];
        var _a = _definitions_js__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
        /**
         * It might be possible in the future to use this moment to
         * dynamically request functionality. In initial tests this
         * was producing a lot of duplication amongst bundles.
         */
        if (isEnabled(props) && Component) {
            features.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ key: name_1 }, props, { visualElement: visualElement })));
        }
    }
    return features;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/index.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionComponent": () => (/* binding */ createMotionComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_use_features_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/use-features.js */ "./node_modules/framer-motion/dist/es/motion/features/use-features.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/use-visual-element.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js");
/* harmony import */ var _utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/use-motion-ref.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js");
/* harmony import */ var _context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionContext/create.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/create.js");
/* harmony import */ var _features_definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/definitions.js */ "./node_modules/framer-motion/dist/es/motion/features/definitions.js");
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");











/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && (0,_features_definitions_js__WEBPACK_IMPORTED_MODULE_1__.loadFeatures)(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we're rendering in a static environment, we only visually update the component
         * as a result of a React-rerender rather than interactions or animations. This
         * means we don't need to load additional memory structures like VisualElement,
         * or any gesture/animation features.
         */
        var isStatic = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__.MotionConfigContext).isStatic;
        var features = null;
        /**
         * Create the tree context. This is memoized and will only trigger renders
         * when the current tree variant changes in static mode.
         */
        var context = (0,_context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_3__.useCreateMotionContext)(props, isStatic);
        /**
         *
         */
        var visualState = useVisualState(props, isStatic);
        if (!isStatic && _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_4__.isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = (0,_utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_5__.useVisualElement)(Component, visualState, props, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             *
             * TODO: The intention is to move these away from a React-centric to a
             * VisualElement-centric lifecycle scheme.
             */
            features = (0,_features_use_features_js__WEBPACK_IMPORTED_MODULE_6__.useFeatures)(props, context.visualElement, preloadedFeatures);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__.MotionContext.Provider, { value: context }, useRender(Component, props, (0,_utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_8__.useMotionRef)(visualState, context.visualElement, externalRef), visualState, isStatic)),
            features));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MotionComponent);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isForcedMotionValue": () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");



function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return ((0,_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key) ||
        (0,_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__.isTransformOriginProp)(key) ||
        ((layout || layoutId !== undefined) &&
            (!!_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_1__.valueScaleCorrection[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeRenderlessComponent": () => (/* binding */ makeRenderlessComponent)
/* harmony export */ });
var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMotionRef": () => (/* binding */ useMotionRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (instance) {
        var _a;
        instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if ((0,_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__.isRefObject)(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVisualElement": () => (/* binding */ useVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/LayoutGroupContext.js */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LazyContext.js */ "./node_modules/framer-motion/dist/es/context/LazyContext.js");










function useLayoutId(_a) {
    var layoutId = _a.layoutId;
    var layoutGroupId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_1__.LayoutGroupContext);
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}
function useVisualElement(Component, visualState, props, createVisualElement) {
    var config = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__.MotionConfigContext);
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_3__.LazyContext);
    var parent = (0,_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_4__.useVisualElementContext)();
    var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_5__.PresenceContext);
    var layoutId = useLayoutId(props);
    var visualElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    if (!createVisualElement)
        createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState: visualState,
            parent: parent,
            props: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, props), { layoutId: layoutId }),
            presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
            blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
        });
    }
    var visualElement = visualElementRef.current;
    (0,_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsomorphicLayoutEffect)(function () {
        if (!visualElement)
            return;
        visualElement.setProps((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, config), props), { layoutId: layoutId }));
        visualElement.isPresent = (0,_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_8__.isPresent)(presenceContext);
        visualElement.isPresenceRoot =
            !parent || parent.presenceId !== (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id);
        /**
         * Fire a render to ensure the latest state is reflected on-screen.
         */
        visualElement.syncRender();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var _a;
        if (!visualElement)
            return;
        /**
         * In a future refactor we can replace the features-as-components and
         * have this loop through them all firing "effect" listeners
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    (0,_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsomorphicLayoutEffect)(function () { return function () { return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount(); }; }, []);
    return visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUseVisualState": () => (/* binding */ makeUseVisualState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");
/* harmony import */ var _value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");









function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = function (instance) { return onMount(props, instance, state); };
    }
    return state;
}
var makeUseVisualState = function (config) { return function (props, isStatic) {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
    var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__.PresenceContext);
    return isStatic
        ? makeState(config, props, context, presenceContext)
        : (0,_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__.useConstant)(function () { return makeState(config, props, context, presenceContext); });
}; };
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
        values[key] = (0,_value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_4__.resolveMotionValue)(motionValues[key]);
    }
    var initial = props.initial, animate = props.animate;
    var isControllingVariants = (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__.checkIfControllingVariants)(props);
    var isVariantNode = (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__.checkIfVariantNode)(props);
    if (context &&
        isVariantNode &&
        !isControllingVariants &&
        props.inherit !== false) {
        initial !== null && initial !== void 0 ? initial : (initial = context.initial);
        animate !== null && animate !== void 0 ? animate : (animate = context.animate);
    }
    var variantToSet = blockInitialAnimation || initial === false ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !(0,_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_6__.isAnimationControls)(variantToSet)) {
        var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach(function (definition) {
            var resolved = (0,_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_5__.resolveVariantFromProps)(props, definition);
            if (!resolved)
                return;
            var transitionEnd = resolved.transitionEnd; resolved.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(resolved, ["transitionEnd", "transition"]);
            for (var key in target)
                values[key] = target[key];
            for (var key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidMotionProp": () => (/* binding */ isValidMotionProp)
/* harmony export */ });
/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "_layoutResetTransform",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomVisualElement": () => (/* binding */ createDomVisualElement)
/* harmony export */ });
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.js */ "./node_modules/framer-motion/dist/es/render/html/visual-element.js");
/* harmony import */ var _svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/visual-element.js */ "./node_modules/framer-motion/dist/es/render/svg/visual-element.js");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");




var createDomVisualElement = function (Component, options) {
    return (0,_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? (0,_svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__.svgVisualElement)(options, { enableHardwareAcceleration: false })
        : (0,_html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__.htmlVisualElement)(options, { enableHardwareAcceleration: true });
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionProxy": () => (/* binding */ createMotionProxy)
/* harmony export */ });
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/index.js */ "./node_modules/framer-motion/dist/es/motion/index.js");


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
        if (customMotionComponentConfig === void 0) { customMotionComponentConfig = {}; }
        return (0,_motion_index_js__WEBPACK_IMPORTED_MODULE_0__.createMotionComponent)(createConfig(Component, customMotionComponentConfig));
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    var componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: function (_target, key) {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionComponent": () => (/* binding */ createDomMotionComponent),
/* harmony export */   "motion": () => (/* binding */ motion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../motion/index.js */ "./node_modules/framer-motion/dist/es/motion/index.js");
/* harmony import */ var _motion_proxy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motion-proxy.js */ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js");
/* harmony import */ var _utils_create_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/create-config.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js");
/* harmony import */ var _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/features/gestures.js */ "./node_modules/framer-motion/dist/es/motion/features/gestures.js");
/* harmony import */ var _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/animations.js */ "./node_modules/framer-motion/dist/es/motion/features/animations.js");
/* harmony import */ var _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../motion/features/drag.js */ "./node_modules/framer-motion/dist/es/motion/features/drag.js");
/* harmony import */ var _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../motion/features/layout/index.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js");
/* harmony import */ var _create_visual_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-visual-element.js */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js");










var featureBundle = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_1__.animations), _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_2__.gestureAnimations), _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_3__.drag), _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_4__.layoutAnimations);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ (0,_motion_proxy_js__WEBPACK_IMPORTED_MODULE_5__.createMotionProxy)(function (Component, config) {
    return (0,_utils_create_config_js__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(Component, config, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement);
});
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return (0,_motion_index_js__WEBPACK_IMPORTED_MODULE_8__.createMotionComponent)((0,_utils_create_config_js__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(key, { forwardMotionProps: false }, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/convert-to-relative.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/convert-to-relative.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToRelativeProjection": () => (/* binding */ convertToRelativeProjection)
/* harmony export */ });
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/features/layout/utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");




/**
 * Returns a boolean stating whether or not we converted the projection
 * to relative projection.
 */
function convertToRelativeProjection(visualElement, isLayoutDrag) {
    if (isLayoutDrag === void 0) { isLayoutDrag = true; }
    var projectionParent = visualElement.getProjectionParent();
    if (!projectionParent)
        return false;
    var offset;
    if (isLayoutDrag) {
        offset = (0,_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__.calcRelativeOffset)(projectionParent.projection.target, visualElement.projection.target);
        (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_1__.removeBoxTransforms)(offset, projectionParent.getLatestValues());
    }
    else {
        offset = (0,_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__.calcRelativeOffset)(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
    }
    (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__.eachAxis)(function (axis) {
        return visualElement.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
    });
    return true;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctBorderRadius": () => (/* binding */ correctBorderRadius),
/* harmony export */   "correctBoxShadow": () => (/* binding */ correctBoxShadow),
/* harmony export */   "defaultScaleCorrectors": () => (/* binding */ defaultScaleCorrectors),
/* harmony export */   "pixelsToPercent": () => (/* binding */ pixelsToPercent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css-variables-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js");





function pixelsToPercent(pixels, axis) {
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
function correctBorderRadius(latest, _layoutState, _a) {
    var target = _a.target;
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */
    if (typeof latest === "string") {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.test(latest)) {
            latest = parseFloat(latest);
        }
        else {
            return latest;
        }
    }
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    var x = pixelsToPercent(latest, target.x);
    var y = pixelsToPercent(latest, target.y);
    return x + "% " + y + "%";
}
var varToken = "_$css";
function correctBoxShadow(latest, _a) {
    var delta = _a.delta, treeScale = _a.treeScale;
    var original = latest;
    /**
     * We need to first strip and store CSS variables from the string.
     */
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
        latest = latest.replace(_utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_1__.cssVariableRegex, function (match) {
            cssVariables.push(match);
            return varToken;
        });
    }
    var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex.parse(latest);
    // TODO: Doesn't support multiple shadows
    if (shadow.length > 5)
        return original;
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    // Calculate the overall context scale
    var xScale = delta.x.scale * treeScale.x;
    var yScale = delta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    var averageScale = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.mix)(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
    // Spread
    if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function () {
            var cssVariable = cssVariables[i_1];
            i_1++;
            return cssVariable;
        });
    }
    return output;
}
var borderCorrectionDefinition = {
    process: correctBorderRadius,
};
var defaultScaleCorrectors = {
    borderRadius: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, borderCorrectionDefinition), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: borderCorrectionDefinition,
    borderTopRightRadius: borderCorrectionDefinition,
    borderBottomLeftRadius: borderCorrectionDefinition,
    borderBottomRightRadius: borderCorrectionDefinition,
    boxShadow: {
        process: correctBoxShadow,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/measure.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoundingBox": () => (/* binding */ getBoundingBox)
/* harmony export */ });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");


/**
 * Measure and return the element bounding box.
 *
 * We convert the box into an AxisBox2D to make it easier to work with each axis
 * individually and programmatically.
 *
 * This function optionally accepts a transformPagePoint function which allows us to compensate
 * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
 */
function getBoundingBox(element, transformPagePoint) {
    var box = element.getBoundingClientRect();
    return (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToAxisBox)((0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.transformBoundingBox)(box, transformPagePoint));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/relative-set.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/relative-set.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentViewportBox": () => (/* binding */ setCurrentViewportBox)
/* harmony export */ });
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/features/layout/utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");



function setCurrentViewportBox(visualElement) {
    var projectionParent = visualElement.getProjectionParent();
    if (!projectionParent) {
        visualElement.rebaseProjectionTarget();
        return;
    }
    var relativeOffset = (0,_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__.calcRelativeOffset)(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
    (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__.eachAxis)(function (axis) {
        visualElement.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScaleCorrection": () => (/* binding */ addScaleCorrection),
/* harmony export */   "valueScaleCorrection": () => (/* binding */ valueScaleCorrection)
/* harmony export */ });
var valueScaleCorrection = {};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
    for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectProjectingAncestors": () => (/* binding */ collectProjectingAncestors),
/* harmony export */   "collectProjectingChildren": () => (/* binding */ collectProjectingChildren),
/* harmony export */   "snapshotViewportBox": () => (/* binding */ snapshotViewportBox),
/* harmony export */   "updateLayoutMeasurement": () => (/* binding */ updateLayoutMeasurement)
/* harmony export */ });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");




function isProjecting(visualElement) {
    var isEnabled = visualElement.projection.isEnabled;
    return isEnabled || visualElement.shouldResetTransform();
}
function collectProjectingAncestors(visualElement, ancestors) {
    if (ancestors === void 0) { ancestors = []; }
    var parent = visualElement.parent;
    if (parent)
        collectProjectingAncestors(parent, ancestors);
    if (isProjecting(visualElement))
        ancestors.push(visualElement);
    return ancestors;
}
function collectProjectingChildren(visualElement) {
    var children = [];
    var addChild = function (child) {
        if (isProjecting(child))
            children.push(child);
        child.children.forEach(addChild);
    };
    visualElement.children.forEach(addChild);
    return children.sort(_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
}
/**
 * Update the layoutState by measuring the DOM layout. This
 * should be called after resetting any layout-affecting transforms.
 */
function updateLayoutMeasurement(visualElement) {
    if (visualElement.shouldResetTransform())
        return;
    var layoutState = visualElement.getLayoutState();
    visualElement.notifyBeforeLayoutMeasure(layoutState.layout);
    layoutState.isHydrated = true;
    layoutState.layout = visualElement.measureViewportBox();
    layoutState.layoutCorrected = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_2__.copyAxisBox)(layoutState.layout);
    visualElement.notifyLayoutMeasure(layoutState.layout, visualElement.prevViewportBox || layoutState.layout);
    framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(function () { return visualElement.rebaseProjectionTarget(); });
}
/**
 * Record the viewport box as it was before an expected mutation/re-render
 */
function snapshotViewportBox(visualElement) {
    if (visualElement.shouldResetTransform())
        return;
    visualElement.prevViewportBox = visualElement.measureViewportBox(false);
    /**
     * Update targetBox to match the prevViewportBox. This is just to ensure
     * that targetBox is affected by scroll in the same way as the measured box
     */
    visualElement.rebaseProjectionTarget(false, visualElement.prevViewportBox);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/use-render.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUseRender": () => (/* binding */ createUseRender)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/use-props.js */ "./node_modules/framer-motion/dist/es/render/html/use-props.js");
/* harmony import */ var _utils_filter_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/filter-props.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");
/* harmony import */ var _svg_use_props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/use-props.js */ "./node_modules/framer-motion/dist/es/render/svg/use-props.js");







function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) { forwardMotionProps = false; }
    var useRender = function (Component, props, ref, _a, isStatic) {
        var latestValues = _a.latestValues;
        var useVisualProps = (0,_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__.isSVGComponent)(Component)
            ? _svg_use_props_js__WEBPACK_IMPORTED_MODULE_2__.useSVGProps
            : _html_use_props_js__WEBPACK_IMPORTED_MODULE_3__.useHTMLProps;
        var visualProps = useVisualProps(props, latestValues, isStatic);
        var filteredProps = (0,_utils_filter_props_js__WEBPACK_IMPORTED_MODULE_4__.filterProps)(props, typeof Component === "string", forwardMotionProps);
        var elementProps = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, filteredProps), visualProps), { ref: ref });
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, elementProps);
    };
    return useRender;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "batchLayout": () => (/* binding */ batchLayout),
/* harmony export */   "flushLayout": () => (/* binding */ flushLayout)
/* harmony export */ });
var unresolvedJobs = new Set();
function pushJob(stack, job, pointer) {
    if (!stack[pointer])
        stack[pointer] = [];
    stack[pointer].push(job);
}
function batchLayout(callback) {
    unresolvedJobs.add(callback);
    return function () { return unresolvedJobs.delete(callback); };
}
function flushLayout() {
    if (!unresolvedJobs.size)
        return;
    var pointer = 0;
    var reads = [[]];
    var writes = [];
    var setRead = function (job) { return pushJob(reads, job, pointer); };
    var setWrite = function (job) {
        pushJob(writes, job, pointer);
        pointer++;
    };
    /**
     * Resolve jobs into their array stacks
     */
    unresolvedJobs.forEach(function (callback) {
        callback(setRead, setWrite);
        pointer = 0;
    });
    unresolvedJobs.clear();
    /**
     * Execute jobs
     */
    var numStacks = writes.length;
    for (var i = 0; i <= numStacks; i++) {
        reads[i] && reads[i].forEach(executeJob);
        writes[i] && writes[i].forEach(executeJob);
    }
}
var executeJob = function (job) { return job(); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelToDash": () => (/* binding */ camelToDash)
/* harmony export */ });
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionConfig": () => (/* binding */ createDomMotionConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");
/* harmony import */ var _use_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../use-render.js */ "./node_modules/framer-motion/dist/es/render/dom/use-render.js");
/* harmony import */ var _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/config-motion.js */ "./node_modules/framer-motion/dist/es/render/svg/config-motion.js");
/* harmony import */ var _html_config_motion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/config-motion.js */ "./node_modules/framer-motion/dist/es/render/html/config-motion.js");






function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = (0,_is_svg_component_js__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_1__.svgMotionConfig
        : _html_config_motion_js__WEBPACK_IMPORTED_MODULE_2__.htmlMotionConfig;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, baseConfig), { preloadedFeatures: preloadedFeatures, useRender: (0,_use_render_js__WEBPACK_IMPORTED_MODULE_4__.createUseRender)(forwardMotionProps), createVisualElement: createVisualElement,
        Component: Component });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssVariableRegex": () => (/* binding */ cssVariableRegex),
/* harmony export */   "parseCSSVariable": () => (/* binding */ parseCSSVariable),
/* harmony export */   "resolveCSSVariables": () => (/* binding */ resolveCSSVariables)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");



function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterProps": () => (/* binding */ filterProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.js */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js");


var shouldForward = function (key) { return !(0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = (__webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js")["default"]);
    shouldForward = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !(0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
        if (shouldForward(key) ||
            (forwardMotionProps === true && (0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            (!isDom && !(0,_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCSSVariable": () => (/* binding */ isCSSVariable)
/* harmony export */ });
/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSVGComponent": () => (/* binding */ isSVGComponent)
/* harmony export */ });
/* harmony import */ var _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.js */ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js");


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__.lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDomVariant": () => (/* binding */ parseDomVariant)
/* harmony export */ });
/* harmony import */ var _css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js");
/* harmony import */ var _unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js");



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = (0,_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__.resolveCSSVariables)(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return (0,_unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__.unitConversion)(visualElement, target, origin, transitionEnd);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBoxDimension": () => (/* binding */ BoundingBoxDimension),
/* harmony export */   "unitConversion": () => (/* binding */ unitConversion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value-types/dimensions.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js");







var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_1__.number || v === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px;
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__.transformProps.filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.syncRender();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var x = _a.x;
        return x.max - x.min;
    },
    height: function (_a) {
        var y = _a.y;
        return y.max - y.min;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.measureViewportBox();
    var element = visualElement.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.syncRender();
    var targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, target);
    transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var to = target[key];
        var fromType = (0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if ((0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_6__.isKeyframesTarget)(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = (0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]);
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)((0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = (0,_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.syncRender();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnimatableNone": () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");



function getAnimatableNone(key, value) {
    var _a;
    var defaultValueType = (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== style_value_types__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValueTypes": () => (/* binding */ defaultValueTypes),
/* harmony export */   "getDefaultValueType": () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js");




/**
 * A map of default value types for common values
 */
var defaultValueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _number_js__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes), { 
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, fill: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, stroke: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, 
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, filter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter, WebkitFilter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter });
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dimensionValueTypes": () => (/* binding */ dimensionValueTypes),
/* harmony export */   "findDimensionValueType": () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js");
/* harmony import */ var _type_auto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js");




/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__.number, style_value_types__WEBPACK_IMPORTED_MODULE_1__.px, style_value_types__WEBPACK_IMPORTED_MODULE_1__.percent, style_value_types__WEBPACK_IMPORTED_MODULE_1__.degrees, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vw, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_js__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find((0,_test_js__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/find.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findValueType": () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensions.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js");





/**
 * A list of all ValueTypes
 */
var valueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_dimensions_js__WEBPACK_IMPORTED_MODULE_1__.dimensionValueTypes)), [style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, style_value_types__WEBPACK_IMPORTED_MODULE_3__.complex]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find((0,_test_js__WEBPACK_IMPORTED_MODULE_4__.testValueType)(v)); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueAsType": () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberValueTypes": () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _type_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js");



var numberValueTypes = {
    // Border props
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    height: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    size: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    top: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    right: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    left: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    x: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    y: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    z: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    zIndex: _type_int_js__WEBPACK_IMPORTED_MODULE_2__.int,
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    numOctaves: _type_int_js__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/test.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testValueType": () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auto": () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "int": () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.js");



var int = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__.number), { transform: Math.round });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/config-motion.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlMotionConfig": () => (/* binding */ htmlMotionConfig)
/* harmony export */ });
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");




var htmlMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__.createHtmlRenderState,
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/use-props.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyRawValuesOnly": () => (/* binding */ copyRawValuesOnly),
/* harmony export */   "useHTMLProps": () => (/* binding */ useHTMLProps),
/* harmony export */   "useStyle": () => (/* binding */ useStyle)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.js */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");







function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
        if (!(0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(source[key]) && !(0,_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__.isForcedMotionValue)(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__.createHtmlRenderState)();
        (0,_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__.buildHTMLStyles)(state, visualState, undefined, undefined, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        var vars = state.vars, style = state.style;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, vars), style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
        style = props.transformValues(style);
    }
    return style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag)) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout =
            "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : "pan-" + (props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildLayoutProjectionTransform": () => (/* binding */ buildLayoutProjectionTransform),
/* harmony export */   "buildLayoutProjectionTransformOrigin": () => (/* binding */ buildLayoutProjectionTransformOrigin),
/* harmony export */   "identityProjection": () => (/* binding */ identityProjection)
/* harmony export */ });
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/state.js */ "./node_modules/framer-motion/dist/es/render/utils/state.js");


/**
 * Build a transform style that takes a calculated delta between the element's current
 * space on screen and projects it into the desired space.
 */
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
    var x = _a.x, y = _a.y;
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = x.translate / treeScale.x;
    var yTranslate = y.translate / treeScale.y;
    var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
    if (latestTransform) {
        var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
        if (rotate)
            transform += "rotate(" + rotate + ") ";
        if (rotateX)
            transform += "rotateX(" + rotateX + ") ";
        if (rotateY)
            transform += "rotateY(" + rotateY + ") ";
    }
    transform += "scale(" + x.scale + ", " + y.scale + ")";
    return !latestTransform && transform === identityProjection ? "" : transform;
}
/**
 * Take the calculated delta origin and apply it as a transform string.
 */
function buildLayoutProjectionTransformOrigin(_a) {
    var deltaFinal = _a.deltaFinal;
    return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(_utils_state_js__WEBPACK_IMPORTED_MODULE_0__.zeroLayout.delta, _utils_state_js__WEBPACK_IMPORTED_MODULE_0__.zeroLayout.treeScale, { x: 1, y: 1 });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHTMLStyles": () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _build_transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./build-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js");
/* harmony import */ var _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/number.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js");







function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (var key in latestValues) {
        var value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if ((0,_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_0__.isCSSVariable)(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes[key];
        var valueAsType = (0,_dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, valueType);
        if ((0,_transform_js__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
                transformIsNone = false;
        }
        else if ((0,_transform_js__WEBPACK_IMPORTED_MODULE_3__.isTransformOriginProp)(key)) {
            transformOrigin[key] = valueAsType;
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
        }
        else {
            /**
             * If layout projection is on, and we need to perform scale correction for this
             * value type, perform it.
             */
            if ((projection === null || projection === void 0 ? void 0 : projection.isHydrated) &&
                (layoutState === null || layoutState === void 0 ? void 0 : layoutState.isHydrated) &&
                _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__.valueScaleCorrection[key]) {
                var correctedValue = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__.valueScaleCorrection[key].process(value, layoutState, projection);
                /**
                 * Scale-correctable values can define a number of other values to break
                 * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                 */
                var applyTo = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_4__.valueScaleCorrection[key].applyTo;
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        style[applyTo[i]] = correctedValue;
                    }
                }
                else {
                    style[key] = correctedValue;
                }
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (layoutState &&
        projection &&
        buildProjectionTransform &&
        buildProjectionTransformOrigin) {
        style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : undefined);
        if (transformTemplate) {
            style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildProjectionTransformOrigin(layoutState);
    }
    else {
        if (hasTransform) {
            style.transform = (0,_build_transform_js__WEBPACK_IMPORTED_MODULE_5__.buildTransform)(state, options, transformIsNone, transformTemplate);
        }
        if (hasTransformOrigin) {
            style.transformOrigin = (0,_build_transform_js__WEBPACK_IMPORTED_MODULE_5__.buildTransformOrigin)(transformOrigin);
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTransform": () => (/* binding */ buildTransform),
/* harmony export */   "buildTransformOrigin": () => (/* binding */ buildTransformOrigin)
/* harmony export */ });
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");


var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(_transform_js__WEBPACK_IMPORTED_MODULE_0__.sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlRenderState": () => (/* binding */ createHtmlRenderState)
/* harmony export */ });
var createHtmlRenderState = function () { return ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
}); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/render.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHTML": () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, _a) {
    var style = _a.style, vars = _a.vars;
    // Directly assign style into the Element's style prop. In tests Object.assign is the
    // fastest way to assign styles.
    Object.assign(element.style, style);
    // Loop over any CSS variables and assign those.
    for (var key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.js */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");



function scrapeMotionValuesFromProps(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
        if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) || (0,_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/transform.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTransformOriginProp": () => (/* binding */ isTransformOriginProp),
/* harmony export */   "isTransformProp": () => (/* binding */ isTransformProp),
/* harmony export */   "sortTransformProps": () => (/* binding */ sortTransformProps),
/* harmony export */   "transformAxes": () => (/* binding */ transformAxes),
/* harmony export */   "transformProps": () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    return transformAxes.forEach(function (axesKey) {
        return transformProps.push(operationKey + axesKey);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/visual-element.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/visual-element.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComputedStyle": () => (/* binding */ getComputedStyle),
/* harmony export */   "htmlConfig": () => (/* binding */ htmlConfig),
/* harmony export */   "htmlVisualElement": () => (/* binding */ htmlVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony import */ var _utils_setters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");
/* harmony import */ var _dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/projection/measure.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/utils/is-css-variable.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js");
/* harmony import */ var _dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/parse-dom-variant.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js");
/* harmony import */ var _utils_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/html/utils/render.js");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");
/* harmony import */ var _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");













function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function (domElement, key) {
        if ((0,_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key)) {
            var defaultType = (0,_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            var computedStyle = getComputedStyle(domElement);
            return (((0,_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__.isCSSVariable)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0);
        }
    },
    sortNodePosition: function (a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    },
    getBaseTarget: function (props, key) {
        var _a;
        return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function (element, _a) {
        var transformPagePoint = _a.transformPagePoint;
        return (0,_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__.getBoundingBox)(element, transformPagePoint);
    },
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    resetTransform: function (element, domElement, props) {
        var transformTemplate = props.transformTemplate;
        domElement.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform on the next frame
        element.scheduleRender();
    },
    restoreTransform: function (instance, mutableState) {
        instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function (key, _a) {
        var vars = _a.vars, style = _a.style;
        delete vars[key];
        delete style[key];
    },
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    makeTargetAnimatable: function (element, _a, _b, isMounted) {
        var transformValues = _b.transformValues;
        if (isMounted === void 0) { isMounted = true; }
        var transition = _a.transition, transitionEnd = _a.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["transition", "transitionEnd"]);
        var origin = (0,_utils_setters_js__WEBPACK_IMPORTED_MODULE_5__.getOrigin)(target, transition || {}, element);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            (0,_utils_setters_js__WEBPACK_IMPORTED_MODULE_5__.checkTargetForNewValues)(element, target, origin);
            var parsed = (0,_dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__.parseDomVariant)(element, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ transition: transition,
            transitionEnd: transitionEnd }, target);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps,
    build: function (element, renderState, latestValues, projection, layoutState, options, props) {
        if (element.isVisible !== undefined) {
            renderState.style.visibility = element.isVisible
                ? "visible"
                : "hidden";
        }
        var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
        (0,_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_8__.buildHTMLStyles)(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransform : undefined, isProjectionTranform
            ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransformOrigin
            : undefined);
    },
    render: _utils_render_js__WEBPACK_IMPORTED_MODULE_10__.renderHTML,
};
var htmlVisualElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_11__.visualElement)(htmlConfig);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/index.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visualElement": () => (/* binding */ visualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AnimateSharedLayout/types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html/utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");
/* harmony import */ var _utils_animation_state_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/animation-state.js */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js");
/* harmony import */ var _utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/lifecycles.js */ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.js");
/* harmony import */ var _utils_motion_values_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/motion-values.js */ "./node_modules/framer-motion/dist/es/render/utils/motion-values.js");
/* harmony import */ var _utils_projection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/projection.js */ "./node_modules/framer-motion/dist/es/render/utils/projection.js");
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/state.js */ "./node_modules/framer-motion/dist/es/render/utils/state.js");
/* harmony import */ var _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/flat-tree.js */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.js");
/* harmony import */ var _utils_variants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");
/* harmony import */ var _dom_projection_relative_set_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dom/projection/relative-set.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/relative-set.js");
/* harmony import */ var _utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/is-draggable.js */ "./node_modules/framer-motion/dist/es/render/utils/is-draggable.js");





















var visualElement = function (_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
    return function (_a, options) {
        var parent = _a.parent, props = _a.props, presenceId = _a.presenceId, blockInitialAnimation = _a.blockInitialAnimation, visualState = _a.visualState;
        if (options === void 0) { options = {}; }
        var latestValues = visualState.latestValues, renderState = visualState.renderState;
        /**
         * The instance of the render-specific node that will be hydrated by the
         * exposed React ref. So for example, this visual element can host a
         * HTMLElement, plain object, or Three.js object. The functions provided
         * in VisualElementConfig allow us to interface with this instance.
         */
        var instance;
        /**
         * Manages the subscriptions for a visual element's lifecycle, for instance
         * onRender and onViewportBoxUpdate.
         */
        var lifecycles = (0,_utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_1__.createLifecycles)();
        /**
         *
         */
        var projection = (0,_utils_state_js__WEBPACK_IMPORTED_MODULE_2__.createProjectionState)();
        /**
         * A reference to the nearest projecting parent. This is either
         * undefined if we haven't looked for the nearest projecting parent,
         * false if there is no parent performing layout projection, or a reference
         * to the projecting parent.
         */
        var projectionParent;
        /**
         * This is a reference to the visual state of the "lead" visual element.
         * Usually, this will be this visual element. But if it shares a layoutId
         * with other visual elements, only one of them will be designated lead by
         * AnimateSharedLayout. All the other visual elements will take on the visual
         * appearance of the lead while they crossfade to it.
         */
        var leadProjection = projection;
        var leadLatestValues = latestValues;
        var unsubscribeFromLeadVisualElement;
        /**
         * The latest layout measurements and calculated projections. This
         * is seperate from the target projection data in visualState as
         * many visual elements might point to the same piece of visualState as
         * a target, whereas they might each have different layouts and thus
         * projection calculations needed to project into the same viewport box.
         */
        var layoutState = (0,_utils_state_js__WEBPACK_IMPORTED_MODULE_2__.createLayoutState)();
        /**
         *
         */
        var crossfader;
        /**
         * Keep track of whether the viewport box has been updated since the
         * last time the layout projection was re-calculated.
         */
        var hasViewportBoxUpdated = false;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        var values = new Map();
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        var valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        var prevMotionValues = {};
        /**
         * x/y motion values that track the progress of initiated layout
         * animations.
         *
         * TODO: Target for removal
         */
        var projectionTargetProgress;
        /**
         * When values are removed from all animation props we need to search
         * for a fallback value to animate to. These values are tracked in baseTarget.
         */
        var baseTarget = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, latestValues);
        // Internal methods ========================
        /**
         * On mount, this will be hydrated with a callback to disconnect
         * this visual element from its parent on unmount.
         */
        var removeFromVariantTree;
        /**
         *
         */
        function render() {
            if (!instance)
                return;
            if (element.isProjectionReady()) {
                /**
                 * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
                 * This is the final box that we will then project into by calculating a transform delta and
                 * applying it to the corrected box.
                 */
                (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_4__.applyBoxTransforms)(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
                /**
                 * Update the delta between the corrected box and the final target box, after
                 * user-set transforms are applied to it. This will be used by the renderer to
                 * create a transform style that will reproject the element from its actual layout
                 * into the desired bounding box.
                 */
                (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_5__.updateBoxDelta)(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
            }
            triggerBuild();
            renderInstance(instance, renderState);
        }
        function triggerBuild() {
            var valuesToRender = latestValues;
            if (crossfader && crossfader.isActive()) {
                var crossfadedValues = crossfader.getCrossfadeState(element);
                if (crossfadedValues)
                    valuesToRender = crossfadedValues;
            }
            build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
        }
        function update() {
            lifecycles.notifyUpdate(latestValues);
        }
        function updateLayoutProjection() {
            if (!element.isProjectionReady())
                return;
            var delta = layoutState.delta, treeScale = layoutState.treeScale;
            var prevTreeScaleX = treeScale.x;
            var prevTreeScaleY = treeScale.y;
            var prevDeltaTransform = layoutState.deltaTransform;
            (0,_utils_projection_js__WEBPACK_IMPORTED_MODULE_6__.updateLayoutDeltas)(layoutState, leadProjection, element.path, latestValues);
            hasViewportBoxUpdated &&
                element.notifyViewportBoxUpdate(leadProjection.target, delta);
            hasViewportBoxUpdated = false;
            var deltaTransform = (0,_html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_7__.buildLayoutProjectionTransform)(delta, treeScale);
            if (deltaTransform !== prevDeltaTransform ||
                // Also compare calculated treeScale, for values that rely on this only for scale correction
                prevTreeScaleX !== treeScale.x ||
                prevTreeScaleY !== treeScale.y) {
                element.scheduleRender();
            }
            layoutState.deltaTransform = deltaTransform;
        }
        function updateTreeLayoutProjection() {
            element.layoutTree.forEach(fireUpdateLayoutProjection);
        }
        /**
         *
         */
        function bindToMotionValue(key, value) {
            var removeOnChange = value.onChange(function (latestValue) {
                latestValues[key] = latestValue;
                props.onUpdate && framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(update, false, true);
            });
            var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
            valueSubscriptions.set(key, function () {
                removeOnChange();
                removeOnRenderRequest();
            });
        }
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        var initialMotionValues = scrapeMotionValuesFromProps(props);
        for (var key in initialMotionValues) {
            var value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_8__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
            }
        }
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        var isControllingVariants = (0,_utils_variants_js__WEBPACK_IMPORTED_MODULE_9__.checkIfControllingVariants)(props);
        var isVariantNode = (0,_utils_variants_js__WEBPACK_IMPORTED_MODULE_9__.checkIfVariantNode)(props);
        var element = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ treeType: treeType, 
            /**
             * This is a mirror of the internal instance prop, which keeps
             * VisualElement type-compatible with React's RefObject.
             */
            current: null, 
            /**
             * The depth of this visual element within the visual element tree.
             */
            depth: parent ? parent.depth + 1 : 0, parent: parent, children: new Set(), 
            /**
             * An ancestor path back to the root visual element. This is used
             * by layout projection to quickly recurse back up the tree.
             */
            path: parent ? (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(parent.path)), [parent]) : [], layoutTree: parent ? parent.layoutTree : new _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_10__.FlatTree(), 
            /**
             *
             */
            presenceId: presenceId,
            projection: projection, 
            /**
             * If this component is part of the variant tree, it should track
             * any children that are also part of the tree. This is essentially
             * a shadow tree to simplify logic around how to stagger over children.
             */
            variantChildren: isVariantNode ? new Set() : undefined, 
            /**
             * Whether this instance is visible. This can be changed imperatively
             * by AnimateSharedLayout, is analogous to CSS's visibility in that
             * hidden elements should take up layout, and needs enacting by the configured
             * render function.
             */
            isVisible: undefined, 
            /**
             * Normally, if a component is controlled by a parent's variants, it can
             * rely on that ancestor to trigger animations further down the tree.
             * However, if a component is created after its parent is mounted, the parent
             * won't trigger that mount animation so the child needs to.
             *
             * TODO: This might be better replaced with a method isParentMounted
             */
            manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()), 
            /**
             * This can be set by AnimatePresence to force components that mount
             * at the same time as it to mount as if they have initial={false} set.
             */
            blockInitialAnimation: blockInitialAnimation, 
            /**
             * Determine whether this component has mounted yet. This is mostly used
             * by variant children to determine whether they need to trigger their
             * own animations on mount.
             */
            isMounted: function () { return Boolean(instance); }, mount: function (newInstance) {
                instance = element.current = newInstance;
                element.pointTo(element);
                if (isVariantNode && parent && !isControllingVariants) {
                    removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
                }
                parent === null || parent === void 0 ? void 0 : parent.children.add(element);
            },
            /**
             *
             */
            unmount: function () {
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(update);
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.render(render);
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.preRender(element.updateLayoutProjection);
                valueSubscriptions.forEach(function (remove) { return remove(); });
                element.stopLayoutAnimation();
                element.layoutTree.remove(element);
                removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
                parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
                unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
                lifecycles.clearAllListeners();
            },
            /**
             * Add a child visual element to our set of children.
             */
            addVariantChild: function (child) {
                var _a;
                var closestVariantNode = element.getClosestVariantNode();
                if (closestVariantNode) {
                    (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
                    return function () { return closestVariantNode.variantChildren.delete(child); };
                }
            },
            sortNodePosition: function (other) {
                /**
                 * If these nodes aren't even of the same type we can't compare their depth.
                 */
                if (!sortNodePosition || treeType !== other.treeType)
                    return 0;
                return sortNodePosition(element.getInstance(), other.getInstance());
            }, 
            /**
             * Returns the closest variant node in the tree starting from
             * this visual element.
             */
            getClosestVariantNode: function () {
                return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
            }, 
            /**
             * A method that schedules an update to layout projections throughout
             * the tree. We inherit from the parent so there's only ever one
             * job scheduled on the next frame - that of the root visual element.
             */
            scheduleUpdateLayoutProjection: parent
                ? parent.scheduleUpdateLayoutProjection
                : function () {
                    return framesync__WEBPACK_IMPORTED_MODULE_0__["default"].preRender(element.updateTreeLayoutProjection, false, true);
                }, 
            /**
             * Expose the latest layoutId prop.
             */
            getLayoutId: function () { return props.layoutId; }, 
            /**
             * Returns the current instance.
             */
            getInstance: function () { return instance; }, 
            /**
             * Get/set the latest static values.
             */
            getStaticValue: function (key) { return latestValues[key]; }, setStaticValue: function (key, value) { return (latestValues[key] = value); }, 
            /**
             * Returns the latest motion value state. Currently only used to take
             * a snapshot of the visual element - perhaps this can return the whole
             * visual state
             */
            getLatestValues: function () { return latestValues; }, 
            /**
             * Set the visiblity of the visual element. If it's changed, schedule
             * a render to reflect these changes.
             */
            setVisibility: function (visibility) {
                if (element.isVisible === visibility)
                    return;
                element.isVisible = visibility;
                element.scheduleRender();
            },
            /**
             * Make a target animatable by Popmotion. For instance, if we're
             * trying to animate width from 100px to 100vw we need to measure 100vw
             * in pixels to determine what we really need to animate to. This is also
             * pluggable to support Framer's custom value types like Color,
             * and CSS variables.
             */
            makeTargetAnimatable: function (target, canMutate) {
                if (canMutate === void 0) { canMutate = true; }
                return makeTargetAnimatable(element, target, props, canMutate);
            },
            // Motion values ========================
            /**
             * Add a motion value and bind it to this visual element.
             */
            addValue: function (key, value) {
                // Remove existing value if it exists
                if (element.hasValue(key))
                    element.removeValue(key);
                values.set(key, value);
                latestValues[key] = value.get();
                bindToMotionValue(key, value);
            },
            /**
             * Remove a motion value and unbind any active subscriptions.
             */
            removeValue: function (key) {
                var _a;
                values.delete(key);
                (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
                valueSubscriptions.delete(key);
                delete latestValues[key];
                removeValueFromRenderState(key, renderState);
            }, 
            /**
             * Check whether we have a motion value for this key
             */
            hasValue: function (key) { return values.has(key); }, 
            /**
             * Get a motion value for this key. If called with a default
             * value, we'll create one if none exists.
             */
            getValue: function (key, defaultValue) {
                var value = values.get(key);
                if (value === undefined && defaultValue !== undefined) {
                    value = (0,_value_index_js__WEBPACK_IMPORTED_MODULE_11__.motionValue)(defaultValue);
                    element.addValue(key, value);
                }
                return value;
            }, 
            /**
             * Iterate over our motion values.
             */
            forEachValue: function (callback) { return values.forEach(callback); }, 
            /**
             * If we're trying to animate to a previously unencountered value,
             * we need to check for it in our state and as a last resort read it
             * directly from the instance (which might have performance implications).
             */
            readValue: function (key) { var _a; return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options); }, 
            /**
             * Set the base target to later animate back to. This is currently
             * only hydrated on creation and when we first read a value.
             */
            setBaseTarget: function (key, value) {
                baseTarget[key] = value;
            },
            /**
             * Find the base target for a value thats been removed from all animation
             * props.
             */
            getBaseTarget: function (key) {
                if (getBaseTarget) {
                    var target = getBaseTarget(props, key);
                    if (target !== undefined && !(0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_8__.isMotionValue)(target))
                        return target;
                }
                return baseTarget[key];
            } }, lifecycles), { 
            /**
             * Build the renderer state based on the latest visual state.
             */
            build: function () {
                triggerBuild();
                return renderState;
            },
            /**
             * Schedule a render on the next animation frame.
             */
            scheduleRender: function () {
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].render(render, false, true);
            }, 
            /**
             * Synchronously fire render. It's prefered that we batch renders but
             * in many circumstances, like layout measurement, we need to run this
             * synchronously. However in those instances other measures should be taken
             * to batch reads/writes.
             */
            syncRender: render, 
            /**
             * Update the provided props. Ensure any newly-added motion values are
             * added to our map, old ones removed, and listeners updated.
             */
            setProps: function (newProps) {
                props = newProps;
                lifecycles.updatePropListeners(newProps);
                prevMotionValues = (0,_utils_motion_values_js__WEBPACK_IMPORTED_MODULE_12__.updateMotionValuesFromProps)(element, scrapeMotionValuesFromProps(props), prevMotionValues);
            }, getProps: function () { return props; }, 
            // Variants ==============================
            /**
             * Returns the variant definition with a given name.
             */
            getVariant: function (name) { var _a; return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name]; }, 
            /**
             * Returns the defined default transition on this component.
             */
            getDefaultTransition: function () { return props.transition; }, 
            /**
             * Used by child variant nodes to get the closest ancestor variant props.
             */
            getVariantContext: function (startAtParent) {
                if (startAtParent === void 0) { startAtParent = false; }
                if (startAtParent)
                    return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
                if (!isControllingVariants) {
                    var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
                    if (props.initial !== undefined) {
                        context_1.initial = props.initial;
                    }
                    return context_1;
                }
                var context = {};
                for (var i = 0; i < numVariantProps; i++) {
                    var name_1 = variantProps[i];
                    var prop = props[name_1];
                    if ((0,_utils_variants_js__WEBPACK_IMPORTED_MODULE_9__.isVariantLabel)(prop) || prop === false) {
                        context[name_1] = prop;
                    }
                }
                return context;
            },
            // Layout projection ==============================
            /**
             * Enable layout projection for this visual element. Won't actually
             * occur until we also have hydrated layout measurements.
             */
            enableLayoutProjection: function () {
                projection.isEnabled = true;
                element.layoutTree.add(element);
            },
            /**
             * Lock the projection target, for instance when dragging, so
             * nothing else can try and animate it.
             */
            lockProjectionTarget: function () {
                projection.isTargetLocked = true;
            },
            unlockProjectionTarget: function () {
                element.stopLayoutAnimation();
                projection.isTargetLocked = false;
            }, getLayoutState: function () { return layoutState; }, setCrossfader: function (newCrossfader) {
                crossfader = newCrossfader;
            }, isProjectionReady: function () {
                return projection.isEnabled &&
                    projection.isHydrated &&
                    layoutState.isHydrated;
            }, 
            /**
             * Start a layout animation on a given axis.
             */
            startLayoutAnimation: function (axis, transition, isRelative) {
                if (isRelative === void 0) { isRelative = false; }
                var progress = element.getProjectionAnimationProgress()[axis];
                var _a = isRelative
                    ? projection.relativeTarget[axis]
                    : projection.target[axis], min = _a.min, max = _a.max;
                var length = max - min;
                progress.clearListeners();
                progress.set(min);
                progress.set(min); // Set twice to hard-reset velocity
                progress.onChange(function (v) {
                    element.setProjectionTargetAxis(axis, v, v + length, isRelative);
                });
                return element.animateMotionValue(axis, progress, 0, transition);
            },
            /**
             * Stop layout animations.
             */
            stopLayoutAnimation: function () {
                (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_13__.eachAxis)(function (axis) {
                    return element.getProjectionAnimationProgress()[axis].stop();
                });
            },
            /**
             * Measure the current viewport box with or without transforms.
             * Only measures axis-aligned boxes, rotate and skew must be manually
             * removed with a re-render to work.
             */
            measureViewportBox: function (withTransform) {
                if (withTransform === void 0) { withTransform = true; }
                var viewportBox = measureViewportBox(instance, options);
                if (!withTransform)
                    (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_4__.removeBoxTransforms)(viewportBox, latestValues);
                return viewportBox;
            },
            /**
             * Get the motion values tracking the layout animations on each
             * axis. Lazy init if not already created.
             */
            getProjectionAnimationProgress: function () {
                projectionTargetProgress || (projectionTargetProgress = {
                    x: (0,_value_index_js__WEBPACK_IMPORTED_MODULE_11__.motionValue)(0),
                    y: (0,_value_index_js__WEBPACK_IMPORTED_MODULE_11__.motionValue)(0),
                });
                return projectionTargetProgress;
            },
            /**
             * Update the projection of a single axis. Schedule an update to
             * the tree layout projection.
             */
            setProjectionTargetAxis: function (axis, min, max, isRelative) {
                if (isRelative === void 0) { isRelative = false; }
                var target;
                if (isRelative) {
                    if (!projection.relativeTarget) {
                        projection.relativeTarget = (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_14__.axisBox)();
                    }
                    target = projection.relativeTarget[axis];
                }
                else {
                    projection.relativeTarget = undefined;
                    target = projection.target[axis];
                }
                projection.isHydrated = true;
                target.min = min;
                target.max = max;
                // Flag that we want to fire the onViewportBoxUpdate event handler
                hasViewportBoxUpdated = true;
                lifecycles.notifySetAxisTarget();
            },
            /**
             * Rebase the projection target on top of the provided viewport box
             * or the measured layout. This ensures that non-animating elements
             * don't fall out of sync differences in measurements vs projections
             * after a page scroll or other relayout.
             */
            rebaseProjectionTarget: function (force, box) {
                if (box === void 0) { box = layoutState.layout; }
                var _a = element.getProjectionAnimationProgress(), x = _a.x, y = _a.y;
                var shouldRebase = !projection.relativeTarget &&
                    !projection.isTargetLocked &&
                    !x.isAnimating() &&
                    !y.isAnimating();
                if (force || shouldRebase) {
                    (0,_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_13__.eachAxis)(function (axis) {
                        var _a = box[axis], min = _a.min, max = _a.max;
                        element.setProjectionTargetAxis(axis, min, max);
                    });
                }
            },
            /**
             * Notify the visual element that its layout is up-to-date.
             * Currently Animate.tsx uses this to check whether a layout animation
             * needs to be performed.
             */
            notifyLayoutReady: function (config) {
                (0,_dom_projection_relative_set_js__WEBPACK_IMPORTED_MODULE_15__.setCurrentViewportBox)(element);
                element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
            }, 
            /**
             * Temporarily reset the transform of the instance.
             */
            resetTransform: function () { return resetTransform(element, instance, props); }, restoreTransform: function () { return restoreTransform(instance, renderState); }, updateLayoutProjection: updateLayoutProjection,
            updateTreeLayoutProjection: function () {
                element.layoutTree.forEach(fireResolveRelativeTargetBox);
                /**
                 * Schedule the projection updates at the end of the current preRender
                 * step. This will ensure that all layout trees will first resolve
                 * relative projection boxes into viewport boxes, and *then*
                 * update projections.
                 */
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].preRender(updateTreeLayoutProjection, false, true);
                // sync.postRender(() => element.scheduleUpdateLayoutProjection())
            },
            getProjectionParent: function () {
                if (projectionParent === undefined) {
                    var foundParent = false;
                    // Search backwards through the tree path
                    for (var i = element.path.length - 1; i >= 0; i--) {
                        var ancestor = element.path[i];
                        if (ancestor.projection.isEnabled) {
                            foundParent = ancestor;
                            break;
                        }
                    }
                    projectionParent = foundParent;
                }
                return projectionParent;
            },
            resolveRelativeTargetBox: function () {
                var relativeParent = element.getProjectionParent();
                if (!projection.relativeTarget || !relativeParent)
                    return;
                (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_5__.calcRelativeBox)(projection, relativeParent.projection);
                if ((0,_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_16__.isDraggable)(relativeParent)) {
                    var target = projection.target;
                    (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_4__.applyBoxTransforms)(target, target, relativeParent.getLatestValues());
                }
            },
            shouldResetTransform: function () {
                return Boolean(props._layoutResetTransform);
            },
            /**
             *
             */
            pointTo: function (newLead) {
                leadProjection = newLead.projection;
                leadLatestValues = newLead.getLatestValues();
                /**
                 * Subscribe to lead component's layout animations
                 */
                unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
                unsubscribeFromLeadVisualElement = (0,popmotion__WEBPACK_IMPORTED_MODULE_17__.pipe)(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function () {
                    var _a;
                    if (element.isPresent) {
                        element.presence = _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_18__.Presence.Present;
                    }
                    else {
                        (_a = element.layoutSafeToRemove) === null || _a === void 0 ? void 0 : _a.call(element);
                    }
                }));
            }, 
            // TODO: Clean this up
            isPresent: true, presence: _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_18__.Presence.Entering });
        return element;
    };
};
function fireResolveRelativeTargetBox(child) {
    child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
    child.updateLayoutProjection();
}
var variantProps = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)(["initial"], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_19__.variantPriorityOrder));
var numVariantProps = variantProps.length;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/config-motion.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgMotionConfig": () => (/* binding */ svgMotionConfig)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js");
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");






var svgMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__.createSvgRenderState,
        onMount: function (props, instance, _a) {
            var renderState = _a.renderState, latestValues = _a.latestValues;
            try {
                renderState.dimensions =
                    typeof instance.getBBox ===
                        "function"
                        ? instance.getBBox()
                        : instance.getBoundingClientRect();
            }
            catch (e) {
                // Most likely trying to measure an unrendered element under Firefox
                renderState.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            if (isPath(instance)) {
                renderState.totalPathLength = instance.getTotalLength();
            }
            (0,_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__.buildSVGAttrs)(renderState, latestValues, undefined, undefined, { enableHardwareAcceleration: false }, props.transformTemplate);
            // TODO: Replace with direct assignment
            (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.renderSVG)(instance, renderState);
        },
    }),
};
function isPath(element) {
    return element.tagName === "path";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lowercaseSVGElements": () => (/* binding */ lowercaseSVGElements)
/* harmony export */ });
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view",
];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/use-props.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSVGProps": () => (/* binding */ useSVGProps)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/use-props.js */ "./node_modules/framer-motion/dist/es/render/html/use-props.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js");






function useSVGProps(props, visualState) {
    var visualProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__.createSvgRenderState)();
        (0,_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_2__.buildSVGAttrs)(state, visualState, undefined, undefined, { enableHardwareAcceleration: false }, props.transformTemplate);
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.attrs), { style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.style) });
    }, [visualState]);
    if (props.style) {
        var rawStyles = {};
        (0,_html_use_props_js__WEBPACK_IMPORTED_MODULE_4__.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, rawStyles), visualProps.style);
    }
    return visualProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGAttrs": () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _transform_origin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-origin.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/path.js");





/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    (0,_html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__.buildHTMLStyles)(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_js__WEBPACK_IMPORTED_MODULE_2__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been measured
    if (totalPathLength !== undefined && pathLength !== undefined) {
        (0,_path_js__WEBPACK_IMPORTED_MODULE_3__.buildSVGPath)(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCaseAttributes": () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
]);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSvgRenderState": () => (/* binding */ createSvgRenderState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");



var createSvgRenderState = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, (0,_html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlRenderState)()), { attrs: {} })); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/path.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGPath": () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");


// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(progress * length);
};
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    // Build the dash array
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/render.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSVG": () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js");
/* harmony import */ var _html_utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.js */ "./node_modules/framer-motion/dist/es/render/html/utils/render.js");
/* harmony import */ var _camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js");




function renderSVG(element, renderState) {
    (0,_html_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState);
    for (var key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");



function scrapeMotionValuesFromProps(props) {
    var newValues = (0,_html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props);
    for (var key in props) {
        if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key])) {
            var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcSVGTransformOrigin": () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.js");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/visual-element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/visual-element.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgVisualElement": () => (/* binding */ svgVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js");
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.js */ "./node_modules/framer-motion/dist/es/render/html/visual-element.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js");
/* harmony import */ var _utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/camel-case-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../html/utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");












var svgVisualElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.visualElement)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _html_visual_element_js__WEBPACK_IMPORTED_MODULE_2__.htmlConfig), { getBaseTarget: function (props, key) {
        return props[key];
    },
    readValueFromInstance: function (domElement, key) {
        var _a;
        if ((0,_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            return ((_a = (0,_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultValueType)(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
        }
        key = !_utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_5__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_6__.camelToDash)(key) : key;
        return domElement.getAttribute(key);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps,
    build: function (_element, renderState, latestValues, projection, layoutState, options, props) {
        var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
        (0,_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_8__.buildSVGAttrs)(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransform : undefined, isProjectionTranform
            ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_9__.buildLayoutProjectionTransformOrigin
            : undefined);
    }, render: _utils_render_js__WEBPACK_IMPORTED_MODULE_10__.renderSVG }));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation-state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnimationState": () => (/* binding */ createAnimationState),
/* harmony export */   "variantPriorityOrder": () => (/* binding */ variantPriorityOrder),
/* harmony export */   "variantsHaveChanged": () => (/* binding */ variantsHaveChanged)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");
/* harmony import */ var _utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/shallow-compare.js */ "./node_modules/framer-motion/dist/es/utils/shallow-compare.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.js */ "./node_modules/framer-motion/dist/es/render/utils/animation.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");








var variantPriorityOrder = [
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus,
    _types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit,
];
var reversePriorityOrder = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return function (animations) {
        return Promise.all(animations.map(function (_a) {
            var animation = _a.animation, options = _a.options;
            return (0,_animation_js__WEBPACK_IMPORTED_MODULE_2__.animateVisualElement)(visualElement, animation, options);
        }));
    };
}
function createAnimationState(visualElement) {
    var animate = animateList(visualElement);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    var buildResolvedTypeValues = function (acc, definition) {
        var resolved = (0,_variants_js__WEBPACK_IMPORTED_MODULE_3__.resolveVariant)(visualElement, definition);
        if (resolved) {
            resolved.transition; var transitionEnd = resolved.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(resolved, ["transition", "transitionEnd"]);
            acc = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, acc), target), transitionEnd);
        }
        return acc;
    };
    function isAnimated(key) {
        return allAnimatedKeys[key] !== undefined;
    }
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        var _a;
        var props = visualElement.getProps();
        var context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        var animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        var removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        var encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        var removedVariantIndex = Infinity;
        var _loop_1 = function (i) {
            var type = reversePriorityOrder[i];
            var typeState = state[type];
            var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
            var propIsVariant = (0,_variants_js__WEBPACK_IMPORTED_MODULE_3__.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            var activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                (0,_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_4__.isAnimationControls)(prop) ||
                typeof prop === "boolean") {
                return "continue";
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            var definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
            var allKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevResolvedValues), resolvedValues);
            var markToAnimate = function (key) {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (var key in allKeys) {
                var next = resolvedValues[key];
                var prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if ((0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(next) && (0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(prev)) {
                        if (!(0,_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev)) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys), resolvedValues);
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push.apply(animations, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(definitionList.map(function (animation) { return ({
                    animation: animation,
                    options: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ type: type }, options),
                }); }))));
            }
        };
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (var i = 0; i < numAnimationTypes; i++) {
            _loop_1(i);
        }
        allAnimatedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            var fallbackAnimation_1 = {};
            removedKeys.forEach(function (key) {
                var fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation_1[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation_1 });
        }
        var shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        return animateChanges(options, type);
    }
    return {
        isAnimated: isAnimated,
        animateChanges: animateChanges,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
        getState: function () { return state; },
    };
}
function variantsHaveChanged(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if ((0,_variants_js__WEBPACK_IMPORTED_MODULE_3__.isVariantLabels)(next)) {
        return !(0,_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev);
    }
    return false;
}
function createTypeState(isActive) {
    if (isActive === void 0) { isActive = false; }
    return {
        isActive: isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    var _a;
    return _a = {},
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate] = createTypeState(true),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit] = createTypeState(),
        _a;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateVisualElement": () => (/* binding */ animateVisualElement),
/* harmony export */   "sortByTreeOrder": () => (/* binding */ sortByTreeOrder),
/* harmony export */   "stopAnimation": () => (/* binding */ stopAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _setters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");





/**
 * @internal
 */
function animateVisualElement(visualElement, definition, options) {
    if (options === void 0) { options = {}; }
    visualElement.notifyAnimationStart();
    var animation;
    if (Array.isArray(definition)) {
        var animations = definition.map(function (variant) {
            return animateVariant(visualElement, variant, options);
        });
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        var resolvedDefinition = typeof definition === "function"
            ? (0,_variants_js__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, definition, options.custom)
            : definition;
        animation = animateTarget(visualElement, resolvedDefinition, options);
    }
    return animation.then(function () {
        return visualElement.notifyAnimationComplete(definition);
    });
}
function animateVariant(visualElement, variant, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var resolved = (0,_variants_js__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getAnimation = resolved
        ? function () { return animateTarget(visualElement, resolved, options); }
        : function () { return Promise.resolve(); };
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size)
        ? function (forwardDelay) {
            if (forwardDelay === void 0) { forwardDelay = 0; }
            var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : function () { return Promise.resolve(); };
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    var when = transition.when;
    if (when) {
        var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
        return first().then(last);
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
/**
 * @internal
 */
function animateTarget(visualElement, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
        transition = transitionOverride;
    var animations = [];
    var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
        var value = visualElement.getValue(key);
        var valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        var animation = (0,_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__.startAnimation)(key, value, valueTarget, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delay: delay }, transition));
        animations.push(animation);
    }
    return Promise.all(animations).then(function () {
        transitionEnd && (0,_setters_js__WEBPACK_IMPORTED_MODULE_3__.setTarget)(visualElement, transitionEnd);
    });
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) { delayChildren = 0; }
    if (staggerChildren === void 0) { staggerChildren = 0; }
    if (staggerDirection === void 0) { staggerDirection = 1; }
    var animations = [];
    var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1
        ? function (i) {
            if (i === void 0) { i = 0; }
            return i * staggerChildren;
        }
        : function (i) {
            if (i === void 0) { i = 0; }
            return maxStaggerDuration - i * staggerChildren;
        };
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach(function (child, i) {
        animations.push(animateVariant(child, variant, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function () { return child.notifyAnimationComplete(variant); }));
    });
    return Promise.all(animations);
}
function stopAnimation(visualElement) {
    visualElement.forEachValue(function (value) { return value.stop(); });
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareByDepth": () => (/* binding */ compareByDepth)
/* harmony export */ });
var compareByDepth = function (a, b) {
    return a.depth - b.depth;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/flat-tree.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatTree": () => (/* binding */ FlatTree)
/* harmony export */ });
/* harmony import */ var _utils_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.js */ "./node_modules/framer-motion/dist/es/utils/array.js");
/* harmony import */ var _compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");



var FlatTree = /** @class */ (function () {
    function FlatTree() {
        this.children = [];
        this.isDirty = false;
    }
    FlatTree.prototype.add = function (child) {
        (0,_utils_array_js__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.remove = function (child) {
        (0,_utils_array_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.forEach = function (callback) {
        this.isDirty && this.children.sort(_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    };
    return FlatTree;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/is-draggable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/is-draggable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDraggable": () => (/* binding */ isDraggable)
/* harmony export */ });
function isDraggable(visualElement) {
    var _a = visualElement.getProps(), drag = _a.drag, _dragX = _a._dragX;
    return drag && !_dragX;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/lifecycles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLifecycles": () => (/* binding */ createLifecycles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/subscription-manager.js */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js");



var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "SetAxisTarget",
    "Unmount",
];
function createLifecycles() {
    var managers = names.map(function () { return new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_0__.SubscriptionManager(); });
    var propSubscriptions = {};
    var lifecycles = {
        clearAllListeners: function () { return managers.forEach(function (manager) { return manager.clear(); }); },
        updatePropListeners: function (props) {
            return names.forEach(function (name) {
                var _a;
                (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
                var on = "on" + name;
                var propListener = props[on];
                if (propListener) {
                    propSubscriptions[name] = lifecycles[on](propListener);
                }
            });
        },
    };
    managers.forEach(function (manager, i) {
        lifecycles["on" + names[i]] = function (handler) { return manager.add(handler); };
        lifecycles["notify" + names[i]] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return manager.notify.apply(manager, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args)));
        };
    });
    return lifecycles;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/motion-values.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateMotionValuesFromProps": () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");



function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
        var nextValue = next[key];
        var prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
        }
        else if ((0,_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping to a new motion value, create a new motion value
             * from that
             */
            element.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_1__.motionValue)(nextValue));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                var existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                element.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_1__.motionValue)((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
            }
        }
    }
    // Handle removed values
    for (var key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/projection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/projection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLayoutDeltas": () => (/* binding */ updateLayoutDeltas)
/* harmony export */ });
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");



function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
    var delta = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
    var target = _b.target;
    /**
     * Reset the corrected box with the latest values from box, as we're then going
     * to perform mutative operations on it.
     */
    (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__.resetBox)(layoutCorrected, layout);
    /**
     * Apply all the parent deltas to this box to produce the corrected box. This
     * is the layout box, as it will appear on screen as a result of the transforms of its parents.
     */
    (0,_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__.applyTreeDeltas)(layoutCorrected, treeScale, treePath);
    /**
     * Update the delta between the corrected box and the target box before user-set transforms were applied.
     * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
     * for our layout reprojection, but still allow them to be scaled correctly by the user.
     * It might be that to simplify this we may want to accept that user-set scale is also corrected
     * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
     * to allow people to choose whether these styles are corrected based on just the
     * layout reprojection or the final bounding box.
     */
    (0,_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__.updateBoxDelta)(delta, layoutCorrected, target, transformOrigin);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/setters.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTargetForNewValues": () => (/* binding */ checkTargetForNewValues),
/* harmony export */   "getOrigin": () => (/* binding */ getOrigin),
/* harmony export */   "getOriginFromTransition": () => (/* binding */ getOriginFromTransition),
/* harmony export */   "setTarget": () => (/* binding */ setTarget),
/* harmony export */   "setValues": () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/is-numerical-string.js */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.js");
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "./node_modules/framer-motion/dist/es/utils/resolve-value.js");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom/value-types/animatable-none.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js");
/* harmony import */ var _dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/value-types/find.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");









/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    var resolved = (0,_variants_js__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    var _a = resolved
        ? visualElement.makeTargetAnimatable(resolved, false)
        : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b; _a.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["transitionEnd", "transition"]);
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, target), transitionEnd);
    for (var key in target) {
        var value = (0,_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    var reversedLabels = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(variantLabels)).reverse();
    reversedLabels.forEach(function (key) {
        var _a;
        var variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            setVariants(child, variantLabels);
        });
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function (key) { return !visualElement.hasValue(key); });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (var i = 0; i < numNewValues; i++) {
        var key = newValueKeys[i];
        var targetValue = target[key];
        var value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" && (0,_utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_4__.isNumericalString)(value)) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!(0,_dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_5__.findValueType)(value) && style_value_types__WEBPACK_IMPORTED_MODULE_6__.complex.test(targetValue)) {
            value = (0,_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_7__.getAnimatableNone)(key, targetValue);
        }
        visualElement.addValue(key, (0,_value_index_js__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
        (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : (_d[key] = value);
        visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] =
            (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/state.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/state.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLayoutState": () => (/* binding */ createLayoutState),
/* harmony export */   "createProjectionState": () => (/* binding */ createProjectionState),
/* harmony export */   "zeroLayout": () => (/* binding */ zeroLayout)
/* harmony export */ });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");


var createProjectionState = function () { return ({
    isEnabled: false,
    isHydrated: false,
    isTargetLocked: false,
    target: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
    targetFinal: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
}); };
function createLayoutState() {
    return {
        isHydrated: false,
        layout: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
        layoutCorrected: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.axisBox)(),
        treeScale: { x: 1, y: 1 },
        delta: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.delta)(),
        deltaFinal: (0,_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__.delta)(),
        deltaTransform: "",
    };
}
var zeroLayout = createLayoutState();




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/types.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationType": () => (/* binding */ AnimationType)
/* harmony export */ });
var AnimationType;
(function (AnimationType) {
    AnimationType["Animate"] = "animate";
    AnimationType["Hover"] = "whileHover";
    AnimationType["Tap"] = "whileTap";
    AnimationType["Drag"] = "whileDrag";
    AnimationType["Focus"] = "whileFocus";
    AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/variants.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/variants.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfControllingVariants": () => (/* binding */ checkIfControllingVariants),
/* harmony export */   "checkIfVariantNode": () => (/* binding */ checkIfVariantNode),
/* harmony export */   "isVariantLabel": () => (/* binding */ isVariantLabel),
/* harmony export */   "isVariantLabels": () => (/* binding */ isVariantLabels),
/* harmony export */   "resolveVariant": () => (/* binding */ resolveVariant),
/* harmony export */   "resolveVariantFromProps": () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
    return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) { currentValues = {}; }
    if (currentVelocity === void 0) { currentVelocity = {}; }
    if (typeof definition === "string") {
        definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    return typeof definition === "function"
        ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity)
        : definition;
}
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
function checkIfControllingVariants(props) {
    var _a;
    return (typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" ||
        isVariantLabel(props.initial) ||
        isVariantLabel(props.animate) ||
        isVariantLabel(props.whileHover) ||
        isVariantLabel(props.whileDrag) ||
        isVariantLabel(props.whileTap) ||
        isVariantLabel(props.whileFocus) ||
        isVariantLabel(props.exit));
}
function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/array.js":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/array.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUniqueItem": () => (/* binding */ addUniqueItem),
/* harmony export */   "removeItem": () => (/* binding */ removeItem)
/* harmony export */ });
function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
    var index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/each-axis.js":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/each-axis.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eachAxis": () => (/* binding */ eachAxis)
/* harmony export */ });
// Call a handler once for each axis
function eachAxis(handler) {
    return [handler("x"), handler("y")];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyAxisDelta": () => (/* binding */ applyAxisDelta),
/* harmony export */   "applyAxisTransforms": () => (/* binding */ applyAxisTransforms),
/* harmony export */   "applyBoxDelta": () => (/* binding */ applyBoxDelta),
/* harmony export */   "applyBoxTransforms": () => (/* binding */ applyBoxTransforms),
/* harmony export */   "applyPointDelta": () => (/* binding */ applyPointDelta),
/* harmony export */   "applyTreeDeltas": () => (/* binding */ applyTreeDeltas),
/* harmony export */   "removeAxisDelta": () => (/* binding */ removeAxisDelta),
/* harmony export */   "removeAxisTransforms": () => (/* binding */ removeAxisTransforms),
/* harmony export */   "removeBoxTransforms": () => (/* binding */ removeBoxTransforms),
/* harmony export */   "removePointDelta": () => (/* binding */ removePointDelta),
/* harmony export */   "resetAxis": () => (/* binding */ resetAxis),
/* harmony export */   "resetBox": () => (/* binding */ resetBox),
/* harmony export */   "scalePoint": () => (/* binding */ scalePoint)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _render_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/is-draggable.js */ "./node_modules/framer-motion/dist/es/render/utils/is-draggable.js");




/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetAxis(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetBox(box, originBox) {
    resetAxis(box.x, originBox.x);
    resetAxis(box.y, originBox.y);
}
/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function applyAxisTransforms(final, axis, transforms, _a) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    // Copy the current axis to the final axis before mutation
    final.min = axis.min;
    final.max = axis.max;
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function applyBoxTransforms(finalBox, box, transforms) {
    applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
    applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(axis.min, axis.max, origin) - translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms) {
    removeAxisTransforms(box.x, transforms, xKeys);
    removeAxisTransforms(box.y, transforms, yKeys);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath) {
    var treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for (var i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.getLayoutState().delta;
        // Incoporate each ancestor's scale into a culmulative treeScale for this component
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        // Apply each ancestor's calculated delta into this component's recorded layout box
        applyBoxDelta(box, delta);
        // If this is a draggable ancestor, also incorporate the node's transform to the layout box
        if ((0,_render_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_2__.isDraggable)(node)) {
            applyBoxTransforms(box, box, node.getLatestValues());
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcOrigin": () => (/* binding */ calcOrigin),
/* harmony export */   "calcRelativeAxis": () => (/* binding */ calcRelativeAxis),
/* harmony export */   "calcRelativeBox": () => (/* binding */ calcRelativeBox),
/* harmony export */   "isNear": () => (/* binding */ isNear),
/* harmony export */   "updateAxisDelta": () => (/* binding */ updateAxisDelta),
/* harmony export */   "updateBoxDelta": () => (/* binding */ updateBoxDelta)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/clamp.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.js");


var clampProgress = function (v) { return (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, v); };
/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.distance)(value, target) < maxDistance;
}
function calcLength(axis) {
    return axis.max - axis.min;
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.progress)(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.progress)(source.min, source.max - targetLength, target.min);
    }
    return clampProgress(origin);
}
/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateAxisDelta(delta, source, target, origin) {
    if (origin === void 0) { origin = 0.5; }
    delta.origin = origin;
    delta.originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.mix)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001))
        delta.scale = 1;
    delta.translate =
        (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.mix)(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate))
        delta.translate = 0;
}
/**
 * Update the BoxDelta with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateBoxDelta(delta, source, target, origin) {
    updateAxisDelta(delta.x, source.x, target.x, defaultOrigin(origin.originX));
    updateAxisDelta(delta.y, source.y, target.y, defaultOrigin(origin.originY));
}
/**
 * Currently this only accepts numerical origins, measured as 0-1, but could
 * accept pixel values by comparing to the target axis.
 */
function defaultOrigin(origin) {
    return typeof origin === "number" ? origin : 0.5;
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
    calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
    calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axisBox": () => (/* binding */ axisBox),
/* harmony export */   "convertAxisBoxToBoundingBox": () => (/* binding */ convertAxisBoxToBoundingBox),
/* harmony export */   "convertBoundingBoxToAxisBox": () => (/* binding */ convertBoundingBoxToAxisBox),
/* harmony export */   "copyAxisBox": () => (/* binding */ copyAxisBox),
/* harmony export */   "delta": () => (/* binding */ delta),
/* harmony export */   "transformBoundingBox": () => (/* binding */ transformBoundingBox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/framer-motion/dist/es/utils/noop.js");



/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToAxisBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertAxisBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return {
        top: y.min,
        bottom: y.max,
        left: x.min,
        right: x.max,
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoundingBox(_a, transformPoint) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    if (transformPoint === void 0) { transformPoint = _noop_js__WEBPACK_IMPORTED_MODULE_0__.noop; }
    var topLeft = transformPoint({ x: left, y: top });
    var bottomRight = transformPoint({ x: right, y: bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}
/**
 * Create an empty axis box of zero size
 */
function axisBox() {
    return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
    return {
        x: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, box.x),
        y: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, box.y),
    };
}
/**
 * Create an empty box delta
 */
var zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
};
function delta() {
    return {
        x: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, zeroDelta),
        y: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, zeroDelta),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-browser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser)
/* harmony export */ });
var isBrowser = typeof window !== "undefined";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-numerical-string.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumericalString": () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-ref-object.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRefObject": () => (/* binding */ isRefObject)
/* harmony export */ });
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop(any) {
    return any;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/resolve-value.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCustomValue": () => (/* binding */ isCustomValue),
/* harmony export */   "resolveFinalValueInKeyframes": () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");


var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/shallow-compare.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/subscription-manager.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionManager": () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/framer-motion/dist/es/utils/array.js");


var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = [];
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return function () { return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(_this.subscriptions, handler); };
    };
    SubscriptionManager.prototype.notify = function (a, b, c) {
        var numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (var i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                var handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    };
    SubscriptionManager.prototype.getSize = function () {
        return this.subscriptions.length;
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.length = 0;
    };
    return SubscriptionManager;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/time-conversion.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondsToMilliseconds": () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-constant.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConstant": () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");



var useIsomorphicLayoutEffect = _is_browser_js__WEBPACK_IMPORTED_MODULE_1__.isBrowser ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUnmountEffect": () => (/* binding */ useUnmountEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useUnmountEffect(callback) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return function () { return callback(); }; }, []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionValue": () => (/* binding */ MotionValue),
/* harmony export */   "motionValue": () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/subscription-manager.js */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js");




var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the velocity updates.
         *
         * @internal
         */
        this.velocityUpdateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            // Update timestamp
            var _a = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            // Update velocity subscribers
            if (_this.velocityUpdateSubscribers.getSize()) {
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
            // Update render subscribers
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.velocityPerSecond)(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.hasAnimated = true;
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init) {
    return new MotionValue(init);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMotionValue": () => (/* binding */ isMotionValue)
/* harmony export */ });
var isMotionValue = function (value) {
    return value !== null && typeof value === "object" && value.getVelocity;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveMotionValue": () => (/* binding */ resolveMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "./node_modules/framer-motion/dist/es/utils/resolve-value.js");
/* harmony import */ var _is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
    var unwrappedValue = (0,_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value.get() : value;
    return (0,_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_1__.isCustomValue)(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}




/***/ }),

/***/ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/framesync/dist/es/create-render-step.js":
/*!**************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRenderStep": () => (/* binding */ createRenderStep)
/* harmony export */ });
function createRenderStep(runNextFrame) {
    var toRun = [];
    var toRunNextFrame = [];
    var numToRun = 0;
    var isProcessing = false;
    var toKeepAlive = new WeakSet();
    var step = {
        schedule: function (callback, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            var addToCurrentFrame = immediate && isProcessing;
            var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        cancel: function (callback) {
            var index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: function (frameData) {
            var _a;
            isProcessing = true;
            _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
                for (var i = 0; i < numToRun; i++) {
                    var callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/framesync/dist/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelSync": () => (/* binding */ cancelSync),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "flushSync": () => (/* binding */ flushSync),
/* harmony export */   "getFrameData": () => (/* binding */ getFrameData)
/* harmony export */ });
/* harmony import */ var _on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.js */ "./node_modules/framesync/dist/es/on-next-frame.js");
/* harmony import */ var _create_render_step_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.js */ "./node_modules/framesync/dist/es/create-render-step.js");



var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = (0,_create_render_step_js__WEBPACK_IMPORTED_MODULE_1__.createRenderStep)(function () {
        return runNextFrame = true;
    });
    return acc;
}, {});
var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    var step = steps[key];
    acc[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) {
            keepAlive = false;
        }
        if (immediate === void 0) {
            immediate = false;
        }
        if (!runNextFrame) startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
var flushSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = function () {
        return steps[key].process(frame);
    };
    return acc;
}, {});
var processStep = function (stepId) {
    return steps[stepId].process(frame);
};
var processFrame = function (timestamp) {
    runNextFrame = false;
    frame.delta = useDefaultElapsed ? _on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__.defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        (0,_on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
    }
};
var startLoop = function () {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) (0,_on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
};
var getFrameData = function () {
    return frame;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sync);



/***/ }),

/***/ "./node_modules/framesync/dist/es/on-next-frame.js":
/*!*********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTimestep": () => (/* binding */ defaultTimestep),
/* harmony export */   "onNextFrame": () => (/* binding */ onNextFrame)
/* harmony export */ });
var defaultTimestep = (1 / 60) * 1000;
var getCurrentTime = typeof performance !== "undefined"
    ? function () { return performance.now(); }
    : function () { return Date.now(); };
var onNextFrame = typeof window !== "undefined"
    ? function (callback) {
        return window.requestAnimationFrame(callback);
    }
    : function (callback) {
        return setTimeout(function () { return callback(getCurrentTime()); }, defaultTimestep);
    };




/***/ }),

/***/ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.applyTrailingSlashOption = void 0;

// TODO(v5): Remove legacy setting and default to "always"
const applyTrailingSlashOption = (input, option = `legacy`) => {
  const hasHtmlSuffix = input.endsWith(`.html`);
  const hasXmlSuffix = input.endsWith(`.xml`);
  const hasPdfSuffix = input.endsWith(`.pdf`);
  if (input === `/`) return input;

  if (hasHtmlSuffix || hasXmlSuffix || hasPdfSuffix) {
    option = `never`;
  }

  if (option === `always`) {
    return input.endsWith(`/`) ? input : `${input}/`;
  }

  if (option === `never`) {
    return input.endsWith(`/`) ? input.slice(0, -1) : input;
  }

  return input;
};

exports.applyTrailingSlashOption = applyTrailingSlashOption;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;

    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;

      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;

    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }

    this._isTicking = false;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath),
/* harmony export */   "findMatchPath": () => (/* binding */ findMatchPath),
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "grabMatchParams": () => (/* binding */ grabMatchParams),
/* harmony export */   "setMatchPaths": () => (/* binding */ setMatchPaths)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];

const trimPathname = rawPathname => {
  let newRawPathname = rawPathname;
  const queryIndex = rawPathname.indexOf(`?`);

  if (queryIndex !== -1) {
    const [path, qs] = rawPathname.split(`?`);
    newRawPathname = `${path}?${encodeURIComponent(qs)}`;
  }

  const pathname = decodeURIComponent(newRawPathname); // Remove the pathPrefix from the pathname.

  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname, decodeURIComponent("")) // Remove any hashfragment
  .split(`#`)[0];
  return trimmedPathname;
};

function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  } // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router


  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}
/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */


const setMatchPaths = value => {
  matchPaths = value;
};
/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */

const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);
  }

  return null;
};
/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */

const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return path.params;
  }

  return {};
}; // Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`

const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));

  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }

  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);

  if (redirect) {
    return findPath(redirect.toPath);
  }

  let foundPath = findMatchPath(trimmedPathname);

  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }

  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};
/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */

const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;

  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }

  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "PageRenderer": () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "Script": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.Script),
/* harmony export */   "ScriptStrategy": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.ScriptStrategy),
/* harmony export */   "StaticQuery": () => (/* binding */ StaticQuery),
/* harmony export */   "StaticQueryContext": () => (/* binding */ StaticQueryContext),
/* harmony export */   "collectedScriptsByPage": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.collectedScriptsByPage),
/* harmony export */   "graphql": () => (/* binding */ graphql),
/* harmony export */   "navigate": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   "parsePath": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_5__.parsePath),
/* harmony export */   "prefetchPathname": () => (/* binding */ prefetchPathname),
/* harmony export */   "scriptCache": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCache),
/* harmony export */   "scriptCallbackCache": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCallbackCache),
/* harmony export */   "useScrollRestoration": () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_1__.useScrollRestoration),
/* harmony export */   "useStaticQuery": () => (/* binding */ useStaticQuery),
/* harmony export */   "withAssetPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_5__.withAssetPrefix),
/* harmony export */   "withPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_5__.withPrefix)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/dist/index.modern.mjs");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var gatsby_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-script */ "./node_modules/gatsby-script/dist/index.modern.mjs");






const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_3__["default"].enqueue;
const StaticQueryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});

function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}

const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};

const useStaticQuery = query => {
  var _context$query;

  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }

  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext); // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction

  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }

  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};

StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}




/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLoader": () => (/* binding */ BaseLoader),
/* harmony export */   "PageResourceStatus": () => (/* binding */ PageResourceStatus),
/* harmony export */   "ProdLoader": () => (/* binding */ ProdLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticQueryResults": () => (/* binding */ getStaticQueryResults),
/* harmony export */   "publicLoader": () => (/* binding */ publicLoader),
/* harmony export */   "setLoader": () => (/* binding */ setLoader)
/* harmony export */ });
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");



/**
 * Available resource loading statuses
 */

const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,

  /**
   * Resources loaded successfully
   */
  Success: `success`
};

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};

const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`);
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json${maybeSearch ? `?${maybeSearch}` : ``}`;
};

function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
}

const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
}; // Regex that matches common search crawlers


const BOT_REGEX = /bot|crawler|spider|crawling/i;

const toPageResources = (pageData, component = null, head) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError
  };
  return {
    component,
    head,
    json: pageData.result,
    page
  };
};

class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.isPrefetchQueueRunning = false;
    this.prefetchQueued = [];
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.setMatchPaths)(matchPaths);
  }

  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);

    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    } // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox


    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }

  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req; // Handle 200

      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }

          const maybeSearch = pagePath.split(`?`)[1];

          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`;
          }

          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {// continue regardless of error
        }
      } // Handle 404


      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        } // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s


        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      } // handle 500 response (Unrecoverable)


      if (status === 500) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      } // Handle everything else, including status === 0, and 503s. Should retry


      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      } // Retried 3 times already, result is an error.


      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }

  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);

      if (true) {
        return Promise.resolve(pageData);
      }
    }

    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }

  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findMatchPath)(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist


  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);

      if (true) {
        if (page.error) {
          return {
            error: page.error,
            status: page.status
          };
        }

        return Promise.resolve(page.payload);
      }
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    const inFlightPromise = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(allData => {
      const result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      let pageData = result.payload;
      const {
        componentChunkName,
        staticQueryHashes = []
      } = pageData;
      const finalResult = {}; // In develop we have separate chunks for template and Head components
      // to enable HMR (fast refresh requires single exports).
      // In production we have shared chunk with both exports. Double loadComponent here
      // will be deduped by webpack runtime resulting in single request and single module
      // being loaded for both `component` and `head`.

      const componentChunkPromise = Promise.all([this.loadComponent(componentChunkName), this.loadComponent(componentChunkName, `head`)]).then(([component, head]) => {
        finalResult.createdAt = new Date();
        let pageResources;

        if (!component || component instanceof Error) {
          finalResult.status = PageResourceStatus.Error;
          finalResult.error = component;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ``
          });
          pageResources = toPageResources(pageData, component, head);
        } // undefined if final result is an error


        return pageResources;
      });
      const staticQueryBatchPromise = Promise.all(staticQueryHashes.map(staticQueryHash => {
        // Check for cache in case this static query result has already been loaded
        if (this.staticQueryDb[staticQueryHash]) {
          const jsonPayload = this.staticQueryDb[staticQueryHash];
          return {
            staticQueryHash,
            jsonPayload
          };
        }

        return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
          const jsonPayload = JSON.parse(req.responseText);
          return {
            staticQueryHash,
            jsonPayload
          };
        }).catch(() => {
          throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
        });
      })).then(staticQueryResults => {
        const staticQueryResultsMap = {};
        staticQueryResults.forEach(({
          staticQueryHash,
          jsonPayload
        }) => {
          staticQueryResultsMap[staticQueryHash] = jsonPayload;
          this.staticQueryDb[staticQueryHash] = jsonPayload;
        });
        return staticQueryResultsMap;
      });
      return Promise.all([componentChunkPromise, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
        let payload;

        if (pageResources) {
          payload = { ...pageResources,
            staticQueryResults
          };
          finalResult.payload = payload;
          _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit(`onPostLoadPageResources`, {
            page: payload,
            pageResources: payload
          });
        }

        this.pageDb.set(pagePath, finalResult);

        if (finalResult.error) {
          return {
            error: finalResult.error,
            status: finalResult.status
          };
        }

        return payload;
      }) // when static-query fail to load we throw a better error
      .catch(err => {
        return {
          error: err,
          status: PageResourceStatus.Error
        };
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  } // returns undefined if the page does not exists in cache


  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);

      if (pageData.payload) {
        return pageData.payload;
      }

      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }

    return undefined;
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Don't prefetch if this is a crawler bot


    if (navigator.userAgent && BOT_REGEX.test(navigator.userAgent)) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {}
      };
    }

    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {}
      };
    }

    const defer = {
      resolve: null,
      reject: null,
      promise: null
    };
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    this.prefetchQueued.push([pagePath, defer]);
    const abortC = new AbortController();
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath); // remove from the queue

      if (index !== -1) {
        this.prefetchQueued.splice(index, 1);
      }
    });

    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true;
      setTimeout(() => {
        this._processNextPrefetchBatch();
      }, 3000);
    }

    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC)
    };
  }

  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0));

    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4);
      const prefetches = Promise.all(toPrefetch.map(([pagePath, dPromise]) => {
        // Tell plugins with custom prefetching logic that they should start
        // prefetching this path.
        if (!this.prefetchTriggered.has(pagePath)) {
          this.apiRunner(`onPrefetchPathname`, {
            pathname: pagePath
          });
          this.prefetchTriggered.add(pagePath);
        } // If a plugin has disabled core prefetching, stop now.


        if (this.prefetchDisabled) {
          return dPromise.resolve(false);
        }

        return this.doPrefetch((0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pagePath)).then(() => {
          if (!this.prefetchCompleted.has(pagePath)) {
            this.apiRunner(`onPostPrefetchPathname`, {
              pathname: pagePath
            });
            this.prefetchCompleted.add(pagePath);
          }

          dPromise.resolve(true);
        });
      }));

      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch();
          }, 3000);
        });
      } else {
        this.isPrefetchQueueRunning = false;
      }
    });
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    return (0,_prefetch__WEBPACK_IMPORTED_MODULE_0__["default"])(pageDataUrl, {
      crossOrigin: `anonymous`,
      as: `fetch`
    }).then(() => // This was just prefetched, so will return a response from
    // the cache instead of making another request to the server
    this.loadPageDataJson(pagePath));
  }

  hovering(rawPath) {
    this.loadPage(rawPath);
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);

    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }

  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  }

}

const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);

class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = chunkName => {
      if (!asyncRequires.components[chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);
      }

      return asyncRequires.components[chunkName]() // loader will handle the case when component is error
      .catch(err => err);
    };

    super(loadComponent, matchPaths);

    if (pageData) {
      this.pageDataDb.set((0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`
      });
    }
  }

  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_0__["default"])).then(() => pageData);
    });
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  }

}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch;
  }

  let [path, search = ``] = pathAndSearch.split(`?`);

  if (search) {
    search = `?` + search;
  }

  if (path === `/`) {
    return `/` + search;
  }

  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search;
  }

  return path + search;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }

  const fakeLink = document.createElement(`link`);

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }

    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};

const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};

const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;

if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");
 // Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);

  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }

  return redirect;
}

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }

  if (str === prefix) {
    return `/`;
  }

  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }

  return str;
}

/***/ }),

/***/ "./src/components/Contribute.js":
/*!**************************************!*\
  !*** ./src/components/Contribute.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contribute": () => (/* binding */ Contribute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

 // styling and functionality of writing, OverVue link below the developer card

const BottomDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  @media only screen and (max-width: 800px) {
    h2 {
    }
    h2::after {
      display: none;
    }
    .contribute {
      margin: 0em auto;
    }
  }
  height: 100%;
  justify-content: left;
  margin: 2rem;
  margin-top: 6rem;
  h2 {
    font-weight: 100;
  }
  h2::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1px;
    margin: 1em auto;
    width: 50%;
  }
  i {
    font-size: 1.1em;
    margin: 0em 0em;
    margin-left: 0.5em;
  }
  .contribute {
    width: 6.4rem;
    display: flex;
    margin: 2em auto;
    font-size: 1.1rem;
    padding: 10px;
    color: white;
    background-color: none;
    text-decoration: none;
    border-radius: 0.5rem;
    border: 1px solid white;
    background: none;
    font-family: sans-serif;
    transition: 200ms ease-in;
    &:hover {
      background-color: rgb(255, 255, 255, 0.2);
    }
  }
`;
const Contribute = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BottomDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Want to Contribute?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "OverVue is open source. Help make Vue prototyping better!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "contribute",
    href: "https://github.com/open-source-labs/OverVue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Github "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-github"
  })));
};

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/components/Navbar/navbar.js");


/***/ }),

/***/ "./src/components/Navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_logo_overvue_nav_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo/overvue-nav.png */ "./src/assets/logo/overvue-nav.png");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.css */ "./src/components/Navbar/navbar.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navbar_css__WEBPACK_IMPORTED_MODULE_3__);




function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav__logo",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_logo_overvue_nav_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav__action",
    to: "/docs"
  }, "Docs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "nav__action",
    to: "/examples"
  }, "Examples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/open-source-labs/OverVue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/Users/emma/Desktop/Codesmith/OverVueWebsite/OverVuePage/src/assets/logo/GitHub-Mark-120px-plus.png",
    alt: "black github logo"
  }))));
}

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.Navbar)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar/index.js");


/***/ }),

/***/ "./src/containers/Body.js":
/*!********************************!*\
  !*** ./src/containers/Body.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeadTwoStyle */ "./src/styles/HeadTwoStyle.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



const Body = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "margin-tb-small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Create Components"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Quickly start your project by creating and naming your first component. Interact with it in the CSS Container."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Add html element Gif",
    className: "shadow",
    src: "https://media.giphy.com/media/MHqQTb5Vdtewlra4pG/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Add and change HTML Elements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Add HTML elements inside your component. You can now modify the specifications of your prototype."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Add html element Gif",
    className: "shadow",
    src: "https://media.giphy.com/media/YyPpNuH86r25JZNd46/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Add attributes to components "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Add a class and/or an ID attribute to the component to tailor it to your needs."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Add component attribute Gif",
    className: "shadow",
    src: "https://media.giphy.com/media/3eKBo9Qfi16mVdGIz4/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Add Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "You can add personalized messages to help you keep track of your components."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Notes Gif",
    className: "shadow",
    src: "https://media.giphy.com/media/1ttTOYNOTYBSOoWtG1/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Add Two-Way Binding or other Attributes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Options to add attributes to add specific functionality such as two way binding and class is now available."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Add html element attribute Gif",
    className: "shadow",
    src: "https://media.giphy.com/media/aXMkIStyTE0jkNlRtO/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Style HTML Elements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Stylize HTML elements to visualize your product. Adjustable style options to include height, width, color, and size."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Style html elements Gif",
    className: "shadow",
    src: "https://media.giphy.com/media/Q0DYBMnuMLXoo5buvW/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Child Components"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Child components can be easily incorporated into the code snippet. Child components will be available to be added from the HTML element list."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Gif of adding child components",
    className: "shadow",
    src: "https://media.giphy.com/media/3j42CzkMDEpEFFbJZT/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Visualize Prototype"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Note the project's high level overview by visiting the Project Tree tab to observe the component\u2019s hierarchy."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Gif of visualizing the prototype project tree",
    className: "shadow",
    src: "https://media.giphy.com/media/vncIbdxJ36uU7a1bk3/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Code Snippet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "The boilerplate code is visible at every step of prototyping and dynamically updates according to new edits."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Gif of live rendering of code snippet",
    className: "shadow",
    src: "https://media.giphy.com/media/JLCUOmKfQpOmdWUf4l/giphy.gif"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadTwoStyle__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Export boilerplate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "p"
  }, "Export the prototype's code in a lightweight boilerplate and develop the product further in an IDE."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "Gif of exporting the prototype's boilerplate",
    className: "shadow",
    src: "https://media.giphy.com/media/v8IbYTVrgFboHgpxBB/giphy.gif"
  }))));
};
const Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  /* mobile */
  display: flex;
  margin: 4rem 12rem;
  align-items: flex-start;
  text-align: left;
  color: black;
  max-width: 70vw;

  h1 {
    margin-bottom: 1.5rem;
  }
  p {
    color: #666666 !important;
    font-size: 1.5rem;
    font-weight: 300;
  }
  h1::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1.5px;
    margin: 0.5em 0 0.75em;
  }
  img {
    margin: 0rem 1.2rem;
    width: 630px;
    max-width: 90vw;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    text-align: center;
    margin: 2rem 12rem;

    * {
      align-self: stretch;
      max-width: 800px;
    }

    .left {
      flex-direction: column;
    }
    .right {
      flex-direction: column;
    }
    h1::after {
      align-self: center;
      margin: 1em auto;
    }
  }
`;

/***/ }),

/***/ "./src/containers/Footer.js":
/*!**********************************!*\
  !*** ./src/containers/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DeveloperCard */ "./src/styles/DeveloperCard.js");
/* harmony import */ var _components_Contribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Contribute */ "./src/components/Contribute.js");
/* harmony import */ var _assets_dev_pics_ari_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/dev-pics/ari.jpg */ "./src/assets/dev-pics/ari.jpg");
/* harmony import */ var _assets_dev_pics_aram_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/dev-pics/aram.jpg */ "./src/assets/dev-pics/aram.jpg");
/* harmony import */ var _assets_dev_pics_Megan_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/dev-pics/Megan.jpeg */ "./src/assets/dev-pics/Megan.jpeg");
/* harmony import */ var _assets_dev_pics_dean_chung_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/dev-pics/dean-chung.png */ "./src/assets/dev-pics/dean-chung.png");
/* harmony import */ var _assets_dev_pics_deano_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/dev-pics/deano.jpg */ "./src/assets/dev-pics/deano.jpg");
/* harmony import */ var _assets_dev_pics_drew_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/dev-pics/drew.jpg */ "./src/assets/dev-pics/drew.jpg");
/* harmony import */ var _assets_dev_pics_joseph_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/dev-pics/joseph.jpg */ "./src/assets/dev-pics/joseph.jpg");
/* harmony import */ var _assets_dev_pics_alex_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/dev-pics/alex.png */ "./src/assets/dev-pics/alex.png");
/* harmony import */ var _assets_dev_pics_joju_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/dev-pics/joju.jpg */ "./src/assets/dev-pics/joju.jpg");
/* harmony import */ var _assets_dev_pics_keri_overvue_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/dev-pics/keri_overvue.png */ "./src/assets/dev-pics/keri_overvue.png");
/* harmony import */ var _assets_dev_pics_allison1_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/dev-pics/allison1.jpg */ "./src/assets/dev-pics/allison1.jpg");
/* harmony import */ var _assets_dev_pics_FarazPic_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/dev-pics/FarazPic.png */ "./src/assets/dev-pics/FarazPic.png");
/* harmony import */ var _assets_dev_pics_SeanPic_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/dev-pics/SeanPic.png */ "./src/assets/dev-pics/SeanPic.png");
/* harmony import */ var _assets_dev_pics_NicholasPic_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/dev-pics/NicholasPic.jpeg */ "./src/assets/dev-pics/NicholasPic.jpeg");
/* harmony import */ var _assets_dev_pics_TerryPic_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/dev-pics/TerryPic.jpg */ "./src/assets/dev-pics/TerryPic.jpg");
/* harmony import */ var _assets_dev_pics_alexlu_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/dev-pics/alexlu.jpg */ "./src/assets/dev-pics/alexlu.jpg");
/* harmony import */ var _assets_dev_pics_jeffrey_jpeg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/dev-pics/jeffrey.jpeg */ "./src/assets/dev-pics/jeffrey.jpeg");
/* harmony import */ var _assets_dev_pics_kenny_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/dev-pics/kenny.jpg */ "./src/assets/dev-pics/kenny.jpg");
/* harmony import */ var _assets_dev_pics_bender_jpeg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/dev-pics/bender.jpeg */ "./src/assets/dev-pics/bender.jpeg");
/* harmony import */ var _assets_dev_pics_sonny_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/dev-pics/sonny.jpg */ "./src/assets/dev-pics/sonny.jpg");
/* harmony import */ var _assets_dev_pics_ross_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/dev-pics/ross.jpg */ "./src/assets/dev-pics/ross.jpg");
/* harmony import */ var _assets_dev_pics_gabby_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/dev-pics/gabby.jpg */ "./src/assets/dev-pics/gabby.jpg");
/* harmony import */ var _assets_dev_pics_shanon_jpeg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/dev-pics/shanon.jpeg */ "./src/assets/dev-pics/shanon.jpeg");
/* harmony import */ var _assets_dev_pics_zoew_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/dev-pics/zoew.png */ "./src/assets/dev-pics/zoew.png");
/* harmony import */ var _assets_dev_pics_julia_jpeg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/dev-pics/julia.jpeg */ "./src/assets/dev-pics/julia.jpeg");
/* harmony import */ var _assets_dev_pics_kerolos_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/dev-pics/kerolos.jpg */ "./src/assets/dev-pics/kerolos.jpg");
/* harmony import */ var _assets_dev_pics_bryanb_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/dev-pics/bryanb.png */ "./src/assets/dev-pics/bryanb.png");
/* harmony import */ var _assets_dev_pics_keyla_jpeg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/dev-pics/keyla.jpeg */ "./src/assets/dev-pics/keyla.jpeg");
/* harmony import */ var _assets_dev_pics_johnny_jpeg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/dev-pics/johnny.jpeg */ "./src/assets/dev-pics/johnny.jpeg");
/* harmony import */ var _assets_dev_pics_jace_jpeg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/dev-pics/jace.jpeg */ "./src/assets/dev-pics/jace.jpeg");
/* harmony import */ var _assets_dev_pics_katherine_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/dev-pics/katherine.png */ "./src/assets/dev-pics/katherine.png");


































/** functionality for loading developer cards components, and the contribute components **/

const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "footer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
  className: "team-heading"
}, "Meet the team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "devCards"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_deano_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
  alt: "deano",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Dean Ohashi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/dnohashi"
}, "@dnohashi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_dean_chung_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  alt: "deanf",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Dean Chung"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/deanfchung"
}, "@deanfchung")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_drew_jpg__WEBPACK_IMPORTED_MODULE_8__["default"],
  alt: "drew",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Drew Nguyen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/drewngyen"
}, "@drewngyen")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_joseph_jpg__WEBPACK_IMPORTED_MODULE_9__["default"],
  alt: "joseph",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Joseph Eisele"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/jeisele2"
}, "@jeisele")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_alex_png__WEBPACK_IMPORTED_MODULE_10__["default"],
  alt: "alex",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Alexander Havas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/LOLDragoon"
}, "@LOLDragoon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_keri_overvue_png__WEBPACK_IMPORTED_MODULE_12__["default"],
  alt: "keriann",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Keriann Lin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/keliphan"
}, "@keliphan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_joju_jpg__WEBPACK_IMPORTED_MODULE_11__["default"],
  alt: "joju",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Joju Olaode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/JojuOlaode"
}, "@JojuOlaode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_allison1_jpg__WEBPACK_IMPORTED_MODULE_13__["default"],
  alt: "allison",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Allison Pratt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/allisons11"
}, "@allisons11")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_FarazPic_png__WEBPACK_IMPORTED_MODULE_14__["default"],
  alt: "faraz",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Faraz Moallemi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/farazmoallemi"
}, "@farazmoallemi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_SeanPic_png__WEBPACK_IMPORTED_MODULE_15__["default"],
  alt: "sean",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Sean Grace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/ziggrace"
}, "@ziggrace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_TerryPic_jpg__WEBPACK_IMPORTED_MODULE_17__["default"],
  alt: "terry",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Terry L. Tilley"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/codeByCandlelight"
}, "@codeByCandlelight")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_NicholasPic_jpeg__WEBPACK_IMPORTED_MODULE_16__["default"],
  alt: "nicholas",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Nicholas Schillaci"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/Schillaci767"
}, "@Schillaci767")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_alexlu_jpg__WEBPACK_IMPORTED_MODULE_18__["default"],
  alt: "alexlu",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Alex Lu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/aleckslu"
}, "@aleckslu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_jeffrey_jpeg__WEBPACK_IMPORTED_MODULE_19__["default"],
  alt: "jeffrey",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Jeffrey Sul"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/jeffreysul"
}, "@jeffreysul")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_kenny_jpg__WEBPACK_IMPORTED_MODULE_20__["default"],
  alt: "kenny",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Kenneth Lee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/kennyea"
}, "@kennyea")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_bender_jpeg__WEBPACK_IMPORTED_MODULE_21__["default"],
  alt: "bender",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Ryan Bender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/rdbender"
}, "@rdbender")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_sonny_jpg__WEBPACK_IMPORTED_MODULE_22__["default"],
  alt: "sonny",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Sonny Nguyen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/sn163"
}, "@sn163")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_shanon_jpeg__WEBPACK_IMPORTED_MODULE_25__["default"],
  alt: "shanon",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Shanon Lee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/shanon98lee"
}, "@shanon98lee")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_ross_jpg__WEBPACK_IMPORTED_MODULE_23__["default"],
  alt: "ross",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Ross Lamerson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/lamerson28"
}, "@lamerson28")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_gabby_jpg__WEBPACK_IMPORTED_MODULE_24__["default"],
  alt: "gabby",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Gabriella Kokhabi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/gkokhabi"
}, "@gkokhabi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_zoew_png__WEBPACK_IMPORTED_MODULE_26__["default"],
  alt: "zoew",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Zoew McGrath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/Z-McGrath"
}, "@Z-McGrath")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_aram_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
  alt: "aram",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Aram Paparian"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/apaparian"
}, "@apaparian")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_bryanb_png__WEBPACK_IMPORTED_MODULE_29__["default"],
  alt: "bryan",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Bryan Bart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/MrBeeAreWhy"
}, "@MrBeeAreWhy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_julia_jpeg__WEBPACK_IMPORTED_MODULE_27__["default"],
  alt: "julia",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Julia Bakerink"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/jbbake"
}, "@jbbake")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_Megan_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"],
  alt: "megan",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Megan Nadkarni"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/megatera"
}, "@megatera")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_kerolos_jpg__WEBPACK_IMPORTED_MODULE_28__["default"],
  alt: "kerolos",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Kerolos Nesem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/Kerolos-Nesem"
}, "@Kerolos-Nesem")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_keyla_jpeg__WEBPACK_IMPORTED_MODULE_30__["default"],
  alt: "keyla",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Keyla Koizumi Nishimura"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/keylakoizumin"
}, "@keylakoizumin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_johnny_jpeg__WEBPACK_IMPORTED_MODULE_31__["default"],
  alt: "johnny",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Johnny Chan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/jchan444"
}, "@jchan444")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_jace_jpeg__WEBPACK_IMPORTED_MODULE_32__["default"],
  alt: "jace",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Jace Crowe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/JaceCrowe"
}, "@JaceCrowe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_katherine_png__WEBPACK_IMPORTED_MODULE_33__["default"],
  alt: "katherine",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Katherine Kim"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/katherinek123"
}, "@katherinek123")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DeveloperCard__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_dev_pics_ari_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: "ari",
  className: "dev-pic"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "dev-name"
}, "Ari the Cat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/MrBeeAreWhy"
}, "@DatAriLyfe"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contribute__WEBPACK_IMPORTED_MODULE_2__.Contribute, null));

/***/ }),

/***/ "./src/containers/Hero.js":
/*!********************************!*\
  !*** ./src/containers/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _styles_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Button */ "./src/styles/Button.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.js");
/* harmony import */ var _assets_logo_overvue_trans_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo/overvue_trans.png */ "./src/assets/logo/overvue_trans.png");





const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};
const button = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};
/** Downloads application for windows and mac
    main title and delay of words appearing  **/

const Hero = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderStyles, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "title"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  alt: "OverVue logo",
  id: "mainLogo",
  src: _assets_logo_overvue_trans_png__WEBPACK_IMPORTED_MODULE_2__["default"]
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {
  initial: "hidden",
  animate: "visible",
  variants: variants,
  transition: {
    delay: 1
  },
  className: "subtitle"
}, "Prototype driven development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
  initial: "hidden",
  animate: "visible",
  variants: button,
  transition: {
    delay: 2,
    x: {
      type: "inertia",
      stiffness: 50
    },
    default: {
      duration: 1
    }
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "title"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Version 7.0 Now Available")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
  className: "button",
  href: "https://github.com/open-source-labs/OverVue/releases/download/v7.0.0/OverVue-Linuxv-7.0.0.dmg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "download"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Download for"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
  className: "fab fa-apple"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
  className: "button",
  href: "https://github.com/open-source-labs/OverVue/releases/download/v7.0.0/OverVue-Windows-v7.0.0.zip"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "download"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Download for"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
  className: "fab fa-windows"
})))));
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  flex-direction: column;
  height: 98vh;
  background: rgb(37, 96, 159);
  background: linear-gradient(
    107deg,
    rgb(52, 73, 94) 0%,
    rgb(1, 4, 31) 70%
  );
  align-items: center;
  justify-content: center;
  img {
    height: 8rem;
    margin-right: 1.5rem;
  }
  p {
    margin-right: 0.5em;
    font-size: 1em;
  }
  i {
    font-size: 1.1em;
    margin-left: 0.5em;
  }
  .title {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subtitle {
    font-size: 1.3rem;
    margin: 2rem;
    font-weight: 100;
  }
  #name {
    font-size: 7rem;
    color: whitesmoke;
    margin-right: 0.75em;
    font-weight: 600;
  }
  @media only screen and (max-width: 830px) {
    .title {
      margin:  0px;
    }
    #name {
      font-size: 2.6rem;
    }
  }
  @media only screen and (max-width: 700px){
    .subtitle {
      margin .5em;
    }
    img {
      max-height: 100px;
    }
  }
  @media only screen and (max-width: 400px) {
    margin: 0 auto;
    #name {
      font-size: 3rem;
      margin: 0px;
    }
    .title {
      flex-direction: column;
      margin: 0px;
      justify-content: center;
      align-items: center;
    }
    p {
      margin-bottom: 1em;
    }
    img {
      margin: 0px;
    }
  }
  #download {
    font-weight: 200;
    display: flex;
    justify-content: center;
  }
  .light-font {
    font-weight: 400;
  }
  #demo {
    margin-right: 0px;
  }
  span {
    padding: 0;
    margin: 0;
  }
`;

/***/ }),

/***/ "./src/containers/index.js":
/*!*********************************!*\
  !*** ./src/containers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* reexport safe */ _Body__WEBPACK_IMPORTED_MODULE_0__.Body),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.Footer),
/* harmony export */   "Hero": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_2__.Hero)
/* harmony export */ });
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Body */ "./src/containers/Body.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/containers/Footer.js");
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero */ "./src/containers/Hero.js");




/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Homepage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers */ "./src/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_3__);




function Homepage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers__WEBPACK_IMPORTED_MODULE_1__.Hero, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers__WEBPACK_IMPORTED_MODULE_1__.Body, null));
}

/***/ }),

/***/ "./src/styles/Button.js":
/*!******************************!*\
  !*** ./src/styles/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  font-size: 1.1rem;
  padding: 10px;
  color: white;

  background-color: none;
  text-decoration: none;
  border-radius: 0.5rem;
  border: 1px solid white;
  font-family: sans-serif;
  transition: 200ms ease-in;
  &:hover {
    background-color: rgb(255, 255, 255, 0.2);
  }
  margin-top: 1rem;
  padding: 0.5em 1.2em;
  display: inline-block;
  border: 0.8px solid white;
`;

/***/ }),

/***/ "./src/styles/DeveloperCard.js":
/*!*************************************!*\
  !*** ./src/styles/DeveloperCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
 // styling for the developer card in footer

const DeveloperCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 8em;
  height: 8e,;
  margin: 2.25em;

  .dev-pic {
    margin-bottom: 1em;
    border-radius: 100%;
    width: 8em;
    height: 8em;
  }
  .dev-name {
    color: #dde;
    line-height: 1.7em;
    font-weight: 500;
  }
  a {
    color: #dde;
    text-decoration: none;
    font-size: .9em;
    font-weight: 500;
    margin-bottom: -2.25em;
  }
  a:hover {
    color: #eef;
    transition: 0.3s;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeveloperCard);

/***/ }),

/***/ "./src/styles/HeadTwoStyle.js":
/*!************************************!*\
  !*** ./src/styles/HeadTwoStyle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
// styled component for <h2> header
 // Heading of body

const HeadTwoStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin: 1em;

  div {
    margin-top: -.35em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  h2 {
    font-size: 18px;
    /* text-transform: uppercase; */
    font-weight: 200;
  }
  p {
    font-size: 14px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadTwoStyles);

/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant),
/* harmony export */   "warning": () => (/* binding */ warning)
/* harmony export */ });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getType": () => (/* binding */ getType),
/* harmony export */   "isAnyObject": () => (/* binding */ isAnyObject),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBlob": () => (/* binding */ isBlob),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isEmptyObject": () => (/* binding */ isEmptyObject),
/* harmony export */   "isEmptyString": () => (/* binding */ isEmptyString),
/* harmony export */   "isError": () => (/* binding */ isError),
/* harmony export */   "isFile": () => (/* binding */ isFile),
/* harmony export */   "isFullArray": () => (/* binding */ isFullArray),
/* harmony export */   "isFullObject": () => (/* binding */ isFullObject),
/* harmony export */   "isFullString": () => (/* binding */ isFullString),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isMap": () => (/* binding */ isMap),
/* harmony export */   "isNaNValue": () => (/* binding */ isNaNValue),
/* harmony export */   "isNull": () => (/* binding */ isNull),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isObjectLike": () => (/* binding */ isObjectLike),
/* harmony export */   "isOneOf": () => (/* binding */ isOneOf),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isRegExp": () => (/* binding */ isRegExp),
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isType": () => (/* binding */ isType),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isWeakMap": () => (/* binding */ isWeakMap),
/* harmony export */   "isWeakSet": () => (/* binding */ isWeakSet)
/* harmony export */ });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is { [K in any]: never }}
 */
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isFullObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length > 0;
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {*} payload
 * @returns {payload is AnyFunction}
 */
function isFunction(payload) {
    return typeof payload === 'function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {any} payload
 * @returns {payload is any[]}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a an array with at least 1 item
 *
 * @param {*} payload
 * @returns {payload is any[]}
 */
function isFullArray(payload) {
    return isArray(payload) && payload.length > 0;
}
/**
 * Returns whether the payload is a an empty array
 *
 * @param {*} payload
 * @returns {payload is []}
 */
function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number (but not NaN)
 *
 * This will return `false` for `NaN`!!
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return getType(payload) === 'Number' && !isNaN(payload);
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map<any, any>}
 */
function isMap(payload) {
    return getType(payload) === 'Map';
}
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap<any, any>}
 */
function isWeakMap(payload) {
    return getType(payload) === 'WeakMap';
}
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set<any>}
 */
function isSet(payload) {
    return getType(payload) === 'Set';
}
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet<any>}
 */
function isWeakSet(payload) {
    return getType(payload) === 'WeakSet';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return getType(payload) === 'Symbol';
}
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return getType(payload) === 'Date' && !isNaN(payload);
}
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
function isBlob(payload) {
    return getType(payload) === 'Blob';
}
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
function isFile(payload) {
    return getType(payload) === 'File';
}
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise<any>}
 */
function isPromise(payload) {
    return getType(payload) === 'Promise';
}
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
function isError(payload) {
    return getType(payload) === 'Error';
}
/**
 * Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`)
 *
 * @param {*} payload
 * @returns {payload is typeof NaN}
 */
function isNaNValue(payload) {
    return getType(payload) === 'Number' && isNaN(payload);
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
var isNullOrUndefined = isOneOf(isNull, isUndefined);
function isOneOf(a, b, c, d, e) {
    return function (value) {
        return a(value) || b(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e && e(value));
    };
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}




/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatArrays": () => (/* binding */ concatArrays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(newComer)) {
        // extend merge rules
        if (extensions && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(originVal) && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);



/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./src/components/Navbar/navbar.css":
/*!******************************************!*\
  !*** ./src/components/Navbar/navbar.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/decay.js":
/*!***********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/decay.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decay": () => (/* binding */ decay)
/* harmony export */ });
function decay(_a) {
    var _b = _a.velocity, velocity = _b === void 0 ? 0 : _b, _c = _a.from, from = _c === void 0 ? 0 : _c, _d = _a.power, power = _d === void 0 ? 0.8 : _d, _e = _a.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = _a.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = _a.modifyTarget;
    var state = { done: false, value: from };
    var amplitude = power * velocity;
    var ideal = from + amplitude;
    var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal)
        amplitude = target - from;
    return {
        next: function (t) {
            var delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: function () { },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/keyframes.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertOffsetToTimes": () => (/* binding */ convertOffsetToTimes),
/* harmony export */   "defaultEasing": () => (/* binding */ defaultEasing),
/* harmony export */   "defaultOffset": () => (/* binding */ defaultOffset),
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/interpolate.js */ "./node_modules/popmotion/dist/es/utils/interpolate.js");
/* harmony import */ var _easing_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/index.js */ "./node_modules/popmotion/dist/es/easing/index.js");



function defaultEasing(values, easing) {
    return values.map(function () { return easing || _easing_index_js__WEBPACK_IMPORTED_MODULE_0__.easeInOut; }).splice(0, values.length - 1);
}
function defaultOffset(values) {
    var numValues = values.length;
    return values.map(function (_value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
}
function convertOffsetToTimes(offset, duration) {
    return offset.map(function (o) { return o * duration; });
}
function keyframes(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, ease = _a.ease, offset = _a.offset, _d = _a.duration, duration = _d === void 0 ? 300 : _d;
    var state = { done: false, value: from };
    var values = Array.isArray(to) ? to : [from, to];
    var times = convertOffsetToTimes(offset && offset.length === values.length
        ? offset
        : defaultOffset(values), duration);
    function createInterpolator() {
        return (0,_utils_interpolate_js__WEBPACK_IMPORTED_MODULE_1__.interpolate)(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
    }
    var interpolator = createInterpolator();
    return {
        next: function (t) {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: function () {
            values.reverse();
            interpolator = createInterpolator();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/spring.js":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/spring.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spring": () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/find-spring.js */ "./node_modules/popmotion/dist/es/animations/utils/find-spring.js");



var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some(function (key) { return options[key] !== undefined; });
}
function getSpringOptions(options) {
    var springOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        var derived = (0,_utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__.findSpring)(options);
        springOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var _b = _a.from, from = _b === void 0 ? 0.0 : _b, _c = _a.to, to = _c === void 0 ? 1.0 : _c, _d = _a.restSpeed, restSpeed = _d === void 0 ? 2 : _d, restDelta = _a.restDelta, options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["from", "to", "restSpeed", "restDelta"]);
    var state = { done: false, value: from };
    var _e = getSpringOptions(options), stiffness = _e.stiffness, damping = _e.damping, mass = _e.mass, velocity = _e.velocity, duration = _e.duration, isResolvedFromDuration = _e.isResolvedFromDuration;
    var resolveSpring = zero;
    var resolveVelocity = zero;
    function createSpring() {
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var initialDelta = to - from;
        var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        restDelta !== null && restDelta !== void 0 ? restDelta : (restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4);
        if (dampingRatio < 1) {
            var angularFreq_1 = (0,_utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq_1) *
                            Math.sin(angularFreq_1 * t) +
                            initialDelta * Math.cos(angularFreq_1 * t)));
            };
            resolveVelocity = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (dampingRatio *
                    undampedAngularFreq *
                    envelope *
                    ((Math.sin(angularFreq_1 * t) *
                        (initialVelocity +
                            dampingRatio *
                                undampedAngularFreq *
                                initialDelta)) /
                        angularFreq_1 +
                        initialDelta * Math.cos(angularFreq_1 * t)) -
                    envelope *
                        (Math.cos(angularFreq_1 * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta) -
                            angularFreq_1 *
                                initialDelta *
                                Math.sin(angularFreq_1 * t)));
            };
        }
        else if (dampingRatio === 1) {
            resolveSpring = function (t) {
                return to -
                    Math.exp(-undampedAngularFreq * t) *
                        (initialDelta +
                            (initialVelocity + undampedAngularFreq * initialDelta) *
                                t);
            };
        }
        else {
            var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
                return (to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq_1 *
                                initialDelta *
                                Math.cosh(freqForT))) /
                        dampedAngularFreq_1);
            };
        }
    }
    createSpring();
    return {
        next: function (t) {
            var current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                var currentVelocity = resolveVelocity(t) * 1000;
                var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: function () {
            var _a;
            velocity = -velocity;
            _a = [to, from], from = _a[0], to = _a[1];
            createSpring();
        },
    };
}
spring.needsInterpolation = function (a, b) {
    return typeof a === "string" || typeof b === "string";
};
var zero = function (_t) { return 0; };




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/index.js":
/*!************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_detect_animation_from_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/detect-animation-from-options.js */ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/interpolate.js */ "./node_modules/popmotion/dist/es/utils/interpolate.js");
/* harmony import */ var _utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/elapsed.js */ "./node_modules/popmotion/dist/es/animations/utils/elapsed.js");






var framesync = function (update) {
    var passTimestamp = function (_a) {
        var delta = _a.delta;
        return update(delta);
    };
    return {
        start: function () { return framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(passTimestamp, true); },
        stop: function () { return framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(passTimestamp); },
    };
};
function animate(_a) {
    var _b, _c;
    var from = _a.from, _d = _a.autoplay, autoplay = _d === void 0 ? true : _d, _e = _a.driver, driver = _e === void 0 ? framesync : _e, _f = _a.elapsed, elapsed = _f === void 0 ? 0 : _f, _g = _a.repeat, repeatMax = _g === void 0 ? 0 : _g, _h = _a.repeatType, repeatType = _h === void 0 ? "loop" : _h, _j = _a.repeatDelay, repeatDelay = _j === void 0 ? 0 : _j, onPlay = _a.onPlay, onStop = _a.onStop, onComplete = _a.onComplete, onRepeat = _a.onRepeat, onUpdate = _a.onUpdate, options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    var to = options.to;
    var driverControls;
    var repeatCount = 0;
    var computedDuration = options.duration;
    var latest;
    var isComplete = false;
    var isForwardPlayback = true;
    var interpolateFromNumber;
    var animator = (0,_utils_detect_animation_from_options_js__WEBPACK_IMPORTED_MODULE_2__.detectAnimationFromOptions)(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = (0,_utils_interpolate_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)([0, 100], [from, to], {
            clamp: false,
        });
        from = 0;
        to = 100;
    }
    var animation = animator((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { from: from, to: to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = (0,_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__.reverseElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        }
        else {
            elapsed = (0,_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__.loopElapsed)(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror")
                animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback)
            delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            var state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0)
                computedDuration !== null && computedDuration !== void 0 ? computedDuration : (computedDuration = elapsed);
            if (repeatCount < repeatMax) {
                (0,_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__.hasRepeatDelayElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            }
            else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: function () {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/inertia.js":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/inertia.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inertia": () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/popmotion/dist/es/animations/index.js");
/* harmony import */ var _utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/velocity-per-second.js */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");





function inertia(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.velocity, velocity = _c === void 0 ? 0 : _c, min = _a.min, max = _a.max, _d = _a.power, power = _d === void 0 ? 0.8 : _d, _e = _a.timeConstant, timeConstant = _e === void 0 ? 750 : _e, _f = _a.bounceStiffness, bounceStiffness = _f === void 0 ? 500 : _f, _g = _a.bounceDamping, bounceDamping = _g === void 0 ? 10 : _g, _h = _a.restDelta, restDelta = _h === void 0 ? 1 : _h, modifyTarget = _a.modifyTarget, driver = _a.driver, onUpdate = _a.onUpdate, onComplete = _a.onComplete;
    var currentAnimation;
    function isOutOfBounds(v) {
        return (min !== undefined && v < min) || (max !== undefined && v > max);
    }
    function boundaryNearest(v) {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.animate)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { driver: driver, onUpdate: function (v) {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete: onComplete }));
    }
    function startSpring(options) {
        startAnimation((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
    }
    else {
        var target = power * velocity + from;
        if (typeof modifyTarget !== "undefined")
            target = modifyTarget(target);
        var boundary_1 = boundaryNearest(target);
        var heading_1 = boundary_1 === min ? -1 : 1;
        var prev_1;
        var current_1;
        var checkBoundary = function (v) {
            prev_1 = current_1;
            current_1 = v;
            velocity = (0,_utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_3__.velocityPerSecond)(v - prev_1, (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().delta);
            if ((heading_1 === 1 && v > boundary_1) ||
                (heading_1 === -1 && v < boundary_1)) {
                startSpring({ from: v, to: boundary_1, velocity: velocity });
            }
        };
        startAnimation({
            type: "decay",
            from: from,
            velocity: velocity,
            timeConstant: timeConstant,
            power: power,
            restDelta: restDelta,
            modifyTarget: modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        });
    }
    return {
        stop: function () { return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop(); },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectAnimationFromOptions": () => (/* binding */ detectAnimationFromOptions)
/* harmony export */ });
/* harmony import */ var _generators_spring_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/spring.js */ "./node_modules/popmotion/dist/es/animations/generators/spring.js");
/* harmony import */ var _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/keyframes.js */ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js");
/* harmony import */ var _generators_decay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/decay.js */ "./node_modules/popmotion/dist/es/animations/generators/decay.js");




var types = { keyframes: _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes, spring: _generators_spring_js__WEBPACK_IMPORTED_MODULE_1__.spring, decay: _generators_decay_js__WEBPACK_IMPORTED_MODULE_2__.decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (types[config.type]) {
        return types[config.type];
    }
    var keys = new Set(Object.keys(config));
    if (keys.has("ease") ||
        (keys.has("duration") && !keys.has("dampingRatio"))) {
        return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (keys.has("dampingRatio") ||
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")) {
        return _generators_spring_js__WEBPACK_IMPORTED_MODULE_1__.spring;
    }
    return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_0__.keyframes;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/elapsed.js":
/*!********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/elapsed.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasRepeatDelayElapsed": () => (/* binding */ hasRepeatDelayElapsed),
/* harmony export */   "loopElapsed": () => (/* binding */ loopElapsed),
/* harmony export */   "reverseElapsed": () => (/* binding */ reverseElapsed)
/* harmony export */ });
function loopElapsed(elapsed, duration, delay) {
    if (delay === void 0) { delay = 0; }
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
    if (delay === void 0) { delay = 0; }
    if (isForwardPlayback === void 0) { isForwardPlayback = true; }
    return isForwardPlayback
        ? loopElapsed(duration + -elapsed, duration, delay)
        : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/find-spring.js":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/find-spring.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcAngularFreq": () => (/* binding */ calcAngularFreq),
/* harmony export */   "findSpring": () => (/* binding */ findSpring),
/* harmony export */   "maxDamping": () => (/* binding */ maxDamping),
/* harmony export */   "maxDuration": () => (/* binding */ maxDuration),
/* harmony export */   "minDamping": () => (/* binding */ minDamping),
/* harmony export */   "minDuration": () => (/* binding */ minDuration)
/* harmony export */ });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");



var safeMin = 0.001;
var minDuration = 0.01;
var maxDuration = 10.0;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring(_a) {
    var _b = _a.duration, duration = _b === void 0 ? 800 : _b, _c = _a.bounce, bounce = _c === void 0 ? 0.25 : _c, _d = _a.velocity, velocity = _d === void 0 ? 0 : _d, _e = _a.mass, mass = _e === void 0 ? 1 : _e;
    var envelope;
    var derivative;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
    var dampingRatio = 1 - bounce;
    dampingRatio = (0,_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDamping, maxDamping, dampingRatio);
    duration = (0,_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = function (undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var a = exponentialDecay - velocity;
            var b = calcAngularFreq(undampedFreq, dampingRatio);
            var c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = function (undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var d = delta * velocity + velocity;
            var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            var f = Math.exp(-delta);
            var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        envelope = function (undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = function (undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    var initialGuess = 5 / duration;
    var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1000;
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration: duration,
        };
    }
    else {
        var stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness: stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration: duration,
        };
    }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    var result = initialGuess;
    for (var i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/cubic-bezier.js":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/cubic-bezier.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicBezier": () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/popmotion/dist/es/easing/index.js");


var a = function (a1, a2) { return 1.0 - 3.0 * a2 + 3.0 * a1; };
var b = function (a1, a2) { return 3.0 * a2 - 6.0 * a1; };
var c = function (a1) { return 3.0 * a1; };
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX;
    var currentT;
    var i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < newtonIterations; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.linear;
    var sampleValues = new Float32Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) /
            (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function (t) {
        return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/index.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anticipate": () => (/* binding */ anticipate),
/* harmony export */   "backIn": () => (/* binding */ backIn),
/* harmony export */   "backInOut": () => (/* binding */ backInOut),
/* harmony export */   "backOut": () => (/* binding */ backOut),
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn),
/* harmony export */   "bounceInOut": () => (/* binding */ bounceInOut),
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut),
/* harmony export */   "circIn": () => (/* binding */ circIn),
/* harmony export */   "circInOut": () => (/* binding */ circInOut),
/* harmony export */   "circOut": () => (/* binding */ circOut),
/* harmony export */   "easeIn": () => (/* binding */ easeIn),
/* harmony export */   "easeInOut": () => (/* binding */ easeInOut),
/* harmony export */   "easeOut": () => (/* binding */ easeOut),
/* harmony export */   "linear": () => (/* binding */ linear)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/popmotion/dist/es/easing/utils.js");


var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var linear = function (p) { return p; };
var easeIn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createExpoIn)(2);
var easeOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(easeIn);
var easeInOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(easeIn);
var circIn = function (p) { return 1 - Math.sin(Math.acos(p)); };
var circOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
var circInOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(circOut);
var backIn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createBackIn)(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(backIn);
var backInOut = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(backIn);
var anticipate = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createAnticipate)(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    if (p === 1 || p === 0)
        return p;
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD
        ? 7.5625 * p2
        : p < BOUNCE_SECOND_THRESHOLD
            ? 9.075 * p2 - 9.9 * p + 3.4
            : p < BOUNCE_THIRD_THRESHOLD
                ? ca * p2 - cb * p + cc
                : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(bounceOut);
var bounceInOut = function (p) {
    return p < 0.5
        ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0))
        : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnticipate": () => (/* binding */ createAnticipate),
/* harmony export */   "createBackIn": () => (/* binding */ createBackIn),
/* harmony export */   "createExpoIn": () => (/* binding */ createExpoIn),
/* harmony export */   "mirrorEasing": () => (/* binding */ mirrorEasing),
/* harmony export */   "reverseEasing": () => (/* binding */ reverseEasing)
/* harmony export */ });
var reverseEasing = function (easing) { return function (p) { return 1 - easing(1 - p); }; };
var mirrorEasing = function (easing) { return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
}; };
var createExpoIn = function (power) { return function (p) { return Math.pow(p, power); }; };
var createBackIn = function (power) { return function (p) {
    return p * p * ((power + 1) * p - power);
}; };
var createAnticipate = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1
            ? 0.5 * backEasing(p)
            : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/clamp.js":
/*!*******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/clamp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/distance.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/distance.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distance": () => (/* binding */ distance)
/* harmony export */ });
/* harmony import */ var _is_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-point.js */ "./node_modules/popmotion/dist/es/utils/is-point.js");
/* harmony import */ var _is_point_3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-point-3d.js */ "./node_modules/popmotion/dist/es/utils/is-point-3d.js");
/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inc.js */ "./node_modules/popmotion/dist/es/utils/inc.js");




var distance1D = function (a, b) { return Math.abs(a - b); };
function distance(a, b) {
    if ((0,_inc_js__WEBPACK_IMPORTED_MODULE_0__.isNum)(a) && (0,_inc_js__WEBPACK_IMPORTED_MODULE_0__.isNum)(b)) {
        return distance1D(a, b);
    }
    else if ((0,_is_point_js__WEBPACK_IMPORTED_MODULE_1__.isPoint)(a) && (0,_is_point_js__WEBPACK_IMPORTED_MODULE_1__.isPoint)(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = (0,_is_point_3d_js__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(a) && (0,_is_point_3d_js__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/inc.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/inc.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNum": () => (/* binding */ isNum),
/* harmony export */   "zeroPoint": () => (/* binding */ zeroPoint)
/* harmony export */ });
var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) { return typeof v === 'number'; };




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/interpolate.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/interpolate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolate": () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.js */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _mix_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix-color.js */ "./node_modules/popmotion/dist/es/utils/mix-color.js");
/* harmony import */ var _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-complex.js */ "./node_modules/popmotion/dist/es/utils/mix-complex.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var _clamp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");
/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe.js */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");









var mixNumber = function (from, to) { return function (p) { return (0,_mix_js__WEBPACK_IMPORTED_MODULE_1__.mix)(from, to, p); }; };
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_2__.color.test(v)) {
            return _mix_color_js__WEBPACK_IMPORTED_MODULE_3__.mixColor;
        }
        else {
            return _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__.mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__.mixArray;
    }
    else if (typeof v === 'object') {
        return _mix_complex_js__WEBPACK_IMPORTED_MODULE_4__.mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = (0,_pipe_js__WEBPACK_IMPORTED_MODULE_5__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function (v) { return mixer((0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.progress)(from, to, v)); };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = (0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.progress)(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, isClamp = _c === void 0 ? true : _c, ease = _b.ease, mixer = _b.mixer;
    var inputLength = input.length;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(inputLength === output.length, 'Both input and output ranges must be the same length');
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return isClamp
        ? function (v) { return interpolator((0,_clamp_js__WEBPACK_IMPORTED_MODULE_7__.clamp)(input[0], input[inputLength - 1], v)); }
        : interpolator;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point-3d.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point-3d.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint3D": () => (/* binding */ isPoint3D)
/* harmony export */ });
/* harmony import */ var _is_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-point.js */ "./node_modules/popmotion/dist/es/utils/is-point.js");


var isPoint3D = function (point) {
    return (0,_is_point_js__WEBPACK_IMPORTED_MODULE_0__.isPoint)(point) && point.hasOwnProperty('z');
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint": () => (/* binding */ isPoint)
/* harmony export */ });
var isPoint = function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-color.js":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-color.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixColor": () => (/* binding */ mixColor),
/* harmony export */   "mixLinearColor": () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hex.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/rgba.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hsla.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");





var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_1__.hex, style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba, style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla];
var getColorType = function (v) {
    return colorTypes.find(function (type) { return type.test(v); });
};
var notAnimatable = function (color) {
    return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!fromColorType, notAnimatable(from));
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!toColorType, notAnimatable(to));
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(fromColorType.transform === toColorType.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla ? _mix_js__WEBPACK_IMPORTED_MODULE_5__.mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== "alpha") {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = (0,_mix_js__WEBPACK_IMPORTED_MODULE_5__.mix)(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-complex.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-complex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixArray": () => (/* binding */ mixArray),
/* harmony export */   "mixComplex": () => (/* binding */ mixComplex),
/* harmony export */   "mixObject": () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _mix_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-color.js */ "./node_modules/popmotion/dist/es/utils/mix-color.js");
/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inc.js */ "./node_modules/popmotion/dist/es/utils/inc.js");
/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe.js */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");








function getMixer(origin, target) {
    if ((0,_inc_js__WEBPACK_IMPORTED_MODULE_1__.isNum)(origin)) {
        return function (v) { return (0,_mix_js__WEBPACK_IMPORTED_MODULE_2__.mix)(origin, target, v); };
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__.color.test(origin)) {
        return (0,_mix_color_js__WEBPACK_IMPORTED_MODULE_4__.mixColor)(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)([], from);
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) { return getMixer(fromThis, to[i]); });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, origin), target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_6__.complex.parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_6__.complex.createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return (0,_pipe_js__WEBPACK_IMPORTED_MODULE_7__.pipe)(mixArray(originStats.parsed, targetStats.parsed), template);
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mix": () => (/* binding */ mix)
/* harmony export */ });
var mix = function (from, to, progress) {
    return -progress * from + progress * to + from;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/pipe.js":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/pipe.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
var pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/progress.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/progress.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "progress": () => (/* binding */ progress)
/* harmony export */ });
var progress = function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js":
/*!*********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/velocity-per-second.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "velocityPerSecond": () => (/* binding */ velocityPerSecond)
/* harmony export */ });
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/popmotion/node_modules/tslib/tslib.es6.js":
/*!****************************************************************!*\
  !*** ./node_modules/popmotion/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hex.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hex": () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.js */ "./node_modules/style-value-types/dist/es/color/rgba.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");



function parseHex(v) {
    var r = '';
    var g = '';
    var b = '';
    var a = '';
    if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
    }
    else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
var hex = {
    test: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isColorString)('#'),
    parse: parseHex,
    transform: _rgba_js__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hsla.js":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hsla.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hsla": () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.js */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");





var hsla = {
    test: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isColorString)('hsl', 'hue'),
    parse: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.splitColor)('hue', 'saturation', 'lightness'),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return ('hsla(' +
            Math.round(hue) +
            ', ' +
            _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ', ' +
            _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ', ' +
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_js__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ')');
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "color": () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _hex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.js */ "./node_modules/style-value-types/dist/es/color/hex.js");
/* harmony import */ var _hsla_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.js */ "./node_modules/style-value-types/dist/es/color/hsla.js");
/* harmony import */ var _rgba_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.js */ "./node_modules/style-value-types/dist/es/color/rgba.js");





var color = {
    test: function (v) { return _rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_js__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v); },
    parse: function (v) {
        if (_rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_js__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: function (v) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(v)
            ? v
            : v.hasOwnProperty('red')
                ? _rgba_js__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_js__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/rgba.js":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/rgba.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbUnit": () => (/* binding */ rgbUnit),
/* harmony export */   "rgba": () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/style-value-types/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");





var clampRgbUnit = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255);
var rgbUnit = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _numbers_index_js__WEBPACK_IMPORTED_MODULE_2__.number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
var rgba = {
    test: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isColorString)('rgb', 'red'),
    parse: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.splitColor)('red', 'green', 'blue'),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return 'rgba(' +
            rgbUnit.transform(red) +
            ', ' +
            rgbUnit.transform(green) +
            ', ' +
            rgbUnit.transform(blue) +
            ', ' +
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.sanitize)(_numbers_index_js__WEBPACK_IMPORTED_MODULE_2__.alpha.transform(alpha$1)) +
            ')';
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isColorString": () => (/* binding */ isColorString),
/* harmony export */   "splitColor": () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");


var isColorString = function (type, testProp) { return function (v) {
    return Boolean(((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && _utils_js__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
}; };
var splitColor = function (aName, bName, cName) { return function (v) {
    var _a;
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v))
        return v;
    var _b = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex), a = _b[0], b = _b[1], c = _b[2], alpha = _b[3];
    return _a = {},
        _a[aName] = parseFloat(a),
        _a[bName] = parseFloat(b),
        _a[cName] = parseFloat(c),
        _a.alpha = alpha !== undefined ? parseFloat(alpha) : 1,
        _a;
}; };




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/filter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/style-value-types/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");




var maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function applyDefaultFilter(v) {
    var _a = v.slice(0, -1).split('('), name = _a[0], value = _a[1];
    if (name === 'drop-shadow')
        return v;
    var number = (value.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [])[0];
    if (!number)
        return v;
    var unit = value.replace(number, '');
    var defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + '(' + defaultValue + unit + ')';
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _index_js__WEBPACK_IMPORTED_MODULE_2__.complex), { getAnimatableNone: function (v) {
        var functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(' ') : v;
    } });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complex": () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color/index.js */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");




var colorToken = '${c}';
var numberToken = '${n}';
function test(v) {
    var _a, _b, _c, _d;
    return (isNaN(v) &&
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v) &&
        ((_b = (_a = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0);
}
function analyse(v) {
    var values = [];
    var numColors = 0;
    var colors = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.colorRegex);
    if (colors) {
        numColors = colors.length;
        v = v.replace(_utils_js__WEBPACK_IMPORTED_MODULE_0__.colorRegex, colorToken);
        values.push.apply(values, colors.map(_color_index_js__WEBPACK_IMPORTED_MODULE_1__.color.parse));
    }
    var numbers = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex);
    if (numbers) {
        v = v.replace(_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatRegex, numberToken);
        values.push.apply(values, numbers.map(_numbers_index_js__WEBPACK_IMPORTED_MODULE_2__.number.parse));
    }
    return { values: values, numColors: numColors, tokenised: v };
}
function parse(v) {
    return analyse(v).values;
}
function createTransformer(v) {
    var _a = analyse(v), values = _a.values, numColors = _a.numColors, tokenised = _a.tokenised;
    var numValues = values.length;
    return function (v) {
        var output = tokenised;
        for (var i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? _color_index_js__WEBPACK_IMPORTED_MODULE_1__.color.transform(v[i]) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.sanitize)(v[i]));
        }
        return output;
    };
}
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
function getAnimatableNone(v) {
    var parsed = parse(v);
    var transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test: test, parse: parse, createTransformer: createTransformer, getAnimatableNone: getAnimatableNone };




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "scale": () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/style-value-types/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");



var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; },
};
var alpha = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, number), { transform: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(0, 1) });
var scale = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, number), { default: 1 });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/units.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/units.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "percent": () => (/* binding */ percent),
/* harmony export */   "progressPercentage": () => (/* binding */ progressPercentage),
/* harmony export */   "px": () => (/* binding */ px),
/* harmony export */   "vh": () => (/* binding */ vh),
/* harmony export */   "vw": () => (/* binding */ vw)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/style-value-types/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");



var createUnitType = function (unit) { return ({
    test: function (v) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; },
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "colorRegex": () => (/* binding */ colorRegex),
/* harmony export */   "floatRegex": () => (/* binding */ floatRegex),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "sanitize": () => (/* binding */ sanitize),
/* harmony export */   "singleColorRegex": () => (/* binding */ singleColorRegex)
/* harmony export */ });
var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v) {
    return typeof v === 'string';
}




/***/ }),

/***/ "./node_modules/style-value-types/node_modules/tslib/tslib.es6.js":
/*!************************************************************************!*\
  !*** ./node_modules/style-value-types/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": () => (/* binding */ ServerStyleSheet),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ StyleSheetConsumer),
/* harmony export */   "StyleSheetContext": () => (/* binding */ StyleSheetContext),
/* harmony export */   "StyleSheetManager": () => (/* binding */ StyleSheetManager),
/* harmony export */   "ThemeConsumer": () => (/* binding */ ThemeConsumer),
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext),
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider),
/* harmony export */   "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS": () => (/* binding */ __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS),
/* harmony export */   "createGlobalStyle": () => (/* binding */ createGlobalStyle),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isStyledComponent": () => (/* binding */ isStyledComponent),
/* harmony export */   "keyframes": () => (/* binding */ keyframes),
/* harmony export */   "withTheme": () => (/* binding */ withTheme)
/* harmony export */ });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");











// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : 0) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (({}).REACT_APP_SC_ATTR || ({}).SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (({}).REACT_APP_SC_DISABLE_SPEEDY || ({}).SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : 0;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new (stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default())({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new (stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default())({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : 0;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isElement)(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic =  false && 0;
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : 0);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__.ForwardRef] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = (0,memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    if (IS_BROWSER) {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new (stream__WEBPACK_IMPORTED_MODULE_5___default().Transform)({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = (0,memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children) : 0
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_9___default().instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    appendChild: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired)
  })
} : 0;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || (0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_6__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? (0,merge_anything__WEBPACK_IMPORTED_MODULE_7__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default().Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

//# sourceMappingURL=styled-components.esm.js.map


/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/***/ ((module) => {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		0
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/***/ ((module) => {

!function(e){ true?module.exports=e(null):0}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./src/assets/dev-pics/FarazPic.png":
/*!******************************************!*\
  !*** ./src/assets/dev-pics/FarazPic.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/FarazPic-f4defca1092746232255585e050d55f8.png");

/***/ }),

/***/ "./src/assets/dev-pics/Megan.jpeg":
/*!****************************************!*\
  !*** ./src/assets/dev-pics/Megan.jpeg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,MzYsODIsNSwyOCwxMjcsMTUsMTM0LDEzOSwxMDQsMTc4LDI2LDQxLDIyMyw3OSwxLDMyLDIwNywxLDMyLDE5Miw2Niw5LDI5LDExOCwwLDIwLDE3LDEwNiwxNjYsMjM1LDIyMCw0NiwxOCwyMjgsNTUsNTksMjMzLDIyMSw2NCwyMTcsNiwxNzAsNywxMTksMTgxLDk3LDEwMCwxNjIsMTkyLDE0NywxMDAsMjEzLDE1LDE2LDE1OSwzMCwxNiw3LDYsMTkwLDE4NywxMCwyMjQsNCwyMjEsMTU0LDExMywyMzgsMTU5LDE5NCwxNjEsMTQyLDk1LDE4NiwxMDQsMTc5LDI0LDM0LDEwMCw5LDIzMCw3Nyw3NywyMDYsMjUwLDMyLDI0MCwxMzgsMjM2LDE4MSwxNjIsMTgxLDE0MCw4MiwyMzksMTc3LDk5LDY3LDIsMjIzLDIzNywxNTYsMTIyLDE0LDE2NywxMDMsNTQ=");

/***/ }),

/***/ "./src/assets/dev-pics/NicholasPic.jpeg":
/*!**********************************************!*\
  !*** ./src/assets/dev-pics/NicholasPic.jpeg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/NicholasPic-9c7a73c06653d3371dd7957f08bd9694.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/SeanPic.png":
/*!*****************************************!*\
  !*** ./src/assets/dev-pics/SeanPic.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/SeanPic-61e2739c4f430daa92b73e02330cc22e.png");

/***/ }),

/***/ "./src/assets/dev-pics/TerryPic.jpg":
/*!******************************************!*\
  !*** ./src/assets/dev-pics/TerryPic.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/TerryPic-d96ec57005f76850e5ea251f69f0e31f.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/alex.png":
/*!**************************************!*\
  !*** ./src/assets/dev-pics/alex.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/alex-e7d8ec0220dbd842e81fb0f848d72ef5.png");

/***/ }),

/***/ "./src/assets/dev-pics/alexlu.jpg":
/*!****************************************!*\
  !*** ./src/assets/dev-pics/alexlu.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/alexlu-f7006f2965fa85467985b9e716488d1b.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/allison1.jpg":
/*!******************************************!*\
  !*** ./src/assets/dev-pics/allison1.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/allison1-66635022a393f9ee5b40b6672a516a32.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/aram.jpg":
/*!**************************************!*\
  !*** ./src/assets/dev-pics/aram.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/aram-134471c0eec5dbae27591e16e89a0e55.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/ari.jpg":
/*!*************************************!*\
  !*** ./src/assets/dev-pics/ari.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/ari-57559d165e4cba73f133d62baab9efc0.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/bender.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/dev-pics/bender.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/bender-ad9fe3e72a4e0efa079b34e93b7af888.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/bryanb.png":
/*!****************************************!*\
  !*** ./src/assets/dev-pics/bryanb.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/bryanb-771312bb1e10f6961cc894ec9a2cda64.png");

/***/ }),

/***/ "./src/assets/dev-pics/dean-chung.png":
/*!********************************************!*\
  !*** ./src/assets/dev-pics/dean-chung.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/dean-chung-c509e0731a54883677d133809df03f6d.png");

/***/ }),

/***/ "./src/assets/dev-pics/deano.jpg":
/*!***************************************!*\
  !*** ./src/assets/dev-pics/deano.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/deano-81513e35ca1141201c1caea97839c736.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/drew.jpg":
/*!**************************************!*\
  !*** ./src/assets/dev-pics/drew.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/drew-446f4f19325a88a566c853eb2b1ed656.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/gabby.jpg":
/*!***************************************!*\
  !*** ./src/assets/dev-pics/gabby.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/gabby-d63d202e91db97d93587053f0cef4d12.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/jace.jpeg":
/*!***************************************!*\
  !*** ./src/assets/dev-pics/jace.jpeg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/jace-de54c38318fe0d71ed2bec081ff1069d.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/jeffrey.jpeg":
/*!******************************************!*\
  !*** ./src/assets/dev-pics/jeffrey.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/jeffrey-e343ecfe2140ae08b477263f3487d2cc.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/johnny.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/dev-pics/johnny.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/johnny-94dc9be812814f2cbc212421dd07b646.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/joju.jpg":
/*!**************************************!*\
  !*** ./src/assets/dev-pics/joju.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/joju-36882e065b2883c7fcae4195c1796fcc.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/joseph.jpg":
/*!****************************************!*\
  !*** ./src/assets/dev-pics/joseph.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/joseph-bc19ebec7535621222f07a87d0ee0af8.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/julia.jpeg":
/*!****************************************!*\
  !*** ./src/assets/dev-pics/julia.jpeg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/julia-e96cabc3df01f0458f04613cd9d81d3d.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/katherine.png":
/*!*******************************************!*\
  !*** ./src/assets/dev-pics/katherine.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/katherine-dec76a184191f4195f32875a0875d967.png");

/***/ }),

/***/ "./src/assets/dev-pics/kenny.jpg":
/*!***************************************!*\
  !*** ./src/assets/dev-pics/kenny.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/kenny-ab9e26c0b935797e122d5b009415844d.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/keri_overvue.png":
/*!**********************************************!*\
  !*** ./src/assets/dev-pics/keri_overvue.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/keri_overvue-6d36c8d7c7fa7df57c4d82e8f752cb7a.png");

/***/ }),

/***/ "./src/assets/dev-pics/kerolos.jpg":
/*!*****************************************!*\
  !*** ./src/assets/dev-pics/kerolos.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/kerolos-f52e1f7cd14f94cde0483a4ccf5d1fb1.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/keyla.jpeg":
/*!****************************************!*\
  !*** ./src/assets/dev-pics/keyla.jpeg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/keyla-89689f5f640513f45324b3e0340437d2.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/ross.jpg":
/*!**************************************!*\
  !*** ./src/assets/dev-pics/ross.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/ross-f6e3c0141168f4f2f190b437e32ba870.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/shanon.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/dev-pics/shanon.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/shanon-87a7f573991b97c848d54f1fadf21b79.jpeg");

/***/ }),

/***/ "./src/assets/dev-pics/sonny.jpg":
/*!***************************************!*\
  !*** ./src/assets/dev-pics/sonny.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/sonny-d63fa843e81abf6b78e38752a6245a8f.jpg");

/***/ }),

/***/ "./src/assets/dev-pics/zoew.png":
/*!**************************************!*\
  !*** ./src/assets/dev-pics/zoew.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/zoew-55698b82334ae17899b02ae9dc7f01f7.png");

/***/ }),

/***/ "./src/assets/logo/overvue-nav.png":
/*!*****************************************!*\
  !*** ./src/assets/logo/overvue-nav.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/overvue-nav-fe945487d1c39a3d04ed186dd4ec327c.png");

/***/ }),

/***/ "./src/assets/logo/overvue_trans.png":
/*!*******************************************!*\
  !*** ./src/assets/logo/overvue_trans.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/overvue_trans-63423075735fcdf2cfc39e1c0684e126.png");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/gatsby-link/dist/index.modern.mjs":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-link/dist/index.modern.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ w),
/* harmony export */   "navigate": () => (/* binding */ P),
/* harmony export */   "parsePath": () => (/* binding */ a),
/* harmony export */   "withAssetPrefix": () => (/* binding */ m),
/* harmony export */   "withPrefix": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");
/* harmony import */ var gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-page-utils/apply-trailing-slash-option */ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js");
"client export"
;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=> true? true?"":0:0;function h(t,e=(()=> true? true?"":0:0)()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:p())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const f=t=>null==t?void 0:t.startsWith("/"),u=()=> true?"legacy":0,_=(t,e)=>{if("number"==typeof t)return t;if(!l(t))return t;const{pathname:r,search:o,hash:i}=a(t),c=u();let p=t;return"always"!==c&&"never"!==c||(p=`${(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__.applyTrailingSlashOption)(r,c)}${o}${i}`),f(p)?h(p):function(t,e){if(f(t))return t;const r=u(),o=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.resolve)(t,e);return"always"===r||"never"===r?(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__.applyTrailingSlashOption)(o,r):o}(p,e)},d=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];function m(t){return h(t,p())}const y={activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3__.string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_3__.object,partiallyActive:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool};function v(t){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,({location:n})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,i({},t,{_location:n})))}class b extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(_(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver(n=>{n.forEach(n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)})});return n.observe(t),{instance:n,el:t}})(t,t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()}))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,d); false||l(n)||console.warn(`External link ${n} was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links`);const m=_(n,f.pathname);return l(m)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Link,i({to:m,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(m);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(m)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(m,{state:p,replace:e})}return!0}},u)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",i({href:m},u))}}b.propTypes=i({},y,{onClick:prop_types__WEBPACK_IMPORTED_MODULE_3__.func,to:prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,replace:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3__.object});var w=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((t,n)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(v,i({innerRef:n},t)));const P=(t,e)=>{window.___navigate(_(t,window.location.pathname),e)};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map