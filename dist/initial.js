/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./initial.js":
/*!********************!*\
  !*** ./initial.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_preloader_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/preloader/initial */ \"./src/preloader/initial.js\");\n\r\n\r\n(0,_src_preloader_initial__WEBPACK_IMPORTED_MODULE_0__.usePreloaderInit)();\r\n\n\n//# sourceURL=webpack://lass/./initial.js?");

/***/ }),

/***/ "./src/common/scroll.js":
/*!******************************!*\
  !*** ./src/common/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blockScroll: () => (/* binding */ blockScroll),\n/* harmony export */   unblockScroll: () => (/* binding */ unblockScroll)\n/* harmony export */ });\n/* harmony import */ var _scroll_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.scss */ \"./src/common/scroll.scss\");\n\r\n\r\nconst BLOCKED_SCROLL_CLASS_NAME = 'scroll-blocked';\r\n\r\nconst BLOCKED_SCROLL_HARD_CLASS_NAME = 'scroll-blocked--reset';\r\n\r\nconst blockScroll = (isReset = false) => {\r\n    document.documentElement.classList.add(BLOCKED_SCROLL_CLASS_NAME);\r\n\r\n    if (isReset) {\r\n        document.documentElement.classList.add(BLOCKED_SCROLL_HARD_CLASS_NAME);\r\n    }\r\n};\r\n\r\nconst unblockScroll = () => {\r\n    document.documentElement.classList.remove(BLOCKED_SCROLL_CLASS_NAME);\r\n    document.documentElement.classList.remove(BLOCKED_SCROLL_HARD_CLASS_NAME);\r\n};\n\n//# sourceURL=webpack://lass/./src/common/scroll.js?");

/***/ }),

/***/ "./src/common/scroll.scss":
/*!********************************!*\
  !*** ./src/common/scroll.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/scroll.scss?");

/***/ }),

/***/ "./src/preloader/initial.js":
/*!**********************************!*\
  !*** ./src/preloader/initial.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getIsPreloaded: () => (/* binding */ getIsPreloaded),\n/* harmony export */   setIsPreloaded: () => (/* binding */ setIsPreloaded),\n/* harmony export */   usePreloaderInit: () => (/* binding */ usePreloaderInit)\n/* harmony export */ });\n/* harmony import */ var _common_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/scroll */ \"./src/common/scroll.js\");\n\r\n\r\nconst STORAGE_KEY = 'preloader';\r\n\r\nconst getIsPreloaded = () => sessionStorage.getItem(STORAGE_KEY) === 'true';\r\n\r\nconst setIsPreloaded = () => sessionStorage.setItem(STORAGE_KEY, true);\r\n\r\nconst usePreloaderInit = () => {\r\n    const style = document.createElement('style');\r\n    style.textContent = '.preloader { display: block; }';\r\n    document.head.appendChild(style);\r\n\r\n    (0,_common_scroll__WEBPACK_IMPORTED_MODULE_0__.blockScroll)(!getIsPreloaded());\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/preloader/initial.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./initial.js");
/******/ 	
/******/ })()
;