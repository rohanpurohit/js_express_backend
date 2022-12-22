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

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Todo = void 0;\nclass Todo {\n    constructor(todo) {\n        this.todoItem = \"\";\n        this.todoItem = todo;\n    }\n}\nexports.Todo = Todo;\n\n\n//# sourceURL=webpack:///./src/Todo.js?");

/***/ }),

/***/ "./src/TodoComponent.js":
/*!******************************!*\
  !*** ./src/TodoComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TodoComponent = void 0;\nconst TodoService_1 = __webpack_require__(/*! ./TodoService */ \"./src/TodoService.js\");\nclass TodoComponent {\n    constructor(selector) {\n        this.todoList = [];\n        this.todoService = new TodoService_1.TodoService();\n        const div = document.createElement(\"div\");\n        div.innerText = \"Hello\";\n        const root = document.querySelector(selector);\n        const template = `<div>\n    <input id=\"todo-input\" type=\"text\" placeholder=\"Enter your text here\" />\n    <button id=\"add-button\">Add Button</button>\n  </div>\n  \n  <ul id=\"items-list\"></ul>`;\n        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML(\"beforeend\", template);\n        const itemsList = document.querySelector(\"#items-list\");\n        const addButton = document.querySelector(\"#add-button\");\n        const input = document.querySelector(\"#todo-input\");\n        // this.todoList = JSON.parse(window.localStorage.getItem(\"todoList\") ?? \"[]\");\n        this.todoList = this.todoService.getAllTodos();\n        this.todoList.forEach((item) => {\n            const listItem = `<li>${item.todoItem}</li>`;\n            itemsList.insertAdjacentHTML(\"beforeend\", listItem);\n        });\n        const addTodo = () => {\n            const todo = this.todoService.createTodo(input === null || input === void 0 ? void 0 : input.value);\n            this.todoList.push(todo);\n            const item = `<li>${input === null || input === void 0 ? void 0 : input.value}</li>`;\n            input.value = \"\";\n            itemsList === null || itemsList === void 0 ? void 0 : itemsList.insertAdjacentHTML(\"beforeend\", item);\n        };\n        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener(\"click\", addTodo);\n    }\n}\nexports.TodoComponent = TodoComponent;\n\n\n//# sourceURL=webpack:///./src/TodoComponent.js?");

/***/ }),

/***/ "./src/TodoService.js":
/*!****************************!*\
  !*** ./src/TodoService.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TodoService = void 0;\nconst Todo_1 = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\nclass TodoService {\n    constructor() {\n        this.localStorageKey = \"TodoList\";\n    }\n    createTodo(item) {\n        var _a;\n        const todo = new Todo_1.Todo(item);\n        const list = JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : \"[]\");\n        list.push(todo);\n        localStorage.setItem(this.localStorageKey, JSON.stringify(list));\n        console.log(\"todoList\", list);\n        return todo;\n    }\n    getAllTodos() {\n        var _a;\n        return JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : \"[]\");\n    }\n}\nexports.TodoService = TodoService;\n\n\n//# sourceURL=webpack:///./src/TodoService.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst TodoComponent_1 = __webpack_require__(/*! ./TodoComponent */ \"./src/TodoComponent.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const todoComponent = new TodoComponent_1.TodoComponent(\"app-root\");\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;