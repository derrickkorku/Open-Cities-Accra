webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/wisdom/Documents/OCA/Open-Cities-Accra-master/src/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




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
      render: false
    };
    return _this;
  }

  _createClass(Index, [{
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
        zoom: 17.3,
        center: [-0.23188090993107835, 5.6279210505577595]
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
            "fill-color": "#088",
            "fill-opacity": 0.2,
            "fill-outline-color": "red"
          }
        }); // When a click event occurs on a feature in the states layer, open a popup at the
        // location of the click, with description HTML from its properties.

        map.on("click", "buildings", function (e) {
          new mapboxgl.Popup().setLngLat(e.lngLat).setHTML("\n  <table width=\"300\">\n  <tbody>\n  ".concat(e.features[0].properties["name"] && "<tr>\n    <th>Name</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["name"], "\n    </td>\n    </tr>") || "", "\n    ").concat(e.features[0].properties["addr:community"] && "<tr>\n      <th>Community</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["addr:community"], "\n      </td>\n      </tr>") || "", "\n\n    ").concat(e.features[0].properties["building:material"] && "<tr>\n      <th>Building material</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["building:material"], "\n      </td>\n      </tr>") || "", "\n    ").concat(e.features[0].properties["roof:material"] && "<tr>\n      <th>Roof material</th>\n      <td style={{ paddingLeft: \"5px\" }}>\n      ".concat(e.features[0].properties["roof:material"], "\n      </td>\n      </tr>") || "", "\n\n  ").concat(e.features[0].properties["addr:street"] && "<tr>\n    <th>Street</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:street"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["addr:city"] && "<tr>\n    <th>City</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:city"], "\n    </td>\n    </tr>") || "", "\n\n\n  ").concat(e.features[0].properties["addr:suburb"] && "<tr>\n    <th>Suburb</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:suburb"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["addr:amenity"] && "<tr>\n    <th>Amenity</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["addr:amenity"], "\n    </td>\n    </tr>") || "", "\n\n\n").concat(e.features[0].properties["religion"] && "<tr>\n  <th>Religion</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["religion"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["building"] && "<tr>\n  <th>Building</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["building"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["denomination"] && "<tr>\n  <th>Denomination</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["denomination"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["source"] && "<tr>\n  <th>Source</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["source"], "\n  </td>\n  </tr>") || "", "\n    </tbody>\n    </table>")).addTo(map);
        }); // Change the cursor to a pointer when the mouse is over the states layer.

        map.on("mouseenter", "buildings", function () {
          map.getCanvas().style.cursor = "pointer";
        }); // Change it back to a pointer when it leaves.

        map.on("mouseleave", "buildings", function () {
          map.getCanvas().style.cursor = "";
        });
        map.addLayer({
          id: "drainage",
          type: "line",
          source: {
            type: "geojson",
            data: "/static/data/alogboshie_waterways.geojson"
          },
          paint: {
            "line-color": "blue",
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
        map.addLayer({
          id: "flood",
          type: "circle",
          source: {
            type: "geojson",
            data: "/static/data/alogboshie_flod_history .geojson"
          },
          paint: {
            "circle-color":
            /* other */
            "rgb(128, 128, 128)",
            "circle-radius": 10
          }
        });
        map.on("click", "flood", function (e) {
          new mapboxgl.Popup().setLngLat(e.lngLat).setHTML("\n<table width=\"350\">\n<tbody>\n".concat(e.features[0].properties["experienced_flood"] && "<tr>\n  <th>experienced flood</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["experienced_flood"], "\n  </td>\n  </tr>") || "", "\n").concat(e.features[0].properties["flood_history.flood_cause"] && "<tr>\n  <th>Flood Cause</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["flood_history.flood_cause"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["flood_history.flood_event.flood_year"] && "<tr>\n  <th>Flood Year</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["flood_history.flood_event.flood_year"], "\n  </td>\n  </tr>") || "", "\n  ").concat(e.features[0].properties["dwelling_type"] && "<tr>\n    <th>Dwelling Type</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["dwelling_type"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["building_use"] && "<tr>\n    <th>Building Use</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["building_use"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["years_in_house"] && "<tr>\n    <th>Years in house </Useth>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["years_in_house"], "\n    </td>\n    </tr>") || "", "\n\n  ").concat(e.features[0].properties["flood_history.flood_depth"] && "<tr>\n    <th>Flood Depth</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["flood_history.flood_depth"], "\n    </td>\n    </tr>") || "", "\n  ").concat(e.features[0].properties["address.landmark"] && "<tr>\n    <th>Land Mark</th>\n    <td style={{ paddingLeft: \"5px\" }}>\n    ".concat(e.features[0].properties["address.landmark"], "\n    </td>\n    </tr>") || "", "\n\n").concat(e.features[0].properties["moved_house"] && "<tr>\n  <th>Moved House</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["moved_house"], "\n  </td>\n  </tr>") || "", "\n\n").concat(e.features[0].properties["moved_year"] && "<tr>\n  <th>Moved Year</th>\n  <td style={{ paddingLeft: \"5px\" }}>\n  ".concat(e.features[0].properties["moved_year"], "\n  </td>\n  </tr>") || "", "\n  </tbody>\n  </table>")).addTo(map);
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
          lineNumber: 486
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid mt-3 mr-10 ml-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          minHeight: "6vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          marginTop: "0.8em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "home-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, "Map Visualisation of buildings, flood history, and drainage for Alogboshie, Accra-Ghana"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control mb-3 mr-3 w-100 rounded",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, "-- Select Community --"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "Akweteyman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, "Alogboshie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, "Alajo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, "Nima")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row index-pg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, "This web application was developed as part of the Open Cities Accra project. The project sought to collect and curate up-to-date and accurate geospatial data in the following areas of interest in Accra: Akweteyman, Alajo, Alogboshie and Nima. This web application was developed as a data tool to help government agencies, institutions and other stakeholders working in the Disaster Risk Management field take data-driven decisions in their work. The maps display the following data - buildings, flood history and drainage."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled px-3 py-3 rounded bg-sidebar shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "mb-3",
        style: {
          float: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/buildings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-lg btn-block btn-light rounded p-home-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-home fa-2x fa-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }), "Building"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "mb-3",
        style: {
          float: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/flood-history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-lg btn-block btn-light rounded p-home-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-fort-awesome-alt fa-2x fa-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }), "Flood History"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "",
        style: {
          float: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/drainage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-lg btn-block btn-lg btn-light rounded p-home-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-schlix fa-2x fa-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }), "Drainage Points")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          clear: "both"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-dark btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "90vh",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "state-legend",
        class: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "#088"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }), "Buildings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "blue"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }), "Drainage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: "gray"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }), "Flood History")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "http://mobilewebghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.osmghana.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://www.hotosm.org/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        style: {
          width: "800px !important"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/img/hot.png",
        className: "hot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        },
        __self: this
      })))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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
//# sourceMappingURL=index.js.70794168c5c245b6215d.hot-update.js.map