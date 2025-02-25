(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.config-store"] = factory();
	else
		root["pnp.config-store"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __extends; });
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __decorate; });
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __generator; });
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __spread; });
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@pnp/common/util.js
var util = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@pnp/common/collections.js

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = Object(util["h" /* isFunc */])(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if (o !== undefined && o !== null) {
        return new Map(objectEntries(o));
    }
    return new Map();
}
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
function mergeMaps(target) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < maps.length; i++) {
        maps[i].forEach(function (v, k) {
            target.set(k, v);
        });
    }
    return target;
}
//# sourceMappingURL=collections.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/common/libconfig.js

function setup(config) {
    RuntimeConfig.assign(config);
}
// lable mapping for known config values
var s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
var libconfig_RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl(_v) {
        if (_v === void 0) { _v = new Map(); }
        this._v = _v;
        // setup defaults
        this._v.set(s[0], "session");
        this._v.set(s[1], 60);
        this._v.set(s[2], false);
        this._v.set(s[3], false);
        this._v.set(s[4], 750);
        this._v.set(s[5], null);
        this._v.set(s[6], false);
    }
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    RuntimeConfigImpl.prototype.assign = function (config) {
        this._v = mergeMaps(this._v, objectToMap(config));
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get(s[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get(s[1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get(s[2]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get(s[3]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get(s[4]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get(s[5]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "ie11", {
        get: function () {
            var v = this.get(s[6]);
            if (v) {
                console.warn("PnPjs is running in ie11 compat mode. Not all features may work as expected.");
            }
            return v;
        },
        enumerable: true,
        configurable: true
    });
    return RuntimeConfigImpl;
}());

var _runtimeConfig = new libconfig_RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;
//# sourceMappingURL=libconfig.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/common/net.js
var net = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@pnp/common/storage.js



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var storage_PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        if (defaultTimeoutMinutes === void 0) { defaultTimeoutMinutes = -1; }
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (RuntimeConfig.enableCacheExpiration) {
            this.cacheExpirationHandler();
        }
    }
    PnPClientStorageWrapper.bind = function (store) {
        return new PnPClientStorageWrapper(typeof (store) === "undefined" ? new MemoryStorage() : store);
    };
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (!Object(util["k" /* objectDefinedNotNull */])(o)) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var o;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/, getter()];
                        }
                        o = this.get(key);
                        if (!(o === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getter()];
                    case 1:
                        o = _a.sent();
                        this.put(key, o, expire);
                        _a.label = 2;
                    case 2: return [2 /*return*/, o];
                }
            });
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var i, key;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/];
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.store.length)) return [3 /*break*/, 4];
                        key = this.store.key(i);
                        if (!(key !== null)) return [3 /*break*/, 3];
                        if (!/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) return [3 /*break*/, 3];
                        // get those items as get will delete from cache if they are expired
                        return [4 /*yield*/, this.get(key)];
                    case 2:
                        // get those items as get will delete from cache if they are expired
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = RuntimeConfig.defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = Object(util["c" /* dateAdd */])(new Date(), "second", defaultTimeout);
        }
        return Object(util["j" /* jsS */])({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        this.deleteExpired().then(function (_) {
            // call ourself in the future
            setTimeout(Object(util["d" /* getCtxCallback */])(_this, _this.cacheExpirationHandler), RuntimeConfig.cacheExpirationIntervalMilliseconds);
        }).catch(console.error);
    };
    return PnPClientStorageWrapper;
}());

/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new Map(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.size;
        },
        enumerable: true,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return Array.from(this._store)[index][0];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.delete(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.set(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = storage_PnPClientStorageWrapper.bind(localStorage);
            }
            return this._local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = storage_PnPClientStorageWrapper.bind(sessionStorage);
            }
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    return PnPClientStorage;
}());

//# sourceMappingURL=storage.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/common/index.js
/* concated harmony reexport objectToMap */__webpack_require__.d(__webpack_exports__, "r", function() { return objectToMap; });
/* concated harmony reexport mergeMaps */__webpack_require__.d(__webpack_exports__, "o", function() { return mergeMaps; });
/* unused concated harmony import setup */
/* unused concated harmony import RuntimeConfigImpl */
/* concated harmony reexport RuntimeConfig */__webpack_require__.d(__webpack_exports__, "c", function() { return RuntimeConfig; });
/* concated harmony reexport mergeHeaders */__webpack_require__.d(__webpack_exports__, "n", function() { return net["b" /* mergeHeaders */]; });
/* concated harmony reexport mergeOptions */__webpack_require__.d(__webpack_exports__, "p", function() { return net["c" /* mergeOptions */]; });
/* unused concated harmony import getADALResource */
/* concated harmony reexport FetchClient */__webpack_require__.d(__webpack_exports__, "a", function() { return net["a" /* FetchClient */]; });
/* unused concated harmony import BearerTokenFetchClient */
/* unused concated harmony import SPFxAdalClient */
/* unused concated harmony import PnPClientStorageWrapper */
/* concated harmony reexport PnPClientStorage */__webpack_require__.d(__webpack_exports__, "b", function() { return PnPClientStorage; });
/* concated harmony reexport getCtxCallback */__webpack_require__.d(__webpack_exports__, "g", function() { return util["d" /* getCtxCallback */]; });
/* concated harmony reexport dateAdd */__webpack_require__.d(__webpack_exports__, "f", function() { return util["c" /* dateAdd */]; });
/* concated harmony reexport combine */__webpack_require__.d(__webpack_exports__, "e", function() { return util["b" /* combine */]; });
/* unused concated harmony import getRandomString */
/* concated harmony reexport getGUID */__webpack_require__.d(__webpack_exports__, "h", function() { return util["e" /* getGUID */]; });
/* concated harmony reexport isFunc */__webpack_require__.d(__webpack_exports__, "k", function() { return util["h" /* isFunc */]; });
/* concated harmony reexport objectDefinedNotNull */__webpack_require__.d(__webpack_exports__, "q", function() { return util["k" /* objectDefinedNotNull */]; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "j", function() { return util["g" /* isArray */]; });
/* concated harmony reexport assign */__webpack_require__.d(__webpack_exports__, "d", function() { return util["a" /* assign */]; });
/* concated harmony reexport isUrlAbsolute */__webpack_require__.d(__webpack_exports__, "l", function() { return util["i" /* isUrlAbsolute */]; });
/* concated harmony reexport stringIsNullOrEmpty */__webpack_require__.d(__webpack_exports__, "s", function() { return util["l" /* stringIsNullOrEmpty */]; });
/* unused concated harmony import sanitizeGuid */
/* concated harmony reexport jsS */__webpack_require__.d(__webpack_exports__, "m", function() { return util["j" /* jsS */]; });
/* concated harmony reexport hOP */__webpack_require__.d(__webpack_exports__, "i", function() { return util["f" /* hOP */]; });
/* unused concated harmony import getHashCode */





//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCtxCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return combine; });
/* unused harmony export getRandomString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return stringIsNullOrEmpty; });
/* unused harmony export sanitizeGuid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hOP; });
/* unused harmony export getHashCode */
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
function getCtxCallback(context, method) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    var ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths
        .filter(function (path) { return !stringIsNullOrEmpty(path); })
        .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    var text = new Array(chars);
    for (var i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* tslint:disable no-bitwise */
function getGUID() {
    var d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* tslint:enable */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(f) {
    return typeof f === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray ? Array.isArray(array) : array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
function assign(target, source, noOverwrite, filter) {
    if (noOverwrite === void 0) { noOverwrite = false; }
    if (filter === void 0) { filter = function () { return true; }; }
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
    // final filter we will use
    var f = function (v) { return check(target, v) && filter(v); };
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce(function (t, v) {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return s === undefined || s === null || s.length < 1;
}
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
function sanitizeGuid(guid) {
    if (stringIsNullOrEmpty(guid)) {
        return guid;
    }
    var matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
    return matches === null ? guid : matches[1];
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
// tslint:disable:no-bitwise
function getHashCode(s) {
    var hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
// tslint:enable:no-bitwise
//# sourceMappingURL=util.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setup; });
/* unused harmony export SPRuntimeConfigImpl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPRuntimeConfig; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function setup(config) {
    _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "c"].assign(config);
}
var SPRuntimeConfigImpl = /** @class */ (function () {
    function SPRuntimeConfigImpl() {
    }
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "c"].get("sp");
            if (spPart !== undefined && spPart.headers !== undefined) {
                return spPart.headers;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "baseUrl", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "c"].get("sp");
            if (spPart !== undefined && spPart.baseUrl !== undefined) {
                return spPart.baseUrl;
            }
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "q"])(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "c"].spfxContext)) {
                return _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "c"].spfxContext.pageContext.web.absoluteUrl;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "c"].get("sp");
            if (spPart !== undefined && spPart.fetchClientFactory !== undefined) {
                return spPart.fetchClientFactory;
            }
            else {
                return function () { return new _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* FetchClient */ "a"](); };
            }
        },
        enumerable: true,
        configurable: true
    });
    return SPRuntimeConfigImpl;
}());

var SPRuntimeConfig = new SPRuntimeConfigImpl();
//# sourceMappingURL=splibconfig.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toAbsoluteUrl; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _splibconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl) {
    return new Promise(function (resolve) {
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "l"])(candidateUrl)) {
            // if we are already absolute, then just return the url
            return resolve(candidateUrl);
        }
        if (_splibconfig__WEBPACK_IMPORTED_MODULE_1__[/* SPRuntimeConfig */ "a"].baseUrl !== null) {
            // base url specified either with baseUrl of spfxContext config property
            return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "e"])(_splibconfig__WEBPACK_IMPORTED_MODULE_1__[/* SPRuntimeConfig */ "a"].baseUrl, candidateUrl));
        }
        if (global._spPageContextInfo !== undefined) {
            // operating in classic pages
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "i"])(global._spPageContextInfo, "webAbsoluteUrl")) {
                return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "e"])(global._spPageContextInfo.webAbsoluteUrl, candidateUrl));
            }
            else if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "i"])(global._spPageContextInfo, "webServerRelativeUrl")) {
                return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "e"])(global._spPageContextInfo.webServerRelativeUrl, candidateUrl));
            }
        }
        // does window.location exist and have a certain path part in it?
        if (global.location !== undefined) {
            var baseUrl_1 = global.location.toString().toLowerCase();
            ["/_layouts/", "/siteassets/"].forEach(function (s) {
                var index = baseUrl_1.indexOf(s);
                if (index > 0) {
                    return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "e"])(baseUrl_1.substr(0, index), candidateUrl));
                }
            });
        }
        return resolve(candidateUrl);
    });
}
//# sourceMappingURL=toabsoluteurl.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mergeOptions; });
/* unused harmony export getADALResource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchClient; });
/* unused harmony export BearerTokenFetchClient */
/* unused harmony export SPFxAdalClient */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function mergeHeaders(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "k"])(source)) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "k"])(source)) {
        var headers = Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(target.headers || {}, source.headers);
        target = Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(target, source);
        target.headers = headers;
    }
}
/**
 * Parses out the root of the request url to use as the resource when getting the token
 *
  * @param url The url to parse
 */
