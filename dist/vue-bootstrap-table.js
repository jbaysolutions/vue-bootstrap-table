(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueBootstrapTable"] = factory();
	else
		root["VueBootstrapTable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _VueBootstrapTable = __webpack_require__(1);
	
	var _VueBootstrapTable2 = _interopRequireDefault(_VueBootstrapTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _VueBootstrapTable2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\VueBootstrapTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6fa2a138/VueBootstrapTable.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./VueBootstrapTable.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./VueBootstrapTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-table {\n\n}\n\ntable.vue-table thead > tr > th {\n    cursor: pointer;\n    padding-right: 30px !important;\n}\n\n/*.vue-table th.active {\n    color: red;\n}*/\n\n.vue-table .arrow {\n    opacity: 1;\n    position: relative;\n}\n\n.vue-table .arrow:after {\n    position: absolute;\n    bottom: 8px;\n    right: 8px;\n    display: block;\n    font-family: 'Glyphicons Halflings';\n    content: \"\\E150\";\n    /*\n    display: inline-block;\n    vertical-align: middle;\n    width: 0;\n    height: 0;\n    margin-left: 5px;\n    opacity: 0.66;*/\n}\n\n.vue-table .arrow.asc:after {\n    content: \"\\E155\";\n    /*\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-bottom: 4px solid #000;\n    */\n}\n\n.vue-table .arrow.dsc:after {\n    content: \"\\E156\";\n}\n\n/*.vue-table .selected-cell {\n    background-color: #F7C072;\n}\n\n.vue-table .selected-row {\n    background-color: #FAE1BE !important;\n}*/\n", "", {"version":3,"sources":["/./src/VueBootstrapTable.vue?4bf02cda"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwDA;;CAEA;;AAEA;IACA,gBAAA;IACA,+BAAA;CACA;;AAEA;;GAEA;;AAEA;IACA,WAAA;IACA,mBAAA;CACA;;AAEA;IACA,mBAAA;IACA,YAAA;IACA,WAAA;IACA,eAAA;IACA,oCAAA;IACA,iBAAA;IACA;;;;;;oBAMA;CACA;;AAEA;IACA,iBAAA;IACA;;;;MAIA;CACA;;AAEA;IACA,iBAAA;CACA;;AAEA;;;;;;GAMA","file":"VueBootstrapTable.vue","sourcesContent":["<template>\r\n    <div @click=\"closeDropdown\" @keyup.esc=\"closeDropdown\">\r\n        <!--<pre>{{columns | json}}</pre>-->\r\n        <!--<pre>{{$data | json}}</pre>-->\r\n        <div class=\"col-sm-6\">\r\n            <div v-if=\"showFilter\" style=\"padding-top: 10px;padding-bottom: 10px;\">\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Filter\" v-model=\"filterKey\">\r\n                    <div class=\"input-group-addon\">\r\n                        <i class=\"glyphicon glyphicon-search\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div v-if=\"showColumnPicker\" style=\"padding-top: 10px;padding-bottom: 10px;float:right;\">\r\n                <div class=\"btn-group\" :class=\"{'open' : columnMenuOpen}\">\r\n                    <button @click.stop.prevent=\"columnMenuOpen = !columnMenuOpen\" @keyup.esc=\"columnMenuOpen = false\"\r\n                            type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\r\n                            aria-haspopup=\"true\">\r\n                        Columns <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li v-for=\"column in displayCols\">\r\n                            <a href=\"#\" @click.stop.prevent=\"toggleColumn(column)\">\r\n                                <i v-if=\"column.visible\" class=\"glyphicon glyphicon-ok\"></i> {{column.title}}\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <table class=\"table table-bordered table-hover table-condensed table-striped vue-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th v-for=\"column in displayCols | filterBy true in 'visible'\" @click=\"sortBy(column.title)\"\r\n                            track-by=\"$index\"\r\n                            :class=\"getClasses(column.title)\">\r\n                            {{ column.title }}\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr v-for=\"entry in filteredValues | orderBy sortKey sortOrders[sortKey]\" track-by=\"$index\">\r\n                        <td v-for=\"column in displayCols | filterBy true in 'visible'\" track-by=\"$index\"\r\n                            v-show=\"column.visible\">\r\n                            {{ entry[column.title] }}\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</template>\r\n<style>\r\n    .vue-table {\r\n\r\n    }\r\n\r\n    table.vue-table thead > tr > th {\r\n        cursor: pointer;\r\n        padding-right: 30px !important;\r\n    }\r\n\r\n    /*.vue-table th.active {\r\n        color: red;\r\n    }*/\r\n\r\n    .vue-table .arrow {\r\n        opacity: 1;\r\n        position: relative;\r\n    }\r\n\r\n    .vue-table .arrow:after {\r\n        position: absolute;\r\n        bottom: 8px;\r\n        right: 8px;\r\n        display: block;\r\n        font-family: 'Glyphicons Halflings';\r\n        content: \"\\e150\";\r\n        /*\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        width: 0;\r\n        height: 0;\r\n        margin-left: 5px;\r\n        opacity: 0.66;*/\r\n    }\r\n\r\n    .vue-table .arrow.asc:after {\r\n        content: \"\\e155\";\r\n        /*\r\n        border-left: 4px solid transparent;\r\n        border-right: 4px solid transparent;\r\n        border-bottom: 4px solid #000;\r\n        */\r\n    }\r\n\r\n    .vue-table .arrow.dsc:after {\r\n        content: \"\\e156\";\r\n    }\r\n\r\n    /*.vue-table .selected-cell {\r\n        background-color: #F7C072;\r\n    }\r\n\r\n    .vue-table .selected-row {\r\n        background-color: #FAE1BE !important;\r\n    }*/\r\n</style>\r\n<script>\r\n    export default {\r\n        name: \"VueBootstrapTable\",\r\n        components: {},\r\n        props: {\r\n            /**\r\n             * The column titles, required\r\n             */\r\n            columns: {\r\n                type: Array,\r\n                required: true,\r\n            },\r\n            /**\r\n             * The rows, an Array of objects\r\n             */\r\n            values: {\r\n                type: Array,\r\n                required: true,\r\n            },\r\n            /**\r\n             * Enable/disable table sorting, optional, default true\r\n             */\r\n            sortable: {\r\n                type: Boolean,\r\n                required: false,\r\n                default: true,\r\n            },\r\n            /**\r\n             * Enable/disable input filter, optional, default false\r\n             */\r\n            showFilter: {\r\n                type: Boolean,\r\n                required: false,\r\n                default: false,\r\n            },\r\n            /**\r\n             * Enable/disable column picker to show/hide table columns, optional, default false\r\n             */\r\n            showColumnPicker: {\r\n                type: Boolean,\r\n                required: false,\r\n                default: false,\r\n            },\r\n        },\r\n        data: function () {\r\n            return {\r\n                filteredSize: 0,\r\n                filterKey: \"\",\r\n                sortKey: \"\",\r\n                sortOrders: {},\r\n                columnMenuOpen: false,\r\n                displayCols: [],\r\n            };\r\n        },\r\n        ready: function () {\r\n            this.setSortOrders();\r\n            var self = this;\r\n            this.columns.forEach(function (column) {\r\n                var obj = {};\r\n                obj.title = column.title;\r\n                obj.visible = true;\r\n                self.displayCols.push(obj);\r\n            });\r\n        },\r\n        watch: {\r\n            values: function () {\r\n            },\r\n            columns: function () {\r\n                this.displayCols = [];\r\n                var self = this;\r\n                this.columns.forEach(function (column) {\r\n                    var obj = {};\r\n                    obj.title = column.title;\r\n                    obj.visible = true;\r\n                    self.displayCols.push(obj);\r\n                });\r\n                this.setSortOrders();\r\n            },\r\n            showFilter: function () {\r\n                this.filterKey = \"\";\r\n            },\r\n            showColumnPicker: function () {\r\n                this.columnMenuOpen = false;\r\n\r\n                this.displayCols.forEach(function (column) {\r\n                    column.visible = true;\r\n                });\r\n            }\r\n        },\r\n        computed: {\r\n            filteredValues: function () {\r\n                var result = this.$options.filters.filterBy(this.values, this.filterKey);\r\n                result = this.$options.filters.orderBy(result, this.sortKey, this.sortOrders[this.sortKey]);\r\n                this.filteredSize = result.length;\r\n                return result;\r\n            },\r\n        },\r\n        methods: {\r\n            setSortOrders: function () {\r\n                this.sortKey = \"\";\r\n                var sortOrders = {};\r\n                this.columns.forEach(function (column) {\r\n                    sortOrders[column.title] = 0;\r\n                });\r\n                this.sortOrders = sortOrders;\r\n\r\n            },\r\n            sortBy: function (key) {\r\n                if (this.sortable) {\r\n                    var self = this;\r\n                    this.sortKey = key;\r\n                    this.columns.forEach(function (column) {\r\n                        if (column.title !== key) {\r\n                            self.sortOrders[column.title] = 0;\r\n                        }\r\n                    });\r\n                    if (this.sortOrders[key] === 0) {\r\n                        this.sortOrders[key] = 1;\r\n                    } else {\r\n                        this.sortOrders[key] = this.sortOrders[key] * -1;\r\n                    }\r\n                }\r\n                //console.log(JSON.stringify(this.sortOrders));\r\n            },\r\n            getClasses: function (key) {\r\n                var classes = [];\r\n                if (this.sortable) {\r\n                    classes.push(\"arrow\");\r\n                    if (this.sortKey === key) {\r\n                        classes.push(\"active\");\r\n                    }\r\n                    if (this.sortOrders[key] === 1) {\r\n                        classes.push(\"asc\");\r\n                    } else if (this.sortOrders[key] === -1) {\r\n                        classes.push(\"dsc\");\r\n                    }\r\n                }\r\n                return classes;\r\n            },\r\n            toggleColumn: function (column) {\r\n                column.visible = !column.visible;\r\n            },\r\n            closeDropdown: function () {\r\n                this.columnMenuOpen = false;\r\n            },\r\n        },\r\n        events: {}\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div @click="closeDropdown" @keyup.esc="closeDropdown">
	//         <!--<pre>{{columns | json}}</pre>-->
	//         <!--<pre>{{$data | json}}</pre>-->
	//         <div class="col-sm-6">
	//             <div v-if="showFilter" style="padding-top: 10px;padding-bottom: 10px;">
	//                 <div class="input-group">
	//                     <input type="text" class="form-control" placeholder="Filter" v-model="filterKey">
	//                     <div class="input-group-addon">
	//                         <i class="glyphicon glyphicon-search"></i>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="col-sm-6">
	//             <div v-if="showColumnPicker" style="padding-top: 10px;padding-bottom: 10px;float:right;">
	//                 <div class="btn-group" :class="{'open' : columnMenuOpen}">
	//                     <button @click.stop.prevent="columnMenuOpen = !columnMenuOpen" @keyup.esc="columnMenuOpen = false"
	//                             type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
	//                             aria-haspopup="true">
	//                         Columns <span class="caret"></span>
	//                     </button>
	//                     <ul class="dropdown-menu">
	//                         <li v-for="column in displayCols">
	//                             <a href="#" @click.stop.prevent="toggleColumn(column)">
	//                                 <i v-if="column.visible" class="glyphicon glyphicon-ok"></i> {{column.title}}
	//                             </a>
	//                         </li>
	//                     </ul>
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="col-sm-12">
	//             <table class="table table-bordered table-hover table-condensed table-striped vue-table">
	//                 <thead>
	//                     <tr>
	//                         <th v-for="column in displayCols | filterBy true in 'visible'" @click="sortBy(column.title)"
	//                             track-by="$index"
	//                             :class="getClasses(column.title)">
	//                             {{ column.title }}
	//                         </th>
	//                     </tr>
	//                 </thead>
	//                 <tbody>
	//                     <tr v-for="entry in filteredValues | orderBy sortKey sortOrders[sortKey]" track-by="$index">
	//                         <td v-for="column in displayCols | filterBy true in 'visible'" track-by="$index"
	//                             v-show="column.visible">
	//                             {{ entry[column.title] }}
	//                         </td>
	//                     </tr>
	//                 </tbody>
	//             </table>
	//         </div>
	//     </div>
	// </template>
	// <style>
	//     .vue-table {
	//
	//     }
	//
	//     table.vue-table thead > tr > th {
	//         cursor: pointer;
	//         padding-right: 30px !important;
	//     }
	//
	//     /*.vue-table th.active {
	//         color: red;
	//     }*/
	//
	//     .vue-table .arrow {
	//         opacity: 1;
	//         position: relative;
	//     }
	//
	//     .vue-table .arrow:after {
	//         position: absolute;
	//         bottom: 8px;
	//         right: 8px;
	//         display: block;
	//         font-family: 'Glyphicons Halflings';
	//         content: "\e150";
	//         /*
	//         display: inline-block;
	//         vertical-align: middle;
	//         width: 0;
	//         height: 0;
	//         margin-left: 5px;
	//         opacity: 0.66;*/
	//     }
	//
	//     .vue-table .arrow.asc:after {
	//         content: "\e155";
	//         /*
	//         border-left: 4px solid transparent;
	//         border-right: 4px solid transparent;
	//         border-bottom: 4px solid #000;
	//         */
	//     }
	//
	//     .vue-table .arrow.dsc:after {
	//         content: "\e156";
	//     }
	//
	//     /*.vue-table .selected-cell {
	//         background-color: #F7C072;
	//     }
	//
	//     .vue-table .selected-row {
	//         background-color: #FAE1BE !important;
	//     }*/
	// </style>
	// <script>
	exports.default = {
	    name: "VueBootstrapTable",
	    components: {},
	    props: {
	        /**
	         * The column titles, required
	         */
	        columns: {
	            type: Array,
	            required: true
	        },
	        /**
	         * The rows, an Array of objects
	         */
	        values: {
	            type: Array,
	            required: true
	        },
	        /**
	         * Enable/disable table sorting, optional, default true
	         */
	        sortable: {
	            type: Boolean,
	            required: false,
	            default: true
	        },
	        /**
	         * Enable/disable input filter, optional, default false
	         */
	        showFilter: {
	            type: Boolean,
	            required: false,
	            default: false
	        },
	        /**
	         * Enable/disable column picker to show/hide table columns, optional, default false
	         */
	        showColumnPicker: {
	            type: Boolean,
	            required: false,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            filteredSize: 0,
	            filterKey: "",
	            sortKey: "",
	            sortOrders: {},
	            columnMenuOpen: false,
	            displayCols: []
	        };
	    },
	    ready: function ready() {
	        this.setSortOrders();
	        var self = this;
	        this.columns.forEach(function (column) {
	            var obj = {};
	            obj.title = column.title;
	            obj.visible = true;
	            self.displayCols.push(obj);
	        });
	    },
	    watch: {
	        values: function values() {},
	        columns: function columns() {
	            this.displayCols = [];
	            var self = this;
	            this.columns.forEach(function (column) {
	                var obj = {};
	                obj.title = column.title;
	                obj.visible = true;
	                self.displayCols.push(obj);
	            });
	            this.setSortOrders();
	        },
	        showFilter: function showFilter() {
	            this.filterKey = "";
	        },
	        showColumnPicker: function showColumnPicker() {
	            this.columnMenuOpen = false;
	
	            this.displayCols.forEach(function (column) {
	                column.visible = true;
	            });
	        }
	    },
	    computed: {
	        filteredValues: function filteredValues() {
	            var result = this.$options.filters.filterBy(this.values, this.filterKey);
	            result = this.$options.filters.orderBy(result, this.sortKey, this.sortOrders[this.sortKey]);
	            this.filteredSize = result.length;
	            return result;
	        }
	    },
	    methods: {
	        setSortOrders: function setSortOrders() {
	            this.sortKey = "";
	            var sortOrders = {};
	            this.columns.forEach(function (column) {
	                sortOrders[column.title] = 0;
	            });
	            this.sortOrders = sortOrders;
	        },
	        sortBy: function sortBy(key) {
	            if (this.sortable) {
	                var self = this;
	                this.sortKey = key;
	                this.columns.forEach(function (column) {
	                    if (column.title !== key) {
	                        self.sortOrders[column.title] = 0;
	                    }
	                });
	                if (this.sortOrders[key] === 0) {
	                    this.sortOrders[key] = 1;
	                } else {
	                    this.sortOrders[key] = this.sortOrders[key] * -1;
	                }
	            }
	            //console.log(JSON.stringify(this.sortOrders));
	        },
	        getClasses: function getClasses(key) {
	            var classes = [];
	            if (this.sortable) {
	                classes.push("arrow");
	                if (this.sortKey === key) {
	                    classes.push("active");
	                }
	                if (this.sortOrders[key] === 1) {
	                    classes.push("asc");
	                } else if (this.sortOrders[key] === -1) {
	                    classes.push("dsc");
	                }
	            }
	            return classes;
	        },
	        toggleColumn: function toggleColumn(column) {
	            column.visible = !column.visible;
	        },
	        closeDropdown: function closeDropdown() {
	            this.columnMenuOpen = false;
	        }
	    },
	    events: {}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div @click=\"closeDropdown\" @keyup.esc=\"closeDropdown\">\n    <!--<pre>{{columns | json}}</pre>-->\n    <!--<pre>{{$data | json}}</pre>-->\n    <div class=\"col-sm-6\">\n        <div v-if=\"showFilter\" style=\"padding-top: 10px;padding-bottom: 10px;\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Filter\" v-model=\"filterKey\">\n                <div class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div v-if=\"showColumnPicker\" style=\"padding-top: 10px;padding-bottom: 10px;float:right;\">\n            <div class=\"btn-group\" :class=\"{'open' : columnMenuOpen}\">\n                <button @click.stop.prevent=\"columnMenuOpen = !columnMenuOpen\" @keyup.esc=\"columnMenuOpen = false\"\n                        type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\">\n                    Columns <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                    <li v-for=\"column in displayCols\">\n                        <a href=\"#\" @click.stop.prevent=\"toggleColumn(column)\">\n                            <i v-if=\"column.visible\" class=\"glyphicon glyphicon-ok\"></i> {{column.title}}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12\">\n        <table class=\"table table-bordered table-hover table-condensed table-striped vue-table\">\n            <thead>\n                <tr>\n                    <th v-for=\"column in displayCols | filterBy true in 'visible'\" @click=\"sortBy(column.title)\"\n                        track-by=\"$index\"\n                        :class=\"getClasses(column.title)\">\n                        {{ column.title }}\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-for=\"entry in filteredValues | orderBy sortKey sortOrders[sortKey]\" track-by=\"$index\">\n                    <td v-for=\"column in displayCols | filterBy true in 'visible'\" track-by=\"$index\"\n                        v-show=\"column.visible\">\n                        {{ entry[column.title] }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-bootstrap-table.js.map