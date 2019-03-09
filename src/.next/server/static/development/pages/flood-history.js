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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/flood-history.js":
/*!********************************!*\
  !*** ./pages/flood-history.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/bar */ "@nivo/bar");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wisdom/Documents/OCA/Open-Cities-Accra-master/src/pages/flood-history.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var data = [{
  "suburb": "Alogboshie",
  "Keen_deep_(30-50CM)": 71,
  "Keen_deep_(30-50CMColor": "rgb(0, 136, 136)",
  "Chest_deep_(1-1.5M)": 140,
  "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
  "Waist_deep_(60cm-1m)": 199,
  "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
  "SchoPerson_height_(1.5-2M)": 136,
  "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
  "Other": 181,
  "OtherColor": "rgb(128, 128, 128)"
}, {
  "suburb": "Akweteman",
  "Keen_deep_(30-50CM)": 61,
  "Keen_deep_(30-50CM)Color": "rgb(0, 136, 136)",
  "Chest_deep_(1-1.5M)": 143,
  "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
  "Waist_deep_(60cm-1m)": 63,
  "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
  "Person_height_(1.5-2M)": 6,
  "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
  "Other": 65,
  "OtherColor": "rgb(128, 128, 128)"
}, {
  "suburb": "Alajo",
  "Keen_deep_(30-50CM)": 111,
  "Keen_deep_(30-50CM)Color": "rgb(0, 136, 136)",
  "Chest_deep_(1-1.5M)": 51,
  "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
  "Waist_deep_(60cm-1m)": 44,
  "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
  "Person_height_(1.5-2M)": 110,
  "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
  "Other": 145,
  "OtherColor": "rgb(128, 128, 128)"
}, {
  "suburb": "Nima",
  "Keen_deep_(30-50CM)": 133,
  "Keen_deep_(30-50CM)Color": "rgb(0, 136, 136)",
  "Chest_deep_(1-1.5M)": 125,
  "Chest_deep_(1-1.5M)Color": "rgb(102, 102, 0)",
  "Waist_deep_(60cm-1m)": 194,
  "Waist_deep_(60cm-1m)Color": "rgb(255, 192, 203)",
  "Person_height_(1.5-2M)": 92,
  "Person_height_(1.5-2M)Color": "rgb(128, 0, 128)",
  "Other": 124,
  "OtherColor": "rgb(128, 128, 128)"
}];

