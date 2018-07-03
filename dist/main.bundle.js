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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kf-body {\n  background: #222222;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.kf-header {\n  color: green;\n  font-family: 'Courrier New', Courier\n}\n\n.kf-canvas {\n  height: 413px;\n  width: 780px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Animation.ts":
/*!**************************!*\
  !*** ./src/Animation.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animation; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

class Animation {
    constructor(framesPerSecond, state, image) {
        this.framesPerSecond = framesPerSecond;
        this.state = state;
        this.image = image;
        this.frame = 0;
        this.start = new Date();
        this.initiate();
    }
    reset() {
        this.start = new Date();
        return this.start;
    }
    getCurrentFrame() {
        return this.state.frames[this.frame];
    }
    draw(x, y, direction, contextData) {
        let offsetX;
        let offsetY;
        let width;
        let height;
        this.frame = this.determineFrame();
        if (this.frame === -1)
            return false;
        offsetX = this.state.frames[this.frame].positionX;
        offsetY = this.state.frames[this.frame].positionY;
        width = this.state.frames[this.frame].width;
        height = this.state.frames[this.frame].height;
        for (let i = offsetX; i < offsetX + width; i++) {
            for (let j = offsetY; j < offsetY + height; j++) {
                let imageBasePointer = (i * 4) + (j * this.image.width * 4);
                /* Fix the image to the bottom */
                let contextBasePointer = (y - height + j - offsetY) * contextData.width * 4;
                if (direction == _constants__WEBPACK_IMPORTED_MODULE_0__["Directions"].left) {
                    /* Fix the image to the right */
                    contextBasePointer += (x - width + i - offsetX) * 4;
                }
                else {
                    /* Fix the image to the left */
                    contextBasePointer += (x + width - i + offsetX) * 4;
                }
                if (this.imageData[imageBasePointer + 3] != 0) {
                    contextData.data[contextBasePointer + 0] = this.imageData[imageBasePointer + 0];
                    contextData.data[contextBasePointer + 1] = this.imageData[imageBasePointer + 1];
                    contextData.data[contextBasePointer + 2] = this.imageData[imageBasePointer + 2];
                    contextData.data[contextBasePointer + 3] = this.imageData[imageBasePointer + 3];
                }
            }
        }
        return true;
    }
    initiate() {
        let newCanvas = document.createElement('canvas');
        let newContext = newCanvas.getContext('2d');
        newCanvas.width = this.image.width;
        newCanvas.height = this.image.height;
        newContext.drawImage(this.image, 0, 0);
        this.imageData = newContext.getImageData(0, 0, this.image.width, this.image.height).data;
    }
    determineFrame() {
        let now = new Date();
        let elapsedTime = (+now) - (+this.start);
        let frame = Math.floor(this.framesPerSecond * elapsedTime);
        let compFrame;
        if (this.state.loopType == _constants__WEBPACK_IMPORTED_MODULE_0__["LOOP_TYPES"].none) {
            /* If we hit the end of the loop, keep returning the last frame */
            if (frame >= this.state.frames.length) {
                frame = this.state.frames.length - 1;
            }
        }
        else if (this.state.loopType == _constants__WEBPACK_IMPORTED_MODULE_0__["LOOP_TYPES"].loop && this.state.frames.length === 1) {
            frame = 0;
        }
        else if (this.state.loopType == _constants__WEBPACK_IMPORTED_MODULE_0__["LOOP_TYPES"].loop) {
            frame %= this.state.frames.length;
        }
        else if (this.state.loopType == _constants__WEBPACK_IMPORTED_MODULE_0__["LOOP_TYPES"].loopBackAndForth) {
            let compFrame = frame % Math.floor(this.state.frames.length * 1.5);
            if (compFrame >= this.state.frames.length) {
                frame = Math.floor(this.state.frames.length * 1.5) - compFrame;
            }
            else {
                frame = compFrame;
            }
        }
        else {
            frame = -1;
        }
        return frame;
    }
}
;


/***/ }),

/***/ "./src/AnimationFactory.ts":
/*!*********************************!*\
  !*** ./src/AnimationFactory.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimationFactory; });
/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites */ "./src/sprites.ts");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animation */ "./src/Animation.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");



const FRAMES_PER_SECOND = 8 / 1000;
class AnimationFactory {
    constructor() {
        let that = this;
        this.image = new Image();
        this.image.src = './img/players.png';
        this.loadingPromise = new Promise((resolve, reject) => {
            that.image.onload = () => {
                let canvas = document.createElement('canvas');
                let context = canvas.getContext('2d');
                canvas.width = that.image.width;
                canvas.height = that.image.height;
                context.drawImage(that.image, 0, 0);
                that.imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                resolve();
            };
        });
    }
    getLoadingPromise() {
        return this.loadingPromise;
    }
    getPlayerAnimations(baseName = "player1") {
        let animations = {};
        for (let key in _constants__WEBPACK_IMPORTED_MODULE_2__["States"]) {
            let state = _constants__WEBPACK_IMPORTED_MODULE_2__["States"][key];
            let sprite = this.getSpriteWithName(_sprites__WEBPACK_IMPORTED_MODULE_0__["default"], baseName + '.' + state);
            animations[baseName + '.' + state] = new _Animation__WEBPACK_IMPORTED_MODULE_1__["default"](FRAMES_PER_SECOND, sprite, this.image);
        }
        return animations;
    }
    getImageData() {
        return this.imageData;
    }
    static getSingletonAnimationFactory() {
        if (this.singletonAnimationFactory === null) {
            this.singletonAnimationFactory = new AnimationFactory();
        }
        return this.singletonAnimationFactory;
    }
    getSpriteWithName(sprites, name) {
        for (let i = 0; i < sprites.length; i++) {
            if (sprites[i].name == name)
                return sprites[i];
        }
        return null;
    }
}
AnimationFactory.singletonAnimationFactory = null;
;


/***/ }),

/***/ "./src/Background.ts":
/*!***************************!*\
  !*** ./src/Background.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
class Background {
    constructor() {
        this.image = null;
        this.loadingPromise = null;
        this.imageData = null;
        let that = this;
        this.image = new Image();
        this.image.src = './img/background.png';
        this.loadingPromise = new Promise((resolve, reject) => {
            that.image.onload = () => {
                let newCanvas = document.createElement('canvas');
                let newContext = newCanvas.getContext('2d');
                newCanvas.width = this.image.width;
                newCanvas.height = this.image.height;
                newContext.drawImage(this.image, 0, 0);
                that.imageData = newContext.getImageData(0, 0, newCanvas.width, newCanvas.height);
                resolve();
            };
        });
    }
    getLoadingPromise() {
        return this.loadingPromise;
    }
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0);
    }
    drawImageData(contextData) {
        for (let i = 0; i < this.imageData.data.length; i++) {
            contextData.data[i] = this.imageData.data[i];
        }
    }
}


/***/ }),

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
const BACKGROUND = [0, 40, 53, 256];
class Canvas {
    constructor(maxWidth, maxHeight, background = BACKGROUND) {
        this.canvasPointer = document.getElementById('canvas');
        this.context = this.canvasPointer.getContext("2d");
        this.canvasPointer.width = maxWidth;
        this.canvasPointer.height = maxHeight;
        this.contextData = this.context.getImageData(0, 0, maxWidth, maxHeight);
    }
    getContext() {
        return this.context;
    }
    get width() {
        return this.canvasPointer.width;
    }
    get height() {
        return this.canvasPointer.height;
    }
    getContextData() {
        return this.contextData;
    }
    commit() {
        this.context.putImageData(this.contextData, 0, 0);
    }
    clearCanvas() {
        let data = this.contextData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i + 0] = BACKGROUND[0];
            data[i + 1] = BACKGROUND[1];
            data[i + 2] = BACKGROUND[2];
            data[i + 3] = BACKGROUND[3];
        }
    }
    drawHealthBar(x, y, health) {
        let data = this.contextData.data;
        const factor = 2;
        for (let i = 0; i < 100 * factor; i++) {
            for (let j = 0; j < 40; j++) {
                let base = ((x + i) * 4) + ((y + j) * this.width * 4);
                if (health > Math.floor(i / factor)) {
                    data[base + 0] = 255;
                    data[base + 1] = 255;
                    data[base + 2] = 0;
                    data[base + 3] = 255;
                }
                else {
                    data[base + 0] = 255;
                    data[base + 1] = 0;
                    data[base + 2] = 0;
                    data[base + 3] = 255;
                }
            }
        }
    }
    drawScore(red, blue) {
        this.context.font = "bold 32px 'Courier New'";
        this.context.textAlign = "center";
        this.context.fillStyle = "red";
        this.context.fillText(red, this.canvasPointer.width / 2 - 100, 50);
        this.context.fillStyle = "blue";
        this.context.fillText(blue, this.canvasPointer.width / 2 + 100, 50);
    }
    static getSingletonCanvas(maxWidth = 0, maxHeight = 0, background = BACKGROUND) {
        if (this.singletonCanvas === null) {
            this.singletonCanvas = new Canvas(maxWidth, maxHeight, background = BACKGROUND);
        }
        return this.singletonCanvas;
    }
}
Canvas.singletonCanvas = null;
;


/***/ }),

/***/ "./src/Collision.ts":
/*!**************************!*\
  !*** ./src/Collision.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collision; });
/* harmony import */ var _AnimationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFactory */ "./src/AnimationFactory.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");


class Collision {
    constructor() {
    }
    static isColliding(source, target) {
        if (Collision.squareBoxCollision(source, target) && Collision.pixelCollision(source, target)) {
            return true;
        }
        return false;
    }
    static squareBoxCollision(sourcePlayer, targetPlayer) {
        let source = sourcePlayer.getCurrentBox();
        let target = targetPlayer.getCurrentBox();
        let startThisX = source.x;
        let startThisY = source.y;
        let endThisX = startThisX + source.width;
        let endThisY = startThisY + source.height;
        let startOpponentX = target.x;
        let startOpponentY = target.y;
        let endOpponentX = startOpponentX + target.width;
        let endOpponentY = startOpponentY + target.height;
        if ((startThisX >= startOpponentX &&
            startThisX <= endOpponentX &&
            startThisY >= startOpponentY &&
            startThisY <= endOpponentY) ||
            (endThisX >= startOpponentX &&
                endThisX <= endOpponentX &&
                endThisY >= startOpponentY &&
                endThisY <= endOpponentY)) {
            return true;
        }
        return false;
    }
    static pixelCollision(sourcePlayer, targetPlayer) {
        let source = sourcePlayer.getCurrentBox();
        let target = targetPlayer.getCurrentBox();
        let sourceFrame = sourcePlayer.getCurrentFrame();
        let targetFrame = targetPlayer.getCurrentFrame();
        let imageData = this.animationFactory.getImageData();
        let width = 0;
        let height = 0;
        /* 1. Isolate the part where there is overlap */
        /* Base reset the coordinates */
        if (source.x > target.x) {
            source.x -= target.x;
            target.x = 0;
        }
        else {
            target.x -= source.x;
            source.x = 0;
        }
        if (source.y > target.y) {
            source.y -= target.y;
            target.y = 0;
        }
        else {
            target.y -= source.y;
            source.y = 0;
        }
        width = (source.x === 0 ? Math.abs(target.x - target.width) : Math.abs(source.x - source.width));
        height = (source.y === 0 ? Math.abs(target.y - target.height) : Math.abs(source.y - source.height));
        /* Determine where to start in the frames */
        let sourceStartX = (target.x > source.x ? target.x : 0);
        let sourceStartY = (target.y > source.y ? target.y : 0);
        let targetStartX = (source.x > target.x ? source.x : 0);
        let targetStartY = (source.y > target.y ? source.y : 0);
        /* 3. Compare the frames and see if collision occurs */
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                /* Calculate the row for the source image */
                let sourceBase = (sourceFrame.positionY + j) * imageData.width * 4;
                let sourceIncrease = (sourceFrame.positionX + i) * 4;
                /* Check if the source is flipped */
                if (sourcePlayer.getDirection() == _constants__WEBPACK_IMPORTED_MODULE_1__["Directions"].left) {
                    sourceBase += ((sourceFrame.positionX + source.width) * 4) - sourceIncrease;
                }
                else {
                    sourceBase += sourceIncrease;
                }
                let targetBase = ((targetFrame.positionY + j) * imageData.width * 4);
                let targetIncrease = ((targetFrame.positionX + i) * 4);
                if (targetPlayer.getDirection() == _constants__WEBPACK_IMPORTED_MODULE_1__["Directions"].left) {
                    targetBase += ((targetFrame.positionX + target.width) * 4) - targetIncrease;
                }
                else {
                    targetBase += targetIncrease;
                }
                if (imageData.data[sourceBase + 3] !== 0 && imageData.data[targetBase + 3] !== 0)
                    return true;
            }
        }
        return false;
    }
}
Collision.animationFactory = _AnimationFactory__WEBPACK_IMPORTED_MODULE_0__["default"].getSingletonAnimationFactory();
;


/***/ }),

/***/ "./src/EventHandlers.ts":
/*!******************************!*\
  !*** ./src/EventHandlers.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventHandlers; });
class EventHandlers {
    constructor() {
    }
    static attach(newGame) {
        let resetGameButton = document.getElementById('reset-game-button');
        resetGameButton.addEventListener('click', () => {
            newGame();
            resetGameButton.blur();
        });
        let controlsButton = document.getElementById('controls');
        controlsButton.addEventListener('click', () => {
            alert(`Controls:

Player1:

Jump = Up arrow
Duck = Down arrow
Left = Left arrow
Right = Right arrow
Kick = Enter
Punch = Zero

Player2:

Jump = 'w'
Duck = 's'
Left = 'a'
Right = 'd'
Kick = 'z'
Punch = 'x'`);
            controlsButton.blur();
        });
    }
}


/***/ }),

/***/ "./src/KeyboardInput.ts":
/*!******************************!*\
  !*** ./src/KeyboardInput.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyboardInput; });
const keyLeft = 37;
const keyUp = 38;
const keyRight = 39;
const keyDown = 40;
const keySpace = 32; // space
const a = 65; // a
const d = 68; // d
const w = 87; // w
const s = 83; // s
const z = 90; // z
const x = 88; // x
const enter = 13; // enter
const zero = 48; // 0
const myTimer = 40; // 40 ms
const state = {
    up: false,
    down: false,
    left: false,
    right: false,
    altUp: false,
    altDown: false,
    altLeft: false,
    altRight: false,
    z: false,
    x: false,
    space: false,
    toggle: false,
    suicide: false,
    enter: false,
    zero: false,
};
class KeyboardInput {
    constructor() {
        document.addEventListener('keydown', KeyboardInput.keyDownFunction);
        document.addEventListener('keyup', KeyboardInput.keyUpFunction);
    }
    get state() {
        return state;
    }
    destructor() {
        document.removeEventListener('keydown', KeyboardInput.keyDownFunction);
        document.removeEventListener('keyup', KeyboardInput.keyUpFunction);
    }
    static keyDownFunction(e) {
        e.preventDefault();
        let release = e;
        switch (release.keyCode) {
            case keyUp:
                state.up = true;
                break;
            case keyDown:
                state.down = true;
                break;
            case keyLeft:
                state.left = true;
                break;
            case keyRight:
                state.right = true;
                break;
            case keySpace:
                state.space = true;
                break;
            case w:
                state.altUp = true;
                break;
            case s:
                state.altDown = true;
                break;
            case a:
                state.altLeft = true;
                break;
            case d:
                state.altRight = true;
                break;
            case enter:
                state.enter = true;
                break;
            case zero:
                state.zero = true;
                break;
            case x:
                state.x = true;
                break;
            case z:
                state.z = true;
                break;
            default:
                break;
        }
    }
    static keyUpFunction(e) {
        let release = e;
        switch (release.keyCode) {
            case keyUp:
                state.up = false;
                break;
            case keyDown:
                state.down = false;
                break;
            case keyLeft:
                state.left = false;
                break;
            case keyRight:
                state.right = false;
                break;
            case keySpace:
                state.space = false;
                break;
            case w:
                state.altUp = false;
                break;
            case s:
                state.altDown = false;
                break;
            case a:
                state.altLeft = false;
                break;
            case d:
                state.altRight = false;
                break;
            case x:
                state.x = false;
                break;
            case z:
                state.z = false;
                break;
            case enter:
                state.enter = false;
                break;
            case zero:
                state.zero = false;
                break;
            default:
                break;
        }
    }
    static getSingletonKeyboardInput() {
        if (this.singletonKeyboardInput === null) {
            this.singletonKeyboardInput = new KeyboardInput();
        }
        return this.singletonKeyboardInput;
    }
}
KeyboardInput.singletonKeyboardInput = null;
;


/***/ }),

