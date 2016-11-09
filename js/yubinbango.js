var CACHE = [],
    YubinBango;
! function(t) {
    var e = function() {
        function t(t, n) {
            if (void 0 === t && (t = ""), this.URL = "https://yubinbango.github.io/yubinbango-data/data", this.REGION = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"], t) {
                var r = t.replace(/[０-９]/g, function(t) {
                        return String.fromCharCode(t.charCodeAt(0) - 65248)
                    }),
                    o = r.match(/\d/g),
                    a = o.join(""),
                    e = this.chk7(a);
                e && this.getAddr(e, n)
            }
        }
        return t.prototype.chk7 = function(t) {
            return 7 === t.length ? t : void 0
        }, t.prototype.selectAddr = function(e, t) {
            return t[0] && t[1] ? {
                region_id: t[0],
                region: this.REGION[t[0]],
                locality: t[1],
                street: t[2],
                extended: t[3]
            } : void 0
        }, t.prototype.jsonp = function(e, n) {
            window.$yubin = function(t) {
                return n(t)
            };
            var t = document.createElement("script");
            t.setAttribute("type", "text/javascript"), t.setAttribute("charset", "UTF-8"), t.setAttribute("src", e), document.head.appendChild(t)
        }, t.prototype.getAddr = function(t, n) {
            var r = this,
                e = t.substr(0, 3);
            this.cachecheck(t, e) ? n(this.selectAddr(t, CACHE[e][t])) : this.jsonp(this.URL + "/" + e + ".js", function(o) {
                CACHE[e] = o, n(r.selectAddr(t, o[t]))
            })
        }, t.prototype.cachecheck = function(e, t) {
            return CACHE[t] ? !0 : void 0
        }, t
    }();
    t.Core = e
}(YubinBango || (YubinBango = {}));
var ISO31661JP = ["Japan", "JP", "JPN", "JAPAN"],
    HADRLIST = ["p-region", "p-locality", "p-street-address", "p-extended-address"],
    YubinBango;
! function(t) {
    var e = function() {
        function e() {
            var t = this;
            document.addEventListener("DOMContentLoaded", function() {
                t.hadrloop()
            }, !1)
        }
        return e.prototype.hadrloop = function() {
            var t = this,
                n = document.querySelectorAll(".h-adr");
            [].map.call(n, function(n) {
                if (t.countryNameCheck(n)) {
                    var r = n.querySelectorAll(".p-postal-code");
                    r[r.length - 1].addEventListener("keyup", function(n) {
                        e.prototype.applyDom(t.getFormNode(n.target.parentNode))
                    }, !1);
                    r[r.length - 1].addEventListener("blur", function(n) {
                        e.prototype.applyDom(t.getFormNode(n.target.parentNode))
                    }, !1)
                }
            })
        }, e.prototype.getFormNode = function(t) {
            return "FORM" !== t.tagName ? arguments.callee(t.parentNode) : t
        }, e.prototype.countryNameCheck = function(e) {
            var t = e.querySelector(".p-country-name"),
                n = [t.innerHTML, t.value];
            return n.some(function(t) {
                return ISO31661JP.indexOf(t) >= 0
            })
        }, e.prototype.applyDom = function(e) {
            var n = this,
                r = e.querySelectorAll(".p-postal-code");
            new t.Core(this.reduceVal(r), function(t) {
                return n.setAddr(e, t)
            })
        }, e.prototype.reduceVal = function(t) {
            return [].map.call(t, function(t) {
                t.value = t.value.replace(/[０-９]/g, function(t) {
                    return String.fromCharCode(t.charCodeAt(0) - 65248)
                });
                return t.value
            }).reduce(function(t, e) {
                return t + e
            })
        }, e.prototype.setAddr = function(t, e) {
            var n = [this.postalFormClear, this.postalFormSet, this.postalFormSelect];
            n.map(function(n) {
                return HADRLIST.map(function(r) {
                    return n(r, t, e)
                })
            })
        }, e.prototype.postalFormClear = function(t, e, n) {
            if (n) {
                var r = e.querySelectorAll("." + t);
                [].map.call(r, function(t) {
                    return t.value = ""
                })
            }
        }, e.prototype.postalFormSet = function(e, r, t) {
            var n = {
                    "p-region": t.region,
                    "p-locality": t.locality,
                    "p-street-address": t.street,
                    "p-extended-address": t.extended
                },
                o = r.querySelectorAll("." + e);
            [].map.call(o, function(t) {
                return t.value += n[e] ? n[e] : ""
            })
        }, e.prototype.postalFormSelect = function(e, r, t) {
            var n = {
                    "p-region": t.region_id
            }, o = r.querySelectorAll(".p-region");
            [].map.call(o, function(t) {
                return t.selectedIndex = n['p-region']-1 ? n['p-region']-1 : ""
            })
        }, e
    }();
    t.MicroformatDom = e
}(YubinBango || (YubinBango = {})), new YubinBango.MicroformatDom;
//# sourceMappingURL=./yubinbango.js.map