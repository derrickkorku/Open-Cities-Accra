webpackHotUpdate("static/development/pages/buildings.js",{

/***/ "./pages/buildings.js":
/*!****************************!*\
  !*** ./pages/buildings.js ***!
  \****************************/
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
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "../node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "../node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wisdom/Documents/OCA/Open-Cities-Accra-master/src/pages/buildings.js";


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
  Residential: 71,
  ResidentialColor: "rgba(0, 136, 136, 0.3)",
  Commercial: 140,
  CommercialColor: "rgba(255,0,0, 0.3)",
  Church: 199,
  ChurchColor: "rgba(128, 0, 128, 0.3)",
  School: 136,
  SchoolColor: "rgba(255, 255, 0, 0.4)",
  Other: 181,
  OtherColor: "rgba(0, 128, 0, 0.4)"
}, {
  suburb: "Akweteman",
  Residential: 61,
  ResidentialColor: "rgba(0, 136, 136, 0.3)",
  Commercial: 143,
  CommercialColor: "rgba(255,0,0, 0.3)",
  Church: 63,
  ChurchColor: "rgba(128, 0, 128, 0.3)",
  School: 6,
  SchoolColor: "rgba(255, 255, 0, 0.4)",
  Other: 65,
  OtherColor: "rgba(0, 128, 0, 0.4)"
}, {
  suburb: "Alajo",
  Residential: 111,
  ResidentialColor: "rgba(0, 136, 136, 0.3)",
  Commercial: 51,
  CommercialColor: "rgba(255,0,0, 0.3)",
  Church: 44,
  ChurchColor: "rgba(128, 0, 128, 0.3)",
  School: 110,
  SchoolColor: "rgba(255, 255, 0, 0.4)",
  Other: 145,
  OtherColor: "rgba(0, 128, 0, 0.4)"
}, {
  suburb: "Nima",
  Residential: 133,
  ResidentialColor: "rgba(0, 136, 136, 0.3)",
  Commercial: 125,
  CommercialColor: "rgba(255,0,0, 0.3)",
  Church: 194,
  ChurchColor: "rgba(128, 0, 128, 0.3)",
  School: 92,
  SchoolColor: "rgba(255, 255, 0, 0.4)",
  Other: 124,
  OtherColor: "rgba(0, 128, 0, 0.4)"
}];


var navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};


