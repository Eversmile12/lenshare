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
})({"kFpLk":[function(require,module,exports) {
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
    "port": 62761,
    "entryFilePath": "/Users/vittoriorivabella/projects/lenshare/contents/mirror.ts",
    "bundleId": "db630fb0d56fe9c9",
    "envHash": "210281caf8d4160d",
    "verbose": "false",
    "secure": false,
    "serverPort": 62760
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

},{}],"e8cW1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _messaging = require("@plasmohq/messaging");
const config = {
    matches: [
        "https://twitter.com/*"
    ],
    all_frames: true,
    world: "MAIN"
};
window.addEventListener("load", ()=>{
    setInterval(()=>{
        const tweets = document.querySelectorAll("article");
        attachButtonToTweets(tweets);
    }, 1000);
});
const getTweetText = async ()=>{
    const { url  } = await (0, _messaging.sendToBackgroundViaRelay)({
        name: "getCurrentTab"
    });
    const tweetURL = url.split("/");
    console.log(tweetURL);
    const tweetId = tweetURL[tweetURL.length - 1];
    console.log(tweetId);
    const { tweet  } = await (0, _messaging.sendToBackgroundViaRelay)({
        name: "getTweet",
        body: {
            id: tweetId
        }
    });
};
const attachButtonToTweets = (tweets)=>{
    tweets.forEach((tweet)=>{
        if (!tweet.querySelector("#lens-mirror-wizard")) {
            const button = document.createElement("a");
            button.innerText = "Heyo";
            button.id = "lens-mirror-wizard";
            button.onclick = ()=>{
                getTweetText();
            };
            tweet.appendChild(button);
        }
    });
};

},{"@plasmohq/messaging":"cOBpT","@parcel/transformer-js/src/esmodule-helpers.js":"cfP7b"}],"cOBpT":[function(require,module,exports) {
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

},{}]},["kFpLk","e8cW1"], "e8cW1", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFLElBQUksS0FBRyxZQUFVLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFVLElBQUUsU0FBUyxRQUFRLEdBQUMsV0FBVyxHQUFDLEVBQUUsSUFBSTtBQUFBO0FBQUMsU0FBUyxJQUFHO0lBQUMsT0FBTyxFQUFFLElBQUksSUFBRSxTQUFTLElBQUk7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxFQUFDLFNBQVEsRUFBQyxFQUFDLEdBQUM7SUFBRSxPQUFPLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsSUFBRSxHQUFHLEVBQUM7SUFBQyxJQUFJLElBQUU7SUFBSSxPQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBRSxTQUFTLFFBQVEsS0FBRyxZQUFVLENBQUMsOEJBQThCLElBQUksQ0FBQyxLQUFHLFFBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLE9BQU8sRUFBRSxPQUFPLElBQUUsWUFBVSxFQUFFLDhCQUE0QixFQUFFLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFHLE9BQU8sV0FBVyxTQUFTLEdBQUMsS0FBSTtJQUFPLElBQUksSUFBRSxJQUFJLFVBQVU7SUFBSyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsV0FBVSxlQUFlLENBQUMsRUFBQztRQUFDLElBQUksSUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUk7UUFBRSxJQUFHLEVBQUUsSUFBSSxLQUFHLFlBQVUsTUFBTSxFQUFFLEVBQUUsTUFBTSxHQUFFLEVBQUUsSUFBSSxLQUFHLE9BQU8sRUFBQyxLQUFJLElBQUksS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxTQUFTLElBQUUsRUFBRSxLQUFLO1lBQUMsRUFBRSw4QkFBNEIs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QUUsSUFBRSxDQUFBLElBQUcsRUFBRSxHQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFOzs7QUNBcDdCLFFBQVEsY0FBYyxHQUFHLFNBQVUsQ0FBQyxFQUFFO0lBQ3BDLE9BQU8sS0FBSyxFQUFFLFVBQVUsR0FBRyxJQUFJO1FBQUMsU0FBUztJQUFDLENBQUM7QUFDN0M7QUFFQSxRQUFRLGlCQUFpQixHQUFHLFNBQVUsQ0FBQyxFQUFFO0lBQ3ZDLE9BQU8sY0FBYyxDQUFDLEdBQUcsY0FBYztRQUFDLE9BQU8sSUFBSTtJQUFBO0FBQ3JEO0FBRUEsUUFBUSxTQUFTLEdBQUcsU0FBVSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQzFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsT0FBTyxDQUFDLFNBQVUsR0FBRyxFQUFFO1FBQ3pDLElBQUksUUFBUSxhQUFhLFFBQVEsZ0JBQWdCLEtBQUssY0FBYyxDQUFDLE1BQ25FO1FBR0YsT0FBTyxjQUFjLENBQUMsTUFBTSxLQUFLO1lBQy9CLFlBQVksSUFBSTtZQUNoQixLQUFLLFdBQVk7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLE1BQU0sR0FBRyxTQUFVLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQzlDLE9BQU8sY0FBYyxDQUFDLE1BQU0sVUFBVTtRQUNwQyxZQUFZLElBQUk7UUFDaEIsS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4xNy40L25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLThlMWM3ZjFmZTI1NDI0YTQuanMiLCJjb250ZW50cy9taXJyb3IudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjEuNl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOC4zX0BwYXJjZWwrY29yZUAyLjguMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYz10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciBnPSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIE09bmV3IFNldChjKSxtPWU9Pk0uaGFzKGUpLGo9Yy5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxzXSk9PihlW3RdPXMsZSkse30pO3ZhciBGPW0oXCItLWRyeS1ydW5cIiksbD0oKT0+bShcIi0tdmVyYm9zZVwiKXx8ZygpLlZFUkJPU0U9PT1cInRydWVcIixWPWwoKTt2YXIgcD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgZj0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLGg9KC4uLmUpPT5wKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZD0oLi4uZSk9PnAoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxUPTAsaT0oLi4uZSk9PmwoKSYmcChgXFx1ezFGN0UxfSAke1QrK31gLC4uLmUpO3ZhciBvPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjo2Mjc2MSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy92aXR0b3Jpb3JpdmFiZWxsYS9wcm9qZWN0cy9sZW5zaGFyZS9jb250ZW50cy9taXJyb3IudHNcIixcImJ1bmRsZUlkXCI6XCJkYjYzMGZiMGQ1NmZlOWM5XCIsXCJlbnZIYXNoXCI6XCIyMTAyODFjYWY4ZDQxNjBkXCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NjI3NjB9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1vLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6by52ZXJib3NlfX07dmFyIFI9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gdyhlKXtSLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPXc7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBKPWdsb2JhbFRoaXMuY2hyb21lfHxnbG9iYWxUaGlzLmJyb3dzZXJ8fG51bGw7ZnVuY3Rpb24geSgpe3JldHVybiFvLmhvc3R8fG8uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm8uaG9zdH1mdW5jdGlvbiBfKCl7cmV0dXJuIG8ucG9ydHx8bG9jYXRpb24ucG9ydH1mdW5jdGlvbiB2KGUsdCl7bGV0e21vZHVsZXM6c309ZTtyZXR1cm4gcz8hIXNbdF06ITF9ZnVuY3Rpb24gRChlPV8oKSl7bGV0IHQ9eSgpO3JldHVybmAke28uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIFAoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIGIoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEQoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihzKXtsZXQgcj1KU09OLnBhcnNlKHMuZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBBPWEuY29kZWZyYW1lfHxhLnN0YWNrO2QoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArQStgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFApLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2goYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtvLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57ZChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke28uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHg9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiBIKGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudD9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpfSl9ZnVuY3Rpb24gUygpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaWQ9eCxlLmlubmVySFRNTD1gXG4gIDxzdHlsZT5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogR2VuZXJhdGVkIGJ5IFNWRyBBcnRpc3RhIG9uIDIvOC8yMDIzLCA0OjUzOjM0UE1cbiAgICAgKiBNSVQgbGljZW5zZSAoaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG4gICAgICogVy4gaHR0cHM6Ly9zdmdhcnRpc3RhLm5ldFxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc3ZnLWVsZW0tMSB7XG4gICAgICBhbmltYXRpb246IGFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC44cyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgIC5zdmctZWxlbS0yIHtcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjlzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgIC5zdmctZWxlbS0zIHtcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAxcyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgIC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgPC9zdHlsZT5cbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgLGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuYm9yZGVyPVwiMXB4IHNvbGlkICMzMzNcIixlLnN0eWxlLmJhY2tncm91bmQ9XCIjZjNmM2YzXCIsZS5zdHlsZS56SW5kZXg9XCIyMTQ3NDgzNjQ3XCIsZS5zdHlsZS5vcGFjaXR5PVwiMFwiLGUuc3R5bGUudHJhbnNpdGlvbj1cIm9wYWNpdHkgMC40N3MgZWFzZS1pbi1vdXRcIixlLnN0eWxlLmJveFNoYWRvdz1cIiMzMzMgNC43cHggNC43cHhcIixIKGUpLGV9dmFyIEM9KCk9PntsZXQgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh4KXx8UygpO3JldHVybntlbGVtZW50OmUsc2hvdzooe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9PntlLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKGUub25jbGljaz1zPT57cy5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxlLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksZS5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOigpPT57ZS5zdHlsZS5vcGFjaXR5PVwiMFwifX19O3ZhciBJPWBfX3BsYXNtb19ydW50aW1lX3NjcmlwdF8ke21vZHVsZS5pZH1fX2AsbixMPSExLGs9QygpO2FzeW5jIGZ1bmN0aW9uIHUoKXtpKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksTD9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOmsuc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gRSgpe24/LmRpc2Nvbm5lY3QoKSxuPWNocm9tZS5ydW50aW1lLmNvbm5lY3Qoe25hbWU6SX0pLG4ub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57dSgpfSksbi5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZT0+e2UuX19wbGFzbW9fY3NfcmVsb2FkX18mJnUoKSxlLl9fcGxhc21vX2NzX2FjdGl2ZV90YWJfXyYmKEw9ITApfSl9ZnVuY3Rpb24gQigpe2lmKGNocm9tZT8ucnVudGltZSl0cnl7RSgpLHNldEludGVydmFsKEUsMjRlNCl9Y2F0Y2h7cmV0dXJufX1CKCk7Yihhc3luYyBlPT57aShcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIocz0+cy5lbnZIYXNoPT09by5lbnZIYXNoKS5zb21lKHM9PnYobW9kdWxlLmJ1bmRsZSxzLmlkKSkmJihrLnNob3coKSxjaHJvbWUucnVudGltZT9uLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19jaGFuZ2VkX186ITB9KTpzZXRUaW1lb3V0KCgpPT57dSgpfSw0NzAwKSl9KTtcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vQ1NDb25maWcgfSBmcm9tIFwicGxhc21vXCJcblxuaW1wb3J0IHsgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5IH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyBUd2l0dGVySGFuZGxlciB9IGZyb20gXCJ+dHdpdHRlci90d2l0dGVySGFuZGxlclwiXG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFBsYXNtb0NTQ29uZmlnID0ge1xuICBtYXRjaGVzOiBbXCJodHRwczovL3R3aXR0ZXIuY29tLypcIl0sXG4gIGFsbF9mcmFtZXM6IHRydWUsXG4gIHdvcmxkOiBcIk1BSU5cIlxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgdHdlZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFydGljbGVcIilcbiAgICBhdHRhY2hCdXR0b25Ub1R3ZWV0cyh0d2VldHMpXG4gIH0sIDEwMDApXG59KVxuXG5jb25zdCBnZXRUd2VldFRleHQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXkoe1xuICAgIG5hbWU6IFwiZ2V0Q3VycmVudFRhYlwiXG4gIH0pXG5cbiAgY29uc3QgdHdlZXRVUkwgPSB1cmwuc3BsaXQoXCIvXCIpXG4gIGNvbnNvbGUubG9nKHR3ZWV0VVJMKVxuICBjb25zdCB0d2VldElkID0gdHdlZXRVUkxbdHdlZXRVUkwubGVuZ3RoIC0gMV1cbiAgY29uc29sZS5sb2codHdlZXRJZClcbiAgY29uc3QgeyB0d2VldCB9ID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5KHtcbiAgICBuYW1lOiBcImdldFR3ZWV0XCIsXG4gICAgYm9keToge1xuICAgICAgaWQ6IHR3ZWV0SWRcbiAgICB9XG4gIH0pXG59XG5jb25zdCBhdHRhY2hCdXR0b25Ub1R3ZWV0cyA9ICh0d2VldHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gIHR3ZWV0cy5mb3JFYWNoKCh0d2VldCkgPT4ge1xuICAgIGlmICghdHdlZXQucXVlcnlTZWxlY3RvcihcIiNsZW5zLW1pcnJvci13aXphcmRcIikpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJIZXlvXCJcbiAgICAgIGJ1dHRvbi5pZCA9IFwibGVucy1taXJyb3Itd2l6YXJkXCJcbiAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBnZXRUd2VldFRleHQoKVxuICAgICAgfVxuICAgICAgdHdlZXQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cbiAgfSlcbn1cbiIsInZhciBuPWFzeW5jKCk9PntsZXRbZV09YXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTohMCxjdXJyZW50V2luZG93OiEwfSk7cmV0dXJuIGV9LG89KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIHI9KGUsYSk9PntsZXQgdD1hc3luYyBzPT57aWYobyhzLGUpJiYhcy5kYXRhLnJlbGF5ZWQpe2xldCBkPXtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5OnMuZGF0YS5ib2R5fSxtPWF3YWl0IGE/LihkKTt3aW5kb3cucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6bSxyZWxheWVkOiEwfSl9fTtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdCksKCk9PndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpfSxpPWU9Pm5ldyBQcm9taXNlKChhLHQpPT57d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscz0+e28ocyxlKSYmcy5kYXRhLnJlbGF5ZWQmJmEocy5kYXRhLmJvZHkpfSksd2luZG93LnBvc3RNZXNzYWdlKGUpfSk7dmFyIGc9YXN5bmMgZT0+e2lmKCFjaHJvbWU/LnJ1bnRpbWUpdGhyb3cgbmV3IEVycm9yKFwiY2hyb21lLnJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoZSl9LGw9YXN5bmMgZT0+e2lmKCFjaHJvbWU/LnRhYnMpdGhyb3cgbmV3IEVycm9yKFwiY2hyb21lLnRhYnMgaXMgbm90IGF2YWlsYWJsZVwiKTtsZXQgYT10eXBlb2YgZS50YWJJZD09XCJudW1iZXJcIj9lLnRhYklkOihhd2FpdCBuKCkpLmlkO3JldHVybiBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShhLGUpfSxiPWwseT1lPT5yKGUsZyksUD15LGM9aSxmPWM7ZXhwb3J0e1AgYXMgcmVsYXkseSBhcyByZWxheU1lc3NhZ2UsYiBhcyBzZW5kVG9BY3RpdmVDb250ZW50U2NyaXB0LGcgYXMgc2VuZFRvQmFja2dyb3VuZCxjIGFzIHNlbmRUb0JhY2tncm91bmRWaWFSZWxheSxsIGFzIHNlbmRUb0NvbnRlbnRTY3JpcHQsZiBhcyBzZW5kVmlhUmVsYXl9O1xuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im1pcnJvci5kNTZmZTljOS5qcy5tYXAifQ==
