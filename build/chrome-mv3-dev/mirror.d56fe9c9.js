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
})({"58YVL":[function(require,module,exports) {
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
    "entryFilePath": "/Users/vittoriorivabella/projects/lens-cross-post/lenshare/contents/mirror.ts",
    "bundleId": "db630fb0d56fe9c9",
    "envHash": "210281caf8d4160d",
    "verbose": "false",
    "secure": false,
    "serverPort": 55444
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
    console.log("calling background");
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

},{}]},["58YVL","e8cW1"], "e8cW1", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFLElBQUksS0FBRyxZQUFVLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFVLElBQUUsU0FBUyxRQUFRLEdBQUMsV0FBVyxHQUFDLEVBQUUsSUFBSTtBQUFBO0FBQUMsU0FBUyxJQUFHO0lBQUMsT0FBTyxFQUFFLElBQUksSUFBRSxTQUFTLElBQUk7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxFQUFDLFNBQVEsRUFBQyxFQUFDLEdBQUM7SUFBRSxPQUFPLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsSUFBRSxHQUFHLEVBQUM7SUFBQyxJQUFJLElBQUU7SUFBSSxPQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBRSxTQUFTLFFBQVEsS0FBRyxZQUFVLENBQUMsOEJBQThCLElBQUksQ0FBQyxLQUFHLFFBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLE9BQU8sRUFBRSxPQUFPLElBQUUsWUFBVSxFQUFFLDhCQUE0QixFQUFFLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFHLE9BQU8sV0FBVyxTQUFTLEdBQUMsS0FBSTtJQUFPLElBQUksSUFBRSxJQUFJLFVBQVU7SUFBSyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsV0FBVSxlQUFlLENBQUMsRUFBQztRQUFDLElBQUksSUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUk7UUFBRSxJQUFHLEVBQUUsSUFBSSxLQUFHLFlBQVUsTUFBTSxFQUFFLEVBQUUsTUFBTSxHQUFFLEVBQUUsSUFBSSxLQUFHLE9BQU8sRUFBQyxLQUFJLElBQUksS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxTQUFTLElBQUUsRUFBRSxLQUFLO1lBQUMsRUFBRSw4QkFBNEIs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LEFBQUQ7QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUk7SUFBQyxJQUFJLElBQUUsT0FBTSxJQUFHO1FBQUMsSUFBRyxFQUFFLEdBQUUsTUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUFDLElBQUksSUFBRTtnQkFBQyxNQUFLLEVBQUUsSUFBSTtnQkFBQyxTQUFRLEVBQUUsT0FBTztnQkFBQyxNQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFBQSxHQUFFLElBQUUsTUFBTSxJQUFJO1lBQUcsT0FBTyxXQUFXLENBQUM7Z0JBQUMsTUFBSyxFQUFFLElBQUk7Z0JBQUMsU0FBUSxFQUFFLE9BQU87Z0JBQUMsTUFBSztnQkFBRSxTQUFRLENBQUM7WUFBQztRQUFFLENBQUM7SUFBQTtJQUFFLE9BQU8sT0FBTyxnQkFBZ0IsQ0FBQyxXQUFVLElBQUcsSUFBSSxPQUFPLG1CQUFtQixDQUFDLFdBQVUsRUFBRTtBQUFBLEdBQUUsSUFBRSxDQUFBLElBQUcsSUFBSSxRQUFRLENBQUMsR0FBRSxJQUFJO1FBQUMsT0FBTyxnQkFBZ0IsQ0FBQyxXQUFVLENBQUEsSUFBRztZQUFDLEVBQUUsR0FBRSxNQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFBQyxJQUFHLE9BQU8sV0FBVyxDQUFDLEVBQUU7SUFBQTtBQUFHLElBQUksSUFBRSxPQUFNLElBQUc7SUFBQyxJQUFHLENBQUMsUUFBUSxTQUFRLE1BQU0sSUFBSSxNQUFNLG1DQUFtQztJQUFBLE9BQU8sT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQUUsR0FBRSxJQUFFLE9BQU0sSUFBRztJQUFDLElBQUcsQ0FBQyxRQUFRLE1BQUssTUFBTSxJQUFJLE1BQU0sZ0NBQWdDO0lBQUEsSUFBSSxJQUFFLE9BQU8sRUFBRSxLQUFLLElBQUUsV0FBUyxFQUFFLEtBQUssR0FBQyxBQUFDLENBQUEsTUFBTSxHQUFFLEVBQUcsRUFBRTtJQUFDLE9BQU8sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUU7QUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLENBQUEsSUFBRyxFQUFFLEdBQUUsSUFBRyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUU7OztBQ0FwN0IsUUFBUSxjQUFjLEdBQUcsU0FBVSxDQUFDLEVBQUU7SUFDcEMsT0FBTyxLQUFLLEVBQUUsVUFBVSxHQUFHLElBQUk7UUFBQyxTQUFTO0lBQUMsQ0FBQztBQUM3QztBQUVBLFFBQVEsaUJBQWlCLEdBQUcsU0FBVSxDQUFDLEVBQUU7SUFDdkMsT0FBTyxjQUFjLENBQUMsR0FBRyxjQUFjO1FBQUMsT0FBTyxJQUFJO0lBQUE7QUFDckQ7QUFFQSxRQUFRLFNBQVMsR0FBRyxTQUFVLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxPQUFPLENBQUMsU0FBVSxHQUFHLEVBQUU7UUFDekMsSUFBSSxRQUFRLGFBQWEsUUFBUSxnQkFBZ0IsS0FBSyxjQUFjLENBQUMsTUFDbkU7UUFHRixPQUFPLGNBQWMsQ0FBQyxNQUFNLEtBQUs7WUFDL0IsWUFBWSxJQUFJO1lBQ2hCLEtBQUssV0FBWTtnQkFDZixPQUFPLE1BQU0sQ0FBQyxJQUFJO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVBLFFBQVEsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDOUMsT0FBTyxjQUFjLENBQUMsTUFBTSxVQUFVO1FBQ3BDLFlBQVksSUFBSTtRQUNoQixLQUFLO0lBQ1A7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjE3LjQvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZTBkYThhNTc4MzQ3ZTZkNy5qcyIsImNvbnRlbnRzL21pcnJvci50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErbWVzc2FnaW5nQDAuMS42X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL21lc3NhZ2luZy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi44LjNfQHBhcmNlbCtjb3JlQDIuOC4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIGc9KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgTT1uZXcgU2V0KGMpLG09ZT0+TS5oYXMoZSksaj1jLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LHNdKT0+KGVbdF09cyxlKSx7fSk7dmFyIEY9bShcIi0tZHJ5LXJ1blwiKSxsPSgpPT5tKFwiLS12ZXJib3NlXCIpfHxnKCkuVkVSQk9TRT09PVwidHJ1ZVwiLFY9bCgpO3ZhciBwPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBmPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksaD0oLi4uZSk9PnAoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxkPSguLi5lKT0+cChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFQ9MCxpPSguLi5lKT0+bCgpJiZwKGBcXHV7MUY3RTF9ICR7VCsrfWAsLi4uZSk7dmFyIG89e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvdml0dG9yaW9yaXZhYmVsbGEvcHJvamVjdHMvbGVucy1jcm9zcy1wb3N0L2xlbnNoYXJlL2NvbnRlbnRzL21pcnJvci50c1wiLFwiYnVuZGxlSWRcIjpcImRiNjMwZmIwZDU2ZmU5YzlcIixcImVudkhhc2hcIjpcIjIxMDI4MWNhZjhkNDE2MGRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1NTQ0NH07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW8uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpvLnZlcmJvc2V9fTt2YXIgUj1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiB3KGUpe1IuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9dzttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIEo9Z2xvYmFsVGhpcy5jaHJvbWV8fGdsb2JhbFRoaXMuYnJvd3Nlcnx8bnVsbDtmdW5jdGlvbiB5KCl7cmV0dXJuIW8uaG9zdHx8by5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6by5ob3N0fWZ1bmN0aW9uIF8oKXtyZXR1cm4gby5wb3J0fHxsb2NhdGlvbi5wb3J0fWZ1bmN0aW9uIHYoZSx0KXtsZXR7bW9kdWxlczpzfT1lO3JldHVybiBzPyEhc1t0XTohMX1mdW5jdGlvbiBEKGU9XygpKXtsZXQgdD15KCk7cmV0dXJuYCR7by5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gUChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gYihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoRCgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKHMpe2xldCByPUpTT04ucGFyc2Uocy5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBhIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IEE9YS5jb2RlZnJhbWV8fGEuc3RhY2s7ZChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIithLm1lc3NhZ2UrYFxuYCtBK2BcblxuYCthLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsUCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57aChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke28uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntkKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7by5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgeD1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uIEgoZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50P2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKTpnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSl9KX1mdW5jdGlvbiBTKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5pZD14LGUuaW5uZXJIVE1MPWBcbiAgPHN0eWxlPlxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBHZW5lcmF0ZWQgYnkgU1ZHIEFydGlzdGEgb24gMi84LzIwMjMsIDQ6NTM6MzRQTVxuICAgICAqIE1JVCBsaWNlbnNlIChodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbiAgICAgKiBXLiBodHRwczovL3N2Z2FydGlzdGEubmV0XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIFxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGAsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZGlzcGxheT1cImZsZXhcIixlLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsZS5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsZS5zdHlsZS5wYWRkaW5nPVwiMTQuN3B4XCIsZS5zdHlsZS5nYXA9XCIxNC43cHhcIixlLnN0eWxlLmJvcmRlclJhZGl1cz1cIjQuN3B4XCIsZS5zdHlsZS5ib3JkZXI9XCIxcHggc29saWQgIzMzM1wiLGUuc3R5bGUuYmFja2dyb3VuZD1cIiNmM2YzZjNcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwib3BhY2l0eSAwLjQ3cyBlYXNlLWluLW91dFwiLGUuc3R5bGUuYm94U2hhZG93PVwiIzMzMyA0LjdweCA0LjdweFwiLEgoZSksZX12YXIgQz0oKT0+e2xldCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHgpfHxTKCk7cmV0dXJue2VsZW1lbnQ6ZSxzaG93Oih7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2Uuc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoZS5vbmNsaWNrPXM9PntzLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LGUucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxlLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6KCk9PntlLnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIEk9YF9fcGxhc21vX3J1bnRpbWVfc2NyaXB0XyR7bW9kdWxlLmlkfV9fYCxuLEw9ITEsaz1DKCk7YXN5bmMgZnVuY3Rpb24gdSgpe2koXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxMP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6ay5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBFKCl7bj8uZGlzY29ubmVjdCgpLG49Y2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpJfSksbi5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9Pnt1KCl9KSxuLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmdSgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoTD0hMCl9KX1mdW5jdGlvbiBCKCl7aWYoY2hyb21lPy5ydW50aW1lKXRyeXtFKCksc2V0SW50ZXJ2YWwoRSwyNGU0KX1jYXRjaHtyZXR1cm59fUIoKTtiKGFzeW5jIGU9PntpKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihzPT5zLmVudkhhc2g9PT1vLmVudkhhc2gpLnNvbWUocz0+dihtb2R1bGUuYnVuZGxlLHMuaWQpKSYmKGsuc2hvdygpLGNocm9tZS5ydW50aW1lP24ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9Pnt1KCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9DU0NvbmZpZyB9IGZyb20gXCJwbGFzbW9cIlxuXG5pbXBvcnQgeyBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXkgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IFR3aXR0ZXJIYW5kbGVyIH0gZnJvbSBcIn50d2l0dGVyL3R3aXR0ZXJIYW5kbGVyXCJcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ1NDb25maWcgPSB7XG4gIG1hdGNoZXM6IFtcImh0dHBzOi8vdHdpdHRlci5jb20vKlwiXSxcbiAgYWxsX2ZyYW1lczogdHJ1ZSxcbiAgd29ybGQ6IFwiTUFJTlwiXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCB0d2VldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYXJ0aWNsZVwiKVxuICAgIGF0dGFjaEJ1dHRvblRvVHdlZXRzKHR3ZWV0cylcbiAgfSwgMTAwMClcbn0pXG5cbmNvbnN0IGdldFR3ZWV0VGV4dCA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJjYWxsaW5nIGJhY2tncm91bmRcIilcbiAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmRWaWFSZWxheSh7XG4gICAgbmFtZTogXCJnZXRDdXJyZW50VGFiXCJcbiAgfSlcblxuICBjb25zdCB0d2VldFVSTCA9IHVybC5zcGxpdChcIi9cIilcbiAgY29uc29sZS5sb2codHdlZXRVUkwpXG4gIGNvbnN0IHR3ZWV0SWQgPSB0d2VldFVSTFt0d2VldFVSTC5sZW5ndGggLSAxXVxuICBjb25zb2xlLmxvZyh0d2VldElkKVxuICBjb25zdCB7IHR3ZWV0IH0gPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXkoe1xuICAgIG5hbWU6IFwiZ2V0VHdlZXRcIixcbiAgICBib2R5OiB7XG4gICAgICBpZDogdHdlZXRJZFxuICAgIH1cbiAgfSlcbn1cbmNvbnN0IGF0dGFjaEJ1dHRvblRvVHdlZXRzID0gKHR3ZWV0czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4pID0+IHtcbiAgdHdlZXRzLmZvckVhY2goKHR3ZWV0KSA9PiB7XG4gICAgaWYgKCF0d2VldC5xdWVyeVNlbGVjdG9yKFwiI2xlbnMtbWlycm9yLXdpemFyZFwiKSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIkhleW9cIlxuICAgICAgYnV0dG9uLmlkID0gXCJsZW5zLW1pcnJvci13aXphcmRcIlxuICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdldFR3ZWV0VGV4dCgpXG4gICAgICB9XG4gICAgICB0d2VldC5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfVxuICB9KVxufVxuIiwidmFyIG49YXN5bmMoKT0+e2xldFtlXT1hd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiEwLGN1cnJlbnRXaW5kb3c6ITB9KTtyZXR1cm4gZX0sbz0oZSxhKT0+IWEuX19pbnRlcm5hbCYmZS5zb3VyY2U9PT1nbG9iYWxUaGlzLndpbmRvdyYmZS5kYXRhLm5hbWU9PT1hLm5hbWUmJihhLnJlbGF5SWQ9PT12b2lkIDB8fGUuZGF0YS5yZWxheUlkPT09YS5yZWxheUlkKTt2YXIgcj0oZSxhKT0+e2xldCB0PWFzeW5jIHM9PntpZihvKHMsZSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IGQ9e25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LG09YXdhaXQgYT8uKGQpO3dpbmRvdy5wb3N0TWVzc2FnZSh7bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTptLHJlbGF5ZWQ6ITB9KX19O3JldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KSwoKT0+d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdCl9LGk9ZT0+bmV3IFByb21pc2UoKGEsdCk9Pnt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixzPT57byhzLGUpJiZzLmRhdGEucmVsYXllZCYmYShzLmRhdGEuYm9keSl9KSx3aW5kb3cucG9zdE1lc3NhZ2UoZSl9KTt2YXIgZz1hc3luYyBlPT57aWYoIWNocm9tZT8ucnVudGltZSl0aHJvdyBuZXcgRXJyb3IoXCJjaHJvbWUucnVudGltZSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShlKX0sbD1hc3luYyBlPT57aWYoIWNocm9tZT8udGFicyl0aHJvdyBuZXcgRXJyb3IoXCJjaHJvbWUudGFicyBpcyBub3QgYXZhaWxhYmxlXCIpO2xldCBhPXR5cGVvZiBlLnRhYklkPT1cIm51bWJlclwiP2UudGFiSWQ6KGF3YWl0IG4oKSkuaWQ7cmV0dXJuIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGEsZSl9LGI9bCx5PWU9PnIoZSxnKSxQPXksYz1pLGY9YztleHBvcnR7UCBhcyByZWxheSx5IGFzIHJlbGF5TWVzc2FnZSxiIGFzIHNlbmRUb0FjdGl2ZUNvbnRlbnRTY3JpcHQsZyBhcyBzZW5kVG9CYWNrZ3JvdW5kLGMgYXMgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5LGwgYXMgc2VuZFRvQ29udGVudFNjcmlwdCxmIGFzIHNlbmRWaWFSZWxheX07XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoibWlycm9yLmQ1NmZlOWM5LmpzLm1hcCJ9
