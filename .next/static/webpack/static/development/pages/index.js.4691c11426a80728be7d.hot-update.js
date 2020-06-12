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
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layouts/MainLayout */ "./components/layouts/MainLayout.js");
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/css/main.css */ "./static/css/main.css");
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "C:\\nextjs-react16\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // import '../styles/main.css'




var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var pathname, query, asPath, req, res, userData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pathname = _ref.pathname, query = _ref.query, asPath = _ref.asPath, req = _ref.req, res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("http://jsonplaceholder.typicode.com/users/");

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
                return _context.abrupt("return", {
                  user: {
                    name: "Francis",
                    lastName: "Medici"
                  },
                  userData: userData
                });

              case 12:
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

    _this = _super.call(this, props); // console.log(this.props.user);
    // this.state = {
    //   user: this.props.user,
    //   userData: this.props.userData
    // }

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderUserList", function (users) {
      return users.map(function (user, i) {
        return __jsx("li", {
          className: "list-group-item",
          key: i,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 22
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 24
          }
        }, __jsx("a", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 27
          }
        }, " ")));
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "render",
    // renderUserList = (users) =>(
    //   users.map((user, i) => (
    //     <li className="list-group-item" key={i}>
    //       {/* <Link href={`/users/profile?userId=${user.id}`}> */}
    //       <Link
    //         href={{
    //           pathname: '/users/profile',
    //           query: {
    //             userId: user.id
    //           },
    //         }}>
    //         <a>{user.name}</a>
    //       </Link>
    //     </li>
    //   )));
    value: function render() {
      // console.log(this.props.user);
      console.log(this.state);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 24
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 26
        }
      }, __jsx("h3", {
        className: _static_css_main_css__WEBPACK_IMPORTED_MODULE_12___default.a.superAwesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 28
        }
      }, "Pick Up A User"), __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 28
        }
      }, this.renderUserList(this.props.userData), ";"))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicGF0aG5hbWUiLCJxdWVyeSIsImFzUGF0aCIsInJlcSIsInJlcyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJ1c2VyRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm5hbWUiLCJsYXN0TmFtZSIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJpIiwic3RhdGUiLCJNeVN0eWxlIiwic3VwZXJBd2Vzb21lIiwicmVuZGVyVXNlckxpc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztBQUVGQyx3QixRQUFBQSxRLEVBQ0FDLEssUUFBQUEsSyxFQUNBQyxNLFFBQUFBLE0sRUFDQUMsRyxRQUFBQSxHLEVBQ0FDLEcsUUFBQUEsRzs7O3VCQUt5QkMsNkNBQUssQ0FBQ0MsR0FBTixDQUNyQiw0Q0FEcUIsQzs7O0FBQWpCQyx3QjtBQUdOQyx3QkFBUSxHQUFHRCxRQUFRLENBQUNFLElBQXBCLEMsQ0FDQTtBQUNBOzs7Ozs7OztBQUVBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7O2lEQVdLO0FBQ0xDLHNCQUFJLEVBQUU7QUFDSkMsd0JBQUksRUFBRSxTQURGO0FBRUpDLDRCQUFRLEVBQUU7QUFGTixtQkFERDtBQUtMTiwwQkFBUSxFQUFSQTtBQUxLLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRVCxnQkFBWU8sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU5pQix5TkFTRixVQUFDQyxLQUFEO0FBQUEsYUFDZkEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0wsSUFBRCxFQUFPTSxDQUFQO0FBQUEsZUFDUjtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBZ0MsYUFBRyxFQUFFQSxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILENBREYsQ0FEUTtBQUFBLE9BQVYsQ0FEZTtBQUFBLEtBVEU7O0FBQUE7QUFPbEI7Ozs7QUFXRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBRVM7QUFDUDtBQUNBUixhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLUSxLQUFqQjtBQUNBLGFBQ0UsbUVBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBRUMsNERBQU8sQ0FBQ0MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUlFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLQyxjQUFMLENBQW9CLEtBQUtQLEtBQUwsQ0FBV1AsUUFBL0IsQ0FESCxNQUpGLENBREYsQ0FERixDQURGO0FBY0Q7Ozs7RUF4RmdCZSwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDY5MWMxMTQyNmE4MDcyOGJlN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRzL01haW5MYXlvdXRcIjtcclxuLy8gaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnXHJcbmltcG9ydCBNeVN0eWxlIGZyb20gXCIuLi9zdGF0aWMvY3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgICAgICAgICAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgICAgICAgIGFzUGF0aCxcclxuICAgICAgICAgICAgICAgICAgIHJlcSxcclxuICAgICAgICAgICAgICAgICAgIHJlcyxcclxuICAgICAgICAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdXNlckRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXR0aW5nIGxvYWRlZCBmaXJzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8xJylcclxuICAgICAgICAgICAgICAgICAgIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdGhuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZyYW5jaXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJNZWRpY2lcIixcclxuICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy51c2VyKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAvLyAgIHVzZXI6IHRoaXMucHJvcHMudXNlcixcclxuICAgICAgICAgICAgICAgICAgIC8vICAgdXNlckRhdGE6IHRoaXMucHJvcHMudXNlckRhdGFcclxuICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIHJlbmRlclVzZXJMaXN0ID0gKHVzZXJzKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJMaXN0ID0gKHVzZXJzKSA9PihcclxuICAgICAgICAgICAgICAgICAvLyAgIHVzZXJzLm1hcCgodXNlciwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgIC8vICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAvLyAgICAgICB7LyogPExpbmsgaHJlZj17YC91c2Vycy9wcm9maWxlP3VzZXJJZD0ke3VzZXIuaWR9YH0+ICovfVxyXG4gICAgICAgICAgICAgICAgIC8vICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgLy8gICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgIHBhdGhuYW1lOiAnL3VzZXJzL3Byb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgIC8vICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVzZXJJZDogdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgIC8vICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIC8vICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8YT57dXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAvLyAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgLy8gICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgLy8gICApKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtNeVN0eWxlLnN1cGVyQXdlc29tZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGljayBVcCBBIFVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJVc2VyTGlzdCh0aGlzLnByb3BzLnVzZXJEYXRhKX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==