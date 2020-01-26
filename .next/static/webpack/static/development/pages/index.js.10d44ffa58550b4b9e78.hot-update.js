webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TopstoriesContent.js":
/*!*****************************************!*\
  !*** ./components/TopstoriesContent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/jonathanconcepcion/Documents/next-js-proj/topstories/components/TopstoriesContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\t\tmargin: 10px 35px 10px 10px;\n\n\t\th2 {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 35px;\n\t\t\tcolor: rgb(240, 79, 60);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 18px;\n\t\t\tfont-weight: 400;\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 42px 0;\n\t\t}\n\n\t\tp a {\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\tfont-size: 22px;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: #333;\n\t\t\tborder: solid 1px #333;\n\t\t\tpadding: 10px;\n\t\t}\n\n\t\tp a:visited {\n\t\t\tcolor: #333;\n\t\t}\n\t\t@media only screen and (max-width: 767px) {\n\t\t\tmargin: -45px 0px 0px 0px;\n\t\t\tpadding: 14px;\n\t\t\tbackground-image: linear-gradient(\n\t\t\t\tto bottom,\n\t\t\t\trgba(0, 0, 0, 0.2),\n\t\t\t\trgba(0, 0, 0, 1),\n\t\t\t\trgba(0, 0, 0, 1),\n\t\t\t\trgba(0, 0, 0, 1),\n\t\t\t\trgba(0, 0, 0, 1)\n\t\t\t);\n\t\t\th2 {\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\t\t\th3 {\n\t\t\t\tfont-size: 14px;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t\tp {\n\t\t\t\tmargin: 35px 0 52px 0;\n\t\t\t}\n\t\t\tp a {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcolor: #fff;\n\t\t\t\tborder: solid 1px #fff;\n\t\t\t}\n\n\t\t\tp a:visited {\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t}\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\t\twidth: 640px;\n\t\theight: 360px;\n\t\t@media only screen and (max-width: 767px) {\n\t\t\twidth: 100%;\n\t\t\theight: unset;\n\t\t}\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\t\tmax-width: 640px;\n\t\tmin-height: 360px;\n\t\tpadding: 24px;\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t&&::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tbackground-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n\t\t\t\topacity: 0.7;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\t\t\tpadding: 0px;\n\t\t\tmin-height: unset;\n\t\t}\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\t\t@font-face {\n\t\t\tsrc: url(https://fonts.googleapis.com/css?family=Roboto&display=swap);\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\twidth: 100%;\n\t\tmargin: 8px 0;\n\t\tbackground-color: rgb(235, 237, 255);\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\tflex-direction: column;\n\t\t}\n\t"]);

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
  var TopStoriesItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
  var TopStoriesImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
  var TopStoriesImage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject3());
  var TopStoriesTxtWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
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
  }; // const getTopStories = props.data.data.map(items => {
  // 	const finalUrl = `https://www.rappler.com${items.url}`;
  // 	const articleID = items.id;
  // 	const imgPath = items.images[0].tn;
  // 	const img = new URL(imgPath).pathname;
  // 	return (
  // 		<TopStoriesItemWrapper key={articleID}>
  // 			<TopStoriesImageWrapper>
  // 				<TopStoriesImage src={`https://assets.rappler.com${img}`} alt='' />
  // 			</TopStoriesImageWrapper>
  // 			<TopStoriesTxtWrapper>
  // 				<h2>{items.title}</h2>
  // 				<h3>{items.metadesc}</h3>
  // 				<p>
  // 					<a href={finalUrl} target='_blank' rel='noopener noreferrer'>
  // 						Read More
  // 					</a>
  // 				</p>
  // 			</TopStoriesTxtWrapper>
  // 		</TopStoriesItemWrapper>
  // 	);
  // });

  return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "1"));
};

TopstoriesContent.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('https://svc.rappler.com/p/topstories'));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.data);

        case 6:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", {
            data: data
          });

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          // eslint-disable-next-line no-console
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

/* harmony default export */ __webpack_exports__["default"] = (TopstoriesContent);

/***/ })

})
//# sourceMappingURL=index.js.10d44ffa58550b4b9e78.hot-update.js.map