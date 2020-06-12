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
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://jsonplaceholder.typicode.com/users/');

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderUserList", function (user) {
      return users.map(function (user, i) {
        return __jsx("li", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }
        });
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
          lineNumber: 77,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: _static_css_main_css__WEBPACK_IMPORTED_MODULE_12___default.a.superAwesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, "Pick Up A User"), __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicGF0aG5hbWUiLCJxdWVyeSIsImFzUGF0aCIsInJlcSIsInJlcyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJ1c2VyRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm5hbWUiLCJsYXN0TmFtZSIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJpIiwic3RhdGUiLCJNeVN0eWxlIiwic3VwZXJBd2Vzb21lIiwicmVuZGVyVXNlckxpc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztBQUNZQyx3QixRQUFBQSxRLEVBQVVDLEssUUFBQUEsSyxFQUFPQyxNLFFBQUFBLE0sRUFBUUMsRyxRQUFBQSxHLEVBQUtDLEcsUUFBQUEsRzs7O3VCQUlsQ0MsNkNBQUssQ0FBQ0MsR0FBTixDQUNyQiw0Q0FEcUIsQzs7O0FBQWpCQyx3QjtBQUdOQyx3QkFBUSxHQUFHRCxRQUFRLENBQUNFLElBQXBCLEMsQ0FDQTtBQUNBOzs7Ozs7OztBQUVBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7O2lEQVdLO0FBQ0xDLHNCQUFJLEVBQUU7QUFDSkMsd0JBQUksRUFBRSxTQURGO0FBRUpDLDRCQUFRLEVBQUU7QUFGTixtQkFERDtBQUtMTiwwQkFBUSxFQUFSQTtBQUxLLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRVCxnQkFBWU8sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU5pQix5TkFTRixVQUFDSCxJQUFEO0FBQUEsYUFDZkksS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0wsSUFBRCxFQUFPTSxDQUFQO0FBQUEsZUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFE7QUFBQSxPQUFWLENBRGU7QUFBQSxLQVRFOztBQUFBO0FBT2xCOzs7O0FBVUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzZCQUVTO0FBQ1A7QUFDQVIsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS1EsS0FBakI7QUFDQSxhQUNFLG1FQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUVDLDREQUFPLENBQUNDLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0MsY0FBTCxDQUFvQixLQUFLUCxLQUFMLENBQVdQLFFBQS9CLENBREgsTUFGRixDQURGLENBREYsQ0FERjtBQVlEOzs7O0VBL0UrQmUsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRjYzEzMDZjMmNkZTYzMWViNzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcbi8vIGltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJ1xyXG5pbXBvcnQgTXlTdHlsZSBmcm9tIFwiLi4vc3RhdGljL2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcGF0aG5hbWUsIHF1ZXJ5LCBhc1BhdGgsIHJlcSwgcmVzIH0pIHtcclxuICAgIGxldCB1c2VyRGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJ1xyXG4gICAgICApO1xyXG4gICAgICB1c2VyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXR0aW5nIGxvYWRlZCBmaXJzdCcpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8xJylcclxuICAgIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBhdGhuYW1lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiBcIkZyYW5jaXNcIixcclxuICAgICAgICBsYXN0TmFtZTogXCJNZWRpY2lcIixcclxuICAgICAgfSxcclxuICAgICAgdXNlckRhdGEsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy51c2VyKTtcclxuICAgIC8vIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAvLyAgIHVzZXI6IHRoaXMucHJvcHMudXNlcixcclxuICAgIC8vICAgdXNlckRhdGE6IHRoaXMucHJvcHMudXNlckRhdGFcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclVzZXJMaXN0ID0gKHVzZXIpID0+IChcclxuICAgIHVzZXJzLm1hcCgodXNlciwgaSkgPT4gKFxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvbGk+XHJcbiAgICApKVxyXG4gIClcclxuXHJcbiAgLy8gcmVuZGVyVXNlckxpc3QgPSAodXNlcnMpID0+KFxyXG4gIC8vICAgdXNlcnMubWFwKCh1c2VyLCBpKSA9PiAoXHJcbiAgLy8gICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2l9PlxyXG4gIC8vICAgICAgIHsvKiA8TGluayBocmVmPXtgL3VzZXJzL3Byb2ZpbGU/dXNlcklkPSR7dXNlci5pZH1gfT4gKi99XHJcbiAgLy8gICAgICAgPExpbmtcclxuICAvLyAgICAgICAgIGhyZWY9e3tcclxuICAvLyAgICAgICAgICAgcGF0aG5hbWU6ICcvdXNlcnMvcHJvZmlsZScsXHJcbiAgLy8gICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkXHJcbiAgLy8gICAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICB9fT5cclxuICAvLyAgICAgICAgIDxhPnt1c2VyLm5hbWV9PC9hPlxyXG4gIC8vICAgICAgIDwvTGluaz5cclxuICAvLyAgICAgPC9saT5cclxuICAvLyAgICkpKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy51c2VyKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e015U3R5bGUuc3VwZXJBd2Vzb21lfT5QaWNrIFVwIEEgVXNlcjwvaDM+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyVXNlckxpc3QodGhpcy5wcm9wcy51c2VyRGF0YSl9O1xyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=