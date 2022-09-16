/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.ei = __webpack_unused_export__ = undefined;

var _invariant = __webpack_require__(6128);

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
        !matchIsNotReserved ?  false ? 0 : (0, _invariant2.default)(false) : void 0;
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
__webpack_unused_export__ = startsWith;
exports.ei = pick;
__webpack_unused_export__ = match;
__webpack_unused_export__ = resolve;
__webpack_unused_export__ = insertParams;
__webpack_unused_export__ = validateRedirect;
__webpack_unused_export__ = shallowCompare;

/***/ }),

/***/ 1073:
/***/ ((module) => {

module.exports = {
	trueFunc: function trueFunc(){
		return true;
	},
	falseFunc: function falseFunc(){
		return false;
	}
};

/***/ }),

/***/ 996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.attributeRules = void 0;
var boolbase_1 = __webpack_require__(1073);
/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */
var caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink",
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean"
        ? selector.ignoreCase
        : selector.ignoreCase === "quirks"
            ? !!options.quirksMode
            : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
/**
 * Attribute selectors
 */
exports.attributeRules = {
    equals: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length === value.length &&
                    attr.toLowerCase() === value &&
                    next(elem));
            };
        }
        return function (elem) {
            return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
    },
    hyphen: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    (attr.length === len || attr.charAt(len) === "-") &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return function hyphen(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                (attr.length === len || attr.charAt(len) === "-") &&
                attr.substr(0, len) === value &&
                next(elem));
        };
    },
    element: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (/\s/.test(value)) {
            return boolbase_1.falseFunc;
        }
        var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                attr.length >= value.length &&
                regex.test(attr) &&
                next(elem));
        };
    },
    exists: function (next, _a, _b) {
        var name = _a.name;
        var adapter = _b.adapter;
        return function (elem) { return adapter.hasAttrib(elem, name) && next(elem); };
    },
    start: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (len === 0) {
            return boolbase_1.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= len &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return function (elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) &&
                next(elem);
        };
    },
    end: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        if (len === 0) {
            return boolbase_1.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var _a;
                return ((_a = adapter
                    .getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return function (elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) &&
                next(elem);
        };
    },
    any: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (value === "") {
            return boolbase_1.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            var regex_1 = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= value.length &&
                    regex_1.test(attr) &&
                    next(elem));
            };
        }
        return function (elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) &&
                next(elem);
        };
    },
    not: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (value === "") {
            return function (elem) {
                return !!adapter.getAttributeValue(elem, name) && next(elem);
            };
        }
        else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return ((attr == null ||
                    attr.length !== value.length ||
                    attr.toLowerCase() !== value) &&
                    next(elem));
            };
        }
        return function (elem) {
            return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
    },
};


/***/ }),

/***/ 8866:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compileToken = exports.compileUnsafe = exports.compile = void 0;
var css_what_1 = __webpack_require__(7763);
var boolbase_1 = __webpack_require__(1073);
var sort_1 = __importDefault(__webpack_require__(7353));
var procedure_1 = __webpack_require__(7177);
var general_1 = __webpack_require__(3621);
var subselects_1 = __webpack_require__(1768);
/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */
function compile(selector, options, context) {
    var next = compileUnsafe(selector, options, context);
    return (0, subselects_1.ensureIsTag)(next, options.adapter);
}
exports.compile = compile;
function compileUnsafe(selector, options, context) {
    var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
    return compileToken(token, options, context);
}
exports.compileUnsafe = compileUnsafe;
function includesScopePseudo(t) {
    return (t.type === "pseudo" &&
        (t.name === "scope" ||
            (Array.isArray(t.data) &&
                t.data.some(function (data) { return data.some(includesScopePseudo); }))));
}
var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
var FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant",
};
var SCOPE_TOKEN = {
    type: css_what_1.SelectorType.Pseudo,
    name: "scope",
    data: null,
};
/*
 * CSS 4 Spec (Draft): 3.3.1. Absolutizing a Scope-relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */
function absolutize(token, _a, context) {
    var adapter = _a.adapter;
    // TODO Use better check if the context is a document
    var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function (e) {
        var parent = adapter.isTag(e) && adapter.getParent(e);
        return e === subselects_1.PLACEHOLDER_ELEMENT || (parent && adapter.isTag(parent));
    }));
    for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
        var t = token_1[_i];
        if (t.length > 0 && (0, procedure_1.isTraversal)(t[0]) && t[0].type !== "descendant") {
            // Don't continue in else branch
        }
        else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        }
        else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token = token.filter(function (t) { return t.length > 0; });
    token.forEach(sort_1.default);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    var isArrayContext = Array.isArray(context);
    var finalContext = context && (Array.isArray(context) ? context : [context]);
    absolutize(token, options, finalContext);
    var shouldTestNextSiblings = false;
    var query = token
        .map(function (rules) {
        if (rules.length >= 2) {
            var first = rules[0], second = rules[1];
            if (first.type !== "pseudo" || first.name !== "scope") {
                // Ignore
            }
            else if (isArrayContext && second.type === "descendant") {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            }
            else if (second.type === "adjacent" ||
                second.type === "sibling") {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    })
        .reduce(reduceRules, boolbase_1.falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
exports.compileToken = compileToken;
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce(function (previous, rule) {
        return previous === boolbase_1.falseFunc
            ? boolbase_1.falseFunc
            : (0, general_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
    }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.trueFunc);
}
function reduceRules(a, b) {
    if (b === boolbase_1.falseFunc || a === boolbase_1.trueFunc) {
        return a;
    }
    if (a === boolbase_1.falseFunc || b === boolbase_1.trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
}


/***/ }),

/***/ 3621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compileGeneralSelector = void 0;
var attributes_1 = __webpack_require__(996);
var pseudo_selectors_1 = __webpack_require__(8677);
var css_what_1 = __webpack_require__(7763);
/*
 * All available rules
 */
function compileGeneralSelector(next, selector, options, context, compileToken) {
    var adapter = options.adapter, equals = options.equals;
    switch (selector.type) {
        case css_what_1.SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
        }
        case css_what_1.SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
        }
        case css_what_1.SelectorType.Attribute: {
            if (selector.namespace != null) {
                throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
                selector.name = selector.name.toLowerCase();
            }
            return attributes_1.attributeRules[selector.action](next, selector, options);
        }
        case css_what_1.SelectorType.Pseudo: {
            return (0, pseudo_selectors_1.compilePseudoSelector)(next, selector, options, context, compileToken);
        }
        // Tags
        case css_what_1.SelectorType.Tag: {
            if (selector.namespace != null) {
                throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            var name_1 = selector.name;
            if (!options.xmlMode || options.lowerCaseTags) {
                name_1 = name_1.toLowerCase();
            }
            return function tag(elem) {
                return adapter.getName(elem) === name_1 && next(elem);
            };
        }
        // Traversal
        case css_what_1.SelectorType.Descendant: {
            if (options.cacheResults === false ||
                typeof WeakSet === "undefined") {
                return function descendant(elem) {
                    var current = elem;
                    while ((current = adapter.getParent(current))) {
                        if (adapter.isTag(current) && next(current)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            // @ts-expect-error `ElementNode` is not extending object
            var isFalseCache_1 = new WeakSet();
            return function cachedDescendant(elem) {
                var current = elem;
                while ((current = adapter.getParent(current))) {
                    if (!isFalseCache_1.has(current)) {
                        if (adapter.isTag(current) && next(current)) {
                            return true;
                        }
                        isFalseCache_1.add(current);
                    }
                }
                return false;
            };
        }
        case "_flexibleDescendant": {
            // Include element itself, only used while querying an array
            return function flexibleDescendant(elem) {
                var current = elem;
                do {
                    if (adapter.isTag(current) && next(current))
                        return true;
                } while ((current = adapter.getParent(current)));
                return false;
            };
        }
        case css_what_1.SelectorType.Parent: {
            return function parent(elem) {
                return adapter
                    .getChildren(elem)
                    .some(function (elem) { return adapter.isTag(elem) && next(elem); });
            };
        }
        case css_what_1.SelectorType.Child: {
            return function child(elem) {
                var parent = adapter.getParent(elem);
                return parent != null && adapter.isTag(parent) && next(parent);
            };
        }
        case css_what_1.SelectorType.Sibling: {
            return function sibling(elem) {
                var siblings = adapter.getSiblings(elem);
                for (var i = 0; i < siblings.length; i++) {
                    var currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling) && next(currentSibling)) {
                        return true;
                    }
                }
                return false;
            };
        }
        case css_what_1.SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
                return function adjacent(elem) {
                    var previous = adapter.prevElementSibling(elem);
                    return previous != null && next(previous);
                };
            }
            return function adjacent(elem) {
                var siblings = adapter.getSiblings(elem);
                var lastElement;
                for (var i = 0; i < siblings.length; i++) {
                    var currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling)) {
                        lastElement = currentSibling;
                    }
                }
                return !!lastElement && next(lastElement);
            };
        }
        case css_what_1.SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
                throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
        }
    }
}
exports.compileGeneralSelector = compileGeneralSelector;


/***/ }),

/***/ 5366:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
var DomUtils = __importStar(__webpack_require__(9432));
var boolbase_1 = __webpack_require__(1073);
var compile_1 = __webpack_require__(8866);
var subselects_1 = __webpack_require__(1768);
var defaultEquals = function (a, b) { return a === b; };
var defaultOptions = {
    adapter: DomUtils,
    equals: defaultEquals,
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */
    // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    var opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : (opts.adapter = DomUtils);
    // @ts-expect-error `equals` does not exist on `Options`
    (_b = opts.equals) !== null && _b !== void 0 ? _b : (opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals);
    return opts;
}
function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        var opts = convertOptionFormats(options);
        return func(selector, opts, context);
    };
}
/**
 * Compiles the query, returns a function.
 */
exports.compile = wrapCompile(compile_1.compile);
exports._compileUnsafe = wrapCompile(compile_1.compileUnsafe);
exports._compileToken = wrapCompile(compile_1.compileToken);
function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
        var opts = convertOptionFormats(options);
        if (typeof query !== "function") {
            query = (0, compile_1.compileUnsafe)(query, opts, elements);
        }
        var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
    };
}
function prepareContext(elems, adapter, shouldTestNextSiblings) {
    if (shouldTestNextSiblings === void 0) { shouldTestNextSiblings = false; }
    /*
     * Add siblings if the query requires them.
     * See https://github.com/fb55/css-select/pull/43#issuecomment-225414692
     */
    if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
    }
    return Array.isArray(elems)
        ? adapter.removeSubsets(elems)
        : adapter.getChildren(elems);
}
exports.prepareContext = prepareContext;
function appendNextSiblings(elem, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
    var elemsLength = elems.length;
    for (var i = 0; i < elemsLength; i++) {
        var nextSiblings = (0, subselects_1.getNextSiblings)(elems[i], adapter);
        elems.push.apply(elems, nextSiblings);
    }
    return elems;
}
/**
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elems Elements to query. If it is an element, its children will be queried..
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns All matching elements.
 *
 */
exports.selectAll = getSelectorFunc(function (query, elems, options) {
    return query === boolbase_1.falseFunc || !elems || elems.length === 0
        ? []
        : options.adapter.findAll(query, elems);
});
/**
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elems Elements to query. If it is an element, its children will be queried..
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns the first match, or null if there was no match.
 */
exports.selectOne = getSelectorFunc(function (query, elems, options) {
    return query === boolbase_1.falseFunc || !elems || elems.length === 0
        ? null
        : options.adapter.findOne(query, elems);
});
/**
 * Tests whether or not an element is matched by query.
 *
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elem The element to test if it matches the query.
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns
 */
function is(elem, query, options) {
    var opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : (0, compile_1.compile)(query, opts))(elem);
}
exports.is = is;
/**
 * Alias for selectAll(query, elems, options).
 * @see [compile] for supported selector queries.
 */
exports["default"] = exports.selectAll;
// Export filters, pseudos and aliases to allow users to supply their own.
var pseudo_selectors_1 = __webpack_require__(8677);
Object.defineProperty(exports, "filters", ({ enumerable: true, get: function () { return pseudo_selectors_1.filters; } }));
Object.defineProperty(exports, "pseudos", ({ enumerable: true, get: function () { return pseudo_selectors_1.pseudos; } }));
Object.defineProperty(exports, "aliases", ({ enumerable: true, get: function () { return pseudo_selectors_1.aliases; } }));


/***/ }),

/***/ 7177:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isTraversal = exports.procedure = void 0;
exports.procedure = {
    universal: 50,
    tag: 30,
    attribute: 1,
    pseudo: 0,
    "pseudo-element": 0,
    "column-combinator": -1,
    descendant: -1,
    child: -1,
    parent: -1,
    sibling: -1,
    adjacent: -1,
    _flexibleDescendant: -1,
};
function isTraversal(t) {
    return exports.procedure[t.type] < 0;
}
exports.isTraversal = isTraversal;


/***/ }),

/***/ 2968:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.aliases = void 0;
/**
 * Aliases are pseudos that are expressed as selectors.
 */
exports.aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])",
};


/***/ }),

/***/ 7689:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filters = void 0;
var nth_check_1 = __importDefault(__webpack_require__(7540));
var boolbase_1 = __webpack_require__(1073);
function getChildFunc(next, adapter) {
    return function (elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
exports.filters = {
    contains: function (next, text, _a) {
        var adapter = _a.adapter;
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains: function (next, text, _a) {
        var adapter = _a.adapter;
        var itext = text.toLowerCase();
        return function icontains(elem) {
            return (next(elem) &&
                adapter.getText(elem).toLowerCase().includes(itext));
        };
    },
    // Location specific methods
    "nth-child": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root: function (next, _rule, _a) {
        var adapter = _a.adapter;
        return function (elem) {
            var parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope: function (next, rule, options, context) {
        var equals = options.equals;
        if (!context || context.length === 0) {
            // Equivalent to :root
            return exports.filters.root(next, rule, options);
        }
        if (context.length === 1) {
            // NOTE: can't be unpacked, as :has uses this for side-effects
            return function (elem) { return equals(context[0], elem) && next(elem); };
        }
        return function (elem) { return context.includes(elem) && next(elem); };
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive"),
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */
function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, _a) {
        var adapter = _a.adapter;
        var func = adapter[name];
        if (typeof func !== "function") {
            return boolbase_1.falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
}


/***/ }),

/***/ 8677:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
/*
 * Pseudo selectors
 *
 * Pseudo selectors are available in three forms:
 *
 * 1. Filters are called when the selector is compiled and return a function
 *  that has to return either false, or the results of `next()`.
 * 2. Pseudos are called on execution. They have to return a boolean.
 * 3. Subselects work like filters, but have an embedded selector that will be run separately.
 *
 * Filters are great if you want to do some pre-processing, or change the call order
 * of `next()` and your code.
 * Pseudos should be used to implement simple checks.
 */
var boolbase_1 = __webpack_require__(1073);
var css_what_1 = __webpack_require__(7763);
var filters_1 = __webpack_require__(7689);
Object.defineProperty(exports, "filters", ({ enumerable: true, get: function () { return filters_1.filters; } }));
var pseudos_1 = __webpack_require__(7221);
Object.defineProperty(exports, "pseudos", ({ enumerable: true, get: function () { return pseudos_1.pseudos; } }));
var aliases_1 = __webpack_require__(2968);
Object.defineProperty(exports, "aliases", ({ enumerable: true, get: function () { return aliases_1.aliases; } }));
var subselects_1 = __webpack_require__(1768);
function compilePseudoSelector(next, selector, options, context, compileToken) {
    var name = selector.name, data = selector.data;
    if (Array.isArray(data)) {
        return subselects_1.subselects[name](next, data, options, context, compileToken);
    }
    if (name in aliases_1.aliases) {
        if (data != null) {
            throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
        }
        // The alias has to be parsed here, to make sure options are respected.
        var alias = (0, css_what_1.parse)(aliases_1.aliases[name]);
        return subselects_1.subselects.is(next, alias, options, context, compileToken);
    }
    if (name in filters_1.filters) {
        return filters_1.filters[name](next, data, options, context);
    }
    if (name in pseudos_1.pseudos) {
        var pseudo_1 = pseudos_1.pseudos[name];
        (0, pseudos_1.verifyPseudoArgs)(pseudo_1, name, data);
        return pseudo_1 === boolbase_1.falseFunc
            ? boolbase_1.falseFunc
            : next === boolbase_1.trueFunc
                ? function (elem) { return pseudo_1(elem, options, data); }
                : function (elem) { return pseudo_1(elem, options, data) && next(elem); };
    }
    throw new Error("unmatched pseudo-class :".concat(name));
}
exports.compilePseudoSelector = compilePseudoSelector;


/***/ }),

/***/ 7221:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verifyPseudoArgs = exports.pseudos = void 0;
// While filters are precompiled, pseudos get called when they are needed
exports.pseudos = {
    empty: function (elem, _a) {
        var adapter = _a.adapter;
        return !adapter.getChildren(elem).some(function (elem) {
            // FIXME: `getText` call is potentially expensive.
            return adapter.isTag(elem) || adapter.getText(elem) !== "";
        });
    },
    "first-child": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var firstChild = adapter
            .getSiblings(elem)
            .find(function (elem) { return adapter.isTag(elem); });
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
                return true;
            if (adapter.isTag(siblings[i]))
                break;
        }
        return false;
    },
    "first-of-type": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var elemName = adapter.getName(elem);
        return adapter
            .getSiblings(elem)
            .every(function (sibling) {
            return equals(elem, sibling) ||
                !adapter.isTag(sibling) ||
                adapter.getName(sibling) !== elemName;
        });
    },
    "only-child": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        return adapter
            .getSiblings(elem)
            .every(function (sibling) { return equals(elem, sibling) || !adapter.isTag(sibling); });
    },
};
function verifyPseudoArgs(func, name, subselect) {
    if (subselect === null) {
        if (func.length > 2) {
            throw new Error("pseudo-selector :".concat(name, " requires an argument"));
        }
    }
    else if (func.length === 2) {
        throw new Error("pseudo-selector :".concat(name, " doesn't have any arguments"));
    }
}
exports.verifyPseudoArgs = verifyPseudoArgs;


/***/ }),

/***/ 1768:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
var boolbase_1 = __webpack_require__(1073);
var procedure_1 = __webpack_require__(7177);
/** Used as a placeholder for :has. Will be replaced with the actual element. */
exports.PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === boolbase_1.falseFunc)
        return boolbase_1.falseFunc;
    return function (elem) { return adapter.isTag(elem) && next(elem); };
}
exports.ensureIsTag = ensureIsTag;
function getNextSiblings(elem, adapter) {
    var siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1)
        return [];
    var elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
exports.getNextSiblings = getNextSiblings;
var is = function (next, token, options, context, compileToken) {
    var opts = {
        xmlMode: !!options.xmlMode,
        adapter: options.adapter,
        equals: options.equals,
    };
    var func = compileToken(token, opts, context);
    return function (elem) { return func(elem) && next(elem); };
};
/*
 * :not, :has, :is, :matches and :where have to compile selectors
 * doing this in src/pseudos.ts would lead to circular dependencies,
 * so we add them here
 */
exports.subselects = {
    is: is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: is,
    where: is,
    not: function (next, token, options, context, compileToken) {
        var opts = {
            xmlMode: !!options.xmlMode,
            adapter: options.adapter,
            equals: options.equals,
        };
        var func = compileToken(token, opts, context);
        if (func === boolbase_1.falseFunc)
            return next;
        if (func === boolbase_1.trueFunc)
            return boolbase_1.falseFunc;
        return function not(elem) {
            return !func(elem) && next(elem);
        };
    },
    has: function (next, subselect, options, _context, compileToken) {
        var adapter = options.adapter;
        var opts = {
            xmlMode: !!options.xmlMode,
            adapter: adapter,
            equals: options.equals,
        };
        // @ts-expect-error Uses an array as a pointer to the current element (side effects)
        var context = subselect.some(function (s) {
            return s.some(procedure_1.isTraversal);
        })
            ? [exports.PLACEHOLDER_ELEMENT]
            : undefined;
        var compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (compiled === boolbase_1.trueFunc) {
            return function (elem) {
                return adapter.getChildren(elem).some(adapter.isTag) && next(elem);
            };
        }
        var hasElement = ensureIsTag(compiled, adapter);
        var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings = _a === void 0 ? false : _a;
        /*
         * `shouldTestNextSiblings` will only be true if the query starts with
         * a traversal (sibling or adjacent). That means we will always have a context.
         */
        if (context) {
            return function (elem) {
                context[0] = elem;
                var childs = adapter.getChildren(elem);
                var nextElements = shouldTestNextSiblings
                    ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
                return (next(elem) && adapter.existsOne(hasElement, nextElements));
            };
        }
        return function (elem) {
            return next(elem) &&
                adapter.existsOne(hasElement, adapter.getChildren(elem));
        };
    },
};


/***/ }),

/***/ 7353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var css_what_1 = __webpack_require__(7763);
var procedure_1 = __webpack_require__(7177);
var attributes = {
    exists: 10,
    equals: 8,
    not: 7,
    start: 6,
    end: 6,
    any: 5,
    hyphen: 4,
    element: 4,
};
/**
 * Sort the parts of the passed selector,
 * as there is potential for optimization
 * (some types of selectors are faster than others)
 *
 * @param arr Selector to sort
 */
function sortByProcedure(arr) {
    var procs = arr.map(getProcedure);
    for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];
        if (procNew < 0)
            continue;
        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
exports["default"] = sortByProcedure;
function getProcedure(token) {
    var proc = procedure_1.procedure[token.type];
    if (token.type === css_what_1.SelectorType.Attribute) {
        proc = attributes[token.action];
        if (proc === attributes.equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */
            proc >>= 1;
        }
    }
    else if (token.type === css_what_1.SelectorType.Pseudo) {
        if (!token.data) {
            proc = 3;
        }
        else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        }
        else if (Array.isArray(token.data)) {
            // "matches" and "not"
            proc = 0;
            for (var i = 0; i < token.data.length; i++) {
                // TODO better handling of complex selectors
                if (token.data[i].length !== 1)
                    continue;
                var cur = getProcedure(token.data[i][0]);
                // Avoid executing :has or :contains
                if (cur === 0) {
                    proc = 0;
                    break;
                }
                if (cur > proc)
                    proc = cur;
            }
            if (token.data.length > 1 && proc > 0)
                proc -= 1;
        }
        else {
            proc = 1;
        }
    }
    return proc;
}


/***/ }),

/***/ 7763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AttributeAction": () => (/* reexport */ AttributeAction),
  "IgnoreCaseMode": () => (/* reexport */ IgnoreCaseMode),
  "SelectorType": () => (/* reexport */ SelectorType),
  "isTraversal": () => (/* reexport */ isTraversal),
  "parse": () => (/* reexport */ parse),
  "stringify": () => (/* reexport */ stringify)
});

