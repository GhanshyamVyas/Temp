/*------------------------------------*\
       Plugins - Table of contents
   \*------------------------------------*/
/*
 - jQuery UI
 - Slick Slider
 - HC-Sticky
 - Scroll Spy
 - Parallax
 - Bootstrap
 - Menu on scroll
 - anime.js
 - Jarallax
*/

/**
 * Swiper 8.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 4, 2022
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(s, a) {
        void 0 === s && (s = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach((i=>{
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }
        ))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
            initEvent() {}
        }),
        createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s),
        e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i),
        e
    }
    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []),
            function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: ()=>t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }
    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e=>{
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        }
        )),
        t
    }
    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function d(e, t) {
        const s = r()
          , i = a();
        let l = [];
        if (!t && e instanceof n)
            return e;
        if (!e)
            return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"),
                0 === s.indexOf("<tr") && (e = "tbody"),
                0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
                0 === s.indexOf("<tbody") && (e = "table"),
                0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1)
                    l.push(t.childNodes[e])
            } else
                l = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    const s = []
                      , a = t.querySelectorAll(e);
                    for (let e = 0; e < a.length; e += 1)
                        s.push(a[e]);
                    return s
                }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i)
            l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n)
                return e;
            l = e
        }
        return new n(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
                -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const c = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            return this.forEach((e=>{
                e.classList.add(...a)
            }
            )),
            this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            return this.forEach((e=>{
                e.classList.remove(...a)
            }
            )),
            this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            return o(this, (e=>a.filter((t=>e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            this.forEach((e=>{
                a.forEach((t=>{
                    e.classList.toggle(t)
                }
                ))
            }
            ))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length)
                    this[s].setAttribute(e, t);
                else
                    for (const t in e)
                        this[s][t] = e[t],
                        this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            let[a,i,r,n] = t;
            function l(e) {
                const t = e.target;
                if (!t)
                    return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e),
                d(t).is(i))
                    r.apply(t, s);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1)
                        d(e[t]).is(i) && r.apply(e[t], s)
                }
            }
            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
            }
            "function" == typeof t[1] && ([a,r,n] = t,
            i = void 0),
            n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                        t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                        t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: l
                        }),
                        t.addEventListener(e, l, n)
                    }
                else
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                        t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                        t.dom7Listeners[e].push({
                            listener: r,
                            proxyListener: o
                        }),
                        t.addEventListener(e, o, n)
                    }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            let[a,i,r,n] = t;
            "function" == typeof t[1] && ([a,r,n] = t,
            i = void 0),
            n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
                    a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const i = a[e];
                            r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n),
                            a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n),
                            a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function() {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
                s[a] = arguments[a];
            const i = s[0].split(" ")
              , n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a,{
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = s.filter(((e,t)=>t > 0)),
                        i.dispatchEvent(t),
                        i.dom7EventData = [],
                        delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a),
                t.off("transitionend", s))
            }
            )),
            this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r()
                  , t = a()
                  , s = this[0]
                  , i = s.getBoundingClientRect()
                  , n = t.body
                  , l = s.clientTop || n.clientTop || 0
                  , o = s.clientLeft || n.clientLeft || 0
                  , d = s === e ? e.scrollY : s.scrollTop
                  , c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e)
                            this[a].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1)
                    this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t,s)=>{
                e.apply(t, [t, s])
            }
            )),
            this) : this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r()
              , s = a()
              , i = this[0];
            let l, o;
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (l = d(e),
                o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            if (e === s)
                return i === s;
            if (e === t)
                return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e,
                o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            const t = this.length;
            if (e > t - 1)
                return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function() {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild; )
                            this[s].appendChild(a.firstChild)
                    } else if (e instanceof n)
                        for (let t = 0; t < e.length; t += 1)
                            this[s].appendChild(e[t]);
                    else
                        this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e,
                    i = a.childNodes.length - 1; i >= 0; i -= 1)
                        this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                    for (i = 0; i < e.length; i += 1)
                        this[s].insertBefore(e[i], this[s].childNodes[0]);
                else
                    this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.nextElementSibling; ) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.previousElementSibling; ) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1)
                null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a; )
                    e ? d(a).is(e) && t.push(a) : t.push(a),
                    a = a.parentNode
            }
            return d(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1)
                    t.push(a[e])
            }
            return d(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1)
                    e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function(e) {
            return d(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function p(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function u() {
        return Date.now()
    }
    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map((e=>e.replace(",", "."))).join(", ")),
        n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        a = n.toString().split(",")),
        "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0
    }
    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }
    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
          , t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e=>t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t]
                      , r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {},
                    a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }
    function v(e, t, s) {
        e.style.setProperty(t, s)
    }
    function w(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r()
          , n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev"
          , p = (e,t)=>"next" === c && e >= t || "prev" === c && e <= t
          , u = ()=>{
            l = (new Date).getTime(),
            null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0)
              , r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s),
            t.wrapperEl.scrollTo({
                [a]: c
            }),
            p(c, s))
                return t.wrapperEl.style.overflow = "hidden",
                t.wrapperEl.style.scrollSnapType = "",
                setTimeout((()=>{
                    t.wrapperEl.style.overflow = "",
                    t.wrapperEl.scrollTo({
                        [a]: c
                    })
                }
                )),
                void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        }
        ;
        u()
    }
    let b, x, y;
    function E() {
        return b || (b = function() {
            const e = r()
              , t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart"in e
            }
        }()),
        b
    }
    function T(e) {
        return void 0 === e && (e = {}),
        x || (x = function(e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = E()
              , a = r()
              , i = a.navigator.platform
              , n = t || a.navigator.userAgent
              , l = {
                ios: !1,
                android: !1
            }
              , o = a.screen.width
              , d = a.screen.height
              , c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/),
            p || (p = [0, 1, "13_0_0"]),
            f = !1),
            c && !m && (l.os = "android",
            l.android = !0),
            (p || h || u) && (l.os = "ios",
            l.ios = !0),
            l
        }(e)),
        x
    }
    function C() {
        return y || (y = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()),
        y
    }
    Object.keys(c).forEach((e=>{
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        })
    }
    ));
    var $ = {
        on(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            }
            )),
            a
        },
        once(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            function i() {
                a.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
                    r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t,
            a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if ("function" != typeof e)
                return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
            s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners)
                return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1),
            t
        },
        off(e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach((e=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a,i)=>{
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }
                ))
            }
            )),
            s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners)
                return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0],
            s = r.slice(1, r.length),
            a = e) : (t = r[0].events,
            s = r[0].data,
            a = r[0].context || e),
            s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t=>{
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e=>{
                    e.apply(a, [t, ...s])
                }
                )),
                e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e=>{
                    e.apply(a, s)
                }
                ))
            }
            )),
            e
        }
    };
    var S = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth,
            s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight,
            0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10),
            s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;
            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }
            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }
            const a = e.params
              , {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
              , o = e.virtual && a.virtual.enabled
              , d = o ? e.virtual.slides.length : e.slides.length
              , c = i.children(`.${e.params.slideClass}`)
              , p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = []
              , m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length
              , b = e.slidesGrid.length;
            let x = a.spaceBetween
              , y = -f
              , E = 0
              , T = 0;
            if (void 0 === r)
                return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r),
            e.virtualSize = -x,
            n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }),
            a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
            v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const C = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            C && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e=>void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (C && e.grid.updateSlide(i, n, p, t),
                "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0])
                          , l = n[0].style.transform
                          , o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"),
                        o && (n[0].style.webkitTransform = "none"),
                        a.roundLengths)
                            $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else {
                            const e = s(r, "width")
                              , t = s(r, "padding-left")
                              , a = s(r, "padding-right")
                              , i = s(r, "margin-left")
                              , l = s(r, "margin-right")
                              , o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o)
                                $ = e + i + l;
                            else {
                                const {clientWidth: s, offsetWidth: r} = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l),
                        o && (n[0].style.webkitTransform = o),
                        a.roundLengths && ($ = Math.floor($))
                    } else
                        $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView,
                        a.roundLengths && ($ = Math.floor($)),
                        c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $),
                    m.push($),
                    a.centeredSlides ? (y = y + $ / 2 + E / 2 + x,
                    0 === E && 0 !== i && (y = y - r / 2 - x),
                    0 === i && (y = y - r / 2 - x),
                    Math.abs(y) < .001 && (y = 0),
                    a.roundLengths && (y = Math.floor(y)),
                    T % a.slidesPerGroup == 0 && u.push(y),
                    h.push(y)) : (a.roundLengths && (y = Math.floor(y)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y),
                    h.push(y),
                    y = y + $ + x),
                    e.virtualSize += $ + x,
                    E = $,
                    T += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g,
            n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                width: `${e.virtualSize + a.spaceBetween}px`
            }),
            a.setWrapperSize && i.css({
                [t("width")]: `${e.virtualSize + a.spaceBetween}px`
            }),
            C && e.grid.updateWrapperSize($, u, t),
            !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)),
                    u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t,
                Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]),
            0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e,t)=>!a.cssMode || t !== c.length - 1)).css({
                    [s]: `${x}px`
                })
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t=>{
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                }
                )),
                e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e=>e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t=>{
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                }
                )),
                e -= a.spaceBetween,
                e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e,s)=>{
                        u[s] = e - t
                    }
                    )),
                    h.forEach(((e,s)=>{
                        h[s] = e + t
                    }
                    ))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: m
            }),
            a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0]
                  , s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e=>e + t)),
                e.slidesGrid = e.slidesGrid.map((e=>e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"),
            u.length !== w && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            a.watchSlidesProgress && e.updateSlidesOffset(),
            !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`
                  , s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this
              , s = []
              , a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e=>a ? t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    t.visibleSlides.each((e=>{
                        s.push(e)
                    }
                    ));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a)
                            break;
                        s.push(n(e))
                    }
            else
                s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides;
            for (let s = 0; s < t.length; s += 1)
                t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this
              , s = t.params
              , {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length)
                return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e),
            a.removeClass(s.slideVisibleClass),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                  , c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                  , p = -(n - o)
                  , u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(e),
                a.eq(e).addClass(s.slideVisibleClass)),
                l.progress = i ? -d : d,
                l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params
              , a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n} = t;
            const l = r
              , o = n;
            0 === a ? (i = 0,
            r = !0,
            n = !0) : (i = (e - t.minTranslate()) / a,
            r = i <= 0,
            n = i >= 1),
            Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }),
            (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
            r && !l && t.emit("reachBeginning toEdge"),
            n && !o && t.emit("reachEnd toEdge"),
            (l && !r || o && !n) && t.emit("fromEdge"),
            t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e
              , n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
            l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
            l.addClass(s.slideActiveClass),
            s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0),
            o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1),
            d.addClass(s.slidePrevClass)),
            s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this
              , s = t.rtlTranslate ? t.translate : -t.translate
              , {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1)
                    void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0)
                d = i.indexOf(s);
            else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1),
            c === n)
                return void (d !== o && (t.snapIndex = d,
                t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            l !== p && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this
              , s = t.params
              , a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === a) {
                        r = !0,
                        i = e;
                        break
                    }
            if (!a || !r)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = a,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
            s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
            if (t.virtualTranslate)
                return s ? -a : a;
            if (t.cssMode)
                return a;
            let r = h(i[0], e);
            return s && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            const s = this
              , {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
            let o, d = 0, c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e,
            i.roundLengths && (d = Math.floor(d),
            c = Math.floor(c)),
            i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
            s.previousTranslate = s.translate,
            s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p,
            o !== l && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === a && (a = !0);
            const r = this
              , {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition)
                return !1;
            const o = r.minTranslate()
              , d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e,
            r.updateProgress(c),
            n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t)
                    l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll)
                        return w({
                            swiper: r,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionEnd"))) : (r.setTransition(t),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionStart")),
            r.animating || (r.animating = !0,
            r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                r.onTranslateToWrapperTransitionEnd = null,
                delete r.onTranslateToWrapperTransitionEnd,
                s && r.emit("transitionEnd"))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    function P(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== n) {
            if ("reset" === l)
                return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`),
            "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var k = {
        slideTo: function(e, t, s, a, i) {
            if (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "number" != typeof e && "string" != typeof e)
                throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                    throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i)
                return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1),
            (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
            const v = -o[g];
            if (r.updateProgress(v),
            l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * v)
                      , s = Math.floor(100 * d[e])
                      , a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            let b;
            if (b = n > p ? "next" : n < p ? "prev" : "reset",
            u && -v === r.translate || !u && v === r.translate)
                return r.updateActiveIndex(n),
                l.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== l.effect && r.setTranslate(v),
                "reset" !== b && (r.transitionStart(s, b),
                r.transitionEnd(s, b)),
                !1;
            if (l.cssMode) {
                const e = r.isHorizontal()
                  , s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none",
                    r._immediateVirtual = !0),
                    h[e ? "scrollLeft" : "scrollTop"] = s,
                    t && requestAnimationFrame((()=>{
                        r.wrapperEl.style.scrollSnapType = "",
                        r._swiperImmediateVirtual = !1
                    }
                    ))
                } else {
                    if (!r.support.smoothScroll)
                        return w({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, a),
            r.transitionStart(s, b),
            0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(s, b))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)),
            !0
        },
        slideToLoop: function(e, t, s, a) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0);
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides),
            i.slideTo(r, t, s, a)
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            const a = this
              , {animating: i, enabled: r, params: n} = a;
            if (!r)
                return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide)
                    return !1;
                a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            const a = this
              , {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
            if (!d)
                return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide)
                    return !1;
                a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = c(o ? a.translate : -a.translate)
              , u = n.map((e=>c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t,s)=>{
                    p >= t && (e = s)
                }
                )),
                void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h),
            m < 0 && (m = a.activeIndex - 1),
            "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1,
            m = Math.max(m, 0))),
            i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        },
        slideReset: function(e, t, s) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r)
              , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
              , o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0),
            r = Math.min(r, i.slidesGrid.length - 1),
            i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this
              , {params: t, $wrapperEl: s} = e
              , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating)
                    return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                p((()=>{
                    e.slideTo(r)
                }
                ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                p((()=>{
                    e.slideTo(r)
                }
                ))) : e.slideTo(r)
            } else
                e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function() {
            const e = this
              , t = a()
              , {params: s, $wrapperEl: i} = e
              , r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
            e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
            e.loopedSlides += s.loopAdditionalSlides,
            e.loopedSlides > n.length && (e.loopedSlides = n.length);
            const l = []
              , o = [];
            n.each(((t,s)=>{
                const a = d(t);
                s < e.loopedSlides && o.push(t),
                s < n.length && s >= n.length - e.loopedSlides && l.push(t),
                a.attr("data-swiper-slide-index", s)
            }
            ));
            for (let e = 0; e < o.length; e += 1)
                r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1)
                r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
            let o;
            e.allowSlidePrev = !0,
            e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t,
                o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a,
                o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i,
            e.allowSlideNext = r,
            e.emit("loopFix")
        },
        loopDestroy: function() {
            const {$wrapperEl: e, params: t, slides: s} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
            s.removeAttr("data-swiper-slide-index")
        }
    };
    function O(e) {
        const t = this
          , s = a()
          , i = r()
          , n = t.touchEventsData
          , {params: l, touches: o, enabled: c} = t;
        if (!c)
            return;
        if (t.animating && l.preventInteractionOnTransition)
            return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
            return;
        if (n.isTouchEvent = "touchstart" === p.type,
        !n.isTouchEvent && "which"in p && 3 === p.which)
            return;
        if (!n.isTouchEvent && "button"in p && p.button > 0)
            return;
        if (n.isTouched && n.isMoved)
            return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
          , f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this),
            function t(s) {
                return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot),
                s.closest(e) || t(s.getRootNode().host)) : null
            }(t)
        }(m, p.target) : h.closest(m)[0]))
            return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0])
            return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX,
        o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX
          , v = o.currentY
          , w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
          , b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w)
                return;
            e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        o.startX = g,
        o.startY = v,
        n.touchStartTime = u(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        l.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1,
            "SELECT" === h[0].nodeName && (n.isTouched = !1)),
            s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", p)
    }
    function I(e) {
        const t = a()
          , s = this
          , i = s.touchEventsData
          , {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o)
            return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent),
        !i.isTouched)
            return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type)
            return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0])
          , h = "touchmove" === c.type ? p.pageX : c.pageX
          , m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
            return n.startX = h,
            void (n.startY = m);
        if (!s.allowTouchMove)
            return d(c.target).is(i.focusableElements) || (s.allowClick = !1),
            void (i.isTouched && (Object.assign(n, {
                startX: h,
                startY: m,
                currentX: h,
                currentY: m
            }),
            i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                    return i.isTouched = !1,
                    void (i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate())
                return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements))
            return i.isMoved = !0,
            void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
            return;
        n.currentX = h,
        n.currentY = m;
        const f = n.currentX - n.startX
          , g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI,
            i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
        i.isScrolling)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        s.allowClick = !1,
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
        i.isMoved || (r.loop && !r.cssMode && s.loopFix(),
        i.startTranslate = s.getTranslate(),
        s.setTransition(0),
        s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        i.allowMomentumBounce = !1,
        !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c)),
        s.emit("sliderMove", c),
        i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v,
        v *= r.touchRatio,
        l && (v = -v),
        s.swipeDirection = v > 0 ? "prev" : "next",
        i.currentTranslate = v + i.startTranslate;
        let w = !0
          , b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0),
        v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1,
        r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1,
        r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
        w && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
        r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
        s.updateSlidesClasses()),
        s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate))
    }
    function L(e) {
        const t = this
          , s = t.touchEventsData
          , {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l)
            return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u()
          , c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target),
            t.emit("tap click", o),
            c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(),
        p((()=>{
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate,
        a.cssMode)
            return;
        if (t.params.freeMode && a.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
                currentPos: h
            });
        let m = 0
          , f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e,
            f = n[e + t] - n[e]) : h >= n[e] && (m = e,
            f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null
          , v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f
          , b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)),
            "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }
    function A() {
        const e = this
          , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
    }
    function G() {
        const e = this
          , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
            return;
        let i;
        e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    let B = !1;
    function N() {}
    const H = (e,t)=>{
        const s = a()
          , {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e
          , c = !!i.nested
          , p = "on" === t ? "addEventListener" : "removeEventListener"
          , u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t),
            n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c),
            n[p](r.end, e.onTouchEnd, t),
            r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else
            n[p](r.start, e.onTouchStart, !1),
            s[p](r.move, e.onTouchMove, c),
            s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0),
        i.cssMode && l[p]("scroll", e.onScroll),
        i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    }
    ;
    var X = {
        attachEvents: function() {
            const e = this
              , t = a()
              , {params: s, support: i} = e;
            e.onTouchStart = O.bind(e),
            e.onTouchMove = I.bind(e),
            e.onTouchEnd = L.bind(e),
            s.cssMode && (e.onScroll = G.bind(e)),
            e.onClick = D.bind(e),
            i.touch && !B && (t.addEventListener("touchstart", N),
            B = !0),
            H(e, "on")
        },
        detachEvents: function() {
            H(this, "off")
        }
    };
    const Y = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function() {
            const e = this
              , {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e
              , l = function(e, t) {
                const s = [];
                return e.forEach((e=>{
                    "object" == typeof e ? Object.keys(e).forEach((a=>{
                        e[a] && s.push(t + a)
                    }
                    )) : "string" == typeof e && s.push(t + e)
                }
                )),
                s
            }(["initialized", s.direction, {
                "pointer-events": !n.touch
            }, {
                "free-mode": e.params.freeMode && s.freeMode.enabled
            }, {
                autoheight: s.autoHeight
            }, {
                rtl: a
            }, {
                grid: s.grid && s.grid.rows > 1
            }, {
                "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
            }, {
                android: r.android
            }, {
                ios: r.ios
            }, {
                "css-mode": s.cssMode
            }, {
                centered: s.cssMode && s.centeredSlides
            }], s.containerModifierClass);
            t.push(...l),
            i.addClass([...t].join(" ")),
            e.emitContainerClasses()
        },
        removeClasses: function() {
            const {$el: e, classNames: t} = this;
            e.removeClass(t.join(" ")),
            this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function j(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0]
              , i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }),
            a in e && "enabled"in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }),
            "object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
            e[a] || (e[a] = {
                enabled: !1
            }),
            g(t, s)) : g(t, s)) : g(t, s)
        }
    }
    const _ = {
        eventsEmitter: $,
        update: S,
        translate: M,
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                s.animating = !1,
                a.cssMode || (s.setTransition(0),
                P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: k,
        loop: z,
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move",
                s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                s.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                s.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        },
        events: X,
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: s, loopedSlides: a=0, params: i, $el: r} = e
                  , n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length)
                    return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l)
                    return;
                const o = (l in n ? n[l] : void 0) || e.originalParams
                  , d = Y(e, i)
                  , c = Y(e, o)
                  , p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`),
                (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
                const u = o.direction && o.direction !== i.direction
                  , h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(),
                g(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                p && !m ? e.disable() : !p && m && e.enable(),
                e.currentBreakpoint = l,
                e.emit("_beforeBreakpoint", o),
                h && s && (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", o)
            },
            getBreakpoint: function(e, t, s) {
                if (void 0 === t && (t = "window"),
                !e || "container" === t && !s)
                    return;
                let a = !1;
                const i = r()
                  , n = "window" === t ? i.innerHeight : s.clientHeight
                  , l = Object.keys(e).map((e=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                l.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: s} = e
                  , {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1
                      , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: R,
        images: {
            loadImage: function(e, t, s, a, i, n) {
                const l = r();
                let o;
                function c() {
                    n && n()
                }
                d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image,
                o.onload = c,
                o.onerror = c,
                a && (o.sizes = a),
                s && (o.srcset = s),
                t && (o.src = t)) : c()
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , q = {};
    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
                a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e,t] = a,
            t || (t = {}),
            t = g({}, t),
            e && !t.el && (t.el = e),
            t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s=>{
                    const a = g({}, t, {
                        el: s
                    });
                    e.push(new V(a))
                }
                )),
                e
            }
            const r = this;
            r.__swiper__ = !0,
            r.support = E(),
            r.device = T({
                userAgent: t.userAgent
            }),
            r.browser = C(),
            r.eventsListeners = {},
            r.eventsAnyListeners = [],
            r.modules = [...r.__modules__],
            t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e=>{
                e({
                    swiper: r,
                    extendParams: j(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }
            ));
            const l = g({}, W, n);
            return r.params = g({}, l, q, t),
            r.originalParams = g({}, r.params),
            r.passedParams = g({}, t),
            r.params && r.params.on && Object.keys(r.params.on).forEach((e=>{
                r.on(e, r.params.on[e])
            }
            )),
            r.params && r.params.onAny && r.onAny(r.params.onAny),
            r.$ = d,
            Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === r.params.direction,
                isVertical: ()=>"vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                      , t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    },
                    r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    },
                    r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            r.emit("_swiper"),
            r.params.init && r.init(),
            r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate()
              , i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter((t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter((e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.each((s=>{
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }),
                e.emit("_slideClass", s, a)
            }
            )),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"),
            void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    i[l] - i[e] < n && (o += 1)
                }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled ? (a(),
            e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            i || a()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this
              , a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            s.params.direction = e,
            s.slides.each((t=>{
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            s.emit("changeDirection"),
            t && s.update()),
            s
        }
        mount(e) {
            const t = this;
            if (t.mounted)
                return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0]))
                return !1;
            e.swiper = t;
            const i = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (()=>{
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e=>s.children(e),
                    t
                }
                return s.children(i())
            }
            )();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e),
                e.className = t.params.wrapperClass,
                s.append(e),
                s.children(`.${t.params.slideClass}`).each((e=>{
                    r.append(e)
                }
                ))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }),
            !0
        }
        init(e) {
            const t = this;
            if (t.initialized)
                return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            const s = this
              , {params: a, $el: i, $wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e=>{
                s.off(e)
            }
            )),
            !1 !== e && (s.$el[0].swiper = null,
            function(e) {
                const t = e;
                Object.keys(t).forEach((e=>{
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                ))
            }(s)),
            s.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            g(q, e)
        }
        static get extendedDefaults() {
            return q
        }
        static get defaults() {
            return W
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e=>V.installModule(e))),
            V) : (V.installModule(e),
            V)
        }
    }
    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a=>{
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"),
                n.className = i[a],
                e.$el.append(n)),
                s[a] = n,
                t[a] = n
            }
        }
        )),
        s
    }
    function U(e) {
        return void 0 === e && (e = ""),
        `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function K(e) {
        const t = this
          , {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(),
        "object" == typeof e && "length"in e)
            for (let t = 0; t < e.length; t += 1)
                e[t] && s.append(e[t]);
        else
            s.append(e);
        a.loop && t.loopCreate(),
        a.observer || t.update()
    }
    function Z(e) {
        const t = this
          , {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length"in e) {
            for (let t = 0; t < e.length; t += 1)
                e[t] && a.prepend(e[t]);
            r = i + e.length
        } else
            a.prepend(e);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        t.slideTo(r, 0, !1)
    }
    function J(e, t) {
        const s = this
          , {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides,
        s.loopDestroy(),
        s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0)
            return void s.prependSlide(t);
        if (e >= l)
            return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(),
            d.unshift(e)
        }
        if ("object" == typeof t && "length"in t) {
            for (let e = 0; e < t.length; e += 1)
                t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else
            a.append(t);
        for (let e = 0; e < d.length; e += 1)
            a.append(d[e]);
        i.loop && s.loopCreate(),
        i.observer || s.update(),
        i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }
    function Q(e) {
        const t = this
          , {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides,
        t.loopDestroy(),
        t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length"in e) {
            for (let s = 0; s < e.length; s += 1)
                n = e[s],
                t.slides[n] && t.slides.eq(n).remove(),
                n < l && (l -= 1);
            l = Math.max(l, 0)
        } else
            n = e,
            t.slides[n] && t.slides.eq(n).remove(),
            n < l && (l -= 1),
            l = Math.max(l, 0);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }
    function ee() {
        const e = this
          , t = [];
        for (let s = 0; s < e.slides.length; s += 1)
            t.push(s);
        e.removeSlide(t)
    }
    function te(e) {
        const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l} = e;
        let o;
        a("beforeInit", (()=>{
            if (s.params.effect !== t)
                return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e)
        }
        )),
        a("setTranslate", (()=>{
            s.params.effect === t && i()
        }
        )),
        a("setTransition", ((e,a)=>{
            s.params.effect === t && r(a)
        }
        )),
        a("virtualUpdate", (()=>{
            s.slides.length || (o = !0),
            requestAnimationFrame((()=>{
                o && s.slides.length && (i(),
                o = !1)
            }
            ))
        }
        ))
    }
    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }
    function ae(e) {
        let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
        const {slides: r, activeIndex: n, $wrapperEl: l} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n),
            e.transitionEnd((()=>{
                if (s)
                    return;
                if (!t || t.destroyed)
                    return;
                s = !0,
                t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1)
                    l.trigger(e[t])
            }
            ))
        }
    }
    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : "")
          , i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`),
        i.append(r)),
        r
    }
    Object.keys(_).forEach((e=>{
        Object.keys(_[e]).forEach((t=>{
            V.prototype[t] = _[e][t]
        }
        ))
    }
    )),
    V.use([function(e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null
          , l = null;
        const o = ()=>{
            t && !t.destroyed && t.initialized && (a("beforeResize"),
            a("resize"))
        }
          , d = ()=>{
            t && !t.destroyed && t.initialized && a("orientationchange")
        }
        ;
        s("init", (()=>{
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e=>{
                l = i.requestAnimationFrame((()=>{
                    const {width: s, height: a} = t;
                    let i = s
                      , r = a;
                    e.forEach((e=>{
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize,
                        r = a ? a.height : (s[0] || s).blockSize)
                    }
                    )),
                    i === s && r === a || o()
                }
                ))
            }
            )),
            n.observe(t.el)) : (i.addEventListener("resize", o),
            i.addEventListener("orientationchange", d))
        }
        )),
        s("destroy", (()=>{
            l && i.cancelAnimationFrame(l),
            n && n.unobserve && t.el && (n.unobserve(t.el),
            n = null),
            i.removeEventListener("resize", o),
            i.removeEventListener("orientationchange", d)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = []
          , l = r()
          , o = function(e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)((e=>{
                if (1 === e.length)
                    return void i("observerUpdate", e[0]);
                const t = function() {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
            }
            ));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            n.push(s)
        };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        a("init", (()=>{
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1)
                        o(e[t])
                }
                o(t.$el[0], {
                    childList: t.params.observeSlideChildren
                }),
                o(t.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }
        )),
        a("destroy", (()=>{
            n.forEach((e=>{
                e.disconnect()
            }
            )),
            n.splice(0, n.length)
        }
        ))
    }
    ]);
    const re = [function(e) {
        let t, {swiper: s, extendParams: a, on: i, emit: r} = e;
        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t])
                return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t),
            a.cache && (s.virtual.cache[t] = i),
            i
        }
        function l(e) {
            const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params
              , {addSlidesBefore: l, addSlidesAfter: o} = s.params.virtual
              , {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top",
            i ? (g = Math.floor(t / 2) + a + o,
            v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o,
            v = a + l);
            const w = Math.max((m || 0) - v, 0)
              , b = Math.min((m || 0) + g, p.length - 1)
              , x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
            function y() {
                s.updateSlides(),
                s.updateProgress(),
                s.updateSlidesClasses(),
                s.lazy && s.params.lazy.enabled && s.lazy.load(),
                r("virtualUpdate")
            }
            if (Object.assign(s.virtual, {
                from: w,
                to: b,
                offset: x,
                slidesGrid: s.slidesGrid
            }),
            d === w && c === b && !e)
                return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
                s.updateProgress(),
                void r("virtualUpdate");
            if (s.params.virtual.renderExternal)
                return s.params.virtual.renderExternal.call(s, {
                    offset: x,
                    from: w,
                    to: b,
                    slides: function() {
                        const e = [];
                        for (let t = w; t <= b; t += 1)
                            e.push(p[t]);
                        return e
                    }()
                }),
                void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = []
              , T = [];
            if (e)
                s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
            else
                for (let e = d; e <= c; e += 1)
                    (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1)
                t >= w && t <= b && (void 0 === c || e ? T.push(t) : (t > c && T.push(t),
                t < d && E.push(t)));
            T.forEach((e=>{
                s.$wrapperEl.append(n(p[e], e))
            }
            )),
            E.sort(((e,t)=>t - e)).forEach((e=>{
                s.$wrapperEl.prepend(n(p[e], e))
            }
            )),
            s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
            y()
        }
        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }),
        s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        },
        i("beforeInit", (()=>{
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides,
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            s.params.watchSlidesProgress = !0,
            s.originalParams.watchSlidesProgress = !0,
            s.params.initialSlide || l())
        }
        )),
        i("setTranslate", (()=>{
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t),
            t = setTimeout((()=>{
                l()
            }
            ), 100)) : l())
        }
        )),
        i("init update resize", (()=>{
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        }
        )),
        Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length"in e)
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.push(e[t]);
                else
                    s.virtual.slides.push(e);
                l(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1
                  , i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length,
                    i = e.length
                } else
                    s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache
                      , t = {};
                    Object.keys(e).forEach((s=>{
                        const a = e[s]
                          , r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                        t[parseInt(s, 10) + i] = a
                    }
                    )),
                    s.virtual.cache = t
                }
                l(!0),
                s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e)
                    return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1)
                        s.virtual.slides.splice(e[a], 1),
                        s.params.virtual.cache && delete s.virtual.cache[e[a]],
                        e[a] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    s.virtual.slides.splice(e, 1),
                    s.params.virtual.cache && delete s.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                l(!0),
                s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [],
                s.params.virtual.cache && (s.virtual.cache = {}),
                l(!0),
                s.slideTo(0, 0)
            },
            update: l
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a()
          , o = r();
        function c(e) {
            if (!t.enabled)
                return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode
              , r = t.params.keyboard.pageUpDown
              , d = r && 33 === i
              , c = r && 34 === i
              , p = 37 === i
              , u = 39 === i
              , h = 38 === i
              , m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                        return;
                    const a = t.$el
                      , i = a[0].clientWidth
                      , r = a[0].clientHeight
                      , n = o.innerWidth
                      , l = o.innerHeight
                      , d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1])
                                continue;
                            e = !0
                        }
                    }
                    if (!e)
                        return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                ((c || u) && !s || (d || p) && s) && t.slideNext(),
                ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (c || m) && t.slideNext(),
                (d || h) && t.slidePrev()),
                n("keyPress", i)
            }
        }
        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c),
            t.keyboard.enabled = !0)
        }
        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c),
            t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        },
        s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        i("init", (()=>{
            t.params.keyboard.enabled && p()
        }
        )),
        i("destroy", (()=>{
            t.keyboard.enabled && u()
        }
        )),
        Object.assign(t.keyboard, {
            enable: p,
            disable: u
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }),
        t.mousewheel = {
            enabled: !1
        };
        let o, c = u();
        const h = [];
        function m() {
            t.enabled && (t.mouseEntered = !0)
        }
        function f() {
            t.enabled && (t.mouseEntered = !1)
        }
        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
            i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
            i("scroll", e.raw)),
            c = (new n.Date).getTime(),
            !1)))
        }
        function v(e) {
            let s = e
              , a = !0;
            if (!t.enabled)
                return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
                return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1
              , f = function(e) {
                let t = 0
                  , s = 0
                  , a = 0
                  , i = 0;
                return "detail"in e && (s = e.detail),
                "wheelDelta"in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                s = 0),
                a = 10 * t,
                i = 10 * s,
                "deltaY"in e && (i = e.deltaY),
                "deltaX"in e && (a = e.deltaX),
                e.shiftKey && !a && (a = i,
                i = 0),
                (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                i *= 40) : (a *= 800,
                i *= 800)),
                a && !t && (t = a < 1 ? -1 : 1),
                i && !s && (s = i < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY)))
                        return !0;
                    c = -f.pixelX * m
                } else {
                    if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX)))
                        return !0;
                    c = -f.pixelY
                }
            else
                c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c)
                return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                    time: u(),
                    delta: Math.abs(c),
                    direction: Math.sign(c)
                }
                  , a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0,
                    t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning
                      , u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()),
                    n <= t.maxTranslate() && (n = t.maxTranslate()),
                    t.setTransition(0),
                    t.setTranslate(n),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses(),
                    (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(),
                    t.params.freeMode.sticky) {
                        clearTimeout(l),
                        l = void 0,
                        h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0
                          , a = h[0];
                        if (h.push(e),
                        s && (e.delta > s.delta || e.direction !== s.direction))
                            h.splice(0);
                        else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e,
                            h.splice(0),
                            l = p((()=>{
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }
                            ), 0)
                        }
                        l || (l = p((()=>{
                            o = e,
                            h.splice(0),
                            t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (a || i("scroll", s),
                    t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                    n === t.minTranslate() || n === t.maxTranslate())
                        return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(c),
                    direction: Math.sign(c),
                    raw: e
                };
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s),
                a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s),
                function(e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                            return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                        return !0;
                    return !1
                }(s))
                    return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
            !1
        }
        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)),
            s[e]("mouseenter", m),
            s[e]("mouseleave", f),
            s[e]("wheel", v)
        }
        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v),
            !0) : !t.mousewheel.enabled && (w("on"),
            t.mousewheel.enabled = !0,
            !0)
        }
        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v),
            !0) : !!t.mousewheel.enabled && (w("off"),
            t.mousewheel.enabled = !1,
            !0)
        }
        a("init", (()=>{
            !t.params.mousewheel.enabled && t.params.cssMode && x(),
            t.params.mousewheel.enabled && b()
        }
        )),
        a("destroy", (()=>{
            t.params.cssMode && b(),
            t.mousewheel.enabled && x()
        }
        )),
        Object.assign(t.mousewheel, {
            enable: b,
            disable: x
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        function r(e) {
            let s;
            return e && (s = d(e),
            t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))),
            s
        }
        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
            t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }
        function l() {
            if (t.params.loop)
                return;
            const {$nextEl: e, $prevEl: s} = t.navigation;
            n(s, t.isBeginning && !t.params.rewind),
            n(e, t.isEnd && !t.params.rewind)
        }
        function o(e) {
            e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev()
        }
        function c(e) {
            e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext()
        }
        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !e.nextEl && !e.prevEl)
                return;
            const s = r(e.nextEl)
              , a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c),
            a && a.length > 0 && a.on("click", o),
            Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }),
            t.enabled || (s && s.addClass(e.lockClass),
            a && a.addClass(e.lockClass))
        }
        function u() {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e.length && (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            s && s.length && (s.off("click", o),
            s.removeClass(t.params.navigation.disabledClass))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }),
        t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        },
        a("init", (()=>{
            p(),
            l()
        }
        )),
        a("toEdge fromEdge lock unlock", (()=>{
            l()
        }
        )),
        a("destroy", (()=>{
            u()
        }
        )),
        a("enable disable", (()=>{
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
            s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        }
        )),
        a("click", ((e,s)=>{
            const {$nextEl: a, $prevEl: r} = t.navigation
              , n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n)))
                    return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                i(!0 === e ? "navigationShow" : "navigationHide"),
                a && a.toggleClass(t.params.navigation.hiddenClass),
                r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }
        )),
        Object.assign(t.navigation, {
            update: l,
            init: p,
            destroy: u
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e=>e,
                formatFractionTotal: e=>e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`
            }
        }),
        t.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let l = 0;
        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }
        function c(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }
        function p() {
            const e = t.rtl
              , s = t.params.pagination;
            if (o())
                return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
              , r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup),
            p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
            p > u - 1 && (p -= u),
            p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
            "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"),
                s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0),
                l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)),
                i = Math.max(p - l, 0),
                o = i + (Math.min(a.length, s.dynamicMainBullets) - 1),
                u = (o + i) / 2),
                a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),
                r.length > 1)
                    a.each((e=>{
                        const t = d(e)
                          , a = t.index();
                        a === p && t.addClass(s.bulletActiveClass),
                        s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`),
                        a === i && c(t, "prev"),
                        a === o && c(t, "next"))
                    }
                    ));
                else {
                    const e = a.eq(p)
                      , r = e.index();
                    if (e.addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                        const e = a.eq(i)
                          , n = a.eq(o);
                        for (let e = i; e <= o; e += 1)
                            a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else
                                c(e, "prev"),
                                c(n, "next");
                        else
                            c(e, "prev"),
                            c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4)
                      , r = (n * i - n) / 2 - u * n
                      , l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
            r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1
                  , n = 1;
                "horizontal" === e ? i = a : n = a,
                r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)),
            i("paginationRender", r[0])) : i("paginationUpdate", r[0]),
            t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }
        function u() {
            const e = t.params.pagination;
            if (o())
                return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
              , a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1)
                    e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r),
                t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,
            a.html(r)),
            "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`,
            a.html(r)),
            "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }
        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el)
                return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el),
            s.length > 1 && (s = s.filter((e=>d(e).parents(".swiper")[0] === t.el)))),
            "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
            s.addClass(e.modifierClass + e.type),
            s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            l = 0,
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass),
            e.clickable && s.on("click", U(e.bulletClass), (function(e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides),
                t.slideTo(s)
            }
            )),
            Object.assign(t.pagination, {
                $el: s,
                el: s[0]
            }),
            t.enabled || s.addClass(e.lockClass))
        }
        function m() {
            const e = t.params.pagination;
            if (o())
                return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass),
            s.removeClass(e.modifierClass + e.type),
            s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && s.off("click", U(e.bulletClass))
        }
        a("init", (()=>{
            h(),
            u(),
            p()
        }
        )),
        a("activeIndexChange", (()=>{
            (t.params.loop || void 0 === t.snapIndex) && p()
        }
        )),
        a("snapIndexChange", (()=>{
            t.params.loop || p()
        }
        )),
        a("slidesLengthChange", (()=>{
            t.params.loop && (u(),
            p())
        }
        )),
        a("snapGridLengthChange", (()=>{
            t.params.loop || (u(),
            p())
        }
        )),
        a("destroy", (()=>{
            m()
        }
        )),
        a("enable disable", (()=>{
            const {$el: e} = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        }
        )),
        a("lock unlock", (()=>{
            p()
        }
        )),
        a("click", ((e,s)=>{
            const a = s.target
              , {$el: r} = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl))
                    return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"),
                r.toggleClass(t.params.pagination.hiddenClass)
            }
        }
        )),
        Object.assign(t.pagination, {
            render: u,
            update: p,
            init: h,
            destroy: m
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const n = a();
        let l, o, c, u, h = !1, m = null, f = null;
        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e, rtlTranslate: s, progress: a} = t
              , {$dragEl: i, $el: r} = e
              , n = t.params.scrollbar;
            let l = o
              , d = (c - o) * a;
            s ? (d = -d,
            d > 0 ? (l = o - d,
            d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d,
            d = 0) : d + o > c && (l = c - d),
            t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`),
            i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`),
            i[0].style.height = `${l}px`),
            n.hide && (clearTimeout(m),
            r[0].style.opacity = 1,
            m = setTimeout((()=>{
                r[0].style.opacity = 0,
                r.transition(400)
            }
            ), 1e3))
        }
        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e} = t
              , {$dragEl: s, $el: a} = e;
            s[0].style.width = "",
            s[0].style.height = "",
            c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
            u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
            o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10),
            t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`,
            a[0].style.display = u >= 1 ? "none" : "",
            t.params.scrollbar.hide && (a[0].style.opacity = 0),
            t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }
        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }
        function b(e) {
            const {scrollbar: s, rtlTranslate: a} = t
              , {$el: i} = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o),
            r = Math.max(Math.min(r, 1), 0),
            a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n),
            t.setTranslate(n),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        function x(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, $wrapperEl: i} = t
              , {$el: n, $dragEl: o} = a;
            h = !0,
            l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            o.transition(100),
            b(e),
            clearTimeout(f),
            n.transition(0),
            s.hide && n.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", e)
        }
        function y(e) {
            const {scrollbar: s, $wrapperEl: a} = t
              , {$el: i, $dragEl: n} = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            b(e),
            a.transition(0),
            i.transition(0),
            n.transition(0),
            r("scrollbarDragMove", e))
        }
        function E(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, $wrapperEl: i} = t
              , {$el: n} = a;
            h && (h = !1,
            t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
            i.transition("")),
            s.hide && (clearTimeout(f),
            f = p((()=>{
                n.css("opacity", 0),
                n.transition(400)
            }
            ), 1e3)),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest())
        }
        function T(e) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t
              , o = s.$el[0]
              , d = !(!l.passiveListener || !r.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , c = !(!l.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            if (!o)
                return;
            const p = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (o[p](a.start, x, d),
            o[p](a.move, y, d),
            o[p](a.end, E, c)) : (o[p](i.start, x, d),
            n[p](i.move, y, d),
            n[p](i.end, E, c))
        }
        function C() {
            const {scrollbar: e, $el: s} = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el)
                return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`),
            i.append(r)),
            Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }),
            a.draggable && t.params.scrollbar.el && T("on"),
            i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }
        function $() {
            t.params.scrollbar.el && T("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }),
        t.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        },
        i("init", (()=>{
            C(),
            v(),
            g()
        }
        )),
        i("update resize observerUpdate lock unlock", (()=>{
            v()
        }
        )),
        i("setTranslate", (()=>{
            g()
        }
        )),
        i("setTransition", ((e,s)=>{
            !function(e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        }
        )),
        i("enable disable", (()=>{
            const {$el: e} = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }
        )),
        i("destroy", (()=>{
            $()
        }
        )),
        Object.assign(t.scrollbar, {
            updateSize: v,
            setTranslate: g,
            init: C,
            destroy: $
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = (e,s)=>{
            const {rtl: a} = t
              , i = d(e)
              , r = a ? -1 : 1
              , n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x")
              , o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale")
              , p = i.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0",
            o = o || "0") : t.isHorizontal() ? (l = n,
            o = "0") : (o = n,
            l = "0"),
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px",
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px",
            null != p) {
                const e = p - (p - 1) * (1 - Math.abs(s));
                i[0].style.opacity = e
            }
            if (null == c)
                i.transform(`translate3d(${l}, ${o}, 0px)`);
            else {
                const e = c - (c - 1) * (1 - Math.abs(s));
                i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
            }
        }
          , r = ()=>{
            const {$el: e, slides: s, progress: a, snapGrid: r} = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
                i(e, a)
            }
            )),
            s.each(((e,s)=>{
                let n = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
                    i(e, n)
                }
                ))
            }
            ))
        }
        ;
        a("beforeInit", (()=>{
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
            t.originalParams.watchSlidesProgress = !0)
        }
        )),
        a("init", (()=>{
            t.params.parallax.enabled && r()
        }
        )),
        a("setTranslate", (()=>{
            t.params.parallax.enabled && r()
        }
        )),
        a("setTransition", ((e,s)=>{
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {$el: s} = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0),
                    s.transition(a)
                }
                ))
            }(s)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        t.zoom = {
            enabled: !1
        };
        let l, o, c, p = 1, u = !1;
        const m = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }
          , f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }
          , g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let v = 1;
        function w(e) {
            if (e.targetTouches.length < 2)
                return 1;
            const t = e.targetTouches[0].pageX
              , s = e.targetTouches[0].pageY
              , a = e.targetTouches[1].pageX
              , i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }
        function b(e) {
            const s = t.support
              , a = t.params.zoom;
            if (o = !1,
            c = !1,
            !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                o = !0,
                m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`),
            0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
            m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`),
            m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0),
            u = !0) : m.$imageEl = void 0
        }
        function x(e) {
            const s = t.support
              , a = t.params.zoom
              , i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                c = !0,
                m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p,
            i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5),
            m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }
        function y(e) {
            const s = t.device
              , a = t.support
              , i = t.params.zoom
              , r = t.zoom;
            if (!a.gestures) {
                if (!o || !c)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android)
                    return;
                o = !1,
                c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio),
            m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
            p = r.scale,
            u = !1,
            1 === r.scale && (m.$slideEl = void 0))
        }
        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length)
                return;
            if (t.allowClick = !1,
            !f.isTouched || !m.$slideEl)
                return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth,
            f.height = m.$imageEl[0].offsetHeight,
            f.startX = h(m.$imageWrapEl[0], "x") || 0,
            f.startY = h(m.$imageWrapEl[0], "y") || 0,
            m.slideWidth = m.$slideEl[0].offsetWidth,
            m.slideHeight = m.$slideEl[0].offsetHeight,
            m.$imageWrapEl.transition(0));
            const a = f.width * s.scale
              , i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0),
                f.maxX = -f.minX,
                f.minY = Math.min(m.slideHeight / 2 - i / 2, 0),
                f.maxY = -f.minY,
                f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))
                        return void (f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y))
                        return void (f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                f.isMoved = !0,
                f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX,
                f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY,
                f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8),
                f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8),
                f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8),
                f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8),
                g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
                g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
                g.prevTime || (g.prevTime = Date.now()),
                g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2,
                g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2,
                Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
                Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
                g.prevPositionX = f.touchesCurrent.x,
                g.prevPositionY = f.touchesCurrent.y,
                g.prevTime = Date.now(),
                m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }
        function T() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            p = 1,
            m.$slideEl = void 0,
            m.$imageEl = void 0,
            m.$imageWrapEl = void 0)
        }
        function C(e) {
            const s = t.zoom
              , a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)),
            m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
            !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length)
                return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.touchAction = "none"),
            m.$slideEl.addClass(`${a.zoomedSlideClass}`),
            void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x,
            r = f.touchesStart.y),
            s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            e ? ($ = m.$slideEl[0].offsetWidth,
            S = m.$slideEl[0].offsetHeight,
            l = m.$slideEl.offset().left + n.scrollX,
            o = m.$slideEl.offset().top + n.scrollY,
            c = l + $ / 2 - i,
            u = o + S / 2 - r,
            v = m.$imageEl[0].offsetWidth,
            w = m.$imageEl[0].offsetHeight,
            b = v * s.scale,
            x = w * s.scale,
            y = Math.min($ / 2 - b / 2, 0),
            E = Math.min(S / 2 - x / 2, 0),
            T = -y,
            C = -E,
            h = c * s.scale,
            g = u * s.scale,
            h < y && (h = y),
            h > T && (h = T),
            g < E && (g = E),
            g > C && (g = C)) : (h = 0,
            g = 0),
            m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),
            m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }
        function $() {
            const e = t.zoom
              , s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex),
            m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)),
            m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "",
            t.wrapperEl.style.touchAction = ""),
            e.scale = 1,
            p = 1,
            m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            m.$slideEl = void 0)
        }
        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : C(e)
        }
        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function P() {
            return `.${t.params.slideClass}`
        }
        function k(e) {
            const {passiveListener: s} = M()
              , a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s),
            t.$wrapperEl[e]("gesturechange", a, x, s),
            t.$wrapperEl[e]("gestureend", a, y, s)
        }
        function z() {
            l || (l = !0,
            k("on"))
        }
        function O() {
            l && (l = !1,
            k("off"))
        }
        function I() {
            const e = t.zoom;
            if (e.enabled)
                return;
            e.enabled = !0;
            const s = t.support
              , {passiveListener: a, activeListenerWithCapture: i} = M()
              , r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
            t.$wrapperEl.on(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
            t.$wrapperEl.on(t.touchEvents.move, r, x, i),
            t.$wrapperEl.on(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
            t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }
        function L() {
            const e = t.zoom;
            if (!e.enabled)
                return;
            const s = t.support;
            e.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = M()
              , r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
            t.$wrapperEl.off(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
            t.$wrapperEl.off(t.touchEvents.move, r, x, i),
            t.$wrapperEl.off(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
            t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: ()=>v,
            set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0
                      , s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }),
        a("init", (()=>{
            t.params.zoom.enabled && I()
        }
        )),
        a("destroy", (()=>{
            L()
        }
        )),
        a("touchStart", ((e,s)=>{
            t.zoom.enabled && function(e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(),
                f.isTouched = !0,
                f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        }
        )),
        a("touchEnd", ((e,s)=>{
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length)
                    return;
                if (!f.isTouched || !f.isMoved)
                    return f.isTouched = !1,
                    void (f.isMoved = !1);
                f.isTouched = !1,
                f.isMoved = !1;
                let s = 300
                  , a = 300;
                const i = g.x * s
                  , r = f.currentX + i
                  , n = g.y * a
                  , l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r,
                f.currentY = l;
                const d = f.width * e.scale
                  , c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0),
                f.maxX = -f.minX,
                f.minY = Math.min(m.slideHeight / 2 - c / 2, 0),
                f.maxY = -f.minY,
                f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX),
                f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY),
                m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        }
        )),
        a("doubleTap", ((e,s)=>{
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        }
        )),
        a("transitionEnd", (()=>{
            t.zoom.enabled && t.params.zoom.enabled && T()
        }
        )),
        a("slideChange", (()=>{
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T()
        }
        )),
        Object.assign(t.zoom, {
            enable: I,
            disable: L,
            in: C,
            out: $,
            toggle: S
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }),
        t.lazy = {};
        let n = !1
          , l = !1;
        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e)
                return;
            if (0 === t.slides.length)
                return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e)
              , n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]),
            0 !== n.length && n.each((e=>{
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background")
                  , c = n.attr("data-src")
                  , p = n.attr("data-srcset")
                  , u = n.attr("data-sizes")
                  , h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (()=>{
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`),
                        n.removeAttr("data-background")) : (p && (n.attr("srcset", p),
                        n.removeAttr("data-srcset")),
                        u && (n.attr("sizes", u),
                        n.removeAttr("data-sizes")),
                        h.length && h.children("source").each((e=>{
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                            t.removeAttr("data-srcset"))
                        }
                        )),
                        c && (n.attr("src", c),
                        n.removeAttr("data-src"))),
                        n.addClass(a.loadedClass).removeClass(a.loadingClass),
                        r.find(`.${a.preloaderClass}`).remove(),
                        t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]),
                        t.params.autoHeight && t.updateAutoHeight()
                    }
                }
                )),
                i("lazyImageLoad", r[0], n[0])
            }
            ))
        }
        function c() {
            const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t
              , r = t.virtual && s.virtual.enabled
              , n = s.lazy;
            let c = s.slidesPerView;
            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)
                        return !0
                } else if (a[t])
                    return !0;
                return !1
            }
            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0),
            l || (l = !0),
            t.params.watchSlidesProgress)
                e.children(`.${s.slideVisibleClass}`).each((e=>{
                    o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
                }
                ));
            else if (c > 1)
                for (let e = i; e < i + c; e += 1)
                    p(e) && o(e);
            else
                o(i);
            if (n.loadPrevNext)
                if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                    const e = n.loadPrevNextAmount
                      , t = c
                      , s = Math.min(i + t + Math.max(e, t), a.length)
                      , r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + c; e < s; e += 1)
                        p(e) && o(e);
                    for (let e = r; e < i; e += 1)
                        p(e) && o(e)
                } else {
                    const t = e.children(`.${s.slideNextClass}`);
                    t.length > 0 && o(u(t));
                    const a = e.children(`.${s.slidePrevClass}`);
                    a.length > 0 && o(u(a))
                }
        }
        function p() {
            const e = r();
            if (!t || t.destroyed)
                return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e)
              , a = s[0] === e
              , i = a ? e.innerWidth : s[0].offsetWidth
              , l = a ? e.innerHeight : s[0].offsetHeight
              , o = t.$el.offset()
              , {rtlTranslate: u} = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1])
                        continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(),
            s.off("scroll", p, f)) : n || (n = !0,
            s.on("scroll", p, f))
        }
        a("beforeInit", (()=>{
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        }
        )),
        a("init", (()=>{
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("scroll", (()=>{
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        }
        )),
        a("scrollbarDragMove resize _freeModeNoMomentumRelease", (()=>{
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("transitionStart", (()=>{
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("transitionEnd", (()=>{
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("slideChange", (()=>{
            const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        }
        )),
        Object.assign(t.lazy, {
            load: c,
            loadInSlide: o
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a,i)=>{
                    for (t = -1,
                    e = a.length; e - t > 1; )
                        s = e + t >> 1,
                        a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = s(this.x, e),
                a = i - 1,
                (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }
            ,
            this
        }
        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0,
            delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        t.controller = {
            control: void 0
        },
        a("beforeInit", (()=>{
            t.controller.control = t.params.controller.control
        }
        )),
        a("update", (()=>{
            r()
        }
        )),
        a("resize", (()=>{
            r()
        }
        )),
        a("observerUpdate", (()=>{
            r()
        }
        )),
        a("setTranslate", ((e,s,a)=>{
            t.controller.control && t.controller.setTranslate(s, a)
        }
        )),
        a("setTransition", ((e,s,a)=>{
            t.controller.control && t.controller.setTransition(s, a)
        }
        )),
        Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;
                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function(e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid,e.slidesGrid) : new i(t.snapGrid,e.snapGrid))
                    }(e),
                    n = -t.controller.spline.interpolate(-s)),
                    n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()),
                    n = (s - t.minTranslate()) * r + e.minTranslate()),
                    t.params.controller.inverse && (n = e.maxTranslate() - n),
                    e.updateProgress(n),
                    e.setTranslate(n, t),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1)
                        a[e] !== s && a[e]instanceof l && o(a[e]);
                else
                    a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor
                  , i = t.controller.control;
                let r;
                function n(s) {
                    s.setTransition(e, t),
                    0 !== e && (s.transitionStart(),
                    s.params.autoHeight && p((()=>{
                        s.updateAutoHeight()
                    }
                    )),
                    s.$wrapperEl.transitionEnd((()=>{
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(),
                        s.transitionEnd())
                    }
                    )))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1)
                        i[r] !== s && i[r]instanceof a && n(i[r]);
                else
                    i instanceof a && s !== i && n(i)
            }
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let i = null;
        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""),
            t.html(e))
        }
        function n(e) {
            e.attr("tabIndex", "0")
        }
        function l(e) {
            e.attr("tabIndex", "-1")
        }
        function o(e, t) {
            e.attr("role", t)
        }
        function c(e, t) {
            e.attr("aria-roledescription", t)
        }
        function p(e, t) {
            e.attr("aria-label", t)
        }
        function u(e) {
            e.attr("aria-disabled", !0)
        }
        function h(e) {
            e.attr("aria-disabled", !1)
        }
        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode)
                return;
            const s = t.params.a11y
              , a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
            t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
            t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
            t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }
        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }
        function g() {
            return f() && t.params.pagination.clickable
        }
        const v = (e,t,s)=>{
            n(e),
            "BUTTON" !== e[0].tagName && (o(e, "button"),
            e.on("keydown", m)),
            p(e, s),
            function(e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }
          , w = e=>{
            const s = e.target.closest(`.${t.params.slideClass}`);
            if (!s || !t.slides.includes(s))
                return;
            const a = t.slides.indexOf(s) === t.activeIndex
              , i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || t.slideTo(t.slides.indexOf(s), 0)
        }
        ;
        function b() {
            const e = t.params.a11y;
            t.$el.append(i);
            const s = t.$el;
            e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
            e.containerMessage && p(s, e.containerMessage);
            const a = t.$wrapperEl
              , r = a.attr("id") || `swiper-wrapper-${n = 16,
            void 0 === n && (n = 16),
            "x".repeat(n).replace(/x/g, (()=>Math.round(16 * Math.random()).toString(16)))}`;
            var n;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var u;
            u = r,
            a.attr("id", u),
            function(e, t) {
                e.attr("aria-live", t)
            }(a, l),
            e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage),
            o(d(t.slides), e.slideRole);
            const h = t.params.loop ? t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
            let f, b;
            t.slides.each(((s,a)=>{
                const i = d(s)
                  , r = t.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                p(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, h))
            }
            )),
            t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl),
            f && f.length && v(f, r, e.nextSlideMessage),
            b && b.length && v(b, r, e.prevSlideMessage),
            g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m),
            t.$el.on("focus", w, !0)
        }
        a("beforeInit", (()=>{
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }
        )),
        a("afterInit", (()=>{
            t.params.a11y.enabled && b()
        }
        )),
        a("fromEdge toEdge afterInit lock unlock", (()=>{
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation)
                    return;
                const {$nextEl: e, $prevEl: s} = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s),
                l(s)) : (h(s),
                n(s))),
                e && e.length > 0 && (t.isEnd ? (u(e),
                l(e)) : (h(e),
                n(e)))
            }()
        }
        )),
        a("paginationUpdate", (()=>{
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s=>{
                    const a = d(s);
                    t.params.pagination.clickable && (n(a),
                    t.params.pagination.renderBullet || (o(a, "button"),
                    p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                    a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }
                ))
            }()
        }
        )),
        a("destroy", (()=>{
            t.params.a11y.enabled && function() {
                let e, s;
                i && i.length > 0 && i.remove(),
                t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
                e && e.off("keydown", m),
                s && s.off("keydown", m),
                g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m),
                t.$el.off("focus", w, !0)
            }()
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let i = !1
          , n = {};
        const l = e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , o = e=>{
            const t = r();
            let s;
            s = e ? new URL(e) : t.location;
            const a = s.pathname.slice(1).split("/").filter((e=>"" !== e))
              , i = a.length;
            return {
                key: a[i - 2],
                value: a[i - 1]
            }
        }
          , d = (e,s)=>{
            const a = r();
            if (!i || !t.params.history.enabled)
                return;
            let n;
            n = t.params.url ? new URL(t.params.url) : a.location;
            const o = t.slides.eq(s);
            let d = l(o.attr("data-history"));
            if (t.params.history.root.length > 0) {
                let s = t.params.history.root;
                "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                d = `${s}/${e}/${d}`
            } else
                n.pathname.includes(e) || (d = `${e}/${d}`);
            const c = a.history.state;
            c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                value: d
            }, null, d) : a.history.pushState({
                value: d
            }, null, d))
        }
          , c = (e,s,a)=>{
            if (s)
                for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides.eq(i);
                    if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                        const s = r.index();
                        t.slideTo(s, e, a)
                    }
                }
            else
                t.slideTo(0, e, a)
        }
          , p = ()=>{
            n = o(t.params.url),
            c(t.params.speed, t.paths.value, !1)
        }
        ;
        a("init", (()=>{
            t.params.history.enabled && (()=>{
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState)
                        return t.params.history.enabled = !1,
                        void (t.params.hashNavigation.enabled = !0);
                    i = !0,
                    n = o(t.params.url),
                    (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            }
            )()
        }
        )),
        a("destroy", (()=>{
            t.params.history.enabled && (()=>{
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            }
            )()
        }
        )),
        a("transitionEnd _freeModeNoMomentumRelease", (()=>{
            i && d(t.params.history.key, t.activeIndex)
        }
        )),
        a("slideChange", (()=>{
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e
          , l = !1;
        const o = a()
          , c = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const p = ()=>{
            i("hashChange");
            const e = o.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                if (void 0 === s)
                    return;
                t.slideTo(s)
            }
        }
          , u = ()=>{
            if (l && t.params.hashNavigation.enabled)
                if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState)
                    c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""),
                    i("hashSet");
                else {
                    const e = t.slides.eq(t.activeIndex)
                      , s = e.attr("data-hash") || e.attr("data-history");
                    o.location.hash = s || "",
                    i("hashSet")
                }
        }
        ;
        n("init", (()=>{
            t.params.hashNavigation.enabled && (()=>{
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)
                    return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            }
            )()
        }
        )),
        n("destroy", (()=>{
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        }
        )),
        n("transitionEnd _freeModeNoMomentumRelease", (()=>{
            l && u()
        }
        )),
        n("slideChange", (()=>{
            l && t.params.cssMode && u()
        }
        ))
    }
    , function(e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;
        function l() {
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
            clearTimeout(t),
            t = p((()=>{
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(),
                e = s.slidePrev(s.params.speed, !0, !0),
                n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0),
                n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0),
                n("autoplay")) : s.params.loop ? (s.loopFix(),
                e = s.slideNext(s.params.speed, !0, !0),
                n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0),
                n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0),
                n("autoplay")),
                (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }
            ), a)
        }
        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0,
            n("autoplayStart"),
            l(),
            !0))
        }
        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t),
            t = void 0),
            s.autoplay.running = !1,
            n("autoplayStop"),
            !0))
        }
        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t),
            s.autoplay.paused = !0,
            0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e=>{
                s.$wrapperEl[0].addEventListener(e, h)
            }
            )) : (s.autoplay.paused = !1,
            l())))
        }
        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(),
            "visible" === e.visibilityState && s.autoplay.paused && (l(),
            s.autoplay.paused = !1)
        }
        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e=>{
                s.$wrapperEl[0].removeEventListener(e, h)
            }
            )),
            s.autoplay.paused = !1,
            s.autoplay.running ? l() : d())
        }
        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"),
            c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e=>{
                s.$wrapperEl[0].removeEventListener(e, h)
            }
            ))
        }
        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1,
            n("autoplayResume"),
            l())
        }
        s.autoplay = {
            running: !1,
            paused: !1
        },
        i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }),
        r("init", (()=>{
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u),
                s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m),
                s.$el.on("mouseleave", f))
            }
        }
        )),
        r("beforeTransitionStart", ((e,t,a)=>{
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        }
        )),
        r("sliderFirstMove", (()=>{
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        }
        )),
        r("touchEnd", (()=>{
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        }
        )),
        r("destroy", (()=>{
            s.$el.off("mouseenter", m),
            s.$el.off("mouseleave", f),
            s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        }
        )),
        Object.assign(s.autoplay, {
            pause: c,
            run: l,
            start: o,
            stop: d
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1
          , r = !1;
        function n() {
            const e = t.thumbs.swiper;
            if (!e)
                return;
            const s = e.clickedIndex
              , a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass))
                return;
            if (null == s)
                return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
            t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                t._clientLeft = t.$wrapperEl[0].clientLeft,
                e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index()
                  , a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }
        function l() {
            const {thumbs: e} = t.params;
            if (i)
                return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s)
                t.thumbs.swiper = e.swiper,
                Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
            else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                t.thumbs.swiper = new s(a),
                r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", n),
            !0
        }
        function o(e) {
            const s = t.thumbs.swiper;
            if (!s)
                return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView
              , i = t.params.thumbs.autoScrollOffset
              , r = i && !s.params.loop;
            if (t.realIndex !== s.realIndex || r) {
                let n, l, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                    s._clientLeft = s.$wrapperEl[0].clientLeft,
                    o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                      , a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    n = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e,
                    l = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else
                    n = t.realIndex,
                    l = n > t.previousIndex ? "next" : "prev";
                r && (n += "next" === l ? i : -1 * i),
                s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup,
                s.slideTo(n, e ? 0 : void 0))
            }
            let n = 1;
            const l = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (n = 1),
            n = Math.floor(n),
            s.slides.removeClass(l),
            s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < n; e += 1)
                    s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(l);
            else
                for (let e = 0; e < n; e += 1)
                    s.slides.eq(t.realIndex + e).addClass(l)
        }
        t.thumbs = {
            swiper: null
        },
        a("beforeInit", (()=>{
            const {thumbs: e} = t.params;
            e && e.swiper && (l(),
            o(!0))
        }
        )),
        a("slideChange update resize observerUpdate", (()=>{
            t.thumbs.swiper && o()
        }
        )),
        a("setTransition", ((e,s)=>{
            const a = t.thumbs.swiper;
            a && a.setTransition(s)
        }
        )),
        a("beforeDestroy", (()=>{
            const e = t.thumbs.swiper;
            e && r && e && e.destroy()
        }
        )),
        Object.assign(t.thumbs, {
            init: l,
            update: o
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    const e = t.getTranslate();
                    t.setTranslate(e),
                    t.setTransition(0),
                    t.touchEventsData.velocities.length = 0,
                    t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }),
                    e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function(e) {
                    let {currentPos: s} = e;
                    const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t
                      , c = u() - d.touchStartTime;
                    if (s < -t.minTranslate())
                        t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate())
                        t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop()
                                  , s = d.velocities.pop()
                                  , a = e.position - s.position
                                  , i = e.time - s.time;
                                t.velocity = a / i,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                                (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio,
                            d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate())
                                r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m),
                                p = t.maxTranslate(),
                                h = !0,
                                d.allowMomentumBounce = !0) : c = t.maxTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (c > t.minTranslate())
                                r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                                p = t.minTranslate(),
                                h = !0,
                                d.allowMomentumBounce = !0) : c = t.minTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1)
                                    if (o[t] > -c) {
                                        e = t;
                                        break
                                    }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1],
                                c = -c
                            }
                            if (f && i("transitionEnd", (()=>{
                                t.loopFix()
                            }
                            )),
                            0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity),
                                r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate)
                                      , a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p),
                            t.setTransition(e),
                            t.setTranslate(c),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            n.transitionEnd((()=>{
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"),
                                t.setTransition(r.speed),
                                setTimeout((()=>{
                                    t.setTranslate(p),
                                    n.transitionEnd((()=>{
                                        t && !t.destroyed && t.transitionEnd()
                                    }
                                    ))
                                }
                                ), 0))
                            }
                            ))) : t.velocity ? (a("_freeModeNoMomentumRelease"),
                            t.updateProgress(c),
                            t.setTransition(e),
                            t.setTranslate(c),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            n.transitionEnd((()=>{
                                t && !t.destroyed && t.transitionEnd()
                            }
                            )))) : t.updateProgress(c),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function(e) {
        let t, s, a, {swiper: i, extendParams: r} = e;
        r({
            grid: {
                rows: 1,
                fill: "column"
            }
        }),
        i.grid = {
            initSlides: e=>{
                const {slidesPerView: r} = i.params
                  , {rows: n, fill: l} = i.params.grid;
                s = t / n,
                a = Math.floor(e / n),
                t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n,
                "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            }
            ,
            updateSlide: (e,r,n,l)=>{
                const {slidesPerGroup: o, spaceBetween: d} = i.params
                  , {rows: c, fill: p} = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c))
                      , a = e - c * o * s
                      , i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i),
                    h = a - m * i + s * o,
                    u = h + m * t / c,
                    r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else
                    "column" === p ? (h = Math.floor(e / c),
                    m = e - h * c,
                    (h > a || h === a && m === c - 1) && (m += 1,
                    m >= c && (m = 0,
                    h += 1))) : (m = Math.floor(e / s),
                    h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            }
            ,
            updateWrapperSize: (e,s,a)=>{
                const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params
                  , {rows: o} = i.params.grid;
                if (i.virtualSize = (e + r) * t,
                i.virtualSize = Math.ceil(i.virtualSize / o) - r,
                i.$wrapperEl.css({
                    [a("width")]: `${i.virtualSize + r}px`
                }),
                n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)),
                        s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }
    , function(e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: J.bind(t),
            removeSlide: Q.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e} = t
                  , s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i,
                    i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }),
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {$el: e, $wrapperEl: s, slides: a, width: i, height: r, rtlTranslate: n, size: l, browser: o} = t
                  , c = t.params.cubeEffect
                  , p = t.isHorizontal()
                  , u = t.virtual && t.params.virtual.enabled;
                let h, m = 0;
                c.shadow && (p ? (h = s.find(".swiper-cube-shadow"),
                0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                s.append(h)),
                h.css({
                    height: `${i}px`
                })) : (h = e.find(".swiper-cube-shadow"),
                0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                e.append(h))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let i = 90 * s
                      , r = Math.floor(i / 360);
                    n && (i = -i,
                    r = Math.floor(-i / 360));
                    const o = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0
                      , f = 0
                      , g = 0;
                    s % 4 == 0 ? (h = 4 * -r * l,
                    g = 0) : (s - 1) % 4 == 0 ? (h = 0,
                    g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l,
                    g = l) : (s - 3) % 4 == 0 && (h = -l,
                    g = 3 * l + 4 * l * r),
                    n && (h = -h),
                    p || (f = h,
                    h = 0);
                    const v = `rotateX(${p ? 0 : -i}deg) rotateY(${p ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                    if (o <= 1 && o > -1 && (m = 90 * s + 90 * o,
                    n && (m = 90 * -s - 90 * o)),
                    t.transform(v),
                    c.slideShadows) {
                        let e = p ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , s = p ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = d(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`),
                        t.append(e)),
                        0 === s.length && (s = d(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`),
                        t.append(s)),
                        e.length && (e[0].style.opacity = Math.max(-o, 0)),
                        s.length && (s[0].style.opacity = Math.max(o, 0))
                    }
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                    "transform-origin": `50% 50% -${l / 2}px`
                }),
                c.shadow)
                    if (p)
                        h.transform(`translate3d(0px, ${i / 2 + c.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                    else {
                        const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90)
                          , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , s = c.shadowScale
                          , a = c.shadowScale / t
                          , i = c.shadowOffset;
                        h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / a}px) rotateX(-90deg)`)
                    }
                const f = o.isSafari || o.isWebView ? -l / 2 : 0;
                s.transform(`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : m}deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`)
            }
            ,
            setTransition: e=>{
                const {$el: s, slides: a} = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }),
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e, rtlTranslate: s} = t
                  , a = t.params.flipEffect;
                for (let i = 0; i < e.length; i += 1) {
                    const r = e.eq(i);
                    let n = r[0].progress;
                    t.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                    const l = r[0].swiperSlideOffset;
                    let o = -180 * n
                      , d = 0
                      , c = t.params.cssMode ? -l - t.translate : -l
                      , p = 0;
                    if (t.isHorizontal() ? s && (o = -o) : (p = c,
                    c = 0,
                    d = -o,
                    o = 0),
                    r[0].style.zIndex = -Math.abs(Math.round(n)) + e.length,
                    a.slideShadows) {
                        let e = t.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                          , s = t.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(a, r, t.isHorizontal() ? "left" : "top")),
                        0 === s.length && (s = ie(a, r, t.isHorizontal() ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = Math.max(-n, 0)),
                        s.length && (s[0].style.opacity = Math.max(n, 0))
                    }
                    const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                    se(a, r).transform(u)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }),
        te({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t
                  , r = t.params.coverflowEffect
                  , n = t.isHorizontal()
                  , l = t.translate
                  , o = n ? e / 2 - l : s / 2 - l
                  , d = n ? r.rotate : -r.rotate
                  , c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e)
                      , s = i[e]
                      , l = (o - t[0].swiperSlideOffset - s / 2) / s
                      , p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0
                      , h = n ? 0 : d * p
                      , m = -c * Math.abs(p)
                      , f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p
                      , v = n ? f * p : 0
                      , w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0),
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(m) < .001 && (m = 0),
                    Math.abs(u) < .001 && (u = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b),
                    t[0].style.zIndex = 1 - Math.abs(Math.round(p)),
                    r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")),
                        0 === s.length && (s = ie(r, t, n ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = p > 0 ? p : 0),
                        s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e=>"string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t
                  , r = t.params.creativeEffect
                  , {progressMultiplier: n} = r
                  , l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s)
                      , o = a[0].progress
                      , d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset
                      , u = [t.params.cssMode ? -p - t.translate : -p, 0, 0]
                      , h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0],
                    u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next,
                    m = !0) : d > 0 && (f = r.prev,
                    m = !0),
                    u.forEach(((e,t)=>{
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    }
                    )),
                    h.forEach(((e,t)=>{
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    }
                    )),
                    a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", ")
                      , v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`
                      , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                      , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                      , x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)),
                        e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({
                        opacity: b
                    }),
                    f.origin && y.css("transform-origin", f.origin)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            }
            ,
            perspective: ()=>t.params.creativeEffect.perspective,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }),
        te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e, activeIndex: s} = t
                  , a = t.params.cardsEffect
                  , {startTranslate: i, isTouched: r} = t.touchEventsData
                  , n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l)
                      , d = o[0].progress
                      , c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                    t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p
                      , h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1
                      , g = -2 * c
                      , v = 8 - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l
                      , b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i
                      , x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e,
                        f += -.5 * e,
                        v += 96 * e,
                        h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`,
                    !t.isHorizontal()) {
                        const e = h;
                        h = u,
                        u = e
                    }
                    const y = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)),
                        e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(y)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    ];
    return V.use(re),
    V
}
));
//# sourceMappingURL=swiper-bundle.min.js.map

/*! jQuery UI - v1.13.1 - 2022-02-28
* http://jqueryui.com
* Includes: effect.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(u) {
    "use strict";
    u.ui = u.ui || {};
    u.ui.version = "1.13.1";
    var a = u
      , n = {}
      , e = n.toString
      , f = /^([\-+])=\s*(\d+\.?\d*)/
      , t = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
        parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), t[4] ? (parseInt(t[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
        parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), t[4] ? (parseInt(t[4] + t[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
        }
    }]
      , l = a.Color = function(t, e, n, r) {
        return new a.Color.fn.parse(t,e,n,r)
    }
      , d = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }
      , p = {
        byte: {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }
      , s = l.support = {}
      , r = a("<p>")[0]
      , h = a.each;
    function g(t) {
        return null == t ? t + "" : "object" == typeof t ? n[e.call(t)] || "object" : typeof t
    }
    function m(t, e, n) {
        var r = p[e.type] || {};
        return null == t ? n || !e.def ? null : e.def : (t = r.floor ? ~~t : parseFloat(t),
        isNaN(t) ? e.def : r.mod ? (t + r.mod) % r.mod : Math.min(r.max, Math.max(0, t)))
    }
    function c(r) {
        var o = l()
          , i = o._rgba = [];
        return r = r.toLowerCase(),
        h(t, function(t, e) {
            var n = e.re.exec(r)
              , n = n && e.parse(n)
              , e = e.space || "rgba";
            if (n)
                return n = o[e](n),
                o[d[e].cache] = n[d[e].cache],
                i = o._rgba = n._rgba,
                !1
        }),
        i.length ? ("0,0,0,0" === i.join() && a.extend(i, M.transparent),
        o) : M[r]
    }
    function o(t, e, n) {
        return 6 * (n = (n + 1) % 1) < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }
    r.style.cssText = "background-color:rgba(1,1,1,.5)",
    s.rgba = -1 < r.style.backgroundColor.indexOf("rgba"),
    h(d, function(t, e) {
        e.cache = "_" + t,
        e.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }),
    a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    }),
    (l.fn = a.extend(l.prototype, {
        parse: function(o, t, e, n) {
            if (void 0 === o)
                return this._rgba = [null, null, null, null],
                this;
            (o.jquery || o.nodeType) && (o = a(o).css(t),
            t = void 0);
            var i = this
              , r = g(o)
              , s = this._rgba = [];
            return void 0 !== t && (o = [o, t, e, n],
            r = "array"),
            "string" === r ? this.parse(c(o) || M._default) : "array" === r ? (h(d.rgba.props, function(t, e) {
                s[e.idx] = m(o[e.idx], e)
            }),
            this) : "object" === r ? (h(d, o instanceof l ? function(t, e) {
                o[e.cache] && (i[e.cache] = o[e.cache].slice())
            }
            : function(t, n) {
                var r = n.cache;
                h(n.props, function(t, e) {
                    if (!i[r] && n.to) {
                        if ("alpha" === t || null == o[t])
                            return;
                        i[r] = n.to(i._rgba)
                    }
                    i[r][e.idx] = m(o[t], e, !0)
                }),
                i[r] && a.inArray(null, i[r].slice(0, 3)) < 0 && (null == i[r][3] && (i[r][3] = 1),
                n.from && (i._rgba = n.from(i[r])))
            }
            ),
            this) : void 0
        },
        is: function(t) {
            var o = l(t)
              , i = !0
              , s = this;
            return h(d, function(t, e) {
                var n, r = o[e.cache];
                return r && (n = s[e.cache] || e.to && e.to(s._rgba) || [],
                h(e.props, function(t, e) {
                    if (null != r[e.idx])
                        return i = r[e.idx] === n[e.idx]
                })),
                i
            }),
            i
        },
        _space: function() {
            var n = []
              , r = this;
            return h(d, function(t, e) {
                r[e.cache] && n.push(t)
            }),
            n.pop()
        },
        transition: function(t, s) {
            var e = (f = l(t))._space()
              , n = d[e]
              , t = 0 === this.alpha() ? l("transparent") : this
              , a = t[n.cache] || n.to(t._rgba)
              , c = a.slice()
              , f = f[n.cache];
            return h(n.props, function(t, e) {
                var n = e.idx
                  , r = a[n]
                  , o = f[n]
                  , i = p[e.type] || {};
                null !== o && (null === r ? c[n] = o : (i.mod && (o - r > i.mod / 2 ? r += i.mod : r - o > i.mod / 2 && (r -= i.mod)),
                c[n] = m((o - r) * s + r, e)))
            }),
            this[e](c)
        },
        blend: function(t) {
            if (1 === this._rgba[3])
                return this;
            var e = this._rgba.slice()
              , n = e.pop()
              , r = l(t)._rgba;
            return l(a.map(e, function(t, e) {
                return (1 - n) * r[e] + n * t
            }))
        },
        toRgbaString: function() {
            var t = "rgba("
              , e = a.map(this._rgba, function(t, e) {
                return null != t ? t : 2 < e ? 1 : 0
            });
            return 1 === e[3] && (e.pop(),
            t = "rgb("),
            t + e.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla("
              , e = a.map(this.hsla(), function(t, e) {
                return null == t && (t = 2 < e ? 1 : 0),
                t = e && e < 3 ? Math.round(100 * t) + "%" : t
            });
            return 1 === e[3] && (e.pop(),
            t = "hsl("),
            t + e.join() + ")"
        },
        toHexString: function(t) {
            var e = this._rgba.slice()
              , n = e.pop();
            return t && e.push(~~(255 * n)),
            "#" + a.map(e, function(t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    })).parse.prototype = l.fn,
    d.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 255
          , n = t[1] / 255
          , r = t[2] / 255
          , o = t[3]
          , i = Math.max(e, n, r)
          , s = Math.min(e, n, r)
          , a = i - s
          , c = i + s
          , t = .5 * c
          , n = s === i ? 0 : e === i ? 60 * (n - r) / a + 360 : n === i ? 60 * (r - e) / a + 120 : 60 * (e - n) / a + 240
          , c = 0 == a ? 0 : t <= .5 ? a / c : a / (2 - c);
        return [Math.round(n) % 360, c, t, null == o ? 1 : o]
    }
    ,
    d.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 360
          , n = t[1]
          , r = t[2]
          , t = t[3]
          , n = r <= .5 ? r * (1 + n) : r + n - r * n
          , r = 2 * r - n;
        return [Math.round(255 * o(r, n, e + 1 / 3)), Math.round(255 * o(r, n, e)), Math.round(255 * o(r, n, e - 1 / 3)), t]
    }
    ,
    h(d, function(c, t) {
        var e = t.props
          , i = t.cache
          , s = t.to
          , a = t.from;
        l.fn[c] = function(t) {
            if (s && !this[i] && (this[i] = s(this._rgba)),
            void 0 === t)
                return this[i].slice();
            var n = g(t)
              , r = "array" === n || "object" === n ? t : arguments
              , o = this[i].slice();
            return h(e, function(t, e) {
                t = r["object" === n ? t : e.idx];
                null == t && (t = o[e.idx]),
                o[e.idx] = m(t, e)
            }),
            a ? ((t = l(a(o)))[i] = o,
            t) : l(o)
        }
        ,
        h(e, function(s, a) {
            l.fn[s] || (l.fn[s] = function(t) {
                var e, n = g(t), r = "alpha" === s ? this._hsla ? "hsla" : "rgba" : c, o = this[r](), i = o[a.idx];
                return "undefined" === n ? i : ("function" === n && (n = g(t = t.call(this, i))),
                null == t && a.empty ? this : ("string" === n && (e = f.exec(t)) && (t = i + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                o[a.idx] = t,
                this[r](o)))
            }
            )
        })
    }),
    (l.hook = function(t) {
        t = t.split(" ");
        h(t, function(t, i) {
            a.cssHooks[i] = {
                set: function(t, e) {
                    var n, r, o = "";
                    if ("transparent" !== e && ("string" !== g(e) || (n = c(e)))) {
                        if (e = l(n || e),
                        !s.rgba && 1 !== e._rgba[3]) {
                            for (r = "backgroundColor" === i ? t.parentNode : t; ("" === o || "transparent" === o) && r && r.style; )
                                try {
                                    o = a.css(r, "backgroundColor"),
                                    r = r.parentNode
                                } catch (t) {}
                            e = e.blend(o && "transparent" !== o ? o : "_default")
                        }
                        e = e.toRgbaString()
                    }
                    try {
                        t.style[i] = e
                    } catch (t) {}
                }
            },
            a.fx.step[i] = function(t) {
                t.colorInit || (t.start = l(t.elem, i),
                t.end = l(t.end),
                t.colorInit = !0),
                a.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }
    )("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
    a.cssHooks.borderColor = {
        expand: function(n) {
            var r = {};
            return h(["Top", "Right", "Bottom", "Left"], function(t, e) {
                r["border" + e + "Color"] = n
            }),
            r
        }
    };
    var i, b, y, v, x, C, w, k, _, S, M = a.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }, j = "ui-effects-", B = "ui-effects-style", I = "ui-effects-animated";
    function H(t) {
        var e, n, r = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, o = {};
        if (r && r.length && r[0] && r[r[0]])
            for (n = r.length; n--; )
                "string" == typeof r[e = r[n]] && (o[e.replace(/-([\da-z])/gi, function(t, e) {
                    return e.toUpperCase()
                })] = r[e]);
        else
            for (e in r)
                "string" == typeof r[e] && (o[e] = r[e]);
        return o
    }
    function T(t, e, n, r) {
        return t = {
            effect: t = u.isPlainObject(t) ? (e = t).effect : t
        },
        "function" == typeof (e = null == e ? {} : e) && (r = e,
        n = null,
        e = {}),
        "number" != typeof e && !u.fx.speeds[e] || (r = n,
        n = e,
        e = {}),
        "function" == typeof n && (r = n,
        n = null),
        e && u.extend(t, e),
        n = n || e.duration,
        t.duration = u.fx.off ? 0 : "number" == typeof n ? n : n in u.fx.speeds ? u.fx.speeds[n] : u.fx.speeds._default,
        t.complete = r || e.complete,
        t
    }
    function W(t) {
        return !t || "number" == typeof t || u.fx.speeds[t] || ("string" == typeof t && !u.effects.effect[t] || ("function" == typeof t || "object" == typeof t && !t.effect))
    }
    function R(t, e) {
        var n = e.outerWidth()
          , e = e.outerHeight()
          , t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, n, e, 0];
        return {
            top: parseFloat(t[1]) || 0,
            right: "auto" === t[2] ? n : parseFloat(t[2]),
            bottom: "auto" === t[3] ? e : parseFloat(t[3]),
            left: parseFloat(t[4]) || 0
        }
    }
    u.effects = {
        effect: {}
    },
    v = ["add", "remove", "toggle"],
    x = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    },
    u.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
        u.fx.step[e] = function(t) {
            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (a.style(t.elem, e, t.end),
            t.setAttr = !0)
        }
    }),
    u.fn.addBack || (u.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    u.effects.animateClass = function(o, t, e, n) {
        var i = u.speed(t, e, n);
        return this.queue(function() {
            var n = u(this)
              , t = n.attr("class") || ""
              , e = (e = i.children ? n.find("*").addBack() : n).map(function() {
                return {
                    el: u(this),
                    start: H(this)
                }
            })
              , r = function() {
                u.each(v, function(t, e) {
                    o[e] && n[e + "Class"](o[e])
                })
            };
            r(),
            e = e.map(function() {
                return this.end = H(this.el[0]),
                this.diff = function(t, e) {
                    var n, r, o = {};
                    for (n in e)
                        r = e[n],
                        t[n] !== r && (x[n] || !u.fx.step[n] && isNaN(parseFloat(r)) || (o[n] = r));
                    return o
                }(this.start, this.end),
                this
            }),
            n.attr("class", t),
            e = e.map(function() {
                var t = this
                  , e = u.Deferred()
                  , n = u.extend({}, i, {
                    queue: !1,
                    complete: function() {
                        e.resolve(t)
                    }
                });
                return this.el.animate(this.diff, n),
                e.promise()
            }),
            u.when.apply(u, e.get()).done(function() {
                r(),
                u.each(arguments, function() {
                    var e = this.el;
                    u.each(this.diff, function(t) {
                        e.css(t, "")
                    })
                }),
                i.complete.call(n[0])
            })
        })
    }
    ,
    u.fn.extend({
        addClass: (y = u.fn.addClass,
        function(t, e, n, r) {
            return e ? u.effects.animateClass.call(this, {
                add: t
            }, e, n, r) : y.apply(this, arguments)
        }
        ),
        removeClass: (b = u.fn.removeClass,
        function(t, e, n, r) {
            return 1 < arguments.length ? u.effects.animateClass.call(this, {
                remove: t
            }, e, n, r) : b.apply(this, arguments)
        }
        ),
        toggleClass: (i = u.fn.toggleClass,
        function(t, e, n, r, o) {
            return "boolean" == typeof e || void 0 === e ? n ? u.effects.animateClass.call(this, e ? {
                add: t
            } : {
                remove: t
            }, n, r, o) : i.apply(this, arguments) : u.effects.animateClass.call(this, {
                toggle: t
            }, e, n, r)
        }
        ),
        switchClass: function(t, e, n, r, o) {
            return u.effects.animateClass.call(this, {
                add: e,
                remove: t
            }, n, r, o)
        }
    }),
    u.expr && u.expr.pseudos && u.expr.pseudos.animated && (u.expr.pseudos.animated = (C = u.expr.pseudos.animated,
    function(t) {
        return !!u(t).data(I) || C(t)
    }
    )),
    !1 !== u.uiBackCompat && u.extend(u.effects, {
        save: function(t, e) {
            for (var n = 0, r = e.length; n < r; n++)
                null !== e[n] && t.data(j + e[n], t[0].style[e[n]])
        },
        restore: function(t, e) {
            for (var n, r = 0, o = e.length; r < o; r++)
                null !== e[r] && (n = t.data(j + e[r]),
                t.css(e[r], n))
        },
        setMode: function(t, e) {
            return e = "toggle" === e ? t.is(":hidden") ? "show" : "hide" : e
        },
        createWrapper: function(n) {
            if (n.parent().is(".ui-effects-wrapper"))
                return n.parent();
            var r = {
                width: n.outerWidth(!0),
                height: n.outerHeight(!0),
                float: n.css("float")
            }
              , t = u("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            })
              , e = {
                width: n.width(),
                height: n.height()
            }
              , o = document.activeElement;
            try {
                o.id
            } catch (t) {
                o = document.body
            }
            return n.wrap(t),
            n[0] !== o && !u.contains(n[0], o) || u(o).trigger("focus"),
            t = n.parent(),
            "static" === n.css("position") ? (t.css({
                position: "relative"
            }),
            n.css({
                position: "relative"
            })) : (u.extend(r, {
                position: n.css("position"),
                zIndex: n.css("z-index")
            }),
            u.each(["top", "left", "bottom", "right"], function(t, e) {
                r[e] = n.css(e),
                isNaN(parseInt(r[e], 10)) && (r[e] = "auto")
            }),
            n.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })),
            n.css(e),
            t.css(r).show()
        },
        removeWrapper: function(t) {
            var e = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
            t[0] !== e && !u.contains(t[0], e) || u(e).trigger("focus")),
            t
        }
    }),
    u.extend(u.effects, {
        version: "1.13.1",
        define: function(t, e, n) {
            return n || (n = e,
            e = "effect"),
            u.effects.effect[t] = n,
            u.effects.effect[t].mode = e,
            n
        },
        scaledDimensions: function(t, e, n) {
            if (0 === e)
                return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            var r = "horizontal" !== n ? (e || 100) / 100 : 1
              , e = "vertical" !== n ? (e || 100) / 100 : 1;
            return {
                height: t.height() * e,
                width: t.width() * r,
                outerHeight: t.outerHeight() * e,
                outerWidth: t.outerWidth() * r
            }
        },
        clipToBox: function(t) {
            return {
                width: t.clip.right - t.clip.left,
                height: t.clip.bottom - t.clip.top,
                left: t.clip.left,
                top: t.clip.top
            }
        },
        unshift: function(t, e, n) {
            var r = t.queue();
            1 < e && r.splice.apply(r, [1, 0].concat(r.splice(e, n))),
            t.dequeue()
        },
        saveStyle: function(t) {
            t.data(B, t[0].style.cssText)
        },
        restoreStyle: function(t) {
            t[0].style.cssText = t.data(B) || "",
            t.removeData(B)
        },
        mode: function(t, e) {
            t = t.is(":hidden");
            return "toggle" === e && (e = t ? "show" : "hide"),
            e = (t ? "hide" === e : "show" === e) ? "none" : e
        },
        getBaseline: function(t, e) {
            var n, r;
            switch (t[0]) {
            case "top":
                n = 0;
                break;
            case "middle":
                n = .5;
                break;
            case "bottom":
                n = 1;
                break;
            default:
                n = t[0] / e.height
            }
            switch (t[1]) {
            case "left":
                r = 0;
                break;
            case "center":
                r = .5;
                break;
            case "right":
                r = 1;
                break;
            default:
                r = t[1] / e.width
            }
            return {
                x: r,
                y: n
            }
        },
        createPlaceholder: function(t) {
            var e, n = t.css("position"), r = t.position();
            return t.css({
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
            /^(static|relative)/.test(n) && (n = "absolute",
            e = u("<" + t[0].nodeName + ">").insertAfter(t).css({
                display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
            t.data(j + "placeholder", e)),
            t.css({
                position: n,
                left: r.left,
                top: r.top
            }),
            e
        },
        removePlaceholder: function(t) {
            var e = j + "placeholder"
              , n = t.data(e);
            n && (n.remove(),
            t.removeData(e))
        },
        cleanUp: function(t) {
            u.effects.restoreStyle(t),
            u.effects.removePlaceholder(t)
        },
        setTransition: function(r, t, o, i) {
            return i = i || {},
            u.each(t, function(t, e) {
                var n = r.cssUnit(e);
                0 < n[0] && (i[e] = n[0] * o + n[1])
            }),
            i
        }
    }),
    u.fn.extend({
        effect: function() {
            function t(t) {
                var e = u(this)
                  , n = u.effects.mode(e, a) || i;
                e.data(I, !0),
                c.push(n),
                i && ("show" === n || n === i && "hide" === n) && e.show(),
                i && "none" === n || u.effects.saveStyle(e),
                "function" == typeof t && t()
            }
            var r = T.apply(this, arguments)
              , o = u.effects.effect[r.effect]
              , i = o.mode
              , e = r.queue
              , n = e || "fx"
              , s = r.complete
              , a = r.mode
              , c = [];
            return u.fx.off || !o ? a ? this[a](r.duration, s) : this.each(function() {
                s && s.call(this)
            }) : !1 === e ? this.each(t).each(f) : this.queue(n, t).queue(n, f);
            function f(t) {
                var e = u(this);
                function n() {
                    "function" == typeof s && s.call(e[0]),
                    "function" == typeof t && t()
                }
                r.mode = c.shift(),
                !1 === u.uiBackCompat || i ? "none" === r.mode ? (e[a](),
                n()) : o.call(e[0], r, function() {
                    e.removeData(I),
                    u.effects.cleanUp(e),
                    "hide" === r.mode && e.hide(),
                    n()
                }) : (e.is(":hidden") ? "hide" === a : "show" === a) ? (e[a](),
                n()) : o.call(e[0], r, n)
            }
        },
        show: (_ = u.fn.show,
        function(t) {
            if (W(t))
                return _.apply(this, arguments);
            t = T.apply(this, arguments);
            return t.mode = "show",
            this.effect.call(this, t)
        }
        ),
        hide: (k = u.fn.hide,
        function(t) {
            if (W(t))
                return k.apply(this, arguments);
            t = T.apply(this, arguments);
            return t.mode = "hide",
            this.effect.call(this, t)
        }
        ),
        toggle: (w = u.fn.toggle,
        function(t) {
            if (W(t) || "boolean" == typeof t)
                return w.apply(this, arguments);
            t = T.apply(this, arguments);
            return t.mode = "toggle",
            this.effect.call(this, t)
        }
        ),
        cssUnit: function(t) {
            var n = this.css(t)
              , r = [];
            return u.each(["em", "px", "%", "pt"], function(t, e) {
                0 < n.indexOf(e) && (r = [parseFloat(n), e])
            }),
            r
        },
        cssClip: function(t) {
            return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : R(this.css("clip"), this)
        },
        transfer: function(t, e) {
            var n = u(this)
              , r = u(t.to)
              , o = "fixed" === r.css("position")
              , i = u("body")
              , s = o ? i.scrollTop() : 0
              , a = o ? i.scrollLeft() : 0
              , i = r.offset()
              , i = {
                top: i.top - s,
                left: i.left - a,
                height: r.innerHeight(),
                width: r.innerWidth()
            }
              , r = n.offset()
              , c = u("<div class='ui-effects-transfer'></div>");
            c.appendTo("body").addClass(t.className).css({
                top: r.top - s,
                left: r.left - a,
                height: n.innerHeight(),
                width: n.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(i, t.duration, t.easing, function() {
                c.remove(),
                "function" == typeof e && e()
            })
        }
    }),
    u.fx.step.clip = function(t) {
        t.clipInit || (t.start = u(t.elem).cssClip(),
        "string" == typeof t.end && (t.end = R(t.end, t.elem)),
        t.clipInit = !0),
        u(t.elem).cssClip({
            top: t.pos * (t.end.top - t.start.top) + t.start.top,
            right: t.pos * (t.end.right - t.start.right) + t.start.right,
            bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
            left: t.pos * (t.end.left - t.start.left) + t.start.left
        })
    }
    ,
    S = {},
    u.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
        S[t] = function(t) {
            return Math.pow(t, e + 2)
        }
    }),
    u.extend(S, {
        Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
            return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; )
                ;
            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }),
    u.each(S, function(t, e) {
        u.easing["easeIn" + t] = e,
        u.easing["easeOut" + t] = function(t) {
            return 1 - e(1 - t)
        }
        ,
        u.easing["easeInOut" + t] = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
        }
    });
    u.effects
});

/* Slick Slider */
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});

