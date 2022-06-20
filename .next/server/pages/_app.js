"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ error_boundary)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/button/index.tsx
var components_button = __webpack_require__(9231);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/utils/colors.ts
var colors = __webpack_require__(1635);
;// CONCATENATED MODULE: ./src/utils/styles.ts

const typoMobileModifiers = {
  largeTitle: (0,external_styled_components_.css)(["font-weight:900;font-size:36px;line-height:44px;"]),
  title: (0,external_styled_components_.css)(["font-weight:900;font-size:28px;line-height:36px;"]),
  subtitle: (0,external_styled_components_.css)(["font-weight:900;font-size:20px;line-height:28px;"]),
  body1: (0,external_styled_components_.css)(["font-weight:900;font-size:16px;line-height:24px;"]),
  body2: (0,external_styled_components_.css)(["font-weight:400;font-size:16px;line-height:24px;"]),
  titleSubHeading: (0,external_styled_components_.css)(["font-size:24px;line-height:32px;letter-spacing:-0.5px;"]),
  label: (0,external_styled_components_.css)(["font-weight:900;font-size:14px;line-height:20px;"]),
  label2: (0,external_styled_components_.css)(["font-weight:400;font-size:14px;line-height:20px;"]),
  caption: (0,external_styled_components_.css)(["font-weight:900;font-size:12px;line-height:16px;"]),
  caption2: (0,external_styled_components_.css)(["font-weight:400;font-size:12px;line-height:16px;"])
};
const typoDesktopModifiers = {
  h1: (0,external_styled_components_.css)(["font-weight:900;font-size:96px;line-height:100px;"]),
  h2: (0,external_styled_components_.css)(["font-weight:900;font-size:60px;line-height:68px;"]),
  h3: (0,external_styled_components_.css)(["font-weight:900;font-size:48px;line-height:56px;"]),
  h4: (0,external_styled_components_.css)(["font-weight:900;font-size:34px;line-height:42px;"]),
  h4normal: (0,external_styled_components_.css)(["font-weight:700;font-size:24px;line-height:32px;"]),
  h5: (0,external_styled_components_.css)(["font-weight:900;font-size:24px;line-height:32px;"]),
  h6: (0,external_styled_components_.css)(["font-weight:400;font-size:20px;line-height:28px;"]),
  h7: (0,external_styled_components_.css)(["font-weight:500;font-size:14px;line-height:20px;"]),
  subtitle1: (0,external_styled_components_.css)(["font-weight:900;font-size:16px;line-height:24px;"]),
  subtitle2: (0,external_styled_components_.css)(["font-weight:900;font-size:14px;line-height:20px;"]),
  subtitleUnder: (0,external_styled_components_.css)(["font-weight:400;font-size:14px;line-height:20px;"]),
  subtitleLarge: (0,external_styled_components_.css)(["font-weight:400;font-size:24px;line-height:42px;font-family:\"Roboto\";font-style:normal;"]),
  body1: (0,external_styled_components_.css)(["font-weight:900;font-size:16px;line-height:24px;"]),
  body2: (0,external_styled_components_.css)(["font-weight:400;font-size:16px;line-height:20px;"]),
  body3: (0,external_styled_components_.css)(["font-weight:600;font-size:18px;line-height:24px;"]),
  body4: (0,external_styled_components_.css)(["font-weight:600;font-size:16px;line-height:24px;"]),
  body6: (0,external_styled_components_.css)(["font-weight:500;font-size:16px;line-height:24px;"]),
  button: (0,external_styled_components_.css)(["font-weight:900;font-size:14px;line-height:20px;"]),
  caption: (0,external_styled_components_.css)(["font-weight:900;font-size:12px;line-height:18px;"]),
  caption2: (0,external_styled_components_.css)(["font-weight:600;font-size:12px;line-height:18px;"]),
  overline: (0,external_styled_components_.css)(["font-weight:900;font-size:10px;line-height:16px;"]),
  title: (0,external_styled_components_.css)(["font-weight:700;font-size:36px;line-height:44px;"])
};
const elevations = {
  lvl1: (0,external_styled_components_.css)(["box-shadow:0px 1px 1px rgba(9,30,66,0.25),0px 0px 1px rgba(9,30,66,0.31);"]),
  lvl2: (0,external_styled_components_.css)(["box-shadow:0px 3px 5px rgba(9,30,66,0.2),0px 0px 1px rgba(9,30,66,0.31);"]),
  lvl3: (0,external_styled_components_.css)(["box-shadow:0px 8px 12px rgba(9,30,66,0.15),0px 0px 1px rgba(9,30,66,0.31);"]),
  lvl4: (0,external_styled_components_.css)(["box-shadow:0px 10px 18px rgba(9,30,66,0.15),0px 0px 1px rgba(9,30,66,0.31);"]),
  lvl5: (0,external_styled_components_.css)(["box-shadow:0px 18px 28px rgba(9,30,66,0.15),0px 0px 1px rgba(9,30,66,0.31);"]),
  lvl6: (0,external_styled_components_.css)(["box-shadow:10px 40px 50px rgba(229,233,246,0.4);"])
};
;// CONCATENATED MODULE: ./src/components/error-boundary/index.style.ts