function getADALResource(url) {
    var u = new URL(url);
    return u.protocol + "//" + u.hostname;
}
/**
 * Makes requests using the global/window fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return global.fetch(url, options);
    };
    return FetchClient;
}());

/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(BearerTokenFetchClient, _super);
    function BearerTokenFetchClient(_token) {
        var _this = _super.call(this) || this;
        _this._token = _token;
        return _this;
    }
    Object.defineProperty(BearerTokenFetchClient.prototype, "token", {
        get: function () {
            return this._token || "";
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    BearerTokenFetchClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", "Bearer " + this._token);
        options.headers = headers;
        return _super.prototype.fetch.call(this, url, options);
    };
    return BearerTokenFetchClient;
}(FetchClient));

/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
var SPFxAdalClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(SPFxAdalClient, _super);
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    function SPFxAdalClient(context) {
        var _this = _super.call(this, null) || this;
        _this.context = context;
        return _this;
    }
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    SPFxAdalClient.prototype.fetch = function (url, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var token;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "d"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken(getADALResource(url))];
                    case 1:
                        token = _a.sent();
                        this.token = token;
                        return [2 /*return*/, _super.prototype.fetch.call(this, url, options)];
                }
            });
        });
    };
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    SPFxAdalClient.prototype.getToken = function (resource) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var provider;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "d"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.aadTokenProviderFactory.getTokenProvider()];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, provider.getToken(resource)];
                }
            });
        });
    };
    return SPFxAdalClient;
}(BearerTokenFetchClient));

//# sourceMappingURL=net.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@pnp/common/index.js + 3 modules
var common = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@pnp/config-store/configuration.js

/**
 * Class used to manage the current application settings
 *
 */
var configuration_Settings = /** @class */ (function () {
    /**
     * Creates a new instance of the settings class
     *
     * @constructor
     */
    function Settings(_settings) {
        if (_settings === void 0) { _settings = new Map(); }
        this._settings = _settings;
    }
    /**
     * Adds a new single setting, or overwrites a previous setting with the same key
     *
     * @param {string} key The key used to store this setting
     * @param {string} value The setting value to store
     */
    Settings.prototype.add = function (key, value) {
        this._settings.set(key, value);
    };
    /**
     * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
     *
     * @param {string} key The key used to store this setting
     * @param {any} value The setting value to store
     */
    Settings.prototype.addJSON = function (key, value) {
        this._settings.set(key, Object(common["m" /* jsS */])(value));
    };
    /**
     * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
     *
     * @param {ITypedHash<any>} hash The set of values to add
     */
    Settings.prototype.apply = function (hash) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this._settings = Object(common["o" /* mergeMaps */])(_this._settings, Object(common["r" /* objectToMap */])(hash));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Loads configuration settings into the collection from the supplied provider and returns a Promise
     *
     * @param {IConfigurationProvider} provider The provider from which we will load the settings
     */
    Settings.prototype.load = function (provider) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            provider.getConfiguration().then(function (value) {
                _this._settings = Object(common["o" /* mergeMaps */])(_this._settings, Object(common["r" /* objectToMap */])(value));
                resolve();
            }).catch(reject);
        });
    };
    /**
     * Gets a value from the configuration
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {string} string value from the configuration
     */
    Settings.prototype.get = function (key) {
        return this._settings.get(key) || null;
    };
    /**
     * Gets a JSON value, rehydrating the stored string to the original object
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {any} object from the configuration
     */
    Settings.prototype.getJSON = function (key) {
        var o = this.get(key);
        if (o === undefined || o === null) {
            return o;
        }
        return JSON.parse(o);
    };
    return Settings;
}());

//# sourceMappingURL=configuration.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/cachingConfigurationProvider.js

/**
 * A caching provider which can wrap other non-caching providers
 *
 */
var cachingConfigurationProvider_CachingConfigurationProvider = /** @class */ (function () {
    /**
     * Creates a new caching configuration provider
     * @constructor
     * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
     * @param {string} cacheKey Key that will be used to store cached items to the cache
     * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
     */
    function CachingConfigurationProvider(wrappedProvider, cacheKey, cacheStore) {
        this.wrappedProvider = wrappedProvider;
        this.cacheKey = cacheKey;
        this.wrappedProvider = wrappedProvider;
        this.store = (cacheStore) ? cacheStore : this.selectPnPCache();
    }
    /**
     * Gets the wrapped configuration providers
     *
     * @return {IConfigurationProvider} Wrapped configuration provider
     */
    CachingConfigurationProvider.prototype.getWrappedProvider = function () {
        return this.wrappedProvider;
    };
    /**
     * Loads the configuration values either from the cache or from the wrapped provider
     *
     * @return {Promise<ITypedHash<string>>} Promise of loaded configuration values
     */
    CachingConfigurationProvider.prototype.getConfiguration = function () {
        var _this = this;
        // Cache not available, pass control to the wrapped provider
        if ((!this.store) || (!this.store.enabled)) {
            return this.wrappedProvider.getConfiguration();
        }
        return this.store.getOrPut(this.cacheKey, function () {
            return _this.wrappedProvider.getConfiguration().then(function (providedConfig) {
                _this.store.put(_this.cacheKey, providedConfig);
                return providedConfig;
            });
        });
    };
    CachingConfigurationProvider.prototype.selectPnPCache = function () {
        var pnpCache = new common["b" /* PnPClientStorage */]();
        if ((pnpCache.local) && (pnpCache.local.enabled)) {
            return pnpCache.local;
        }
        if ((pnpCache.session) && (pnpCache.session.enabled)) {
            return pnpCache.session;
        }
        throw Error("Cannot create a caching configuration provider since cache is not available.");
    };
    return CachingConfigurationProvider;
}());
/* harmony default export */ var cachingConfigurationProvider = (cachingConfigurationProvider_CachingConfigurationProvider);
//# sourceMappingURL=cachingConfigurationProvider.js.map
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@pnp/odata/batch.js

var batch_Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = Object(common["h" /* getGUID */])(); }
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
        this._index = -1;
    }
    Object.defineProperty(Batch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batch.prototype, "requests", {
        /**
         * The requests contained in this batch
         */
        get: function () {
            // we sort these each time this is accessed
            return this._reqs.sort(function (info1, info2) { return info1.index - info2.index; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    Batch.prototype.track = function (batchee) {
        batchee.data.batch = this;
        // we need to track the order requests are added to the batch to ensure we always
        // operate on them in order
        if (typeof batchee.data.batchIndex === "undefined" || batchee.data.batchIndex < 0) {
            batchee.data.batchIndex = ++this._index;
        }
    };
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    Batch.prototype.add = function (context) {
        var info = {
            id: context.requestId,
            index: context.batchIndex,
            method: context.method.toUpperCase(),
            options: context.options,
            parser: context.parser,
            reject: null,
            resolve: null,
            url: context.url,
        };
        // we create a new promise that will be resolved within the batch
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    Batch.prototype.addDependency = function () {
        var resolver = function () { return void (0); };
        this._deps.push(new Promise(function (resolve) {
            resolver = resolve;
        }));
        return resolver;
    };
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    Batch.prototype.addResolveBatchDependency = function (p) {
        this._rDeps.push(p);
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    Batch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(function () { return Promise.all(_this._deps); })
            .then(function () { return _this.executeImpl(); })
            .then(function () { return Promise.all(_this._rDeps); })
            .then(function () { return void (0); });
    };
    return Batch;
}());

//# sourceMappingURL=batch.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/caching.js

var caching_CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        if (storeName === void 0) { storeName = common["c" /* RuntimeConfig */].defaultCachingStore; }
        if (expiration === void 0) { expiration = Object(common["f" /* dateAdd */])(new Date(), "second", common["c" /* RuntimeConfig */].defaultCachingTimeoutSeconds); }
        this.key = key;
        this.storeName = storeName;
        this.expiration = expiration;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return CachingOptions.storage.local;
            }
            else {
                return CachingOptions.storage.session;
            }
        },
        enumerable: true,
        configurable: true
    });
    CachingOptions.storage = new common["b" /* PnPClientStorage */]();
    return CachingOptions;
}());

var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        return this.parser.parse(response).then(function (r) { return _this.cacheData(r); });
    };
    CachingParserWrapper.prototype.cacheData = function (data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    };
    return CachingParserWrapper;
}());

//# sourceMappingURL=caching.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/add-prop.js
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path);
        },
    });
}
//# sourceMappingURL=add-prop.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-extensions.js


var _enableExtensions = false;
var globaExtensions = [];
var ObjExtensionsSym = Symbol("__extensions");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
var extendGlobal = function (e) {
    _enableExtensions = true;
    extendCol(globaExtensions, e);
};
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
var extendObj = function (target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
};
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
var extendFactory = function (factory, extensions) {
    _enableExtensions = true;
    if (factory.__proto__[ObjExtensionsSym] === undefined) {
        factory.__proto__[ObjExtensionsSym] = [];
    }
    extendCol(factory.__proto__[ObjExtensionsSym], extensions);
};
function extendCol(a, e) {
    if (Object(common["j" /* isArray */])(e)) {
        // @ts-ignore
        a.push.apply(a, Object(tslib_es6["e" /* __spread */])(e));
    }
    else {
        // @ts-ignore
        a.push(e);
    }
}
/**
 * Clears all global extensions
 */
var clearGlobalExtensions = function () {
    globaExtensions.length = 0;
};
/**
 * Disables all extensions
 */
var disableExtensions = function () {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
var enableExtensions = function () {
    _enableExtensions = true;
};
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
var applyFactoryExtensions = function (factory, args) {
    var o = factory(args);
    if (factory.__proto__[ObjExtensionsSym]) {
        o = extendObj(o, factory.__proto__[ObjExtensionsSym]);
    }
    return o;
};
function extensionOrDefault(op, or, target) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (_enableExtensions) {
        var extensions = [];
        // we need to first invoke extensions tied to only this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push.apply(extensions, Object(tslib_es6["e" /* __spread */])(Reflect.get(target, ObjExtensionsSym)));
        }
        // second we need to process any global extensions
        extensions.push.apply(extensions, Object(tslib_es6["e" /* __spread */])(globaExtensions));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if (Object(common["k" /* isFunc */])(extension)) {
                // this extension is a function which we call
                result = extension.apply(void 0, Object(tslib_es6["e" /* __spread */])([op, target], rest));
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op).apply(void 0, Object(tslib_es6["e" /* __spread */])([target], rest));
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or.apply(void 0, Object(tslib_es6["e" /* __spread */])([target], rest));
}
//# sourceMappingURL=invokable-extensions.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-binder.js