/*!
 * HC-Sticky
 * =========
 * Version: 2.2.1
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-sticky
 * Description: Cross-browser plugin that makes any element on your page visible while you scroll
 * License: MIT
 */
!function(t, e) {
    "use strict";
    if ("object" == typeof module && "object" == typeof module.exports) {
        if (!t.document)
            throw new Error("HC-Sticky requires a browser to run.");
        module.exports = e(t)
    } else
        "function" == typeof define && define.amd ? define("hcSticky", [], e(t)) : e(t)
}("undefined" != typeof window ? window : this, function(U) {
    "use strict";
    var Y = {
        top: 0,
        bottom: 0,
        bottomEnd: 0,
        innerTop: 0,
        innerSticker: null,
        stickyClass: "sticky",
        stickTo: null,
        followScroll: !0,
        responsive: null,
        mobileFirst: !1,
        onStart: null,
        onStop: null,
        onBeforeResize: null,
        onResize: null,
        resizeDebounce: 100,
        disable: !1,
        queries: null,
        queryFlow: "down"
    }
      , $ = function(t, e, o) {
        console.log("%c! HC Sticky:%c " + t + "%c " + o + " is now deprecated and will be removed. Use%c " + e + "%c instead.", "color: red", "color: darkviolet", "color: black", "color: darkviolet", "color: black")
    }
      , Q = U.document
      , X = function(n, f) {
        var o = this;
        if ("string" == typeof n && (n = Q.querySelector(n)),
        !n)
            return !1;
        f.queries && $("queries", "responsive", "option"),
        f.queryFlow && $("queryFlow", "mobileFirst", "option");
        var p = {}
          , d = X.Helpers
          , s = n.parentNode;
        "static" === d.getStyle(s, "position") && (s.style.position = "relative");
        var u = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            d.isEmptyObject(t) && !d.isEmptyObject(p) || (p = Object.assign({}, Y, p, t))
        }
          , t = function() {
            return p.disable
        }
          , e = function() {
            var t, e = p.responsive || p.queries;
            if (e) {
                var o = U.innerWidth;
                if (t = f,
                (p = Object.assign({}, Y, t || {})).mobileFirst)
                    for (var i in e)
                        i <= o && !d.isEmptyObject(e[i]) && u(e[i]);
                else {
                    var n = [];
                    for (var s in e) {
                        var r = {};
                        r[s] = e[s],
                        n.push(r)
                    }
                    for (var l = n.length - 1; 0 <= l; l--) {
                        var a = n[l]
                          , c = Object.keys(a)[0];
                        o <= c && !d.isEmptyObject(a[c]) && u(a[c])
                    }
                }
            }
        }
          , r = {
            css: {},
            position: null,
            stick: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                d.hasClass(n, p.stickyClass) || (!1 === l.isAttached && l.attach(),
                r.position = "fixed",
                n.style.position = "fixed",
                n.style.left = l.offsetLeft + "px",
                n.style.width = l.width,
                void 0 === t.bottom ? n.style.bottom = "auto" : n.style.bottom = t.bottom + "px",
                void 0 === t.top ? n.style.top = "auto" : n.style.top = t.top + "px",
                n.classList ? n.classList.add(p.stickyClass) : n.className += " " + p.stickyClass,
                p.onStart && p.onStart.call(n, Object.assign({}, p)))
            },
            release: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (t.stop = t.stop || !1,
                !0 === t.stop || "fixed" === r.position || null === r.position || !(void 0 === t.top && void 0 === t.bottom || void 0 !== t.top && (parseInt(d.getStyle(n, "top")) || 0) === t.top || void 0 !== t.bottom && (parseInt(d.getStyle(n, "bottom")) || 0) === t.bottom)) {
                    !0 === t.stop ? !0 === l.isAttached && l.detach() : !1 === l.isAttached && l.attach();
                    var e = t.position || r.css.position;
                    r.position = e,
                    n.style.position = e,
                    n.style.left = !0 === t.stop ? r.css.left : l.positionLeft + "px",
                    n.style.width = "absolute" !== e ? r.css.width : l.width,
                    void 0 === t.bottom ? n.style.bottom = !0 === t.stop ? "" : "auto" : n.style.bottom = t.bottom + "px",
                    void 0 === t.top ? n.style.top = !0 === t.stop ? "" : "auto" : n.style.top = t.top + "px",
                    n.classList ? n.classList.remove(p.stickyClass) : n.className = n.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)","gi"), " "),
                    p.onStop && p.onStop.call(n, Object.assign({}, p))
                }
            }
        }
          , l = {
            el: Q.createElement("div"),
            offsetLeft: null,
            positionLeft: null,
            width: null,
            isAttached: !1,
            init: function() {
                for (var t in r.css)
                    l.el.style[t] = r.css[t];
                l.el.style["z-index"] = "-1";
                var e = d.getStyle(n);
                l.offsetLeft = d.offset(n).left - (parseInt(e.marginLeft) || 0),
                l.positionLeft = d.position(n).left,
                l.width = d.getStyle(n, "width")
            },
            attach: function() {
                s.insertBefore(l.el, n),
                l.isAttached = !0
            },
            detach: function() {
                l.el = s.removeChild(l.el),
                l.isAttached = !1
            }
        }
          , a = void 0
          , c = void 0
          , g = void 0
          , m = void 0
          , h = void 0
          , v = void 0
          , y = void 0
          , b = void 0
          , S = void 0
          , w = void 0
          , k = void 0
          , E = void 0
          , x = void 0
          , L = void 0
          , T = void 0
          , j = void 0
          , O = void 0
          , C = void 0
          , i = function() {
            var t, e, o, i;
            r.css = (t = n,
            e = d.getCascadedStyle(t),
            o = d.getStyle(t),
            i = {
                height: t.offsetHeight + "px",
                left: e.left,
                right: e.right,
                top: e.top,
                bottom: e.bottom,
                position: o.position,
                display: o.display,
                verticalAlign: o.verticalAlign,
                boxSizing: o.boxSizing,
                marginLeft: e.marginLeft,
                marginRight: e.marginRight,
                marginTop: e.marginTop,
                marginBottom: e.marginBottom,
                paddingLeft: e.paddingLeft,
                paddingRight: e.paddingRight
            },
            e.float && (i.float = e.float || "none"),
            e.cssFloat && (i.cssFloat = e.cssFloat || "none"),
            o.MozBoxSizing && (i.MozBoxSizing = o.MozBoxSizing),
            i.width = "auto" !== e.width ? e.width : "border-box" === i.boxSizing || "border-box" === i.MozBoxSizing ? t.offsetWidth + "px" : o.width,
            i),
            l.init(),
            a = !(!p.stickTo || !("document" === p.stickTo || p.stickTo.nodeType && 9 === p.stickTo.nodeType || "object" == typeof p.stickTo && p.stickTo instanceof ("undefined" != typeof HTMLDocument ? HTMLDocument : Document))),
            c = p.stickTo ? a ? Q : "string" == typeof p.stickTo ? Q.querySelector(p.stickTo) : p.stickTo : s,
            T = (C = function() {
                var t = n.offsetHeight + (parseInt(r.css.marginTop) || 0) + (parseInt(r.css.marginBottom) || 0)
                  , e = (T || 0) - t;
                return -1 <= e && e <= 1 ? T : t
            }
            )(),
            m = (O = function() {
                return a ? Math.max(Q.documentElement.clientHeight, Q.body.scrollHeight, Q.documentElement.scrollHeight, Q.body.offsetHeight, Q.documentElement.offsetHeight) : c.offsetHeight
            }
            )(),
            h = a ? 0 : d.offset(c).top,
            v = p.stickTo ? a ? 0 : d.offset(s).top : h,
            y = U.innerHeight,
            j = n.offsetTop - (parseInt(r.css.marginTop) || 0),
            g = p.innerSticker ? "string" == typeof p.innerSticker ? Q.querySelector(p.innerSticker) : p.innerSticker : null,
            b = isNaN(p.top) && -1 < p.top.indexOf("%") ? parseFloat(p.top) / 100 * y : p.top,
            S = isNaN(p.bottom) && -1 < p.bottom.indexOf("%") ? parseFloat(p.bottom) / 100 * y : p.bottom,
            w = g ? g.offsetTop : p.innerTop ? p.innerTop : 0,
            k = isNaN(p.bottomEnd) && -1 < p.bottomEnd.indexOf("%") ? parseFloat(p.bottomEnd) / 100 * y : p.bottomEnd,
            E = h - b + w + j
        }
          , z = U.pageYOffset || Q.documentElement.scrollTop
          , N = 0
          , H = void 0
          , R = function() {
            T = C(),
            m = O(),
            x = h + m - b - k,
            L = y < T;
            var t = U.pageYOffset || Q.documentElement.scrollTop
              , e = Math.round(d.offset(n).top)
              , o = e - t
              , i = void 0;
            H = t < z ? "up" : "down",
            N = t - z,
            E < (z = t) ? x + b + (L ? S : 0) - (p.followScroll && L ? 0 : b) <= t + T - w - (y - (E - w) < T - w && p.followScroll && 0 < (i = T - y - w) ? i : 0) ? r.release({
                position: "absolute",
                bottom: v + s.offsetHeight - x - b
            }) : L && p.followScroll ? "down" === H ? Math.floor(o + T + S) <= y ? r.stick({
                bottom: S
            }) : "fixed" === r.position && r.release({
                position: "absolute",
                top: e - b - E - N + w
            }) : Math.ceil(o + w) < 0 && "fixed" === r.position ? r.release({
                position: "absolute",
                top: e - b - E + w - N
            }) : t + b - w <= e && r.stick({
                top: b - w
            }) : r.stick({
                top: b - w
            }) : r.release({
                stop: !0
            })
        }
          , A = !1
          , B = !1
          , I = function() {
            A && (d.event.unbind(U, "scroll", R),
            A = !1)
        }
          , q = function() {
            null !== n.offsetParent && "none" !== d.getStyle(n, "display") ? (i(),
            m <= T ? I() : (R(),
            A || (d.event.bind(U, "scroll", R),
            A = !0))) : I()
        }
          , F = function() {
            n.style.position = "",
            n.style.left = "",
            n.style.top = "",
            n.style.bottom = "",
            n.style.width = "",
            n.classList ? n.classList.remove(p.stickyClass) : n.className = n.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)","gi"), " "),
            r.css = {},
            !(r.position = null) === l.isAttached && l.detach()
        }
          , M = function() {
            F(),
            e(),
            t() ? I() : q()
        }
          , D = function() {
            p.onBeforeResize && p.onBeforeResize.call(n, Object.assign({}, p)),
            M(),
            p.onResize && p.onResize.call(n, Object.assign({}, p))
        }
          , P = p.resizeDebounce ? d.debounce(D, p.resizeDebounce) : D
          , W = function() {
            B && (d.event.unbind(U, "resize", P),
            B = !1),
            I()
        }
          , V = function() {
            B || (d.event.bind(U, "resize", P),
            B = !0),
            e(),
            t() ? I() : q()
        };
        this.options = function(t) {
            return t ? p[t] : Object.assign({}, p)
        }
        ,
        this.refresh = M,
        this.update = function(t) {
            u(t),
            f = Object.assign({}, f, t || {}),
            M()
        }
        ,
        this.attach = V,
        this.detach = W,
        this.destroy = function() {
            W(),
            F()
        }
        ,
        this.triggerMethod = function(t, e) {
            "function" == typeof o[t] && o[t](e)
        }
        ,
        this.reinit = function() {
            $("reinit", "refresh", "method"),
            M()
        }
        ,
        u(f),
        V(),
        d.event.bind(U, "load", M)
    };
    if (void 0 !== U.jQuery) {
        var i = U.jQuery
          , n = "hcSticky";
        i.fn.extend({
            hcSticky: function(e, o) {
                return this.length ? "options" === e ? i.data(this.get(0), n).options() : this.each(function() {
                    var t = i.data(this, n);
                    t ? t.triggerMethod(e, o) : (t = new X(this,e),
                    i.data(this, n, t))
                }) : this
            }
        })
    }
    return U.hcSticky = U.hcSticky || X,
    X
}),
function(c) {
    "use strict";
    var t = c.hcSticky
      , f = c.document;
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t, e) {
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n)
                    for (var s in n)
                        Object.prototype.hasOwnProperty.call(n, s) && (o[s] = n[s])
            }
            return o
        },
        writable: !0,
        configurable: !0
    }),
    Array.prototype.forEach || (Array.prototype.forEach = function(t) {
        var e, o;
        if (null == this)
            throw new TypeError("this is null or not defined");
        var i = Object(this)
          , n = i.length >>> 0;
        if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
        for (1 < arguments.length && (e = arguments[1]),
        o = 0; o < n; ) {
            var s;
            o in i && (s = i[o],
            t.call(e, s, o, i)),
            o++
        }
    }
    );
    var e = function() {
        var t = f.documentElement
          , e = function() {};
        function i(t) {
            var e = c.event;
            return e.target = e.target || e.srcElement || t,
            e
        }
        t.addEventListener ? e = function(t, e, o) {
            t.addEventListener(e, o, !1)
        }
        : t.attachEvent && (e = function(e, t, o) {
            e[t + o] = o.handleEvent ? function() {
                var t = i(e);
                o.handleEvent.call(o, t)
            }
            : function() {
                var t = i(e);
                o.call(e, t)
            }
            ,
            e.attachEvent("on" + t, e[t + o])
        }
        );
        var o = function() {};
        return t.removeEventListener ? o = function(t, e, o) {
            t.removeEventListener(e, o, !1)
        }
        : t.detachEvent && (o = function(e, o, i) {
            e.detachEvent("on" + o, e[o + i]);
            try {
                delete e[o + i]
            } catch (t) {
                e[o + i] = void 0
            }
        }
        ),
        {
            bind: e,
            unbind: o
        }
    }()
      , r = function(t, e) {
        return c.getComputedStyle ? e ? f.defaultView.getComputedStyle(t, null).getPropertyValue(e) : f.defaultView.getComputedStyle(t, null) : t.currentStyle ? e ? t.currentStyle[e.replace(/-\w/g, function(t) {
            return t.toUpperCase().replace("-", "")
        })] : t.currentStyle : void 0
    }
      , l = function(t) {
        var e = t.getBoundingClientRect()
          , o = c.pageYOffset || f.documentElement.scrollTop
          , i = c.pageXOffset || f.documentElement.scrollLeft;
        return {
            top: e.top + o,
            left: e.left + i
        }
    };
    t.Helpers = {
        isEmptyObject: function(t) {
            for (var e in t)
                return !1;
            return !0
        },
        debounce: function(i, n, s) {
            var r = void 0;
            return function() {
                var t = this
                  , e = arguments
                  , o = s && !r;
                clearTimeout(r),
                r = setTimeout(function() {
                    r = null,
                    s || i.apply(t, e)
                }, n),
                o && i.apply(t, e)
            }
        },
        hasClass: function(t, e) {
            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)","gi").test(t.className)
        },
        offset: l,
        position: function(t) {
            var e = t.offsetParent
              , o = l(e)
              , i = l(t)
              , n = r(e)
              , s = r(t);
            return o.top += parseInt(n.borderTopWidth) || 0,
            o.left += parseInt(n.borderLeftWidth) || 0,
            {
                top: i.top - o.top - (parseInt(s.marginTop) || 0),
                left: i.left - o.left - (parseInt(s.marginLeft) || 0)
            }
        },
        getStyle: r,
        getCascadedStyle: function(t) {
            var e = t.cloneNode(!0);
            e.style.display = "none",
            Array.prototype.slice.call(e.querySelectorAll('input[type="radio"]')).forEach(function(t) {
                t.removeAttribute("name")
            }),
            t.parentNode.insertBefore(e, t.nextSibling);
            var o = void 0;
            e.currentStyle ? o = e.currentStyle : c.getComputedStyle && (o = f.defaultView.getComputedStyle(e, null));
            var i = {};
            for (var n in o)
                !isNaN(n) || "string" != typeof o[n] && "number" != typeof o[n] || (i[n] = o[n]);
            if (Object.keys(i).length < 3)
                for (var s in i = {},
                o)
                    isNaN(s) || (i[o[s].replace(/-\w/g, function(t) {
                        return t.toUpperCase().replace("-", "")
                    })] = o.getPropertyValue(o[s]));
            if (i.margin || "auto" !== i.marginLeft ? i.margin || i.marginLeft !== i.marginRight || i.marginLeft !== i.marginTop || i.marginLeft !== i.marginBottom || (i.margin = i.marginLeft) : i.margin = "auto",
            !i.margin && "0px" === i.marginLeft && "0px" === i.marginRight) {
                var r = t.offsetLeft - t.parentNode.offsetLeft
                  , l = r - (parseInt(i.left) || 0) - (parseInt(i.right) || 0)
                  , a = t.parentNode.offsetWidth - t.offsetWidth - r - (parseInt(i.right) || 0) + (parseInt(i.left) || 0) - l;
                0 !== a && 1 !== a || (i.margin = "auto")
            }
            return e.parentNode.removeChild(e),
            e = null,
            i
        },
        event: e
    }
}(window);