var Buildings =
/*#__PURE__*/
function (_Component) {
  _inherits(Buildings, _Component);

  function Buildings(props) {
    var _this;

    _classCallCheck(this, Buildings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Buildings).call(this, props));
    _this.state = {
      buildingData: null,
      render: false,
      buildings: "alogboshie_waterways.geojson",
      community: "Alogboshie",
      center: [-0.2325, 5.6262]
    };
    return _this;
  }

  _createClass(Buildings, [{
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
      var _this2 = this;

      var center = this.state.render && this.state.center;
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
          id: "buildings",
          type: "fill",
          source: {
            type: "geojson",
            data: "/static/data/alobgoshie-buildings.geojson"
          },
          layout: {},
          paint: {
            "fill-color": ["match", ["get", "building"], "residential", "#088", "commercial", "red", "commercial;residential", "pink", "church", "purple", "school", "yellow",
            /* other */
            "green"],
            "fill-opacity": 0.3
          }
        }); // When a click event occurs on a feature in the states layer, open a popup at the
        // location of the click, with description HTML from its properties.

        map.on("click", "buildings", function (e) {
          new mapboxgl.Popup().setLngLat(e.lngLat).setHTML("\n  <table width=\"300\">\n  <tbody>\n  ".concat(e.features[0].properties["name"] && "<tr>\n    <th>Name</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["name"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["building:levels"] && "<tr>\n    <th>Building Level</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["building:levels"], "\n    </td>\n    </tr>") || "", "\n    ").concat(e.features[0].properties["addr:community"] && "<tr>\n      <th>Community</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["addr:community"], "\n      </td>\n      </tr>") || "", "\n\n    ").concat(e.features[0].properties["building:material"] && "<tr>\n      <th>Building material</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["building:material"], "\n      </td>\n      </tr>") || "", "\n    ").concat(e.features[0].properties["roof:material"] && "<tr>\n      <th>Roof material</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["roof:material"], "\n      </td>\n      </tr>") || "", "\n\n  ").concat(e.features[0].properties["addr:street"] && "<tr>\n    <th>Street</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:street"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["addr:city"] && "<tr>\n    <th>City</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:city"], "\n    </td>\n    </tr>") || "", "\n\n\n  ").concat(e.features[0].properties["addr:suburb"] && "<tr>\n    <th>Suburb</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:suburb"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["addr:amenity"] && "<tr>\n    <th>Amenity</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:amenity"], "\n    </td>\n    </tr>") || "", "\n\n\n").concat(e.features[0].properties["religion"] && "<tr>\n  <th>Religion</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["religion"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["building"] && "<tr>\n  <th>Building</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["building"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["denomination"] && "<tr>\n  <th>Denomination</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["denomination"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["source"] && "<tr>\n  <th>Source</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["source"], "\n  </td>\n  </tr>") || "", "\n    </tbody>\n    </table>")).addTo(map);
        }); // Change the cursor to a pointer when the mouse is over the states layer.

        map.on("mouseenter", "buildings", function () {
          map.getCanvas().style.cursor = "pointer";
        }); // Change it back to a pointer when it leaves.

        map.on("mouseleave", "buildings", function () {
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
        style: {
          minHeight: "6vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2",
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "Map Visualisation of buildings for Alogboshie, Accra-Ghana"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control mb-3 mr-3 w-100 rounded",
        onChange: function onChange(e) {
          if (e.target.value === "Akweteyman") {
            _this2.setState({
              community: e.target.value,
              buildings: "akweteyman_waterways.geojson",
              center: [-0.2410443288160593, 5.6174037536466415]
            });
          } else {
            if (e.target.value === "Alogboshie") {
              _this2.setState({
                community: e.target.value,
                buildings: "alobgoshie-buildings.geojson",
                center: [-0.2325, 5.6262]
              });
            } else {
              return;
            }
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "-- Select Community --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Alogboshie",
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Alogboshie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Akweteyman",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "Akweteyman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Alajo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Alajo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Nima",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Nima")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled rounded bg-sidebar shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group btn-group-lg w-100 rounded",
        role: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/buildings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "Buildings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/flood-history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Flood History")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/drainage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-n1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "Drainage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "The buildings page displays the buildings data collected in a selected area of interest on the map. Here, you can explore the data collected on buildings in a selected area of interest according to the following subjects: type, purpose and materials used. You can also explore the data according to these subjects by viewing the bar graph on the left side of the page. Beneath that is the download button which allows users to download either buildings data alone or the entire dataset as a .GeoJSON file."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-2 px-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border my-3",
        style: {
          height: "400px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBar"], {
        data: data,
        keys: ["Residential", "Commercial", "Church", "School", "Other"],
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
          lineNumber: 357
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_download__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-dark px-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, "Contact"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "90vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "map",
        class: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, "Population"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "state-legend",
        class: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, "Buildings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgba(0, 136, 136, 0.3)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }), "Residential"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgba(255,0,0, 0.3)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }), "Commercial"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgb(0, 0, 0, 0.5)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }), "Commercial & Residential"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgba(128, 0, 128, 0.3)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }), "Church"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgba(255, 255, 0, 0.4)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }), "School"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "rgba(0, 128, 0, 0.4)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }), "Other")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "http://mobilewebghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.osmghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.hotosm.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        style: {
          width: "800px !important"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/hot.png",
        className: "hot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        __self: this
      })))))))));
    }
  }]);

  return Buildings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Buildings);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/buildings")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=buildings.js.edc64641ec061b96b0a4.hot-update.js.map