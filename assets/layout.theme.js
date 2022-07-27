!function(t) {
    var e = {};
    function n(o) {
        if (e[o])
            return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(o, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return o
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 20)
}({
    0: function(t, e) {},
    20: function(t, e, n) {
        "use strict";
        n.r(e);
        n(4),
        n(5),
        n(6),
        n(7);
        var o = n(0)
          , r = n.n(o);
        function a(t, e, n, o, r, a, i) {
            try {
                var c = t[a](i)
                  , u = c.value
            } catch (t) {
                return void n(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(o, r)
        }
        function i(t) {
            return function() {
                var e = this
                  , n = arguments;
                return new Promise((function(o, r) {
                    var i = t.apply(e, n);
                    function c(t) {
                        a(i, o, r, c, u, "next", t)
                    }
                    function u(t) {
                        a(i, o, r, c, u, "throw", t)
                    }
                    c(void 0)
                }
                ))
            }
        }
        var c = "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572";
        function u() {
            return (u = i(regeneratorRuntime.mark((function t() {
                var e, n;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            fetch(c);
                        case 2:
                            return e = t.sent,
                            t.next = 5,
                            e.json();
                        case 5:
                            return n = t.sent,
                            window.__shopper__ = window.__shopper__ || {},
                            window.__shopper__.geo = n,
                            t.abrupt("return", n);
                        case 9:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function s(t) {
            var e = t.country_code;
            const shippingCountries = ['CA', 'US', 'DE', 'FR', 'NL', 'GB', 'IE', 'AU', 'NZ'];
            window.__shopper__ = window.__shopper__ || {},
            window.__shopper__.countryCallback = function() {
                window.jQuery("#country").countrySelect("setCountry", window.__shopper__.geo.country_name)
            }
            ,
            shippingCountries.includes(e) || "true" !== sessionStorage.getItem("sheertex.hasDisplayedGeoPopup") && (window.jQuery("#country").countrySelect(),
            window.jQuery(document).ready((function() {
                setTimeout((function() {
                    window.jQuery("#country").countrySelect("setCountry", t.country_name),
                    document.getElementById("geoModal").style.display = "block",
                    sessionStorage.setItem("sheertex.hasDisplayedGeoPopup", "true")
                }
                ), 9e4)
            }
            )))
        }
        function l() {
            document.getElementById("geoModal").style.display = "none",
            window.__shopper__ && window.__shopper__.popupCallback
        }
        function f(t, e) {
            var n;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return p(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var o = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[o++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0, c = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return i = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    a = t
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw a
                    }
                }
            }
        }
        function p(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++)
                o[n] = t[n];
            return o
        }
        window.jQuery("#geo_modal_form").submit((function(t) {
            t.preventDefault(),
            window.jQuery.ajax({
                url: "https://hooks.zapier.com/hooks/catch/6311450/omol8sh/",
                type: "post",
                data: window.jQuery("#geo_modal_form").serialize(),
                success: function() {
                    window.jQuery(".inner-content").hide(),
                    window.jQuery(".success").show()
                }
            })
        }
        )),
        window.onclick = function(t) {
            t.target == geoModal && l()
        }
        ,
        document.querySelector(".close-geopop").onclick = function() {
            l()
        }
        ,
        document.querySelector("#geoModal #continue-shopping").onclick = function() {
            window.__shopper__ && window.__shopper__.popupCallback && window.__shopper__.popupCallback(),
            l()
        }
        ;
        var d, h = f(document.querySelectorAll('a[href*="www.amazon"]'));
        try {
            var y = function() {
                var t = d.value;
                t && t.addEventListener("click", (function(e) {
                    var n = {
                        href: t.href,
                        target: m(e.target),
                        timestamp: e.timestamp
                    };
                    window.analytics.track("Clicked an Amazon link", n, {}, (function() {
                        window.location.href = t.href
                    }
                    ))
                }
                ))
            };
            for (h.s(); !(d = h.n()).done; )
                y()
        } catch (t) {
            h.e(t)
        } finally {
            h.f()
        }
        function m(t) {
            for (var e = document.getElementsByTagName("*"), n = []; t && 1 == t.nodeType; t = t.parentNode)
                if (t.hasAttribute("id")) {
                    for (var o = 0, r = 0; r < e.length && (e[r].hasAttribute("id") && e[r].id == t.id && o++,
                    !(o > 1)); r++)
                        ;
                    if (1 == o)
                        return n.unshift('id("'.concat(t.getAttribute("id"), '")')),
                        n.join("/");
                    n.unshift("".concat(t.localName.toLowerCase(), '[@id="').concat(t.getAttribute("id"), '"]'))
                } else if (t.hasAttribute("class"))
                    n.unshift("".concat(t.localName.toLowerCase(), '[@class="').concat(t.getAttribute("class"), '"]'));
                else {
                    for (var a = 1, i = t.previousSibling; i; i = i.previousSibling)
                        i.localName == t.localName && a++;
                    n.unshift("".concat(t.localName.toLowerCase(), "[").concat(a, "]"))
                }
            return n.length ? "/".concat(n.join("/")) : null
        }
        (function() {
            return u.apply(this, arguments)
        }
        )().then((function(t) {
            !function(t, e) {
                var n, o = e.utm_campaign, r = f(document.querySelectorAll('a[href*="amazon.com/"]'));
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var a = n.value
                          , i = new URL(a.href);
                        if ("CA" === t.country_code && (i.host = "amazon.ca"),
                        o) {
                            var c = [i.searchParams.get("channel") || "", o].join("");
                            i.searchParams.delete("channel"),
                            i.searchParams.append("channel", c)
                        }
                        a.href = i.href
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }(t, r.a),
            s(t)
        }
        ))
    },
    4: function(t, e) {
        var n = !1
          , o = !1;
        window.jQuery("#product_notify_form").submit((function(t) {
            t.preventDefault(),
            !1 === o && !1 === n && (o = !0,
            window.jQuery(".notify-btn-text").text("Signing you up..."),
            window.jQuery.ajax({
                url: "https://hooks.zapier.com/hooks/catch/6311450/o10k5kr/",
                type: "post",
                data: window.jQuery("#product_notify_form").serialize(),
                error: function() {
                    o = !1,
                    n = !1,
                    window.jQuery(".notify-btn").css("background", "darksalmon"),
                    window.jQuery(".notify-btn-text").text("Please click to try again")
                },
                success: function() {
                    o = !1,
                    n = !0,
                    window.jQuery(".notify-btn").css("background", "#43b943"),
                    window.jQuery(".notify-btn").hover((function() {
                        window.jQuery(this).css("padding-right", "20px")
                    }
                    )),
                    window.jQuery(".notify-btn-text").text("Thanks for signing up!")
                }
            }))
        }
        ))
    },
    5: function(t, e, n) {},
    6: function(t, e, n) {},
    7: function(t, e, n) {}
});