;// CONCATENATED MODULE: ./node_modules/css-what/lib/es/types.js
var SelectorType;
(function (SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
/**
 * Modes for ignore case.
 *
 * This could be updated to an enum, and the object is
 * the current stand-in that will allow code to be updated
 * without big changes.
 */
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false,
};
var AttributeAction;
(function (AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));

;// CONCATENATED MODULE: ./node_modules/css-what/lib/es/parse.js

const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [126 /* Tilde */, AttributeAction.Element],
    [94 /* Circumflex */, AttributeAction.Start],
    [36 /* Dollar */, AttributeAction.End],
    [42 /* Asterisk */, AttributeAction.Any],
    [33 /* ExclamationMark */, AttributeAction.Not],
    [124 /* Pipe */, AttributeAction.Hyphen],
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context",
]);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */
function isTraversal(selector) {
    switch (selector.type) {
        case SelectorType.Adjacent:
        case SelectorType.Child:
        case SelectorType.Descendant:
        case SelectorType.Parent:
        case SelectorType.Sibling:
        case SelectorType.ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set(["contains", "icontains"]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace
        ? escaped
        : high < 0
            ? // BMP codepoint
                String.fromCharCode(high + 0x10000)
            : // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */ || c === 34 /* DoubleQuote */;
}
function isWhitespace(c) {
    return (c === 32 /* Space */ ||
        c === 9 /* Tab */ ||
        c === 10 /* NewLine */ ||
        c === 12 /* FormFeed */ ||
        c === 13 /* CarriageReturn */);
}
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */
function parse(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length &&
            isWhitespace(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) ===
                40 /* LeftParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter++;
            }
            else if (selector.charCodeAt(selectorIndex) ===
                41 /* RightParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while (selector.charCodeAt(--pos) === 92 /* BackSlash */)
            slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({ type });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: SelectorType.Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks",
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */
    function finalizeSubselector() {
        if (tokens.length &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while (selectorIndex < selector.length) {
        const firstChar = selector.charCodeAt(selectorIndex);
        switch (firstChar) {
            // Whitespace
            case 32 /* Space */:
            case 9 /* Tab */:
            case 10 /* NewLine */:
            case 12 /* FormFeed */:
            case 13 /* CarriageReturn */: {
                if (tokens.length === 0 ||
                    tokens[0].type !== SelectorType.Descendant) {
                    ensureNotTraversal();
                    tokens.push({ type: SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
            }
            // Traversals
            case 62 /* GreaterThan */: {
                addTraversal(SelectorType.Child);
                stripWhitespace(1);
                break;
            }
            case 60 /* LessThan */: {
                addTraversal(SelectorType.Parent);
                stripWhitespace(1);
                break;
            }
            case 126 /* Tilde */: {
                addTraversal(SelectorType.Sibling);
                stripWhitespace(1);
                break;
            }
            case 43 /* Plus */: {
                addTraversal(SelectorType.Adjacent);
                stripWhitespace(1);
                break;
            }
            // Special attribute selectors: .class, #id
            case 46 /* Period */: {
                addSpecialAttribute("class", AttributeAction.Element);
                break;
            }
            case 35 /* Hash */: {
                addSpecialAttribute("id", AttributeAction.Equals);
                break;
            }
            case 91 /* LeftSquareBracket */: {
                stripWhitespace(1);
                // Determine attribute name and namespace
                let name;
                let namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */) {
                    // Equivalent to no namespace
                    name = getName(1);
                }
                else if (selector.startsWith("*|", selectorIndex)) {
                    namespace = "*";
                    name = getName(2);
                }
                else {
                    name = getName(0);
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                        selector.charCodeAt(selectorIndex + 1) !==
                            61 /* Equal */) {
                        namespace = name;
                        name = getName(1);
                    }
                }
                stripWhitespace(0);
                // Determine comparison operation
                let action = AttributeAction.Exists;
                const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                    action = possibleAction;
                    if (selector.charCodeAt(selectorIndex + 1) !==
                        61 /* Equal */) {
                        throw new Error("Expected `=`");
                    }
                    stripWhitespace(2);
                }
                else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */) {
                    action = AttributeAction.Equals;
                    stripWhitespace(1);
                }
                // Determine value
                let value = "";
                let ignoreCase = null;
                if (action !== "exists") {
                    if (isQuote(selector.charCodeAt(selectorIndex))) {
                        const quote = selector.charCodeAt(selectorIndex);
                        let sectionEnd = selectorIndex + 1;
                        while (sectionEnd < selector.length &&
                            (selector.charCodeAt(sectionEnd) !== quote ||
                                isEscaped(sectionEnd))) {
                            sectionEnd += 1;
                        }
                        if (selector.charCodeAt(sectionEnd) !== quote) {
                            throw new Error("Attribute value didn't end");
                        }
                        value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                        selectorIndex = sectionEnd + 1;
                    }
                    else {
                        const valueStart = selectorIndex;
                        while (selectorIndex < selector.length &&
                            ((!isWhitespace(selector.charCodeAt(selectorIndex)) &&
                                selector.charCodeAt(selectorIndex) !==
                                    93 /* RightSquareBracket */) ||
                                isEscaped(selectorIndex))) {
                            selectorIndex += 1;
                        }
                        value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                    }
                    stripWhitespace(0);
                    // See if we have a force ignore flag
                    const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                    // If the forceIgnore flag is set (either `i` or `s`), use that value
                    if (forceIgnore === 115 /* LowerS */) {
                        ignoreCase = false;
                        stripWhitespace(1);
                    }
                    else if (forceIgnore === 105 /* LowerI */) {
                        ignoreCase = true;
                        stripWhitespace(1);
                    }
                }
                if (selector.charCodeAt(selectorIndex) !==
                    93 /* RightSquareBracket */) {
                    throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                const attributeSelector = {
                    type: SelectorType.Attribute,
                    name,
                    action,
                    value,
                    namespace,
                    ignoreCase,
                };
                tokens.push(attributeSelector);
                break;
            }
            case 58 /* Colon */: {
                if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */) {
                    tokens.push({
                        type: SelectorType.PseudoElement,
                        name: getName(2).toLowerCase(),
                        data: selector.charCodeAt(selectorIndex) ===
                            40 /* LeftParenthesis */
                            ? readValueWithParenthesis()
                            : null,
                    });
                    continue;
                }
                const name = getName(1).toLowerCase();
                let data = null;
                if (selector.charCodeAt(selectorIndex) ===
                    40 /* LeftParenthesis */) {
                    if (unpackPseudos.has(name)) {
                        if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                            throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                        }
                        data = [];
                        selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                        if (selector.charCodeAt(selectorIndex) !==
                            41 /* RightParenthesis */) {
                            throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                        }
                        selectorIndex += 1;
                    }
                    else {
                        data = readValueWithParenthesis();
                        if (stripQuotesFromPseudos.has(name)) {
                            const quot = data.charCodeAt(0);
                            if (quot === data.charCodeAt(data.length - 1) &&
                                isQuote(quot)) {
                                data = data.slice(1, -1);
                            }
                        }
                        data = unescapeCSS(data);
                    }
                }
                tokens.push({ type: SelectorType.Pseudo, name, data });
                break;
            }
            case 44 /* Comma */: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            }
            default: {
                if (selector.startsWith("/*", selectorIndex)) {
                    const endIndex = selector.indexOf("*/", selectorIndex + 2);
                    if (endIndex < 0) {
                        throw new Error("Comment was not terminated");
                    }
                    selectorIndex = endIndex + 2;
                    // Remove leading whitespace
                    if (tokens.length === 0) {
                        stripWhitespace(0);
                    }
                    break;
                }
                let namespace = null;
                let name;
                if (firstChar === 42 /* Asterisk */) {
                    selectorIndex += 1;
                    name = "*";
                }
                else if (firstChar === 124 /* Pipe */) {
                    name = "";
                    if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */) {
                        addTraversal(SelectorType.ColumnCombinator);
                        stripWhitespace(2);
                        break;
                    }
                }
                else if (reName.test(selector.slice(selectorIndex))) {
                    name = getName(0);
                }
                else {
                    break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                    selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */) {
                    namespace = name;
                    if (selector.charCodeAt(selectorIndex + 1) ===
                        42 /* Asterisk */) {
                        name = "*";
                        selectorIndex += 2;
                    }
                    else {
                        name = getName(1);
                    }
                }
                tokens.push(name === "*"
                    ? { type: SelectorType.Universal, namespace }
                    : { type: SelectorType.Tag, name, namespace });
            }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}

;// CONCATENATED MODULE: ./node_modules/css-what/lib/es/stringify.js

const attribValChars = ["\\", '"'];
const pseudoValChars = [...attribValChars, "(", ")"];
const charsToEscapeInAttributeValue = new Set(attribValChars.map((c) => c.charCodeAt(0)));
const charsToEscapeInPseudoValue = new Set(pseudoValChars.map((c) => c.charCodeAt(0)));
const charsToEscapeInName = new Set([
    ...pseudoValChars,
    "~",
    "^",
    "$",
    "*",
    "+",
    "!",
    "|",
    ":",
    "[",
    "]",
    " ",
    ".",
].map((c) => c.charCodeAt(0)));
/**
 * Turns `selector` back into a string.
 *
 * @param selector Selector to stringify.
 */
function stringify(selector) {
    return selector
        .map((token) => token.map(stringifyToken).join(""))
        .join(", ");
}
function stringifyToken(token, index, arr) {
    switch (token.type) {
        // Simple types
        case SelectorType.Child:
            return index === 0 ? "> " : " > ";
        case SelectorType.Parent:
            return index === 0 ? "< " : " < ";
        case SelectorType.Sibling:
            return index === 0 ? "~ " : " ~ ";
        case SelectorType.Adjacent:
            return index === 0 ? "+ " : " + ";
        case SelectorType.Descendant:
            return " ";
        case SelectorType.ColumnCombinator:
            return index === 0 ? "|| " : " || ";
        case SelectorType.Universal:
            // Return an empty string if the selector isn't needed.
            return token.namespace === "*" &&
                index + 1 < arr.length &&
                "name" in arr[index + 1]
                ? ""
                : `${getNamespace(token.namespace)}*`;
        case SelectorType.Tag:
            return getNamespacedName(token);
        case SelectorType.PseudoElement:
            return `::${escapeName(token.name, charsToEscapeInName)}${token.data === null
                ? ""
                : `(${escapeName(token.data, charsToEscapeInPseudoValue)})`}`;
        case SelectorType.Pseudo:
            return `:${escapeName(token.name, charsToEscapeInName)}${token.data === null
                ? ""
                : `(${typeof token.data === "string"
                    ? escapeName(token.data, charsToEscapeInPseudoValue)
                    : stringify(token.data)})`}`;
        case SelectorType.Attribute: {
            if (token.name === "id" &&
                token.action === AttributeAction.Equals &&
                token.ignoreCase === "quirks" &&
                !token.namespace) {
                return `#${escapeName(token.value, charsToEscapeInName)}`;
            }
            if (token.name === "class" &&
                token.action === AttributeAction.Element &&
                token.ignoreCase === "quirks" &&
                !token.namespace) {
                return `.${escapeName(token.value, charsToEscapeInName)}`;
            }
            const name = getNamespacedName(token);
            if (token.action === AttributeAction.Exists) {
                return `[${name}]`;
            }
            return `[${name}${getActionValue(token.action)}="${escapeName(token.value, charsToEscapeInAttributeValue)}"${token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s"}]`;
        }
    }
}
function getActionValue(action) {
    switch (action) {
        case AttributeAction.Equals:
            return "";
        case AttributeAction.Element:
            return "~";
        case AttributeAction.Start:
            return "^";
        case AttributeAction.End:
            return "$";
        case AttributeAction.Any:
            return "*";
        case AttributeAction.Not:
            return "!";
        case AttributeAction.Hyphen:
            return "|";
        case AttributeAction.Exists:
            throw new Error("Shouldn't be here");
    }
}
function getNamespacedName(token) {
    return `${getNamespace(token.namespace)}${escapeName(token.name, charsToEscapeInName)}`;
}
function getNamespace(namespace) {
    return namespace !== null
        ? `${namespace === "*"
            ? "*"
            : escapeName(namespace, charsToEscapeInName)}|`
        : "";
}
function escapeName(str, charsToEscape) {
    let lastIdx = 0;
    let ret = "";
    for (let i = 0; i < str.length; i++) {
        if (charsToEscape.has(str.charCodeAt(i))) {
            ret += `${str.slice(lastIdx, i)}\\${str.charAt(i)}`;
            lastIdx = i + 1;
        }
    }
    return ret.length > 0 ? ret + str.slice(lastIdx) : str;
}

;// CONCATENATED MODULE: ./node_modules/css-what/lib/es/index.js





/***/ }),

/***/ 9996:
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ 7837:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.attributeNames = exports.elementNames = void 0;
exports.elementNames = new Map([
    ["altglyph", "altGlyph"],
    ["altglyphdef", "altGlyphDef"],
    ["altglyphitem", "altGlyphItem"],
    ["animatecolor", "animateColor"],
    ["animatemotion", "animateMotion"],
    ["animatetransform", "animateTransform"],
    ["clippath", "clipPath"],
    ["feblend", "feBlend"],
    ["fecolormatrix", "feColorMatrix"],
    ["fecomponenttransfer", "feComponentTransfer"],
    ["fecomposite", "feComposite"],
    ["feconvolvematrix", "feConvolveMatrix"],
    ["fediffuselighting", "feDiffuseLighting"],
    ["fedisplacementmap", "feDisplacementMap"],
    ["fedistantlight", "feDistantLight"],
    ["fedropshadow", "feDropShadow"],
    ["feflood", "feFlood"],
    ["fefunca", "feFuncA"],
    ["fefuncb", "feFuncB"],
    ["fefuncg", "feFuncG"],
    ["fefuncr", "feFuncR"],
    ["fegaussianblur", "feGaussianBlur"],
    ["feimage", "feImage"],
    ["femerge", "feMerge"],
    ["femergenode", "feMergeNode"],
    ["femorphology", "feMorphology"],
    ["feoffset", "feOffset"],
    ["fepointlight", "fePointLight"],
    ["fespecularlighting", "feSpecularLighting"],
    ["fespotlight", "feSpotLight"],
    ["fetile", "feTile"],
    ["feturbulence", "feTurbulence"],
    ["foreignobject", "foreignObject"],
    ["glyphref", "glyphRef"],
    ["lineargradient", "linearGradient"],
    ["radialgradient", "radialGradient"],
    ["textpath", "textPath"],
]);
exports.attributeNames = new Map([
    ["definitionurl", "definitionURL"],
    ["attributename", "attributeName"],
    ["attributetype", "attributeType"],
    ["basefrequency", "baseFrequency"],
    ["baseprofile", "baseProfile"],
    ["calcmode", "calcMode"],
    ["clippathunits", "clipPathUnits"],
    ["diffuseconstant", "diffuseConstant"],
    ["edgemode", "edgeMode"],
    ["filterunits", "filterUnits"],
    ["glyphref", "glyphRef"],
    ["gradienttransform", "gradientTransform"],
    ["gradientunits", "gradientUnits"],
    ["kernelmatrix", "kernelMatrix"],
    ["kernelunitlength", "kernelUnitLength"],
    ["keypoints", "keyPoints"],
    ["keysplines", "keySplines"],
    ["keytimes", "keyTimes"],
    ["lengthadjust", "lengthAdjust"],
    ["limitingconeangle", "limitingConeAngle"],
    ["markerheight", "markerHeight"],
    ["markerunits", "markerUnits"],
    ["markerwidth", "markerWidth"],
    ["maskcontentunits", "maskContentUnits"],
    ["maskunits", "maskUnits"],
    ["numoctaves", "numOctaves"],
    ["pathlength", "pathLength"],
    ["patterncontentunits", "patternContentUnits"],
    ["patterntransform", "patternTransform"],
    ["patternunits", "patternUnits"],
    ["pointsatx", "pointsAtX"],
    ["pointsaty", "pointsAtY"],
    ["pointsatz", "pointsAtZ"],
    ["preservealpha", "preserveAlpha"],
    ["preserveaspectratio", "preserveAspectRatio"],
    ["primitiveunits", "primitiveUnits"],
    ["refx", "refX"],
    ["refy", "refY"],
    ["repeatcount", "repeatCount"],
    ["repeatdur", "repeatDur"],
    ["requiredextensions", "requiredExtensions"],
    ["requiredfeatures", "requiredFeatures"],
    ["specularconstant", "specularConstant"],
    ["specularexponent", "specularExponent"],
    ["spreadmethod", "spreadMethod"],
    ["startoffset", "startOffset"],
    ["stddeviation", "stdDeviation"],
    ["stitchtiles", "stitchTiles"],
    ["surfacescale", "surfaceScale"],
    ["systemlanguage", "systemLanguage"],
    ["tablevalues", "tableValues"],
    ["targetx", "targetX"],
    ["targety", "targetY"],
    ["textlength", "textLength"],
    ["viewbox", "viewBox"],
    ["viewtarget", "viewTarget"],
    ["xchannelselector", "xChannelSelector"],
    ["ychannelselector", "yChannelSelector"],
    ["zoomandpan", "zoomAndPan"],
]);


/***/ }),

/***/ 7220:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Module dependencies
 */
var ElementType = __importStar(__webpack_require__(9960));
var entities_1 = __webpack_require__(5863);
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */
var foreignNames_1 = __webpack_require__(7837);
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    if (!attributes)
        return;
    return Object.keys(attributes)
        .map(function (key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return key + "=\"" + (opts.decodeEntities !== false
            ? entities_1.encodeXML(value)
            : value.replace(/"/g, "&quot;")) + "\"";
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options) {
    if (options === void 0) { options = {}; }
    var nodes = "length" in node ? node : [node];
    var output = "";
    for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
exports["default"] = render;
function renderNode(node, options) {
    switch (node.type) {
        case ElementType.Root:
            return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
    }
    var tag = "<" + elem.name;
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += " " + attribs;
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</" + elem.name + ">";
        }
    }
    return tag;
}
function renderDirective(elem) {
    return "<" + elem.data + ">";
}
function renderText(elem, opts) {
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (opts.decodeEntities !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data = entities_1.encodeXML(data);
    }
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
    return "<!--" + elem.data + "-->";
}


/***/ }),

/***/ 9960:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ 7915:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(9960);
var node_1 = __webpack_require__(7790);
__exportStar(__webpack_require__(7790), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            }
            else {
                lastNode.data += data;
            }
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            if (normalizeWhitespace) {
                data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ 7790:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(9960);
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ 6996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeed = void 0;
var stringify_1 = __webpack_require__(3346);
var legacy_1 = __webpack_require__(3905);
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
exports.getFeed = getFeed;
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    var childs = feedRoot.children;
    var feed = {
        type: "atom",
        items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function (item) {
            var _a;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs.href;
            if (href) {
                entry.link = href;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function (item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return (0, legacy_1.getElementsByTagName)("media:content", where).map(function (elem) {
        var attribs = elem.attribs;
        var media = {
            medium: attribs.medium,
            isDefault: !!attribs.isDefault,
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs.expression) {
            media.expression =
                attribs.expression;
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where  Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    var val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}


/***/ }),

/***/ 4975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
var domhandler_1 = __webpack_require__(7915);
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */
function removeSubsets(nodes) {
    var idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */
    while (--idx >= 0) {
        var node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
exports.removeSubsets = removeSubsets;
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    var maxIdx = Math.min(aParents.length, bParents.length);
    var idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return 1 /* DISCONNECTED */;
    }
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return 4 /* FOLLOWING */ | 16 /* CONTAINED_BY */;
        }
        return 4 /* FOLLOWING */;
    }
    if (sharedParent === nodeA) {
        return 2 /* PRECEDING */ | 8 /* CONTAINS */;
    }
    return 2 /* PRECEDING */;
}
exports.compareDocumentPosition = compareDocumentPosition;
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
function uniqueSort(nodes) {
    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
    nodes.sort(function (a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2 /* PRECEDING */) {
            return -1;
        }
        else if (relative & 4 /* FOLLOWING */) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
exports.uniqueSort = uniqueSort;


/***/ }),

/***/ 9432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
__exportStar(__webpack_require__(3346), exports);
__exportStar(__webpack_require__(5010), exports);
__exportStar(__webpack_require__(6765), exports);
__exportStar(__webpack_require__(8043), exports);
__exportStar(__webpack_require__(3905), exports);
__exportStar(__webpack_require__(4975), exports);
__exportStar(__webpack_require__(6996), exports);
/** @deprecated Use these methods from `domhandler` directly. */
var domhandler_1 = __webpack_require__(7915);
Object.defineProperty(exports, "isTag", ({ enumerable: true, get: function () { return domhandler_1.isTag; } }));
Object.defineProperty(exports, "isCDATA", ({ enumerable: true, get: function () { return domhandler_1.isCDATA; } }));
Object.defineProperty(exports, "isText", ({ enumerable: true, get: function () { return domhandler_1.isText; } }));
Object.defineProperty(exports, "isComment", ({ enumerable: true, get: function () { return domhandler_1.isComment; } }));
Object.defineProperty(exports, "isDocument", ({ enumerable: true, get: function () { return domhandler_1.isDocument; } }));
Object.defineProperty(exports, "hasChildren", ({ enumerable: true, get: function () { return domhandler_1.hasChildren; } }));


/***/ }),

/***/ 3905:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
var domhandler_1 = __webpack_require__(7915);
var querying_1 = __webpack_require__(8043);
var Checks = {
    tag_name: function (name) {
        if (typeof name === "function") {
            return function (elem) { return (0, domhandler_1.isTag)(elem) && name(elem.name); };
        }
        else if (name === "*") {
            return domhandler_1.isTag;
        }
        return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.name === name; };
    },
    tag_type: function (type) {
        if (typeof type === "function") {
            return function (elem) { return type(elem.type); };
        }
        return function (elem) { return elem.type === type; };
    },
    tag_contains: function (data) {
        if (typeof data === "function") {
            return function (elem) { return (0, domhandler_1.isText)(elem) && data(elem.data); };
        }
        return function (elem) { return (0, domhandler_1.isText)(elem) && elem.data === data; };
    },
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return function (elem) { return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]); };
    }
    return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value; };
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either
 * of the input functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return function (elem) { return a(elem) || b(elem); };
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true`
 * if any of them match a node.
 */
function compileTest(options) {
    var funcs = Object.keys(options).map(function (key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
exports.testElement = testElement;
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) { limit = Infinity; }
    var test = compileTest(options);
    return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
exports.getElements = getElements;
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
exports.getElementById = getElementById;
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
exports.getElementsByTagName = getElementsByTagName;
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
exports.getElementsByTagType = getElementsByTagType;


/***/ }),

/***/ 6765:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
exports.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    var prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    var next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    var parent = (replacement.parent = elem.parent);
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
    }
}
exports.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
exports.appendChild = appendChild;
/**
 * Append an element after another.
 *
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
exports.append = append;
/**
 * Prepend a child to an element.
 *
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
exports.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
exports.prepend = prepend;


/***/ }),

/***/ 8043:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
var domhandler_1 = __webpack_require__(7915);
/**
 * Search a node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter(test, node, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    if (!Array.isArray(node))
        node = [node];
    return find(test, node, recurse, limit);
}
exports.filter = filter;
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    var result = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                break;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0)
                break;
        }
    }
    return result;
}
exports.find = find;
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
exports.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */
function findOne(test, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    var elem = null;
    for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!(0, domhandler_1.isTag)(checked)) {
            continue;
        }
        else if (test(checked)) {
            elem = checked;
        }
        else if (recurse && checked.children.length > 0) {
            elem = findOne(test, checked.children);
        }
    }
    return elem;
}
exports.findOne = findOne;
/**
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing a test.
 */
function existsOne(test, nodes) {
    return nodes.some(function (checked) {
        return (0, domhandler_1.isTag)(checked) &&
            (test(checked) ||
                (checked.children.length > 0 &&
                    existsOne(test, checked.children)));
    });
}
exports.existsOne = existsOne;
/**
 * Search and array of nodes and its children for nodes passing a test function.
 *
 * Same as `find`, only with less options, leading to reduced complexity.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
    var _a;
    var result = [];
    var stack = nodes.filter(domhandler_1.isTag);
    var elem;
    while ((elem = stack.shift())) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) {
            stack.unshift.apply(stack, children);
        }
        if (test(elem))
            result.push(elem);
    }
    return result;
}
exports.findAll = findAll;


/***/ }),

/***/ 3346:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
var domhandler_1 = __webpack_require__(7915);
var dom_serializer_1 = __importDefault(__webpack_require__(7220));
var domelementtype_1 = __webpack_require__(9960);
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return (0, dom_serializer_1.default)(node, options);
}
exports.getOuterHTML = getOuterHTML;
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return (0, domhandler_1.hasChildren)(node)
        ? node.children.map(function (node) { return getOuterHTML(node, options); }).join("")
        : "";
}
exports.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if ((0, domhandler_1.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if ((0, domhandler_1.isCDATA)(node))
        return getText(node.children);
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.getText = getText;
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.textContent = textContent;
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.innerText = innerText;


/***/ }),

/***/ 5010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
var domhandler_1 = __webpack_require__(7915);
var emptyArray = [];
/**
 * Get a node's children.
 *
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren(elem) {
    var _a;
    return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
exports.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */
function getParent(elem) {
    return elem.parent || null;
}
exports.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first.
 * If we don't have a parent (the element is a root node),
 * we walk the element's `prev` & `next` to get all remaining nodes.
 *
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */
function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    var siblings = [elem];
    var prev = elem.prev, next = elem.next;
    while (prev != null) {
        siblings.unshift(prev);
        (_a = prev, prev = _a.prev);
    }
    while (next != null) {
        siblings.push(next);
        (_b = next, next = _b.next);
    }
    return siblings;
}
exports.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
exports.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
exports.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName(elem) {
    return elem.name;
}
exports.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */
function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while (next !== null && !(0, domhandler_1.isTag)(next))
        (_a = next, next = _a.next);
    return next;
}
exports.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */
function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while (prev !== null && !(0, domhandler_1.isTag)(prev))
        (_a = prev, prev = _a.prev);
    return prev;
}
exports.prevElementSibling = prevElementSibling;


/***/ }),

/***/ 4076:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(__webpack_require__(9323));
var legacy_json_1 = __importDefault(__webpack_require__(9591));
var xml_json_1 = __importDefault(__webpack_require__(2586));
var decode_codepoint_1 = __importDefault(__webpack_require__(26));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}


/***/ }),

/***/ 26:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decode_json_1 = __importDefault(__webpack_require__(3600));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports["default"] = decodeCodePoint;


/***/ }),

/***/ 7322:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(__webpack_require__(2586));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(__webpack_require__(9323));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}


/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = __webpack_require__(4076);
var encode_1 = __webpack_require__(7322);
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(7322);
Object.defineProperty(exports, "encodeXML", ({ enumerable: true, get: function () { return encode_2.encodeXML; } }));
Object.defineProperty(exports, "encodeHTML", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeNonAsciiHTML", ({ enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } }));
Object.defineProperty(exports, "escape", ({ enumerable: true, get: function () { return encode_2.escape; } }));
Object.defineProperty(exports, "escapeUTF8", ({ enumerable: true, get: function () { return encode_2.escapeUTF8; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeHTML5", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
var decode_2 = __webpack_require__(4076);
Object.defineProperty(exports, "decodeXML", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));
Object.defineProperty(exports, "decodeHTML", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML5", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML4Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeHTML5Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeXMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));


/***/ }),

/***/ 4506:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.H = void 0;

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

exports.H = applyTrailingSlashOption;

/***/ }),

/***/ 9679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.p2 = __webpack_unused_export__ = void 0;

var _scrollHandler = __webpack_require__(1432);

__webpack_unused_export__ = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(4855);

exports.p2 = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ 1432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(6115));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7867));

var React = _interopRequireWildcard(__webpack_require__(2201));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _sessionStorage = __webpack_require__(1142);

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

/***/ 1142:
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
      if (false) {}

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

      if (false) {}
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

/***/ 4855:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(1432);

var _react = __webpack_require__(2201);

var _reachRouter = __webpack_require__(3631);

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

/***/ 5292:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(__webpack_require__(2201));

var _gatsbyScript = __webpack_require__(3521);

var _getForwards = __webpack_require__(7730);

var _integration = __webpack_require__(2911);

const onRenderBody = ({
  pathname,
  setHeadComponents
}) => {
  const collectedScripts = _gatsbyScript.collectedScriptsByPage.get(pathname);

  if (!(collectedScripts !== null && collectedScripts !== void 0 && collectedScripts.length)) {
    return;
  }

  const forwards = (0, _getForwards.getForwards)(collectedScripts); // Adapted from https://github.com/BuilderIO/partytown/blob/main/src/react/snippet.tsx to only include SSR logic

  setHeadComponents([/*#__PURE__*/_react.default.createElement("script", {
    key: "partytown",
    "data-partytown": "",
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `
          ${(0, _integration.partytownSnippet)({
        forward: forwards
      })}
          document.currentScript.dataset.partytown=""
        `
    }
  })]); // Clear scripts after we've used them to avoid leaky behavior

  _gatsbyScript.collectedScriptsByPage.delete(pathname);
};

exports.onRenderBody = onRenderBody;
//# sourceMappingURL=gatsby-ssr.js.map

/***/ }),

/***/ 7730:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.getForwards = getForwards;

function getForwards(collectedScripts) {
  return collectedScripts === null || collectedScripts === void 0 ? void 0 : collectedScripts.flatMap(script => (script === null || script === void 0 ? void 0 : script.forward) || []);
}
//# sourceMappingURL=get-forwards.js.map

/***/ }),

/***/ 5418:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.components={"component---src-pages-docs-core-features-js":()=>__webpack_require__.e(/* import() | component---src-pages-docs-core-features-js */ 674).then(__webpack_require__.bind(__webpack_require__, 9947)),"component---src-pages-docs-index-js":()=>__webpack_require__.e(/* import() | component---src-pages-docs-index-js */ 808).then(__webpack_require__.bind(__webpack_require__, 4153)),"component---src-pages-docs-installation-js":()=>__webpack_require__.e(/* import() | component---src-pages-docs-installation-js */ 142).then(__webpack_require__.bind(__webpack_require__, 3456)),"component---src-pages-examples-index-js":()=>__webpack_require__.e(/* import() | component---src-pages-examples-index-js */ 385).then(__webpack_require__.bind(__webpack_require__, 9338)),"component---src-pages-index-js":()=>__webpack_require__.e(/* import() | component---src-pages-index-js */ 678).then(__webpack_require__.bind(__webpack_require__, 4182))};

/***/ }),

/***/ 4067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRunner": () => (/* binding */ apiRunner),
/* harmony export */   "apiRunnerAsync": () => (/* binding */ apiRunnerAsync)
/* harmony export */ });
var plugins=[{name:'partytown',plugin:__webpack_require__(5292),options:{"plugins":[]}}];/* global plugins */ // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(421);function augmentErrorWithPlugin(plugin,err){if(plugin.name!==`default-site-plugin`){// default-site-plugin is user code and will print proper stack trace,
// so no point in annotating error message pointing out which plugin is root of the problem
err.message+=` (from plugin: ${plugin.name})`;}throw err;}function apiRunner(api,args,defaultReturn,argTransform){if(!apis[api]){console.log(`This API doesn't exist`,api);}const results=[];plugins.forEach(plugin=>{const apiFn=plugin.plugin[api];if(!apiFn){return;}try{const result=apiFn(args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}// This if case keeps behaviour as before, we should allow undefined here as the api is defined
// TODO V4
if(typeof result!==`undefined`){results.push(result);}}catch(e){augmentErrorWithPlugin(plugin,e);}});return results.length?results:[defaultReturn];}async function apiRunnerAsync(api,args,defaultReturn,argTransform){if(!apis[api]){console.log(`This API doesn't exist`,api);}const results=[];for(const plugin of plugins){const apiFn=plugin.plugin[api];if(!apiFn){continue;}try{const result=await apiFn(args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}// This if case keeps behaviour as before, we should allow undefined here as the api is defined
// TODO V4
if(typeof result!==`undefined`){results.push(result);}}catch(e){augmentErrorWithPlugin(plugin,e);}}return results.length?results:[defaultReturn];}

