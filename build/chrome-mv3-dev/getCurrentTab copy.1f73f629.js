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
})({"5GjJn":[function(require,module,exports) {
var c = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var g = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var M = new Set(c), m = (e)=>M.has(e), j = c.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, s])=>(e[t] = s, e), {});
var F = m("--dry-run"), l = ()=>m("--verbose") || g().VERBOSE === "true", V = l();
var p = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var f = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), h = (...e)=>p("\uD83D\uDD35 INFO", ...e), d = (...e)=>p("\uD83D\uDFE0 WARN", ...e), T = 0, i = (...e)=>l() && p(`\u{1F7E1} ${T++}`, ...e);
var o = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/vittoriorivabella/projects/lens-cross-post/lenshare/contents/getCurrentTab copy.ts",
    "bundleId": "e6b730021f73f629",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 55713
};
module.bundle.HMR_BUNDLE_ID = o.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: o.verbose
    }
};
var R = module.bundle.Module;
function w(e) {
    R.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = w;
module.bundle.hotData = {};
var J = globalThis.chrome || globalThis.browser || null;
function y() {
    return !o.host || o.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : o.host;
}
function _() {
    return o.port || location.port;
}
function v(e, t) {
    let { modules: s  } = e;
    return s ? !!s[t] : !1;
}
function D(e = _()) {
    let t = y();
    return `${o.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function P(e) {
    typeof e.message == "string" && f("[plasmo/parcel-runtime]: " + e.message);
}
function b(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(D());
    return t.addEventListener("message", async function(s) {
        let r = JSON.parse(s.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let A = a.codeframe || a.stack;
            d("[plasmo/parcel-runtime]: " + a.message + `
` + A + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", P), t.addEventListener("open", ()=>{
        h(`[plasmo/parcel-runtime]: Connected to HMR server for ${o.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        d(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${o.entryFilePath}`);
    }), t;
}
var x = "__plasmo-loading__";
function H(e) {
    document.documentElement ? document.documentElement.appendChild(e) : globalThis.addEventListener("DOMContentLoaded", ()=>{
        document.documentElement.appendChild(e);
    });
}
function S() {
    let e = document.createElement("div");
    return e.id = x, e.innerHTML = `
  <style>
    /***************************************************
     * Generated by SVG Artista on 2/8/2023, 4:53:34PM
     * MIT license (https://opensource.org/licenses/MIT)
     * W. https://svgartista.net
     **************************************************/
    
    @keyframes animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }
    
    .svg-elem-1 {
      animation: animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    .svg-elem-2 {
      animation: animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    .svg-elem-3 {
      animation: animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    .hidden {
      display: none;
    }

  </style>
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.border = "1px solid #333", e.style.background = "#f3f3f3", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "opacity 0.47s ease-in-out", e.style.boxShadow = "#333 4.7px 4.7px", H(e), e;
}
var C = ()=>{
    let e = document.getElementById(x) || S();
    return {
        element: e,
        show: ({ reloadButton: t = !1  } = {})=>{
            e.style.opacity = "1", t && (e.onclick = (s)=>{
                s.stopPropagation(), globalThis.location.reload();
            }, e.querySelector("span").classList.remove("hidden"), e.style.cursor = "pointer", e.style.pointerEvents = "all");
        },
        hide: ()=>{
            e.style.opacity = "0";
        }
    };
};
var I = `__plasmo_runtime_script_${module.id}__`, n, L = !1, k = C();
async function u() {
    i("Script Runtime - reloading"), L ? globalThis.location?.reload?.() : k.show({
        reloadButton: !0
    });
}
function E() {
    n?.disconnect(), n = chrome.runtime.connect({
        name: I
    }), n.onDisconnect.addListener(()=>{
        u();
    }), n.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && u(), e.__plasmo_cs_active_tab__ && (L = !0);
    });
}
function B() {
    if (chrome?.runtime) try {
        E(), setInterval(E, 24e4);
    } catch  {
        return;
    }
}
B();
b(async (e)=>{
    i("Script runtime - on updated assets"), e.filter((s)=>s.envHash === o.envHash).some((s)=>v(module.bundle, s.id)) && (k.show(), chrome.runtime ? n.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        u();
    }, 4700));
});

},{}],"vBOGk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
parcelHelpers.export(exports, "relayer", ()=>relayer);
var _messaging = require("@plasmohq/messaging");
const config = {
    matches: [
        "<all_urls>"
    ]
};
const relayer = (0, _messaging.relayMessage)({
    name: "getCurrentTab"
});

},{"@plasmohq/messaging":"2dsVW","@parcel/transformer-js/src/esmodule-helpers.js":"1psKX"}],"2dsVW":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1psKX"}],"1psKX":[function(require,module,exports) {
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

},{}]},["5GjJn","vBOGk"], "vBOGk", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFLElBQUksS0FBRyxZQUFVLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFVLElBQUUsU0FBUyxRQUFRLEdBQUMsV0FBVyxHQUFDLEVBQUUsSUFBSTtBQUFBO0FBQUMsU0FBUyxJQUFHO0lBQUMsT0FBTyxFQUFFLElBQUksSUFBRSxTQUFTLElBQUk7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxFQUFDLFNBQVEsRUFBQyxFQUFDLEdBQUM7SUFBRSxPQUFPLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsSUFBRSxHQUFHLEVBQUM7SUFBQyxJQUFJLElBQUU7SUFBSSxPQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBRSxTQUFTLFFBQVEsS0FBRyxZQUFVLENBQUMsOEJBQThCLElBQUksQ0FBQyxLQUFHLFFBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLE9BQU8sRUFBRSxPQUFPLElBQUUsWUFBVSxFQUFFLDhCQUE0QixFQUFFLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFHLE9BQU8sV0FBVyxTQUFTLEdBQUMsS0FBSTtJQUFPLElBQUksSUFBRSxJQUFJLFVBQVU7SUFBSyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsV0FBVSxlQUFlLENBQUMsRUFBQztRQUFDLElBQUksSUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUk7UUFBRSxJQUFHLEVBQUUsSUFBSSxLQUFHLFlBQVUsTUFBTSxFQUFFLEVBQUUsTUFBTSxHQUFFLEVBQUUsSUFBSSxLQUFHLE9BQU8sRUFBQyxLQUFJLElBQUksS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxTQUFTLElBQUUsRUFBRSxLQUFLO1lBQUMsRUFBRSw4QkFBNEIs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c291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMTcuNC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS00Zjk4NmY4MjVkYjlmODg0LmpzIiwiY29udGVudHMvZ2V0Q3VycmVudFRhYiBjb3B5LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocSttZXNzYWdpbmdAMC4xLjZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi44LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGM9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgZz0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBNPW5ldyBTZXQoYyksbT1lPT5NLmhhcyhlKSxqPWMuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsc10pPT4oZVt0XT1zLGUpLHt9KTt2YXIgRj1tKFwiLS1kcnktcnVuXCIpLGw9KCk9Pm0oXCItLXZlcmJvc2VcIil8fGcoKS5WRVJCT1NFPT09XCJ0cnVlXCIsVj1sKCk7dmFyIHA9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGY9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxoPSguLi5lKT0+cChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGQ9KC4uLmUpPT5wKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksVD0wLGk9KC4uLmUpPT5sKCkmJnAoYFxcdXsxRjdFMX0gJHtUKyt9YCwuLi5lKTt2YXIgbz17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy92aXR0b3Jpb3JpdmFiZWxsYS9wcm9qZWN0cy9sZW5zLWNyb3NzLXBvc3QvbGVuc2hhcmUvY29udGVudHMvZ2V0Q3VycmVudFRhYiBjb3B5LnRzXCIsXCJidW5kbGVJZFwiOlwiZTZiNzMwMDIxZjczZjYyOVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjU1NzEzfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9by5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm8udmVyYm9zZX19O3ZhciBSPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIHcoZSl7Ui5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT13O21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgSj1nbG9iYWxUaGlzLmNocm9tZXx8Z2xvYmFsVGhpcy5icm93c2VyfHxudWxsO2Z1bmN0aW9uIHkoKXtyZXR1cm4hby5ob3N0fHxvLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpvLmhvc3R9ZnVuY3Rpb24gXygpe3JldHVybiBvLnBvcnR8fGxvY2F0aW9uLnBvcnR9ZnVuY3Rpb24gdihlLHQpe2xldHttb2R1bGVzOnN9PWU7cmV0dXJuIHM/ISFzW3RdOiExfWZ1bmN0aW9uIEQoZT1fKCkpe2xldCB0PXkoKTtyZXR1cm5gJHtvLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBQKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmYoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBiKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChEKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24ocyl7bGV0IHI9SlNPTi5wYXJzZShzLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGEgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgQT1hLmNvZGVmcmFtZXx8YS5zdGFjaztkKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2EubWVzc2FnZStgXG5gK0ErYFxuXG5gK2EuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixQKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7by5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtvLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB4PVwiX19wbGFzbW8tbG9hZGluZ19fXCI7ZnVuY3Rpb24gSChlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKX0pfWZ1bmN0aW9uIFMoKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmlkPXgsZS5pbm5lckhUTUw9YFxuICA8c3R5bGU+XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIEdlbmVyYXRlZCBieSBTVkcgQXJ0aXN0YSBvbiAyLzgvMjAyMywgNDo1MzozNFBNXG4gICAgICogTUlUIGxpY2Vuc2UgKGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuICAgICAqIFcuIGh0dHBzOi8vc3ZnYXJ0aXN0YS5uZXRcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgXG4gICAgQGtleWZyYW1lcyBhbmltYXRlLXN2Zy1maWxsIHtcbiAgICAgIDAlIHtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgZmlsbDogIzMzMztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IGFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IGFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIDxzdmcgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNjQgMzU0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMzkuMjIxIDI4Mi4yNDNDMTU0LjI1MiAyODIuMjQzIDE2Ni45MDMgMjk0Ljg0OSAxNjEuMzM4IDMwOC44MTJDMTU5LjQ4OSAzMTMuNDU0IDE1Ny4xNSAzMTcuOTEzIDE1NC4zNDcgMzIyLjEwOUMxNDYuNDY0IDMzMy45MDkgMTM1LjI2IDM0My4xMDcgMTIyLjE1MSAzNDguNTM4QzEwOS4wNDMgMzUzLjk2OSA5NC42MTgyIDM1NS4zOSA4MC43MDIyIDM1Mi42MjFDNjYuNzg2MSAzNDkuODUyIDU0LjAwMzQgMzQzLjAxOCA0My45NzA1IDMzMi45ODNDMzMuOTM3NSAzMjIuOTQ3IDI3LjEwNSAzMTAuMTYyIDI0LjMzNjkgMjk2LjI0MkMyMS41Njg5IDI4Mi4zMjMgMjIuOTg5NSAyNjcuODk1IDI4LjQxOTMgMjU0Ljc4M0MzMy44NDkxIDI0MS42NzEgNDMuMDQ0MSAyMzAuNDY0IDU0Ljg0MTYgMjIyLjU3OUM1OS4wMzUzIDIxOS43NzcgNjMuNDkwOCAyMTcuNDM4IDY4LjEyOTUgMjE1LjU4OEM4Mi4wOTE1IDIxMC4wMjEgOTQuNjk3OCAyMjIuNjcxIDk0LjY5NzggMjM3LjcwM0w5NC42OTc4IDI1NS4wMjdDOTQuNjk3OCAyNzAuMDU4IDEwNi44ODMgMjgyLjI0MyAxMjEuOTE0IDI4Mi4yNDNIMTM5LjIyMVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMVwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk0xOTIuMjYxIDE0Mi4wMjhDMTkyLjI2MSAxMjYuOTk2IDIwNC44NjcgMTE0LjM0NiAyMTguODI5IDExOS45MTNDMjIzLjQ2OCAxMjEuNzYzIDIyNy45MjMgMTI0LjEwMiAyMzIuMTE3IDEyNi45MDRDMjQzLjkxNSAxMzQuNzg5IDI1My4xMSAxNDUuOTk2IDI1OC41MzkgMTU5LjEwOEMyNjMuOTY5IDE3Mi4yMiAyNjUuMzkgMTg2LjY0OCAyNjIuNjIyIDIwMC41NjdDMjU5Ljg1NCAyMTQuNDg3IDI1My4wMjEgMjI3LjI3MiAyNDIuOTg4IDIzNy4zMDhDMjMyLjk1NSAyNDcuMzQzIDIyMC4xNzMgMjU0LjE3NyAyMDYuMjU2IDI1Ni45NDZDMTkyLjM0IDI1OS43MTUgMTc3LjkxNiAyNTguMjk0IDE2NC44MDcgMjUyLjg2M0MxNTEuNjk5IDI0Ny40MzIgMTQwLjQ5NSAyMzguMjM0IDEzMi42MTIgMjI2LjQzNEMxMjkuODA4IDIyMi4yMzggMTI3LjQ3IDIxNy43NzkgMTI1LjYyIDIxMy4xMzdDMTIwLjA1NiAxOTkuMTc0IDEzMi43MDcgMTg2LjU2OCAxNDcuNzM4IDE4Ni41NjhMMTY1LjA0NCAxODYuNTY4QzE4MC4wNzYgMTg2LjU2OCAxOTIuMjYxIDE3NC4zODMgMTkyLjI2MSAxNTkuMzUyTDE5Mi4yNjEgMTQyLjAyOFpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMlwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk05NS42NTIyIDE2NC4xMzVDOTUuNjUyMiAxNzkuMTY3IDgzLjIyNzkgMTkxLjcyNSA2OC44MDEzIDE4Ny41MDVDNTkuNTE0NSAxODQuNzg4IDUwLjY0MzIgMTgwLjY2MyA0Mi41MTA2IDE3NS4yMjdDMjYuNzgwNiAxNjQuNzE0IDE0LjUyMDYgMTQ5Ljc3MiA3LjI4MDg5IDEzMi4yODlDMC4wNDExODMgMTE0LjgwNyAtMS44NTMwNSA5NS41Njk3IDEuODM3NzIgNzcuMDEwNEM1LjUyODQ5IDU4LjQ1MTEgMTQuNjM4NSA0MS40MDMzIDI4LjAxNTcgMjguMDIyOEM0MS4zOTMgMTQuNjQyMyA1OC40MzY2IDUuNTMwMDYgNzYuOTkxNCAxLjgzODM5Qzk1LjU0NjEgLTEuODUzMjkgMTE0Ljc3OSAwLjA0MTQxNjIgMTMyLjI1NyA3LjI4MjlDMTQ5LjczNSAxNC41MjQ0IDE2NC42NzQgMjYuNzg3NCAxNzUuMTg0IDQyLjUyMTJDMTgwLjYyIDUwLjY1NzYgMTg0Ljc0NCA1OS41MzMyIDE4Ny40NiA2OC44MjQ1QzE5MS42NzggODMuMjUxOSAxNzkuMTE5IDk1LjY3NTkgMTY0LjA4OCA5NS42NzU5TDEyMi44NjkgOTUuNjc1OUMxMDcuODM3IDk1LjY3NTkgOTUuNjUyMiAxMDcuODYxIDk1LjY1MjIgMTIyLjg5Mkw5NS42NTIyIDE2NC4xMzVaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTNcIj48L3BhdGg+XG4gIDwvc3ZnPlxuICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPkNvbnRleHQgSW52YWxpZGF0ZWQsIFByZXNzIHRvIFJlbG9hZDwvc3Bhbj5cbiAgYCxlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsZS5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIsZS5zdHlsZS5ib3R0b209XCIxNC43cHhcIixlLnN0eWxlLnJpZ2h0PVwiMTQuN3B4XCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLmJvcmRlcj1cIjFweCBzb2xpZCAjMzMzXCIsZS5zdHlsZS5iYWNrZ3JvdW5kPVwiI2YzZjNmM1wiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJvcGFjaXR5IDAuNDdzIGVhc2UtaW4tb3V0XCIsZS5zdHlsZS5ib3hTaGFkb3c9XCIjMzMzIDQuN3B4IDQuN3B4XCIsSChlKSxlfXZhciBDPSgpPT57bGV0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoeCl8fFMoKTtyZXR1cm57ZWxlbWVudDplLHNob3c6KHtyZWxvYWRCdXR0b246dD0hMX09e30pPT57ZS5zdHlsZS5vcGFjaXR5PVwiMVwiLHQmJihlLm9uY2xpY2s9cz0+e3Muc3RvcFByb3BhZ2F0aW9uKCksZ2xvYmFsVGhpcy5sb2NhdGlvbi5yZWxvYWQoKX0sZS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpLGUuc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiLGUuc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiKX0saGlkZTooKT0+e2Uuc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgST1gX19wbGFzbW9fcnVudGltZV9zY3JpcHRfJHttb2R1bGUuaWR9X19gLG4sTD0hMSxrPUMoKTthc3luYyBmdW5jdGlvbiB1KCl7aShcIlNjcmlwdCBSdW50aW1lIC0gcmVsb2FkaW5nXCIpLEw/Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKTprLnNob3coe3JlbG9hZEJ1dHRvbjohMH0pfWZ1bmN0aW9uIEUoKXtuPy5kaXNjb25uZWN0KCksbj1jaHJvbWUucnVudGltZS5jb25uZWN0KHtuYW1lOkl9KSxuLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3UoKX0pLG4ub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZ1KCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihMPSEwKX0pfWZ1bmN0aW9uIEIoKXtpZihjaHJvbWU/LnJ1bnRpbWUpdHJ5e0UoKSxzZXRJbnRlcnZhbChFLDI0ZTQpfWNhdGNoe3JldHVybn19QigpO2IoYXN5bmMgZT0+e2koXCJTY3JpcHQgcnVudGltZSAtIG9uIHVwZGF0ZWQgYXNzZXRzXCIpLGUuZmlsdGVyKHM9PnMuZW52SGFzaD09PW8uZW52SGFzaCkuc29tZShzPT52KG1vZHVsZS5idW5kbGUscy5pZCkpJiYoay5zaG93KCksY2hyb21lLnJ1bnRpbWU/bi5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e3UoKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NTQ29uZmlnIH0gZnJvbSBcInBsYXNtb1wiXG5cbmltcG9ydCB7IHJlbGF5TWVzc2FnZSwgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcbmltcG9ydCB7IHJlbGF5IH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmcvcmVsYXlcIlxuXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbGFzbW9DU0NvbmZpZyA9IHtcbiAgbWF0Y2hlczogW1wiPGFsbF91cmxzPlwiXVxufVxuZXhwb3J0IGNvbnN0IHJlbGF5ZXIgPSAgcmVsYXlNZXNzYWdlKFxuICB7XG4gICAgbmFtZTogXCJnZXRDdXJyZW50VGFiXCIgYXMgY29uc3RcbiAgfVxuKVxuIiwidmFyIG49YXN5bmMoKT0+e2xldFtlXT1hd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiEwLGN1cnJlbnRXaW5kb3c6ITB9KTtyZXR1cm4gZX0sbz0oZSxhKT0+IWEuX19pbnRlcm5hbCYmZS5zb3VyY2U9PT1nbG9iYWxUaGlzLndpbmRvdyYmZS5kYXRhLm5hbWU9PT1hLm5hbWUmJihhLnJlbGF5SWQ9PT12b2lkIDB8fGUuZGF0YS5yZWxheUlkPT09YS5yZWxheUlkKTt2YXIgcj0oZSxhKT0+e2xldCB0PWFzeW5jIHM9PntpZihvKHMsZSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IGQ9e25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LG09YXdhaXQgYT8uKGQpO3dpbmRvdy5wb3N0TWVzc2FnZSh7bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTptLHJlbGF5ZWQ6ITB9KX19O3JldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KSwoKT0+d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdCl9LGk9ZT0+bmV3IFByb21pc2UoKGEsdCk9Pnt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixzPT57byhzLGUpJiZzLmRhdGEucmVsYXllZCYmYShzLmRhdGEuYm9keSl9KSx3aW5kb3cucG9zdE1lc3NhZ2UoZSl9KTt2YXIgZz1hc3luYyBlPT57aWYoIWNocm9tZT8ucnVudGltZSl0aHJvdyBuZXcgRXJyb3IoXCJjaHJvbWUucnVudGltZSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShlKX0sbD1hc3luYyBlPT57aWYoIWNocm9tZT8udGFicyl0aHJvdyBuZXcgRXJyb3IoXCJjaHJvbWUudGFicyBpcyBub3QgYXZhaWxhYmxlXCIpO2xldCBhPXR5cGVvZiBlLnRhYklkPT1cIm51bWJlclwiP2UudGFiSWQ6KGF3YWl0IG4oKSkuaWQ7cmV0dXJuIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGEsZSl9LGI9bCx5PWU9PnIoZSxnKSxQPXksYz1pLGY9YztleHBvcnR7UCBhcyByZWxheSx5IGFzIHJlbGF5TWVzc2FnZSxiIGFzIHNlbmRUb0FjdGl2ZUNvbnRlbnRTY3JpcHQsZyBhcyBzZW5kVG9CYWNrZ3JvdW5kLGMgYXMgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5LGwgYXMgc2VuZFRvQ29udGVudFNjcmlwdCxmIGFzIHNlbmRWaWFSZWxheX07XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q3VycmVudFRhYiBjb3B5LjFmNzNmNjI5LmpzLm1hcCJ9
