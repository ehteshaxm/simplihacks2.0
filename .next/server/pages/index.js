"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./eth/web3.js":
/*!*********************!*\
  !*** ./eth/web3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nlet web3;\nif (false) {} else {\n    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(\"https://rinkeby.infura.io/v3/9b7f644063e24a29b636700bb9b84f0a\");\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGgvd2ViMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0I7QUFFeEIsSUFBSUMsSUFBSTtBQUVSLElBQUksS0FBdUUsRUFBRSxFQUU1RSxNQUFNO0lBQ0wsTUFBTUcsUUFBUSxHQUFHLElBQUlKLG9FQUEyQixDQUM5QywrREFBK0QsQ0FDaEU7SUFDREMsSUFBSSxHQUFHLElBQUlELDZDQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDO0NBQzNCO0FBRUQsaUVBQWVILElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0b2xlYXJuLy4vZXRoL3dlYjMuanM/YjI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuXHJcbmxldCB3ZWIzO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbn0gZWxzZSB7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgJ2h0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvOWI3ZjY0NDA2M2UyNGEyOWI2MzY3MDBiYjliODRmMGEnXHJcbiAgKTtcclxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xyXG4iXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./eth/web3.js\n");

/***/ }),

/***/ "./firebase/clientApp.js":
/*!*******************************!*\
  !*** ./firebase/clientApp.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\nfirebase_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAyNiFvsNYCtuYM0A3yZ_GZaOPyiPqFnN8\",\n    authDomain: \"cryptolearn-60915.firebaseapp.com\",\n    projectId: \"cryptolearn-60915\",\n    storageBucket: \"cryptolearn-60915.appspot.com\",\n    messagingSenderId: \"169056212513\",\n    appId: \"1:169056212513:web:c30a9c7bfa5b020be43560\",\n    measurementId: \"G-KH1T9QCT59\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jbGllbnRBcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDVjtBQUM3Qyw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxtRUFBbUU7QUFDbkUsTUFBTUMsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsbUNBQW1DO0lBQy9DQyxTQUFTLEVBQUUsbUJBQW1CO0lBQzlCQyxhQUFhLEVBQUUsK0JBQStCO0lBQzlDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVELHNCQUFzQjtBQUNmLE1BQU1DLEdBQUcsR0FBR1QsMkRBQWEsQ0FBQ0MsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9sZWFybi8uL2ZpcmViYXNlL2NsaWVudEFwcC5qcz8xNGMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogJ0FJemFTeUF5TmlGdnNOWUN0dVlNMEEzeVpfR1phT1B5aVBxRm5OOCcsXHJcbiAgYXV0aERvbWFpbjogJ2NyeXB0b2xlYXJuLTYwOTE1LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgcHJvamVjdElkOiAnY3J5cHRvbGVhcm4tNjA5MTUnLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6ICdjcnlwdG9sZWFybi02MDkxNS5hcHBzcG90LmNvbScsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICcxNjkwNTYyMTI1MTMnLFxyXG4gIGFwcElkOiAnMToxNjkwNTYyMTI1MTM6d2ViOmMzMGE5YzdiZmE1YjAyMGJlNDM1NjAnLFxyXG4gIG1lYXN1cmVtZW50SWQ6ICdHLUtIMVQ5UUNUNTknLFxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5leHBvcnQgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/clientApp.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _eth_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eth/web3 */ \"./eth/web3.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"react-firebase-hooks/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Home() {\n    const [value, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), \"coupons\"), {\n        snapshotListenOptions: {\n            includeMetadataChanges: true\n        }\n    });\n    if (value) {\n        console.log(JSON.stringify(value.docs[0].data()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-3xl font-bold underline\",\n        children: \"Hello world!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ehtesham Siddiqui\\\\OneDrive\\\\Desktop\\\\simplihacks2.0\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUMrQjtBQUNDO0FBQ3ZCO0FBRXpCLFNBQVNNLElBQUksR0FBRztJQUM3QixNQUFNLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxLQUFLLENBQUMsR0FBR0wsNkVBQWEsQ0FDM0NELDhEQUFVLENBQUNELGdFQUFZLENBQUNHLDJEQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsRUFDeEM7UUFDRUsscUJBQXFCLEVBQUU7WUFBRUMsc0JBQXNCLEVBQUUsSUFBSTtTQUFFO0tBQ3hELENBQ0Y7SUFDRCxJQUFJSixLQUFLLEVBQUU7UUFDVEssT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixLQUFLLENBQUNTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ25EO0lBRUQscUJBQU8sOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLDhCQUE4QjtrQkFBQyxjQUFZOzs7OztZQUFLLENBQUM7Q0FDdkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9sZWFybi8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoL3dlYjMnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24gfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJztcclxuaW1wb3J0IGFwcCBmcm9tICcuLi9maXJlYmFzZS9jbGllbnRBcHAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbdmFsdWUsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbGxlY3Rpb24oXHJcbiAgICBjb2xsZWN0aW9uKGdldEZpcmVzdG9yZShhcHApLCAnY291cG9ucycpLFxyXG4gICAge1xyXG4gICAgICBzbmFwc2hvdExpc3Rlbk9wdGlvbnM6IHsgaW5jbHVkZU1ldGFkYXRhQ2hhbmdlczogdHJ1ZSB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2YWx1ZS5kb2NzWzBdLmRhdGEoKSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCB1bmRlcmxpbmUnPkhlbGxvIHdvcmxkITwvaDE+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIndlYjMiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwidXNlQ29sbGVjdGlvbiIsImFwcCIsIkhvbWUiLCJ2YWx1ZSIsImxvYWRpbmciLCJlcnJvciIsInNuYXBzaG90TGlzdGVuT3B0aW9ucyIsImluY2x1ZGVNZXRhZGF0YUNoYW5nZXMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImRvY3MiLCJkYXRhIiwiaDEiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();