/***/ "./src/NextAnimationFrameFactory.js":
/*!******************************************!*\
  !*** ./src/NextAnimationFrameFactory.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NextAnimationFrameFactory; });
class NextAnimationFrameFactory {

  constructor() {

    this.callback = null;
    this.timeout = null;

  	var originalWebkitMethod;
  	var wrapper = null;
  	var callback = null;
  	var geckoVersion = 0;
  	var userAgent = navigator.userAgent;
  	var index = 0;
  	var self = this;

  	// Workaround for Chrome 10 bug where Chrome
  	// does not pass the time to the animation function

  	if(window.webkitRequestAnimationFrame){
  		// Define the wrapper

  		wrapper = function(time){
  			if(time === undefined){
  				time = +new Date();
  			}
  			self.callback(time);
  		};

  		// Make the switch

  		originalWebkitMethod = window.webkitRequestAnimationFrame;

  		window.webkitRequestAnimationFrame = function(callback, element){
  			self.callback = callback;

  			// Browser calls wrapper; wrapper calls callback

  			originalWebkitMethod(wrapper, element);
  		}
  	} // End Chrome 10 workaround

  	// Workaround for Gecko 2.0, which has a bug in mozRequestAnimationFrame() that restricts animations to 30-40 fps.

  	if(window.mozRequestAnimationFrame){
  		// Check the Gecko verson. Gecko is used by browsers other than Firefox. Gecko 2.0 corresponds to Firefox 4.0.

  		index = userAgent.indexOf('rv:');

  		if(userAgent.indexOf('Gecko') != -1){
  			geckoVersion = userAgent.substr(index + 3, 3);

  			if(geckoVersion === '2.0'){
  				// Forces the return statement to fall through to the setTimeout() function.

  				window.mozRequestAnimationFrame = undefined;
  			}
  		}
  	} // End Gecko 2.0 workaround

  	return (window.requestAnimationFrame ||
  		window.webkitRequestAnimationFrame ||
  		window.mozRequestAnimationFrame ||
  		window.oRequestAnimationFrame ||
  		window.msRequestAnimationFrame ||

  		function(callback, element) {
  			var start;
  			var finish;

  			setTimeout(function(){
  				start = +new Date();
  				callback(start);
  				finish = +new Date();

  				self.timeout = 1000 / 60 - (finish - start);
  			}, self.timeout);
  		}
    );
  }
};


/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _AnimationFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFactory */ "./src/AnimationFactory.ts");
/* harmony import */ var _Collision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collision */ "./src/Collision.ts");
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sound */ "./src/Sound.js");




const DEBUG = true;
const STEP = 108;
const DIRECTION_CORRECTION = 6;
const JUMPSTEPS = [-4, -3, -2, -1, 1, 2, 3, 4];
const PUNCH_DAMAGE = 5;
const KICK_DAMAGE = 10;
const HIT_TIME = 400;
const WIDTH_BOUNDARY = 13;
class Player {
    constructor(name, positionX, positionY, direction, controls, controlsMap) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = direction;
        this.controls = controls;
        this.controlsMap = controlsMap;
        this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].standing;
        this.strength = 100;
        this.stateChanged = false;
        this.previousState = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].standing;
        this.isJumping = false;
        this.jumpIndex = 0;
        this.yBeforeJumping = 0;
        this.startedJumping = 0;
        this.isPunching = false;
        this.hasPunched = false;
        this.isKicking = false;
        this.hasKicked = false;
        this.startedBeingHit = false;
        this.startedPunching = 0;
        this.startedKicking = 0;
        this.startedHit = 0;
        this.hasDied = false;
        this.sound = null;
        this.initiate();
    }
    initiate() {
        let animationFactory = _AnimationFactory__WEBPACK_IMPORTED_MODULE_1__["default"].getSingletonAnimationFactory();
        this.animations = animationFactory.getPlayerAnimations(this.name);
        this.sound = _Sound__WEBPACK_IMPORTED_MODULE_3__["default"].getSingletonSound();
    }
    draw(canvas) {
        let correctedX = Math.floor(this.positionX);
        correctedX += (this.direction === _constants__WEBPACK_IMPORTED_MODULE_0__["Directions"].left ? DIRECTION_CORRECTION : -1 * DIRECTION_CORRECTION);
        if (this.stateChanged === true) {
            this.stateChanged = false;
            this.animations[this.name + '.' + this.state].reset();
        }
        this.animations[this.name + '.' + this.state].draw(correctedX, Math.floor(this.positionY), this.direction, canvas);
    }
    /* This is where we determine state and behaviour, which is most of the class */
    progress() {
        let now = new Date();
        let elapsedTime = (+now) - (+this.lastProgressMoment);
        let distance = STEP * elapsedTime / 1000;
        if (this.strength <= 0 && !this.hasDied) {
            this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].dead;
            this.hasDied = true;
            this.sound.playDyingSound();
            return;
        }
        /* Being hit takes precedent over all other states except death */
        if (this.state == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].hit) {
            let elapsedTimeSinceBeingHit = (+now) - (this.startedHit);
            if (elapsedTimeSinceBeingHit >= HIT_TIME) {
                this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].standing;
            }
            else {
                this.positionX += (this.direction == _constants__WEBPACK_IMPORTED_MODULE_0__["Directions"].left ? distance : -1 * distance);
            }
            if (this.isJumping) {
                let elapsedTimeSinceStartedJumping = (+now) - (+this.startedJumping);
                let index = Math.floor((JUMPSTEPS.length / 1000) * elapsedTimeSinceStartedJumping);
                if (index >= JUMPSTEPS.length) {
                    this.isJumping = false;
                    /* Make sure we come back where we started */
                    this.positionY = this.yBeforeJumping;
                }
                else {
                    this.positionY += JUMPSTEPS[index] * distance;
                }
            }
        }
        else {
            if (this.noWalkingKeyPressed())
                this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].standing;
            /* If we are not jumping, we can duck */
            if (this.controls[this.controlsMap.down] && !this.isJumping) {
                this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].ducking;
            }
            /* If we are not ducking, punching or kicking then we can move left or right */
            if (this.canWalk() && this.controls[this.controlsMap.left]) {
                this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].walking;
                this.direction = _constants__WEBPACK_IMPORTED_MODULE_0__["Directions"].left;
                if (this.positionX - distance > WIDTH_BOUNDARY)
                    this.positionX -= distance;
                else
                    this.positionX = WIDTH_BOUNDARY;
            }
            if (this.canWalk() && this.controls[this.controlsMap.right]) {
                this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].walking;
                this.direction = _constants__WEBPACK_IMPORTED_MODULE_0__["Directions"].right;
                if (this.positionX + distance < (_constants__WEBPACK_IMPORTED_MODULE_0__["MAX_WIDTH"] - WIDTH_BOUNDARY))
                    this.positionX += distance;
                else
                    this.positionX = _constants__WEBPACK_IMPORTED_MODULE_0__["MAX_WIDTH"] - WIDTH_BOUNDARY;
            }
            /* If we start jumping, we set the isJumping boolean to true and start the timer */
            if (this.controls[this.controlsMap.up]) {
                if (this.isJumping === false) {
                    this.startedJumping = new Date();
                    this.isJumping = true;
                    this.yBeforeJumping = this.positionY;
                }
            }
            /* If we are not jumping, we can punch */
            if (this.controls[this.controlsMap.punch] && !this.isJumping && !this.hasPunched) {
                this.isPunching = true;
                this.hasPunched = true;
                this.startedPunching = new Date();
                this.sound.playSwingSound();
            }
            /* If punch is not being hit, release the possibility to punch (again) */
            if (!this.controls[this.controlsMap.punch]) {
                this.hasPunched = false;
            }
            /* Kicking */
            if (this.controls[this.controlsMap.kick] && !this.hasKicked) {
                this.isKicking = true;
                this.hasKicked = true;
                this.startedKicking = new Date();
                this.sound.playSwingSound();
            }
            if (!this.controls[this.controlsMap.kick]) {
                this.hasKicked = false;
            }
            if (this.isPunching) {
                let delta = (+now) - (+this.startedPunching);
                if (delta >= 150) {
                    this.isPunching = false;
                }
                else if (this.state == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].ducking) {
                    /* If we are ducking, then we need to set the state to duckPunch */
                    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].duckPunch;
                }
                else {
                    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].punching;
                }
            }
            if (this.isJumping) {
                let elapsedTimeSinceStartedJumping = (+now) - (+this.startedJumping);
                let index = Math.floor((JUMPSTEPS.length / 1000) * elapsedTimeSinceStartedJumping);
                if (index >= JUMPSTEPS.length) {
                    this.isJumping = false;
                    /* Make sure we come back where we started */
                    this.positionY = this.yBeforeJumping;
                }
                else {
                    this.positionY += JUMPSTEPS[index] * distance;
                    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].jump;
                }
            }
            if (this.isKicking) {
                let delta = (+now) - (+this.startedKicking);
                /* We can kick while jumping, standing or ducking, so all need to be handled */
                if (delta >= 300) {
                    this.isKicking = false;
                }
                else if (this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["States"].ducking) {
                    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].duckKick;
                }
                else if (this.isJumping === true) {
                    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].jumpKick;
                }
                else {
                    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].kicking;
                }
            }
        }
        this.checkStateChanged();
        this.previousState = this.state;
        this.lastProgressMoment = now;
    }
    getState() {
        return this.state;
    }
    getStrength() {
        return this.strength;
    }
    isColliding(antagonist) {
        let result = _Collision__WEBPACK_IMPORTED_MODULE_2__["default"].isColliding(this, antagonist);
        return result;
    }
    getCurrentBox() {
        let correctedX = Math.floor(this.positionX);
        let currentFrame = this.animations[this.name + '.' + this.state].getCurrentFrame();
        // correctedX += (this.direction === Directions.right ?
        //   (2 * DIRECTION_CORRECTION) - currentFrame.width :
        //   DIRECTION_CORRECTION - currentFrame.width
        // );
        correctedX += (this.direction === _constants__WEBPACK_IMPORTED_MODULE_0__["Directions"].left ?
            DIRECTION_CORRECTION - currentFrame.width :
            -1 * DIRECTION_CORRECTION);
        return {
            x: correctedX,
            y: Math.floor(this.positionY) - currentFrame.height,
            width: currentFrame.width,
            height: currentFrame.height,
        };
    }
    getCurrentFrame() {
        let currentFrame = this.animations[this.name + '.' + this.state].getCurrentFrame();
        return currentFrame;
    }
    handleCollision(antagonist) {
        let antagonistState = antagonist.getState();
        if (this.state == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].hit)
            return;
        if (antagonistState == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].kicking || antagonistState == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].jumpKick || antagonistState == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].duckKick) {
            this.startHit(KICK_DAMAGE);
            this.sound.playHitSound();
        }
        if (antagonistState == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].punching || antagonistState == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].duckPunch) {
            this.startHit(PUNCH_DAMAGE);
            this.sound.playHitSound();
        }
    }
    isDead() {
        return this.state == _constants__WEBPACK_IMPORTED_MODULE_0__["States"].dead;
    }
    getDirection() {
        return this.direction;
    }
    startHit(damage) {
        this.strength -= damage;
        this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["States"].hit;
        this.startedHit = new Date();
    }
    noWalkingKeyPressed() {
        for (let key in _constants__WEBPACK_IMPORTED_MODULE_0__["States"]) {
            if (this.controls[this.controlsMap[_constants__WEBPACK_IMPORTED_MODULE_0__["States"][key]]])
                return false;
        }
        return true;
    }
    checkStateChanged() {
        if (this.state !== this.previousState) {
            this.stateChanged = true;
            this.previousState = this.state;
        }
    }
    canWalk() {
        return (this.state != _constants__WEBPACK_IMPORTED_MODULE_0__["States"].ducking &&
            (!this.isKicking || (this.isKicking && this.isJumping)) &&
            !this.isPunching);
    }
}
;


/***/ }),

/***/ "./src/Sound.js":
/*!**********************!*\
  !*** ./src/Sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sound; });
let singletonSound = null;

class Sound {

  constructor() {

    let that = this;

    window.AudioContext = window.AudioContext || window.webkitAudioContext || {};
    this.audioContext = new AudioContext();
    this.swingFileBuffer = null;
    this.hitBuffer = null;
    this.dyingBuffer = null;
    this.loadingPromise = null;

    let swingPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/swing.wav', (buffer) => {
        that.swingFileBuffer = buffer;
        resolve();
      });
    });
    let hitPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/hit.wav', (buffer) => {
        that.hitBuffer = buffer;
        resolve();
      });
    });
    let dyingPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/dying.wav', (buffer) => {
        that.dyingBuffer = buffer;
        resolve();
      });
    });

    this.loadingPromise = Promise.all( [swingPromise, hitPromise] );

  }

  getLoadingPromise() {
    return this.loadingPromise;
  }

  playHitSound() {
    this.playSoundFromFileBuffer(this.hitBuffer);
  }

  playSwingSound() {
    this.playSoundFromFileBuffer(this.swingFileBuffer);
  }

  playDyingSound() {
    this.playSoundFromFileBuffer(this.dyingBuffer);
  }

  playSoundFromFileBuffer(fileBuffer) {
    let source = this.audioContext.createBufferSource();
    source.buffer = fileBuffer;
    source.connect(this.audioContext.destination);
    source.start(0);
  }

  loadWavFile(filename, callback) {
    let request = new XMLHttpRequest();
    let thisBuffer = null;
    let that = this;
    request.open('GET', filename, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = () => {
      this.audioContext.decodeAudioData(request.response, (buffer) => {
        let source = that.audioContext.createBufferSource();
        source.buffer = buffer;
        callback(buffer);
      }, (err) => {
        console.log('There was an error');
        console.log(err);
      });
    };
    request.send();
  }

  static getSingletonSound() {
    if(singletonSound === null) {
      singletonSound = new Sound();
    }
    return singletonSound;
  }

}


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: CONTROL_CONFIG, States, Directions, LOOP_TYPES, MAX_WIDTH, MAX_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_CONFIG", function() { return CONTROL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directions", function() { return Directions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOOP_TYPES", function() { return LOOP_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WIDTH", function() { return MAX_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_HEIGHT", function() { return MAX_HEIGHT; });
const CONTROL_CONFIG = [
    {
        up: 'up',
        down: 'down',
        left: 'left',
        right: 'right',
        punch: 'zero',
        kick: 'enter'
    },
    {
        up: 'altUp',
        down: 'altDown',
        left: 'altLeft',
        right: 'altRight',
        punch: 'z',
        kick: 'x'
    }
];
var States;
(function (States) {
    States["standing"] = "standing";
    States["walking"] = "walking";
    States["kicking"] = "kicking";
    States["punching"] = "punching";
    States["ducking"] = "ducking";
    States["duckPunch"] = "duckPunch";
    States["duckKick"] = "duckKick";
    States["jump"] = "jump";
    States["jumpKick"] = "jumpKick";
    States["jumpTop"] = "jumpTop";
    States["hit"] = "hit";
    States["dead"] = "dead";
})(States || (States = {}));
;
var Directions;
(function (Directions) {
    Directions["left"] = "left";
    Directions["right"] = "right";
})(Directions || (Directions = {}));
;
const LOOP_TYPES = {
    none: "none",
    loop: "loop",
    loopBackAndForth: "loopBackAndForth"
};
const MAX_WIDTH = 780;
const MAX_HEIGHT = 413;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KeyboardInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyboardInput */ "./src/KeyboardInput.ts");
/* harmony import */ var _AnimationFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationFactory */ "./src/AnimationFactory.ts");
/* harmony import */ var _NextAnimationFrameFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NextAnimationFrameFactory */ "./src/NextAnimationFrameFactory.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player */ "./src/Player.ts");
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Background */ "./src/Background.ts");
/* harmony import */ var _EventHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventHandlers */ "./src/EventHandlers.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sound */ "./src/Sound.js");










