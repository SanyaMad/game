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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/move */ \"./src/modules/move.js\");\n/* harmony import */ var _modules_pause__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pause */ \"./src/modules/pause.js\");\n/* harmony import */ var _modules_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/score */ \"./src/modules/score.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_move__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_pause__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://igra/./src/index.js?");

/***/ }),

/***/ "./src/modules/move.js":
/*!*****************************!*\
  !*** ./src/modules/move.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moveCharacter = () =>{\r\n    const character = document.querySelector('.mem')\r\n    let x = 0\r\n    let y = 0\r\n    document.addEventListener('keydown', function(event)    {\r\n        if (event.code == 'ArrowDown'){\r\n            y = +y + 20\r\n            character.style.top = y+'px'\r\n            console.log(\"вниз\");\r\n        }\r\n        else if (event.code == 'ArrowUp'){\r\n            y = +y - 20\r\n            character.style.top = y+'px'\r\n            console.log(\"вверх\");\r\n        }\r\n        else if (event.code == 'ArrowRight'){\r\n            x = +x + 20\r\n            character.style.left = x+'px'\r\n            console.log(\"вправо\");\r\n        }\r\n        else if (event.code == 'ArrowLeft'){\r\n            x = +x - 20\r\n            character.style.left = x+'px'\r\n            console.log(\"влево\");\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveCharacter);\r\n\r\n\r\n\n\n//# sourceURL=webpack://igra/./src/modules/move.js?");

/***/ }),

/***/ "./src/modules/pause.js":
/*!******************************!*\
  !*** ./src/modules/pause.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pauseGame = () =>{\r\n    const pauseWindow = document.querySelector('.pause')\r\n    let i = 0\r\n    document.addEventListener('keydown', function(event){\r\n        if (event.code == \"Escape\"){\r\n            if(i == 0){\r\n                pauseWindow.style.display = 'flex'\r\n                i = 1  \r\n            }\r\n            else{\r\n                pauseWindow.style.display = 'none'\r\n                i = 0\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pauseGame);\n\n//# sourceURL=webpack://igra/./src/modules/pause.js?");

/***/ }),

/***/ "./src/modules/score.js":
/*!******************************!*\
  !*** ./src/modules/score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addScore = () =>{\r\n    const score = document.querySelector('.score')\r\n    let i = 1\r\n    document.addEventListener('keydown',function(event){\r\n        if(event.code == 'ArrowDown'){\r\n            \r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);\n\n//# sourceURL=webpack://igra/./src/modules/score.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;