var invokableBinder = function (invoker) { return function (constructor) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var factory = function (as) {
            var r = Object.assign(function () {
                var ags = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    ags[_i] = arguments[_i];
                }
                return invoker.apply(r, ags);
            }, new (constructor.bind.apply(constructor, Object(tslib_es6["e" /* __spread */])([void 0], as)))());
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        if (common["c" /* RuntimeConfig */].ie11) {
            return factory(args);
        }
        else {
            return new Proxy(applyFactoryExtensions(factory, args), {
                apply: function (target, _thisArg, argArray) {
                    return extensionOrDefault("apply", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.apply(a[0], a[1], a[2]);
                    }, target, _thisArg, argArray);
                },
                get: function (target, p, receiver) {
                    return extensionOrDefault("get", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.get(a[0], a[1], a[2]);
                    }, target, p, receiver);
                },
                has: function (target, p) {
                    return extensionOrDefault("has", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.has(a[0], a[1]);
                    }, target, p);
                },
                set: function (target, p, value, receiver) {
                    return extensionOrDefault("set", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.set(a[0], a[1], a[2], a[3]);
                    }, target, p, value, receiver);
                },
            });
        }
    };
}; };
var invokableFactory = invokableBinder(function (options) {
    return this.defaultAction(options);
});
//# sourceMappingURL=invokable-binder.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/parsers.js


var parsers_ODataParser = /** @class */ (function () {
    function ODataParser() {
    }
    ODataParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                _this.parseImpl(r, resolve, reject);
            }
        });
    };
    ODataParser.prototype.parseImpl = function (r, resolve, reject) {
        var _this = this;
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                .catch(function (e) { return reject(e); });
        }
    };
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    ODataParser.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            parsers_HttpRequestError.init(r).then(reject);
        }
        return r.ok;
    };
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    ODataParser.prototype.parseODataJSON = function (json) {
        var result = json;
        if (Object(common["i" /* hOP */])(json, "d")) {
            if (Object(common["i" /* hOP */])(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (Object(common["i" /* hOP */])(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var parsers_TextParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(parsers_ODataParser));

var parsers_BlobParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(parsers_ODataParser));

var parsers_JSONParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(parsers_ODataParser));

var parsers_BufferParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (Object(common["k" /* isFunc */])(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(parsers_ODataParser));

var parsers_LambdaParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(LambdaParser, _super);
    function LambdaParser(parser) {
        var _this = _super.call(this) || this;
        _this.parser = parser;
        return _this;
    }
    LambdaParser.prototype.parseImpl = function (r, resolve) {
        this.parser(r).then(resolve);
    };
    return LambdaParser;
}(parsers_ODataParser));

var parsers_HttpRequestError = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(HttpRequestError, _super);
    function HttpRequestError(message, response, status, statusText) {
        if (status === void 0) { status = response.status; }
        if (statusText === void 0) { statusText = response.statusText; }
        var _this = _super.call(this, message) || this;
        _this.response = response;
        _this.status = status;
        _this.statusText = statusText;
        _this.isHttpRequestError = true;
        return _this;
    }
    HttpRequestError.init = function (r) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var t;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, r.clone().text()];
                    case 1:
                        t = _a.sent();
                        return [2 /*return*/, new HttpRequestError("Error making HttpClient request in queryable [" + r.status + "] " + r.statusText + " ::> " + t, r.clone())];
                }
            });
        });
    };
    return HttpRequestError;
}(Error));

//# sourceMappingURL=parsers.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/queryable.js