(function () {
    'use strict';
    /* Variables */
    let gameOver = false;
    let keyboardInput = new _KeyboardInput__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let request = new _NextAnimationFrameFactory__WEBPACK_IMPORTED_MODULE_3__["default"]();
    let canvas = _Canvas__WEBPACK_IMPORTED_MODULE_4__["default"].getSingletonCanvas(_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_8__["MAX_HEIGHT"]);
    let context = canvas.getContext();
    let animationFactory = _AnimationFactory__WEBPACK_IMPORTED_MODULE_2__["default"].getSingletonAnimationFactory();
    let player = null;
    let contextData = canvas.getContextData();
    let players = null;
    let background = new _Background__WEBPACK_IMPORTED_MODULE_6__["default"]();
    let sound = _Sound__WEBPACK_IMPORTED_MODULE_9__["default"].getSingletonSound();
    let promises = [
        background.getLoadingPromise(),
        animationFactory.getLoadingPromise(),
        sound.getLoadingPromise()
    ];
    /* Initiation */
    Promise.all(promises).then(() => {
        _EventHandlers__WEBPACK_IMPORTED_MODULE_7__["default"].attach(newGame);
        newGame();
        loop();
    });
    /* Functions */
    function newGame() {
        players = [new _Player__WEBPACK_IMPORTED_MODULE_5__["default"]("player1", Math.floor(_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_WIDTH"] * .75), Math.floor(_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_HEIGHT"] * .96), _constants__WEBPACK_IMPORTED_MODULE_8__["Directions"].left, keyboardInput.state, _constants__WEBPACK_IMPORTED_MODULE_8__["CONTROL_CONFIG"][0]), new _Player__WEBPACK_IMPORTED_MODULE_5__["default"]("player2", Math.floor(_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_WIDTH"] * .25), Math.floor(_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_HEIGHT"] * .96), _constants__WEBPACK_IMPORTED_MODULE_8__["Directions"].right, keyboardInput.state, _constants__WEBPACK_IMPORTED_MODULE_8__["CONTROL_CONFIG"][1])];
        gameOver = false;
    }
    function loop() {
        drawBackground();
        moveAndDrawObjects();
        drawHealthBars();
        if (!gameOver)
            isColliding();
        canvas.commit();
        window.requestAnimationFrame(loop);
    }
    function drawBackground() {
        background.drawImageData(contextData);
    }
    function moveAndDrawObjects() {
        for (let i = 0; i < players.length; i++) {
            if (!gameOver)
                players[i].progress();
            players[i].draw(contextData);
            if (players[i].isDead()) {
                gameOver = true;
            }
        }
    }
    function drawHealthBars() {
        canvas.drawHealthBar(40, 20, players[0].getStrength());
        canvas.drawHealthBar(_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_WIDTH"] - 240, 10, players[1].getStrength());
    }
    function isColliding() {
        /* Do something */
        for (let i = 0; i < players.length; i++) {
            let antagonist = findAntagonist(players[i], players);
            if (players[i].isColliding(antagonist)) {
                handleCollision(players[i], antagonist);
            }
        }
    }
    function findAntagonist(player, players) {
        for (let i = 0; i < players.length; i++) {
            if (players[i] != player)
                return players[i];
        }
        return null;
    }
    function handleCollision(player, antagonist) {
        player.handleCollision(antagonist);
    }
})();


/***/ }),