/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {ReactNode} $0.bodyComponent The React element to be rendered as the page body
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @returns {void | Promise<void>}
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ 9079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2201);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html",props.htmlAttributes,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body",props.bodyAttributes,props.preBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),headComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),preBodyComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),body:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),postBodyComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)};

/***/ }),

/***/ 9755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cleanPath": () => (/* binding */ cleanPath),
  "findMatchPath": () => (/* binding */ findMatchPath),
  "findPath": () => (/* binding */ findPath),
  "grabMatchParams": () => (/* binding */ grabMatchParams),
  "setMatchPaths": () => (/* binding */ setMatchPaths)
});

// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/lib/utils.js
var utils = __webpack_require__(1122);
;// CONCATENATED MODULE: ./.cache/strip-prefix.js
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix=``){if(!prefix){return str;}if(str===prefix){return`/`;}if(str.startsWith(`${prefix}/`)){return str.slice(prefix.length);}return str;}
;// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ const normalize_page_path = (pathAndSearch=>{if(pathAndSearch===undefined){return pathAndSearch;}let[path,search=``]=pathAndSearch.split(`?`);if(search){search=`?`+search;}if(path===`/`){return`/`+search;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1)+search;}return path+search;});
;// CONCATENATED MODULE: ./.cache/redirects.json
const redirects_namespaceObject = [];
;// CONCATENATED MODULE: ./.cache/redirect-utils.js
// Convert to a map for faster lookup in maybeRedirect()
const redirectMap=new Map();const redirectIgnoreCaseMap=new Map();redirects_namespaceObject.forEach(redirect=>{if(redirect.ignoreCase){redirectIgnoreCaseMap.set(redirect.fromPath,redirect);}else{redirectMap.set(redirect.fromPath,redirect);}});function maybeGetBrowserRedirect(pathname){let redirect=redirectMap.get(pathname);if(!redirect){redirect=redirectIgnoreCaseMap.get(pathname.toLowerCase());}return redirect;}
;// CONCATENATED MODULE: ./.cache/find-path.js
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{let newRawPathname=rawPathname;const queryIndex=rawPathname.indexOf(`?`);if(queryIndex!==-1){const[path,qs]=rawPathname.split(`?`);newRawPathname=`${path}?${encodeURIComponent(qs)}`;}const pathname=decodeURIComponent(newRawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=stripPrefix(pathname,decodeURIComponent(""))// Remove any hashfragment
.split(`#`)[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith(`/`)||path.startsWith(`https://`)||path.startsWith(`http://`)){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith(`/`)?``:`/`)).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=(0,utils/* pick */.ei)(pickPaths,trimmedPathname);if(path){return normalize_page_path(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */const grabMatchParams=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=(0,utils/* pick */.ei)(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}const redirect=maybeGetBrowserRedirect(rawPathname);if(redirect){return findPath(redirect.toPath);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=normalize_page_path(foundPath);return foundPath;};

/***/ }),

/***/ 9572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Link": () => (/* reexport */ w),
  "PageRenderer": () => (/* reexport */ (public_page_renderer_default())),
  "Script": () => (/* reexport */ index_modern.Script),
  "ScriptStrategy": () => (/* reexport */ index_modern.ScriptStrategy),
  "StaticQuery": () => (/* binding */ StaticQuery),
  "StaticQueryContext": () => (/* binding */ StaticQueryContext),
  "collectedScriptsByPage": () => (/* reexport */ index_modern.collectedScriptsByPage),
  "graphql": () => (/* binding */ graphql),
  "navigate": () => (/* reexport */ P),
  "parsePath": () => (/* reexport */ a),
  "prefetchPathname": () => (/* binding */ prefetchPathname),
  "scriptCache": () => (/* reexport */ index_modern.scriptCache),
  "scriptCallbackCache": () => (/* reexport */ index_modern.scriptCallbackCache),
  "useScrollRestoration": () => (/* reexport */ gatsby_react_router_scroll/* useScrollRestoration */.p2),
  "useStaticQuery": () => (/* binding */ useStaticQuery),
  "withAssetPrefix": () => (/* reexport */ m),
  "withPrefix": () => (/* reexport */ h)
});

// EXTERNAL MODULE: external "/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/node_modules/react/index.js"
var index_js_ = __webpack_require__(2201);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js + 2 modules
var es = __webpack_require__(3631);
// EXTERNAL MODULE: ./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js
var apply_trailing_slash_option = __webpack_require__(4506);
;// CONCATENATED MODULE: ./node_modules/gatsby-link/dist/index.modern.mjs
"client export"
;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=> false?0:"";function h(t,e=(()=> false?0:"")()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:p())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const f=t=>null==t?void 0:t.startsWith("/"),u=()=> true?"legacy":0,_=(t,e)=>{if("number"==typeof t)return t;if(!l(t))return t;const{pathname:r,search:o,hash:i}=a(t),c=u();let p=t;return"always"!==c&&"never"!==c||(p=`${(0,apply_trailing_slash_option/* applyTrailingSlashOption */.H)(r,c)}${o}${i}`),f(p)?h(p):function(t,e){if(f(t))return t;const r=u(),o=(0,es.resolve)(t,e);return"always"===r||"never"===r?(0,apply_trailing_slash_option/* applyTrailingSlashOption */.H)(o,r):o}(p,e)},d=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];function m(t){return h(t,p())}const y={activeClassName:prop_types.string,activeStyle:prop_types.object,partiallyActive:prop_types.bool};function v(t){/*#__PURE__*/return index_js_.createElement(es.Location,null,({location:n})=>/*#__PURE__*/index_js_.createElement(b,i({},t,{_location:n})))}class b extends index_js_.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(_(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver(n=>{n.forEach(n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)})});return n.observe(t),{instance:n,el:t}})(t,t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()}))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,d); true||0;const m=_(n,f.pathname);return l(m)?/*#__PURE__*/index_js_.createElement(es.Link,i({to:m,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(m);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(m)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(m,{state:p,replace:e})}return!0}},u)):/*#__PURE__*/index_js_.createElement("a",i({href:m},u))}}b.propTypes=i({},y,{onClick:prop_types.func,to:prop_types.string.isRequired,replace:prop_types.bool,state:prop_types.object});var w=index_js_.forwardRef((t,n)=>/*#__PURE__*/index_js_.createElement(v,i({innerRef:n},t)));const P=(t,e)=>{window.___navigate(_(t,window.location.pathname),e)};
//# sourceMappingURL=index.modern.mjs.map

// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(9679);
// EXTERNAL MODULE: ./.cache/public-page-renderer.js
var public_page_renderer = __webpack_require__(2743);
var public_page_renderer_default = /*#__PURE__*/__webpack_require__.n(public_page_renderer);
;// CONCATENATED MODULE: ./.cache/prefetch.js
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ const _cache_prefetch = ((/* unused pure expression or super */ null && (prefetch)));
;// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
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

/* harmony default export */ const mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

