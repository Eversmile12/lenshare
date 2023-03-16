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
})({"90Udn":[function(require,module,exports) {
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
    "entryFilePath": "/Users/vittoriorivabella/projects/lens-cross-post/lenshare/contents/relayers/verifyAuthToken.ts",
    "bundleId": "a1fbc9caf3f90f36",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 55713
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
var $ = q(require("791dbb2b60d73c31"));
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

},{"791dbb2b60d73c31":"6KnDW"}],"6KnDW":[function(require,module,exports) {
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

},{}]},["90Udn","ElH30"], "ElH30", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtBQUFDLFdBQVcsT0FBTyxHQUFDO0lBQUMsTUFBSyxFQUFFO0lBQUMsS0FBSTtRQUFDLFNBQVEsRUFBRSxPQUFPO0lBQUE7QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUM7UUFBQyxNQUFLLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDLEVBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBVSxDQUFDO1FBQUU7UUFBRSxTQUFRLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUFFO0lBQUMsR0FBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztBQUFBO0FBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFDO0FBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUM7QUFBRSxJQUFJLElBQUUsV0FBVyxNQUFNLElBQUUsV0FBVyxPQUFPLElBQUUsSUFBSTtBQUFDLGVBQWUsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFDO0lBQUMsS0FBSSxDQUFBLEVBQUUsMkJBQTBCLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUFDLHdCQUF1QixDQUFDO0lBQUMsRUFBRSxBQUFEO0FBQUU7QUFBQyxTQUFTLElBQUc7SUFBQyxPQUFNLENBQUMsRUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJLEtBQUcsWUFBVSxTQUFTLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBVSxJQUFFLFNBQVMsUUFBUSxHQUFDLFdBQVcsR0FBQyxFQUFFLElBQUk7QUFBQTtBQUFDLFNBQVMsSUFBRztJQUFDLE9BQU8sRUFBRSxJQUFJLElBQUUsU0FBUyxJQUFJO0FBQUE7QUFBQyxJQUFJLElBQUU7SUFBQyxlQUFjLENBQUM7SUFBRSxpQkFBZ0IsRUFBRTtJQUFDLGdCQUFlLEVBQUU7QUFBQSxHQUFFLElBQUUsSUFBSTtJQUFDLEVBQUUsYUFBYSxHQUFDLENBQUMsR0FBRSxFQUFFLGVBQWUsR0FBQyxFQUFFLEVBQUMsRUFBRSxjQUFjLEdBQUMsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFHLEVBQUMsU0FBUSxFQUFDLEVBQUMsR0FBQztJQUFFLElBQUcsQ0FBQyxHQUFFLE9BQU0sRUFBRTtJQUFDLElBQUksSUFBRSxFQUFFLEVBQUMsR0FBRSxHQUFFO0lBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEFBQUMsQ0FBQSxNQUFJLEtBQUcsTUFBTSxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUMsRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLElBQUksQ0FBQztRQUFDO1FBQUU7S0FBRSxDQUFDO0lBQUMsT0FBTyxFQUFFLE1BQU0sSUFBRyxDQUFBLElBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxHQUFFLEdBQUcsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxFQUFFLEdBQUUsR0FBRSxJQUFHLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxNQUFNLEdBQUMsR0FBRztRQUFDLElBQUcsQ0FBQyxHQUFFLEVBQUUsR0FBQyxFQUFFLEtBQUs7UUFBRyxJQUFHLEVBQUUsR0FBRSxHQUFFLElBQUksR0FBRSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFB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LENBQUMsRUFBRTtvQkFBQyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQzt3QkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7d0JBQUMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUMsR0FBRyxNQUFNLEtBQUcsS0FBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQztvQkFBRSxDQUFDO2dCQUFBLENBQUM7Z0JBQUEsS0FBRyxBQUFDLENBQUEsR0FBRSxJQUFJLEFBQUQsRUFBRyxFQUFFLE1BQU07Z0JBQUUsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFDO29CQUFDO29CQUFFO2lCQUFFO1lBQUEsT0FBTSxFQUFFLE1BQU0sSUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFDO1FBQUUsQ0FBQztJQUFBLENBQUM7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxJQUFFLEVBQUUsT0FBTztJQUFDLElBQUc7UUFBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUM7WUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsSUFBRSxFQUFFO1lBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sS0FBRyxLQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUEsSUFBRztnQkFBQyxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBQztZQUFFLEVBQUU7UUFBQSxPQUFNLEVBQUUsTUFBTSxJQUFFLEVB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RSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsVUFBVSxHQUFDLENBQUMsR0FBRSxFQUFFLE9BQU8sR0FBQyxHQUFFLENBQUM7Z0JBQUMsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsSUFBSSxJQUFFLEVBQUU7b0JBQUcsRUFBRSxVQUFVLElBQUcsQ0FBQSxFQUFFLFVBQVUsR0FBQyxDQUFDLENBQUEsR0FBRyxLQUFHLENBQUM7O0FBRTN2QyxDQUFDLEdBQUMsQ0FBQztnQkFBQSxDQUFDO1lBQUE7WUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFDLEdBQUUsQ0FBQztRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUMsSUFBRyxJQUFFLEVBQUUsR0FBRyxDQUFDO1lBQUcsT0FBTyxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssSUFBRSxDQUFDLElBQUUsQ0FBRSxDQUFBLE1BQUksS0FBSyxLQUFHLE1BQUksS0FBSyxLQUFHLEVBQUUsT0FBSyxFQUFFLE1BQUksRUFBRSxVQUFVLEFBQUQsQ0FBRTtRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLE9BQU8sRUFBRSxTQUFTLElBQUUsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1FBQUE7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztZQUFDLE9BQU8sRUFBRSxNQUFJLEVBQUUsS0FBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRSxFQUFFO1FBQUE7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO1lBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7Z0JBQUMsRUFBRSxHQUFHLENBQUMsR0FBRTtZQUFFLElBQUcsQ0FBQztRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztnQkFBQyxFQUFFLEdBQUcsQ0FBQztZQUFFLElBQUcsQ0FBQztRQUFBO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFBQyxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTLElBQUc7WUFBQyxJQUFHLEVBQUUsTUFBTSxLQUFHLEtBQUcsR0FBRSxPQUFPLElBQUk7WUFBQyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBRSxFQUFFLE9BQU87b0JBQUMsRUFBRSxHQUFHLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRyxFQUFFLE9BQU8sR0FBQyxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFBQSxFQUFFO2dCQUFDLElBQUksSUFBRTtvQkFBQyxpQkFBZ0I7b0JBQUUsZUFBYztnQkFBQztnQkFBRSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztvQkFBQyxFQUFFLGlCQUFpQixDQUFDO2dCQUFFO2dCQUFHLElBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxJQUFJLEVBQUMsSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFO2dCQUFHLElBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDO29CQUFHLElBQUcsTUFBSSxLQUFLLEdBQUUsTUFBTSxJQUFJLE1BQU0sc0VBQXNFO29CQUFBLElBQUcsRUFBRSxHQUFHLENBQUMsSUFBRyxNQUFJLElBQUksSUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUM7d0JBQUMsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDO3dCQUFHLElBQUc7NEJBQUMsRUFBRSxZQUFZLENBQUMsR0FBRTt3QkFBRSxFQUFDLE9BQU0sR0FBRTs0QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLEFBQUQ7d0JBQUU7b0JBQUMsQ0FBQztnQkFBQSxJQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDO29CQUFDLElBQUksSUFBRSxFQUFFLEdBQUcsQ0FBQztvQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFLE1BQU0sSUFBSSxNQUFNLHNFQUFzRTtvQkFBQSxFQUFFLEdBQUcsQ0FBQztvQkFBRyxJQUFHO3dCQUFDLEVBQUUsZUFBZSxDQUFDLEdBQUU7b0JBQUUsRUFBQyxPQUFNLEdBQUU7d0JBQUMsS0FBSSxDQUFBLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxBQUFEO29CQUFFO2dCQUFDLElBQUcsQ0FBQyxFQUFDLE1BQU0sRUFBRTtnQkFBQSxPQUFPO1lBQUMsU0FBUTtnQkFBQyxJQUFFLENBQUM7WUFBQztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFBRSxJQUFHLE1BQUksSUFBSSxJQUFFLE9BQU8sS0FBRyxjQUFZLE9BQU8sS0FBRyxZQUFVLEVBQUUsR0FBRyxDQUFDLElBQUc7WUFBTyxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUM7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUUsQUFBRCxJQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUFDO2dCQUFFO2FBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRyxPQUFPLEtBQUcsWUFBVSxNQUFJLElBQUksRUFBQyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUMsSUFBRTtvQkFBVyxLQUFNO2dCQUFBLEtBQUs7b0JBQUUsRUFBRSxFQUFFLElBQUksRUFBQyxJQUFFO29CQUFTLEtBQUs7WUFBQTtRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFBQyxJQUFJLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztZQUFDLElBQUcsRUFBRSxHQUFHLENBQUMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFFO2dCQUFDLFlBQVc7Z0JBQUUsUUFBTztnQkFBRSxTQUFRLElBQUk7Z0JBQUMsZ0JBQWUsS0FBRyxXQUFVO29CQUFDLE9BQU0sRUFBRTtnQkFBQTtZQUFDLElBQUcsT0FBTyxLQUFHLFlBQVUsTUFBSSxJQUFJLEVBQUMsT0FBTyxFQUFFLEdBQUU7Z0JBQWEsS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBTSxFQUFDLEdBQUUsR0FBRTtvQkFBRyxLQUFNO2dCQUFBLEtBQUs7b0JBQUUsRUFBRSxFQUFFLElBQUksRUFBQyxHQUFFLEdBQUU7b0JBQUcsS0FBSztZQUFBO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO1lBQUUsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDO1lBQUcsTUFBSSxLQUFLLEtBQUcsRUFBRTtRQUFHO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztZQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7WUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDO2dCQUFDLElBQUksSUFBRSxFQUFFLEdBQUcsQ0FBQztnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFLE1BQU0sSUFBSSxNQUFNLHNFQUFzRTtnQkFBQSxJQUFJLElBQUUsRUFBRSwyQkFBMkIsQ0FBQyxHQUFFO2dCQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDO29CQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUFFO1lBQUUsSUFBRyxDQUFDO1FBQUM7UUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDO1lBQUUsSUFBSSxJQUFFLEVBQUUsOEJBQThCO1lBQUMsSUFBRyxNQUFJLEtBQUssR0FBRTtnQkFBQyxJQUFJLElBQUU7Z0JBQUUsRUFBRSw4QkFBOEIsR0FBQyxJQUFFO29CQUFDLFdBQVUsSUFBSTtvQkFBSSxlQUFjLENBQUM7b0JBQUUsUUFBTyxTQUFTLENBQUMsRUFBQzt3QkFBQyxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7b0JBQUUsbUJBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7b0JBQUUsc0JBQXFCLFdBQVUsQ0FBQztnQkFBQztZQUFDLENBQUM7WUFBQSxJQUFHLEVBQUUsVUFBVSxFQUFDO2dCQUFDLFFBQVEsSUFBSSxDQUFDO2dCQUE4SjtZQUFNLENBQUM7WUFBQSxJQUFJLElBQUUsRUFBRSxNQUFNO1lBQUMsRUFBRSxNQUFNLEdBQUMsU0FBUyxDQUFDLEVBQUM7Z0JBQUMsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztnQkFBVyxPQUFPLE9BQU8sRUFBRSxlQUFlLElBQUUsY0FBWSxPQUFPLEVBQUUsaUJBQWlCLElBQUUsY0FBWSxFQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUcsQ0FBQztZQUFBLEdBQUUsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztnQkFBQyxPQUFPLEVBQUUsZUFBZSxJQUFFLGNBQVksT0FBTyxFQUFFLGlCQUFpQixJQUFFLGNBQVksRUFBRSxHQUFHLENBQUMsR0FBRTtZQUFFLEVBQUU7WUFBQyxJQUFJLElBQUUsRUFBRSxpQkFBaUIsRUFBQyxJQUFFLEVBQUUsbUJBQW1CLElBQUUsV0FBVSxDQUFDO1lBQUUsRUFBRSxtQkFBbUIsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO2dCQUFDLE9BQU8sS0FBSSxDQUFBLEVBQUUsTUFBTSxDQUFDLElBQUcsTUFBSSxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUMsR0FBRSxFQUFFLEFBQUQsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUMsVUFBVTtZQUFBLEdBQUUsRUFBRSxpQkFBaUIsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztnQkFBQyxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUM7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRTtvQkFBQyxFQUFFLEdBQUcsQ0FBQyxHQUFFO29CQUFHLElBQUksSUFBRSxFQUFFLE9BQU8sRUFBQyxJQUFFLEVBQUUsU0FBUztvQkFBQyxJQUFHLE1BQUksSUFBSSxFQUFDO3dCQUFDLElBQUksSUFBRSxFQUFFLGFBQWEsSUFBRSxJQUFJLElBQUUsRUFBRSxhQUFhLENBQUMsT0FBTyxJQUFFLElBQUksSUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFHLElBQUUsRUFBRSxhQUFhLElBQUUsSUFBSSxJQUFFLEVBQUUsYUFBYSxDQUFDLE9BQU8sSUFBRSxJQUFJO3dCQUFDLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxHQUFHLENBQUMsSUFBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEFBQUQsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsTUFBTSxDQUFDLElBQUcsSUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsQUFBRCxJQUFHLENBQUMsS0FBRyxDQUFDLEtBQUcsS0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEFBQUQsQ0FBRTtvQkFBQSxPQUFNLEVBQUUsR0FBRyxDQUFDO2dCQUFFLENBQUM7Z0JBQUEsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7WUFBVSxDQUFDO1FBQUM7UUFBQyxTQUFTLEtBQUk7WUFBQyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVMsS0FBSTtZQUFDLE9BQU8sRUFBRSxJQUFJO1FBQUE7UUFBQyxTQUFTLEtBQUk7WUFBRSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO2dCQUFDLElBQUcsT0FBTyxLQUFHLFVBQVMsT0FBTyxLQUFJLENBQUEsSUFBRSxHQUFFLElBQUUsT0FBTyxLQUFHLFVBQVUsQUFBRCxHQUFHLEtBQUcsSUFBSSxJQUFHLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsQ0FBQztnQkFBQyxDQUFDLEtBQUcsS0FBSSxDQUFBLElBQUUsQ0FBQyxHQUFFLEVBQUUsRUFBRSxBQUFEO1lBQUU7UUFBRTtRQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUM7WUFBQyxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsU0FBUyxJQUFFLElBQUksRUFBQzt3QkFBQyxJQUFHLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixFQUFDLE9BQU0sQ0FBQzt3QkFBRSxJQUFJLElBQUUsT0FBTyxtQkFBbUIsQ0FBQyxFQUFFLFNBQVM7d0JBQUUsSUFBRyxFQUFFLE1BQU0sR0FBQyxLQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUcsaUJBQWUsRUFBRSxTQUFTLENBQUMsU0FBUyxLQUFHLE9BQU8sU0FBUyxFQUFDLE9BQU0sQ0FBQztvQkFBQyxDQUFDO29CQUFBLElBQUksSUFBRSxFQUFFLElBQUksSUFBRSxFQUFFLFdBQVc7b0JBQUMsT0FBTyxPQUFPLEtBQUcsWUFBVSxTQUFTLElBQUksQ0FBQztnQkFBRyxLQUFJO29CQUFVLElBQUcsS0FBRyxJQUFJLEVBQUMsT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLG9CQUFvQixHQUFDLElBQUcsRUFBRSw4QkFBOEIsR0FBQyxHQUFFLEVBQUUsbUNBQW1DLEdBQUMsSUFBRyxFQUFFLHlCQUF5QixHQUFDLElBQUcsRUFBRSxhQUFhLEdBQUMsR0FBRSxFQUFFLGVBQWUsR0FBQyxHQUFFLEVBQUUsc0JBQXNCLEdBQUMsSUFBRyxFQUFFLG9CQUFvQixHQUFDLElBQUcsRUFBRSxxQkFBcUIsR0FBQyxJQUFHLEVBQUUsbUJBQW1CLEdBQUMsR0FBRSxFQUFFLFFBQVEsR0FBQyxHQUFFLEVBQUUsWUFBWSxHQUFDLENBQUM7SUFBQSxDQUFBO0FBQUk7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFDLElBQUcsSUFBSTtJQUFDO0lBQWEsRUFBRSxPQUFPLEdBQUM7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLE9BQU8sR0FBQyxHQUFHO0FBQUcsSUFBSSxJQUFFLEVBQUU7QUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLE9BQU8sT0FBTztBQUFFLElBQUksS0FBRyxFQUFFLE9BQU8sRUFDenBKOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDZkE7OzRDQUthOzZDQUdBO0FBTmI7QUFDQTtBQUVPLE1BQU0sU0FBeUI7SUFDcEMsU0FBUztRQUFDO0tBQWE7QUFDekI7QUFDTyxNQUFNLFVBQVcsQ0FBQSxHQUFBLFlBQUssQUFBRCxFQUMxQjtJQUNFLE1BQU07QUFDUixHQUNBLE9BQU8sTUFBUTtJQUNiLFFBQVEsR0FBRyxDQUFDO0lBQ1osT0FBTyxNQUFNLENBQUEsR0FBQSwyQkFBZ0IsQUFBRCxFQUFFO0FBQ2hDOzs7QUNmRjs7QUFBczdCLDJDQUFPO0FBQVAsa0RBQWtCO0FBQWxCLCtEQUFvQztBQUFwQyxzREFBbUU7QUFBbkUsOERBQXlGO0FBQXpGLHlEQUF1SDtBQUF2SCxrREFBZ0o7QUFBdGtDLElBQUksSUFBRSxVQUFTO0lBQUMsSUFBRyxDQUFDLEVBQUUsR0FBQyxNQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFDLFFBQU8sQ0FBQztRQUFFLGVBQWMsQ0FBQztJQUFDO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLEVBQUUsVUFBVSxJQUFFLEVBQUUsTUFBTSxLQUFHLFdBQVcsTUFBTSxJQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBRyxFQUFFLElBQUksSUFBRyxDQUFBLEVBQUUsT0FBTyxLQUFHLEtBQUssS0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEtBQUcsRUFBRSxPQUFPLEFBQUQ7QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUk7SUFBQyxJQUFJLElBQUUsT0FBTSxJQUFHO1FBQUMsSUFBRyxFQUFFLEdBQUUsTUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUFDLElBQUksSUFBRTtnQkFBQyxNQUFLLEVBQUUsSUFBSTtnQkFBQyxTQUFRLEVBQUUsT0FBTztnQkFBQyxNQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFBQSxHQUFFLElBQUUsTUFBTSxJQUFJO1lBQUcsT0FBTyxXQUFXLENBQUM7Z0JBQUMsTUFBSyxFQUFFLElBQUk7Z0JBQUMsU0FBUSxFQUFFLE9BQU87Z0JBQUMsTUFBSztnQkFBRSxTQUFRLENBQUM7WUFBQztRQUFFLENBQUM7SUFBQTtJQUFFLE9BQU8sT0FBTyxnQkFBZ0IsQ0FBQyxXQUFVLElBQUcsSUFBSSxPQUFPLG1CQUFtQixDQUFDLFdBQVUsRUFBRTtBQUFBLEdBQUUsSUFBRSxDQUFBLElBQUcsSUFBSSxRQUFRLENBQUMsR0FBRSxJQUFJO1FBQUMsT0FBTyxnQkFBZ0IsQ0FBQyxXQUFVLENBQUEsSUFBRztZQUFDLEVBQUUsR0FBRSxNQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFBQyxJQUFHLE9BQU8sV0FBVyxDQUFDLEVBQUU7SUFBQTtBQUFHLElBQUksSUFBRSxPQUFNLElBQUc7SUFBQyxJQUFHLENBQUMsUUFBUSxTQUFRLE1BQU0sSUFBSSxNQUFNLG1DQUFtQztJQUFBLE9BQU8sT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQUUsR0FBRSxJQUFFLE9BQU0sSUFBRztJQUFDLElBQUcsQ0FBQyxRQUFRLE1BQUssTUFBTSxJQUFJLE1BQU0sZ0NBQWdDO0lBQUEsSUFBSSxJQUFFLE9BQU8sRUFBRSxLQUFLLElBQUUsV0FBUyxFQUFFLEtBQUssR0FBQyxBQUFDLENBQUEsTUFBTSxHQUFFLEVBQUcsRUFBRTtJQUFDLE9BQU8sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUU7QUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLENBQUEsSUFBRyxFQUFFLEdBQUUsSUFBRyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUU7OztBQ0FwN0IsUUFBUSxjQUFjLEdBQUcsU0FBVSxDQUFDLEVBQUU7SUFDcEMsT0FBTyxLQUFLLEVBQUUsVUFBVSxHQUFHLElBQUk7UUFBQyxTQUFTO0lBQUMsQ0FBQztBQUM3QztBQUVBLFFBQVEsaUJBQWlCLEdBQUcsU0FBVSxDQUFDLEVBQUU7SUFDdkMsT0FBTyxjQUFjLENBQUMsR0FBRyxjQUFjO1FBQUMsT0FBTyxJQUFJO0lBQUE7QUFDckQ7QUFFQSxRQUFRLFNBQVMsR0FBRyxTQUFVLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxPQUFPLENBQUMsU0FBVSxHQUFHLEVBQUU7UUFDekMsSUFBSSxRQUFRLGFBQWEsUUFBUSxnQkFBZ0IsS0FBSyxjQUFjLENBQUMsTUFDbkU7UUFHRixPQUFPLGNBQWMsQ0FBQyxNQUFNLEtBQUs7WUFDL0IsWUFBWSxJQUFJO1lBQ2hCLEtBQUssV0FBWTtnQkFDZixPQUFPLE1BQU0sQ0FBQyxJQUFJO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVBLFFBQVEsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDOUMsT0FBTyxjQUFjLENBQUMsTUFBTSxVQUFVO1FBQ3BDLFlBQVksSUFBSTtRQUNoQixLQUFLO0lBQ1A7QUFDRjs7O0FDOUJBLElBQUksSUFBRSxPQUFPLGNBQWM7QUFBQyxJQUFJLElBQUUsT0FBTyx3QkFBd0I7QUFBQyxJQUFJLElBQUUsT0FBTyxtQkFBbUI7QUFBQyxJQUFJLElBQUUsT0FBTyxTQUFTLENBQUMsY0FBYztBQUFDLElBQUksSUFBRSxDQUFDLEdBQUUsSUFBSTtJQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLENBQUMsQ0FBQyxFQUFFO1FBQUMsWUFBVyxDQUFDO0lBQUM7QUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxJQUFJO0lBQUMsSUFBRyxLQUFHLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxZQUFXLEtBQUksSUFBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEVBQUUsR0FBRSxFQUFDLEtBQUksRUFBRSxVQUFVO0lBQUE7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsQ0FBQztBQUFFLEVBQUUsR0FBRTtJQUFDLE9BQU0sSUFBSTtJQUFFLGNBQWEsSUFBSTtBQUFDO0FBQUcsT0FBTyxPQUFPLEdBQUMsRUFBRTtBQUFHLElBQUksSUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLEVBQUUsVUFBVSxJQUFFLEVBQUUsTUFBTSxLQUFHLFdBQVcsTUFBTSxJQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBRyxFQUFFLElBQUksSUFBRyxDQUFBLEVBQUUsT0FBTyxLQUFHLEtBQUssS0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEtBQUcsRUFBRSxPQUFPLEFBQUQ7QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUk7SUFBQyxJQUFJLElBQUUsT0FBTSxJQUFHO1FBQUMsSUFBRyxFQUFFLEdBQUUsTUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUFDLElBQUksSUFBRTtnQkFBQyxNQUFLLEVBQUUsSUFBSTtnQkFBQyxTQUFRLEVBQUUsT0FBTztnQkFBQyxNQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFBQSxHQUFFLElBQUUsTUFBTSxJQUFJO1lBQUcsT0FBTyxXQUFXLENBQUM7Z0JBQUMsTUFBSyxFQUFFLElBQUk7Z0JBQUMsU0FBUSxFQUFFLE9BQU87Z0JBQUMsTUFBSztnQkFBRSxTQUFRLENBQUM7WUFBQztRQUFFLENBQUM7SUFBQTtJQUFFLE9BQU8sT0FBTyxnQkFBZ0IsQ0FBQyxXQUFVLElBQUcsSUFBSSxPQUFPLG1CQUFtQixDQUFDLFdBQVUsRUFBRTtBQUFBLEdBQUUsSUFBRSxDQUFBLElBQUcsSUFBSSxRQUFRLENBQUMsR0FBRSxJQUFJO1FBQUMsT0FBTyxnQkFBZ0IsQ0FBQyxXQUFVLENBQUEsSUFBRztZQUFDLEVBQUUsR0FBRSxNQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFBQyxJQUFHLE9BQU8sV0FBVyxDQUFDLEVBQUU7SUFBQSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjE3LjQvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYWU0ZTI2OTdjZTc1MTk2Yy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJlc29sdmVyQDAuMTEuMi9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJjb250ZW50cy9yZWxheWVycy92ZXJpZnlBdXRoVG9rZW4udHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjEuNl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOC4zX0BwYXJjZWwrY29yZUAyLjguMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErbWVzc2FnaW5nQDAuMS42X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL21lc3NhZ2luZy9kaXN0L3JlbGF5LmNqcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTj1PYmplY3QuY3JlYXRlO3ZhciB3PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgST1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBGPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBXPU9iamVjdC5nZXRQcm90b3R5cGVPZixWPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIEo9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBzIG9mIEYodCkpIVYuY2FsbChlLHMpJiZzIT09byYmdyhlLHMse2dldDooKT0+dFtzXSxlbnVtZXJhYmxlOiEocj1JKHQscykpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHE9KGUsdCxvKT0+KG89ZSE9bnVsbD9OKFcoZSkpOnt9LEoodHx8IWV8fCFlLl9fZXNNb2R1bGU/dyhvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgaD10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciBEPSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIEc9bmV3IFNldChoKSxMPWU9PkcuaGFzKGUpLGNlPWguZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgaWU9TChcIi0tZHJ5LXJ1blwiKSxnPSgpPT5MKFwiLS12ZXJib3NlXCIpfHxEKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGxlPWcoKTt2YXIgeT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFA9KC4uLmUpPT55KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PnkoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxYPTAsdT0oLi4uZSk9PmcoKSYmeShgXFx1ezFGN0UxfSAke1grK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvdml0dG9yaW9yaXZhYmVsbGEvcHJvamVjdHMvbGVucy1jcm9zcy1wb3N0L2xlbnNoYXJlL2NvbnRlbnRzL3JlbGF5ZXJzL3ZlcmlmeUF1dGhUb2tlbi50c1wiLFwiYnVuZGxlSWRcIjpcImExZmJjOWNhZjNmOTBmMzZcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1NTcxM307bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgej1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBLKGUpe3ouY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Szttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGI9Z2xvYmFsVGhpcy5jaHJvbWV8fGdsb2JhbFRoaXMuYnJvd3Nlcnx8bnVsbDthc3luYyBmdW5jdGlvbiB4KGU9ITEpe2UmJih1KFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxiLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSl9ZnVuY3Rpb24gZCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LFQ9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gcChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10scyxuLGE7Zm9yKHMgaW4gbylmb3IobiBpbiBvW3NdWzFdKWE9b1tzXVsxXVtuXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLHNdKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHAoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIEUoZSx0LG8pe2lmKFMoZSx0LG8pKXJldHVybiEwO2xldCByPXAobW9kdWxlLmJ1bmRsZS5yb290LHQpLHM9ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W24sYV09ci5zaGlmdCgpO2lmKFMobixhLG51bGwpKXM9ITA7ZWxzZXtsZXQgbT1wKG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihtLmxlbmd0aD09PTApe3M9ITE7YnJlYWt9ci5wdXNoKC4uLm0pfX1yZXR1cm4gc31mdW5jdGlvbiBTKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P0UoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBzPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFzfHxzLmhvdCYmcy5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIFEoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9dmFyIEg9ITE7dHJ5eygwLGV2YWwpKCd0aHJvdyBuZXcgRXJyb3IoXCJ0ZXN0XCIpOyAvLyMgc291cmNlVVJMPXRlc3QuanMnKX1jYXRjaChlKXtIPWUuc3RhY2suaW5jbHVkZXMoXCJ0ZXN0LmpzXCIpfWFzeW5jIGZ1bmN0aW9uIEIoZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9Yi5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChIP1tdOmUubWFwKFEpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8pe0MobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIFkoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIFI9bnVsbDtmdW5jdGlvbiBaKCl7Unx8KFI9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj1kKCkscz1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFzfHxZKGVbdF0pfVI9bnVsbH0sNDcpKX1mdW5jdGlvbiBDKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKVooKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgbj1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBuKWlmKCFyW2FdfHxyW2FdIT09blthXSl7bGV0IGw9blthXTtwKG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZ2KG1vZHVsZS5idW5kbGUucm9vdCxsKX19SCYmKDAsZXZhbCkodC5vdXRwdXQpO2xldCBzPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bcyxyXX1lbHNlIGUucGFyZW50JiZDKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0scz1bXTtmb3IobGV0IG4gaW4gcilwKG1vZHVsZS5idW5kbGUucm9vdCxyW25dKS5sZW5ndGg9PT0xJiZzLnB1c2gocltuXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0scy5mb3JFYWNoKG49Pnt2KG1vZHVsZS5idW5kbGUucm9vdCxuKX0pfWVsc2UgZS5wYXJlbnQmJnYoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gXyhlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gTShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXAobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihzKXtsZXQgbj1zKCgpPT5yKTtuJiZuLmxlbmd0aCYmKG4uZm9yRWFjaCgoW2EsbF0pPT57XyhhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQsbikpfSl9fWZ1bmN0aW9uIGVlKGU9ZigpKXtsZXQgdD1kKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gdGUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE8oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KGVlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHMgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbj1zLmNvZGVmcmFtZXx8cy5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3MubWVzc2FnZStgXG5gK24rYFxuXG5gK3MuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIix0ZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57UChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgJD1xKHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIGooKXskLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7KCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpJiZPKGFzeW5jIGU9PntpZih1KFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe1QoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJkUobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgQih0KTtsZXQgcj17fTtmb3IobGV0W24sYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwoXyhuLGEpLHJbYV09ITApO2xldCBzPXt9O2ZvcihsZXQgbj0wO248aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7bisrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W25dO3NbbF18fChNKGEsbCksc1tsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IHgoITApfX1lbHNlIHUoXCJQYWdlIHJ1bnRpbWUgLSBSZWxvYWRpbmdcIiksYXdhaXQgeCgpfSk7Yy5pc1JlYWN0JiYodShcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLGooKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9YFxuLS0tXG5gK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NTQ29uZmlnIH0gZnJvbSBcInBsYXNtb1wiXG5cbmltcG9ydCB7IHJlbGF5TWVzc2FnZSwgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcbmltcG9ydCB7IHJlbGF5IH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmcvcmVsYXlcIlxuXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbGFzbW9DU0NvbmZpZyA9IHtcbiAgbWF0Y2hlczogW1wiPGFsbF91cmxzPlwiXVxufVxuZXhwb3J0IGNvbnN0IHJlbGF5ZXIgPSAgcmVsYXkoXG4gIHtcbiAgICBuYW1lOiBcInZlcmlmeUF1dGhUb2tlblwiIGFzIGNvbnN0XG4gIH0sXG4gIGFzeW5jIChyZXEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEpXG4gICAgcmV0dXJuIGF3YWl0IHNlbmRUb0JhY2tncm91bmQocmVxKVxuICB9XG4pXG4iLCJ2YXIgbj1hc3luYygpPT57bGV0W2VdPWF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6ITAsY3VycmVudFdpbmRvdzohMH0pO3JldHVybiBlfSxvPShlLGEpPT4hYS5fX2ludGVybmFsJiZlLnNvdXJjZT09PWdsb2JhbFRoaXMud2luZG93JiZlLmRhdGEubmFtZT09PWEubmFtZSYmKGEucmVsYXlJZD09PXZvaWQgMHx8ZS5kYXRhLnJlbGF5SWQ9PT1hLnJlbGF5SWQpO3ZhciByPShlLGEpPT57bGV0IHQ9YXN5bmMgcz0+e2lmKG8ocyxlKSYmIXMuZGF0YS5yZWxheWVkKXtsZXQgZD17bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTpzLmRhdGEuYm9keX0sbT1hd2FpdCBhPy4oZCk7d2luZG93LnBvc3RNZXNzYWdlKHtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5Om0scmVsYXllZDohMH0pfX07cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpLCgpPT53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KX0saT1lPT5uZXcgUHJvbWlzZSgoYSx0KT0+e3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHM9PntvKHMsZSkmJnMuZGF0YS5yZWxheWVkJiZhKHMuZGF0YS5ib2R5KX0pLHdpbmRvdy5wb3N0TWVzc2FnZShlKX0pO3ZhciBnPWFzeW5jIGU9PntpZighY2hyb21lPy5ydW50aW1lKXRocm93IG5ldyBFcnJvcihcImNocm9tZS5ydW50aW1lIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGUpfSxsPWFzeW5jIGU9PntpZighY2hyb21lPy50YWJzKXRocm93IG5ldyBFcnJvcihcImNocm9tZS50YWJzIGlzIG5vdCBhdmFpbGFibGVcIik7bGV0IGE9dHlwZW9mIGUudGFiSWQ9PVwibnVtYmVyXCI/ZS50YWJJZDooYXdhaXQgbigpKS5pZDtyZXR1cm4gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoYSxlKX0sYj1sLHk9ZT0+cihlLGcpLFA9eSxjPWksZj1jO2V4cG9ydHtQIGFzIHJlbGF5LHkgYXMgcmVsYXlNZXNzYWdlLGIgYXMgc2VuZFRvQWN0aXZlQ29udGVudFNjcmlwdCxnIGFzIHNlbmRUb0JhY2tncm91bmQsYyBhcyBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXksbCBhcyBzZW5kVG9Db250ZW50U2NyaXB0LGYgYXMgc2VuZFZpYVJlbGF5fTtcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsInZhciBvPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBtPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciB5PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGw9KGUsYSk9Pntmb3IodmFyIG4gaW4gYSlvKGUsbix7Z2V0OmFbbl0sZW51bWVyYWJsZTohMH0pfSxnPShlLGEsbixzKT0+e2lmKGEmJnR5cGVvZiBhPT1cIm9iamVjdFwifHx0eXBlb2YgYT09XCJmdW5jdGlvblwiKWZvcihsZXQgdCBvZiBtKGEpKSF5LmNhbGwoZSx0KSYmdCE9PW4mJm8oZSx0LHtnZXQ6KCk9PmFbdF0sZW51bWVyYWJsZTohKHM9aShhLHQpKXx8cy5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciBjPWU9Pmcobyh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlKTt2YXIgdT17fTtsKHUse3JlbGF5OigpPT53LHNlbmRWaWFSZWxheTooKT0+cH0pO21vZHVsZS5leHBvcnRzPWModSk7dmFyIGQ9KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIHc9KGUsYSk9PntsZXQgbj1hc3luYyBzPT57aWYoZChzLGUpJiYhcy5kYXRhLnJlbGF5ZWQpe2xldCB0PXtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5OnMuZGF0YS5ib2R5fSxyPWF3YWl0IGE/Lih0KTt3aW5kb3cucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cixyZWxheWVkOiEwfSl9fTtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbiksKCk9PndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4pfSxwPWU9Pm5ldyBQcm9taXNlKChhLG4pPT57d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscz0+e2QocyxlKSYmcy5kYXRhLnJlbGF5ZWQmJmEocy5kYXRhLmJvZHkpfSksd2luZG93LnBvc3RNZXNzYWdlKGUpfSk7MCYmKG1vZHVsZS5leHBvcnRzPXtyZWxheSxzZW5kVmlhUmVsYXl9KTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJ2ZXJpZnlBdXRoVG9rZW4uZjNmOTBmMzYuanMubWFwIn0=
