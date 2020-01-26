webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
false,

/***/ "./components/Main/Layout.js":
/*!***********************************!*\
  !*** ./components/Main/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Main/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmargin-bottom: -0.5%;\n\t\tbackground-color: #f2f2f2;\n\n\t\tp {\n\t\t\tmargin-left: 24px;\n\t\t\tmargin-right: 24px;\n\t\t}\n\t\tp a {\n\t\t\tcolor: #000;\n\t\t}\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\tmargin: 20;\n\t\tpadding: 20;\n\t\t.swiper-container-horizontal > .swiper-pagination-bullets,\n\t\t.swiper-pagination-custom,\n\t\t.swiper-pagination-fraction {\n\t\t\tleft: 25% !important;\n\t\t}\n\n\t\t.swiper-pagination-bullet-active,\n\t\t.swiper-pagination-bullet {\n\t\t\tbackground: #000 !important;\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t.swiper-container-horizontal > .swiper-pagination-bullets,\n\t\t\t.swiper-pagination-custom,\n\t\t\t.swiper-pagination-fraction {\n\t\t\t\tleft: 0 !important;\n\t\t\t}\n\n\t\t\t.swiper-pagination-bullet-active,\n\t\t\t.swiper-pagination-bullet {\n\t\t\t\tbackground: #fff !important;\n\t\t\t}\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/prop-types */



var Layout = function Layout(props) {
  var LayoutStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
  var ShareAndEmbed = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
  return __jsx(LayoutStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(ShareAndEmbed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Main/TopstoriesContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\tmargin: 10px 35px 10px 10px;\n\n\t\th2 {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 35px;\n\t\t\tcolor: rgb(240, 79, 60);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 18px;\n\t\t\tfont-weight: 400;\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 42px 0;\n\t\t}\n\n\t\tp a {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 22px;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: #333;\n\t\t\tborder: solid 1px #333;\n\t\t\tpadding: 10px;\n\t\t}\n\n\t\tp a:visited {\n\t\t\tcolor: #333;\n\t\t}\n\t\t@media only screen and (max-width: 767px) {\n\t\t\tmargin: -45px 0px 0px 0px;\n\t\t\tpadding: 14px;\n\t\t\tbackground-image: linear-gradient(\n\t\t\t\tto bottom,\n\t\t\t\trgba(0, 0, 0, 0.2),\n\t\t\t\trgba(0, 0, 0, 1),\n\t\t\t\trgba(0, 0, 0, 1),\n\t\t\t\trgba(0, 0, 0, 1),\n\t\t\t\trgba(0, 0, 0, 1)\n\t\t\t);\n\t\t\th2 {\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\t\t\th3 {\n\t\t\t\tfont-size: 14px;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t\tp {\n\t\t\t\tmargin: 35px 0 52px 0;\n\t\t\t}\n\t\t\tp a {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcolor: #fff;\n\t\t\t\tborder: solid 1px #fff;\n\t\t\t}\n\n\t\t\tp a:visited {\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t}\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\twidth: 640px;\n\t\theight: 360px;\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\twidth: 100%;\n\t\t\theight: unset;\n\t\t}\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\tmax-width: 640px;\n\t\tmin-height: 360px;\n\t\tpadding: 24px;\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t&&::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tbackground-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n\t\t\t\topacity: 0.7;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\t\t\tpadding: 0px;\n\t\t\tmin-height: unset;\n\t\t}\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\t@font-face {\n\t\t\tsrc: url(https://fonts.googleapis.com/css?family=Roboto&display=swap);\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\twidth: 100%;\n\t\tmargin: 8px 0;\n\t\tbackground-color: rgb(235, 237, 255);\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\tflex-direction: column;\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable func-names */

/* eslint-disable consistent-return */

/* eslint-disable react/prop-types */




var TopstoriesContent = function TopstoriesContent(props) {
  console.log(props);
  var TopStoriesItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
  var TopStoriesImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
  var TopStoriesImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject3());
  var TopStoriesTxtWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
  var settings = {
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
  var getTopStories = props.getData.data.map(function (items) {
    var finalUrl = "https://www.rappler.com".concat(items.url);
    var articleID = items.id;
    var imgPath = items.images[0].tn;
    var img = new URL(imgPath).pathname;
    return __jsx(TopStoriesItemWrapper, {
      key: articleID,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx(TopStoriesImageWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx(TopStoriesImage, {
      src: "https://assets.rappler.com".concat(img),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })), __jsx(TopStoriesTxtWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, items.title), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, items.metadesc), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("a", {
      href: finalUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Read More"))));
  });
  return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), getTopStories);
};

/* harmony default export */ __webpack_exports__["default"] = (TopstoriesContent);

/***/ }),

/***/ "./components/TopstoriesContent.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Main_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main/Layout */ "./components/Main/Layout.js");
/* harmony import */ var _components_Main_TopstoriesContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main/TopstoriesContent */ "./components/Main/TopstoriesContent.js");

var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable consistent-return */

/* eslint-disable react/prop-types */





var Index = function Index(props) {
  return __jsx(_components_Main_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_components_Main_TopstoriesContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    getData: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

Index.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://svc.rappler.com/p/topstories'));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.data);

        case 6:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // eslint-disable-next-line no-console
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7e91263e326177b814ef.hot-update.js.map