const Styled = {
  Container: external_styled_components_default().div.withConfig({
    displayName: "indexstyle__Container",
    componentId: "sc-f6h8a0-0"
  })(["position:absolute;z-index:3;left:0;top:0;width:100%;height:100%;"]),
  Content: external_styled_components_default().div.withConfig({
    displayName: "indexstyle__Content",
    componentId: "sc-f6h8a0-1"
  })(["display:flex;flex-direction:column;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;padding:20px 10px;"]),
  Title: external_styled_components_default().h3.withConfig({
    displayName: "indexstyle__Title",
    componentId: "sc-f6h8a0-2"
  })(["color:", ";", ""], colors/* coreColors.support.gradient10 */.d.support.gradient10, typoMobileModifiers.subtitle),
  Description: external_styled_components_default().p.withConfig({
    displayName: "indexstyle__Description",
    componentId: "sc-f6h8a0-3"
  })(["color:", ";", ""], colors/* coreColors.neutral.grey600 */.d.neutral.grey600, typoMobileModifiers.body2)
};
/* harmony default export */ const index_style = (Styled);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/error-boundary/index.tsx






class ErrorBoundary extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return /*#__PURE__*/jsx_runtime_.jsx(index_style.Container, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(index_style.Content, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_style.Title, {
            children: "Whoops!"
          }), /*#__PURE__*/jsx_runtime_.jsx(index_style.Description, {
            children: "Stuck in a blind spot. Reload to see the magic!"
          }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
            onClick: this.props.onReset,
            children: "Reload"
          })]
        })
      });
    }

    return this.props.children;
  }

}

/* harmony default export */ const error_boundary = (ErrorBoundary);

/***/ }),

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9024);
/* harmony import */ var components_error_boundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9983);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3967);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout ?? (page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: page
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(components_error_boundary__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    onReset: utils_functions__WEBPACK_IMPORTED_MODULE_4__/* .reload */ .H5,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
      hideProgressBar: true,
      position: 'top-right',
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_1__.Slide,
      limit: 1
    }), getLayout( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Component, _objectSpread({}, pageProps)))]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H5": () => (/* binding */ reload)
/* harmony export */ });
/* unused harmony exports getFromSession, getFromLocalStorage, getWalletSupports, pixelToRem, dotsSensitive, isEmpty, omit, omitBy, parseJSON */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getFromSession = key => {
  const value = window.sessionStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
};
const getFromLocalStorage = key => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
};
const getWalletSupports = () => {
  const userAgentString =  false ? 0 : "";

  if (/iPad|iPhone|iPod/i.test(userAgentString)) {
    return ["metamask", "trust", "coin98"];
  }

  return undefined;
};
const pixelToRem = (...values) => {
  return values.reduce((acc, current) => acc += current / 16 + `rem `, "").trim();
};
const dotsSensitive = ({
  originalString,
  startPosition,
  endPosition
}) => {
  if (isEmpty(originalString)) {
    return "";
  }

  return (originalString === null || originalString === void 0 ? void 0 : originalString.substring(0, Number(startPosition))) + "..." + (originalString === null || originalString === void 0 ? void 0 : originalString.substring(Number(endPosition), Number(originalString === null || originalString === void 0 ? void 0 : originalString.length)));
};
const isEmpty = obj => {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
};
const omit = (obj, props) => {
  obj = _objectSpread({}, obj);
  props.forEach(prop => delete obj[prop]);
  return obj;
};
const omitBy = (obj, check) => {
  obj = _objectSpread({}, obj);
  Object.entries(obj).forEach(([key, value]) => check(value) && delete obj[key]);
  return obj;
};
const parseJSON = jsonString => {
  try {
    return jsonString === "undefined" ? undefined : JSON.parse(jsonString ?? "");
  } catch (error) {
    console.log("Parsing error on ", {
      jsonString
    });
    return undefined;
  }
};
const reload = () => {
  var _window, _window$location, _window$location$relo;

  (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : (_window$location$relo = _window$location.reload) === null || _window$location$relo === void 0 ? void 0 : _window$location$relo.call(_window$location);
};

/***/ }),

/***/ 3284:
/***/ ((module) => {

module.exports = require("classnames/bind");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,61,967,635], () => (__webpack_exec__(1336)));
module.exports = __webpack_exports__;

})();