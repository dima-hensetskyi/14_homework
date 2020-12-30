/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hw1.js":
/*!********************!*\
  !*** ./src/hw1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTheRest\": () => /* binding */ getTheRest\n/* harmony export */ });\nfunction getTheRest(cash) {\n  var priceAmericano = 15.678;\n  var priceFrappe = 123.965;\n  var priceLatte = 90.2345;\n  var getSumPrices = priceLatte + priceAmericano + priceFrappe;\n  return +(cash - getSumPrices).toFixed(2);\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw1.js?");

/***/ }),

/***/ "./src/hw10.js":
/*!*********************!*\
  !*** ./src/hw10.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creatAudio\": () => /* binding */ creatAudio,\n/* harmony export */   \"playSound\": () => /* binding */ playSound,\n/* harmony export */   \"removeTransition\": () => /* binding */ removeTransition\n/* harmony export */ });\n/* harmony import */ var _sounds_sound_A_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sounds/sound_A.mp3 */ \"./src/sounds/sound_A.mp3\");\n/* harmony import */ var _sounds_sound_S_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds/sound_S.mp3 */ \"./src/sounds/sound_S.mp3\");\n/* harmony import */ var _sounds_sound_D_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds/sound_D.mp3 */ \"./src/sounds/sound_D.mp3\");\n/* harmony import */ var _sounds_sound_F_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds/sound_F.mp3 */ \"./src/sounds/sound_F.mp3\");\n/* harmony import */ var _sounds_sound_G_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sounds/sound_G.mp3 */ \"./src/sounds/sound_G.mp3\");\n/* harmony import */ var _sounds_sound_H_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sounds/sound_H.mp3 */ \"./src/sounds/sound_H.mp3\");\n/* harmony import */ var _sounds_sound_J_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sounds/sound_J.mp3 */ \"./src/sounds/sound_J.mp3\");\n/* harmony import */ var _sounds_sound_K_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sounds/sound_K.mp3 */ \"./src/sounds/sound_K.mp3\");\n/* harmony import */ var _sounds_sound_L_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sounds/sound_L.mp3 */ \"./src/sounds/sound_L.mp3\");\n\n\n\n\n\n\n\n\n\nfunction creatAudio() {\n  audio.innerHTML = \"\\n    <audio data-key=\\\"65\\\" src=\".concat(_sounds_sound_A_mp3__WEBPACK_IMPORTED_MODULE_0__.default, \"></audio>\\n    <audio data-key=\\\"83\\\" src=\").concat(_sounds_sound_S_mp3__WEBPACK_IMPORTED_MODULE_1__.default, \"></audio>\\n    <audio data-key=\\\"68\\\" src=\").concat(_sounds_sound_D_mp3__WEBPACK_IMPORTED_MODULE_2__.default, \"></audio>\\n    <audio data-key=\\\"70\\\" src=\").concat(_sounds_sound_F_mp3__WEBPACK_IMPORTED_MODULE_3__.default, \"></audio>\\n    <audio data-key=\\\"71\\\" src=\").concat(_sounds_sound_G_mp3__WEBPACK_IMPORTED_MODULE_4__.default, \"></audio>\\n    <audio data-key=\\\"72\\\" src=\").concat(_sounds_sound_H_mp3__WEBPACK_IMPORTED_MODULE_5__.default, \"></audio>\\n    <audio data-key=\\\"74\\\" src=\").concat(_sounds_sound_J_mp3__WEBPACK_IMPORTED_MODULE_6__.default, \"></audio>\\n    <audio data-key=\\\"75\\\" src=\").concat(_sounds_sound_K_mp3__WEBPACK_IMPORTED_MODULE_7__.default, \"></audio>\\n    <audio data-key=\\\"76\\\" src=\").concat(_sounds_sound_L_mp3__WEBPACK_IMPORTED_MODULE_8__.default, \"></audio>\\n    \");\n}\nfunction playSound(e) {\n  var code = e.keyCode ? e.keyCode : this.getAttribute(\"data-key\");\n  var audio = document.querySelector(\"audio[data-key=\\\"\".concat(code, \"\\\"]\"));\n  var key = document.querySelector(\".key[data-key=\\\"\".concat(code, \"\\\"]\"));\n  if (!audio) return;\n  audio.currentTime = 0;\n  audio.play();\n  key.classList.add(\"playing\");\n}\nfunction removeTransition(e) {\n  if (e.propertyName !== \"transform\") return;\n  e.target.classList.remove(\"playing\");\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw10.js?");

