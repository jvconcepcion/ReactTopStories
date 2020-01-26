webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TopstoriesContent.js":
/*!*****************************************!*\
  !*** ./components/TopstoriesContent.js ***!
  \*****************************************/
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


var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/TopstoriesContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\tmargin: 10px 35px 10px 10px;\n\t\th2 {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 35px;\n\t\t\tcolor: rgb(240, 79, 60);\n\t\t}\n\t\th3 {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 18px;\n\t\t\tfont-weight: 400;\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 42px 0;\n\t\t}\n\n\t\tp a {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 22px;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: #333;\n\t\t\tborder: solid 1px #333;\n\t\t\tpadding: 10px;\n\t\t}\n\n\t\tp a:hover {\n\t\t\tborder: solid 1px rgb(240, 79, 60);\n\t\t\tcolor: rgb(240, 79, 60);\n\t\t}\n\n\t\tp a:visited {\n\t\t\tcolor: #333;\n\t\t}\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\twidth: 640px;\n\t\theight: 360px;\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\tmax-width: 640px;\n\t\tmin-height: 360px;\n\t\tpadding: 24px;\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\t@font-face {\n\t\t\tsrc: url(https://fonts.googleapis.com/css?family=Roboto&display=swap);\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\twidth: 100%;\n\t\tmargin: 10px 0;\n\t\tbackground-color: rgb(235, 237, 255);\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable func-names */

/* eslint-disable consistent-return */

/* eslint-disable react/prop-types */




var TopstoriesContent = function TopstoriesContent(props) {
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
    // autoplay: {
    // 	delay: 2500,
    // 	disableOnInteraction: false,
    // },
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
        lineNumber: 87
      },
      __self: this
    }, __jsx(TopStoriesImageWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(TopStoriesImage, {
      src: "https://assets.rappler.com".concat(img),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), __jsx(TopStoriesTxtWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, items.title), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, items.metadesc), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("a", {
      href: finalUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Read More"))));
  });
  return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), getTopStories);
};

/* harmony default export */ __webpack_exports__["default"] = (TopstoriesContent);

/***/ })

})
//# sourceMappingURL=index.js.24145499beff1a9b8da7.hot-update.js.map