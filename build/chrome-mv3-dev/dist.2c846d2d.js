// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"k5Van":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "relay", ()=>P);
parcelHelpers.export(exports, "relayMessage", ()=>y);
parcelHelpers.export(exports, "sendToActiveContentScript", ()=>b);
parcelHelpers.export(exports, "sendToBackground", ()=>g);
parcelHelpers.export(exports, "sendToBackgroundViaRelay", ()=>c);
parcelHelpers.export(exports, "sendToContentScript", ()=>l);
parcelHelpers.export(exports, "sendViaRelay", ()=>f);
var n = async ()=>{
    let [e] = await chrome.tabs.query({
        active: !0,
        currentWindow: !0
    });
    return e;
}, o = (e, a)=>!a.__internal && e.source === globalThis.window && e.data.name === a.name && (a.relayId === void 0 || e.data.relayId === a.relayId);
var r = (e, a)=>{
    let t = async (s)=>{
        if (o(s, e) && !s.data.relayed) {
            let d = {
                name: e.name,
                relayId: e.relayId,
                body: s.data.body
            }, m = await a?.(d);
            window.postMessage({
                name: e.name,
                relayId: e.relayId,
                body: m,
                relayed: !0
            });
        }
    };
    return window.addEventListener("message", t), ()=>window.removeEventListener("message", t);
}, i = (e)=>new Promise((a, t)=>{
        window.addEventListener("message", (s)=>{
            o(s, e) && s.data.relayed && a(s.data.body);
        }), window.postMessage(e);
    });
var g = async (e)=>{
    if (!chrome?.runtime) throw new Error("chrome.runtime is not available");
    return chrome.runtime.sendMessage(e);
}, l = async (e)=>{
    if (!chrome?.tabs) throw new Error("chrome.tabs is not available");
    let a = typeof e.tabId == "number" ? e.tabId : (await n()).id;
    return chrome.tabs.sendMessage(a, e);
}, b = l, y = (e)=>r(e, g), P = y, c = i, f = c;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cfP7b"}],"cfP7b":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["k5Van"], "k5Van", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLE9BQU8sQ0FBQyxTQUFVLEdBQUcsRUFBRTtRQUN6QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGNBQWMsQ0FBQyxNQUNuRTtRQUdGLE9BQU8sY0FBYyxDQUFDLE1BQU0sS0FBSztZQUMvQixZQUFZLElBQUk7WUFDaEIsS0FBSyxXQUFZO2dCQUNmLE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxNQUFNLEdBQUcsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUM5QyxPQUFPLGNBQWMsQ0FBQyxNQUFNLFVBQVU7UUFDcEMsWUFBWSxJQUFJO1FBQ2hCLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjEuNl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOC4zX0BwYXJjZWwrY29yZUAyLjguMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbj1hc3luYygpPT57bGV0W2VdPWF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6ITAsY3VycmVudFdpbmRvdzohMH0pO3JldHVybiBlfSxvPShlLGEpPT4hYS5fX2ludGVybmFsJiZlLnNvdXJjZT09PWdsb2JhbFRoaXMud2luZG93JiZlLmRhdGEubmFtZT09PWEubmFtZSYmKGEucmVsYXlJZD09PXZvaWQgMHx8ZS5kYXRhLnJlbGF5SWQ9PT1hLnJlbGF5SWQpO3ZhciByPShlLGEpPT57bGV0IHQ9YXN5bmMgcz0+e2lmKG8ocyxlKSYmIXMuZGF0YS5yZWxheWVkKXtsZXQgZD17bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTpzLmRhdGEuYm9keX0sbT1hd2FpdCBhPy4oZCk7d2luZG93LnBvc3RNZXNzYWdlKHtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5Om0scmVsYXllZDohMH0pfX07cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpLCgpPT53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KX0saT1lPT5uZXcgUHJvbWlzZSgoYSx0KT0+e3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHM9PntvKHMsZSkmJnMuZGF0YS5yZWxheWVkJiZhKHMuZGF0YS5ib2R5KX0pLHdpbmRvdy5wb3N0TWVzc2FnZShlKX0pO3ZhciBnPWFzeW5jIGU9PntpZighY2hyb21lPy5ydW50aW1lKXRocm93IG5ldyBFcnJvcihcImNocm9tZS5ydW50aW1lIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGUpfSxsPWFzeW5jIGU9PntpZighY2hyb21lPy50YWJzKXRocm93IG5ldyBFcnJvcihcImNocm9tZS50YWJzIGlzIG5vdCBhdmFpbGFibGVcIik7bGV0IGE9dHlwZW9mIGUudGFiSWQ9PVwibnVtYmVyXCI/ZS50YWJJZDooYXdhaXQgbigpKS5pZDtyZXR1cm4gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoYSxlKX0sYj1sLHk9ZT0+cihlLGcpLFA9eSxjPWksZj1jO2V4cG9ydHtQIGFzIHJlbGF5LHkgYXMgcmVsYXlNZXNzYWdlLGIgYXMgc2VuZFRvQWN0aXZlQ29udGVudFNjcmlwdCxnIGFzIHNlbmRUb0JhY2tncm91bmQsYyBhcyBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXksbCBhcyBzZW5kVG9Db250ZW50U2NyaXB0LGYgYXMgc2VuZFZpYVJlbGF5fTtcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJkaXN0LjJjODQ2ZDJkLmpzLm1hcCJ9
