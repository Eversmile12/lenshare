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
})({"l8Ili":[function(require,module,exports) {
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
    "port": 64690,
    "entryFilePath": "/Users/vittoriorivabella/projects/lenshare/contents/relayers/verifyAuthToken.ts",
    "bundleId": "a1fbc9caf3f90f36",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 64689
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
var $ = q(require("16ba5ff0ac984fa6"));
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

},{"16ba5ff0ac984fa6":"6KnDW"}],"6KnDW":[function(require,module,exports) {
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

},{}],"ElH30":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
parcelHelpers.export(exports, "relayer", ()=>relayer);
var _messaging = require("@plasmohq/messaging");
var _relay = require("@plasmohq/messaging/relay");
const config = {
    matches: [
        "<all_urls>"
    ]
};
const relayer = (0, _relay.relay)({
    name: "verifyAuthToken"
}, async (req)=>{
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

},{}]},["l8Ili","ElH30"], "ElH30", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtBQUFDLFdBQVcsT0FBTyxHQUFDO0lBQUMsTUFBSyxFQUFFO0lBQUMsS0FBSTtRQUFDLFNBQVEsRUFBRSxPQUFPO0lBQUE7QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUM7UUFBQyxNQUFLLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDLEVBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBVSxDQUFDO1FBQUU7UUFBRSxTQUFRLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUFFO0lBQUMsR0FBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztBQUFBO0FBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFDO0FBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUM7QUFBRSxJQUFJLElBQUUsV0FBVyxNQUFNLElBQUUsV0FBVyxPQUFPLElBQUUsSUFBSTtBQUFDLGVBQWUsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFDO0lBQUMsS0FBSSxDQUFBLEVBQUUsMkJBQTBCLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUFDLHdCQUF1QixDQUFDO0lBQUMsRUFBRSxBQUFEO0FBQUU7QUFBQyxTQUFTLElBQUc7SUFBQyxPQUFNLENBQUMsRUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJLEtBQUcsWUFBVSxTQUFTLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBVSxJQUFFLFNBQVMsUUFBUSxHQUFDLFdBQVcsR0FBQyxFQUFFLElBQUk7QUFBQTtBQUFDLFNBQVMsSUFBRztJQUFDLE9BQU8sRUFBRSxJQUFJLElBQUUsU0FBUyxJQUFJO0FBQUE7QUFBQyxJQUFJLElBQUU7SUFBQyxlQUFjLENBQUM7SUFBRSxpQkFBZ0IsRUFBRTtJQUFDLGdCQUFlLEVBQUU7QUFBQSxHQUFFLElBQUUsSUFBSTtJQUFDLEVBQUUsYUFBYSxHQUFDLENBQUMsR0FBRSxFQUFFLGVBQWUsR0FBQyxFQUFFLEVBQUMsRUFBRSxjQUFjLEdBQUMsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFHLEVBQUMsU0FBUSxFQUFDLEVBQUMsR0FBQztJQUFFLElBQUcsQ0FBQyxHQUFFLE9BQU0sRUFBRTtJQUFDLElBQUksSUFBRSxFQUFFLEVBQUMsR0FBRSxHQUFFO0lBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEFBQUMsQ0FBQSxNQUFJLEtBQUcsTUFBTSxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUMsRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLElBQUksQ0FBQztRQUFDO1FBQUU7S0FBRSxDQUFDO0lBQUMsT0FBTyxFQUFFLE1BQU0sSUFBRyxDQUFBLElBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxHQUFFLEdBQUcsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxFQUFFLEdBQUUsR0FBRSxJQUFHLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxNQUFNLEdBQUMsR0FBRztRQUFDLElBQUcsQ0FBQyxHQUFFLEVBQUUsR0FBQyxFQUFFLEtBQUs7UUFBRyxJQUFHLEVBQUUsR0FBRSxHQUFFLElBQUksR0FBRSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFB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LENBQUMsRUFBRTtvQkFBQyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQzt3QkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7d0JBQUMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUMsR0FBRyxNQUFNLEtBQUcsS0FBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQztvQkFBRSxDQUFDO2dCQUFBLENBQUM7Z0JBQUEsS0FBRyxBQUFDLENBQUEsR0FBRSxJQUFJLEFBQUQsRUFBRyxFQUFFLE1BQU07Z0JBQUUsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFDO29CQUFDO29CQUFFO2lCQUFFO1lBQUEsT0FBTSxFQUFFLE1BQU0sSUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFDO1FBQUUsQ0FBQztJQUFBLENBQUM7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxJQUFFLEVBQUUsT0FBTztJQUFDLElBQUc7UUFBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUM7WUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsSUFBRSxFQUFFO1lBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sS0FBRyxLQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUEsSUFBRztnQkFBQyxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQztZQUFFLEVBQUU7UUFBQSxPQUFNLEVBQUUsTUFBTSxJQUFFLEVB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RSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsVUFBVSxHQUFDLENBQUMsR0FBRSxFQUFFLE9BQU8sR0FBQyxHQUFFLENBQUM7Z0JBQUMsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsSUFBSSxJQUFFLEVBQUU7b0JBQUcsRUFBRSxVQUFVLElBQUcsQ0FBQSxFQUFFLFVBQVUsR0FBQyxDQUFDLENBQUEsR0FBRyxLQUFHLENBQUM7O0FBRTN2QyxDQUFDLEdBQUMsQ0FBQztnQkFBQSxDQUFDO1lBQUE7WUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFDLEdBQUUsQ0FBQztRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUMsSUFBRyxJQUFFLEVBQUUsR0FBRyxDQUFDO1lBQUcsT0FBTyxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssSUFBRSxDQUFDLElBQUUsQ0FBRSxDQUFBLE1BQUksS0FBSyxLQUFHLE1BQUksS0FBSyxLQUFHLEVBQUUsT0FBSyxFQUFFLE1BQUksRUFBRSxVQUFVLEFBQUQsQ0FBRTtRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLE9BQU8sRUFBRSxTQUFTLElBQUUsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1FBQUE7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztZQUFDLE9BQU8sRUFBRSxNQUFJLEVBQUUsS0FBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRSxFQUFFO1FBQUE7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO1lBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQyxT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QztBQUFHLE9BQU8sT0FBTyxHQUFDLEVBQUU7QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsSUFBRSxFQUFFLE1BQU0sS0FBRyxXQUFXLE1BQU0sSUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUcsRUFBRSxJQUFJLElBQUcsQ0FBQSxFQUFFLE9BQU8sS0FBRyxLQUFLLEtBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFHLEVBQUUsT0FBTyxBQUFEO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRSxJQUFJO0lBQUMsSUFBSSxJQUFFLE9BQU0sSUFBRztRQUFDLElBQUcsRUFBRSxHQUFFLE1BQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFBQyxJQUFJLElBQUU7Z0JBQUMsTUFBSyxFQUFFLElBQUk7Z0JBQUMsU0FBUSxFQUFFLE9BQU87Z0JBQUMsTUFBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQUEsR0FBRSxJQUFFLE1BQU0sSUFBSTtZQUFHLE9BQU8sV0FBVyxDQUFDO2dCQUFDLE1BQUssRUFBRSxJQUFJO2dCQUFDLFNBQVEsRUFBRSxPQUFPO2dCQUFDLE1BQUs7Z0JBQUUsU0FBUSxDQUFDO1lBQUM7UUFBRSxDQUFDO0lBQUE7SUFBRSxPQUFPLE9BQU8sZ0JBQWdCLENBQUMsV0FBVSxJQUFHLElBQUksT0FBTyxtQkFBbUIsQ0FBQyxXQUFVLEVBQUU7QUFBQSxHQUFFLElBQUUsQ0FBQSxJQUFHLElBQUksUUFBUSxDQUFDLEdBQUUsSUFBSTtRQUFDLE9BQU8sZ0JBQWdCLENBQUMsV0FBVSxDQUFBLElBQUc7WUFBQyxFQUFFLEdBQUUsTUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQUMsSUFBRyxPQUFPLFdBQVcsQ0FBQyxFQUFFO0lBQUEiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4xNy40L25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTQxMWE3NzRkNTM1Y2I1NmMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1yZXNvbHZlckAwLjExLjIvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwiY29udGVudHMvcmVsYXllcnMvdmVyaWZ5QXV0aFRva2VuLnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocSttZXNzYWdpbmdAMC4xLjZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi44LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjEuNl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9yZWxheS5janMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE49T2JqZWN0LmNyZWF0ZTt2YXIgdz1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIEk9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgVz1PYmplY3QuZ2V0UHJvdG90eXBlT2YsVj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBKPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgcyBvZiBGKHQpKSFWLmNhbGwoZSxzKSYmcyE9PW8mJncoZSxzLHtnZXQ6KCk9PnRbc10sZW51bWVyYWJsZTohKHI9SSh0LHMpKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciBxPShlLHQsbyk9PihvPWUhPW51bGw/TihXKGUpKTp7fSxKKHR8fCFlfHwhZS5fX2VzTW9kdWxlP3cobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIGg9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgRD0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBHPW5ldyBTZXQoaCksTD1lPT5HLmhhcyhlKSxjZT1oLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGllPUwoXCItLWRyeS1ydW5cIiksZz0oKT0+TChcIi0tdmVyYm9zZVwiKXx8RCgpLlZFUkJPU0U9PT1cInRydWVcIixsZT1nKCk7dmFyIHk9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxQPSguLi5lKT0+eShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT55KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksWD0wLHU9KC4uLmUpPT5nKCkmJnkoYFxcdXsxRjdFMX0gJHtYKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjo2NDY5MCxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy92aXR0b3Jpb3JpdmFiZWxsYS9wcm9qZWN0cy9sZW5zaGFyZS9jb250ZW50cy9yZWxheWVycy92ZXJpZnlBdXRoVG9rZW4udHNcIixcImJ1bmRsZUlkXCI6XCJhMWZiYzljYWYzZjkwZjM2XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NjQ2ODl9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIHo9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSyhlKXt6LmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUs7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBiPWdsb2JhbFRoaXMuY2hyb21lfHxnbG9iYWxUaGlzLmJyb3dzZXJ8fG51bGw7YXN5bmMgZnVuY3Rpb24geChlPSExKXtlJiYodShcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksYi5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpfWZ1bmN0aW9uIGQoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxUPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHAoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLHMsbixhO2ZvcihzIGluIG8pZm9yKG4gaW4gb1tzXVsxXSlhPW9bc11bMV1bbl0sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxzXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdChwKGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBFKGUsdCxvKXtpZihTKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj1wKG1vZHVsZS5idW5kbGUucm9vdCx0KSxzPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtuLGFdPXIuc2hpZnQoKTtpZihTKG4sYSxudWxsKSlzPSEwO2Vsc2V7bGV0IG09cChtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYobS5sZW5ndGg9PT0wKXtzPSExO2JyZWFrfXIucHVzaCguLi5tKX19cmV0dXJuIHN9ZnVuY3Rpb24gUyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9FKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgcz1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhc3x8cy5ob3QmJnMuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBRKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfXZhciBIPSExO3RyeXsoMCxldmFsKSgndGhyb3cgbmV3IEVycm9yKFwidGVzdFwiKTsgLy8jIHNvdXJjZVVSTD10ZXN0LmpzJyl9Y2F0Y2goZSl7SD1lLnN0YWNrLmluY2x1ZGVzKFwidGVzdC5qc1wiKX1hc3luYyBmdW5jdGlvbiBCKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWIucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoSD9bXTplLm1hcChRKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXtDKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiBZKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBSPW51bGw7ZnVuY3Rpb24gWigpe1J8fChSPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9ZCgpLHM9cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhc3x8WShlW3RdKX1SPW51bGx9LDQ3KSl9ZnVuY3Rpb24gQyhlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilaKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IG49b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gbilpZighclthXXx8clthXSE9PW5bYV0pe2xldCBsPW5bYV07cChtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmdihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fUgmJigwLGV2YWwpKHQub3V0cHV0KTtsZXQgcz1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W3Mscl19ZWxzZSBlLnBhcmVudCYmQyhlLnBhcmVudCx0KX19fWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLHM9W107Zm9yKGxldCBuIGluIHIpcChtb2R1bGUuYnVuZGxlLnJvb3QscltuXSkubGVuZ3RoPT09MSYmcy5wdXNoKHJbbl0pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLHMuZm9yRWFjaChuPT57dihtb2R1bGUuYnVuZGxlLnJvb3Qsbil9KX1lbHNlIGUucGFyZW50JiZ2KGUucGFyZW50LHQpfWZ1bmN0aW9uIF8oZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIE0oZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj1wKG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocyl7bGV0IG49cygoKT0+cik7biYmbi5sZW5ndGgmJihuLmZvckVhY2goKFthLGxdKT0+e18oYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LG4pKX0pfX1mdW5jdGlvbiBlZShlPWYoKSl7bGV0IHQ9ZCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIHRlKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBPKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChlZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBzIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IG49cy5jb2RlZnJhbWV8fHMuc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitzLm1lc3NhZ2UrYFxuYCtuK2BcblxuYCtzLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsdGUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1AoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyICQ9cShyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBqKCl7JC5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBVPW1vZHVsZS5idW5kbGUucGFyZW50OyghVXx8IVUuaXNQYXJjZWxSZXF1aXJlKSYmTyhhc3luYyBlPT57aWYodShcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtUKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZFKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IEIodCk7bGV0IHI9e307Zm9yKGxldFtuLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KF8obixhKSxyW2FdPSEwKTtsZXQgcz17fTtmb3IobGV0IG49MDtuPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO24rKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtuXTtzW2xdfHwoTShhLGwpLHNbbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCB4KCEwKX19ZWxzZSB1KFwiUGFnZSBydW50aW1lIC0gUmVsb2FkaW5nXCIpLGF3YWl0IHgoKX0pO2MuaXNSZWFjdCYmKHUoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxqKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPWBcbi0tLVxuYCthfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9DU0NvbmZpZyB9IGZyb20gXCJwbGFzbW9cIlxuXG5pbXBvcnQgeyByZWxheU1lc3NhZ2UsIHNlbmRUb0JhY2tncm91bmQgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5pbXBvcnQgeyByZWxheSB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nL3JlbGF5XCJcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ1NDb25maWcgPSB7XG4gIG1hdGNoZXM6IFtcIjxhbGxfdXJscz5cIl1cbn1cbmV4cG9ydCBjb25zdCByZWxheWVyID0gIHJlbGF5KFxuICB7XG4gICAgbmFtZTogXCJ2ZXJpZnlBdXRoVG9rZW5cIiBhcyBjb25zdFxuICB9LFxuICBhc3luYyAocmVxKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHNlbmRUb0JhY2tncm91bmQocmVxKVxuICB9XG4pXG4iLCJ2YXIgbj1hc3luYygpPT57bGV0W2VdPWF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6ITAsY3VycmVudFdpbmRvdzohMH0pO3JldHVybiBlfSxvPShlLGEpPT4hYS5fX2ludGVybmFsJiZlLnNvdXJjZT09PWdsb2JhbFRoaXMud2luZG93JiZlLmRhdGEubmFtZT09PWEubmFtZSYmKGEucmVsYXlJZD09PXZvaWQgMHx8ZS5kYXRhLnJlbGF5SWQ9PT1hLnJlbGF5SWQpO3ZhciByPShlLGEpPT57bGV0IHQ9YXN5bmMgcz0+e2lmKG8ocyxlKSYmIXMuZGF0YS5yZWxheWVkKXtsZXQgZD17bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTpzLmRhdGEuYm9keX0sbT1hd2FpdCBhPy4oZCk7d2luZG93LnBvc3RNZXNzYWdlKHtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5Om0scmVsYXllZDohMH0pfX07cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpLCgpPT53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KX0saT1lPT5uZXcgUHJvbWlzZSgoYSx0KT0+e3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHM9PntvKHMsZSkmJnMuZGF0YS5yZWxheWVkJiZhKHMuZGF0YS5ib2R5KX0pLHdpbmRvdy5wb3N0TWVzc2FnZShlKX0pO3ZhciBnPWFzeW5jIGU9PntpZighY2hyb21lPy5ydW50aW1lKXRocm93IG5ldyBFcnJvcihcImNocm9tZS5ydW50aW1lIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGUpfSxsPWFzeW5jIGU9PntpZighY2hyb21lPy50YWJzKXRocm93IG5ldyBFcnJvcihcImNocm9tZS50YWJzIGlzIG5vdCBhdmFpbGFibGVcIik7bGV0IGE9dHlwZW9mIGUudGFiSWQ9PVwibnVtYmVyXCI/ZS50YWJJZDooYXdhaXQgbigpKS5pZDtyZXR1cm4gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoYSxlKX0sYj1sLHk9ZT0+cihlLGcpLFA9eSxjPWksZj1jO2V4cG9ydHtQIGFzIHJlbGF5LHkgYXMgcmVsYXlNZXNzYWdlLGIgYXMgc2VuZFRvQWN0aXZlQ29udGVudFNjcmlwdCxnIGFzIHNlbmRUb0JhY2tncm91bmQsYyBhcyBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXksbCBhcyBzZW5kVG9Db250ZW50U2NyaXB0LGYgYXMgc2VuZFZpYVJlbGF5fTtcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsInZhciBvPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBtPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciB5PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGw9KGUsYSk9Pntmb3IodmFyIG4gaW4gYSlvKGUsbix7Z2V0OmFbbl0sZW51bWVyYWJsZTohMH0pfSxnPShlLGEsbixzKT0+e2lmKGEmJnR5cGVvZiBhPT1cIm9iamVjdFwifHx0eXBlb2YgYT09XCJmdW5jdGlvblwiKWZvcihsZXQgdCBvZiBtKGEpKSF5LmNhbGwoZSx0KSYmdCE9PW4mJm8oZSx0LHtnZXQ6KCk9PmFbdF0sZW51bWVyYWJsZTohKHM9aShhLHQpKXx8cy5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciBjPWU9Pmcobyh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlKTt2YXIgdT17fTtsKHUse3JlbGF5OigpPT53LHNlbmRWaWFSZWxheTooKT0+cH0pO21vZHVsZS5leHBvcnRzPWModSk7dmFyIGQ9KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIHc9KGUsYSk9PntsZXQgbj1hc3luYyBzPT57aWYoZChzLGUpJiYhcy5kYXRhLnJlbGF5ZWQpe2xldCB0PXtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5OnMuZGF0YS5ib2R5fSxyPWF3YWl0IGE/Lih0KTt3aW5kb3cucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cixyZWxheWVkOiEwfSl9fTtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbiksKCk9PndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4pfSxwPWU9Pm5ldyBQcm9taXNlKChhLG4pPT57d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscz0+e2QocyxlKSYmcy5kYXRhLnJlbGF5ZWQmJmEocy5kYXRhLmJvZHkpfSksd2luZG93LnBvc3RNZXNzYWdlKGUpfSk7MCYmKG1vZHVsZS5leHBvcnRzPXtyZWxheSxzZW5kVmlhUmVsYXl9KTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJ2ZXJpZnlBdXRoVG9rZW4uZjNmOTBmMzYuanMubWFwIn0=
