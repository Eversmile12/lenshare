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
})({"4h9JA":[function(require,module,exports) {
var global = arguments[3];
var N = Object.create;
var w = Object.defineProperty;
var I = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var W = Object.getPrototypeOf, V = Object.prototype.hasOwnProperty;
var J = (e, t, o, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let s of F(t))!V.call(e, s) && s !== o && w(e, s, {
        get: ()=>t[s],
        enumerable: !(r = I(t, s)) || r.enumerable
    });
    return e;
};
var q = (e, t, o)=>(o = e != null ? N(W(e)) : {}, J(t || !e || !e.__esModule ? w(o, "default", {
        value: e,
        enumerable: !0
    }) : o, e));
var h = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var D = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var G = new Set(h), L = (e)=>G.has(e), ce = h.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var ie = L("--dry-run"), g = ()=>L("--verbose") || D().VERBOSE === "true", le = g();
var y = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var k = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), P = (...e)=>y("\uD83D\uDD35 INFO", ...e), A = (...e)=>y("\uD83D\uDFE0 WARN", ...e), X = 0, u = (...e)=>g() && y(`\u{1F7E1} ${X++}`, ...e);
var c = {
    "isContentScript": false,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "page-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/vittoriorivabella/projects/lens-cross-post/lenshare/contents/relayers/getChallenge copy.ts",
    "bundleId": "c4a6bc3f3a33c81c",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 51794
};
module.bundle.HMR_BUNDLE_ID = c.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: c.verbose
    }
};
var z = module.bundle.Module;
function K(e) {
    z.call(this, e), this.hot = {
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
module.bundle.Module = K;
module.bundle.hotData = {};
var b = globalThis.chrome || globalThis.browser || null;
async function x(e = !1) {
    e && (u("Triggering full reload"), b.runtime.sendMessage({
        __plasmo_full_reload__: !0
    }));
}
function d() {
    return !c.host || c.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : c.host;
}
function f() {
    return c.port || location.port;
}
var i = {
    checkedAssets: {},
    assetsToDispose: [],
    assetsToAccept: []
}, T = ()=>{
    i.checkedAssets = {}, i.assetsToDispose = [], i.assetsToAccept = [];
};
function p(e, t) {
    let { modules: o  } = e;
    if (!o) return [];
    let r = [], s, n, a;
    for(s in o)for(n in o[s][1])a = o[s][1][n], (a === t || Array.isArray(a) && a[a.length - 1] === t) && r.push([
        e,
        s
    ]);
    return e.parent && (r = r.concat(p(e.parent, t))), r;
}
function E(e, t, o) {
    if (S(e, t, o)) return !0;
    let r = p(module.bundle.root, t), s = !1;
    for(; r.length > 0;){
        let [n, a] = r.shift();
        if (S(n, a, null)) s = !0;
        else {
            let m = p(module.bundle.root, a);
            if (m.length === 0) {
                s = !1;
                break;
            }
            r.push(...m);
        }
    }
    return s;
}
function S(e, t, o) {
    let { modules: r  } = e;
    if (!r) return !1;
    if (o && !o[e.HMR_BUNDLE_ID]) return e.parent ? E(e.parent, t, o) : !0;
    if (i.checkedAssets[t]) return !0;
    i.checkedAssets[t] = !0;
    let s = e.cache[t];
    return i.assetsToDispose.push([
        e,
        t
    ]), !s || s.hot && s.hot._acceptCallbacks.length ? (i.assetsToAccept.push([
        e,
        t
    ]), !0) : !1;
}
function Q(e) {
    if (e.type === "js" && typeof document < "u") return new Promise((t, o)=>{
        let r = document.createElement("script");
        r.src = `${e.url}?t=${Date.now()}`, e.outputFormat === "esmodule" && (r.type = "module"), r.addEventListener("load", ()=>t(r)), r.addEventListener("error", ()=>o(new Error(`Failed to download asset: ${e.id}`))), document.head?.appendChild(r);
    });
}
var H = !1;
try {
    (0, eval)('throw new Error("test"); //# sourceURL=test.js');
} catch (e) {
    H = e.stack.includes("test.js");
}
async function B(e) {
    global.parcelHotUpdate = Object.create(null), e.forEach((o)=>{
        o.url = b.runtime.getURL("/__plasmo_hmr_proxy__?url=" + encodeURIComponent(`${o.url}?t=${Date.now()}`));
    });
    let t = await Promise.all(H ? [] : e.map(Q));
    try {
        e.forEach(function(o) {
            C(module.bundle.root, o);
        });
    } finally{
        delete global.parcelHotUpdate, t && t.forEach((o)=>{
            o && document.head?.removeChild(o);
        });
    }
}
function Y(e) {
    let t = e.cloneNode();
    t.onload = function() {
        e.parentNode !== null && e.parentNode.removeChild(e);
    }, t.setAttribute("href", e.getAttribute("href").split("?")[0] + "?" + Date.now()), e.parentNode.insertBefore(t, e.nextSibling);
}
var R = null;
function Z() {
    R || (R = setTimeout(function() {
        let e = document.querySelectorAll('link[rel="stylesheet"]');
        for(var t = 0; t < e.length; t++){
            let o = e[t].getAttribute("href"), r = d(), s = r === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + f()).test(o) : o.indexOf(r + ":" + f());
            /^https?:\/\//i.test(o) && o.indexOf(location.origin) !== 0 && !s || Y(e[t]);
        }
        R = null;
    }, 47));
}
function C(e, t) {
    let { modules: o  } = e;
    if (o) {
        if (t.type === "css") Z();
        else if (t.type === "js") {
            let r = t.depsByBundle[e.HMR_BUNDLE_ID];
            if (r) {
                if (o[t.id]) {
                    let n = o[t.id][1];
                    for(let a in n)if (!r[a] || r[a] !== n[a]) {
                        let l = n[a];
                        p(module.bundle.root, l).length === 1 && v(module.bundle.root, l);
                    }
                }
                H && (0, eval)(t.output);
                let s = global.parcelHotUpdate[t.id];
                o[t.id] = [
                    s,
                    r
                ];
            } else e.parent && C(e.parent, t);
        }
    }
}
function v(e, t) {
    let o = e.modules;
    if (o) {
        if (o[t]) {
            let r = o[t][1], s = [];
            for(let n in r)p(module.bundle.root, r[n]).length === 1 && s.push(r[n]);
            delete o[t], delete e.cache[t], s.forEach((n)=>{
                v(module.bundle.root, n);
            });
        } else e.parent && v(e.parent, t);
    }
}
function _(e, t) {
    let o = e.cache[t];
    e.hotData[t] = {}, o && o.hot && (o.hot.data = e.hotData[t]), o && o.hot && o.hot._disposeCallbacks.length && o.hot._disposeCallbacks.forEach(function(r) {
        r(e.hotData[t]);
    }), delete e.cache[t];
}
function M(e, t) {
    e(t);
    let o = e.cache[t];
    if (o && o.hot && o.hot._acceptCallbacks.length) {
        let r = p(module.bundle.root, t);
        o.hot._acceptCallbacks.forEach(function(s) {
            let n = s(()=>r);
            n && n.length && (n.forEach(([a, l])=>{
                _(a, l);
            }), i.assetsToAccept.push.apply(i.assetsToAccept, n));
        });
    }
}
function ee(e = f()) {
    let t = d();
    return `${c.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function te(e) {
    typeof e.message == "string" && k("[plasmo/parcel-runtime]: " + e.message);
}
function O(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(ee());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let s of r.diagnostics.ansi){
            let n = s.codeframe || s.stack;
            A("[plasmo/parcel-runtime]: " + s.message + `
` + n + `

` + s.hints.join(`
`));
        }
    }), t.addEventListener("error", te), t.addEventListener("open", ()=>{
        P(`[plasmo/parcel-runtime]: Connected to HMR server for ${c.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        A(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${c.entryFilePath}`);
    }), t;
}
var $ = q(require("7a82a7afdde0fc66"));
async function j() {
    $.default.injectIntoGlobalHook(window), window.$RefreshReg$ = function() {}, window.$RefreshSig$ = function() {
        return function(e) {
            return e;
        };
    };
}
var U = module.bundle.parent;
(!U || !U.isParcelRequire) && O(async (e)=>{
    if (u("Page runtime - On HMR Update"), c.isReact) {
        T();
        let t = e.filter((r)=>r.envHash === c.envHash);
        if (t.some((r)=>r.type === "css" || r.type === "js" && E(module.bundle.root, r.id, r.depsByBundle))) try {
            await B(t);
            let r = {};
            for (let [n, a] of i.assetsToDispose)r[a] || (_(n, a), r[a] = !0);
            let s = {};
            for(let n = 0; n < i.assetsToAccept.length; n++){
                let [a, l] = i.assetsToAccept[n];
                s[l] || (M(a, l), s[l] = !0);
            }
        } catch (r) {
            c.verbose === "true" && (console.trace(r), alert(JSON.stringify(r))), await x(!0);
        }
    } else u("Page runtime - Reloading"), await x();
});
c.isReact && (u("Injecting react refresh"), j());

},{"7a82a7afdde0fc66":"6KnDW"}],"6KnDW":[function(require,module,exports) {
var oe = Object.create;
var H = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ue = Object.getOwnPropertyNames;
var se = Object.getPrototypeOf, le = Object.prototype.hasOwnProperty;
var z = (o, f)=>()=>(f || o((f = {
            exports: {}
        }).exports, f), f.exports), ce = (o, f)=>{
    for(var s in f)H(o, s, {
        get: f[s],
        enumerable: !0
    });
}, D = (o, f, s, y)=>{
    if (f && typeof f == "object" || typeof f == "function") for (let m of ue(f))!le.call(o, m) && m !== s && H(o, m, {
        get: ()=>f[m],
        enumerable: !(y = ae(f, m)) || y.enumerable
    });
    return o;
}, S = (o, f, s)=>(D(o, f, "default"), s && D(s, f, "default")), G = (o, f, s)=>(s = o != null ? oe(se(o)) : {}, D(f || !o || !o.__esModule ? H(s, "default", {
        value: o,
        enumerable: !0
    }) : s, o)), de = (o)=>D(H({}, "__esModule", {
        value: !0
    }), o);
var N = z((h)=>{
    "use strict";
    (function() {
        "use strict";
        var o = Symbol.for("react.forward_ref"), f = Symbol.for("react.memo"), s = typeof WeakMap == "function" ? WeakMap : Map, y = new Map, m = new s, b = new s, j = new s, E = [], C = new Map, O = new Map, p = new Set, _ = new Set, F = typeof WeakMap == "function" ? new WeakMap : null, T = !1;
        function B(e) {
            if (e.fullKey !== null) return e.fullKey;
            var r = e.ownKey, n;
            try {
                n = e.getCustomHooks();
            } catch (i) {
                return e.forceReset = !0, e.fullKey = r, r;
            }
            for(var t = 0; t < n.length; t++){
                var l = n[t];
                if (typeof l != "function") return e.forceReset = !0, e.fullKey = r, r;
                var d = b.get(l);
                if (d !== void 0) {
                    var a = B(d);
                    d.forceReset && (e.forceReset = !0), r += `
---
` + a;
                }
            }
            return e.fullKey = r, r;
        }
        function q(e, r) {
            var n = b.get(e), t = b.get(r);
            return n === void 0 && t === void 0 ? !0 : !(n === void 0 || t === void 0 || B(n) !== B(t) || t.forceReset);
        }
        function $(e) {
            return e.prototype && e.prototype.isReactComponent;
        }
        function k(e, r) {
            return $(e) || $(r) ? !1 : !!q(e, r);
        }
        function Y(e) {
            return j.get(e);
        }
        function Z(e) {
            var r = new Map;
            return e.forEach(function(n, t) {
                r.set(t, n);
            }), r;
        }
        function W(e) {
            var r = new Set;
            return e.forEach(function(n) {
                r.add(n);
            }), r;
        }
        function M(e, r) {
            try {
                return e[r];
            } catch (n) {
                return;
            }
        }
        function J() {
            if (E.length === 0 || T) return null;
            T = !0;
            try {
                var e = new Set, r = new Set, n = E;
                E = [], n.forEach(function(u) {
                    var c = u[0], v = u[1], R = c.current;
                    j.set(R, c), j.set(v, c), c.current = v, k(R, v) ? r.add(c) : e.add(c);
                });
                var t = {
                    updatedFamilies: r,
                    staleFamilies: e
                };
                C.forEach(function(u) {
                    u.setRefreshHandler(Y);
                });
                var l = !1, d = null, a = W(_), i = W(p), g = Z(O);
                if (a.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    if (_.has(u), F !== null && F.has(u)) {
                        var v = F.get(u);
                        try {
                            c.scheduleRoot(u, v);
                        } catch (R) {
                            l || (l = !0, d = R);
                        }
                    }
                }), i.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    p.has(u);
                    try {
                        c.scheduleRefresh(u, t);
                    } catch (v) {
                        l || (l = !0, d = v);
                    }
                }), l) throw d;
                return t;
            } finally{
                T = !1;
            }
        }
        function P(e, r) {
            if (e === null || typeof e != "function" && typeof e != "object" || m.has(e)) return;
            var n = y.get(r);
            if (n === void 0 ? (n = {
                current: e
            }, y.set(r, n)) : E.push([
                n,
                e
            ]), m.set(e, n), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    P(e.render, r + "$render");
                    break;
                case f:
                    P(e.type, r + "$type");
                    break;
            }
        }
        function K(e, r) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 ? arguments[3] : void 0;
            if (b.has(e) || b.set(e, {
                forceReset: n,
                ownKey: r,
                fullKey: null,
                getCustomHooks: t || function() {
                    return [];
                }
            }), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    K(e.render, r, n, t);
                    break;
                case f:
                    K(e.type, r, n, t);
                    break;
            }
        }
        function x(e) {
            var r = b.get(e);
            r !== void 0 && B(r);
        }
        function Q(e) {
            return y.get(e);
        }
        function X(e) {
            return m.get(e);
        }
        function ee(e) {
            var r = new Set;
            return p.forEach(function(n) {
                var t = O.get(n);
                if (t === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                var l = t.findHostInstancesForRefresh(n, e);
                l.forEach(function(d) {
                    r.add(d);
                });
            }), r;
        }
        function re(e) {
            var r = e.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (r === void 0) {
                var n = 0;
                e.__REACT_DEVTOOLS_GLOBAL_HOOK__ = r = {
                    renderers: new Map,
                    supportsFiber: !0,
                    inject: function(a) {
                        return n++;
                    },
                    onScheduleFiberRoot: function(a, i, g) {},
                    onCommitFiberRoot: function(a, i, g, u) {},
                    onCommitFiberUnmount: function() {}
                };
            }
            if (r.isDisabled) {
                console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
                return;
            }
            var t = r.inject;
            r.inject = function(a) {
                var i = t.apply(this, arguments);
                return typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a), i;
            }, r.renderers.forEach(function(a, i) {
                typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a);
            });
            var l = r.onCommitFiberRoot, d = r.onScheduleFiberRoot || function() {};
            r.onScheduleFiberRoot = function(a, i, g) {
                return T || (_.delete(i), F !== null && F.set(i, g)), d.apply(this, arguments);
            }, r.onCommitFiberRoot = function(a, i, g, u) {
                var c = C.get(a);
                if (c !== void 0) {
                    O.set(i, c);
                    var v = i.current, R = v.alternate;
                    if (R !== null) {
                        var L = R.memoizedState != null && R.memoizedState.element != null && p.has(i), A = v.memoizedState != null && v.memoizedState.element != null;
                        !L && A ? (p.add(i), _.delete(i)) : L && A || (L && !A ? (p.delete(i), u ? _.add(i) : O.delete(i)) : !L && !A && u && _.add(i));
                    } else p.add(i);
                }
                return l.apply(this, arguments);
            };
        }
        function ne() {
            return !1;
        }
        function te() {
            return p.size;
        }
        function fe() {
            var e, r, n = !1;
            return function(t, l, d, a) {
                if (typeof l == "string") return e || (e = t, r = typeof a == "function"), t != null && (typeof t == "function" || typeof t == "object") && K(t, l, d, a), t;
                !n && r && (n = !0, x(e));
            };
        }
        function ie(e) {
            switch(typeof e){
                case "function":
                    if (e.prototype != null) {
                        if (e.prototype.isReactComponent) return !0;
                        var r = Object.getOwnPropertyNames(e.prototype);
                        if (r.length > 1 || r[0] !== "constructor" || e.prototype.__proto__ !== Object.prototype) return !1;
                    }
                    var n = e.name || e.displayName;
                    return typeof n == "string" && /^[A-Z]/.test(n);
                case "object":
                    if (e != null) switch(M(e, "$$typeof")){
                        case o:
                        case f:
                            return !0;
                        default:
                            return !1;
                    }
                    return !1;
                default:
                    return !1;
            }
        }
        h._getMountedRootCount = te, h.collectCustomHooksForSignature = x, h.createSignatureFunctionForTransform = fe, h.findAffectedHostInstances = ee, h.getFamilyByID = Q, h.getFamilyByType = X, h.hasUnrecoverableErrors = ne, h.injectIntoGlobalHook = re, h.isLikelyComponentType = ie, h.performReactRefresh = J, h.register = P, h.setSignature = K;
    })();
});
var I = z((pe, V)=>{
    "use strict";
    V.exports = N();
});
var w = {};
ce(w, {
    default: ()=>he
});
module.exports = de(w);
var U = G(I());
S(w, G(I()), module.exports);
var he = U.default; /*! Bundled license information:

react-refresh/cjs/react-refresh-runtime.development.js:
  (**
   * @license React
   * react-refresh-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 

},{}],"cuD52":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _messaging = require("@plasmohq/messaging");
var _relay = require("@plasmohq/messaging/relay");
const config = {
    matches: [
        "<all_urls>"
    ]
};
(0, _relay.relay)({
    name: "getChallenge"
}, async (req)=>{
    console.log(req);
    return await (0, _messaging.sendToBackground)(req);
});

},{"@plasmohq/messaging":"2dsVW","@plasmohq/messaging/relay":"4zLDV","@parcel/transformer-js/src/esmodule-helpers.js":"1psKX"}],"2dsVW":[function(require,module,exports) {
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

},{}],"4zLDV":[function(require,module,exports) {
var o = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var y = Object.prototype.hasOwnProperty;
var l = (e, a)=>{
    for(var n in a)o(e, n, {
        get: a[n],
        enumerable: !0
    });
}, g = (e, a, n, s)=>{
    if (a && typeof a == "object" || typeof a == "function") for (let t of m(a))!y.call(e, t) && t !== n && o(e, t, {
        get: ()=>a[t],
        enumerable: !(s = i(a, t)) || s.enumerable
    });
    return e;
};
var c = (e)=>g(o({}, "__esModule", {
        value: !0
    }), e);
var u = {};
l(u, {
    relay: ()=>w,
    sendViaRelay: ()=>p
});
module.exports = c(u);
var d = (e, a)=>!a.__internal && e.source === globalThis.window && e.data.name === a.name && (a.relayId === void 0 || e.data.relayId === a.relayId);
var w = (e, a)=>{
    let n = async (s)=>{
        if (d(s, e) && !s.data.relayed) {
            let t = {
                name: e.name,
                relayId: e.relayId,
                body: s.data.body
            }, r = await a?.(t);
            window.postMessage({
                name: e.name,
                relayId: e.relayId,
                body: r,
                relayed: !0
            });
        }
    };
    return window.addEventListener("message", n), ()=>window.removeEventListener("message", n);
}, p = (e)=>new Promise((a, n)=>{
        window.addEventListener("message", (s)=>{
            d(s, e) && s.data.relayed && a(s.data.body);
        }), window.postMessage(e);
    });

},{}]},["4h9JA","cuD52"], "cuD52", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtBQUFDLFdBQVcsT0FBTyxHQUFDO0lBQUMsTUFBSyxFQUFFO0lBQUMsS0FBSTtRQUFDLFNBQVEsRUFBRSxPQUFPO0lBQUE7QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUM7UUFBQyxNQUFLLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDLEVBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBVSxDQUFDO1FBQUU7UUFBRSxTQUFRLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUFFO0lBQUMsR0FBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztBQUFBO0FBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFDO0FBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUM7QUFBRSxJQUFJLElBQUUsV0FBVyxNQUFNLElBQUUsV0FBVyxPQUFPLElBQUUsSUFBSTtBQUFDLGVBQWUsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFDO0lBQUMsS0FBSSxDQUFBLEVBQUUsMkJBQTBCLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUFDLHdCQUF1QixDQUFDO0lBQUMsRUFBRSxBQUFEO0FBQUU7QUFBQyxTQUFTLElBQUc7SUFBQyxPQUFNLENBQUMsRUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJLEtBQUcsWUFBVSxTQUFTLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBVSxJQUFFLFNBQVMsUUFBUSxHQUFDLFdBQVcsR0FBQyxFQUFFLElBQUk7QUFBQTtBQUFDLFNBQVMsSUFBRztJQUFDLE9BQU8sRUFBRSxJQUFJLElBQUUsU0FBUyxJQUFJO0FBQUE7QUFBQyxJQUFJLElBQUU7SUFBQyxlQUFjLENBQUM7SUFBRSxpQkFBZ0IsRUFBRTtJQUFDLGdCQUFlLEVBQUU7QUFBQSxHQUFFLElBQUUsSUFBSTtJQUFDLEVBQUUsYUFBYSxHQUFDLENBQUMsR0FBRSxFQUFFLGVBQWUsR0FBQyxFQUFFLEVBQUMsRUFBRSxjQUFjLEdBQUMsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFHLEVBQUMsU0FBUSxFQUFDLEVBQUMsR0FBQztJQUFFLElBQUcsQ0FBQyxHQUFFLE9BQU0sRUFBRTtJQUFDLElBQUksSUFBRSxFQUFFLEVBQUMsR0FBRSxHQUFFO0lBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEFBQUMsQ0FBQSxNQUFJLEtBQUcsTUFBTSxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUMsRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLElBQUksQ0FBQztRQUFDO1FBQUU7S0FBRSxDQUFDO0lBQUMsT0FBTyxFQUFFLE1BQU0sSUFBRyxDQUFBLElBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxHQUFFLEdBQUcsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxFQUFFLEdBQUUsR0FBRSxJQUFHLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxNQUFNLEdBQUMsR0FBRztRQUFDLElBQUcsQ0FBQyxHQUFFLEVBQUUsR0FBQyxFQUFFLEtBQUs7UUFBRyxJQUFHLEVBQUUsR0FBRSxHQUFFLElBQUksR0FBRSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFB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LENBQUMsRUFBRTtvQkFBQyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQzt3QkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7d0JBQUMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUMsR0FBRyxNQUFNLEtBQUcsS0FBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQztvQkFBRSxDQUFDO2dCQUFBLENBQUM7Z0JBQUEsS0FBRyxBQUFDLENBQUEsR0FBRSxJQUFJLEFBQUQsRUFBRyxFQUFFLE1BQU07Z0JBQUUsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFDO29CQUFDO29CQUFFO2lCQUFFO1lBQUEsT0FBTSxFQUFFLE1BQU0sSUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFDO1FBQUUsQ0FBQztJQUFBLENBQUM7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxJQUFFLEVBQUUsT0FBTztJQUFDLElBQUc7UUFBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUM7WUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsSUFBRSxFQUFFO1lBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sS0FBRyxLQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUEsSUFBRztnQkFBQyxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQztZQUFFLEVBQUU7UUFBQSxPQUFNLEVBQUUsTUFBTSxJQUFFLEVB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RSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsVUFBVSxHQUFDLENBQUMsR0FBRSxFQUFFLE9BQU8sR0FBQyxHQUFFLENBQUM7Z0JBQUMsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsSUFBSSxJQUFFLEVBQUU7b0JBQUcsRUFBRSxVQUFVLElBQUcsQ0FBQSxFQUFFLFVBQVUsR0FBQyxDQUFDLENBQUEsR0FBRyxLQUFHLENBQUM7O0FBRTN2QyxDQUFDLEdBQUMsQ0FBQztnQkFBQSxDQUFDO1lBQUE7WUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFDLEdBQUUsQ0FBQztRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUMsSUFBRyxJQUFFLEVBQUUsR0FBRyxDQUFDO1lBQUcsT0FBTyxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssSUFBRSxDQUFDLElBQUUsQ0FBRSxDQUFBLE1BQUksS0FBSyxLQUFHLE1BQUksS0FBSyxLQUFHLEVBQUUsT0FBSyxFQUFFLE1BQUksRUFBRSxVQUFVLEFBQUQsQ0FBRTtRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLE9BQU8sRUFBRSxTQUFTLElBQUUsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1FBQUE7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztZQUFDLE9BQU8sRUFBRSxNQUFJLEVBQUUsS0FBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRSxFQUFFO1FBQUE7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO1lBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQyxT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QUFBQztBQUFHLE9BQU8sT0FBTyxHQUFDLEVBQUU7QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsSUFBRSxFQUFFLE1BQU0sS0FBRyxXQUFXLE1BQU0sSUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUcsRUFBRSxJQUFJLElBQUcsQ0FBQSxFQUFFLE9BQU8sS0FBRyxLQUFLLEtBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFHLEVBQUUsT0FBTyxBQUFEO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRSxJQUFJO0lBQUMsSUFBSSxJQUFFLE9BQU0sSUFBRztRQUFDLElBQUcsRUFBRSxHQUFFLE1BQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFBQyxJQUFJLElBQUU7Z0JBQUMsTUFBSyxFQUFFLElBQUk7Z0JBQUMsU0FBUSxFQUFFLE9BQU87Z0JBQUMsTUFBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQUEsR0FBRSxJQUFFLE1BQU0sSUFBSTtZQUFHLE9BQU8sV0FBVyxDQUFDO2dCQUFDLE1BQUssRUFBRSxJQUFJO2dCQUFDLFNBQVEsRUFBRSxPQUFPO2dCQUFDLE1BQUs7Z0JBQUUsU0FBUSxDQUFDO1lBQUM7UUFBRSxDQUFDO0lBQUE7SUFBRSxPQUFPLE9BQU8sZ0JBQWdCLENBQUMsV0FBVSxJQUFHLElBQUksT0FBTyxtQkFBbUIsQ0FBQyxXQUFVLEVBQUU7QUFBQSxHQUFFLElBQUUsQ0FBQSxJQUFHLElBQUksUUFBUSxDQUFDLEdBQUUsSUFBSTtRQUFDLE9BQU8sZ0JBQWdCLENBQUMsV0FBVSxDQUFBLElBQUc7WUFBQyxFQUFFLEdBQUUsTUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQUMsSUFBRyxPQUFPLFdBQVcsQ0FBQyxFQUFFO0lBQUEiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4xNy40L25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTFiNjAxYjA2M2IyMGJhYjAuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1yZXNvbHZlckAwLjExLjIvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwiY29udGVudHMvcmVsYXllcnMvZ2V0Q2hhbGxlbmdlIGNvcHkudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjEuNl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOC4zX0BwYXJjZWwrY29yZUAyLjguMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErbWVzc2FnaW5nQDAuMS42X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL21lc3NhZ2luZy9kaXN0L3JlbGF5LmNqcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTj1PYmplY3QuY3JlYXRlO3ZhciB3PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgST1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBGPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBXPU9iamVjdC5nZXRQcm90b3R5cGVPZixWPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIEo9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBzIG9mIEYodCkpIVYuY2FsbChlLHMpJiZzIT09byYmdyhlLHMse2dldDooKT0+dFtzXSxlbnVtZXJhYmxlOiEocj1JKHQscykpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHE9KGUsdCxvKT0+KG89ZSE9bnVsbD9OKFcoZSkpOnt9LEoodHx8IWV8fCFlLl9fZXNNb2R1bGU/dyhvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgaD10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciBEPSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIEc9bmV3IFNldChoKSxMPWU9PkcuaGFzKGUpLGNlPWguZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgaWU9TChcIi0tZHJ5LXJ1blwiKSxnPSgpPT5MKFwiLS12ZXJib3NlXCIpfHxEKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGxlPWcoKTt2YXIgeT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFA9KC4uLmUpPT55KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PnkoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxYPTAsdT0oLi4uZSk9PmcoKSYmeShgXFx1ezFGN0UxfSAke1grK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvdml0dG9yaW9yaXZhYmVsbGEvcHJvamVjdHMvbGVucy1jcm9zcy1wb3N0L2xlbnNoYXJlL2NvbnRlbnRzL3JlbGF5ZXJzL2dldENoYWxsZW5nZSBjb3B5LnRzXCIsXCJidW5kbGVJZFwiOlwiYzRhNmJjM2YzYTMzYzgxY1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjUxNzk0fTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciB6PW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEsoZSl7ei5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1LO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYj1nbG9iYWxUaGlzLmNocm9tZXx8Z2xvYmFsVGhpcy5icm93c2VyfHxudWxsO2FzeW5jIGZ1bmN0aW9uIHgoZT0hMSl7ZSYmKHUoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGIucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKX1mdW5jdGlvbiBkKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sVD0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiBwKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxzLG4sYTtmb3IocyBpbiBvKWZvcihuIGluIG9bc11bMV0pYT1vW3NdWzFdW25dLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usc10pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQocChlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gRShlLHQsbyl7aWYoUyhlLHQsbykpcmV0dXJuITA7bGV0IHI9cChtb2R1bGUuYnVuZGxlLnJvb3QsdCkscz0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbbixhXT1yLnNoaWZ0KCk7aWYoUyhuLGEsbnVsbCkpcz0hMDtlbHNle2xldCBtPXAobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKG0ubGVuZ3RoPT09MCl7cz0hMTticmVha31yLnB1c2goLi4ubSl9fXJldHVybiBzfWZ1bmN0aW9uIFMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/RShlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IHM9ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIXN8fHMuaG90JiZzLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gUShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX12YXIgSD0hMTt0cnl7KDAsZXZhbCkoJ3Rocm93IG5ldyBFcnJvcihcInRlc3RcIik7IC8vIyBzb3VyY2VVUkw9dGVzdC5qcycpfWNhdGNoKGUpe0g9ZS5zdGFjay5pbmNsdWRlcyhcInRlc3QuanNcIil9YXN5bmMgZnVuY3Rpb24gQihlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1iLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKEg/W106ZS5tYXAoUSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7Qyhtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gWShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgUj1udWxsO2Z1bmN0aW9uIFooKXtSfHwoUj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPWQoKSxzPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIXN8fFkoZVt0XSl9Uj1udWxsfSw0NykpfWZ1bmN0aW9uIEMoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpWigpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBuPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIG4paWYoIXJbYV18fHJbYV0hPT1uW2FdKXtsZXQgbD1uW2FdO3AobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJnYobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1IJiYoMCxldmFsKSh0Lm91dHB1dCk7bGV0IHM9Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtzLHJdfWVsc2UgZS5wYXJlbnQmJkMoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxzPVtdO2ZvcihsZXQgbiBpbiByKXAobW9kdWxlLmJ1bmRsZS5yb290LHJbbl0pLmxlbmd0aD09PTEmJnMucHVzaChyW25dKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxzLmZvckVhY2gobj0+e3YobW9kdWxlLmJ1bmRsZS5yb290LG4pfSl9ZWxzZSBlLnBhcmVudCYmdihlLnBhcmVudCx0KX1mdW5jdGlvbiBfKGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBNKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9cChtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHMpe2xldCBuPXMoKCk9PnIpO24mJm4ubGVuZ3RoJiYobi5mb3JFYWNoKChbYSxsXSk9PntfKGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxuKSl9KX19ZnVuY3Rpb24gZWUoZT1mKCkpe2xldCB0PWQoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiB0ZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTyhlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoZWUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgcyBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBuPXMuY29kZWZyYW1lfHxzLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrcy5tZXNzYWdlK2BcbmArbitgXG5cbmArcy5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHRlKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntQKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciAkPXEocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gaigpeyQuZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgVT1tb2R1bGUuYnVuZGxlLnBhcmVudDsoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSkmJk8oYXN5bmMgZT0+e2lmKHUoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7VCgpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmRShtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBCKHQpO2xldCByPXt9O2ZvcihsZXRbbixhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fChfKG4sYSksclthXT0hMCk7bGV0IHM9e307Zm9yKGxldCBuPTA7bjxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtuKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbbl07c1tsXXx8KE0oYSxsKSxzW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgeCghMCl9fWVsc2UgdShcIlBhZ2UgcnVudGltZSAtIFJlbG9hZGluZ1wiKSxhd2FpdCB4KCl9KTtjLmlzUmVhY3QmJih1KFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksaigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1gXG4tLS1cbmArYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsImltcG9ydCB0eXBlIHsgUGxhc21vQ1NDb25maWcgfSBmcm9tIFwicGxhc21vXCJcblxuaW1wb3J0IHsgcmVsYXlNZXNzYWdlLCBzZW5kVG9CYWNrZ3JvdW5kIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuaW1wb3J0IHsgcmVsYXkgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZy9yZWxheVwiXG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFBsYXNtb0NTQ29uZmlnID0ge1xuICBtYXRjaGVzOiBbXCI8YWxsX3VybHM+XCJdXG59XG5yZWxheShcbiAge1xuICAgIG5hbWU6IFwiZ2V0Q2hhbGxlbmdlXCIgYXMgY29uc3RcbiAgfSxcbiAgYXN5bmMgKHJlcSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcSlcbiAgICByZXR1cm4gYXdhaXQgc2VuZFRvQmFja2dyb3VuZChyZXEpXG4gIH1cbilcbiIsInZhciBuPWFzeW5jKCk9PntsZXRbZV09YXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTohMCxjdXJyZW50V2luZG93OiEwfSk7cmV0dXJuIGV9LG89KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIHI9KGUsYSk9PntsZXQgdD1hc3luYyBzPT57aWYobyhzLGUpJiYhcy5kYXRhLnJlbGF5ZWQpe2xldCBkPXtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5OnMuZGF0YS5ib2R5fSxtPWF3YWl0IGE/LihkKTt3aW5kb3cucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6bSxyZWxheWVkOiEwfSl9fTtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdCksKCk9PndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpfSxpPWU9Pm5ldyBQcm9taXNlKChhLHQpPT57d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscz0+e28ocyxlKSYmcy5kYXRhLnJlbGF5ZWQmJmEocy5kYXRhLmJvZHkpfSksd2luZG93LnBvc3RNZXNzYWdlKGUpfSk7dmFyIGc9YXN5bmMgZT0+e2lmKCFjaHJvbWU/LnJ1bnRpbWUpdGhyb3cgbmV3IEVycm9yKFwiY2hyb21lLnJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoZSl9LGw9YXN5bmMgZT0+e2lmKCFjaHJvbWU/LnRhYnMpdGhyb3cgbmV3IEVycm9yKFwiY2hyb21lLnRhYnMgaXMgbm90IGF2YWlsYWJsZVwiKTtsZXQgYT10eXBlb2YgZS50YWJJZD09XCJudW1iZXJcIj9lLnRhYklkOihhd2FpdCBuKCkpLmlkO3JldHVybiBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShhLGUpfSxiPWwseT1lPT5yKGUsZyksUD15LGM9aSxmPWM7ZXhwb3J0e1AgYXMgcmVsYXkseSBhcyByZWxheU1lc3NhZ2UsYiBhcyBzZW5kVG9BY3RpdmVDb250ZW50U2NyaXB0LGcgYXMgc2VuZFRvQmFja2dyb3VuZCxjIGFzIHNlbmRUb0JhY2tncm91bmRWaWFSZWxheSxsIGFzIHNlbmRUb0NvbnRlbnRTY3JpcHQsZiBhcyBzZW5kVmlhUmVsYXl9O1xuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwidmFyIG89T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIG09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHk9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgbD0oZSxhKT0+e2Zvcih2YXIgbiBpbiBhKW8oZSxuLHtnZXQ6YVtuXSxlbnVtZXJhYmxlOiEwfSl9LGc9KGUsYSxuLHMpPT57aWYoYSYmdHlwZW9mIGE9PVwib2JqZWN0XCJ8fHR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpZm9yKGxldCB0IG9mIG0oYSkpIXkuY2FsbChlLHQpJiZ0IT09biYmbyhlLHQse2dldDooKT0+YVt0XSxlbnVtZXJhYmxlOiEocz1pKGEsdCkpfHxzLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIGM9ZT0+ZyhvKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUpO3ZhciB1PXt9O2wodSx7cmVsYXk6KCk9Pncsc2VuZFZpYVJlbGF5OigpPT5wfSk7bW9kdWxlLmV4cG9ydHM9Yyh1KTt2YXIgZD0oZSxhKT0+IWEuX19pbnRlcm5hbCYmZS5zb3VyY2U9PT1nbG9iYWxUaGlzLndpbmRvdyYmZS5kYXRhLm5hbWU9PT1hLm5hbWUmJihhLnJlbGF5SWQ9PT12b2lkIDB8fGUuZGF0YS5yZWxheUlkPT09YS5yZWxheUlkKTt2YXIgdz0oZSxhKT0+e2xldCBuPWFzeW5jIHM9PntpZihkKHMsZSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IHQ9e25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LHI9YXdhaXQgYT8uKHQpO3dpbmRvdy5wb3N0TWVzc2FnZSh7bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTpyLHJlbGF5ZWQ6ITB9KX19O3JldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixuKSwoKT0+d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbil9LHA9ZT0+bmV3IFByb21pc2UoKGEsbik9Pnt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixzPT57ZChzLGUpJiZzLmRhdGEucmVsYXllZCYmYShzLmRhdGEuYm9keSl9KSx3aW5kb3cucG9zdE1lc3NhZ2UoZSl9KTswJiYobW9kdWxlLmV4cG9ydHM9e3JlbGF5LHNlbmRWaWFSZWxheX0pO1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImdldENoYWxsZW5nZSBjb3B5LjNhMzNjODFjLmpzLm1hcCJ9
