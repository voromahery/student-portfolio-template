// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
var worksData = [{
  title: "Sports App",
  description: "This is a website used for watching sports event especially for those who enjoy watching sports event.",
  screenshot: "./images/sports-app.png",
  figma: "https://www.figma.com/file/t3fxY5HiMQuogI6cmbPg7c/Sports-App-homepage-Responsive-Revised-Copy",
  link: "https://voromahery.github.io/front-end-assessment/",
  date: "dd",
  skill: "CSS"
}, {
  title: "Photograf",
  description: "This website is suitable for a photographer who want to wants to display his or her works online",
  screenshot: "./images/photograf.png",
  figma: "https://www.figma.com/file/QDZhke3UJVjXjNwFKqsWDR/Laaqiq-1-Portfolio-detail-Responsive-Copy",
  link: "https://voromahery.github.io/front-end-finals/",
  date: "dd",
  skill: "CSS"
}, {
  title: "My team page",
  description: "This website is suitable for a photographer who want to wants to display his or her works online",
  screenshot: "./images/creative-crew.png",
  figma: "https://www.figma.com/file/F8d1qJsorEdY47N74HLxQ4/team-page-challenge",
  link: "https://my-team-page-daniel.netlify.app/",
  date: "dd",
  skill: "CSS"
}, {
  title: "Movie app",
  description: "This app is built in order to get or to check recent movies",
  screenshot: "./images/movie-app.png",
  link: "https://movie-app-daniel.netlify.app/",
  date: "dd",
  skill: "react"
}, {
  title: "Quote generator",
  description: "An app thet record all some of the famous people's quote.",
  screenshot: "./images/quote-generator.png",
  figma: "https://www.figma.com/file/FFxqnf1cEDiHhvFpN6u4hV/quote",
  link: "https://quote-generator-daniel.netlify.app/",
  date: "dd",
  skill: "react"
}, {
  title: "Country quiz",
  description: "The first game I have built which is used to learn the capital of a city and their flags.",
  screenshot: "./images/country-quiz.png",
  figma: "https://www.figma.com/file/Gw0ZNBbYN8asqFlZWy3jG1",
  link: "https://country-quiz-daniel.netlify.app/",
  date: "12/11/2020",
  skill: "react"
}, {
  title: "Edie home page",
  description: "",
  screenshot: "./images/edie.png",
  figma: "https://www.figma.com/file/ahnGupP4JjTdVJDTRfMRF2/edie-homepage?node-id=0%3A1",
  link: "https://edie-homepage-daniel.netlify.app/",
  date: "19/11/2020",
  skill: "CSS"
}, {
  title: "Hit parade",
  description: "React project for recording musics",
  screenshot: "./images/hit-parade.png",
  figma: "https://www.figma.com/file/Nab1pgPVU2dciFofy4AOEe/Hit-Parade?node-id=0%3A1",
  link: "https://hit-parade-daniel.netlify.app/",
  date: "22/11/2020",
  skill: "react"
}];
var worksContainer = document.querySelector(".works");
var react = document.querySelector(".react");
var css = document.querySelector(".responsive");
var javascript = document.querySelector(".javascript");
var all = document.querySelector(".all");
var number = document.querySelector(".number");
number.textContent = worksData.length;

function displayWorks() {
  var html = worksData.map(function (work) {
    return "\n  <article class=\"card\">\n  <figure>\n    <img src=".concat(work.screenshot, " class=\"project__image\" alt=\"").concat(work.title, "\" />\n    <ul class=\"project__skills\">\n      <li class=\"project__list--item\">#HTML</li>\n      <li class=\"project__list--item\">#CSS</li>\n      <li class=\"project__list--item\">#responsive</li>\n    </ul>\n  </figure>\n  <div class=\"about__the--project\">\n    <h3 class=\"project__title\">").concat(work.title, "</h3>\n    <p class=\"project__description\">").concat(work.description, "\n    </p>\n  </div>\n  <div class=\"project__link\">\n    <form action=\"").concat(work.link, "\">\n    <button class=\"demo\">Demo</button>\n    </form>\n    <form action=\"\">\n    <button class=\"code\">Code</button>\n    </form>\n  </div>\n</article>\n  ");
  }).join("");
  worksContainer.innerHTML = html;
}

function responsiveSite(e) {
  var responsiveButton = e.target.matches(".responsive");
  var reactButton = e.target.matches(".react");
  var javascriptButton = e.target.matches(".javascript");
  var allButton = e.target.matches(".all");
  var works = [];

  if (responsiveButton) {
    works = worksData.filter(function (work) {
      return work.skill === "CSS";
    });
    all.classList.remove("active");
    javascript.classList.remove("active");
    react.classList.remove("active");
    css.classList.add("active");
  } else if (reactButton) {
    works = worksData.filter(function (work) {
      return work.skill === "react";
    });
    all.classList.remove("active");
    javascript.classList.remove("active");
    css.classList.remove("active");
    react.classList.add("active");
  } else if (javascriptButton) {
    works = worksData.filter(function (work) {
      return work.skill === "javascript";
    });
    all.classList.remove("active");
    css.classList.remove("active");
    react.classList.remove("active");
    javascript.classList.add("active");
  } else if (allButton) {
    css.classList.remove("active");
    react.classList.remove("active");
    javascript.classList.remove("active");
    all.classList.add("active");
    works = worksData;
  } else {
    return;
  }

  number.textContent = works.length;
  var html = works.map(function (work) {
    return "\n  <article class=\"card\">\n  <figure>\n    <img src=".concat(work.screenshot, " class=\"project__image\" alt=\"").concat(work.title, "\" />\n    <ul class=\"project__skills\">\n      <li class=\"project__list--item\">#HTML</li>\n      <li class=\"project__list--item\">#CSS</li>\n      <li class=\"project__list--item\">#responsive</li>\n    </ul>\n  </figure>\n  <div class=\"about__the--project\">\n    <h3 class=\"project__title\">").concat(work.title, "</h3>\n    <p class=\"project__description\">").concat(work.description, "\n    </p>\n  </div>\n  <div class=\"project__link\">\n    <form action=\"").concat(work.link, "\">\n    <button class=\"demo\">Demo</button>\n    </form>\n    <form action=\"\">\n    <button class=\"code\">Code</button>\n    </form>\n  </div>\n</article>\n  ");
  }).join("");
  worksContainer.innerHTML = html;
}

displayWorks();
window.addEventListener("click", responsiveSite);
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49724" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map