var FloodHistory =
/*#__PURE__*/
function (_Component) {
  _inherits(FloodHistory, _Component);

  function FloodHistory(props) {
    var _this;

    _classCallCheck(this, FloodHistory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FloodHistory).call(this, props));
    _this.state = {
      render: false
    };
    return _this;
  }

  _createClass(FloodHistory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        render: true
      });
      mapboxgl.accessToken = "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg";
    }
  }, {
    key: "render",
    value: function render() {
      var map = this.state.render && new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 15.4,
        center: [-0.23250, 5.62990]
      });
      this.state.render && map.addControl(new mapboxgl.NavigationControl());
      this.state.render && map.on("load", function () {
        // Add a layer showing the state polygons.
        map.addLayer({
          'id': 'flood',
          'type': 'circle',
          'source': {
            'type': 'geojson',
            'data': "/static/data/alogboshie_flod_history .geojson"
          },
          'paint': {
            'circle-color': ['match', ['get', 'flood_history.flood_depth'], 'Keen_deep_(30-50CM)', 'rgb(0, 136, 136)', 'Chest_deep_(1-1.5M)', 'rgb(102, 102, 0)', 'Waist_deep_(60cm-1m)', 'rgb(255, 192, 203)', 'Person_height_(1.5-2M)', 'rgb(128, 0, 128)',
            /* other */
            'rgb(128, 128, 128)'],
            'circle-radius': 10
          }
        });
        map.on('click', 'flood', function (e) {
          new mapboxgl.Popup().setLngLat(e.lngLat).setHTML("\n          <table width=\"350\">\n          <tbody>\n          ".concat(e.features[0].properties["experienced_flood"] && "<tr>\n            <th>experienced flood</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["experienced_flood"], "\n            </td>\n            </tr>") || "", "\n          ").concat(e.features[0].properties["flood_history.flood_cause"] && "<tr>\n            <th>Flood Cause</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["flood_history.flood_cause"], "\n            </td>\n            </tr>") || "", "\n        \n          ").concat(e.features[0].properties["flood_history.flood_event.flood_year"] && "<tr>\n            <th>Flood Year</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["flood_history.flood_event.flood_year"], "\n            </td>\n            </tr>") || "", "\n            ").concat(e.features[0].properties["dwelling_type"] && "<tr>\n              <th>Dwelling Type</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["dwelling_type"], "\n              </td>\n              </tr>") || "", "\n\n            ").concat(e.features[0].properties["building_use"] && "<tr>\n              <th>Building Use</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["building_use"], "\n              </td>\n              </tr>") || "", "\n\n            ").concat(e.features[0].properties["years_in_house"] && "<tr>\n              <th>Years in house </Useth>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["years_in_house"], "\n              </td>\n              </tr>") || "", "\n        \n            ").concat(e.features[0].properties["flood_history.flood_depth"] && "<tr>\n              <th>Flood Depth</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["flood_history.flood_depth"], "\n              </td>\n              </tr>") || "", "\n            ").concat(e.features[0].properties["address.landmark"] && "<tr>\n              <th>Land Mark</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["address.landmark"], "\n              </td>\n              </tr>") || "", "\n        \n          ").concat(e.features[0].properties["moved_house"] && "<tr>\n            <th>Moved House</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["moved_house"], "\n            </td>\n            </tr>") || "", "\n        \n          ").concat(e.features[0].properties["moved_year"] && "<tr>\n            <th>Moved Year</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["moved_year"], "\n            </td>\n            </tr>") || "", "\n            </tbody>\n            </table>")).addTo(map);
        }); // Change the cursor to a pointer when the mouse is over the states layer.

        map.on('mouseenter', 'flood', function () {
          map.getCanvas().style.cursor = 'pointer';
        }); // Change it back to a pointer when it leaves.

        map.on('mouseleave', 'flood', function () {
          map.getCanvas().style.cursor = '';
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          marginTop: "0.8em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "home-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "FLOOD HISTORY-ALOGBOSHIE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control mb-3 mr-3 w-100 rounded",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "-- Select Community --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Akweteyman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Alogboshie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Alajo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Nima")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled rounded bg-sidebar shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group btn-group-lg w-100 rounded",
        role: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/flood-history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Flood History")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/drainage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Drainage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/buildings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Buildings"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2 px-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border my-3",
        style: {
          height: "400px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBar"], {
        data: data,
        keys: ["Keen_deep_(30-50CM)", "Chest_deep_(1-1.5M)", "Waist_deep_(60cm-1m)", "Person_height_(1.5-2M)", "Other"],
        indexBy: "suburb",
        margin: {
          "top": 50,
          "right": 110,
          "bottom": 50,
          "left": 50
        },
        padding: 0.3,
        colors: "nivo",
        colorBy: function colorBy(e) {
          var t = e.id;
          return e.data["".concat(t, "Color")];
        },
        defs: [{
          "id": "dots",
          "type": "patternDots",
          "background": "inherit",
          "color": '({ id, data }) => data[`${id}Color`]',
          "size": 4,
          "padding": 1,
          "stagger": true
        }, {
          "id": "lines",
          "type": "patternLines",
          "background": "inherit",
          "color": "#eed312",
          "rotation": -45,
          "lineWidth": 6,
          "spacing": 10
        }],
        fill: [{
          "match": {
            "id": "fries"
          },
          "id": "dots"
        }, {
          "match": {
            "id": "sandwich"
          },
          "id": "lines"
        }],
        borderColor: "inherit:darker(1.6)",
        axisTop: null,
        axisRight: null,
        axisBottom: {
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "suburb",
          "legendPosition": "middle",
          "legendOffset": 32
        },
        axisLeft: {
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "building type",
          "legendPosition": "middle",
          "legendOffset": -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          "dataFrom": "keys",
          "anchor": "bottom-right",
          "direction": "column",
          "justify": false,
          "translateX": 120,
          "translateY": 0,
          "itemsSpacing": 2,
          "itemWidth": 100,
          "itemHeight": 20,
          "itemDirection": "left-to-right",
          "itemOpacity": 0.85,
          "symbolSize": 20,
          "effects": [{
            "on": "hover",
            "style": {
              "itemOpacity": 1
            }
          }]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control mb-3 text-center rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "-- Select to Download --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, "All Buildings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, "All Data"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-dark px-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "900px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "Population"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "state-legend",
        class: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, "Flood Depth"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(0, 136, 136)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }), "Keen_deep_(30-50CM)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(102, 102, 0)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }), "Chest_deep_(1-1.5M)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(255, 192, 203)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }), "Waist_deep_(60cm-1m)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(128, 0, 128)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }), "Person_height_(1.5-2M)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(128, 128, 128)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }), "Other")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "http://mobilewebghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.osmghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.hotosm.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        style: {
          width: "800px !important"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/hot.png",
        className: "hot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      })))))))));
    }
  }]);

  return FloodHistory;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FloodHistory);

/***/ }),

/***/ 6:
/*!**************************************!*\
  !*** multi ./pages/flood-history.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/flood-history.js */"./pages/flood-history.js");


/***/ }),

/***/ "@nivo/bar":
/*!****************************!*\
  !*** external "@nivo/bar" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nivo/bar");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=flood-history.js.map