function cloneQueryableData(source) {
    var s = JSON.stringify(source, function (key, value) {
        switch (key) {
            case "query":
                return JSON.stringify(Object(tslib_es6["e" /* __spread */])(value));
            case "batch":
                return "-";
            case "batchDependency":
                return "-";
            case "cachingOptions":
                return "-";
            case "clientFactory":
                return "-";
            case "parser":
                return "-";
            default:
                return value;
        }
    }, 0);
    var parsed = JSON.parse(s, function (key, value) {
        switch (key) {
            case "query":
                return new Map(JSON.parse(value));
            case "batch":
                return source.batch;
            case "batchDependency":
                return source.batchDependency;
            case "cachingOptions":
                return source.cachingOptions;
            case "clientFactory":
                return source.clientFactory;
            case "parser":
                return source.parser;
            default:
                return value;
        }
    });
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    if (source.options && source.options.body) {
        parsed.options.body = source.options.body;
    }
    return parsed;
}
var queryable_Queryable = /** @class */ (function () {
    function Queryable(dataSeed) {
        if (dataSeed === void 0) { dataSeed = {}; }
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new parsers_ODataParser(),
            query: new Map(),
            url: "",
            useCaching: false,
        }, cloneQueryableData(dataSeed));
    }
    Object.defineProperty(Queryable.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = Object.assign({}, cloneQueryableData(this.data), cloneQueryableData(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Gets the currentl url
    *
    */
    Queryable.prototype.toUrl = function () {
        return this.data.url;
    };
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
     */
    Queryable.prototype.concat = function (pathPart) {
        this.data.url += pathPart;
        return this;
    };
    Object.defineProperty(Queryable.prototype, "query", {
        /**
         * Provides access to the query builder for this url
         *
         */
        get: function () {
            return this.data.query;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    Queryable.prototype.configure = function (options) {
        Object(common["p" /* mergeOptions */])(this.data.options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        Object(common["p" /* mergeOptions */])(this.data.options, o.data.options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!common["c" /* RuntimeConfig */].globalCacheDisable) {
            this.data.useCaching = true;
            if (options !== undefined) {
                this.data.cachingOptions = options;
            }
        }
        return this;
    };
    Queryable.prototype.usingParser = function (parser) {
        this.data.parser = parser;
        return this;
    };
    /**
     * Allows you to set a request specific processing pipeline
     *
     * @param pipeline The set of methods, in order, to execute a given request
     */
    Queryable.prototype.withPipeline = function (pipeline) {
        this.data.pipes = pipeline.slice(0);
        return this;
    };
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    Queryable.prototype.append = function (pathPart) {
        this.data.url = Object(common["e" /* combine */])(this.data.url, pathPart);
    };
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    Queryable.prototype.inBatch = function (batch) {
        if (this.hasBatch) {
            throw Error("This query is already part of a batch.");
        }
        if (Object(common["q" /* objectDefinedNotNull */])(batch)) {
            batch.track(this);
        }
        return this;
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    Queryable.prototype.addBatchDependency = function () {
        if (Object(common["q" /* objectDefinedNotNull */])(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(Queryable.prototype, "hasBatch", {
        /**
         * Indicates if the current query has a batch associated
         *
         */
        get: function () {
            return Object(common["q" /* objectDefinedNotNull */])(this.data.batch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "batch", {
        /**
         * The batch currently associated with this query or null
         *
         */
        get: function () {
            return this.hasBatch ? this.data.batch : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "parentUrl", {
        /**
         * Gets the parent url used when creating this instance
         *
         */
        get: function () {
            return this.data.parentUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clones this instance's data to target
     *
     * @param target Instance to which data is written
     * @param settings [Optional] Settings controlling how clone is applied
     */
    Queryable.prototype.cloneTo = function (target, settings) {
        if (settings === void 0) { settings = { includeBatch: true }; }
        target.data = Object.assign({}, cloneQueryableData(this.data), {
            batch: null,
            cloneParentCacheOptions: null,
            cloneParentWasCaching: false,
        }, cloneQueryableData(target.data));
        target.configureFrom(this);
        if (settings.includeBatch) {
            target.inBatch(this.batch);
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    };
    return Queryable;
}());

//# sourceMappingURL=queryable.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/logging/logger.js
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        /**
         * Gets or sets the active log level to apply for log filtering
         */
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance === undefined || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.forEach(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
     * Clears the subscribers collection, returning the collection before modification
     */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
         * Gets the current subscriber count
         */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.write(JSON.stringify(json), level);
    };
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    Logger.error = function (err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    };
    return Logger;
}());

var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = 2 /* Warning */; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: true,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
        }
    };
    return LoggerImpl;
}());
/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=logger.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/logging/listeners.js
/**
 * Implementation of LogListener which logs to the console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (entry.data !== undefined) {
            try {
                msg.push(" Data: " + JSON.stringify(entry.data));
            }
            catch (e) {
                msg.push(" Data: Error in stringify of supplied data " + e);
            }
        }
        return msg.join("");
    };
    return ConsoleListener;
}());

/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());

//# sourceMappingURL=listeners.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/logging/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline.js




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    Logger.log({
        data: Logger.activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result from pipeline. Set logging to verbose to see data.",
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    return c.pipes.length > 0 ? c.pipes.shift()(c) : Promise.resolve(c);
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipes.length < 1) {
        Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    var promise = next(context).then(function (ctx) { return returnResult(ctx); }).catch(function (e) {
        Logger.error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requets have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && Object(common["i" /* hOP */])(args[0], "hasResult") && args[0].hasResult) {
                Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
var pipeline_PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            Logger.log({
                data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.method + " request (" + context.url + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.useCaching) {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new caching_CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = Object(common["d" /* assign */])(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        Logger.log({
                            data: Logger.activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        // ensure we clear any held batch dependency we are resolving from the cache
                        if (Object(common["k" /* isFunc */])(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (Object(common["i" /* hOP */])(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                var p = context.batch.add(context);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (Object(common["k" /* isFunc */])(context.batchDependency)) {
                    context.batchDependency();
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = Object(common["d" /* assign */])(context.options || {}, { method: context.method });
                client.fetch(context.url, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.method + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.method + " request.",
                });
            }
            resolve(context);
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    Object(tslib_es6["b" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    Object(tslib_es6["b" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    Object(tslib_es6["b" /* __decorate */])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());

function getDefaultPipeline() {
    return [
        pipeline_PipelineMethods.logStart,
        pipeline_PipelineMethods.caching,
        pipeline_PipelineMethods.send,
        pipeline_PipelineMethods.logEnd,
    ].slice(0);
}
//# sourceMappingURL=pipeline.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline-binder.js




// first we bind the pipeline we will use for all requests within this closure
function pipelineBinder(pipes) {
    // then we bind the client factory we'll use (typically done in an implementing library such as sp)
    return function (clientFactory) {
        // then we create a binder we can apply for each type of method (GET, POST, etc.)
        return function (method) {
            // finally we get a function back to which we can pass an IQueryableData instance and execute the request it defines
            return function (o) {
                // send the IQueryableData down the pipeline
                return pipe(Object.assign({}, {
                    batch: null,
                    batchDependency: null,
                    batchIndex: -1,
                    cachingOptions: null,
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: Object(common["q" /* objectDefinedNotNull */])(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new parsers_ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: Object(common["h" /* getGUID */])(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(getDefaultPipeline());
//# sourceMappingURL=pipeline-binder.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/request-builders.js

function body(o, previous) {
    return Object.assign({ body: Object(common["m" /* jsS */])(o) }, previous);
}
function request_builders_headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/index.js










//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/metadata.js
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
//# sourceMappingURL=metadata.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/sp/splibconfig.js
var splibconfig = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/extractweburl.js

function extractWebUrl(candidateUrl) {
    if (Object(common["s" /* stringIsNullOrEmpty */])(candidateUrl)) {
        return "";
    }
    var index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extractweburl.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/telemetry.js



/**
 * Includes this method name in the X-ClientService-ClientTag used to record pnpjs usage
 *
 * @param name Method name, displayed in the
 */
function tag(name) {
    return function (target, key, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
                return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                    this.configure(request_builders_headers({ "X-PnPjs-Tracking": name }));
                    return [2 /*return*/, originalMethod.apply(this, args)];
                });
            });
        };
        return descriptor;
    };
}
tag.getClientTag = function (h, deleteFromCollection) {
    if (deleteFromCollection === void 0) { deleteFromCollection = true; }
    if (h.has("X-PnPjs-Tracking")) {
        var methodName = h.get("X-PnPjs-Tracking");
        if (deleteFromCollection) {
            h.delete("X-PnPjs-Tracking");
        }
        if (!Object(common["s" /* stringIsNullOrEmpty */])(methodName)) {
            return methodName;
        }
    }
    return "";
};
tag.configure = function (o, name) {
    return o.configure(request_builders_headers({ "X-PnPjs-Tracking": name }));
};
tag.isTagged = function (o) {
    return o.data.options.headers && o.data.options.headers["X-PnPjs-Tracking"];
};
//# sourceMappingURL=telemetry.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sphttpclient.js






var sphttpclient_SPHttpClient = /** @class */ (function () {
    function SPHttpClient(_impl) {
        if (_impl === void 0) { _impl = splibconfig["a" /* SPRuntimeConfig */].fetchClientFactory(); }
        this._impl = _impl;
        this._digestCache = getDigestFactory(this);
    }
    SPHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var opts, headers, methodName, clientTag, digest;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = Object(common["d" /* assign */])(options, { cache: "no-cache", credentials: "same-origin" }, true);
                        headers = new Headers();
                        // first we add the global headers so they can be overwritten by any passed in locally to this call
                        Object(common["n" /* mergeHeaders */])(headers, splibconfig["a" /* SPRuntimeConfig */].headers);
                        // second we add the local options so we can overwrite the globals
                        Object(common["n" /* mergeHeaders */])(headers, options.headers);
                        // lastly we apply any default headers we need that may not exist
                        if (!headers.has("Accept")) {
                            headers.append("Accept", "application/json");
                        }
                        if (!headers.has("Content-Type")) {
                            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                        }
                        if (!headers.has("X-ClientService-ClientTag")) {
                            methodName = tag.getClientTag(headers);
                            clientTag = "PnPCoreJS:2.0.3:" + methodName;
                            if (clientTag.length > 32) {
                                clientTag = clientTag.substr(0, 32);
                            }
                            headers.append("X-ClientService-ClientTag", clientTag);
                        }
                        if (!headers.has("User-Agent")) {
                            // this marks the requests for understanding by the service
                            // does not work in browsers
                            headers.append("User-Agent", "NONISV|SharePointPnP|PnPjs/2.0.3");
                        }
                        opts = Object(common["d" /* assign */])(opts, { headers: headers });
                        if (!(opts.method && opts.method.toUpperCase() !== "GET" && !headers.has("X-RequestDigest") && !headers.has("Authorization"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._digestCache(extractWebUrl(url))];
                    case 1:
                        digest = _a.sent();
                        headers.append("X-RequestDigest", digest);
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.fetchRaw(url, opts)];
                }
            });
        });
    };
    SPHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        Object(common["n" /* mergeHeaders */])(rawHeaders, options.headers);
        options = Object(common["d" /* assign */])(options, { headers: rawHeaders });
        var retry = function (ctx) {
            // handles setting the proper timeout for a retry
            var setRetry = function (response) {
                var delay;
                if (response.headers.has("Retry-After")) {
                    // if we have gotten a header, use that value as the delay value
                    delay = parseInt(response.headers.get("Retry-After"), 10);
                }
                else {
                    // grab our current delay
                    delay = ctx.delay;
                    // Increment our counters.
                    ctx.delay *= 2;
                }
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(Error("Retry count exceeded (" + ctx.retryCount + ") for request. Response status: [" + response.status + "] " + response.statusText));
                }
                else {
                    // Set our retry timeout for {delay} milliseconds.
                    setTimeout(Object(common["g" /* getCtxCallback */])(_this, retry, ctx), delay);
                }
            };
            // send the actual request
            _this._impl.fetch(url, options).then(function (response) {
                if (response.status === 429) {
                    // we have been throttled
                    setRetry(response);
                }
                else {
                    ctx.resolve(response);
                }
            }).catch(function (response) {
                if (response.status === 503 || response.status === 504) {
                    // http status code 503 or 504, we can retry this
                    setRetry(response);
                }
                else {
                    ctx.reject(response);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            retry.call(_this, {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            });
        });
    };
    SPHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["d" /* assign */])(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["d" /* assign */])(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["d" /* assign */])(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["d" /* assign */])(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return SPHttpClient;
}());

// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new Map();
function getDigestFactory(client) {
    var _this = this;
    return function (webUrl) { return Object(tslib_es6["a" /* __awaiter */])(_this, void 0, void 0, function () {
        var cachedDigest, now, url, headers, resp, parsed, newCachedDigest;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cachedDigest = digests.get(webUrl);
                    if (cachedDigest !== undefined) {
                        now = new Date();
                        if (now < cachedDigest.expiration) {
                            return [2 /*return*/, cachedDigest.value];
                        }
                    }
                    url = Object(common["e" /* combine */])(webUrl, "/_api/contextinfo");
                    headers = {
                        "Accept": "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose;charset=utf-8",
                    };
                    return [4 /*yield*/, client.fetchRaw(url, {
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: Object(common["d" /* assign */])(headers, splibconfig["a" /* SPRuntimeConfig */].headers, true),
                            method: "POST",
                        })];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, (new parsers_ODataParser()).parse(resp).then(function (r) { return r.GetContextWebInformation; })];
                case 2:
                    parsed = _a.sent();
                    newCachedDigest = {
                        expiration: Object(common["f" /* dateAdd */])(new Date(), "second", parsed.FormDigestTimeoutSeconds),
                        value: parsed.FormDigestValue,
                    };
                    digests.set(webUrl, newCachedDigest);
                    return [2 /*return*/, newCachedDigest.value];
            }
        });
    }); };
}
//# sourceMappingURL=sphttpclient.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/sp/utils/toabsoluteurl.js
var toabsoluteurl = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@pnp/sp/operations.js





var spClientBinder = defaultPipelineBinder(function () { return new sphttpclient_SPHttpClient(); });
var send = function (method) {
    var operation = spClientBinder(method);
    return function (o, options) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data, batchDependency, url;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cloneQueryableData(o.data);
                        batchDependency = Object(common["q" /* objectDefinedNotNull */])(data.batch) ? data.batch.addDependency() : function () { return; };
                        return [4 /*yield*/, Object(toabsoluteurl["a" /* toAbsoluteUrl */])(o.toUrlAndQuery())];
                    case 1:
                        url = _a.sent();
                        Object(common["p" /* mergeOptions */])(data.options, options);
                        return [2 /*return*/, operation(Object.assign({}, data, {
                                batchDependency: batchDependency,
                                url: url,
                            }))];
                }
            });
        });
    };
};
var spGet = function (o, options) {
    // Fix for #304 - when we clone objects we in some cases then execute a get request
    // in these cases the caching settings were getting dropped from the request
    // this tracks if the object from which this was cloned was caching and applies that to an immediate get request
    // does not affect objects cloned from this as we are using different fields to track the settings so it won't
    // be triggered
    if (o.data.cloneParentWasCaching) {
        o.usingCaching(o.data.cloneParentCacheOptions);
    }
    // if we are forcing caching set that in the data here
    if (o._forceCaching) {
        o.data.useCaching = true;
    }
    return send("GET")(o, options);
};
var spPost = send("POST");
var spDelete = send("DELETE");
var spPatch = send("PATCH");
var spPostDelete = function (o, options) {
    var opts = Object.assign(request_builders_headers({ "X-HTTP-Method": "DELETE" }), options);
    return spPost(o, opts);
};
var spPostDeleteETag = function (o, options, eTag) {
    if (eTag === void 0) { eTag = "*"; }
    var opts = Object.assign(request_builders_headers({ "X-HTTP-Method": "DELETE", "IF-Match": eTag }), options);
    return spPost(o, opts);
};
//# sourceMappingURL=operations.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharepointqueryable.js







var spInvokableFactory = function (f) {
    return invokableFactory(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
var sharepointqueryable_SharePointQueryable = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SharePointQueryable, _super);
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    function _SharePointQueryable(baseUrl, path) {
        var _this = this;
        var url = "";
        var parentUrl = "";
        var query = new Map();
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (Object(common["l" /* isUrlAbsolute */])(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                parentUrl = baseUrl;
                url = Object(common["e" /* combine */])(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                var index = baseUrl.lastIndexOf("/");
                parentUrl = baseUrl.slice(0, index);
                path = Object(common["e" /* combine */])(baseUrl.slice(index), path);
                url = Object(common["e" /* combine */])(parentUrl, path);
            }
            else {
                // .../items(19)
                var index = baseUrl.lastIndexOf("(");
                parentUrl = baseUrl.slice(0, index);
                url = Object(common["e" /* combine */])(baseUrl, path);
            }
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = Object(common["e" /* combine */])(parentUrl, path || "");
            var target = baseUrl.query.get("@target");
            if (target !== undefined) {
                query.set("@target", target);
            }
        }
        // init base with correct values for data seed
        _this = _super.call(this, {
            parentUrl: parentUrl,
            query: query,
            url: url,
        }) || this;
        // post init actions
        if (typeof baseUrl !== "string") {
            _this.configureFrom(baseUrl);
        }
        _this._forceCaching = false;
        return _this;
    }
    /**
     * Gets the full url with query information
     */
    _SharePointQueryable.prototype.toUrlAndQuery = function () {
        var aliasedParams = new Map(this.query);
        var url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, function (match, labelName, value) {
            Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + value, 0 /* Verbose */);
            aliasedParams.set(labelName, "'" + value + "'");
            return labelName;
        });
        if (aliasedParams.size > 0) {
            var char = url.indexOf("?") > -1 ? "&" : "?";
            url += "" + char + Array.from(aliasedParams).map(function (v) { return v[0] + "=" + v[1]; }).join("&");
        }
        return url;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    _SharePointQueryable.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    };
    _SharePointQueryable.prototype.get = function (options) {
        return spGet(this, options);
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    _SharePointQueryable.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    };
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    _SharePointQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        var clone = _super.prototype.cloneTo.call(this, factory(this, additionalPath), { includeBatch: includeBatch });
        // handle sp specific clone actions
        var t = "@target";
        if (this.query.has(t)) {
            clone.query.set(t, this.query.get(t));
        }
        return clone;
    };
    /**
     * The default action for this object (unless overridden spGet)
     *
     * @param options optional request options
     */
    _SharePointQueryable.prototype.defaultAction = function (options) {
        return spGet(this, options);
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    _SharePointQueryable.prototype.getParent = function (factory, baseUrl, path, batch) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        var parent = factory(baseUrl, path).configureFrom(this);
        var t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        if (batch !== undefined) {
            parent = parent.inBatch(batch);
        }
        return parent;
    };
    return _SharePointQueryable;
}(queryable_Queryable));

var SharePointQueryable = spInvokableFactory(sharepointqueryable_SharePointQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var sharepointqueryable_SharePointQueryableCollection = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SharePointQueryableCollection, _super);
    function _SharePointQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    _SharePointQueryableCollection.prototype.filter = function (filter) {
        this.query.set("$filter", filter);
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    _SharePointQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var o = "$orderby";
        var query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(orderBy + " " + (ascending ? "asc" : "desc"));
        this.query.set(o, query.join(","));
        return this;
    };
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    _SharePointQueryableCollection.prototype.skip = function (skip) {
        this.query.set("$skip", skip.toString());
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    _SharePointQueryableCollection.prototype.top = function (top) {
        this.query.set("$top", top.toString());
        return this;
    };
    return _SharePointQueryableCollection;
}(sharepointqueryable_SharePointQueryable));

var SharePointQueryableCollection = spInvokableFactory(sharepointqueryable_SharePointQueryableCollection);
/**
 * Represents an instance that can be selected
 *
 */
var sharepointqueryable_SharePointQueryableInstance = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SharePointQueryableInstance, _super);
    function _SharePointQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    _SharePointQueryableInstance.prototype._update = function (type, mapper) {
        var _this = this;
        return function (props) { return spPost(tag.configure(_this, type + ".Update"), {
            body: Object(common["m" /* jsS */])(Object(common["d" /* assign */])(metadata(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (d) { return mapper(d, props); }); };
    };
    return _SharePointQueryableInstance;
}(sharepointqueryable_SharePointQueryable));

var SharePointQueryableInstance = spInvokableFactory(sharepointqueryable_SharePointQueryableInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable(t) {
    return function () {
        return spPostDelete(tag.configure(this, t + ".delete"));
    };
}
function deleteableWithETag(t) {
    return function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return spPostDeleteETag(tag.configure(this, t + ".delete"), {}, eTag);
    };
}
//# sourceMappingURL=sharepointqueryable.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/decorators.js
/**
 * Class Decorators
 */

/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.call(this, args[0], args.length > 1 && args[1] !== undefined ? args[1] : path) || this;
            }
            return class_1;
        }(target));
    };
}
// TODO::?
// performance tracking method decorator
// redirect to graph api
//# sourceMappingURL=decorators.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/odata.js





function odataUrlFrom(candidate) {
    var parts = [];
    var s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (Object(common["i" /* hOP */])(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (Object(common["i" /* hOP */])(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (Object(common["i" /* hOP */])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (Object(common["i" /* hOP */])(candidate, s[3]) && Object(common["i" /* hOP */])(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            var editLink = Object(common["l" /* isUrlAbsolute */])(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(extractWebUrl(candidate[s[3]]), "_api", editLink);
        }
        else if (Object(common["i" /* hOP */])(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (Object(common["i" /* hOP */])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return common["e" /* combine */].apply(void 0, Object(tslib_es6["e" /* __spread */])(parts));
}
var odata_SPODataEntityParserImpl = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return Object(common["d" /* assign */])(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return Object(common["d" /* assign */])(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(parsers_ODataParser));
var odata_SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return Object(common["d" /* assign */])(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return Object(common["d" /* assign */])(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(parsers_ODataParser));
function spODataEntity(factory) {
    return new odata_SPODataEntityParserImpl(factory);
}
function spODataEntityArray(factory) {
    return new odata_SPODataEntityArrayParserImpl(factory);
}
//# sourceMappingURL=odata.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/batch.js







/**
 * Manages a batch of OData operations
 */
var batch_SPBatch = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SPBatch, _super);
    function SPBatch(baseUrl) {
        var _this = _super.call(this) || this;
        _this.baseUrl = baseUrl;
        return _this;
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    SPBatch.ParseResponse = function (body) {
        var responses = [];
        var header = "--batchresponse_";
        // Ex. "HTTP/1.1 500 Internal Server Error"
        var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
        var lines = body.split("\n");
        var state = "batch";
        var status;
        var statusText;
        for (var i = 0; i < lines.length; ++i) {
            var line = lines[i];
            switch (state) {
                case "batch":
                    if (line.substr(0, header.length) === header) {
                        state = "batchHeaders";
                    }
                    else {
                        if (line.trim() !== "") {
                            throw Error("Invalid response, line " + i);
                        }
                    }
                    break;
                case "batchHeaders":
                    if (line.trim() === "") {
                        state = "status";
                    }
                    break;
                case "status":
                    var parts = statusRegExp.exec(line);
                    if (parts.length !== 3) {
                        throw Error("Invalid status, line " + i);
                    }
                    status = parseInt(parts[1], 10);
                    statusText = parts[2];
                    state = "statusHeaders";
                    break;
                case "statusHeaders":
                    if (line.trim() === "") {
                        state = "body";
                    }
                    break;
                case "body":
                    responses.push((status === 204) ? new Response() : new Response(line, { status: status, statusText: statusText }));
                    state = "batch";
                    break;
            }
        }
        if (state !== "status") {
            throw Error("Unexpected end of input");
        }
        return responses;
    };
    SPBatch.prototype.executeImpl = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var client, absoluteRequestUrl, batchBody, currentChangeSetId, i, reqInfo, headers, url, method, castHeaders, batchOptions, fetchResponse, text, responses;
            var _this = this;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
                        // if we don't have any requests, don't bother sending anything
                        // this could be due to caching further upstream, or just an empty batch
                        if (this.requests.length < 1) {
                            Logger.write("Resolving empty batch.", 1 /* Info */);
                            return [2 /*return*/];
                        }
                        client = new sphttpclient_SPHttpClient();
                        return [4 /*yield*/, Object(toabsoluteurl["a" /* toAbsoluteUrl */])(this.baseUrl)];
                    case 1:
                        absoluteRequestUrl = _a.sent();
                        batchBody = [];
                        currentChangeSetId = "";
                        for (i = 0; i < this.requests.length; i++) {
                            reqInfo = this.requests[i];
                            if (reqInfo.method === "GET") {
                                if (currentChangeSetId.length > 0) {
                                    // end an existing change set
                                    batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                                    currentChangeSetId = "";
                                }
                                batchBody.push("--batch_" + this.batchId + "\n");
                            }
                            else {
                                if (currentChangeSetId.length < 1) {
                                    // start new change set
                                    currentChangeSetId = Object(common["h" /* getGUID */])();
                                    batchBody.push("--batch_" + this.batchId + "\n");
                                    batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
                                }
                                batchBody.push("--changeset_" + currentChangeSetId + "\n");
                            }
                            // common batch part prefix
                            batchBody.push("Content-Type: application/http\n");
                            batchBody.push("Content-Transfer-Encoding: binary\n\n");
                            headers = new Headers();
                            url = Object(common["l" /* isUrlAbsolute */])(reqInfo.url) ? reqInfo.url : Object(common["e" /* combine */])(absoluteRequestUrl, reqInfo.url);
                            Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Adding request " + reqInfo.method + " " + url + " to batch.", 0 /* Verbose */);
                            if (reqInfo.method !== "GET") {
                                method = reqInfo.method;
                                castHeaders = reqInfo.options.headers;
                                if (Object(common["i" /* hOP */])(reqInfo, "options") && Object(common["i" /* hOP */])(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
                                    method = castHeaders["X-HTTP-Method"];
                                    delete castHeaders["X-HTTP-Method"];
                                }
                                batchBody.push(method + " " + url + " HTTP/1.1\n");
                                headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                            }
                            else {
                                batchBody.push(reqInfo.method + " " + url + " HTTP/1.1\n");
                            }
                            // merge global config headers
                            Object(common["n" /* mergeHeaders */])(headers, splibconfig["a" /* SPRuntimeConfig */].headers);
                            // merge per-request headers
                            if (reqInfo.options) {
                                Object(common["n" /* mergeHeaders */])(headers, reqInfo.options.headers);
                            }
                            // lastly we apply any default headers we need that may not exist
                            if (!headers.has("Accept")) {
                                headers.append("Accept", "application/json");
                            }
                            if (!headers.has("Content-Type")) {
                                headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                            }
                            if (!headers.has("X-ClientService-ClientTag")) {
                                headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.0.3:batch");
                            }
                            // write headers into batch body
                            headers.forEach(function (value, name) {
                                batchBody.push(name + ": " + value + "\n");
                            });
                            batchBody.push("\n");
                            if (reqInfo.options.body) {
                                batchBody.push(reqInfo.options.body + "\n\n");
                            }
                        }
                        if (currentChangeSetId.length > 0) {
                            // Close the changeset
                            batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                            currentChangeSetId = "";
                        }
                        batchBody.push("--batch_" + this.batchId + "--\n");
                        batchOptions = {
                            "body": batchBody.join(""),
                            "headers": {
                                "Content-Type": "multipart/mixed; boundary=batch_" + this.batchId,
                            },
                            "method": "POST",
                        };
                        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
                        return [4 /*yield*/, client.fetch(Object(common["e" /* combine */])(absoluteRequestUrl, "/_api/$batch"), batchOptions)];
                    case 2:
                        fetchResponse = _a.sent();
                        return [4 /*yield*/, fetchResponse.text()];
                    case 3:
                        text = _a.sent();
                        responses = SPBatch.ParseResponse(text);
                        if (responses.length !== this.requests.length) {
                            throw Error("Could not properly parse responses to match requests in batch.");
                        }
                        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                        // this structure ensures that we resolve the batched requests in the order we expect
                        // using async this is not guaranteed depending on the requests
                        return [2 /*return*/, responses.reduce(function (p, response, index) { return p.then(function (_) { return Object(tslib_es6["a" /* __awaiter */])(_this, void 0, void 0, function () {
                                var request, _a, _b, e_1;
                                return Object(tslib_es6["d" /* __generator */])(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            request = this.requests[index];
                                            Logger.write("[" + request.id + "] (" + (new Date()).getTime() + ") Resolving request in batch " + this.batchId + ".", 1 /* Info */);
                                            _c.label = 1;
                                        case 1:
                                            _c.trys.push([1, 3, , 4]);
                                            _b = (_a = request).resolve;
                                            return [4 /*yield*/, request.parser.parse(response)];
                                        case 2:
                                            _b.apply(_a, [_c.sent()]);
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_1 = _c.sent();
                                            request.reject(e_1);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }); }, Promise.resolve(void (0)))];
                }
            });
        });
    };
    return SPBatch;
}(batch_Batch));

//# sourceMappingURL=batch.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/rest.js

/**
 * Root of the SharePoint REST module
 */
var rest_SPRest = /** @class */ (function () {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    function SPRest(_options, _baseUrl) {
        if (_options === void 0) { _options = {}; }
        if (_baseUrl === void 0) { _baseUrl = ""; }
        this._options = _options;
        this._baseUrl = _baseUrl;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    SPRest.prototype.configure = function (options, baseUrl) {
        if (baseUrl === void 0) { baseUrl = ""; }
        return new SPRest(options, baseUrl);
    };
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    SPRest.prototype.setup = function (config) {
        if (config.pageContext) {
            Object(splibconfig["b" /* setup */])({
                spfxContext: config,
            });
        }
        else {
            Object(splibconfig["b" /* setup */])(config);
        }
    };
    return SPRest;
}());

var sp = new rest_SPRest();
//# sourceMappingURL=rest.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/escapeQueryStrValue.js


function escapeQueryStrValue(value) {
    if (Object(common["s" /* stringIsNullOrEmpty */])(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, function (match, labelName, v) {
            Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + v, 0 /* Verbose */);
            return "!" + labelName + "::" + encodeURIComponent(v.replace(/\'/ig, "''"));
        });
    }
    else {
        return encodeURIComponent(value.replace(/\'/ig, "''"));
    }
}
//# sourceMappingURL=escapeQueryStrValue.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/types.js














var types_Site = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Site, _super);
    function _Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Site.prototype, "rootWeb", {
        /**
        * Gets the root web of the site collection
        *
        */
        get: function () {
            return tag.configure(Web(this, "rootweb"), "si.rootWeb");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    _Site.prototype.getRootWeb = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var web;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootWeb.select("Url")()];
                    case 1:
                        web = _a.sent();
                        return [2 /*return*/, tag.configure(Web(web.Url), "si.getRootWeb")];
                }
            });
        });
    };
    /**
    * Gets the context information for this site collection
    */
    _Site.prototype.getContextInfo = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data, info;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(Site(this.parentUrl, "_api/contextinfo"), "si.getContextInfo");
                        return [4 /*yield*/, spPost(q)];
                    case 1:
                        data = _a.sent();
                        if (Object(common["i" /* hOP */])(data, "GetContextWebInformation")) {
                            info = data.GetContextWebInformation;
                            info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                            return [2 /*return*/, info];
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    _Site.prototype.createBatch = function () {
        return new batch_SPBatch(this.parentUrl);
    };
    /**
    * Deletes the current site
    *
    */
    _Site.prototype.delete = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var site, q;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(Site, "").select("Id")()];
                    case 1:
                        site = _a.sent();
                        q = tag.configure(Site(this.parentUrl, "_api/SPSiteManager/Delete"), "si.delete");
                        return [4 /*yield*/, spPost(q, body({ siteId: site.Id }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    _Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(SharePointQueryable("", "_api/sp.web.getdocumentlibraries(@v)"), "si.getDocumentLibraries");
                        q.query.set("@v", "'" + escapeQueryStrValue(absoluteWebUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["i" /* hOP */])(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data];
                }
            });
        });
    };
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    _Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(SharePointQueryable("", "_api/sp.web.getweburlfrompageurl(@v)"), "si.getWebUrlFromPageUrl");
                        q.query.set("@v", "'" + escapeQueryStrValue(absolutePageUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["i" /* hOP */])(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data];
                }
            });
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Site.prototype.getChanges = function (query) {
        var postBody = body({ "query": Object(common["d" /* assign */])(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
    };
    /**
    * Opens a web by id (using POST)
    *
    * @param webId The GUID id of the web to open
    */
    _Site.prototype.openWebById = function (webId) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Site, "openWebById('" + webId + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Web(extractWebUrl(odataUrlFrom(data))),
                            }];
                }
            });
        });
    };
    /**
     * Creates a Modern communication site.
     *
     * @param title The title of the site to create
     * @param lcid The language to use for the site. If not specified will default to 1033 (English).
     * @param shareByEmailEnabled If set to true, it will enable sharing files via Email. By default it is set to false
     * @param url The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site.
     * @param description The description of the communication site.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param siteDesignId The Guid of the site design to be used.
     *                     You can use the below default OOTB GUIDs:
     *                     Topic: 00000000-0000-0000-0000-000000000000
     *                     Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
     *                     Blank: f6cc5403-0d63-442e-96c0-285923709ffc
     */
    _Site.prototype.createCommunicationSite = function (title, lcid, shareByEmailEnabled, url, description, classification, siteDesignId, hubSiteId, owner) {
        if (lcid === void 0) { lcid = 1033; }
        if (shareByEmailEnabled === void 0) { shareByEmailEnabled = false; }
        if (description === void 0) { description = ""; }
        if (classification === void 0) { classification = ""; }
        if (siteDesignId === void 0) { siteDesignId = "00000000-0000-0000-0000-000000000000"; }
        if (hubSiteId === void 0) { hubSiteId = "00000000-0000-0000-0000-000000000000"; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var props, postBody, d, client, methodUrl, r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            Classification: classification,
                            Description: description,
                            HubSiteId: hubSiteId,
                            Lcid: lcid,
                            Owner: owner,
                            ShareByEmailEnabled: shareByEmailEnabled,
                            SiteDesignId: siteDesignId,
                            Title: title,
                            Url: url,
                            WebTemplate: "SITEPAGEPUBLISHING#0",
                            WebTemplateExtensionId: "00000000-0000-0000-0000-000000000000",
                        };
                        postBody = body({
                            "request": Object(common["d" /* assign */])(metadata("Microsoft.SharePoint.Portal.SPSiteCreationRequest"), props),
                        }, request_builders_headers({
                            "Accept": "application/json;odata=verbose",
                            "Content-Type": "application/json;odata=verbose;charset=utf-8",
                        }));
                        return [4 /*yield*/, this.getRootWeb()];
                    case 1:
                        d = _a.sent();
                        client = new sphttpclient_SPHttpClient();
                        methodUrl = d.parentUrl + "/_api/SPSiteManager/Create";
                        return [4 /*yield*/, client.post(methodUrl, postBody)];
                    case 2:
                        r = _a.sent();
                        return [4 /*yield*/, r.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens
    *
    * @param displayName The title or display name of the Modern team site to be created
    * @param alias Alias of the underlying Office 365 Group
    * @param isPublic Defines whether the Office 365 Group will be public (default), or private.
    * @param lcid The language to use for the site. If not specified will default to English (1033).
    * @param description The description of the site to be created.
    * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
    * @param owners The Owners of the site to be created
    */
    _Site.prototype.createModernTeamSite = function (displayName, alias, isPublic, lcid, description, classification, owners, hubSiteId, siteDesignId) {
        if (isPublic === void 0) { isPublic = true; }
        if (lcid === void 0) { lcid = 1033; }
        if (description === void 0) { description = ""; }
        if (classification === void 0) { classification = ""; }
        if (hubSiteId === void 0) { hubSiteId = "00000000-0000-0000-0000-000000000000"; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, d, client, methodUrl, r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            alias: alias,
                            displayName: displayName,
                            isPublic: isPublic,
                            optionalParams: {
                                Classification: classification,
                                CreationOptions: {
                                    "results": ["SPSiteLanguage:" + lcid, "HubSiteId:" + hubSiteId],
                                },
                                Description: description,
                                Owners: {
                                    "results": owners ? owners : [],
                                },
                            },
                        };
                        if (siteDesignId) {
                            postBody.optionalParams.CreationOptions.results.push("implicit_formula_292aa8a00786498a87a5ca52d9f4214a_" + siteDesignId);
                        }
                        return [4 /*yield*/, this.getRootWeb()];
                    case 1:
                        d = _a.sent();
                        client = new sphttpclient_SPHttpClient();
                        methodUrl = d.parentUrl + "/_api/GroupSiteManager/CreateGroupEx";
                        return [4 /*yield*/, client.post(methodUrl, {
                                body: Object(common["m" /* jsS */])(postBody),
                                headers: {
                                    "Accept": "application/json;odata=verbose",
                                    "Content-Type": "application/json;odata=verbose;charset=utf-8",
                                },
                            })];
                    case 2:
                        r = _a.sent();
                        return [4 /*yield*/, r.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("si.getChanges")
    ], _Site.prototype, "getChanges", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("si.openWebById")
    ], _Site.prototype, "openWebById", null);
    _Site = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/site")
    ], _Site);
    return _Site;
}(sharepointqueryable_SharePointQueryableInstance));