/** Scroll Spy  */
const links = document.querySelectorAll(".scrollspy-link a");
const sections = document.querySelectorAll(".scrollspy-section");
const indicator = document.querySelector(".scrollspy-indicator");
/*
links.forEach((link) => {
  link.onclick = () => {
    sections.forEach((section) => {
      if (link.dataset.target === section.id) {
        document.documentElement.scrollTop = section.offsetTop;
      }
    });
  };
});*/

window.onscroll = ()=>scrollspy();
window.onload = ()=>scrollspy();
window.onresize = ()=>scrollspy();

const scrollspy = ()=>{
    const pageYPosition = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((section)=>{
        const sectionYPosition = section.offsetTop;

        if (pageYPosition > sectionYPosition - 160 - 150) {
            links.forEach((link)=>{
                if (link.dataset.target === section.id) {
                    indicator.style.left = `${link.closest('.scrollspy-link').offsetLeft}px`;
                    indicator.style.width = `${link.closest('.scrollspy-link').offsetWidth}px`;
                }
            }
            );
        }
    }
    );
}
;

scrollspy();

/* menu on scroll */
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header.fixed').outerHeight();
var didScroll;

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        lastScrollTop = hasScrolled(lastScrollTop);
        didScroll = false;
    }
}, 250);

function hasScrolled(lastScrollTop=0) {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#header.fixed').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#header.fixed').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
    return lastScrollTop;
}