/***/ }),

/***/ "./src/hw11.js":
/*!*********************!*\
  !*** ./src/hw11.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomChinese\": () => /* binding */ getRandomChinese\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction getRandomChinese(_x) {\n  return _getRandomChinese.apply(this, arguments);\n}\n\nfunction _getRandomChinese() {\n  _getRandomChinese = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(length) {\n    var endString, delay, makeChinesChar, getRandomChar;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            endString = \"\";\n            delay = 50;\n\n            makeChinesChar = function makeChinesChar() {\n              return String.fromCharCode(String(Date.now()).slice(-5));\n            };\n\n            getRandomChar = function getRandomChar() {\n              return new Promise(function (resolve) {\n                return setTimeout(function () {\n                  return resolve(makeChinesChar());\n                }, delay);\n              });\n            };\n\n          case 4:\n            if (!(length > 0)) {\n              _context.next = 12;\n              break;\n            }\n\n            _context.t0 = endString;\n            _context.next = 8;\n            return getRandomChar();\n\n          case 8:\n            endString = _context.t0 += _context.sent;\n            length--;\n            _context.next = 4;\n            break;\n\n          case 12:\n            return _context.abrupt(\"return\", endString);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getRandomChinese.apply(this, arguments);\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw11.js?");

/***/ }),

/***/ "./src/hw12.js":
/*!*********************!*\
  !*** ./src/hw12.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCharacters\": () => /* binding */ getCharacters\n/* harmony export */ });\nvar table = document.getElementById(\"characters-table\");\nvar getCharacters = function getCharacters(episode) {\n  return fetch(\"https://swapi.dev/api/people\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var heroes = data.results.filter(function (character) {\n      return character.films.includes(\"http://swapi.dev/api/films/\".concat(episode, \"/\"));\n    });\n    heroes.map(function (character) {\n      table.innerHTML += \"\\n            <tr>\\n                <td>\".concat(character.name, \"</td>\\n                <td>\").concat(character.birth_year, \"</td>\\n                <td>\").concat(character.gender, \"</td>\\n            </tr>\");\n    });\n  });\n};\n\n//# sourceURL=webpack://new_14_homework/./src/hw12.js?");

/***/ }),

/***/ "./src/hw13.js":
/*!*********************!*\
  !*** ./src/hw13.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createIdGenerator\": () => /* binding */ createIdGenerator\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _marked = /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(createIdGenerator);\n\nfunction createIdGenerator() {\n  var id;\n  return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function createIdGenerator$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          id = 0;\n\n        case 1:\n          if (false) {}\n\n          _context.next = 4;\n          return ++id;\n\n        case 4:\n          _context.next = 1;\n          break;\n\n        case 6:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw13.js?");

/***/ }),

/***/ "./src/hw2.js":
/*!********************!*\
  !*** ./src/hw2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => /* binding */ sum\n/* harmony export */ });\nfunction sum(minNumber, maxNumber, odd) {\n  var result = 0;\n\n  for (var i = minNumber; i <= maxNumber; i++) {\n    if (odd && i % 2 === 0) {\n      continue;\n    }\n\n    result += i;\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw2.js?");

/***/ }),

/***/ "./src/hw3.js":
/*!********************!*\
  !*** ./src/hw3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomNumber\": () => /* binding */ getRandomNumber\n/* harmony export */ });\nvar getRandomNumber = function getRandomNumber(min, max) {\n  return Math.floor(Math.random() * (max - min) + min);\n};\n\n//# sourceURL=webpack://new_14_homework/./src/hw3.js?");

/***/ }),