;// CONCATENATED MODULE: ./.cache/emitter.js
const emitter_emitter=mitt_es();/* harmony default export */ const _cache_emitter = ((/* unused pure expression or super */ null && (emitter_emitter)));
// EXTERNAL MODULE: ./.cache/find-path.js + 4 modules
var find_path = __webpack_require__(9755);
;// CONCATENATED MODULE: ./.cache/loader.js
/**
 * Available resource loading statuses
 */const PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:`error`,/**
   * Resources loaded successfully
   */Success:`success`};const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=rawPath=>{const[path,maybeSearch]=rawPath.split(`?`);const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json${maybeSearch?`?${maybeSearch}`:``}`;};function doFetch(url,method=`GET`){return new Promise(resolve=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});}const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};// Regex that matches common search crawlers
const BOT_REGEX=/bot|crawler|spider|crawling/i;const toPageResources=(pageData,component=null,head)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes,getServerDataError:pageData.getServerDataError};return{component,head,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
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
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.isPrefetchQueueRunning=false;this.prefetchQueued=[];this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;setMatchPaths(matchPaths);}memoizedGet(url){let inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,`GET`);this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(response=>{this.inFlightNetworkRequests.delete(url);return response;}).catch(err=>{this.inFlightNetworkRequests.delete(url);throw err;});}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}fetchPageDataJson(loadObj){const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}const maybeSearch=pagePath.split(`?`)[1];if(maybeSearch&&!jsonPayload.path.includes(maybeSearch)){jsonPayload.path+=`?${maybeSearch}`;}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404/500 page and it doesn't exist, we're done
if(pagePath===`/404.html`||pagePath===`/500.html`){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:`/500.html`,internalServerError:true}));}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return this.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});}loadPageDataJson(rawPath){const pagePath=findPath(rawPath);if(this.pageDataDb.has(pagePath)){const pageData=this.pageDataDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return findMatchPath(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);if(true){if(page.error){return{error:page.error,status:page.status};}return Promise.resolve(page.payload);}}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}let pageData=result.payload;const{componentChunkName,staticQueryHashes=[]}=pageData;const finalResult={};// In develop we have separate chunks for template and Head components
// to enable HMR (fast refresh requires single exports).
// In production we have shared chunk with both exports. Double loadComponent here
// will be deduped by webpack runtime resulting in single request and single module
// being loaded for both `component` and `head`.
const componentChunkPromise=Promise.all([this.loadComponent(componentChunkName),this.loadComponent(componentChunkName,`head`)]).then(([component,head])=>{finalResult.createdAt=new Date();let pageResources;if(!component||component instanceof Error){finalResult.status=PageResourceStatus.Error;finalResult.error=component;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component,head);}// undefined if final result is an error
return pageResources;});const staticQueryBatchPromise=Promise.all(staticQueryHashes.map(staticQueryHash=>{// Check for cache in case this static query result has already been loaded
if(this.staticQueryDb[staticQueryHash]){const jsonPayload=this.staticQueryDb[staticQueryHash];return{staticQueryHash,jsonPayload};}return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req=>{const jsonPayload=JSON.parse(req.responseText);return{staticQueryHash,jsonPayload};}).catch(()=>{throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);});})).then(staticQueryResults=>{const staticQueryResultsMap={};staticQueryResults.forEach(({staticQueryHash,jsonPayload})=>{staticQueryResultsMap[staticQueryHash]=jsonPayload;this.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(([pageResources,staticQueryResults])=>{let payload;if(pageResources){payload={...pageResources,staticQueryResults};finalResult.payload=payload;emitter.emit(`onPostLoadPageResources`,{page:payload,pageResources:payload});}this.pageDb.set(pagePath,finalResult);if(finalResult.error){return{error:finalResult.error,status:finalResult.status};}return payload;})// when static-query fail to load we throw a better error
.catch(err=>{return{error:err,status:PageResourceStatus.Error};});});inFlightPromise.then(()=>{this.inFlightDb.delete(pagePath);}).catch(error=>{this.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if the page does not exists in cache
loadPageSync(rawPath,options={}){const pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){const pageData=this.pageDb.get(pagePath);if(pageData.payload){return pageData.payload;}if(options!==null&&options!==void 0&&options.withErrorDetails){return{error:pageData.error,status:pageData.status};}}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Don't prefetch if this is a crawler bot
if(navigator.userAgent&&BOT_REGEX.test(navigator.userAgent)){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return{then:resolve=>resolve(false),abort:()=>{}};}if(this.prefetchTriggered.has(pagePath)){return{then:resolve=>resolve(true),abort:()=>{}};}const defer={resolve:null,reject:null,promise:null};defer.promise=new Promise((resolve,reject)=>{defer.resolve=resolve;defer.reject=reject;});this.prefetchQueued.push([pagePath,defer]);const abortC=new AbortController();abortC.signal.addEventListener(`abort`,()=>{const index=this.prefetchQueued.findIndex(([p])=>p===pagePath);// remove from the queue
if(index!==-1){this.prefetchQueued.splice(index,1);}});if(!this.isPrefetchQueueRunning){this.isPrefetchQueueRunning=true;setTimeout(()=>{this._processNextPrefetchBatch();},3000);}return{then:(resolve,reject)=>defer.promise.then(resolve,reject),abort:abortC.abort.bind(abortC)};}_processNextPrefetchBatch(){const idleCallback=window.requestIdleCallback||(cb=>setTimeout(cb,0));idleCallback(()=>{const toPrefetch=this.prefetchQueued.splice(0,4);const prefetches=Promise.all(toPrefetch.map(([pagePath,dPromise])=>{// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return dPromise.resolve(false);}return this.doPrefetch(findPath(pagePath)).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}dPromise.resolve(true);});}));if(this.prefetchQueued.length){prefetches.then(()=>{setTimeout(()=>{this._processNextPrefetchBatch();},3000);});}else{this.isPrefetchQueueRunning=false;}});}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return prefetchHelper(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath));}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=findPath(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[...createComponentUrls(pageResources.page.componentChunkName),createPageDataUrl(pagePath)];}else{return null;}}isPageNotFound(rawPath){const pagePath=findPath(rawPath);const page=this.pageDb.get(pagePath);return!page||page.notFound;}loadAppData(retries=0){return this.memoizedGet(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>(window.___chunkMapping[componentChunkName]||[]).map(chunk=>""+chunk);class ProdLoader extends (/* unused pure expression or super */ null && (BaseLoader)){constructor(asyncRequires,matchPaths,pageData){const loadComponent=chunkName=>{if(!asyncRequires.components[chunkName]){throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);}return asyncRequires.components[chunkName]()// loader will handle the case when component is error
.catch(err=>err);};super(loadComponent,matchPaths);if(pageData){this.pageDataDb.set(findPath(pageData.path),{pagePath:pageData.path,payload:pageData,status:`success`});}}doPrefetch(pagePath){return super.doPrefetch(pagePath).then(result=>{if(result.status!==PageResourceStatus.Success){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(prefetchHelper)).then(()=>pageData);});}loadPageDataJson(rawPath){return super.loadPageDataJson(rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,`HEAD`).then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),// TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
loadPageSync:(rawPath,options={})=>instance.loadPageSync(rawPath,options),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ const loader = (publicLoader);function getStaticQueryResults(){if(instance){return instance.staticQueryDb;}else{return{};}}
// EXTERNAL MODULE: ./node_modules/gatsby-script/dist/index.modern.mjs
var index_modern = __webpack_require__(3521);
;// CONCATENATED MODULE: ./.cache/gatsby-browser-entry.js
const prefetchPathname=loader.enqueue;const StaticQueryContext=/*#__PURE__*/index_js_default().createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/index_js_default().createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return/*#__PURE__*/index_js_default().createElement(StaticQueryContext.Consumer,null,staticQueryData=>/*#__PURE__*/index_js_default().createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{var _context$query;if(typeof (index_js_default()).useContext!==`function`&&"production"===`development`){}const context=index_js_default().useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);}if((_context$query=context[query])!==null&&_context$query!==void 0&&_context$query.data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:(prop_types_default()).object,query:(prop_types_default()).string.isRequired,render:(prop_types_default()).func,children:(prop_types_default()).func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ 2460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VALID_NODE_NAMES": () => (/* binding */ VALID_NODE_NAMES)
/* harmony export */ });
const VALID_NODE_NAMES=[`link`,`meta`,`style`,`title`,`base`,`noscript`,`script`];

/***/ }),

/***/ 923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headHandlerForSSR": () => (/* binding */ headHandlerForSSR)
/* harmony export */ });
const React=__webpack_require__(2201);const{grabMatchParams}=__webpack_require__(9755);const{createElement}=__webpack_require__(2201);const{StaticQueryContext}=__webpack_require__(9572);const{headExportValidator,filterHeadProps,warnForInvalidTags}=__webpack_require__(8317);const{ServerLocation,Router}=__webpack_require__(3631);const{renderToString}=__webpack_require__(939);const{parse}=__webpack_require__(698);const{VALID_NODE_NAMES}=__webpack_require__(2460);function headHandlerForSSR({pageComponent,setHeadComponents,staticQueryContext,pageData,pagePath}){if(pageComponent!==null&&pageComponent!==void 0&&pageComponent.Head){headExportValidator(pageComponent.Head);function HeadRouteHandler(props){var _pageData$result,_pageData$result$page;const _props={...props,...pageData.result,params:{...grabMatchParams(props.location.pathname),...(((_pageData$result=pageData.result)===null||_pageData$result===void 0?void 0:(_pageData$result$page=_pageData$result.pageContext)===null||_pageData$result$page===void 0?void 0:_pageData$result$page.__params)||{})}};return createElement(pageComponent.Head,filterHeadProps(_props));}const routerElement=/*#__PURE__*/React.createElement(StaticQueryContext.Provider,{value:staticQueryContext},/*#__PURE__*/React.createElement(ServerLocation,{url:`${""}${pagePath}`},/*#__PURE__*/React.createElement(Router,{baseuri:"",component:({children})=>/*#__PURE__*/React.createElement(React.Fragment,null,children)},/*#__PURE__*/React.createElement(HeadRouteHandler,{path:"/*"}))));// extract head nodes from string
const rawString=renderToString(routerElement);const headNodes=parse(rawString).childNodes;const validHeadNodes=[];const seenIds=new Map();for(const node of headNodes){var _node$attributes;const{rawTagName}=node;const id=(_node$attributes=node.attributes)===null||_node$attributes===void 0?void 0:_node$attributes.id;if(!VALID_NODE_NAMES.includes(rawTagName)){warnForInvalidTags(rawTagName);}else{let element;const attributes={...node.attributes,"data-gatsby-head":true};if(rawTagName===`script`){element=/*#__PURE__*/React.createElement("script",Object.assign({},attributes,{dangerouslySetInnerHTML:{__html:node.text}}));}else{var _node$childNodes$;element=/*#__PURE__*/React.createElement(node.rawTagName,attributes,(_node$childNodes$=node.childNodes[0])===null||_node$childNodes$===void 0?void 0:_node$childNodes$.textContent);}if(id){if(!seenIds.has(id)){validHeadNodes.push(element);seenIds.set(id,validHeadNodes.length-1);}else{const indexOfPreviouslyInsertedNode=seenIds.get(id);validHeadNodes[indexOfPreviouslyInsertedNode]=element;}}else{validHeadNodes.push(element);}}}setHeadComponents(validHeadNodes);}}

/***/ }),

/***/ 8317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diffNodes": () => (/* binding */ diffNodes),
/* harmony export */   "filterHeadProps": () => (/* binding */ filterHeadProps),
/* harmony export */   "headExportValidator": () => (/* binding */ headExportValidator),
/* harmony export */   "isEqualNode": () => (/* binding */ isEqualNode),
/* harmony export */   "warnForInvalidTags": () => (/* binding */ warnForInvalidTags)
/* harmony export */ });
/**
 * Filter the props coming from a page down to just the ones that are relevant for head.
 * This e.g. filters out properties that are undefined during SSR.
 */function filterHeadProps(input){return{location:{pathname:input.location.pathname},params:input.params,data:input.data||{},pageContext:input.pageContext};}/**
 * Throw error if Head export is not a valid
 */function headExportValidator(head){if(typeof head!==`function`)throw new Error(`Expected "Head" export to be a function got "${typeof head}".`);}/**
 * Warn once for same messsage
 */let warnOnce=_=>{};if(false){}/**
 * Warn for invalid tags in head.
 * @param {string} tagName
 */function warnForInvalidTags(tagName){if(false){}}/**
 * When a `nonce` is present on an element, browsers such as Chrome and Firefox strip it out of the
 * actual HTML attributes for security reasons *when the element is added to the document*. Thus,
 * given two equivalent elements that have nonces, `Element,isEqualNode()` will return false if one
 * of those elements gets added to the document. Although the `element.nonce` property will be the
 * same for both elements, the one that was added to the document will return an empty string for
 * its nonce HTML attribute value.
 *
 * This custom `isEqualNode()` function therefore removes the nonce value from the `newTag` before
 * comparing it to `oldTag`, restoring it afterwards.
 *
 * For more information, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=1211471#c12
 */function isEqualNode(oldTag,newTag){if(oldTag instanceof HTMLElement&&newTag instanceof HTMLElement){const nonce=newTag.getAttribute(`nonce`);// Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
// be stripped if there is no content security policy response header that includes a nonce.
if(nonce&&!oldTag.getAttribute(`nonce`)){const cloneTag=newTag.cloneNode(true);cloneTag.setAttribute(`nonce`,``);cloneTag.nonce=nonce;return nonce===oldTag.nonce&&oldTag.isEqualNode(cloneTag);}}return oldTag.isEqualNode(newTag);}function diffNodes({oldNodes,newNodes,onStale,onNew}){for(const existingHeadElement of oldNodes){const indexInNewNodes=newNodes.findIndex(e=>isEqualNode(e,existingHeadElement));if(indexInNewNodes===-1){onStale(existingHeadElement);}else{// this node is re-created as-is, so we keep old node, and remove it from list of new nodes (as we handled it already here)
newNodes.splice(indexInNewNodes,1);}}// remaing new nodes didn't have matching old node, so need to be added
for(const newNode of newNodes){onNew(newNode);}}

/***/ }),

/***/ 2743:
/***/ ((module) => {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, exports) => {

exports.O=Component=>Component;

/***/ }),

/***/ 236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteAnnouncerProps": () => (/* binding */ RouteAnnouncerProps)
/* harmony export */ });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:`gatsby-announcer`,style:{position:`absolute`,top:0,width:1,height:1,padding:0,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},"aria-live":`assertive`,"aria-atomic":`true`};

/***/ }),

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WritableAsPromise": () => (/* binding */ WritableAsPromise)
/* harmony export */ });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8311);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_0__);
class WritableAsPromise extends stream__WEBPACK_IMPORTED_MODULE_0__.Writable{constructor(){super();this._output=``;this._deferred={promise:null,resolve:null,reject:null};this._deferred.promise=new Promise((resolve,reject)=>{this._deferred.resolve=resolve;this._deferred.reject=reject;});}_write(chunk,enc,cb){this._output+=chunk.toString();cb();}end(){this._deferred.resolve(this._output);this.destroy();}// disguise us as a promise
then(resolve,reject){return this._deferred.promise.then(resolve,reject);}}

/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BaseContext": () => (/* binding */ BaseContext),
  "Link": () => (/* binding */ Link),
  "Location": () => (/* binding */ Location),
  "LocationProvider": () => (/* binding */ LocationProvider),
  "Match": () => (/* binding */ Match),
  "Redirect": () => (/* binding */ Redirect),
  "Router": () => (/* binding */ Router),
  "ServerLocation": () => (/* binding */ ServerLocation),
  "createHistory": () => (/* reexport */ createHistory),
  "createMemorySource": () => (/* reexport */ createMemorySource),
  "globalHistory": () => (/* reexport */ globalHistory),
  "isRedirect": () => (/* binding */ isRedirect),
  "matchPath": () => (/* reexport */ match),
  "navigate": () => (/* reexport */ history_navigate),
  "redirectTo": () => (/* binding */ redirectTo),
  "resolve": () => (/* reexport */ resolve),
  "useLocation": () => (/* binding */ useLocation),
  "useMatch": () => (/* binding */ useMatch),
  "useNavigate": () => (/* binding */ useNavigate),
  "useParams": () => (/* binding */ useParams)
});

// EXTERNAL MODULE: external "/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/node_modules/react/index.js"
var index_js_ = __webpack_require__(2201);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/invariant/invariant.js
var invariant = __webpack_require__(6128);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(9712);
;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js


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
        !matchIsNotReserved ?  false ? 0 : invariant_default()(false) : void 0;
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

;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/history.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var history_navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////


;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js
var es_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */







////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,index_js_.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return index_js_default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : index_js_default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return index_js_default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((index_js_default()).Component);

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? 0 : void 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return index_js_default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: globalHistory.navigate
});

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return index_js_default().createElement(
        Location,
        null,
        function (locationContext) {
          return index_js_default().createElement(RouterImpl, es_extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = index_js_default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = index_js_default().cloneElement(element, props, element.props.children ? index_js_default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? es_extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return index_js_default().createElement(
        BaseContext.Provider,
        {
          value: { baseuri: uri, basepath: basepath, navigate: props.navigate }
        },
        index_js_default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((index_js_default()).PureComponent);

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return index_js_default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return index_js_default().createElement(FocusHandlerImpl, es_extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return index_js_default().createElement(
      Comp,
      es_extends({
        style: es_extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      index_js_default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((index_js_default()).Component);

(0,react_lifecycles_compat/* polyfill */.O)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (index_js_default()).forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return index_js_default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = startsWith(location.pathname, encodedHref);

          return index_js_default().createElement("a", es_extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = es_extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = shallowCompare(es_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 false ? 0 : void 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = resolve(to, baseuri);
      navigate(insertParams(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = resolve(to, baseuri);
    if (!noThrow) redirectTo(insertParams(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((index_js_default()).Component);

var Redirect = function Redirect(props) {
  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return index_js_default().createElement(
        Location,
        null,
        function (locationContext) {
          return index_js_default().createElement(RedirectImpl, es_extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 false ? 0 : void 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return index_js_default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = resolve(path, baseuri);
          var result = match(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? es_extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,index_js_.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,index_js_.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,index_js_.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = match(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,index_js_.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = resolve(path, context.baseuri);
  var result = match(resolvedPath, location.pathname);
  return result ? es_extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (index_js_default()).Fragment && element.props.children) {
      return index_js_default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  false ? 0 : invariant_default()(false) : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  false ? 0 : invariant_default()(false) : void 0;

    !!(element.type === Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? 0 : invariant_default()(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ 6492:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	// All astral symbols.
	var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	// All ASCII symbols (not just printable ASCII) except those listed in the
	// first column of the overrides table.
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
	var regexAsciiWhitelist = /[\x01-\x7F]/g;
	// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
	// code points listed in the first column of the overrides table on
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
	var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

	var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
	var encodeMap = {'\xAD':'shy','\u200C':'zwnj','\u200D':'zwj','\u200E':'lrm','\u2063':'ic','\u2062':'it','\u2061':'af','\u200F':'rlm','\u200B':'ZeroWidthSpace','\u2060':'NoBreak','\u0311':'DownBreve','\u20DB':'tdot','\u20DC':'DotDot','\t':'Tab','\n':'NewLine','\u2008':'puncsp','\u205F':'MediumSpace','\u2009':'thinsp','\u200A':'hairsp','\u2004':'emsp13','\u2002':'ensp','\u2005':'emsp14','\u2003':'emsp','\u2007':'numsp','\xA0':'nbsp','\u205F\u200A':'ThickSpace','\u203E':'oline','_':'lowbar','\u2010':'dash','\u2013':'ndash','\u2014':'mdash','\u2015':'horbar',',':'comma',';':'semi','\u204F':'bsemi',':':'colon','\u2A74':'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period','\u2025':'nldr','\u2026':'mldr','\xB7':'middot','\'':'apos','\u2018':'lsquo','\u2019':'rsquo','\u201A':'sbquo','\u2039':'lsaquo','\u203A':'rsaquo','"':'quot','\u201C':'ldquo','\u201D':'rdquo','\u201E':'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub','\u2308':'lceil','\u2309':'rceil','\u230A':'lfloor','\u230B':'rfloor','\u2985':'lopar','\u2986':'ropar','\u298B':'lbrke','\u298C':'rbrke','\u298D':'lbrkslu','\u298E':'rbrksld','\u298F':'lbrksld','\u2990':'rbrkslu','\u2991':'langd','\u2992':'rangd','\u2993':'lparlt','\u2994':'rpargt','\u2995':'gtlPar','\u2996':'ltrPar','\u27E6':'lobrk','\u27E7':'robrk','\u27E8':'lang','\u27E9':'rang','\u27EA':'Lang','\u27EB':'Rang','\u27EC':'loang','\u27ED':'roang','\u2772':'lbbrk','\u2773':'rbbrk','\u2016':'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt','\u2030':'permil','\u2031':'pertenk','\u2020':'dagger','\u2021':'Dagger','\u2022':'bull','\u2043':'hybull','\u2032':'prime','\u2033':'Prime','\u2034':'tprime','\u2057':'qprime','\u2035':'bprime','\u2041':'caret','`':'grave','\xB4':'acute','\u02DC':'tilde','^':'Hat','\xAF':'macr','\u02D8':'breve','\u02D9':'dot','\xA8':'die','\u02DA':'ring','\u02DD':'dblac','\xB8':'cedil','\u02DB':'ogon','\u02C6':'circ','\u02C7':'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg','\u2117':'copysr','\u2118':'wp','\u211E':'rx','\u2127':'mho','\u2129':'iiota','\u2190':'larr','\u219A':'nlarr','\u2192':'rarr','\u219B':'nrarr','\u2191':'uarr','\u2193':'darr','\u2194':'harr','\u21AE':'nharr','\u2195':'varr','\u2196':'nwarr','\u2197':'nearr','\u2198':'searr','\u2199':'swarr','\u219D':'rarrw','\u219D\u0338':'nrarrw','\u219E':'Larr','\u219F':'Uarr','\u21A0':'Rarr','\u21A1':'Darr','\u21A2':'larrtl','\u21A3':'rarrtl','\u21A4':'mapstoleft','\u21A5':'mapstoup','\u21A6':'map','\u21A7':'mapstodown','\u21A9':'larrhk','\u21AA':'rarrhk','\u21AB':'larrlp','\u21AC':'rarrlp','\u21AD':'harrw','\u21B0':'lsh','\u21B1':'rsh','\u21B2':'ldsh','\u21B3':'rdsh','\u21B5':'crarr','\u21B6':'cularr','\u21B7':'curarr','\u21BA':'olarr','\u21BB':'orarr','\u21BC':'lharu','\u21BD':'lhard','\u21BE':'uharr','\u21BF':'uharl','\u21C0':'rharu','\u21C1':'rhard','\u21C2':'dharr','\u21C3':'dharl','\u21C4':'rlarr','\u21C5':'udarr','\u21C6':'lrarr','\u21C7':'llarr','\u21C8':'uuarr','\u21C9':'rrarr','\u21CA':'ddarr','\u21CB':'lrhar','\u21CC':'rlhar','\u21D0':'lArr','\u21CD':'nlArr','\u21D1':'uArr','\u21D2':'rArr','\u21CF':'nrArr','\u21D3':'dArr','\u21D4':'iff','\u21CE':'nhArr','\u21D5':'vArr','\u21D6':'nwArr','\u21D7':'neArr','\u21D8':'seArr','\u21D9':'swArr','\u21DA':'lAarr','\u21DB':'rAarr','\u21DD':'zigrarr','\u21E4':'larrb','\u21E5':'rarrb','\u21F5':'duarr','\u21FD':'loarr','\u21FE':'roarr','\u21FF':'hoarr','\u2200':'forall','\u2201':'comp','\u2202':'part','\u2202\u0338':'npart','\u2203':'exist','\u2204':'nexist','\u2205':'empty','\u2207':'Del','\u2208':'in','\u2209':'notin','\u220B':'ni','\u220C':'notni','\u03F6':'bepsi','\u220F':'prod','\u2210':'coprod','\u2211':'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt','\u226E':'nlt','<\u20D2':'nvlt','=':'equals','\u2260':'ne','=\u20E5':'bne','\u2A75':'Equal','>':'gt','\u226F':'ngt','>\u20D2':'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar','\u2212':'minus','\u2213':'mp','\u2214':'plusdo','\u2044':'frasl','\u2216':'setmn','\u2217':'lowast','\u2218':'compfn','\u221A':'Sqrt','\u221D':'prop','\u221E':'infin','\u221F':'angrt','\u2220':'ang','\u2220\u20D2':'nang','\u2221':'angmsd','\u2222':'angsph','\u2223':'mid','\u2224':'nmid','\u2225':'par','\u2226':'npar','\u2227':'and','\u2228':'or','\u2229':'cap','\u2229\uFE00':'caps','\u222A':'cup','\u222A\uFE00':'cups','\u222B':'int','\u222C':'Int','\u222D':'tint','\u2A0C':'qint','\u222E':'oint','\u222F':'Conint','\u2230':'Cconint','\u2231':'cwint','\u2232':'cwconint','\u2233':'awconint','\u2234':'there4','\u2235':'becaus','\u2236':'ratio','\u2237':'Colon','\u2238':'minusd','\u223A':'mDDot','\u223B':'homtht','\u223C':'sim','\u2241':'nsim','\u223C\u20D2':'nvsim','\u223D':'bsim','\u223D\u0331':'race','\u223E':'ac','\u223E\u0333':'acE','\u223F':'acd','\u2240':'wr','\u2242':'esim','\u2242\u0338':'nesim','\u2243':'sime','\u2244':'nsime','\u2245':'cong','\u2247':'ncong','\u2246':'simne','\u2248':'ap','\u2249':'nap','\u224A':'ape','\u224B':'apid','\u224B\u0338':'napid','\u224C':'bcong','\u224D':'CupCap','\u226D':'NotCupCap','\u224D\u20D2':'nvap','\u224E':'bump','\u224E\u0338':'nbump','\u224F':'bumpe','\u224F\u0338':'nbumpe','\u2250':'doteq','\u2250\u0338':'nedot','\u2251':'eDot','\u2252':'efDot','\u2253':'erDot','\u2254':'colone','\u2255':'ecolon','\u2256':'ecir','\u2257':'cire','\u2259':'wedgeq','\u225A':'veeeq','\u225C':'trie','\u225F':'equest','\u2261':'equiv','\u2262':'nequiv','\u2261\u20E5':'bnequiv','\u2264':'le','\u2270':'nle','\u2264\u20D2':'nvle','\u2265':'ge','\u2271':'nge','\u2265\u20D2':'nvge','\u2266':'lE','\u2266\u0338':'nlE','\u2267':'gE','\u2267\u0338':'ngE','\u2268\uFE00':'lvnE','\u2268':'lnE','\u2269':'gnE','\u2269\uFE00':'gvnE','\u226A':'ll','\u226A\u0338':'nLtv','\u226A\u20D2':'nLt','\u226B':'gg','\u226B\u0338':'nGtv','\u226B\u20D2':'nGt','\u226C':'twixt','\u2272':'lsim','\u2274':'nlsim','\u2273':'gsim','\u2275':'ngsim','\u2276':'lg','\u2278':'ntlg','\u2277':'gl','\u2279':'ntgl','\u227A':'pr','\u2280':'npr','\u227B':'sc','\u2281':'nsc','\u227C':'prcue','\u22E0':'nprcue','\u227D':'sccue','\u22E1':'nsccue','\u227E':'prsim','\u227F':'scsim','\u227F\u0338':'NotSucceedsTilde','\u2282':'sub','\u2284':'nsub','\u2282\u20D2':'vnsub','\u2283':'sup','\u2285':'nsup','\u2283\u20D2':'vnsup','\u2286':'sube','\u2288':'nsube','\u2287':'supe','\u2289':'nsupe','\u228A\uFE00':'vsubne','\u228A':'subne','\u228B\uFE00':'vsupne','\u228B':'supne','\u228D':'cupdot','\u228E':'uplus','\u228F':'sqsub','\u228F\u0338':'NotSquareSubset','\u2290':'sqsup','\u2290\u0338':'NotSquareSuperset','\u2291':'sqsube','\u22E2':'nsqsube','\u2292':'sqsupe','\u22E3':'nsqsupe','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u2295':'oplus','\u2296':'ominus','\u2297':'otimes','\u2298':'osol','\u2299':'odot','\u229A':'ocir','\u229B':'oast','\u229D':'odash','\u229E':'plusb','\u229F':'minusb','\u22A0':'timesb','\u22A1':'sdotb','\u22A2':'vdash','\u22AC':'nvdash','\u22A3':'dashv','\u22A4':'top','\u22A5':'bot','\u22A7':'models','\u22A8':'vDash','\u22AD':'nvDash','\u22A9':'Vdash','\u22AE':'nVdash','\u22AA':'Vvdash','\u22AB':'VDash','\u22AF':'nVDash','\u22B0':'prurel','\u22B2':'vltri','\u22EA':'nltri','\u22B3':'vrtri','\u22EB':'nrtri','\u22B4':'ltrie','\u22EC':'nltrie','\u22B4\u20D2':'nvltrie','\u22B5':'rtrie','\u22ED':'nrtrie','\u22B5\u20D2':'nvrtrie','\u22B6':'origof','\u22B7':'imof','\u22B8':'mumap','\u22B9':'hercon','\u22BA':'intcal','\u22BB':'veebar','\u22BD':'barvee','\u22BE':'angrtvb','\u22BF':'lrtri','\u22C0':'Wedge','\u22C1':'Vee','\u22C2':'xcap','\u22C3':'xcup','\u22C4':'diam','\u22C5':'sdot','\u22C6':'Star','\u22C7':'divonx','\u22C8':'bowtie','\u22C9':'ltimes','\u22CA':'rtimes','\u22CB':'lthree','\u22CC':'rthree','\u22CD':'bsime','\u22CE':'cuvee','\u22CF':'cuwed','\u22D0':'Sub','\u22D1':'Sup','\u22D2':'Cap','\u22D3':'Cup','\u22D4':'fork','\u22D5':'epar','\u22D6':'ltdot','\u22D7':'gtdot','\u22D8':'Ll','\u22D8\u0338':'nLl','\u22D9':'Gg','\u22D9\u0338':'nGg','\u22DA\uFE00':'lesg','\u22DA':'leg','\u22DB':'gel','\u22DB\uFE00':'gesl','\u22DE':'cuepr','\u22DF':'cuesc','\u22E6':'lnsim','\u22E7':'gnsim','\u22E8':'prnsim','\u22E9':'scnsim','\u22EE':'vellip','\u22EF':'ctdot','\u22F0':'utdot','\u22F1':'dtdot','\u22F2':'disin','\u22F3':'isinsv','\u22F4':'isins','\u22F5':'isindot','\u22F5\u0338':'notindot','\u22F6':'notinvc','\u22F7':'notinvb','\u22F9':'isinE','\u22F9\u0338':'notinE','\u22FA':'nisd','\u22FB':'xnis','\u22FC':'nis','\u22FD':'notnivc','\u22FE':'notnivb','\u2305':'barwed','\u2306':'Barwed','\u230C':'drcrop','\u230D':'dlcrop','\u230E':'urcrop','\u230F':'ulcrop','\u2310':'bnot','\u2312':'profline','\u2313':'profsurf','\u2315':'telrec','\u2316':'target','\u231C':'ulcorn','\u231D':'urcorn','\u231E':'dlcorn','\u231F':'drcorn','\u2322':'frown','\u2323':'smile','\u232D':'cylcty','\u232E':'profalar','\u2336':'topbot','\u233D':'ovbar','\u233F':'solbar','\u237C':'angzarr','\u23B0':'lmoust','\u23B1':'rmoust','\u23B4':'tbrk','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u23DC':'OverParenthesis','\u23DD':'UnderParenthesis','\u23DE':'OverBrace','\u23DF':'UnderBrace','\u23E2':'trpezium','\u23E7':'elinters','\u2423':'blank','\u2500':'boxh','\u2502':'boxv','\u250C':'boxdr','\u2510':'boxdl','\u2514':'boxur','\u2518':'boxul','\u251C':'boxvr','\u2524':'boxvl','\u252C':'boxhd','\u2534':'boxhu','\u253C':'boxvh','\u2550':'boxH','\u2551':'boxV','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2580':'uhblk','\u2584':'lhblk','\u2588':'block','\u2591':'blk14','\u2592':'blk12','\u2593':'blk34','\u25A1':'squ','\u25AA':'squf','\u25AB':'EmptyVerySmallSquare','\u25AD':'rect','\u25AE':'marker','\u25B1':'fltns','\u25B3':'xutri','\u25B4':'utrif','\u25B5':'utri','\u25B8':'rtrif','\u25B9':'rtri','\u25BD':'xdtri','\u25BE':'dtrif','\u25BF':'dtri','\u25C2':'ltrif','\u25C3':'ltri','\u25CA':'loz','\u25CB':'cir','\u25EC':'tridot','\u25EF':'xcirc','\u25F8':'ultri','\u25F9':'urtri','\u25FA':'lltri','\u25FB':'EmptySmallSquare','\u25FC':'FilledSmallSquare','\u2605':'starf','\u2606':'star','\u260E':'phone','\u2640':'female','\u2642':'male','\u2660':'spades','\u2663':'clubs','\u2665':'hearts','\u2666':'diams','\u266A':'sung','\u2713':'check','\u2717':'cross','\u2720':'malt','\u2736':'sext','\u2758':'VerticalSeparator','\u27C8':'bsolhsub','\u27C9':'suphsol','\u27F5':'xlarr','\u27F6':'xrarr','\u27F7':'xharr','\u27F8':'xlArr','\u27F9':'xrArr','\u27FA':'xhArr','\u27FC':'xmap','\u27FF':'dzigrarr','\u2902':'nvlArr','\u2903':'nvrArr','\u2904':'nvHarr','\u2905':'Map','\u290C':'lbarr','\u290D':'rbarr','\u290E':'lBarr','\u290F':'rBarr','\u2910':'RBarr','\u2911':'DDotrahd','\u2912':'UpArrowBar','\u2913':'DownArrowBar','\u2916':'Rarrtl','\u2919':'latail','\u291A':'ratail','\u291B':'lAtail','\u291C':'rAtail','\u291D':'larrfs','\u291E':'rarrfs','\u291F':'larrbfs','\u2920':'rarrbfs','\u2923':'nwarhk','\u2924':'nearhk','\u2925':'searhk','\u2926':'swarhk','\u2927':'nwnear','\u2928':'toea','\u2929':'tosa','\u292A':'swnwar','\u2933':'rarrc','\u2933\u0338':'nrarrc','\u2935':'cudarrr','\u2936':'ldca','\u2937':'rdca','\u2938':'cudarrl','\u2939':'larrpl','\u293C':'curarrm','\u293D':'cularrp','\u2945':'rarrpl','\u2948':'harrcir','\u2949':'Uarrocir','\u294A':'lurdshar','\u294B':'ldrushar','\u294E':'LeftRightVector','\u294F':'RightUpDownVector','\u2950':'DownLeftRightVector','\u2951':'LeftUpDownVector','\u2952':'LeftVectorBar','\u2953':'RightVectorBar','\u2954':'RightUpVectorBar','\u2955':'RightDownVectorBar','\u2956':'DownLeftVectorBar','\u2957':'DownRightVectorBar','\u2958':'LeftUpVectorBar','\u2959':'LeftDownVectorBar','\u295A':'LeftTeeVector','\u295B':'RightTeeVector','\u295C':'RightUpTeeVector','\u295D':'RightDownTeeVector','\u295E':'DownLeftTeeVector','\u295F':'DownRightTeeVector','\u2960':'LeftUpTeeVector','\u2961':'LeftDownTeeVector','\u2962':'lHar','\u2963':'uHar','\u2964':'rHar','\u2965':'dHar','\u2966':'luruhar','\u2967':'ldrdhar','\u2968':'ruluhar','\u2969':'rdldhar','\u296A':'lharul','\u296B':'llhard','\u296C':'rharul','\u296D':'lrhard','\u296E':'udhar','\u296F':'duhar','\u2970':'RoundImplies','\u2971':'erarr','\u2972':'simrarr','\u2973':'larrsim','\u2974':'rarrsim','\u2975':'rarrap','\u2976':'ltlarr','\u2978':'gtrarr','\u2979':'subrarr','\u297B':'suplarr','\u297C':'lfisht','\u297D':'rfisht','\u297E':'ufisht','\u297F':'dfisht','\u299A':'vzigzag','\u299C':'vangrt','\u299D':'angrtvbd','\u29A4':'ange','\u29A5':'range','\u29A6':'dwangle','\u29A7':'uwangle','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u29B0':'bemptyv','\u29B1':'demptyv','\u29B2':'cemptyv','\u29B3':'raemptyv','\u29B4':'laemptyv','\u29B5':'ohbar','\u29B6':'omid','\u29B7':'opar','\u29B9':'operp','\u29BB':'olcross','\u29BC':'odsold','\u29BE':'olcir','\u29BF':'ofcir','\u29C0':'olt','\u29C1':'ogt','\u29C2':'cirscir','\u29C3':'cirE','\u29C4':'solb','\u29C5':'bsolb','\u29C9':'boxbox','\u29CD':'trisb','\u29CE':'rtriltri','\u29CF':'LeftTriangleBar','\u29CF\u0338':'NotLeftTriangleBar','\u29D0':'RightTriangleBar','\u29D0\u0338':'NotRightTriangleBar','\u29DC':'iinfin','\u29DD':'infintie','\u29DE':'nvinfin','\u29E3':'eparsl','\u29E4':'smeparsl','\u29E5':'eqvparsl','\u29EB':'lozf','\u29F4':'RuleDelayed','\u29F6':'dsol','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A04':'xuplus','\u2A06':'xsqcup','\u2A0D':'fpartint','\u2A10':'cirfnint','\u2A11':'awint','\u2A12':'rppolint','\u2A13':'scpolint','\u2A14':'npolint','\u2A15':'pointint','\u2A16':'quatint','\u2A17':'intlarhk','\u2A22':'pluscir','\u2A23':'plusacir','\u2A24':'simplus','\u2A25':'plusdu','\u2A26':'plussim','\u2A27':'plustwo','\u2A29':'mcomma','\u2A2A':'minusdu','\u2A2D':'loplus','\u2A2E':'roplus','\u2A2F':'Cross','\u2A30':'timesd','\u2A31':'timesbar','\u2A33':'smashp','\u2A34':'lotimes','\u2A35':'rotimes','\u2A36':'otimesas','\u2A37':'Otimes','\u2A38':'odiv','\u2A39':'triplus','\u2A3A':'triminus','\u2A3B':'tritime','\u2A3C':'iprod','\u2A3F':'amalg','\u2A40':'capdot','\u2A42':'ncup','\u2A43':'ncap','\u2A44':'capand','\u2A45':'cupor','\u2A46':'cupcap','\u2A47':'capcup','\u2A48':'cupbrcap','\u2A49':'capbrcup','\u2A4A':'cupcup','\u2A4B':'capcap','\u2A4C':'ccups','\u2A4D':'ccaps','\u2A50':'ccupssm','\u2A53':'And','\u2A54':'Or','\u2A55':'andand','\u2A56':'oror','\u2A57':'orslope','\u2A58':'andslope','\u2A5A':'andv','\u2A5B':'orv','\u2A5C':'andd','\u2A5D':'ord','\u2A5F':'wedbar','\u2A66':'sdote','\u2A6A':'simdot','\u2A6D':'congdot','\u2A6D\u0338':'ncongdot','\u2A6E':'easter','\u2A6F':'apacir','\u2A70':'apE','\u2A70\u0338':'napE','\u2A71':'eplus','\u2A72':'pluse','\u2A73':'Esim','\u2A77':'eDDot','\u2A78':'equivDD','\u2A79':'ltcir','\u2A7A':'gtcir','\u2A7B':'ltquest','\u2A7C':'gtquest','\u2A7D':'les','\u2A7D\u0338':'nles','\u2A7E':'ges','\u2A7E\u0338':'nges','\u2A7F':'lesdot','\u2A80':'gesdot','\u2A81':'lesdoto','\u2A82':'gesdoto','\u2A83':'lesdotor','\u2A84':'gesdotol','\u2A85':'lap','\u2A86':'gap','\u2A87':'lne','\u2A88':'gne','\u2A89':'lnap','\u2A8A':'gnap','\u2A8B':'lEg','\u2A8C':'gEl','\u2A8D':'lsime','\u2A8E':'gsime','\u2A8F':'lsimg','\u2A90':'gsiml','\u2A91':'lgE','\u2A92':'glE','\u2A93':'lesges','\u2A94':'gesles','\u2A95':'els','\u2A96':'egs','\u2A97':'elsdot','\u2A98':'egsdot','\u2A99':'el','\u2A9A':'eg','\u2A9D':'siml','\u2A9E':'simg','\u2A9F':'simlE','\u2AA0':'simgE','\u2AA1':'LessLess','\u2AA1\u0338':'NotNestedLessLess','\u2AA2':'GreaterGreater','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA4':'glj','\u2AA5':'gla','\u2AA6':'ltcc','\u2AA7':'gtcc','\u2AA8':'lescc','\u2AA9':'gescc','\u2AAA':'smt','\u2AAB':'lat','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u2AAD':'late','\u2AAD\uFE00':'lates','\u2AAE':'bumpE','\u2AAF':'pre','\u2AAF\u0338':'npre','\u2AB0':'sce','\u2AB0\u0338':'nsce','\u2AB3':'prE','\u2AB4':'scE','\u2AB5':'prnE','\u2AB6':'scnE','\u2AB7':'prap','\u2AB8':'scap','\u2AB9':'prnap','\u2ABA':'scnap','\u2ABB':'Pr','\u2ABC':'Sc','\u2ABD':'subdot','\u2ABE':'supdot','\u2ABF':'subplus','\u2AC0':'supplus','\u2AC1':'submult','\u2AC2':'supmult','\u2AC3':'subedot','\u2AC4':'supedot','\u2AC5':'subE','\u2AC5\u0338':'nsubE','\u2AC6':'supE','\u2AC6\u0338':'nsupE','\u2AC7':'subsim','\u2AC8':'supsim','\u2ACB\uFE00':'vsubnE','\u2ACB':'subnE','\u2ACC\uFE00':'vsupnE','\u2ACC':'supnE','\u2ACF':'csub','\u2AD0':'csup','\u2AD1':'csube','\u2AD2':'csupe','\u2AD3':'subsup','\u2AD4':'supsub','\u2AD5':'subsub','\u2AD6':'supsup','\u2AD7':'suphsub','\u2AD8':'supdsub','\u2AD9':'forkv','\u2ADA':'topfork','\u2ADB':'mlcp','\u2AE4':'Dashv','\u2AE6':'Vdashl','\u2AE7':'Barv','\u2AE8':'vBar','\u2AE9':'vBarv','\u2AEB':'Vbar','\u2AEC':'Not','\u2AED':'bNot','\u2AEE':'rnmid','\u2AEF':'cirmid','\u2AF0':'midcir','\u2AF1':'topcir','\u2AF2':'nhpar','\u2AF3':'parsim','\u2AFD':'parsl','\u2AFD\u20E5':'nparsl','\u266D':'flat','\u266E':'natur','\u266F':'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen','\u20AC':'euro','\xB9':'sup1','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\xB2':'sup2','\u2154':'frac23','\u2156':'frac25','\xB3':'sup3','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\uD835\uDCB6':'ascr','\uD835\uDD52':'aopf','\uD835\uDD1E':'afr','\uD835\uDD38':'Aopf','\uD835\uDD04':'Afr','\uD835\uDC9C':'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave','\u0103':'abreve','\u0102':'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde','\u0105':'aogon','\u0104':'Aogon','\u0101':'amacr','\u0100':'Amacr','\xE6':'aelig','\xC6':'AElig','\uD835\uDCB7':'bscr','\uD835\uDD53':'bopf','\uD835\uDD1F':'bfr','\uD835\uDD39':'Bopf','\u212C':'Bscr','\uD835\uDD05':'Bfr','\uD835\uDD20':'cfr','\uD835\uDCB8':'cscr','\uD835\uDD54':'copf','\u212D':'Cfr','\uD835\uDC9E':'Cscr','\u2102':'Copf','\u0107':'cacute','\u0106':'Cacute','\u0109':'ccirc','\u0108':'Ccirc','\u010D':'ccaron','\u010C':'Ccaron','\u010B':'cdot','\u010A':'Cdot','\xE7':'ccedil','\xC7':'Ccedil','\u2105':'incare','\uD835\uDD21':'dfr','\u2146':'dd','\uD835\uDD55':'dopf','\uD835\uDCB9':'dscr','\uD835\uDC9F':'Dscr','\uD835\uDD07':'Dfr','\u2145':'DD','\uD835\uDD3B':'Dopf','\u010F':'dcaron','\u010E':'Dcaron','\u0111':'dstrok','\u0110':'Dstrok','\xF0':'eth','\xD0':'ETH','\u2147':'ee','\u212F':'escr','\uD835\uDD22':'efr','\uD835\uDD56':'eopf','\u2130':'Escr','\uD835\uDD08':'Efr','\uD835\uDD3C':'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc','\u011B':'ecaron','\u011A':'Ecaron','\xEB':'euml','\xCB':'Euml','\u0117':'edot','\u0116':'Edot','\u0119':'eogon','\u0118':'Eogon','\u0113':'emacr','\u0112':'Emacr','\uD835\uDD23':'ffr','\uD835\uDD57':'fopf','\uD835\uDCBB':'fscr','\uD835\uDD09':'Ffr','\uD835\uDD3D':'Fopf','\u2131':'Fscr','\uFB00':'fflig','\uFB03':'ffilig','\uFB04':'ffllig','\uFB01':'filig','fj':'fjlig','\uFB02':'fllig','\u0192':'fnof','\u210A':'gscr','\uD835\uDD58':'gopf','\uD835\uDD24':'gfr','\uD835\uDCA2':'Gscr','\uD835\uDD3E':'Gopf','\uD835\uDD0A':'Gfr','\u01F5':'gacute','\u011F':'gbreve','\u011E':'Gbreve','\u011D':'gcirc','\u011C':'Gcirc','\u0121':'gdot','\u0120':'Gdot','\u0122':'Gcedil','\uD835\uDD25':'hfr','\u210E':'planckh','\uD835\uDCBD':'hscr','\uD835\uDD59':'hopf','\u210B':'Hscr','\u210C':'Hfr','\u210D':'Hopf','\u0125':'hcirc','\u0124':'Hcirc','\u210F':'hbar','\u0127':'hstrok','\u0126':'Hstrok','\uD835\uDD5A':'iopf','\uD835\uDD26':'ifr','\uD835\uDCBE':'iscr','\u2148':'ii','\uD835\uDD40':'Iopf','\u2110':'Iscr','\u2111':'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml','\u0129':'itilde','\u0128':'Itilde','\u0130':'Idot','\u012F':'iogon','\u012E':'Iogon','\u012B':'imacr','\u012A':'Imacr','\u0133':'ijlig','\u0132':'IJlig','\u0131':'imath','\uD835\uDCBF':'jscr','\uD835\uDD5B':'jopf','\uD835\uDD27':'jfr','\uD835\uDCA5':'Jscr','\uD835\uDD0D':'Jfr','\uD835\uDD41':'Jopf','\u0135':'jcirc','\u0134':'Jcirc','\u0237':'jmath','\uD835\uDD5C':'kopf','\uD835\uDCC0':'kscr','\uD835\uDD28':'kfr','\uD835\uDCA6':'Kscr','\uD835\uDD42':'Kopf','\uD835\uDD0E':'Kfr','\u0137':'kcedil','\u0136':'Kcedil','\uD835\uDD29':'lfr','\uD835\uDCC1':'lscr','\u2113':'ell','\uD835\uDD5D':'lopf','\u2112':'Lscr','\uD835\uDD0F':'Lfr','\uD835\uDD43':'Lopf','\u013A':'lacute','\u0139':'Lacute','\u013E':'lcaron','\u013D':'Lcaron','\u013C':'lcedil','\u013B':'Lcedil','\u0142':'lstrok','\u0141':'Lstrok','\u0140':'lmidot','\u013F':'Lmidot','\uD835\uDD2A':'mfr','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\uD835\uDD10':'Mfr','\uD835\uDD44':'Mopf','\u2133':'Mscr','\uD835\uDD2B':'nfr','\uD835\uDD5F':'nopf','\uD835\uDCC3':'nscr','\u2115':'Nopf','\uD835\uDCA9':'Nscr','\uD835\uDD11':'Nfr','\u0144':'nacute','\u0143':'Nacute','\u0148':'ncaron','\u0147':'Ncaron','\xF1':'ntilde','\xD1':'Ntilde','\u0146':'ncedil','\u0145':'Ncedil','\u2116':'numero','\u014B':'eng','\u014A':'ENG','\uD835\uDD60':'oopf','\uD835\uDD2C':'ofr','\u2134':'oscr','\uD835\uDCAA':'Oscr','\uD835\uDD12':'Ofr','\uD835\uDD46':'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml','\u0151':'odblac','\u0150':'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash','\u014D':'omacr','\u014C':'Omacr','\u0153':'oelig','\u0152':'OElig','\uD835\uDD2D':'pfr','\uD835\uDCC5':'pscr','\uD835\uDD61':'popf','\u2119':'Popf','\uD835\uDD13':'Pfr','\uD835\uDCAB':'Pscr','\uD835\uDD62':'qopf','\uD835\uDD2E':'qfr','\uD835\uDCC6':'qscr','\uD835\uDCAC':'Qscr','\uD835\uDD14':'Qfr','\u211A':'Qopf','\u0138':'kgreen','\uD835\uDD2F':'rfr','\uD835\uDD63':'ropf','\uD835\uDCC7':'rscr','\u211B':'Rscr','\u211C':'Re','\u211D':'Ropf','\u0155':'racute','\u0154':'Racute','\u0159':'rcaron','\u0158':'Rcaron','\u0157':'rcedil','\u0156':'Rcedil','\uD835\uDD64':'sopf','\uD835\uDCC8':'sscr','\uD835\uDD30':'sfr','\uD835\uDD4A':'Sopf','\uD835\uDD16':'Sfr','\uD835\uDCAE':'Sscr','\u24C8':'oS','\u015B':'sacute','\u015A':'Sacute','\u015D':'scirc','\u015C':'Scirc','\u0161':'scaron','\u0160':'Scaron','\u015F':'scedil','\u015E':'Scedil','\xDF':'szlig','\uD835\uDD31':'tfr','\uD835\uDCC9':'tscr','\uD835\uDD65':'topf','\uD835\uDCAF':'Tscr','\uD835\uDD17':'Tfr','\uD835\uDD4B':'Topf','\u0165':'tcaron','\u0164':'Tcaron','\u0163':'tcedil','\u0162':'Tcedil','\u2122':'trade','\u0167':'tstrok','\u0166':'Tstrok','\uD835\uDCCA':'uscr','\uD835\uDD66':'uopf','\uD835\uDD32':'ufr','\uD835\uDD4C':'Uopf','\uD835\uDD18':'Ufr','\uD835\uDCB0':'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave','\u016D':'ubreve','\u016C':'Ubreve','\xFB':'ucirc','\xDB':'Ucirc','\u016F':'uring','\u016E':'Uring','\xFC':'uuml','\xDC':'Uuml','\u0171':'udblac','\u0170':'Udblac','\u0169':'utilde','\u0168':'Utilde','\u0173':'uogon','\u0172':'Uogon','\u016B':'umacr','\u016A':'Umacr','\uD835\uDD33':'vfr','\uD835\uDD67':'vopf','\uD835\uDCCB':'vscr','\uD835\uDD19':'Vfr','\uD835\uDD4D':'Vopf','\uD835\uDCB1':'Vscr','\uD835\uDD68':'wopf','\uD835\uDCCC':'wscr','\uD835\uDD34':'wfr','\uD835\uDCB2':'Wscr','\uD835\uDD4E':'Wopf','\uD835\uDD1A':'Wfr','\u0175':'wcirc','\u0174':'Wcirc','\uD835\uDD35':'xfr','\uD835\uDCCD':'xscr','\uD835\uDD69':'xopf','\uD835\uDD4F':'Xopf','\uD835\uDD1B':'Xfr','\uD835\uDCB3':'Xscr','\uD835\uDD36':'yfr','\uD835\uDCCE':'yscr','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDD1C':'Yfr','\uD835\uDD50':'Yopf','\xFD':'yacute','\xDD':'Yacute','\u0177':'ycirc','\u0176':'Ycirc','\xFF':'yuml','\u0178':'Yuml','\uD835\uDCCF':'zscr','\uD835\uDD37':'zfr','\uD835\uDD6B':'zopf','\u2128':'Zfr','\u2124':'Zopf','\uD835\uDCB5':'Zscr','\u017A':'zacute','\u0179':'Zacute','\u017E':'zcaron','\u017D':'Zcaron','\u017C':'zdot','\u017B':'Zdot','\u01B5':'imped','\xFE':'thorn','\xDE':'THORN','\u0149':'napos','\u03B1':'alpha','\u0391':'Alpha','\u03B2':'beta','\u0392':'Beta','\u03B3':'gamma','\u0393':'Gamma','\u03B4':'delta','\u0394':'Delta','\u03B5':'epsi','\u03F5':'epsiv','\u0395':'Epsilon','\u03DD':'gammad','\u03DC':'Gammad','\u03B6':'zeta','\u0396':'Zeta','\u03B7':'eta','\u0397':'Eta','\u03B8':'theta','\u03D1':'thetav','\u0398':'Theta','\u03B9':'iota','\u0399':'Iota','\u03BA':'kappa','\u03F0':'kappav','\u039A':'Kappa','\u03BB':'lambda','\u039B':'Lambda','\u03BC':'mu','\xB5':'micro','\u039C':'Mu','\u03BD':'nu','\u039D':'Nu','\u03BE':'xi','\u039E':'Xi','\u03BF':'omicron','\u039F':'Omicron','\u03C0':'pi','\u03D6':'piv','\u03A0':'Pi','\u03C1':'rho','\u03F1':'rhov','\u03A1':'Rho','\u03C3':'sigma','\u03A3':'Sigma','\u03C2':'sigmaf','\u03C4':'tau','\u03A4':'Tau','\u03C5':'upsi','\u03A5':'Upsilon','\u03D2':'Upsi','\u03C6':'phi','\u03D5':'phiv','\u03A6':'Phi','\u03C7':'chi','\u03A7':'Chi','\u03C8':'psi','\u03A8':'Psi','\u03C9':'omega','\u03A9':'ohm','\u0430':'acy','\u0410':'Acy','\u0431':'bcy','\u0411':'Bcy','\u0432':'vcy','\u0412':'Vcy','\u0433':'gcy','\u0413':'Gcy','\u0453':'gjcy','\u0403':'GJcy','\u0434':'dcy','\u0414':'Dcy','\u0452':'djcy','\u0402':'DJcy','\u0435':'iecy','\u0415':'IEcy','\u0451':'iocy','\u0401':'IOcy','\u0454':'jukcy','\u0404':'Jukcy','\u0436':'zhcy','\u0416':'ZHcy','\u0437':'zcy','\u0417':'Zcy','\u0455':'dscy','\u0405':'DScy','\u0438':'icy','\u0418':'Icy','\u0456':'iukcy','\u0406':'Iukcy','\u0457':'yicy','\u0407':'YIcy','\u0439':'jcy','\u0419':'Jcy','\u0458':'jsercy','\u0408':'Jsercy','\u043A':'kcy','\u041A':'Kcy','\u045C':'kjcy','\u040C':'KJcy','\u043B':'lcy','\u041B':'Lcy','\u0459':'ljcy','\u0409':'LJcy','\u043C':'mcy','\u041C':'Mcy','\u043D':'ncy','\u041D':'Ncy','\u045A':'njcy','\u040A':'NJcy','\u043E':'ocy','\u041E':'Ocy','\u043F':'pcy','\u041F':'Pcy','\u0440':'rcy','\u0420':'Rcy','\u0441':'scy','\u0421':'Scy','\u0442':'tcy','\u0422':'Tcy','\u045B':'tshcy','\u040B':'TSHcy','\u0443':'ucy','\u0423':'Ucy','\u045E':'ubrcy','\u040E':'Ubrcy','\u0444':'fcy','\u0424':'Fcy','\u0445':'khcy','\u0425':'KHcy','\u0446':'tscy','\u0426':'TScy','\u0447':'chcy','\u0427':'CHcy','\u045F':'dzcy','\u040F':'DZcy','\u0448':'shcy','\u0428':'SHcy','\u0449':'shchcy','\u0429':'SHCHcy','\u044A':'hardcy','\u042A':'HARDcy','\u044B':'ycy','\u042B':'Ycy','\u044C':'softcy','\u042C':'SOFTcy','\u044D':'ecy','\u042D':'Ecy','\u044E':'yucy','\u042E':'YUcy','\u044F':'yacy','\u042F':'YAcy','\u2135':'aleph','\u2136':'beth','\u2137':'gimel','\u2138':'daleth'};

	var regexEscape = /["&'<>`]/g;
	var escapeMap = {
		'"': '&quot;',
		'&': '&amp;',
		'\'': '&#x27;',
		'<': '&lt;',
		// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
		// following is not strictly necessary unless it’s part of a tag or an
		// unquoted attribute value. We’re only escaping it to support those
		// situations, and for XML support.
		'>': '&gt;',
		// In Internet Explorer ≤ 8, the backtick character can be used
		// to break out of (un)quoted attribute values or HTML comments.
		// See http://html5sec.org/#102, http://html5sec.org/#108, and
		// http://html5sec.org/#133.
		'`': '&#x60;'
	};

	var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
	var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
	var decodeMap = {'aacute':'\xE1','Aacute':'\xC1','abreve':'\u0103','Abreve':'\u0102','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':'\u0430','Acy':'\u0410','aelig':'\xE6','AElig':'\xC6','af':'\u2061','afr':'\uD835\uDD1E','Afr':'\uD835\uDD04','agrave':'\xE0','Agrave':'\xC0','alefsym':'\u2135','aleph':'\u2135','alpha':'\u03B1','Alpha':'\u0391','amacr':'\u0101','Amacr':'\u0100','amalg':'\u2A3F','amp':'&','AMP':'&','and':'\u2227','And':'\u2A53','andand':'\u2A55','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsd':'\u2221','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','aogon':'\u0105','Aogon':'\u0104','aopf':'\uD835\uDD52','Aopf':'\uD835\uDD38','ap':'\u2248','apacir':'\u2A6F','ape':'\u224A','apE':'\u2A70','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','aring':'\xE5','Aring':'\xC5','ascr':'\uD835\uDCB6','Ascr':'\uD835\uDC9C','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','bcy':'\u0431','Bcy':'\u0411','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','beta':'\u03B2','Beta':'\u0392','beth':'\u2136','between':'\u226C','bfr':'\uD835\uDD1F','Bfr':'\uD835\uDD05','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bnot':'\u2310','bNot':'\u2AED','bopf':'\uD835\uDD53','Bopf':'\uD835\uDD39','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxhD':'\u2565','boxHd':'\u2564','boxHD':'\u2566','boxhu':'\u2534','boxhU':'\u2568','boxHu':'\u2567','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsol':'\\','bsolb':'\u29C5','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpe':'\u224F','bumpE':'\u2AAE','bumpeq':'\u224F','Bumpeq':'\u224E','cacute':'\u0107','Cacute':'\u0106','cap':'\u2229','Cap':'\u22D2','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','ccaron':'\u010D','Ccaron':'\u010C','ccedil':'\xE7','Ccedil':'\xC7','ccirc':'\u0109','Ccirc':'\u0108','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','cdot':'\u010B','Cdot':'\u010A','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','chcy':'\u0447','CHcy':'\u0427','check':'\u2713','checkmark':'\u2713','chi':'\u03C7','Chi':'\u03A7','cir':'\u25CB','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cire':'\u2257','cirE':'\u29C3','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','colone':'\u2254','Colone':'\u2A74','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','cscr':'\uD835\uDCB8','Cscr':'\uD835\uDC9E','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cup':'\u222A','Cup':'\u22D3','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','dArr':'\u21D3','Darr':'\u21A1','dash':'\u2010','dashv':'\u22A3','Dashv':'\u2AE4','dbkarow':'\u290F','dblac':'\u02DD','dcaron':'\u010F','Dcaron':'\u010E','dcy':'\u0434','Dcy':'\u0414','dd':'\u2146','DD':'\u2145','ddagger':'\u2021','ddarr':'\u21CA','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','delta':'\u03B4','Delta':'\u0394','demptyv':'\u29B1','dfisht':'\u297F','dfr':'\uD835\uDD21','Dfr':'\uD835\uDD07','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','djcy':'\u0452','DJcy':'\u0402','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','dopf':'\uD835\uDD55','Dopf':'\uD835\uDD3B','dot':'\u02D9','Dot':'\xA8','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','downarrow':'\u2193','Downarrow':'\u21D3','DownArrow':'\u2193','DownArrowBar':'\u2913','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVector':'\u21BD','DownLeftVectorBar':'\u2956','DownRightTeeVector':'\u295F','DownRightVector':'\u21C1','DownRightVectorBar':'\u2957','DownTee':'\u22A4','DownTeeArrow':'\u21A7','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','dscr':'\uD835\uDCB9','Dscr':'\uD835\uDC9F','dscy':'\u0455','DScy':'\u0405','dsol':'\u29F6','dstrok':'\u0111','Dstrok':'\u0110','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','dzcy':'\u045F','DZcy':'\u040F','dzigrarr':'\u27FF','eacute':'\xE9','Eacute':'\xC9','easter':'\u2A6E','ecaron':'\u011B','Ecaron':'\u011A','ecir':'\u2256','ecirc':'\xEA','Ecirc':'\xCA','ecolon':'\u2255','ecy':'\u044D','Ecy':'\u042D','eDDot':'\u2A77','edot':'\u0117','eDot':'\u2251','Edot':'\u0116','ee':'\u2147','efDot':'\u2252','efr':'\uD835\uDD22','Efr':'\uD835\uDD08','eg':'\u2A9A','egrave':'\xE8','Egrave':'\xC8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','emacr':'\u0113','Emacr':'\u0112','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp':'\u2003','emsp13':'\u2004','emsp14':'\u2005','eng':'\u014B','ENG':'\u014A','ensp':'\u2002','eogon':'\u0119','Eogon':'\u0118','eopf':'\uD835\uDD56','Eopf':'\uD835\uDD3C','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','epsilon':'\u03B5','Epsilon':'\u0395','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','esim':'\u2242','Esim':'\u2A73','eta':'\u03B7','Eta':'\u0397','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','fcy':'\u0444','Fcy':'\u0424','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','ffr':'\uD835\uDD23','Ffr':'\uD835\uDD09','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','fopf':'\uD835\uDD57','Fopf':'\uD835\uDD3D','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','gamma':'\u03B3','Gamma':'\u0393','gammad':'\u03DD','Gammad':'\u03DC','gap':'\u2A86','gbreve':'\u011F','Gbreve':'\u011E','Gcedil':'\u0122','gcirc':'\u011D','Gcirc':'\u011C','gcy':'\u0433','Gcy':'\u0413','gdot':'\u0121','Gdot':'\u0120','ge':'\u2265','gE':'\u2267','gel':'\u22DB','gEl':'\u2A8C','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','ges':'\u2A7E','gescc':'\u2AA9','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','gfr':'\uD835\uDD24','Gfr':'\uD835\uDD0A','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','gjcy':'\u0453','GJcy':'\u0403','gl':'\u2277','gla':'\u2AA5','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','gopf':'\uD835\uDD58','Gopf':'\uD835\uDD3E','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','gscr':'\u210A','Gscr':'\uD835\uDCA2','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gt':'>','Gt':'\u226B','GT':'>','gtcc':'\u2AA7','gtcir':'\u2A7A','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','hardcy':'\u044A','HARDcy':'\u042A','harr':'\u2194','hArr':'\u21D4','harrcir':'\u2948','harrw':'\u21AD','Hat':'^','hbar':'\u210F','hcirc':'\u0125','Hcirc':'\u0124','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','hstrok':'\u0127','Hstrok':'\u0126','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','iacute':'\xED','Iacute':'\xCD','ic':'\u2063','icirc':'\xEE','Icirc':'\xCE','icy':'\u0438','Icy':'\u0418','Idot':'\u0130','iecy':'\u0435','IEcy':'\u0415','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','igrave':'\xEC','Igrave':'\xCC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','ijlig':'\u0133','IJlig':'\u0132','Im':'\u2111','imacr':'\u012B','Imacr':'\u012A','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','in':'\u2208','incare':'\u2105','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','int':'\u222B','Int':'\u222C','intcal':'\u22BA','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','iocy':'\u0451','IOcy':'\u0401','iogon':'\u012F','Iogon':'\u012E','iopf':'\uD835\uDD5A','Iopf':'\uD835\uDD40','iota':'\u03B9','Iota':'\u0399','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','itilde':'\u0129','Itilde':'\u0128','iukcy':'\u0456','Iukcy':'\u0406','iuml':'\xEF','Iuml':'\xCF','jcirc':'\u0135','Jcirc':'\u0134','jcy':'\u0439','Jcy':'\u0419','jfr':'\uD835\uDD27','Jfr':'\uD835\uDD0D','jmath':'\u0237','jopf':'\uD835\uDD5B','Jopf':'\uD835\uDD41','jscr':'\uD835\uDCBF','Jscr':'\uD835\uDCA5','jsercy':'\u0458','Jsercy':'\u0408','jukcy':'\u0454','Jukcy':'\u0404','kappa':'\u03BA','Kappa':'\u039A','kappav':'\u03F0','kcedil':'\u0137','Kcedil':'\u0136','kcy':'\u043A','Kcy':'\u041A','kfr':'\uD835\uDD28','Kfr':'\uD835\uDD0E','kgreen':'\u0138','khcy':'\u0445','KHcy':'\u0425','kjcy':'\u045C','KJcy':'\u040C','kopf':'\uD835\uDD5C','Kopf':'\uD835\uDD42','kscr':'\uD835\uDCC0','Kscr':'\uD835\uDCA6','lAarr':'\u21DA','lacute':'\u013A','Lacute':'\u0139','laemptyv':'\u29B4','lagran':'\u2112','lambda':'\u03BB','Lambda':'\u039B','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','Larr':'\u219E','larrb':'\u21E4','larrbfs':'\u291F','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','lat':'\u2AAB','latail':'\u2919','lAtail':'\u291B','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','lcaron':'\u013E','Lcaron':'\u013D','lcedil':'\u013C','Lcedil':'\u013B','lceil':'\u2308','lcub':'{','lcy':'\u043B','Lcy':'\u041B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','leftarrow':'\u2190','Leftarrow':'\u21D0','LeftArrow':'\u2190','LeftArrowBar':'\u21E4','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVector':'\u21C3','LeftDownVectorBar':'\u2959','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','Leftrightarrow':'\u21D4','LeftRightArrow':'\u2194','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTee':'\u22A3','LeftTeeArrow':'\u21A4','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangle':'\u22B2','LeftTriangleBar':'\u29CF','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVector':'\u21BF','LeftUpVectorBar':'\u2958','LeftVector':'\u21BC','LeftVectorBar':'\u2952','leg':'\u22DA','lEg':'\u2A8B','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','les':'\u2A7D','lescc':'\u2AA8','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','lfr':'\uD835\uDD29','Lfr':'\uD835\uDD0F','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','ljcy':'\u0459','LJcy':'\u0409','ll':'\u226A','Ll':'\u22D8','llarr':'\u21C7','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','lmidot':'\u0140','Lmidot':'\u013F','lmoust':'\u23B0','lmoustache':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','Longleftarrow':'\u27F8','LongLeftArrow':'\u27F5','longleftrightarrow':'\u27F7','Longleftrightarrow':'\u27FA','LongLeftRightArrow':'\u27F7','longmapsto':'\u27FC','longrightarrow':'\u27F6','Longrightarrow':'\u27F9','LongRightArrow':'\u27F6','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','lopf':'\uD835\uDD5D','Lopf':'\uD835\uDD43','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','lstrok':'\u0142','Lstrok':'\u0141','lt':'<','Lt':'\u226A','LT':'<','ltcc':'\u2AA6','ltcir':'\u2A79','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','map':'\u21A6','Map':'\u2905','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','mcy':'\u043C','Mcy':'\u041C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','mfr':'\uD835\uDD2A','Mfr':'\uD835\uDD10','mho':'\u2127','micro':'\xB5','mid':'\u2223','midast':'*','midcir':'\u2AF0','middot':'\xB7','minus':'\u2212','minusb':'\u229F','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','mopf':'\uD835\uDD5E','Mopf':'\uD835\uDD44','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','mu':'\u03BC','Mu':'\u039C','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','nacute':'\u0144','Nacute':'\u0143','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natur':'\u266E','natural':'\u266E','naturals':'\u2115','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','ncaron':'\u0148','Ncaron':'\u0147','ncedil':'\u0146','Ncedil':'\u0145','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','ncy':'\u043D','Ncy':'\u041D','ndash':'\u2013','ne':'\u2260','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','nfr':'\uD835\uDD2B','Nfr':'\uD835\uDD11','nge':'\u2271','ngE':'\u2267\u0338','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','ngt':'\u226F','nGt':'\u226B\u20D2','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','njcy':'\u045A','NJcy':'\u040A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nle':'\u2270','nlE':'\u2266\u0338','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nlt':'\u226E','nLt':'\u226A\u20D2','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','not':'\xAC','Not':'\u2AEC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangle':'\u22EA','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangle':'\u22EB','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','npar':'\u2226','nparallel':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','npre':'\u2AAF\u0338','nprec':'\u2280','npreceq':'\u2AAF\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrc':'\u2933\u0338','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','nscr':'\uD835\uDCC3','Nscr':'\uD835\uDCA9','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsube':'\u2288','nsubE':'\u2AC5\u0338','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupe':'\u2289','nsupE':'\u2AC6\u0338','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','ntilde':'\xF1','Ntilde':'\xD1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','nu':'\u03BD','Nu':'\u039D','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','oacute':'\xF3','Oacute':'\xD3','oast':'\u229B','ocir':'\u229A','ocirc':'\xF4','Ocirc':'\xD4','ocy':'\u043E','Ocy':'\u041E','odash':'\u229D','odblac':'\u0151','Odblac':'\u0150','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','oelig':'\u0153','OElig':'\u0152','ofcir':'\u29BF','ofr':'\uD835\uDD2C','Ofr':'\uD835\uDD12','ogon':'\u02DB','ograve':'\xF2','Ograve':'\xD2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','omacr':'\u014D','Omacr':'\u014C','omega':'\u03C9','Omega':'\u03A9','omicron':'\u03BF','Omicron':'\u039F','omid':'\u29B6','ominus':'\u2296','oopf':'\uD835\uDD60','Oopf':'\uD835\uDD46','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','or':'\u2228','Or':'\u2A54','orarr':'\u21BB','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','oscr':'\u2134','Oscr':'\uD835\uDCAA','oslash':'\xF8','Oslash':'\xD8','osol':'\u2298','otilde':'\xF5','Otilde':'\xD5','otimes':'\u2297','Otimes':'\u2A37','otimesas':'\u2A36','ouml':'\xF6','Ouml':'\xD6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','par':'\u2225','para':'\xB6','parallel':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','pcy':'\u043F','Pcy':'\u041F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','pfr':'\uD835\uDD2D','Pfr':'\uD835\uDD13','phi':'\u03C6','Phi':'\u03A6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','pi':'\u03C0','Pi':'\u03A0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plus':'+','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','pr':'\u227A','Pr':'\u2ABB','prap':'\u2AB7','prcue':'\u227C','pre':'\u2AAF','prE':'\u2AB3','prec':'\u227A','precapprox':'\u2AB7','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportion':'\u2237','Proportional':'\u221D','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','pscr':'\uD835\uDCC5','Pscr':'\uD835\uDCAB','psi':'\u03C8','Psi':'\u03A8','puncsp':'\u2008','qfr':'\uD835\uDD2E','Qfr':'\uD835\uDD14','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','qscr':'\uD835\uDCC6','Qscr':'\uD835\uDCAC','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','racute':'\u0155','Racute':'\u0154','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','Rarr':'\u21A0','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','rarrtl':'\u21A3','Rarrtl':'\u2916','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','rcaron':'\u0159','Rcaron':'\u0158','rcedil':'\u0157','Rcedil':'\u0156','rceil':'\u2309','rcub':'}','rcy':'\u0440','Rcy':'\u0420','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','Re':'\u211C','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','rho':'\u03C1','Rho':'\u03A1','rhov':'\u03F1','RightAngleBracket':'\u27E9','rightarrow':'\u2192','Rightarrow':'\u21D2','RightArrow':'\u2192','RightArrowBar':'\u21E5','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVector':'\u21C2','RightDownVectorBar':'\u2955','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTee':'\u22A2','RightTeeArrow':'\u21A6','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangle':'\u22B3','RightTriangleBar':'\u29D0','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVector':'\u21BE','RightUpVectorBar':'\u2954','RightVector':'\u21C0','RightVectorBar':'\u2953','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoust':'\u23B1','rmoustache':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','sacute':'\u015B','Sacute':'\u015A','sbquo':'\u201A','sc':'\u227B','Sc':'\u2ABC','scap':'\u2AB8','scaron':'\u0161','Scaron':'\u0160','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','scedil':'\u015F','Scedil':'\u015E','scirc':'\u015D','Scirc':'\u015C','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','scy':'\u0441','Scy':'\u0421','sdot':'\u22C5','sdotb':'\u22A1','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','sfr':'\uD835\uDD30','Sfr':'\uD835\uDD16','sfrown':'\u2322','sharp':'\u266F','shchcy':'\u0449','SHCHcy':'\u0429','shcy':'\u0448','SHcy':'\u0428','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','sigma':'\u03C3','Sigma':'\u03A3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','softcy':'\u044C','SOFTcy':'\u042C','sol':'/','solb':'\u29C4','solbar':'\u233F','sopf':'\uD835\uDD64','Sopf':'\uD835\uDD4A','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','squ':'\u25A1','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squf':'\u25AA','srarr':'\u2192','sscr':'\uD835\uDCC8','Sscr':'\uD835\uDCAE','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','star':'\u2606','Star':'\u22C6','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','sube':'\u2286','subE':'\u2AC5','subedot':'\u2AC3','submult':'\u2AC1','subne':'\u228A','subnE':'\u2ACB','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succ':'\u227B','succapprox':'\u2AB8','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup':'\u2283','Sup':'\u22D1','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':'\u2ABE','supdsub':'\u2AD8','supe':'\u2287','supE':'\u2AC6','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supne':'\u228B','supnE':'\u2ACC','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','tau':'\u03C4','Tau':'\u03A4','tbrk':'\u23B4','tcaron':'\u0165','Tcaron':'\u0164','tcedil':'\u0163','Tcedil':'\u0162','tcy':'\u0442','Tcy':'\u0422','tdot':'\u20DB','telrec':'\u2315','tfr':'\uD835\uDD31','Tfr':'\uD835\uDD17','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','theta':'\u03B8','Theta':'\u0398','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','thinsp':'\u2009','ThinSpace':'\u2009','thkap':'\u2248','thksim':'\u223C','thorn':'\xFE','THORN':'\xDE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','times':'\xD7','timesb':'\u22A0','timesbar':'\u2A31','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','top':'\u22A4','topbot':'\u2336','topcir':'\u2AF1','topf':'\uD835\uDD65','Topf':'\uD835\uDD4B','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','tscr':'\uD835\uDCC9','Tscr':'\uD835\uDCAF','tscy':'\u0446','TScy':'\u0426','tshcy':'\u045B','TSHcy':'\u040B','tstrok':'\u0167','Tstrok':'\u0166','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','uacute':'\xFA','Uacute':'\xDA','uarr':'\u2191','uArr':'\u21D1','Uarr':'\u219F','Uarrocir':'\u2949','ubrcy':'\u045E','Ubrcy':'\u040E','ubreve':'\u016D','Ubreve':'\u016C','ucirc':'\xFB','Ucirc':'\xDB','ucy':'\u0443','Ucy':'\u0423','udarr':'\u21C5','udblac':'\u0171','Udblac':'\u0170','udhar':'\u296E','ufisht':'\u297E','ufr':'\uD835\uDD32','Ufr':'\uD835\uDD18','ugrave':'\xF9','Ugrave':'\xD9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','umacr':'\u016B','Umacr':'\u016A','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','uogon':'\u0173','Uogon':'\u0172','uopf':'\uD835\uDD66','Uopf':'\uD835\uDD4C','uparrow':'\u2191','Uparrow':'\u21D1','UpArrow':'\u2191','UpArrowBar':'\u2912','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','Updownarrow':'\u21D5','UpDownArrow':'\u2195','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','upsilon':'\u03C5','Upsilon':'\u03A5','UpTee':'\u22A5','UpTeeArrow':'\u21A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','uring':'\u016F','Uring':'\u016E','urtri':'\u25F9','uscr':'\uD835\uDCCA','Uscr':'\uD835\uDCB0','utdot':'\u22F0','utilde':'\u0169','Utilde':'\u0168','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','uuml':'\xFC','Uuml':'\xDC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','vcy':'\u0432','Vcy':'\u0412','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','vee':'\u2228','Vee':'\u22C1','veebar':'\u22BB','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','vfr':'\uD835\uDD33','Vfr':'\uD835\uDD19','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','vopf':'\uD835\uDD67','Vopf':'\uD835\uDD4D','vprop':'\u221D','vrtri':'\u22B3','vscr':'\uD835\uDCCB','Vscr':'\uD835\uDCB1','vsubne':'\u228A\uFE00','vsubnE':'\u2ACB\uFE00','vsupne':'\u228B\uFE00','vsupnE':'\u2ACC\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','wcirc':'\u0175','Wcirc':'\u0174','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','wfr':'\uD835\uDD34','Wfr':'\uD835\uDD1A','wopf':'\uD835\uDD68','Wopf':'\uD835\uDD4E','wp':'\u2118','wr':'\u2240','wreath':'\u2240','wscr':'\uD835\uDCCC','Wscr':'\uD835\uDCB2','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','xfr':'\uD835\uDD35','Xfr':'\uD835\uDD1B','xharr':'\u27F7','xhArr':'\u27FA','xi':'\u03BE','Xi':'\u039E','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','xopf':'\uD835\uDD69','Xopf':'\uD835\uDD4F','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','xscr':'\uD835\uDCCD','Xscr':'\uD835\uDCB3','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','yacute':'\xFD','Yacute':'\xDD','yacy':'\u044F','YAcy':'\u042F','ycirc':'\u0177','Ycirc':'\u0176','ycy':'\u044B','Ycy':'\u042B','yen':'\xA5','yfr':'\uD835\uDD36','Yfr':'\uD835\uDD1C','yicy':'\u0457','YIcy':'\u0407','yopf':'\uD835\uDD6A','Yopf':'\uD835\uDD50','yscr':'\uD835\uDCCE','Yscr':'\uD835\uDCB4','yucy':'\u044E','YUcy':'\u042E','yuml':'\xFF','Yuml':'\u0178','zacute':'\u017A','Zacute':'\u0179','zcaron':'\u017E','Zcaron':'\u017D','zcy':'\u0437','Zcy':'\u0417','zdot':'\u017C','Zdot':'\u017B','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','zeta':'\u03B6','Zeta':'\u0396','zfr':'\uD835\uDD37','Zfr':'\u2128','zhcy':'\u0436','ZHcy':'\u0416','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','zscr':'\uD835\uDCCF','Zscr':'\uD835\uDCB5','zwj':'\u200D','zwnj':'\u200C'};
	var decodeMapLegacy = {'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};
	var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
	var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var has = function(object, propertyName) {
		return hasOwnProperty.call(object, propertyName);
	};

	var contains = function(array, value) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (array[index] == value) {
				return true;
			}
		}
		return false;
	};

	var merge = function(options, defaults) {
		if (!options) {
			return defaults;
		}
		var result = {};
		var key;
		for (key in defaults) {
			// A `hasOwnProperty` check is not needed here, since only recognized
			// option names are used anyway. Any others are ignored.
			result[key] = has(options, key) ? options[key] : defaults[key];
		}
		return result;
	};

	// Modified version of `ucs2encode`; see https://mths.be/punycode.
	var codePointToSymbol = function(codePoint, strict) {
		var output = '';
		if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
			// See issue #4:
			// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
			// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
			// REPLACEMENT CHARACTER.”
			if (strict) {
				parseError('character reference outside the permissible Unicode range');
			}
			return '\uFFFD';
		}
		if (has(decodeMapNumeric, codePoint)) {
			if (strict) {
				parseError('disallowed character reference');
			}
			return decodeMapNumeric[codePoint];
		}
		if (strict && contains(invalidReferenceCodePoints, codePoint)) {
			parseError('disallowed character reference');
		}
		if (codePoint > 0xFFFF) {
			codePoint -= 0x10000;
			output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
		output += stringFromCharCode(codePoint);
		return output;
	};

	var hexEscape = function(codePoint) {
		return '&#x' + codePoint.toString(16).toUpperCase() + ';';
	};

	var decEscape = function(codePoint) {
		return '&#' + codePoint + ';';
	};

	var parseError = function(message) {
		throw Error('Parse error: ' + message);
	};

	/*--------------------------------------------------------------------------*/

	var encode = function(string, options) {
		options = merge(options, encode.options);
		var strict = options.strict;
		if (strict && regexInvalidRawCodePoint.test(string)) {
			parseError('forbidden code point');
		}
		var encodeEverything = options.encodeEverything;
		var useNamedReferences = options.useNamedReferences;
		var allowUnsafeSymbols = options.allowUnsafeSymbols;
		var escapeCodePoint = options.decimal ? decEscape : hexEscape;

		var escapeBmpSymbol = function(symbol) {
			return escapeCodePoint(symbol.charCodeAt(0));
		};

		if (encodeEverything) {
			// Encode ASCII symbols.
			string = string.replace(regexAsciiWhitelist, function(symbol) {
				// Use named references if requested & possible.
				if (useNamedReferences && has(encodeMap, symbol)) {
					return '&' + encodeMap[symbol] + ';';
				}
				return escapeBmpSymbol(symbol);
			});
			// Shorten a few escapes that represent two symbols, of which at least one
			// is within the ASCII range.
			if (useNamedReferences) {
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;')
					.replace(/&#x66;&#x6A;/g, '&fjlig;');
			}
			// Encode non-ASCII symbols.
			if (useNamedReferences) {
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			}
			// Note: any remaining non-ASCII symbols are handled outside of the `if`.
		} else if (useNamedReferences) {
			// Apply named character references.
			// Encode `<>"'&` using named character references.
			if (!allowUnsafeSymbols) {
				string = string.replace(regexEscape, function(string) {
					return '&' + encodeMap[string] + ';'; // no need to check `has()` here
				});
			}
			// Shorten escapes that represent two symbols, of which at least one is
			// `<>"'&`.
			string = string
				.replace(/&gt;\u20D2/g, '&nvgt;')
				.replace(/&lt;\u20D2/g, '&nvlt;');
			// Encode non-ASCII symbols that can be replaced with a named reference.
			string = string.replace(regexEncodeNonAscii, function(string) {
				// Note: there is no need to check `has(encodeMap, string)` here.
				return '&' + encodeMap[string] + ';';
			});
		} else if (!allowUnsafeSymbols) {
			// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
			// using named character references.
			string = string.replace(regexEscape, escapeBmpSymbol);
		}
		return string
			// Encode astral symbols.
			.replace(regexAstralSymbols, function($0) {
				// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
				var high = $0.charCodeAt(0);
				var low = $0.charCodeAt(1);
				var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
				return escapeCodePoint(codePoint);
			})
			// Encode any remaining BMP symbols that are not printable ASCII symbols
			// using a hexadecimal escape.
			.replace(regexBmpWhitelist, escapeBmpSymbol);
	};
	// Expose default options (so they can be overridden globally).
	encode.options = {
		'allowUnsafeSymbols': false,
		'encodeEverything': false,
		'strict': false,
		'useNamedReferences': false,
		'decimal' : false
	};

	var decode = function(html, options) {
		options = merge(options, decode.options);
		var strict = options.strict;
		if (strict && regexInvalidEntity.test(html)) {
			parseError('malformed character reference');
		}
		return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
			var codePoint;
			var semicolon;
			var decDigits;
			var hexDigits;
			var reference;
			var next;

			if ($1) {
				reference = $1;
				// Note: there is no need to check `has(decodeMap, reference)`.
				return decodeMap[reference];
			}

			if ($2) {
				// Decode named character references without trailing `;`, e.g. `&amp`.
				// This is only a parse error if it gets converted to `&`, or if it is
				// followed by `=` in an attribute context.
				reference = $2;
				next = $3;
				if (next && options.isAttributeValue) {
					if (strict && next == '=') {
						parseError('`&` did not start a character reference');
					}
					return $0;
				} else {
					if (strict) {
						parseError(
							'named character reference was not terminated by a semicolon'
						);
					}
					// Note: there is no need to check `has(decodeMapLegacy, reference)`.
					return decodeMapLegacy[reference] + (next || '');
				}
			}

			if ($4) {
				// Decode decimal escapes, e.g. `&#119558;`.
				decDigits = $4;
				semicolon = $5;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(decDigits, 10);
				return codePointToSymbol(codePoint, strict);
			}

			if ($6) {
				// Decode hexadecimal escapes, e.g. `&#x1D306;`.
				hexDigits = $6;
				semicolon = $7;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(hexDigits, 16);
				return codePointToSymbol(codePoint, strict);
			}

			// If we’re still here, `if ($7)` is implied; it’s an ambiguous
			// ampersand for sure. https://mths.be/notes/ambiguous-ampersands
			if (strict) {
				parseError(
					'named character reference was not terminated by a semicolon'
				);
			}
			return $0;
		});
	};
	// Expose default options (so they can be overridden globally).
	decode.options = {
		'isAttributeValue': false,
		'strict': false
	};

	var escape = function(string) {
		return string.replace(regexEscape, function($0) {
			// Note: there is no need to check `has(escapeMap, $0)` here.
			return escapeMap[$0];
		});
	};

	/*--------------------------------------------------------------------------*/

	var he = {
		'version': '1.2.0',
		'encode': encode,
		'decode': decode,
		'escape': escape,
		'unescape': decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return he;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));


