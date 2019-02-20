webpackHotUpdate("static/development/pages/flood-history.js",{

/***/ "./pages/flood-history.js":
/*!********************************!*\
  !*** ./pages/flood-history.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "../node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/wisdom/Documents/OCA/Open-Cities-Accra-master/src/pages/flood-history.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var FloodHistory =
/*#__PURE__*/
function (_Component) {
  _inherits(FloodHistory, _Component);

  function FloodHistory(props) {
    var _this;

    _classCallCheck(this, FloodHistory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FloodHistory).call(this, props));
    _this.state = {
      floodData: null,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.6239636,
        longitude: -0.2332194,
        zoom: 15.6,
        bearing: 9.6,
        pitch: 60,
        opacity: 1
      },
      popupInfo: null,
      placeInfo: null
    };
    _this.renderPopup = _this.renderPopup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FloodHistory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(base_url + "/static/data/alogboshie_flod_history.geojson").then(function (floodRes) {
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
      return this.state.popupInfo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
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
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "experienced_flood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.state.placeInfo.experienced_flood)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        tyle: {
          width: "80px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "suburb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.placeInfo.suburb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "flood_cause"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, this.state.placeInfo.flood_cause)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "flood_year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, this.state.placeInfo.flood_year)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "dwelling_type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.state.placeInfo.dwelling_type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "flood_depth"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.state.placeInfo.flood_depth)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "landmark"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.state.placeInfo.landmark)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "moved_house"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.state.placeInfo.moved_house)), this.state.placeInfo.moved_house === "yes" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "moved_year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.state.placeInfo.moved_year)))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          marginTop: "0.8em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "home-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "FLOOD HISTORY-ALOGBOSHIE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control mb-3 mr-3 w-100 rounded",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "-- Select Community --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Akweteyman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Alogboshie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Alajo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Nima")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled rounded bg-sidebar shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group btn-group-lg w-100 rounded",
        role: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/flood-history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Flood History")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/drainage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Drainage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/buildings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Buildings"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2 px-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border my-3",
        style: {
          height: "400px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Summary chart and legends here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control mb-3 text-center rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "-- Select to Download --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "All Buildings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "All Data"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-dark px-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "600px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        mapboxApiAccessToken: "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
      }, this.state.viewport, {
        mapStyle: "mapbox://styles/mapbox/streets-v9",
        onViewportChange: function onViewportChange(viewport) {
          return _this4.setState({
            viewport: viewport
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), this.state.floodData && this.state.floodData.features.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
          latitude: value.geometry.coordinates[1],
          longitude: value.geometry.coordinates[0],
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "../static/img/flood.png",
          width: "17",
          height: "15",
          style: {
            backgroundColor: "gray"
          },
          onClick: function onClick() {
            _this4.setState({
              popupInfo: {
                state: {
                  longitude: value.geometry.coordinates[0],
                  latitude: value.geometry.coordinates[1]
                }
              },
              placeInfo: {
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
            lineNumber: 210
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav",
        style: navStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["NavigationControl"], {
        onViewportChange: function onViewportChange(viewport) {
          return _this4.setState({
            viewport: viewport
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      })), this.renderPopup()))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "http://mobilewebghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.osmghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.hotosm.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/hot.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      })))))))));
    }
  }]);

  return FloodHistory;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FloodHistory);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/flood-history")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=flood-history.js.dc917dd7e2f098ffc525.hot-update.js.map