(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption,.image-tool__link{margin-bottom:12px}.image-tool__caption[contentEditable=true][data-placeholder]:before,.image-tool__link[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before,.image-tool__link[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before,.image-tool__link[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function _(C, i = null, n = {}) {
  const l = document.createElement(C);
  Array.isArray(i) ? l.classList.add(...i) : i && l.classList.add(i);
  for (const a in n)
    n.hasOwnProperty(a) && (l[a] = n[a]);
  return l;
}
var M = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(M || {});
class x {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: i, config: n, onSelectFile: l, readOnly: a }) {
    this.api = i, this.config = n, this.onSelectFile = l, this.readOnly = a, this.nodes = {
      wrapper: _("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: _("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: _("div", this.CSS.imagePreloader),
      caption: _("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      alt: _("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      link: _("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.alt.dataset.placeholder = this.config.altPlaceholder, this.nodes.link.dataset.placeholder = this.config.linkPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.alt), this.nodes.wrapper.appendChild(this.nodes.link), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(i) {
    return !i.file || Object.keys(i.file).length === 0 ? this.toggleStatus(
      "empty"
      /* Empty */
    ) : this.toggleStatus(
      "uploading"
      /* Uploading */
    ), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const i = _("div", [this.CSS.button]);
    return i.innerHTML = this.config.buttonContent || `${L} ${this.api.i18n.t("Select an Image")}`, i.addEventListener("click", () => {
      this.onSelectFile();
    }), i;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(i) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${i})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(i) {
    const n = /\.mp4$/.test(i) ? "VIDEO" : "IMG", l = {
      src: i
    };
    let a = "load";
    n === "VIDEO" && (l.autoplay = !0, l.loop = !0, l.muted = !0, l.playsinline = !0, a = "loadeddata"), this.nodes.imageEl = _(n, this.CSS.imageEl, l), this.nodes.imageEl.addEventListener(a, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(i) {
    this.nodes.caption && (this.nodes.caption.innerHTML = i);
  }
  /**
   * Shows link input
   *
   * @param {string} text - link text
   * @returns {void}
   */
  fillLink(i) {
    this.nodes.link && (this.nodes.link.innerHTML = i);
  }
  /**
   * Shows alt input
   *
   * @param {string} text - alt text
   * @returns {void}
   */
  fillAlt(i) {
    this.nodes.alt && (this.nodes.alt.innerHTML = i);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(i) {
    for (const n in M)
      Object.prototype.hasOwnProperty.call(M, n) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${M[n]}`, i === M[n]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(i, n) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${i}`, n);
  }
}
function D(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var H = { exports: {} };
(function(C, i) {
  (function(n, l) {
    C.exports = l();
  })(window, function() {
    return function(n) {
      var l = {};
      function a(r) {
        if (l[r]) return l[r].exports;
        var o = l[r] = { i: r, l: !1, exports: {} };
        return n[r].call(o.exports, o, o.exports, a), o.l = !0, o.exports;
      }
      return a.m = n, a.c = l, a.d = function(r, o, d) {
        a.o(r, o) || Object.defineProperty(r, o, { enumerable: !0, get: d });
      }, a.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, a.t = function(r, o) {
        if (1 & o && (r = a(r)), 8 & o || 4 & o && typeof r == "object" && r && r.__esModule) return r;
        var d = /* @__PURE__ */ Object.create(null);
        if (a.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: r }), 2 & o && typeof r != "string") for (var k in r) a.d(d, k, (function(c) {
          return r[c];
        }).bind(null, k));
        return d;
      }, a.n = function(r) {
        var o = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return a.d(o, "a", o), o;
      }, a.o = function(r, o) {
        return Object.prototype.hasOwnProperty.call(r, o);
      }, a.p = "", a(a.s = 3);
    }([function(n, l) {
      var a;
      a = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        a = a || new Function("return this")();
      } catch {
        typeof window == "object" && (a = window);
      }
      n.exports = a;
    }, function(n, l, a) {
      (function(r) {
        var o = a(2), d = setTimeout;
        function k() {
        }
        function c(e) {
          if (!(this instanceof c)) throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function p(e, u) {
          for (; e._state === 3; ) e = e._value;
          e._state !== 0 ? (e._handled = !0, c._immediateFn(function() {
            var s = e._state === 1 ? u.onFulfilled : u.onRejected;
            if (s !== null) {
              var g;
              try {
                g = s(e._value);
              } catch (m) {
                return void y(u.promise, m);
              }
              h(u.promise, g);
            } else (e._state === 1 ? h : y)(u.promise, e._value);
          })) : e._deferreds.push(u);
        }
        function h(e, u) {
          try {
            if (u === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var s = u.then;
              if (u instanceof c) return e._state = 3, e._value = u, void w(e);
              if (typeof s == "function") return void t((g = s, m = u, function() {
                g.apply(m, arguments);
              }), e);
            }
            e._state = 1, e._value = u, w(e);
          } catch (f) {
            y(e, f);
          }
          var g, m;
        }
        function y(e, u) {
          e._state = 2, e._value = u, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && c._immediateFn(function() {
            e._handled || c._unhandledRejectionFn(e._value);
          });
          for (var u = 0, s = e._deferreds.length; u < s; u++) p(e, e._deferreds[u]);
          e._deferreds = null;
        }
        function v(e, u, s) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof u == "function" ? u : null, this.promise = s;
        }
        function t(e, u) {
          var s = !1;
          try {
            e(function(g) {
              s || (s = !0, h(u, g));
            }, function(g) {
              s || (s = !0, y(u, g));
            });
          } catch (g) {
            if (s) return;
            s = !0, y(u, g);
          }
        }
        c.prototype.catch = function(e) {
          return this.then(null, e);
        }, c.prototype.then = function(e, u) {
          var s = new this.constructor(k);
          return p(this, new v(e, u, s)), s;
        }, c.prototype.finally = o.a, c.all = function(e) {
          return new c(function(u, s) {
            if (!e || e.length === void 0) throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0) return u([]);
            var m = g.length;
            function f(T, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var S = E.then;
                  if (typeof S == "function") return void S.call(E, function(F) {
                    f(T, F);
                  }, s);
                }
                g[T] = E, --m == 0 && u(g);
              } catch (F) {
                s(F);
              }
            }
            for (var b = 0; b < g.length; b++) f(b, g[b]);
          });
        }, c.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === c ? e : new c(function(u) {
            u(e);
          });
        }, c.reject = function(e) {
          return new c(function(u, s) {
            s(e);
          });
        }, c.race = function(e) {
          return new c(function(u, s) {
            for (var g = 0, m = e.length; g < m; g++) e[g].then(u, s);
          });
        }, c._immediateFn = typeof r == "function" && function(e) {
          r(e);
        } || function(e) {
          d(e, 0);
        }, c._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, l.a = c;
      }).call(this, a(5).setImmediate);
    }, function(n, l, a) {
      l.a = function(r) {
        var o = this.constructor;
        return this.then(function(d) {
          return o.resolve(r()).then(function() {
            return d;
          });
        }, function(d) {
          return o.resolve(r()).then(function() {
            return o.reject(d);
          });
        });
      };
    }, function(n, l, a) {
      function r(t) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      a(4);
      var o, d, k, c, p, h, y, w = a(8), v = (d = function(t) {
        return new Promise(function(e, u) {
          t = c(t), (t = p(t)).beforeSend && t.beforeSend();
          var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var f = t.headers[m];
            s.setRequestHeader(m, f);
          });
          var g = t.ratio;
          s.upload.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * g / 100);
            t.progress(Math.min(b, 100));
          }, !1), s.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), b = Math.ceil(f * (100 - g) / 100) + g;
            t.progress(Math.min(b, 100));
          }, !1), s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var m = s.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var f = w.parseHeaders(s.getAllResponseHeaders()), b = { body: m, code: s.status, headers: f };
              y(s.status) ? e(b) : u(b);
            }
          }, s.send(t.data);
        });
      }, k = function(t) {
        return t.method = "POST", d(t);
      }, c = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && r(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, p = function(t) {
        switch (t.method) {
          case "GET":
            var e = h(t.data, o.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var u = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (u = o.FORM), t.data = h(t.data, u), u !== v.contentType.FORM && (t.headers["content-type"] = u);
        }
        return t;
      }, h = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case o.URLENCODED:
            return w.urlEncode(t);
          case o.JSON:
            return w.jsonEncode(t);
          case o.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: o = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: k, transport: function(t) {
        return t = c(t), w.selectFiles(t).then(function(e) {
          for (var u = new FormData(), s = 0; s < e.length; s++) u.append(t.fieldName, e[s], e[s].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var f = t.data[m];
            u.append(m, f);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = u, k(t);
        });
      }, selectFiles: function(t) {
        return delete (t = c(t)).beforeSend, w.selectFiles(t);
      } });
      n.exports = v;
    }, function(n, l, a) {
      a.r(l);
      var r = a(1);
      window.Promise = window.Promise || r.a;
    }, function(n, l, a) {
      (function(r) {
        var o = r !== void 0 && r || typeof self < "u" && self || window, d = Function.prototype.apply;
        function k(c, p) {
          this._id = c, this._clearFn = p;
        }
        l.setTimeout = function() {
          return new k(d.call(setTimeout, o, arguments), clearTimeout);
        }, l.setInterval = function() {
          return new k(d.call(setInterval, o, arguments), clearInterval);
        }, l.clearTimeout = l.clearInterval = function(c) {
          c && c.close();
        }, k.prototype.unref = k.prototype.ref = function() {
        }, k.prototype.close = function() {
          this._clearFn.call(o, this._id);
        }, l.enroll = function(c, p) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = p;
        }, l.unenroll = function(c) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = -1;
        }, l._unrefActive = l.active = function(c) {
          clearTimeout(c._idleTimeoutId);
          var p = c._idleTimeout;
          p >= 0 && (c._idleTimeoutId = setTimeout(function() {
            c._onTimeout && c._onTimeout();
          }, p));
        }, a(6), l.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, l.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, a(0));
    }, function(n, l, a) {
      (function(r, o) {
        (function(d, k) {
          if (!d.setImmediate) {
            var c, p, h, y, w, v = 1, t = {}, e = !1, u = d.document, s = Object.getPrototypeOf && Object.getPrototypeOf(d);
            s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? c = function(f) {
              o.nextTick(function() {
                m(f);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var f = !0, b = d.onmessage;
                return d.onmessage = function() {
                  f = !1;
                }, d.postMessage("", "*"), d.onmessage = b, f;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(f) {
              f.source === d && typeof f.data == "string" && f.data.indexOf(y) === 0 && m(+f.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), c = function(f) {
              d.postMessage(y + f, "*");
            }) : d.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(f) {
              m(f.data);
            }, c = function(f) {
              h.port2.postMessage(f);
            }) : u && "onreadystatechange" in u.createElement("script") ? (p = u.documentElement, c = function(f) {
              var b = u.createElement("script");
              b.onreadystatechange = function() {
                m(f), b.onreadystatechange = null, p.removeChild(b), b = null;
              }, p.appendChild(b);
            }) : c = function(f) {
              setTimeout(m, 0, f);
            }, s.setImmediate = function(f) {
              typeof f != "function" && (f = new Function("" + f));
              for (var b = new Array(arguments.length - 1), T = 0; T < b.length; T++) b[T] = arguments[T + 1];
              var E = { callback: f, args: b };
              return t[v] = E, c(v), v++;
            }, s.clearImmediate = g;
          }
          function g(f) {
            delete t[f];
          }
          function m(f) {
            if (e) setTimeout(m, 0, f);
            else {
              var b = t[f];
              if (b) {
                e = !0;
                try {
                  (function(T) {
                    var E = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(S[0]);
                        break;
                      case 2:
                        E(S[0], S[1]);
                        break;
                      case 3:
                        E(S[0], S[1], S[2]);
                        break;
                      default:
                        E.apply(k, S);
                    }
                  })(b);
                } finally {
                  g(f), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, a(0), a(7));
    }, function(n, l) {
      var a, r, o = n.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function k() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(s) {
        if (a === setTimeout) return setTimeout(s, 0);
        if ((a === d || !a) && setTimeout) return a = setTimeout, setTimeout(s, 0);
        try {
          return a(s, 0);
        } catch {
          try {
            return a.call(null, s, 0);
          } catch {
            return a.call(this, s, 0);
          }
        }
      }
      (function() {
        try {
          a = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          a = d;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : k;
        } catch {
          r = k;
        }
      })();
      var p, h = [], y = !1, w = -1;
      function v() {
        y && p && (y = !1, p.length ? h = p.concat(h) : w = -1, h.length && t());
      }
      function t() {
        if (!y) {
          var s = c(v);
          y = !0;
          for (var g = h.length; g; ) {
            for (p = h, h = []; ++w < g; ) p && p[w].run();
            w = -1, g = h.length;
          }
          p = null, y = !1, function(m) {
            if (r === clearTimeout) return clearTimeout(m);
            if ((r === k || !r) && clearTimeout) return r = clearTimeout, clearTimeout(m);
            try {
              r(m);
            } catch {
              try {
                return r.call(null, m);
              } catch {
                return r.call(this, m);
              }
            }
          }(s);
        }
      }
      function e(s, g) {
        this.fun = s, this.array = g;
      }
      function u() {
      }
      o.nextTick = function(s) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) g[m - 1] = arguments[m];
        h.push(new e(s, g)), h.length !== 1 || y || c(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = u, o.addListener = u, o.once = u, o.off = u, o.removeListener = u, o.removeAllListeners = u, o.emit = u, o.prependListener = u, o.prependOnceListener = u, o.listeners = function(s) {
        return [];
      }, o.binding = function(s) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function() {
        return "/";
      }, o.chdir = function(s) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function() {
        return 0;
      };
    }, function(n, l, a) {
      function r(d, k) {
        for (var c = 0; c < k.length; c++) {
          var p = k[c];
          p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p);
        }
      }
      var o = a(9);
      n.exports = function() {
        function d() {
          (function(h, y) {
            if (!(h instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var k, c, p;
        return k = d, p = [{ key: "urlEncode", value: function(h) {
          return o(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h)) return h;
          if (this.isFormElement(h)) return new FormData(h);
          if (this.isObject(h)) {
            var y = new FormData();
            return Object.keys(h).forEach(function(w) {
              var v = h[w];
              y.append(w, v);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(h) {
          return Object.prototype.toString.call(h) === "[object Object]";
        } }, { key: "isFormData", value: function(h) {
          return h instanceof FormData;
        } }, { key: "isFormElement", value: function(h) {
          return h instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var v = document.createElement("INPUT");
            v.type = "file", h.multiple && v.setAttribute("multiple", "multiple"), h.accept && v.setAttribute("accept", h.accept), v.style.display = "none", document.body.appendChild(v), v.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(v);
            }, !1), v.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var y = h.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(v) {
            var t = v.split(": "), e = t.shift(), u = t.join(": ");
            e && (w[e] = u);
          }), w;
        } }], (c = null) && r(k.prototype, c), p && r(k, p), d;
      }();
    }, function(n, l) {
      var a = function(o) {
        return encodeURIComponent(o).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(o, d, k, c) {
        return d = d || null, k = k || "&", c = c || null, o ? function(p) {
          for (var h = new Array(), y = 0; y < p.length; y++) p[y] && h.push(p[y]);
          return h;
        }(Object.keys(o).map(function(p) {
          var h, y, w = p;
          if (c && (w = c + "[" + w + "]"), typeof o[p] == "object" && o[p] !== null) h = r(o[p], null, k, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var v = o[p];
            v = (v = (v = (v = v === !0 ? "1" : v) === !1 ? "0" : v) === 0 ? "0" : v) || "", h = a(w) + "=" + a(v);
          }
          return h;
        })).join(k).replace(/[!'()*]/g, "") : "";
      };
      n.exports = r;
    }]);
  });
})(H);
var B = H.exports;
const j = /* @__PURE__ */ D(B);
function P(C) {
  return C && typeof C.then == "function";
}
class A {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: i, onUpload: n, onError: l }) {
    this.config = i, this.onUpload = n, this.onError = l;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: i }) {
    const n = function(a) {
      const r = new FileReader();
      r.readAsDataURL(a), r.onload = (o) => {
        i(o.target.result);
      };
    };
    let l;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const a = this.config.uploader.uploadByFile;
      l = j.selectFiles({ accept: this.config.types || "image/*" }).then((r) => {
        n(r[0]);
        const o = a(r[0]);
        return P(o) || console.warn("Custom uploader method uploadByFile should return a Promise"), o;
      });
    } else
      l = j.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types,
        headers: new Headers(this.config.additionalRequestHeaders),
        beforeSend: (a) => {
          n(a[0]);
        },
        fieldName: this.config.field
      }).then((a) => a.body);
    l.then((a) => {
      this.onUpload(a);
    }).catch((a) => {
      this.onError(a);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(i) {
    let n;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (n = this.config.uploader.uploadByUrl(i), P(n) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : n = j.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: i
      }, this.config.additionalRequestData),
      type: j.contentType.JSON,
      headers: new Headers(this.config.additionalRequestHeaders)
    }).then((l) => l.body), n.then((l) => {
      this.onUpload(l);
    }).catch((l) => {
      this.onError(l);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(i, { onPreview: n }) {
    const l = new FileReader();
    l.readAsDataURL(i), l.onload = (r) => {
      n(r.target.result);
    };
    let a;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      a = this.config.uploader.uploadByFile(i), P(a) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const r = new FormData();
      r.append(this.config.field || "image", i), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o, d]) => {
        r.append(o, d);
      }), a = j.post({
        url: this.config.endpoints.byFile,
        data: r,
        type: j.contentType.JSON,
        headers: new Headers(this.config.additionalRequestHeaders)
      }).then((o) => o.body);
    }
    a.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/ixbtcom/editorjs-image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class O {
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: i, config: n, api: l, readOnly: a, block: r }) {
    this.api = l, this.readOnly = a, this.block = r, this.config = {
      endpoints: n.endpoints,
      additionalRequestData: n.additionalRequestData,
      additionalRequestHeaders: n.additionalRequestHeaders,
      field: n.field,
      types: n.types,
      captionPlaceholder: this.api.i18n.t(n.captionPlaceholder ? n.captionPlaceholder : "Caption"),
      altPlaceholder: this.api.i18n.t(n.altPlaceholder ? n.altPlaceholder : "Source"),
      linkPlaceholder: this.api.i18n.t(n.linkPlaceholder ? n.linkPlaceholder : "Link"),
      buttonContent: n.buttonContent,
      uploader: n.uploader,
      actions: n.actions
    }, this.uploader = new A({
      config: this.config,
      onUpload: (o) => this.onUpload(o),
      onError: (o) => this.uploadingFailed(o)
    }), this.ui = new x({
      api: l,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (o) => {
            this.ui.showPreloader(o);
          }
        });
      },
      readOnly: a
    }), this._data = {
      caption: "",
      alt: "",
      link: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      file: {
        url: ""
      }
    }, this.data = i;
  }
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Image"
    };
  }
  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: I,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: U,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: R,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(i) {
    return !!i.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const i = this.ui.nodes.caption, n = this.ui.nodes.alt, l = this.ui.nodes.link;
    return this._data.caption = i.innerHTML, this._data.alt = n.innerHTML, this._data.link = l.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns TunesMenuConfig
   */
  renderSettings() {
    return O.tunes.concat(this.config.actions || []).map((n) => ({
      icon: n.icon,
      label: this.api.i18n.t(n.title),
      name: n.name,
      toggle: n.toggle,
      isActive: this.data[n.name],
      onActivate: () => {
        if (typeof n.action == "function") {
          n.action(n.name);
          return;
        }
        this.tuneToggled(n.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(i) {
    switch (i.type) {
      case "tag": {
        const n = i.detail.data;
        if (/^blob:/.test(n.src)) {
          const a = await (await fetch(n.src)).blob();
          this.uploadFile(a);
          break;
        }
        this.uploadUrl(n.src);
        break;
      }
      case "pattern": {
        const n = i.detail.data;
        this.uploadUrl(n);
        break;
      }
      case "file": {
        const n = i.detail.file;
        this.uploadFile(n);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(i) {
    this.image = i.file, this._data.caption = i.caption || "", this._data.alt = i.alt || "", this._data.link = i.link || "", this.ui.fillCaption(this._data.caption), this.ui.fillAlt(this._data.alt), this.ui.fillLink(this._data.link), O.tunes.forEach(({ name: n }) => {
      const l = typeof i[n] < "u" ? i[n] === !0 || i[n] === "true" : !1;
      this.setTune(n, l);
    });
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(i) {
    this._data.file = i || { url: "" }, i && i.url && this.ui.fillImage(i.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(i) {
    i.success && i.file ? this.image = i.file : this.uploadingFailed("incorrect response: " + JSON.stringify(i));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(i) {
    console.log("Image Tool: uploading failed because of", i), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(i) {
    this.setTune(i, !this._data[i]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(i, n) {
    this._data[i] = n, this.ui.applyTune(i, n), i === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = n;
    }).catch((l) => {
      console.error(l);
    });
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(i) {
    this.uploader.uploadByFile(i, {
      onPreview: (n) => {
        this.ui.showPreloader(n);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(i) {
    this.ui.showPreloader(i), this.uploader.uploadByUrl(i);
  }
}
export {
  O as default
};