var Site = spInvokableFactory(types_Site);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/index.js



Reflect.defineProperty(rest_SPRest.prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Site(this._baseUrl).configure(this._options);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/webs/types.js












var types_Webs = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Webs, _super);
    function _Webs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    _Webs.prototype.add = function (title, url, description, template, language, inheritPermissions) {
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = "STS"; }
        if (language === void 0) { language = 1033; }
        if (inheritPermissions === void 0) { inheritPermissions = true; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body({
                            "parameters": Object(common["d" /* assign */])(metadata("SP.WebCreationInformation"), {
                                Description: description,
                                Language: language,
                                Title: title,
                                Url: url,
                                UseSamePermissionsAsParentSite: inheritPermissions,
                                WebTemplate: template,
                            }),
                        });
                        return [4 /*yield*/, spPost(this.clone(Webs, "add"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Web(odataUrlFrom(data).replace(/_api\/web\/?/i, "")),
                            }];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("ws.add")
    ], _Webs.prototype, "add", null);
    _Webs = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("webs")
    ], _Webs);
    return _Webs;
}(sharepointqueryable_SharePointQueryableCollection));

var Webs = spInvokableFactory(types_Webs);
/**
 * Describes a web
 *
 */
var types_Web = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Web, _super);
    function _Web() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("w");
        return _this;
    }
    Object.defineProperty(_Web.prototype, "webs", {
        /**
         * Gets this web's subwebs
         *
         */
        get: function () {
            return Webs(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets this web's parent web and data
     *
     */
    _Web.prototype.getParentWeb = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var ParentWeb;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spGet(this.select("ParentWeb/Id").expand("ParentWeb"))];
                    case 1:
                        ParentWeb = (_a.sent()).ParentWeb;
                        return [2 /*return*/, ParentWeb ? Site(this.parentUrl).openWebById(ParentWeb.Id) : null];
                }
            });
        });
    };
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    _Web.prototype.getSubwebsFilteredForCurrentUser = function (nWebTemplateFilter, nConfigurationFilter) {
        if (nWebTemplateFilter === void 0) { nWebTemplateFilter = -1; }
        if (nConfigurationFilter === void 0) { nConfigurationFilter = -1; }
        var o = this.clone(Webs, "getSubwebsFilteredForCurrentUser(nWebTemplateFilter=" + nWebTemplateFilter + ",nConfigurationFilter=" + nConfigurationFilter + ")");
        return tag.configure(o, "w.getSubwebsFilteredForCurrentUser");
    };
    Object.defineProperty(_Web.prototype, "allProperties", {
        /**
         * Allows access to the web's all properties collection
         */
        get: function () {
            return tag.configure(this.clone(SharePointQueryableInstance, "allproperties"), "w.allprops");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Web.prototype, "webinfos", {
        /**
         * Gets a collection of WebInfos for this web's subwebs
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "webinfos"), "w.webinfos");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    _Web.prototype.createBatch = function () {
        return new batch_SPBatch(this.parentUrl);
    };
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    _Web.prototype.update = function (properties) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object(common["d" /* assign */])(metadata("SP.Web"), properties), request_builders_headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, web: this }];
                }
            });
        });
    };
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    _Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        var postBody = body({
            backgroundImageUrl: backgroundImageUrl,
            colorPaletteUrl: colorPaletteUrl,
            fontSchemeUrl: fontSchemeUrl,
            shareGenerated: shareGenerated,
        });
        return spPost(this.clone(Web, "applytheme"), postBody);
    };
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    _Web.prototype.applyWebTemplate = function (template) {
        var q = this.clone(Web, "applywebtemplate");
        q.concat("(webTemplate='" + escapeQueryStrValue(template) + "')");
        return spPost(q);
    };
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    _Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
        if (language === void 0) { language = 1033; }
        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
        var path = "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")";
        return tag.configure(SharePointQueryableCollection(this, path), "w.availableWebTemplates");
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Web.prototype.getChanges = function (query) {
        var postBody = body({ "query": Object(common["d" /* assign */])(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
    };
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    _Web.prototype.mapToIcon = function (filename, size, progId) {
        if (size === void 0) { size = 0; }
        if (progId === void 0) { progId = ""; }
        return spGet(this.clone(Web, "maptoicon(filename='" + escapeQueryStrValue(filename) + "', progid='" + escapeQueryStrValue(progId) + "', size=" + size + ")"));
    };
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    _Web.prototype.getStorageEntity = function (key) {
        return spGet(this.clone(Web, "getStorageEntity('" + escapeQueryStrValue(key) + "')"));
    };
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    _Web.prototype.setStorageEntity = function (key, value, description, comments) {
        if (description === void 0) { description = ""; }
        if (comments === void 0) { comments = ""; }
        return spPost(this.clone(Web, "setStorageEntity"), body({
            comments: comments,
            description: description,
            key: key,
            value: value,
        }));
    };
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    _Web.prototype.removeStorageEntity = function (key) {
        return spPost(this.clone(Web, "removeStorageEntity('" + escapeQueryStrValue(key) + "')"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.getParentWeb")
    ], _Web.prototype, "getParentWeb", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.update")
    ], _Web.prototype, "update", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.applyTheme")
    ], _Web.prototype, "applyTheme", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.applyWebTemplate")
    ], _Web.prototype, "applyWebTemplate", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.getChanges")
    ], _Web.prototype, "getChanges", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.mapToIcon")
    ], _Web.prototype, "mapToIcon", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.getStorageEntity")
    ], _Web.prototype, "getStorageEntity", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.setStorageEntity")
    ], _Web.prototype, "setStorageEntity", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.removeStorageEntity")
    ], _Web.prototype, "removeStorageEntity", null);
    _Web = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/web")
    ], _Web);
    return _Web;
}(sharepointqueryable_SharePointQueryableInstance));