/***/ }),

/***/ 6128:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 8701:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function arr_back(arr) {
    return arr[arr.length - 1];
}
exports["default"] = arr_back;


/***/ }),

/***/ 698:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeType = exports.TextNode = exports.Node = exports.valid = exports.CommentNode = exports.HTMLElement = exports.parse = void 0;
var comment_1 = __importDefault(__webpack_require__(1271));
exports.CommentNode = comment_1.default;
var html_1 = __importDefault(__webpack_require__(4382));
exports.HTMLElement = html_1.default;
var node_1 = __importDefault(__webpack_require__(4936));
exports.Node = node_1.default;
var text_1 = __importDefault(__webpack_require__(7923));
exports.TextNode = text_1.default;
var type_1 = __importDefault(__webpack_require__(9979));
exports.NodeType = type_1.default;
var parse_1 = __importDefault(__webpack_require__(8821));
var valid_1 = __importDefault(__webpack_require__(6389));
exports.valid = valid_1.default;
function parse(data, options) {
    if (options === void 0) { options = {
        lowerCaseTagName: false,
        comment: false
    }; }
    return (0, parse_1.default)(data, options);
}
exports["default"] = parse;
exports.parse = parse;
parse.parse = parse_1.default;
parse.HTMLElement = html_1.default;
parse.CommentNode = comment_1.default;
parse.valid = valid_1.default;
parse.Node = node_1.default;
parse.TextNode = text_1.default;
parse.NodeType = type_1.default;


