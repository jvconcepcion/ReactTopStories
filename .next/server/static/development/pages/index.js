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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Main/Layout.js":
/*!***********************************!*\
  !*** ./components/Main/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Main/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */



const Layout = props => {
  const LayoutStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
		margin: 20;
		padding: 20;
		.swiper-container-horizontal > .swiper-pagination-bullets,
		.swiper-pagination-custom,
		.swiper-pagination-fraction {
			left: 25% !important;
		}

		.swiper-pagination-bullet-active,
		.swiper-pagination-bullet {
			background: #000 !important;
		}

		@media only screen and (max-width: 767px) {
			.swiper-container-horizontal > .swiper-pagination-bullets,
			.swiper-pagination-custom,
			.swiper-pagination-fraction {
				left: 0 !important;
			}

			.swiper-pagination-bullet-active,
			.swiper-pagination-bullet {
				background: #fff !important;
			}
		}
	`;
  const ShareAndEmbed = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-bottom: -0.5%;
		background-color: #f2f2f2;

		p {
			margin-left: 24px;
			margin-right: 24px;
		}
		p a {
			color: #000;
		}
	`;
  return __jsx(LayoutStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(ShareAndEmbed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Embed"))), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Main/TopstoriesContent.js":
/*!**********************************************!*\
  !*** ./components/Main/TopstoriesContent.js ***!
  \**********************************************/
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

var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Main/TopstoriesContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable func-names */

/* eslint-disable consistent-return */

/* eslint-disable react/prop-types */




const TopstoriesContent = props => {
  const TopStoriesItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
		@font-face {
			src: url(https://fonts.googleapis.com/css?family=Roboto&display=swap);
			font-family: 'Roboto', sans-serif;
		}
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 8px 0;
		background-color: rgb(235, 237, 255);

		@media only screen and (max-width: 767px) {
			flex-direction: column;
		}
	`;
  const TopStoriesImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
		max-width: 640px;
		min-height: 360px;
		padding: 24px;
		@media only screen and (max-width: 767px) {
			&&::before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
				opacity: 0.7;
				z-index: 1;
			}
			padding: 0px;
			min-height: unset;
		}
	`;
  const TopStoriesImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
		width: 640px;
		height: 360px;

		@media only screen and (max-width: 767px) {
			width: 100%;
			height: unset;
		}
	`;
  const TopStoriesTxtWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
		margin: 10px 35px 10px 10px;

		h2 {
			font-family: 'Roboto', sans-serif;
			font-size: 35px;
			color: rgb(240, 79, 60);
		}

		h3 {
			font-family: 'Roboto', sans-serif;
			font-size: 18px;
			font-weight: 400;
		}

		p {
			margin: 42px 0;
		}

		p a {
			font-family: 'Roboto', sans-serif;
			font-size: 22px;
			text-decoration: none;
			color: #333;
			border: solid 1px #333;
			padding: 10px;
		}

		p a:visited {
			color: #333;
		}
		@media only screen and (max-width: 767px) {
			margin: -45px 0px 0px 0px;
			padding: 14px;
			background-image: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.2),
				rgba(0, 0, 0, 1),
				rgba(0, 0, 0, 1),
				rgba(0, 0, 0, 1),
				rgba(0, 0, 0, 1)
			);
			h2 {
				font-size: 20px;
			}
			h3 {
				font-size: 14px;
				color: #fff;
			}
			p {
				margin: 35px 0 52px 0;
			}
			p a {
				font-size: 16px;
				color: #fff;
				border: solid 1px #fff;
			}

			p a:visited {
				color: #fff;
			}
		}
	`;
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
    autoHeight: true
  };
  const getTopStories = props.getData.data.map(items => {
    const finalUrl = `https://www.rappler.com${items.url}`;
    const articleID = items.id;
    const imgPath = items.images[0].tn;
    const img = new URL(imgPath).pathname;
    return __jsx(TopStoriesItemWrapper, {
      key: articleID,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, __jsx(TopStoriesImageWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: undefined
    }, __jsx(TopStoriesImage, {
      src: `https://assets.rappler.com${img}`,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: undefined
    })), __jsx(TopStoriesTxtWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: undefined
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: undefined
    }, items.title), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: undefined
    }, items.metadesc), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: undefined
    }, __jsx("a", {
      href: finalUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: undefined
    }, "Read More"))));
  });
  return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), getTopStories);
};

/* harmony default export */ __webpack_exports__["default"] = (TopstoriesContent);

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Main_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main/Layout */ "./components/Main/Layout.js");
/* harmony import */ var _components_Main_TopstoriesContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main/TopstoriesContent */ "./components/Main/TopstoriesContent.js");
var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable consistent-return */

/* eslint-disable react/prop-types */





const Index = props => {
  return __jsx(_components_Main_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_components_Main_TopstoriesContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    getData: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }));
};

Index.getInitialProps = async () => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://svc.rappler.com/p/topstories');
    const data = await res.data;
    return {
      data
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
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