var Web = spInvokableFactory(types_Web);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/toResourcePath.js
function toResourcePath(url) {
    return {
        DecodedUrl: url,
        __metadata: { type: "SP.ResourcePath" },
    };
}
//# sourceMappingURL=toResourcePath.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/types.js











var types_Lists = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Lists, _super);
    function _Lists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    _Lists.prototype.getById = function (id) {
        return tag.configure(List(this).concat("('" + id + "')"), "ls.getById");
    };
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    _Lists.prototype.getByTitle = function (title) {
        return tag.configure(List(this, "getByTitle('" + escapeQueryStrValue(title) + "')"), "ls.getByTitle");
    };
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    _Lists.prototype.add = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var addSettings, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addSettings = Object.assign({
                            "AllowContentTypes": enableContentTypes,
                            "BaseTemplate": template,
                            "ContentTypesEnabled": enableContentTypes,
                            "Description": desc,
                            "Title": title,
                        }, metadata("SP.List"), additionalSettings);
                        return [4 /*yield*/, spPost(this, body(addSettings))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, list: this.getByTitle(addSettings.Title) }];
                }
            });
        });
    };
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    _Lists.prototype.ensure = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var addOrUpdateSettings, list, data, e_1, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hasBatch) {
                            throw Error("The ensure list method is not supported for use in a batch.");
                        }
                        addOrUpdateSettings = Object(common["d" /* assign */])(additionalSettings, { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes }, true);
                        list = this.getByTitle(addOrUpdateSettings.Title);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        // this will throw if the list doesn't exist
                        return [4 /*yield*/, list.select("Title")()];
                    case 2:
                        // this will throw if the list doesn't exist
                        _a.sent();
                        return [4 /*yield*/, list.update(addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, { created: false, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 5:
                        data = _a.sent();
                        return [2 /*return*/, { created: true, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    _Lists.prototype.ensureSiteAssetsLibrary = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var json;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Lists, "ensuresiteassetslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(odataUrlFrom(json))];
                }
            });
        });
    };
    /**
     * Gets a list that is the default location for wiki pages.
     */
    _Lists.prototype.ensureSitePagesLibrary = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var json;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Lists, "ensuresitepageslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(odataUrlFrom(json))];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.add")
    ], _Lists.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.ensure")
    ], _Lists.prototype, "ensure", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.ensureSiteAssetsLibrary")
    ], _Lists.prototype, "ensureSiteAssetsLibrary", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.ensureSitePagesLibrary")
    ], _Lists.prototype, "ensureSitePagesLibrary", null);
    _Lists = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("lists")
    ], _Lists);
    return _Lists;
}(sharepointqueryable_SharePointQueryableCollection));

