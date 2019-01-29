webpackHotUpdate("static/development/pages/buildings.js",{

/***/ "./pages/buildings.js":
/*!****************************!*\
  !*** ./pages/buildings.js ***!
  \****************************/
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

var base_url = "http://localhost:5000";

var Buildings =
/*#__PURE__*/
function (_Component) {
  _inherits(Buildings, _Component);

  function Buildings(props) {
    var _this;

    _classCallCheck(this, Buildings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Buildings).call(this, props));
    _this.state = {
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.63689,
        longitude: -0.23602,
        zoom: 15.6
      },
      popupInfo: null,
      placeInfo: null
    };
    _this.renderPopup = _this.renderPopup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Buildings, [{
    key: "renderPopup",
    value: function renderPopup() {
      var _this2 = this;

      console.log(this.state.placeInfo);
      return this.state.popupInfo && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        tipSize: 10,
        anchor: "bottom-right",
        longitude: this.state.popupInfo.state.longitude,
        latitude: this.state.popupInfo.state.latitude,
        onClose: function onClose() {
          return _this2.setState({
            popupInfo: null
          });
        },
        closeOnClick: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        width: "200"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Community"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        }
      }, this.state.placeInfo.community)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        tyle: {
          width: "80px"
        }
      }, "Building material"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        }
      }, this.state.placeInfo.building_material)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Roof material"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        style: {
          paddingLeft: "5px"
        }
      }, this.state.placeInfo.roof_material)))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container-fluid mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          marginTop: "0.8em"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "home-link"
      }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "font-weight-bold text-center"
      }, "BUILDINGS"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-unstyled rounded bg-sidebar shadow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "btn-group btn-group-lg w-100 rounded",
        role: "group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/buildings"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-active"
      }, "Buildings")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/flood-history"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-n1"
      }, "Food History")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/drainage"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-n2"
      }, "Drainage"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "py-2 px-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "map-border my-3",
        style: {
          height: "400px"
        }
      }, "Summary chart and legends here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "form-control mb-3 text-center rounded"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, "-- Select to Download --"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, "All Buildings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, "All Data"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-dark px-10"
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-7"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "map-border",
        style: {
          height: "600px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        mapboxApiAccessToken: "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
      }, this.state.viewport, {
        mapStyle: "mapbox://styles/mapbox/streets-v9",
        onViewportChange: function onViewportChange(viewport) {
          return _this3.setState({
            viewport: viewport
          });
        }
      }), this.props.buildingData.features.map(function (value) {
        return value.geometry.coordinates.map(function (val, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
            latitude: val[index][1],
            longitude: val[index][0],
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "../static/img/home.png",
            width: "20",
            height: "20",
            onClick: function onClick() {
              console.log("hhhheheheheh");

              _this3.setState({
                popupInfo: {
                  state: {
                    longitude: val[index][0],
                    latitude: val[index][1]
                  }
                },
                placeInfo: {
                  community: value.properties["addr:community"],
                  building_material: value.properties["building:material"] || null,
                  roof_material: value.properties["roof:material"] || null
                }
              });
            }
          }));
        });
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "nav",
        style: navStyle
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["NavigationControl"], {
        onViewportChange: function onViewportChange(viewport) {
          return _this3.setState({
            viewport: viewport
          });
        }
      })), this.renderPopup()))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, "Powered by:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-inline py-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "http://mobilewebghana.org/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/img/partners/mwg.png",
        className: "partner"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "https://www.osmghana.org/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/img/partners/osmghana.png",
        className: "partner"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "https://www.hotosm.org/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/img/partners/hot.png",
        className: "partner"
      })))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var buildingsRes, buildingData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(base_url + "/static/data/derrick.json");

              case 2:
                buildingsRes = _context.sent;
                _context.next = 5;
                return buildingsRes.json();

              case 5:
                buildingData = _context.sent;
                return _context.abrupt("return", {
                  buildingData: buildingData
                });

              case 7:
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

  return Buildings;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
//# sourceMappingURL=buildings.js.2cc105613af6e776fbd6.hot-update.js.map