/* Chocolat-1.0.4 */
/* jQuery plugin for lightbox */
!function() {
    "use strict";
    let e = void 0;
    function t(e, t) {
        return new Promise(s=>{
            const i = ()=>{
                t.removeEventListener("transitionend", i),
                s()
            }
            ;
            t.addEventListener("transitionend", i);
            const l = t.getAttribute("class")
              , n = t.getAttribute("style");
            e(),
            l === t.getAttribute("class") && n === t.getAttribute("style") && i(),
            0 === parseFloat(getComputedStyle(t).transitionDuration) && i()
        }
        )
    }
    function s({src: e, srcset: t, sizes: s}) {
        const i = new Image;
        return i.src = e,
        t && (i.srcset = t),
        s && (i.sizes = s),
        "decode"in i ? new Promise((e,t)=>{
            i.decode().then(()=>{
                e(i)
            }
            ).catch(()=>{
                t(i)
            }
            )
        }
        ) : new Promise((e,t)=>{
            i.onload = e(i),
            i.onerror = t(i)
        }
        )
    }
    function i(e) {
        let t, s;
        const {imgHeight: i, imgWidth: l, containerHeight: n, containerWidth: a, canvasWidth: o, canvasHeight: c, imageSize: h} = e
          , r = i / l;
        return "cover" == h ? r < n / a ? s = (t = n) / r : t = (s = a) * r : "native" == h ? (t = i,
        s = l) : (r > c / o ? s = (t = c) / r : t = (s = o) * r,
        "scale-down" === h && (s >= l || t >= i) && (s = l,
        t = i)),
        {
            height: t,
            width: s
        }
    }
    function l(e) {
        return e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : Promise.reject()
    }
    function n() {
        return document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : Promise.reject()
    }
    const a = {
        container: document.body,
        className: void 0,
        imageSize: "scale-down",
        fullScreen: !1,
        loop: !1,
        linkImages: !0,
        setIndex: 0,
        firstImageIndex: 0,
        lastImageIndex: !1,
        currentImageIndex: void 0,
        allowZoom: !0,
        closeOnBackgroundClick: !0,
        setTitle: function() {
            return ""
        },
        description: function() {
            return this.images[this.settings.currentImageIndex].title
        },
        pagination: function() {
            const e = this.settings.lastImageIndex + 1;
            return this.settings.currentImageIndex + 1 + "/" + e
        },
        afterInitialize() {},
        afterMarkup() {},
        afterImageLoad() {},
        afterClose() {},
        zoomedPaddingX: function(e, t) {
            return 0
        },
        zoomedPaddingY: function(e, t) {
            return 0
        }
    };
    class o {
        constructor(e, t) {
            this.settings = t,
            this.elems = {},
            this.images = [],
            this.events = [],
            this.state = {
                fullScreenOpen: !1,
                initialZoomState: null,
                initialized: !1,
                timer: !1,
                visible: !1
            },
            this._cssClasses = ["chocolat-open", "chocolat-in-container", "chocolat-cover", "chocolat-zoomable", "chocolat-zoomed", "chocolat-zooming-in", "chocolat-zooming-out"],
            NodeList.prototype.isPrototypeOf(e) || HTMLCollection.prototype.isPrototypeOf(e) ? e.forEach((e,t)=>{
                this.images.push({
                    title: e.getAttribute("title"),
                    src: e.getAttribute("href"),
                    srcset: e.getAttribute("data-srcset"),
                    sizes: e.getAttribute("data-sizes")
                }),
                this.off(e, "click.chocolat"),
                this.on(e, "click.chocolat", e=>{
                    this.init(t),
                    e.preventDefault()
                }
                )
            }
            ) : this.images = e,
            this.settings.container instanceof Element || this.settings.container instanceof HTMLElement ? this.elems.container = this.settings.container : this.elems.container = document.body,
            this.api = {
                open: e=>(e = parseInt(e) || 0,
                this.init(e)),
                close: ()=>this.close(),
                next: ()=>this.change(1),
                prev: ()=>this.change(-1),
                goto: e=>this.open(e),
                current: ()=>this.settings.currentImageIndex,
                position: ()=>this.position(this.elems.img),
                destroy: ()=>this.destroy(),
                set: (e,t)=>(this.settings[e] = t,
                t),
                get: e=>this.settings[e],
                getElem: e=>this.elems[e]
            }
        }
        init(e) {
            return this.state.initialized || (this.markup(),
            this.attachListeners(),
            this.settings.lastImageIndex = this.images.length - 1,
            this.state.initialized = !0),
            this.settings.afterInitialize.call(this),
            this.load(e)
        }
        load(e) {
            if (this.state.visible || (this.state.visible = !0,
            setTimeout(()=>{
                this.elems.overlay.classList.add("chocolat-visible"),
                this.elems.wrapper.classList.add("chocolat-visible")
            }
            , 0),
            this.elems.container.classList.add("chocolat-open")),
            this.settings.fullScreen && l(this.elems.wrapper),
            this.settings.currentImageIndex === e)
                return Promise.resolve();
            let i, n, a = setTimeout(()=>{
                this.elems.loader.classList.add("chocolat-visible")
            }
            , 1e3), o = setTimeout(()=>{
                o = void 0,
                i = t(()=>{
                    this.elems.imageCanvas.classList.remove("chocolat-visible")
                }
                , this.elems.imageCanvas)
            }
            , 80);
            return s(this.images[e]).then(e=>(n = e,
            o ? (clearTimeout(o),
            Promise.resolve()) : i)).then(()=>{
                const t = e + 1;
                return null != this.images[t] && s(this.images[t]),
                this.settings.currentImageIndex = e,
                this.elems.description.textContent = this.settings.description.call(this),
                this.elems.pagination.textContent = this.settings.pagination.call(this),
                this.arrows(),
                this.position(n).then(()=>(this.elems.loader.classList.remove("chocolat-visible"),
                clearTimeout(a),
                this.appear(n)))
            }
            ).then(()=>{
                this.elems.container.classList.toggle("chocolat-zoomable", this.zoomable(n, this.elems.wrapper)),
                this.settings.afterImageLoad.call(this)
            }
            )
        }
        position({naturalHeight: e, naturalWidth: s}) {
            const l = {
                imgHeight: e,
                imgWidth: s,
                containerHeight: this.elems.container.clientHeight,
                containerWidth: this.elems.container.clientWidth,
                canvasWidth: this.elems.imageCanvas.clientWidth,
                canvasHeight: this.elems.imageCanvas.clientHeight,
                imageSize: this.settings.imageSize
            }
              , {width: n, height: a} = i(l);
            return t(()=>{
                Object.assign(this.elems.imageWrapper.style, {
                    width: n + "px",
                    height: a + "px"
                })
            }
            , this.elems.imageWrapper)
        }
        appear(e) {
            return this.elems.imageWrapper.removeChild(this.elems.img),
            this.elems.img = e,
            this.elems.img.setAttribute("class", "chocolat-img"),
            this.elems.imageWrapper.appendChild(this.elems.img),
            t(()=>{
                this.elems.imageCanvas.classList.add("chocolat-visible")
            }
            , this.elems.imageCanvas)
        }
        change(e) {
            if (!this.state.visible)
                return;
            if (!this.settings.linkImages)
                return;
            this.zoomOut();
            const t = this.settings.currentImageIndex + parseInt(e);
            if (t > this.settings.lastImageIndex) {
                if (this.settings.loop)
                    return this.load(this.settings.firstImageIndex)
            } else {
                if (!(t < this.settings.firstImageIndex))
                    return this.load(t);
                if (this.settings.loop)
                    return this.load(this.settings.lastImageIndex)
            }
        }
        arrows() {
            this.settings.loop ? (this.elems.left.classList.add("active"),
            this.elems.right.classList.add("active")) : this.settings.linkImages ? (this.elems.right.classList.toggle("active", this.settings.currentImageIndex !== this.settings.lastImageIndex),
            this.elems.left.classList.toggle("active", this.settings.currentImageIndex !== this.settings.firstImageIndex)) : (this.elems.left.classList.remove("active"),
            this.elems.right.classList.remove("active"))
        }
        close() {
            if (this.state.fullScreenOpen)
                return void n();
            this.state.visible = !1;
            const e = t(()=>{
                this.elems.overlay.classList.remove("chocolat-visible")
            }
            , this.elems.overlay)
              , s = t(()=>{
                this.elems.wrapper.classList.remove("chocolat-visible")
            }
            , this.elems.wrapper);
            return Promise.all([e, s]).then(()=>{
                this.elems.container.classList.remove("chocolat-open"),
                this.settings.afterClose.call(this)
            }
            )
        }
        destroy() {
            for (let e = this.events.length - 1; e >= 0; e--) {
                const {element: t, eventName: s} = this.events[e];
                this.off(t, s)
            }
            this.state.initialized && (this.state.fullScreenOpen && n(),
            this.settings.currentImageIndex = void 0,
            this.state.visible = !1,
            this.state.initialized = !1,
            this.elems.container.classList.remove(...this._cssClasses),
            this.elems.wrapper.parentNode.removeChild(this.elems.wrapper))
        }
        markup() {
            this.elems.container.classList.add("chocolat-open", this.settings.className),
            "cover" == this.settings.imageSize && this.elems.container.classList.add("chocolat-cover"),
            this.elems.container !== document.body && this.elems.container.classList.add("chocolat-in-container"),
            this.elems.wrapper = document.createElement("div"),
            this.elems.wrapper.setAttribute("id", "chocolat-content-" + this.settings.setIndex),
            this.elems.wrapper.setAttribute("class", "chocolat-wrapper"),
            this.elems.container.appendChild(this.elems.wrapper),
            this.elems.overlay = document.createElement("div"),
            this.elems.overlay.setAttribute("class", "chocolat-overlay"),
            this.elems.wrapper.appendChild(this.elems.overlay),
            this.elems.loader = document.createElement("div"),
            this.elems.loader.setAttribute("class", "chocolat-loader"),
            this.elems.wrapper.appendChild(this.elems.loader),
            this.elems.layout = document.createElement("div"),
            this.elems.layout.setAttribute("class", "chocolat-layout"),
            this.elems.wrapper.appendChild(this.elems.layout),
            this.elems.top = document.createElement("div"),
            this.elems.top.setAttribute("class", "chocolat-top"),
            this.elems.layout.appendChild(this.elems.top),
            this.elems.center = document.createElement("div"),
            this.elems.center.setAttribute("class", "chocolat-center"),
            this.elems.layout.appendChild(this.elems.center),
            this.elems.left = document.createElement("div"),
            this.elems.left.setAttribute("class", "chocolat-left"),
            this.elems.center.appendChild(this.elems.left),
            this.elems.imageCanvas = document.createElement("div"),
            this.elems.imageCanvas.setAttribute("class", "chocolat-image-canvas"),
            this.elems.center.appendChild(this.elems.imageCanvas),
            this.elems.imageWrapper = document.createElement("div"),
            this.elems.imageWrapper.setAttribute("class", "chocolat-image-wrapper"),
            this.elems.imageCanvas.appendChild(this.elems.imageWrapper),
            this.elems.img = document.createElement("img"),
            this.elems.img.setAttribute("class", "chocolat-img"),
            this.elems.imageWrapper.appendChild(this.elems.img),
            this.elems.right = document.createElement("div"),
            this.elems.right.setAttribute("class", "chocolat-right"),
            this.elems.center.appendChild(this.elems.right),
            this.elems.bottom = document.createElement("div"),
            this.elems.bottom.setAttribute("class", "chocolat-bottom"),
            this.elems.layout.appendChild(this.elems.bottom),
            this.elems.close = document.createElement("span"),
            this.elems.close.setAttribute("class", "chocolat-close"),
            this.elems.top.appendChild(this.elems.close),
            this.elems.description = document.createElement("span"),
            this.elems.description.setAttribute("class", "chocolat-description"),
            this.elems.bottom.appendChild(this.elems.description),
            this.elems.pagination = document.createElement("span"),
            this.elems.pagination.setAttribute("class", "chocolat-pagination"),
            this.elems.bottom.appendChild(this.elems.pagination),
            this.elems.setTitle = document.createElement("span"),
            this.elems.setTitle.setAttribute("class", "chocolat-set-title"),
            this.elems.setTitle.textContent = this.settings.setTitle(),
            this.elems.bottom.appendChild(this.elems.setTitle),
            this.elems.fullscreen = document.createElement("span"),
            this.elems.fullscreen.setAttribute("class", "chocolat-fullscreen"),
            this.elems.bottom.appendChild(this.elems.fullscreen),
            this.settings.afterMarkup.call(this)
        }
        attachListeners() {
            this.off(document, "keydown.chocolat"),
            this.on(document, "keydown.chocolat", e=>{
                this.state.initialized && (37 == e.keyCode ? this.change(-1) : 39 == e.keyCode ? this.change(1) : 27 == e.keyCode && this.close())
            }
            );
            const t = this.elems.wrapper.querySelector(".chocolat-right");
            this.off(t, "click.chocolat"),
            this.on(t, "click.chocolat", ()=>{
                this.change(1)
            }
            );
            const s = this.elems.wrapper.querySelector(".chocolat-left");
            this.off(s, "click.chocolat"),
            this.on(s, "click.chocolat", ()=>{
                this.change(-1)
            }
            ),
            this.off(this.elems.close, "click.chocolat"),
            this.on(this.elems.close, "click.chocolat", this.close.bind(this)),
            this.off(this.elems.fullscreen, "click.chocolat"),
            this.on(this.elems.fullscreen, "click.chocolat", ()=>{
                this.state.fullScreenOpen ? n() : l(this.elems.wrapper)
            }
            ),
            this.off(document, "fullscreenchange.chocolat"),
            this.on(document, "fullscreenchange.chocolat", ()=>{
                document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? this.state.fullScreenOpen = !0 : this.state.fullScreenOpen = !1
            }
            ),
            this.off(document, "webkitfullscreenchange.chocolat"),
            this.on(document, "webkitfullscreenchange.chocolat", ()=>{
                document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? this.state.fullScreenOpen = !0 : this.state.fullScreenOpen = !1
            }
            ),
            this.settings.closeOnBackgroundClick && (this.off(this.elems.overlay, "click.chocolat"),
            this.on(this.elems.overlay, "click.chocolat", this.close.bind(this))),
            this.off(this.elems.wrapper, "click.chocolat"),
            this.on(this.elems.wrapper, "click.chocolat", ()=>{
                null !== this.state.initialZoomState && this.state.visible && (this.elems.container.classList.add("chocolat-zooming-out"),
                this.zoomOut().then(()=>{
                    this.elems.container.classList.remove("chocolat-zoomed"),
                    this.elems.container.classList.remove("chocolat-zooming-out")
                }
                ))
            }
            ),
            this.off(this.elems.imageWrapper, "click.chocolat"),
            this.on(this.elems.imageWrapper, "click.chocolat", e=>{
                null === this.state.initialZoomState && this.elems.container.classList.contains("chocolat-zoomable") && (e.stopPropagation(),
                this.elems.container.classList.add("chocolat-zooming-in"),
                this.zoomIn(e).then(()=>{
                    this.elems.container.classList.add("chocolat-zoomed"),
                    this.elems.container.classList.remove("chocolat-zooming-in")
                }
                ))
            }
            ),
            this.on(this.elems.wrapper, "mousemove.chocolat", e=>{
                if (null === this.state.initialZoomState || !this.state.visible)
                    return;
                const t = this.elems.wrapper.getBoundingClientRect()
                  , s = t.top + window.scrollY
                  , i = t.left + window.scrollX
                  , l = this.elems.wrapper.clientHeight
                  , n = this.elems.wrapper.clientWidth
                  , a = this.elems.img.width
                  , o = this.elems.img.height
                  , c = [e.pageX - n / 2 - i, e.pageY - l / 2 - s];
                let h = 0;
                if (a > n) {
                    const e = this.settings.zoomedPaddingX(a, n);
                    h = c[0] / (n / 2),
                    h *= (a - n) / 2 + e
                }
                let r = 0;
                if (o > l) {
                    const e = this.settings.zoomedPaddingY(o, l);
                    r = c[1] / (l / 2),
                    r *= (o - l) / 2 + e
                }
                this.elems.img.style.marginLeft = -h + "px",
                this.elems.img.style.marginTop = -r + "px"
            }
            ),
            this.on(window, "resize.chocolat", t=>{
                this.state.initialized && this.state.visible && function(t, s) {
                    clearTimeout(e),
                    e = setTimeout(function() {
                        s()
                    }, t)
                }(50, ()=>{
                    const e = {
                        imgHeight: this.elems.img.naturalHeight,
                        imgWidth: this.elems.img.naturalWidth,
                        containerHeight: this.elems.wrapper.clientHeight,
                        containerWidth: this.elems.wrapper.clientWidth,
                        canvasWidth: this.elems.imageCanvas.clientWidth,
                        canvasHeight: this.elems.imageCanvas.clientHeight,
                        imageSize: this.settings.imageSize
                    }
                      , {width: t, height: s} = i(e);
                    this.position(this.elems.img).then(()=>{
                        this.elems.container.classList.toggle("chocolat-zoomable", this.zoomable(this.elems.img, this.elems.wrapper))
                    }
                    )
                }
                )
            }
            )
        }
        zoomable(e, t) {
            const s = t.clientWidth
              , i = t.clientHeight
              , l = !(!this.settings.allowZoom || !(e.naturalWidth > s || e.naturalHeight > i))
              , n = e.clientWidth > e.naturalWidth || e.clientHeight > e.naturalHeight;
            return l && !n
        }
        zoomIn(e) {
            return this.state.initialZoomState = this.settings.imageSize,
            this.settings.imageSize = "native",
            this.position(this.elems.img)
        }
        zoomOut(e) {
            return this.settings.imageSize = this.state.initialZoomState || this.settings.imageSize,
            this.state.initialZoomState = null,
            this.elems.img.style.margin = 0,
            this.position(this.elems.img)
        }
        on(e, t, s) {
            const i = this.events.push({
                element: e,
                eventName: t,
                cb: s
            });
            e.addEventListener(t.split(".")[0], this.events[i - 1].cb)
        }
        off(e, t) {
            const s = this.events.findIndex(s=>s.element === e && s.eventName === t);
            this.events[s] && (e.removeEventListener(t.split(".")[0], this.events[s].cb),
            this.events.splice(s, 1))
        }
    }
    const c = [];
    window.Chocolat = function(e, t) {
        const s = Object.assign({}, a, {
            images: []
        }, t, {
            setIndex: c.length
        })
          , i = new o(e,s);
        return c.push(i),
        i
    }
}();

