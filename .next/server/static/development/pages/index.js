module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Carousel/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const CarouselItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Carousel__CarouselItemWrapper",
  componentId: "sc-112hhbv-0"
})(["@font-face{src:url(https://fonts.googleapis.com/css?family=Roboto&display=swap);font-family:'Roboto',sans-serif;}display:flex;flex-direction:row;width:100%;margin:8px 0;background-color:", ";@media only screen and (max-width:767px){flex-direction:column;}"], props => props.bgColor || 'rgb(235, 237, 255)');
const CarouselImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Carousel__CarouselImageWrapper",
  componentId: "sc-112hhbv-1"
})(["max-width:640px;min-height:360px;padding:24px;@media only screen and (max-width:767px){&&::before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2));opacity:0.7;z-index:1;}padding:0px;min-height:unset;}"]);
const CarouselImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Carousel__CarouselImage",
  componentId: "sc-112hhbv-2"
})(["width:640px;height:360px;@media only screen and (max-width:767px){width:100%;height:unset;}"]);
const CarouselTxtWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Carousel__CarouselTxtWrapper",
  componentId: "sc-112hhbv-3"
})(["margin:10px 35px 10px 10px;h2{font-family:'Roboto',sans-serif;font-size:35px;color:", ";}h3{font-family:'Roboto',sans-serif;font-size:18px;font-weight:400;color:", ";}p{margin:42px 0;}p a{font-family:'Roboto',sans-serif;font-size:22px;text-decoration:none;color:", ";border:solid 1px ", ";padding:10px;background-color:", ";}p a:visited{color:", ";}@media only screen and (max-width:767px){margin:-60px 0px 0px 0px;padding:14px;background-image:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1) );h2{font-size:20px;color:", ";}h3{font-size:14px;color:", ";}p{margin:35px 0 52px 0;}p a{font-size:16px;border:solid 1px ", ";color:", ";}p a:visited{border:solid 1px ", ";color:", ";}}"], props => props.desktopHeader || 'rgb(240, 79, 60)', props => props.desktopSubHeader || '#000', props => props.desktopButtonColor || '#333', props => props.desktopButtonColor || '#333', props => props.buttonBgColor || 'transparent', props => props.desktopButtonColor || '#333', props => props.mobileHeader || 'rgb(240, 79, 60)', props => props.mobileSubHeader || '#fff', props => props.mobileButtonColor || '#333', props => props.mobileButtonColor || '333', props => props.desktopButtonColor || '#333', props => props.mobileButtonColor || '333');
const settings = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  effect: 'fade',
  autoHeight: true,
  loop: true,
  observer: true,
  observeParents: true
};

class Carousel extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getRawData();
  }

  async getRawData() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://svc.rappler.com/p/topstories');
    const {
      data
    } = await res.data;
    this.setState({
      data
    });
  }

  render() {
    const {
      bgColor,
      desktopHeader,
      mobileHeader,
      desktopSubHeader,
      mobileSubHeader,
      desktopButtonColor,
      mobileButtonColor,
      buttonBgColor
    } = this.props;
    const getCarouselData = this.state.data.map(items => {
      const {
        id,
        url,
        images,
        title,
        metadesc
      } = items;
      const finalUrl = `https://www.rappler.com${url}`;
      const articleID = id;
      const imgPath = images[0].tn;
      const img = new URL(imgPath).pathname;
      return __jsx(CarouselItemWrapper, {
        key: articleID,
        bgColor: bgColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx(CarouselImageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx(CarouselImage, {
        src: `https://assets.rappler.com${img}`,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      })), __jsx(CarouselTxtWrapper, {
        desktopHeader: desktopHeader,
        mobileHeader: mobileHeader,
        desktopSubHeader: desktopSubHeader,
        mobileSubHeader: mobileSubHeader,
        desktopButtonColor: desktopButtonColor,
        mobileButtonColor: mobileButtonColor,
        buttonBgColor: buttonBgColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, title), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, metadesc), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("a", {
        href: finalUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Read More"))));
    });
    return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }), getCarouselData);
  }

}

Carousel.propTypes = {
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired,
  desktopHeader: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired,
  mobileHeader: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired,
  desktopSubHeader: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired,
  mobileSubHeader: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired,
  desktopButtonColor: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired,
  mobileButtonColor: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired,
  buttonBgColor: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/Carousel/CarouselR3Style.js":
/*!************************************************!*\
  !*** ./components/Carousel/CarouselR3Style.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./components/Carousel/Carousel.js");
var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Carousel/CarouselR3Style.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CarouselR3Style = () => {
  return __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bgColor: "#f4f4f4",
    desktopHeader: "#333332",
    mobileHeader: "#e76229",
    desktopSubHeader: "#000",
    mobileSubHeader: "#fff",
    desktopButtonColor: "#fff",
    mobileButtonColor: "#fff",
    buttonBgColor: "#e76229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselR3Style);

/***/ }),

/***/ "./components/Carousel/CarouselR5Style.js":
/*!************************************************!*\
  !*** ./components/Carousel/CarouselR5Style.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./components/Carousel/Carousel.js");
var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Carousel/CarouselR5Style.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CarouselR5Style = () => {
  return __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bgColor: "rgb(235, 237, 255)",
    desktopHeader: "rgb(240, 79, 60)",
    mobileHeader: "rgb(240, 79, 60)",
    desktopSubHeader: "#000",
    mobileSubHeader: "#fff",
    desktopButtonColor: "#333",
    mobileButtonColor: "#fff",
    buttonBgColor: "transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselR5Style);

/***/ }),

/***/ "./components/Carousel/index.js":
/*!**************************************!*\
  !*** ./components/Carousel/index.js ***!
  \**************************************/
/*! exports provided: CarouselR3Style, CarouselR5Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselR3Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselR3Style */ "./components/Carousel/CarouselR3Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselR3Style", function() { return _CarouselR3Style__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CarouselR5Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselR5Style */ "./components/Carousel/CarouselR5Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselR5Style", function() { return _CarouselR5Style__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/Wrapper/Wrapper.js":
/*!***************************************!*\
  !*** ./components/Wrapper/Wrapper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Wrapper/Wrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Wrapper = props => {
  const LayoutStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Wrapper__LayoutStyle",
    componentId: "iac2m5-0"
  })(["margin:20;padding:20;.swiper-container-horizontal > .swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{left:25% !important;}.swiper-pagination-bullet-active,.swiper-pagination-bullet{background:#000 !important;}@media only screen and (max-width:767px){.swiper-container-horizontal > .swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{left:0 !important;}.swiper-pagination-bullet-active,.swiper-pagination-bullet{background:#fff !important;}}"]);
  const ShareAndEmbed = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Wrapper__ShareAndEmbed",
    componentId: "iac2m5-1"
  })(["display:flex;flex-direction:row;align-items:center;width:100%;height:100%;margin-bottom:-0.5%;background-color:#f2f2f2;p{margin-left:24px;margin-right:24px;}p a{color:#000;}"]);
  return __jsx(LayoutStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, props.embedBar ? __jsx(ShareAndEmbed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Embed"))) : '', props.children);
};

Wrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].node,
  embedBar: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string
};
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/Wrapper/index.js":
/*!*************************************!*\
  !*** ./components/Wrapper/index.js ***!
  \*************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return _Wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel/index.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Wrapper */ "./components/Wrapper/index.js");
var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    embedBar: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselR5Style"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonathanconcepcion/Documents/next-js-proj/topstories/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map