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
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var pathname, query, asPath, userData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pathname = _ref.pathname, query = _ref.query, asPath = _ref.asPath;
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://jsonplaceholder.typicode.com/users/1");

              case 4:
                response = _context.sent;
                userData = response.data; // console.log('getting loaded first')
                // console.log(userData)

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log("error");

              case 11:
                // const request = axios.get('http://jsonplaceholder.typicode.com/users/1')
                //   .then(response => {
                //                             console.log(response.data)
                //                           })
                console.log(context);
                return _context.abrupt("return", {
                  user: {
                    name: "Francis",
                    lastName: "Medici"
                  },
                  userData: userData
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = _super.call(this, props); // console.log("constructor");

    console.log(_this.props.user);
    _this.state = {
      user: _this.props.user,
      userData: _this.props.userData
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
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicGF0aG5hbWUiLCJxdWVyeSIsImFzUGF0aCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJ1c2VyRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29udGV4dCIsInVzZXIiLCJuYW1lIiwibGFzdE5hbWUiLCJwcm9wcyIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztBQUNXQyx3QixRQUFBQSxRLEVBQVVDLEssUUFBQUEsSyxFQUFPQyxNLFFBQUFBLE07Ozt1QkFJcEJDLDRDQUFLLENBQUNDLEdBQU4sQ0FDckIsNkNBRHFCLEM7OztBQUFqQkMsd0I7QUFHTkMsd0JBQVEsR0FBR0QsUUFBUSxDQUFDRSxJQUFwQixDLENBQ0E7QUFDQTs7Ozs7Ozs7QUFFQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7OztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0FELHVCQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWjtpREFDTztBQUNMQyxzQkFBSSxFQUFFO0FBQ0pDLHdCQUFJLEVBQUUsU0FERjtBQUVKQyw0QkFBUSxFQUFFO0FBRk4sbUJBREQ7QUFLTFAsMEJBQVEsRUFBUkE7QUFMSyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVQsZ0JBQVlRLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FFakI7O0FBQ0FOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtLLEtBQUwsQ0FBV0gsSUFBdkI7QUFDQSxVQUFLSSxLQUFMLEdBQWE7QUFDWEosVUFBSSxFQUFFLE1BQUtHLEtBQUwsQ0FBV0gsSUFETjtBQUVYTCxjQUFRLEVBQUUsTUFBS1EsS0FBTCxDQUFXUjtBQUZWLEtBQWI7QUFKaUI7QUFRbEI7Ozs7NkJBQ1E7QUFDUEUsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0ssS0FBTCxDQUFXSCxJQUF2QjtBQUNBSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTSxLQUFqQjtBQUNBLGFBQ0UsbUVBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixDQURGLENBREY7QUFPRDs7OztFQTlDK0JDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jNTc0YjdkMjhhMTI1YTYyOTM5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cGF0aG5hbWUsIHF1ZXJ5LCBhc1BhdGh9KSB7XHJcbiAgICBsZXQgdXNlckRhdGE7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8xXCJcclxuICAgICAgKTtcclxuICAgICAgdXNlckRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0dGluZyBsb2FkZWQgZmlyc3QnKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YSlcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgcmVxdWVzdCA9IGF4aW9zLmdldCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvMScpXHJcbiAgICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogXCJGcmFuY2lzXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiTWVkaWNpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZXJEYXRhLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnVzZXIpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcjogdGhpcy5wcm9wcy51c2VyLFxyXG4gICAgICB1c2VyRGF0YTogdGhpcy5wcm9wcy51c2VyRGF0YSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlcik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICA8aDE+V2VsY29tZSB0byBOZXh0SlM8L2gxPlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9