(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(':root{--ej-radius-sm: 6px;--ej-radius-md: 8px;--ej-radius-lg: 12px;--ej-bg-page: #fff;--ej-bg-surface: #fff;--ej-bg-muted: var(--gray-50, #f9fafb);--ej-bg-input: #fff;--ej-ring: rgba(3, 7, 18, .1);--ej-ring-focus: var(--primary-600, #2563eb);--ej-border: var(--gray-200, #e5e7eb);--ej-border-strong: rgba(3, 7, 18, .05);--ej-text: var(--gray-950, #030712);--ej-text-secondary: var(--gray-500, #6b7280);--ej-text-muted: var(--gray-400, #9ca3af);--ej-text-on-primary: #fff;--ej-primary: var(--primary-600, #2563eb);--ej-primary-hover: var(--primary-700, #1d4ed8);--ej-primary-light: var(--primary-50, #eff6ff);--ej-primary-muted: var(--primary-100, #dbeafe);--ej-success-bg: var(--success-50, #f0fdf4);--ej-success-border: var(--success-500, #22c55e);--ej-success-text: var(--success-700, #15803d);--ej-warning-bg: var(--warning-50, #fffbeb);--ej-warning-border: var(--warning-500, #f59e0b);--ej-warning-text: var(--warning-700, #b45309);--ej-danger: var(--danger-600, #dc2626);--ej-danger-bg: var(--danger-50, #fef2f2);--ej-danger-border: var(--danger-500, #ef4444);--ej-danger-text: var(--danger-700, #b91c1c);--ej-danger-hover-bg: var(--danger-100, #fee2e2);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--ej-transition: 75ms ease;--ej-control-bg: rgba(255, 255, 255, .9);--ej-control-hover: rgba(0, 0, 0, .05);--ej-icon-color: var(--gray-400, #9ca3af)}.dark{--ej-bg-page: var(--gray-900, #111827);--ej-bg-surface: var(--gray-900, #111827);--ej-bg-muted: rgba(255, 255, 255, .05);--ej-bg-input: rgba(255, 255, 255, .05);--ej-ring: rgba(255, 255, 255, .2);--ej-ring-focus: var(--primary-500, #3b82f6);--ej-border: rgba(255, 255, 255, .1);--ej-border-strong: rgba(255, 255, 255, .1);--ej-text: #fff;--ej-text-secondary: var(--gray-400, #9ca3af);--ej-text-muted: var(--gray-500, #6b7280);--ej-text-on-primary: #fff;--ej-control-bg: rgba(30, 30, 30, .9);--ej-control-hover: rgba(255, 255, 255, .1);--ej-icon-color: var(--gray-500, #6b7280);--ej-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .3);--ej-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -2px rgba(0, 0, 0, .2)}@keyframes ej-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.image-tool{--bg-color: var(--ej-bg-muted);--front-color: var(--ej-primary);--border-color: var(--ej-border)}.image-tool__image{position:relative;margin-bottom:10px;overflow:hidden;border-radius:var(--ej-radius-md)}.image-tool__image-picture{display:block;max-width:100%;vertical-align:bottom}.image-tool__image-preloader{position:relative;width:50px;height:50px;margin:auto;border-radius:50%;background-color:var(--bg-color);background-position:center;background-size:cover}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;top:50%;left:50%;box-sizing:border-box;width:60px;height:60px;margin-top:-30px;margin-left:-30px;border:2px solid var(--bg-color);border-top-color:var(--front-color);border-radius:50%;animation:image-preloader-spin 2s infinite linear}.image-tool__controls{position:absolute;z-index:10;top:8px;right:8px;display:flex;gap:4px;opacity:0;transition:opacity var(--ej-transition)}.image-tool__controls[hidden]{display:none}.image-tool__image:hover .image-tool__controls,.image-tool__image:focus-within .image-tool__controls{opacity:1}.image-tool__cover,.image-tool__remove{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:0;border-radius:var(--ej-radius-sm);background:var(--ej-control-bg);color:var(--ej-text);cursor:pointer;font-size:16px;line-height:1}.image-tool__cover:hover,.image-tool__remove:hover{background:var(--ej-control-hover)}.image-tool__cover:focus-visible,.image-tool__remove:focus-visible{outline:2px solid var(--ej-ring-focus);outline-offset:2px}.image-tool__cover{color:#fbbf24}.image-tool__remove{color:var(--ej-danger)}.image-tool__image[data-cover]{outline:2px solid #3b82f6;outline-offset:-2px}.image-tool__image[data-cover]:before{content:"Обложка";position:absolute;z-index:3;top:6px;left:6px;padding:2px 8px;border-radius:var(--ej-radius-sm);background:#3b82f6e6;color:#fff;font-size:11px;font-weight:600;pointer-events:none}.image-tool__dimensions{position:absolute;z-index:5;bottom:8px;left:8px;padding:2px 6px;border-radius:var(--ej-radius-sm);background:#0009;color:#fff;font-family:monospace;font-size:11px;pointer-events:none}.image-tool__caption,.image-tool__source,.image-tool__source-link{position:relative;margin-bottom:12px;word-break:break-word;white-space:normal}.image-tool__caption[contentEditable=true][data-placeholder]:before,.image-tool__source[contentEditable=true][data-placeholder]:before,.image-tool__source-link[contentEditable=true][data-placeholder]:before{content:attr(data-placeholder);position:absolute!important;display:none;color:var(--ej-text-muted);font-weight:400}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before,.image-tool__source[contentEditable=true][data-placeholder]:empty:before,.image-tool__source-link[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin-right:6px}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader,.image-tool--loading .image-tool__image-picture{display:none}.image-tool--loading .image-tool__image{display:flex;min-height:200px;border:1px solid var(--border-color);background:var(--ej-bg-surface)}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.image-tool__controls{transition-duration:.01ms}}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function E(C, e = null, o = {}) {
  const a = document.createElement(C);
  Array.isArray(e) ? a.classList.add(...e) : e && a.classList.add(e);
  for (const s in o)
    o.hasOwnProperty(s) && (a[s] = o[s]);
  return a;
}
var H = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "loading", C.Filled = "filled", C))(H || {});
class B {
  constructor({ api: e, config: o, onSelectFile: a, onDelete: s, onSetCover: i, readOnly: n }) {
    var f;
    this.api = e, this.config = o, this.readOnly = n, this.onSelectFile = a, this.onDelete = s, this.onSetCover = i;
    const u = E("div", [this.CSS.imageContainer]), m = E("div", [this.CSS.controls]), l = E("button", [this.CSS.remove], { type: "button" }), h = ((f = this.config.cover) == null ? void 0 : f.enabled) === !0 ? E("button", [this.CSS.cover], { type: "button" }) : null;
    h !== null && (h.innerHTML = "★", h.title = "Сделать обложкой", h.setAttribute("aria-label", "Сделать обложкой"), h.setAttribute("aria-pressed", "false"), h.addEventListener("click", (y) => {
      y.stopPropagation(), this.onSetCover() && this.markCover(!0);
    })), l.innerHTML = "×", l.title = "Удалить изображение", l.setAttribute("aria-label", "Удалить изображение"), l.addEventListener("click", (y) => {
      y.stopPropagation(), this.onDelete();
    }), h !== null && m.append(h), m.append(l), this.nodes = {
      wrapper: E("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: u,
      controls: m,
      coverButton: h,
      fileButton: this.createFileButton(),
      imagePreloader: E("div", this.CSS.imagePreloader),
      imageDimensions: E("div", this.CSS.dimensions),
      caption: E("div", [this.CSS.input, this.CSS.caption], { contentEditable: !this.readOnly }),
      alt: E("div", [this.CSS.input, this.CSS.source], { contentEditable: !this.readOnly }),
      link: E("div", [this.CSS.input, this.CSS.sourceLink], { contentEditable: !this.readOnly })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.alt.dataset.placeholder = this.config.altPlaceholder, this.nodes.link.dataset.placeholder = this.config.linkPlaceholder, this.nodes.controls.hidden = this.readOnly, this.nodes.imageDimensions.hidden = !0, this.nodes.imageContainer.append(
      this.nodes.imagePreloader,
      this.nodes.controls,
      this.nodes.imageDimensions
    ), this.nodes.wrapper.append(
      this.nodes.imageContainer,
      this.nodes.caption,
      this.nodes.alt,
      this.nodes.link,
      this.nodes.fileButton
    );
  }
  render(e) {
    var i, n, u, m, l;
    const o = typeof ((i = e.file) == null ? void 0 : i.url) == "string" && e.file.url !== "", a = (n = e.file) == null ? void 0 : n.media_id, s = typeof a == "string" && a !== "" ? a : null;
    return this.nodes.controls.hidden = !o || this.readOnly, (u = this.nodes.coverButton) == null || u.toggleAttribute("hidden", s === null), this.markCover(s !== null && (((l = (m = this.config.cover) == null ? void 0 : m.isCover) == null ? void 0 : l.call(m, s)) ?? !1)), this.toggleStatus(
      o ? "loading" : "empty"
      /* Empty */
    ), this.nodes.wrapper;
  }
  applyTune(e, o) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`, o);
  }
  markCover(e) {
    var o;
    this.nodes.imageContainer.toggleAttribute("data-cover", e), (o = this.nodes.coverButton) == null || o.setAttribute("aria-pressed", String(e));
  }
  applyCrop(e, o, a, s, i, n, u) {
    if (this.nodes.imageEl !== void 0) {
      if (typeof a == "string" && a !== "") {
        this.nodes.imageContainer.dataset.crop = a, this.nodes.imageEl.style.width = "100%", this.nodes.imageEl.setAttribute("src", this.buildPreviewUrl(o, a) || e), this.setImageDimensions(s, i);
        return;
      }
      delete this.nodes.imageContainer.dataset.crop, this.nodes.imageEl.style.width = "", this.nodes.imageEl.setAttribute("src", e), this.setImageDimensions(n, u);
    }
  }
  showPreloader(e) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${e})`, this.toggleStatus(
      "loading"
      /* Uploading */
    );
  }
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  fillImage(e) {
    var i;
    (i = this.nodes.imageEl) == null || i.remove();
    const o = /\.mp4$/.test(e) ? "VIDEO" : "IMG", a = {};
    let s = "load";
    o === "VIDEO" && (a.autoplay = !0, a.loop = !0, a.muted = !0, a.playsinline = !0, s = "loadeddata"), this.nodes.imageEl = E(o, this.CSS.imageEl, a), this.nodes.imageEl.addEventListener(s, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader.style.backgroundImage = "";
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl), this.nodes.imageEl.setAttribute("src", e);
  }
  fillCaption(e) {
    this.nodes.caption.innerHTML = e;
  }
  fillLink(e) {
    this.nodes.link.innerHTML = e;
  }
  fillAlt(e) {
    this.nodes.alt.innerHTML = e;
  }
  createFileButton() {
    const e = E("div", [this.CSS.button]);
    return e.innerHTML = this.config.buttonContent || `${O} ${this.api.i18n.t("Select an Image")}`, e.addEventListener("click", () => this.onSelectFile()), e;
  }
  setImageDimensions(e, o) {
    const a = Number.isFinite(e) && Number.isFinite(o) && (e ?? 0) > 0 && (o ?? 0) > 0;
    this.nodes.imageDimensions.hidden = !a, this.nodes.imageDimensions.textContent = a ? `${e} × ${o}` : "", this.nodes.imageEl instanceof HTMLElement && (this.nodes.imageEl.style.aspectRatio = a ? `${e} / ${o}` : "");
  }
  buildPreviewUrl(e, o, a = 600) {
    return typeof this.config.mediaHost != "string" || this.config.mediaHost === "" || typeof e != "string" || e === "" ? "" : `${this.config.mediaHost}/unsafe/${o}/fit-in/${a}x0/${e}`;
  }
  toggleStatus(e) {
    Object.values(H).forEach((o) => {
      this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${o}`, e === o);
    });
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      button: this.api.styles.button,
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      dimensions: "image-tool__dimensions",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption",
      source: "image-tool__source",
      sourceLink: "image-tool__source-link",
      controls: "image-tool__controls",
      cover: "image-tool__cover",
      remove: "image-tool__remove"
    };
  }
}
function x(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var L = { exports: {} };
(function(C, e) {
  (function(o, a) {
    C.exports = a();
  })(window, function() {
    return function(o) {
      var a = {};
      function s(i) {
        if (a[i]) return a[i].exports;
        var n = a[i] = { i, l: !1, exports: {} };
        return o[i].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
      }
      return s.m = o, s.c = a, s.d = function(i, n, u) {
        s.o(i, n) || Object.defineProperty(i, n, { enumerable: !0, get: u });
      }, s.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, s.t = function(i, n) {
        if (1 & n && (i = s(i)), 8 & n || 4 & n && typeof i == "object" && i && i.__esModule) return i;
        var u = /* @__PURE__ */ Object.create(null);
        if (s.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: i }), 2 & n && typeof i != "string") for (var m in i) s.d(u, m, (function(l) {
          return i[l];
        }).bind(null, m));
        return u;
      }, s.n = function(i) {
        var n = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return s.d(n, "a", n), n;
      }, s.o = function(i, n) {
        return Object.prototype.hasOwnProperty.call(i, n);
      }, s.p = "", s(s.s = 3);
    }([function(o, a) {
      var s;
      s = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        s = s || new Function("return this")();
      } catch {
        typeof window == "object" && (s = window);
      }
      o.exports = s;
    }, function(o, a, s) {
      (function(i) {
        var n = s(2), u = setTimeout;
        function m() {
        }
        function l(r) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(r, this);
        }
        function h(r, d) {
          for (; r._state === 3; ) r = r._value;
          r._state !== 0 ? (r._handled = !0, l._immediateFn(function() {
            var c = r._state === 1 ? d.onFulfilled : d.onRejected;
            if (c !== null) {
              var v;
              try {
                v = c(r._value);
              } catch (g) {
                return void y(d.promise, g);
              }
              f(d.promise, v);
            } else (r._state === 1 ? f : y)(d.promise, r._value);
          })) : r._deferreds.push(d);
        }
        function f(r, d) {
          try {
            if (d === r) throw new TypeError("A promise cannot be resolved with itself.");
            if (d && (typeof d == "object" || typeof d == "function")) {
              var c = d.then;
              if (d instanceof l) return r._state = 3, r._value = d, void w(r);
              if (typeof c == "function") return void t((v = c, g = d, function() {
                v.apply(g, arguments);
              }), r);
            }
            r._state = 1, r._value = d, w(r);
          } catch (p) {
            y(r, p);
          }
          var v, g;
        }
        function y(r, d) {
          r._state = 2, r._value = d, w(r);
        }
        function w(r) {
          r._state === 2 && r._deferreds.length === 0 && l._immediateFn(function() {
            r._handled || l._unhandledRejectionFn(r._value);
          });
          for (var d = 0, c = r._deferreds.length; d < c; d++) h(r, r._deferreds[d]);
          r._deferreds = null;
        }
        function b(r, d, c) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof d == "function" ? d : null, this.promise = c;
        }
        function t(r, d) {
          var c = !1;
          try {
            r(function(v) {
              c || (c = !0, f(d, v));
            }, function(v) {
              c || (c = !0, y(d, v));
            });
          } catch (v) {
            if (c) return;
            c = !0, y(d, v);
          }
        }
        l.prototype.catch = function(r) {
          return this.then(null, r);
        }, l.prototype.then = function(r, d) {
          var c = new this.constructor(m);
          return h(this, new b(r, d, c)), c;
        }, l.prototype.finally = n.a, l.all = function(r) {
          return new l(function(d, c) {
            if (!r || r.length === void 0) throw new TypeError("Promise.all accepts an array");
            var v = Array.prototype.slice.call(r);
            if (v.length === 0) return d([]);
            var g = v.length;
            function p(S, _) {
              try {
                if (_ && (typeof _ == "object" || typeof _ == "function")) {
                  var T = _.then;
                  if (typeof T == "function") return void T.call(_, function(F) {
                    p(S, F);
                  }, c);
                }
                v[S] = _, --g == 0 && d(v);
              } catch (F) {
                c(F);
              }
            }
            for (var k = 0; k < v.length; k++) p(k, v[k]);
          });
        }, l.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === l ? r : new l(function(d) {
            d(r);
          });
        }, l.reject = function(r) {
          return new l(function(d, c) {
            c(r);
          });
        }, l.race = function(r) {
          return new l(function(d, c) {
            for (var v = 0, g = r.length; v < g; v++) r[v].then(d, c);
          });
        }, l._immediateFn = typeof i == "function" && function(r) {
          i(r);
        } || function(r) {
          u(r, 0);
        }, l._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, a.a = l;
      }).call(this, s(5).setImmediate);
    }, function(o, a, s) {
      a.a = function(i) {
        var n = this.constructor;
        return this.then(function(u) {
          return n.resolve(i()).then(function() {
            return u;
          });
        }, function(u) {
          return n.resolve(i()).then(function() {
            return n.reject(u);
          });
        });
      };
    }, function(o, a, s) {
      function i(t) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        })(t);
      }
      s(4);
      var n, u, m, l, h, f, y, w = s(8), b = (u = function(t) {
        return new Promise(function(r, d) {
          t = l(t), (t = h(t)).beforeSend && t.beforeSend();
          var c = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          c.open(t.method, t.url), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(g) {
            var p = t.headers[g];
            c.setRequestHeader(g, p);
          });
          var v = t.ratio;
          c.upload.addEventListener("progress", function(g) {
            var p = Math.round(g.loaded / g.total * 100), k = Math.ceil(p * v / 100);
            t.progress(Math.min(k, 100));
          }, !1), c.addEventListener("progress", function(g) {
            var p = Math.round(g.loaded / g.total * 100), k = Math.ceil(p * (100 - v) / 100) + v;
            t.progress(Math.min(k, 100));
          }, !1), c.onreadystatechange = function() {
            if (c.readyState === 4) {
              var g = c.response;
              try {
                g = JSON.parse(g);
              } catch {
              }
              var p = w.parseHeaders(c.getAllResponseHeaders()), k = { body: g, code: c.status, headers: p };
              y(c.status) ? r(k) : d(k);
            }
          }, c.send(t.data);
        });
      }, m = function(t) {
        return t.method = "POST", u(t);
      }, l = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && i(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(n).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(r) {
        }, t.beforeSend = t.beforeSend || function(r) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, h = function(t) {
        switch (t.method) {
          case "GET":
            var r = f(t.data, n.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + r : t.url + "?" + r;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var d = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (d = n.FORM), t.data = f(t.data, d), d !== b.contentType.FORM && (t.headers["content-type"] = d);
        }
        return t;
      }, f = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return w.urlEncode(t);
          case n.JSON:
            return w.jsonEncode(t);
          case n.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: u, get: function(t) {
        return t.method = "GET", u(t);
      }, post: m, transport: function(t) {
        return t = l(t), w.selectFiles(t).then(function(r) {
          for (var d = new FormData(), c = 0; c < r.length; c++) d.append(t.fieldName, r[c], r[c].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(g) {
            var p = t.data[g];
            d.append(g, p);
          });
          var v = t.beforeSend;
          return t.beforeSend = function() {
            return v(r);
          }, t.data = d, m(t);
        });
      }, selectFiles: function(t) {
        return delete (t = l(t)).beforeSend, w.selectFiles(t);
      } });
      o.exports = b;
    }, function(o, a, s) {
      s.r(a);
      var i = s(1);
      window.Promise = window.Promise || i.a;
    }, function(o, a, s) {
      (function(i) {
        var n = i !== void 0 && i || typeof self < "u" && self || window, u = Function.prototype.apply;
        function m(l, h) {
          this._id = l, this._clearFn = h;
        }
        a.setTimeout = function() {
          return new m(u.call(setTimeout, n, arguments), clearTimeout);
        }, a.setInterval = function() {
          return new m(u.call(setInterval, n, arguments), clearInterval);
        }, a.clearTimeout = a.clearInterval = function(l) {
          l && l.close();
        }, m.prototype.unref = m.prototype.ref = function() {
        }, m.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, a.enroll = function(l, h) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = h;
        }, a.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, a._unrefActive = a.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var h = l._idleTimeout;
          h >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, h));
        }, s(6), a.setImmediate = typeof self < "u" && self.setImmediate || i !== void 0 && i.setImmediate || this && this.setImmediate, a.clearImmediate = typeof self < "u" && self.clearImmediate || i !== void 0 && i.clearImmediate || this && this.clearImmediate;
      }).call(this, s(0));
    }, function(o, a, s) {
      (function(i, n) {
        (function(u, m) {
          if (!u.setImmediate) {
            var l, h, f, y, w, b = 1, t = {}, r = !1, d = u.document, c = Object.getPrototypeOf && Object.getPrototypeOf(u);
            c = c && c.setTimeout ? c : u, {}.toString.call(u.process) === "[object process]" ? l = function(p) {
              n.nextTick(function() {
                g(p);
              });
            } : function() {
              if (u.postMessage && !u.importScripts) {
                var p = !0, k = u.onmessage;
                return u.onmessage = function() {
                  p = !1;
                }, u.postMessage("", "*"), u.onmessage = k, p;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(p) {
              p.source === u && typeof p.data == "string" && p.data.indexOf(y) === 0 && g(+p.data.slice(y.length));
            }, u.addEventListener ? u.addEventListener("message", w, !1) : u.attachEvent("onmessage", w), l = function(p) {
              u.postMessage(y + p, "*");
            }) : u.MessageChannel ? ((f = new MessageChannel()).port1.onmessage = function(p) {
              g(p.data);
            }, l = function(p) {
              f.port2.postMessage(p);
            }) : d && "onreadystatechange" in d.createElement("script") ? (h = d.documentElement, l = function(p) {
              var k = d.createElement("script");
              k.onreadystatechange = function() {
                g(p), k.onreadystatechange = null, h.removeChild(k), k = null;
              }, h.appendChild(k);
            }) : l = function(p) {
              setTimeout(g, 0, p);
            }, c.setImmediate = function(p) {
              typeof p != "function" && (p = new Function("" + p));
              for (var k = new Array(arguments.length - 1), S = 0; S < k.length; S++) k[S] = arguments[S + 1];
              var _ = { callback: p, args: k };
              return t[b] = _, l(b), b++;
            }, c.clearImmediate = v;
          }
          function v(p) {
            delete t[p];
          }
          function g(p) {
            if (r) setTimeout(g, 0, p);
            else {
              var k = t[p];
              if (k) {
                r = !0;
                try {
                  (function(S) {
                    var _ = S.callback, T = S.args;
                    switch (T.length) {
                      case 0:
                        _();
                        break;
                      case 1:
                        _(T[0]);
                        break;
                      case 2:
                        _(T[0], T[1]);
                        break;
                      case 3:
                        _(T[0], T[1], T[2]);
                        break;
                      default:
                        _.apply(m, T);
                    }
                  })(k);
                } finally {
                  v(p), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, s(0), s(7));
    }, function(o, a) {
      var s, i, n = o.exports = {};
      function u() {
        throw new Error("setTimeout has not been defined");
      }
      function m() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(c) {
        if (s === setTimeout) return setTimeout(c, 0);
        if ((s === u || !s) && setTimeout) return s = setTimeout, setTimeout(c, 0);
        try {
          return s(c, 0);
        } catch {
          try {
            return s.call(null, c, 0);
          } catch {
            return s.call(this, c, 0);
          }
        }
      }
      (function() {
        try {
          s = typeof setTimeout == "function" ? setTimeout : u;
        } catch {
          s = u;
        }
        try {
          i = typeof clearTimeout == "function" ? clearTimeout : m;
        } catch {
          i = m;
        }
      })();
      var h, f = [], y = !1, w = -1;
      function b() {
        y && h && (y = !1, h.length ? f = h.concat(f) : w = -1, f.length && t());
      }
      function t() {
        if (!y) {
          var c = l(b);
          y = !0;
          for (var v = f.length; v; ) {
            for (h = f, f = []; ++w < v; ) h && h[w].run();
            w = -1, v = f.length;
          }
          h = null, y = !1, function(g) {
            if (i === clearTimeout) return clearTimeout(g);
            if ((i === m || !i) && clearTimeout) return i = clearTimeout, clearTimeout(g);
            try {
              i(g);
            } catch {
              try {
                return i.call(null, g);
              } catch {
                return i.call(this, g);
              }
            }
          }(c);
        }
      }
      function r(c, v) {
        this.fun = c, this.array = v;
      }
      function d() {
      }
      n.nextTick = function(c) {
        var v = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var g = 1; g < arguments.length; g++) v[g - 1] = arguments[g];
        f.push(new r(c, v)), f.length !== 1 || y || l(t);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(c) {
        return [];
      }, n.binding = function(c) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(c) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(o, a, s) {
      function i(u, m) {
        for (var l = 0; l < m.length; l++) {
          var h = m[l];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(u, h.key, h);
        }
      }
      var n = s(9);
      o.exports = function() {
        function u() {
          (function(f, y) {
            if (!(f instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, u);
        }
        var m, l, h;
        return m = u, h = [{ key: "urlEncode", value: function(f) {
          return n(f);
        } }, { key: "jsonEncode", value: function(f) {
          return JSON.stringify(f);
        } }, { key: "formEncode", value: function(f) {
          if (this.isFormData(f)) return f;
          if (this.isFormElement(f)) return new FormData(f);
          if (this.isObject(f)) {
            var y = new FormData();
            return Object.keys(f).forEach(function(w) {
              var b = f[w];
              y.append(w, b);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(f) {
          return Object.prototype.toString.call(f) === "[object Object]";
        } }, { key: "isFormData", value: function(f) {
          return f instanceof FormData;
        } }, { key: "isFormElement", value: function(f) {
          return f instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var b = document.createElement("INPUT");
            b.type = "file", f.multiple && b.setAttribute("multiple", "multiple"), f.accept && b.setAttribute("accept", f.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(t) {
              var r = t.target.files;
              y(r), document.body.removeChild(b);
            }, !1), b.click();
          });
        } }, { key: "parseHeaders", value: function(f) {
          var y = f.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(b) {
            var t = b.split(": "), r = t.shift(), d = t.join(": ");
            r && (w[r] = d);
          }), w;
        } }], (l = null) && i(m.prototype, l), h && i(m, h), u;
      }();
    }, function(o, a) {
      var s = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, i = function(n, u, m, l) {
        return u = u || null, m = m || "&", l = l || null, n ? function(h) {
          for (var f = new Array(), y = 0; y < h.length; y++) h[y] && f.push(h[y]);
          return f;
        }(Object.keys(n).map(function(h) {
          var f, y, w = h;
          if (l && (w = l + "[" + w + "]"), typeof n[h] == "object" && n[h] !== null) f = i(n[h], null, m, w);
          else {
            u && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? u + Number(w) : w);
            var b = n[h];
            b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", f = s(w) + "=" + s(b);
          }
          return f;
        })).join(m).replace(/[!'()*]/g, "") : "";
      };
      o.exports = i;
    }]);
  });
})(L);
var U = L.exports;
const M = /* @__PURE__ */ x(U);
function j(C) {
  return C && typeof C.then == "function";
}
class A {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: e, onUpload: o, onError: a }) {
    this.config = e, this.onUpload = o, this.onError = a;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: e }) {
    const o = function(s) {
      const i = new FileReader();
      i.readAsDataURL(s), i.onload = (n) => {
        e(n.target.result);
      };
    };
    let a;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const s = this.config.uploader.uploadByFile;
      a = M.selectFiles({ accept: this.config.types || "image/*" }).then((i) => {
        o(i[0]);
        const n = s(i[0]);
        return j(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
      });
    } else
      a = M.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types,
        headers: new Headers(this.config.additionalRequestHeaders),
        beforeSend: (s) => {
          o(s[0]);
        },
        fieldName: this.config.field
      }).then((s) => s.body);
    a.then((s) => {
      this.onUpload(s);
    }).catch((s) => {
      this.onError(s);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(e) {
    let o;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (o = this.config.uploader.uploadByUrl(e), j(o) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : o = M.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: e
      }, this.config.additionalRequestData),
      type: M.contentType.JSON,
      headers: new Headers(this.config.additionalRequestHeaders)
    }).then((a) => a.body), o.then((a) => {
      this.onUpload(a);
    }).catch((a) => {
      this.onError(a);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(e, { onPreview: o }) {
    const a = new FileReader();
    a.readAsDataURL(e), a.onload = (i) => {
      o(i.target.result);
    };
    let s;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      s = this.config.uploader.uploadByFile(e), j(s) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const i = new FormData();
      i.append(this.config.field || "image", e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, u]) => {
        i.append(n, u);
      }), s = M.post({
        url: this.config.endpoints.byFile,
        data: i,
        type: M.contentType.JSON,
        headers: new Headers(this.config.additionalRequestHeaders)
      }).then((n) => n.body);
    }
    s.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
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
class P {
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: e, config: o, api: a, readOnly: s, block: i }) {
    this.api = a, this.readOnly = s, this.block = i;
    const n = o ?? {};
    this.config = {
      endpoints: n.endpoints ?? {},
      additionalRequestData: n.additionalRequestData,
      additionalRequestHeaders: n.additionalRequestHeaders,
      field: n.field,
      types: n.types,
      captionPlaceholder: this.api.i18n.t(n.captionPlaceholder ? n.captionPlaceholder : "Caption"),
      altPlaceholder: this.api.i18n.t(n.altPlaceholder ? n.altPlaceholder : "Source"),
      linkPlaceholder: this.api.i18n.t(n.linkPlaceholder ? n.linkPlaceholder : "Link"),
      buttonContent: n.buttonContent,
      uploader: n.uploader,
      actions: n.actions,
      mediaHost: n.mediaHost,
      cover: n.cover,
      onMediaRemoved: n.onMediaRemoved
    }, this.uploader = new A({
      config: this.config,
      onUpload: (u) => this.onUpload(u),
      onError: (u) => this.uploadingFailed(u)
    }), this.ui = new B({
      api: a,
      config: this.config,
      onDelete: () => this.deleteBlock(),
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (u) => {
            this.ui.showPreloader(u);
          }
        });
      },
      onSetCover: () => this.selectCover(),
      readOnly: s
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
    }, this.data = e;
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
      icon: O,
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
        icon: R,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: D,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: I,
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
  validate(e) {
    return !!e.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const e = this.ui.nodes.caption, o = this.ui.nodes.alt, a = this.ui.nodes.link;
    return this._data.caption = e.innerHTML, this._data.alt = o.innerHTML, this._data.link = a.innerHTML, this.data;
  }
  /** Queue permanent media cleanup when a legacy block is removed. */
  removed() {
    var o, a;
    const e = this._data.file.media_id;
    typeof e == "string" && e !== "" && ((a = (o = this.config).onMediaRemoved) == null || a.call(o, e));
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns TunesMenuConfig
   */
  renderSettings() {
    return P.tunes.concat(this.config.actions || []).map((o) => ({
      icon: o.icon,
      label: this.api.i18n.t(o.title),
      name: o.name,
      toggle: o.toggle,
      isActive: this.data[o.name],
      onActivate: () => {
        if (typeof o.action == "function") {
          o.action(o.name);
          return;
        }
        this.tuneToggled(o.name);
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
   * ⛔ Пустой конфиг, а НЕ `false`: legacy-блок вставку не перехватывает (новые
   * картинки ведёт блок `media`), но `false` кладёт тул в `exceptionList`
   * EditorJS, и вставка внутри его блока не обрабатывается вообще — картинка из
   * буфера при курсоре в старом блоке уходила бы в никуда.
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {};
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
  async onPaste(e) {
    switch (e.type) {
      case "tag": {
        const o = e.detail.data;
        if (/^blob:/.test(o.src)) {
          const s = await (await fetch(o.src)).blob();
          this.uploadFile(s);
          break;
        }
        this.uploadUrl(o.src);
        break;
      }
      case "pattern": {
        const o = e.detail.data;
        this.uploadUrl(o);
        break;
      }
      case "file": {
        const o = e.detail.file;
        this.uploadFile(o);
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
  set data(e) {
    const o = e.file || { url: "" };
    this._data = { ...this._data, ...e, file: o }, this.image = o;
    const a = o.imagor_path ?? o.imagorPath, s = typeof a == "string" ? a : void 0, i = typeof e.crop == "string" && e.crop !== "" ? e.crop : void 0, n = typeof e.croppedWidth == "number" ? e.croppedWidth : void 0, u = typeof e.croppedHeight == "number" ? e.croppedHeight : void 0, m = typeof o.width == "number" ? o.width : void 0, l = typeof o.height == "number" ? o.height : void 0;
    this.ui.applyCrop(o.url, s, i, n, u, m, l), this._data.caption = e.caption || "", this._data.alt = e.alt || "", this._data.link = e.link || "", this.ui.fillCaption(this._data.caption), this.ui.fillAlt(this._data.alt), this.ui.fillLink(this._data.link), P.tunes.forEach(({ name: h }) => {
      const f = typeof e[h] < "u" ? e[h] === !0 || e[h] === "true" : !1;
      this.setTune(h, f);
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
  set image(e) {
    this._data.file = e || { url: "" }, e && e.url && this.ui.fillImage(e.url);
  }
  /** Select this media item as the publication cover. */
  selectCover() {
    var o, a, s;
    if (((o = this.config.cover) == null ? void 0 : o.enabled) !== !0)
      return !1;
    const e = this._data.file.media_id;
    return typeof e != "string" || e === "" ? (this.api.notifier.show({
      message: this.api.i18n.t("Сначала дождитесь загрузки картинки"),
      style: "error"
    }), !1) : ((s = (a = this.config.cover).onCoverChanged) == null || s.call(a, e, this.block.id), this.api.notifier.show({ message: this.api.i18n.t("Базовая обложка обновлена") }), !0);
  }
  /** Delete this block through the Editor.js API. */
  deleteBlock() {
    const e = this.api.blocks.getBlockIndex(this.block.id);
    e >= 0 && this.api.blocks.delete(e);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(e) {
    if (e.success && e.file) {
      const o = { ...e.file };
      delete o.rights_evidence, this.image = o;
    } else
      this.uploadingFailed("incorrect response: " + JSON.stringify(e));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(e) {
    console.log("Image Tool: uploading failed because of", e), this.api.notifier.show({
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
  tuneToggled(e) {
    this.setTune(e, !this._data[e]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(e, o) {
    this._data[e] = o, this.ui.applyTune(e, o), e === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = o;
    }).catch((a) => {
      console.error(a);
    });
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(e) {
    this.uploader.uploadByFile(e, {
      onPreview: (o) => {
        this.ui.showPreloader(o);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(e) {
    this.ui.showPreloader(e), this.uploader.uploadByUrl(e);
  }
}
export {
  P as default
};
