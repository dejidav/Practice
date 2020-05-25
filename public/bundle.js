/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/dav/Desktop/QRISLAND/qrislandv2/Practice/src/index.js: Unexpected token (6:1)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mApp\\u001b[39m from \\u001b[32m\\\"./components/App\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m initialContests\\u001b[33m=\\u001b[39m{window\\u001b[33m.\\u001b[39minitialData\\u001b[33m.\\u001b[39mcontests}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m\\\"root\\\"\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:742:17)\\n    at Object.raiseWithData (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:735:17)\\n    at Object.raise (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:729:17)\\n    at Object.unexpected (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:8779:16)\\n    at Object.jsxParseIdentifier (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:4400:12)\\n    at Object.jsxParseNamespacedName (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:4410:23)\\n    at Object.jsxParseElementName (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:4421:21)\\n    at Object.jsxParseOpeningElementAt (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:4507:22)\\n    at Object.jsxParseElementAt (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:4540:33)\\n    at Object.jsxParseElement (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:4614:17)\\n    at Object.parseExprAtom (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:4621:19)\\n    at Object.parseExprSubscripts (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:9624:23)\\n    at Object.parseMaybeUnary (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:9604:21)\\n    at Object.parseExprOps (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:9474:23)\\n    at Object.parseMaybeConditional (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:9447:23)\\n    at Object.parseMaybeAssign (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:9402:21)\\n    at Object.parseExpression (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:9354:23)\\n    at Object.parseStatementContent (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:11233:23)\\n    at Object.parseStatement (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:11104:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:11679:25)\\n    at Object.parseBlockBody (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:11665:10)\\n    at Object.parseTopLevel (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:11035:10)\\n    at Object.parse (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:12671:10)\\n    at parse (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/parser/lib/index.js:12722:38)\\n    at parser (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/dav/Desktop/QRISLAND/qrislandv2/Practice/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });