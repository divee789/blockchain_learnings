/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./web3/users.js":
/*!***********************!*\
  !*** ./web3/users.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserInfo\": function() { return /* binding */ getUserInfo; },\n/* harmony export */   \"createUser\": function() { return /* binding */ createUser; }\n/* harmony export */ });\n/* harmony import */ var _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ \"./web3/provider.js\");\n/* harmony import */ var _artifacts_UserStorage_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artifacts/UserStorage.json */ \"./web3/artifacts/UserStorage.json\");\n/* harmony import */ var _artifacts_UserController_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artifacts/UserController.json */ \"./web3/artifacts/UserController.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n(0,_provider__WEBPACK_IMPORTED_MODULE_2__.loadWeb3)();\nvar getUserInfo = /*#__PURE__*/function () {\n  var _ref = (0,_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userId) {\n    var storage, profile;\n    return _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_provider__WEBPACK_IMPORTED_MODULE_2__.getInstance)(_artifacts_UserStorage_json__WEBPACK_IMPORTED_MODULE_3__);\n\n          case 2:\n            storage = _context.sent;\n            _context.next = 5;\n            return storage.methods.profiles(userId).call();\n\n          case 5:\n            profile = _context.sent;\n            return _context.abrupt(\"return\", {\n              id: parseInt(id),\n              username: window.web3.utils.toAscii(username)\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getUserInfo(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar createUser = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(username) {\n    var controller, addresses, result;\n    return _Users_divineolokor_Desktop_blockchain_Tweether_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return (0,_provider__WEBPACK_IMPORTED_MODULE_2__.getInstance)(_artifacts_UserController_json__WEBPACK_IMPORTED_MODULE_4__);\n\n          case 2:\n            controller = _context2.sent;\n            _context2.prev = 3;\n            _context2.next = 6;\n            return window.web3.eth.getAccounts();\n\n          case 6:\n            addresses = _context2.sent;\n            _context2.next = 9;\n            return controller.methods.createUser(window.web3.utils.fromAscii(username)).send({\n              from: addresses[0]\n            });\n\n          case 9:\n            result = _context2.sent;\n            return _context2.abrupt(\"return\", result);\n\n          case 13:\n            _context2.prev = 13;\n            _context2.t0 = _context2[\"catch\"](3);\n            console.error(\"Err:\", _context2.t0);\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[3, 13]]);\n  }));\n\n  return function createUser(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd2ViMy91c2Vycy5qcz8zMmI1Il0sIm5hbWVzIjpbImxvYWRXZWIzIiwiZ2V0VXNlckluZm8iLCJ1c2VySWQiLCJnZXRJbnN0YW5jZSIsIlVzZXJTdG9yYWdlIiwic3RvcmFnZSIsIm1ldGhvZHMiLCJwcm9maWxlcyIsImNhbGwiLCJwcm9maWxlIiwiaWQiLCJwYXJzZUludCIsInVzZXJuYW1lIiwid2luZG93Iiwid2ViMyIsInV0aWxzIiwidG9Bc2NpaSIsImNyZWF0ZVVzZXIiLCJVc2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFkZHJlc3NlcyIsImZyb21Bc2NpaSIsInNlbmQiLCJmcm9tIiwicmVzdWx0IiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSxtREFBUTtBQUVELElBQU1DLFdBQVc7QUFBQSwrU0FBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIQyxzREFBVyxDQUFDQyx3REFBRCxDQURSOztBQUFBO0FBQ25CQyxtQkFEbUI7QUFBQTtBQUFBLG1CQUVIQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFFBQWhCLENBQXlCTCxNQUF6QixFQUFpQ00sSUFBakMsRUFGRzs7QUFBQTtBQUVuQkMsbUJBRm1CO0FBQUEsNkNBR2xCO0FBQ0xDLGdCQUFFLEVBQUVDLFFBQVEsQ0FBQ0QsRUFBRCxDQURQO0FBRUxFLHNCQUFRLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCQyxPQUFsQixDQUEwQkosUUFBMUI7QUFGTCxhQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYWCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCO0FBU0EsSUFBTWdCLFVBQVU7QUFBQSxnVEFBRyxrQkFBT0wsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDVCxzREFBVyxDQUFDZSwyREFBRCxDQURaOztBQUFBO0FBQ2xCQyxzQkFEa0I7QUFBQTtBQUFBO0FBQUEsbUJBSUVOLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTSxHQUFaLENBQWdCQyxXQUFoQixFQUpGOztBQUFBO0FBSWhCQyxxQkFKZ0I7QUFBQTtBQUFBLG1CQUtESCxVQUFVLENBQUNiLE9BQVgsQ0FDbEJXLFVBRGtCLENBQ1BKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCUSxTQUFsQixDQUE0QlgsUUFBNUIsQ0FETyxFQUVsQlksSUFGa0IsQ0FFYjtBQUFFQyxrQkFBSSxFQUFFSCxTQUFTLENBQUMsQ0FBRDtBQUFqQixhQUZhLENBTEM7O0FBQUE7QUFLaEJJLGtCQUxnQjtBQUFBLDhDQVNmQSxNQVRlOztBQUFBO0FBQUE7QUFBQTtBQVd0QkMsbUJBQU8sQ0FBQ0MsS0FBUixDQUFjLE1BQWQ7O0FBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZYLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJmaWxlIjoiLi93ZWIzL3VzZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SW5zdGFuY2UsIGxvYWRXZWIzIH0gZnJvbSBcIi4vcHJvdmlkZXJcIjtcbmltcG9ydCBVc2VyU3RvcmFnZSBmcm9tIFwiLi9hcnRpZmFjdHMvVXNlclN0b3JhZ2UuanNvblwiO1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gXCIuL2FydGlmYWN0cy9Vc2VyQ29udHJvbGxlci5qc29uXCI7XG5cbmxvYWRXZWIzKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFVzZXJTdG9yYWdlKTtcbiAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHN0b3JhZ2UubWV0aG9kcy5wcm9maWxlcyh1c2VySWQpLmNhbGwoKTtcbiAgcmV0dXJuIHtcbiAgICBpZDogcGFyc2VJbnQoaWQpLFxuICAgIHVzZXJuYW1lOiB3aW5kb3cud2ViMy51dGlscy50b0FzY2lpKHVzZXJuYW1lKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBhd2FpdCBnZXRJbnN0YW5jZShVc2VyQ29udHJvbGxlcik7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCB3aW5kb3cud2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cm9sbGVyLm1ldGhvZHNcbiAgICAgIC5jcmVhdGVVc2VyKHdpbmRvdy53ZWIzLnV0aWxzLmZyb21Bc2NpaSh1c2VybmFtZSkpXG4gICAgICAuc2VuZCh7IGZyb206IGFkZHJlc3Nlc1swXSB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnI6XCIsIGVycik7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web3/users.js\n");

/***/ })

});