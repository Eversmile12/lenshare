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
})({"5P6FE":[function(require,module,exports) {
var g = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var A = new Set(g), _ = (e)=>A.has(e), W = g.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, s])=>(e[t] = s, e), {});
var U = _("--dry-run"), m = ()=>_("--verbose") || y().VERBOSE === "true", I = m();
var f = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var v = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), b = (...e)=>f("\uD83D\uDD35 INFO", ...e), h = (...e)=>f("\uD83D\uDFE0 WARN", ...e), M = 0, c = (...e)=>m() && f(`\u{1F7E1} ${M++}`, ...e);
var o = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/vittoriorivabella/projects/lens-cross-post/lenshare/node_modules/.pnpm/@plasmohq+parcel-transformer-manifest@0.14.1/node_modules/@plasmohq/parcel-transformer-manifest/runtime/plasmo-default-background.ts",
    "bundleId": "8eabbd55218325f0",
    "envHash": "210281caf8d4160d",
    "verbose": "false",
    "secure": false,
    "serverPort": 50697
};
module.bundle.HMR_BUNDLE_ID = o.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: o.verbose
    }
};
var T = module.bundle.Module;
function D(e) {
    T.call(this, e), this.hot = {
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
module.bundle.Module = D;
module.bundle.hotData = {};
var l = globalThis.chrome || globalThis.browser || null;
function u() {
    return !o.host || o.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : o.host;
}
function p() {
    return o.port || location.port;
}
var B = `${o.secure ? "https" : "http"}://${u()}:${p()}/`;
async function x(e = 1470) {
    for(;;)try {
        await fetch(B);
        break;
    } catch  {
        await new Promise((s)=>setTimeout(s, e));
    }
}
if (l.runtime.getManifest().manifest_version === 3) {
    let e = l.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let s = t.request.url;
        if (s.startsWith(e)) {
            let n = new URL(decodeURIComponent(s.slice(e.length)));
            n.hostname === o.host && n.port === `${o.port}` ? (n.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(n).then((a)=>new Response(a.body, {
                    headers: {
                        "Content-Type": a.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function R(e, t) {
    let { modules: s  } = e;
    return s ? !!s[t] : !1;
}
function k(e = p()) {
    let t = u();
    return `${o.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function S(e) {
    typeof e.message == "string" && v("[plasmo/parcel-runtime]: " + e.message);
}
function E(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k(Number(p()) + 1));
    return t.addEventListener("message", async function(s) {
        if (JSON.parse(s.data).type === "build_ready") {
            await e();
            return;
        }
    }), t.addEventListener("error", S), t;
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k());
    return t.addEventListener("message", async function(s) {
        let n = JSON.parse(s.data);
        if (n.type === "update" && await e(n.assets), n.type === "error") for (let a of n.diagnostics.ansi){
            let i = a.codeframe || a.stack;
            h("[plasmo/parcel-runtime]: " + a.message + `
` + i + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", S), t.addEventListener("open", ()=>{
        b(`[plasmo/parcel-runtime]: Connected to HMR server for ${o.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        h(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${o.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, r = {
    buildReady: !1,
    hmrUpdated: !1,
    csCodeChanged: !1,
    ports: new Set
};
async function d(e = !1) {
    if (e || r.buildReady && (r.hmrUpdated || r.csCodeChanged)) {
        c("BGSW Runtime - reloading");
        let [t] = await chrome.tabs.query({
            active: !0
        });
        for (let s of r.ports){
            let n = t?.id === s.sender.tab.id;
            s.postMessage({
                __plasmo_cs_active_tab__: n
            });
        }
        l.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    let e = L(async (t)=>{
        c("BGSW Runtime - On HMR Update"), r.hmrUpdated ||= t.filter((n)=>n.envHash === o.envHash).some((n)=>R(module.bundle, n.id));
        let s = t.find((n)=>n.type === "json");
        if (s) {
            let n = new Set(t.map((i)=>i.id)), a = Object.values(s.depsByBundle).map((i)=>Object.values(i)).flat();
            r.hmrUpdated ||= a.every((i)=>n.has(i));
        }
        d();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await x(), d(!0);
    });
}
E(async ()=>{
    c("BGSW Runtime - On Build Repackaged"), r.buildReady ||= !0, d();
});
l.runtime.onConnect.addListener(function(e) {
    e.name.startsWith("__plasmo_runtime_script_") && (r.ports.add(e), e.onDisconnect.addListener(()=>{
        r.ports.delete(e);
    }), e.onMessage.addListener(function(t) {
        t.__plasmo_cs_changed__ && (c("BGSW Runtime - On CS code changed"), r.csCodeChanged ||= !0, d());
    }));
});
l.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (c("BGSW Runtime - On top-level code changed"), d()), !0;
});

},{}],"fvo3m":[function(require,module,exports) {

},{}]},["5P6FE","fvo3m"], "fvo3m", "parcelRequirea28e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7WUFBQyxJQUFJLElBQUUsR0FBRyxPQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQUMsRUFBRSxXQUFXLENBQUM7Z0JBQUMsMEJBQXlCO1lBQUM7UUFBRTtRQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU07SUFBRSxDQUFDO0FBQUE7QUFBQyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsZUFBZSxFQUFDO0lBQUMsSUFBSSxJQUFFLEVBQUUsT0FBTSxJQUFHO1FBQUMsRUFBRSxpQ0FBZ0MsRUFBRSxVQUFVLEtBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQSxJQUFHLEVBQUUsT0FBTyxLQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLElBQUcsRUFBRSxPQUFPLE1BQU0sRUFBQyxFQUFFLEVBQUUsRUFBRTtRQUFDLElBQUksSUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBLElBQUcsRUFBRSxJQUFJLEtBQUc7UUFBUSxJQUFHLEdBQUU7WUFBQyxJQUFJLElBQUUsSUFBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUEsSUFBRyxFQUFFLEVBQUUsSUFBRyxJQUFFLE9BQU8sTUFBTSxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBLElBQUcsT0FBTyxNQUFNLENBQUMsSUFBSSxJQUFJO1lBQUcsRUFBRSxVQUFVLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQSxJQUFHLEVBQUUsR0FBRyxDQUFDO1FBQUcsQ0FBQztRQUFBO0lBQUc7SUFBRyxFQUFFLGdCQUFnQixDQUFDLFFBQU8sSUFBSTtRQUFDLElBQUksSUFBRSxZQUFZLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUTtRQUFNLEVBQUUsZ0JBQWdCLENBQUMsU0FBUSxJQUFJLGNBQWM7SUFBRyxJQUFHLEVBQUUsZ0JBQWdCLENBQUMsU0FBUSxVQUFTO1FBQUMsTUFBTSxLQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQUEsRUFBRTtBQUFBLENBQUM7QUFBQSxFQUFFLFVBQVM7SUFBQyxFQUFFLHVDQUFzQyxFQUFFLFVBQVUsS0FBRyxDQUFDLEdBQUUsR0FBRztBQUFBO0FBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQywrQkFBOEIsQ0FBQSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBRyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSTtRQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUFFLElBQUcsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDO1FBQUMsRUFBRSxxQkFBcUIsSUFBRyxDQUFBLEVBQUUsc0NBQXFDLEVBQUUsYUFBYSxLQUFHLENBQUMsR0FBRSxHQUFHLEFBQUQ7SUFBRSxFQUFFLEFBQUQ7QUFBRTtBQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUM7SUFBQyxPQUFPLEVBQUUsc0JBQXNCLElBQUcsQ0FBQSxFQUFFLDZDQUE0QyxHQUFHLEFBQUQsR0FBRyxDQUFDLENBQUM7QUFBQSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjE3LjQvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNmNhMTgyNjJhOGIzNjE3Yy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXRyYW5zZm9ybWVyLW1hbmlmZXN0QDAuMTQuMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC10cmFuc2Zvcm1lci1tYW5pZmVzdC9ydW50aW1lL3BsYXNtby1kZWZhdWx0LWJhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgeT0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBBPW5ldyBTZXQoZyksXz1lPT5BLmhhcyhlKSxXPWcuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsc10pPT4oZVt0XT1zLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLG09KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIsST1tKCk7dmFyIGY9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHY9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxiPSguLi5lKT0+ZihcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGg9KC4uLmUpPT5mKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGM9KC4uLmUpPT5tKCkmJmYoYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgbz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy92aXR0b3Jpb3JpdmFiZWxsYS9wcm9qZWN0cy9sZW5zLWNyb3NzLXBvc3QvbGVuc2hhcmUvbm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtdHJhbnNmb3JtZXItbWFuaWZlc3RAMC4xNC4xL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXRyYW5zZm9ybWVyLW1hbmlmZXN0L3J1bnRpbWUvcGxhc21vLWRlZmF1bHQtYmFja2dyb3VuZC50c1wiLFwiYnVuZGxlSWRcIjpcIjhlYWJiZDU1MjE4MzI1ZjBcIixcImVudkhhc2hcIjpcIjIxMDI4MWNhZjhkNDE2MGRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1MDY5N307bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW8uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpvLnZlcmJvc2V9fTt2YXIgVD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBEKGUpe1QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9RDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5jaHJvbWV8fGdsb2JhbFRoaXMuYnJvd3Nlcnx8bnVsbDtmdW5jdGlvbiB1KCl7cmV0dXJuIW8uaG9zdHx8by5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6by5ob3N0fWZ1bmN0aW9uIHAoKXtyZXR1cm4gby5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBCPWAke28uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke3UoKX06JHtwKCl9L2A7YXN5bmMgZnVuY3Rpb24geChlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goQik7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uocz0+c2V0VGltZW91dChzLGUpKX19aWYobC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWwucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBzPXQucmVxdWVzdC51cmw7aWYocy5zdGFydHNXaXRoKGUpKXtsZXQgbj1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChzLnNsaWNlKGUubGVuZ3RoKSkpO24uaG9zdG5hbWU9PT1vLmhvc3QmJm4ucG9ydD09PWAke28ucG9ydH1gPyhuLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKG4pLnRoZW4oYT0+bmV3IFJlc3BvbnNlKGEuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjphLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gUihlLHQpe2xldHttb2R1bGVzOnN9PWU7cmV0dXJuIHM/ISFzW3RdOiExfWZ1bmN0aW9uIGsoZT1wKCkpe2xldCB0PXUoKTtyZXR1cm5gJHtvLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBTKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnYoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBFKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChrKE51bWJlcihwKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKHMpe2lmKEpTT04ucGFyc2Uocy5kYXRhKS50eXBlPT09XCJidWlsZF9yZWFkeVwiKXthd2FpdCBlKCk7cmV0dXJufX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsUyksdH1mdW5jdGlvbiBMKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChrKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24ocyl7bGV0IG49SlNPTi5wYXJzZShzLmRhdGEpO2lmKG4udHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUobi5hc3NldHMpLG4udHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGEgb2Ygbi5kaWFnbm9zdGljcy5hbnNpKXtsZXQgaT1hLmNvZGVmcmFtZXx8YS5zdGFjaztoKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2EubWVzc2FnZStgXG5gK2krYFxuXG5gK2EuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixTKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntiKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7by5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2goYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtvLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LHI9e2J1aWxkUmVhZHk6ITEsaG1yVXBkYXRlZDohMSxjc0NvZGVDaGFuZ2VkOiExLHBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIGQoZT0hMSl7aWYoZXx8ci5idWlsZFJlYWR5JiYoci5obXJVcGRhdGVkfHxyLmNzQ29kZUNoYW5nZWQpKXtjKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nXCIpO2xldFt0XT1hd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBzIG9mIHIucG9ydHMpe2xldCBuPXQ/LmlkPT09cy5zZW5kZXIudGFiLmlkO3MucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpufSl9bC5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtsZXQgZT1MKGFzeW5jIHQ9PntjKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxyLmhtclVwZGF0ZWR8fD10LmZpbHRlcihuPT5uLmVudkhhc2g9PT1vLmVudkhhc2gpLnNvbWUobj0+Uihtb2R1bGUuYnVuZGxlLG4uaWQpKTtsZXQgcz10LmZpbmQobj0+bi50eXBlPT09XCJqc29uXCIpO2lmKHMpe2xldCBuPW5ldyBTZXQodC5tYXAoaT0+aS5pZCkpLGE9T2JqZWN0LnZhbHVlcyhzLmRlcHNCeUJ1bmRsZSkubWFwKGk9Pk9iamVjdC52YWx1ZXMoaSkpLmZsYXQoKTtyLmhtclVwZGF0ZWR8fD1hLmV2ZXJ5KGk9Pm4uaGFzKGkpKX1kKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IHgoKSxkKCEwKX0pfUUoYXN5bmMoKT0+e2MoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLHIuYnVpbGRSZWFkeXx8PSEwLGQoKX0pO2wucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7ZS5uYW1lLnN0YXJ0c1dpdGgoXCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIikmJihyLnBvcnRzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3IucG9ydHMuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7dC5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihjKFwiQkdTVyBSdW50aW1lIC0gT24gQ1MgY29kZSBjaGFuZ2VkXCIpLHIuY3NDb2RlQ2hhbmdlZHx8PSEwLGQoKSl9KSl9KTtsLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihjKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxkKCkpLCEwfSk7XG4iLCIiXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhc21vLWRlZmF1bHQtYmFja2dyb3VuZC4yMTgzMjVmMC5qcy5tYXAifQ==