/***/ "./src/sprites.ts":
/*!************************!*\
  !*** ./src/sprites.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
        "id": 12,
        "name": "player1.kicking",
        "loopType": "none",
        "frames": [{
                "positionX": 251,
                "positionY": 5,
                "width": 73,
                "height": 90
            }, {
                "positionX": 201,
                "positionY": 9,
                "width": 37,
                "height": 82
            }]
    }, {
        "id": 11,
        "name": "player2.punching",
        "loopType": "loop",
        "frames": [{
                "positionX": 144,
                "positionY": 220,
                "width": 53,
                "height": 86
            }]
    }, {
        "id": 10,
        "name": "player2.walking",
        "loopType": "loop",
        "frames": [{
                "positionX": 973,
                "positionY": 217,
                "width": 22,
                "height": 91
            }, {
                "positionX": 898,
                "positionY": 217,
                "width": 36,
                "height": 89
            }]
    }, {
        "id": 9,
        "name": "player2.duckKick",
        "loopType": "none",
        "frames": [{
                "positionX": 695,
                "positionY": 229,
                "width": 36,
                "height": 68
            }, {
                "positionX": 609,
                "positionY": 229,
                "width": 72,
                "height": 68
            }]
    }, {
        "id": 8,
        "name": "player2.ducking",
        "loopType": "loop",
        "frames": [{
                "positionX": 552,
                "positionY": 231,
                "width": 50,
                "height": 63
            }]
    }, {
        "id": 7,
        "name": "player2.duckPunch",
        "loopType": "loop",
        "frames": [{
                "positionX": 475,
                "positionY": 229,
                "width": 68,
                "height": 68
            }]
    }, {
        "id": 6,
        "name": "player2.standing",
        "loopType": "loop",
        "frames": [{
                "positionX": 219,
                "positionY": 222,
                "width": 37,
                "height": 81
            }]
    }, {
        "id": 5,
        "name": "player2.kicking",
        "loopType": "none",
        "frames": [{
                "positionX": 337,
                "positionY": 217,
                "width": 75,
                "height": 91
            }, {
                "positionX": 423,
                "positionY": 222,
                "width": 36,
                "height": 81
            }]
    }, {
        "id": 4,
        "name": "player2.dead",
        "loopType": "loop",
        "frames": [{
                "positionX": 7,
                "positionY": 226,
                "width": 54,
                "height": 73
            }]
    }, {
        "id": 3,
        "name": "player2.hit",
        "loopType": "loop",
        "frames": [{
                "positionX": 84,
                "positionY": 222,
                "width": 38,
                "height": 81
            }]
    }, {
        "id": 2,
        "name": "player2.jump",
        "loopType": "loop",
        "frames": [{
                "positionX": 84,
                "positionY": 104,
                "width": 36,
                "height": 91
            }]
    }, {
        "id": 1,
        "name": "player2.jumpKick",
        "loopType": "none",
        "frames": [{
                "positionX": 7,
                "positionY": 100,
                "width": 56,
                "height": 99
            }]
    }, {
        "id": 0,
        "name": "player1.dead",
        "loopType": "loop",
        "frames": [{
                "positionX": 939,
                "positionY": 14,
                "width": 54,
                "height": 72
            }]
    }, {
        "id": 0,
        "name": "player1.hit",
        "loopType": "loop",
        "frames": [{
                "positionX": 880,
                "positionY": 9,
                "width": 36,
                "height": 82
            }]
    }, {
        "id": 0,
        "name": "player1.jumpKick",
        "loopType": "none",
        "frames": [{
                "positionX": 735,
                "positionY": 0,
                "width": 55,
                "height": 100
            }]
    }, {
        "id": 0,
        "name": "player1.jump",
        "loopType": "loop",
        "frames": [{
                "positionX": 676,
                "positionY": 5,
                "width": 37,
                "height": 90
            }]
    }, {
        "id": 0,
        "name": "player1.duckPunch",
        "loopType": "loop",
        "frames": [{
                "positionX": 457,
                "positionY": 16,
                "width": 68,
                "height": 68
            }]
    }, {
        "id": 0,
        "name": "player1.duckKick",
        "loopType": "loop",
        "frames": [{
                "positionX": 541,
                "positionY": 16,
                "width": 36,
                "height": 68
            }, {
                "positionX": 590,
                "positionY": 16,
                "width": 73,
                "height": 68
            }]
    }, {
        "id": 0,
        "name": "player1.ducking",
        "loopType": "loop",
        "frames": [{
                "positionX": 398,
                "positionY": 18,
                "width": 50,
                "height": 63
            }]
    }, {
        "id": 0,
        "name": "player1.punching",
        "loopType": "loop",
        "frames": [{
                "positionX": 330,
                "positionY": 7,
                "width": 52,
                "height": 86
            }]
    }, {
        "id": 0,
        "name": "player1.standing",
        "loopType": "loop",
        "frames": [{
                "positionX": 133,
                "positionY": 9,
                "width": 37,
                "height": 82
            }]
    }, {
        "id": 0,
        "name": "player1.walking",
        "loopType": "loop",
        "frames": [{
                "positionX": 5,
                "positionY": 5,
                "width": 22,
                "height": 90
            }, {
                "positionX": 66,
                "positionY": 5,
                "width": 36,
                "height": 88
            }]
    }]);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQW5pbWF0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50SGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0tleWJvYXJkSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05leHRBbmltYXRpb25GcmFtZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83NTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEw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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZE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LENBQUMsQ0FBQztTQUNkO2FBQ0k7WUFDSCxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDtRQUVELElBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQ0k7WUFDSCxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDtRQUVELEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVwRyw0Q0FBNEM7UUFDNUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksWUFBWSxHQUFH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bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmtmLWJvZHkge1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5rZi1oZWFkZXIge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VycmllciBOZXcnLCBDb3VyaWVyXFxufVxcblxcbi5rZi1jYW52YXMge1xcbiAgaGVpZ2h0OiA0MTNweDtcXG4gIHdpZHRoOiA3ODBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuaW1wb3J0IHsgTE9PUF9UWVBFUywgRGlyZWN0aW9ucyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9uIHtcblxuICBwcml2YXRlIGZyYW1lOiBudW1iZXI7XG4gIHByaXZhdGUgc3RhcnQ6IGFueTtcbiAgcHJpdmF0ZSBpbWFnZURhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZyYW1lc1BlclNlY29uZDogbnVtYmVyLFxuICAgIHByaXZhdGUgc3RhdGU6IGFueSxcbiAgICBwcml2YXRlIGltYWdlOiBhbnksXG4gICkge1xuICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuaW5pdGlhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiBudW1iZXIge1xuICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRGcmFtZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmZyYW1lc1t0aGlzLmZyYW1lXTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KHg6IG51bWJlciwgeTogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbnMsIGNvbnRleHREYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgb2Zmc2V0WDogbnVtYmVyO1xuICAgIGxldCBvZmZzZXRZOiBudW1iZXI7XG4gICAgbGV0IHdpZHRoOiBudW1iZXI7XG4gICAgbGV0IGhlaWdodDogbnVtYmVyO1xuXG4gICAgdGhpcy5mcmFtZSA9IHRoaXMuZGV0ZXJtaW5lRnJhbWUoKTtcbiAgICBpZih0aGlzLmZyYW1lID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgb2Zmc2V0WCA9IHRoaXMuc3RhdGUuZnJhbWVzW3RoaXMuZnJhbWVdLnBvc2l0aW9uWDtcbiAgICBvZmZzZXRZID0gdGhpcy5zdGF0ZS5mcmFtZXNbdGhpcy5mcmFtZV0ucG9zaXRpb25ZO1xuICAgIHdpZHRoID0gdGhpcy5zdGF0ZS5mcmFtZXNbdGhpcy5mcmFtZV0ud2lkdGg7XG4gICAgaGVpZ2h0ID0gdGhpcy5zdGF0ZS5mcmFtZXNbdGhpcy5mcmFtZV0uaGVpZ2h0O1xuXG4gICAgZm9yKGxldCBpID0gb2Zmc2V0WDsgaSA8IG9mZnNldFggKyB3aWR0aDsgaSsrKSB7XG4gICAgICBmb3IobGV0IGogPSBvZmZzZXRZOyBqIDwgb2Zmc2V0WSArIGhlaWdodDsgaisrKSB7XG4gICAgICAgIGxldCBpbWFnZUJhc2VQb2ludGVyID0gKGkgKiA0KSArIChqICogdGhpcy5pbWFnZS53aWR0aCAqIDQpO1xuXG4gICAgICAgIC8qIEZpeCB0aGUgaW1hZ2UgdG8gdGhlIGJvdHRvbSAqL1xuICAgICAgICBsZXQgY29udGV4dEJhc2VQb2ludGVyID0gKHkgLSBoZWlnaHQgKyBqIC0gb2Zmc2V0WSkgKiBjb250ZXh0RGF0YS53aWR0aCAqIDQ7XG5cbiAgICAgICAgaWYoZGlyZWN0aW9uID09IERpcmVjdGlvbnMubGVmdCkge1xuICAgICAgICAgIC8qIEZpeCB0aGUgaW1hZ2UgdG8gdGhlIHJpZ2h0ICovXG4gICAgICAgICAgY29udGV4dEJhc2VQb2ludGVyICs9ICh4IC0gd2lkdGggKyBpIC0gb2Zmc2V0WCkgKiA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8qIEZpeCB0aGUgaW1hZ2UgdG8gdGhlIGxlZnQgKi9cbiAgICAgICAgICBjb250ZXh0QmFzZVBvaW50ZXIgKz0gKHggKyB3aWR0aCAtIGkgKyBvZmZzZXRYKSAqIDQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmltYWdlRGF0YVtpbWFnZUJhc2VQb2ludGVyICsgM10gIT0gMCkge1xuICAgICAgICAgIGNvbnRleHREYXRhLmRhdGFbY29udGV4dEJhc2VQb2ludGVyICsgMF0gPSB0aGlzLmltYWdlRGF0YVtpbWFnZUJhc2VQb2ludGVyICsgMF07XG4gICAgICAgICAgY29udGV4dERhdGEuZGF0YVtjb250ZXh0QmFzZVBvaW50ZXIgKyAxXSA9IHRoaXMuaW1hZ2VEYXRhW2ltYWdlQmFzZVBvaW50ZXIgKyAxXTtcbiAgICAgICAgICBjb250ZXh0RGF0YS5kYXRhW2NvbnRleHRCYXNlUG9pbnRlciArIDJdID0gdGhpcy5pbWFnZURhdGFbaW1hZ2VCYXNlUG9pbnRlciArIDJdO1xuICAgICAgICAgIGNvbnRleHREYXRhLmRhdGFbY29udGV4dEJhc2VQb2ludGVyICsgM10gPSB0aGlzLmltYWdlRGF0YVtpbWFnZUJhc2VQb2ludGVyICsgM107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhdGUoKSB7XG4gICAgbGV0IG5ld0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBuZXdDb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgbmV3Q2FudmFzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICBuZXdDYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgbmV3Q29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCk7XG4gICAgdGhpcy5pbWFnZURhdGEgPSBuZXdDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmltYWdlLndpZHRoLCB0aGlzLmltYWdlLmhlaWdodCkuZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZGV0ZXJtaW5lRnJhbWUoKTogbnVtYmVyIHtcbiAgICBsZXQgbm93OiBhbnkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBlbGFwc2VkVGltZTogbnVtYmVyID0gKCtub3cpIC0gKCt0aGlzLnN0YXJ0KTtcbiAgICBsZXQgZnJhbWU6IG51bWJlciA9IE1hdGguZmxvb3IodGhpcy5mcmFtZXNQZXJTZWNvbmQgKiBlbGFwc2VkVGltZSk7XG4gICAgbGV0IGNvbXBGcmFtZTogbnVtYmVyO1xuXG4gICAgaWYodGhpcy5zdGF0ZS5sb29wVHlwZSA9PSBMT09QX1RZUEVTLm5vbmUpIHtcbiAgICAgIC8qIElmIHdlIGhpdCB0aGUgZW5kIG9mIHRoZSBsb29wLCBrZWVwIHJldHVybmluZyB0aGUgbGFzdCBmcmFtZSAqL1xuICAgICAgaWYoZnJhbWUgPj0gdGhpcy5zdGF0ZS5mcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGZyYW1lID0gdGhpcy5zdGF0ZS5mcmFtZXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLnN0YXRlLmxvb3BUeXBlID09IExPT1BfVFlQRVMubG9vcCAmJiB0aGlzLnN0YXRlLmZyYW1lcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZyYW1lID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLnN0YXRlLmxvb3BUeXBlID09IExPT1BfVFlQRVMubG9vcCkge1xuICAgICAgZnJhbWUgJT0gdGhpcy5zdGF0ZS5mcmFtZXMubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuc3RhdGUubG9vcFR5cGUgPT0gTE9PUF9UWVBFUy5sb29wQmFja0FuZEZvcnRoKSB7XG4gICAgICBsZXQgY29tcEZyYW1lOiBudW1iZXIgPSBmcmFtZSAlIE1hdGguZmxvb3IodGhpcy5zdGF0ZS5mcmFtZXMubGVuZ3RoICogMS41KTtcbiAgICAgIGlmKGNvbXBGcmFtZSA+PSB0aGlzLnN0YXRlLmZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgZnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUuZnJhbWVzLmxlbmd0aCAqIDEuNSkgLSBjb21wRnJhbWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZnJhbWUgPSBjb21wRnJhbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZnJhbWUgPSAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59O1xuIiwiaW1wb3J0IHNwcml0ZXMgZnJvbSAnLi9zcHJpdGVzJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi9BbmltYXRpb24nO1xuaW1wb3J0IHsgTE9PUF9UWVBFUywgU3RhdGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBGUkFNRVNfUEVSX1NFQ09ORCA9IDggLyAxMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb25GYWN0b3J5IHtcblxuICBwcml2YXRlIGltYWdlOiBhbnk7XG4gIHByaXZhdGUgbG9hZGluZ1Byb21pc2U6IGFueTtcbiAgcHJpdmF0ZSBpbWFnZURhdGE6IGFueTtcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uQW5pbWF0aW9uRmFjdG9yeTogQW5pbWF0aW9uRmFjdG9yeSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHRoYXQ6IGFueSA9IHRoaXM7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSAnLi9pbWcvcGxheWVycy5wbmcnO1xuICAgIHRoaXMubG9hZGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGF0LmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGF0LmltYWdlLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhhdC5pbWFnZS5oZWlnaHQ7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoYXQuaW1hZ2UsIDAsIDApO1xuICAgICAgICB0aGF0LmltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9hZGluZ1Byb21pc2UoKXtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nUHJvbWlzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXJBbmltYXRpb25zKGJhc2VOYW1lOiBzdHJpbmcgPSBcInBsYXllcjFcIikge1xuICAgIGxldCBhbmltYXRpb25zOiBhbnkgPSB7fTtcbiAgICBmb3IobGV0IGtleSBpbiBTdGF0ZXMpIHtcbiAgICAgIGxldCBzdGF0ZSA9IFN0YXRlc1trZXldO1xuICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuZ2V0U3ByaXRlV2l0aE5hbWUoc3ByaXRlcywgYmFzZU5hbWUgKyAnLicgKyBzdGF0ZSk7XG4gICAgICBhbmltYXRpb25zW2Jhc2VOYW1lICsgJy4nICsgc3RhdGVdID0gbmV3IEFuaW1hdGlvbihcbiAgICAgICAgRlJBTUVTX1BFUl9TRUNPTkQsXG4gICAgICAgIHNwcml0ZSxcbiAgICAgICAgdGhpcy5pbWFnZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW1hZ2VEYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VEYXRhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRTaW5nbGV0b25BbmltYXRpb25GYWN0b3J5KCkge1xuICAgIGlmKHRoaXMuc2luZ2xldG9uQW5pbWF0aW9uRmFjdG9yeSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zaW5nbGV0b25BbmltYXRpb25GYWN0b3J5ID0gbmV3IEFuaW1hdGlvbkZhY3RvcnkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uQW5pbWF0aW9uRmFjdG9yeTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3ByaXRlV2l0aE5hbWUoc3ByaXRlcywgbmFtZSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihzcHJpdGVzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHNwcml0ZXNbaV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcblxuICBwcml2YXRlIGltYWdlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIGxvYWRpbmdQcm9taXNlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIGltYWdlRGF0YTogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgdGhhdDogYW55ID0gdGhpcztcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltZy9iYWNrZ3JvdW5kLnBuZyc7XG4gICAgdGhpcy5sb2FkaW5nUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGxldCBuZXdDb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIG5ld0NhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgIG5ld0NhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcbiAgICAgICAgbmV3Q29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCk7XG4gICAgICAgIHRoYXQuaW1hZ2VEYXRhID0gbmV3Q29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgbmV3Q2FudmFzLndpZHRoLCBuZXdDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMb2FkaW5nUHJvbWlzZSgpe1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdQcm9taXNlO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY3R4KSB7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3SW1hZ2VEYXRhKGNvbnRleHREYXRhKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnRleHREYXRhLmRhdGFbaV0gPSB0aGlzLmltYWdlRGF0YS5kYXRhW2ldO1xuICAgIH1cbiAgfVxuXG59XG4iLCJjb25zdCBCQUNLR1JPVU5EID0gWzAsIDQwLCA1MywgMjU2XTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblxuICBwcml2YXRlIGNhbnZhc1BvaW50ZXI7XG4gIHByaXZhdGUgY29udGV4dDtcbiAgcHJpdmF0ZSBjb250ZXh0RGF0YTtcbiAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uQ2FudmFzOiBDYW52YXMgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKG1heFdpZHRoLCBtYXhIZWlnaHQsIGJhY2tncm91bmQgPSBCQUNLR1JPVU5EKSB7XG4gICAgdGhpcy5jYW52YXNQb2ludGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzUG9pbnRlci5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5jYW52YXNQb2ludGVyLndpZHRoID0gbWF4V2lkdGg7XG4gICAgdGhpcy5jYW52YXNQb2ludGVyLmhlaWdodCA9IG1heEhlaWdodDtcbiAgICB0aGlzLmNvbnRleHREYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBtYXhXaWR0aCwgbWF4SGVpZ2h0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhc1BvaW50ZXIud2lkdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXNQb2ludGVyLmhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZXh0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBjb21taXQoKSB7XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmNvbnRleHREYXRhLCAwLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckNhbnZhcygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dERhdGEuZGF0YTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGRhdGFbaSArIDBdID0gQkFDS0dST1VORFswXTtcbiAgICAgICAgZGF0YVtpICsgMV0gPSBCQUNLR1JPVU5EWzFdO1xuICAgICAgICBkYXRhW2kgKyAyXSA9IEJBQ0tHUk9VTkRbMl07XG4gICAgICAgIGRhdGFbaSArIDNdID0gQkFDS0dST1VORFszXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZHJhd0hlYWx0aEJhcih4LCB5LCBoZWFsdGgpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dERhdGEuZGF0YTtcbiAgICBjb25zdCBmYWN0b3IgPSAyO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMCAqIGZhY3RvcjsgaSsrKSB7XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgNDA7IGorKykge1xuICAgICAgICBsZXQgYmFzZSA9ICggKHggKyBpKSAqIDQpICsgKCAoeSArIGopICogdGhpcy53aWR0aCAqIDQpO1xuICAgICAgICBpZihoZWFsdGggPiBNYXRoLmZsb29yKGkgLyBmYWN0b3IpICkge1xuICAgICAgICAgIGRhdGFbYmFzZSArIDBdID0gMjU1O1xuICAgICAgICAgIGRhdGFbYmFzZSArIDFdID0gMjU1O1xuICAgICAgICAgIGRhdGFbYmFzZSArIDJdID0gMDtcbiAgICAgICAgICBkYXRhW2Jhc2UgKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhW2Jhc2UgKyAwXSA9IDI1NTtcbiAgICAgICAgICBkYXRhW2Jhc2UgKyAxXSA9IDA7XG4gICAgICAgICAgZGF0YVtiYXNlICsgMl0gPSAwO1xuICAgICAgICAgIGRhdGFbYmFzZSArIDNdID0gMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRyYXdTY29yZShyZWQsIGJsdWUpIHtcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiYm9sZCAzMnB4ICdDb3VyaWVyIE5ldydcIjtcbiAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChyZWQsIHRoaXMuY2FudmFzUG9pbnRlci53aWR0aCAvIDIgLSAxMDAsIDUwKTtcblxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYmx1ZSwgdGhpcy5jYW52YXNQb2ludGVyLndpZHRoIC8gMiArIDEwMCwgNTApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRTaW5nbGV0b25DYW52YXMobWF4V2lkdGggPSAwLCBtYXhIZWlnaHQgPSAwLCBiYWNrZ3JvdW5kID0gQkFDS0dST1VORCkge1xuICAgIGlmKHRoaXMuc2luZ2xldG9uQ2FudmFzID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNpbmdsZXRvbkNhbnZhcyA9IG5ldyBDYW52YXMobWF4V2lkdGgsIG1heEhlaWdodCwgYmFja2dyb3VuZCA9IEJBQ0tHUk9VTkQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaW5nbGV0b25DYW52YXM7XG4gIH1cblxufTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEFuaW1hdGlvbkZhY3RvcnkgZnJvbSAnLi9BbmltYXRpb25GYWN0b3J5JztcbmltcG9ydCB7IERpcmVjdGlvbnMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYW5pbWF0aW9uRmFjdG9yeTogQW5pbWF0aW9uRmFjdG9yeSA9IEFuaW1hdGlvbkZhY3RvcnkuZ2V0U2luZ2xldG9uQW5pbWF0aW9uRmFjdG9yeSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0NvbGxpZGluZyhzb3VyY2U6IFBsYXllciwgdGFyZ2V0OiBQbGF5ZXIpOiBib29sZWFuIHtcbiAgICBpZihDb2xsaXNpb24uc3F1YXJlQm94Q29sbGlzaW9uKHNvdXJjZSwgdGFyZ2V0KSAmJiBDb2xsaXNpb24ucGl4ZWxDb2xsaXNpb24oc291cmNlLCB0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc3F1YXJlQm94Q29sbGlzaW9uKHNvdXJjZVBsYXllcjogUGxheWVyLCB0YXJnZXRQbGF5ZXI6IFBsYXllcik6IGJvb2xlYW4ge1xuICAgIGxldCBzb3VyY2UgPSBzb3VyY2VQbGF5ZXIuZ2V0Q3VycmVudEJveCgpO1xuICAgIGxldCB0YXJnZXQgPSB0YXJnZXRQbGF5ZXIuZ2V0Q3VycmVudEJveCgpO1xuXG4gICAgbGV0IHN0YXJ0VGhpc1ggPSBzb3VyY2UueDtcbiAgICBsZXQgc3RhcnRUaGlzWSA9IHNvdXJjZS55O1xuICAgIGxldCBlbmRUaGlzWCA9IHN0YXJ0VGhpc1ggKyBzb3VyY2Uud2lkdGg7XG4gICAgbGV0IGVuZFRoaXNZID0gc3RhcnRUaGlzWSArIHNvdXJjZS5oZWlnaHQ7XG5cbiAgICBsZXQgc3RhcnRPcHBvbmVudFggPSB0YXJnZXQueDtcbiAgICBsZXQgc3RhcnRPcHBvbmVudFkgPSB0YXJnZXQueTtcbiAgICBsZXQgZW5kT3Bwb25lbnRYID0gc3RhcnRPcHBvbmVudFggKyB0YXJnZXQud2lkdGg7XG4gICAgbGV0IGVuZE9wcG9uZW50WSA9IHN0YXJ0T3Bwb25lbnRZICsgdGFyZ2V0LmhlaWdodDtcblxuICAgIGlmKFxuICAgICAgKHN0YXJ0VGhpc1ggPj0gc3RhcnRPcHBvbmVudFggJiZcbiAgICAgIHN0YXJ0VGhpc1ggPD0gZW5kT3Bwb25lbnRYICYmXG4gICAgICBzdGFydFRoaXNZID49IHN0YXJ0T3Bwb25lbnRZICYmXG4gICAgICBzdGFydFRoaXNZIDw9IGVuZE9wcG9uZW50WSkgfHxcblxuICAgICAgKGVuZFRoaXNYID49IHN0YXJ0T3Bwb25lbnRYICYmXG4gICAgICBlbmRUaGlzWCA8PSBlbmRPcHBvbmVudFggJiZcbiAgICAgIGVuZFRoaXNZID49IHN0YXJ0T3Bwb25lbnRZICYmXG4gICAgICBlbmRUaGlzWSA8PSBlbmRPcHBvbmVudFkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGl4ZWxDb2xsaXNpb24oc291cmNlUGxheWVyOiBQbGF5ZXIsIHRhcmdldFBsYXllcjogUGxheWVyKTogYm9vbGVhbiB7XG5cbiAgICBsZXQgc291cmNlID0gc291cmNlUGxheWVyLmdldEN1cnJlbnRCb3goKTtcbiAgICBsZXQgdGFyZ2V0ID0gdGFyZ2V0UGxheWVyLmdldEN1cnJlbnRCb3goKTtcbiAgICBsZXQgc291cmNlRnJhbWUgPSBzb3VyY2VQbGF5ZXIuZ2V0Q3VycmVudEZyYW1lKCk7XG4gICAgbGV0IHRhcmdldEZyYW1lID0gdGFyZ2V0UGxheWVyLmdldEN1cnJlbnRGcmFtZSgpO1xuICAgIGxldCBpbWFnZURhdGEgPSB0aGlzLmFuaW1hdGlvbkZhY3RvcnkuZ2V0SW1hZ2VEYXRhKCk7XG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgaGVpZ2h0ID0gMDtcblxuICAgIC8qIDEuIElzb2xhdGUgdGhlIHBhcnQgd2hlcmUgdGhlcmUgaXMgb3ZlcmxhcCAqL1xuXG4gICAgLyogQmFzZSByZXNldCB0aGUgY29vcmRpbmF0ZXMgKi9cbiAgICBpZihzb3VyY2UueCA+IHRhcmdldC54KSB7XG4gICAgICBzb3VyY2UueCAtPSB0YXJnZXQueDtcbiAgICAgIHRhcmdldC54ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0YXJnZXQueCAtPSBzb3VyY2UueDtcbiAgICAgIHNvdXJjZS54ID0gMDtcbiAgICB9XG5cbiAgICBpZihzb3VyY2UueSA+IHRhcmdldC55KSB7XG4gICAgICBzb3VyY2UueSAtPSB0YXJnZXQueTtcbiAgICAgIHRhcmdldC55ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0YXJnZXQueSAtPSBzb3VyY2UueTtcbiAgICAgIHNvdXJjZS55ID0gMDtcbiAgICB9XG5cbiAgICB3aWR0aCA9IChzb3VyY2UueCA9PT0gMCA/IE1hdGguYWJzKHRhcmdldC54IC0gdGFyZ2V0LndpZHRoKSA6IE1hdGguYWJzKHNvdXJjZS54IC0gc291cmNlLndpZHRoKSk7XG4gICAgaGVpZ2h0ID0gKHNvdXJjZS55ID09PSAwID8gTWF0aC5hYnModGFyZ2V0LnkgLSB0YXJnZXQuaGVpZ2h0KSA6IE1hdGguYWJzKHNvdXJjZS55IC0gc291cmNlLmhlaWdodCkpO1xuXG4gICAgLyogRGV0ZXJtaW5lIHdoZXJlIHRvIHN0YXJ0IGluIHRoZSBmcmFtZXMgKi9cbiAgICBsZXQgc291cmNlU3RhcnRYID0gKHRhcmdldC54ID4gc291cmNlLnggPyB0YXJnZXQueCA6IDApO1xuICAgIGxldCBzb3VyY2VTdGFydFkgPSAodGFyZ2V0LnkgPiBzb3VyY2UueSA/IHRhcmdldC55IDogMCk7XG4gICAgbGV0IHRhcmdldFN0YXJ0WCA9IChzb3VyY2UueCA+IHRhcmdldC54ID8gc291cmNlLnggOiAwKTtcbiAgICBsZXQgdGFyZ2V0U3RhcnRZID0gKHNvdXJjZS55ID4gdGFyZ2V0LnkgPyBzb3VyY2UueSA6IDApO1xuXG4gICAgLyogMy4gQ29tcGFyZSB0aGUgZnJhbWVzIGFuZCBzZWUgaWYgY29sbGlzaW9uIG9jY3VycyAqL1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgLyogQ2FsY3VsYXRlIHRoZSByb3cgZm9yIHRoZSBzb3VyY2UgaW1hZ2UgKi9cbiAgICAgICAgbGV0IHNvdXJjZUJhc2UgPSAoc291cmNlRnJhbWUucG9zaXRpb25ZICsgaikgKiBpbWFnZURhdGEud2lkdGggKiA0O1xuICAgICAgICBsZXQgc291cmNlSW5jcmVhc2UgPSAoc291cmNlRnJhbWUucG9zaXRpb25YICsgaSkgKiA0O1xuXG4gICAgICAgIC8qIENoZWNrIGlmIHRoZSBzb3VyY2UgaXMgZmxpcHBlZCAqL1xuICAgICAgICBpZihzb3VyY2VQbGF5ZXIuZ2V0RGlyZWN0aW9uKCkgPT0gRGlyZWN0aW9ucy5sZWZ0KSB7XG4gICAgICAgICAgc291cmNlQmFzZSArPSAoIChzb3VyY2VGcmFtZS5wb3NpdGlvblggKyBzb3VyY2Uud2lkdGgpICogNCkgLSBzb3VyY2VJbmNyZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzb3VyY2VCYXNlICs9IHNvdXJjZUluY3JlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhcmdldEJhc2UgPSAoKHRhcmdldEZyYW1lLnBvc2l0aW9uWSArIGopICogaW1hZ2VEYXRhLndpZHRoICogNCk7XG4gICAgICAgIGxldCB0YXJnZXRJbmNyZWFzZSA9ICgodGFyZ2V0RnJhbWUucG9zaXRpb25YICsgaSkgKiA0KTtcblxuICAgICAgICBpZih0YXJnZXRQbGF5ZXIuZ2V0RGlyZWN0aW9uKCkgPT0gRGlyZWN0aW9ucy5sZWZ0KSB7XG4gICAgICAgICAgdGFyZ2V0QmFzZSArPSAoICh0YXJnZXRGcmFtZS5wb3NpdGlvblggKyB0YXJnZXQud2lkdGgpICogNCkgLSB0YXJnZXRJbmNyZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRCYXNlICs9IHRhcmdldEluY3JlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaW1hZ2VEYXRhLmRhdGFbc291cmNlQmFzZSArIDNdICE9PSAwICYmIGltYWdlRGF0YS5kYXRhW3RhcmdldEJhc2UgKyAzXSAhPT0gMCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXJzIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXR0YWNoKG5ld0dhbWUpIHtcblxuICAgIGxldCByZXNldEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQtZ2FtZS1idXR0b24nKTtcbiAgICByZXNldEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBuZXdHYW1lKCk7XG4gICAgICByZXNldEdhbWVCdXR0b24uYmx1cigpO1xuICAgIH0pO1xuXG4gICAgbGV0IGNvbnRyb2xzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzJyk7XG4gICAgY29udHJvbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhbGVydChgQ29udHJvbHM6XG5cblBsYXllcjE6XG5cbkp1bXAgPSBVcCBhcnJvd1xuRHVjayA9IERvd24gYXJyb3dcbkxlZnQgPSBMZWZ0IGFycm93XG5SaWdodCA9IFJpZ2h0IGFycm93XG5LaWNrID0gRW50ZXJcblB1bmNoID0gWmVyb1xuXG5QbGF5ZXIyOlxuXG5KdW1wID0gJ3cnXG5EdWNrID0gJ3MnXG5MZWZ0ID0gJ2EnXG5SaWdodCA9ICdkJ1xuS2ljayA9ICd6J1xuUHVuY2ggPSAneCdgKTtcbiAgICAgIGNvbnRyb2xzQnV0dG9uLmJsdXIoKTtcbiAgICB9KTtcblxuICB9XG59XG4iLCJjb25zdCBrZXlMZWZ0ID0gMzc7XG5jb25zdCBrZXlVcCA9IDM4O1xuY29uc3Qga2V5UmlnaHQgPSAzOTtcbmNvbnN0IGtleURvd24gPSA0MDtcbmNvbnN0IGtleVNwYWNlID0gMzI7IC8vIHNwYWNlXG5cbmNvbnN0IGEgPSA2NTsgLy8gYVxuY29uc3QgZCA9IDY4OyAvLyBkXG5jb25zdCB3ID0gODc7IC8vIHdcbmNvbnN0IHMgPSA4MzsgLy8gc1xuY29uc3QgeiA9IDkwOyAvLyB6XG5jb25zdCB4ID0gODg7IC8vIHhcblxuY29uc3QgZW50ZXIgPSAxMzsgLy8gZW50ZXJcbmNvbnN0IHplcm8gPSA0ODsgLy8gMFxuXG5jb25zdCBteVRpbWVyID0gNDA7IC8vIDQwIG1zXG5cbmNvbnN0IHN0YXRlID0ge1xuICB1cDogZmFsc2UsXG4gIGRvd246IGZhbHNlLFxuICBsZWZ0OiBmYWxzZSxcbiAgcmlnaHQ6IGZhbHNlLFxuICBhbHRVcDogZmFsc2UsXG4gIGFsdERvd246IGZhbHNlLFxuICBhbHRMZWZ0OiBmYWxzZSxcbiAgYWx0UmlnaHQ6IGZhbHNlLFxuICB6OiBmYWxzZSxcbiAgeDogZmFsc2UsXG4gIHNwYWNlOiBmYWxzZSxcbiAgdG9nZ2xlOiBmYWxzZSxcbiAgc3VpY2lkZTogZmFsc2UsXG4gIGVudGVyOiBmYWxzZSxcbiAgemVybzogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZElucHV0IHtcblxuICBwdWJsaWMgc3RhdGljIHNpbmdsZXRvbktleWJvYXJkSW5wdXQ6IEtleWJvYXJkSW5wdXQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBLZXlib2FyZElucHV0LmtleURvd25GdW5jdGlvbik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBLZXlib2FyZElucHV0LmtleVVwRnVuY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgS2V5Ym9hcmRJbnB1dC5rZXlEb3duRnVuY3Rpb24pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgS2V5Ym9hcmRJbnB1dC5rZXlVcEZ1bmN0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGtleURvd25GdW5jdGlvbihlKSB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcmVsZWFzZSA9IGU7XG5cbiAgICBzd2l0Y2gocmVsZWFzZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIGtleVVwOlxuICAgICAgICBzdGF0ZS51cCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlEb3duOlxuICAgICAgICBzdGF0ZS5kb3duID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleUxlZnQ6XG4gICAgICAgIHN0YXRlLmxlZnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5UmlnaHQ6XG4gICAgICAgIHN0YXRlLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleVNwYWNlOlxuICAgICAgICBzdGF0ZS5zcGFjZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB3OlxuICAgICAgICBzdGF0ZS5hbHRVcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzOlxuICAgICAgICBzdGF0ZS5hbHREb3duID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGE6XG4gICAgICAgIHN0YXRlLmFsdExlZnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZDpcbiAgICAgICAgc3RhdGUuYWx0UmlnaHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZW50ZXI6XG4gICAgICAgIHN0YXRlLmVudGVyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHplcm86XG4gICAgICAgIHN0YXRlLnplcm8gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgeDpcbiAgICAgICAgc3RhdGUueCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB6OlxuICAgICAgICBzdGF0ZS56ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBrZXlVcEZ1bmN0aW9uKGUpIHtcblxuICAgIGxldCByZWxlYXNlID0gZTtcblxuICAgIHN3aXRjaChyZWxlYXNlLmtleUNvZGUpIHtcbiAgICAgIGNhc2Uga2V5VXA6XG4gICAgICAgIHN0YXRlLnVwID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlEb3duOlxuICAgICAgICBzdGF0ZS5kb3duID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlMZWZ0OlxuICAgICAgICBzdGF0ZS5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlSaWdodDpcbiAgICAgICAgc3RhdGUucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleVNwYWNlOlxuICAgICAgICBzdGF0ZS5zcGFjZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdzpcbiAgICAgICAgc3RhdGUuYWx0VXAgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHM6XG4gICAgICAgIHN0YXRlLmFsdERvd24gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGE6XG4gICAgICAgIHN0YXRlLmFsdExlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGQ6XG4gICAgICAgIHN0YXRlLmFsdFJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB4OlxuICAgICAgICBzdGF0ZS54ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB6OlxuICAgICAgICBzdGF0ZS56ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBlbnRlcjpcbiAgICAgICAgc3RhdGUuZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHplcm86XG4gICAgICAgIHN0YXRlLnplcm8gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFNpbmdsZXRvbktleWJvYXJkSW5wdXQoKSB7XG4gICAgaWYodGhpcy5zaW5nbGV0b25LZXlib2FyZElucHV0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNpbmdsZXRvbktleWJvYXJkSW5wdXQgPSBuZXcgS2V5Ym9hcmRJbnB1dCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaW5nbGV0b25LZXlib2FyZElucHV0O1xuICB9XG5cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0QW5pbWF0aW9uRnJhbWVGYWN0b3J5IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG5cbiAgXHR2YXIgb3JpZ2luYWxXZWJraXRNZXRob2Q7XG4gIFx0dmFyIHdyYXBwZXIgPSBudWxsO1xuICBcdHZhciBjYWxsYmFjayA9IG51bGw7XG4gIFx0dmFyIGdlY2tvVmVyc2lvbiA9IDA7XG4gIFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIFx0dmFyIGluZGV4ID0gMDtcbiAgXHR2YXIgc2VsZiA9IHRoaXM7XG5cbiAgXHQvLyBXb3JrYXJvdW5kIGZvciBDaHJvbWUgMTAgYnVnIHdoZXJlIENocm9tZVxuICBcdC8vIGRvZXMgbm90IHBhc3MgdGhlIHRpbWUgdG8gdGhlIGFuaW1hdGlvbiBmdW5jdGlvblxuXG4gIFx0aWYod2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSl7XG4gIFx0XHQvLyBEZWZpbmUgdGhlIHdyYXBwZXJcblxuICBcdFx0d3JhcHBlciA9IGZ1bmN0aW9uKHRpbWUpe1xuICBcdFx0XHRpZih0aW1lID09PSB1bmRlZmluZWQpe1xuICBcdFx0XHRcdHRpbWUgPSArbmV3IERhdGUoKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRzZWxmLmNhbGxiYWNrKHRpbWUpO1xuICBcdFx0fTtcblxuICBcdFx0Ly8gTWFrZSB0aGUgc3dpdGNoXG5cbiAgXHRcdG9yaWdpbmFsV2Via2l0TWV0aG9kID0gd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuICBcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KXtcbiAgXHRcdFx0c2VsZi5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gIFx0XHRcdC8vIEJyb3dzZXIgY2FsbHMgd3JhcHBlcjsgd3JhcHBlciBjYWxscyBjYWxsYmFja1xuXG4gIFx0XHRcdG9yaWdpbmFsV2Via2l0TWV0aG9kKHdyYXBwZXIsIGVsZW1lbnQpO1xuICBcdFx0fVxuICBcdH0gLy8gRW5kIENocm9tZSAxMCB3b3JrYXJvdW5kXG5cbiAgXHQvLyBXb3JrYXJvdW5kIGZvciBHZWNrbyAyLjAsIHdoaWNoIGhhcyBhIGJ1ZyBpbiBtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0aGF0IHJlc3RyaWN0cyBhbmltYXRpb25zIHRvIDMwLTQwIGZwcy5cblxuICBcdGlmKHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpe1xuICBcdFx0Ly8gQ2hlY2sgdGhlIEdlY2tvIHZlcnNvbi4gR2Vja28gaXMgdXNlZCBieSBicm93c2VycyBvdGhlciB0aGFuIEZpcmVmb3guIEdlY2tvIDIuMCBjb3JyZXNwb25kcyB0byBGaXJlZm94IDQuMC5cblxuICBcdFx0aW5kZXggPSB1c2VyQWdlbnQuaW5kZXhPZigncnY6Jyk7XG5cbiAgXHRcdGlmKHVzZXJBZ2VudC5pbmRleE9mKCdHZWNrbycpICE9IC0xKXtcbiAgXHRcdFx0Z2Vja29WZXJzaW9uID0gdXNlckFnZW50LnN1YnN0cihpbmRleCArIDMsIDMpO1xuXG4gIFx0XHRcdGlmKGdlY2tvVmVyc2lvbiA9PT0gJzIuMCcpe1xuICBcdFx0XHRcdC8vIEZvcmNlcyB0aGUgcmV0dXJuIHN0YXRlbWVudCB0byBmYWxsIHRocm91Z2ggdG8gdGhlIHNldFRpbWVvdXQoKSBmdW5jdGlvbi5cblxuICBcdFx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQ7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9IC8vIEVuZCBHZWNrbyAyLjAgd29ya2Fyb3VuZFxuXG4gIFx0cmV0dXJuICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gIFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gIFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gIFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICBcdFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cbiAgXHRcdGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gIFx0XHRcdHZhciBzdGFydDtcbiAgXHRcdFx0dmFyIGZpbmlzaDtcblxuICBcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIFx0XHRcdFx0c3RhcnQgPSArbmV3IERhdGUoKTtcbiAgXHRcdFx0XHRjYWxsYmFjayhzdGFydCk7XG4gIFx0XHRcdFx0ZmluaXNoID0gK25ldyBEYXRlKCk7XG5cbiAgXHRcdFx0XHRzZWxmLnRpbWVvdXQgPSAxMDAwIC8gNjAgLSAoZmluaXNoIC0gc3RhcnQpO1xuICBcdFx0XHR9LCBzZWxmLnRpbWVvdXQpO1xuICBcdFx0fVxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBNQVhfV0lEVEgsIE1BWF9IRUlHSFQsIFN0YXRlcywgRGlyZWN0aW9ucyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBBbmltYXRpb25GYWN0b3J5IGZyb20gJy4vQW5pbWF0aW9uRmFjdG9yeSc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4vQW5pbWF0aW9uJztcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24nO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgU291bmQgZnJvbSAnLi9Tb3VuZCc7XG5cbmNvbnN0IERFQlVHOiBib29sZWFuID0gdHJ1ZTtcbmNvbnN0IFNURVAgPSAxMDg7XG5jb25zdCBESVJFQ1RJT05fQ09SUkVDVElPTiA9IDY7XG5jb25zdCBKVU1QU1RFUFMgPSBbIC00LCAtMywgLTIsIC0xLCAxLCAyLCAzLCA0IF07XG5jb25zdCBQVU5DSF9EQU1BR0UgPSA1O1xuY29uc3QgS0lDS19EQU1BR0UgPSAxMDtcbmNvbnN0IEhJVF9USU1FID0gNDAwO1xuY29uc3QgV0lEVEhfQk9VTkRBUlkgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblxuICBwcml2YXRlIHN0YXRlOiBTdGF0ZXMgPSBTdGF0ZXMuc3RhbmRpbmc7XG4gIHByaXZhdGUgc3RyZW5ndGg6IG51bWJlciA9IDEwMDtcbiAgcHJpdmF0ZSBzdGF0ZUNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwcmV2aW91c1N0YXRlOiBTdGF0ZXMgPSBTdGF0ZXMuc3RhbmRpbmc7XG4gIHByaXZhdGUgYW5pbWF0aW9uczogQW5pbWF0aW9uW107XG4gIHByaXZhdGUgbGFzdFByb2dyZXNzTW9tZW50OiBhbnk7XG4gIHByaXZhdGUgaXNKdW1waW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUganVtcEluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHlCZWZvcmVKdW1waW5nOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHN0YXJ0ZWRKdW1waW5nOiBhbnkgPSAwO1xuICBwcml2YXRlIGlzUHVuY2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBoYXNQdW5jaGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaXNLaWNraW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaGFzS2lja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhcnRlZEJlaW5nSGl0OiBhbnkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdGFydGVkUHVuY2hpbmc6IGFueSA9IDA7XG4gIHByaXZhdGUgc3RhcnRlZEtpY2tpbmc6IGFueSA9IDA7XG4gIHByaXZhdGUgc3RhcnRlZEhpdDogYW55ID0gMDtcbiAgcHJpdmF0ZSBoYXNEaWVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc291bmQ6IFNvdW5kID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIHBvc2l0aW9uWDogbnVtYmVyLFxuICAgIHByaXZhdGUgcG9zaXRpb25ZOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IERpcmVjdGlvbnMsXG4gICAgcHJpdmF0ZSBjb250cm9sczogYW55LFxuICAgIHByaXZhdGUgY29udHJvbHNNYXA6IGFueSxcbiAgKSB7XG4gICAgdGhpcy5pbml0aWF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWF0ZSgpIHtcbiAgICBsZXQgYW5pbWF0aW9uRmFjdG9yeSA9IEFuaW1hdGlvbkZhY3RvcnkuZ2V0U2luZ2xldG9uQW5pbWF0aW9uRmFjdG9yeSgpO1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbkZhY3RvcnkuZ2V0UGxheWVyQW5pbWF0aW9ucyh0aGlzLm5hbWUpO1xuICAgIHRoaXMuc291bmQgPSBTb3VuZC5nZXRTaW5nbGV0b25Tb3VuZCgpO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY2FudmFzKSB7XG4gICAgbGV0IGNvcnJlY3RlZFggPSBNYXRoLmZsb29yKHRoaXMucG9zaXRpb25YKTtcbiAgICBjb3JyZWN0ZWRYICs9ICh0aGlzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9ucy5sZWZ0ID8gRElSRUNUSU9OX0NPUlJFQ1RJT04gOiAtMSAqIERJUkVDVElPTl9DT1JSRUNUSU9OKTtcblxuICAgIGlmKHRoaXMuc3RhdGVDaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5hbmltYXRpb25zW3RoaXMubmFtZSArICcuJyArIHRoaXMuc3RhdGVdLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpb25zW3RoaXMubmFtZSArICcuJyArIHRoaXMuc3RhdGVdLmRyYXcoXG4gICAgICBjb3JyZWN0ZWRYLCBNYXRoLmZsb29yKHRoaXMucG9zaXRpb25ZKSwgdGhpcy5kaXJlY3Rpb24sIGNhbnZhc1xuICAgICk7XG5cbiAgfVxuXG4gIC8qIFRoaXMgaXMgd2hlcmUgd2UgZGV0ZXJtaW5lIHN0YXRlIGFuZCBiZWhhdmlvdXIsIHdoaWNoIGlzIG1vc3Qgb2YgdGhlIGNsYXNzICovXG4gIHB1YmxpYyBwcm9ncmVzcygpIHtcblxuICAgIGxldCBub3c6IGFueSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGVsYXBzZWRUaW1lOiBudW1iZXIgPSAoK25vdykgLSAoK3RoaXMubGFzdFByb2dyZXNzTW9tZW50KTtcbiAgICBsZXQgZGlzdGFuY2UgPSBTVEVQICogZWxhcHNlZFRpbWUgLyAxMDAwO1xuXG4gICAgaWYodGhpcy5zdHJlbmd0aCA8PSAwICYmICF0aGlzLmhhc0RpZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuZGVhZDtcbiAgICAgIHRoaXMuaGFzRGllZCA9IHRydWU7XG4gICAgICB0aGlzLnNvdW5kLnBsYXlEeWluZ1NvdW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogQmVpbmcgaGl0IHRha2VzIHByZWNlZGVudCBvdmVyIGFsbCBvdGhlciBzdGF0ZXMgZXhjZXB0IGRlYXRoICovXG4gICAgaWYodGhpcy5zdGF0ZSA9PSBTdGF0ZXMuaGl0KSB7XG4gICAgICBsZXQgZWxhcHNlZFRpbWVTaW5jZUJlaW5nSGl0ID0gKCtub3cpIC0gKHRoaXMuc3RhcnRlZEhpdCk7XG4gICAgICBpZihlbGFwc2VkVGltZVNpbmNlQmVpbmdIaXQgPj0gSElUX1RJTUUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5zdGFuZGluZztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSAodGhpcy5kaXJlY3Rpb24gPT0gRGlyZWN0aW9ucy5sZWZ0ID8gZGlzdGFuY2UgOiAtMSAqIGRpc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgbGV0IGVsYXBzZWRUaW1lU2luY2VTdGFydGVkSnVtcGluZyA9ICgrbm93KSAtICgrdGhpcy5zdGFydGVkSnVtcGluZyk7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoICggSlVNUFNURVBTLmxlbmd0aCAvIDEwMDAgKSAqIGVsYXBzZWRUaW1lU2luY2VTdGFydGVkSnVtcGluZyApO1xuICAgICAgICBpZihpbmRleCA+PSBKVU1QU1RFUFMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAvKiBNYWtlIHN1cmUgd2UgY29tZSBiYWNrIHdoZXJlIHdlIHN0YXJ0ZWQgKi9cbiAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHRoaXMueUJlZm9yZUp1bXBpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gSlVNUFNURVBTW2luZGV4XSAqIGRpc3RhbmNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYodGhpcy5ub1dhbGtpbmdLZXlQcmVzc2VkKCkpIHRoaXMuc3RhdGUgPSBTdGF0ZXMuc3RhbmRpbmc7XG4gICAgICAvKiBJZiB3ZSBhcmUgbm90IGp1bXBpbmcsIHdlIGNhbiBkdWNrICovXG4gICAgICBpZih0aGlzLmNvbnRyb2xzW3RoaXMuY29udHJvbHNNYXAuZG93bl0gJiYgIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuZHVja2luZztcbiAgICAgIH1cbiAgICAgIC8qIElmIHdlIGFyZSBub3QgZHVja2luZywgcHVuY2hpbmcgb3Iga2lja2luZyB0aGVuIHdlIGNhbiBtb3ZlIGxlZnQgb3IgcmlnaHQgKi9cbiAgICAgIGlmKHRoaXMuY2FuV2FsaygpICYmIHRoaXMuY29udHJvbHNbdGhpcy5jb250cm9sc01hcC5sZWZ0XSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLndhbGtpbmc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9ucy5sZWZ0O1xuXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb25YIC0gZGlzdGFuY2UgPiBXSURUSF9CT1VOREFSWSkgdGhpcy5wb3NpdGlvblggLT0gZGlzdGFuY2U7XG4gICAgICAgIGVsc2UgdGhpcy5wb3NpdGlvblggPSBXSURUSF9CT1VOREFSWTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuY2FuV2FsaygpICYmIHRoaXMuY29udHJvbHNbdGhpcy5jb250cm9sc01hcC5yaWdodF0pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy53YWxraW5nO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbnMucmlnaHQ7XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvblggKyBkaXN0YW5jZSA8IChNQVhfV0lEVEggLSBXSURUSF9CT1VOREFSWSkpIHRoaXMucG9zaXRpb25YICs9IGRpc3RhbmNlO1xuICAgICAgICBlbHNlIHRoaXMucG9zaXRpb25YID0gTUFYX1dJRFRIIC0gV0lEVEhfQk9VTkRBUlk7XG4gICAgICB9XG4gICAgICAvKiBJZiB3ZSBzdGFydCBqdW1waW5nLCB3ZSBzZXQgdGhlIGlzSnVtcGluZyBib29sZWFuIHRvIHRydWUgYW5kIHN0YXJ0IHRoZSB0aW1lciAqL1xuICAgICAgaWYodGhpcy5jb250cm9sc1t0aGlzLmNvbnRyb2xzTWFwLnVwXSkge1xuICAgICAgICBpZih0aGlzLmlzSnVtcGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0ZWRKdW1waW5nID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy55QmVmb3JlSnVtcGluZyA9IHRoaXMucG9zaXRpb25ZO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBJZiB3ZSBhcmUgbm90IGp1bXBpbmcsIHdlIGNhbiBwdW5jaCAqL1xuICAgICAgaWYodGhpcy5jb250cm9sc1t0aGlzLmNvbnRyb2xzTWFwLnB1bmNoXSAmJiAhdGhpcy5pc0p1bXBpbmcgJiYgIXRoaXMuaGFzUHVuY2hlZCkge1xuICAgICAgICB0aGlzLmlzUHVuY2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc1B1bmNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWRQdW5jaGluZyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc291bmQucGxheVN3aW5nU291bmQoKTtcbiAgICAgIH1cbiAgICAgIC8qIElmIHB1bmNoIGlzIG5vdCBiZWluZyBoaXQsIHJlbGVhc2UgdGhlIHBvc3NpYmlsaXR5IHRvIHB1bmNoIChhZ2FpbikgKi9cbiAgICAgIGlmKCF0aGlzLmNvbnRyb2xzW3RoaXMuY29udHJvbHNNYXAucHVuY2hdKSB7XG4gICAgICAgIHRoaXMuaGFzUHVuY2hlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvKiBLaWNraW5nICovXG4gICAgICBpZih0aGlzLmNvbnRyb2xzW3RoaXMuY29udHJvbHNNYXAua2lja10gJiYgIXRoaXMuaGFzS2lja2VkKSB7XG4gICAgICAgIHRoaXMuaXNLaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNLaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWRLaWNraW5nID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5U3dpbmdTb3VuZCgpO1xuICAgICAgfVxuICAgICAgaWYoIXRoaXMuY29udHJvbHNbdGhpcy5jb250cm9sc01hcC5raWNrXSkge1xuICAgICAgICB0aGlzLmhhc0tpY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmlzUHVuY2hpbmcpIHtcbiAgICAgICAgbGV0IGRlbHRhID0gKCtub3cpIC0gKCt0aGlzLnN0YXJ0ZWRQdW5jaGluZyk7XG5cbiAgICAgICAgaWYoZGVsdGEgPj0gMTUwKSB7XG4gICAgICAgICAgdGhpcy5pc1B1bmNoaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlID09IFN0YXRlcy5kdWNraW5nKSB7XG4gICAgICAgICAgLyogSWYgd2UgYXJlIGR1Y2tpbmcsIHRoZW4gd2UgbmVlZCB0byBzZXQgdGhlIHN0YXRlIHRvIGR1Y2tQdW5jaCAqL1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuZHVja1B1bmNoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMucHVuY2hpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgbGV0IGVsYXBzZWRUaW1lU2luY2VTdGFydGVkSnVtcGluZyA9ICgrbm93KSAtICgrdGhpcy5zdGFydGVkSnVtcGluZyk7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoICggSlVNUFNURVBTLmxlbmd0aCAvIDEwMDAgKSAqIGVsYXBzZWRUaW1lU2luY2VTdGFydGVkSnVtcGluZyApO1xuICAgICAgICBpZihpbmRleCA+PSBKVU1QU1RFUFMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAvKiBNYWtlIHN1cmUgd2UgY29tZSBiYWNrIHdoZXJlIHdlIHN0YXJ0ZWQgKi9cbiAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHRoaXMueUJlZm9yZUp1bXBpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gSlVNUFNURVBTW2luZGV4XSAqIGRpc3RhbmNlO1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuanVtcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmlzS2lja2luZykge1xuICAgICAgICAgIGxldCBkZWx0YSA9ICgrbm93KSAtICgrdGhpcy5zdGFydGVkS2lja2luZyk7XG5cbiAgICAgICAgICAvKiBXZSBjYW4ga2ljayB3aGlsZSBqdW1waW5nLCBzdGFuZGluZyBvciBkdWNraW5nLCBzbyBhbGwgbmVlZCB0byBiZSBoYW5kbGVkICovXG4gICAgICAgICAgaWYoZGVsdGEgPj0gMzAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzS2lja2luZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUgPT09IFN0YXRlcy5kdWNraW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmR1Y2tLaWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuaXNKdW1waW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmp1bXBLaWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMua2lja2luZztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja1N0YXRlQ2hhbmdlZCgpO1xuICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLmxhc3RQcm9ncmVzc01vbWVudCA9IG5vdztcblxuICB9XG5cbiAgcHVibGljIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgcHVibGljIGdldFN0cmVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmVuZ3RoO1xuICB9XG5cbiAgcHVibGljIGlzQ29sbGlkaW5nKGFudGFnb25pc3QpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0ID0gQ29sbGlzaW9uLmlzQ29sbGlkaW5nKHRoaXMsIGFudGFnb25pc3QpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudEJveCgpOiBhbnkge1xuICAgIGxldCBjb3JyZWN0ZWRYOiBudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMucG9zaXRpb25YKTtcbiAgICBsZXQgY3VycmVudEZyYW1lOiBhbnkgPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5uYW1lICsgJy4nICsgdGhpcy5zdGF0ZV0uZ2V0Q3VycmVudEZyYW1lKCk7XG4gICAgLy8gY29ycmVjdGVkWCArPSAodGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbnMucmlnaHQgP1xuICAgIC8vICAgKDIgKiBESVJFQ1RJT05fQ09SUkVDVElPTikgLSBjdXJyZW50RnJhbWUud2lkdGggOlxuICAgIC8vICAgRElSRUNUSU9OX0NPUlJFQ1RJT04gLSBjdXJyZW50RnJhbWUud2lkdGhcbiAgICAvLyApO1xuICAgIGNvcnJlY3RlZFggKz0gKFxuICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbnMubGVmdCA/XG4gICAgICAgIERJUkVDVElPTl9DT1JSRUNUSU9OIC0gY3VycmVudEZyYW1lLndpZHRoOlxuICAgICAgICAtMSAqIERJUkVDVElPTl9DT1JSRUNUSU9OXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNvcnJlY3RlZFgsXG4gICAgICB5OiBNYXRoLmZsb29yKHRoaXMucG9zaXRpb25ZKSAtIGN1cnJlbnRGcmFtZS5oZWlnaHQsXG4gICAgICB3aWR0aDogY3VycmVudEZyYW1lLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjdXJyZW50RnJhbWUuaGVpZ2h0LFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50RnJhbWUoKSB7XG4gICAgbGV0IGN1cnJlbnRGcmFtZTogYW55ID0gdGhpcy5hbmltYXRpb25zW3RoaXMubmFtZSArICcuJyArIHRoaXMuc3RhdGVdLmdldEN1cnJlbnRGcmFtZSgpO1xuICAgIHJldHVybiBjdXJyZW50RnJhbWU7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ29sbGlzaW9uKGFudGFnb25pc3Q6IFBsYXllcik6IHZvaWQge1xuXG4gICAgbGV0IGFudGFnb25pc3RTdGF0ZTogU3RhdGVzID0gYW50YWdvbmlzdC5nZXRTdGF0ZSgpO1xuXG4gICAgaWYodGhpcy5zdGF0ZSA9PSBTdGF0ZXMuaGl0KSByZXR1cm47XG5cbiAgICBpZihhbnRhZ29uaXN0U3RhdGUgPT0gU3RhdGVzLmtpY2tpbmcgfHwgYW50YWdvbmlzdFN0YXRlID09IFN0YXRlcy5qdW1wS2ljayB8fCBhbnRhZ29uaXN0U3RhdGUgPT0gU3RhdGVzLmR1Y2tLaWNrKSB7XG4gICAgICB0aGlzLnN0YXJ0SGl0KEtJQ0tfREFNQUdFKTtcbiAgICAgIHRoaXMuc291bmQucGxheUhpdFNvdW5kKCk7XG4gICAgfVxuICAgIGlmKGFudGFnb25pc3RTdGF0ZSA9PSBTdGF0ZXMucHVuY2hpbmcgfHwgYW50YWdvbmlzdFN0YXRlID09IFN0YXRlcy5kdWNrUHVuY2gpICB7XG4gICAgICB0aGlzLnN0YXJ0SGl0KFBVTkNIX0RBTUFHRSk7XG4gICAgICB0aGlzLnNvdW5kLnBsYXlIaXRTb3VuZCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0RlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT0gU3RhdGVzLmRlYWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRIaXQoZGFtYWdlKSB7XG4gICAgdGhpcy5zdHJlbmd0aCAtPSBkYW1hZ2U7XG4gICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5oaXQ7XG4gICAgdGhpcy5zdGFydGVkSGl0ID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm9XYWxraW5nS2V5UHJlc3NlZCgpIHtcbiAgICBmb3IobGV0IGtleSBpbiBTdGF0ZXMpIHtcbiAgICAgIGlmKCB0aGlzLmNvbnRyb2xzWyB0aGlzLmNvbnRyb2xzTWFwWyBTdGF0ZXNba2V5XSBdIF0gKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1N0YXRlQ2hhbmdlZCgpIHtcbiAgICBpZih0aGlzLnN0YXRlICE9PSB0aGlzLnByZXZpb3VzU3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYW5XYWxrKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlICE9IFN0YXRlcy5kdWNraW5nICYmXG4gICAgICAoICF0aGlzLmlzS2lja2luZyB8fCAodGhpcy5pc0tpY2tpbmcgJiYgdGhpcy5pc0p1bXBpbmcpICkgJiZcbiAgICAgICF0aGlzLmlzUHVuY2hpbmdcbiAgICApO1xuICB9XG5cbn07XG4iLCJsZXQgc2luZ2xldG9uU291bmQgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0IHx8IHt9O1xuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuc3dpbmdGaWxlQnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLmhpdEJ1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5keWluZ0J1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5sb2FkaW5nUHJvbWlzZSA9IG51bGw7XG5cbiAgICBsZXQgc3dpbmdQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhhdC5sb2FkV2F2RmlsZSgnLi93YXYvc3dpbmcud2F2JywgKGJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGF0LnN3aW5nRmlsZUJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbGV0IGhpdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGF0LmxvYWRXYXZGaWxlKCcuL3dhdi9oaXQud2F2JywgKGJ1ZmZlcikgPT4ge1xuICAgICAgICB0aGF0LmhpdEJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbGV0IGR5aW5nUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQubG9hZFdhdkZpbGUoJy4vd2F2L2R5aW5nLndhdicsIChidWZmZXIpID0+IHtcbiAgICAgICAgdGhhdC5keWluZ0J1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRpbmdQcm9taXNlID0gUHJvbWlzZS5hbGwoIFtzd2luZ1Byb21pc2UsIGhpdFByb21pc2VdICk7XG5cbiAgfVxuXG4gIGdldExvYWRpbmdQcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdQcm9taXNlO1xuICB9XG5cbiAgcGxheUhpdFNvdW5kKCkge1xuICAgIHRoaXMucGxheVNvdW5kRnJvbUZpbGVCdWZmZXIodGhpcy5oaXRCdWZmZXIpO1xuICB9XG5cbiAgcGxheVN3aW5nU291bmQoKSB7XG4gICAgdGhpcy5wbGF5U291bmRGcm9tRmlsZUJ1ZmZlcih0aGlzLnN3aW5nRmlsZUJ1ZmZlcik7XG4gIH1cblxuICBwbGF5RHlpbmdTb3VuZCgpIHtcbiAgICB0aGlzLnBsYXlTb3VuZEZyb21GaWxlQnVmZmVyKHRoaXMuZHlpbmdCdWZmZXIpO1xuICB9XG5cbiAgcGxheVNvdW5kRnJvbUZpbGVCdWZmZXIoZmlsZUJ1ZmZlcikge1xuICAgIGxldCBzb3VyY2UgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICBzb3VyY2UuYnVmZmVyID0gZmlsZUJ1ZmZlcjtcbiAgICBzb3VyY2UuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgc291cmNlLnN0YXJ0KDApO1xuICB9XG5cbiAgbG9hZFdhdkZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBsZXQgdGhpc0J1ZmZlciA9IG51bGw7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJlcXVlc3Qub3BlbignR0VUJywgZmlsZW5hbWUsIHRydWUpO1xuICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcblxuICAgIC8vIERlY29kZSBhc3luY2hyb25vdXNseVxuICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHJlcXVlc3QucmVzcG9uc2UsIChidWZmZXIpID0+IHtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHRoYXQuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICBjYWxsYmFjayhidWZmZXIpO1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9XG5cbiAgc3RhdGljIGdldFNpbmdsZXRvblNvdW5kKCkge1xuICAgIGlmKHNpbmdsZXRvblNvdW5kID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b25Tb3VuZCA9IG5ldyBTb3VuZCgpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uU291bmQ7XG4gIH1cblxufVxuIiwiZXhwb3J0IGNvbnN0IENPTlRST0xfQ09ORklHID0gW1xuICB7XG4gICAgdXA6ICd1cCcsXG4gICAgZG93bjogJ2Rvd24nLFxuICAgIGxlZnQ6ICdsZWZ0JyxcbiAgICByaWdodDogJ3JpZ2h0JyxcbiAgICBwdW5jaDogJ3plcm8nLFxuICAgIGtpY2s6ICdlbnRlcidcbiAgfSxcbiAge1xuICAgIHVwOiAnYWx0VXAnLFxuICAgIGRvd246ICdhbHREb3duJyxcbiAgICBsZWZ0OiAnYWx0TGVmdCcsXG4gICAgcmlnaHQ6ICdhbHRSaWdodCcsXG4gICAgcHVuY2g6ICd6JyxcbiAgICBraWNrOiAneCdcbiAgfVxuXTtcblxuZXhwb3J0IGVudW0gU3RhdGVzIHtcbiAgICBzdGFuZGluZyA9IFwic3RhbmRpbmdcIixcbiAgICB3YWxraW5nID0gXCJ3YWxraW5nXCIsXG4gICAga2lja2luZyA9IFwia2lja2luZ1wiLFxuICAgIHB1bmNoaW5nID0gXCJwdW5jaGluZ1wiLFxuICAgIGR1Y2tpbmcgPSBcImR1Y2tpbmdcIixcbiAgICBkdWNrUHVuY2ggPSBcImR1Y2tQdW5jaFwiLFxuICAgIGR1Y2tLaWNrID0gXCJkdWNrS2lja1wiLFxuICAgIGp1bXAgPSBcImp1bXBcIixcbiAgICBqdW1wS2ljayA9IFwianVtcEtpY2tcIixcbiAgICBqdW1wVG9wID0gXCJqdW1wVG9wXCIsXG4gICAgaGl0ID0gXCJoaXRcIixcbiAgICBkZWFkID0gXCJkZWFkXCJcbn07XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbnMge1xuICBsZWZ0ID0gXCJsZWZ0XCIsXG4gIHJpZ2h0ID0gXCJyaWdodFwiXG59O1xuXG5leHBvcnQgY29uc3QgTE9PUF9UWVBFUyA9IHtcbiAgbm9uZTogXCJub25lXCIsXG4gIGxvb3A6IFwibG9vcFwiLFxuICBsb29wQmFja0FuZEZvcnRoOiBcImxvb3BCYWNrQW5kRm9ydGhcIlxufTtcblxuZXhwb3J0IGNvbnN0IE1BWF9XSURUSCA9IDc4MDtcbmV4cG9ydCBjb25zdCBNQVhfSEVJR0hUID0gNDEzO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgS2V5Ym9hcmRJbnB1dCBmcm9tICcuL0tleWJvYXJkSW5wdXQnO1xuaW1wb3J0IEFuaW1hdGlvbkZhY3RvcnkgZnJvbSAnLi9BbmltYXRpb25GYWN0b3J5JztcbmltcG9ydCBOZXh0QW5pbWF0aW9uRnJhbWVGYWN0b3J5IGZyb20gJy4vTmV4dEFuaW1hdGlvbkZyYW1lRmFjdG9yeSc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kJztcbmltcG9ydCBFdmVudEhhbmRsZXJzIGZyb20gJy4vRXZlbnRIYW5kbGVycyc7XG5pbXBvcnQgeyBDT05UUk9MX0NPTkZJRywgTUFYX1dJRFRILCBNQVhfSEVJR0hULCBEaXJlY3Rpb25zIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IFNvdW5kIGZyb20gJy4vU291bmQnO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKiBWYXJpYWJsZXMgKi9cblxuICAgIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICAgIGxldCBrZXlib2FyZElucHV0OiBLZXlib2FyZElucHV0ID0gbmV3IEtleWJvYXJkSW5wdXQoKTtcbiAgICBsZXQgcmVxdWVzdDogTmV4dEFuaW1hdGlvbkZyYW1lRmFjdG9yeSA9IG5ldyBOZXh0QW5pbWF0aW9uRnJhbWVGYWN0b3J5KCk7XG4gICAgbGV0IGNhbnZhczogQ2FudmFzID0gQ2FudmFzLmdldFNpbmdsZXRvbkNhbnZhcyhNQVhfV0lEVEgsIE1BWF9IRUlHSFQpO1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKTtcbiAgICBsZXQgYW5pbWF0aW9uRmFjdG9yeTogQW5pbWF0aW9uRmFjdG9yeSA9IEFuaW1hdGlvbkZhY3RvcnkuZ2V0U2luZ2xldG9uQW5pbWF0aW9uRmFjdG9yeSgpO1xuICAgIGxldCBwbGF5ZXI6IFBsYXllciA9IG51bGw7XG4gICAgbGV0IGNvbnRleHREYXRhID0gY2FudmFzLmdldENvbnRleHREYXRhKCk7XG4gICAgbGV0IHBsYXllcnM6IFBsYXllcltdID0gbnVsbDtcbiAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKCk7XG4gICAgbGV0IHNvdW5kID0gU291bmQuZ2V0U2luZ2xldG9uU291bmQoKTtcbiAgICBsZXQgcHJvbWlzZXMgPSBbXG4gICAgICBiYWNrZ3JvdW5kLmdldExvYWRpbmdQcm9taXNlKCksXG4gICAgICBhbmltYXRpb25GYWN0b3J5LmdldExvYWRpbmdQcm9taXNlKCksXG4gICAgICBzb3VuZC5nZXRMb2FkaW5nUHJvbWlzZSgpXG4gICAgXTtcblxuICAgIC8qIEluaXRpYXRpb24gKi9cblxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCAoKSA9PiB7XG5cbiAgICAgIEV2ZW50SGFuZGxlcnMuYXR0YWNoKG5ld0dhbWUpO1xuICAgICAgbmV3R2FtZSgpO1xuICAgICAgbG9vcCgpO1xuXG4gICAgfSk7XG5cbiAgICAvKiBGdW5jdGlvbnMgKi9cblxuICAgIGZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gICAgICBwbGF5ZXJzID0gWyBuZXcgUGxheWVyKFxuICAgICAgICBcInBsYXllcjFcIixcbiAgICAgICAgTWF0aC5mbG9vcihNQVhfV0lEVEggKiAuNzUpLFxuICAgICAgICBNYXRoLmZsb29yKE1BWF9IRUlHSFQgKiAuOTYpLFxuICAgICAgICBEaXJlY3Rpb25zLmxlZnQsXG4gICAgICAgIGtleWJvYXJkSW5wdXQuc3RhdGUsXG4gICAgICAgIENPTlRST0xfQ09ORklHWzBdLFxuICAgICAgKSwgbmV3IFBsYXllcihcbiAgICAgICAgXCJwbGF5ZXIyXCIsXG4gICAgICAgIE1hdGguZmxvb3IoTUFYX1dJRFRIICogLjI1KSxcbiAgICAgICAgTWF0aC5mbG9vcihNQVhfSEVJR0hUICogLjk2KSxcbiAgICAgICAgRGlyZWN0aW9ucy5yaWdodCxcbiAgICAgICAga2V5Ym9hcmRJbnB1dC5zdGF0ZSxcbiAgICAgICAgQ09OVFJPTF9DT05GSUdbMV0sXG4gICAgICApXTtcbiAgICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgIGRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICBtb3ZlQW5kRHJhd09iamVjdHMoKTtcbiAgICAgIGRyYXdIZWFsdGhCYXJzKCk7XG4gICAgICBpZighZ2FtZU92ZXIpIGlzQ29sbGlkaW5nKCk7XG4gICAgICBjYW52YXMuY29tbWl0KCk7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgYmFja2dyb3VuZC5kcmF3SW1hZ2VEYXRhKGNvbnRleHREYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlQW5kRHJhd09iamVjdHMoKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZighZ2FtZU92ZXIpIHBsYXllcnNbaV0ucHJvZ3Jlc3MoKTtcbiAgICAgICAgcGxheWVyc1tpXS5kcmF3KGNvbnRleHREYXRhKTtcbiAgICAgICAgaWYocGxheWVyc1tpXS5pc0RlYWQoKSkge1xuICAgICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdIZWFsdGhCYXJzKCkge1xuICAgICAgY2FudmFzLmRyYXdIZWFsdGhCYXIoNDAsIDIwLCBwbGF5ZXJzWzBdLmdldFN0cmVuZ3RoKCkgKTtcbiAgICAgIGNhbnZhcy5kcmF3SGVhbHRoQmFyKE1BWF9XSURUSCAtMjQwLCAxMCwgcGxheWVyc1sxXS5nZXRTdHJlbmd0aCgpICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb2xsaWRpbmcoKSB7XG4gICAgICAvKiBEbyBzb21ldGhpbmcgKi9cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBhbnRhZ29uaXN0ID0gZmluZEFudGFnb25pc3QocGxheWVyc1tpXSwgcGxheWVycyk7XG4gICAgICAgIGlmKHBsYXllcnNbaV0uaXNDb2xsaWRpbmcoYW50YWdvbmlzdCkpIHtcbiAgICAgICAgICBoYW5kbGVDb2xsaXNpb24ocGxheWVyc1tpXSwgYW50YWdvbmlzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kQW50YWdvbmlzdChwbGF5ZXIsIHBsYXllcnMpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHBsYXllcnNbaV0gIT0gcGxheWVyKSByZXR1cm4gcGxheWVyc1tpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbGxpc2lvbihwbGF5ZXIsIGFudGFnb25pc3QpIHtcbiAgICAgIHBsYXllci5oYW5kbGVDb2xsaXNpb24oYW50YWdvbmlzdCk7XG4gICAgfVxuXG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgW3tcbiAgXCJpZFwiOiAxMixcbiAgXCJuYW1lXCI6IFwicGxheWVyMS5raWNraW5nXCIsXG4gIFwibG9vcFR5cGVcIjogXCJub25lXCIsXG4gIFwiZnJhbWVzXCI6IFt7XG4gICAgXCJwb3NpdGlvblhcIjogMjUxLFxuICAgIFwicG9zaXRpb25ZXCI6IDUsXG4gICAgXCJ3aWR0aFwiOiA3MyxcbiAgICBcImhlaWdodFwiOiA5MFxuICB9LCB7XG4gICAgXCJwb3NpdGlvblhcIjogMjAxLFxuICAgIFwicG9zaXRpb25ZXCI6IDksXG4gICAgXCJ3aWR0aFwiOiAzNyxcbiAgICBcImhlaWdodFwiOiA4MlxuICB9XVxufSwge1xuICBcImlkXCI6IDExLFxuICBcIm5hbWVcIjogXCJwbGF5ZXIyLnB1bmNoaW5nXCIsXG4gIFwibG9vcFR5cGVcIjogXCJsb29wXCIsXG4gIFwiZnJhbWVzXCI6IFt7XG4gICAgXCJwb3NpdGlvblhcIjogMTQ0LFxuICAgIFwicG9zaXRpb25ZXCI6IDIyMCxcbiAgICBcIndpZHRoXCI6IDUzLFxuICAgIFwiaGVpZ2h0XCI6IDg2XG4gIH1dXG59LCB7XG4gIFwiaWRcIjogMTAsXG4gIFwibmFtZVwiOiBcInBsYXllcjIud2Fsa2luZ1wiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDk3MyxcbiAgICBcInBvc2l0aW9uWVwiOiAyMTcsXG4gICAgXCJ3aWR0aFwiOiAyMixcbiAgICBcImhlaWdodFwiOiA5MVxuICB9LCB7XG4gICAgXCJwb3NpdGlvblhcIjogODk4LFxuICAgIFwicG9zaXRpb25ZXCI6IDIxNyxcbiAgICBcIndpZHRoXCI6IDM2LFxuICAgIFwiaGVpZ2h0XCI6IDg5XG4gIH1dXG59LCB7XG4gIFwiaWRcIjogOSxcbiAgXCJuYW1lXCI6IFwicGxheWVyMi5kdWNrS2lja1wiLFxuICBcImxvb3BUeXBlXCI6IFwibm9uZVwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDY5NSxcbiAgICBcInBvc2l0aW9uWVwiOiAyMjksXG4gICAgXCJ3aWR0aFwiOiAzNixcbiAgICBcImhlaWdodFwiOiA2OFxuICB9LCB7XG4gICAgXCJwb3NpdGlvblhcIjogNjA5LFxuICAgIFwicG9zaXRpb25ZXCI6IDIyOSxcbiAgICBcIndpZHRoXCI6IDcyLFxuICAgIFwiaGVpZ2h0XCI6IDY4XG4gIH1dXG59LCB7XG4gIFwiaWRcIjogOCxcbiAgXCJuYW1lXCI6IFwicGxheWVyMi5kdWNraW5nXCIsXG4gIFwibG9vcFR5cGVcIjogXCJsb29wXCIsXG4gIFwiZnJhbWVzXCI6IFt7XG4gICAgXCJwb3NpdGlvblhcIjogNTUyLFxuICAgIFwicG9zaXRpb25ZXCI6IDIzMSxcbiAgICBcIndpZHRoXCI6IDUwLFxuICAgIFwiaGVpZ2h0XCI6IDYzXG4gIH1dXG59LCB7XG4gIFwiaWRcIjogNyxcbiAgXCJuYW1lXCI6IFwicGxheWVyMi5kdWNrUHVuY2hcIixcbiAgXCJsb29wVHlwZVwiOiBcImxvb3BcIixcbiAgXCJmcmFtZXNcIjogW3tcbiAgICBcInBvc2l0aW9uWFwiOiA0NzUsXG4gICAgXCJwb3NpdGlvbllcIjogMjI5LFxuICAgIFwid2lkdGhcIjogNjgsXG4gICAgXCJoZWlnaHRcIjogNjhcbiAgfV1cbn0sIHtcbiAgXCJpZFwiOiA2LFxuICBcIm5hbWVcIjogXCJwbGF5ZXIyLnN0YW5kaW5nXCIsXG4gIFwibG9vcFR5cGVcIjogXCJsb29wXCIsXG4gIFwiZnJhbWVzXCI6IFt7XG4gICAgXCJwb3NpdGlvblhcIjogMjE5LFxuICAgIFwicG9zaXRpb25ZXCI6IDIyMixcbiAgICBcIndpZHRoXCI6IDM3LFxuICAgIFwiaGVpZ2h0XCI6IDgxXG4gIH1dXG59LCB7XG4gIFwiaWRcIjogNSxcbiAgXCJuYW1lXCI6IFwicGxheWVyMi5raWNraW5nXCIsXG4gIFwibG9vcFR5cGVcIjogXCJub25lXCIsXG4gIFwiZnJhbWVzXCI6IFt7XG4gICAgXCJwb3NpdGlvblhcIjogMzM3LFxuICAgIFwicG9zaXRpb25ZXCI6IDIxNyxcbiAgICBcIndpZHRoXCI6IDc1LFxuICAgIFwiaGVpZ2h0XCI6IDkxXG4gIH0sIHtcbiAgICBcInBvc2l0aW9uWFwiOiA0MjMsXG4gICAgXCJwb3NpdGlvbllcIjogMjIyLFxuICAgIFwid2lkdGhcIjogMzYsXG4gICAgXCJoZWlnaHRcIjogODFcbiAgfV1cbn0sIHtcbiAgXCJpZFwiOiA0LFxuICBcIm5hbWVcIjogXCJwbGF5ZXIyLmRlYWRcIixcbiAgXCJsb29wVHlwZVwiOiBcImxvb3BcIixcbiAgXCJmcmFtZXNcIjogW3tcbiAgICBcInBvc2l0aW9uWFwiOiA3LFxuICAgIFwicG9zaXRpb25ZXCI6IDIyNixcbiAgICBcIndpZHRoXCI6IDU0LFxuICAgIFwiaGVpZ2h0XCI6IDczXG4gIH1dXG59LCB7XG4gIFwiaWRcIjogMyxcbiAgXCJuYW1lXCI6IFwicGxheWVyMi5oaXRcIixcbiAgXCJsb29wVHlwZVwiOiBcImxvb3BcIixcbiAgXCJmcmFtZXNcIjogW3tcbiAgICBcInBvc2l0aW9uWFwiOiA4NCxcbiAgICBcInBvc2l0aW9uWVwiOiAyMjIsXG4gICAgXCJ3aWR0aFwiOiAzOCxcbiAgICBcImhlaWdodFwiOiA4MVxuICB9XVxufSwge1xuICBcImlkXCI6IDIsXG4gIFwibmFtZVwiOiBcInBsYXllcjIuanVtcFwiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDg0LFxuICAgIFwicG9zaXRpb25ZXCI6IDEwNCxcbiAgICBcIndpZHRoXCI6IDM2LFxuICAgIFwiaGVpZ2h0XCI6IDkxXG4gIH1dXG59LCB7XG4gIFwiaWRcIjogMSxcbiAgXCJuYW1lXCI6IFwicGxheWVyMi5qdW1wS2lja1wiLFxuICBcImxvb3BUeXBlXCI6IFwibm9uZVwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDcsXG4gICAgXCJwb3NpdGlvbllcIjogMTAwLFxuICAgIFwid2lkdGhcIjogNTYsXG4gICAgXCJoZWlnaHRcIjogOTlcbiAgfV1cbn0sIHtcbiAgXCJpZFwiOiAwLFxuICBcIm5hbWVcIjogXCJwbGF5ZXIxLmRlYWRcIixcbiAgXCJsb29wVHlwZVwiOiBcImxvb3BcIixcbiAgXCJmcmFtZXNcIjogW3tcbiAgICBcInBvc2l0aW9uWFwiOiA5MzksXG4gICAgXCJwb3NpdGlvbllcIjogMTQsXG4gICAgXCJ3aWR0aFwiOiA1NCxcbiAgICBcImhlaWdodFwiOiA3MlxuICB9XVxufSwge1xuICBcImlkXCI6IDAsXG4gIFwibmFtZVwiOiBcInBsYXllcjEuaGl0XCIsXG4gIFwibG9vcFR5cGVcIjogXCJsb29wXCIsXG4gIFwiZnJhbWVzXCI6IFt7XG4gICAgXCJwb3NpdGlvblhcIjogODgwLFxuICAgIFwicG9zaXRpb25ZXCI6IDksXG4gICAgXCJ3aWR0aFwiOiAzNixcbiAgICBcImhlaWdodFwiOiA4MlxuICB9XVxufSwge1xuICBcImlkXCI6IDAsXG4gIFwibmFtZVwiOiBcInBsYXllcjEuanVtcEtpY2tcIixcbiAgXCJsb29wVHlwZVwiOiBcIm5vbmVcIixcbiAgXCJmcmFtZXNcIjogW3tcbiAgICBcInBvc2l0aW9uWFwiOiA3MzUsXG4gICAgXCJwb3NpdGlvbllcIjogMCxcbiAgICBcIndpZHRoXCI6IDU1LFxuICAgIFwiaGVpZ2h0XCI6IDEwMFxuICB9XVxufSwge1xuICBcImlkXCI6IDAsXG4gIFwibmFtZVwiOiBcInBsYXllcjEuanVtcFwiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDY3NixcbiAgICBcInBvc2l0aW9uWVwiOiA1LFxuICAgIFwid2lkdGhcIjogMzcsXG4gICAgXCJoZWlnaHRcIjogOTBcbiAgfV1cbn0sIHtcbiAgXCJpZFwiOiAwLFxuICBcIm5hbWVcIjogXCJwbGF5ZXIxLmR1Y2tQdW5jaFwiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDQ1NyxcbiAgICBcInBvc2l0aW9uWVwiOiAxNixcbiAgICBcIndpZHRoXCI6IDY4LFxuICAgIFwiaGVpZ2h0XCI6IDY4XG4gIH1dXG59LCB7XG4gIFwiaWRcIjogMCxcbiAgXCJuYW1lXCI6IFwicGxheWVyMS5kdWNrS2lja1wiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDU0MSxcbiAgICBcInBvc2l0aW9uWVwiOiAxNixcbiAgICBcIndpZHRoXCI6IDM2LFxuICAgIFwiaGVpZ2h0XCI6IDY4XG4gIH0sIHtcbiAgICBcInBvc2l0aW9uWFwiOiA1OTAsXG4gICAgXCJwb3NpdGlvbllcIjogMTYsXG4gICAgXCJ3aWR0aFwiOiA3MyxcbiAgICBcImhlaWdodFwiOiA2OFxuICB9XVxufSwge1xuICBcImlkXCI6IDAsXG4gIFwibmFtZVwiOiBcInBsYXllcjEuZHVja2luZ1wiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDM5OCxcbiAgICBcInBvc2l0aW9uWVwiOiAxOCxcbiAgICBcIndpZHRoXCI6IDUwLFxuICAgIFwiaGVpZ2h0XCI6IDYzXG4gIH1dXG59LCB7XG4gIFwiaWRcIjogMCxcbiAgXCJuYW1lXCI6IFwicGxheWVyMS5wdW5jaGluZ1wiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDMzMCxcbiAgICBcInBvc2l0aW9uWVwiOiA3LFxuICAgIFwid2lkdGhcIjogNTIsXG4gICAgXCJoZWlnaHRcIjogODZcbiAgfV1cbn0sIHtcbiAgXCJpZFwiOiAwLFxuICBcIm5hbWVcIjogXCJwbGF5ZXIxLnN0YW5kaW5nXCIsXG4gIFwibG9vcFR5cGVcIjogXCJsb29wXCIsXG4gIFwiZnJhbWVzXCI6IFt7XG4gICAgXCJwb3NpdGlvblhcIjogMTMzLFxuICAgIFwicG9zaXRpb25ZXCI6IDksXG4gICAgXCJ3aWR0aFwiOiAzNyxcbiAgICBcImhlaWdodFwiOiA4MlxuICB9XVxufSwge1xuICBcImlkXCI6IDAsXG4gIFwibmFtZVwiOiBcInBsYXllcjEud2Fsa2luZ1wiLFxuICBcImxvb3BUeXBlXCI6IFwibG9vcFwiLFxuICBcImZyYW1lc1wiOiBbe1xuICAgIFwicG9zaXRpb25YXCI6IDUsXG4gICAgXCJwb3NpdGlvbllcIjogNSxcbiAgICBcIndpZHRoXCI6IDIyLFxuICAgIFwiaGVpZ2h0XCI6IDkwXG4gIH0sIHtcbiAgICBcInBvc2l0aW9uWFwiOiA2NixcbiAgICBcInBvc2l0aW9uWVwiOiA1LFxuICAgIFwid2lkdGhcIjogMzYsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfV1cbn1dO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==