/***/ }),

/***/ 80:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_1 = __importDefault(__webpack_require__(9979));
function isTag(node) {
    return node && node.nodeType === type_1.default.ELEMENT_NODE;
}
function getAttributeValue(elem, name) {
    return isTag(elem) ? elem.getAttribute(name) : undefined;
}
function getName(elem) {
    return ((elem && elem.rawTagName) || '').toLowerCase();
}
function getChildren(node) {
    return node && node.childNodes;
}
function getParent(node) {
    return node ? node.parentNode : null;
}
function getText(node) {
    return node.text;
}
function removeSubsets(nodes) {
    var idx = nodes.length;
    var node;
    var ancestor;
    var replace;
    // Check if each node (or one of its ancestors) is already contained in the
    // array.
    while (--idx > -1) {
        node = ancestor = nodes[idx];
        // Temporarily remove the node under consideration
        nodes[idx] = null;
        replace = true;
        while (ancestor) {
            if (nodes.indexOf(ancestor) > -1) {
                replace = false;
                nodes.splice(idx, 1);
                break;
            }
            ancestor = getParent(ancestor);
        }
        // If the node has been found to be unique, re-insert it.
        if (replace) {
            nodes[idx] = node;
        }
    }
    return nodes;
}
function existsOne(test, elems) {
    return elems.some(function (elem) {
        return isTag(elem) ? test(elem) || existsOne(test, getChildren(elem)) : false;
    });
}
function getSiblings(node) {
    var parent = getParent(node);
    return parent && getChildren(parent);
}
function hasAttrib(elem, name) {
    return getAttributeValue(elem, name) !== undefined;
}
function findOne(test, elems) {
    var elem = null;
    for (var i = 0, l = elems.length; i < l && !elem; i++) {
        var el = elems[i];
        if (test(el)) {
            elem = el;
        }
        else {
            var childs = getChildren(el);
            if (childs && childs.length > 0) {
                elem = findOne(test, childs);
            }
        }
    }
    return elem;
}
function findAll(test, nodes) {
    var result = [];
    for (var i = 0, j = nodes.length; i < j; i++) {
        if (!isTag(nodes[i]))
            continue;
        if (test(nodes[i]))
            result.push(nodes[i]);
        var childs = getChildren(nodes[i]);
        if (childs)
            result = result.concat(findAll(test, childs));
    }
    return result;
}
exports["default"] = {
    isTag: isTag,
    getAttributeValue: getAttributeValue,
    getName: getName,
    getChildren: getChildren,
    getParent: getParent,
    getText: getText,
    removeSubsets: removeSubsets,
    existsOne: existsOne,
    getSiblings: getSiblings,
    hasAttrib: hasAttrib,
    findOne: findOne,
    findAll: findAll
};


/***/ }),

/***/ 1271:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_1 = __importDefault(__webpack_require__(4936));
var type_1 = __importDefault(__webpack_require__(9979));
var CommentNode = /** @class */ (function (_super) {
    __extends(CommentNode, _super);
    function CommentNode(rawText, parentNode, range) {
        var _this = _super.call(this, parentNode, range) || this;
        _this.rawText = rawText;
        /**
         * Node Type declaration.
         * @type {Number}
         */
        _this.nodeType = type_1.default.COMMENT_NODE;
        return _this;
    }
    CommentNode.prototype.clone = function () {
        return new CommentNode(this.rawText, null);
    };
    Object.defineProperty(CommentNode.prototype, "text", {
        /**
         * Get unescaped text value of current node and its children.
         * @return {string} text content
         */
        get: function () {
            return this.rawText;
        },
        enumerable: false,
        configurable: true
    });
    CommentNode.prototype.toString = function () {
        return "<!--".concat(this.rawText, "-->");
    };
    return CommentNode;
}(node_1.default));
exports["default"] = CommentNode;


/***/ }),

