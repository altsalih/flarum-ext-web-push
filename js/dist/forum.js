module.exports = function(e) { var n = {};

    function t(o) { if (n[o]) return n[o].exports; var i = n[o] = { i: o, l: !1, exports: {} }; return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports } return t.m = e, t.c = n, t.d = function(e, n, o) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, n) { if (1 & n && (e = t(e)), 8 & n) return e; if (4 & n && "object" == typeof e && e && e.__esModule) return e; var o = Object.create(null); if (t.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(o, i, function(n) { return e[n] }.bind(null, i)); return o }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.p = "", t(t.s = 6) }([function(e, n) { e.exports = flarum.core.compat.app }, function(e, n) { e.exports = flarum.core.compat["components/Switch"] }, function(e, n) { e.exports = flarum.core.compat.extend }, function(e, n) { e.exports = flarum.core.compat["components/SettingsPage"] }, , , function(e, n, t) { "use strict";
    t.r(n); var o = t(2),
        i = t(0),
        r = t.n(i),
        u = t(3),
        s = t.n(u),
        a = t(1),
        c = t.n(a);
    r.a.initializers.add("maosal-webpush", function() { Object(o.extend)(s.a.prototype, "notificationsItems", function(e) { e.add("OneSignalSubscriptionButton") }), Object(o.extend)(s.a.prototype, "notificationsItems", function(e) { var n = this;
            e.add("webPushNotifications", c.a.component({ children: r.a.translator.trans("maosal-webpush.forum.subscribe"), state: this.user.preferences().webPushNotifications, onchange: function(e, t) { n.preferenceSaver("webPushNotifications")(e, t), 1 == n.user.preferences().webPushNotifications ? window.subscribeWebPush() : window.unSubscribeWebPush() } })) }), $(document).ready(function() { var e = window.OneSignal || [],
                n = r.a.forum.attribute("maosal_webpush.app_id");
            r.a.forum.attribute("maosal_webpush.subdomain");
            window.subscribeWebPush = function() { Notification.requestPermission().then(function(n) { e.push(["setSubscription", !0]) }) }, window.unSubscribeWebPush = function() { e.push(function() { e.push(["setSubscription", !1]) }) }, e.push(function() { e.init({ appId: n }) }), void 0 !== r.a.session.user && (e.push(["getNotificationPermission", function(e) { "default" == e && r.a.forum.attribute("maosal_webpush.autoprompt") && subscribeWebPush() }]), e.push(function() { e.setExternalUserId(r.a.session.user.id()) })) }) }) }]);
//# sourceMappingURL=forum.js.map