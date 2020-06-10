webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/MainLayout */ "./components/layouts/MainLayout.js");







var _jsxFileName = "C:\\nextjs-react16\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var userData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://jsonplaceholder.typicode.com/users/1");

              case 3:
                response = _context.sent;
                userData = response.data;
                console.log(userData);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log('error');

              case 11:
                // const request = axios.get('http://jsonplaceholder.typicode.com/users/1')
                //   .then(response => {
                //                             console.log(response.data)
                //                           })
                console.log("get initial props");
                return _context.abrupt("return", {
                  user: {
                    name: "Francis",
                    lastName: "Medici"
                  }
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = _super.call(this, props);
    console.log("constructor");
    console.log(_this.props.user);
    _this.state = {
      user: _this.props.user
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      console.log(this.props.user);
      console.log(this.state);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, "Welcome to NextJS")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsInVzZXJEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibmFtZSIsImxhc3ROYW1lIiwicHJvcHMiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLUUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDZDQUFWLEM7OztBQUFqQkMsd0I7QUFDTkMsd0JBQVEsR0FBR0QsUUFBUSxDQUFDRSxJQUFwQjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7Ozs7Ozs7QUFFQUUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7OztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBRUFELHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtpREFDTztBQUNMQyxzQkFBSSxFQUFFO0FBQ0pDLHdCQUFJLEVBQUUsU0FERjtBQUVKQyw0QkFBUSxFQUFFO0FBRk47QUFERCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1QsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLSSxLQUFMLENBQVdILElBQXZCO0FBQ0EsVUFBS0ksS0FBTCxHQUFhO0FBQ1hKLFVBQUksRUFBRSxNQUFLRyxLQUFMLENBQVdIO0FBRE4sS0FBYjtBQUppQjtBQU9sQjs7Ozs2QkFDUTtBQUNQRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSSxLQUFMLENBQVdILElBQXZCO0FBQ0FGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtLLEtBQWpCO0FBQ0EsYUFDRSxtRUFDRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREYsQ0FERjtBQU9EOzs7O0VBMUMrQkMsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjE0Mjc0NGMxYWFhYjQxNTI2ZDdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgbGV0IHVzZXJEYXRhO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvMVwiKTtcclxuICAgICAgdXNlckRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcclxuICAgIH0gY2F0Y2h7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgfVxyXG4gICAgLy8gY29uc3QgcmVxdWVzdCA9IGF4aW9zLmdldCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvMScpXHJcbiAgICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0IGluaXRpYWwgcHJvcHNcIik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogXCJGcmFuY2lzXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiTWVkaWNpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RvclwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlcik7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnVzZXIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8gTmV4dEpTPC9oMT5cclxuICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==