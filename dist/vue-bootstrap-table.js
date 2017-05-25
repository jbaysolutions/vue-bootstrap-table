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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _VueBootstrapTable = __webpack_require__(1);
	
	var _VueBootstrapTable2 = _interopRequireDefault(_VueBootstrapTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _VueBootstrapTable2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/VueBootstrapTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0b1edc8c/VueBootstrapTable.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./VueBootstrapTable.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./VueBootstrapTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-table {\n\n}\n\ntable.vue-table thead > tr > th {\n    cursor: pointer;\n    padding-right: 30px !important;\n}\n\n/*.vue-table th.active {\n    color: red;\n}*/\n\n.vue-table .arrow {\n    opacity: 1;\n    position: relative;\n}\n\n.vue-table .arrow:after {\n    position: absolute;\n    bottom: 8px;\n    right: 8px;\n    display: block;\n    font-family: 'Glyphicons Halflings';\n    content: \"\\E150\";\n    /*\n    display: inline-block;\n    vertical-align: middle;\n    width: 0;\n    height: 0;\n    margin-left: 5px;\n    opacity: 0.66;*/\n}\n\n.vue-table .arrow.asc:after {\n    content: \"\\E155\";\n    /*\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-bottom: 4px solid #000;\n    */\n}\n\n.vue-table .arrow.dsc:after {\n    content: \"\\E156\";\n}\n\n\n.vue-table .editableField {\n    cursor:pointer;\n}\n\n/*.vue-table .selected-cell {\n    background-color: #F7C072;\n}\n\n.vue-table .selected-row {\n    background-color: #FAE1BE !important;\n}*/\n", "", {"version":3,"sources":["/./src/VueBootstrapTable.vue?37eb952b"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+EA;;CAEA;;AAEA;IACA,gBAAA;IACA,+BAAA;CACA;;AAEA;;GAEA;;AAEA;IACA,WAAA;IACA,mBAAA;CACA;;AAEA;IACA,mBAAA;IACA,YAAA;IACA,WAAA;IACA,eAAA;IACA,oCAAA;IACA,iBAAA;IACA;;;;;;oBAMA;CACA;;AAEA;IACA,iBAAA;IACA;;;;MAIA;CACA;;AAEA;IACA,iBAAA;CACA;;;AAGA;IACA,eAAA;CACA;;AAEA;;;;;;GAMA","file":"VueBootstrapTable.vue","sourcesContent":["<template>\n    <div @click=\"closeDropdown\" @keyup.esc=\"closeDropdown\">\n        <!--<pre>{{columns | json}}</pre>-->\n        <!--<pre>{{$data | json}}</pre>-->\n        <div class=\"col-sm-6\">\n            <div v-if=\"showFilter\" style=\"padding-top: 10px;padding-bottom: 10px;\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Filter\" v-model=\"filterKey\">\n                    <div class=\"input-group-addon\">\n                        <i class=\"glyphicon glyphicon-search\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div v-if=\"showColumnPicker\" style=\"padding-top: 10px;padding-bottom: 10px;float:right;\">\n                <div class=\"btn-group\" :class=\"{'open' : columnMenuOpen}\">\n                    <button @click.stop.prevent=\"columnMenuOpen = !columnMenuOpen\" @keyup.esc=\"columnMenuOpen = false\"\n                            type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\">\n                        Columns <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <li v-for=\"column in displayCols\">\n                            <a href=\"#\" @click.stop.prevent=\"toggleColumn(column)\">\n                                <i v-if=\"column.visible\" class=\"glyphicon glyphicon-ok\"></i> {{column.title}}\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-12\">\n            <table class=\"table table-bordered table-hover table-condensed table-striped vue-table\">\n                <thead>\n                    <tr>\n                        <th v-for=\"column in displayCols | filterBy true in 'visible'\" @click=\"sortBy(column.title)\"\n                            track-by=\"$index\"\n                            :class=\"getClasses(column.title)\">\n                            {{ column.title }}\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr v-for=\"entry in filteredValues | orderBy sortKey sortOrders[sortKey]\" track-by=\"$index\">\n                        <td v-for=\"column in displayCols | filterBy true in 'visible'\" track-by=\"$index\"\n                            v-show=\"column.visible\">\n                            <span v-if=\"!column.editable\"> {{ entry[column.title] }} </span>\n                            <value-field-section v-else\n                                v-bind:entry=\"entry\"\n                                :columntitle=\"column.title\"\n                                :value=\"entry[column.title]\"><value-field-section>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div v-if=\"paginated\" class=\"col-sm-12\">\n            <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"pagination bar\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"first page\">\n                <button type=\"button\" class=\"btn btn-default\" @click=\"this.page=1\">&laquo;</button>\n              </div>\n              <div class=\"btn-group\" role=\"group\" aria-label=\"pages\">\n                <button v-for=\"index in validPageNumbers\"\n                    type=\"button\" class=\"btn btn-default\"\n                    v-bind:class=\"{ active: this.page===index }\"\n                    @click=\"this.page=index\">\n                        {{index}}\n                </button>\n              </div>\n              <div class=\"btn-group\" v-if=\"showPaginationEtc\">...</div>\n              <div class=\"btn-group\" role=\"group\" aria-label=\"last page\">\n                <button type=\"button\" class=\"btn btn-default\" @click=\"this.page=this.maxPage\">&raquo;</button>\n              </div>\n            </div>\n        </div>\n    </div>\n</template>\n<style>\n    .vue-table {\n\n    }\n\n    table.vue-table thead > tr > th {\n        cursor: pointer;\n        padding-right: 30px !important;\n    }\n\n    /*.vue-table th.active {\n        color: red;\n    }*/\n\n    .vue-table .arrow {\n        opacity: 1;\n        position: relative;\n    }\n\n    .vue-table .arrow:after {\n        position: absolute;\n        bottom: 8px;\n        right: 8px;\n        display: block;\n        font-family: 'Glyphicons Halflings';\n        content: \"\\e150\";\n        /*\n        display: inline-block;\n        vertical-align: middle;\n        width: 0;\n        height: 0;\n        margin-left: 5px;\n        opacity: 0.66;*/\n    }\n\n    .vue-table .arrow.asc:after {\n        content: \"\\e155\";\n        /*\n        border-left: 4px solid transparent;\n        border-right: 4px solid transparent;\n        border-bottom: 4px solid #000;\n        */\n    }\n\n    .vue-table .arrow.dsc:after {\n        content: \"\\e156\";\n    }\n\n\n    .vue-table .editableField {\n        cursor:pointer;\n    }\n\n    /*.vue-table .selected-cell {\n        background-color: #F7C072;\n    }\n\n    .vue-table .selected-row {\n        background-color: #FAE1BE !important;\n    }*/\n</style>\n<script>\n\n    /* Field Section used for displaying and editing value of cell */\n    var valueFieldSection = {\n      template: '<span v-if=\"!enabled\" @dblclick=\"toggleInput\" class=\"editableField\"> {{ value }} </span>'+\n          '<div v-if=\"enabled\" class=\"input-group\">'+\n          '  <input type=\"text\" class=\"form-control\" v-model=\"value\" @keyup.enter=\"saveThis\" @keyup.esc=\"cancelThis\">'+\n          '  <span class=\"input-group-btn\">'+\n          '    <button class=\"btn btn-danger\" type=\"button\" @click=\"cancelThis\" ><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>'+\n          '    <button class=\"btn btn-primary\" type=\"button\" @click=\"saveThis\" ><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span></button>'+\n          '  </span>'+\n          '</div>',\n      props: ['entry','value','columntitle'],\n      data: function () {\n          return {\n            enabled: false,\n          }\n      },\n      methods: {\n        saveThis: function () {\n            var originalValue = this.entry[this.columntitle];\n            this.entry[this.columntitle] = this.value;\n            this.$dispatch('cellDataModifiedEvent', originalValue, this.value, this.columntitle,  this.entry);\n            this.enabled = !this.enabled;\n        },\n        cancelThis: function () {\n            this.value = this.entry[this.columntitle];\n            this.enabled = !this.enabled;\n        },\n        toggleInput: function () {\n            this.enabled=!this.enabled\n        },\n      }\n    };\n\n    export default {\n        name: \"VueBootstrapTable\",\n        components: {\n            'value-field-section': valueFieldSection,\n        },\n        props: {\n            /**\n             * The column titles, required\n             */\n            columns: {\n                type: Array,\n                required: true,\n            },\n            /**\n             * The rows, an Array of objects\n             */\n            values: {\n                type: Array,\n                required: true,\n            },\n            /**\n             * Enable/disable table sorting, optional, default true\n             */\n            sortable: {\n                type: Boolean,\n                required: false,\n                default: true,\n            },\n            /**\n             * Enable/disable input filter, optional, default false\n             */\n            showFilter: {\n                type: Boolean,\n                required: false,\n                default: false,\n            },\n            /**\n             * Enable/disable column picker to show/hide table columns, optional, default false\n             */\n            showColumnPicker: {\n                type: Boolean,\n                required: false,\n                default: false,\n            },\n            /**\n             * Enable/disable pagination for the table, optional, default false\n             */\n            paginated: {\n                type: Boolean,\n                required: false,\n                default: false,\n            },\n            /**\n             * If pagination is enabled defining the page size, optional, default 10\n             */\n            pageSize: {\n                type: Number,\n                required: false,\n                default: 10,\n            },\n\n        },\n        data: function () {\n            return {\n                filteredSize: 0,\n                filterKey: \"\",\n                sortKey: \"\",\n                sortOrders: {},\n                columnMenuOpen: false,\n                displayCols: [],\n                page: 1,\n            };\n        },\n        ready: function () {\n            this.setSortOrders();\n            var self = this;\n            this.columns.forEach(function (column) {\n                var obj = {};\n                obj.title = column.title;\n                if ( typeof column.visible !== \"undefined\")\n                    obj.visible = column.visible;\n                else\n                    obj.visible = true;\n                if ( typeof column.editable !== \"undefined\")\n                    obj.editable = column.editable;\n                else\n                    obj.editable = false;\n                self.displayCols.push(obj);\n            });\n        },\n        watch: {\n            values: function () {\n            },\n            columns: function () {\n                this.displayCols = [];\n                var self = this;\n                this.columns.forEach(function (column) {\n                    var obj = {};\n                    obj.title = column.title;\n                    obj.visible = true;\n                    self.displayCols.push(obj);\n                });\n                this.setSortOrders();\n            },\n            showFilter: function () {\n                this.filterKey = \"\";\n            },\n            showColumnPicker: function () {\n                this.columnMenuOpen = false;\n\n                this.displayCols.forEach(function (column) {\n                    column.visible = true;\n                });\n            },\n            filterKey: function () {\n                // filter was updated, so resetting to page 1\n                this.page = 1;\n            },\n        },\n        computed: {\n            filteredValues: function () {\n                var result = this.$options.filters.filterBy(this.values, this.filterKey);\n                result = this.$options.filters.orderBy(result, this.sortKey, this.sortOrders[this.sortKey]);\n                this.filteredSize = result.length;\n                if(this.paginated) {\n                    var startIndex = (this.page-1)*this.pageSize;\n                    var tIndex = 0;\n                    var tempResult = [];\n                    while (tIndex < this.pageSize){\n                        if ( typeof result[startIndex+tIndex] !== \"undefined\")\n                            tempResult.push( result[startIndex+tIndex]);\n                        tIndex++;\n                    }\n                    return tempResult;\n                }\n                return result;\n            },\n            validPageNumbers: function () {\n                // 5 page max\n                var result = [];\n                var start = 1;\n                if (this.page > 3)\n                    start = this.page-2;\n                for ( var i = 0 ; start <= this.maxPage && i<5; start++ ) {\n                    result.push(start);\n                    i++;\n                }\n                return result;\n            },\n            maxPage: function () {\n                return Math.ceil(this.filteredSize / this.pageSize);\n            },\n            showPaginationEtc: function () {\n                var temp = 1;\n                if (this.page > 3)\n                    temp = this.page-2;\n                return ( (temp+4) < this.maxPage  );\n            },\n        },\n        methods: {\n            setSortOrders: function () {\n                this.sortKey = \"\";\n                var sortOrders = {};\n                this.columns.forEach(function (column) {\n                    sortOrders[column.title] = 0;\n                });\n                this.sortOrders = sortOrders;\n\n            },\n            sortBy: function (key) {\n                if (this.sortable) {\n                    var self = this;\n                    this.sortKey = key;\n                    this.columns.forEach(function (column) {\n                        if (column.title !== key) {\n                            self.sortOrders[column.title] = 0;\n                        }\n                    });\n                    if (this.sortOrders[key] === 0) {\n                        this.sortOrders[key] = 1;\n                    } else {\n                        this.sortOrders[key] = this.sortOrders[key] * -1;\n                    }\n                }\n                //console.log(JSON.stringify(this.sortOrders));\n            },\n            getClasses: function (key) {\n                var classes = [];\n                if (this.sortable) {\n                    classes.push(\"arrow\");\n                    if (this.sortKey === key) {\n                        classes.push(\"active\");\n                    }\n                    if (this.sortOrders[key] === 1) {\n                        classes.push(\"asc\");\n                    } else if (this.sortOrders[key] === -1) {\n                        classes.push(\"dsc\");\n                    }\n                }\n                return classes;\n            },\n            toggleColumn: function (column) {\n                column.visible = !column.visible;\n            },\n            closeDropdown: function () {\n                this.columnMenuOpen = false;\n            },\n        },\n        events: {\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
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
	//                             <span v-if="!column.editable"> {{ entry[column.title] }} </span>
	//                             <value-field-section v-else
	//                                 v-bind:entry="entry"
	//                                 :columntitle="column.title"
	//                                 :value="entry[column.title]"><value-field-section>
	//                         </td>
	//                     </tr>
	//                 </tbody>
	//             </table>
	//         </div>
	//         <div v-if="paginated" class="col-sm-12">
	//             <div class="btn-toolbar" role="toolbar" aria-label="pagination bar">
	//               <div class="btn-group" role="group" aria-label="first page">
	//                 <button type="button" class="btn btn-default" @click="this.page=1">&laquo;</button>
	//               </div>
	//               <div class="btn-group" role="group" aria-label="pages">
	//                 <button v-for="index in validPageNumbers"
	//                     type="button" class="btn btn-default"
	//                     v-bind:class="{ active: this.page===index }"
	//                     @click="this.page=index">
	//                         {{index}}
	//                 </button>
	//               </div>
	//               <div class="btn-group" v-if="showPaginationEtc">...</div>
	//               <div class="btn-group" role="group" aria-label="last page">
	//                 <button type="button" class="btn btn-default" @click="this.page=this.maxPage">&raquo;</button>
	//               </div>
	//             </div>
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
	//
	//     .vue-table .editableField {
	//         cursor:pointer;
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
	
	/* Field Section used for displaying and editing value of cell */
	var valueFieldSection = {
	    template: '<span v-if="!enabled" @dblclick="toggleInput" class="editableField"> {{ value }} </span>' + '<div v-if="enabled" class="input-group">' + '  <input type="text" class="form-control" v-model="value" @keyup.enter="saveThis" @keyup.esc="cancelThis">' + '  <span class="input-group-btn">' + '    <button class="btn btn-danger" type="button" @click="cancelThis" ><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>' + '    <button class="btn btn-primary" type="button" @click="saveThis" ><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button>' + '  </span>' + '</div>',
	    props: ['entry', 'value', 'columntitle'],
	    data: function data() {
	        return {
	            enabled: false
	        };
	    },
	    methods: {
	        saveThis: function saveThis() {
	            var originalValue = this.entry[this.columntitle];
	            this.entry[this.columntitle] = this.value;
	            this.$dispatch('cellDataModifiedEvent', originalValue, this.value, this.columntitle, this.entry);
	            this.enabled = !this.enabled;
	        },
	        cancelThis: function cancelThis() {
	            this.value = this.entry[this.columntitle];
	            this.enabled = !this.enabled;
	        },
	        toggleInput: function toggleInput() {
	            this.enabled = !this.enabled;
	        }
	    }
	};
	
	exports.default = {
	    name: "VueBootstrapTable",
	    components: {
	        'value-field-section': valueFieldSection
	    },
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
	        },
	        /**
	         * Enable/disable pagination for the table, optional, default false
	         */
	        paginated: {
	            type: Boolean,
	            required: false,
	            default: false
	        },
	        /**
	         * If pagination is enabled defining the page size, optional, default 10
	         */
	        pageSize: {
	            type: Number,
	            required: false,
	            default: 10
	        }
	
	    },
	    data: function data() {
	        return {
	            filteredSize: 0,
	            filterKey: "",
	            sortKey: "",
	            sortOrders: {},
	            columnMenuOpen: false,
	            displayCols: [],
	            page: 1
	        };
	    },
	    ready: function ready() {
	        this.setSortOrders();
	        var self = this;
	        this.columns.forEach(function (column) {
	            var obj = {};
	            obj.title = column.title;
	            if (typeof column.visible !== "undefined") obj.visible = column.visible;else obj.visible = true;
	            if (typeof column.editable !== "undefined") obj.editable = column.editable;else obj.editable = false;
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
	        },
	        filterKey: function filterKey() {
	            // filter was updated, so resetting to page 1
	            this.page = 1;
	        }
	    },
	    computed: {
	        filteredValues: function filteredValues() {
	            var result = this.$options.filters.filterBy(this.values, this.filterKey);
	            result = this.$options.filters.orderBy(result, this.sortKey, this.sortOrders[this.sortKey]);
	            this.filteredSize = result.length;
	            if (this.paginated) {
	                var startIndex = (this.page - 1) * this.pageSize;
	                var tIndex = 0;
	                var tempResult = [];
	                while (tIndex < this.pageSize) {
	                    if (typeof result[startIndex + tIndex] !== "undefined") tempResult.push(result[startIndex + tIndex]);
	                    tIndex++;
	                }
	                return tempResult;
	            }
	            return result;
	        },
	        validPageNumbers: function validPageNumbers() {
	            // 5 page max
	            var result = [];
	            var start = 1;
	            if (this.page > 3) start = this.page - 2;
	            for (var i = 0; start <= this.maxPage && i < 5; start++) {
	                result.push(start);
	                i++;
	            }
	            return result;
	        },
	        maxPage: function maxPage() {
	            return Math.ceil(this.filteredSize / this.pageSize);
	        },
	        showPaginationEtc: function showPaginationEtc() {
	            var temp = 1;
	            if (this.page > 3) temp = this.page - 2;
	            return temp + 4 < this.maxPage;
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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "\n<div @click=\"closeDropdown\" @keyup.esc=\"closeDropdown\">\n    <!--<pre>{{columns | json}}</pre>-->\n    <!--<pre>{{$data | json}}</pre>-->\n    <div class=\"col-sm-6\">\n        <div v-if=\"showFilter\" style=\"padding-top: 10px;padding-bottom: 10px;\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Filter\" v-model=\"filterKey\">\n                <div class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div v-if=\"showColumnPicker\" style=\"padding-top: 10px;padding-bottom: 10px;float:right;\">\n            <div class=\"btn-group\" :class=\"{'open' : columnMenuOpen}\">\n                <button @click.stop.prevent=\"columnMenuOpen = !columnMenuOpen\" @keyup.esc=\"columnMenuOpen = false\"\n                        type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\">\n                    Columns <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                    <li v-for=\"column in displayCols\">\n                        <a href=\"#\" @click.stop.prevent=\"toggleColumn(column)\">\n                            <i v-if=\"column.visible\" class=\"glyphicon glyphicon-ok\"></i> {{column.title}}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12\">\n        <table class=\"table table-bordered table-hover table-condensed table-striped vue-table\">\n            <thead>\n                <tr>\n                    <th v-for=\"column in displayCols | filterBy true in 'visible'\" @click=\"sortBy(column.title)\"\n                        track-by=\"$index\"\n                        :class=\"getClasses(column.title)\">\n                        {{ column.title }}\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-for=\"entry in filteredValues | orderBy sortKey sortOrders[sortKey]\" track-by=\"$index\">\n                    <td v-for=\"column in displayCols | filterBy true in 'visible'\" track-by=\"$index\"\n                        v-show=\"column.visible\">\n                        <span v-if=\"!column.editable\"> {{ entry[column.title] }} </span>\n                        <value-field-section v-else\n                            v-bind:entry=\"entry\"\n                            :columntitle=\"column.title\"\n                            :value=\"entry[column.title]\"><value-field-section>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div v-if=\"paginated\" class=\"col-sm-12\">\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"pagination bar\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"first page\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"this.page=1\">&laquo;</button>\n          </div>\n          <div class=\"btn-group\" role=\"group\" aria-label=\"pages\">\n            <button v-for=\"index in validPageNumbers\"\n                type=\"button\" class=\"btn btn-default\"\n                v-bind:class=\"{ active: this.page===index }\"\n                @click=\"this.page=index\">\n                    {{index}}\n            </button>\n          </div>\n          <div class=\"btn-group\" v-if=\"showPaginationEtc\">...</div>\n          <div class=\"btn-group\" role=\"group\" aria-label=\"last page\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"this.page=this.maxPage\">&raquo;</button>\n          </div>\n        </div>\n    </div>\n</div>\n";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-bootstrap-table.js.map