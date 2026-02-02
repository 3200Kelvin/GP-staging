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

/***/ "./preloader.js":
/*!**********************!*\
  !*** ./preloader.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_preloader_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/preloader/script */ \"./src/preloader/script.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    gsap.defaults({\r\n        duration: 0,\r\n        ease: 'power1.inOut',\r\n    });\r\n\r\n    (0,_src_preloader_script__WEBPACK_IMPORTED_MODULE_0__.usePreloader)();\r\n});\n\n//# sourceURL=webpack://lass/./preloader.js?");

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

/***/ }),

/***/ "./src/preloader/script.js":
/*!*********************************!*\
  !*** ./src/preloader/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PRELOADER_PROGRESS_AMOUNT: () => (/* binding */ PRELOADER_PROGRESS_AMOUNT),\n/* harmony export */   usePreloader: () => (/* binding */ usePreloader)\n/* harmony export */ });\n/* harmony import */ var _common_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/scroll */ \"./src/common/scroll.js\");\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial */ \"./src/preloader/initial.js\");\n\r\n\r\n\r\nconst PRELOADER_PROGRESS_AMOUNT = {\r\n    SCRIPTS: 20,\r\n    VIDEO_1: 40,\r\n    VIDEO_2: 40,\r\n    SKIP: 100,\r\n};\r\n\r\nconst usePreloader = (skipAll = false) => {\r\n    let loaded = 0;\r\n    const isPreloaded = (0,_initial__WEBPACK_IMPORTED_MODULE_1__.getIsPreloaded)();\r\n    const preloader = document.querySelector('.preloader');\r\n\r\n    if (!preloader) {\r\n        return (0,_common_scroll__WEBPACK_IMPORTED_MODULE_0__.unblockScroll)();\r\n    }\r\n\r\n    const line = preloader.querySelector('.preloader__line');\r\n    const runner = line.querySelector('.preloader__line__runner');\r\n    const button = preloader.querySelector('.preloader__button');\r\n    const hero = document.querySelector('.hero, [data-role=\"hero\"]');\r\n\r\n    if (skipAll || !hero) {\r\n        onPartLoaded(PRELOADER_PROGRESS_AMOUNT.SKIP)\r\n            .add(() => {\r\n                removePreloader();\r\n                (0,_common_scroll__WEBPACK_IMPORTED_MODULE_0__.unblockScroll)();\r\n            });\r\n        return;\r\n    }\r\n\r\n    const menu = document.querySelector('.menu__content');\r\n    const cursor = document.querySelector('.cursor');\r\n    const heroTitle = hero.querySelector('.heading, [data-role=\"hero-title\"]');\r\n    const heroCaption = hero.querySelector('.hero__caption > *, [data-role=\"hero-caption\"]');\r\n    const heroLast = hero.querySelectorAll('.weights > *, [data-role=\"hero-last\"]');\r\n\r\n    window.setPreloaderState = onPartLoaded;\r\n\r\n    const video1 = hero.querySelector('.hero__video--first video');\r\n    const video2 = hero.querySelector('.hero__video--second video');\r\n\r\n    if (!video1 || !video2) {\r\n        return removePreloader();\r\n    }\r\n\r\n    if (!video1 || !video2) {\r\n        return removePreloader();\r\n    }\r\n\r\n    if (isPreloaded) {\r\n        useSkipFunctionality();\r\n    } else {\r\n        usePreloaderFunctionality();\r\n    }\r\n\r\n    return onPartLoaded;\r\n\r\n    function onPartLoaded(percentage) {\r\n        loaded += percentage;\r\n        if (loaded > 100) {\r\n            loaded = 100;\r\n        }\r\n        return moveLine();\r\n    }\r\n\r\n    function moveLine() {\r\n        return gsap.timeline().to(runner, { transform: `scaleX(${loaded / 100})`, duration: 0.4 });\r\n    }\r\n\r\n    function usePreloaderFunctionality() {\r\n        hideHeroElements();\r\n\r\n        if (video1.networkState === 2 && video2.networkState === 2) {\r\n            waitForVideos().then(() => onVideosPreloaded());\r\n        } else {\r\n            onPartLoaded(PRELOADER_PROGRESS_AMOUNT.SKIP)\r\n                .add(() => {\r\n                    button.addEventListener('click', () => {\r\n                        button.firstElementChild.textContent = 'Wait a sec...';\r\n                        waitForVideos().then(() => onContentReady());\r\n                        preloadVideos();\r\n                    }, { once: true });\r\n                })\r\n                .add(showButton());\r\n        }\r\n    }\r\n\r\n    function checkPlaybackAvailability() {\r\n        return new Promise((res) => {\r\n            video1.play()\r\n                .then(() => {\r\n                    video1.pause();\r\n                    res(true);\r\n                })\r\n                .catch(() => res(false));\r\n        });\r\n    }\r\n\r\n    function useSkipFunctionality() {\r\n        video2.play()\r\n            .then(() => {\r\n                video1.remove();\r\n                onPartLoaded(PRELOADER_PROGRESS_AMOUNT.SKIP)\r\n                    .add(() => {\r\n                        removePreloader();\r\n                        showHeroElements();\r\n                        (0,_common_scroll__WEBPACK_IMPORTED_MODULE_0__.unblockScroll)();\r\n                    });\r\n            })\r\n            .catch(() => {\r\n                usePreloaderFunctionality();\r\n            });\r\n    }\r\n\r\n    async function onVideosPreloaded() {\r\n        checkPlaybackAvailability().then((isAvailable) => {\r\n            if (isAvailable) {\r\n                onContentReady();\r\n            } else {\r\n                button.addEventListener('click', () => {\r\n                    button.firstElementChild.textContent = 'Wait a sec...';\r\n                    onContentReady();\r\n                }, { once: true });\r\n                showButton();\r\n            }\r\n        });\r\n    }\r\n\r\n    async function onContentReady() {\r\n        setTimeout(() => {\r\n            removePreloader();\r\n            startSequence();\r\n        }, 1000);\r\n    }\r\n\r\n    function removePreloader() {\r\n        const onComplete = () => {\r\n            preloader.remove();\r\n            (0,_initial__WEBPACK_IMPORTED_MODULE_1__.setIsPreloaded)();\r\n        };\r\n\r\n        gsap.to(preloader, { opacity: 0, duration: 0.4, onComplete });\r\n    }\r\n\r\n    function startSequence() {\r\n        video1.play();\r\n\r\n        video1.addEventListener('ended', () => {\r\n            video2.play();\r\n            video1.remove();\r\n            showHeroElements();\r\n            (0,_common_scroll__WEBPACK_IMPORTED_MODULE_0__.unblockScroll)();\r\n        });\r\n    }\r\n\r\n    function showButton() {\r\n        return gsap.timeline()\r\n            .to(line, { opacity: 0, duration: 0.5 })\r\n            .to(line, { display: 'none' })\r\n            .to(button, {  opacity: 0, display: 'block' })\r\n            .to(button, { opacity: 1, duration: 0.5 });\r\n    }\r\n\r\n    function hideHeroElements() {\r\n        gsap.to(cursor, { display: 'none' });\r\n        gsap.to(menu, { transform: 'translateY(-150%)' });\r\n        gsap.to(heroCaption, { opacity: 0 });\r\n        gsap.to(heroLast, { opacity: 0 });\r\n    }\r\n\r\n    function showHeroElements() {\r\n        heroTitle.appear?.();\r\n        gsap.to(cursor, { display: 'block' });\r\n        gsap.to(menu, { transform: 'translateY(0%)', duration: 0.7 });\r\n        gsap.to(heroCaption, { opacity: 1, duration: 0.7 });\r\n        gsap.to(heroLast, { opacity: 1, duration: 0.7 });\r\n    }\r\n\r\n    async function waitForVideos() {\r\n        const p1 = new Promise((res) => {\r\n            video1.addEventListener('canplaythrough', () => {\r\n                onPartLoaded(PRELOADER_PROGRESS_AMOUNT.VIDEO_1);\r\n                res();\r\n            }, { once: true });\r\n        });\r\n        \r\n        const p2 = new Promise((res) => {\r\n            video2.addEventListener('canplay', () => {\r\n                onPartLoaded(PRELOADER_PROGRESS_AMOUNT.VIDEO_2);\r\n                res();\r\n            }, { once: true });\r\n        });\r\n\r\n        preloadVideos();\r\n\r\n        return Promise.all([p1, p2]);\r\n    }\r\n\r\n    function preloadVideos() {\r\n        video1.load();\r\n        video2.load();\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/preloader/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./preloader.js");
/******/ 	
/******/ })()
;