/*
 anime.js
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this = this;
(function(v, p) {
    "function" === typeof define && define.amd ? define([], p) : "object" === typeof module && module.exports ? module.exports = p() : v.anime = p()
}
)(this, function() {
    function v(a) {
        if (!g.col(a))
            try {
                return document.querySelectorAll(a)
            } catch (b) {}
    }
    function p(a) {
        return a.reduce(function(a, d) {
            return a.concat(g.arr(d) ? p(d) : d)
        }, [])
    }
    function w(a) {
        if (g.arr(a))
            return a;
        g.str(a) && (a = v(a) || a);
        return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
    }
    function F(a, b) {
        return a.some(function(a) {
            return a === b
        })
    }
    function A(a) {
        var b = {}, d;
        for (d in a)
            b[d] = a[d];
        return b
    }
    function G(a, b) {
        var d = A(a), c;
        for (c in a)
            d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
        return d
    }
    function B(a, b) {
        var d = A(a), c;
        for (c in b)
            d[c] = g.und(a[c]) ? b[c] : a[c];
        return d
    }
    function S(a) {
        a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, b, d, h) {
            return b + b + d + d + h + h
        });
        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        a = parseInt(b[1], 16);
        var d = parseInt(b[2], 16)
          , b = parseInt(b[3], 16);
        return "rgb(" + a + "," + d + "," + b + ")"
    }
    function T(a) {
        function b(a, b, c) {
            0 > c && (c += 1);
            1 < c && --c;
            return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
        }
        var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
        a = parseInt(d[1]) / 360;
        var c = parseInt(d[2]) / 100
          , d = parseInt(d[3]) / 100;
        if (0 == c)
            c = d = a = d;
        else {
            var e = .5 > d ? d * (1 + c) : d + c - d * c
              , l = 2 * d - e
              , c = b(l, e, a + 1 / 3)
              , d = b(l, e, a);
            a = b(l, e, a - 1 / 3)
        }
        return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")"
    }
    function x(a) {
        if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))
            return a[2]
    }
    function U(a) {
        if (-1 < a.indexOf("translate"))
            return "px";
        if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew"))
            return "deg"
    }
    function H(a, b) {
        return g.fnc(a) ? a(b.target, b.id, b.total) : a
    }
    function C(a, b) {
        if (b in a.style)
            return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }
    function I(a, b) {
        if (g.dom(a) && F(V, b))
            return "transform";
        if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b]))
            return "attribute";
        if (g.dom(a) && "transform" !== b && C(a, b))
            return "css";
        if (null != a[b])
            return "object"
    }
    function W(a, b) {
        var d = U(b)
          , d = -1 < b.indexOf("scale") ? 1 : 0 + d;
        a = a.style.transform;
        if (!a)
            return d;
        for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a); )
            e.push(c[1]),
            l.push(c[2]);
        a = l.filter(function(a, c) {
            return e[c] === b
        });
        return a.length ? a[0] : d
    }
    function J(a, b) {
        switch (I(a, b)) {
        case "transform":
            return W(a, b);
        case "css":
            return C(a, b);
        case "attribute":
            return a.getAttribute(b)
        }
        return a[b] || 0
    }
    function K(a, b) {
        var d = /^(\*=|\+=|-=)/.exec(a);
        if (!d)
            return a;
        b = parseFloat(b);
        a = parseFloat(a.replace(d[0], ""));
        switch (d[0][0]) {
        case "+":
            return b + a;
        case "-":
            return b - a;
        case "*":
            return b * a
        }
    }
    function D(a) {
        return g.obj(a) && a.hasOwnProperty("totalLength")
    }
    function X(a, b) {
        function d(c) {
            c = void 0 === c ? 0 : c;
            return a.el.getPointAtLength(1 <= b + c ? b + c : 0)
        }
        var c = d()
          , e = d(-1)
          , l = d(1);
        switch (a.property) {
        case "x":
            return c.x;
        case "y":
            return c.y;
        case "angle":
            return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI
        }
    }
    function L(a, b) {
        var d = /-?\d*\.?\d+/g;
        a = D(a) ? a.totalLength : a;
        if (g.col(a))
            b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;
        else {
            var c = x(a);
            a = c ? a.substr(0, a.length - c.length) : a;
            b = b ? a + b : a
        }
        b += "";
        return {
            original: b,
            numbers: b.match(d) ? b.match(d).map(Number) : [0],
            strings: b.split(d)
        }
    }
    function Y(a, b) {
        return b.reduce(function(b, c, e) {
            return b + a[e - 1] + c
        })
    }
    function M(a) {
        return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function(a, d, c) {
            return c.indexOf(a) === d
        })
    }
    function Z(a) {
        var b = M(a);
        return b.map(function(a, c) {
            return {
                target: a,
                id: c,
                total: b.length
            }
        })
    }
    function aa(a, b) {
        var d = A(b);
        if (g.arr(a)) {
            var c = a.length;
            2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = {
                value: a
            }
        }
        return w(a).map(function(a, c) {
            c = c ? 0 : b.delay;
            a = g.obj(a) && !D(a) ? a : {
                value: a
            };
            g.und(a.delay) && (a.delay = c);
            return a
        }).map(function(a) {
            return B(a, d)
        })
    }
    function ba(a, b) {
        var d = {}, c;
        for (c in a) {
            var e = H(a[c], b);
            g.arr(e) && (e = e.map(function(a) {
                return H(a, b)
            }),
            1 === e.length && (e = e[0]));
            d[c] = e
        }
        d.duration = parseFloat(d.duration);
        d.delay = parseFloat(d.delay);
        return d
    }
    function ca(a) {
        return g.arr(a) ? y.apply(this, a) : N[a]
    }
    function da(a, b) {
        var d;
        return a.tweens.map(function(c) {
            c = ba(c, b);
            var e = c.value
              , l = J(b.target, a.name)
              , h = d ? d.to.original : l
              , h = g.arr(e) ? e[0] : h
              , m = K(g.arr(e) ? e[1] : e, h)
              , l = x(m) || x(h) || x(l);
            c.isPath = D(e);
            c.from = L(h, l);
            c.to = L(m, l);
            c.start = d ? d.end : a.offset;
            c.end = c.start + c.delay + c.duration;
            c.easing = ca(c.easing);
            c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;
            g.col(c.from.original) && (c.round = 1);
            return d = c
        })
    }
    function ea(a, b) {
        return p(a.map(function(a) {
            return b.map(function(b) {
                var c = I(a.target, b.name);
                if (c) {
                    var d = da(b, a);
                    b = {
                        type: c,
                        property: b.name,
                        animatable: a,
                        tweens: d,
                        duration: d[d.length - 1].end,
                        delay: d[0].delay
                    }
                } else
                    b = void 0;
                return b
            })
        })).filter(function(a) {
            return !g.und(a)
        })
    }
    function O(a, b, d) {
        var c = "delay" === a ? Math.min : Math.max;
        return b.length ? c.apply(Math, b.map(function(b) {
            return b[a]
        })) : d[a]
    }
    function fa(a) {
        var b = G(ga, a), d = G(ha, a), c = Z(a.targets), e = [], g = B(b, d), h;
        for (h in a)
            g.hasOwnProperty(h) || "targets" === h || e.push({
                name: h,
                offset: g.offset,
                tweens: aa(a[h], d)
            });
        a = ea(c, e);
        return B(b, {
            children: [],
            animatables: c,
            animations: a,
            duration: O("duration", a, d),
            delay: O("delay", a, d)
        })
    }
    function n(a) {
        function b() {
            return window.Promise && new Promise(function(a) {
                return Q = a
            }
            )
        }
        function d(a) {
            return f.reversed ? f.duration - a : a
        }
        function c(a) {
            for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length; ) {
                var g = d[b]
                  , h = g.animatable
                  , m = g.tweens;
                e.tween = m.filter(function(b) {
                    return a < b.end
                })[0] || m[m.length - 1];
                e.isPath$1 = e.tween.isPath;
                e.round = e.tween.round;
                e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);
                m = Y(e.tween.to.numbers.map(function(a) {
                    return function(b, c) {
                        c = a.isPath$1 ? 0 : a.tween.from.numbers[c];
                        b = c + a.eased * (b - c);
                        a.isPath$1 && (b = X(a.tween.value, b));
                        a.round && (b = Math.round(b * a.round) / a.round);
                        return b
                    }
                }(e)), e.tween.to.strings);
                ia[g.type](h.target, g.property, m, c, h.id);
                g.currentValue = m;
                b++;
                e = {
                    isPath$1: e.isPath$1,
                    tween: e.tween,
                    eased: e.eased,
                    round: e.round
                }
            }
            if (c)
                for (var k in c)
                    E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"),
                    f.animatables[k].target.style[E] = c[k].join(" ");
            f.currentTime = a;
            f.progress = a / f.duration * 100
        }
        function e(a) {
            if (f[a])
                f[a](f)
        }
        function g() {
            f.remaining && !0 !== f.remaining && f.remaining--
        }
        function h(a) {
            var h = f.duration
              , l = f.offset
              , n = f.delay
              , P = f.currentTime
              , q = f.reversed
              , r = d(a)
              , r = Math.min(Math.max(r, 0), h);
            if (f.children) {
                var p = f.children;
                if (r >= f.currentTime)
                    for (var u = 0; u < p.length; u++)
                        p[u].seek(r);
                else
                    for (u = p.length; u--; )
                        p[u].seek(r)
            }
            r > l && r < h ? (c(r),
            !f.began && r >= n && (f.began = !0,
            e("begin")),
            e("run")) : (r <= l && 0 !== P && (c(0),
            q && g()),
            r >= h && P !== h && (c(h),
            q || g()));
            a >= h && (f.remaining ? (t = m,
            "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(),
            "Promise"in window && (Q(),
            R = b()),
            f.completed || (f.completed = !0,
            e("complete"))),
            k = 0);
            e("update")
        }
        a = void 0 === a ? {} : a;
        var m, t, k = 0, Q = null, R = b(), f = fa(a);
        f.reset = function() {
            var a = f.direction
              , b = f.loop;
            f.currentTime = 0;
            f.progress = 0;
            f.paused = !0;
            f.began = !1;
            f.completed = !1;
            f.reversed = "reverse" === a;
            f.remaining = "alternate" === a && 1 === b ? 2 : b;
            for (a = f.children.length; a--; )
                b = f.children[a],
                b.seek(b.offset),
                b.reset()
        }
        ;
        f.tick = function(a) {
            m = a;
            t || (t = m);
            h((k + m - t) * n.speed)
        }
        ;
        f.seek = function(a) {
            h(d(a))
        }
        ;
        f.pause = function() {
            var a = q.indexOf(f);
            -1 < a && q.splice(a, 1);
            f.paused = !0
        }
        ;
        f.play = function() {
            f.paused && (f.paused = !1,
            t = 0,
            k = d(f.currentTime),
            q.push(f),
            z || ja())
        }
        ;
        f.reverse = function() {
            f.reversed = !f.reversed;
            t = 0;
            k = d(f.currentTime)
        }
        ;
        f.restart = function() {
            f.pause();
            f.reset();
            f.play()
        }
        ;
        f.finished = R;
        f.reset();
        f.autoplay && f.play();
        return f
    }
    var ga = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
    }, ha = {
        duration: 1E3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
    }, V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "), E, g = {
        arr: function(a) {
            return Array.isArray(a)
        },
        obj: function(a) {
            return -1 < Object.prototype.toString.call(a).indexOf("Object")
        },
        svg: function(a) {
            return a instanceof SVGElement
        },
        dom: function(a) {
            return a.nodeType || g.svg(a)
        },
        str: function(a) {
            return "string" === typeof a
        },
        fnc: function(a) {
            return "function" === typeof a
        },
        und: function(a) {
            return "undefined" === typeof a
        },
        hex: function(a) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
        },
        rgb: function(a) {
            return /^rgb/.test(a)
        },
        hsl: function(a) {
            return /^hsl/.test(a)
        },
        col: function(a) {
            return g.hex(a) || g.rgb(a) || g.hsl(a)
        }
    }, y = function() {
        function a(a, d, c) {
            return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a
        }
        return function(b, d, c, e) {
            if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
                var g = new Float32Array(11);
                if (b !== d || c !== e)
                    for (var h = 0; 11 > h; ++h)
                        g[h] = a(.1 * h, b, c);
                return function(h) {
                    if (b === d && c === e)
                        return h;
                    if (0 === h)
                        return 0;
                    if (1 === h)
                        return 1;
                    for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k)
                        m += .1;
                    --k;
                    var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1
                      , l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
                    if (.001 <= l) {
                        for (m = 0; 4 > m; ++m) {
                            l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
                            if (0 === l)
                                break;
                            var n = a(k, b, c) - h
                              , k = k - n / l
                        }
                        h = k
                    } else if (0 === l)
                        h = k;
                    else {
                        var k = m
                          , m = m + .1
                          , f = 0;
                        do
                            n = k + (m - k) / 2,
                            l = a(n, b, c) - h,
                            0 < l ? m = n : k = n;
                        while (1e-7 < Math.abs(l) && 10 > ++f);
                        h = n
                    }
                    return a(h, d, e)
                }
            }
        }
    }(), N = function() {
        function a(a, b) {
            return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b)
        }
        var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), d = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(b, c) {
                return 1 - a(1 - b, c)
            }
            ],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(b, c) {
                return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2
            }
            ]
        }, c = {
            linear: y(.25, .25, .75, .75)
        }, e = {}, l;
        for (l in d)
            e.type = l,
            d[e.type].forEach(function(a) {
                return function(d, e) {
                    c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d)
                }
            }(e)),
            e = {
                type: e.type
            };
        return c
    }(), ia = {
        css: function(a, b, d) {
            return a.style[b] = d
        },
        attribute: function(a, b, d) {
            return a.setAttribute(b, d)
        },
        object: function(a, b, d) {
            return a[b] = d
        },
        transform: function(a, b, d, c, e) {
            c[e] || (c[e] = []);
            c[e].push(b + "(" + d + ")")
        }
    }, q = [], z = 0, ja = function() {
        function a() {
            z = requestAnimationFrame(b)
        }
        function b(b) {
            var c = q.length;
            if (c) {
                for (var d = 0; d < c; )
                    q[d] && q[d].tick(b),
                    d++;
                a()
            } else
                cancelAnimationFrame(z),
                z = 0
        }
        return a
    }();
    n.version = "2.0.2";
    n.speed = 1;
    n.running = q;
    n.remove = function(a) {
        a = M(a);
        for (var b = q.length; b--; )
            for (var d = q[b], c = d.animations, e = c.length; e--; )
                F(a, c[e].animatable.target) && (c.splice(e, 1),
                c.length || d.pause())
    }
    ;
    n.getValue = J;
    n.path = function(a, b) {
        var d = g.str(a) ? v(a)[0] : a
          , c = b || 100;
        return function(a) {
            return {
                el: d,
                property: a,
                totalLength: d.getTotalLength() * (c / 100)
            }
        }
    }
    ;
    n.setDashoffset = function(a) {
        var b = a.getTotalLength();
        a.setAttribute("stroke-dasharray", b);
        return b
    }
    ;
    n.bezier = y;
    n.easings = N;
    n.timeline = function(a) {
        var b = n(a);
        b.pause();
        b.duration = 0;
        b.add = function(a) {
            b.children.forEach(function(a) {
                a.began = !0;
                a.completed = !0
            });
            w(a).forEach(function(a) {
                var c = b.duration
                  , d = a.offset;
                a.autoplay = !1;
                a.offset = g.und(d) ? c : K(d, c);
                b.seek(a.offset);
                a = n(a);
                a.duration > c && (b.duration = a.duration);
                a.began = !0;
                b.children.push(a)
            });
            b.reset();
            b.seek(0);
            b.autoplay && b.restart();
            return b
        }
        ;
        return b
    }
    ;
    n.random = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }
    ;
    return n
});

/*!
 * Jarallax v2.0.2 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jarallax = t()
}(this, (function() {
    "use strict";
    function e(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, {
            capture: !0,
            once: !0,
            passive: !0
        })
    }
    let t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    var i = t;
    const {navigator: o} = i
      , n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o.userAgent);
    let a, s;
    function l() {
        n ? (!a && document.body && (a = document.createElement("div"),
        a.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",
        document.body.appendChild(a)),
        s = (a ? a.clientHeight : 0) || i.innerHeight || document.documentElement.clientHeight) : s = i.innerHeight || document.documentElement.clientHeight
    }
    l(),
    i.addEventListener("resize", l),
    i.addEventListener("orientationchange", l),
    i.addEventListener("load", l),
    e((()=>{
        l()
    }
    ));
    const r = [];
    function m() {
        r.length && (r.forEach(((e,t)=>{
            const {instance: o, oldData: n} = e
              , a = o.$item.getBoundingClientRect()
              , l = {
                width: a.width,
                height: a.height,
                top: a.top,
                bottom: a.bottom,
                wndW: i.innerWidth,
                wndH: s
            }
              , m = !n || n.wndW !== l.wndW || n.wndH !== l.wndH || n.width !== l.width || n.height !== l.height
              , c = m || !n || n.top !== l.top || n.bottom !== l.bottom;
            r[t].oldData = l,
            m && o.onResize(),
            c && o.onScroll()
        }
        )),
        i.requestAnimationFrame(m))
    }
    let c = 0;
    class p {
        constructor(e, t) {
            const i = this;
            i.instanceID = c,
            c += 1,
            i.$item = e,
            i.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            const n = i.$item.dataset || {}
              , a = {};
            if (Object.keys(n).forEach((e=>{
                const t = e.substr(0, 1).toLowerCase() + e.substr(1);
                t && void 0 !== i.defaults[t] && (a[t] = n[e])
            }
            )),
            i.options = i.extend({}, i.defaults, a, t),
            i.pureOptions = i.extend({}, i.options),
            Object.keys(i.options).forEach((e=>{
                "true" === i.options[e] ? i.options[e] = !0 : "false" === i.options[e] && (i.options[e] = !1)
            }
            )),
            i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))),
            "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)),
            i.options.disableParallax instanceof RegExp) {
                const e = i.options.disableParallax;
                i.options.disableParallax = ()=>e.test(o.userAgent)
            }
            if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = ()=>!1),
            "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)),
            i.options.disableVideo instanceof RegExp) {
                const e = i.options.disableVideo;
                i.options.disableVideo = ()=>e.test(o.userAgent)
            }
            "function" != typeof i.options.disableVideo && (i.options.disableVideo = ()=>!1);
            let s = i.options.elementInViewport;
            s && "object" == typeof s && void 0 !== s.length && ([s] = s),
            s instanceof Element || (s = null),
            i.options.elementInViewport = s,
            i.image = {
                src: i.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: "fixed"
            },
            i.initImg() && i.canInitParallax() && i.init()
        }
        css(e, t) {
            return "string" == typeof t ? i.getComputedStyle(e).getPropertyValue(t) : (Object.keys(t).forEach((i=>{
                e.style[i] = t[i]
            }
            )),
            e)
        }
        extend(e, ...t) {
            return e = e || {},
            Object.keys(t).forEach((i=>{
                t[i] && Object.keys(t[i]).forEach((o=>{
                    e[o] = t[i][o]
                }
                ))
            }
            )),
            e
        }
        getWindowData() {
            return {
                width: i.innerWidth || document.documentElement.clientWidth,
                height: s,
                y: document.documentElement.scrollTop
            }
        }
        initImg() {
            const e = this;
            let t = e.options.imgElement;
            return t && "string" == typeof t && (t = e.$item.querySelector(t)),
            t instanceof Element || (e.options.imgSrc ? (t = new Image,
            t.src = e.options.imgSrc) : t = null),
            t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t,
            e.image.$itemParent = t.parentNode),
            e.image.useImgTag = !0),
            !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            e.image.bgImage = e.css(e.$item, "background-image")),
            !(!e.image.bgImage || "none" === e.image.bgImage))
        }
        canInitParallax() {
            return !this.options.disableParallax()
        }
        init() {
            const e = this
              , t = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden"
            };
            let o = {
                pointerEvents: "none",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform,opacity"
            };
            if (!e.options.keepImg) {
                const t = e.$item.getAttribute("style");
                if (t && e.$item.setAttribute("data-jarallax-original-styles", t),
                e.image.useImgTag) {
                    const t = e.image.$item.getAttribute("style");
                    t && e.image.$item.setAttribute("data-jarallax-original-styles", t)
                }
            }
            if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                position: "relative"
            }),
            "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                zIndex: 0
            }),
            e.image.$container = document.createElement("div"),
            e.css(e.image.$container, t),
            e.css(e.image.$container, {
                "z-index": e.options.zIndex
            }),
            "fixed" === this.image.position && e.css(e.image.$container, {
                "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }),
            e.image.$container.setAttribute("id", `jarallax-container-${e.instanceID}`),
            e.$item.appendChild(e.image.$container),
            e.image.useImgTag ? o = e.extend({
                "object-fit": e.options.imgSize,
                "object-position": e.options.imgPosition,
                "max-width": "none"
            }, t, o) : (e.image.$item = document.createElement("div"),
            e.image.src && (o = e.extend({
                "background-position": e.options.imgPosition,
                "background-size": e.options.imgSize,
                "background-repeat": e.options.imgRepeat,
                "background-image": e.image.bgImage || `url("${e.image.src}")`
            }, t, o))),
            "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"),
            "fixed" === e.image.position) {
                const t = function(e) {
                    const t = [];
                    for (; null !== e.parentElement; )
                        1 === (e = e.parentElement).nodeType && t.push(e);
                    return t
                }(e.$item).filter((e=>{
                    const t = i.getComputedStyle(e)
                      , o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                    return o && "none" !== o || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                }
                ));
                e.image.position = t.length ? "absolute" : "fixed"
            }
            o.position = e.image.position,
            e.css(e.image.$item, o),
            e.image.$container.appendChild(e.image.$item),
            e.onResize(),
            e.onScroll(!0),
            e.options.onInit && e.options.onInit.call(e),
            "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                "background-image": "none"
            }),
            e.addToParallaxList()
        }
        addToParallaxList() {
            r.push({
                instance: this
            }),
            1 === r.length && i.requestAnimationFrame(m)
        }
        removeFromParallaxList() {
            const e = this;
            r.forEach(((t,i)=>{
                t.instance.instanceID === e.instanceID && r.splice(i, 1)
            }
            ))
        }
        destroy() {
            const e = this;
            e.removeFromParallaxList();
            const t = e.$item.getAttribute("data-jarallax-original-styles");
            if (e.$item.removeAttribute("data-jarallax-original-styles"),
            t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"),
            e.image.useImgTag) {
                const i = e.image.$item.getAttribute("data-jarallax-original-styles");
                e.image.$item.removeAttribute("data-jarallax-original-styles"),
                i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"),
                e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
            }
            e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container),
            e.options.onDestroy && e.options.onDestroy.call(e),
            delete e.$item.jarallax
        }
        clipContainer() {}
        coverImage() {
            const e = this
              , t = e.image.$container.getBoundingClientRect()
              , i = t.height
              , {speed: o} = e.options
              , n = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
            let a = 0
              , l = i
              , r = 0;
            return n && (0 > o ? (a = o * Math.max(i, s),
            s < i && (a -= o * (i - s))) : a = o * (i + s),
            1 < o ? l = Math.abs(a - s) : 0 > o ? l = a / o + Math.abs(a) : l += (s - i) * (1 - o),
            a /= 2),
            e.parallaxScrollDistance = a,
            r = n ? (s - l) / 2 : (i - l) / 2,
            e.css(e.image.$item, {
                height: `${l}px`,
                marginTop: `${r}px`,
                left: "fixed" === e.image.position ? `${t.left}px` : "0",
                width: `${t.width}px`
            }),
            e.options.onCoverImage && e.options.onCoverImage.call(e),
            {
                image: {
                    height: l,
                    marginTop: r
                },
                container: t
            }
        }
        isVisible() {
            return this.isElementInViewport || !1
        }
        onScroll(e) {
            const t = this
              , o = t.$item.getBoundingClientRect()
              , n = o.top
              , a = o.height
              , l = {};
            let r = o;
            if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()),
            t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= s && r.left <= i.innerWidth,
            !e && !t.isElementInViewport)
                return;
            const m = Math.max(0, n)
              , c = Math.max(0, a + n)
              , p = Math.max(0, -n)
              , d = Math.max(0, n + a - s)
              , g = Math.max(0, a - (n + a - s))
              , u = Math.max(0, -n + s - a)
              , f = 1 - (s - n) / (s + a) * 2;
            let h = 1;
            if (a < s ? h = 1 - (p || d) / a : c <= s ? h = c / s : g <= s && (h = g / s),
            "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (l.transform = "translate3d(0,0,0)",
            l.opacity = h),
            "scale" === t.options.type || "scale-opacity" === t.options.type) {
                let e = 1;
                0 > t.options.speed ? e -= t.options.speed * h : e += t.options.speed * (1 - h),
                l.transform = `scale(${e}) translate3d(0,0,0)`
            }
            if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                let e = t.parallaxScrollDistance * f;
                "absolute" === t.image.position && (e -= n),
                l.transform = `translate3d(0,${e}px,0)`
            }
            t.css(t.image.$item, l),
            t.options.onScroll && t.options.onScroll.call(t, {
                section: o,
                beforeTop: m,
                beforeTopEnd: c,
                afterTop: p,
                beforeBottom: d,
                beforeBottomEnd: g,
                afterBottom: u,
                visiblePercent: h,
                fromViewportCenter: f
            })
        }
        onResize() {
            this.coverImage()
        }
    }
    const d = function(e, t, ...i) {
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        const o = e.length;
        let n, a = 0;
        for (; a < o; a += 1)
            if ("object" == typeof t || void 0 === t ? e[a].jarallax || (e[a].jarallax = new p(e[a],t)) : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, i)),
            void 0 !== n)
                return n;
        return e
    };
    d.constructor = p;
    const g = i.jQuery;
    if (void 0 !== g) {
        const e = function(...e) {
            Array.prototype.unshift.call(e, this);
            const t = d.apply(i, e);
            return "object" != typeof t ? t : this
        };
        e.constructor = d.constructor;
        const t = g.fn.jarallax;
        g.fn.jarallax = e,
        g.fn.jarallax.noConflict = function() {
            return g.fn.jarallax = t,
            this
        }
    }
    return e((()=>{
        d(document.querySelectorAll("[data-jarallax]"))
    }
    )),
    d
}
));
//# sourceMappingURL=jarallax.min.js.map
