/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _web3_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3/users */ \"./web3/users.js\");\n/* harmony import */ var _web3_tweets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3/tweets */ \"./web3/tweets.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/divineolokor/Desktop/blockchain/Tweether/client/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar HomePage = function HomePage() {\n  var logUser = /*#__PURE__*/function () {\n    var _ref = (0,_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var userInfo;\n      return _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_web3_users__WEBPACK_IMPORTED_MODULE_4__.getUserInfo)(1);\n\n            case 2:\n              userInfo = _context.sent;\n              console.log(userInfo);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function logUser() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var createNewUser = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var tx;\n      return _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_web3_users__WEBPACK_IMPORTED_MODULE_4__.createUser)(\"divine\");\n\n            case 2:\n              tx = _context2.sent;\n              console.log(tx);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function createNewUser() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var logTweet = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n      var tweetInfo;\n      return _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_web3_tweets__WEBPACK_IMPORTED_MODULE_5__.getTweetInfo)(1);\n\n            case 2:\n              tweetInfo = _context3.sent;\n              console.log(tweetInfo);\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function logTweet() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var createNewTweet = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {\n      var tx;\n      return _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return (0,_web3_tweets__WEBPACK_IMPORTED_MODULE_5__.createTweet)(\"Hello world!\");\n\n            case 2:\n              tx = _context4.sent;\n              console.log(tx);\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function createNewTweet() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Hello \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return logUser();\n        },\n        children: \"Get user with ID 1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return createNewUser();\n        },\n        children: \"Create user\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return logTweet();\n        },\n        children: \"Get tweet with ID 1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return createNewTweet();\n        },\n        children: \"Create tweet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImxvZ1VzZXIiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZU5ld1VzZXIiLCJjcmVhdGVVc2VyIiwidHgiLCJsb2dUd2VldCIsImdldFR3ZWV0SW5mbyIsInR3ZWV0SW5mbyIsImNyZWF0ZU5ld1R3ZWV0IiwiY3JlYXRlVHdlZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFNQyxPQUFPO0FBQUEsaVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDU0Msd0RBQVcsQ0FBQyxDQUFELENBRHBCOztBQUFBO0FBQ1JDLHNCQURRO0FBRWRDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQRixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBS0EsTUFBTUssYUFBYTtBQUFBLGtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0hDLHVEQUFVLENBQUMsUUFBRCxDQURQOztBQUFBO0FBQ2RDLGdCQURjO0FBRXBCSixxQkFBTyxDQUFDQyxHQUFSLENBQVlHLEVBQVo7O0FBRm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJGLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBS0EsTUFBTUcsUUFBUTtBQUFBLGtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1NDLDBEQUFZLENBQUMsQ0FBRCxDQURyQjs7QUFBQTtBQUNUQyx1QkFEUztBQUVmUCxxQkFBTyxDQUFDQyxHQUFSLENBQVlNLFNBQVo7O0FBRmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkYsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQUtBLE1BQU1HLGNBQWM7QUFBQSxrVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNKQyx5REFBVyxDQUFDLGNBQUQsQ0FEUDs7QUFBQTtBQUNmTCxnQkFEZTtBQUVyQkoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxFQUFaOztBQUZxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkSSxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTVgsT0FBTyxFQUFiO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1LLGFBQWEsRUFBbkI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUcsUUFBUSxFQUFkO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1HLGNBQWMsRUFBcEI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFXRCxDQWhDRDs7S0FBTVosUTtBQWtDTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0VXNlckluZm8sIGNyZWF0ZVVzZXIgfSBmcm9tIFwiLi4vd2ViMy91c2Vyc1wiO1xuaW1wb3J0IHsgZ2V0VHdlZXRJbmZvLCBjcmVhdGVUd2VldCB9IGZyb20gXCIuLi93ZWIzL3R3ZWV0c1wiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbG9nVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IGdldFVzZXJJbmZvKDEpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHR4ID0gYXdhaXQgY3JlYXRlVXNlcihcImRpdmluZVwiKTtcbiAgICBjb25zb2xlLmxvZyh0eCk7XG4gIH07XG5cbiAgY29uc3QgbG9nVHdlZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHdlZXRJbmZvID0gYXdhaXQgZ2V0VHdlZXRJbmZvKDEpO1xuICAgIGNvbnNvbGUubG9nKHR3ZWV0SW5mbyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTmV3VHdlZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHggPSBhd2FpdCBjcmVhdGVUd2VldChcIkhlbGxvIHdvcmxkIVwiKTtcbiAgICBjb25zb2xlLmxvZyh0eCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkhlbGxvIDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvZ1VzZXIoKX0+R2V0IHVzZXIgd2l0aCBJRCAxPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlTmV3VXNlcigpfT5DcmVhdGUgdXNlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvZ1R3ZWV0KCl9PkdldCB0d2VldCB3aXRoIElEIDE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVOZXdUd2VldCgpfT5DcmVhdGUgdHdlZXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});