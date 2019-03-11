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
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/bar */ "../node_modules/@nivo/bar/index.js");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/download */ "./components/download.js");
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
  suburb: "Alogboshie",
  "Knee deep (30-50cm)": 111,
  "Keen deep (30-50cm)Color": "rgb(0, 136, 136)",
  "Chest deep (100-150cm)": 51,
  "Chest deep (100-150cm)Color": "rgb(102, 102, 0)",
  "Waist deep (60cm-100cm)": 44,
  "Waist deep (60cm-100cm)Color": "rgb(255, 192, 203)",
  "Person height (150-200cm)": 110,
  "Person height (150-200cm)Color": "rgb(128, 0, 128)",
  "Other (not measured)": 145,
  "Other (not measured)Color": "rgb(128, 128, 128)"
}, {
  suburb: "Akweteman",
  "Knee deep (30-50cm)": 51,
  "Keen deep (30-50CM)Color": "rgb(0, 136, 136)",
  "Chest deep (100-150cm)": 111,
  "Chest deep (100-150cm)Color": "rgb(102, 102, 0)",
  "Waist deep (60cm-100cm)": 110,
  "Waist deep (60cm-100cm)Color": "rgb(255, 192, 203)",
  "Person height (150-200cm)": 44,
  "Person height (150-200cm)Color": "rgb(128, 0, 128)",
  "Other (not measured)": 135,
  "Other (not measured)Color": "rgb(128, 128, 128)"
}, {
  suburb: "Alajo",
  "Knee deep (30-50cm)": 101,
  "Keen deep (30-50CM)Color": "rgb(0, 136, 136)",
  "Chest deep (100-150cm)": 61,
  "Chest deep (100-150cm)Color": "rgb(102, 102, 0)",
  "Waist deep (60cm-100cm)": 84,
  "Waist deep (60cm-100cm)Color": "rgb(255, 192, 203)",
  "Person height (150-200cm)": 109,
  "Person height (150-200cm)Color": "rgb(128, 0, 128)",
  "Other (not measured)": 135,
  "Other (not measured)Color": "rgb(128, 128, 128)"
}, {
  suburb: "Nima",
  "Knee deep (30-50cm)": 111,
  "Knee deep (30-50CM)Color": "rgb(0, 136, 136)",
  "Chest deep (100-150cm)": 51,
  "Chest deep (100-150cm)Color": "rgb(102, 102, 0)",
  "Waist deep (60cm-100cm)": 44,
  "Waist deep (60cm-100cm)Color": "rgb(255, 192, 203)",
  "Person height (150-200cm)": 110,
  "Person height (150-200cm)Color": "rgb(128, 0, 128)",
  "Other (not measured)": 145,
  "Other (not measured)Color": "rgb(128, 128, 128)"
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
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 15.4,
        center: [-0.2325, 5.6299]
      });
      this.state.render && map.addControl(new mapboxgl.NavigationControl());
      this.state.render && map.on("load", function () {
        // Add a layer showing the state polygons.
        map.addLayer({
          id: "flood",
          type: "circle",
          source: {
            type: "geojson",
            data: "/static/data/alogboshie_flod_history .geojson"
          },
          paint: {
            "circle-color": ["match", ["get", "flood_history.flood_depth"], "Keen_deep_(30-50CM)", "rgb(0, 136, 136)", "Chest_deep_(1-1.5M)", "rgb(102, 102, 0)", "Waist_deep_(60cm-1m)", "rgb(255, 192, 203)", "Person_height_(1.5-2M)", "rgb(128, 0, 128)",
            /* other */
            "rgb(128, 128, 128)"],
            "circle-radius": 10
          }
        });
        map.on("click", "flood", function (e) {
          new mapboxgl.Popup().setLngLat(e.lngLat).setHTML("\n          <table width=\"350\">\n          <tbody>\n          ".concat(e.features[0].properties["experienced_flood"] && "<tr>\n            <th>experienced flood</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["experienced_flood"], "\n            </td>\n            </tr>") || "", "\n          ").concat(e.features[0].properties["flood_history.flood_cause"] && "<tr>\n            <th>Flood Cause</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["flood_history.flood_cause"], "\n            </td>\n            </tr>") || "", "\n        \n          ").concat(e.features[0].properties["flood_history.flood_event.flood_year"] && "<tr>\n            <th>Flood Year</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["flood_history.flood_event.flood_year"], "\n            </td>\n            </tr>") || "", "\n            ").concat(e.features[0].properties["dwelling_type"] && "<tr>\n              <th>Dwelling Type</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["dwelling_type"], "\n              </td>\n              </tr>") || "", "\n\n            ").concat(e.features[0].properties["building_use"] && "<tr>\n              <th>Building Use</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["building_use"], "\n              </td>\n              </tr>") || "", "\n\n            ").concat(e.features[0].properties["years_in_house"] && "<tr>\n              <th>Years in house </Useth>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["years_in_house"], "\n              </td>\n              </tr>") || "", "\n        \n            ").concat(e.features[0].properties["flood_history.flood_depth"] && "<tr>\n              <th>Flood Depth</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["flood_history.flood_depth"], "\n              </td>\n              </tr>") || "", "\n            ").concat(e.features[0].properties["address.landmark"] && "<tr>\n              <th>Land Mark</th>\n              <td style={{ paddingLeft: \"5px\" }}>\n              ".concat(e.features[0].properties["address.landmark"], "\n              </td>\n              </tr>") || "", "\n        \n          ").concat(e.features[0].properties["moved_house"] && "<tr>\n            <th>Moved House</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["moved_house"], "\n            </td>\n            </tr>") || "", "\n        \n          ").concat(e.features[0].properties["moved_year"] && "<tr>\n            <th>Moved Year</th>\n            <td style={{ paddingLeft: \"5px\" }}>\n            ".concat(e.features[0].properties["moved_year"], "\n            </td>\n            </tr>") || "", "\n            </tbody>\n            </table>")).addTo(map);
        }); // Change the cursor to a pointer when the mouse is over the states layer.

        map.on("mouseenter", "flood", function () {
          map.getCanvas().style.cursor = "pointer";
        }); // Change it back to a pointer when it leaves.

        map.on("mouseleave", "flood", function () {
          map.getCanvas().style.cursor = "";
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          marginTop: "0.8em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "home-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "FLOOD HISTORY-ALOGBOSHIE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
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
          lineNumber: 244
        },
        __self: this
      }, "-- Select Community --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Akweteyman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Alogboshie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Alajo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Nima")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled rounded bg-sidebar shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group btn-group-lg w-100 rounded",
        role: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/flood-history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Flood History")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/drainage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "Drainage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/buildings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Buildings"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2 px-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border my-3",
        style: {
          height: "400px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBar"], {
        data: data,
        keys: ["Knee deep", "Waist deep", "Chest deep", "Person height", "Other(not measured)"],
        indexBy: "suburb",
        margin: {
          top: 50,
          right: 140,
          bottom: 50,
          left: 45
        },
        padding: 0.3,
        colors: "nivo",
        colorBy: function colorBy(e) {
          var t = e.id;
          return e.data["".concat(t, "Color")];
        },
        defs: [{
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "({ id, data }) => data[`${id}Color`]",
          size: 4,
          padding: 1,
          stagger: true
        }, {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: "fries"
          },
          id: "dots"
        }, {
          match: {
            id: "sandwich"
          },
          id: "lines"
        }],
        borderColor: "inherit:darker(1.6)",
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "suburb",
          legendPosition: "middle",
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "building type",
          legendPosition: "middle",
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: "inherit:darker(1.6)",
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{
            on: "hover",
            style: {
              itemOpacity: 1
            }
          }]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_download__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-dark px-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "900px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Population"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "state-legend",
        class: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "Flood Depth"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(0, 136, 136)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }), "Knee deep (30-50cm)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
          lineNumber: 403
        },
        __self: this
      }), "Waist deep (60cm-100cm)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(102, 102, 0)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }), "Chest deep (100-150cm)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(128, 0, 128)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }), "Person height (150-200cm)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(128, 128, 128)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }), "Other (not measured)")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "http://mobilewebghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.osmghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.hotosm.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        style: {
          width: "800px !important"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/hot.png",
        className: "hot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
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
//# sourceMappingURL=flood-history.js.e62bfec32ddd10988ce0.hot-update.js.map