/***/ "./src/hw4.js":
/*!********************!*\
  !*** ./src/hw4.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"breakIntoPairs\": () => /* binding */ breakIntoPairs,\n/* harmony export */   \"setThemsForStudens\": () => /* binding */ setThemsForStudens\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction breakIntoPairs(arrStudents) {\n  var copyArrStudents = _toConsumableArray(arrStudents);\n\n  return [[copyArrStudents[0], copyArrStudents[2]], [copyArrStudents[1], copyArrStudents[3]], [copyArrStudents[4], copyArrStudents[5]]];\n}\nfunction setThemsForStudens(arrStudentsPairs, arrThemes) {\n  return arrStudentsPairs.map(function (arrStudent, index) {\n    return [arrStudent.join(\" і \"), arrThemes[index]];\n  });\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw4.js?");

/***/ }),

/***/ "./src/hw5.js":
/*!********************!*\
  !*** ./src/hw5.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberFilter\": () => /* binding */ numberFilter,\n/* harmony export */   \"getAverage\": () => /* binding */ getAverage\n/* harmony export */ });\nvar numberFilter = function numberFilter(arrNumber) {\n  return arrNumber.filter(function (number) {\n    return Number.isInteger(number);\n  });\n};\nfunction getAverage() {\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  var numbersFilter = numberFilter(numbers);\n  return numbersFilter.reduce(function (total, number, index, arr) {\n    total += number;\n    var lastNumber = index === arr.length - 1;\n\n    if (lastNumber) {\n      return total / arr.length;\n    } else {\n      return total;\n    }\n  }, 0);\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw5.js?");

/***/ }),

/***/ "./src/hw6.js":
/*!********************!*\
  !*** ./src/hw6.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAverageMark\": () => /* binding */ getAverageMark\n/* harmony export */ });\nfunction getAverageMark(_ref) {\n  var subjects = _ref.subjects;\n  var markLength = Object.values(subjects).reduce(function (totalLength, markSubj) {\n    return totalLength += markSubj.length;\n  }, 0);\n  var sumMark = Object.values(subjects).reduce(function (total, markSubj) {\n    var sumMarkSubj = markSubj.reduce(function (sum, number) {\n      return sum += number;\n    }, 0);\n    return total += sumMarkSubj;\n  }, 0);\n  return +(sumMark / markLength).toFixed(2);\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw6.js?");

/***/ }),

/***/ "./src/hw7.js":
/*!********************!*\
  !*** ./src/hw7.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMiddleTaxes\": () => /* binding */ getMiddleTaxes\n/* harmony export */ });\nfunction getMiddleTaxes() {\n  return +(this.tax * this.middleSalary).toFixed(2);\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw7.js?");

/***/ }),

