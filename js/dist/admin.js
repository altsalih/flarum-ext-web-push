module.exports = function(t) { var n = {};

    function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } return e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) { if (1 & n && (t = e(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
            for (var o in t) e.d(r, o, function(n) { return t[n] }.bind(null, o)); return r }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = 5) }([, function(t, n) { t.exports = flarum.core.compat["components/Switch"] }, , , function(t, n) { t.exports = flarum.core.compat["components/SettingsModal"] }, function(t, n, e) { "use strict";
    e.r(n); var r = e(4),
        o = e.n(r),
        a = e(1),
        p = e.n(a),
        u = "maosal-webpush.admin.settings.",
        i = function(t) { var n, e;

            function r() { return t.apply(this, arguments) || this }
            e = t, (n = r).prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e; var o = r.prototype; return o.className = function() { return "WebPushSettingsModal Modal--small" }, o.title = function() { return app.translator.trans(u + "title") }, o.form = function() { var t, n, e, r, o = this,
                    a = function(t, n, e, r) { return void 0 === e && (e = !1), void 0 === r && (r = !1), m(".Form-group", [m("label", app.translator.trans(u + n)), m("input.FormControl", { bidi: o.setting("maosal-webpush." + t), placeholder: e ? app.translator.trans(u + n + "Placeholder") : "" }), r ? m(".helpText", app.translator.trans(u + n + "Help")) : null]) }; return [a("app_id", "app_id"), a("api_key", "api_key"), a("user_key", "user_key"), a("subdomain", "subdomain"), a("excerpt_length", "excerpt"), (t = "autoprompt", n = "autoprompt", void 0 === r && (r = !1), m(".Form-group", [p.a.component({ state: "1" === o.setting("maosal-webpush." + t, e ? "1" : "0")(), onchange: function(n) { o.setting("maosal-webpush." + t)(n ? "1" : "0") }, children: app.translator.trans(u + n) }), r ? m(".helpText", app.translator.trans(u + n + "Help")) : null]))] }, r }(o.a);
    app.initializers.add("maosal-web-push", function() { app.extensionSettings["maosal-web-push"] = function() { return app.modal.show(new i) } }) }]);
//# sourceMappingURL=admin.js.map