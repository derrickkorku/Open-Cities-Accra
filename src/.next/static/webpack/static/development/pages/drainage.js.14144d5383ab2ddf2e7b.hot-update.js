webpackHotUpdate("static/development/pages/drainage.js",{

/***/ "./pages/drainage.js":
/*!***************************!*\
  !*** ./pages/drainage.js ***!
  \***************************/
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
var _jsxFileName = "/home/wisdom/Documents/OCA/Open-Cities-Accra-master/src/pages/drainage.js";


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
  Covered: 69,
  CoveredColor: "rgb(0, 0, 255)",
  "Not covered": 23,
  "Not CoveredColor": "rgb(255, 0, 0)",
  "Not Known": 53,
  "Not KnownColor": "rgb(0, 128, 0)"
}, {
  suburb: "Akweteman",
  Covered: 61,
  CoveredColor: "rgb(0, 0, 255)",
  "Not Covered": 43,
  "Not CoveredColor": "rgb(255, 0, 0)",
  "Not Known": 63,
  "Not KnownColor": "rgb(0, 128, 0)"
}, {
  suburb: "Alajo",
  Covered: 41,
  CoveredColor: "rgb(0, 0, 255)",
  "Not Covered": 73,
  "Not CoveredColor": "rgb(255, 0, 0)",
  "Not Known": 83,
  "Not KnownColor": "rgb(0, 128, 0)"
}, {
  suburb: "Nima",
  Covered: 69,
  CoveredColor: "rgb(0, 0, 255)",
  "Not Covered": 23,
  "Not CoveredColor": "rgb(255, 0, 0)",
  "Not Known": 33,
  "Not KnownColor": "rgb(0, 128, 0)"
}];

var Drainage =
/*#__PURE__*/
function (_Component) {
  _inherits(Drainage, _Component);

  function Drainage(props) {
    var _this;

    _classCallCheck(this, Drainage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drainage).call(this, props));
    _this.state = {
      drainageData: null,
      render: false,
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.6299636,
        longitude: -0.2302194,
        zoom: 16.1,
        bearing: 9.6,
        pitch: 60,
        opacity: 1,
        boxZoom: false
      }
    };
    return _this;
  }

  _createClass(Drainage, [{
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
        zoom: 17,
        center: [-0.2325, 5.6262]
      });
      this.state.render && map.addControl(new mapboxgl.NavigationControl());
      this.state.render && map.on("load", function () {
        // Add a layer showing the state polygons.
        map.addLayer({
          id: "drainage",
          type: "line",
          source: {
            type: "geojson",
            data: "/static/data/alogboshie_waterways.geojson"
          },
          paint: {
            "line-color": ["match", ["get", "drain:profile_covered"], "no", "red", "yes", "blue", "green"],
            "line-width": 3
          }
        }); // When a click event occurs on a feature in the states layer, open a popup at the
        // location of the click, with description HTML from its properties.

        map.on("click", "drainage", function (e) {
          new mapboxgl.Popup().setLngLat(e.lngLat).setHTML("\n  <table width=\"350\">\n  <tbody>\n  ".concat(e.features[0].properties["width"] && "<tr>\n    <th>Width</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["width"], "\n    </td>\n    </tr>") || "", "\n  ").concat(e.features[0].properties["waterway"] && "<tr>\n    <th>Waterway</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["waterway"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["depth"] && "<tr>\n    <th>Depth</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["depth"], "\n    </td>\n    </tr>") || "", "\n    ").concat(e.features[0].properties["drain:cover_type"] && "<tr>\n      <th>Cover Type</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["drain:cover_type"], "\n      </td>\n      </tr>") || "", "\n\n    ").concat(e.features[0].properties["drain:ele"] && "<tr>\n      <th>Ele</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["drain:ele"], "\n      </td>\n      </tr>") || "", "\n    ").concat(e.features[0].properties["drain:material"] && "<tr>\n      <th>Drain material</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["drain:material"], "\n      </td>\n      </tr>") || "", "\n\n  ").concat(e.features[0].properties["drain:material_smoothness"] && "<tr>\n    <th>Material Smoothnes</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["drain:material_smoothness"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["drain:profile_covered"] && "<tr>\n    <th>Profile Covered</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["drain:profile_covered"], "\n    </td>\n    </tr>") || "", "\n\n\n  ").concat(e.features[0].properties["drain:profile_open"] && "<tr>\n    <th>Profile Open</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["drain:profile_open"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["layer"] && "<tr>\n    <th>Layer</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["layer"], "\n    </td>\n    </tr>") || "", "\n\n\n").concat(e.features[0].properties["reference:feature"] && "<tr>\n  <th>Reference Feature</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["reference:feature"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["reference:feature_type"] && "<tr>\n  <th>Reference Feature Type</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["reference:feature_type"], "\n  </td>\n  </tr>") || "", "\n").concat(e.features[0].properties["description"] && "<tr>\n  <th>Description</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["description"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["drain:point_feature"] && "<tr>\n  <th>Point Feature</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["drain:point_feature"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["tunnel"] && "<tr>\n  <th>Point Feature</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["tunnel"], "\n  </td>\n  </tr>") || "", "\n\n\n").concat(e.features[0].properties["source"] && "<tr>\n  <th>Source</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["source"], "\n  </td>\n  </tr>") || "", "\n    </tbody>\n    </table>")).addTo(map);
        }); // Change the cursor to a pointer when the mouse is over the states layer.

        map.on("mouseenter", "drainage", function () {
          map.getCanvas().style.cursor = "pointer";
        }); // Change it back to a pointer when it leaves.

        map.on("mouseleave", "drainage", function () {
          map.getCanvas().style.cursor = "";
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          minHeight: "6vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          marginTop: "0.8em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "home-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Map Visualisation of drainage for Alogboshie, Accra-Ghana"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control mb-3 mr-3 w-100 rounded",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "-- Select Community --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Akweteyman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Alogboshie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "Alajo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Nima")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled rounded bg-sidebar shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group btn-group-lg w-100 rounded",
        role: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/drainage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Drainage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/buildings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Buildings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/flood-history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Flood History"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2 px-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border my-3",
        style: {
          height: "400px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBar"], {
        data: data,
        keys: ["Covered", "Not Covered", "Not Known"],
        indexBy: "suburb",
        margin: {
          top: 50,
          right: 110,
          bottom: 50,
          left: 50
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
          legend: "Drain Covered",
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
          lineNumber: 331
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_download__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-dark px-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "90vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "state-legend",
        class: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "Drain Covered"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "blue"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }), "Covered"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }), "Not Covered"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }), "Not Known")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "http://mobilewebghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.osmghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.hotosm.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        style: {
          width: "800px !important"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/hot.png",
        className: "hot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      })))))))));
    }
  }]);

  return Drainage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Drainage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/drainage")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=drainage.js.14144d5383ab2ddf2e7b.hot-update.js.map