/***/ "./src/hw8.js":
/*!********************!*\
  !*** ./src/hw8.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Students\": () => /* binding */ Students\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Students = /*#__PURE__*/function () {\n  function Students(university, course, fullName) {\n    _classCallCheck(this, Students);\n\n    this.university = university;\n    this.course = course;\n    this.fullName = fullName;\n    this.marks = Array.from({\n      length: 4\n    }, function () {\n      return Math.floor(Math.random() * 5) + 1;\n    });\n    this.isDismiss = false;\n  }\n\n  _createClass(Students, [{\n    key: \"dismiss\",\n    value: function dismiss() {\n      console.log(\"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.fullName, \" \\u0432\\u0456\\u0434\\u0440\\u0430\\u0445\\u043E\\u0432\\u0430\\u043D\\u0438\\u0439\"));\n      this.isDismiss = true;\n    }\n  }, {\n    key: \"recovery\",\n    value: function recovery() {\n      console.log(\"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.fullName, \" \\u043F\\u043E\\u043D\\u043E\\u0432\\u043B\\u0435\\u043D\\u0438\\u0439\"));\n      this.isDismiss = false;\n    }\n  }, {\n    key: \"getInfo\",\n    get: function get() {\n      return this.isDismiss ? null : \"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.course, \"-\\u0433\\u043E \\u043A\\u0443\\u0440\\u0441\\u0443 \").concat(this.university, \", \").concat(this.fullName);\n    }\n  }, {\n    key: \"getMarks\",\n    get: function get() {\n      if (this.isDismiss) {\n        return null;\n      } else {\n        return this.marks.length ? this.marks : \"\".concat(this.fullName, \" \\u043D\\u0435 \\u043C\\u0430\\u0454 \\u043E\\u0446\\u0456\\u043D\\u043E\\u043A\");\n      }\n    }\n  }, {\n    key: \"setMark\",\n    set: function set() {\n      var mark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;\n\n      if (this.isDismiss) {\n        return null;\n      } else if (Number.isInteger(mark) && mark <= 5 && mark > 0) {\n        return this.marks.push(mark);\n      } else {\n        console.log(\"mark is not correct\");\n      }\n    }\n  }, {\n    key: \"getAverageMarks\",\n    get: function get() {\n      if (this.isDismiss) {\n        return null;\n      } else if (this.marks.length) {\n        return +(this.marks.reduce(function (total, mark) {\n          return total + mark;\n        }, 0) / this.marks.length).toFixed(2);\n      } else {\n        console.log(\"\".concat(this.fullName, \" \\u043D\\u0435 \\u043C\\u0430\\u0454 \\u043E\\u0446\\u0456\\u043D\\u043E\\u043A\"));\n      }\n    }\n  }]);\n\n  return Students;\n}();\n\n//# sourceURL=webpack://new_14_homework/./src/hw8.js?");

/***/ }),

/***/ "./src/hw9.js":
/*!********************!*\
  !*** ./src/hw9.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomColor\": () => /* binding */ randomColor,\n/* harmony export */   \"generateBlocks\": () => /* binding */ generateBlocks,\n/* harmony export */   \"generateBlocksInterval\": () => /* binding */ generateBlocksInterval\n/* harmony export */ });\nvar randomColor = function randomColor() {\n  return \"#\".concat(Math.floor(Math.random() * 16777215).toString(16));\n};\nfunction generateBlocks() {\n  var squareSize = 50;\n  var widthHeight = 5;\n  var squares = document.querySelector('.squares');\n  squares.style.width = \"\".concat(widthHeight * squareSize, \"px\");\n  squares.style.display = 'flex';\n  squares.style.flexWrap = 'wrap';\n  squares.innerHTML = \"\";\n\n  for (var i = 0; i < widthHeight * widthHeight; i++) {\n    var squere = document.createElement(\"div\");\n    squere.style.height = \"\".concat(squareSize, \"px\");\n    squere.style.width = \"\".concat(squareSize, \"px\");\n    squere.style.backgroundColor = randomColor();\n    squares.append(squere);\n  }\n}\nfunction generateBlocksInterval() {\n  setInterval(generateBlocks, 1000);\n}\n\n//# sourceURL=webpack://new_14_homework/./src/hw9.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw1 */ \"./src/hw1.js\");\n/* harmony import */ var _hw2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw2 */ \"./src/hw2.js\");\n/* harmony import */ var _hw3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw3 */ \"./src/hw3.js\");\n/* harmony import */ var _hw4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hw4 */ \"./src/hw4.js\");\n/* harmony import */ var _hw5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw5 */ \"./src/hw5.js\");\n/* harmony import */ var _hw6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hw6 */ \"./src/hw6.js\");\n/* harmony import */ var _hw7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hw7 */ \"./src/hw7.js\");\n/* harmony import */ var _hw8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hw8 */ \"./src/hw8.js\");\n/* harmony import */ var _hw9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hw9 */ \"./src/hw9.js\");\n/* harmony import */ var _hw10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hw10 */ \"./src/hw10.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _hw11__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hw11 */ \"./src/hw11.js\");\n/* harmony import */ var _hw12__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hw12 */ \"./src/hw12.js\");\n/* harmony import */ var _hw13__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hw13 */ \"./src/hw13.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log((0,_hw1__WEBPACK_IMPORTED_MODULE_0__.getTheRest)(500));\nconsole.log((0,_hw2__WEBPACK_IMPORTED_MODULE_1__.sum)(10, 100, true));\nconsole.log((0,_hw3__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(5, 9));\nvar students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nvar themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nvar breakStudentIntoPairs = (0,_hw4__WEBPACK_IMPORTED_MODULE_3__.breakIntoPairs)(students);\nvar setThems = (0,_hw4__WEBPACK_IMPORTED_MODULE_3__.setThemsForStudens)(breakStudentIntoPairs, themes);\nconsole.log(setThems);\nconsole.log((0,_hw5__WEBPACK_IMPORTED_MODULE_4__.getAverage)(6, 2, 55, 11, 78, 2, 55));\nvar students2 = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}];\nconsole.log((0,_hw6__WEBPACK_IMPORTED_MODULE_5__.getAverageMark)(students2[0]));\nvar student = new _hw8__WEBPACK_IMPORTED_MODULE_7__.Students(\"Львівська Політехніка\", 6, \"Остап Бендер\");\nconsole.log(student.getInfo);\n(0,_hw9__WEBPACK_IMPORTED_MODULE_8__.generateBlocksInterval)();\n(0,_hw11__WEBPACK_IMPORTED_MODULE_11__.getRandomChinese)(10).then(function (result) {\n  return console.log(result);\n});\nvar audio = document.getElementById(\"audio\");\n(0,_hw10__WEBPACK_IMPORTED_MODULE_9__.creatAudio)();\nvar keys = document.querySelectorAll(\".key\");\nkeys.forEach(function (key) {\n  key.addEventListener('click', _hw10__WEBPACK_IMPORTED_MODULE_9__.playSound);\n});\nwindow.addEventListener(\"keydown\", _hw10__WEBPACK_IMPORTED_MODULE_9__.playSound);\nkeys.forEach(function (key) {\n  return key.addEventListener(\"transitionend\", _hw10__WEBPACK_IMPORTED_MODULE_9__.removeTransition);\n});\nvar table = document.getElementById(\"characters-table\");\nvar showInformation = document.getElementById(\"show-information\");\nvar selectEpisode = document.getElementById(\"select-episode\");\nshowInformation.addEventListener(\"click\", function () {\n  var episode = selectEpisode.value;\n  table.innerHTML = \"\\n    <tr>\\n    <th>Name</th>\\n    <th>Date of birth</th>\\n    <th>Gender</th>\\n    </tr>\\n    \";\n  (0,_hw12__WEBPACK_IMPORTED_MODULE_12__.getCharacters)(episode);\n});\nvar idGenerator = (0,_hw13__WEBPACK_IMPORTED_MODULE_13__.createIdGenerator)();\nconsole.log(idGenerator.next().value);\nconsole.log(idGenerator.next().value);\nconsole.log(idGenerator.next().value);\n\n//# sourceURL=webpack://new_14_homework/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_background_picture_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/background_picture.jpg */ \"./src/img/background_picture.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_background_picture_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-size: 130%;\\r\\n  font-family: \\\"Playfair Display\\\", serif;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n#canvas {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n#hmw12 {\\r\\n  color: white;\\r\\n  width: auto;\\r\\n  height: 550px;\\r\\n  margin: 40px;\\r\\n  padding: 40px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: rgba(255, 255, 0, 0.35);\\r\\n}\\r\\nh1 {\\r\\n  font-size: 150%;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.block {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: rgba(0, 0, 0, 0.604);\\r\\n  width: 700px;\\r\\n  height: 550px;\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  margin: 5px;\\r\\n  font-size: 110%;\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  padding-top: 5px;\\r\\n}\\r\\n\\r\\nth {\\r\\n  font-size: 120%;\\r\\n  font-weight: bold;\\r\\n  padding-top: 5px;\\r\\n}\\r\\n\\r\\ntd {\\r\\n  width: 35%;\\r\\n}\\r\\n.choose-episode {\\r\\n  font-size: 130%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: rgba(0, 0, 0, 0.604);\\r\\n  width: 500px;\\r\\n  height: 300px;\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.select {\\r\\n  padding: 10px;\\r\\n  height: 300px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n.title {\\r\\n  font-size: 190%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#select-episode {\\r\\n  font-size: 80%;\\r\\n  border-radius: 8px;\\r\\n  width: 170px;\\r\\n  height: 50px;\\r\\n  margin: 5px;\\r\\n}\\r\\n#show-information {\\r\\n  font-size: 80%;\\r\\n  border-radius: 8px;\\r\\n  border: none;\\r\\n  margin: 20px;\\r\\n  width: 170px;\\r\\n  height: 120px;\\r\\n  color: white;\\r\\n  background-color: rgba(0, 0, 0, 0.919);\\r\\n  transition: all 300ms ease;\\r\\n}\\r\\n\\r\\n#show-information:hover {\\r\\n  color: black;\\r\\n  font-weight: bold;\\r\\n  font-size: 90%;\\r\\n  background-color: yellow;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#hmw10 {\\r\\n  width: 100%;\\r\\n  height: 200px;\\r\\n  background-color: rgba(255, 255, 0, 0.35);\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n.keys {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.key {\\r\\n  border: 0.1em solid black;\\r\\n  border-radius: 0.8rem;\\r\\n  margin: 1rem;\\r\\n  font-size: 1.2rem;\\r\\n  padding: 1rem 1rem;\\r\\n  transition: all 0.3s ease;\\r\\n  width: 300px;\\r\\n  text-align: center;\\r\\n  color: white;\\r\\n  background-color: rgba(0, 0, 0, 0.604);\\r\\n  text-shadow: 0 0 0.5rem white;\\r\\n}\\r\\n\\r\\nkbd {\\r\\n  font-size: 2.7rem;\\r\\n  margin: 1px;\\r\\n}\\r\\n\\r\\n.sound {\\r\\n  font-size: 1.2rem;\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 0.1rem;\\r\\n  color: yellow;\\r\\n}\\r\\n\\r\\n.playing {\\r\\n  transform: scale(1.1);\\r\\n  border-color: yellowgreen;\\r\\n  box-shadow: 0 0 1rem yellowgreen;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new_14_homework/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://new_14_homework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://new_14_homework/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/img/background_picture.jpg":
/*!****************************************!*\
  !*** ./src/img/background_picture.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"33e137f4e1f8baf1a9a1afe5582fa942.jpg\");\n\n//# sourceURL=webpack://new_14_homework/./src/img/background_picture.jpg?");

/***/ }),

