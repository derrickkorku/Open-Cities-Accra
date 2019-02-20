webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "../node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/wisdom/Documents/OCA/Open-Cities-Accra-master/src/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};

var base_url = "https://ocav1-app.herokuapp.com" || "http://localhost:5000";

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      floodData: null,
      buildingData: null,
      drainageData: null,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.63589,
        longitude: -0.23602,
        zoom: 15.6
      },
      popupInfo: null,
      floodPopupInfo: null,
      placeInfo: null,
      floodPlaceInfo: null
    };
    _this.renderPopup = _this.renderPopup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(base_url + "/static/data/alogboshie_waterways.geojson", {
        Accept: "application/geojson",
        "Content-Type": "application/geojson",
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'application/geojson'
      }).then(function (buildingsRes) {
        return buildingsRes.json();
      }).then(function (buildingData) {
        _this2.setState({
          buildingData: buildingData
        });
      });
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(base_url + "/static/data/alogboshie_waterways.geojson", {
        Accept: "application/geojson",
        "Content-Type": "application/geojson",
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'application/geojson'
      }).then(function (drainageRes) {
        return drainageRes.json();
      }).then(function (drainageData) {
        _this2.setState({
          drainageData: drainageData
        });
      });
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(base_url + "/static/data/alogboshie_flod_history.geojson", {
        Accept: "application/geojson",
        "Content-Type": "application/geojson",
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'application/geojson'
      }).then(function (floodRes) {
        return floodRes.json();
      }).then(function (floodData) {
        _this2.setState({
          floodData: floodData
        });
      });
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      var _this3 = this;

      console.log(this.state.placeInfo);
      return this.state.popupInfo && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        tipSize: 10,
        anchor: "bottom-right",
        longitude: this.state.popupInfo.state.longitude,
        latitude: this.state.popupInfo.state.latitude,
        onClose: function onClose() {
          return _this3.setState({
            popupInfo: null
          });
        },
        closeOnClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        width: "300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Community"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, this.state.placeInfo.community)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        tyle: {
          width: "80px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Building material"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, this.state.placeInfo.building_material)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Roof material"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.state.placeInfo.roof_material)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Building"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.placeInfo.building)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "suburb"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, this.state.placeInfo.suburb)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "street"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, this.state.placeInfo.street)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "City"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, this.state.placeInfo.city)))));
    }
  }, {
    key: "renderFloodPopup",
    value: function renderFloodPopup() {
      var _this4 = this;

      return this.state.floodPopupInfo && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        tipSize: 10,
        anchor: "bottom-right",
        longitude: this.state.floodPopupInfo.state.longitude,
        latitude: this.state.floodPopupInfo.state.latitude,
        onClose: function onClose() {
          return _this4.setState({
            floodPopupInfo: null
          });
        },
        closeOnClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        width: "400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "experienced_flood"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, this.state.floodPlaceInfo.experienced_flood)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        tyle: {
          width: "80px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "suburb"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, this.state.floodPlaceInfo.suburb)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "flood_cause"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, this.state.floodPlaceInfo.flood_cause)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "flood_year"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, this.state.floodPlaceInfo.flood_year)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "dwelling_type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, this.state.floodPlaceInfo.dwelling_type)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "flood_depth"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, this.state.floodPlaceInfo.flood_depth)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "landmark"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, this.state.floodPlaceInfo.landmark)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "moved_house"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, this.state.floodPlaceInfo.moved_house)), this.state.floodPlaceInfo.moved_house === "yes" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "moved_year"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, this.state.floodPlaceInfo.moved_year)))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container-fluid mt-3 mr-10 ml-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          marginTop: "0.8em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "home-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "ALOGBOSHIE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "form-control mb-3 mr-3 w-100 rounded",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "-- Select Community --"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Akweteyman"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Alogboshie"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Alajo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Nima")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row index-pg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-unstyled px-3 py-3 rounded bg-sidebar shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/buildings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-lg btn-block btn-light rounded p-home-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fas fa-home fa-2x fa-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }), "Building"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/flood-history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-lg btn-block btn-light rounded p-home-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fab fa-fort-awesome-alt fa-2x fa-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), "Flood History"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/drainage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-lg btn-block btn-lg btn-light rounded p-home-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fab fa-schlix fa-2x fa-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), "Drainage Points")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-dark btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "700px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        mapboxApiAccessToken: "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
      }, this.state.viewport, {
        mapStyle: "mapbox://styles/mapbox/streets-v9",
        onViewportChange: function onViewportChange(viewport) {
          return _this5.setState({
            viewport: viewport
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }), this.state.buildingData && this.state.buildingData.features.map(function (value) {
        return value.geometry.coordinates.map(function (val, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
            latitude: val[index][1],
            longitude: val[index][0],
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 314
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "../static/img/home.png",
            width: "20",
            height: "20",
            onClick: function onClick() {
              console.log("hhhheheheheh");

              _this5.setState({
                popupInfo: {
                  state: {
                    longitude: val[index][0],
                    latitude: val[index][1]
                  }
                },
                placeInfo: {
                  community: value.properties["addr:community"],
                  building_material: value.properties["building:material"] || null,
                  roof_material: value.properties["roof:material"] || null,
                  street: value.properties["addr:street"] || null,
                  suburb: value.properties["addr:suburb"] || null,
                  building: value.properties["building"] || null,
                  city: value.properties["addr:city"] || null
                }
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            },
            __self: this
          }));
        });
      }), this.state.drainageData && this.state.drainageData.features.map(function (value) {
        return value.geometry.coordinates.map(function (val, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
            latitude: val[1],
            longitude: val[0],
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 358
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "../static/img/river.png",
            width: "17",
            height: "17",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            },
            __self: this
          }));
        });
      }), this.state.floodData && this.state.floodData.features.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
          latitude: value.geometry.coordinates[1],
          longitude: value.geometry.coordinates[0],
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "../static/img/flood.png",
          style: {
            backgroundColor: "gray"
          },
          width: "17",
          height: "15",
          onClick: function onClick() {
            _this5.setState({
              floodPopupInfo: {
                state: {
                  longitude: value.geometry.coordinates[0],
                  latitude: value.geometry.coordinates[1]
                }
              },
              floodPlaceInfo: {
                experienced_flood: value.properties["experienced_flood"],
                suburb: value.properties["address.suburb"] || null,
                flood_cause: value.properties["flood_history.flood_cause"] || null,
                flood_year: value.properties["flood_history.flood_event.flood_year"] || null,
                dwelling_type: value.properties["dwelling_type"] || null,
                flood_depth: value.properties["flood_history.flood_depth"] || null,
                landmark: value.properties["address.landmark"] || null,
                moved_house: value.properties["moved_house"] || null,
                moved_year: value.properties["moved_year"] || null
              }
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "nav",
        style: navStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["NavigationControl"], {
        onViewportChange: function onViewportChange(viewport) {
          return _this5.setState({
            viewport: viewport
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      })), this.renderPopup(), this.renderFloodPopup()))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-inline py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "http://mobilewebghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "https://www.osmghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "https://www.hotosm.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/img/partners/hot.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      })))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var drainageRes, drainageData, buildingsRes, buildingData, floodRes, floodData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(base_url + "/static/data/alogboshie_waterways.geojson");

              case 2:
                drainageRes = _context.sent;
                _context.next = 5;
                return drainageRes.json();

              case 5:
                drainageData = _context.sent;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(base_url + "/static/data/derrick.json");

              case 8:
                buildingsRes = _context.sent;
                _context.next = 11;
                return buildingsRes.json();

              case 11:
                buildingData = _context.sent;
                _context.next = 14;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(base_url + "/static/data/alogboshie_flod_history.geojson");

              case 14:
                floodRes = _context.sent;
                _context.next = 17;
                return floodRes.json();

              case 17:
                floodData = _context.sent;
                return _context.abrupt("return", {
                  buildingData: buildingData,
                  drainageData: drainageData,
                  floodData: floodData
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.eacd2b9eb1be46ae86fb.hot-update.js.map