/***/ 4382:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = exports.base_parse = void 0;
var css_select_1 = __webpack_require__(5366);
var he_1 = __importDefault(__webpack_require__(6492));
var back_1 = __importDefault(__webpack_require__(8701));
var matcher_1 = __importDefault(__webpack_require__(80));
var void_tag_1 = __importDefault(__webpack_require__(4659));
var comment_1 = __importDefault(__webpack_require__(1271));
var node_1 = __importDefault(__webpack_require__(4936));
var text_1 = __importDefault(__webpack_require__(7923));
var type_1 = __importDefault(__webpack_require__(9979));
function decode(val) {
    // clone string
    return JSON.parse(JSON.stringify(he_1.default.decode(val)));
}
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
var Htags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup'];
var Dtags = ['details', 'dialog', 'dd', 'div', 'dt'];
var Ftags = ['fieldset', 'figcaption', 'figure', 'footer', 'form'];
var tableTags = ['table', 'td', 'tr'];
var htmlTags = ['address', 'article', 'aside', 'blockquote', 'br', 'hr', 'li', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'ul'];
var kBlockElements = new Set();
function addToKBlockElement() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var addToSet = function (array) {
        for (var index = 0; index < array.length; index++) {
            var element = array[index];
            kBlockElements.add(element);
            kBlockElements.add(element.toUpperCase());
        }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        addToSet(arg);
    }
}
addToKBlockElement(Htags, Dtags, Ftags, tableTags, htmlTags);
var DOMTokenList = /** @class */ (function () {
    function DOMTokenList(valuesInit, afterUpdate) {
        if (valuesInit === void 0) { valuesInit = []; }
        if (afterUpdate === void 0) { afterUpdate = function () { return null; }; }
        this._set = new Set(valuesInit);
        this._afterUpdate = afterUpdate;
    }
    DOMTokenList.prototype._validate = function (c) {
        if (/\s/.test(c)) {
            throw new Error("DOMException in DOMTokenList.add: The token '".concat(c, "' contains HTML space characters, which are not valid in tokens."));
        }
    };
    DOMTokenList.prototype.add = function (c) {
        this._validate(c);
        this._set.add(c);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.replace = function (c1, c2) {
        this._validate(c2);
        this._set.delete(c1);
        this._set.add(c2);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.remove = function (c) {
        this._set.delete(c) && this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.toggle = function (c) {
        this._validate(c);
        if (this._set.has(c))
            this._set.delete(c);
        else
            this._set.add(c);
        this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
    };
    DOMTokenList.prototype.contains = function (c) {
        return this._set.has(c);
    };
    Object.defineProperty(DOMTokenList.prototype, "length", {
        get: function () {
            return this._set.size;
        },
        enumerable: false,
        configurable: true
    });
    DOMTokenList.prototype.values = function () {
        return this._set.values();
    };
    Object.defineProperty(DOMTokenList.prototype, "value", {
        get: function () {
            return Array.from(this._set.values());
        },
        enumerable: false,
        configurable: true
    });
    DOMTokenList.prototype.toString = function () {
        return Array.from(this._set.values()).join(' ');
    };
    return DOMTokenList;
}());
/**
 * HTMLElement, which contains a set of children.
 *
 * Note: this is a minimalist implementation, no complete tree
 *   structure provided (no parentNode, nextSibling,
 *   previousSibling etc).
 * @class HTMLElement
 * @extends {Node}
 */
var HTMLElement = /** @class */ (function (_super) {
    __extends(HTMLElement, _super);
    /**
     * Creates an instance of HTMLElement.
     * @param keyAttrs	id and class attribute
     * @param [rawAttrs]	attributes in string
     *
     * @memberof HTMLElement
     */
    function HTMLElement(tagName, keyAttrs, rawAttrs, parentNode, range, voidTag) {
        if (rawAttrs === void 0) { rawAttrs = ''; }
        if (voidTag === void 0) { voidTag = new void_tag_1.default(); }
        var _this = _super.call(this, parentNode, range) || this;
        _this.rawAttrs = rawAttrs;
        _this.voidTag = voidTag;
        /**
         * Node Type declaration.
         */
        _this.nodeType = type_1.default.ELEMENT_NODE;
        _this.rawTagName = tagName;
        _this.rawAttrs = rawAttrs || '';
        _this.id = keyAttrs.id || '';
        _this.childNodes = [];
        _this.classList = new DOMTokenList(keyAttrs.class ? keyAttrs.class.split(/\s+/) : [], function (classList) { return _this.setAttribute('class', classList.toString()); } // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        );
        if (keyAttrs.id) {
            if (!rawAttrs) {
                _this.rawAttrs = "id=\"".concat(keyAttrs.id, "\"");
            }
        }
        if (keyAttrs.class) {
            if (!rawAttrs) {
                var cls = "class=\"".concat(_this.classList.toString(), "\"");
                if (_this.rawAttrs) {
                    _this.rawAttrs += " ".concat(cls);
                }
                else {
                    _this.rawAttrs = cls;
                }
            }
        }
        return _this;
    }
    /**
     * Quote attribute values
     * @param attr attribute value
     * @returns {string} quoted value
     */
    HTMLElement.prototype.quoteAttribute = function (attr) {
        if (attr == null) {
            return 'null';
        }
        return JSON.stringify(attr.replace(/"/g, '&quot;'));
    };
    /**
     * Remove Child element from childNodes array
     * @param {HTMLElement} node     node to remove
     */
    HTMLElement.prototype.removeChild = function (node) {
        this.childNodes = this.childNodes.filter(function (child) {
            return child !== node;
        });
        return this;
    };
    /**
     * Exchanges given child with new child
     * @param {HTMLElement} oldNode     node to exchange
     * @param {HTMLElement} newNode     new node
     */
    HTMLElement.prototype.exchangeChild = function (oldNode, newNode) {
        var children = this.childNodes;
        this.childNodes = children.map(function (child) {
            if (child === oldNode) {
                return newNode;
            }
            return child;
        });
        return this;
    };
    Object.defineProperty(HTMLElement.prototype, "tagName", {
        get: function () {
            return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
        },
        set: function (newname) {
            this.rawTagName = newname.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "localName", {
        get: function () {
            return this.rawTagName.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "isVoidElement", {
        get: function () {
            return this.voidTag.isVoidElement(this.localName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "rawText", {
        /**
         * Get escpaed (as-it) text value of current node and its children.
         * @return {string} text content
         */
        get: function () {
            return this.childNodes.reduce(function (pre, cur) {
                return (pre += cur.rawText);
            }, '');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "textContent", {
        get: function () {
            return decode(this.rawText);
        },
        set: function (val) {
            var content = [new text_1.default(val, this)];
            this.childNodes = content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "text", {
        /**
         * Get unescaped text value of current node and its children.
         * @return {string} text content
         */
        get: function () {
            return decode(this.rawText);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "structuredText", {
        /**
         * Get structured Text (with '\n' etc.)
         * @return {string} structured text
         */
        get: function () {
            var currentBlock = [];
            var blocks = [currentBlock];
            function dfs(node) {
                if (node.nodeType === type_1.default.ELEMENT_NODE) {
                    if (kBlockElements.has(node.rawTagName)) {
                        if (currentBlock.length > 0) {
                            blocks.push((currentBlock = []));
                        }
                        node.childNodes.forEach(dfs);
                        if (currentBlock.length > 0) {
                            blocks.push((currentBlock = []));
                        }
                    }
                    else {
                        node.childNodes.forEach(dfs);
                    }
                }
                else if (node.nodeType === type_1.default.TEXT_NODE) {
                    if (node.isWhitespace) {
                        // Whitespace node, postponed output
                        currentBlock.prependWhitespace = true;
                    }
                    else {
                        var text = node.trimmedText;
                        if (currentBlock.prependWhitespace) {
                            text = " ".concat(text);
                            currentBlock.prependWhitespace = false;
                        }
                        currentBlock.push(text);
                    }
                }
            }
            dfs(this);
            return blocks
                .map(function (block) {
                return block.join('').replace(/\s{2,}/g, ' '); // Normalize each line's whitespace
            })
                .join('\n')
                .replace(/\s+$/, ''); // trimRight;
        },
        enumerable: false,
        configurable: true
    });
    HTMLElement.prototype.toString = function () {
        var tag = this.rawTagName;
        if (tag) {
            var attrs = this.rawAttrs ? " ".concat(this.rawAttrs) : '';
            return this.voidTag.formatNode(tag, attrs, this.innerHTML);
        }
        return this.innerHTML;
    };
    Object.defineProperty(HTMLElement.prototype, "innerHTML", {
        get: function () {
            return this.childNodes
                .map(function (child) {
                return child.toString();
            })
                .join('');
        },
        set: function (content) {
            //const r = parse(content, global.options); // TODO global.options ?
            var r = parse(content);
            var nodes = r.childNodes.length ? r.childNodes : [new text_1.default(content, this)];
            resetParent(nodes, this);
            resetParent(this.childNodes, null);
            this.childNodes = nodes;
        },
        enumerable: false,
        configurable: true
    });
    HTMLElement.prototype.set_content = function (content, options) {
        if (options === void 0) { options = {}; }
        if (content instanceof node_1.default) {
            content = [content];
        }
        else if (typeof content == 'string') {
            var r = parse(content, options);
            content = r.childNodes.length ? r.childNodes : [new text_1.default(content, this)];
        }
        resetParent(this.childNodes, null);
        resetParent(content, this);
        this.childNodes = content;
        return this;
    };
    HTMLElement.prototype.replaceWith = function () {
        var _this = this;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var parent = this.parentNode;
        var content = nodes
            .map(function (node) {
            if (node instanceof node_1.default) {
                return [node];
            }
            else if (typeof node == 'string') {
                // const r = parse(content, global.options); // TODO global.options ?
                var r = parse(node);
                return r.childNodes.length ? r.childNodes : [new text_1.default(node, _this)];
            }
            return [];
        })
            .flat();
        var idx = parent.childNodes.findIndex(function (child) {
            return child === _this;
        });
        resetParent([this], null);
        parent.childNodes = __spreadArray(__spreadArray(__spreadArray([], parent.childNodes.slice(0, idx), true), resetParent(content, parent), true), parent.childNodes.slice(idx + 1), true);
    };
    Object.defineProperty(HTMLElement.prototype, "outerHTML", {
        get: function () {
            return this.toString();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Trim element from right (in block) after seeing pattern in a TextNode.
     * @param  {RegExp} pattern pattern to find
     * @return {HTMLElement}    reference to current node
     */
    HTMLElement.prototype.trimRight = function (pattern) {
        for (var i = 0; i < this.childNodes.length; i++) {
            var childNode = this.childNodes[i];
            if (childNode.nodeType === type_1.default.ELEMENT_NODE) {
                childNode.trimRight(pattern);
            }
            else {
                var index = childNode.rawText.search(pattern);
                if (index > -1) {
                    childNode.rawText = childNode.rawText.substr(0, index);
                    // trim all following nodes.
                    this.childNodes.length = i + 1;
                }
            }
        }
        return this;
    };
    Object.defineProperty(HTMLElement.prototype, "structure", {
        /**
         * Get DOM structure
         * @return {string} strucutre
         */
        get: function () {
            var res = [];
            var indention = 0;
            function write(str) {
                res.push('  '.repeat(indention) + str);
            }
            function dfs(node) {
                var idStr = node.id ? "#".concat(node.id) : '';
                var classStr = node.classList.length ? ".".concat(node.classList.value.join('.')) : ''; // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
                write("".concat(node.rawTagName).concat(idStr).concat(classStr));
                indention++;
                node.childNodes.forEach(function (childNode) {
                    if (childNode.nodeType === type_1.default.ELEMENT_NODE) {
                        dfs(childNode);
                    }
                    else if (childNode.nodeType === type_1.default.TEXT_NODE) {
                        if (!childNode.isWhitespace) {
                            write('#text');
                        }
                    }
                });
                indention--;
            }
            dfs(this);
            return res.join('\n');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Remove whitespaces in this sub tree.
     * @return {HTMLElement} pointer to this
     */
    HTMLElement.prototype.removeWhitespace = function () {
        var _this = this;
        var o = 0;
        this.childNodes.forEach(function (node) {
            if (node.nodeType === type_1.default.TEXT_NODE) {
                if (node.isWhitespace) {
                    return;
                }
                node.rawText = node.trimmedRawText;
            }
            else if (node.nodeType === type_1.default.ELEMENT_NODE) {
                node.removeWhitespace();
            }
            _this.childNodes[o++] = node;
        });
        this.childNodes.length = o;
        return this;
    };
    /**
     * Query CSS selector to find matching nodes.
     * @param  {string}         selector Simplified CSS selector
     * @return {HTMLElement[]}  matching elements
     */
    HTMLElement.prototype.querySelectorAll = function (selector) {
        return (0, css_select_1.selectAll)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default,
        });
    };
    /**
     * Query CSS Selector to find matching node.
     * @param  {string}         selector Simplified CSS selector
     * @return {(HTMLElement|null)}    matching node
     */
    HTMLElement.prototype.querySelector = function (selector) {
        return (0, css_select_1.selectOne)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default,
        });
    };
    /**
     * find elements by their tagName
     * @param {string} tagName the tagName of the elements to select
     */
    HTMLElement.prototype.getElementsByTagName = function (tagName) {
        var upperCasedTagName = tagName.toUpperCase();
        var re = [];
        var stack = [];
        var currentNodeReference = this;
        var index = 0;
        // index turns to undefined once the stack is empty and the first condition occurs
        // which happens once all relevant children are searched through
        while (index !== undefined) {
            var child = void 0;
            // make it work with sparse arrays
            do {
                child = currentNodeReference.childNodes[index++];
            } while (index < currentNodeReference.childNodes.length && child === undefined);
            // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
            if (child === undefined) {
                currentNodeReference = currentNodeReference.parentNode;
                index = stack.pop();
                continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName#syntax
                if (tagName === '*' || child.tagName === upperCasedTagName)
                    re.push(child);
                // if children are existing push the current status to the stack and keep searching for elements in the level below
                if (child.childNodes.length > 0) {
                    stack.push(index);
                    currentNodeReference = child;
                    index = 0;
                }
            }
        }
        return re;
    };
    /**
     * find element by it's id
     * @param {string} id the id of the element to select
     */
    HTMLElement.prototype.getElementById = function (id) {
        var stack = [];
        var currentNodeReference = this;
        var index = 0;
        // index turns to undefined once the stack is empty and the first condition occurs
        // which happens once all relevant children are searched through
        while (index !== undefined) {
            var child = void 0;
            // make it work with sparse arrays
            do {
                child = currentNodeReference.childNodes[index++];
            } while (index < currentNodeReference.childNodes.length && child === undefined);
            // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
            if (child === undefined) {
                currentNodeReference = currentNodeReference.parentNode;
                index = stack.pop();
                continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
                if (child.id === id) {
                    return child;
                }
                ;
                // if children are existing push the current status to the stack and keep searching for elements in the level below
                if (child.childNodes.length > 0) {
                    stack.push(index);
                    currentNodeReference = child;
                    index = 0;
                }
            }
        }
        return null;
    };
    /**
     * traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.
     * @param selector a DOMString containing a selector list
     */
    HTMLElement.prototype.closest = function (selector) {
        var mapChild = new Map();
        var el = this;
        var old = null;
        function findOne(test, elems) {
            var elem = null;
            for (var i = 0, l = elems.length; i < l && !elem; i++) {
                var el_1 = elems[i];
                if (test(el_1)) {
                    elem = el_1;
                }
                else {
                    var child = mapChild.get(el_1);
                    if (child) {
                        elem = findOne(test, [child]);
                    }
                }
            }
            return elem;
        }
        while (el) {
            mapChild.set(el, old);
            old = el;
            el = el.parentNode;
        }
        el = this;
        while (el) {
            var e = (0, css_select_1.selectOne)(selector, el, {
                xmlMode: true,
                adapter: __assign(__assign({}, matcher_1.default), { getChildren: function (node) {
                        var child = mapChild.get(node);
                        return child && [child];
                    }, getSiblings: function (node) {
                        return [node];
                    }, findOne: findOne, findAll: function () {
                        return [];
                    } }),
            });
            if (e) {
                return e;
            }
            el = el.parentNode;
        }
        return null;
    };
    /**
     * Append a child node to childNodes
     * @param  {Node} node node to append
     * @return {Node}      node appended
     */
    HTMLElement.prototype.appendChild = function (node) {
        // remove the node from it's parent
        node.remove();
        this.childNodes.push(node);
        node.parentNode = this;
        return node;
    };
    Object.defineProperty(HTMLElement.prototype, "firstChild", {
        /**
         * Get first child node
         * @return {Node} first child node
         */
        get: function () {
            return this.childNodes[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "lastChild", {
        /**
         * Get last child node
         * @return {Node} last child node
         */
        get: function () {
            return (0, back_1.default)(this.childNodes);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "attrs", {
        /**
         * Get attributes
         * @access private
         * @return {Object} parsed and unescaped attributes
         */
        get: function () {
            if (this._attrs) {
                return this._attrs;
            }
            this._attrs = {};
            var attrs = this.rawAttributes;
            for (var key in attrs) {
                var val = attrs[key] || '';
                this._attrs[key.toLowerCase()] = decode(val);
            }
            return this._attrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "attributes", {
        get: function () {
            var ret_attrs = {};
            var attrs = this.rawAttributes;
            for (var key in attrs) {
                var val = attrs[key] || '';
                ret_attrs[key] = decode(val);
            }
            return ret_attrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "rawAttributes", {
        /**
         * Get escaped (as-is) attributes
         * @return {Object} parsed attributes
         */
        get: function () {
            if (this._rawAttrs) {
                return this._rawAttrs;
            }
            var attrs = {};
            if (this.rawAttrs) {
                var re = /([a-zA-Z()[\]#@][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g;
                var match = void 0;
                while ((match = re.exec(this.rawAttrs))) {
                    var key = match[1];
                    var val = match[2] || null;
                    if (val && (val[0] === "'" || val[0] === "\""))
                        val = val.slice(1, val.length - 1);
                    attrs[key] = val;
                }
            }
            this._rawAttrs = attrs;
            return attrs;
        },
        enumerable: false,
        configurable: true
    });
    HTMLElement.prototype.removeAttribute = function (key) {
        var attrs = this.rawAttributes;
        delete attrs[key];
        // Update this.attribute
        if (this._attrs) {
            delete this._attrs[key];
        }
        // Update rawString
        this.rawAttrs = Object.keys(attrs)
            .map(function (name) {
            var val = JSON.stringify(attrs[name]);
            if (val === undefined || val === 'null') {
                return name;
            }
            return "".concat(name, "=").concat(val);
        })
            .join(' ');
        // Update this.id
        if (key === 'id') {
            this.id = '';
        }
        return this;
    };
    HTMLElement.prototype.hasAttribute = function (key) {
        return key.toLowerCase() in this.attrs;
    };
    /**
     * Get an attribute
     * @return {string} value of the attribute
     */
    HTMLElement.prototype.getAttribute = function (key) {
        return this.attrs[key.toLowerCase()];
    };
    /**
     * Set an attribute value to the HTMLElement
     * @param {string} key The attribute name
     * @param {string} value The value to set, or null / undefined to remove an attribute
     */
    HTMLElement.prototype.setAttribute = function (key, value) {
        var _this = this;
        if (arguments.length < 2) {
            throw new Error("Failed to execute 'setAttribute' on 'Element'");
        }
        var k2 = key.toLowerCase();
        var attrs = this.rawAttributes;
        for (var k in attrs) {
            if (k.toLowerCase() === k2) {
                key = k;
                break;
            }
        }
        attrs[key] = String(value);
        // update this.attrs
        if (this._attrs) {
            this._attrs[k2] = decode(attrs[key]);
        }
        // Update rawString
        this.rawAttrs = Object.keys(attrs)
            .map(function (name) {
            var val = _this.quoteAttribute(attrs[name]);
            if (val === 'null' || val === '""')
                return name;
            return "".concat(name, "=").concat(val);
        })
            .join(' ');
        // Update this.id
        if (key === 'id') {
            this.id = value;
        }
    };
    /**
     * Replace all the attributes of the HTMLElement by the provided attributes
     * @param {Attributes} attributes the new attribute set
     */
    HTMLElement.prototype.setAttributes = function (attributes) {
        var _this = this;
        // Invalidate current this.attributes
        if (this._attrs) {
            delete this._attrs;
        }
        // Invalidate current this.rawAttributes
        if (this._rawAttrs) {
            delete this._rawAttrs;
        }
        // Update rawString
        this.rawAttrs = Object.keys(attributes)
            .map(function (name) {
            var val = attributes[name];
            if (val === 'null' || val === '""')
                return name;
            return "".concat(name, "=").concat(_this.quoteAttribute(String(val)));
        })
            .join(' ');
        return this;
    };
    HTMLElement.prototype.insertAdjacentHTML = function (where, html) {
        var _a, _b, _c;
        var _this = this;
        if (arguments.length < 2) {
            throw new Error('2 arguments required');
        }
        var p = parse(html);
        if (where === 'afterend') {
            var idx = this.parentNode.childNodes.findIndex(function (child) {
                return child === _this;
            });
            resetParent(p.childNodes, this.parentNode);
            (_a = this.parentNode.childNodes).splice.apply(_a, __spreadArray([idx + 1, 0], p.childNodes, false));
        }
        else if (where === 'afterbegin') {
            resetParent(p.childNodes, this);
            (_b = this.childNodes).unshift.apply(_b, p.childNodes);
        }
        else if (where === 'beforeend') {
            p.childNodes.forEach(function (n) {
                _this.appendChild(n);
            });
        }
        else if (where === 'beforebegin') {
            var idx = this.parentNode.childNodes.findIndex(function (child) {
                return child === _this;
            });
            resetParent(p.childNodes, this.parentNode);
            (_c = this.parentNode.childNodes).splice.apply(_c, __spreadArray([idx, 0], p.childNodes, false));
        }
        else {
            throw new Error("The value provided ('".concat(where, "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"));
        }
        return this;
        // if (!where || html === undefined || html === null) {
        // 	return;
        // }
    };
    Object.defineProperty(HTMLElement.prototype, "nextSibling", {
        get: function () {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = 0;
                while (i < children.length) {
                    var child = children[i++];
                    if (this === child)
                        return children[i] || null;
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "nextElementSibling", {
        get: function () {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = 0;
                var find = false;
                while (i < children.length) {
                    var child = children[i++];
                    if (find) {
                        if (child instanceof HTMLElement) {
                            return child || null;
                        }
                    }
                    else if (this === child) {
                        find = true;
                    }
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "previousSibling", {
        get: function () {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = children.length;
                while (i > 0) {
                    var child = children[--i];
                    if (this === child)
                        return children[i - 1] || null;
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "previousElementSibling", {
        get: function () {
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                var i = children.length;
                var find = false;
                while (i > 0) {
                    var child = children[--i];
                    if (find) {
                        if (child instanceof HTMLElement) {
                            return child || null;
                        }
                    }
                    else if (this === child) {
                        find = true;
                    }
                }
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "classNames", {
        get: function () {
            return this.classList.toString();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this Node
     */
    HTMLElement.prototype.clone = function () {
        return parse(this.toString()).firstChild;
    };
    return HTMLElement;
}(node_1.default));
exports["default"] = HTMLElement;
// https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
var kMarkupPattern = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g;
var kAttributePattern = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi;
var kSelfClosingElements = {
    area: true,
    AREA: true,
    base: true,
    BASE: true,
    br: true,
    BR: true,
    col: true,
    COL: true,
    hr: true,
    HR: true,
    img: true,
    IMG: true,
    input: true,
    INPUT: true,
    link: true,
    LINK: true,
    meta: true,
    META: true,
    source: true,
    SOURCE: true,
    embed: true,
    EMBED: true,
    param: true,
    PARAM: true,
    track: true,
    TRACK: true,
    wbr: true,
    WBR: true,
};
var kElementsClosedByOpening = {
    li: { li: true, LI: true },
    LI: { li: true, LI: true },
    p: { p: true, div: true, P: true, DIV: true },
    P: { p: true, div: true, P: true, DIV: true },
    b: { div: true, DIV: true },
    B: { div: true, DIV: true },
    td: { td: true, th: true, TD: true, TH: true },
    TD: { td: true, th: true, TD: true, TH: true },
    th: { td: true, th: true, TD: true, TH: true },
    TH: { td: true, th: true, TD: true, TH: true },
    h1: { h1: true, H1: true },
    H1: { h1: true, H1: true },
    h2: { h2: true, H2: true },
    H2: { h2: true, H2: true },
    h3: { h3: true, H3: true },
    H3: { h3: true, H3: true },
    h4: { h4: true, H4: true },
    H4: { h4: true, H4: true },
    h5: { h5: true, H5: true },
    H5: { h5: true, H5: true },
    h6: { h6: true, H6: true },
    H6: { h6: true, H6: true },
};
var kElementsClosedByClosing = {
    li: { ul: true, ol: true, UL: true, OL: true },
    LI: { ul: true, ol: true, UL: true, OL: true },
    a: { div: true, DIV: true },
    A: { div: true, DIV: true },
    b: { div: true, DIV: true },
    B: { div: true, DIV: true },
    i: { div: true, DIV: true },
    I: { div: true, DIV: true },
    p: { div: true, DIV: true },
    P: { div: true, DIV: true },
    td: { tr: true, table: true, TR: true, TABLE: true },
    TD: { tr: true, table: true, TR: true, TABLE: true },
    th: { tr: true, table: true, TR: true, TABLE: true },
    TH: { tr: true, table: true, TR: true, TABLE: true },
};
var frameflag = 'documentfragmentcontainer';
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 * @param  {string} data      html
 * @return {HTMLElement}      root element
 */
function base_parse(data, options) {
    var _a, _b;
    if (options === void 0) { options = { lowerCaseTagName: false, comment: false }; }
    var voidTag = new void_tag_1.default((_a = options === null || options === void 0 ? void 0 : options.voidTag) === null || _a === void 0 ? void 0 : _a.closingSlash, (_b = options === null || options === void 0 ? void 0 : options.voidTag) === null || _b === void 0 ? void 0 : _b.tags);
    var elements = options.blockTextElements || {
        script: true,
        noscript: true,
        style: true,
        pre: true,
    };
    var element_names = Object.keys(elements);
    var kBlockTextElements = element_names.map(function (it) { return new RegExp("^".concat(it, "$"), 'i'); });
    var kIgnoreElements = element_names.filter(function (it) { return elements[it]; }).map(function (it) { return new RegExp("^".concat(it, "$"), 'i'); });
    function element_should_be_ignore(tag) {
        return kIgnoreElements.some(function (it) { return it.test(tag); });
    }
    function is_block_text_element(tag) {
        return kBlockTextElements.some(function (it) { return it.test(tag); });
    }
    var createRange = function (startPos, endPos) { return [startPos - frameFlagOffset, endPos - frameFlagOffset]; };
    var root = new HTMLElement(null, {}, '', null, [0, data.length], voidTag);
    var currentParent = root;
    var stack = [root];
    var lastTextPos = -1;
    var noNestedTagIndex = undefined;
    var match;
    // https://github.com/taoqf/node-html-parser/issues/38
    data = "<".concat(frameflag, ">").concat(data, "</").concat(frameflag, ">");
    var lowerCaseTagName = options.lowerCaseTagName;
    var dataEndPos = data.length - (frameflag.length + 2);
    var frameFlagOffset = frameflag.length + 2;
    while ((match = kMarkupPattern.exec(data))) {
        // Note: Object destructuring here consistently tests as higher performance than array destructuring
        // eslint-disable-next-line prefer-const
        var matchText = match[0], leadingSlash = match[1], tagName = match[2], attributes = match[3], closingSlash = match[4];
        var matchLength = matchText.length;
        var tagStartPos = kMarkupPattern.lastIndex - matchLength;
        var tagEndPos = kMarkupPattern.lastIndex;
        // Add TextNode if content
        if (lastTextPos > -1) {
            if (lastTextPos + matchLength < tagEndPos) {
                var text = data.substring(lastTextPos, tagStartPos);
                currentParent.appendChild(new text_1.default(text, currentParent, createRange(lastTextPos, tagStartPos)));
            }
        }
        lastTextPos = kMarkupPattern.lastIndex;
        // https://github.com/taoqf/node-html-parser/issues/38
        // Skip frameflag node
        if (tagName === frameflag)
            continue;
        // Handle comments
        if (matchText[1] === '!') {
            if (options.comment) {
                // Only keep what is in between <!-- and -->
                var text = data.substring(tagStartPos + 4, tagEndPos - 3);
                currentParent.appendChild(new comment_1.default(text, currentParent, createRange(tagStartPos, tagEndPos)));
            }
            continue;
        }
        /* -- Handle tag matching -- */
        // Fix tag casing if necessary
        if (lowerCaseTagName)
            tagName = tagName.toLowerCase();
        // Handle opening tags (ie. <this> not </that>)
        if (!leadingSlash) {
            /* Populate attributes */
            var attrs = {};
            for (var attMatch = void 0; (attMatch = kAttributePattern.exec(attributes));) {
                var key = attMatch[1], val = attMatch[2];
                var isQuoted = val[0] === "'" || val[0] === "\"";
                attrs[key.toLowerCase()] = isQuoted ? val.slice(1, val.length - 1) : val;
            }
            var parentTagName = currentParent.rawTagName;
            if (!closingSlash && kElementsClosedByOpening[parentTagName]) {
                if (kElementsClosedByOpening[parentTagName][tagName]) {
                    stack.pop();
                    currentParent = (0, back_1.default)(stack);
                }
            }
            // Prevent nested A tags by terminating the last A and starting a new one : see issue #144
            if (tagName === 'a' || tagName === 'A') {
                if (noNestedTagIndex !== undefined) {
                    stack.splice(noNestedTagIndex);
                    currentParent = (0, back_1.default)(stack);
                }
                noNestedTagIndex = stack.length;
            }
            var tagEndPos_1 = kMarkupPattern.lastIndex;
            var tagStartPos_1 = tagEndPos_1 - matchLength;
            currentParent = currentParent.appendChild(
            // Initialize range (end position updated later for closed tags)
            new HTMLElement(tagName, attrs, attributes.slice(1), null, createRange(tagStartPos_1, tagEndPos_1), voidTag));
            stack.push(currentParent);
            if (is_block_text_element(tagName)) {
                // Find closing tag
                var closeMarkup = "</".concat(tagName, ">");
                var closeIndex = lowerCaseTagName
                    ? data.toLocaleLowerCase().indexOf(closeMarkup, kMarkupPattern.lastIndex)
                    : data.indexOf(closeMarkup, kMarkupPattern.lastIndex);
                var textEndPos = closeIndex === -1 ? dataEndPos : closeIndex;
                if (element_should_be_ignore(tagName)) {
                    var text = data.substring(tagEndPos_1, textEndPos);
                    if (text.length > 0 && /\S/.test(text)) {
                        currentParent.appendChild(new text_1.default(text, currentParent, createRange(tagEndPos_1, textEndPos)));
                    }
                }
                if (closeIndex === -1) {
                    lastTextPos = kMarkupPattern.lastIndex = data.length + 1;
                }
                else {
                    lastTextPos = kMarkupPattern.lastIndex = closeIndex + closeMarkup.length;
                    // Cause to be treated as self-closing, because no close found
                    leadingSlash = '/';
                }
            }
        }
        // Handle closing tags or self-closed elements (ie </tag> or <br>)
        if (leadingSlash || closingSlash || kSelfClosingElements[tagName]) {
            while (true) {
                if (tagName === 'a' || tagName === 'A')
                    noNestedTagIndex = undefined;
                if (currentParent.rawTagName === tagName) {
                    // Update range end for closed tag
                    currentParent.range[1] = createRange(-1, Math.max(lastTextPos, tagEndPos))[1];
                    stack.pop();
                    currentParent = (0, back_1.default)(stack);
                    break;
                }
                else {
                    var parentTagName = currentParent.tagName;
                    // Trying to close current tag, and move on
                    if (kElementsClosedByClosing[parentTagName]) {
                        if (kElementsClosedByClosing[parentTagName][tagName]) {
                            stack.pop();
                            currentParent = (0, back_1.default)(stack);
                            continue;
                        }
                    }
                    // Use aggressive strategy to handle unmatching markups.
                    break;
                }
            }
        }
    }
    return stack;
}
exports.base_parse = base_parse;
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */
function parse(data, options) {
    if (options === void 0) { options = { lowerCaseTagName: false, comment: false }; }
    var stack = base_parse(data, options);
    var root = stack[0];
    var _loop_1 = function () {
        // Handle each error elements.
        var last = stack.pop();
        var oneBefore = (0, back_1.default)(stack);
        if (last.parentNode && last.parentNode.parentNode) {
            if (last.parentNode === oneBefore && last.tagName === oneBefore.tagName) {
                // Pair error case <h3> <h3> handle : Fixes to <h3> </h3>
                // this is wrong, becouse this will put the H3 outside the current right position which should be inside the current Html Element, see issue 152 for more info
                if (options.parseNoneClosedTags !== true) {
                    oneBefore.removeChild(last);
                    last.childNodes.forEach(function (child) {
                        oneBefore.parentNode.appendChild(child);
                    });
                    stack.pop();
                }
            }
            else {
                // Single error  <div> <h3> </div> handle: Just removes <h3>
                // Why remove? this is already a HtmlElement and the missing <H3> is already added in this case. see issue 152 for more info
                // eslint-disable-next-line no-lonely-if
                if (options.parseNoneClosedTags !== true) {
                    oneBefore.removeChild(last);
                    last.childNodes.forEach(function (child) {
                        oneBefore.appendChild(child);
                    });
                }
            }
        }
        else {
            // If it's final element just skip.
        }
    };
    while (stack.length > 1) {
        _loop_1();
    }
    // response.childNodes.forEach((node) => {
    // 	if (node instanceof HTMLElement) {
    // 		node.parentNode = null;
    // 	}
    // });
    return root;
}
exports.parse = parse;
function resetParent(nodes, parent) {
    return nodes.map(function (node) {
        node.parentNode = parent;
        return node;
    });
}


/***/ }),

/***/ 4936:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var he_1 = __webpack_require__(6492);
/**
 * Node Class as base class for TextNode and HTMLElement.
 */
var Node = /** @class */ (function () {
    function Node(parentNode, range) {
        if (parentNode === void 0) { parentNode = null; }
        this.parentNode = parentNode;
        this.childNodes = [];
        Object.defineProperty(this, 'range', {
            enumerable: false,
            writable: true,
            configurable: true,
            value: range !== null && range !== void 0 ? range : [-1, -1]
        });
    }
    /**
     * Remove current node
     */
    Node.prototype.remove = function () {
        var _this = this;
        if (this.parentNode) {
            var children = this.parentNode.childNodes;
            this.parentNode.childNodes = children.filter(function (child) {
                return _this !== child;
            });
            this.parentNode = null;
        }
        return this;
    };
    Object.defineProperty(Node.prototype, "innerText", {
        get: function () {
            return this.rawText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "textContent", {
        get: function () {
            return (0, he_1.decode)(this.rawText);
        },
        set: function (val) {
            this.rawText = (0, he_1.encode)(val);
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
exports["default"] = Node;


/***/ }),

/***/ 7923:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var he_1 = __webpack_require__(6492);
var node_1 = __importDefault(__webpack_require__(4936));
var type_1 = __importDefault(__webpack_require__(9979));
/**
 * TextNode to contain a text element in DOM tree.
 * @param {string} value [description]
 */
var TextNode = /** @class */ (function (_super) {
    __extends(TextNode, _super);
    function TextNode(rawText, parentNode, range) {
        var _this = _super.call(this, parentNode, range) || this;
        /**
         * Node Type declaration.
         * @type {Number}
         */
        _this.nodeType = type_1.default.TEXT_NODE;
        _this._rawText = rawText;
        return _this;
    }
    TextNode.prototype.clone = function () {
        return new TextNode(this._rawText, null);
    };
    Object.defineProperty(TextNode.prototype, "rawText", {
        get: function () {
            return this._rawText;
        },
        /**
         * Set rawText and invalidate trimmed caches
         */
        set: function (text) {
            this._rawText = text;
            this._trimmedRawText = void 0;
            this._trimmedText = void 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "trimmedRawText", {
        /**
         * Returns raw text with all whitespace trimmed except single leading/trailing non-breaking space
         */
        get: function () {
            if (this._trimmedRawText !== undefined)
                return this._trimmedRawText;
            this._trimmedRawText = trimText(this.rawText);
            return this._trimmedRawText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "trimmedText", {
        /**
         * Returns text with all whitespace trimmed except single leading/trailing non-breaking space
         */
        get: function () {
            if (this._trimmedText !== undefined)
                return this._trimmedText;
            this._trimmedText = trimText(this.text);
            return this._trimmedText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "text", {
        /**
         * Get unescaped text value of current node and its children.
         * @return {string} text content
         */
        get: function () {
            return (0, he_1.decode)(this.rawText);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextNode.prototype, "isWhitespace", {
        /**
         * Detect if the node contains only white space.
         * @return {boolean}
         */
        get: function () {
            return /^(\s|&nbsp;)*$/.test(this.rawText);
        },
        enumerable: false,
        configurable: true
    });
    TextNode.prototype.toString = function () {
        return this.rawText;
    };
    return TextNode;
}(node_1.default));
exports["default"] = TextNode;
/**
 * Trim whitespace except single leading/trailing non-breaking space
 */
function trimText(text) {
    var i = 0;
    var startPos;
    var endPos;
    while (i >= 0 && i < text.length) {
        if (/\S/.test(text[i])) {
            if (startPos === undefined) {
                startPos = i;
                i = text.length;
            }
            else {
                endPos = i;
                i = void 0;
            }
        }
        if (startPos === undefined)
            i++;
        else
            i--;
    }
    if (startPos === undefined)
        startPos = 0;
    if (endPos === undefined)
        endPos = text.length - 1;
    var hasLeadingSpace = startPos > 0 && /[^\S\r\n]/.test(text[startPos - 1]);
    var hasTrailingSpace = endPos < (text.length - 1) && /[^\S\r\n]/.test(text[endPos + 1]);
    return (hasLeadingSpace ? ' ' : '') + text.slice(startPos, endPos + 1) + (hasTrailingSpace ? ' ' : '');
}


/***/ }),

/***/ 9979:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var NodeType;
(function (NodeType) {
    NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
    NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
})(NodeType || (NodeType = {}));
exports["default"] = NodeType;


/***/ }),

/***/ 8821:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = void 0;
var html_1 = __webpack_require__(4382);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return html_1.parse; } }));


/***/ }),

/***/ 6389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var html_1 = __webpack_require__(4382);
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */
function valid(data, options) {
    if (options === void 0) { options = { lowerCaseTagName: false, comment: false }; }
    var stack = (0, html_1.base_parse)(data, options);
    return Boolean(stack.length === 1);
}
exports["default"] = valid;


/***/ }),

/***/ 4659:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var VoidTag = /** @class */ (function () {
    function VoidTag(addClosingSlash, tags) {
        if (addClosingSlash === void 0) { addClosingSlash = false; }
        this.addClosingSlash = addClosingSlash;
        if (Array.isArray(tags)) {
            this.voidTags = tags.reduce(function (set, tag) {
                return set.add(tag.toLowerCase());
            }, new Set());
        }
        else {
            this.voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'].reduce(function (set, tag) {
                return set.add(tag);
            }, new Set());
        }
    }
    VoidTag.prototype.formatNode = function (tag, attrs, innerHTML) {
        var addClosingSlash = this.addClosingSlash;
        var closingSpace = (addClosingSlash && attrs && !attrs.endsWith(' ')) ? ' ' : '';
        var closingSlash = addClosingSlash ? "".concat(closingSpace, "/") : '';
        return this.isVoidElement(tag.toLowerCase()) ? "<".concat(tag).concat(attrs).concat(closingSlash, ">") : "<".concat(tag).concat(attrs, ">").concat(innerHTML, "</").concat(tag, ">");
    };
    VoidTag.prototype.isVoidElement = function (tag) {
        return this.voidTags.has(tag);
    };
    return VoidTag;
}());
exports["default"] = VoidTag;


/***/ }),

/***/ 9769:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generate = exports.compile = void 0;
var boolbase_1 = __importDefault(__webpack_require__(1073));
/**
 * Returns a function that checks if an elements index matches the given rule
 * highly optimized to return the fastest solution.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A highly optimized function that returns whether an index matches the nth-check.
 * @example
 *
 * ```js
 * const check = nthCheck.compile([2, 3]);
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 * ```
 */
function compile(parsed) {
    var a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    var b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */
    if (b < 0 && a <= 0)
        return boolbase_1.default.falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1)
        return function (index) { return index <= b; };
    if (a === 0)
        return function (index) { return index === b; };
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1)
        return b < 0 ? boolbase_1.default.trueFunc : function (index) { return index >= b; };
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */
    var absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    var bMod = ((b % absA) + absA) % absA;
    return a > 1
        ? function (index) { return index >= b && index % absA === bMod; }
        : function (index) { return index <= b && index % absA === bMod; };
}
exports.compile = compile;
/**
 * Returns a function that produces a monotonously increasing sequence of indices.
 *
 * If the sequence has an end, the returned function will return `null` after
 * the last index in the sequence.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A function that produces a sequence of indices.
 * @example <caption>Always increasing (2n+3)</caption>
 *
 * ```js
 * const gen = nthCheck.generate([2, 3])
 *
 * gen() // `1`
 * gen() // `3`
 * gen() // `5`
 * gen() // `8`
 * gen() // `11`
 * ```
 *
 * @example <caption>With end value (-2n+10)</caption>
 *
 * ```js
 *
 * const gen = nthCheck.generate([-2, 5]);
 *
 * gen() // 0
 * gen() // 2
 * gen() // 4
 * gen() // null
 * ```
 */
function generate(parsed) {
    var a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    var b = parsed[1] - 1;
    var n = 0;
    // Make sure to always return an increasing sequence
    if (a < 0) {
        var aPos_1 = -a;
        // Get `b mod a`
        var minValue_1 = ((b % aPos_1) + aPos_1) % aPos_1;
        return function () {
            var val = minValue_1 + aPos_1 * n++;
            return val > b ? null : val;
        };
    }
    if (a === 0)
        return b < 0
            ? // There are no result — always return `null`
                function () { return null; }
            : // Return `b` exactly once
                function () { return (n++ === 0 ? b : null); };
    if (b < 0) {
        b += a * Math.ceil(-b / a);
    }
    return function () { return a * n++ + b; };
}
exports.generate = generate;
//# sourceMappingURL=compile.js.map

/***/ }),

/***/ 7540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sequence = exports.generate = exports.compile = exports.parse = void 0;
var parse_js_1 = __webpack_require__(7766);
Object.defineProperty(exports, "parse", ({ enumerable: true, get: function () { return parse_js_1.parse; } }));
var compile_js_1 = __webpack_require__(9769);
Object.defineProperty(exports, "compile", ({ enumerable: true, get: function () { return compile_js_1.compile; } }));
Object.defineProperty(exports, "generate", ({ enumerable: true, get: function () { return compile_js_1.generate; } }));
/**
 * Parses and compiles a formula to a highly optimized function.
 * Combination of {@link parse} and {@link compile}.
 *
 * If the formula doesn't match any elements,
 * it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`.
 * Otherwise, a function accepting an _index_ is returned, which returns
 * whether or not the passed _index_ matches the formula.
 *
 * Note: The nth-rule starts counting at `1`, the returned function at `0`.
 *
 * @param formula The formula to compile.
 * @example
 * const check = nthCheck("2n+3");
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 */
function nthCheck(formula) {
    return (0, compile_js_1.compile)((0, parse_js_1.parse)(formula));
}
exports["default"] = nthCheck;
/**
 * Parses and compiles a formula to a generator that produces a sequence of indices.
 * Combination of {@link parse} and {@link generate}.
 *
 * @param formula The formula to compile.
 * @returns A function that produces a sequence of indices.
 * @example <caption>Always increasing</caption>
 *
 * ```js
 * const gen = nthCheck.sequence('2n+3')
 *
 * gen() // `1`
 * gen() // `3`
 * gen() // `5`
 * gen() // `8`
 * gen() // `11`
 * ```
 *
 * @example <caption>With end value</caption>
 *
 * ```js
 *
 * const gen = nthCheck.sequence('-2n+5');
 *
 * gen() // 0
 * gen() // 2
 * gen() // 4
 * gen() // null
 * ```
 */
function sequence(formula) {
    return (0, compile_js_1.generate)((0, parse_js_1.parse)(formula));
}
exports.sequence = sequence;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7766:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = void 0;
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
var whitespace = new Set([9, 10, 12, 13, 32]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
/**
 * Parses an expression.
 *
 * @throws An `Error` if parsing fails.
 * @returns An array containing the integer step size and the integer offset of the nth rule.
 * @example nthCheck.parse("2n+3"); // returns [2, 3]
 */
function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [2, 0];
    }
    else if (formula === "odd") {
        return [2, 1];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    var idx = 0;
    var a = 0;
    var sign = readSign();
    var number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        }
        else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
    }
    return [a, sign * number];
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        var start = idx;
        var value = 0;
        while (idx < formula.length &&
            formula.charCodeAt(idx) >= ZERO &&
            formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while (idx < formula.length &&
            whitespace.has(formula.charCodeAt(idx))) {
            idx++;
        }
    }
}
exports.parse = parse;
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ 2703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 8334:
/***/ ((module) => {

"use strict";
module.exports = require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/.cache/ssr-builtin-trackers/fs");

/***/ }),

/***/ 939:
/***/ ((module) => {

"use strict";
module.exports = require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/node_modules/react-dom/server.js");

/***/ }),

/***/ 2201:
/***/ ((module) => {

"use strict";
module.exports = require("/Users/alaw/Codesmith/full-imersive/osp/OverVuePage/node_modules/react/index.js");

/***/ }),

/***/ 1423:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 8311:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 6115:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4836:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6015:
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

/***/ 2911:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const PartytownSnippet = "/* Partytown 0.5.4 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.5.4\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);";

const createSnippet = (config, snippetCode) => {
    const { forward = [], ...filteredConfig } = config || {};
    const configStr = JSON.stringify(filteredConfig, (k, v) => {
        if (typeof v === 'function') {
            v = String(v);
            if (v.startsWith(k + '(')) {
                v = 'function ' + v;
            }
        }
        return v;
    });
    return [
        `!(function(w,p,f,c){`,
        Object.keys(filteredConfig).length > 0
            ? `c=w[p]=Object.assign(w[p]||{},${configStr});`
            : `c=w[p]=w[p]||{};`,
        `c[f]=(c[f]||[])`,
        forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
        `})(window,'partytown','forward');`,
        snippetCode,
    ].join('');
};

/**
 * The `type` attribute for Partytown scripts, which does two things:
 *
 * 1. Prevents the `<script>` from executing on the main thread.
 * 2. Is used as a selector so the Partytown library can find all scripts to execute in a web worker.
 *
 * @public
 */
const SCRIPT_TYPE = `text/partytown`;

/**
 * Function that returns the Partytown snippet as a string, which can be
 * used as the innerHTML of the inlined Partytown script in the head.
 *
 * @public
 */
const partytownSnippet = (config) => createSnippet(config, PartytownSnippet);

exports.SCRIPT_TYPE = SCRIPT_TYPE;
exports.partytownSnippet = partytownSnippet;


/***/ }),

/***/ 3521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Script": () => (/* binding */ f),
/* harmony export */   "ScriptStrategy": () => (/* binding */ c),
/* harmony export */   "collectedScriptsByPage": () => (/* binding */ l),
/* harmony export */   "scriptCache": () => (/* binding */ u),
/* harmony export */   "scriptCallbackCache": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2201);
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3631);
"client export"
;function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}const a=new Map,l={get:t=>a.get(t)||[],set(t,e){const n=a.get(t)||[];n.push(e),a.set(t,n)},delete(t){a.delete(t)}},s="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(t){const e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)};var c;!function(t){t.postHydrate="post-hydrate",t.idle="idle",t.offMainThread="off-main-thread"}(c||(c={}));const i=new Set(["src","strategy","dangerouslySetInnerHTML","children","onLoad","onError"]),u=new Set,d=new Map;function f(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(p,e))}function p(n){const{src:a,strategy:i=c.postHydrate}=n||{},{pathname:u}=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();if((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let t;switch(i){case c.postHydrate:t=y(n);break;case c.idle:s(()=>{t=y(n)});break;case c.offMainThread:{const t=b(n);l.set(u,t)}}return()=>{const{script:e,loadCallback:n,errorCallback:r}=t||{};n&&(null==e||e.removeEventListener("load",n)),r&&(null==e||e.removeEventListener("error",r)),null==e||e.remove()}},[]),i===c.offMainThread){const e=m(n),r=b(n);return"undefined"==typeof window&&l.set(u,r),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",e?o({type:"text/partytown","data-strategy":i,crossOrigin:"anonymous"},r,{dangerouslySetInnerHTML:{__html:m(n)}}):o({type:"text/partytown",src:h(a),"data-strategy":i,crossOrigin:"anonymous"},r))}return null}function y(t){const{id:e,src:n,strategy:r=c.postHydrate,onLoad:a,onError:l}=t||{},s=e||n,i=["load","error"],f={load:a,error:l};if(s){for(const t of i)if(null!=f&&f[t]){var p;const e=d.get(s)||{},{callbacks:n=[]}=(null==e?void 0:e[t])||{};var y,h;n.push(null==f?void 0:f[t]),null!=e&&null!=(p=e[t])&&p.event?null==f||null==(y=f[t])||y.call(f,null==e||null==(h=e[t])?void 0:h.event):d.set(s,o({},e,{[t]:{callbacks:n}}))}if(u.has(s))return null}const v=m(t),k=b(t),w=document.createElement("script");e&&(w.id=e),w.dataset.strategy=r;for(const[t,e]of Object.entries(k))w.setAttribute(t,e);v&&(w.textContent=v),n&&(w.src=n);const C={};if(s){for(const t of i){const e=e=>g(e,s,t);w.addEventListener(t,e),C[`${t}Callback`]=e}u.add(s)}return document.body.appendChild(w),{script:w,loadCallback:C.loadCallback,errorCallback:C.errorCallback}}function m(t){const{dangerouslySetInnerHTML:e,children:n=""}=t||{},{__html:r=""}=e||{};return r||n}function b(t){const e={};for(const[n,r]of Object.entries(t))i.has(n)||(e[n]=r);return e}function h(t){if(t)return`/__third-party-proxy?url=${encodeURIComponent(t)}`}function g(t,e,n){const r=d.get(e)||{};for(const e of(null==r||null==(o=r[n])?void 0:o.callbacks)||[]){var o;e(t)}d.set(e,{[n]:{event:t}})}
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ 3600:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}');

/***/ }),

/***/ 9323:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');

/***/ }),

/***/ 9591:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}');

/***/ }),

/***/ 2586:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');

/***/ }),

/***/ 1741:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"gatsby","description":"Blazing fast modern site generator for React","version":"4.22.1","author":"Kyle Mathews <mathews.kyle@gmail.com>","bin":{"gatsby":"./cli.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.14.0","@babel/core":"^7.15.5","@babel/eslint-parser":"^7.15.4","@babel/helper-plugin-utils":"^7.14.5","@babel/parser":"^7.15.5","@babel/runtime":"^7.15.4","@babel/traverse":"^7.15.4","@babel/types":"^7.15.4","@builder.io/partytown":"^0.5.2","@gatsbyjs/reach-router":"^1.3.9","@gatsbyjs/webpack-hot-middleware":"^2.25.2","@graphql-codegen/add":"^3.1.1","@graphql-codegen/core":"^2.5.1","@graphql-codegen/plugin-helpers":"^2.4.2","@graphql-codegen/typescript":"^2.4.8","@graphql-codegen/typescript-operations":"^2.3.5","@graphql-tools/code-file-loader":"^7.2.14","@graphql-tools/load":"^7.5.10","@jridgewell/trace-mapping":"^0.3.13","@nodelib/fs.walk":"^1.2.8","@parcel/cache":"2.6.2","@parcel/core":"2.6.2","@pmmmwh/react-refresh-webpack-plugin":"^0.5.7","@types/http-proxy":"^1.17.7","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","@vercel/webpack-asset-relocator-loader":"^1.7.0","address":"1.1.2","anser":"^2.1.0","autoprefixer":"^10.4.0","axios":"^0.21.1","babel-loader":"^8.2.3","babel-plugin-add-module-exports":"^1.0.4","babel-plugin-dynamic-import-node":"^2.3.3","babel-plugin-lodash":"^3.3.4","babel-plugin-remove-graphql-queries":"^4.22.0","babel-preset-gatsby":"^2.22.1","better-opn":"^2.1.1","bluebird":"^3.7.2","browserslist":"^4.17.5","cache-manager":"^2.11.1","chalk":"^4.1.2","chokidar":"^3.5.3","common-tags":"^1.8.0","compression":"^1.7.4","cookie":"^0.4.1","core-js":"^3.22.3","cors":"^2.8.5","css-loader":"^5.2.7","css-minimizer-webpack-plugin":"^2.0.0","css.escape":"^1.5.1","date-fns":"^2.25.0","debug":"^3.2.7","deepmerge":"^4.2.2","detect-port":"^1.3.0","devcert":"^1.2.0","dotenv":"^8.6.0","enhanced-resolve":"^5.8.3","error-stack-parser":"^2.1.4","eslint":"^7.32.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.10.0","eslint-plugin-import":"^2.26.0","eslint-plugin-jsx-a11y":"^6.5.1","eslint-plugin-react":"^7.30.1","eslint-plugin-react-hooks":"^4.5.0","eslint-webpack-plugin":"^2.7.0","event-source-polyfill":"1.0.25","execa":"^5.1.1","express":"^4.17.1","express-graphql":"^0.12.0","express-http-proxy":"^1.6.3","fastest-levenshtein":"^1.0.12","fastq":"^1.13.0","file-loader":"^6.2.0","find-cache-dir":"^3.3.2","fs-exists-cached":"1.0.0","fs-extra":"^10.1.0","gatsby-cli":"^4.22.1","gatsby-core-utils":"^3.22.0","gatsby-graphiql-explorer":"^2.22.0","gatsby-legacy-polyfills":"^2.22.0","gatsby-link":"^4.22.0","gatsby-page-utils":"^2.22.0","gatsby-parcel-config":"0.13.0","gatsby-plugin-page-creator":"^4.22.0","gatsby-plugin-typescript":"^4.22.0","gatsby-plugin-utils":"^3.16.0","gatsby-react-router-scroll":"^5.22.0","gatsby-script":"^1.7.0","gatsby-telemetry":"^3.22.0","gatsby-worker":"^1.22.0","glob":"^7.2.3","globby":"^11.1.0","got":"^11.8.5","graphql":"^15.7.2","graphql-compose":"^9.0.7","graphql-playground-middleware-express":"^1.7.22","hasha":"^5.2.2","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^3.0.0","joi":"^17.4.2","json-loader":"^0.5.7","latest-version":"5.1.0","lmdb":"2.5.3","lodash":"^4.17.21","md5-file":"^5.0.0","meant":"^1.0.3","memoizee":"^0.4.15","micromatch":"^4.0.4","mime":"^2.5.2","mini-css-extract-plugin":"1.6.2","mitt":"^1.2.0","moment":"^2.29.1","multer":"^1.4.5-lts.1","node-fetch":"^2.6.6","node-html-parser":"^5.3.3","normalize-path":"^3.0.0","null-loader":"^4.0.1","opentracing":"^0.14.5","p-defer":"^3.0.0","parseurl":"^1.3.3","physical-cpu-count":"^2.0.0","platform":"^1.3.6","postcss":"^8.3.11","postcss-flexbugs-fixes":"^5.0.2","postcss-loader":"^5.3.0","prompts":"^2.4.2","prop-types":"^15.7.2","query-string":"^6.14.1","raw-loader":"^4.0.2","react-dev-utils":"^12.0.1","react-refresh":"^0.9.0","redux":"4.1.2","redux-thunk":"^2.4.0","resolve-from":"^5.0.0","semver":"^7.3.7","shallow-compare":"^1.2.2","signal-exit":"^3.0.5","slugify":"^1.6.1","socket.io":"3.1.2","socket.io-client":"3.1.3","st":"^2.0.0","stack-trace":"^0.0.10","string-similarity":"^1.2.2","strip-ansi":"^6.0.1","style-loader":"^2.0.0","terser-webpack-plugin":"^5.2.4","tmp":"^0.2.1","true-case-path":"^2.2.1","type-of":"^2.0.1","url-loader":"^4.1.1","uuid":"^8.3.2","webpack":"^5.61.0","webpack-dev-middleware":"^4.3.0","webpack-merge":"^5.8.0","webpack-stats-plugin":"^1.0.3","webpack-virtual-modules":"^0.3.2","xstate":"4.32.1","yaml-loader":"^0.6.0"},"devDependencies":{"@babel/cli":"^7.15.4","@babel/helper-plugin-utils":"^7.14.5","@babel/register":"^7.15.3","@types/babel-core":"^6.25.7","@types/eslint":"^8.2.1","@types/express":"^4.17.13","@types/express-http-proxy":"^1.6.3","@types/micromatch":"^4.0.1","@types/normalize-path":"^3.0.0","@types/reach__router":"^1.3.5","@types/react-dom":"^17.0.9","@types/semver":"^7.3.10","@types/sharp":"^0.30.5","@types/signal-exit":"^3.0.0","@types/string-similarity":"^4.0.0","@types/tmp":"^0.2.0","@types/webpack-virtual-modules":"^0.1.1","babel-preset-gatsby-package":"^2.22.0","copyfiles":"^2.3.0","cross-env":"^7.0.3","documentation":"^13.1.0","react":"^16.12.0","react-dom":"^16.12.0","rimraf":"^3.0.2","typescript":"^4.7.4","xhr-mock":"^2.5.1","zipkin":"^0.22.0","zipkin-javascript-opentracing":"^3.0.0","zipkin-transport-http":"^0.22.0"},"optionalDependencies":{"gatsby-sharp":"^0.16.0"},"engines":{"node":">=14.15.0"},"files":["apis.json","ipc.json","cache-dir/","cli.js","dist/","graphql.js","graphql.d.ts","reporter.js","reporter.d.ts","index.d.ts","scripts/postinstall.js","utils.js","internal.js","internal.d.ts","webpack.js","webpack.d.ts","!**/__tests__/"],"homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","peerDependencies":{"react":"^16.9.0 || ^17.0.0 || ^18.0.0","react-dom":"^16.9.0 || ^17.0.0 || ^18.0.0"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^15.8.0"},"scripts":{"build":"npm run build:types && npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","postbuild":"node scripts/output-api-file.js","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore \\"**/__tests__\\" --ignore \\"**/__mocks__\\" && copyfiles -u 1 cache-dir/**/*.json cache-dir/commonjs","build:src":"babel src --out-dir dist --source-maps --verbose --ignore \\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__,**/__mocks__\\" --extensions \\".ts,.tsx,.js\\"","build:types":"tsc --emitDeclarationOnly --declaration --declarationDir dist && node scripts/check-declaration.js","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","postinstall":"node scripts/postinstall.js","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch","version":"node ../../scripts/pin-version.js","typecheck":"tsc --noEmit"},"types":"index.d.ts","yargs":{"boolean-negation":false},"gitHead":"3265a992213672ec9276d1e8bfbce3d5bf696cbd"}');

/***/ }),

/***/ 9804:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfill":["/polyfill-9efb0828ade9c7256775.js"],"app":["/app-fc48737f059030ac3e92.js"],"component---src-pages-docs-core-features-js":["/component---src-pages-docs-core-features-js-f1bc9dd491e7872bcc73.js"],"component---src-pages-docs-index-js":["/component---src-pages-docs-index-js-09af24efe8da38ceef13.js"],"component---src-pages-docs-installation-js":["/component---src-pages-docs-installation-js-70e56d464f2a91e103f7.js"],"component---src-pages-examples-index-js":["/component---src-pages-examples-index-js-ec6f840cefd3fdb09c75.js"],"component---src-pages-index-js":["/component---src-pages-index-js-d4dec3f39190d6f6e1e4.js"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"142":"component---src-pages-docs-installation-js","385":"component---src-pages-examples-index-js","674":"component---src-pages-docs-core-features-js","678":"component---src-pages-index-js","808":"component---src-pages-docs-index-js"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			418: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ staticPage),
/* harmony export */   "getPageChunk": () => (/* binding */ getPageChunk),
/* harmony export */   "reorderHeadComponents": () => (/* binding */ reorderHeadComponents),
/* harmony export */   "sanitizeComponents": () => (/* binding */ sanitizeComponents)
/* harmony export */ });
/* global HAS_REACT_18 */const React=__webpack_require__(2201);const path=__webpack_require__(1423);const{renderToString,renderToStaticMarkup,renderToPipeableStream}=__webpack_require__(939);const{ServerLocation,Router,isRedirect}=__webpack_require__(3631);const merge=__webpack_require__(9996);const{StaticQueryContext}=__webpack_require__(9572);const fs=__webpack_require__(8334);const{WritableAsPromise}=__webpack_require__(1034);const{RouteAnnouncerProps}=__webpack_require__(236);const{apiRunner,apiRunnerAsync}=__webpack_require__(4067);const asyncRequires=__webpack_require__(5418);const{version:gatsbyVersion}=__webpack_require__(1741);const{grabMatchParams}=__webpack_require__(9755);const chunkMapping=__webpack_require__(9804);const{headHandlerForSSR}=__webpack_require__(923);// we want to force posix-style joins, so Windows doesn't produce backslashes for urls
const{join}=path.posix;// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(9079);}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=[].concat(components).flat(Infinity).filter(Boolean);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};function deepMerge(a,b){const combineMerge=(target,source,options)=>{const destination=target.slice();source.forEach((item,index)=>{if(typeof destination[index]===`undefined`){destination[index]=options.cloneUnlessOtherwiseSpecified(item,options);}else if(options.isMergeableObject(item)){destination[index]=merge(target[index],item,options);}else if(target.indexOf(item)===-1){destination.push(item);}});return destination;};return merge(a,b,{arrayMerge:combineMerge});}/**
Reorder headComponents so meta tags are always at the top and aren't missed by crawlers by being pushed down by large inline styles, etc.
@see https://github.com/gatsbyjs/gatsby/issues/22206
*/const reorderHeadComponents=headComponents=>{const sorted=headComponents.sort((a,b)=>{if(a.type&&a.type===`meta`&&!(b.type&&b.type===`meta`)){return-1;}return 0;});return sorted;};async function staticPage({pagePath,pageData,staticQueryContext,styles,scripts,reversedStyles,reversedScripts,inlinePageData=false,webpackCompilationHash}){// for this to work we need this function to be sync or at least ensure there is single execution of it at a time
global.unsafeBuiltinUsage=[];try{let bodyHtml=``;let headComponents=[/*#__PURE__*/React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};function loadPageDataSync(_pagePath){if(_pagePath===pagePath){// no need to use fs if we are asking for pageData of current page
return pageData;}const pageDataPath=getPageDataPath(_pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{// deprecation notice
const myErrorHolder={name:`Usage of loadPageDataSync for page other than currently generated page disables incremental html generation in future builds`};Error.captureStackTrace(myErrorHolder,loadPageDataSync);global.unsafeBuiltinUsage.push(myErrorHolder.stack);const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}}const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{// TODO - we should remove deep merges
htmlAttributes=deepMerge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{// TODO - we should remove deep merges
bodyAttributes=deepMerge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{// TODO - we should remove deep merges
bodyProps=deepMerge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const{componentChunkName}=pageData;const pageComponent=await asyncRequires.components[componentChunkName]();headHandlerForSSR({pageComponent,setHeadComponents,staticQueryContext,pageData,pagePath});class RouteHandler extends React.Component{render(){var _pageData$result,_pageData$result$page;const props={...this.props,...pageData.result,params:{...grabMatchParams(this.props.location.pathname),...(((_pageData$result=pageData.result)===null||_pageData$result===void 0?void 0:(_pageData$result$page=_pageData$result.pageContext)===null||_pageData$result$page===void 0?void 0:_pageData$result$page.__params)||{})}};const pageElement=createElement(pageComponent.default,props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=/*#__PURE__*/React.createElement(ServerLocation,{url:`${""}${pagePath}`},/*#__PURE__*/React.createElement(Router,{id:"gatsby-focus-wrapper",baseuri:""},/*#__PURE__*/React.createElement(RouteHandler,{path:"/*"})),/*#__PURE__*/React.createElement("div",RouteAnnouncerProps));const bodyComponent=/*#__PURE__*/React.createElement(StaticQueryContext.Provider,{value:staticQueryContext},apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop());// Let the site or plugin render the page component.
await apiRunnerAsync(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{// react 18 enabled
if(true){const writableStream=new WritableAsPromise();const{pipe}=renderToPipeableStream(bodyComponent,{onAllReady(){pipe(writableStream);},onError(error){throw error;}});bodyHtml=await writableStream;}else{}}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});reversedScripts.forEach(script=>{// Add preload/prefetch <link>s magic comments
if(script.shouldGenerateLink){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));}});reversedStyles.forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(/*#__PURE__*/React.createElement("style",{"data-href":`${""}/${style.name}`,"data-identity":`gatsby-global-css`,dangerouslySetInnerHTML:{__html:style.content}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";window.___webpackCompilationHash="${webpackCompilationHash}";${inlinePageData?`window.pageData=${JSON.stringify(pageData)};`:``}/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));let bodyScripts=[];if(chunkMapping[`polyfill`]){chunkMapping[`polyfill`].forEach(script=>{const scriptPath=`${""}${script}`;bodyScripts.push(/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,noModule:true}));});}// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
bodyScripts=bodyScripts.concat(scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,async:true});}));postBodyComponents.push(...bodyScripts);headComponents=reorderHeadComponents(headComponents);apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(/*#__PURE__*/React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;return{html,unsafeBuiltinsUsage:global.unsafeBuiltinUsage};}catch(e){e.unsafeBuiltinsUsage=global.unsafeBuiltinUsage;throw e;}}function getPageChunk({componentChunkName}){return asyncRequires.components[componentChunkName]();}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=render-page.js.map