/***/ "./src/sounds/sound_A.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_A.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8287527c683445bcae7b9b95fded5309.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_A.mp3?");

/***/ }),

/***/ "./src/sounds/sound_D.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_D.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fc8d1e519c7aa2154c3b50b96f85c81f.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_D.mp3?");

/***/ }),

/***/ "./src/sounds/sound_F.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_F.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"05ee4a422dd07d3aad63086843de8923.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_F.mp3?");

/***/ }),

/***/ "./src/sounds/sound_G.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_G.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"70ad47741f0a0c635c6322bc4d27dd33.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_G.mp3?");

/***/ }),

/***/ "./src/sounds/sound_H.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_H.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cd9ed0f2028a5940553f26d9ba2c51a7.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_H.mp3?");

/***/ }),

/***/ "./src/sounds/sound_J.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_J.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1ba2753c8ae59792e79ba95115dd585f.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_J.mp3?");

/***/ }),

/***/ "./src/sounds/sound_K.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_K.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0c2e2d7492e0fd43feda4867c4acc122.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_K.mp3?");

/***/ }),

/***/ "./src/sounds/sound_L.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_L.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f63bd7d08d49a60c0999327d7600c01c.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_L.mp3?");

/***/ }),

/***/ "./src/sounds/sound_S.mp3":
/*!********************************!*\
  !*** ./src/sounds/sound_S.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fe07bf29d749c0adf32664497e77952d.mp3\");\n\n//# sourceURL=webpack://new_14_homework/./src/sounds/sound_S.mp3?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://new_14_homework/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://new_14_homework/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://new_14_homework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;