var Lists = spInvokableFactory(types_Lists);
var types_List = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_List, _super);
    function _List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("l");
        return _this;
    }
    Object.defineProperty(_List.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "l.effectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "eventReceivers", {
        /**
         * Gets the event receivers attached to this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "EventReceivers"), "l.eventReceivers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "relatedFields", {
        /**
         * Gets the related fields of this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "getRelatedFields"), "l.relatedFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "informationRightsManagementSettings", {
        /**
         * Gets the IRM settings for this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "InformationRightsManagementSettings"), "l.informationRightsManagementSettings");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    _List.prototype.update = function (properties, eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data, list;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object(common["d" /* assign */])(metadata("SP.List"), properties), request_builders_headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        list = this;
                        if (Object(common["i" /* hOP */])(properties, "Title")) {
                            list = this.getParent(List, this.parentUrl, "getByTitle('" + properties.Title + "')");
                        }
                        return [2 /*return*/, {
                                data: data,
                                list: list,
                            }];
                }
            });
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    _List.prototype.getChanges = function (query) {
        return spPost(this.clone(List, "getchanges"), body({ query: Object(common["d" /* assign */])(metadata("SP.ChangeQuery"), query) }));
    };
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    _List.prototype.getItemsByCAMLQuery = function (query) {
        var expands = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expands[_i - 1] = arguments[_i];
        }
        var q = this.clone(List, "getitems");
        return spPost(q.expand.apply(q, expands), body({ query: Object(common["d" /* assign */])(metadata("SP.CamlQuery"), query) }));
    };
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    _List.prototype.getListItemChangesSinceToken = function (query) {
        var o = this.clone(List, "getlistitemchangessincetoken").usingParser({ parse: function (r) { return r.text(); } });
        return spPost(o, body({ "query": Object(common["d" /* assign */])(metadata("SP.ChangeLogItemQuery"), query) }));
    };
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _List.prototype.recycle = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "recycle"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["i" /* hOP */])(data, "Recycle") ? data.Recycle : data];
                }
            });
        });
    };
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    _List.prototype.renderListData = function (viewXml) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(List, "renderlistdata(@viewXml)");
                        q.query.set("@viewXml", "'" + viewXml + "'");
                        return [4 /*yield*/, spPost(q)];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(Object(common["i" /* hOP */])(data, "RenderListData") ? data.RenderListData : data)];
                }
            });
        });
    };
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParameters The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param queryParams Allows setting of query parameters
     */
    _List.prototype.renderListDataAsStream = function (parameters, overrideParameters, queryParams) {
        if (overrideParameters === void 0) { overrideParameters = null; }
        if (queryParams === void 0) { queryParams = new Map(); }
        if (Object(common["i" /* hOP */])(parameters, "RenderOptions") && Object(common["j" /* isArray */])(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce(function (v, c) { return v + c; });
        }
        var postBody = body({
            overrideParameters: Object(common["d" /* assign */])(metadata("SP.RenderListDataOverrideParameters"), overrideParameters),
            parameters: Object(common["d" /* assign */])(metadata("SP.RenderListDataParameters"), parameters),
        });
        var clone = this.clone(List, "RenderListDataAsStream", true);
        if (queryParams && queryParams.size > 0) {
            queryParams.forEach(function (v, k) { return clone.query.set(k, v); });
        }
        return spPost(clone, postBody);
    };
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    _List.prototype.renderListFormData = function (itemId, formId, mode) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode='" + mode + "')"))];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(Object(common["i" /* hOP */])(data, "RenderListFormData") ? data.RenderListFormData : data)];
                }
            });
        });
    };
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    _List.prototype.reserveListItemId = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "reservelistitemid"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["i" /* hOP */])(data, "ReserveListItemId") ? data.ReserveListItemId : data];
                }
            });
        });
    };
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    _List.prototype.getListItemEntityTypeFullName = function () {
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").get().then(function (o) { return o.ListItemEntityTypeFullName; });
    };
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    _List.prototype.addValidateUpdateItemUsingPath = function (formValues, decodedUrl, bNewDocumentUpdate, checkInComment, additionalProps) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var addProps, res;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addProps = {
                            FolderPath: toResourcePath(decodedUrl),
                        };
                        if (Object(common["q" /* objectDefinedNotNull */])(additionalProps)) {
                            if (additionalProps.leafName) {
                                addProps.LeafName = toResourcePath(additionalProps.leafName);
                            }
                            if (additionalProps.objectType) {
                                addProps.UnderlyingObjectType = additionalProps.objectType;
                            }
                        }
                        return [4 /*yield*/, spPost(this.clone(List, "AddValidateUpdateItemUsingPath()"), body({
                                bNewDocumentUpdate: bNewDocumentUpdate,
                                checkInComment: checkInComment,
                                formValues: formValues,
                                listItemCreateInfo: Object(common["d" /* assign */])(metadata("SP.ListItemCreationInformationUsingPath"), addProps),
                            }))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, Object(common["i" /* hOP */])(res, "AddValidateUpdateItemUsingPath") ? res.AddValidateUpdateItemUsingPath : res];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.update")
    ], _List.prototype, "update", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.getChanges")
    ], _List.prototype, "getChanges", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.CAMLQuery")
    ], _List.prototype, "getItemsByCAMLQuery", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.ChangesSinceToken")
    ], _List.prototype, "getListItemChangesSinceToken", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.recycle")
    ], _List.prototype, "recycle", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.renderListData")
    ], _List.prototype, "renderListData", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.AsStream")
    ], _List.prototype, "renderListDataAsStream", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.renderListFormData")
    ], _List.prototype, "renderListFormData", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.reserveListItemId")
    ], _List.prototype, "reserveListItemId", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.getListItemEntityTypeFullName")
    ], _List.prototype, "getListItemEntityTypeFullName", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.addValidateUpdateItemUsingPath")
    ], _List.prototype, "addValidateUpdateItemUsingPath", null);
    return _List;
}(sharepointqueryable_SharePointQueryableInstance));

