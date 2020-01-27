webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Main/TopstoriesContent.js":
/*!**********************************************!*\
  !*** ./components/Main/TopstoriesContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Main/TopstoriesContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var TopstoriesContent = function TopstoriesContent(props) {
  var TopStoriesItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "TopstoriesContent__TopStoriesItemWrapper",
    componentId: "sc-1fk6sap-0"
  })(["@font-face{src:url(https://fonts.googleapis.com/css?family=Roboto&display=swap);font-family:'Roboto',sans-serif;}display:flex;flex-direction:row;width:100%;margin:8px 0;background-color:rgb(235,237,255);@media only screen and (max-width:767px){flex-direction:column;}"]);
  var TopStoriesImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "TopstoriesContent__TopStoriesImageWrapper",
    componentId: "sc-1fk6sap-1"
  })(["max-width:640px;min-height:360px;padding:24px;@media only screen and (max-width:767px){&&::before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2));opacity:0.7;z-index:1;}padding:0px;min-height:unset;}"]);
  var TopStoriesImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
    displayName: "TopstoriesContent__TopStoriesImage",
    componentId: "sc-1fk6sap-2"
  })(["width:640px;height:360px;@media only screen and (max-width:767px){width:100%;height:unset;}"]);
  var TopStoriesTxtWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "TopstoriesContent__TopStoriesTxtWrapper",
    componentId: "sc-1fk6sap-3"
  })(["margin:10px 35px 10px 10px;h2{font-family:'Roboto',sans-serif;font-size:35px;color:rgb(240,79,60);}h3{font-family:'Roboto',sans-serif;font-size:18px;font-weight:400;}p{margin:42px 0;}p a{font-family:'Roboto',sans-serif;font-size:22px;text-decoration:none;color:#333;border:solid 1px #333;padding:10px;}p a:visited{color:#333;}@media only screen and (max-width:767px){margin:-60px 0px 0px 0px;padding:14px;background-image:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1) );h2{font-size:20px;}h3{font-size:14px;color:#fff;}p{margin:35px 0 52px 0;}p a{font-size:16px;color:#fff;border:solid 1px #fff;}p a:visited{color:#fff;}}"]);
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
    autoHeight: true,
    loop: true
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
        lineNumber: 139
      },
      __self: this
    }, __jsx(TopStoriesImageWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx(TopStoriesImage, {
      src: "https://assets.rappler.com".concat(img),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })), __jsx(TopStoriesTxtWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, items.title), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, items.metadesc), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("a", {
      href: finalUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Read More"))));
  });
  return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), getTopStories);
};

TopstoriesContent.propTypes = {
  // eslint-disable-next-line no-undef
  getData: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TopstoriesContent);

/***/ })

})
//# sourceMappingURL=index.js.29f54ced53bf4b214295.hot-update.js.map