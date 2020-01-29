webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/Carousel/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var CarouselItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Carousel__CarouselItemWrapper",
  componentId: "sc-112hhbv-0"
})(["@font-face{src:url(https://fonts.googleapis.com/css?family=Roboto&display=swap);font-family:'Roboto',sans-serif;}display:flex;flex-direction:row;width:100%;margin:8px 0;background-color:", ";@media only screen and (max-width:767px){flex-direction:column;}"], function (props) {
  return props.bgColor || 'rgb(235, 237, 255)';
});
var CarouselImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Carousel__CarouselImageWrapper",
  componentId: "sc-112hhbv-1"
})(["max-width:640px;min-height:360px;padding:24px;@media only screen and (max-width:767px){&&::before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2));opacity:0.7;z-index:1;}padding:0px;min-height:unset;}"]);
var CarouselImage = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "Carousel__CarouselImage",
  componentId: "sc-112hhbv-2"
})(["width:640px;height:360px;@media only screen and (max-width:767px){width:100%;height:unset;}"]);
var CarouselTxtWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Carousel__CarouselTxtWrapper",
  componentId: "sc-112hhbv-3"
})(["margin:10px 35px 10px 10px;h2{font-family:'Roboto',sans-serif;font-size:35px;color:", ";}h3{font-family:'Roboto',sans-serif;font-size:18px;font-weight:400;color:", ";}p{margin:42px 0;}p a{font-family:'Roboto',sans-serif;font-size:22px;text-decoration:none;color:", ";border:solid 1px ", ";padding:10px;background-color:", ";}p a:visited{color:", ";}@media only screen and (max-width:767px){margin:-60px 0px 0px 0px;padding:14px;background-image:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,1) );h2{font-size:20px;color:", ";}h3{font-size:14px;color:", ";}p{margin:35px 0 52px 0;}p a{font-size:16px;border:solid 1px ", ";color:", ";}p a:visited{border:solid 1px ", ";color:", ";}}"], function (props) {
  return props.desktopHeader || 'rgb(240, 79, 60)';
}, function (props) {
  return props.desktopSubHeader || '#000';
}, function (props) {
  return props.desktopButtonColor || '#333';
}, function (props) {
  return props.desktopButtonColor || '#333';
}, function (props) {
  return props.buttonBgColor || 'transparent';
}, function (props) {
  return props.desktopButtonColor || '#333';
}, function (props) {
  return props.mobileHeader || 'rgb(240, 79, 60)';
}, function (props) {
  return props.mobileSubHeader || '#fff';
}, function (props) {
  return props.mobileButtonColor || '#333';
}, function (props) {
  return props.mobileButtonColor || '333';
}, function (props) {
  return props.desktopButtonColor || '#333';
}, function (props) {
  return props.mobileButtonColor || '333';
});
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
  loop: true,
  observer: true,
  observeParents: true
};

var Carousel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Carousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Carousel).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getRawData();
    }
  }, {
    key: "getRawData",
    value: function getRawData() {
      var res, _ref, data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getRawData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(this.props.api));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.data);

            case 5:
              _ref = _context.sent;
              data = _ref.data;
              this.setState({
                data: data
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bgColor = _this$props.bgColor,
          desktopHeader = _this$props.desktopHeader,
          mobileHeader = _this$props.mobileHeader,
          desktopSubHeader = _this$props.desktopSubHeader,
          mobileSubHeader = _this$props.mobileSubHeader,
          desktopButtonColor = _this$props.desktopButtonColor,
          mobileButtonColor = _this$props.mobileButtonColor,
          buttonBgColor = _this$props.buttonBgColor;
      var getCarouselData = this.state.data.map(function (items) {
        var id = items.id,
            url = items.url,
            images = items.images,
            title = items.title,
            metadesc = items.metadesc;
        var finalUrl = "https://www.rappler.com".concat(url);
        var articleID = id;
        var imgPath = images[0].tn;
        var img = new URL(imgPath).pathname;
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
          src: "https://assets.rappler.com".concat(img),
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
      return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), getCarouselData);
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Carousel.propTypes = {
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired,
  desktopHeader: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired,
  mobileHeader: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired,
  desktopSubHeader: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired,
  mobileSubHeader: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired,
  desktopButtonColor: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired,
  mobileButtonColor: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired,
  buttonBgColor: prop_types__WEBPACK_IMPORTED_MODULE_11__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.2e9e426b8878a82c4f1f.hot-update.js.map