var List = spInvokableFactory(types_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/web.js







addProp(types_Web, "lists", Lists);
addProp(types_Web, "siteUserInfoList", List, "siteuserinfolist");
addProp(types_Web, "defaultDocumentLibrary", List, "DefaultDocumentLibrary");
addProp(types_Web, "customListTemplates", SharePointQueryableCollection, "getcustomlisttemplates");
types_Web.prototype.getList = function (listRelativeUrl) {
    return List(this, "getList('" + escapeQueryStrValue(listRelativeUrl) + "')");
};
types_Web.prototype.getCatalog = function (type) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var data;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(Web, "getcatalog(" + type + ")").select("Id").get()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, List(odataUrlFrom(data))];
            }
        });
    });
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/types.js










/**
 * Describes a collection of Item objects
 *
 */
var types_Items = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Items, _super);
    function _Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    _Items.prototype.getById = function (id) {
        return tag.configure(Item(this).concat("(" + id + ")"), "is.getById");
    };
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    _Items.prototype.getItemByStringId = function (stringId) {
        // creates an item with the parent list path and append out method call
        return tag.configure(Item(this.parentUrl, "getItemByStringId('" + stringId + "')"), "is.getItemByStringId");
    };
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    _Items.prototype.skip = function (skip, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (reverse) {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&PagedPrev=TRUE&p_ID=" + skip));
        }
        else {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
        }
        return this;
    };
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    _Items.prototype.getPaged = function () {
        return this.usingParser(new types_PagedItemCollectionParser(this))();
    };
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    _Items.prototype.getAll = function (requestSize, acceptHeader) {
        if (requestSize === void 0) { requestSize = 2000; }
        if (acceptHeader === void 0) { acceptHeader = "application/json;odata=nometadata"; }
        Logger.write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", 2 /* Warning */);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        var items = Items(this, "").top(requestSize).configure({
            headers: {
                "Accept": acceptHeader,
            },
        });
        // let's copy over the odata query params that can be applied
        // $top - allow setting the page size this way (override what we did above)
        // $select - allow picking the return fields (good behavior)
        // $filter - allow setting a filter, though this may fail due for large lists
        this.query.forEach(function (v, k) {
            if (/^\$select|filter|top|expand$/i.test(k)) {
                items.query.set(k, v);
            }
        });
        // give back the promise
        return new Promise(function (resolve, reject) {
            // this will eventually hold the items we return
            var itemsCollector = [];
            // action that will gather up our results recursively
            var gatherer = function (last) {
                // collect that set of results
                [].push.apply(itemsCollector, last.results);
                // if we have more, repeat - otherwise resolve with the collected items
                if (last.hasNext) {
                    last.getNext().then(gatherer).catch(reject);
                }
                else {
                    resolve(itemsCollector);
                }
            };
            // start the cycle
            items.getPaged().then(gatherer).catch(reject);
        });
    };
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Items.prototype.add = function (properties, listItemEntityTypeFullName) {
        if (properties === void 0) { properties = {}; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, promise;
            var _this = this;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = body(Object(common["d" /* assign */])(metadata(listItemEntityType), properties));
                        promise = spPost(this.clone(Items, ""), postBody).then(function (data) {
                            return {
                                data: data,
                                item: _this.getById(data.Id),
                            };
                        });
                        removeDependency();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Items.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.getParent(List).getListItemEntityTypeFullName();
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("is.getPaged")
    ], _Items.prototype, "getPaged", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("is.getAll")
    ], _Items.prototype, "getAll", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("is.add")
    ], _Items.prototype, "add", null);
    _Items = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("items")
    ], _Items);
    return _Items;
}(sharepointqueryable_SharePointQueryableCollection));

var Items = spInvokableFactory(types_Items);
/**
 * Descrines a single Item instance
 *
 */
var types_Item = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Item, _super);
    function _Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("i");
        return _this;
    }
    Object.defineProperty(_Item.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions for the item
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "i.effectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "effectiveBasePermissionsForUI", {
        /**
         * Gets the effective base permissions for the item in a UI context
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissionsForUI"), "i.effectiveBasePermissionsForUI");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsHTML", {
        /**
         * Gets the field values for this list item in their HTML representation
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsHTML"), "i.fvHTML");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsText", {
        /**
         * Gets the field values for this list item in their text representation
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsText"), "i.fvText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesForEdit", {
        /**
         * Gets the field values for this list item for use in editing controls
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesForEdit"), "i.fvEdit");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "versions", {
        /**
         * Gets the collection of versions associated with this item
         */
        get: function () {
            return tag.configure(ItemVersions(this), "i.versions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "list", {
        get: function () {
            return this.getParent(List, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Item.prototype.update = function (properties, eTag, listItemEntityTypeFullName) {
        if (eTag === void 0) { eTag = "*"; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, poster, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = body(Object(common["d" /* assign */])(metadata(listItemEntityType), properties), request_builders_headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        removeDependency();
                        poster = tag.configure(this.clone(Item).usingParser(new types_ItemUpdatedParser()), "i.update");
                        return [4 /*yield*/, spPost(poster, postBody)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                item: this,
                            }];
                }
            });
        });
    };
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Item.prototype.recycle = function () {
        return spPost(this.clone(Item, "recycle"));
    };
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    _Item.prototype.getWopiFrameUrl = function (action) {
        if (action === void 0) { action = 0; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var i, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = this.clone(Item, "getWOPIFrameUrl(@action)");
                        i.query.set("@action", action);
                        return [4 /*yield*/, spPost(i)];
                    case 1:
                        data = _a.sent();
                        // handle verbose mode
                        if (Object(common["i" /* hOP */])(data, "GetWOPIFrameUrl")) {
                            return [2 /*return*/, data.GetWOPIFrameUrl];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    _Item.prototype.validateUpdateListItem = function (formValues, bNewDocumentUpdate) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return spPost(this.clone(Item, "validateupdatelistitem"), body({ formValues: formValues, bNewDocumentUpdate: bNewDocumentUpdate }));
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Item.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.list.getListItemEntityTypeFullName();
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("i.recycle")
    ], _Item.prototype, "recycle", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("i.getWopiFrameUrl")
    ], _Item.prototype, "getWopiFrameUrl", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("i.validateUpdateListItem")
    ], _Item.prototype, "validateUpdateListItem", null);
    return _Item;
}(sharepointqueryable_SharePointQueryableInstance));

var Item = spInvokableFactory(types_Item);
/**
 * Describes a collection of Version objects
 *
 */
var types_ItemVersions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ItemVersions, _super);
    function _ItemVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _ItemVersions.prototype.getById = function (versionId) {
        return tag.configure(ItemVersion(this).concat("(" + versionId + ")"), "iv.getById");
    };
    _ItemVersions = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("versions")
    ], _ItemVersions);
    return _ItemVersions;
}(sharepointqueryable_SharePointQueryableCollection));

var ItemVersions = spInvokableFactory(types_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
var types_ItemVersion = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ItemVersion, _super);
    function _ItemVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("iv");
        return _this;
    }
    return _ItemVersion;
}(sharepointqueryable_SharePointQueryableInstance));

var ItemVersion = spInvokableFactory(types_ItemVersion);
/**
 * Provides paging functionality for list items
 */
var types_PagedItemCollection = /** @class */ (function () {
    function PagedItemCollection(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
        /**
         * If true there are more results available in the set, otherwise there are not
         */
        get: function () {
            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    PagedItemCollection.prototype.getNext = function () {
        if (this.hasNext) {
            var items = tag.configure(Items(this.nextUrl, null).configureFrom(this.parent), "ip.getNext");
            return items.getPaged();
        }
        return new Promise(function (r) { return r(null); });
    };
    return PagedItemCollection;
}());

var types_PagedItemCollectionParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(PagedItemCollectionParser, _super);
    function PagedItemCollectionParser(_parent) {
        var _this = _super.call(this) || this;
        _this._parent = _parent;
        return _this;
    }
    PagedItemCollectionParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                r.json().then(function (json) {
                    var nextUrl = Object(common["i" /* hOP */])(json, "d") && Object(common["i" /* hOP */])(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new types_PagedItemCollection(_this._parent, nextUrl, _this.parseODataJSON(json)));
                });
            }
        });
    };
    return PagedItemCollectionParser;
}(parsers_ODataParser));
var types_ItemUpdatedParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ItemUpdatedParser, _super);
    function ItemUpdatedParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemUpdatedParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                resolve({
                    "odata.etag": r.headers.get("etag"),
                });
            }
        });
    };
    return ItemUpdatedParser;
}(parsers_ODataParser));
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/list.js



addProp(types_List, "items", Items);
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/spListConfigurationProvider.js



/**
 * A configuration provider which loads configuration values from a SharePoint list
 *
 */
var spListConfigurationProvider_SPListConfigurationProvider = /** @class */ (function () {
    /**
     * Creates a new SharePoint list based configuration provider
     * @constructor
     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default: "config")
     * @param {string} keyFieldName The name of the field in the list to use as the setting key (optional, default: "Title")
     * @param {string} valueFieldName The name of the field in the list to use as the setting value (optional, default: "Value")
     */
    function SPListConfigurationProvider(web, listTitle, keyFieldName, valueFieldName) {
        if (listTitle === void 0) { listTitle = "config"; }
        if (keyFieldName === void 0) { keyFieldName = "Title"; }
        if (valueFieldName === void 0) { valueFieldName = "Value"; }
        this.web = web;
        this.listTitle = listTitle;
        this.keyFieldName = keyFieldName;
        this.valueFieldName = valueFieldName;
    }
    /**
     * Loads the configuration values from the SharePoint list
     *
     * @return {Promise<ITypedHash<string>>} Promise of loaded configuration values
     */
    SPListConfigurationProvider.prototype.getConfiguration = function () {
        var _this = this;
        return this.web.lists.getByTitle(this.listTitle).items.select(this.keyFieldName, this.valueFieldName)()
            .then(function (data) { return data.reduce(function (c, item) {
            c[item[_this.keyFieldName]] = item[_this.valueFieldName];
            return c;
        }, {}); });
    };
    /**
     * Wraps the current provider in a cache enabled provider
     *
     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
     */
    SPListConfigurationProvider.prototype.asCaching = function (cacheKey) {
        if (cacheKey === void 0) { cacheKey = "pnp_configcache_splist_" + this.web.toUrl() + "+" + this.listTitle; }
        return new cachingConfigurationProvider(this, cacheKey);
    };
    return SPListConfigurationProvider;
}());
/* harmony default export */ var spListConfigurationProvider = (spListConfigurationProvider_SPListConfigurationProvider);
//# sourceMappingURL=spListConfigurationProvider.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./pnpjs-sources/index-config-store.ts
/* concated harmony reexport Settings */__webpack_require__.d(__webpack_exports__, "Settings", function() { return configuration_Settings; });
/* concated harmony reexport CachingConfigurationProvider */__webpack_require__.d(__webpack_exports__, "CachingConfigurationProvider", function() { return cachingConfigurationProvider; });
/* concated harmony reexport SPListConfigurationProvider */__webpack_require__.d(__webpack_exports__, "SPListConfigurationProvider", function() { return spListConfigurationProvider; });



/***/ })
/******/ ]);
});