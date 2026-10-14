var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e2, t2) => () => (t2 || (e2((t2 = { exports: {} }).exports, t2), e2 = null), t2.exports), s = (e2, n2) => {
  let r2 = {};
  for (var i2 in e2) t(r2, i2, { get: e2[i2], enumerable: true });
  return n2 || t(r2, Symbol.toStringTag, { value: `Module` }), r2;
}, c = (e2, i2, o2, s2) => {
  if (i2 && typeof i2 == `object` || typeof i2 == `function`) for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++) d2 = c2[l2], !a.call(e2, d2) && d2 !== o2 && t(e2, d2, { get: ((e3) => i2[e3]).bind(null, d2), enumerable: !(s2 = n(i2, d2)) || s2.enumerable });
  return e2;
}, l = (n2, r2, o2) => (o2 = n2 == null ? {} : e(i(n2)), c(r2 || !n2 || !n2.__esModule || !a.call(n2, `default`) ? t(o2, `default`, { value: n2, enumerable: true }) : o2, n2));
(function() {
  let e2 = document.createElement(`link`).relList;
  if (e2 && e2.supports && e2.supports(`modulepreload`)) return;
  for (let e3 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e3);
  new MutationObserver((e3) => {
    for (let t3 of e3) if (t3.type === `childList`) for (let e4 of t3.addedNodes) e4.tagName === `LINK` && e4.rel === `modulepreload` && n2(e4);
  }).observe(document, { childList: true, subtree: true });
  function t2(e3) {
    let t3 = {};
    return e3.integrity && (t3.integrity = e3.integrity), e3.referrerPolicy && (t3.referrerPolicy = e3.referrerPolicy), t3.credentials = e3.crossOrigin === `use-credentials` ? `include` : e3.crossOrigin === `anonymous` ? `omit` : `same-origin`, t3;
  }
  function n2(e3) {
    if (e3.ep) return;
    e3.ep = true;
    let n3 = t2(e3);
    fetch(e3.href, n3);
  }
})();
var u = o(((e2) => {
  var t2 = Symbol.for(`react.transitional.element`), n2 = Symbol.for(`react.portal`), r2 = Symbol.for(`react.fragment`), i2 = Symbol.for(`react.strict_mode`), a2 = Symbol.for(`react.profiler`), o2 = Symbol.for(`react.consumer`), s2 = Symbol.for(`react.context`), c2 = Symbol.for(`react.forward_ref`), l2 = Symbol.for(`react.suspense`), u2 = Symbol.for(`react.memo`), d2 = Symbol.for(`react.lazy`), f2 = Symbol.for(`react.activity`), p2 = Symbol.for(`react.view_transition`), m2 = Symbol.iterator;
  function h2(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = m2 && e3[m2] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var g2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _2 = Object.assign, v2 = {};
  function y2(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = v2, this.updater = n3 || g2;
  }
  y2.prototype.isReactComponent = {}, y2.prototype.setState = function(e3, t3) {
    if (typeof e3 != `object` && typeof e3 != `function` && e3 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e3, t3, `setState`);
  }, y2.prototype.forceUpdate = function(e3) {
    this.updater.enqueueForceUpdate(this, e3, `forceUpdate`);
  };
  function b2() {
  }
  b2.prototype = y2.prototype;
  function x2(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = v2, this.updater = n3 || g2;
  }
  var S2 = x2.prototype = new b2();
  S2.constructor = x2, _2(S2, y2.prototype), S2.isPureReactComponent = true;
  var ee2 = Array.isArray;
  function te2() {
  }
  var C2 = { H: null, A: null, T: null, S: null }, w2 = Object.prototype.hasOwnProperty;
  function T2(e3, n3, r3) {
    var i3 = r3.ref;
    return { $$typeof: t2, type: e3, key: n3, ref: i3 === void 0 ? null : i3, props: r3 };
  }
  function ne2(e3, t3) {
    return T2(e3.type, t3, e3.props);
  }
  function re2(e3) {
    return typeof e3 == `object` && !!e3 && e3.$$typeof === t2;
  }
  function ie2(e3) {
    var t3 = { "=": `=0`, ":": `=2` };
    return `$` + e3.replace(/[=:]/g, function(e4) {
      return t3[e4];
    });
  }
  var ae2 = /\/+/g;
  function oe2(e3, t3) {
    return typeof e3 == `object` && e3 && e3.key != null ? ie2(`` + e3.key) : t3.toString(36);
  }
  function se2(e3) {
    switch (e3.status) {
      case `fulfilled`:
        return e3.value;
      case `rejected`:
        throw e3.reason;
      default:
        switch (typeof e3.status == `string` ? e3.then(te2, te2) : (e3.status = `pending`, e3.then(function(t3) {
          e3.status === `pending` && (e3.status = `fulfilled`, e3.value = t3);
        }, function(t3) {
          e3.status === `pending` && (e3.status = `rejected`, e3.reason = t3);
        })), e3.status) {
          case `fulfilled`:
            return e3.value;
          case `rejected`:
            throw e3.reason;
        }
    }
    throw e3;
  }
  function ce2(e3, r3, i3, a3, o3) {
    var s3 = typeof e3;
    (s3 === `undefined` || s3 === `boolean`) && (e3 = null);
    var c3 = false;
    if (e3 === null) c3 = true;
    else switch (s3) {
      case `bigint`:
      case `string`:
      case `number`:
        c3 = true;
        break;
      case `object`:
        switch (e3.$$typeof) {
          case t2:
          case n2:
            c3 = true;
            break;
          case d2:
            return c3 = e3._init, ce2(c3(e3._payload), r3, i3, a3, o3);
        }
    }
    if (c3) return o3 = o3(e3), c3 = a3 === `` ? `.` + oe2(e3, 0) : a3, ee2(o3) ? (i3 = ``, c3 != null && (i3 = c3.replace(ae2, `$&/`) + `/`), ce2(o3, r3, i3, ``, function(e4) {
      return e4;
    })) : o3 != null && (re2(o3) && (o3 = ne2(o3, i3 + (o3.key == null || e3 && e3.key === o3.key ? `` : (`` + o3.key).replace(ae2, `$&/`) + `/`) + c3)), r3.push(o3)), 1;
    c3 = 0;
    var l3 = a3 === `` ? `.` : a3 + `:`;
    if (ee2(e3)) for (var u3 = 0; u3 < e3.length; u3++) a3 = e3[u3], s3 = l3 + oe2(a3, u3), c3 += ce2(a3, r3, i3, s3, o3);
    else if (u3 = h2(e3), typeof u3 == `function`) for (e3 = u3.call(e3), u3 = 0; !(a3 = e3.next()).done; ) a3 = a3.value, s3 = l3 + oe2(a3, u3++), c3 += ce2(a3, r3, i3, s3, o3);
    else if (s3 === `object`) {
      if (typeof e3.then == `function`) return ce2(se2(e3), r3, i3, a3, o3);
      throw r3 = String(e3), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e3).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
    }
    return c3;
  }
  function le2(e3, t3, n3) {
    if (e3 == null) return e3;
    var r3 = [], i3 = 0;
    return ce2(e3, r3, ``, ``, function(e4) {
      return t3.call(n3, e4, i3++);
    }), r3;
  }
  function ue2(e3) {
    if (e3._status === -1) {
      var t3 = e3._result, n3 = t3();
      n3.then(function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = t4, n3.status === void 0 && (n3.status = `fulfilled`, n3.value = t4));
      }, function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = t4, n3.status === void 0 && (n3.status = `rejected`, n3.reason = t4));
      }), e3._status === -1 && (e3._status = 0, e3._result = n3);
    }
    if (e3._status === 1) return e3._result.default;
    throw e3._result;
  }
  var de2 = typeof reportError == `function` ? reportError : function(e3) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e3);
      return;
    }
    console.error(e3);
  };
  function fe2(e3) {
    var t3 = C2.T, n3 = {};
    n3.types = t3 === null ? null : t3.types, C2.T = n3;
    try {
      var r3 = e3(), i3 = C2.S;
      i3 !== null && i3(n3, r3), typeof r3 == `object` && r3 && typeof r3.then == `function` && r3.then(te2, de2);
    } catch (e4) {
      de2(e4);
    } finally {
      t3 !== null && n3.types !== null && (t3.types = n3.types), C2.T = t3;
    }
  }
  function pe2(e3) {
    var t3 = C2.T;
    if (t3 !== null) {
      var n3 = t3.types;
      n3 === null ? t3.types = [e3] : n3.indexOf(e3) === -1 && n3.push(e3);
    } else fe2(pe2.bind(null, e3));
  }
  var me2 = { map: le2, forEach: function(e3, t3, n3) {
    le2(e3, function() {
      t3.apply(this, arguments);
    }, n3);
  }, count: function(e3) {
    var t3 = 0;
    return le2(e3, function() {
      t3++;
    }), t3;
  }, toArray: function(e3) {
    return le2(e3, function(e4) {
      return e4;
    }) || [];
  }, only: function(e3) {
    if (!re2(e3)) throw Error(`React.Children.only expected to receive a single React element child.`);
    return e3;
  } };
  e2.Activity = f2, e2.Children = me2, e2.Component = y2, e2.Fragment = r2, e2.Profiler = a2, e2.PureComponent = x2, e2.StrictMode = i2, e2.Suspense = l2, e2.ViewTransition = p2, e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C2, e2.__COMPILER_RUNTIME = { __proto__: null, c: function(e3) {
    return C2.H.useMemoCache(e3);
  } }, e2.addTransitionType = pe2, e2.cache = function(e3) {
    return function() {
      return e3.apply(null, arguments);
    };
  }, e2.cacheSignal = function() {
    return null;
  }, e2.cloneElement = function(e3, t3, n3) {
    if (e3 == null) throw Error(`The argument must be a React element, but you passed ` + e3 + `.`);
    var r3 = _2({}, e3.props), i3 = e3.key;
    if (t3 != null) for (a3 in t3.key !== void 0 && (i3 = `` + t3.key), t3) !w2.call(t3, a3) || a3 === `key` || a3 === `__self` || a3 === `__source` || a3 === `ref` && t3.ref === void 0 || (r3[a3] = t3[a3]);
    var a3 = arguments.length - 2;
    if (a3 === 1) r3.children = n3;
    else if (1 < a3) {
      for (var o3 = Array(a3), s3 = 0; s3 < a3; s3++) o3[s3] = arguments[s3 + 2];
      r3.children = o3;
    }
    return T2(e3.type, i3, r3);
  }, e2.createContext = function(e3) {
    return e3 = { $$typeof: s2, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null }, e3.Provider = e3, e3.Consumer = { $$typeof: o2, _context: e3 }, e3;
  }, e2.createElement = function(e3, t3, n3) {
    var r3, i3 = {}, a3 = null;
    if (t3 != null) for (r3 in t3.key !== void 0 && (a3 = `` + t3.key), t3) w2.call(t3, r3) && r3 !== `key` && r3 !== `__self` && r3 !== `__source` && (i3[r3] = t3[r3]);
    var o3 = arguments.length - 2;
    if (o3 === 1) i3.children = n3;
    else if (1 < o3) {
      for (var s3 = Array(o3), c3 = 0; c3 < o3; c3++) s3[c3] = arguments[c3 + 2];
      i3.children = s3;
    }
    if (e3 && e3.defaultProps) for (r3 in o3 = e3.defaultProps, o3) i3[r3] === void 0 && (i3[r3] = o3[r3]);
    return T2(e3, a3, i3);
  }, e2.createRef = function() {
    return { current: null };
  }, e2.forwardRef = function(e3) {
    return { $$typeof: c2, render: e3 };
  }, e2.isValidElement = re2, e2.lazy = function(e3) {
    return { $$typeof: d2, _payload: { _status: -1, _result: e3 }, _init: ue2 };
  }, e2.memo = function(e3, t3) {
    return { $$typeof: u2, type: e3, compare: t3 === void 0 ? null : t3 };
  }, e2.startTransition = fe2, e2.unstable_useCacheRefresh = function() {
    return C2.H.useCacheRefresh();
  }, e2.use = function(e3) {
    return C2.H.use(e3);
  }, e2.useActionState = function(e3, t3, n3) {
    return C2.H.useActionState(e3, t3, n3);
  }, e2.useCallback = function(e3, t3) {
    return C2.H.useCallback(e3, t3);
  }, e2.useContext = function(e3) {
    return C2.H.useContext(e3);
  }, e2.useDebugValue = function() {
  }, e2.useDeferredValue = function(e3, t3) {
    return C2.H.useDeferredValue(e3, t3);
  }, e2.useEffect = function(e3, t3) {
    return C2.H.useEffect(e3, t3);
  }, e2.useEffectEvent = function(e3) {
    return C2.H.useEffectEvent(e3);
  }, e2.useId = function() {
    return C2.H.useId();
  }, e2.useImperativeHandle = function(e3, t3, n3) {
    return C2.H.useImperativeHandle(e3, t3, n3);
  }, e2.useInsertionEffect = function(e3, t3) {
    return C2.H.useInsertionEffect(e3, t3);
  }, e2.useLayoutEffect = function(e3, t3) {
    return C2.H.useLayoutEffect(e3, t3);
  }, e2.useMemo = function(e3, t3) {
    return C2.H.useMemo(e3, t3);
  }, e2.useOptimistic = function(e3, t3) {
    return C2.H.useOptimistic(e3, t3);
  }, e2.useReducer = function(e3, t3, n3) {
    return C2.H.useReducer(e3, t3, n3);
  }, e2.useRef = function(e3) {
    return C2.H.useRef(e3);
  }, e2.useState = function(e3) {
    return C2.H.useState(e3);
  }, e2.useSyncExternalStore = function(e3, t3, n3) {
    return C2.H.useSyncExternalStore(e3, t3, n3);
  }, e2.useTransition = function() {
    return C2.H.useTransition();
  }, e2.version = `19.3.0`;
})), d = o(((e2, t2) => {
  t2.exports = u();
})), f = o(((e2) => {
  function t2(e3, t3) {
    var n3 = e3.length;
    e3.push(t3);
    a: for (; 0 < n3; ) {
      var r3 = n3 - 1 >>> 1, a3 = e3[r3];
      if (0 < i2(a3, t3)) e3[r3] = t3, e3[n3] = a3, n3 = r3;
      else break a;
    }
  }
  function n2(e3) {
    return e3.length === 0 ? null : e3[0];
  }
  function r2(e3) {
    if (e3.length === 0) return null;
    var t3 = e3[0], n3 = e3.pop();
    if (n3 !== t3) {
      e3[0] = n3;
      a: for (var r3 = 0, a3 = e3.length, o3 = a3 >>> 1; r3 < o3; ) {
        var s3 = 2 * (r3 + 1) - 1, c3 = e3[s3], l3 = s3 + 1, u3 = e3[l3];
        if (0 > i2(c3, n3)) l3 < a3 && 0 > i2(u3, c3) ? (e3[r3] = u3, e3[l3] = n3, r3 = l3) : (e3[r3] = c3, e3[s3] = n3, r3 = s3);
        else if (l3 < a3 && 0 > i2(u3, n3)) e3[r3] = u3, e3[l3] = n3, r3 = l3;
        else break a;
      }
    }
    return t3;
  }
  function i2(e3, t3) {
    var n3 = e3.sortIndex - t3.sortIndex;
    return n3 === 0 ? e3.id - t3.id : n3;
  }
  if (e2.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a2 = performance;
    e2.unstable_now = function() {
      return a2.now();
    };
  } else {
    var o2 = Date, s2 = o2.now();
    e2.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
  function b2(e3) {
    for (var i3 = n2(l2); i3 !== null; ) {
      if (i3.callback === null) r2(l2);
      else if (i3.startTime <= e3) r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
      else break;
      i3 = n2(l2);
    }
  }
  function x2(e3) {
    if (h2 = false, b2(e3), !m2) {
      if (n2(c2) !== null) m2 = true, S2 || (S2 = true, ne2());
      else {
        var t3 = n2(l2);
        t3 !== null && ae2(x2, t3.startTime - e3);
      }
    }
  }
  var S2 = false, ee2 = -1, te2 = 5, C2 = -1;
  function w2() {
    return g2 ? true : !(e2.unstable_now() - C2 < te2);
  }
  function T2() {
    if (g2 = false, S2) {
      var t3 = e2.unstable_now();
      C2 = t3;
      var i3 = true;
      try {
        a: {
          m2 = false, h2 && (h2 = false, v2(ee2), ee2 = -1), p2 = true;
          var a3 = f2;
          try {
            b: {
              for (b2(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && w2()); ) {
                var o3 = d2.callback;
                if (typeof o3 == `function`) {
                  d2.callback = null, f2 = d2.priorityLevel;
                  var s3 = o3(d2.expirationTime <= t3);
                  if (t3 = e2.unstable_now(), typeof s3 == `function`) {
                    d2.callback = s3, b2(t3), i3 = true;
                    break b;
                  }
                  d2 === n2(c2) && r2(c2), b2(t3);
                } else r2(c2);
                d2 = n2(c2);
              }
              if (d2 !== null) i3 = true;
              else {
                var u3 = n2(l2);
                u3 !== null && ae2(x2, u3.startTime - t3), i3 = false;
              }
            }
            break a;
          } finally {
            d2 = null, f2 = a3, p2 = false;
          }
          i3 = void 0;
        }
      } finally {
        i3 ? ne2() : S2 = false;
      }
    }
  }
  var ne2;
  if (typeof y2 == `function`) ne2 = function() {
    y2(T2);
  };
  else if (typeof MessageChannel < `u`) {
    var re2 = new MessageChannel(), ie2 = re2.port2;
    re2.port1.onmessage = T2, ne2 = function() {
      ie2.postMessage(null);
    };
  } else ne2 = function() {
    _2(T2, 0);
  };
  function ae2(t3, n3) {
    ee2 = _2(function() {
      t3(e2.unstable_now());
    }, n3);
  }
  e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(e3) {
    e3.callback = null;
  }, e2.unstable_forceFrameRate = function(e3) {
    0 > e3 || 125 < e3 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : te2 = 0 < e3 ? Math.floor(1e3 / e3) : 5;
  }, e2.unstable_getCurrentPriorityLevel = function() {
    return f2;
  }, e2.unstable_next = function(e3) {
    switch (f2) {
      case 1:
      case 2:
      case 3:
        var t3 = 3;
        break;
      default:
        t3 = f2;
    }
    var n3 = f2;
    f2 = t3;
    try {
      return e3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_requestPaint = function() {
    g2 = true;
  }, e2.unstable_runWithPriority = function(e3, t3) {
    switch (e3) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e3 = 3;
    }
    var n3 = f2;
    f2 = e3;
    try {
      return t3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_scheduleCallback = function(r3, i3, a3) {
    var o3 = e2.unstable_now();
    switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
      case 1:
        var s3 = -1;
        break;
      case 2:
        s3 = 250;
        break;
      case 5:
        s3 = 1073741823;
        break;
      case 4:
        s3 = 1e4;
        break;
      default:
        s3 = 5e3;
    }
    return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (v2(ee2), ee2 = -1) : h2 = true, ae2(x2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, S2 || (S2 = true, ne2()))), r3;
  }, e2.unstable_shouldYield = w2, e2.unstable_wrapCallback = function(e3) {
    var t3 = f2;
    return function() {
      var n3 = f2;
      f2 = t3;
      try {
        return e3.apply(this, arguments);
      } finally {
        f2 = n3;
      }
    };
  };
})), p = o(((e2, t2) => {
  t2.exports = f();
})), m = o(((e2) => {
  var t2 = d();
  function n2(e3) {
    var t3 = `https://react.dev/errors/` + e3;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function r2() {
  }
  var i2 = { d: { f: r2, r: function() {
    throw Error(n2(522));
  }, D: r2, C: r2, L: r2, m: r2, X: r2, S: r2, M: r2 }, p: 0, findDOMNode: null }, a2 = Symbol.for(`react.portal`), o2 = Symbol.for(`react.recoverable`), s2 = Symbol.for(`react.optimistic_key`);
  function c2(e3, t3, n3) {
    var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: a2, key: r3 == null ? null : r3 === s2 ? s2 : `` + r3, children: e3, containerInfo: t3, implementation: n3 };
  }
  var l2 = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function u2(e3, t3) {
    if (e3 === `font`) return ``;
    if (typeof t3 == `string`) return t3 === `use-credentials` ? t3 : ``;
  }
  e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i2, e2.browser = function(e3) {
    return { $$typeof: o2, _reason: e3 };
  }, e2.createPortal = function(e3, t3) {
    var r3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11) throw Error(n2(299));
    return c2(e3, t3, null, r3);
  }, e2.flushSync = function(e3) {
    var t3 = l2.T, n3 = i2.p;
    try {
      if (l2.T = null, i2.p = 2, e3) return e3();
    } finally {
      l2.T = t3, i2.p = n3, i2.d.f();
    }
  }, e2.preconnect = function(e3, t3) {
    typeof e3 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, i2.d.C(e3, t3));
  }, e2.prefetchDNS = function(e3) {
    typeof e3 == `string` && i2.d.D(e3);
  }, e2.preinit = function(e3, t3) {
    if (typeof e3 == `string` && t3 && typeof t3.as == `string`) {
      var n3 = t3.as, r3 = u2(n3, t3.crossOrigin), a3 = typeof t3.integrity == `string` ? t3.integrity : void 0, o3 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
      n3 === `style` ? i2.d.S(e3, typeof t3.precedence == `string` ? t3.precedence : void 0, { crossOrigin: r3, integrity: a3, fetchPriority: o3 }) : n3 === `script` && i2.d.X(e3, { crossOrigin: r3, integrity: a3, fetchPriority: o3, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
    }
  }, e2.preinitModule = function(e3, t3) {
    if (typeof e3 == `string`) {
      if (typeof t3 == `object` && t3) {
        if (t3.as == null || t3.as === `script`) {
          var n3 = u2(t3.as, t3.crossOrigin);
          i2.d.M(e3, { crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
        }
      } else t3 ?? i2.d.M(e3);
    }
  }, e2.preload = function(e3, t3) {
    if (typeof e3 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
      var n3 = t3.as, r3 = u2(n3, t3.crossOrigin);
      i2.d.L(e3, n3, { crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0 });
    }
  }, e2.preloadModule = function(e3, t3) {
    if (typeof e3 == `string`) {
      if (t3) {
        var n3 = u2(t3.as, t3.crossOrigin);
        i2.d.m(e3, { as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
      } else i2.d.m(e3);
    }
  }, e2.requestFormReset = function(e3) {
    i2.d.r(e3);
  }, e2.unstable_batchedUpdates = function(e3, t3) {
    return e3(t3);
  }, e2.useFormState = function(e3, t3, n3) {
    return l2.H.useFormState(e3, t3, n3);
  }, e2.useFormStatus = function() {
    return l2.H.useHostTransitionStatus();
  }, e2.version = `19.3.0`;
})), h = o(((e2, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e3) {
      console.error(e3);
    }
  }
  n2(), t2.exports = m();
})), g = o(((e2) => {
  var t2 = p(), n2 = d(), r2 = h();
  function i2(e3) {
    var t3 = `https://react.dev/errors/` + e3;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function a2(e3) {
    return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
  }
  function o2(e3) {
    for (var t3 = e3, n3 = t3; n3 && !n3.alternate; ) t3 = n3, t3.flags & 4098 && (e3 = t3.return), n3 = t3.return;
    for (; t3.return; ) t3 = t3.return;
    return t3.tag === 3 ? e3 : null;
  }
  function s2(e3) {
    if (e3.tag === 13) {
      var t3 = e3.memoizedState;
      if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function c2(e3) {
    if (e3.tag === 31) {
      var t3 = e3.memoizedState;
      if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function l2(e3) {
    if (o2(e3) !== e3) throw Error(i2(188));
  }
  function u2(e3) {
    var t3 = e3.alternate;
    if (!t3) {
      if (t3 = o2(e3), t3 === null) throw Error(i2(188));
      return t3 === e3 ? e3 : null;
    }
    for (var n3 = e3, r3 = t3; ; ) {
      var a3 = n3.return;
      if (a3 === null) break;
      var s3 = a3.alternate;
      if (s3 === null) {
        if (r3 = a3.return, r3 !== null) {
          n3 = r3;
          continue;
        }
        break;
      }
      if (a3.child === s3.child) {
        for (s3 = a3.child; s3; ) {
          if (s3 === n3) return l2(a3), e3;
          if (s3 === r3) return l2(a3), t3;
          s3 = s3.sibling;
        }
        throw Error(i2(188));
      }
      if (n3.return !== r3.return) n3 = a3, r3 = s3;
      else {
        for (var c3 = false, u3 = a3.child; u3; ) {
          if (u3 === n3) {
            c3 = true, n3 = a3, r3 = s3;
            break;
          }
          if (u3 === r3) {
            c3 = true, r3 = a3, n3 = s3;
            break;
          }
          u3 = u3.sibling;
        }
        if (!c3) {
          for (u3 = s3.child; u3; ) {
            if (u3 === n3) {
              c3 = true, n3 = s3, r3 = a3;
              break;
            }
            if (u3 === r3) {
              c3 = true, r3 = s3, n3 = a3;
              break;
            }
            u3 = u3.sibling;
          }
          if (!c3) throw Error(i2(189));
        }
      }
      if (n3.alternate !== r3) throw Error(i2(190));
    }
    if (n3.tag !== 3) throw Error(i2(188));
    return n3.stateNode.current === n3 ? e3 : t3;
  }
  function f2(e3) {
    var t3 = e3.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e3;
    for (e3 = e3.child; e3 !== null; ) {
      if (t3 = f2(e3), t3 !== null) return t3;
      e3 = e3.sibling;
    }
    return null;
  }
  function m2(e3, t3, n3, r3, i3, a3) {
    for (; e3 !== null; ) {
      if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && n3(e3, r3, i3, a3) || (e3.tag !== 22 || e3.memoizedState === null) && (t3 || e3.tag !== 5 && e3.tag !== 27) && m2(e3.child, t3, n3, r3, i3, a3)) return true;
      e3 = e3.sibling;
    }
    return false;
  }
  function g2(e3) {
    for (e3 = e3.return; e3 !== null; ) {
      if (e3.tag === 3 || e3.tag === 5 || e3.tag === 27) return e3;
      e3 = e3.return;
    }
    return null;
  }
  function _2(e3) {
    var t3 = false;
    for (e3 = e3.return; e3 !== null && (e3.tag === 4 && (t3 = true), e3.tag !== 3 && e3.tag !== 5 && e3.tag !== 27); ) e3 = e3.return;
    return t3;
  }
  function v2(e3) {
    var t3 = [null, null], n3 = g2(e3);
    return n3 === null || y2(t3, e3, n3.child, { foundSelf: false }), t3;
  }
  function y2(e3, t3, n3, r3) {
    for (; n3 !== null; ) {
      if (n3 === t3) r3.foundSelf = true;
      else if (n3.tag === 5 || n3.tag === 27 || n3.tag === 6) {
        if (r3.foundSelf) return e3[1] = n3, true;
        e3[0] = n3;
      } else if ((n3.tag !== 22 || n3.memoizedState === null) && y2(e3, t3, n3.child, r3)) return true;
      n3 = n3.sibling;
    }
    return false;
  }
  function b2(e3) {
    switch (e3.tag) {
      case 5:
      case 27:
      case 6:
        return e3.stateNode;
      case 3:
        return e3.stateNode.containerInfo;
      default:
        throw Error(i2(559));
    }
  }
  var x2 = null, S2 = null;
  function ee2(e3, t3, n3) {
    return e3 === n3 || e3 === t3 && (x2 = e3, true);
  }
  function te2(e3, t3, n3) {
    return e3 === n3 ? (S2 = e3, false) : e3 === t3 && (S2 !== null && (x2 = e3), true);
  }
  function C2(e3) {
    if (e3 === null) return null;
    do
      e3 = e3 === null ? null : e3.return;
    while (e3 && e3.tag !== 5 && e3.tag !== 27 && e3.tag !== 3);
    return e3 || null;
  }
  function w2(e3, t3, n3) {
    for (var r3 = 0, i3 = e3; i3; i3 = n3(i3)) r3++;
    i3 = 0;
    for (var a3 = t3; a3; a3 = n3(a3)) i3++;
    for (; 0 < r3 - i3; ) e3 = n3(e3), r3--;
    for (; 0 < i3 - r3; ) t3 = n3(t3), i3--;
    for (; r3--; ) {
      if (e3 === t3 || t3 !== null && e3 === t3.alternate) return e3;
      e3 = n3(e3), t3 = n3(t3);
    }
    return null;
  }
  var T2 = Object.assign, ne2 = Symbol.for(`react.element`), re2 = Symbol.for(`react.transitional.element`), ie2 = Symbol.for(`react.portal`), ae2 = Symbol.for(`react.fragment`), oe2 = Symbol.for(`react.strict_mode`), se2 = Symbol.for(`react.profiler`), ce2 = Symbol.for(`react.consumer`), le2 = Symbol.for(`react.context`), ue2 = Symbol.for(`react.forward_ref`), de2 = Symbol.for(`react.suspense`), fe2 = Symbol.for(`react.suspense_list`), pe2 = Symbol.for(`react.memo`), me2 = Symbol.for(`react.lazy`), he2 = Symbol.for(`react.activity`), ge2 = Symbol.for(`react.legacy_hidden`), _e2 = Symbol.for(`react.memo_cache_sentinel`), ve2 = Symbol.for(`react.view_transition`), ye2 = Symbol.for(`react.recoverable`), be2 = Symbol.iterator;
  function xe2(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = be2 && e3[be2] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var Se2 = Symbol.for(`react.client.reference`);
  function Ce2(e3) {
    if (e3 == null) return null;
    if (typeof e3 == `function`) return e3.$$typeof === Se2 ? null : e3.displayName || e3.name || null;
    if (typeof e3 == `string`) return e3;
    switch (e3) {
      case ae2:
        return `Fragment`;
      case se2:
        return `Profiler`;
      case oe2:
        return `StrictMode`;
      case de2:
        return `Suspense`;
      case fe2:
        return `SuspenseList`;
      case he2:
        return `Activity`;
      case ve2:
        return `ViewTransition`;
    }
    if (typeof e3 == `object`) switch (e3.$$typeof) {
      case ie2:
        return `Portal`;
      case le2:
        return e3.displayName || `Context`;
      case ce2:
        return (e3._context.displayName || `Context`) + `.Consumer`;
      case ue2:
        var t3 = e3.render;
        return e3 = e3.displayName, e3 ||= (e3 = t3.displayName || t3.name || ``, e3 === `` ? `ForwardRef` : `ForwardRef(` + e3 + `)`), e3;
      case pe2:
        return t3 = e3.displayName || null, t3 === null ? Ce2(e3.type) || `Memo` : t3;
      case me2:
        t3 = e3._payload, e3 = e3._init;
        try {
          return Ce2(e3(t3));
        } catch {
        }
    }
    return null;
  }
  var we2 = Array.isArray, E2 = n2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D2 = r2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Te2 = { pending: false, data: null, method: null, action: null }, Ee2 = [], De2 = -1;
  function Oe2(e3) {
    return { current: e3 };
  }
  function ke2(e3) {
    0 > De2 || (e3.current = Ee2[De2], Ee2[De2] = null, De2--);
  }
  function O2(e3, t3) {
    De2++, Ee2[De2] = e3.current, e3.current = t3;
  }
  var Ae2 = Oe2(null), je2 = Oe2(null), Me2 = Oe2(null), k2 = Oe2(null);
  function Ne2(e3, t3) {
    switch (O2(Me2, t3), O2(je2, e3), O2(Ae2, null), t3.nodeType) {
      case 9:
      case 11:
        e3 = (e3 = t3.documentElement) && (e3 = e3.namespaceURI) ? up2(e3) : 0;
        break;
      default:
        if (e3 = t3.tagName, t3 = t3.namespaceURI) t3 = up2(t3), e3 = dp2(t3, e3);
        else switch (e3) {
          case `svg`:
            e3 = 1;
            break;
          case `math`:
            e3 = 2;
            break;
          default:
            e3 = 0;
        }
    }
    ke2(Ae2), O2(Ae2, e3);
  }
  function Pe2() {
    ke2(Ae2), ke2(je2), ke2(Me2);
  }
  function A2(e3) {
    var t3 = e3.memoizedState;
    t3 !== null && (sh._currentValue = t3.memoizedState, O2(k2, e3)), t3 = Ae2.current;
    var n3 = dp2(t3, e3.type);
    t3 !== n3 && (O2(je2, e3), O2(Ae2, n3));
  }
  function Fe2(e3) {
    je2.current === e3 && (ke2(Ae2), ke2(je2)), k2.current === e3 && (ke2(k2), sh._currentValue = Te2);
  }
  var Ie2, Le2;
  function Re2(e3) {
    if (Ie2 === void 0) try {
      throw Error();
    } catch (e4) {
      var t3 = e4.stack.trim().match(/\n( *(at )?)/);
      Ie2 = t3 && t3[1] || ``, Le2 = -1 < e4.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e4.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
    }
    return `
` + Ie2 + e3 + Le2;
  }
  var ze2 = false;
  function Be2(e3, t3) {
    if (!e3 || ze2) return ``;
    ze2 = true;
    var n3 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r3 = { DetermineComponentFrameRoot: function() {
        try {
          if (t3) {
            var n4 = function() {
              throw Error();
            };
            if (Object.defineProperty(n4.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == `object` && Reflect.construct) {
              try {
                Reflect.construct(n4, []);
              } catch (e4) {
                var r4 = e4;
              }
              Reflect.construct(e3, [], n4);
            } else {
              try {
                n4.call();
              } catch (e4) {
                r4 = e4;
              }
              n4 = false;
              try {
                var i4 = Object.getOwnPropertyDescriptor(e3.prototype, `props`);
                Object.defineProperty(e3.prototype, "props", { configurable: true, set: function() {
                  throw Error();
                } }), n4 = true, new e3();
              } finally {
                n4 && (i4 === void 0 ? delete e3.prototype.props : Object.defineProperty(e3.prototype, "props", i4));
              }
            }
          } else {
            try {
              throw Error();
            } catch (e4) {
              r4 = e4;
            }
            (n4 = e3()) && typeof n4.catch == `function` && n4.catch(function() {
            });
          }
        } catch (e4) {
          if (e4 && r4 && typeof e4.stack == `string`) return [e4.stack, r4.stack];
        }
        return [null, null];
      } };
      r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i3 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
      i3 && i3.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
      var a3 = r3.DetermineComponentFrameRoot(), o3 = a3[0], s3 = a3[1];
      if (o3 && s3) {
        var c3 = o3.split(`
`), l3 = s3.split(`
`);
        for (i3 = r3 = 0; r3 < c3.length && !c3[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
        for (; i3 < l3.length && !l3[i3].includes(`DetermineComponentFrameRoot`); ) i3++;
        if (r3 === c3.length || i3 === l3.length) for (r3 = c3.length - 1, i3 = l3.length - 1; 1 <= r3 && 0 <= i3 && c3[r3] !== l3[i3]; ) i3--;
        for (; 1 <= r3 && 0 <= i3; r3--, i3--) if (c3[r3] !== l3[i3]) {
          if (r3 !== 1 || i3 !== 1) do
            if (r3--, i3--, 0 > i3 || c3[r3] !== l3[i3]) {
              var u3 = `
` + c3[r3].replace(` at new `, ` at `);
              return e3.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e3.displayName)), u3;
            }
          while (1 <= r3 && 0 <= i3);
          break;
        }
      }
    } finally {
      ze2 = false, Error.prepareStackTrace = n3;
    }
    return (n3 = e3 ? e3.displayName || e3.name : ``) ? Re2(n3) : ``;
  }
  function Ve2(e3, t3) {
    switch (e3.tag) {
      case 26:
      case 27:
      case 5:
        return Re2(e3.type);
      case 16:
        return Re2(`Lazy`);
      case 13:
        return e3.child !== t3 && t3 !== null ? Re2(`Suspense Fallback`) : Re2(`Suspense`);
      case 19:
        return Re2(`SuspenseList`);
      case 0:
      case 15:
        return Be2(e3.type, false);
      case 11:
        return Be2(e3.type.render, false);
      case 1:
        return Be2(e3.type, true);
      case 31:
        return Re2(`Activity`);
      case 30:
        return Re2(`ViewTransition`);
      default:
        return ``;
    }
  }
  function He2(e3) {
    try {
      var t3 = ``, n3 = null;
      do
        t3 += Ve2(e3, n3), n3 = e3, e3 = e3.return;
      while (e3);
      return t3;
    } catch (e4) {
      return `
Error generating stack: ` + e4.message + `
` + e4.stack;
    }
  }
  var Ue2 = Object.prototype.hasOwnProperty, We2 = t2.unstable_scheduleCallback, Ge2 = t2.unstable_cancelCallback, Ke2 = t2.unstable_shouldYield, qe2 = t2.unstable_requestPaint, Je2 = t2.unstable_now, Ye2 = t2.unstable_getCurrentPriorityLevel, Xe2 = t2.unstable_ImmediatePriority, Ze2 = t2.unstable_UserBlockingPriority, Qe2 = t2.unstable_NormalPriority, $e2 = t2.unstable_LowPriority, et2 = t2.unstable_IdlePriority, tt2 = t2.log, nt2 = t2.unstable_setDisableYieldValue, rt2 = null, j2 = null;
  function it2(e3) {
    if (typeof tt2 == `function` && nt2(e3), j2 && typeof j2.setStrictMode == `function`) try {
      j2.setStrictMode(rt2, e3);
    } catch {
    }
  }
  var at2 = Math.clz32 ? Math.clz32 : ct2, ot2 = Math.log, st2 = Math.LN2;
  function ct2(e3) {
    return e3 >>>= 0, e3 === 0 ? 32 : 31 - (ot2(e3) / st2 | 0) | 0;
  }
  var lt2 = 256, ut2 = 262144, dt2 = 4194304;
  function ft2(e3) {
    var t3 = e3 & 42;
    if (t3 !== 0) return t3;
    switch (e3 & -e3) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e3 & -e3;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e3 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e3 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e3;
    }
  }
  function pt2(e3, t3, n3) {
    var r3 = e3.pendingLanes;
    if (r3 === 0) return 0;
    var i3 = 0, a3 = e3.suspendedLanes, o3 = e3.pingedLanes;
    e3 = e3.warmLanes;
    var s3 = r3 & 134217727;
    return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o3 === 0 ? n3 || (n3 = r3 & ~e3, n3 !== 0 && (i3 = ft2(n3))) : i3 = ft2(o3) : i3 = ft2(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o3 &= s3, o3 === 0 ? n3 || (n3 = s3 & ~e3, n3 !== 0 && (i3 = ft2(n3))) : i3 = ft2(o3)) : i3 = ft2(r3)), i3 === 0 ? 0 : t3 !== 0 && t3 !== i3 && (t3 & a3) === 0 && (a3 = i3 & -i3, n3 = t3 & -t3, a3 >= n3 || a3 === 32 && n3 & 4194048) ? t3 : i3;
  }
  function mt2(e3, t3) {
    return (e3.pendingLanes & ~(e3.suspendedLanes & ~e3.pingedLanes) & t3) === 0;
  }
  function ht2(e3, t3) {
    t3 & 8 && (t3 |= t3 & 32);
    var n3 = e3.entangledLanes;
    if (n3 !== 0) for (e3 = e3.entanglements, n3 &= t3; 0 < n3; ) {
      var r3 = 31 - at2(n3), i3 = 1 << r3;
      t3 |= e3[r3], n3 &= ~i3;
    }
    return t3;
  }
  function gt2(e3, t3) {
    switch (e3) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t3 + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t3 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _t2() {
    var e3 = dt2;
    return dt2 <<= 1, !(dt2 & 62914560) && (dt2 = 4194304), e3;
  }
  function vt2(e3) {
    for (var t3 = [], n3 = 0; 31 > n3; n3++) t3.push(e3);
    return t3;
  }
  function yt2(e3, t3) {
    e3.pendingLanes |= t3, t3 !== 268435456 && (e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0);
  }
  function bt2(e3, t3, n3, r3, i3, a3) {
    var o3 = e3.pendingLanes;
    e3.pendingLanes = n3, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0, e3.expiredLanes &= n3, e3.entangledLanes &= n3, e3.errorRecoveryDisabledLanes &= n3, e3.shellSuspendCounter = 0;
    var s3 = e3.entanglements, c3 = e3.expirationTimes, l3 = e3.hiddenUpdates;
    for (n3 = o3 & ~n3; 0 < n3; ) {
      var u3 = 31 - at2(n3), d2 = 1 << u3;
      s3[u3] = 0, c3[u3] = -1;
      var f3 = l3[u3];
      if (f3 !== null) for (l3[u3] = null, u3 = 0; u3 < f3.length; u3++) {
        var p2 = f3[u3];
        p2 !== null && (p2.lane &= -536870913);
      }
      n3 &= ~d2;
    }
    r3 !== 0 && xt2(e3, r3, 0), a3 !== 0 && i3 === 0 && e3.tag !== 0 && (e3.suspendedLanes |= a3 & ~(o3 & ~t3));
  }
  function xt2(e3, t3, n3) {
    e3.pendingLanes |= t3, e3.suspendedLanes &= ~t3;
    var r3 = 31 - at2(t3);
    e3.entangledLanes |= t3, e3.entanglements[r3] = e3.entanglements[r3] | 1073741824 | n3 & 261930;
  }
  function St2(e3, t3) {
    var n3 = e3.entangledLanes |= t3;
    for (e3 = e3.entanglements; n3; ) {
      var r3 = 31 - at2(n3), i3 = 1 << r3;
      i3 & t3 | e3[r3] & t3 && (e3[r3] |= t3), n3 &= ~i3;
    }
  }
  function Ct2(e3, t3) {
    var n3 = t3 & -t3;
    return n3 = n3 & 42 ? 1 : wt2(n3), (n3 & (e3.suspendedLanes | t3)) === 0 ? n3 : 0;
  }
  function wt2(e3) {
    switch (e3) {
      case 2:
        e3 = 1;
        break;
      case 8:
        e3 = 4;
        break;
      case 32:
        e3 = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e3 = 128;
        break;
      case 268435456:
        e3 = 134217728;
        break;
      default:
        e3 = 0;
    }
    return e3;
  }
  function Tt2(e3) {
    return e3 &= -e3, 2 < e3 ? 8 < e3 ? e3 & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Et2() {
    var e3 = D2.p;
    return e3 === 0 ? (e3 = window.event, e3 === void 0 ? 32 : Ch(e3.type)) : e3;
  }
  function Dt2(e3, t3) {
    var n3 = D2.p;
    try {
      return D2.p = e3, t3();
    } finally {
      D2.p = n3;
    }
  }
  var Ot2 = Math.random().toString(36).slice(2), kt2 = `__reactFiber$` + Ot2, At2 = `__reactProps$` + Ot2, M2 = `__reactContainer$` + Ot2, jt2 = `__reactEvents$` + Ot2, Mt2 = `__reactListeners$` + Ot2, Nt2 = `__reactHandles$` + Ot2, Pt2 = `__reactResources$` + Ot2, Ft2 = `__reactMarker$` + Ot2, It2 = `__reactLoad$` + Ot2;
  function Lt2(e3) {
    delete e3[kt2], delete e3[At2], delete e3[Mt2], delete e3[Nt2];
  }
  function Rt2(e3) {
    var t3;
    if (t3 = e3[kt2]) return t3;
    for (var n3 = e3.parentNode; n3; ) {
      if (t3 = n3[M2] || n3[kt2]) {
        if (n3 = t3.alternate, t3.child !== null || n3 !== null && n3.child !== null) for (e3 = fm(e3); e3 !== null; ) {
          if (n3 = e3[kt2]) return n3;
          e3 = fm(e3);
        }
        return t3;
      }
      e3 = n3, n3 = e3.parentNode;
    }
    return null;
  }
  function zt2(e3) {
    if (e3 = e3[kt2] || e3[M2]) {
      var t3 = e3.tag;
      if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3) return e3;
    }
    return null;
  }
  function Bt2(e3) {
    var t3 = e3.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e3.stateNode;
    throw Error(i2(33));
  }
  function Vt2(e3) {
    var t3 = e3[Pt2];
    return t3 ||= e3[Pt2] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }, t3;
  }
  function Ht2(e3) {
    e3[Ft2] = true;
  }
  function Ut2(e3) {
    e3[It2] = void 0;
  }
  var Wt2 = /* @__PURE__ */ new Set(), Gt2 = {};
  function Kt2(e3, t3) {
    qt2(e3, t3), qt2(e3 + `Capture`, t3);
  }
  function qt2(e3, t3) {
    for (Gt2[e3] = t3, e3 = 0; e3 < t3.length; e3++) Wt2.add(t3[e3]);
  }
  var Jt2 = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), Yt2 = {}, Xt2 = {};
  function N2(e3) {
    return Ue2.call(Xt2, e3) ? true : Ue2.call(Yt2, e3) ? false : Jt2.test(e3) ? Xt2[e3] = true : (Yt2[e3] = true, false);
  }
  var P2 = false;
  function Zt2() {
    var e3 = P2;
    return P2 = false, e3;
  }
  function Qt2(e3, t3, n3) {
    if (N2(t3)) {
      if (n3 === null) e3.removeAttribute(t3);
      else {
        switch (typeof n3) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e3.removeAttribute(t3);
            return;
          case `boolean`:
            var r3 = t3.toLowerCase().slice(0, 5);
            if (r3 !== `data-` && r3 !== `aria-`) {
              e3.removeAttribute(t3);
              return;
            }
        }
        e3.setAttribute(t3, n3);
      }
    }
  }
  function $t2(e3, t3, n3) {
    if (n3 === null) e3.removeAttribute(t3);
    else {
      switch (typeof n3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(t3);
          return;
      }
      e3.setAttribute(t3, n3);
    }
  }
  function en2(e3, t3, n3, r3) {
    if (r3 === null) e3.removeAttribute(n3);
    else {
      switch (typeof r3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(n3);
          return;
      }
      e3.setAttributeNS(t3, n3, r3);
    }
  }
  function tn2(e3) {
    switch (typeof e3) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e3;
      case `object`:
        return e3;
      default:
        return ``;
    }
  }
  function nn2(e3) {
    var t3 = e3.type;
    return (e3 = e3.nodeName) && e3.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
  }
  function rn2(e3, t3, n3) {
    var r3 = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t3);
    if (!e3.hasOwnProperty(t3) && r3 !== void 0 && typeof r3.get == `function` && typeof r3.set == `function`) {
      var i3 = r3.get, a3 = r3.set;
      return Object.defineProperty(e3, t3, { configurable: true, get: function() {
        return i3.call(this);
      }, set: function(e4) {
        n3 = `` + e4, a3.call(this, e4);
      } }), Object.defineProperty(e3, t3, { enumerable: r3.enumerable }), { getValue: function() {
        return n3;
      }, setValue: function(e4) {
        n3 = `` + e4;
      }, stopTracking: function() {
        e3._valueTracker = null, delete e3[t3];
      } };
    }
  }
  function an2(e3) {
    if (!e3._valueTracker) {
      var t3 = nn2(e3) ? `checked` : `value`;
      e3._valueTracker = rn2(e3, t3, `` + e3[t3]);
    }
  }
  function on2(e3) {
    if (!e3) return false;
    var t3 = e3._valueTracker;
    if (!t3) return true;
    var n3 = t3.getValue(), r3 = ``;
    return e3 && (r3 = nn2(e3) ? e3.checked ? `true` : `false` : e3.value), e3 = r3, e3 !== n3 && (t3.setValue(e3), true);
  }
  var sn2 = /[\n"\\]/g;
  function cn2(e3) {
    return e3.replace(sn2, function(e4) {
      return `\\` + e4.charCodeAt(0).toString(16) + ` `;
    });
  }
  function ln2(e3, t3, n3, r3, i3, a3, o3, s3) {
    e3.name = ``, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` ? e3.type = o3 : e3.removeAttribute(`type`), t3 == null ? o3 !== `submit` && o3 !== `reset` || e3.removeAttribute(`value`) : o3 === `number` ? (t3 === 0 && e3.value === `` || e3.value != t3) && (e3.value = `` + tn2(t3)) : e3.value !== `` + tn2(t3) && (e3.value = `` + tn2(t3)), t3 == null ? n3 == null ? r3 != null && e3.removeAttribute(`value`) : dn2(e3, tn2(n3)) : o3 === `number` && e3.value == t3 ? dn2(e3, tn2(e3.value)) : dn2(e3, tn2(t3)), i3 == null && a3 != null && (e3.defaultChecked = !!a3), i3 != null && (e3.checked = i3 && typeof i3 != `function` && typeof i3 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e3.name = `` + tn2(s3) : e3.removeAttribute(`name`);
  }
  function un2(e3, t3, n3, r3, i3, a3, o3, s3) {
    if (a3 != null && typeof a3 != `function` && typeof a3 != `symbol` && typeof a3 != `boolean` && (e3.type = a3), t3 != null || n3 != null) {
      if (!(a3 !== `submit` && a3 !== `reset` || t3 != null)) {
        an2(e3);
        return;
      }
      n3 = n3 == null ? `` : `` + tn2(n3), t3 = t3 == null ? n3 : `` + tn2(t3), s3 || t3 === e3.value || (e3.value = t3), e3.defaultValue = t3;
    }
    r3 ??= i3, r3 = typeof r3 != `function` && typeof r3 != `symbol` && !!r3, e3.checked = s3 ? e3.checked : !!r3, e3.defaultChecked = !!r3, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` && (e3.name = o3), an2(e3);
  }
  function dn2(e3, t3) {
    e3.defaultValue !== `` + t3 && (e3.defaultValue = `` + t3);
  }
  function fn2(e3, t3, n3, r3) {
    if (e3 = e3.options, t3) {
      t3 = {};
      for (var i3 = 0; i3 < n3.length; i3++) t3[`$` + n3[i3]] = true;
      for (n3 = 0; n3 < e3.length; n3++) i3 = t3.hasOwnProperty(`$` + e3[n3].value), e3[n3].selected !== i3 && (e3[n3].selected = i3), i3 && r3 && (e3[n3].defaultSelected = true);
    } else {
      for (n3 = `` + tn2(n3), t3 = null, i3 = 0; i3 < e3.length; i3++) {
        if (e3[i3].value === n3) {
          e3[i3].selected = true, r3 && (e3[i3].defaultSelected = true);
          return;
        }
        t3 !== null || e3[i3].disabled || (t3 = e3[i3]);
      }
      t3 !== null && (t3.selected = true);
    }
  }
  function pn2(e3, t3, n3) {
    t3 != null && (t3 = `` + tn2(t3), t3 !== e3.value && (e3.value = t3), n3 == null) ? e3.defaultValue !== t3 && (e3.defaultValue = t3) : e3.defaultValue = n3 == null ? `` : `` + tn2(n3);
  }
  function mn2(e3, t3, n3, r3) {
    if (t3 == null) {
      if (r3 != null) {
        if (n3 != null) throw Error(i2(92));
        if (we2(r3)) {
          if (1 < r3.length) throw Error(i2(93));
          r3 = r3[0];
        }
        n3 = r3;
      }
      n3 ??= ``, t3 = n3;
    }
    n3 = tn2(t3), e3.defaultValue = n3, r3 = e3.textContent, r3 === n3 && r3 !== `` && r3 !== null && (e3.value = r3), an2(e3);
  }
  function hn2(e3, t3) {
    if (t3) {
      var n3 = e3.firstChild;
      if (n3 && n3 === e3.lastChild && n3.nodeType === 3) {
        n3.nodeValue = t3;
        return;
      }
    }
    e3.textContent = t3;
  }
  var gn2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function _n2(e3, t3, n3) {
    var r3 = t3.indexOf(`--`) === 0;
    n3 == null || typeof n3 == `boolean` || n3 === `` ? r3 ? e3.setProperty(t3, ``) : t3 === `float` ? e3.cssFloat = `` : e3[t3] = `` : r3 ? e3.setProperty(t3, n3) : typeof n3 != `number` || n3 === 0 || gn2.has(t3) ? t3 === `float` ? e3.cssFloat = n3 : e3[t3] = (`` + n3).trim() : e3[t3] = n3 + `px`;
  }
  function vn2(e3, t3, n3) {
    if (t3 != null && typeof t3 != `object`) throw Error(i2(62));
    if (e3 = e3.style, n3 != null) {
      for (var r3 in n3) !n3.hasOwnProperty(r3) || t3 != null && t3.hasOwnProperty(r3) || (r3.indexOf(`--`) === 0 ? e3.setProperty(r3, ``) : r3 === `float` ? e3.cssFloat = `` : e3[r3] = ``, P2 = true);
      for (var a3 in t3) r3 = t3[a3], t3.hasOwnProperty(a3) && n3[a3] !== r3 && (_n2(e3, a3, r3), P2 = true);
    } else for (var o3 in t3) t3.hasOwnProperty(o3) && _n2(e3, o3, t3[o3]);
  }
  function yn2(e3) {
    if (e3.indexOf(`-`) === -1) return false;
    switch (e3) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var bn2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), xn2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sn2(e3) {
    return xn2.test(`` + e3) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e3;
  }
  function Cn2() {
  }
  var wn2 = null;
  function Tn2(e3) {
    return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
  }
  var En2 = null, Dn2 = null;
  function On2(e3) {
    var t3 = zt2(e3);
    if (t3 && (e3 = t3.stateNode)) {
      var n3 = e3[At2] || null;
      a: switch (e3 = t3.stateNode, t3.type) {
        case `input`:
          if (ln2(e3, n3.value, n3.defaultValue, n3.defaultValue, n3.checked, n3.defaultChecked, n3.type, n3.name), t3 = n3.name, n3.type === `radio` && t3 != null) {
            for (n3 = e3; n3.parentNode; ) n3 = n3.parentNode;
            for (n3 = n3.querySelectorAll(`input[name="` + cn2(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n3.length; t3++) {
              var r3 = n3[t3];
              if (r3 !== e3 && r3.form === e3.form) {
                var a3 = r3[At2] || null;
                if (!a3) throw Error(i2(90));
                ln2(r3, a3.value, a3.defaultValue, a3.defaultValue, a3.checked, a3.defaultChecked, a3.type, a3.name);
              }
            }
            for (t3 = 0; t3 < n3.length; t3++) r3 = n3[t3], r3.form === e3.form && on2(r3);
          }
          break a;
        case `textarea`:
          pn2(e3, n3.value, n3.defaultValue);
          break a;
        case `select`:
          t3 = n3.value, t3 != null && fn2(e3, !!n3.multiple, t3, false);
      }
    }
  }
  var kn2 = false;
  function An2(e3, t3, n3) {
    if (kn2) return e3(t3, n3);
    kn2 = true;
    try {
      return e3(t3);
    } finally {
      if (kn2 = false, (En2 !== null || Dn2 !== null) && (zd2(), En2 && (t3 = En2, e3 = Dn2, Dn2 = En2 = null, On2(t3), e3))) for (t3 = 0; t3 < e3.length; t3++) On2(e3[t3]);
    }
  }
  function jn2(e3, t3) {
    var n3 = e3.stateNode;
    if (n3 === null) return null;
    var r3 = n3[At2] || null;
    if (r3 === null) return null;
    n3 = r3[t3];
    a: switch (t3) {
      case `onClick`:
      case `onClickCapture`:
      case `onDoubleClick`:
      case `onDoubleClickCapture`:
      case `onMouseDown`:
      case `onMouseDownCapture`:
      case `onMouseMove`:
      case `onMouseMoveCapture`:
      case `onMouseUp`:
      case `onMouseUpCapture`:
      case `onMouseEnter`:
        (r3 = !r3.disabled) || (e3 = e3.type, r3 = e3 !== `button` && e3 !== `input` && e3 !== `select` && e3 !== `textarea`), e3 = !r3;
        break a;
      default:
        e3 = false;
    }
    if (e3) return null;
    if (n3 && typeof n3 != `function`) throw Error(i2(231, t3, typeof n3));
    return n3;
  }
  var Mn2 = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, Nn2 = false;
  if (Mn2) try {
    var Pn2 = {};
    Object.defineProperty(Pn2, "passive", { get: function() {
      Nn2 = true;
    } }), window.addEventListener(`test`, Pn2, Pn2), window.removeEventListener(`test`, Pn2, Pn2);
  } catch {
    Nn2 = false;
  }
  var Fn2 = null, In2 = null, Ln2 = null;
  function Rn2() {
    if (Ln2) return Ln2;
    var e3, t3 = In2, n3 = t3.length, r3, i3 = `value` in Fn2 ? Fn2.value : Fn2.textContent, a3 = i3.length;
    for (e3 = 0; e3 < n3 && t3[e3] === i3[e3]; e3++) ;
    var o3 = n3 - e3;
    for (r3 = 1; r3 <= o3 && t3[n3 - r3] === i3[a3 - r3]; r3++) ;
    return Ln2 = i3.slice(e3, 1 < r3 ? 1 - r3 : void 0);
  }
  function zn2(e3) {
    var t3 = e3.keyCode;
    return `charCode` in e3 ? (e3 = e3.charCode, e3 === 0 && t3 === 13 && (e3 = 13)) : e3 = t3, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
  }
  function Bn2() {
    return true;
  }
  function Vn2() {
    return false;
  }
  function Hn2(e3) {
    function t3(t4, n3, r3, i3, a3) {
      for (var o3 in this._reactName = t4, this._targetInst = r3, this.type = n3, this.nativeEvent = i3, this.target = a3, this.currentTarget = null, e3) e3.hasOwnProperty(o3) && (t4 = e3[o3], this[o3] = t4 ? t4(i3) : i3[o3]);
      return this.isDefaultPrevented = (i3.defaultPrevented == null ? false === i3.returnValue : i3.defaultPrevented) ? Bn2 : Vn2, this.isPropagationStopped = Vn2, this;
    }
    return T2(t3.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e4 = this.nativeEvent;
      e4 && (e4.preventDefault ? e4.preventDefault() : typeof e4.returnValue != `unknown` && (e4.returnValue = false), this.isDefaultPrevented = Bn2);
    }, stopPropagation: function() {
      var e4 = this.nativeEvent;
      e4 && (e4.stopPropagation ? e4.stopPropagation() : typeof e4.cancelBubble != `unknown` && (e4.cancelBubble = true), this.isPropagationStopped = Bn2);
    }, persist: function() {
    }, isPersistent: Bn2 }), t3;
  }
  var Un2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
    return e3.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Wn2 = Hn2(Un2), Gn2 = T2({}, Un2, { view: 0, detail: 0 }), Kn2 = Hn2(Gn2), qn2, Jn2, Yn2, Xn2 = T2({}, Gn2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sr2, button: 0, buttons: 0, relatedTarget: function(e3) {
    return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
  }, movementX: function(e3) {
    return `movementX` in e3 ? e3.movementX : (e3 !== Yn2 && (Yn2 && e3.type === `mousemove` ? (qn2 = e3.screenX - Yn2.screenX, Jn2 = e3.screenY - Yn2.screenY) : Jn2 = qn2 = 0, Yn2 = e3), qn2);
  }, movementY: function(e3) {
    return `movementY` in e3 ? e3.movementY : Jn2;
  } }), Zn2 = Hn2(Xn2), Qn2 = Hn2(T2({}, Xn2, { dataTransfer: 0 })), $n2 = Hn2(T2({}, Gn2, { relatedTarget: 0 })), er2 = Hn2(T2({}, Un2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), tr2 = Hn2(T2({}, Un2, { clipboardData: function(e3) {
    return `clipboardData` in e3 ? e3.clipboardData : window.clipboardData;
  } })), nr2 = Hn2(T2({}, Un2, { data: 0 })), rr2 = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, ir2 = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, ar2 = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
  function or2(e3) {
    var t3 = this.nativeEvent;
    return t3.getModifierState ? t3.getModifierState(e3) : (e3 = ar2[e3]) ? !!t3[e3] : false;
  }
  function sr2() {
    return or2;
  }
  var cr2 = Hn2(T2({}, Gn2, { key: function(e3) {
    if (e3.key) {
      var t3 = rr2[e3.key] || e3.key;
      if (t3 !== `Unidentified`) return t3;
    }
    return e3.type === `keypress` ? (e3 = zn2(e3), e3 === 13 ? `Enter` : String.fromCharCode(e3)) : e3.type === `keydown` || e3.type === `keyup` ? ir2[e3.keyCode] || `Unidentified` : ``;
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sr2, charCode: function(e3) {
    return e3.type === `keypress` ? zn2(e3) : 0;
  }, keyCode: function(e3) {
    return e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  }, which: function(e3) {
    return e3.type === `keypress` ? zn2(e3) : e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  } })), lr2 = Hn2(T2({}, Xn2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), ur2 = Hn2(T2({}, Un2, { submitter: 0 })), dr2 = Hn2(T2({}, Gn2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sr2 })), fr2 = Hn2(T2({}, Un2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), pr2 = Hn2(T2({}, Xn2, { deltaX: function(e3) {
    return `deltaX` in e3 ? e3.deltaX : `wheelDeltaX` in e3 ? -e3.wheelDeltaX : 0;
  }, deltaY: function(e3) {
    return `deltaY` in e3 ? e3.deltaY : `wheelDeltaY` in e3 ? -e3.wheelDeltaY : `wheelDelta` in e3 ? -e3.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 })), mr2 = Hn2(T2({}, Un2, { newState: 0, oldState: 0, source: 0 })), hr2 = [9, 13, 27, 32], gr2 = Mn2 && `CompositionEvent` in window, _r2 = null;
  Mn2 && `documentMode` in document && (_r2 = document.documentMode);
  var vr2 = Mn2 && `TextEvent` in window && !_r2, yr2 = Mn2 && (!gr2 || _r2 && 8 < _r2 && 11 >= _r2), br2 = ` `, xr2 = false;
  function Sr2(e3, t3) {
    switch (e3) {
      case `keyup`:
        return hr2.indexOf(t3.keyCode) !== -1;
      case `keydown`:
        return t3.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function Cr2(e3) {
    return e3 = e3.detail, typeof e3 == `object` && `data` in e3 ? e3.data : null;
  }
  var wr2 = false;
  function Tr2(e3, t3) {
    switch (e3) {
      case `compositionend`:
        return Cr2(t3);
      case `keypress`:
        return t3.which === 32 ? (xr2 = true, br2) : null;
      case `textInput`:
        return e3 = t3.data, e3 === br2 && xr2 ? null : e3;
      default:
        return null;
    }
  }
  function Er2(e3, t3) {
    if (wr2) return e3 === `compositionend` || !gr2 && Sr2(e3, t3) ? (e3 = Rn2(), Ln2 = In2 = Fn2 = null, wr2 = false, e3) : null;
    switch (e3) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
          if (t3.char && 1 < t3.char.length) return t3.char;
          if (t3.which) return String.fromCharCode(t3.which);
        }
        return null;
      case `compositionend`:
        return yr2 && t3.locale !== `ko` ? null : t3.data;
      default:
        return null;
    }
  }
  var Dr2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Or2(e3) {
    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t3 === `input` ? !!Dr2[e3.type] : t3 === `textarea`;
  }
  function kr2(e3, t3, n3, r3) {
    En2 ? Dn2 ? Dn2.push(r3) : Dn2 = [r3] : En2 = r3, t3 = Jf2(t3, `onChange`), 0 < t3.length && (n3 = new Wn2(`onChange`, `change`, null, n3, r3), e3.push({ event: n3, listeners: t3 }));
  }
  var Ar2 = null, jr2 = null;
  function Mr2(e3) {
    Vf2(e3, 0);
  }
  function Nr2(e3) {
    if (on2(Bt2(e3))) return e3;
  }
  function Pr2(e3, t3) {
    if (e3 === `change`) return t3;
  }
  var Fr2 = false;
  if (Mn2) {
    var Ir2;
    if (Mn2) {
      var Lr2 = `oninput` in document;
      if (!Lr2) {
        var Rr2 = document.createElement(`div`);
        Rr2.setAttribute(`oninput`, `return;`), Lr2 = typeof Rr2.oninput == `function`;
      }
      Ir2 = Lr2;
    } else Ir2 = false;
    Fr2 = Ir2 && (!document.documentMode || 9 < document.documentMode);
  }
  function zr2() {
    Ar2 && (Ar2.detachEvent(`onpropertychange`, Br2), jr2 = Ar2 = null);
  }
  function Br2(e3) {
    if (e3.propertyName === `value` && Nr2(jr2)) {
      var t3 = [];
      kr2(t3, jr2, e3, Tn2(e3)), An2(Mr2, t3);
    }
  }
  function Vr2(e3, t3, n3) {
    e3 === `focusin` ? (zr2(), Ar2 = t3, jr2 = n3, Ar2.attachEvent(`onpropertychange`, Br2)) : e3 === `focusout` && zr2();
  }
  function Hr2(e3) {
    if (e3 === `selectionchange` || e3 === `keyup` || e3 === `keydown`) return Nr2(jr2);
  }
  function Ur2(e3, t3) {
    if (e3 === `click`) return Nr2(t3);
  }
  function Wr2(e3, t3) {
    if (e3 === `input` || e3 === `change`) return Nr2(t3);
  }
  function Gr2(e3, t3) {
    return e3 === t3 && (e3 !== 0 || 1 / e3 == 1 / t3) || e3 !== e3 && t3 !== t3;
  }
  var Kr2 = typeof Object.is == `function` ? Object.is : Gr2;
  function qr2(e3, t3) {
    if (Kr2(e3, t3)) return true;
    if (typeof e3 != `object` || !e3 || typeof t3 != `object` || !t3) return false;
    var n3 = Object.keys(e3), r3 = Object.keys(t3);
    if (n3.length !== r3.length) return false;
    for (r3 = 0; r3 < n3.length; r3++) {
      var i3 = n3[r3];
      if (!Ue2.call(t3, i3) || !Kr2(e3[i3], t3[i3])) return false;
    }
    return true;
  }
  function Jr2(e3) {
    if (e3 ||= typeof document < `u` ? document : void 0, e3 === void 0) return null;
    try {
      return e3.activeElement || e3.body;
    } catch {
      return e3.body;
    }
  }
  function Yr2(e3) {
    for (; e3 && e3.firstChild; ) e3 = e3.firstChild;
    return e3;
  }
  function Xr2(e3, t3) {
    var n3 = Yr2(e3);
    e3 = 0;
    for (var r3; n3; ) {
      if (n3.nodeType === 3) {
        if (r3 = e3 + n3.textContent.length, e3 <= t3 && r3 >= t3) return { node: n3, offset: t3 - e3 };
        e3 = r3;
      }
      a: {
        for (; n3; ) {
          if (n3.nextSibling) {
            n3 = n3.nextSibling;
            break a;
          }
          n3 = n3.parentNode;
        }
        n3 = void 0;
      }
      n3 = Yr2(n3);
    }
  }
  function Zr2(e3, t3) {
    return e3 && t3 ? e3 === t3 ? true : e3 && e3.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? Zr2(e3, t3.parentNode) : `contains` in e3 ? e3.contains(t3) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t3) & 16) : false : false;
  }
  function Qr2(e3) {
    e3 = e3 != null && e3.ownerDocument != null && e3.ownerDocument.defaultView != null ? e3.ownerDocument.defaultView : window;
    for (var t3 = Jr2(e3.document); t3 instanceof e3.HTMLIFrameElement; ) {
      try {
        var n3 = typeof t3.contentWindow.location.href == `string`;
      } catch {
        n3 = false;
      }
      if (n3) e3 = t3.contentWindow;
      else break;
      t3 = Jr2(e3.document);
    }
    return t3;
  }
  function $r2(e3) {
    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t3 && (t3 === `input` && (e3.type === `text` || e3.type === `search` || e3.type === `tel` || e3.type === `url` || e3.type === `password`) || t3 === `textarea` || e3.contentEditable === `true`);
  }
  var ei2 = Mn2 && `documentMode` in document && 11 >= document.documentMode, ti2 = null, ni2 = null, ri2 = null, ii2 = false;
  function ai2(e3, t3, n3) {
    var r3 = n3.window === n3 ? n3.document : n3.nodeType === 9 ? n3 : n3.ownerDocument;
    ii2 || ti2 == null || ti2 !== Jr2(r3) || (r3 = ti2, `selectionStart` in r3 && $r2(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), ri2 && qr2(ri2, r3) || (ri2 = r3, r3 = Jf2(ni2, `onSelect`), 0 < r3.length && (t3 = new Wn2(`onSelect`, `select`, null, t3, n3), e3.push({ event: t3, listeners: r3 }), t3.target = ti2)));
  }
  function oi2(e3, t3) {
    var n3 = {};
    return n3[e3.toLowerCase()] = t3.toLowerCase(), n3[`Webkit` + e3] = `webkit` + t3, n3[`Moz` + e3] = `moz` + t3, n3;
  }
  var si2 = { animationend: oi2(`Animation`, `AnimationEnd`), animationiteration: oi2(`Animation`, `AnimationIteration`), animationstart: oi2(`Animation`, `AnimationStart`), transitionrun: oi2(`Transition`, `TransitionRun`), transitionstart: oi2(`Transition`, `TransitionStart`), transitioncancel: oi2(`Transition`, `TransitionCancel`), transitionend: oi2(`Transition`, `TransitionEnd`) }, ci2 = {}, li2 = {};
  Mn2 && (li2 = document.createElement(`div`).style, `AnimationEvent` in window || (delete si2.animationend.animation, delete si2.animationiteration.animation, delete si2.animationstart.animation), `TransitionEvent` in window || delete si2.transitionend.transition);
  function ui2(e3) {
    if (ci2[e3]) return ci2[e3];
    if (!si2[e3]) return e3;
    var t3 = si2[e3], n3;
    for (n3 in t3) if (t3.hasOwnProperty(n3) && n3 in li2) return ci2[e3] = t3[n3];
    return e3;
  }
  var di2 = ui2(`animationend`), fi2 = ui2(`animationiteration`), pi2 = ui2(`animationstart`), mi2 = ui2(`transitionrun`), hi2 = ui2(`transitionstart`), gi2 = ui2(`transitioncancel`), _i2 = ui2(`transitionend`), vi2 = /* @__PURE__ */ new Map(), yi2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  yi2.push(`scrollEnd`);
  function bi2(e3, t3) {
    vi2.set(e3, t3), Kt2(t3, [e3]);
  }
  var xi2 = 0;
  function Si2(e3, t3) {
    if (e3.name != null && e3.name !== `auto`) return e3.name;
    if (t3.autoName !== null) return t3.autoName;
    e3 = bd2.identifierPrefix;
    var n3 = xi2++;
    return e3 = `_` + e3 + `t_` + n3.toString(32) + `_`, t3.autoName = e3;
  }
  function Ci2(e3) {
    if (e3 == null || typeof e3 == `string`) return e3;
    var t3 = null, n3 = Od2;
    if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
      var i3 = e3[n3[r3]];
      if (i3 != null) {
        if (i3 === `none`) return `none`;
        t3 = t3 == null ? i3 : t3 + (` ` + i3);
      }
    }
    return t3 ?? e3.default;
  }
  function wi2(e3, t3) {
    return e3 = Ci2(e3), t3 = Ci2(t3), t3 == null ? e3 === `auto` ? null : e3 : t3 === `auto` ? null : t3;
  }
  var Ti2 = typeof reportError == `function` ? reportError : function(e3) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e3);
      return;
    }
    console.error(e3);
  }, Ei2 = [], Di2 = 0, Oi2 = 0;
  function ki2() {
    for (var e3 = Di2, t3 = Oi2 = Di2 = 0; t3 < e3; ) {
      var n3 = Ei2[t3];
      Ei2[t3++] = null;
      var r3 = Ei2[t3];
      Ei2[t3++] = null;
      var i3 = Ei2[t3];
      Ei2[t3++] = null;
      var a3 = Ei2[t3];
      if (Ei2[t3++] = null, r3 !== null && i3 !== null) {
        var o3 = r3.pending;
        o3 === null ? i3.next = i3 : (i3.next = o3.next, o3.next = i3), r3.pending = i3;
      }
      a3 !== 0 && Ni2(n3, i3, a3);
    }
  }
  function Ai2(e3, t3, n3, r3) {
    Ei2[Di2++] = e3, Ei2[Di2++] = t3, Ei2[Di2++] = n3, Ei2[Di2++] = r3, Oi2 |= r3, e3.lanes |= r3, e3 = e3.alternate, e3 !== null && (e3.lanes |= r3);
  }
  function ji2(e3, t3, n3, r3) {
    return Ai2(e3, t3, n3, r3), Pi2(e3);
  }
  function Mi2(e3, t3) {
    return Ai2(e3, null, null, t3), Pi2(e3);
  }
  function Ni2(e3, t3, n3) {
    e3.lanes |= n3;
    var r3 = e3.alternate;
    r3 !== null && (r3.lanes |= n3);
    for (var i3 = false, a3 = e3.return; a3 !== null; ) a3.childLanes |= n3, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n3), a3.tag === 22 && (e3 = a3.stateNode, e3 === null || e3._visibility & 1 || (i3 = true)), e3 = a3, a3 = a3.return;
    return e3.tag === 3 ? (a3 = e3.stateNode, i3 && t3 !== null && (i3 = 31 - at2(n3), e3 = a3.hiddenUpdates, r3 = e3[i3], r3 === null ? e3[i3] = [t3] : r3.push(t3), t3.lane = n3 | 536870912), a3) : null;
  }
  function Pi2(e3) {
    if (50 < kd2) throw kd2 = 0, Ad2 = null, Error(i2(185));
    for (var t3 = e3.return; t3 !== null; ) e3 = t3, t3 = e3.return;
    return e3.tag === 3 ? e3.stateNode : null;
  }
  var Fi2 = {};
  function Ii2(e3, t3, n3, r3) {
    this.tag = e3, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Li2(e3, t3, n3, r3) {
    return new Ii2(e3, t3, n3, r3);
  }
  function Ri2(e3) {
    return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
  }
  function zi2(e3, t3) {
    var n3 = e3.alternate;
    return n3 === null ? (n3 = Li2(e3.tag, t3, e3.key, e3.mode), n3.elementType = e3.elementType, n3.type = e3.type, n3.stateNode = e3.stateNode, n3.alternate = e3, e3.alternate = n3) : (n3.pendingProps = t3, n3.type = e3.type, n3.flags = 0, n3.subtreeFlags = 0, n3.deletions = null), n3.flags = e3.flags & 1206910976, n3.childLanes = e3.childLanes, n3.lanes = e3.lanes, n3.child = e3.child, n3.memoizedProps = e3.memoizedProps, n3.memoizedState = e3.memoizedState, n3.updateQueue = e3.updateQueue, t3 = e3.dependencies, n3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n3.sibling = e3.sibling, n3.index = e3.index, n3.ref = e3.ref, n3.refCleanup = e3.refCleanup, n3;
  }
  function Bi2(e3, t3) {
    e3.flags &= 1206910978;
    var n3 = e3.alternate;
    return n3 === null ? (e3.childLanes = 0, e3.lanes = t3, e3.child = null, e3.subtreeFlags = 0, e3.memoizedProps = null, e3.memoizedState = null, e3.updateQueue = null, e3.dependencies = null, e3.stateNode = null) : (e3.childLanes = n3.childLanes, e3.lanes = n3.lanes, e3.child = n3.child, e3.subtreeFlags = 0, e3.deletions = null, e3.memoizedProps = n3.memoizedProps, e3.memoizedState = n3.memoizedState, e3.updateQueue = n3.updateQueue, e3.type = n3.type, t3 = n3.dependencies, e3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e3;
  }
  function Vi2(e3, t3, n3, r3, a3, o3) {
    var s3 = 0;
    if (r3 = e3, typeof r3 == `function`) Ri2(r3) && (s3 = 1);
    else if (typeof r3 == `string`) s3 = qm(e3, n3, Ae2.current) ? 26 : e3 === `html` || e3 === `head` || e3 === `body` ? 27 : 5;
    else a: switch (r3) {
      case he2:
        return e3 = Li2(31, n3, t3, a3), e3.elementType = he2, e3.lanes = o3, e3;
      case ae2:
        return Hi2(n3.children, a3, o3, t3);
      case oe2:
        s3 = 8, a3 |= 24;
        break;
      case se2:
        return e3 = Li2(12, n3, t3, a3 | 2), e3.elementType = se2, e3.lanes = o3, e3;
      case de2:
        return e3 = Li2(13, n3, t3, a3), e3.elementType = de2, e3.lanes = o3, e3;
      case fe2:
        return e3 = Li2(19, n3, t3, a3), e3.elementType = fe2, e3.lanes = o3, e3;
      case ge2:
      case ve2:
        return e3 = a3 | 32, e3 = Li2(30, n3, t3, e3), e3.elementType = ve2, e3.lanes = o3, e3.stateNode = { autoName: null, paired: null, clones: null, ref: null }, e3;
      default:
        if (typeof r3 == `object` && r3) switch (r3.$$typeof) {
          case le2:
            s3 = 10;
            break a;
          case ce2:
            s3 = 9;
            break a;
          case ue2:
            s3 = 11;
            break a;
          case pe2:
            s3 = 14;
            break a;
          case me2:
            s3 = 16, r3 = null;
            break a;
        }
        s3 = 29, n3 = Error(i2(130, e3 === null ? `null` : typeof e3, ``)), r3 = null;
    }
    return t3 = Li2(s3, n3, t3, a3), t3.elementType = e3, t3.type = r3, t3.lanes = o3, t3;
  }
  function Hi2(e3, t3, n3, r3) {
    return e3 = Li2(7, e3, r3, t3), e3.lanes = n3, e3;
  }
  function Ui2(e3, t3, n3) {
    return e3 = Li2(6, e3, null, t3), e3.lanes = n3, e3;
  }
  function Wi2(e3) {
    var t3 = Li2(18, null, null, 0);
    return t3.stateNode = e3, t3;
  }
  function Gi2(e3, t3, n3) {
    return t3 = Li2(4, e3.children === null ? [] : e3.children, e3.key, t3), t3.lanes = n3, t3.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t3;
  }
  var Ki2 = /* @__PURE__ */ new WeakMap();
  function qi2(e3, t3) {
    if (typeof e3 == `object` && e3) {
      var n3 = Ki2.get(e3);
      return n3 === void 0 ? (t3 = { value: e3, source: t3, stack: He2(t3) }, Ki2.set(e3, t3), t3) : n3;
    }
    return { value: e3, source: t3, stack: He2(t3) };
  }
  var Ji2 = [], Yi2 = 0, Xi2 = null, Zi2 = 0, Qi2 = [], $i2 = 0, ea2 = null, F2 = 1, ta2 = ``;
  function na2(e3, t3) {
    Ji2[Yi2++] = Zi2, Ji2[Yi2++] = Xi2, Xi2 = e3, Zi2 = t3;
  }
  function ra2(e3, t3, n3) {
    Qi2[$i2++] = F2, Qi2[$i2++] = ta2, Qi2[$i2++] = ea2, ea2 = e3;
    var r3 = F2;
    e3 = ta2;
    var i3 = 32 - at2(r3) - 1;
    r3 &= ~(1 << i3), n3 += 1;
    var a3 = 32 - at2(t3) + i3;
    if (30 < a3) {
      var o3 = i3 - i3 % 5;
      a3 = (r3 & (1 << o3) - 1).toString(32), r3 >>= o3, i3 -= o3, F2 = 1 << 32 - at2(t3) + i3 | n3 << i3 | r3, ta2 = a3 + e3;
    } else F2 = 1 << a3 | n3 << i3 | r3, ta2 = e3;
  }
  function ia2(e3) {
    e3.return !== null && (na2(e3, 1), ra2(e3, 1, 0));
  }
  function aa2(e3) {
    for (; e3 === Xi2; ) Xi2 = Ji2[--Yi2], Ji2[Yi2] = null, Zi2 = Ji2[--Yi2], Ji2[Yi2] = null;
    for (; e3 === ea2; ) ea2 = Qi2[--$i2], Qi2[$i2] = null, ta2 = Qi2[--$i2], Qi2[$i2] = null, F2 = Qi2[--$i2], Qi2[$i2] = null;
  }
  function oa2(e3, t3) {
    Qi2[$i2++] = F2, Qi2[$i2++] = ta2, Qi2[$i2++] = ea2, F2 = t3.id, ta2 = t3.overflow, ea2 = e3;
  }
  var sa2 = null, I2 = null, L2 = false, ca2 = null, la2 = false, ua2 = Error(i2(519));
  function da2(e3) {
    throw _a2(qi2(Error(i2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e3)), ua2;
  }
  function fa2(e3) {
    var t3 = e3.stateNode, n3 = e3.type, r3 = e3.memoizedProps;
    switch (t3[kt2] = e3, t3[At2] = r3, n3) {
      case `dialog`:
        Q2(`cancel`, t3), Q2(`close`, t3);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        Q2(`load`, t3);
        break;
      case `video`:
      case `audio`:
        for (n3 = 0; n3 < zf2.length; n3++) Q2(zf2[n3], t3);
        break;
      case `source`:
        Q2(`error`, t3);
        break;
      case `img`:
      case `image`:
      case `link`:
        Q2(`error`, t3), Q2(`load`, t3);
        break;
      case `details`:
        Q2(`toggle`, t3);
        break;
      case `input`:
        Q2(`invalid`, t3), un2(t3, r3.value, r3.defaultValue, r3.checked, r3.defaultChecked, r3.type, r3.name, true);
        break;
      case `select`:
        Q2(`invalid`, t3);
        break;
      case `textarea`:
        Q2(`invalid`, t3), mn2(t3, r3.value, r3.defaultValue, r3.children);
    }
    n3 = r3.children, typeof n3 != `string` && typeof n3 != `number` && typeof n3 != `bigint` || t3.textContent === `` + n3 || true === r3.suppressHydrationWarning || ep2(t3.textContent, n3) ? (r3.popover != null && (Q2(`beforetoggle`, t3), Q2(`toggle`, t3)), r3.onScroll != null && Q2(`scroll`, t3), r3.onScrollEnd != null && Q2(`scrollend`, t3), r3.onClick != null && (t3.onclick = Cn2), t3 = true) : t3 = false, t3 || da2(e3, true);
  }
  function pa2(e3) {
    for (sa2 = e3.return; sa2; ) switch (sa2.tag) {
      case 5:
      case 31:
      case 13:
        la2 = false;
        return;
      case 27:
      case 3:
        la2 = true;
        return;
      default:
        sa2 = sa2.return;
    }
  }
  function ma2(e3) {
    if (e3 !== sa2) return false;
    if (!L2) return pa2(e3), L2 = true, false;
    var t3 = e3.tag, n3;
    if ((n3 = t3 !== 3 && t3 !== 27) && ((n3 = t3 === 5) && (n3 = e3.type, n3 = n3 === `form` || n3 === `button` || pp2(e3.type, e3.memoizedProps)), n3 = !n3), n3 && I2 && da2(e3), pa2(e3), t3 === 13) {
      if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(i2(317));
      I2 = dm(e3);
    } else if (t3 === 31) {
      if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(i2(317));
      I2 = dm(e3);
    } else t3 === 27 ? (t3 = I2, Sp2(e3.type) ? (e3 = um, um = null, I2 = e3) : I2 = t3) : I2 = sa2 ? lm(e3.stateNode.nextSibling) : null;
    return true;
  }
  function ha2() {
    I2 = sa2 = null, L2 = false;
  }
  function ga2() {
    var e3 = ca2;
    return e3 !== null && (fd2 === null ? fd2 = e3 : fd2.push.apply(fd2, e3), ca2 = null), e3;
  }
  function _a2(e3) {
    ca2 === null ? ca2 = [e3] : ca2.push(e3);
  }
  var va2 = Oe2(null), ya2 = null, ba2 = null;
  function xa2(e3, t3, n3) {
    O2(va2, t3._currentValue), t3._currentValue = n3;
  }
  function Sa2(e3) {
    e3._currentValue = va2.current, ke2(va2);
  }
  function Ca2(e3, t3, n3) {
    for (; e3 !== null; ) {
      var r3 = e3.alternate;
      if ((e3.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e3.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e3 === n3) break;
      e3 = e3.return;
    }
  }
  function wa2(e3, t3, n3, r3) {
    var a3 = e3.child;
    for (a3 !== null && (a3.return = e3); a3 !== null; ) {
      var o3 = a3.dependencies;
      if (o3 !== null) {
        var s3 = a3.child;
        o3 = o3.firstContext;
        a: for (; o3 !== null; ) {
          var c3 = o3;
          o3 = a3;
          for (var l3 = 0; l3 < t3.length; l3++) if (c3.context === t3[l3]) {
            o3.lanes |= n3, c3 = o3.alternate, c3 !== null && (c3.lanes |= n3), Ca2(o3.return, n3, e3), r3 || (s3 = null);
            break a;
          }
          o3 = c3.next;
        }
      } else if (a3.tag === 18) {
        if (s3 = a3.return, s3 === null) throw Error(i2(341));
        s3.lanes |= n3, o3 = s3.alternate, o3 !== null && (o3.lanes |= n3), Ca2(s3, n3, e3), s3 = null;
      } else a3.tag === 13 && a3.memoizedState !== null && a3.memoizedState.dehydrated === null ? (a3.lanes |= n3, s3 = a3.alternate, s3 !== null && (s3.lanes |= n3), Ca2(a3.return, n3, e3), s3 = a3.child, s3 = s3 === null ? null : s3.sibling) : s3 = a3.child;
      if (s3 !== null) s3.return = a3;
      else for (s3 = a3; s3 !== null; ) {
        if (s3 === e3) {
          s3 = null;
          break;
        }
        if (a3 = s3.sibling, a3 !== null) {
          a3.return = s3.return, s3 = a3;
          break;
        }
        s3 = s3.return;
      }
      a3 = s3;
    }
  }
  function Ta2(e3, t3, n3, r3) {
    e3 = null;
    for (var a3 = t3, o3 = false; a3 !== null; ) {
      if (!o3) {
        if (a3.flags & 524288) o3 = true;
        else if (a3.flags & 262144) break;
      }
      if (a3.tag === 10) {
        var s3 = a3.alternate;
        if (s3 === null) throw Error(i2(387));
        if (s3 = s3.memoizedProps, s3 !== null) {
          var c3 = a3.type;
          Kr2(a3.pendingProps.value, s3.value) || (e3 === null ? e3 = [c3] : e3.push(c3));
        }
      } else if (a3 === k2.current) {
        if (s3 = a3.alternate, s3 === null) throw Error(i2(387));
        s3.memoizedState.memoizedState !== a3.memoizedState.memoizedState && (e3 === null ? e3 = [sh] : e3.push(sh));
      }
      a3 = a3.return;
    }
    return e3 !== null && wa2(t3, e3, n3, r3), t3.flags |= 262144, e3 !== null;
  }
  function Ea2(e3) {
    for (e3 = e3.firstContext; e3 !== null; ) {
      if (!Kr2(e3.context._currentValue, e3.memoizedValue)) return true;
      e3 = e3.next;
    }
    return false;
  }
  function Da2(e3) {
    ya2 = e3, ba2 = null, e3 = e3.dependencies, e3 !== null && (e3.firstContext = null);
  }
  function Oa2(e3) {
    return Aa2(ya2, e3);
  }
  function ka2(e3, t3) {
    return ya2 === null && Da2(e3), Aa2(e3, t3);
  }
  function Aa2(e3, t3) {
    var n3 = t3._currentValue;
    if (t3 = { context: t3, memoizedValue: n3, next: null }, ba2 === null) {
      if (e3 === null) throw Error(i2(308));
      ba2 = t3, e3.dependencies = { lanes: 0, firstContext: t3 }, e3.flags |= 524288;
    } else ba2 = ba2.next = t3;
    return n3;
  }
  var ja2 = typeof AbortController < `u` ? AbortController : function() {
    var e3 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n3) {
      e3.push(n3);
    } };
    this.abort = function() {
      t3.aborted = true, e3.forEach(function(e4) {
        return e4();
      });
    };
  }, Ma2 = t2.unstable_scheduleCallback, Na2 = t2.unstable_NormalPriority, Pa2 = { $$typeof: le2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Fa2() {
    return { controller: new ja2(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Ia2(e3) {
    e3.refCount--, e3.refCount === 0 && Ma2(Na2, function() {
      e3.controller.abort();
    });
  }
  function La2(e3, t3) {
    if (e3.pendingLanes & 4194048) {
      var n3 = e3.transitionTypes;
      for (n3 === null && (n3 = e3.transitionTypes = []), e3 = 0; e3 < t3.length; e3++) {
        var r3 = t3[e3];
        n3.indexOf(r3) === -1 && n3.push(r3);
      }
    }
  }
  var Ra2 = null;
  function za2(e3) {
    var t3 = e3.transitionTypes;
    return e3.transitionTypes = null, t3;
  }
  var Ba2 = null, Va2 = 0, Ha2 = 0, Ua2 = null;
  function Wa2(e3, t3) {
    if (Ba2 === null) {
      var n3 = Ba2 = [];
      Va2 = 0, Ha2 = Pf2(), Ua2 = { status: `pending`, value: void 0, then: function(e4) {
        n3.push(e4);
      } };
    }
    return Va2++, t3.then(Ga2, Ga2), t3;
  }
  function Ga2() {
    if (--Va2 === 0 && (Ra2 = null, Ba2 !== null)) {
      Ua2 !== null && (Ua2.status = `fulfilled`);
      var e3 = Ba2;
      Ba2 = null, Ha2 = 0, Ua2 = null;
      for (var t3 = 0; t3 < e3.length; t3++) (0, e3[t3])();
    }
  }
  function Ka2(e3, t3) {
    var n3 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e4) {
      n3.push(e4);
    } };
    return e3.then(function() {
      r3.status = `fulfilled`, r3.value = t3;
      for (var e4 = 0; e4 < n3.length; e4++) (0, n3[e4])(t3);
    }, function(e4) {
      for (r3.status = `rejected`, r3.reason = e4, e4 = 0; e4 < n3.length; e4++) (0, n3[e4])(void 0);
    }), r3;
  }
  var qa2 = E2.S;
  E2.S = function(e3, t3) {
    if (hd2 = Je2(), typeof t3 == `object` && t3 && typeof t3.then == `function` && Wa2(e3, t3), Ra2 !== null) for (var n3 = bf2; n3 !== null; ) La2(n3, Ra2), n3 = n3.next;
    if (n3 = e3.types, n3 !== null) {
      for (var r3 = bf2; r3 !== null; ) La2(r3, n3), r3 = r3.next;
      if (Ha2 !== 0) {
        r3 = Ra2, r3 === null && (r3 = Ra2 = []);
        for (var i3 = 0; i3 < n3.length; i3++) {
          var a3 = n3[i3];
          r3.indexOf(a3) === -1 && r3.push(a3);
        }
      }
    }
    qa2 !== null && qa2(e3, t3);
  };
  var Ja2 = Oe2(null);
  function Ya2() {
    var e3 = Ja2.current;
    return e3 === null ? K2.pooledCache : e3;
  }
  function Xa2(e3, t3) {
    t3 === null ? O2(Ja2, Ja2.current) : O2(Ja2, t3.pool);
  }
  function Za2() {
    var e3 = Ya2();
    return e3 === null ? null : { parent: Pa2._currentValue, pool: e3 };
  }
  var Qa2 = Error(i2(460)), $a2 = Error(i2(474)), eo2 = Error(i2(542)), to2 = { then: function() {
  } };
  function no2(e3) {
    return e3 = e3.status, e3 === `fulfilled` || e3 === `rejected`;
  }
  function ro2(e3, t3, n3) {
    switch (n3 = e3[n3], n3 === void 0 ? e3.push(t3) : n3 !== t3 && (t3.then(Cn2, Cn2), t3 = n3), t3.status) {
      case `fulfilled`:
        return t3.value;
      case `rejected`:
        throw e3 = t3.reason, so2(e3), e3 === void 0 && !(`reason` in t3) ? Error(i2(600)) : e3;
      default:
        if (typeof t3.status == `string`) t3.then(Cn2, Cn2);
        else {
          if (e3 = K2, e3 !== null && 100 < e3.shellSuspendCounter) throw Error(i2(482));
          e3 = t3, e3.status = `pending`, e3.then(function(e4) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `fulfilled`, n4.value = e4;
            }
          }, function(e4) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `rejected`, n4.reason = e4;
            }
          });
        }
        switch (t3.status) {
          case `fulfilled`:
            return t3.value;
          case `rejected`:
            throw e3 = t3.reason, so2(e3), e3;
        }
        throw ao2 = t3, Qa2;
    }
  }
  function io2(e3) {
    try {
      var t3 = e3._init;
      return t3(e3._payload);
    } catch (e4) {
      throw typeof e4 == `object` && e4 && typeof e4.then == `function` ? (ao2 = e4, Qa2) : e4;
    }
  }
  var ao2 = null;
  function oo2() {
    if (ao2 === null) throw Error(i2(459));
    var e3 = ao2;
    return ao2 = null, e3;
  }
  function so2(e3) {
    if (e3 === Qa2 || e3 === eo2) throw Error(i2(483));
  }
  var co2 = null, lo2 = 0;
  function uo2(e3) {
    var t3 = lo2;
    return lo2 += 1, co2 === null && (co2 = []), ro2(co2, e3, t3);
  }
  function fo2(e3, t3) {
    t3 = t3.props.ref, e3.ref = t3 === void 0 ? null : t3;
  }
  function po2(e3, t3) {
    throw t3.$$typeof === ne2 ? Error(i2(525)) : (e3 = Object.prototype.toString.call(t3), Error(i2(31, e3 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e3)));
  }
  function mo2(e3) {
    function t3(t4, n4) {
      if (e3) {
        var r4 = t4.deletions;
        r4 === null ? (t4.deletions = [n4], t4.flags |= 16) : r4.push(n4);
      }
    }
    function n3(n4, r4) {
      if (!e3) return null;
      for (; r4 !== null; ) t3(n4, r4), r4 = r4.sibling;
      return null;
    }
    function r3(e4) {
      for (var t4 = /* @__PURE__ */ new Map(); e4 !== null; ) e4.key === null ? t4.set(e4.index, e4) : t4.set(e4.key, e4), e4 = e4.sibling;
      return t4;
    }
    function a3(e4, t4) {
      return e4 = zi2(e4, t4), e4.index = 0, e4.sibling = null, e4;
    }
    function o3(t4, n4, r4) {
      return t4.index = r4, e3 ? (r4 = t4.alternate, r4 === null ? (t4.flags |= 134217730, n4) : (r4 = r4.index, r4 < n4 ? (t4.flags |= 2, n4) : r4)) : (t4.flags |= 1048576, n4);
    }
    function s3(t4) {
      return e3 && t4.alternate === null && (t4.flags |= 134217730), t4;
    }
    function c3(e4, t4, n4, r4) {
      return t4 === null || t4.tag !== 6 ? (t4 = Ui2(n4, e4.mode, r4), t4.return = e4, t4) : (t4 = a3(t4, n4), t4.return = e4, t4);
    }
    function l3(e4, t4, n4, r4) {
      var i3 = n4.type;
      return i3 === ae2 ? (e4 = d2(e4, t4, n4.props.children, r4, n4.key), fo2(e4, n4), e4) : t4 !== null && (t4.elementType === i3 || typeof i3 == `object` && i3 && i3.$$typeof === me2 && io2(i3) === t4.type) ? (t4 = a3(t4, n4.props), fo2(t4, n4), t4.return = e4, t4) : (t4 = Vi2(n4.type, n4.key, n4.props, null, e4.mode, r4), fo2(t4, n4), t4.return = e4, t4);
    }
    function u3(e4, t4, n4, r4) {
      return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n4.containerInfo || t4.stateNode.implementation !== n4.implementation ? (t4 = Gi2(n4, e4.mode, r4), t4.return = e4, t4) : (t4 = a3(t4, n4.children || []), t4.return = e4, t4);
    }
    function d2(e4, t4, n4, r4, i3) {
      return t4 === null || t4.tag !== 7 ? (t4 = Hi2(n4, e4.mode, r4, i3), t4.return = e4, t4) : (t4 = a3(t4, n4), t4.return = e4, t4);
    }
    function f3(e4, t4, n4) {
      if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`) return t4 = Ui2(`` + t4, e4.mode, n4), t4.return = e4, t4;
      if (typeof t4 == `object` && t4) {
        switch (t4.$$typeof) {
          case re2:
            return n4 = Vi2(t4.type, t4.key, t4.props, null, e4.mode, n4), fo2(n4, t4), n4.return = e4, n4;
          case ie2:
            return t4 = Gi2(t4, e4.mode, n4), t4.return = e4, t4;
          case me2:
            return t4 = io2(t4), f3(e4, t4, n4);
        }
        if (we2(t4) || xe2(t4)) return t4 = Hi2(t4, e4.mode, n4, null), t4.return = e4, t4;
        if (typeof t4.then == `function`) return f3(e4, uo2(t4), n4);
        if (t4.$$typeof === le2) return f3(e4, ka2(e4, t4), n4);
        po2(e4, t4);
      }
      return null;
    }
    function p2(e4, t4, n4, r4) {
      var i3 = t4 === null ? null : t4.key;
      if (typeof n4 == `string` && n4 !== `` || typeof n4 == `number` || typeof n4 == `bigint`) return i3 === null ? c3(e4, t4, `` + n4, r4) : null;
      if (typeof n4 == `object` && n4) {
        switch (n4.$$typeof) {
          case re2:
            return n4.key === i3 ? l3(e4, t4, n4, r4) : null;
          case ie2:
            return n4.key === i3 ? u3(e4, t4, n4, r4) : null;
          case me2:
            return n4 = io2(n4), p2(e4, t4, n4, r4);
        }
        if (we2(n4) || xe2(n4)) return i3 === null ? d2(e4, t4, n4, r4, null) : null;
        if (typeof n4.then == `function`) return p2(e4, t4, uo2(n4), r4);
        if (n4.$$typeof === le2) return p2(e4, t4, ka2(e4, n4), r4);
        po2(e4, n4);
      }
      return null;
    }
    function m3(e4, t4, n4, r4, i3) {
      if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number` || typeof r4 == `bigint`) return e4 = e4.get(n4) || null, c3(t4, e4, `` + r4, i3);
      if (typeof r4 == `object` && r4) {
        switch (r4.$$typeof) {
          case re2:
            return e4 = e4.get(r4.key === null ? n4 : r4.key) || null, l3(t4, e4, r4, i3);
          case ie2:
            return e4 = e4.get(r4.key === null ? n4 : r4.key) || null, u3(t4, e4, r4, i3);
          case me2:
            return r4 = io2(r4), m3(e4, t4, n4, r4, i3);
        }
        if (we2(r4) || xe2(r4)) return e4 = e4.get(n4) || null, d2(t4, e4, r4, i3, null);
        if (typeof r4.then == `function`) return m3(e4, t4, n4, uo2(r4), i3);
        if (r4.$$typeof === le2) return m3(e4, t4, n4, ka2(t4, r4), i3);
        po2(t4, r4);
      }
      return null;
    }
    function h2(i3, a4, s4, c4) {
      for (var l4 = null, u4 = null, d3 = a4, h3 = a4 = 0, g4 = null; d3 !== null && h3 < s4.length; h3++) {
        d3.index > h3 ? (g4 = d3, d3 = null) : g4 = d3.sibling;
        var _4 = p2(i3, d3, s4[h3], c4);
        if (_4 === null) {
          d3 === null && (d3 = g4);
          break;
        }
        e3 && d3 && _4.alternate === null && t3(i3, d3), a4 = o3(_4, a4, h3), u4 === null ? l4 = _4 : u4.sibling = _4, u4 = _4, d3 = g4;
      }
      if (h3 === s4.length) return n3(i3, d3), L2 && na2(i3, h3), l4;
      if (d3 === null) {
        for (; h3 < s4.length; h3++) d3 = f3(i3, s4[h3], c4), d3 !== null && (a4 = o3(d3, a4, h3), u4 === null ? l4 = d3 : u4.sibling = d3, u4 = d3);
        return L2 && na2(i3, h3), l4;
      }
      for (d3 = r3(d3); h3 < s4.length; h3++) g4 = m3(d3, i3, h3, s4[h3], c4), g4 !== null && (e3 && (_4 = g4.alternate, _4 !== null && d3.delete(_4.key === null ? h3 : _4.key)), a4 = o3(g4, a4, h3), u4 === null ? l4 = g4 : u4.sibling = g4, u4 = g4);
      return e3 && d3.forEach(function(e4) {
        return t3(i3, e4);
      }), L2 && na2(i3, h3), l4;
    }
    function g3(a4, s4, c4, l4) {
      if (c4 == null) throw Error(i2(151));
      for (var u4 = null, d3 = null, h3 = s4, g4 = s4 = 0, _4 = null, v3 = c4.next(); h3 !== null && !v3.done; g4++, v3 = c4.next()) {
        h3.index > g4 ? (_4 = h3, h3 = null) : _4 = h3.sibling;
        var y3 = p2(a4, h3, v3.value, l4);
        if (y3 === null) {
          h3 === null && (h3 = _4);
          break;
        }
        e3 && h3 && y3.alternate === null && t3(a4, h3), s4 = o3(y3, s4, g4), d3 === null ? u4 = y3 : d3.sibling = y3, d3 = y3, h3 = _4;
      }
      if (v3.done) return n3(a4, h3), L2 && na2(a4, g4), u4;
      if (h3 === null) {
        for (; !v3.done; g4++, v3 = c4.next()) v3 = f3(a4, v3.value, l4), v3 !== null && (s4 = o3(v3, s4, g4), d3 === null ? u4 = v3 : d3.sibling = v3, d3 = v3);
        return L2 && na2(a4, g4), u4;
      }
      for (h3 = r3(h3); !v3.done; g4++, v3 = c4.next()) v3 = m3(h3, a4, g4, v3.value, l4), v3 !== null && (e3 && (_4 = v3.alternate, _4 !== null && h3.delete(_4.key === null ? g4 : _4.key)), s4 = o3(v3, s4, g4), d3 === null ? u4 = v3 : d3.sibling = v3, d3 = v3);
      return e3 && h3.forEach(function(e4) {
        return t3(a4, e4);
      }), L2 && na2(a4, g4), u4;
    }
    function _3(e4, r4, o4, c4) {
      if (typeof o4 == `object` && o4 && o4.type === ae2 && o4.key === null && o4.props.ref === void 0 && (o4 = o4.props.children), typeof o4 == `object` && o4) {
        switch (o4.$$typeof) {
          case re2:
            a: {
              for (var l4 = o4.key; r4 !== null; ) {
                if (r4.key === l4) {
                  if (l4 = o4.type, l4 === ae2) {
                    if (r4.tag === 7) {
                      n3(e4, r4.sibling), c4 = a3(r4, o4.props.children), fo2(c4, o4), c4.return = e4, e4 = c4;
                      break a;
                    }
                  } else if (r4.elementType === l4 || typeof l4 == `object` && l4 && l4.$$typeof === me2 && io2(l4) === r4.type) {
                    n3(e4, r4.sibling), c4 = a3(r4, o4.props), fo2(c4, o4), c4.return = e4, e4 = c4;
                    break a;
                  }
                  n3(e4, r4);
                  break;
                }
                t3(e4, r4), r4 = r4.sibling;
              }
              o4.type === ae2 ? (c4 = Hi2(o4.props.children, e4.mode, c4, o4.key), fo2(c4, o4), c4.return = e4, e4 = c4) : (c4 = Vi2(o4.type, o4.key, o4.props, null, e4.mode, c4), fo2(c4, o4), c4.return = e4, e4 = c4);
            }
            return s3(e4);
          case ie2:
            a: {
              for (l4 = o4.key; r4 !== null; ) {
                if (r4.key === l4) {
                  if (r4.tag === 4 && r4.stateNode.containerInfo === o4.containerInfo && r4.stateNode.implementation === o4.implementation) {
                    n3(e4, r4.sibling), c4 = a3(r4, o4.children || []), c4.return = e4, e4 = c4;
                    break a;
                  }
                  n3(e4, r4);
                  break;
                }
                t3(e4, r4), r4 = r4.sibling;
              }
              c4 = Gi2(o4, e4.mode, c4), c4.return = e4, e4 = c4;
            }
            return s3(e4);
          case me2:
            return o4 = io2(o4), _3(e4, r4, o4, c4);
        }
        if (we2(o4)) return h2(e4, r4, o4, c4);
        if (xe2(o4)) {
          if (l4 = xe2(o4), typeof l4 != `function`) throw Error(i2(150));
          return o4 = l4.call(o4), g3(e4, r4, o4, c4);
        }
        if (typeof o4.then == `function`) return _3(e4, r4, uo2(o4), c4);
        if (o4.$$typeof === le2) return _3(e4, r4, ka2(e4, o4), c4);
        po2(e4, o4);
      }
      return typeof o4 == `string` && o4 !== `` || typeof o4 == `number` || typeof o4 == `bigint` ? (o4 = `` + o4, r4 !== null && r4.tag === 6 ? (n3(e4, r4.sibling), c4 = a3(r4, o4), c4.return = e4, e4 = c4) : (n3(e4, r4), c4 = Ui2(o4, e4.mode, c4), c4.return = e4, e4 = c4), s3(e4)) : n3(e4, r4);
    }
    return function(e4, t4, n4, r4) {
      try {
        lo2 = 0;
        var i3 = _3(e4, t4, n4, r4);
        return co2 = null, i3;
      } catch (t5) {
        if (t5 === Qa2 || t5 === eo2) throw t5;
        var a4 = Li2(29, t5, null, e4.mode);
        return a4.lanes = r4, a4.return = e4, a4;
      }
    };
  }
  var ho2 = mo2(true), go2 = mo2(false), _o2 = false;
  function vo2(e3) {
    e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function yo2(e3, t3) {
    e3 = e3.updateQueue, t3.updateQueue === e3 && (t3.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, callbacks: null });
  }
  function bo2(e3) {
    return { lane: e3, tag: 0, payload: null, callback: null, next: null };
  }
  function xo2(e3, t3, n3) {
    var r3 = e3.updateQueue;
    if (r3 === null) return null;
    if (r3 = r3.shared, G2 & 2) {
      var i3 = r3.pending;
      return i3 === null ? t3.next = t3 : (t3.next = i3.next, i3.next = t3), r3.pending = t3, t3 = Pi2(e3), Ni2(e3, null, n3), t3;
    }
    return Ai2(e3, r3, t3, n3), Pi2(e3);
  }
  function So2(e3, t3, n3) {
    if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n3 & 4194048)) {
      var r3 = t3.lanes;
      r3 &= e3.pendingLanes, n3 |= r3, t3.lanes = n3, St2(e3, n3);
    }
  }
  function Co2(e3, t3) {
    var n3 = e3.updateQueue, r3 = e3.alternate;
    if (r3 !== null && (r3 = r3.updateQueue, n3 === r3)) {
      var i3 = null, a3 = null;
      if (n3 = n3.firstBaseUpdate, n3 !== null) {
        do {
          var o3 = { lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: null, next: null };
          a3 === null ? i3 = a3 = o3 : a3 = a3.next = o3, n3 = n3.next;
        } while (n3 !== null);
        a3 === null ? i3 = a3 = t3 : a3 = a3.next = t3;
      } else i3 = a3 = t3;
      n3 = { baseState: r3.baseState, firstBaseUpdate: i3, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e3.updateQueue = n3;
    } else e3 = n3.lastBaseUpdate, e3 === null ? n3.firstBaseUpdate = t3 : e3.next = t3, n3.lastBaseUpdate = t3;
  }
  var wo2 = false;
  function To2() {
    if (wo2) {
      var e3 = Ua2;
      if (e3 !== null) throw e3;
    }
  }
  function Eo2(e3, t3, n3, r3) {
    wo2 = false;
    var i3 = e3.updateQueue;
    _o2 = false;
    var a3 = i3.firstBaseUpdate, o3 = i3.lastBaseUpdate, s3 = i3.shared.pending;
    if (s3 !== null) {
      i3.shared.pending = null;
      var c3 = s3, l3 = c3.next;
      c3.next = null, o3 === null ? a3 = l3 : o3.next = l3, o3 = c3;
      var u3 = e3.alternate;
      u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o3 && (s3 === null ? u3.firstBaseUpdate = l3 : s3.next = l3, u3.lastBaseUpdate = c3));
    }
    if (a3 !== null) {
      var d2 = i3.baseState;
      o3 = 0, u3 = l3 = c3 = null, s3 = a3;
      do {
        var f3 = s3.lane & -536870913, p2 = f3 !== s3.lane;
        if (p2 ? (J2 & f3) === f3 : (r3 & f3) === f3) {
          f3 !== 0 && f3 === Ha2 && (wo2 = true), u3 !== null && (u3 = u3.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
          a: {
            var m3 = e3, h2 = s3;
            f3 = t3;
            var g3 = n3;
            switch (h2.tag) {
              case 1:
                if (m3 = h2.payload, typeof m3 == `function`) {
                  d2 = m3.call(g3, d2, f3);
                  break a;
                }
                d2 = m3;
                break a;
              case 3:
                m3.flags = m3.flags & -65537 | 128;
              case 0:
                if (m3 = h2.payload, f3 = typeof m3 == `function` ? m3.call(g3, d2, f3) : m3, f3 == null) break a;
                d2 = T2({}, d2, f3);
                break a;
              case 2:
                _o2 = true;
            }
          }
          f3 = s3.callback, f3 !== null && (e3.flags |= 64, p2 && (e3.flags |= 8192), p2 = i3.callbacks, p2 === null ? i3.callbacks = [f3] : p2.push(f3));
        } else p2 = { lane: f3, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u3 === null ? (l3 = u3 = p2, c3 = d2) : u3 = u3.next = p2, o3 |= f3;
        if (s3 = s3.next, s3 === null) {
          if (s3 = i3.shared.pending, s3 === null) break;
          p2 = s3, s3 = p2.next, p2.next = null, i3.lastBaseUpdate = p2, i3.shared.pending = null;
        }
      } while (1);
      u3 === null && (c3 = d2), i3.baseState = c3, i3.firstBaseUpdate = l3, i3.lastBaseUpdate = u3, a3 === null && (i3.shared.lanes = 0), od2 |= o3, e3.lanes = o3, e3.memoizedState = d2;
    }
  }
  function Do2(e3, t3) {
    if (typeof e3 != `function`) throw Error(i2(191, e3));
    e3.call(t3);
  }
  function Oo2(e3, t3) {
    var n3 = e3.callbacks;
    if (n3 !== null) for (e3.callbacks = null, e3 = 0; e3 < n3.length; e3++) Do2(n3[e3], t3);
  }
  var ko2 = Oe2(null), Ao2 = Oe2(0);
  function jo2(e3, t3) {
    e3 = ad2, O2(Ao2, e3), O2(ko2, t3), ad2 = e3 | t3.baseLanes;
  }
  function Mo2() {
    O2(Ao2, ad2), O2(ko2, ko2.current);
  }
  function No2() {
    ad2 = Ao2.current, ke2(ko2), ke2(Ao2);
  }
  var Po2 = Oe2(null), Fo2 = null;
  function Io2(e3) {
    var t3 = e3.alternate;
    O2(Vo2, Vo2.current & 1), O2(Po2, e3), Fo2 === null && (t3 === null || ko2.current !== null || t3.memoizedState !== null) && (Fo2 = e3);
  }
  function Lo2(e3) {
    O2(Vo2, Vo2.current), O2(Po2, e3), Fo2 === null && (Fo2 = e3);
  }
  function Ro2(e3) {
    e3.tag === 22 ? (O2(Vo2, Vo2.current), O2(Po2, e3), Fo2 === null && (Fo2 = e3)) : zo2();
  }
  function zo2() {
    O2(Vo2, Vo2.current), O2(Po2, Po2.current);
  }
  function Bo2(e3) {
    ke2(Po2), Fo2 === e3 && (Fo2 = null), ke2(Vo2);
  }
  var Vo2 = Oe2(0);
  function Ho2(e3, t3) {
    O2(Po2, Po2.current), O2(Vo2, t3);
  }
  function Uo2(e3) {
    ke2(Vo2), ke2(Po2), Fo2 === e3 && (Fo2 = null);
  }
  function Wo2(e3) {
    for (var t3 = e3; t3 !== null; ) {
      if (t3.tag === 13) {
        var n3 = t3.memoizedState;
        if (n3 !== null && (n3 = n3.dehydrated, n3 === null || om(n3) || sm(n3))) return t3;
      } else if (t3.tag === 19 && t3.memoizedProps.revealOrder !== `independent`) {
        if (t3.flags & 128) return t3;
      } else if (t3.child !== null) {
        t3.child.return = t3, t3 = t3.child;
        continue;
      }
      if (t3 === e3) break;
      for (; t3.sibling === null; ) {
        if (t3.return === null || t3.return === e3) return null;
        t3 = t3.return;
      }
      t3.sibling.return = t3.return, t3 = t3.sibling;
    }
    return null;
  }
  var Go2 = 0, R2 = null, z2 = null, Ko2 = null, qo2 = false, Jo2 = false, Yo2 = false, Xo2 = 0, Zo2 = 0, Qo2 = null, $o2 = 0;
  function B2() {
    throw Error(i2(321));
  }
  function es2(e3, t3) {
    if (t3 === null) return false;
    for (var n3 = 0; n3 < t3.length && n3 < e3.length; n3++) if (!Kr2(e3[n3], t3[n3])) return false;
    return true;
  }
  function ts2(e3, t3, n3, r3, i3, a3) {
    return Go2 = a3, R2 = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, E2.H = e3 === null || e3.memoizedState === null ? vc2 : yc2, Yo2 = false, a3 = n3(r3, i3), Yo2 = false, Jo2 && (a3 = rs2(t3, n3, r3, i3)), ns2(e3), a3;
  }
  function ns2(e3) {
    E2.H = _c2;
    var t3 = z2 !== null && z2.next !== null;
    if (Go2 = 0, Ko2 = z2 = R2 = null, qo2 = false, Zo2 = 0, Qo2 = null, t3) throw Error(i2(300));
    e3 === null || Ic2 || (e3 = e3.dependencies, e3 !== null && Ea2(e3) && (Ic2 = true));
  }
  function rs2(e3, t3, n3, r3) {
    R2 = e3;
    var a3 = 0;
    do {
      if (Jo2 && (Qo2 = null), Zo2 = 0, Jo2 = false, 25 <= a3) throw Error(i2(301));
      if (a3 += 1, Ko2 = z2 = null, e3.updateQueue != null) {
        var o3 = e3.updateQueue;
        o3.lastEffect = null, o3.events = null, o3.stores = null, o3.memoCache != null && (o3.memoCache.index = 0);
      }
      E2.H = bc2, o3 = t3(n3, r3);
    } while (Jo2);
    return o3;
  }
  function is2() {
    var e3 = E2.H, t3 = e3.useState()[0];
    return t3 = typeof t3.then == `function` ? ds2(t3) : t3, e3 = e3.useState()[0], (z2 === null ? null : z2.memoizedState) !== e3 && (R2.flags |= 1024), t3;
  }
  function as2() {
    var e3 = Xo2 !== 0;
    return Xo2 = 0, e3;
  }
  function os2(e3, t3, n3) {
    t3.updateQueue = e3.updateQueue, t3.flags &= -2053, e3.lanes &= ~n3;
  }
  function ss2(e3) {
    if (qo2) {
      for (e3 = e3.memoizedState; e3 !== null; ) {
        var t3 = e3.queue;
        t3 !== null && (t3.pending = null), e3 = e3.next;
      }
      qo2 = false;
    }
    Go2 = 0, Ko2 = z2 = R2 = null, Jo2 = false, Zo2 = Xo2 = 0, Qo2 = null;
  }
  function cs2() {
    var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ko2 === null ? R2.memoizedState = Ko2 = e3 : Ko2 = Ko2.next = e3, Ko2;
  }
  function ls2() {
    if (z2 === null) {
      var e3 = R2.alternate;
      e3 = e3 === null ? null : e3.memoizedState;
    } else e3 = z2.next;
    var t3 = Ko2 === null ? R2.memoizedState : Ko2.next;
    if (t3 !== null) Ko2 = t3, z2 = e3;
    else {
      if (e3 === null) throw R2.alternate === null ? Error(i2(467)) : Error(i2(310));
      z2 = e3, e3 = { memoizedState: z2.memoizedState, baseState: z2.baseState, baseQueue: z2.baseQueue, queue: z2.queue, next: null }, Ko2 === null ? R2.memoizedState = Ko2 = e3 : Ko2 = Ko2.next = e3;
    }
    return Ko2;
  }
  function us2() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds2(e3) {
    var t3 = Zo2;
    return Zo2 += 1, Qo2 === null && (Qo2 = []), e3 = ro2(Qo2, e3, t3), t3 = R2, (Ko2 === null ? t3.memoizedState : Ko2.next) === null && (t3 = t3.alternate, E2.H = t3 === null || t3.memoizedState === null ? vc2 : yc2), e3;
  }
  function fs2(e3) {
    if (typeof e3 == `object` && e3) {
      if (typeof e3.then == `function`) return ds2(e3);
      if (e3.$$typeof === ye2) return;
      if (e3.$$typeof === le2) return Oa2(e3);
    }
    throw Error(i2(438, String(e3)));
  }
  function ps2(e3) {
    var t3 = null, n3 = R2.updateQueue;
    if (n3 !== null && (t3 = n3.memoCache), t3 == null) {
      var r3 = R2.alternate;
      r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e4) {
        return e4.slice();
      }), index: 0 })));
    }
    if (t3 ??= { data: [], index: 0 }, n3 === null && (n3 = us2(), R2.updateQueue = n3), n3.memoCache = t3, n3 = t3.data[t3.index], n3 === void 0) for (n3 = t3.data[t3.index] = Array(e3), r3 = 0; r3 < e3; r3++) n3[r3] = _e2;
    return t3.index++, n3;
  }
  function ms2(e3, t3) {
    return typeof t3 == `function` ? t3(e3) : t3;
  }
  function hs2(e3) {
    return gs2(ls2(), z2, e3);
  }
  function gs2(e3, t3, n3) {
    var r3 = e3.queue;
    if (r3 === null) throw Error(i2(311));
    r3.lastRenderedReducer = n3;
    var a3 = e3.baseQueue, o3 = r3.pending;
    if (o3 !== null) {
      if (a3 !== null) {
        var s3 = a3.next;
        a3.next = o3.next, o3.next = s3;
      }
      t3.baseQueue = a3 = o3, r3.pending = null;
    }
    if (o3 = e3.baseState, a3 === null) e3.memoizedState = o3;
    else {
      t3 = a3.next;
      var c3 = s3 = null, l3 = null, u3 = t3, d2 = false;
      do {
        var f3 = u3.lane & -536870913;
        if (f3 === u3.lane ? (Go2 & f3) === f3 : (J2 & f3) === f3) {
          var p2 = u3.revertLane;
          if (p2 === 0) l3 !== null && (l3 = l3.next = { lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }), f3 === Ha2 && (d2 = true);
          else if ((Go2 & p2) === p2) {
            u3 = u3.next, p2 === Ha2 && (d2 = true);
            continue;
          } else f3 = { lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = f3, s3 = o3) : l3 = l3.next = f3, R2.lanes |= p2, od2 |= p2;
          f3 = u3.action, Yo2 && n3(o3, f3), o3 = u3.hasEagerState ? u3.eagerState : n3(o3, f3);
        } else p2 = { lane: f3, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = p2, s3 = o3) : l3 = l3.next = p2, R2.lanes |= f3, od2 |= f3;
        u3 = u3.next;
      } while (u3 !== null && u3 !== t3);
      if (l3 === null ? s3 = o3 : l3.next = c3, !Kr2(o3, e3.memoizedState) && (Ic2 = true, d2 && (n3 = Ua2, n3 !== null))) throw n3;
      e3.memoizedState = o3, e3.baseState = s3, e3.baseQueue = l3, r3.lastRenderedState = o3;
    }
    return a3 === null && (r3.lanes = 0), [e3.memoizedState, r3.dispatch];
  }
  function _s2(e3) {
    var t3 = ls2(), n3 = t3.queue;
    if (n3 === null) throw Error(i2(311));
    n3.lastRenderedReducer = e3;
    var r3 = n3.dispatch, a3 = n3.pending, o3 = t3.memoizedState;
    if (a3 !== null) {
      n3.pending = null;
      var s3 = a3 = a3.next;
      do
        o3 = e3(o3, s3.action), s3 = s3.next;
      while (s3 !== a3);
      Kr2(o3, t3.memoizedState) || (Ic2 = true), t3.memoizedState = o3, t3.baseQueue === null && (t3.baseState = o3), n3.lastRenderedState = o3;
    }
    return [o3, r3];
  }
  function vs2(e3, t3, n3) {
    var r3 = R2, a3 = ls2(), o3 = L2;
    if (o3) {
      if (n3 === void 0) throw Error(i2(407));
      n3 = n3();
    } else n3 = t3();
    var s3 = !Kr2((z2 || a3).memoizedState, n3);
    if (s3 && (a3.memoizedState = n3, Ic2 = true), a3 = a3.queue, Us2(xs2.bind(null, r3, a3, e3), [e3]), e3 = a3.getSnapshot !== t3 || s3 || Ko2 !== null && !!(Ko2.memoizedState.tag & 1), Rs2(e3 ? 9 : 8, { destroy: void 0 }, bs2.bind(null, r3, a3, n3, t3), null), e3) {
      if (r3.flags |= 2048, K2 === null) throw Error(i2(349));
      o3 || Go2 & 127 || ys2(r3, t3, n3);
    }
    return n3;
  }
  function ys2(e3, t3, n3) {
    e3.flags |= 16384, e3 = { getSnapshot: t3, value: n3 }, t3 = R2.updateQueue, t3 === null ? (t3 = us2(), R2.updateQueue = t3, t3.stores = [e3]) : (n3 = t3.stores, n3 === null ? t3.stores = [e3] : n3.push(e3));
  }
  function bs2(e3, t3, n3, r3) {
    t3.value = n3, t3.getSnapshot = r3, Ss2(t3) && Cs2(e3);
  }
  function xs2(e3, t3, n3) {
    return n3(function() {
      Ss2(t3) && Cs2(e3);
    });
  }
  function Ss2(e3) {
    var t3 = e3.getSnapshot;
    e3 = e3.value;
    try {
      var n3 = t3();
      return !Kr2(e3, n3);
    } catch {
      return true;
    }
  }
  function Cs2(e3) {
    var t3 = Mi2(e3, 2);
    t3 !== null && Pd2(t3, e3, 2);
  }
  function ws2(e3) {
    var t3 = cs2();
    if (typeof e3 == `function`) {
      var n3 = e3;
      if (e3 = n3(), Yo2) {
        it2(true);
        try {
          n3();
        } finally {
          it2(false);
        }
      }
    }
    return t3.memoizedState = t3.baseState = e3, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ms2, lastRenderedState: e3 }, t3;
  }
  function Ts2(e3, t3, n3, r3) {
    return e3.baseState = n3, gs2(e3, z2, typeof r3 == `function` ? r3 : ms2);
  }
  function Es2(e3, t3, n3, r3, a3) {
    if (mc2(e3)) throw Error(i2(485));
    if (e3 = t3.action, e3 !== null) {
      var o3 = { payload: a3, action: e3, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e4) {
        o3.listeners.push(e4);
      } };
      E2.T === null ? o3.isTransition = false : n3(true), r3(o3), n3 = t3.pending, n3 === null ? (o3.next = t3.pending = o3, Ds2(t3, o3)) : (o3.next = n3.next, t3.pending = n3.next = o3);
    }
  }
  function Ds2(e3, t3) {
    var n3 = t3.action, r3 = t3.payload, i3 = e3.state;
    if (t3.isTransition) {
      var a3 = E2.T, o3 = {};
      o3.types = a3 === null ? null : a3.types, E2.T = o3;
      try {
        var s3 = n3(i3, r3), c3 = E2.S;
        c3 !== null && c3(o3, s3), Os2(e3, t3, s3);
      } catch (n4) {
        As2(e3, t3, n4);
      } finally {
        a3 !== null && o3.types !== null && (a3.types = o3.types), E2.T = a3;
      }
    } else try {
      a3 = n3(i3, r3), Os2(e3, t3, a3);
    } catch (n4) {
      As2(e3, t3, n4);
    }
  }
  function Os2(e3, t3, n3) {
    typeof n3 == `object` && n3 && typeof n3.then == `function` ? n3.then(function(n4) {
      ks2(e3, t3, n4);
    }, function(n4) {
      return As2(e3, t3, n4);
    }) : ks2(e3, t3, n3);
  }
  function ks2(e3, t3, n3) {
    t3.status = `fulfilled`, t3.value = n3, js2(t3), e3.state = n3, t3 = e3.pending, t3 !== null && (n3 = t3.next, n3 === t3 ? e3.pending = null : (n3 = n3.next, t3.next = n3, Ds2(e3, n3)));
  }
  function As2(e3, t3, n3) {
    var r3 = e3.pending;
    if (e3.pending = null, r3 !== null) {
      r3 = r3.next;
      do
        t3.status = `rejected`, t3.reason = n3, js2(t3), t3 = t3.next;
      while (t3 !== r3);
    }
    e3.action = null;
  }
  function js2(e3) {
    e3 = e3.listeners;
    for (var t3 = 0; t3 < e3.length; t3++) (0, e3[t3])();
  }
  function Ms2(e3, t3) {
    return t3;
  }
  function Ns2(e3, t3) {
    if (L2) {
      var n3 = K2.formState;
      if (n3 !== null) {
        a: {
          var r3 = R2;
          if (L2) {
            if (I2) {
              b: {
                for (var i3 = I2, a3 = la2; i3.nodeType !== 8; ) if (!a3 || (i3 = lm(i3.nextSibling), i3 === null)) {
                  i3 = null;
                  break b;
                }
                a3 = i3.data, i3 = a3 === `F!` || a3 === `F` ? i3 : null;
              }
              if (i3) {
                I2 = lm(i3.nextSibling), r3 = i3.data === `F!`;
                break a;
              }
            }
            da2(r3);
          }
          r3 = false;
        }
        r3 && (t3 = n3[0]);
      }
    }
    return n3 = cs2(), n3.memoizedState = n3.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms2, lastRenderedState: t3 }, n3.queue = r3, n3 = dc2.bind(null, R2, r3), r3.dispatch = n3, r3 = ws2(false), a3 = pc2.bind(null, R2, false, r3.queue), r3 = cs2(), i3 = { state: t3, dispatch: null, action: e3, pending: null }, r3.queue = i3, n3 = Es2.bind(null, R2, i3, a3, n3), i3.dispatch = n3, r3.memoizedState = e3, [t3, n3, false];
  }
  function Ps2(e3) {
    return Fs2(ls2(), z2, e3);
  }
  function Fs2(e3, t3, n3) {
    if (t3 = gs2(e3, t3, Ms2)[0], e3 = hs2(ms2)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
      var r3 = ds2(t3);
    } catch (e4) {
      throw e4 === Qa2 ? eo2 : e4;
    }
    else r3 = t3;
    t3 = ls2();
    var i3 = t3.queue, a3 = i3.dispatch;
    return n3 !== t3.memoizedState && (R2.flags |= 2048, Rs2(9, { destroy: void 0 }, Is2.bind(null, i3, n3), null)), [r3, a3, e3];
  }
  function Is2(e3, t3) {
    e3.action = t3;
  }
  function Ls2(e3) {
    var t3 = ls2(), n3 = z2;
    if (n3 !== null) return Fs2(t3, n3, e3);
    ls2(), t3 = t3.memoizedState, n3 = ls2();
    var r3 = n3.queue.dispatch;
    return n3.memoizedState = e3, [t3, r3, false];
  }
  function Rs2(e3, t3, n3, r3) {
    return e3 = { tag: e3, create: n3, deps: r3, inst: t3, next: null }, t3 = R2.updateQueue, t3 === null && (t3 = us2(), R2.updateQueue = t3), n3 = t3.lastEffect, n3 === null ? t3.lastEffect = e3.next = e3 : (r3 = n3.next, n3.next = e3, e3.next = r3, t3.lastEffect = e3), e3;
  }
  function zs2() {
    return ls2().memoizedState;
  }
  function Bs2(e3, t3, n3, r3) {
    var i3 = cs2();
    R2.flags |= e3, i3.memoizedState = Rs2(1 | t3, { destroy: void 0 }, n3, r3 === void 0 ? null : r3);
  }
  function Vs2(e3, t3, n3, r3) {
    var i3 = ls2();
    r3 = r3 === void 0 ? null : r3;
    var a3 = i3.memoizedState.inst;
    z2 !== null && r3 !== null && es2(r3, z2.memoizedState.deps) ? i3.memoizedState = Rs2(t3, a3, n3, r3) : (R2.flags |= e3, i3.memoizedState = Rs2(1 | t3, a3, n3, r3));
  }
  function Hs2(e3, t3) {
    Bs2(8390656, 8, e3, t3);
  }
  function Us2(e3, t3) {
    Vs2(2048, 8, e3, t3);
  }
  function Ws2(e3) {
    R2.flags |= 4;
    var t3 = R2.updateQueue;
    if (t3 === null) t3 = us2(), R2.updateQueue = t3, t3.events = [e3];
    else {
      var n3 = t3.events;
      n3 === null ? t3.events = [e3] : n3.push(e3);
    }
  }
  function Gs2(e3) {
    var t3 = ls2().memoizedState;
    return Ws2({ ref: t3, nextImpl: e3 }), function() {
      if (G2 & 2) throw Error(i2(440));
      return t3.impl.apply(void 0, arguments);
    };
  }
  function Ks2(e3, t3) {
    return Vs2(4, 2, e3, t3);
  }
  function qs2(e3, t3) {
    return Vs2(4, 4, e3, t3);
  }
  function Js2(e3, t3) {
    if (typeof t3 == `function`) {
      e3 = e3();
      var n3 = t3(e3);
      return function() {
        typeof n3 == `function` ? n3() : t3(null);
      };
    }
    if (t3 != null) return e3 = e3(), t3.current = e3, function() {
      t3.current = null;
    };
  }
  function Ys2(e3, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e3]), Vs2(4, 4, Js2.bind(null, t3, e3), n3);
  }
  function Xs2() {
  }
  function Zs2(e3, t3) {
    var n3 = ls2();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n3.memoizedState;
    return t3 !== null && es2(t3, r3[1]) ? r3[0] : (n3.memoizedState = [e3, t3], e3);
  }
  function Qs2(e3, t3) {
    var n3 = ls2();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n3.memoizedState;
    if (t3 !== null && es2(t3, r3[1])) return r3[0];
    if (r3 = e3(), Yo2) {
      it2(true);
      try {
        e3();
      } finally {
        it2(false);
      }
    }
    return n3.memoizedState = [r3, t3], r3;
  }
  function $s2(e3, t3, n3) {
    return n3 === void 0 || Go2 & 1073741824 && !(J2 & 261930) ? e3.memoizedState = t3 : (e3.memoizedState = n3, e3 = Md2(), R2.lanes |= e3, od2 |= e3, n3);
  }
  function ec2(e3, t3, n3, r3) {
    return Kr2(n3, t3) ? n3 : ko2.current === null ? !(Go2 & 106) || Go2 & 1073741824 && !(J2 & 261930) ? (Ic2 = true, e3.memoizedState = n3) : (e3 = Md2(), R2.lanes |= e3, od2 |= e3, t3) : (e3 = $s2(e3, n3, r3), Kr2(e3, t3) || (Ic2 = true), e3);
  }
  function tc2(e3, t3, n3, r3, i3) {
    var a3 = D2.p;
    D2.p = a3 !== 0 && 8 > a3 ? a3 : 8;
    var o3 = E2.T, s3 = {};
    s3.types = o3 === null ? null : o3.types, E2.T = s3, pc2(e3, false, t3, n3);
    try {
      var c3 = i3(), l3 = E2.S;
      l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? fc2(e3, t3, Ka2(c3, r3), jd2(e3)) : fc2(e3, t3, r3, jd2(e3));
    } catch (n4) {
      fc2(e3, t3, { then: function() {
      }, status: `rejected`, reason: n4 }, jd2());
    } finally {
      D2.p = a3, o3 !== null && s3.types !== null && (o3.types = s3.types), E2.T = o3;
    }
  }
  function nc2() {
  }
  function rc2(e3, t3, n3, r3) {
    if (e3.tag !== 5) throw Error(i2(476));
    var a3 = ic2(e3).queue;
    tc2(e3, a3, t3, Te2, n3 === null ? nc2 : function() {
      return ac2(e3), n3(r3);
    });
  }
  function ic2(e3) {
    var t3 = e3.memoizedState;
    if (t3 !== null) return t3;
    t3 = { memoizedState: Te2, baseState: Te2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ms2, lastRenderedState: Te2 }, next: null };
    var n3 = {};
    return t3.next = { memoizedState: n3, baseState: n3, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ms2, lastRenderedState: n3 }, next: null }, e3.memoizedState = t3, e3 = e3.alternate, e3 !== null && (e3.memoizedState = t3), t3;
  }
  function ac2(e3) {
    var t3 = ic2(e3);
    t3.next === null && (t3 = e3.alternate.memoizedState), fc2(e3, t3.next.queue, {}, jd2());
  }
  function oc2() {
    return Oa2(sh);
  }
  function sc2() {
    return ls2().memoizedState;
  }
  function cc2() {
    return ls2().memoizedState;
  }
  function lc2(e3) {
    for (var t3 = e3.return; t3 !== null; ) {
      switch (t3.tag) {
        case 24:
        case 3:
          var n3 = jd2();
          e3 = bo2(n3);
          var r3 = xo2(t3, e3, n3);
          r3 !== null && (Pd2(r3, t3, n3), So2(r3, t3, n3)), t3 = { cache: Fa2() }, e3.payload = t3;
          return;
      }
      t3 = t3.return;
    }
  }
  function uc2(e3, t3, n3) {
    var r3 = jd2();
    n3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null }, mc2(e3) ? hc2(t3, n3) : (n3 = ji2(e3, t3, n3, r3), n3 !== null && (Pd2(n3, e3, r3), gc2(n3, t3, r3)));
  }
  function dc2(e3, t3, n3) {
    fc2(e3, t3, n3, jd2());
  }
  function fc2(e3, t3, n3, r3) {
    var i3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null };
    if (mc2(e3)) hc2(t3, i3);
    else {
      var a3 = e3.alternate;
      if (e3.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
        var o3 = t3.lastRenderedState, s3 = a3(o3, n3);
        if (i3.hasEagerState = true, i3.eagerState = s3, Kr2(s3, o3)) return Ai2(e3, t3, i3, 0), K2 === null && ki2(), false;
      } catch {
      }
      if (n3 = ji2(e3, t3, i3, r3), n3 !== null) return Pd2(n3, e3, r3), gc2(n3, t3, r3), true;
    }
    return false;
  }
  function pc2(e3, t3, n3, r3) {
    if (r3 = { lane: 2, revertLane: Pf2(), gesture: null, action: r3, hasEagerState: false, eagerState: null, next: null }, mc2(e3)) {
      if (t3) throw Error(i2(479));
    } else t3 = ji2(e3, n3, r3, 2), t3 !== null && Pd2(t3, e3, 2);
  }
  function mc2(e3) {
    var t3 = e3.alternate;
    return e3 === R2 || t3 !== null && t3 === R2;
  }
  function hc2(e3, t3) {
    Jo2 = qo2 = true;
    var n3 = e3.pending;
    n3 === null ? t3.next = t3 : (t3.next = n3.next, n3.next = t3), e3.pending = t3;
  }
  function gc2(e3, t3, n3) {
    if (n3 & 4194048) {
      var r3 = t3.lanes;
      r3 &= e3.pendingLanes, n3 |= r3, t3.lanes = n3, St2(e3, n3);
    }
  }
  var _c2 = { readContext: Oa2, use: fs2, useCallback: B2, useContext: B2, useEffect: B2, useImperativeHandle: B2, useLayoutEffect: B2, useInsertionEffect: B2, useMemo: B2, useReducer: B2, useRef: B2, useState: B2, useDebugValue: B2, useDeferredValue: B2, useTransition: B2, useSyncExternalStore: B2, useId: B2, useHostTransitionStatus: B2, useFormState: B2, useActionState: B2, useOptimistic: B2, useMemoCache: B2, useCacheRefresh: B2, useEffectEvent: B2 }, vc2 = { readContext: Oa2, use: fs2, useCallback: function(e3, t3) {
    return cs2().memoizedState = [e3, t3 === void 0 ? null : t3], e3;
  }, useContext: Oa2, useEffect: Hs2, useImperativeHandle: function(e3, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e3]), Bs2(4194308, 4, Js2.bind(null, t3, e3), n3);
  }, useLayoutEffect: function(e3, t3) {
    return Bs2(4194308, 4, e3, t3);
  }, useInsertionEffect: function(e3, t3) {
    Bs2(4, 2, e3, t3);
  }, useMemo: function(e3, t3) {
    var n3 = cs2();
    t3 = t3 === void 0 ? null : t3;
    var r3 = e3();
    if (Yo2) {
      it2(true);
      try {
        e3();
      } finally {
        it2(false);
      }
    }
    return n3.memoizedState = [r3, t3], r3;
  }, useReducer: function(e3, t3, n3) {
    var r3 = cs2();
    if (n3 !== void 0) {
      var i3 = n3(t3);
      if (Yo2) {
        it2(true);
        try {
          n3(t3);
        } finally {
          it2(false);
        }
      }
    } else i3 = t3;
    return r3.memoizedState = r3.baseState = i3, e3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: i3 }, r3.queue = e3, e3 = e3.dispatch = uc2.bind(null, R2, e3), [r3.memoizedState, e3];
  }, useRef: function(e3) {
    var t3 = cs2();
    return e3 = { current: e3 }, t3.memoizedState = e3;
  }, useState: function(e3) {
    e3 = ws2(e3);
    var t3 = e3.queue, n3 = dc2.bind(null, R2, t3);
    return t3.dispatch = n3, [e3.memoizedState, n3];
  }, useDebugValue: Xs2, useDeferredValue: function(e3, t3) {
    return $s2(cs2(), e3, t3);
  }, useTransition: function() {
    var e3 = ws2(false);
    return e3 = tc2.bind(null, R2, e3.queue, true, false), cs2().memoizedState = e3, [false, e3];
  }, useSyncExternalStore: function(e3, t3, n3) {
    var r3 = R2, a3 = cs2();
    if (L2) {
      if (n3 === void 0) throw Error(i2(407));
      n3 = n3();
    } else {
      if (n3 = t3(), K2 === null) throw Error(i2(349));
      J2 & 127 || ys2(r3, t3, n3);
    }
    a3.memoizedState = n3;
    var o3 = { value: n3, getSnapshot: t3 };
    return a3.queue = o3, Hs2(xs2.bind(null, r3, o3, e3), [e3]), r3.flags |= 2048, Rs2(9, { destroy: void 0 }, bs2.bind(null, r3, o3, n3, t3), null), n3;
  }, useId: function() {
    var e3 = cs2(), t3 = K2.identifierPrefix;
    if (L2) {
      var n3 = ta2, r3 = F2;
      n3 = (r3 & ~(1 << 32 - at2(r3) - 1)).toString(32) + n3, t3 = `_` + t3 + `R_` + n3, n3 = Xo2++, 0 < n3 && (t3 += `H` + n3.toString(32)), t3 += `_`;
    } else n3 = $o2++, t3 = `_` + t3 + `r_` + n3.toString(32) + `_`;
    return e3.memoizedState = t3;
  }, useHostTransitionStatus: oc2, useFormState: Ns2, useActionState: Ns2, useOptimistic: function(e3) {
    var t3 = cs2();
    t3.memoizedState = t3.baseState = e3;
    var n3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t3.queue = n3, t3 = pc2.bind(null, R2, true, n3), n3.dispatch = t3, [e3, t3];
  }, useMemoCache: ps2, useCacheRefresh: function() {
    return cs2().memoizedState = lc2.bind(null, R2);
  }, useEffectEvent: function(e3) {
    var t3 = cs2(), n3 = { impl: e3 };
    return t3.memoizedState = n3, function() {
      if (G2 & 2) throw Error(i2(440));
      return n3.impl.apply(void 0, arguments);
    };
  } }, yc2 = { readContext: Oa2, use: fs2, useCallback: Zs2, useContext: Oa2, useEffect: Us2, useImperativeHandle: Ys2, useInsertionEffect: Ks2, useLayoutEffect: qs2, useMemo: Qs2, useReducer: hs2, useRef: zs2, useState: function() {
    return hs2(ms2);
  }, useDebugValue: Xs2, useDeferredValue: function(e3, t3) {
    return ec2(ls2(), z2.memoizedState, e3, t3);
  }, useTransition: function() {
    var e3 = hs2(ms2)[0], t3 = ls2().memoizedState;
    return [typeof e3 == `boolean` ? e3 : ds2(e3), t3];
  }, useSyncExternalStore: vs2, useId: sc2, useHostTransitionStatus: oc2, useFormState: Ps2, useActionState: Ps2, useOptimistic: function(e3, t3) {
    return Ts2(ls2(), z2, e3, t3);
  }, useMemoCache: ps2, useCacheRefresh: cc2, useEffectEvent: Gs2 }, bc2 = { readContext: Oa2, use: fs2, useCallback: Zs2, useContext: Oa2, useEffect: Us2, useImperativeHandle: Ys2, useInsertionEffect: Ks2, useLayoutEffect: qs2, useMemo: Qs2, useReducer: _s2, useRef: zs2, useState: function() {
    return _s2(ms2);
  }, useDebugValue: Xs2, useDeferredValue: function(e3, t3) {
    var n3 = ls2();
    return z2 === null ? $s2(n3, e3, t3) : ec2(n3, z2.memoizedState, e3, t3);
  }, useTransition: function() {
    var e3 = _s2(ms2)[0], t3 = ls2().memoizedState;
    return [typeof e3 == `boolean` ? e3 : ds2(e3), t3];
  }, useSyncExternalStore: vs2, useId: sc2, useHostTransitionStatus: oc2, useFormState: Ls2, useActionState: Ls2, useOptimistic: function(e3, t3) {
    var n3 = ls2();
    return z2 === null ? (n3.baseState = e3, [e3, n3.queue.dispatch]) : Ts2(n3, z2, e3, t3);
  }, useMemoCache: ps2, useCacheRefresh: cc2, useEffectEvent: Gs2 };
  function xc2(e3, t3, n3, r3) {
    t3 = e3.memoizedState, n3 = n3(r3, t3), n3 = n3 == null ? t3 : T2({}, t3, n3), e3.memoizedState = n3, e3.lanes === 0 && (e3.updateQueue.baseState = n3);
  }
  var Sc2 = { enqueueSetState: function(e3, t3, n3) {
    e3 = e3._reactInternals;
    var r3 = jd2(), i3 = bo2(r3);
    i3.payload = t3, n3 != null && (i3.callback = n3), t3 = xo2(e3, i3, r3), t3 !== null && (Pd2(t3, e3, r3), So2(t3, e3, r3));
  }, enqueueReplaceState: function(e3, t3, n3) {
    e3 = e3._reactInternals;
    var r3 = jd2(), i3 = bo2(r3);
    i3.tag = 1, i3.payload = t3, n3 != null && (i3.callback = n3), t3 = xo2(e3, i3, r3), t3 !== null && (Pd2(t3, e3, r3), So2(t3, e3, r3));
  }, enqueueForceUpdate: function(e3, t3) {
    e3 = e3._reactInternals;
    var n3 = jd2(), r3 = bo2(n3);
    r3.tag = 2, t3 != null && (r3.callback = t3), t3 = xo2(e3, r3, n3), t3 !== null && (Pd2(t3, e3, n3), So2(t3, e3, n3));
  } };
  function Cc2(e3, t3, n3, r3, i3, a3, o3) {
    return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == `function` ? e3.shouldComponentUpdate(r3, a3, o3) : t3.prototype && t3.prototype.isPureReactComponent ? !qr2(n3, r3) || !qr2(i3, a3) : true;
  }
  function wc2(e3, t3, n3, r3) {
    e3 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n3, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n3, r3), t3.state !== e3 && Sc2.enqueueReplaceState(t3, t3.state, null);
  }
  function Tc2(e3, t3) {
    var n3 = t3;
    if (`ref` in t3) for (var r3 in n3 = {}, t3) r3 !== `ref` && (n3[r3] = t3[r3]);
    if (e3 = e3.defaultProps) for (var i3 in n3 === t3 && (n3 = T2({}, n3)), e3) n3[i3] === void 0 && (n3[i3] = e3[i3]);
    return n3;
  }
  function Ec2(e3) {
    Ti2(e3);
  }
  function Dc2(e3) {
    console.error(e3);
  }
  function Oc2(e3) {
    Ti2(e3);
  }
  function kc2(e3, t3) {
    try {
      var n3 = e3.onUncaughtError;
      n3(t3.value, { componentStack: t3.stack });
    } catch (e4) {
      setTimeout(function() {
        throw e4;
      });
    }
  }
  function Ac2(e3, t3, n3) {
    try {
      var r3 = e3.onCaughtError;
      r3(n3.value, { componentStack: n3.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
    } catch (e4) {
      setTimeout(function() {
        throw e4;
      });
    }
  }
  function jc2(e3, t3, n3) {
    return n3 = bo2(n3), n3.tag = 3, n3.payload = { element: null }, n3.callback = function() {
      kc2(e3, t3);
    }, n3;
  }
  function Mc2(e3) {
    return e3 = bo2(e3), e3.tag = 3, e3;
  }
  function Nc2(e3, t3, n3, r3) {
    var i3 = n3.type.getDerivedStateFromError;
    if (typeof i3 == `function`) {
      var a3 = r3.value;
      e3.payload = function() {
        return i3(a3);
      }, e3.callback = function() {
        Ac2(t3, n3, r3);
      };
    }
    var o3 = n3.stateNode;
    o3 !== null && typeof o3.componentDidCatch == `function` && (e3.callback = function() {
      Ac2(t3, n3, r3), typeof i3 != `function` && (vd2 === null ? vd2 = /* @__PURE__ */ new Set([this]) : vd2.add(this));
      var e4 = r3.stack;
      this.componentDidCatch(r3.value, { componentStack: e4 === null ? `` : e4 });
    });
  }
  function Pc2(e3, t3, n3, r3, a3) {
    if (n3.flags |= 32768, typeof r3 == `object` && r3 && typeof r3.then == `function`) {
      if (t3 = n3.alternate, t3 !== null && Ta2(t3, n3, a3, true), n3 = Po2.current, n3 !== null) {
        switch (n3.tag) {
          case 31:
          case 13:
          case 19:
            return Fo2 === null ? Kd2() : n3.alternate === null && X2 === 0 && (X2 = 3), n3.flags &= -257, n3.flags |= 65536, n3.lanes = a3, r3 === to2 ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? n3.updateQueue = /* @__PURE__ */ new Set([r3]) : t3.add(r3), mf2(e3, r3, a3)), false;
          case 22:
            return n3.flags |= 65536, r3 === to2 ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r3]) }, n3.updateQueue = t3) : (n3 = t3.retryQueue, n3 === null ? t3.retryQueue = /* @__PURE__ */ new Set([r3]) : n3.add(r3)), mf2(e3, r3, a3)), false;
        }
        throw Error(i2(435, n3.tag));
      }
      return mf2(e3, r3, a3), Kd2(), false;
    }
    if (L2) return t3 = Po2.current, t3 === null ? (r3 !== ua2 && (t3 = Error(i2(423), { cause: r3 }), _a2(qi2(t3, n3))), e3 = e3.current.alternate, e3.flags |= 65536, a3 &= -a3, e3.lanes |= a3, r3 = qi2(r3, n3), a3 = jc2(e3.stateNode, r3, a3), Co2(e3, a3), X2 !== 4 && (X2 = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = a3, r3 !== ua2 && (e3 = Error(i2(422), { cause: r3 }), _a2(qi2(e3, n3)))), false;
    var o3 = Error(i2(520), { cause: r3 });
    if (o3 = qi2(o3, n3), dd2 === null ? dd2 = [o3] : dd2.push(o3), X2 !== 4 && (X2 = 2), t3 === null) return true;
    r3 = qi2(r3, n3), n3 = t3;
    do {
      switch (n3.tag) {
        case 3:
          return n3.flags |= 65536, e3 = a3 & -a3, n3.lanes |= e3, e3 = jc2(n3.stateNode, r3, e3), Co2(n3, e3), false;
        case 1:
          if (t3 = n3.type, o3 = n3.stateNode, !(n3.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || o3 !== null && typeof o3.componentDidCatch == `function` && (vd2 === null || !vd2.has(o3)))) return n3.flags |= 65536, a3 &= -a3, n3.lanes |= a3, a3 = Mc2(a3), Nc2(a3, e3, n3, r3), Co2(n3, a3), false;
          break;
        case 22:
          if (n3.memoizedState !== null) return n3.flags |= 65536, false;
      }
      n3 = n3.return;
    } while (n3 !== null);
    return false;
  }
  var Fc2 = Error(i2(461)), Ic2 = false;
  function Lc2(e3, t3, n3, r3) {
    t3.child = e3 === null ? go2(t3, null, n3, r3) : ho2(t3, e3.child, n3, r3);
  }
  function Rc2(e3, t3, n3, r3, i3) {
    n3 = n3.render;
    var a3 = t3.ref;
    if (`ref` in r3) {
      var o3 = {};
      for (var s3 in r3) s3 !== `ref` && (o3[s3] = r3[s3]);
    } else o3 = r3;
    return Da2(t3), r3 = ts2(e3, t3, n3, o3, a3, i3), s3 = as2(), e3 !== null && !Ic2 ? (os2(e3, t3, i3), fl2(e3, t3, i3)) : (L2 && s3 && ia2(t3), t3.flags |= 1, Lc2(e3, t3, r3, i3), t3.child);
  }
  function zc2(e3, t3, n3, r3, i3) {
    if (e3 === null) {
      var a3 = n3.type;
      return typeof a3 == `function` && !Ri2(a3) && a3.defaultProps === void 0 && n3.compare === null ? (t3.tag = 15, t3.type = a3, Bc2(e3, t3, a3, r3, i3)) : (e3 = Vi2(n3.type, null, r3, t3, t3.mode, i3), e3.ref = t3.ref, e3.return = t3, t3.child = e3);
    }
    if (a3 = e3.child, !pl2(e3, i3)) {
      var o3 = a3.memoizedProps;
      if (n3 = n3.compare, n3 = n3 === null ? qr2 : n3, n3(o3, r3) && e3.ref === t3.ref) return fl2(e3, t3, i3);
    }
    return t3.flags |= 1, e3 = zi2(a3, r3), e3.ref = t3.ref, e3.return = t3, t3.child = e3;
  }
  function Bc2(e3, t3, n3, r3, i3) {
    if (e3 !== null) {
      var a3 = e3.memoizedProps;
      if (qr2(a3, r3) && e3.ref === t3.ref) {
        if (Ic2 = false, t3.pendingProps = r3 = a3, pl2(e3, i3)) e3.flags & 131072 && (Ic2 = true);
        else return t3.lanes = e3.lanes, fl2(e3, t3, i3);
      }
    }
    return Jc2(e3, t3, n3, r3, i3);
  }
  function Vc2(e3, t3, n3, r3) {
    var i3 = r3.children, a3 = e3 === null ? null : e3.memoizedState;
    if (e3 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
      if (t3.flags & 128) {
        if (a3 = a3 === null ? n3 : a3.baseLanes | n3, e3 !== null) {
          for (r3 = t3.child = e3.child, i3 = 0; r3 !== null; ) i3 = i3 | r3.lanes | r3.childLanes, r3 = r3.sibling;
          r3 = i3 & ~a3;
        } else r3 = 0, t3.child = null;
        return Uc2(e3, t3, a3, n3, r3);
      }
      if (n3 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e3 !== null && Xa2(t3, a3 === null ? null : a3.cachePool), a3 === null ? Mo2() : jo2(t3, a3), Ro2(t3);
      else return r3 = t3.lanes = 536870912, Uc2(e3, t3, a3 === null ? n3 : a3.baseLanes | n3, n3, r3);
    } else a3 === null ? (e3 !== null && Xa2(t3, null), Mo2(), zo2()) : (Xa2(t3, a3.cachePool), jo2(t3, a3), zo2(), t3.memoizedState = null);
    return Lc2(e3, t3, i3, n3), t3.child;
  }
  function Hc2(e3, t3) {
    return e3 !== null && e3.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
  }
  function Uc2(e3, t3, n3, r3, i3) {
    var a3 = Ya2();
    return a3 = a3 === null ? null : { parent: Pa2._currentValue, pool: a3 }, t3.memoizedState = { baseLanes: n3, cachePool: a3 }, e3 !== null && Xa2(t3, null), Mo2(), Ro2(t3), e3 !== null && Ta2(e3, t3, r3, true), t3.childLanes = i3, null;
  }
  function Wc2(e3, t3) {
    return t3 = rl2({ mode: t3.mode, children: t3.children }, e3.mode), t3.ref = e3.ref, e3.child = t3, t3.return = e3, t3;
  }
  function Gc2(e3, t3, n3) {
    return ho2(t3, e3.child, null, n3), e3 = Wc2(t3, t3.pendingProps), e3.flags |= 2, Bo2(t3), t3.memoizedState = null, e3;
  }
  function Kc2(e3, t3, n3) {
    var r3 = t3.pendingProps, a3 = !!(t3.flags & 128);
    if (t3.flags &= -129, e3 === null) {
      if (L2) {
        if (r3.mode === `hidden`) return e3 = Wc2(t3, r3), t3.lanes = 536870912, e3.memoizedState = { baseLanes: 0, cachePool: null }, Hc2(null, e3);
        if (Lo2(t3), (e3 = I2) ? (e3 = am(e3, la2), e3 = e3 !== null && e3.data === `&` ? e3 : null, e3 !== null && (t3.memoizedState = { dehydrated: e3, treeContext: ea2 === null ? null : { id: F2, overflow: ta2 }, retryLane: 536870912, hydrationErrors: null }, n3 = Wi2(e3), n3.return = t3, t3.child = n3, sa2 = t3, I2 = null)) : e3 = null, e3 === null) throw da2(t3);
        return t3.lanes = 536870912, null;
      }
      return Wc2(t3, r3);
    }
    var o3 = e3.memoizedState;
    if (o3 !== null) {
      var s3 = o3.dehydrated;
      if (Lo2(t3), a3) {
        if (t3.flags & 256) t3.flags &= -257, t3 = Gc2(e3, t3, n3);
        else if (t3.memoizedState !== null) t3.child = e3.child, t3.flags |= 128, t3 = null;
        else throw Error(i2(558));
      } else if (Ic2 || Ta2(e3, t3, n3, false), a3 = (n3 & e3.childLanes) !== 0, Ic2 || a3) {
        if (ko2.current === null) {
          if (r3 = K2, r3 !== null && (s3 = Ct2(r3, n3), s3 !== 0 && s3 !== o3.retryLane)) throw o3.retryLane = s3, Mi2(e3, s3), Pd2(r3, e3, s3), Fc2;
          Kd2();
        }
        t3 = Gc2(e3, t3, n3);
      } else e3 = o3.treeContext, I2 = lm(s3.nextSibling), sa2 = t3, L2 = true, ca2 = null, la2 = false, e3 !== null && oa2(t3, e3), t3 = Wc2(t3, r3), t3.flags |= 134221824;
      return t3;
    }
    return e3 = zi2(e3.child, { mode: r3.mode, children: r3.children }), e3.ref = t3.ref, t3.child = e3, e3.return = t3, e3;
  }
  function qc2(e3, t3) {
    var n3 = t3.ref;
    if (n3 === null) e3 !== null && e3.ref !== null && (t3.flags |= 4194816);
    else {
      if (typeof n3 != `function` && typeof n3 != `object`) throw Error(i2(284));
      (e3 === null || e3.ref !== n3) && (t3.flags |= 4194816);
    }
  }
  function Jc2(e3, t3, n3, r3, i3) {
    return Da2(t3), n3 = ts2(e3, t3, n3, r3, void 0, i3), r3 = as2(), e3 !== null && !Ic2 ? (os2(e3, t3, i3), fl2(e3, t3, i3)) : (L2 && r3 && ia2(t3), t3.flags |= 1, Lc2(e3, t3, n3, i3), t3.child);
  }
  function Yc2(e3, t3, n3, r3, i3, a3) {
    return Da2(t3), t3.updateQueue = null, n3 = rs2(t3, r3, n3, i3), ns2(e3), r3 = as2(), e3 !== null && !Ic2 ? (os2(e3, t3, a3), fl2(e3, t3, a3)) : (L2 && r3 && ia2(t3), t3.flags |= 1, Lc2(e3, t3, n3, a3), t3.child);
  }
  function Xc2(e3, t3, n3, r3, i3) {
    if (Da2(t3), t3.stateNode === null) {
      var a3 = Fi2, o3 = n3.contextType;
      typeof o3 == `object` && o3 && (a3 = Oa2(o3)), a3 = new n3(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = Sc2, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, vo2(t3), o3 = n3.contextType, a3.context = typeof o3 == `object` && o3 ? Oa2(o3) : Fi2, a3.state = t3.memoizedState, o3 = n3.getDerivedStateFromProps, typeof o3 == `function` && (xc2(t3, n3, o3, r3), a3.state = t3.memoizedState), typeof n3.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o3 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o3 !== a3.state && Sc2.enqueueReplaceState(a3, a3.state, null), Eo2(t3, r3, a3, i3), To2(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
    } else if (e3 === null) {
      a3 = t3.stateNode;
      var s3 = t3.memoizedProps, c3 = Tc2(n3, s3);
      a3.props = c3;
      var l3 = a3.context, u3 = n3.contextType;
      o3 = Fi2, typeof u3 == `object` && u3 && (o3 = Oa2(u3));
      var d2 = n3.getDerivedStateFromProps;
      u3 = typeof d2 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u3 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l3 !== o3) && wc2(t3, a3, r3, o3), _o2 = false;
      var f3 = t3.memoizedState;
      a3.state = f3, Eo2(t3, r3, a3, i3), To2(), l3 = t3.memoizedState, s3 || f3 !== l3 || _o2 ? (typeof d2 == `function` && (xc2(t3, n3, d2, r3), l3 = t3.memoizedState), (c3 = _o2 || Cc2(t3, n3, c3, r3, f3, l3, o3)) ? (u3 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l3), a3.props = r3, a3.state = l3, a3.context = o3, r3 = c3) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
    } else {
      a3 = t3.stateNode, yo2(e3, t3), o3 = t3.memoizedProps, u3 = Tc2(n3, o3), a3.props = u3, d2 = t3.pendingProps, f3 = a3.context, l3 = n3.contextType, c3 = Fi2, typeof l3 == `object` && l3 && (c3 = Oa2(l3)), s3 = n3.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o3 !== d2 || f3 !== c3) && wc2(t3, a3, r3, c3), _o2 = false, f3 = t3.memoizedState, a3.state = f3, Eo2(t3, r3, a3, i3), To2();
      var p2 = t3.memoizedState;
      o3 !== d2 || f3 !== p2 || _o2 || e3 !== null && e3.dependencies !== null && Ea2(e3.dependencies) ? (typeof s3 == `function` && (xc2(t3, n3, s3, r3), p2 = t3.memoizedState), (u3 = _o2 || Cc2(t3, n3, u3, r3, f3, p2, c3) || e3 !== null && e3.dependencies !== null && Ea2(e3.dependencies)) ? (l3 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p2, c3), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p2, c3)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p2), a3.props = r3, a3.state = p2, a3.context = c3, r3 = u3) : (typeof a3.componentDidUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), r3 = false);
    }
    return a3 = r3, qc2(e3, t3), r3 = !!(t3.flags & 128), a3 || r3 ? (a3 = t3.stateNode, n3 = r3 && typeof n3.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e3 !== null && r3 ? (t3.child = ho2(t3, e3.child, null, i3), t3.child = ho2(t3, null, n3, i3)) : Lc2(e3, t3, n3, i3), t3.memoizedState = a3.state, e3 = t3.child) : e3 = fl2(e3, t3, i3), e3;
  }
  function Zc2(e3, t3, n3, r3) {
    return ha2(), t3.flags |= 256, Lc2(e3, t3, n3, r3), t3.child;
  }
  var Qc2 = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function $c2(e3) {
    return { baseLanes: e3, cachePool: Za2() };
  }
  function el2(e3, t3, n3) {
    return e3 = e3 === null ? 0 : e3.childLanes & ~n3, t3 && (e3 |= ld2), e3;
  }
  function tl2(e3, t3, n3) {
    var r3 = t3.pendingProps, i3 = false, a3 = !!(t3.flags & 128), o3;
    if ((o3 = a3) || (o3 = e3 !== null && e3.memoizedState === null ? false : !!(Vo2.current & 2)), o3 && (i3 = true, t3.flags &= -129), o3 = !!(t3.flags & 32), t3.flags &= -33, e3 === null) {
      if (L2) {
        if (i3 ? Io2(t3) : zo2(), (e3 = I2) ? (e3 = am(e3, la2), e3 = e3 !== null && e3.data !== `&` ? e3 : null, e3 !== null && (t3.memoizedState = { dehydrated: e3, treeContext: ea2 === null ? null : { id: F2, overflow: ta2 }, retryLane: 536870912, hydrationErrors: null }, n3 = Wi2(e3), n3.return = t3, t3.child = n3, sa2 = t3, I2 = null)) : e3 = null, e3 === null) throw da2(t3);
        return t3.lanes = sm(e3) ? 32 : 536870912, null;
      }
      return a3 = r3.children, r3 = r3.fallback, i3 ? (zo2(), i3 = t3.mode, a3 = rl2({ mode: `hidden`, children: a3 }, i3), r3 = Hi2(r3, i3, n3, null), a3.return = t3, r3.return = t3, a3.sibling = r3, t3.child = a3, r3 = t3.child, r3.memoizedState = $c2(n3), r3.childLanes = el2(e3, o3, n3), t3.memoizedState = Qc2, Hc2(null, r3)) : (Io2(t3), nl2(t3, a3));
    }
    var s3 = e3.memoizedState;
    if (s3 !== null) {
      var c3 = s3.dehydrated;
      if (c3 !== null) return al2(e3, t3, a3, o3, r3, c3, s3, n3);
    }
    return i3 ? (zo2(), i3 = r3.fallback, a3 = t3.mode, s3 = e3.child, c3 = s3.sibling, r3 = zi2(s3, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = s3.subtreeFlags & 1206910976, c3 === null ? (i3 = Hi2(i3, a3, n3, null), i3.flags |= 2) : i3 = zi2(c3, i3), i3.return = t3, r3.return = t3, r3.sibling = i3, t3.child = r3, Hc2(null, r3), r3 = t3.child, i3 = e3.child.memoizedState, i3 === null ? i3 = $c2(n3) : (a3 = i3.cachePool, a3 === null ? a3 = Za2() : (s3 = Pa2._currentValue, a3 = a3.parent === s3 ? a3 : { parent: s3, pool: s3 }), i3 = { baseLanes: i3.baseLanes | n3, cachePool: a3 }), r3.memoizedState = i3, r3.childLanes = el2(e3, o3, n3), t3.memoizedState = Qc2, Hc2(e3.child, r3)) : (Io2(t3), n3 = e3.child, e3 = n3.sibling, n3 = zi2(n3, { mode: `visible`, children: r3.children }), n3.return = t3, n3.sibling = null, e3 !== null && (o3 = t3.deletions, o3 === null ? (t3.deletions = [e3], t3.flags |= 16) : o3.push(e3)), t3.child = n3, t3.memoizedState = null, n3);
  }
  function nl2(e3, t3) {
    return t3 = rl2({ mode: `visible`, children: t3 }, e3.mode), t3.return = e3, e3.child = t3;
  }
  function rl2(e3, t3) {
    return e3 = Li2(22, e3, null, t3), e3.lanes = 0, e3;
  }
  function il2(e3, t3, n3) {
    return ho2(t3, e3.child, null, n3), e3 = nl2(t3, t3.pendingProps.children), e3.flags |= 2, t3.memoizedState = null, e3;
  }
  function al2(e3, t3, n3, r3, a3, o3, s3, c3) {
    if (n3) return t3.flags & 256 ? (Io2(t3), t3.flags &= -257, il2(e3, t3, c3)) : t3.memoizedState === null ? (zo2(), o3 = a3.fallback, s3 = t3.mode, a3 = rl2({ mode: `visible`, children: a3.children }, s3), o3 = Hi2(o3, s3, c3, null), o3.flags |= 2, a3.return = t3, o3.return = t3, a3.sibling = o3, t3.child = a3, ho2(t3, e3.child, null, c3), a3 = t3.child, a3.memoizedState = $c2(c3), a3.childLanes = el2(e3, r3, c3), t3.memoizedState = Qc2, Hc2(null, a3)) : (zo2(), t3.child = e3.child, t3.flags |= 128, null);
    if (Io2(t3), sm(o3)) {
      if (r3 = o3.nextSibling && o3.nextSibling.dataset, r3) var l3 = r3.dgst;
      return r3 = l3, r3 !== `` && (a3 = Error(i2(419)), a3.stack = ``, a3.digest = r3, _a2({ value: a3, source: null, stack: null })), il2(e3, t3, c3);
    }
    if (Ic2 || Ta2(e3, t3, c3, false), r3 = (c3 & e3.childLanes) !== 0, Ic2 || r3) {
      if (ko2.current !== null) return il2(e3, t3, c3);
      if (r3 = K2, r3 !== null && (a3 = Ct2(r3, c3), a3 !== 0 && a3 !== s3.retryLane)) throw s3.retryLane = a3, Mi2(e3, a3), Pd2(r3, e3, a3), Fc2;
      return om(o3) || Kd2(), il2(e3, t3, c3);
    }
    return om(o3) ? (t3.flags |= 192, t3.child = e3.child, null) : (e3 = s3.treeContext, I2 = lm(o3.nextSibling), sa2 = t3, L2 = true, ca2 = null, la2 = false, e3 !== null && oa2(t3, e3), t3 = nl2(t3, a3.children), t3.flags |= 134221824, t3);
  }
  function ol2(e3, t3, n3) {
    e3.lanes |= t3;
    var r3 = e3.alternate;
    r3 !== null && (r3.lanes |= t3), Ca2(e3.return, t3, n3);
  }
  function sl2(e3) {
    for (var t3 = null; e3 !== null; ) {
      var n3 = e3.alternate;
      n3 !== null && Wo2(n3) === null && (t3 = e3), e3 = e3.sibling;
    }
    return t3;
  }
  function cl2(e3, t3, n3, r3, i3, a3) {
    var o3 = e3.memoizedState;
    o3 === null ? e3.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n3, tailMode: i3, treeForkCount: a3 } : (o3.isBackwards = t3, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r3, o3.tail = n3, o3.tailMode = i3, o3.treeForkCount = a3);
  }
  function ll2(e3) {
    var t3 = e3.child;
    for (e3.child = null; t3 !== null; ) {
      var n3 = t3.sibling;
      t3.sibling = e3.child, e3.child = t3, t3 = n3;
    }
  }
  function ul2(e3, t3, n3) {
    var r3 = t3.pendingProps, i3 = r3.revealOrder, a3 = r3.tail;
    r3 = r3.children;
    var o3 = Vo2.current;
    if (t3.flags & 128) return Ho2(t3, o3), null;
    var s3 = !!(o3 & 2);
    if (s3 ? (o3 = o3 & 1 | 2, t3.flags |= 128) : o3 &= 1, Ho2(t3, o3), i3 === `backwards` && e3 !== null ? (ll2(e3), Lc2(e3, t3, r3, n3), ll2(e3)) : Lc2(e3, t3, r3, n3), r3 = L2 ? Zi2 : 0, !s3 && e3 !== null && e3.flags & 128) a: for (e3 = t3.child; e3 !== null; ) {
      if (e3.tag === 13) e3.memoizedState !== null && ol2(e3, n3, t3);
      else if (e3.tag === 19) ol2(e3, n3, t3);
      else if (e3.child !== null) {
        e3.child.return = e3, e3 = e3.child;
        continue;
      }
      if (e3 === t3) break a;
      for (; e3.sibling === null; ) {
        if (e3.return === null || e3.return === t3) break a;
        e3 = e3.return;
      }
      e3.sibling.return = e3.return, e3 = e3.sibling;
    }
    switch (i3) {
      case `backwards`:
        n3 = sl2(t3.child), n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null, ll2(t3)), cl2(t3, true, i3, null, a3, r3);
        break;
      case `unstable_legacy-backwards`:
        for (n3 = null, i3 = t3.child, t3.child = null; i3 !== null; ) {
          if (e3 = i3.alternate, e3 !== null && Wo2(e3) === null) {
            t3.child = i3;
            break;
          }
          e3 = i3.sibling, i3.sibling = n3, n3 = i3, i3 = e3;
        }
        cl2(t3, true, n3, null, a3, r3);
        break;
      case `together`:
        cl2(t3, false, null, null, void 0, r3);
        break;
      case `independent`:
        t3.memoizedState = null;
        break;
      default:
        n3 = sl2(t3.child), n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null), cl2(t3, false, i3, n3, a3, r3);
    }
    return t3.child;
  }
  function dl2(e3, t3, n3) {
    var r3 = t3.pendingProps;
    return xa2(t3, t3.type, r3.value), Lc2(e3, t3, r3.children, n3), t3.child;
  }
  function fl2(e3, t3, n3) {
    if (e3 !== null && (t3.dependencies = e3.dependencies), od2 |= t3.lanes, (n3 & t3.childLanes) === 0) {
      if (e3 !== null) {
        if (Ta2(e3, t3, n3, false), (n3 & t3.childLanes) === 0) return null;
      } else return null;
    }
    if (e3 !== null && t3.child !== e3.child) throw Error(i2(153));
    if (t3.child !== null) {
      for (e3 = t3.child, n3 = zi2(e3, e3.pendingProps), t3.child = n3, n3.return = t3; e3.sibling !== null; ) e3 = e3.sibling, n3 = n3.sibling = zi2(e3, e3.pendingProps), n3.return = t3;
      n3.sibling = null;
    }
    return t3.child;
  }
  function pl2(e3, t3) {
    return (e3.lanes & t3) !== 0 || (e3 = e3.dependencies, !!(e3 !== null && Ea2(e3)));
  }
  function ml2(e3, t3, n3) {
    switch (t3.tag) {
      case 3:
        Ne2(t3, t3.stateNode.containerInfo), xa2(t3, Pa2, e3.memoizedState.cache), ha2();
        break;
      case 27:
      case 5:
        A2(t3);
        break;
      case 4:
        Ne2(t3, t3.stateNode.containerInfo);
        break;
      case 10:
        xa2(t3, t3.type, t3.memoizedProps.value);
        break;
      case 31:
        if (t3.memoizedState !== null) return t3.flags |= 128, Lo2(t3), null;
        break;
      case 13:
        var r3 = t3.memoizedState;
        if (r3 !== null) {
          if (r3.dehydrated !== null) return Io2(t3), t3.flags |= 128, null;
          r3 = Ta2(e3, t3, n3, false);
          var i3 = t3.child.childLanes;
          return r3 || (n3 & i3) !== 0 ? tl2(e3, t3, n3) : (Io2(t3), e3 = fl2(e3, t3, n3), e3 === null ? null : e3.sibling);
        }
        Io2(t3);
        break;
      case 19:
        if (t3.flags & 128) return ul2(e3, t3, n3);
        if (i3 = !!(e3.flags & 128), r3 = (n3 & t3.childLanes) !== 0, r3 ||= (Ta2(e3, t3, n3, false), (n3 & t3.childLanes) !== 0), i3) {
          if (r3) return ul2(e3, t3, n3);
          t3.flags |= 128;
        }
        if (i3 = t3.memoizedState, i3 !== null && (i3.rendering = null, i3.tail = null, i3.lastEffect = null), Ho2(t3, Vo2.current), r3) break;
        return null;
      case 22:
        return t3.lanes = 0, Vc2(e3, t3, n3, t3.pendingProps);
      case 24:
        xa2(t3, Pa2, e3.memoizedState.cache);
    }
    return fl2(e3, t3, n3);
  }
  function hl2(e3, t3, n3) {
    if (e3 !== null) {
      if (e3.memoizedProps !== t3.pendingProps) Ic2 = true;
      else {
        if (!pl2(e3, n3) && !(t3.flags & 128)) return Ic2 = false, ml2(e3, t3, n3);
        Ic2 = !!(e3.flags & 131072);
      }
    } else Ic2 = false, L2 && t3.flags & 1048576 && ra2(t3, Zi2, t3.index);
    switch (t3.lanes = 0, t3.tag) {
      case 16:
        a: {
          var r3 = t3.pendingProps;
          if (e3 = io2(t3.elementType), t3.type = e3, typeof e3 == `function`) Ri2(e3) ? (r3 = Tc2(e3, r3), t3.tag = 1, t3 = Xc2(null, t3, e3, r3, n3)) : (t3.tag = 0, t3 = Jc2(null, t3, e3, r3, n3));
          else {
            if (e3 != null) {
              var a3 = e3.$$typeof;
              if (a3 === ue2) {
                t3.tag = 11, t3 = Rc2(null, t3, e3, r3, n3);
                break a;
              }
              if (a3 === pe2) {
                t3.tag = 14, t3 = zc2(null, t3, e3, r3, n3);
                break a;
              }
              if (a3 === le2) {
                t3.tag = 10, t3.type = e3, t3 = dl2(null, t3, n3);
                break a;
              }
            }
            throw t3 = Ce2(e3) || e3, Error(i2(306, t3, ``));
          }
        }
        return t3;
      case 0:
        return Jc2(e3, t3, t3.type, t3.pendingProps, n3);
      case 1:
        return r3 = t3.type, a3 = Tc2(r3, t3.pendingProps), Xc2(e3, t3, r3, a3, n3);
      case 3:
        a: {
          if (Ne2(t3, t3.stateNode.containerInfo), e3 === null) throw Error(i2(387));
          r3 = t3.pendingProps;
          var o3 = t3.memoizedState;
          a3 = o3.element, yo2(e3, t3), Eo2(t3, r3, null, n3);
          var s3 = t3.memoizedState;
          if (r3 = s3.cache, xa2(t3, Pa2, r3), r3 !== o3.cache && wa2(t3, [Pa2], n3, true), To2(), r3 = s3.element, o3.isDehydrated) {
            if (o3 = { element: r3, isDehydrated: false, cache: s3.cache }, t3.updateQueue.baseState = o3, t3.memoizedState = o3, t3.flags & 256) {
              t3 = Zc2(e3, t3, r3, n3);
              break a;
            }
            if (r3 !== a3) {
              a3 = qi2(Error(i2(424)), t3), _a2(a3), t3 = Zc2(e3, t3, r3, n3);
              break a;
            }
            switch (e3 = t3.stateNode.containerInfo, e3.nodeType) {
              case 9:
                e3 = e3.body;
                break;
              default:
                e3 = e3.nodeName === `HTML` ? e3.ownerDocument.body : e3;
            }
            for (I2 = lm(e3.firstChild), sa2 = t3, L2 = true, ca2 = null, la2 = true, n3 = go2(t3, null, r3, n3), t3.child = n3; n3; ) n3.flags = n3.flags & -3 | 134221824, n3 = n3.sibling;
          } else {
            if (ha2(), r3 === a3) {
              t3 = fl2(e3, t3, n3);
              break a;
            }
            Lc2(e3, t3, r3, n3);
          }
          t3 = t3.child;
        }
        return t3;
      case 26:
        return qc2(e3, t3), e3 === null ? (n3 = Nm(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n3 : L2 || (t3.stateNode = fp2(t3.type, t3.pendingProps, Me2.current, t3)) : t3.memoizedState = Nm(t3.type, e3.memoizedProps, t3.pendingProps, e3.memoizedState), null;
      case 27:
        return A2(t3), e3 === null && L2 && (r3 = t3.stateNode = hm(t3.type, t3.pendingProps, Me2.current), sa2 = t3, la2 = true, a3 = I2, Sp2(t3.type) ? (um = a3, I2 = lm(r3.firstChild)) : I2 = a3), Lc2(e3, t3, t3.pendingProps.children, n3), qc2(e3, t3), e3 === null && (t3.flags |= 4194304), t3.child;
      case 5:
        return e3 === null && L2 && ((a3 = r3 = I2) && (r3 = rm(r3, t3.type, t3.pendingProps, la2), r3 === null ? a3 = false : (t3.stateNode = r3, sa2 = t3, I2 = lm(r3.firstChild), la2 = false, a3 = true)), a3 || da2(t3)), A2(t3), a3 = t3.type, o3 = t3.pendingProps, s3 = e3 === null ? null : e3.memoizedProps, r3 = o3.children, pp2(a3, o3) ? r3 = null : s3 !== null && pp2(a3, s3) && (t3.flags |= 32), t3.memoizedState !== null && (a3 = ts2(e3, t3, is2, null, null, n3), sh._currentValue = a3), qc2(e3, t3), Lc2(e3, t3, r3, n3), t3.child;
      case 6:
        return e3 === null && L2 && ((e3 = n3 = I2) && (n3 = im(n3, t3.pendingProps, la2), n3 === null ? e3 = false : (t3.stateNode = n3, sa2 = t3, I2 = null, e3 = true)), e3 || da2(t3)), null;
      case 13:
        return tl2(e3, t3, n3);
      case 4:
        return Ne2(t3, t3.stateNode.containerInfo), r3 = t3.pendingProps, e3 === null ? t3.child = ho2(t3, null, r3, n3) : Lc2(e3, t3, r3, n3), t3.child;
      case 11:
        return Rc2(e3, t3, t3.type, t3.pendingProps, n3);
      case 7:
        return r3 = t3.pendingProps, qc2(e3, t3), Lc2(e3, t3, r3, n3), t3.child;
      case 8:
        return Lc2(e3, t3, t3.pendingProps.children, n3), t3.child;
      case 12:
        return Lc2(e3, t3, t3.pendingProps.children, n3), t3.child;
      case 10:
        return dl2(e3, t3, n3);
      case 9:
        return a3 = t3.type._context, r3 = t3.pendingProps.children, Da2(t3), a3 = Oa2(a3), r3 = r3(a3), t3.flags |= 1, Lc2(e3, t3, r3, n3), t3.child;
      case 14:
        return zc2(e3, t3, t3.type, t3.pendingProps, n3);
      case 15:
        return Bc2(e3, t3, t3.type, t3.pendingProps, n3);
      case 19:
        return ul2(e3, t3, n3);
      case 31:
        return Kc2(e3, t3, n3);
      case 22:
        return Vc2(e3, t3, n3, t3.pendingProps);
      case 24:
        return Da2(t3), r3 = Oa2(Pa2), e3 === null ? (a3 = Ya2(), a3 === null && (a3 = K2, o3 = Fa2(), a3.pooledCache = o3, o3.refCount++, o3 !== null && (a3.pooledCacheLanes |= n3), a3 = o3), t3.memoizedState = { parent: r3, cache: a3 }, vo2(t3), xa2(t3, Pa2, a3)) : ((e3.lanes & n3) !== 0 && (yo2(e3, t3), Eo2(t3, null, null, n3), To2()), a3 = e3.memoizedState, o3 = t3.memoizedState, a3.parent === r3 ? (r3 = o3.cache, xa2(t3, Pa2, r3), r3 !== a3.cache && wa2(t3, [Pa2], n3, true)) : (a3 = { parent: r3, cache: r3 }, t3.memoizedState = a3, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = a3), xa2(t3, Pa2, r3))), Lc2(e3, t3, t3.pendingProps.children, n3), t3.child;
      case 30:
        return t3.stateNode === null && (t3.stateNode = { autoName: null, paired: null, clones: null, ref: null }), r3 = t3.pendingProps, r3.name != null && r3.name !== `auto` ? t3.flags |= e3 === null ? 18882560 : 18874368 : L2 && ia2(t3), e3 !== null && e3.memoizedProps.name !== r3.name ? t3.flags |= 4194816 : qc2(e3, t3), Lc2(e3, t3, r3.children, n3), t3.child;
      case 29:
        throw t3.pendingProps;
    }
    throw Error(i2(156, t3.tag));
  }
  function gl2(e3) {
    e3.flags |= 4;
  }
  function _l2(e3, t3, n3, r3, i3) {
    var a3;
    if ((a3 = !!(e3.mode & 32)) && (a3 = n3 === null ? Jm(t3, r3) : Jm(t3, r3) && (r3.src !== n3.src || r3.srcSet !== n3.srcSet)), a3) {
      if (e3.flags |= 16777216, (i3 & 335544128) === i3) {
        if (e3.stateNode.complete) e3.flags |= 8192;
        else if (Ud2()) e3.flags |= 8192;
        else throw ao2 = to2, $a2;
      }
    } else e3.flags &= -16777217;
  }
  function vl2(e3, t3) {
    if (t3.type !== `stylesheet` || t3.state.loading & 4) e3.flags &= -16777217;
    else if (e3.flags |= 16777216, !Ym(t3)) {
      if (Ud2()) e3.flags |= 8192;
      else throw ao2 = to2, $a2;
    }
  }
  function yl2(e3, t3) {
    t3 !== null && (e3.flags |= 4), e3.flags & 16384 && (t3 = e3.tag === 22 ? 536870912 : _t2(), e3.lanes |= t3, ud2 |= t3);
  }
  function bl2(e3, t3) {
    if (!L2) switch (e3.tailMode) {
      case `visible`:
        break;
      case `collapsed`:
        for (var n3 = e3.tail, r3 = null; n3 !== null; ) n3.alternate !== null && (r3 = n3), n3 = n3.sibling;
        r3 === null ? t3 || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r3.sibling = null;
        break;
      default:
        for (t3 = e3.tail, n3 = null; t3 !== null; ) t3.alternate !== null && (n3 = t3), t3 = t3.sibling;
        n3 === null ? e3.tail = null : n3.sibling = null;
    }
  }
  function V2(e3) {
    var t3 = e3.alternate !== null && e3.alternate.child === e3.child, n3 = 0, r3 = 0;
    if (t3) for (var i3 = e3.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags & 1206910976, r3 |= i3.flags & 1206910976, i3.return = e3, i3 = i3.sibling;
    else for (i3 = e3.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags, r3 |= i3.flags, i3.return = e3, i3 = i3.sibling;
    return e3.subtreeFlags |= r3, e3.childLanes = n3, t3;
  }
  function xl2(e3, t3, n3) {
    var r3 = t3.pendingProps;
    switch (aa2(t3), t3.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return V2(t3), null;
      case 1:
        return V2(t3), null;
      case 3:
        return n3 = t3.stateNode, r3 = null, e3 !== null && (r3 = e3.memoizedState.cache), t3.memoizedState.cache !== r3 && (t3.flags |= 2048), Sa2(Pa2), Pe2(), n3.pendingContext && (n3.context = n3.pendingContext, n3.pendingContext = null), (e3 === null || e3.child === null) && (ma2(t3) ? gl2(t3) : e3 === null || e3.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, ga2())), V2(t3), null;
      case 26:
        var a3 = t3.type, o3 = t3.memoizedState;
        return e3 === null ? (gl2(t3), o3 === null ? (V2(t3), _l2(t3, a3, null, r3, n3)) : (V2(t3), vl2(t3, o3))) : o3 ? o3 === e3.memoizedState ? (V2(t3), t3.flags &= -16777217) : (gl2(t3), V2(t3), vl2(t3, o3)) : (e3 = e3.memoizedProps, e3 !== r3 && gl2(t3), V2(t3), _l2(t3, a3, e3, r3, n3)), null;
      case 27:
        if (Fe2(t3), n3 = Me2.current, a3 = t3.type, e3 !== null && t3.stateNode != null) e3.memoizedProps !== r3 && gl2(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(i2(166));
            return V2(t3), t3.subtreeFlags &= -33554433, null;
          }
          e3 = Ae2.current, ma2(t3) ? fa2(t3, e3) : (e3 = hm(a3, r3, n3), t3.stateNode = e3, gl2(t3));
        }
        return V2(t3), t3.subtreeFlags &= -33554433, null;
      case 5:
        if (Fe2(t3), a3 = t3.type, e3 !== null && t3.stateNode != null) e3.memoizedProps !== r3 && gl2(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(i2(166));
            return V2(t3), t3.subtreeFlags &= -33554433, null;
          }
          if (o3 = Ae2.current, ma2(t3)) fa2(t3, o3);
          else {
            var s3 = lp2(Me2.current);
            switch (o3) {
              case 1:
                o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                break;
              case 2:
                o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                break;
              default:
                switch (a3) {
                  case `svg`:
                    o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                    break;
                  case `math`:
                    o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                    break;
                  case `script`:
                    o3 = s3.createElement(`div`), o3.innerHTML = `<script><\/script>`, o3 = o3.removeChild(o3.firstChild);
                    break;
                  case `select`:
                    o3 = typeof r3.is == `string` ? s3.createElement(`select`, { is: r3.is }) : s3.createElement(`select`), r3.multiple ? o3.multiple = true : r3.size && (o3.size = r3.size);
                    break;
                  default:
                    o3 = typeof r3.is == `string` ? s3.createElement(a3, { is: r3.is }) : s3.createElement(a3);
                }
            }
            o3[kt2] = t3, o3[At2] = r3;
            a: for (s3 = t3.child; s3 !== null; ) {
              if (s3.tag === 5 || s3.tag === 6) o3.appendChild(s3.stateNode);
              else if (s3.tag !== 4 && s3.tag !== 27 && s3.child !== null) {
                s3.child.return = s3, s3 = s3.child;
                continue;
              }
              if (s3 === t3) break a;
              for (; s3.sibling === null; ) {
                if (s3.return === null || s3.return === t3) break a;
                s3 = s3.return;
              }
              s3.sibling.return = s3.return, s3 = s3.sibling;
            }
            t3.stateNode = o3;
            a: switch (np2(o3, a3, r3), a3) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                r3 = !!r3.autoFocus;
                break a;
              case `img`:
                r3 = true;
                break a;
              default:
                r3 = false;
            }
            r3 && gl2(t3);
          }
        }
        return V2(t3), t3.subtreeFlags &= -33554433, _l2(t3, t3.type, e3 === null ? null : e3.memoizedProps, t3.pendingProps, n3), null;
      case 6:
        if (e3 && t3.stateNode != null) e3.memoizedProps !== r3 && gl2(t3);
        else {
          if (typeof r3 != `string` && t3.stateNode === null) throw Error(i2(166));
          if (e3 = Me2.current, ma2(t3)) {
            if (e3 = t3.stateNode, n3 = t3.memoizedProps, r3 = null, a3 = sa2, a3 !== null) switch (a3.tag) {
              case 27:
              case 5:
                r3 = a3.memoizedProps;
            }
            e3[kt2] = t3, e3 = !!(e3.nodeValue === n3 || r3 !== null && true === r3.suppressHydrationWarning || ep2(e3.nodeValue, n3)), e3 || da2(t3, true);
          } else e3 = lp2(e3).createTextNode(r3), e3[kt2] = t3, t3.stateNode = e3;
        }
        return V2(t3), null;
      case 31:
        if (n3 = t3.memoizedState, e3 === null || e3.memoizedState !== null) {
          if (r3 = ma2(t3), n3 !== null) {
            if (e3 === null) {
              if (!r3) throw Error(i2(318));
              if (e3 = t3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(i2(557));
              e3[kt2] = t3;
            } else ha2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            V2(t3), e3 = false;
          } else n3 = ga2(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = n3), e3 = true;
          if (!e3) return t3.flags & 256 ? (Bo2(t3), t3) : (Bo2(t3), null);
          if (t3.flags & 128) throw Error(i2(558));
        }
        return V2(t3), null;
      case 13:
        if (r3 = t3.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
          if (a3 = ma2(t3), r3 !== null && r3.dehydrated !== null) {
            if (e3 === null) {
              if (!a3) throw Error(i2(318));
              if (a3 = t3.memoizedState, a3 = a3 === null ? null : a3.dehydrated, !a3) throw Error(i2(317));
              a3[kt2] = t3;
            } else ha2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            V2(t3), a3 = false;
          } else a3 = ga2(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = a3), a3 = true;
          if (!a3) return t3.flags & 256 ? (Bo2(t3), t3) : (Bo2(t3), null);
        }
        return Bo2(t3), t3.flags & 128 ? (t3.lanes = n3, t3) : (n3 = r3 !== null, e3 = e3 !== null && e3.memoizedState !== null, n3 && (r3 = t3.child, a3 = null, r3.alternate !== null && r3.alternate.memoizedState !== null && r3.alternate.memoizedState.cachePool !== null && (a3 = r3.alternate.memoizedState.cachePool.pool), o3 = null, r3.memoizedState !== null && r3.memoizedState.cachePool !== null && (o3 = r3.memoizedState.cachePool.pool), o3 !== a3 && (r3.flags |= 2048)), n3 !== e3 && n3 && (t3.child.flags |= 8192), yl2(t3, t3.updateQueue), V2(t3), null);
      case 4:
        return Pe2(), e3 === null && Wf2(t3.stateNode.containerInfo), t3.flags |= 67108864, V2(t3), null;
      case 10:
        return Sa2(t3.type), V2(t3), null;
      case 19:
        if (Uo2(t3), r3 = t3.memoizedState, r3 === null) return V2(t3), null;
        if (a3 = !!(t3.flags & 128), o3 = r3.rendering, o3 === null) {
          if (a3) bl2(r3, false);
          else {
            if (X2 !== 0 || e3 !== null && e3.flags & 128) for (e3 = t3.child; e3 !== null; ) {
              if (o3 = Wo2(e3), o3 !== null) {
                for (t3.flags |= 128, bl2(r3, false), e3 = o3.updateQueue, t3.updateQueue = e3, yl2(t3, e3), t3.subtreeFlags = 0, e3 = n3, n3 = t3.child; n3 !== null; ) Bi2(n3, e3), n3 = n3.sibling;
                return Ho2(t3, Vo2.current & 1 | 2), L2 && na2(t3, r3.treeForkCount), t3.child;
              }
              e3 = e3.sibling;
            }
            r3.tail !== null && Je2() > gd2 && (t3.flags |= 128, a3 = true, bl2(r3, false), t3.lanes = 4194304);
          }
        } else {
          if (!a3) {
            if (e3 = Wo2(o3), e3 !== null) {
              if (t3.flags |= 128, a3 = true, e3 = e3.updateQueue, t3.updateQueue = e3, yl2(t3, e3), bl2(r3, true), r3.tail === null && r3.tailMode !== `collapsed` && r3.tailMode !== `visible` && !o3.alternate && !L2) return V2(t3), null;
            } else 2 * Je2() - r3.renderingStartTime > gd2 && n3 !== 536870912 && (t3.flags |= 128, a3 = true, bl2(r3, false), t3.lanes = 4194304);
          }
          r3.isBackwards ? (o3.sibling = t3.child, t3.child = o3) : (e3 = r3.last, e3 === null ? t3.child = o3 : e3.sibling = o3, r3.last = o3);
        }
        if (r3.tail !== null) {
          e3 = r3.tail;
          a: {
            for (n3 = e3; n3 !== null; ) {
              if (n3.alternate !== null) {
                n3 = false;
                break a;
              }
              n3 = n3.sibling;
            }
            n3 = true;
          }
          return r3.rendering = e3, r3.tail = e3.sibling, r3.renderingStartTime = Je2(), e3.sibling = null, o3 = Vo2.current, o3 = a3 ? o3 & 1 | 2 : o3 & 1, r3.tailMode === `visible` || r3.tailMode === `collapsed` || !n3 || L2 ? Ho2(t3, o3) : (n3 = o3, O2(Po2, t3), O2(Vo2, n3), Fo2 === null && (Fo2 = t3)), L2 && na2(t3, r3.treeForkCount), e3;
        }
        return V2(t3), null;
      case 22:
      case 23:
        return Bo2(t3), No2(), r3 = t3.memoizedState !== null, e3 === null ? r3 && (t3.flags |= 8192) : e3.memoizedState !== null !== r3 && (t3.flags |= 8192), r3 ? n3 & 536870912 && !(t3.flags & 128) && (V2(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : V2(t3), n3 = t3.updateQueue, n3 !== null && yl2(t3, n3.retryQueue), n3 = null, e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n3 = e3.memoizedState.cachePool.pool), r3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r3 = t3.memoizedState.cachePool.pool), r3 !== n3 && (t3.flags |= 2048), e3 !== null && ke2(Ja2), null;
      case 24:
        return n3 = null, e3 !== null && (n3 = e3.memoizedState.cache), t3.memoizedState.cache !== n3 && (t3.flags |= 2048), Sa2(Pa2), V2(t3), null;
      case 25:
        return null;
      case 30:
        return t3.flags |= 33554432, V2(t3), null;
    }
    throw Error(i2(156, t3.tag));
  }
  function Sl2(e3, t3) {
    switch (aa2(t3), t3.tag) {
      case 1:
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 3:
        return Sa2(Pa2), Pe2(), e3 = t3.flags, e3 & 65536 && !(e3 & 128) ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 26:
      case 27:
      case 5:
        return Fe2(t3), null;
      case 31:
        if (t3.memoizedState !== null) {
          if (Bo2(t3), t3.alternate === null) throw Error(i2(340));
          ha2();
        }
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 13:
        if (Bo2(t3), e3 = t3.memoizedState, e3 !== null && e3.dehydrated !== null) {
          if (t3.alternate === null) throw Error(i2(340));
          ha2();
        }
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 19:
        return Uo2(t3), e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, e3 = t3.memoizedState, e3 !== null && (e3.rendering = null, e3.tail = null), t3.flags |= 4, t3) : null;
      case 4:
        return Pe2(), null;
      case 10:
        return Sa2(t3.type), null;
      case 22:
      case 23:
        return Bo2(t3), No2(), e3 !== null && ke2(Ja2), e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 24:
        return Sa2(Pa2), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cl2(e3, t3) {
    switch (aa2(t3), t3.tag) {
      case 3:
        Sa2(Pa2), Pe2();
        break;
      case 26:
      case 27:
      case 5:
        Fe2(t3);
        break;
      case 4:
        Pe2();
        break;
      case 31:
        t3.memoizedState !== null && Bo2(t3);
        break;
      case 13:
        Bo2(t3);
        break;
      case 19:
        Uo2(t3);
        break;
      case 10:
        Sa2(t3.type);
        break;
      case 22:
      case 23:
        Bo2(t3), No2(), e3 !== null && ke2(Ja2);
        break;
      case 24:
        Sa2(Pa2);
    }
  }
  function wl2(e3, t3) {
    try {
      var n3 = t3.updateQueue, r3 = n3 === null ? null : n3.lastEffect;
      if (r3 !== null) {
        var i3 = r3.next;
        n3 = i3;
        do {
          if ((n3.tag & e3) === e3) {
            r3 = void 0;
            var a3 = n3.create, o3 = n3.inst;
            r3 = a3(), o3.destroy = r3;
          }
          n3 = n3.next;
        } while (n3 !== i3);
      }
    } catch (e4) {
      Z2(t3, t3.return, e4);
    }
  }
  function Tl2(e3, t3, n3) {
    try {
      var r3 = t3.updateQueue, i3 = r3 === null ? null : r3.lastEffect;
      if (i3 !== null) {
        var a3 = i3.next;
        r3 = a3;
        do {
          if ((r3.tag & e3) === e3) {
            var o3 = r3.inst, s3 = o3.destroy;
            if (s3 !== void 0) {
              o3.destroy = void 0, i3 = t3;
              var c3 = n3, l3 = s3;
              try {
                l3();
              } catch (e4) {
                Z2(i3, c3, e4);
              }
            }
          }
          r3 = r3.next;
        } while (r3 !== a3);
      }
    } catch (e4) {
      Z2(t3, t3.return, e4);
    }
  }
  function El2(e3) {
    var t3 = e3.updateQueue;
    if (t3 !== null) {
      var n3 = e3.stateNode;
      try {
        Oo2(t3, n3);
      } catch (t4) {
        Z2(e3, e3.return, t4);
      }
    }
  }
  function Dl2(e3, t3, n3) {
    n3.props = Tc2(e3.type, e3.memoizedProps), n3.state = e3.memoizedState;
    try {
      n3.componentWillUnmount();
    } catch (n4) {
      Z2(e3, t3, n4);
    }
  }
  function Ol2(e3, t3) {
    try {
      var n3 = e3.ref;
      if (n3 !== null) {
        switch (e3.tag) {
          case 26:
          case 27:
          case 5:
            var r3 = e3.stateNode;
            break;
          case 30:
            var i3 = e3.stateNode, a3 = Si2(e3.memoizedProps, i3);
            (i3.ref === null || i3.ref.name !== a3) && (i3.ref = Pp2(a3)), r3 = i3.ref;
            break;
          case 7:
            if (e3.stateNode === null) {
              var o3 = new Fp2(e3);
              m2(e3.child, false, Qp, o3, void 0, void 0), e3.stateNode = o3;
            }
            r3 = e3.stateNode;
            break;
          default:
            r3 = e3.stateNode;
        }
        typeof n3 == `function` ? e3.refCleanup = n3(r3) : n3.current = r3;
      }
    } catch (n4) {
      Z2(e3, t3, n4);
    }
  }
  function kl2(e3, t3) {
    var n3 = e3.ref, r3 = e3.refCleanup;
    if (n3 !== null) {
      if (typeof r3 == `function`) try {
        r3();
      } catch (n4) {
        Z2(e3, t3, n4);
      } finally {
        e3.refCleanup = null, e3 = e3.alternate, e3 != null && (e3.refCleanup = null);
      }
      else if (typeof n3 == `function`) try {
        n3(null);
      } catch (n4) {
        Z2(e3, t3, n4);
      }
      else n3.current = null;
    }
  }
  function Al2(e3, t3) {
    if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && e3.alternate === null && t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) em(e3.stateNode, t3[n3]);
  }
  function jl2(e3) {
    for (var t3 = e3.return; t3 !== null && (Nl2(t3) && em(e3.stateNode, t3.stateNode), !H2(t3)); ) t3 = t3.return;
  }
  function Ml2(e3) {
    for (var t3 = e3.return; t3 !== null && (Nl2(t3) && tm(e3.stateNode, t3.stateNode), !H2(t3)); ) t3 = t3.return;
  }
  function H2(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 27;
  }
  function Nl2(e3) {
    return e3 && e3.tag === 7 && e3.stateNode !== null;
  }
  function Pl2(e3) {
    var t3 = e3.type, n3 = e3.memoizedProps, r3 = e3.stateNode;
    try {
      a: switch (t3) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
          n3.autoFocus && r3.focus();
          break a;
        case `img`:
          n3.src ? r3.src = n3.src : n3.srcSet && (r3.srcset = n3.srcSet);
      }
    } catch (t4) {
      Z2(e3, e3.return, t4);
    }
  }
  function Fl2(e3, t3, n3) {
    try {
      var r3 = e3.stateNode;
      ip2(r3, e3.type, n3, t3), r3[At2] = t3;
    } catch (t4) {
      Z2(e3, e3.return, t4);
    }
  }
  function Il2(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 26 || e3.tag === 27 && Sp2(e3.type) || e3.tag === 4;
  }
  function Ll2(e3) {
    a: for (; ; ) {
      for (; e3.sibling === null; ) {
        if (e3.return === null || Il2(e3.return)) return null;
        e3 = e3.return;
      }
      for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
        if (e3.tag === 27 && Sp2(e3.type) || e3.flags & 2 || e3.child === null || e3.tag === 4) continue a;
        e3.child.return = e3, e3 = e3.child;
      }
      if (!(e3.flags & 2)) return e3.stateNode;
    }
  }
  function Rl2(e3, t3, n3, r3) {
    var i3 = e3.tag;
    if (i3 === 5 || i3 === 6) i3 = e3.stateNode, t3 ? (n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3).insertBefore(i3, t3) : (t3 = n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3, t3.appendChild(i3), n3 = n3._reactRootContainer, n3 != null || t3.onclick !== null || (t3.onclick = Cn2)), Al2(e3, r3), P2 = true;
    else if (i3 !== 4 && (i3 === 27 && (Al2(e3, r3), r3 = null, Sp2(e3.type) && (n3 = e3.stateNode, t3 = null)), e3 = e3.child, e3 !== null)) for (Rl2(e3, t3, n3, r3), e3 = e3.sibling; e3 !== null; ) Rl2(e3, t3, n3, r3), e3 = e3.sibling;
  }
  function zl2(e3, t3, n3, r3) {
    var i3 = e3.tag;
    if (i3 === 5 || i3 === 6) i3 = e3.stateNode, t3 ? n3.insertBefore(i3, t3) : n3.appendChild(i3), Al2(e3, r3), P2 = true;
    else if (i3 !== 4 && (i3 === 27 && (Al2(e3, r3), r3 = null, Sp2(e3.type) && (n3 = e3.stateNode)), e3 = e3.child, e3 !== null)) for (zl2(e3, t3, n3, r3), e3 = e3.sibling; e3 !== null; ) zl2(e3, t3, n3, r3), e3 = e3.sibling;
  }
  function Bl2(e3) {
    var t3 = e3.stateNode, n3 = e3.memoizedProps;
    try {
      for (var r3 = e3.type, i3 = t3.attributes; i3.length; ) t3.removeAttributeNode(i3[0]);
      np2(t3, r3, n3), t3[kt2] = e3, t3[At2] = n3;
    } catch (t4) {
      Z2(e3, e3.return, t4);
    }
  }
  var Vl2 = false, Hl2 = null;
  function Ul2(e3) {
    (e3.tag === 30 || e3.subtreeFlags & 33554432) && (Vl2 = true);
  }
  var Wl2 = null;
  function Gl2() {
    var e3 = Wl2;
    return Wl2 = null, e3;
  }
  var Kl2 = 0;
  function ql2(e3, t3, n3, r3, i3) {
    return Kl2 = 0, Jl2(e3.child, t3, n3, r3, i3);
  }
  function Jl2(e3, t3, n3, r3, i3) {
    for (var a3 = false; e3 !== null; ) {
      if (e3.tag === 5) {
        var o3 = e3.stateNode;
        if (r3 !== null) {
          var s3 = Op2(o3);
          r3.push(s3), s3.view && (a3 = true);
        } else a3 || Op2(o3).view && (a3 = true);
        Vl2 = true, Tp2(o3, Kl2 === 0 ? t3 : t3 + `_` + Kl2, n3), Kl2++;
      } else (e3.tag !== 22 || e3.memoizedState === null) && (e3.tag === 30 && i3 || Jl2(e3.child, t3, n3, r3, i3) && (a3 = true));
      e3 = e3.sibling;
    }
    return a3;
  }
  function Yl2(e3, t3) {
    for (; e3 !== null; ) e3.tag === 5 ? Ep2(e3.stateNode, e3.memoizedProps) : (e3.tag !== 22 || e3.memoizedState === null) && (e3.tag === 30 && t3 || Yl2(e3.child, t3)), e3 = e3.sibling;
  }
  function Xl2(e3) {
    if (e3.subtreeFlags & 18874368) for (e3 = e3.child; e3 !== null; ) {
      if ((e3.tag !== 22 || e3.memoizedState === null) && (Xl2(e3), e3.tag === 30 && e3.flags & 18874368 && e3.stateNode.paired)) {
        var t3 = e3.memoizedProps;
        if (t3.name == null || t3.name === `auto`) throw Error(i2(544));
        var n3 = t3.name;
        t3 = wi2(t3.default, t3.share), t3 !== `none` && (ql2(e3, n3, t3, null, false) || Yl2(e3.child, false));
      }
      e3 = e3.sibling;
    }
  }
  function Zl2(e3, t3) {
    if (e3.tag === 30) {
      var n3 = e3.stateNode, r3 = e3.memoizedProps, i3 = Si2(r3, n3), a3 = wi2(r3.default, n3.paired ? r3.share : r3.enter);
      a3 === `none` ? Xl2(e3) : ql2(e3, i3, a3, null, false) ? (Xl2(e3), n3.paired || t3 || Nd2(e3, r3.onEnter)) : Yl2(e3.child, false);
    } else if (e3.subtreeFlags & 33554432) for (e3 = e3.child; e3 !== null; ) Zl2(e3, t3), e3 = e3.sibling;
    else Xl2(e3);
  }
  function Ql2(e3) {
    if (Hl2 !== null && Hl2.size !== 0) {
      var t3 = Hl2;
      if (e3.subtreeFlags & 18874368) for (e3 = e3.child; e3 !== null; ) {
        if (e3.tag !== 22 || e3.memoizedState === null) {
          if (e3.tag === 30 && e3.flags & 18874368) {
            var n3 = e3.memoizedProps, r3 = n3.name;
            if (r3 != null && r3 !== `auto`) {
              var i3 = t3.get(r3);
              if (i3 !== void 0) {
                var a3 = wi2(n3.default, n3.share);
                if (a3 !== `none` && (ql2(e3, r3, a3, null, false) ? (a3 = e3.stateNode, i3.paired = a3, a3.paired = i3, Nd2(e3, n3.onShare)) : Yl2(e3.child, false)), t3.delete(r3), t3.size === 0) break;
              }
            }
          }
          Ql2(e3);
        }
        e3 = e3.sibling;
      }
    }
  }
  function $l2(e3) {
    if (e3.tag === 30) {
      var t3 = e3.memoizedProps, n3 = Si2(t3, e3.stateNode), r3 = Hl2 === null ? void 0 : Hl2.get(n3), i3 = wi2(t3.default, r3 === void 0 ? t3.exit : t3.share);
      i3 !== `none` && (ql2(e3, n3, i3, null, false) ? r3 === void 0 ? Nd2(e3, t3.onExit) : (i3 = e3.stateNode, r3.paired = i3, i3.paired = r3, Hl2.delete(n3), Nd2(e3, t3.onShare)) : Yl2(e3.child, false)), Hl2 !== null && Ql2(e3);
    } else if (e3.subtreeFlags & 33554432) for (e3 = e3.child; e3 !== null; ) $l2(e3), e3 = e3.sibling;
    else Hl2 !== null && Ql2(e3);
  }
  function eu2(e3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        var t3 = e3.memoizedProps, n3 = Si2(t3, e3.stateNode);
        t3 = wi2(t3.default, t3.update), e3.flags &= -5, t3 !== `none` && ql2(e3, n3, t3, e3.memoizedState = [], false);
      } else e3.subtreeFlags & 33554432 && eu2(e3);
      e3 = e3.sibling;
    }
  }
  function tu2(e3) {
    if (e3.subtreeFlags & 18874368) for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag !== 22 || e3.memoizedState === null) {
        if (e3.tag === 30 && e3.flags & 18874368) {
          var t3 = e3.stateNode;
          t3.paired !== null && (t3.paired = null, Yl2(e3.child, false));
        }
        tu2(e3);
      }
      e3 = e3.sibling;
    }
  }
  function nu2(e3) {
    if (e3.tag === 30) e3.stateNode.paired = null, Yl2(e3.child, false), tu2(e3);
    else if (e3.subtreeFlags & 33554432) for (e3 = e3.child; e3 !== null; ) nu2(e3), e3 = e3.sibling;
    else tu2(e3);
  }
  function ru2(e3) {
    for (e3 = e3.child; e3 !== null; ) e3.tag === 30 ? Yl2(e3.child, false) : e3.subtreeFlags & 33554432 && ru2(e3), e3 = e3.sibling;
  }
  function iu2(e3, t3, n3, r3, i3, a3, o3) {
    for (var s3 = false; t3 !== null; ) {
      if (t3.tag === 5) {
        var c3 = t3.stateNode;
        if (a3 !== null && Kl2 < a3.length) {
          var l3 = a3[Kl2], u3 = Op2(c3);
          (l3.view || u3.view) && (s3 = true);
          var d2;
          if (d2 = !(e3.flags & 4)) {
            if (u3.clip) d2 = true;
            else {
              d2 = l3.rect;
              var f3 = u3.rect;
              d2 = d2.y !== f3.y || d2.x !== f3.x || d2.height !== f3.height || d2.width !== f3.width;
            }
          }
          d2 && (e3.flags |= 4), u3.abs ? u3 = !l3.abs : (l3 = l3.rect, u3 = u3.rect, u3 = l3.height !== u3.height || l3.width !== u3.width), u3 && (e3.flags |= 32);
        } else e3.flags |= 32;
        e3.flags & 4 && Tp2(c3, Kl2 === 0 ? n3 : n3 + `_` + Kl2, i3), s3 && e3.flags & 4 || (Wl2 === null && (Wl2 = []), Wl2.push(c3, Kl2 === 0 ? r3 : r3 + `_` + Kl2, t3.memoizedProps)), Kl2++;
      } else (t3.tag !== 22 || t3.memoizedState === null) && (t3.tag === 30 && o3 ? e3.flags |= t3.flags & 32 : iu2(e3, t3.child, n3, r3, i3, a3, o3) && (s3 = true));
      t3 = t3.sibling;
    }
    return s3;
  }
  function au2(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        var n3 = e3.memoizedProps, r3 = e3.stateNode, i3 = Si2(n3, r3), a3 = wi2(n3.default, n3.update);
        if (t3) {
          r3 = r3.clones;
          var o3 = r3 === null ? null : r3.map(kp2);
        } else o3 = e3.memoizedState, e3.memoizedState = null;
        r3 = e3;
        var s3 = e3.child;
        Kl2 = 0, i3 = iu2(r3, s3, i3, i3, a3, o3, false), e3.flags & 4 && i3 && (t3 || Nd2(e3, n3.onUpdate));
      } else e3.subtreeFlags & 33554432 && au2(e3, t3);
      e3 = e3.sibling;
    }
  }
  var ou2 = false, U2 = false, su2 = false, cu2 = false, lu2 = typeof WeakSet == `function` ? WeakSet : Set, uu2 = null, du2 = false, fu2 = false, pu2 = false, mu2 = false;
  function hu2(e3, t3, n3) {
    if (e3 = e3.containerInfo, sp2 = gh, e3 = Qr2(e3), $r2(e3)) {
      if (`selectionStart` in e3) var r3 = { start: e3.selectionStart, end: e3.selectionEnd };
      else a: {
        r3 = (r3 = e3.ownerDocument) && r3.defaultView || window;
        var i3 = r3.getSelection && r3.getSelection();
        if (i3 && i3.rangeCount !== 0) {
          r3 = i3.anchorNode;
          var a3 = i3.anchorOffset, o3 = i3.focusNode;
          i3 = i3.focusOffset;
          try {
            r3.nodeType, o3.nodeType;
          } catch {
            r3 = null;
            break a;
          }
          var s3 = 0, c3 = -1, l3 = -1, u3 = 0, d2 = 0, f3 = e3, p2 = null;
          b: for (; ; ) {
            for (var m3; f3 !== r3 || a3 !== 0 && f3.nodeType !== 3 || (c3 = s3 + a3), f3 !== o3 || i3 !== 0 && f3.nodeType !== 3 || (l3 = s3 + i3), f3.nodeType === 3 && (s3 += f3.nodeValue.length), (m3 = f3.firstChild) !== null; ) p2 = f3, f3 = m3;
            for (; ; ) {
              if (f3 === e3) break b;
              if (p2 === r3 && ++u3 === a3 && (c3 = s3), p2 === o3 && ++d2 === i3 && (l3 = s3), (m3 = f3.nextSibling) !== null) break;
              f3 = p2, p2 = f3.parentNode;
            }
            f3 = m3;
          }
          r3 = c3 === -1 || l3 === -1 ? null : { start: c3, end: l3 };
        } else r3 = null;
      }
      r3 ||= { start: 0, end: 0 };
    } else r3 = null;
    for (cp2 = { focusedElem: e3, selectionRange: r3 }, gh = false, n3 = (n3 & 335544064) === n3, uu2 = t3, t3 = n3 ? 9270 : 1024; uu2 !== null; ) {
      if (e3 = uu2, n3 && (r3 = e3.deletions, r3 !== null)) for (a3 = 0; a3 < r3.length; a3++) n3 && $l2(r3[a3]);
      if (e3.alternate === null && e3.flags & 2) n3 && Ul2(e3), gu2(n3);
      else {
        if (e3.tag === 22) {
          if (r3 = e3.alternate, e3.memoizedState !== null) {
            r3 !== null && r3.memoizedState === null && n3 && $l2(r3), gu2(n3);
            continue;
          }
          if (r3 !== null && r3.memoizedState !== null) {
            n3 && Ul2(e3), gu2(n3);
            continue;
          }
        }
        r3 = e3.child, (e3.subtreeFlags & t3) !== 0 && r3 !== null ? (r3.return = e3, uu2 = r3) : (n3 && eu2(e3), gu2(n3));
      }
    }
    Hl2 = null;
  }
  function gu2(e3) {
    for (; uu2 !== null; ) {
      var t3 = uu2, n3 = e3, r3 = t3.alternate, a3 = t3.flags;
      switch (t3.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (a3 & 1024 && r3 !== null) {
            n3 = void 0, a3 = r3.memoizedProps, r3 = r3.memoizedState;
            var o3 = t3.stateNode;
            try {
              var s3 = Tc2(t3.type, a3);
              n3 = o3.getSnapshotBeforeUpdate(s3, r3), o3.__reactInternalSnapshotBeforeUpdate = n3;
            } catch (e4) {
              Z2(t3, t3.return, e4);
            }
          }
          break;
        case 3:
          if (a3 & 1024) {
            if (r3 = t3.stateNode.containerInfo, n3 = r3.nodeType, n3 === 9) nm(r3);
            else if (n3 === 1) switch (r3.nodeName) {
              case `HEAD`:
              case `HTML`:
              case `BODY`:
                nm(r3);
                break;
              default:
                r3.textContent = ``;
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n3 && r3 !== null && (n3 = Si2(r3.memoizedProps, r3.stateNode), a3 = t3.memoizedProps, a3 = wi2(a3.default, a3.update), a3 !== `none` && ql2(r3, n3, a3, r3.memoizedState = [], true));
          break;
        default:
          if (a3 & 1024) throw Error(i2(163));
      }
      if (r3 = t3.sibling, r3 !== null) {
        r3.return = t3.return, uu2 = r3;
        break;
      }
      uu2 = t3.return;
    }
  }
  function _u2(e3, t3, n3) {
    var r3 = n3.flags;
    switch (n3.tag) {
      case 0:
      case 11:
      case 15:
        Iu2(e3, n3), r3 & 4 && wl2(5, n3);
        break;
      case 1:
        if (Iu2(e3, n3), r3 & 4) {
          if (e3 = n3.stateNode, t3 === null) try {
            e3.componentDidMount();
          } catch (e4) {
            Z2(n3, n3.return, e4);
          }
          else {
            var i3 = Tc2(n3.type, t3.memoizedProps);
            t3 = t3.memoizedState;
            try {
              e3.componentDidUpdate(i3, t3, e3.__reactInternalSnapshotBeforeUpdate);
            } catch (e4) {
              Z2(n3, n3.return, e4);
            }
          }
        }
        r3 & 64 && El2(n3), r3 & 512 && Ol2(n3, n3.return);
        break;
      case 3:
        if (Iu2(e3, n3), r3 & 64 && (e3 = n3.updateQueue, e3 !== null)) {
          if (t3 = null, n3.child !== null) switch (n3.child.tag) {
            case 27:
            case 5:
              t3 = n3.child.stateNode;
              break;
            case 1:
              t3 = n3.child.stateNode;
          }
          try {
            Oo2(e3, t3);
          } catch (e4) {
            Z2(n3, n3.return, e4);
          }
        }
        break;
      case 27:
        t3 === null && r3 & 4 && Bl2(n3);
      case 26:
      case 5:
        Iu2(e3, n3), t3 === null && r3 & 4 && Pl2(n3), r3 & 512 && Ol2(n3, n3.return);
        break;
      case 12:
        Iu2(e3, n3);
        break;
      case 31:
        Iu2(e3, n3), r3 & 4 && Tu2(e3, n3);
        break;
      case 13:
        Iu2(e3, n3), r3 & 4 && Eu2(e3, n3), r3 & 64 && (e3 = n3.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null && (n3 = _f2.bind(null, n3), cm(e3, n3))));
        break;
      case 22:
        if (r3 = n3.memoizedState !== null || ou2, !r3) {
          var a3 = t3 !== null && t3.memoizedState !== null || U2;
          t3 = ou2, i3 = U2, ou2 = r3, (U2 = a3) && !i3 ? (r3 = 2, n3.subtreeFlags & 8772 && (r3 |= 1), Ru2(e3, n3, r3)) : Iu2(e3, n3), ou2 = t3, U2 = i3;
        }
        break;
      case 30:
        Iu2(e3, n3), r3 & 512 && Ol2(n3, n3.return);
        break;
      case 7:
        r3 & 512 && Ol2(n3, n3.return);
      default:
        Iu2(e3, n3);
    }
  }
  function vu2(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) yu2(e3, t3), e3 = e3.sibling;
  }
  function yu2(e3, t3) {
    switch (e3.tag) {
      case 5:
      case 26:
        try {
          var n3 = e3.stateNode;
          if (t3) {
            var r3 = n3.style;
            typeof r3.setProperty == `function` ? r3.setProperty(`display`, `none`, `important`) : r3.display = `none`;
          } else {
            var i3 = e3.stateNode, a3 = e3.memoizedProps.style, o3 = a3 != null && a3.hasOwnProperty(`display`) ? a3.display : null;
            i3.style.display = o3 == null || typeof o3 == `boolean` ? `` : (`` + o3).trim();
          }
        } catch (t4) {
          Z2(e3, e3.return, t4);
        }
        bu2(e3, t3);
        break;
      case 6:
        try {
          e3.stateNode.nodeValue = t3 ? `` : e3.memoizedProps, P2 = true;
        } catch (t4) {
          Z2(e3, e3.return, t4);
        }
        break;
      case 18:
        try {
          var s3 = e3.stateNode;
          t3 ? wp2(s3, true) : wp2(e3.stateNode, false);
        } catch (t4) {
          Z2(e3, e3.return, t4);
        }
        break;
      case 22:
      case 23:
        e3.memoizedState === null && vu2(e3, t3);
        break;
      default:
        vu2(e3, t3);
    }
  }
  function bu2(e3, t3) {
    if (e3.subtreeFlags & 67108864) for (e3 = e3.child; e3 !== null; ) {
      a: {
        var n3 = e3, r3 = t3;
        switch (n3.tag) {
          case 4:
            yu2(n3, r3);
            break a;
          case 22:
            n3.memoizedState === null && bu2(n3, r3);
            break a;
          default:
            bu2(n3, r3);
        }
      }
      e3 = e3.sibling;
    }
  }
  function xu2(e3) {
    var t3 = e3.alternate;
    t3 !== null && (e3.alternate = null, xu2(t3)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t3 = e3.stateNode, t3 !== null && Lt2(t3)), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
  }
  var W2 = null, Su2 = false;
  function Cu2(e3, t3, n3) {
    for (n3 = n3.child; n3 !== null; ) wu2(e3, t3, n3), n3 = n3.sibling;
  }
  function wu2(e3, t3, n3) {
    if (j2 && typeof j2.onCommitFiberUnmount == `function`) try {
      j2.onCommitFiberUnmount(rt2, n3);
    } catch {
    }
    switch (n3.tag) {
      case 26:
        U2 || kl2(n3, t3), Cu2(e3, t3, n3), n3.memoizedState ? n3.memoizedState.count-- : n3.stateNode && !U2 && (n3 = n3.stateNode, n3.parentNode.removeChild(n3));
        break;
      case 27:
        U2 || kl2(n3, t3), Ml2(n3);
        var r3 = W2, i3 = Su2;
        Sp2(n3.type) && (W2 = n3.stateNode, Su2 = false), Cu2(e3, t3, n3), gm(n3.stateNode, n3.type, n3.memoizedProps), W2 = r3, Su2 = i3;
        break;
      case 5:
        U2 || kl2(n3, t3), Ml2(n3);
      case 6:
        if (n3.tag === 6 && Ml2(n3), r3 = W2, i3 = Su2, W2 = null, Cu2(e3, t3, n3), W2 = r3, Su2 = i3, W2 !== null) {
          if (Su2) try {
            (W2.nodeType === 9 ? W2.body : W2.nodeName === `HTML` ? W2.ownerDocument.body : W2).removeChild(n3.stateNode), P2 = true;
          } catch (e4) {
            Z2(n3, t3, e4);
          }
          else try {
            W2.removeChild(n3.stateNode), P2 = true;
          } catch (e4) {
            Z2(n3, t3, e4);
          }
        }
        break;
      case 18:
        W2 !== null && (Su2 ? (e3 = W2, Cp2(e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, n3.stateNode), Hh(e3)) : Cp2(W2, n3.stateNode));
        break;
      case 4:
        r3 = W2, i3 = Su2, W2 = n3.stateNode.containerInfo, Su2 = true, Cu2(e3, t3, n3), W2 = r3, Su2 = i3;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Tl2(2, n3, t3), U2 || Tl2(4, n3, t3), Cu2(e3, t3, n3);
        break;
      case 1:
        U2 || (kl2(n3, t3), r3 = n3.stateNode, typeof r3.componentWillUnmount == `function` && Dl2(n3, t3, r3)), Cu2(e3, t3, n3);
        break;
      case 21:
        Cu2(e3, t3, n3);
        break;
      case 22:
        U2 = (r3 = U2) || n3.memoizedState !== null, Cu2(e3, t3, n3), U2 = r3;
        break;
      case 30:
        kl2(n3, t3), Cu2(e3, t3, n3);
        break;
      case 7:
        U2 || kl2(n3, t3), Cu2(e3, t3, n3);
        break;
      default:
        Cu2(e3, t3, n3);
    }
  }
  function Tu2(e3, t3) {
    if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null))) {
      e3 = e3.dehydrated;
      try {
        Hh(e3);
      } catch (e4) {
        Z2(t3, t3.return, e4);
      }
    }
  }
  function Eu2(e3, t3) {
    if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null)))) try {
      Hh(e3);
    } catch (e4) {
      Z2(t3, t3.return, e4);
    }
  }
  function Du2(e3) {
    switch (e3.tag) {
      case 31:
      case 13:
      case 19:
        var t3 = e3.stateNode;
        return t3 === null && (t3 = e3.stateNode = new lu2()), t3;
      case 22:
        return e3 = e3.stateNode, t3 = e3._retryCache, t3 === null && (t3 = e3._retryCache = new lu2()), t3;
      default:
        throw Error(i2(435, e3.tag));
    }
  }
  function Ou2(e3, t3) {
    var n3 = Du2(e3);
    t3.forEach(function(t4) {
      if (!n3.has(t4)) {
        n3.add(t4);
        var r3 = vf2.bind(null, e3, t4);
        t4.then(r3, r3);
      }
    });
  }
  function ku2(e3, t3, n3) {
    var r3 = t3.deletions;
    if (r3 !== null) for (var a3 = 0; a3 < r3.length; a3++) {
      var o3 = r3[a3], s3 = e3, c3 = t3, l3 = c3;
      a: for (; l3 !== null; ) {
        switch (l3.tag) {
          case 27:
            if (Sp2(l3.type)) {
              W2 = l3.stateNode, Su2 = false;
              break a;
            }
            break;
          case 5:
            W2 = l3.stateNode, Su2 = false;
            break a;
          case 3:
          case 4:
            W2 = l3.stateNode.containerInfo, Su2 = true;
            break a;
        }
        l3 = l3.return;
      }
      if (W2 === null) throw Error(i2(160));
      wu2(s3, c3, o3), W2 = null, Su2 = false, s3 = o3.alternate, s3 !== null && (s3.return = null), o3.return = null;
    }
    if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) ju2(t3, e3, n3), t3 = t3.sibling;
  }
  var Au2 = null;
  function ju2(e3, t3, n3) {
    var r3 = e3.alternate, a3 = e3.flags;
    switch (e3.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a3 & 4 && (r3 = e3.updateQueue, r3 = r3 === null ? null : r3.events, r3 !== null)) for (var o3 = 0; o3 < r3.length; o3++) {
          var s3 = r3[o3];
          s3.ref.impl = s3.nextImpl;
        }
        ku2(t3, e3, n3), Mu2(e3), a3 & 4 && (Tl2(3, e3, e3.return), wl2(3, e3), Tl2(5, e3, e3.return));
        break;
      case 1:
        ku2(t3, e3, n3), Mu2(e3), a3 & 512 && (U2 || r3 === null || kl2(r3, r3.return)), a3 & 64 && ou2 && (e3 = e3.updateQueue, e3 !== null && (t3 = e3.callbacks, t3 !== null && (n3 = e3.shared.hiddenCallbacks, e3.shared.hiddenCallbacks = n3 === null ? t3 : n3.concat(t3))));
        break;
      case 26:
        if (o3 = Au2, ku2(t3, e3, n3), Mu2(e3), a3 & 512 && (U2 || r3 === null || kl2(r3, r3.return)), a3 & 4) {
          if (a3 = r3 === null ? null : r3.memoizedState, n3 = e3.memoizedState, r3 === null) {
            if (n3 === null) {
              if (e3.stateNode === null) {
                if (ou2) e3.stateNode = fp2(e3.type, e3.memoizedProps, t3.containerInfo, e3);
                else {
                  a: {
                    t3 = e3.type, n3 = e3.memoizedProps, a3 = o3.ownerDocument || o3;
                    b: switch (t3) {
                      case `title`:
                        r3 = a3.getElementsByTagName(`title`)[0], (!r3 || r3[Ft2] || r3[kt2] || r3.namespaceURI === `http://www.w3.org/2000/svg` || r3.hasAttribute(`itemprop`)) && (r3 = a3.createElement(t3), a3.head.insertBefore(r3, a3.querySelector(`head > title`))), np2(r3, t3, n3), r3[kt2] = e3, Ht2(r3), t3 = r3;
                        break a;
                      case `link`:
                        if (o3 = Gm(`link`, `href`, a3).get(t3 + (n3.href || ``))) {
                          for (s3 = 0; s3 < o3.length; s3++) if (r3 = o3[s3], r3.getAttribute(`href`) === (n3.href == null || n3.href === `` ? null : n3.href) && r3.getAttribute(`rel`) === (n3.rel == null ? null : n3.rel) && r3.getAttribute(`title`) === (n3.title == null ? null : n3.title) && r3.getAttribute(`crossorigin`) === (n3.crossOrigin == null ? null : n3.crossOrigin)) {
                            o3.splice(s3, 1);
                            break b;
                          }
                        }
                        r3 = a3.createElement(t3), np2(r3, t3, n3), a3.head.appendChild(r3);
                        break;
                      case `meta`:
                        if (o3 = Gm(`meta`, `content`, a3).get(t3 + (n3.content || ``))) {
                          for (s3 = 0; s3 < o3.length; s3++) if (r3 = o3[s3], r3.getAttribute(`content`) === (n3.content == null ? null : `` + n3.content) && r3.getAttribute(`name`) === (n3.name == null ? null : n3.name) && r3.getAttribute(`property`) === (n3.property == null ? null : n3.property) && r3.getAttribute(`http-equiv`) === (n3.httpEquiv == null ? null : n3.httpEquiv) && r3.getAttribute(`charset`) === (n3.charSet == null ? null : n3.charSet)) {
                            o3.splice(s3, 1);
                            break b;
                          }
                        }
                        r3 = a3.createElement(t3), np2(r3, t3, n3), a3.head.appendChild(r3);
                        break;
                      default:
                        throw Error(i2(468, t3));
                    }
                    r3[kt2] = e3, Ht2(r3), t3 = r3;
                  }
                  e3.stateNode = t3;
                }
              } else ou2 || Km(o3, e3.type, e3.stateNode);
            } else e3.stateNode = Bm(o3, n3, e3.memoizedProps);
          } else a3 === n3 ? n3 === null && e3.stateNode !== null && Fl2(e3, e3.memoizedProps, r3.memoizedProps) : (a3 === null ? (t3 = r3.stateNode, t3 === null || U2 || t3.parentNode.removeChild(t3)) : a3.count--, n3 === null ? ou2 || Km(o3, e3.type, e3.stateNode) : Bm(o3, n3, e3.memoizedProps));
        }
        break;
      case 27:
        ku2(t3, e3, n3), Mu2(e3), a3 & 512 && (U2 || r3 === null || kl2(r3, r3.return)), r3 !== null && a3 & 4 && Fl2(e3, e3.memoizedProps, r3.memoizedProps);
        break;
      case 5:
        if (o3 = su2, su2 = false, ku2(t3, e3, n3), su2 = o3, Mu2(e3), a3 & 512 && (U2 || r3 === null || kl2(r3, r3.return)), e3.flags & 32) {
          t3 = e3.stateNode;
          try {
            hn2(t3, ``), P2 = true;
          } catch (t4) {
            Z2(e3, e3.return, t4);
          }
        }
        a3 & 4 && e3.stateNode != null && (t3 = e3.memoizedProps, Fl2(e3, t3, r3 === null ? t3 : r3.memoizedProps)), a3 & 1024 && (cu2 = true);
        break;
      case 6:
        if (ku2(t3, e3, n3), Mu2(e3), a3 & 4) {
          if (e3.stateNode === null) throw Error(i2(162));
          t3 = e3.memoizedProps, n3 = e3.stateNode;
          try {
            n3.nodeValue = t3, P2 = true;
          } catch (t4) {
            Z2(e3, e3.return, t4);
          }
        }
        break;
      case 3:
        if (P2 = false, Wm = null, o3 = Au2, Au2 = bm(t3.containerInfo), ku2(t3, e3, n3), Au2 = o3, Mu2(e3), a3 & 4 && r3 !== null && r3.memoizedState.isDehydrated) try {
          Hh(t3.containerInfo);
        } catch (t4) {
          Z2(e3, e3.return, t4);
        }
        cu2 && (cu2 = false, Nu2(e3)), P2 = false;
        break;
      case 4:
        a3 = su2, su2 = ou2, r3 = Zt2(), o3 = Au2, Au2 = bm(e3.stateNode.containerInfo), ku2(t3, e3, n3), Mu2(e3), Au2 = o3, P2 && fu2 && (pu2 = true), P2 = r3, su2 = a3;
        break;
      case 12:
        ku2(t3, e3, n3), Mu2(e3);
        break;
      case 31:
        ku2(t3, e3, n3), Mu2(e3), a3 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, Ou2(e3, t3)));
        break;
      case 13:
        ku2(t3, e3, n3), Mu2(e3), e3.child.flags & 8192 && e3.memoizedState !== null != (r3 !== null && r3.memoizedState !== null) && (md2 = Je2()), a3 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, Ou2(e3, t3)));
        break;
      case 22:
        o3 = e3.memoizedState !== null, s3 = r3 !== null && r3.memoizedState !== null;
        var c3 = ou2, l3 = U2, u3 = su2;
        ou2 = c3 || o3, su2 = u3 || o3, U2 = l3 || s3, ku2(t3, e3, n3), U2 = l3, su2 = u3, ou2 = c3, Mu2(e3), a3 & 8192 && (t3 = e3.stateNode, t3._visibility = o3 ? t3._visibility & -2 : t3._visibility | 1, !o3 || r3 === null || s3 || ou2 || U2 || (t3 = s3 || U2, n3 = ou2, r3 = U2, ou2 = o3 || ou2, U2 = t3, Lu2(e3, 2), ou2 = n3, U2 = r3), !o3 && su2 || vu2(e3, o3)), a3 & 4 && (t3 = e3.updateQueue, t3 !== null && (n3 = t3.retryQueue, n3 !== null && (t3.retryQueue = null, Ou2(e3, n3))));
        break;
      case 19:
        ku2(t3, e3, n3), Mu2(e3), a3 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, Ou2(e3, t3)));
        break;
      case 30:
        a3 & 512 && (U2 || r3 === null || kl2(r3, r3.return)), a3 = Zt2(), o3 = fu2, s3 = (n3 & 335544064) === n3, c3 = e3.memoizedProps, fu2 = s3 && wi2(c3.default, c3.update) !== `none`, ku2(t3, e3, n3), Mu2(e3), s3 && r3 !== null && P2 && (e3.flags |= 4), fu2 = o3, P2 = a3;
        break;
      case 21:
        break;
      case 7:
        a3 & 512 && (U2 || r3 === null || kl2(r3, r3.return)), r3 && r3.stateNode !== null && (r3.stateNode._fragmentFiber = e3);
      default:
        ku2(t3, e3, n3), Mu2(e3);
    }
  }
  function Mu2(e3) {
    var t3 = e3.flags;
    if (t3 & 2) {
      try {
        for (var n3, r3 = e3.return; r3 !== null; ) {
          if (Il2(r3)) {
            n3 = r3;
            break;
          }
          r3 = r3.return;
        }
        r3 = null;
        for (var a3 = e3.return; a3 !== null; ) {
          if (Nl2(a3)) {
            var o3 = a3.stateNode;
            r3 === null ? r3 = [o3] : r3.push(o3);
          }
          if (H2(a3)) break;
          a3 = a3.return;
        }
        var s3 = r3;
        if (n3 == null) throw Error(i2(160));
        switch (n3.tag) {
          case 27:
            var c3 = n3.stateNode;
            zl2(e3, Ll2(e3), c3, s3);
            break;
          case 5:
            var l3 = n3.stateNode;
            n3.flags & 32 && (hn2(l3, ``), n3.flags &= -33), zl2(e3, Ll2(e3), l3, s3);
            break;
          case 3:
          case 4:
            var u3 = n3.stateNode.containerInfo;
            Rl2(e3, Ll2(e3), u3, s3);
            break;
          default:
            throw Error(i2(161));
        }
      } catch (t4) {
        Z2(e3, e3.return, t4);
      }
      e3.flags &= -3;
    }
    t3 & 4096 && (e3.flags &= -4097);
  }
  function Nu2(e3) {
    if (e3.subtreeFlags & 1024) for (e3 = e3.child; e3 !== null; ) {
      var t3 = e3;
      Nu2(t3), t3.tag === 5 && t3.flags & 1024 && (t3 = t3.stateNode, gh = true, t3.reset(), gh = false), e3 = e3.sibling;
    }
  }
  function Pu2(e3, t3) {
    if (t3.subtreeFlags & 9270) for (t3 = t3.child; t3 !== null; ) Fu2(t3, e3), t3 = t3.sibling;
    else au2(t3, false);
  }
  function Fu2(e3, t3) {
    var n3 = e3.alternate;
    if (n3 === null) Zl2(e3, false);
    else switch (e3.tag) {
      case 3:
        if (mu2 = du2 = false, Gl2(), Pu2(t3, e3), !du2 && !pu2) {
          if (e3 = Wl2, e3 !== null) for (var r3 = 0; r3 < e3.length; r3 += 3) {
            n3 = e3[r3];
            var i3 = e3[r3 + 1];
            Ep2(n3, e3[r3 + 2]), n3 = n3.ownerDocument.documentElement, n3 !== null && n3.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(` + i3 + `)` });
          }
          e3 = t3.containerInfo, e3 = e3.nodeType === 9 ? e3.documentElement : e3.ownerDocument.documentElement, e3 !== null && e3.style.viewTransitionName === `` && (e3.style.viewTransitionName = `none`, e3.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(root)` }), e3.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition` })), mu2 = true;
        }
        Wl2 = null;
        break;
      case 5:
        Pu2(t3, e3);
        break;
      case 4:
        r3 = du2, du2 = false, Pu2(t3, e3), du2 && (pu2 = true), du2 = r3;
        break;
      case 22:
        e3.memoizedState === null && (n3.memoizedState === null ? Pu2(t3, e3) : Zl2(e3, false));
        break;
      case 30:
        r3 = du2, i3 = Gl2(), du2 = false, Pu2(t3, e3), du2 && (e3.flags |= 4);
        var a3 = e3.memoizedProps, o3 = e3.stateNode;
        t3 = Si2(a3, o3), o3 = Si2(n3.memoizedProps, o3);
        var s3 = wi2(a3.default, a3.update);
        s3 === `none` ? t3 = false : (a3 = n3.memoizedState, n3.memoizedState = null, n3 = e3.child, Kl2 = 0, t3 = iu2(e3, n3, t3, o3, s3, a3, true), Kl2 !== (a3 === null ? 0 : a3.length) && (e3.flags |= 32)), e3.flags & 4 && t3 ? (Nd2(e3, e3.memoizedProps.onUpdate), Wl2 = i3) : i3 !== null && (i3.push.apply(i3, Wl2), Wl2 = i3), du2 = e3.flags & 32 ? true : r3;
        break;
      default:
        Pu2(t3, e3);
    }
  }
  function Iu2(e3, t3) {
    if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) _u2(e3, t3.alternate, t3), t3 = t3.sibling;
  }
  function Lu2(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) {
      var n3 = e3, r3 = t3;
      switch (n3.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Tl2(4, n3, n3.return), Lu2(n3, r3);
          break;
        case 1:
          kl2(n3, n3.return);
          var i3 = n3.stateNode;
          typeof i3.componentWillUnmount == `function` && Dl2(n3, n3.return, i3), Lu2(n3, r3);
          break;
        case 27:
          r3 & 2 && gm(n3.stateNode, n3.type, n3.memoizedProps);
        case 5:
          kl2(n3, n3.return), n3.tag !== 5 && n3.tag !== 27 || Ml2(n3), Lu2(n3, r3);
          break;
        case 6:
          Ml2(n3);
          break;
        case 26:
          kl2(n3, n3.return), i3 = n3.stateNode, n3.memoizedState !== null || i3 === null || U2 || i3.parentNode.removeChild(i3), Lu2(n3, r3);
          break;
        case 22:
          n3.memoizedState === null && Lu2(n3, r3);
          break;
        case 30:
          kl2(n3, n3.return), Lu2(n3, r3);
          break;
        case 7:
          kl2(n3, n3.return);
        default:
          Lu2(n3, r3);
      }
      e3 = e3.sibling;
    }
  }
  function Ru2(e3, t3, n3) {
    for (n3 = t3.subtreeFlags & 8772 ? n3 : n3 & -2, t3 = t3.child; t3 !== null; ) {
      var r3 = t3.alternate, i3 = e3, a3 = t3, o3 = a3.flags, s3 = !!(n3 & 1);
      switch (a3.tag) {
        case 0:
        case 11:
        case 15:
          Ru2(i3, a3, n3), wl2(4, a3);
          break;
        case 1:
          if (Ru2(i3, a3, n3), r3 = a3, i3 = r3.stateNode, typeof i3.componentDidMount == `function`) try {
            i3.componentDidMount();
          } catch (e4) {
            Z2(r3, r3.return, e4);
          }
          if (r3 = a3, i3 = r3.updateQueue, i3 !== null) {
            var c3 = r3.stateNode;
            try {
              var l3 = i3.shared.hiddenCallbacks;
              if (l3 !== null) for (i3.shared.hiddenCallbacks = null, i3 = 0; i3 < l3.length; i3++) Do2(l3[i3], c3);
            } catch (e4) {
              Z2(r3, r3.return, e4);
            }
          }
          s3 && o3 & 64 && El2(a3), Ol2(a3, a3.return);
          break;
        case 27:
          n3 & 2 && Bl2(a3);
        case 5:
          a3.tag !== 5 && a3.tag !== 27 || jl2(a3), Ru2(i3, a3, n3), s3 && r3 === null && o3 & 4 && Pl2(a3), Ol2(a3, a3.return);
          break;
        case 6:
          jl2(a3);
          break;
        case 26:
          c3 = a3.stateNode, a3.memoizedState !== null || c3 === null || ou2 || Km(bm(c3.ownerDocument), a3.type, c3), Ru2(i3, a3, n3), s3 && r3 === null && o3 & 4 && Pl2(a3), Ol2(a3, a3.return);
          break;
        case 12:
          Ru2(i3, a3, n3);
          break;
        case 31:
          Ru2(i3, a3, n3), s3 && o3 & 4 && Tu2(i3, a3);
          break;
        case 13:
          Ru2(i3, a3, n3), s3 && o3 & 4 && Eu2(i3, a3);
          break;
        case 22:
          a3.memoizedState === null && Ru2(i3, a3, n3), Ol2(a3, a3.return);
          break;
        case 30:
          Ru2(i3, a3, n3), Ol2(a3, a3.return);
          break;
        case 7:
          Ol2(a3, a3.return);
        default:
          Ru2(i3, a3, n3);
      }
      t3 = t3.sibling;
    }
  }
  function zu2(e3, t3) {
    var n3 = null;
    e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n3 = e3.memoizedState.cachePool.pool), e3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e3 = t3.memoizedState.cachePool.pool), e3 !== n3 && (e3 != null && e3.refCount++, n3 != null && Ia2(n3));
  }
  function Bu2(e3, t3) {
    e3 = null, t3.alternate !== null && (e3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e3 && (t3.refCount++, e3 != null && Ia2(e3));
  }
  function Vu2(e3, t3, n3, r3) {
    var i3 = (n3 & 335544064) === n3;
    if (t3.subtreeFlags & (i3 ? 10262 : 10256)) for (t3 = t3.child; t3 !== null; ) Hu2(e3, t3, n3, r3), t3 = t3.sibling;
    else i3 && ru2(t3);
  }
  function Hu2(e3, t3, n3, r3) {
    var i3 = (n3 & 335544064) === n3;
    i3 && t3.alternate === null && t3.return !== null && t3.return.alternate !== null && nu2(t3);
    var a3 = t3.flags;
    switch (t3.tag) {
      case 0:
      case 11:
      case 15:
        Vu2(e3, t3, n3, r3), a3 & 2048 && wl2(9, t3);
        break;
      case 1:
        Vu2(e3, t3, n3, r3);
        break;
      case 3:
        Vu2(e3, t3, n3, r3), i3 && mu2 && (e3 = e3.containerInfo, e3 = e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, e3.style.viewTransitionName === `root` && (e3.style.viewTransitionName = ``), e3 = e3.ownerDocument.documentElement, e3 !== null && e3.style.viewTransitionName === `none` && (e3.style.viewTransitionName = ``)), a3 & 2048 && (a3 = null, t3.alternate !== null && (a3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== a3 && (t3.refCount++, a3 != null && Ia2(a3)));
        break;
      case 12:
        if (a3 & 2048) {
          Vu2(e3, t3, n3, r3), a3 = t3.stateNode;
          try {
            var o3 = t3.memoizedProps, s3 = o3.id, c3 = o3.onPostCommit;
            typeof c3 == `function` && c3(s3, t3.alternate === null ? `mount` : `update`, a3.passiveEffectDuration, -0);
          } catch (e4) {
            Z2(t3, t3.return, e4);
          }
        } else Vu2(e3, t3, n3, r3);
        break;
      case 31:
        Vu2(e3, t3, n3, r3);
        break;
      case 13:
        Vu2(e3, t3, n3, r3);
        break;
      case 23:
        break;
      case 22:
        o3 = t3.stateNode, s3 = t3.alternate, t3.memoizedState === null ? (i3 && s3 !== null && s3.memoizedState !== null && nu2(t3), o3._visibility & 2 ? Vu2(e3, t3, n3, r3) : (o3._visibility |= 2, Uu2(e3, t3, n3, r3, !!(t3.subtreeFlags & 10256) || false))) : (i3 && s3 !== null && s3.memoizedState === null && nu2(s3), o3._visibility & 2 ? Vu2(e3, t3, n3, r3) : Wu2(e3, t3)), a3 & 2048 && zu2(s3, t3);
        break;
      case 24:
        Vu2(e3, t3, n3, r3), a3 & 2048 && Bu2(t3.alternate, t3);
        break;
      case 30:
        i3 && (a3 = t3.alternate, a3 !== null && (Yl2(a3.child, true), Yl2(t3.child, true))), Vu2(e3, t3, n3, r3);
        break;
      default:
        Vu2(e3, t3, n3, r3);
    }
  }
  function Uu2(e3, t3, n3, r3, i3) {
    for (i3 &&= !!(t3.subtreeFlags & 10256) || false, t3 = t3.child; t3 !== null; ) {
      var a3 = e3, o3 = t3, s3 = n3, c3 = r3, l3 = o3.flags;
      switch (o3.tag) {
        case 0:
        case 11:
        case 15:
          Uu2(a3, o3, s3, c3, i3), wl2(8, o3);
          break;
        case 23:
          break;
        case 22:
          var u3 = o3.stateNode;
          o3.memoizedState === null ? (u3._visibility |= 2, Uu2(a3, o3, s3, c3, i3)) : u3._visibility & 2 ? Uu2(a3, o3, s3, c3, i3) : Wu2(a3, o3), i3 && l3 & 2048 && zu2(o3.alternate, o3);
          break;
        case 24:
          Uu2(a3, o3, s3, c3, i3), i3 && l3 & 2048 && Bu2(o3.alternate, o3);
          break;
        default:
          Uu2(a3, o3, s3, c3, i3);
      }
      t3 = t3.sibling;
    }
  }
  function Wu2(e3, t3) {
    if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
      var n3 = e3, r3 = t3, i3 = r3.flags;
      switch (r3.tag) {
        case 22:
          Wu2(n3, r3), i3 & 2048 && zu2(r3.alternate, r3);
          break;
        case 24:
          Wu2(n3, r3), i3 & 2048 && Bu2(r3.alternate, r3);
          break;
        default:
          Wu2(n3, r3);
      }
      t3 = t3.sibling;
    }
  }
  var Gu2 = 8192;
  function Ku2(e3, t3, n3) {
    if (e3.subtreeFlags & Gu2) for (e3 = e3.child; e3 !== null; ) qu2(e3, t3, n3), e3 = e3.sibling;
  }
  function qu2(e3, t3, n3) {
    switch (e3.tag) {
      case 26:
        Ku2(e3, t3, n3), e3.flags & Gu2 && (e3.memoizedState === null ? (e3 = e3.stateNode, (t3 & 335544128) === t3 && Zm(n3, e3)) : Qm(n3, Au2, e3.memoizedState, e3.memoizedProps));
        break;
      case 5:
        Ku2(e3, t3, n3), e3.flags & Gu2 && (e3 = e3.stateNode, (t3 & 335544128) === t3 && Zm(n3, e3));
        break;
      case 3:
      case 4:
        var r3 = Au2;
        Au2 = bm(e3.stateNode.containerInfo), Ku2(e3, t3, n3), Au2 = r3;
        break;
      case 22:
        e3.memoizedState === null && (r3 = e3.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = Gu2, Gu2 = 16777216, Ku2(e3, t3, n3), Gu2 = r3) : Ku2(e3, t3, n3));
        break;
      case 30:
        if ((e3.flags & Gu2) !== 0 && (r3 = e3.memoizedProps.name, r3 != null && r3 !== `auto`)) {
          var i3 = e3.stateNode;
          i3.paired = null, Hl2 === null && (Hl2 = /* @__PURE__ */ new Map()), Hl2.set(r3, i3);
        }
        Ku2(e3, t3, n3);
        break;
      default:
        Ku2(e3, t3, n3);
    }
  }
  function Ju2(e3) {
    var t3 = e3.alternate;
    if (t3 !== null && (e3 = t3.child, e3 !== null)) {
      t3.child = null;
      do
        t3 = e3.sibling, e3.sibling = null, e3 = t3;
      while (e3 !== null);
    }
  }
  function Yu2(e3) {
    var t3 = e3.deletions;
    if (e3.flags & 16) {
      if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        uu2 = r3, Qu2(r3, e3);
      }
      Ju2(e3);
    }
    if (e3.subtreeFlags & 10256) for (e3 = e3.child; e3 !== null; ) Xu2(e3), e3 = e3.sibling;
  }
  function Xu2(e3) {
    switch (e3.tag) {
      case 0:
      case 11:
      case 15:
        Yu2(e3), e3.flags & 2048 && Tl2(9, e3, e3.return);
        break;
      case 3:
        Yu2(e3);
        break;
      case 12:
        Yu2(e3);
        break;
      case 22:
        var t3 = e3.stateNode;
        e3.memoizedState !== null && t3._visibility & 2 && (e3.return === null || e3.return.tag !== 13) ? (t3._visibility &= -3, Zu2(e3)) : Yu2(e3);
        break;
      default:
        Yu2(e3);
    }
  }
  function Zu2(e3) {
    var t3 = e3.deletions;
    if (e3.flags & 16) {
      if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        uu2 = r3, Qu2(r3, e3);
      }
      Ju2(e3);
    }
    for (e3 = e3.child; e3 !== null; ) {
      switch (t3 = e3, t3.tag) {
        case 0:
        case 11:
        case 15:
          Tl2(8, t3, t3.return), Zu2(t3);
          break;
        case 22:
          n3 = t3.stateNode, n3._visibility & 2 && (n3._visibility &= -3, Zu2(t3));
          break;
        default:
          Zu2(t3);
      }
      e3 = e3.sibling;
    }
  }
  function Qu2(e3, t3) {
    for (; uu2 !== null; ) {
      var n3 = uu2;
      switch (n3.tag) {
        case 0:
        case 11:
        case 15:
          Tl2(8, n3, t3);
          break;
        case 23:
        case 22:
          if (n3.memoizedState !== null && n3.memoizedState.cachePool !== null) {
            var r3 = n3.memoizedState.cachePool.pool;
            r3 != null && r3.refCount++;
          }
          break;
        case 24:
          Ia2(n3.memoizedState.cache);
      }
      if (r3 = n3.child, r3 !== null) r3.return = n3, uu2 = r3;
      else a: for (n3 = e3; uu2 !== null; ) {
        r3 = uu2;
        var i3 = r3.sibling, a3 = r3.return;
        if (xu2(r3), r3 === n3) {
          uu2 = null;
          break a;
        }
        if (i3 !== null) {
          i3.return = a3, uu2 = i3;
          break a;
        }
        uu2 = a3;
      }
    }
  }
  var $u2 = { getCacheForType: function(e3) {
    var t3 = Oa2(Pa2), n3 = t3.data.get(e3);
    return n3 === void 0 && (n3 = e3(), t3.data.set(e3, n3)), n3;
  }, cacheSignal: function() {
    return Oa2(Pa2).controller.signal;
  } }, ed2 = typeof WeakMap == `function` ? WeakMap : Map, G2 = 0, K2 = null, q2 = null, J2 = 0, Y2 = 0, td2 = null, nd2 = false, rd2 = false, id2 = false, ad2 = 0, X2 = 0, od2 = 0, sd2 = 0, cd2 = 0, ld2 = 0, ud2 = 0, dd2 = null, fd2 = null, pd2 = false, md2 = 0, hd2 = 0, gd2 = 1 / 0, _d2 = null, vd2 = null, yd2 = 0, bd2 = null, xd2 = null, Sd2 = 0, Cd2 = 0, wd2 = null, Td2 = null, Ed2 = null, Dd2 = null, Od2 = null, kd2 = 0, Ad2 = null;
  function jd2() {
    return G2 & 2 && J2 !== 0 ? J2 & -J2 : E2.T === null ? Et2() : Pf2();
  }
  function Md2() {
    if (ld2 === 0) {
      if (!(J2 & 536870912) || L2) {
        var e3 = ut2;
        ut2 <<= 1, !(ut2 & 3932160) && (ut2 = 262144), ld2 = e3;
      } else ld2 = 536870912;
    }
    return e3 = Po2.current, e3 !== null && (e3.flags |= 32), ld2;
  }
  function Nd2(e3, t3) {
    if (t3 != null) {
      var n3 = e3.stateNode, r3 = n3.ref;
      r3 === null && (r3 = n3.ref = Pp2(Si2(e3.memoizedProps, n3))), Dd2 === null && (Dd2 = []), Dd2.push(t3.bind(null, r3));
    }
  }
  function Pd2(e3, t3, n3) {
    (e3 === K2 && (Y2 === 2 || Y2 === 9) || e3.cancelPendingCommit !== null) && (Vd2(e3, 0), Rd2(e3, J2, ld2, false)), yt2(e3, n3), (!(G2 & 2) || e3 !== K2) && (e3 === K2 && (!(G2 & 2) && (sd2 |= n3), X2 === 4 && Rd2(e3, J2, ld2, false)), Ef2(e3));
  }
  function Fd2(e3, t3, n3) {
    if (G2 & 6) throw Error(i2(327));
    var r3 = !n3 && !(t3 & 127) && (t3 & e3.expiredLanes) === 0 || mt2(e3, t3), a3 = r3 ? Yd2(e3, t3) : qd2(e3, t3, true), o3 = r3;
    do {
      if (a3 === 0) {
        rd2 && !r3 && Rd2(e3, t3, 0, false);
        break;
      }
      if (n3 = e3.current.alternate, o3 && !Ld2(n3)) a3 = qd2(e3, t3, false), o3 = false;
      else {
        if (a3 === 2) {
          if (o3 = t3, e3.errorRecoveryDisabledLanes & o3) var s3 = 0;
          else s3 = e3.pendingLanes & -536870913, s3 = s3 === 0 ? s3 & 536870912 ? 536870912 : 0 : s3;
          if (s3 !== 0) {
            t3 = s3;
            a: {
              var c3 = e3;
              a3 = dd2;
              var l3 = c3.current.memoizedState.isDehydrated;
              if (l3 && (Vd2(c3, s3).flags |= 256), s3 = qd2(c3, s3, false), s3 !== 2 && s3 !== 6) {
                if (id2 && !l3) {
                  c3.errorRecoveryDisabledLanes |= o3, sd2 |= o3, a3 = 4;
                  break a;
                }
                o3 = fd2, fd2 = a3, o3 !== null && (fd2 === null ? fd2 = o3 : fd2.push.apply(fd2, o3));
              }
              a3 = s3;
            }
            if (o3 = false, a3 !== 2) continue;
          }
        }
        if (a3 === 1) {
          Vd2(e3, 0), Rd2(e3, t3, 0, true);
          break;
        }
        a: {
          switch (r3 = e3, o3 = a3, o3) {
            case 0:
            case 1:
              throw Error(i2(345));
            case 4:
              if ((t3 & 4194048) !== t3 && (t3 & 62914560) !== t3) break;
            case 6:
              Rd2(r3, t3, ld2, !nd2);
              break a;
            case 2:
              fd2 = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i2(329));
          }
          if ((t3 & 62914560) === t3 && (a3 = md2 + 300 - Je2(), 10 < a3)) {
            if (Rd2(r3, t3, ld2, !nd2), pt2(r3, 0, true) !== 0) break a;
            Sd2 = t3, r3.timeoutHandle = gp2(Id2.bind(null, r3, n3, fd2, _d2, pd2, t3, ld2, sd2, ud2, nd2, o3, `Throttled`, -0, 0), a3);
            break a;
          }
          Id2(r3, n3, fd2, _d2, pd2, t3, ld2, sd2, ud2, nd2, o3, null, -0, 0);
        }
        break;
      }
    } while (1);
    Ef2(e3);
  }
  function Id2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d2, f3, p2) {
    e3.timeoutHandle = -1;
    var m3 = t3.subtreeFlags, h2 = (a3 & 335544064) === a3;
    d2 = null, (h2 || m3 & 8192 || (m3 & 16785408) == 16785408) && (d2 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Cn2 }, Hl2 = null, qu2(t3, a3, d2), h2 && (m3 = d2, h2 = e3.containerInfo, h2 = (h2.nodeType === 9 ? h2 : h2.ownerDocument).__reactViewTransition, h2 != null && (m3.count++, m3.waitingForViewTransition = true, m3 = nh.bind(m3), h2.finished.then(m3, m3))), m3 = (a3 & 62914560) === a3 ? md2 - Je2() : (a3 & 4194048) === a3 ? hd2 - Je2() : 0, m3 = eh(d2, m3), m3 !== null) ? (Sd2 = a3, e3.cancelPendingCommit = m3(nf2.bind(null, e3, t3, a3, n3, r3, i3, o3, s3, c3, l3, u3, d2, null, f3, p2)), Rd2(e3, a3, o3, !l3)) : nf2(e3, t3, a3, n3, r3, i3, o3, s3, c3, l3, u3, d2);
  }
  function Ld2(e3) {
    for (var t3 = e3; ; ) {
      var n3 = t3.tag;
      if ((n3 === 0 || n3 === 11 || n3 === 15) && t3.flags & 16384 && (n3 = t3.updateQueue, n3 !== null && (n3 = n3.stores, n3 !== null))) for (var r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3], a3 = i3.getSnapshot;
        i3 = i3.value;
        try {
          if (!Kr2(a3(), i3)) return false;
        } catch {
          return false;
        }
      }
      if (n3 = t3.child, t3.subtreeFlags & 16384 && n3 !== null) n3.return = t3, t3 = n3;
      else {
        if (t3 === e3) break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e3) return true;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
    }
    return true;
  }
  function Rd2(e3, t3, n3, r3) {
    t3 = ht2(e3, t3), t3 &= ~cd2, t3 &= ~sd2, e3.suspendedLanes |= t3, e3.pingedLanes &= ~t3, r3 && (e3.warmLanes |= t3), r3 = e3.expirationTimes;
    for (var i3 = t3; 0 < i3; ) {
      var a3 = 31 - at2(i3), o3 = 1 << a3;
      r3[a3] = -1, i3 &= ~o3;
    }
    n3 !== 0 && xt2(e3, n3, t3);
  }
  function zd2() {
    return G2 & 6 ? true : (Df2(0, false), false);
  }
  function Bd2() {
    if (q2 !== null) {
      if (Y2 === 0) var e3 = q2.return;
      else e3 = q2, ba2 = ya2 = null, ss2(e3), co2 = null, lo2 = 0, e3 = q2;
      for (; e3 !== null; ) Cl2(e3.alternate, e3), e3 = e3.return;
      q2 = null;
    }
  }
  function Vd2(e3, t3) {
    var n3 = e3.timeoutHandle;
    return n3 !== -1 && (e3.timeoutHandle = -1, _p2(n3)), n3 = e3.cancelPendingCommit, n3 !== null && (e3.cancelPendingCommit = null, n3()), Sd2 = 0, Bd2(), K2 = e3, q2 = n3 = zi2(e3.current, null), J2 = t3, Y2 = 0, td2 = null, nd2 = false, rd2 = mt2(e3, t3), id2 = false, ud2 = ld2 = cd2 = sd2 = od2 = X2 = 0, fd2 = dd2 = null, pd2 = false, ad2 = ht2(e3, t3), ki2(), n3;
  }
  function Hd2(e3, t3) {
    R2 = null, E2.H = _c2, t3 === Qa2 || t3 === eo2 ? (t3 = oo2(), Y2 = 3) : t3 === $a2 ? (t3 = oo2(), Y2 = 4) : Y2 = t3 === Fc2 ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, td2 = t3, q2 === null && (X2 = 1, kc2(e3, qi2(t3, e3.current)));
  }
  function Ud2() {
    var e3 = Po2.current;
    return e3 === null ? true : (J2 & 4194048) === J2 ? Fo2 === null : (J2 & 62914560) === J2 || J2 & 536870912 ? e3 === Fo2 : false;
  }
  function Wd2() {
    var e3 = E2.H;
    return E2.H = _c2, e3 === null ? _c2 : e3;
  }
  function Gd2() {
    var e3 = E2.A;
    return E2.A = $u2, e3;
  }
  function Kd2() {
    X2 = 4, nd2 || (J2 & 4194048) !== J2 && Po2.current !== null || (rd2 = true), !(od2 & 134217727) && !(sd2 & 134217727) || K2 === null || Rd2(K2, J2, ld2, false);
  }
  function qd2(e3, t3, n3) {
    var r3 = G2;
    G2 |= 2;
    var i3 = Wd2(), a3 = Gd2();
    (K2 !== e3 || J2 !== t3) && (_d2 = null, Vd2(e3, t3)), t3 = false;
    var o3 = X2;
    a: do
      try {
        if (Y2 !== 0 && q2 !== null) {
          var s3 = q2, c3 = td2;
          switch (Y2) {
            case 8:
              Bd2(), o3 = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              Po2.current === null && (t3 = true);
              var l3 = Y2;
              if (Y2 = 0, td2 = null, $d2(e3, s3, c3, l3), n3 && rd2) {
                o3 = 0;
                break a;
              }
              break;
            default:
              l3 = Y2, Y2 = 0, td2 = null, $d2(e3, s3, c3, l3);
          }
        }
        Jd2(), o3 = X2;
        break;
      } catch (t4) {
        Hd2(e3, t4);
      }
    while (1);
    return t3 && e3.shellSuspendCounter++, ba2 = ya2 = null, G2 = r3, E2.H = i3, E2.A = a3, q2 === null && (K2 = null, J2 = 0, ki2()), o3;
  }
  function Jd2() {
    for (; q2 !== null; ) Zd2(q2);
  }
  function Yd2(e3, t3) {
    var n3 = G2;
    G2 |= 2;
    var r3 = Wd2(), a3 = Gd2();
    K2 !== e3 || J2 !== t3 ? (_d2 = null, gd2 = Je2() + 500, Vd2(e3, t3)) : rd2 = mt2(e3, t3);
    a: do
      try {
        if (Y2 !== 0 && q2 !== null) {
          t3 = q2;
          var o3 = td2;
          b: switch (Y2) {
            case 1:
              Y2 = 0, td2 = null, $d2(e3, t3, o3, 1);
              break;
            case 2:
            case 9:
              if (no2(o3)) {
                Y2 = 0, td2 = null, Qd2(t3);
                break;
              }
              t3 = function() {
                Y2 !== 2 && Y2 !== 9 || K2 !== e3 || (Y2 = 7), Ef2(e3);
              }, o3.then(t3, t3);
              break a;
            case 3:
              Y2 = 7;
              break a;
            case 4:
              Y2 = 5;
              break a;
            case 7:
              no2(o3) ? (Y2 = 0, td2 = null, Qd2(t3)) : (Y2 = 0, td2 = null, $d2(e3, t3, o3, 7));
              break;
            case 5:
              var s3 = null;
              switch (q2.tag) {
                case 26:
                  s3 = q2.memoizedState;
                case 5:
                case 27:
                  var c3 = q2;
                  if (s3 ? Ym(s3) : c3.stateNode.complete) {
                    Y2 = 0, td2 = null;
                    var l3 = c3.sibling;
                    if (l3 !== null) q2 = l3;
                    else {
                      var u3 = c3.return;
                      u3 === null ? q2 = null : (q2 = u3, ef2(u3));
                    }
                    break b;
                  }
              }
              Y2 = 0, td2 = null, $d2(e3, t3, o3, 5);
              break;
            case 6:
              Y2 = 0, td2 = null, $d2(e3, t3, o3, 6);
              break;
            case 8:
              Bd2(), X2 = 6;
              break a;
            default:
              throw Error(i2(462));
          }
        }
        Xd2();
        break;
      } catch (t4) {
        Hd2(e3, t4);
      }
    while (1);
    return ba2 = ya2 = null, E2.H = r3, E2.A = a3, G2 = n3, q2 === null ? (K2 = null, J2 = 0, ki2(), X2) : 0;
  }
  function Xd2() {
    for (; q2 !== null && !Ke2(); ) Zd2(q2);
  }
  function Zd2(e3) {
    var t3 = hl2(e3.alternate, e3, ad2);
    e3.memoizedProps = e3.pendingProps, t3 === null ? ef2(e3) : q2 = t3;
  }
  function Qd2(e3) {
    var t3 = e3, n3 = t3.alternate;
    switch (t3.tag) {
      case 15:
      case 0:
        t3 = Yc2(n3, t3, t3.pendingProps, t3.type, void 0, J2);
        break;
      case 11:
        t3 = Yc2(n3, t3, t3.pendingProps, t3.type.render, t3.ref, J2);
        break;
      case 5:
        ss2(t3);
        var r3 = t3;
        r3 === sa2 && (L2 ? (pa2(r3), r3.tag === 5 && r3.stateNode != null && (I2 = r3.stateNode)) : (pa2(r3), L2 = true));
      default:
        Cl2(n3, t3), t3 = q2 = Bi2(t3, ad2), t3 = hl2(n3, t3, ad2);
    }
    e3.memoizedProps = e3.pendingProps, t3 === null ? ef2(e3) : q2 = t3;
  }
  function $d2(e3, t3, n3, r3) {
    ba2 = ya2 = null, ss2(t3), co2 = null, lo2 = 0;
    var i3 = t3.return;
    try {
      if (Pc2(e3, i3, t3, n3, J2)) {
        X2 = 1, kc2(e3, qi2(n3, e3.current)), q2 = null;
        return;
      }
    } catch (t4) {
      if (i3 !== null) throw q2 = i3, t4;
      X2 = 1, kc2(e3, qi2(n3, e3.current)), q2 = null;
      return;
    }
    t3.flags & 32768 ? (L2 || r3 === 1 ? e3 = true : rd2 || J2 & 536870912 ? e3 = false : (nd2 = e3 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = Po2.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), tf2(t3, e3)) : ef2(t3);
  }
  function ef2(e3) {
    var t3 = e3;
    do {
      if (t3.flags & 32768) {
        tf2(t3, nd2);
        return;
      }
      e3 = t3.return;
      var n3 = xl2(t3.alternate, t3, ad2);
      if (n3 !== null) {
        q2 = n3;
        return;
      }
      if (t3 = t3.sibling, t3 !== null) {
        q2 = t3;
        return;
      }
      q2 = t3 = e3;
    } while (t3 !== null);
    X2 === 0 && (X2 = 5);
  }
  function tf2(e3, t3) {
    do {
      var n3 = Sl2(e3.alternate, e3);
      if (n3 !== null) {
        n3.flags &= 32767, q2 = n3;
        return;
      }
      if (n3 = e3.return, n3 !== null && (n3.flags |= 32768, n3.subtreeFlags = 0, n3.deletions = null), !t3 && (e3 = e3.sibling, e3 !== null)) {
        q2 = e3;
        return;
      }
      q2 = e3 = n3;
    } while (e3 !== null);
    X2 = 6, q2 = null;
  }
  function nf2(e3, t3, n3, r3, a3, o3, s3, c3, l3, u3, d2, f3) {
    e3.cancelPendingCommit = null;
    do
      df2();
    while (yd2 !== 0);
    if (G2 & 6) throw Error(i2(327));
    if (t3 !== null) {
      if (t3 === e3.current) throw Error(i2(177));
      e3 === K2 && (q2 = K2 = null, J2 = 0), xd2 = t3, bd2 = e3, Sd2 = n3, wd2 = a3, Td2 = r3, rf2(e3, t3, n3, s3, c3, l3, f3);
    }
  }
  function rf2(e3, t3, n3, r3, i3, a3, o3) {
    var s3 = t3.lanes | t3.childLanes;
    if (Cd2 = s3, s3 |= Oi2, bt2(e3, n3, s3, r3, i3, a3), Dd2 = null, (n3 & 335544064) === n3 ? (Od2 = za2(e3), r3 = 10262) : (Od2 = null, r3 = 10256), (t3.subtreeFlags & r3) !== 0 || (t3.flags & r3) !== 0 ? (e3.callbackNode = null, e3.callbackPriority = 0, yf2(Qe2, function() {
      return ff2(), null;
    })) : (e3.callbackNode = null, e3.callbackPriority = 0), Vl2 = false, r3 = !!(t3.flags & 13878), t3.subtreeFlags & 13878 || r3) {
      r3 = E2.T, E2.T = null, i3 = D2.p, D2.p = 2, a3 = G2, G2 |= 4;
      try {
        hu2(e3, t3, n3);
      } finally {
        G2 = a3, D2.p = i3, E2.T = r3;
      }
    }
    yd2 = 1, Vl2 ? Ed2 = Mp2(o3, e3.containerInfo, Od2, sf2, cf2, of2, lf2, ff2, af2, null, null) : (sf2(), cf2(), lf2());
  }
  function af2(e3) {
    if (yd2 !== 0) {
      var t3 = bd2.onRecoverableError;
      t3(e3, { componentStack: null });
    }
  }
  function of2() {
    yd2 === 3 && (yd2 = 0, Fu2(xd2, bd2), yd2 = 4);
  }
  function sf2() {
    if (yd2 === 1) {
      yd2 = 0;
      var e3 = bd2, t3 = xd2, n3 = Sd2, r3 = !!(t3.flags & 13878);
      if (t3.subtreeFlags & 13878 || r3) {
        r3 = E2.T, E2.T = null;
        var i3 = D2.p;
        D2.p = 2;
        var a3 = G2;
        G2 |= 4;
        try {
          fu2 = pu2 = false, ju2(t3, e3, n3), n3 = cp2;
          var o3 = Qr2(e3.containerInfo), s3 = n3.focusedElem, c3 = n3.selectionRange;
          if (o3 !== s3 && s3 && s3.ownerDocument && Zr2(s3.ownerDocument.documentElement, s3)) {
            if (c3 !== null && $r2(s3)) {
              var l3 = c3.start, u3 = c3.end;
              if (u3 === void 0 && (u3 = l3), `selectionStart` in s3) s3.selectionStart = l3, s3.selectionEnd = Math.min(u3, s3.value.length);
              else {
                var d2 = s3.ownerDocument || document, f3 = d2 && d2.defaultView || window;
                if (f3.getSelection) {
                  var p2 = f3.getSelection(), m3 = s3.textContent.length, h2 = Math.min(c3.start, m3), g3 = c3.end === void 0 ? h2 : Math.min(c3.end, m3);
                  !p2.extend && h2 > g3 && (o3 = g3, g3 = h2, h2 = o3);
                  var _3 = Xr2(s3, h2), v3 = Xr2(s3, g3);
                  if (_3 && v3 && (p2.rangeCount !== 1 || p2.anchorNode !== _3.node || p2.anchorOffset !== _3.offset || p2.focusNode !== v3.node || p2.focusOffset !== v3.offset)) {
                    var y3 = d2.createRange();
                    y3.setStart(_3.node, _3.offset), p2.removeAllRanges(), h2 > g3 ? (p2.addRange(y3), p2.extend(v3.node, v3.offset)) : (y3.setEnd(v3.node, v3.offset), p2.addRange(y3));
                  }
                }
              }
            }
            for (d2 = [], p2 = s3; p2 = p2.parentNode; ) p2.nodeType === 1 && d2.push({ element: p2, left: p2.scrollLeft, top: p2.scrollTop });
            for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d2.length; s3++) {
              var b3 = d2[s3];
              b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
            }
          }
          gh = !!sp2, cp2 = sp2 = null;
        } finally {
          G2 = a3, D2.p = i3, E2.T = r3;
        }
      }
      e3.current = t3, yd2 = 2;
    }
  }
  function cf2() {
    if (yd2 === 2) {
      yd2 = 0;
      var e3 = bd2, t3 = xd2, n3 = !!(t3.flags & 8772);
      if (t3.subtreeFlags & 8772 || n3) {
        n3 = E2.T, E2.T = null;
        var r3 = D2.p;
        D2.p = 2;
        var i3 = G2;
        G2 |= 4;
        try {
          _u2(e3, t3.alternate, t3);
        } finally {
          G2 = i3, D2.p = r3, E2.T = n3;
        }
      }
      yd2 = 3;
    }
  }
  function lf2() {
    if (yd2 === 4 || yd2 === 3) {
      yd2 = 0;
      var e3 = Ed2;
      Ed2 = null, qe2();
      var t3 = bd2, n3 = xd2, r3 = Sd2, i3 = Td2, a3 = (r3 & 335544064) === r3 ? 10262 : 10256;
      if ((n3.subtreeFlags & a3) !== 0 || (n3.flags & a3) !== 0 ? yd2 = 5 : (yd2 = 0, xd2 = bd2 = null, uf2(t3, t3.pendingLanes)), a3 = t3.pendingLanes, a3 === 0 && (vd2 = null), Tt2(r3), n3 = n3.stateNode, j2 && typeof j2.onCommitFiberRoot == `function`) try {
        j2.onCommitFiberRoot(rt2, n3, void 0, (n3.current.flags & 128) == 128);
      } catch {
      }
      if (i3 !== null) {
        n3 = E2.T, a3 = D2.p, D2.p = 2, E2.T = null;
        try {
          for (var o3 = t3.onRecoverableError, s3 = 0; s3 < i3.length; s3++) {
            var c3 = i3[s3];
            o3(c3.value, { componentStack: c3.stack });
          }
        } finally {
          E2.T = n3, D2.p = a3;
        }
      }
      if (i3 = Dd2, o3 = Od2, Od2 = null, i3 !== null && (Dd2 = null, o3 === null && (o3 = []), e3 !== null)) for (c3 = 0; c3 < i3.length; c3++) n3 = (0, i3[c3])(o3), n3 !== void 0 && e3.finished.finally(n3);
      Sd2 & 3 && df2(), Ef2(t3), a3 = t3.pendingLanes, r3 & 261930 && a3 & 42 ? t3 === Ad2 ? kd2++ : (kd2 = 0, Ad2 = t3) : (kd2 = 0, Ad2 = null), Df2(0, false);
    }
  }
  function uf2(e3, t3) {
    (e3.pooledCacheLanes &= t3) === 0 && (t3 = e3.pooledCache, t3 != null && (e3.pooledCache = null, Ia2(t3)));
  }
  function df2() {
    return Ed2 !== null && (Ed2.skipTransition(), Ed2 = null), sf2(), cf2(), lf2(), ff2();
  }
  function ff2() {
    if (yd2 !== 5) return false;
    var e3 = bd2, t3 = Cd2;
    Cd2 = 0;
    var n3 = Tt2(Sd2), r3 = E2.T, a3 = D2.p;
    try {
      D2.p = 32 > n3 ? 32 : n3, E2.T = null, n3 = wd2, wd2 = null;
      var o3 = bd2, s3 = Sd2;
      if (yd2 = 0, xd2 = bd2 = null, Sd2 = 0, G2 & 6) throw Error(i2(331));
      var c3 = G2;
      if (G2 |= 4, Xu2(o3.current), Hu2(o3, o3.current, s3, n3), G2 = c3, Df2(0, false), j2 && typeof j2.onPostCommitFiberRoot == `function`) try {
        j2.onPostCommitFiberRoot(rt2, o3);
      } catch {
      }
      return true;
    } finally {
      D2.p = a3, E2.T = r3, uf2(e3, t3);
    }
  }
  function pf2(e3, t3, n3) {
    t3 = qi2(n3, t3), t3 = jc2(e3.stateNode, t3, 2), e3 = xo2(e3, t3, 2), e3 !== null && (yt2(e3, 2), Ef2(e3));
  }
  function Z2(e3, t3, n3) {
    if (e3.tag === 3) pf2(e3, e3, n3);
    else for (; t3 !== null; ) {
      if (t3.tag === 3) {
        pf2(t3, e3, n3);
        break;
      }
      if (t3.tag === 1) {
        var r3 = t3.stateNode;
        if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (vd2 === null || !vd2.has(r3))) {
          e3 = qi2(n3, e3), n3 = Mc2(2), r3 = xo2(t3, n3, 2), r3 !== null && (Nc2(n3, r3, t3, e3), yt2(r3, 2), Ef2(r3));
          break;
        }
      }
      t3 = t3.return;
    }
  }
  function mf2(e3, t3, n3) {
    var r3 = e3.pingCache;
    if (r3 === null) {
      r3 = e3.pingCache = new ed2();
      var i3 = /* @__PURE__ */ new Set();
      r3.set(t3, i3);
    } else i3 = r3.get(t3), i3 === void 0 && (i3 = /* @__PURE__ */ new Set(), r3.set(t3, i3));
    i3.has(n3) || (id2 = true, i3.add(n3), e3 = hf2.bind(null, e3, t3, n3), t3.then(e3, e3));
  }
  function hf2(e3, t3, n3) {
    var r3 = e3.pingCache;
    r3 !== null && r3.delete(t3), e3.pingedLanes |= e3.suspendedLanes & n3, e3.warmLanes &= ~n3, K2 === e3 && (J2 & n3) === n3 && (X2 === 4 || X2 === 3 && (J2 & 62914560) === J2 && 300 > Je2() - md2 ? G2 & 2 ? cd2 |= n3 : Vd2(e3, 0) : cd2 |= n3, ud2 === J2 && (ud2 = 0)), Ef2(e3);
  }
  function gf2(e3, t3) {
    t3 === 0 && (t3 = _t2()), e3 = Mi2(e3, t3), e3 !== null && (yt2(e3, t3), Ef2(e3));
  }
  function _f2(e3) {
    var t3 = e3.memoizedState, n3 = 0;
    t3 !== null && (n3 = t3.retryLane), gf2(e3, n3);
  }
  function vf2(e3, t3) {
    var n3 = 0;
    switch (e3.tag) {
      case 31:
      case 13:
        var r3 = e3.stateNode, a3 = e3.memoizedState;
        a3 !== null && (n3 = a3.retryLane);
        break;
      case 19:
        r3 = e3.stateNode;
        break;
      case 22:
        r3 = e3.stateNode._retryCache;
        break;
      default:
        throw Error(i2(314));
    }
    r3 !== null && r3.delete(t3), gf2(e3, n3);
  }
  function yf2(e3, t3) {
    return We2(e3, t3);
  }
  var bf2 = null, xf2 = null, Sf2 = false, Cf2 = false, wf2 = false, Tf2 = 0;
  function Ef2(e3) {
    e3 !== xf2 && e3.next === null && (xf2 === null ? bf2 = xf2 = e3 : xf2 = xf2.next = e3), Cf2 = true, Sf2 || (Sf2 = true, Nf2());
  }
  function Df2(e3, t3) {
    if (!wf2 && Cf2) {
      wf2 = true;
      do
        for (var n3 = false, r3 = bf2; r3 !== null; ) {
          if (!t3) {
            if (e3 !== 0) {
              var i3 = r3.pendingLanes;
              if (i3 === 0) var a3 = 0;
              else {
                var o3 = r3.suspendedLanes, s3 = r3.pingedLanes;
                a3 = (1 << 31 - at2(42 | e3) + 1) - 1, a3 &= i3 & ~(o3 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
              }
              a3 !== 0 && (n3 = true, Mf2(r3, a3));
            } else a3 = J2, a3 = pt2(r3, r3 === K2 ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== -1), !(a3 & 3) || mt2(r3, a3) || (n3 = true, Mf2(r3, a3));
          }
          r3 = r3.next;
        }
      while (n3);
      wf2 = false;
    }
  }
  function Of2() {
    kf2();
  }
  function kf2() {
    Cf2 = Sf2 = false;
    var e3 = 0;
    Tf2 !== 0 && hp2() && (e3 = Tf2);
    for (var t3 = Je2(), n3 = null, r3 = bf2; r3 !== null; ) {
      var i3 = r3.next, a3 = Af2(r3, t3);
      a3 === 0 ? (r3.next = null, n3 === null ? bf2 = i3 : n3.next = i3, i3 === null && (xf2 = n3)) : (n3 = r3, (e3 !== 0 || a3 & 3) && (Cf2 = true)), r3 = i3;
    }
    yd2 !== 0 && yd2 !== 5 || Df2(e3, false), Tf2 !== 0 && (Tf2 = 0);
  }
  function Af2(e3, t3) {
    for (var n3 = e3.suspendedLanes, r3 = e3.pingedLanes, i3 = e3.expirationTimes, a3 = e3.pendingLanes & -62914561; 0 < a3; ) {
      var o3 = 31 - at2(a3), s3 = 1 << o3, c3 = i3[o3];
      c3 === -1 ? ((s3 & n3) === 0 || (s3 & r3) !== 0) && (i3[o3] = gt2(s3, t3)) : c3 <= t3 && (e3.expiredLanes |= s3), a3 &= ~s3;
    }
    if (t3 = K2, n3 = J2, n3 = pt2(e3, e3 === t3 ? n3 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r3 = e3.callbackNode, n3 === 0 || e3 === t3 && (Y2 === 2 || Y2 === 9) || e3.cancelPendingCommit !== null) return r3 !== null && r3 !== null && Ge2(r3), e3.callbackNode = null, e3.callbackPriority = 0;
    if (!(n3 & 3) || mt2(e3, n3)) {
      if (t3 = n3 & -n3, t3 === e3.callbackPriority) return t3;
      switch (r3 !== null && Ge2(r3), Tt2(n3)) {
        case 2:
        case 8:
          n3 = Ze2;
          break;
        case 32:
          n3 = Qe2;
          break;
        case 268435456:
          n3 = et2;
          break;
        default:
          n3 = Qe2;
      }
      return r3 = jf2.bind(null, e3), n3 = We2(n3, r3), e3.callbackPriority = t3, e3.callbackNode = n3, t3;
    }
    return r3 !== null && r3 !== null && Ge2(r3), e3.callbackPriority = 2, e3.callbackNode = null, 2;
  }
  function jf2(e3, t3) {
    if (yd2 !== 0 && yd2 !== 5) return e3.callbackNode = null, e3.callbackPriority = 0, null;
    var n3 = e3.callbackNode;
    if (df2() && e3.callbackNode !== n3) return null;
    var r3 = J2;
    return r3 = pt2(e3, e3 === K2 ? r3 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r3 === 0 ? null : (Fd2(e3, r3, t3), Af2(e3, Je2()), e3.callbackNode != null && e3.callbackNode === n3 ? jf2.bind(null, e3) : null);
  }
  function Mf2(e3, t3) {
    if (df2()) return null;
    Fd2(e3, t3, true);
  }
  function Nf2() {
    bp2(function() {
      G2 & 6 ? We2(Xe2, Of2) : kf2();
    });
  }
  function Pf2() {
    if (Tf2 === 0) {
      var e3 = Ha2;
      e3 === 0 && (e3 = lt2, lt2 <<= 1, !(lt2 & 261888) && (lt2 = 256)), Tf2 = e3;
    }
    return Tf2;
  }
  function Ff2(e3) {
    return e3 == null || typeof e3 == `symbol` || typeof e3 == `boolean` ? null : typeof e3 == `function` ? e3 : Sn2(e3);
  }
  function If2(e3, t3, n3, r3, i3) {
    if (t3 === `submit` && n3 && n3.stateNode === i3) {
      var a3 = Ff2((i3[At2] || null).action), o3 = r3.submitter;
      o3 && (t3 = (t3 = o3[At2] || null) ? Ff2(t3.formAction) : o3.getAttribute(`formAction`), t3 !== null && (a3 = t3, o3 = null));
      var s3 = new Wn2(`action`, `action`, null, r3, i3);
      e3.push({ event: s3, listeners: [{ instance: null, listener: function() {
        if (r3.defaultPrevented) {
          if (Tf2 !== 0) {
            var e4 = new FormData(i3, o3);
            rc2(n3, { pending: true, data: e4, method: i3.method, action: a3 }, null, e4);
          }
        } else typeof a3 == `function` && (s3.preventDefault(), e4 = new FormData(i3, o3), rc2(n3, { pending: true, data: e4, method: i3.method, action: a3 }, a3, e4));
      }, currentTarget: i3 }] });
    }
  }
  for (var Lf2 = 0; Lf2 < yi2.length; Lf2++) {
    var Rf2 = yi2[Lf2];
    bi2(Rf2.toLowerCase(), `on` + (Rf2[0].toUpperCase() + Rf2.slice(1)));
  }
  bi2(di2, `onAnimationEnd`), bi2(fi2, `onAnimationIteration`), bi2(pi2, `onAnimationStart`), bi2(`dblclick`, `onDoubleClick`), bi2(`focusin`, `onFocus`), bi2(`focusout`, `onBlur`), bi2(mi2, `onTransitionRun`), bi2(hi2, `onTransitionStart`), bi2(gi2, `onTransitionCancel`), bi2(_i2, `onTransitionEnd`), qt2(`onMouseEnter`, [`mouseout`, `mouseover`]), qt2(`onMouseLeave`, [`mouseout`, `mouseover`]), qt2(`onPointerEnter`, [`pointerout`, `pointerover`]), qt2(`onPointerLeave`, [`pointerout`, `pointerover`]), Kt2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), Kt2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), Kt2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), Kt2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), Kt2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), Kt2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var zf2 = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), Bf2 = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf2));
  function Vf2(e3, t3) {
    t3 = !!(t3 & 4);
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3], i3 = r3.event;
      r3 = r3.listeners;
      a: {
        var a3 = void 0;
        if (t3) for (var o3 = r3.length - 1; 0 <= o3; o3--) {
          var s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget;
          if (s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
          a3 = s3, i3.currentTarget = l3;
          try {
            a3(i3);
          } catch (e4) {
            Ti2(e4);
          }
          i3.currentTarget = null, a3 = c3;
        }
        else for (o3 = 0; o3 < r3.length; o3++) {
          if (s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
          a3 = s3, i3.currentTarget = l3;
          try {
            a3(i3);
          } catch (e4) {
            Ti2(e4);
          }
          i3.currentTarget = null, a3 = c3;
        }
      }
    }
  }
  function Q2(e3, t3) {
    var n3 = t3[jt2];
    n3 === void 0 && (n3 = t3[jt2] = /* @__PURE__ */ new Set());
    var r3 = e3 + `__bubble`;
    n3.has(r3) || (Gf2(t3, e3, 2, false), n3.add(r3));
  }
  function Hf2(e3, t3, n3) {
    var r3 = 0;
    t3 && (r3 |= 4), Gf2(n3, e3, r3, t3);
  }
  var Uf2 = `_reactListening` + Math.random().toString(36).slice(2);
  function Wf2(e3) {
    if (!e3[Uf2]) {
      e3[Uf2] = true, Wt2.forEach(function(t4) {
        t4 !== `selectionchange` && (Bf2.has(t4) || Hf2(t4, false, e3), Hf2(t4, true, e3));
      });
      var t3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
      t3 === null || t3[Uf2] || (t3[Uf2] = true, Hf2(`selectionchange`, false, t3));
    }
  }
  function Gf2(e3, t3, n3, r3) {
    switch (Ch(t3)) {
      case 2:
        var i3 = _h;
        break;
      case 8:
        i3 = vh;
        break;
      default:
        i3 = yh;
    }
    n3 = i3.bind(null, t3, n3, e3), i3 = void 0, !Nn2 || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i3 = true), r3 ? i3 === void 0 ? e3.addEventListener(t3, n3, true) : e3.addEventListener(t3, n3, { capture: true, passive: i3 }) : i3 === void 0 ? e3.addEventListener(t3, n3, false) : e3.addEventListener(t3, n3, { passive: i3 });
  }
  function Kf2(e3, t3, n3, r3, i3) {
    var a3 = r3;
    if (!(t3 & 1) && !(t3 & 2) && r3 !== null) a: for (; ; ) {
      if (r3 === null) return;
      var s3 = r3.tag;
      if (s3 === 3 || s3 === 4) {
        var c3 = r3.stateNode.containerInfo;
        if (c3 === i3) break;
        if (s3 === 4) for (s3 = r3.return; s3 !== null; ) {
          var l3 = s3.tag;
          if ((l3 === 3 || l3 === 4) && s3.stateNode.containerInfo === i3) return;
          s3 = s3.return;
        }
        for (; c3 !== null; ) {
          if (s3 = Rt2(c3), s3 === null) return;
          if (l3 = s3.tag, l3 === 5 || l3 === 6 || l3 === 26 || l3 === 27) {
            r3 = a3 = s3;
            continue a;
          }
          c3 = c3.parentNode;
        }
      }
      r3 = r3.return;
    }
    An2(function() {
      var r4 = a3, i4 = Tn2(n3), s4 = [];
      a: {
        var c4 = vi2.get(e3);
        if (c4 !== void 0) {
          var l4 = Wn2, u3 = e3;
          switch (e3) {
            case `keypress`:
              if (zn2(n3) === 0) break a;
            case `keydown`:
            case `keyup`:
              l4 = cr2;
              break;
            case `focusin`:
              u3 = `focus`, l4 = $n2;
              break;
            case `focusout`:
              u3 = `blur`, l4 = $n2;
              break;
            case `beforeblur`:
            case `afterblur`:
              l4 = $n2;
              break;
            case `click`:
              if (n3.button === 2) break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              l4 = Zn2;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              l4 = Qn2;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              l4 = dr2;
              break;
            case di2:
            case fi2:
            case pi2:
              l4 = er2;
              break;
            case _i2:
              l4 = fr2;
              break;
            case `scroll`:
            case `scrollend`:
              l4 = Kn2;
              break;
            case `wheel`:
              l4 = pr2;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              l4 = tr2;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              l4 = lr2;
              break;
            case `submit`:
              l4 = ur2;
              break;
            case `toggle`:
            case `beforetoggle`:
              l4 = mr2;
          }
          var d2 = !!(t3 & 4), f3 = !d2 && (e3 === `scroll` || e3 === `scrollend`), p2 = d2 ? c4 === null ? null : c4 + `Capture` : c4;
          d2 = [];
          for (var m3 = r4, h2; m3 !== null; ) {
            var g3 = m3;
            if (h2 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h2 === null || p2 === null || (g3 = jn2(m3, p2), g3 != null && d2.push(qf2(m3, g3, h2))), f3) break;
            m3 = m3.return;
          }
          0 < d2.length && (c4 = new l4(c4, u3, null, n3, i4), s4.push({ event: c4, listeners: d2 }));
        }
      }
      if (!(t3 & 7)) {
        a: {
          if (l4 = e3 === `mouseover` || e3 === `pointerover`, c4 = e3 === `mouseout` || e3 === `pointerout`, l4 && n3 !== wn2 && (u3 = n3.relatedTarget || n3.fromElement) && (Rt2(u3) || u3[M2])) break a;
          (c4 || l4) && (u3 = i4.window === i4 ? i4 : (l4 = i4.ownerDocument) ? l4.defaultView || l4.parentWindow : window, c4 ? (l4 = n3.relatedTarget || n3.toElement, c4 = r4, l4 = l4 ? Rt2(l4) : null, l4 !== null && (f3 = o2(l4), d2 = l4.tag, l4 !== f3 || d2 !== 5 && d2 !== 27 && d2 !== 6) && (l4 = null)) : (c4 = null, l4 = r4), c4 !== l4 && (d2 = Zn2, g3 = `onMouseLeave`, p2 = `onMouseEnter`, m3 = `mouse`, (e3 === `pointerout` || e3 === `pointerover`) && (d2 = lr2, g3 = `onPointerLeave`, p2 = `onPointerEnter`, m3 = `pointer`), f3 = c4 == null ? u3 : Bt2(c4), h2 = l4 == null ? u3 : Bt2(l4), u3 = new d2(g3, m3 + `leave`, c4, n3, i4), u3.target = f3, u3.relatedTarget = h2, g3 = null, Rt2(i4) === r4 && (d2 = new d2(p2, m3 + `enter`, l4, n3, i4), d2.target = h2, d2.relatedTarget = f3, g3 = d2), f3 = g3, d2 = c4 && l4 ? w2(c4, l4, Yf2) : null, c4 !== null && Xf2(s4, u3, c4, d2, false), l4 !== null && f3 !== null && Xf2(s4, f3, l4, d2, true)));
        }
        a: {
          if (c4 = r4 ? Bt2(r4) : window, l4 = c4.nodeName && c4.nodeName.toLowerCase(), l4 === `select` || l4 === `input` && c4.type === `file`) var _3 = Pr2;
          else if (Or2(c4)) {
            if (Fr2) _3 = Wr2;
            else {
              _3 = Hr2;
              var v3 = Vr2;
            }
          } else l4 = c4.nodeName, !l4 || l4.toLowerCase() !== `input` || c4.type !== `checkbox` && c4.type !== `radio` ? r4 && yn2(r4.elementType) && (_3 = Pr2) : _3 = Ur2;
          if (_3 &&= _3(e3, r4)) {
            kr2(s4, _3, n3, i4);
            break a;
          }
          v3 && v3(e3, c4, r4);
        }
        switch (v3 = r4 ? Bt2(r4) : window, e3) {
          case `focusin`:
            (Or2(v3) || v3.contentEditable === `true`) && (ti2 = v3, ni2 = r4, ri2 = null);
            break;
          case `focusout`:
            ri2 = ni2 = ti2 = null;
            break;
          case `mousedown`:
            ii2 = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            ii2 = false, ai2(s4, n3, i4);
            break;
          case `selectionchange`:
            if (ei2) break;
          case `keydown`:
          case `keyup`:
            ai2(s4, n3, i4);
        }
        var y3;
        if (gr2) b: {
          switch (e3) {
            case `compositionstart`:
              var b3 = `onCompositionStart`;
              break b;
            case `compositionend`:
              b3 = `onCompositionEnd`;
              break b;
            case `compositionupdate`:
              b3 = `onCompositionUpdate`;
              break b;
          }
          b3 = void 0;
        }
        else wr2 ? Sr2(e3, n3) && (b3 = `onCompositionEnd`) : e3 === `keydown` && n3.keyCode === 229 && (b3 = `onCompositionStart`);
        b3 && (yr2 && n3.locale !== `ko` && (wr2 || b3 !== `onCompositionStart` ? b3 === `onCompositionEnd` && wr2 && (y3 = Rn2()) : (Fn2 = i4, In2 = `value` in Fn2 ? Fn2.value : Fn2.textContent, wr2 = true)), v3 = Jf2(r4, b3), 0 < v3.length && (b3 = new nr2(b3, e3, null, n3, i4), s4.push({ event: b3, listeners: v3 }), y3 ? b3.data = y3 : (y3 = Cr2(n3), y3 !== null && (b3.data = y3)))), (y3 = vr2 ? Tr2(e3, n3) : Er2(e3, n3)) && (b3 = Jf2(r4, `onBeforeInput`), 0 < b3.length && (v3 = new nr2(`onBeforeInput`, `beforeinput`, null, n3, i4), s4.push({ event: v3, listeners: b3 }), v3.data = y3)), If2(s4, e3, r4, n3, i4);
      }
      Vf2(s4, t3);
    });
  }
  function qf2(e3, t3, n3) {
    return { instance: e3, listener: t3, currentTarget: n3 };
  }
  function Jf2(e3, t3) {
    for (var n3 = t3 + `Capture`, r3 = []; e3 !== null; ) {
      var i3 = e3, a3 = i3.stateNode;
      if (i3 = i3.tag, i3 !== 5 && i3 !== 26 && i3 !== 27 || a3 === null || (i3 = jn2(e3, n3), i3 != null && r3.unshift(qf2(e3, i3, a3)), i3 = jn2(e3, t3), i3 != null && r3.push(qf2(e3, i3, a3))), e3.tag === 3) return r3;
      e3 = e3.return;
    }
    return [];
  }
  function Yf2(e3) {
    if (e3 === null) return null;
    do
      e3 = e3.return;
    while (e3 && e3.tag !== 5 && e3.tag !== 27);
    return e3 || null;
  }
  function Xf2(e3, t3, n3, r3, i3) {
    for (var a3 = t3._reactName, o3 = []; n3 !== null && n3 !== r3; ) {
      var s3 = n3, c3 = s3.alternate, l3 = s3.stateNode;
      if (s3 = s3.tag, c3 !== null && c3 === r3) break;
      s3 !== 5 && s3 !== 26 && s3 !== 27 || l3 === null || (c3 = l3, i3 ? (l3 = jn2(n3, a3), l3 != null && o3.unshift(qf2(n3, l3, c3))) : i3 || (l3 = jn2(n3, a3), l3 != null && o3.push(qf2(n3, l3, c3)))), n3 = n3.return;
    }
    o3.length !== 0 && e3.push({ event: t3, listeners: o3 });
  }
  var Zf2 = /\r\n?/g, Qf2 = /\u0000|\uFFFD/g;
  function $f2(e3) {
    return (typeof e3 == `string` ? e3 : `` + e3).replace(Zf2, `
`).replace(Qf2, ``);
  }
  function ep2(e3, t3) {
    return t3 = $f2(t3), $f2(e3) === t3;
  }
  function $2(e3, t3, n3, r3, a3, o3) {
    switch (n3) {
      case `children`:
        if (typeof r3 == `string`) t3 === `body` || t3 === `textarea` && r3 === `` || hn2(e3, r3);
        else if (typeof r3 == `number` || typeof r3 == `bigint`) t3 !== `body` && hn2(e3, `` + r3);
        else return;
        break;
      case `className`:
        $t2(e3, `class`, r3);
        break;
      case `tabIndex`:
        $t2(e3, `tabindex`, r3);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        $t2(e3, n3, r3);
        break;
      case `style`:
        vn2(e3, r3, o3);
        return;
      case `data`:
        if (t3 !== `object`) {
          $t2(e3, `data`, r3);
          break;
        }
      case `src`:
      case `href`:
        if (r3 === `` && (t3 !== `a` || n3 !== `href`) || r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e3.removeAttribute(n3);
          break;
        }
        r3 = Sn2(r3), e3.setAttribute(n3, r3);
        break;
      case `action`:
      case `formAction`:
        if (typeof r3 == `function`) {
          e3.setAttribute(n3, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof o3 == `function` && (n3 === `formAction` ? (t3 !== `input` && $2(e3, t3, `name`, a3.name, a3, null), $2(e3, t3, `formEncType`, a3.formEncType, a3, null), $2(e3, t3, `formMethod`, a3.formMethod, a3, null), $2(e3, t3, `formTarget`, a3.formTarget, a3, null)) : ($2(e3, t3, `encType`, a3.encType, a3, null), $2(e3, t3, `method`, a3.method, a3, null), $2(e3, t3, `target`, a3.target, a3, null))), r3 == null || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e3.removeAttribute(n3);
          break;
        }
        r3 = Sn2(r3), e3.setAttribute(n3, r3);
        break;
      case `onClick`:
        r3 != null && (e3.onclick = Cn2);
        return;
      case `onScroll`:
        r3 != null && Q2(`scroll`, e3);
        return;
      case `onScrollEnd`:
        r3 != null && Q2(`scrollend`, e3);
        return;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
          if (n3 = r3.__html, n3 != null) {
            if (a3.children != null) throw Error(i2(60));
            o3?.__html !== n3 && (e3.innerHTML = n3);
          }
        }
        break;
      case `multiple`:
        e3.multiple = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `muted`:
        e3.muted = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `ref`:
        break;
      case `autoFocus`:
        break;
      case `xlinkHref`:
        if (r3 == null || typeof r3 == `function` || typeof r3 == `boolean` || typeof r3 == `symbol`) {
          e3.removeAttribute(`xlink:href`);
          break;
        }
        n3 = Sn2(r3), e3.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n3);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n3, r3) : e3.removeAttribute(n3);
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
      case `credentialless`:
      case `default`:
      case `defer`:
      case `disabled`:
      case `disablePictureInPicture`:
      case `disableRemotePlayback`:
      case `formNoValidate`:
      case `hidden`:
      case `loop`:
      case `noModule`:
      case `noValidate`:
      case `open`:
      case `playsInline`:
      case `readOnly`:
      case `required`:
      case `reversed`:
      case `scoped`:
      case `seamless`:
      case `itemScope`:
        r3 && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n3, ``) : e3.removeAttribute(n3);
        break;
      case `capture`:
      case `download`:
        true === r3 ? e3.setAttribute(n3, ``) : false !== r3 && r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n3, r3) : e3.removeAttribute(n3);
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` && !isNaN(r3) && 1 <= r3 ? e3.setAttribute(n3, r3) : e3.removeAttribute(n3);
        break;
      case `rowSpan`:
      case `start`:
        r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || isNaN(r3) ? e3.removeAttribute(n3) : e3.setAttribute(n3, r3);
        break;
      case `popover`:
        Q2(`beforetoggle`, e3), Q2(`toggle`, e3), Qt2(e3, `popover`, r3);
        break;
      case `xlinkActuate`:
        en2(e3, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r3);
        break;
      case `xlinkArcrole`:
        en2(e3, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r3);
        break;
      case `xlinkRole`:
        en2(e3, `http://www.w3.org/1999/xlink`, `xlink:role`, r3);
        break;
      case `xlinkShow`:
        en2(e3, `http://www.w3.org/1999/xlink`, `xlink:show`, r3);
        break;
      case `xlinkTitle`:
        en2(e3, `http://www.w3.org/1999/xlink`, `xlink:title`, r3);
        break;
      case `xlinkType`:
        en2(e3, `http://www.w3.org/1999/xlink`, `xlink:type`, r3);
        break;
      case `xmlBase`:
        en2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r3);
        break;
      case `xmlLang`:
        en2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r3);
        break;
      case `xmlSpace`:
        en2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r3);
        break;
      case `is`:
        Qt2(e3, `is`, r3);
        break;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!(2 < n3.length) || n3[0] !== `o` && n3[0] !== `O` || n3[1] !== `n` && n3[1] !== `N`) n3 = bn2.get(n3) || n3, Qt2(e3, n3, r3);
        else return;
    }
    P2 = true;
  }
  function tp2(e3, t3, n3, r3, a3, o3) {
    switch (n3) {
      case `style`:
        vn2(e3, r3, o3);
        return;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
          if (n3 = r3.__html, n3 != null) {
            if (a3.children != null) throw Error(i2(60));
            o3?.__html !== n3 && (e3.innerHTML = n3);
          }
        }
        break;
      case `children`:
        if (typeof r3 == `string`) hn2(e3, r3);
        else if (typeof r3 == `number` || typeof r3 == `bigint`) hn2(e3, `` + r3);
        else return;
        break;
      case `onScroll`:
        r3 != null && Q2(`scroll`, e3);
        return;
      case `onScrollEnd`:
        r3 != null && Q2(`scrollend`, e3);
        return;
      case `onClick`:
        r3 != null && (e3.onclick = Cn2);
        return;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        return;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!Gt2.hasOwnProperty(n3)) a: {
          if (n3[0] === `o` && n3[1] === `n` && (a3 = n3.endsWith(`Capture`), o3 = n3.slice(2, a3 ? n3.length - 7 : void 0), t3 = e3[At2] || null, t3 = t3 == null ? null : t3[n3], typeof t3 == `function` && e3.removeEventListener(o3, t3, a3), typeof r3 == `function`)) {
            typeof t3 != `function` && t3 !== null && (n3 in e3 ? e3[n3] = null : e3.hasAttribute(n3) && e3.removeAttribute(n3)), e3.addEventListener(o3, r3, a3);
            break a;
          }
          P2 = true, n3 in e3 ? e3[n3] = r3 : true === r3 ? e3.setAttribute(n3, ``) : Qt2(e3, n3, r3);
        }
        return;
    }
    P2 = true;
  }
  function np2(e3, t3, n3) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `img`:
        Q2(`error`, e3), Q2(`load`, e3);
        var r3 = false, a3 = false, o3;
        for (o3 in n3) if (n3.hasOwnProperty(o3)) {
          var s3 = n3[o3];
          if (s3 != null) switch (o3) {
            case `src`:
              r3 = true;
              break;
            case `srcSet`:
              a3 = true;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(i2(137, t3));
            default:
              $2(e3, t3, o3, s3, n3, null);
          }
        }
        a3 && $2(e3, t3, `srcSet`, n3.srcSet, n3, null), r3 && $2(e3, t3, `src`, n3.src, n3, null);
        return;
      case `input`:
        Q2(`invalid`, e3);
        var c3 = o3 = s3 = a3 = null, l3 = null, u3 = null;
        for (r3 in n3) if (n3.hasOwnProperty(r3)) {
          var d2 = n3[r3];
          if (d2 != null) switch (r3) {
            case `name`:
              a3 = d2;
              break;
            case `type`:
              s3 = d2;
              break;
            case `checked`:
              l3 = d2;
              break;
            case `defaultChecked`:
              u3 = d2;
              break;
            case `value`:
              o3 = d2;
              break;
            case `defaultValue`:
              c3 = d2;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (d2 != null) throw Error(i2(137, t3));
              break;
            default:
              $2(e3, t3, r3, d2, n3, null);
          }
        }
        un2(e3, o3, c3, l3, u3, s3, a3, false);
        return;
      case `select`:
        for (a3 in Q2(`invalid`, e3), r3 = s3 = o3 = null, n3) if (n3.hasOwnProperty(a3) && (c3 = n3[a3], c3 != null)) switch (a3) {
          case `value`:
            o3 = c3;
            break;
          case `defaultValue`:
            s3 = c3;
            break;
          case `multiple`:
            r3 = c3;
          default:
            $2(e3, t3, a3, c3, n3, null);
        }
        t3 = o3, n3 = s3, e3.multiple = !!r3, t3 == null ? n3 != null && fn2(e3, !!r3, n3, true) : fn2(e3, !!r3, t3, false);
        return;
      case `textarea`:
        for (s3 in Q2(`invalid`, e3), o3 = a3 = r3 = null, n3) if (n3.hasOwnProperty(s3) && (c3 = n3[s3], c3 != null)) switch (s3) {
          case `value`:
            r3 = c3;
            break;
          case `defaultValue`:
            a3 = c3;
            break;
          case `children`:
            o3 = c3;
            break;
          case `dangerouslySetInnerHTML`:
            if (c3 != null) throw Error(i2(91));
            break;
          default:
            $2(e3, t3, s3, c3, n3, null);
        }
        mn2(e3, r3, a3, o3);
        return;
      case `option`:
        for (l3 in n3) if (n3.hasOwnProperty(l3) && (r3 = n3[l3], r3 != null)) switch (l3) {
          case `selected`:
            e3.selected = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
            break;
          default:
            $2(e3, t3, l3, r3, n3, null);
        }
        return;
      case `dialog`:
        Q2(`beforetoggle`, e3), Q2(`toggle`, e3), Q2(`cancel`, e3), Q2(`close`, e3);
        break;
      case `iframe`:
      case `object`:
        Q2(`load`, e3);
        break;
      case `video`:
      case `audio`:
        for (r3 = 0; r3 < zf2.length; r3++) Q2(zf2[r3], e3);
        break;
      case `image`:
        Q2(`error`, e3), Q2(`load`, e3);
        break;
      case `details`:
        Q2(`toggle`, e3);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q2(`error`, e3), Q2(`load`, e3);
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (u3 in n3) if (n3.hasOwnProperty(u3) && (r3 = n3[u3], r3 != null)) switch (u3) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(i2(137, t3));
          default:
            $2(e3, t3, u3, r3, n3, null);
        }
        return;
      default:
        if (yn2(t3)) {
          for (d2 in n3) n3.hasOwnProperty(d2) && (r3 = n3[d2], r3 !== void 0 && tp2(e3, t3, d2, r3, n3, void 0));
          return;
        }
    }
    for (c3 in n3) n3.hasOwnProperty(c3) && (r3 = n3[c3], r3 != null && $2(e3, t3, c3, r3, n3, null));
  }
  var rp2 = {};
  function ip2(e3, t3, n3, r3) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `input`:
        var a3 = null, o3 = null, s3 = null, c3 = null, l3 = null, u3 = null, d2 = null;
        for (m3 in n3) {
          var f3 = n3[m3];
          if (n3.hasOwnProperty(m3) && f3 != null) switch (m3) {
            case `checked`:
              break;
            case `value`:
              break;
            case `defaultValue`:
              l3 = f3;
            default:
              r3.hasOwnProperty(m3) || $2(e3, t3, m3, null, r3, f3);
          }
        }
        for (var p2 in r3) {
          var m3 = r3[p2];
          if (f3 = n3[p2], r3.hasOwnProperty(p2) && (m3 != null || f3 != null)) switch (p2) {
            case `type`:
              m3 !== f3 && (P2 = true), o3 = m3;
              break;
            case `name`:
              m3 !== f3 && (P2 = true), a3 = m3;
              break;
            case `checked`:
              m3 !== f3 && (P2 = true), u3 = m3;
              break;
            case `defaultChecked`:
              m3 !== f3 && (P2 = true), d2 = m3;
              break;
            case `value`:
              m3 !== f3 && (P2 = true), s3 = m3;
              break;
            case `defaultValue`:
              m3 !== f3 && (P2 = true), c3 = m3;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (m3 != null) throw Error(i2(137, t3));
              break;
            default:
              m3 !== f3 && $2(e3, t3, p2, m3, r3, f3);
          }
        }
        ln2(e3, s3, c3, l3, u3, d2, o3, a3);
        return;
      case `select`:
        for (o3 in m3 = s3 = c3 = p2 = null, n3) if (l3 = n3[o3], n3.hasOwnProperty(o3) && l3 != null) switch (o3) {
          case `value`:
            break;
          case `multiple`:
            m3 = l3;
          default:
            r3.hasOwnProperty(o3) || $2(e3, t3, o3, null, r3, l3);
        }
        for (a3 in r3) if (o3 = r3[a3], l3 = n3[a3], r3.hasOwnProperty(a3) && (o3 != null || l3 != null)) switch (a3) {
          case `value`:
            o3 !== l3 && (P2 = true), p2 = o3;
            break;
          case `defaultValue`:
            o3 !== l3 && (P2 = true), c3 = o3;
            break;
          case `multiple`:
            o3 !== l3 && (P2 = true), s3 = o3;
          default:
            o3 !== l3 && $2(e3, t3, a3, o3, r3, l3);
        }
        t3 = c3, n3 = s3, r3 = m3, p2 == null ? !!r3 != !!n3 && (t3 == null ? fn2(e3, !!n3, n3 ? [] : ``, false) : fn2(e3, !!n3, t3, true)) : fn2(e3, !!n3, p2, false);
        return;
      case `textarea`:
        for (c3 in m3 = p2 = null, n3) if (a3 = n3[c3], n3.hasOwnProperty(c3) && a3 != null && !r3.hasOwnProperty(c3)) switch (c3) {
          case `value`:
            break;
          case `children`:
            break;
          default:
            $2(e3, t3, c3, null, r3, a3);
        }
        for (s3 in r3) if (a3 = r3[s3], o3 = n3[s3], r3.hasOwnProperty(s3) && (a3 != null || o3 != null)) switch (s3) {
          case `value`:
            a3 !== o3 && (P2 = true), p2 = a3;
            break;
          case `defaultValue`:
            a3 !== o3 && (P2 = true), m3 = a3;
            break;
          case `children`:
            break;
          case `dangerouslySetInnerHTML`:
            if (a3 != null) throw Error(i2(91));
            break;
          default:
            a3 !== o3 && $2(e3, t3, s3, a3, r3, o3);
        }
        pn2(e3, p2, m3);
        return;
      case `option`:
        for (var h2 in n3) if (p2 = n3[h2], n3.hasOwnProperty(h2) && p2 != null && !r3.hasOwnProperty(h2)) switch (h2) {
          case `selected`:
            e3.selected = false;
            break;
          default:
            $2(e3, t3, h2, null, r3, p2);
        }
        for (l3 in r3) if (p2 = r3[l3], m3 = n3[l3], r3.hasOwnProperty(l3) && p2 !== m3 && (p2 != null || m3 != null)) switch (l3) {
          case `selected`:
            p2 !== m3 && (P2 = true), e3.selected = p2 && typeof p2 != `function` && typeof p2 != `symbol`;
            break;
          default:
            $2(e3, t3, l3, p2, r3, m3);
        }
        return;
      case `img`:
      case `link`:
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (var g3 in n3) p2 = n3[g3], n3.hasOwnProperty(g3) && p2 != null && !r3.hasOwnProperty(g3) && $2(e3, t3, g3, null, r3, p2);
        for (u3 in r3) if (p2 = r3[u3], m3 = n3[u3], r3.hasOwnProperty(u3) && p2 !== m3 && (p2 != null || m3 != null)) switch (u3) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            if (p2 != null) throw Error(i2(137, t3));
            break;
          default:
            $2(e3, t3, u3, p2, r3, m3);
        }
        return;
      default:
        if (yn2(t3)) {
          for (var _3 in n3) p2 = n3[_3], n3.hasOwnProperty(_3) && p2 !== void 0 && !r3.hasOwnProperty(_3) && tp2(e3, t3, _3, void 0, r3, p2);
          for (d2 in r3) p2 = r3[d2], m3 = n3[d2], !r3.hasOwnProperty(d2) || p2 === m3 || p2 === void 0 && m3 === void 0 || tp2(e3, t3, d2, p2, r3, m3);
          return;
        }
    }
    for (var v3 in n3) p2 = n3[v3], n3.hasOwnProperty(v3) && p2 != null && !r3.hasOwnProperty(v3) && $2(e3, t3, v3, null, r3, p2);
    for (f3 in r3) p2 = r3[f3], m3 = n3[f3], !r3.hasOwnProperty(f3) || p2 === m3 || p2 == null && m3 == null || $2(e3, t3, f3, p2, r3, m3);
  }
  function ap2(e3) {
    switch (e3) {
      case `css`:
      case `script`:
      case `font`:
      case `img`:
      case `image`:
      case `input`:
      case `link`:
        return true;
      default:
        return false;
    }
  }
  function op2() {
    if (typeof performance.getEntriesByType == `function`) {
      for (var e3 = 0, t3 = 0, n3 = performance.getEntriesByType(`resource`), r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3], a3 = i3.transferSize, o3 = i3.initiatorType, s3 = i3.duration;
        if (a3 && s3 && ap2(o3)) {
          for (o3 = 0, s3 = i3.responseEnd, r3 += 1; r3 < n3.length; r3++) {
            var c3 = n3[r3], l3 = c3.startTime;
            if (l3 > s3) break;
            var u3 = c3.transferSize, d2 = c3.initiatorType;
            u3 && ap2(d2) && (c3 = c3.responseEnd, o3 += u3 * (c3 < s3 ? 1 : (s3 - l3) / (c3 - l3)));
          }
          if (--r3, t3 += 8 * (a3 + o3) / (i3.duration / 1e3), e3++, 10 < e3) break;
        }
      }
      if (0 < e3) return t3 / e3 / 1e6;
    }
    return navigator.connection && (e3 = navigator.connection.downlink, typeof e3 == `number`) ? e3 : 5;
  }
  var sp2 = null, cp2 = null;
  function lp2(e3) {
    return e3.nodeType === 9 ? e3 : e3.ownerDocument;
  }
  function up2(e3) {
    switch (e3) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function dp2(e3, t3) {
    if (e3 === 0) switch (t3) {
      case `svg`:
        return 1;
      case `math`:
        return 2;
      default:
        return 0;
    }
    return e3 === 1 && t3 === `foreignObject` ? 0 : e3;
  }
  function fp2(e3, t3, n3, r3) {
    return n3 = lp2(n3).createElement(e3), n3[kt2] = r3, n3[At2] = t3, np2(n3, e3, t3), Ht2(n3), n3;
  }
  function pp2(e3, t3) {
    return e3 === `textarea` || e3 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
  }
  var mp2 = null;
  function hp2() {
    var e3 = window.event;
    return e3 && e3.type === `popstate` ? e3 !== mp2 && (mp2 = e3, true) : (mp2 = null, false);
  }
  var gp2 = typeof setTimeout == `function` ? setTimeout : void 0, _p2 = typeof clearTimeout == `function` ? clearTimeout : void 0, vp2 = typeof Promise == `function` ? Promise : void 0, yp2 = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp2, bp2 = typeof queueMicrotask == `function` ? queueMicrotask : vp2 === void 0 ? gp2 : function(e3) {
    return vp2.resolve(null).then(e3).catch(xp2);
  };
  function xp2(e3) {
    setTimeout(function() {
      throw e3;
    });
  }
  function Sp2(e3) {
    return e3 === `head`;
  }
  function Cp2(e3, t3) {
    var n3 = t3, r3 = 0;
    do {
      var i3 = n3.nextSibling;
      if (e3.removeChild(n3), i3 && i3.nodeType === 8) {
        if (n3 = i3.data, n3 === `/$` || n3 === `/&`) {
          if (r3 === 0) {
            e3.removeChild(i3), Hh(t3);
            return;
          }
          r3--;
        } else if (n3 === `$` || n3 === `$?` || n3 === `$~` || n3 === `$!` || n3 === `&`) r3++;
        else if (n3 === `html`) _m(e3.ownerDocument.documentElement);
        else if (n3 === `head`) {
          n3 = e3.ownerDocument.head, _m(n3);
          for (var a3 = n3.firstChild; a3; ) {
            var o3 = a3.nextSibling, s3 = a3.nodeName;
            a3[Ft2] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a3.rel.toLowerCase() === `stylesheet` || n3.removeChild(a3), a3 = o3;
          }
        } else n3 === `body` && _m(e3.ownerDocument.body);
      }
      n3 = i3;
    } while (n3);
    Hh(t3);
  }
  function wp2(e3, t3) {
    var n3 = e3;
    e3 = 0;
    do {
      var r3 = n3.nextSibling;
      if (n3.nodeType === 1 ? t3 ? (n3._stashedDisplay = n3.style.display, n3.style.display = `none`) : (n3.style.display = n3._stashedDisplay || ``, n3.getAttribute(`style`) === `` && n3.removeAttribute(`style`)) : n3.nodeType === 3 && (t3 ? (n3._stashedText = n3.nodeValue, n3.nodeValue = ``) : n3.nodeValue = n3._stashedText || ``), r3 && r3.nodeType === 8) {
        if (n3 = r3.data, n3 === `/$`) {
          if (e3 === 0) break;
          e3--;
        } else n3 !== `$` && n3 !== `$?` && n3 !== `$~` && n3 !== `$!` || e3++;
      }
      n3 = r3;
    } while (n3);
  }
  function Tp2(e3, t3, n3) {
    if (t3 = CSS.escape(t3) === t3 ? t3 : `r-` + btoa(t3).replace(/=/g, ``), e3.style.viewTransitionName = t3, n3 != null && (e3.style.viewTransitionClass = n3), n3 = getComputedStyle(e3), n3.display === `inline`) {
      if (t3 = e3.getClientRects(), t3.length === 1) var r3 = 1;
      else for (var i3 = r3 = 0; i3 < t3.length; i3++) {
        var a3 = t3[i3];
        0 < a3.width && 0 < a3.height && r3++;
      }
      r3 === 1 && (e3 = e3.style, e3.display = t3.length === 1 ? `inline-block` : `block`, e3.marginTop = `-` + n3.paddingTop, e3.marginBottom = `-` + n3.paddingBottom);
    }
  }
  function Ep2(e3, t3) {
    e3 = e3.style, t3 = t3.style;
    var n3 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionName`) ? t3.viewTransitionName : t3.hasOwnProperty(`view-transition-name`) ? t3[`view-transition-name`] : null;
    e3.viewTransitionName = n3 == null || typeof n3 == `boolean` ? `` : (`` + n3).trim(), n3 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionClass`) ? t3.viewTransitionClass : t3.hasOwnProperty(`view-transition-class`) ? t3[`view-transition-class`] : null, e3.viewTransitionClass = n3 == null || typeof n3 == `boolean` ? `` : (`` + n3).trim(), e3.display === `inline-block` && (t3 == null ? e3.display = e3.margin = `` : (n3 = t3.display, e3.display = n3 == null || typeof n3 == `boolean` ? `` : n3, n3 = t3.margin, n3 == null ? (n3 = t3.hasOwnProperty(`marginTop`) ? t3.marginTop : t3[`margin-top`], e3.marginTop = n3 == null || typeof n3 == `boolean` ? `` : n3, t3 = t3.hasOwnProperty(`marginBottom`) ? t3.marginBottom : t3[`margin-bottom`], e3.marginBottom = t3 == null || typeof t3 == `boolean` ? `` : t3) : e3.margin = n3));
  }
  function Dp2(e3, t3, n3) {
    return n3 = n3.ownerDocument.defaultView, { rect: e3, abs: t3.position === `absolute` || t3.position === `fixed`, clip: t3.clipPath !== `none` || t3.overflow !== `visible` || t3.filter !== `none` || t3.mask !== `none` || t3.mask !== `none` || t3.borderRadius !== `0px`, view: 0 <= e3.bottom && 0 <= e3.right && e3.top <= n3.innerHeight && e3.left <= n3.innerWidth };
  }
  function Op2(e3) {
    return Dp2(e3.getBoundingClientRect(), getComputedStyle(e3), e3);
  }
  function kp2(e3) {
    var t3 = e3.getBoundingClientRect();
    t3 = new DOMRect(t3.x + 2e4, t3.y + 2e4, t3.width, t3.height);
    var n3 = getComputedStyle(e3);
    return Dp2(t3, n3, e3);
  }
  function Ap2(e3) {
    return e3.documentElement.clientHeight;
  }
  function jp2(e3) {
    this.addEventListener(`load`, e3), this.addEventListener(`error`, e3);
  }
  function Mp2(e3, t3, n3, r3, i3, a3, o3, s3, c3) {
    var l3 = t3.nodeType === 9 ? t3 : t3.ownerDocument;
    try {
      var u3 = l3.startViewTransition({ update: function() {
        var t4 = l3.defaultView, n4 = t4.navigation && t4.navigation.transition, o4 = l3.fonts.status;
        r3();
        var s4 = [];
        if (o4 === `loaded` && (Ap2(l3), l3.fonts.status === `loading` && s4.push(l3.fonts.ready)), o4 = s4.length, e3 !== null) for (var c4 = e3.suspenseyImages, u4 = 0, d3 = 0; d3 < c4.length; d3++) {
          var f3 = c4[d3];
          if (!f3.complete) {
            var p2 = f3.getBoundingClientRect();
            if (0 < p2.bottom && 0 < p2.right && p2.top < t4.innerHeight && p2.left < t4.innerWidth) {
              if (u4 += Xm(f3), u4 > $m) {
                s4.length = o4;
                break;
              }
              f3 = new Promise(jp2.bind(f3)), s4.push(f3);
            }
          }
        }
        if (0 < s4.length) return t4 = Promise.race([Promise.all(s4), new Promise(function(e4) {
          return setTimeout(e4, 500);
        })]).then(i3, i3), (n4 ? Promise.allSettled([n4.finished, t4]) : t4).then(a3, a3);
        if (i3(), n4) return n4.finished.then(a3, a3);
        a3();
      }, types: n3 });
      l3.__reactViewTransition = u3;
      var d2 = [];
      return u3.ready.then(function() {
        for (var e4 = l3.documentElement.getAnimations({ subtree: true }), t4 = 0; t4 < e4.length; t4++) {
          var n4 = e4[t4], r4 = n4.effect, i4 = r4.pseudoElement;
          if (i4 != null && i4.startsWith(`::view-transition`)) {
            d2.push(n4), n4 = r4.getKeyframes();
            for (var a4 = i4 = void 0, s4 = true, c4 = 0; c4 < n4.length; c4++) {
              var u4 = n4[c4], f3 = u4.width;
              if (i4 === void 0) i4 = f3;
              else if (i4 !== f3) {
                s4 = false;
                break;
              }
              if (f3 = u4.height, a4 === void 0) a4 = f3;
              else if (a4 !== f3) {
                s4 = false;
                break;
              }
              delete u4.width, delete u4.height, u4.transform === `none` && delete u4.transform;
            }
            s4 && i4 !== void 0 && a4 !== void 0 && (r4.setKeyframes(n4), s4 = getComputedStyle(r4.target, r4.pseudoElement), s4.width !== i4 || s4.height !== a4) && (s4 = n4[0], s4.width = i4, s4.height = a4, s4 = n4[n4.length - 1], s4.width = i4, s4.height = a4, r4.setKeyframes(n4));
          }
        }
        o3();
      }, function(e4) {
        l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null);
        try {
          if (typeof e4 == `object` && e4) switch (e4.name) {
            case `InvalidStateError`:
              (e4.message === `View transition was skipped because document visibility state is hidden.` || e4.message === `Skipping view transition because document visibility state has become hidden.` || e4.message === `Skipping view transition because viewport size changed.` || e4.message === `Transition was aborted because of invalid state`) && (e4 = null);
          }
          e4 !== null && c3(e4);
        } finally {
          r3(), i3(), o3();
        }
      }), u3.finished.finally(function() {
        for (var e4 = 0; e4 < d2.length; e4++) d2[e4].cancel();
        l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null), s3();
      }), u3;
    } catch {
      return r3(), i3(), o3(), null;
    }
  }
  function Np2(e3, t3) {
    this._scope = document.documentElement, this._selector = `::view-transition-` + e3 + `(` + t3 + `)`;
  }
  Np2.prototype.animate = function(e3, t3) {
    return t3 = typeof t3 == `number` ? { duration: t3 } : T2({}, t3), t3.pseudoElement = this._selector, this._scope.animate(e3, t3);
  }, Np2.prototype.getAnimations = function() {
    for (var e3 = this._scope, t3 = this._selector, n3 = e3.getAnimations({ subtree: true }), r3 = [], i3 = 0; i3 < n3.length; i3++) {
      var a3 = n3[i3].effect;
      a3 !== null && a3.target === e3 && a3.pseudoElement === t3 && r3.push(n3[i3]);
    }
    return r3;
  }, Np2.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Pp2(e3) {
    return { name: e3, group: new Np2(`group`, e3), imagePair: new Np2(`image-pair`, e3), old: new Np2(`old`, e3), new: new Np2(`new`, e3) };
  }
  function Fp2(e3) {
    this._fragmentFiber = e3, this._observers = this._eventListeners = null;
  }
  Fp2.prototype.addEventListener = function(e3, t3, n3) {
    var r3 = null, i3 = null;
    if (!(n3 != null && typeof n3 != `boolean` && (r3 = n3.signal || null, r3 !== null && r3.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var a3 = this._eventListeners;
      if (Bp2(a3, e3, t3, n3) === -1) {
        var o3 = this, s3 = t3;
        n3 != null && typeof n3 != `boolean` && true === n3.once && (s3 = function(r4) {
          o3.removeEventListener(e3, t3, n3), typeof t3 == `function` ? t3.call(this, r4) : t3.handleEvent(r4);
        }), r3 !== null && (i3 = o3.removeEventListener.bind(o3, e3, t3, n3), r3.addEventListener(`abort`, i3, { once: true }), i3 = r3.removeEventListener.bind(r3, `abort`, i3)), r3 = Rp2(n3), a3.push({ type: e3, listener: t3, optionsOrUseCapture: n3, attachedListener: s3, cleanup: i3 }), m2(this._fragmentFiber.child, false, Ip2, e3, s3, r3);
      }
      this._eventListeners = a3;
    }
  };
  function Ip2(e3, t3, n3, r3) {
    return b2(e3).addEventListener(t3, n3, r3), false;
  }
  Fp2.prototype.removeEventListener = function(e3, t3, n3) {
    var r3 = this._eventListeners;
    if (r3 !== null && (t3 = Bp2(r3, e3, t3, n3), t3 !== -1)) {
      var i3 = r3[t3];
      n3 = i3.attachedListener;
      var a3 = i3.cleanup;
      i3 = Rp2(i3.optionsOrUseCapture), m2(this._fragmentFiber.child, false, Lp2, e3, n3, i3), r3.splice(t3, 1), a3 !== null && a3();
    }
  };
  function Lp2(e3, t3, n3, r3) {
    return b2(e3).removeEventListener(t3, n3, r3), false;
  }
  function Rp2(e3) {
    return e3 != null && typeof e3 != `boolean` && (true === e3.once || e3.signal instanceof AbortSignal) ? { capture: e3.capture, passive: e3.passive } : e3;
  }
  function zp2(e3) {
    return e3 == null ? `c=0` : typeof e3 == `boolean` ? `c=` + (e3 ? `1` : `0`) : `c=` + (e3.capture ? `1` : `0`);
  }
  function Bp2(e3, t3, n3, r3) {
    if (e3.length === 0) return -1;
    r3 = zp2(r3);
    for (var i3 = 0; i3 < e3.length; i3++) {
      var a3 = e3[i3];
      if (a3.type === t3 && a3.listener === n3 && zp2(a3.optionsOrUseCapture) === r3) return i3;
    }
    return -1;
  }
  Fp2.prototype.dispatchEvent = function(e3) {
    var t3 = g2(this._fragmentFiber);
    if (t3 === null) return true;
    t3 = b2(t3);
    var n3 = this._eventListeners;
    if (n3 !== null && 0 < n3.length || !e3.bubbles) {
      var r3 = t3.nodeType === 9 ? t3.createComment(``) : document.createTextNode(``);
      if (n3) for (var i3 = 0; i3 < n3.length; i3++) {
        var a3 = n3[i3];
        r3.addEventListener(a3.type, a3.attachedListener, Rp2(a3.optionsOrUseCapture));
      }
      if (t3.appendChild(r3), e3 = r3.dispatchEvent(e3), n3) for (i3 = 0; i3 < n3.length; i3++) a3 = n3[i3], r3.removeEventListener(a3.type, a3.attachedListener, Rp2(a3.optionsOrUseCapture));
      return t3.removeChild(r3), e3;
    }
    return t3.dispatchEvent(e3);
  }, Fp2.prototype.focus = function(e3) {
    m2(this._fragmentFiber.child, true, Vp2, e3, void 0, void 0);
  };
  function Vp2(e3, t3) {
    return e3.tag !== 6 && (e3 = b2(e3), pm(e3, t3));
  }
  Fp2.prototype.focusLast = function(e3) {
    var t3 = [];
    m2(this._fragmentFiber.child, true, Hp2, t3, void 0, void 0);
    for (var n3 = t3.length - 1; 0 <= n3 && !Vp2(t3[n3], e3); n3--) ;
  };
  function Hp2(e3, t3) {
    return t3.push(e3), false;
  }
  Fp2.prototype.blur = function() {
    var e3 = g2(this._fragmentFiber);
    e3 !== null && (e3 = b2(e3), e3 = lp2(e3).activeElement, e3 !== null && m2(this._fragmentFiber.child, false, Up2, e3, void 0, void 0));
  };
  function Up2(e3, t3) {
    return e3.tag !== 6 && (e3 = b2(e3), e3 === t3 || e3.contains(t3) ? (t3.blur(), true) : false);
  }
  Fp2.prototype.observeUsing = function(e3) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e3), m2(this._fragmentFiber.child, false, Wp2, e3, void 0, void 0);
  };
  function Wp2(e3, t3) {
    return e3.tag === 6 || (e3 = b2(e3), t3.observe(e3)), false;
  }
  Fp2.prototype.unobserveUsing = function(e3) {
    var t3 = this._observers;
    if (t3 !== null && t3.has(e3)) {
      t3.delete(e3), m2(this._fragmentFiber.child, false, Gp2, e3, void 0, void 0);
      for (var n3 = t3 = 0; n3 < Kp2.length; n3++) {
        var r3 = Kp2[n3];
        r3.fragmentInstance === this && r3.observer === e3 ? e3.unobserve(r3.instance) : Kp2[t3++] = r3;
      }
      Kp2.length = t3;
    }
  };
  function Gp2(e3, t3) {
    return e3.tag === 6 || (e3 = b2(e3), t3.unobserve(e3)), false;
  }
  var Kp2 = [], qp = false;
  function Jp(e3, t3, n3) {
    Kp2.push({ fragmentInstance: e3, observer: t3, instance: n3 }), qp || (qp = true, mm(function() {
      qp = false;
      var e4 = Kp2;
      Kp2 = [];
      for (var t4 = 0; t4 < e4.length; t4++) {
        var n4 = e4[t4];
        n4.observer.unobserve(n4.instance);
      }
    }));
  }
  Fp2.prototype.getClientRects = function() {
    var e3 = [];
    return m2(this._fragmentFiber.child, false, Yp, e3, void 0, void 0), e3;
  };
  function Yp(e3, t3) {
    if (e3.tag === 6) {
      e3 = e3.stateNode;
      var n3 = e3.ownerDocument.createRange();
      n3.selectNodeContents(e3), t3.push.apply(t3, n3.getClientRects());
    } else e3 = b2(e3), t3.push.apply(t3, e3.getClientRects());
    return false;
  }
  Fp2.prototype.getRootNode = function(e3) {
    var t3 = g2(this._fragmentFiber);
    return t3 === null ? this : b2(t3).getRootNode(e3);
  }, Fp2.prototype.compareDocumentPosition = function(e3) {
    var t3 = g2(this._fragmentFiber);
    if (t3 === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n3 = [];
    m2(this._fragmentFiber.child, false, Hp2, n3, void 0, void 0);
    var r3 = b2(t3);
    if (n3.length === 0) {
      if (n3 = r3, _2(this._fragmentFiber)) {
        a: {
          for (t3 = this._fragmentFiber.return; t3 !== null; ) {
            if (t3.tag === 4) {
              t3 = t3.stateNode.containerInfo;
              break a;
            }
            if (t3.tag === 3 || t3.tag === 5 || t3.tag === 27) break;
            t3 = t3.return;
          }
          t3 = null;
        }
        t3 != null && (n3 = t3);
      }
      t3 = this._fragmentFiber;
      var i3 = r3 = n3.compareDocumentPosition(e3);
      return n3 === e3 ? i3 = Node.DOCUMENT_POSITION_CONTAINS : r3 & Node.DOCUMENT_POSITION_CONTAINED_BY && (n3 = v2(t3)[1], n3 === null ? i3 = Node.DOCUMENT_POSITION_PRECEDING : (e3 = b2(n3).compareDocumentPosition(e3), i3 = e3 === 0 || e3 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i3 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t3 = b2(n3[0]), i3 = b2(n3[n3.length - 1]);
    var a3 = _2(this._fragmentFiber) ? t3.parentElement : r3;
    if (a3 == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    r3 = a3.compareDocumentPosition(t3) & Node.DOCUMENT_POSITION_CONTAINED_BY, a3 = a3.compareDocumentPosition(i3) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var o3 = t3.compareDocumentPosition(e3), s3 = i3.compareDocumentPosition(e3), c3 = o3 & Node.DOCUMENT_POSITION_CONTAINED_BY || s3 & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return s3 = r3 && a3 && o3 & Node.DOCUMENT_POSITION_FOLLOWING && s3 & Node.DOCUMENT_POSITION_PRECEDING, t3 = r3 && t3 === e3 || a3 && i3 === e3 || c3 || s3 ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r3 && t3 === e3 || !a3 && i3 === e3 ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o3, t3 & Node.DOCUMENT_POSITION_DISCONNECTED || t3 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t3, this._fragmentFiber, n3[0], n3[n3.length - 1], e3) ? t3 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Xp(e3, t3, n3, r3, i3) {
    var a3 = Rt2(i3);
    if (e3 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n3 = !!a3) a: {
        for (; a3 !== null; ) {
          if (a3.tag === 7 && (a3 === t3 || a3.alternate === t3)) {
            n3 = true;
            break a;
          }
          a3 = a3.return;
        }
        n3 = false;
      }
      return n3;
    }
    if (e3 & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a3 === null) return a3 = i3.ownerDocument, i3 === a3 || i3 === a3.documentElement || i3 === a3.body;
      a: {
        for (a3 = t3, t3 = g2(t3); a3 !== null; ) {
          if (!(a3.tag !== 5 && a3.tag !== 3 && a3.tag !== 27 || a3 !== t3 && a3.alternate !== t3)) {
            a3 = true;
            break a;
          }
          a3 = a3.return;
        }
        a3 = false;
      }
      return a3;
    }
    return e3 & Node.DOCUMENT_POSITION_PRECEDING ? ((t3 = !!a3) && !(t3 = a3 === n3) && (t3 = w2(n3, a3, C2), t3 === null ? t3 = false : (m2(t3, true, ee2, a3, n3), a3 = x2, x2 = null, t3 = a3 !== null)), t3) : e3 & Node.DOCUMENT_POSITION_FOLLOWING ? ((t3 = !!a3) && !(t3 = a3 === r3) && (t3 = w2(r3, a3, C2), t3 === null ? t3 = false : (m2(t3, true, te2, a3, r3), a3 = x2, S2 = x2 = null, t3 = a3 !== null)), t3) : false;
  }
  function Zp(e3, t3) {
    var n3 = e3.ownerDocument.createRange();
    n3.selectNodeContents(e3), e3 = n3.getBoundingClientRect(), window.scrollTo(window.scrollX + e3.left, t3 ? window.scrollY + e3.top : window.scrollY + e3.bottom - window.innerHeight);
  }
  Fp2.prototype.scrollIntoView = function(e3) {
    if (typeof e3 == `object`) throw Error(i2(566));
    var t3 = [];
    m2(this._fragmentFiber.child, false, Hp2, t3, void 0, void 0);
    var n3 = false !== e3;
    if (t3.length === 0) {
      var r3 = v2(this._fragmentFiber);
      if (r3 = n3 ? r3[1] || r3[0] || g2(this._fragmentFiber) : r3[0] || r3[1], r3 === null) return;
      if (r3.tag === 6) {
        e3 = b2(r3), Zp(e3, n3);
        return;
      }
      if (r3 = b2(r3), r3.nodeType !== 9) {
        if (r3.nodeType === 11) {
          n3 = `host` in r3 ? r3.host : null, n3 !== null && n3.scrollIntoView(e3);
          return;
        }
        r3.scrollIntoView(e3);
      }
    }
    for (r3 = n3 ? t3.length - 1 : 0; r3 !== (n3 ? -1 : t3.length); ) {
      var a3 = t3[r3];
      a3.tag === 6 ? (a3 = b2(a3), Zp(a3, n3)) : b2(a3).scrollIntoView(e3), r3 += n3 ? -1 : 1;
    }
  };
  function Qp(e3, t3) {
    return e3 = b2(e3), $p(e3, t3), false;
  }
  function $p(e3, t3) {
    e3.reactFragments ??= /* @__PURE__ */ new Set(), e3.reactFragments.add(t3);
  }
  function em(e3, t3) {
    var n3 = t3._eventListeners;
    if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
      var i3 = n3[r3];
      e3.addEventListener(i3.type, i3.attachedListener, Rp2(i3.optionsOrUseCapture));
    }
    e3.nodeType !== 3 && (n3 = t3._observers, n3 !== null && n3.forEach(function(n4) {
      for (var r4 = 0, i4 = 0; i4 < Kp2.length; i4++) {
        var a3 = Kp2[i4];
        (a3.fragmentInstance !== t3 || a3.observer !== n4 || a3.instance !== e3) && (Kp2[r4++] = a3);
      }
      Kp2.length = r4, n4.observe(e3);
    }), $p(e3, t3));
  }
  function tm(e3, t3) {
    var n3 = t3._eventListeners;
    if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
      var i3 = n3[r3];
      e3.removeEventListener(i3.type, i3.attachedListener, Rp2(i3.optionsOrUseCapture));
    }
    e3.nodeType !== 3 && (n3 = t3._observers, n3 !== null && n3.forEach(function(n4) {
      typeof n4.rootMargin == `string` ? Jp(t3, n4, e3) : n4.unobserve(e3);
    }), e3.reactFragments != null && e3.reactFragments.delete(t3));
  }
  function nm(e3) {
    var t3 = e3.firstChild;
    for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
      var n3 = t3;
      switch (t3 = t3.nextSibling, n3.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nm(n3), Lt2(n3);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n3.rel.toLowerCase() === `stylesheet`) continue;
      }
      e3.removeChild(n3);
    }
  }
  function rm(e3, t3, n3, r3) {
    for (; e3.nodeType === 1; ) {
      var i3 = n3;
      if (e3.nodeName.toLowerCase() !== t3.toLowerCase()) {
        if (!r3 && (e3.nodeName !== `INPUT` || e3.type !== `hidden`)) break;
      } else if (!r3) {
        if (t3 === `input` && e3.type === `hidden`) {
          var a3 = i3.name == null ? null : `` + i3.name;
          if (i3.type === `hidden` && e3.getAttribute(`name`) === a3) return e3;
        } else return e3;
      } else if (!e3[Ft2]) switch (t3) {
        case `meta`:
          if (!e3.hasAttribute(`itemprop`)) break;
          return e3;
        case `link`:
          if (a3 = e3.getAttribute(`rel`), a3 === `stylesheet` && e3.hasAttribute(`data-precedence`) || a3 !== i3.rel || e3.getAttribute(`href`) !== (i3.href == null || i3.href === `` ? null : i3.href) || e3.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin) || e3.getAttribute(`title`) !== (i3.title == null ? null : i3.title)) break;
          return e3;
        case `style`:
          if (e3.hasAttribute(`data-precedence`)) break;
          return e3;
        case `script`:
          if (a3 = e3.getAttribute(`src`), (a3 !== (i3.src == null ? null : i3.src) || e3.getAttribute(`type`) !== (i3.type == null ? null : i3.type) || e3.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin)) && a3 && e3.hasAttribute(`async`) && !e3.hasAttribute(`itemprop`)) break;
          return e3;
        default:
          return e3;
      }
      if (e3 = lm(e3.nextSibling), e3 === null) break;
    }
    return null;
  }
  function im(e3, t3, n3) {
    if (t3 === ``) return null;
    for (; e3.nodeType !== 3; ) if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !n3 || (e3 = lm(e3.nextSibling), e3 === null)) return null;
    return e3;
  }
  function am(e3, t3) {
    for (; e3.nodeType !== 8; ) if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !t3 || (e3 = lm(e3.nextSibling), e3 === null)) return null;
    return e3;
  }
  function om(e3) {
    return e3.data === `$?` || e3.data === `$~`;
  }
  function sm(e3) {
    return e3.data === `$!` || e3.data === `$?` && e3.ownerDocument.readyState !== `loading`;
  }
  function cm(e3, t3) {
    var n3 = e3.ownerDocument;
    if (e3.data === `$~`) e3._reactRetry = t3;
    else if (e3.data !== `$?` || n3.readyState !== `loading`) t3();
    else {
      var r3 = function() {
        t3(), n3.removeEventListener(`DOMContentLoaded`, r3);
      };
      n3.addEventListener(`DOMContentLoaded`, r3), e3._reactRetry = r3;
    }
  }
  function lm(e3) {
    for (; e3 != null; e3 = e3.nextSibling) {
      var t3 = e3.nodeType;
      if (t3 === 1 || t3 === 3) break;
      if (t3 === 8) {
        if (t3 = e3.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`) break;
        if (t3 === `/$` || t3 === `/&`) return null;
      }
    }
    return e3;
  }
  var um = null;
  function dm(e3) {
    e3 = e3.nextSibling;
    for (var t3 = 0; e3; ) {
      if (e3.nodeType === 8) {
        var n3 = e3.data;
        if (n3 === `/$` || n3 === `/&`) {
          if (t3 === 0) return lm(e3.nextSibling);
          t3--;
        } else n3 !== `$` && n3 !== `$!` && n3 !== `$?` && n3 !== `$~` && n3 !== `&` || t3++;
      }
      e3 = e3.nextSibling;
    }
    return null;
  }
  function fm(e3) {
    e3 = e3.previousSibling;
    for (var t3 = 0; e3; ) {
      if (e3.nodeType === 8) {
        var n3 = e3.data;
        if (n3 === `$` || n3 === `$!` || n3 === `$?` || n3 === `$~` || n3 === `&`) {
          if (t3 === 0) return e3;
          t3--;
        } else n3 !== `/$` && n3 !== `/&` || t3++;
      }
      e3 = e3.previousSibling;
    }
    return null;
  }
  function pm(e3, t3) {
    function n3() {
      r3 = true;
    }
    if (e3.ownerDocument.activeElement === e3) return true;
    var r3 = false;
    try {
      e3.ownerDocument.addEventListener(`focus`, n3, true), (e3.focus || HTMLElement.prototype.focus).call(e3, t3);
    } finally {
      e3.ownerDocument.removeEventListener(`focus`, n3, true);
    }
    return r3;
  }
  function mm(e3) {
    yp2(function() {
      yp2(function(t3) {
        return e3(t3);
      });
    });
  }
  function hm(e3, t3, n3) {
    switch (t3 = lp2(n3), e3) {
      case `html`:
        if (e3 = t3.documentElement, !e3) throw Error(i2(452));
        return e3;
      case `head`:
        if (e3 = t3.head, !e3) throw Error(i2(453));
        return e3;
      case `body`:
        if (e3 = t3.body, !e3) throw Error(i2(454));
        return e3;
      default:
        throw Error(i2(451));
    }
  }
  function gm(e3, t3, n3) {
    for (var r3 in n3) {
      var i3 = n3[r3];
      n3.hasOwnProperty(r3) && i3 != null && $2(e3, t3, r3, null, rp2, i3);
    }
    n3.dangerouslySetInnerHTML != null && (e3.textContent = ``), e3.onclick === Cn2 && (e3.onclick = null), Lt2(e3);
  }
  function _m(e3) {
    for (var t3 = e3.attributes; t3.length; ) e3.removeAttributeNode(t3[0]);
    Lt2(e3);
  }
  var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
  function bm(e3) {
    if (typeof e3.getRootNode == `function`) {
      var t3 = e3.getRootNode();
      if (t3.nodeType === 9 || t3.nodeType === 11) return t3;
    }
    return e3.nodeType === 9 ? e3 : e3.ownerDocument;
  }
  var xm = D2.d;
  D2.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
  function Sm() {
    var e3 = xm.f(), t3 = zd2();
    return e3 || t3;
  }
  function Cm(e3) {
    var t3 = zt2(e3);
    t3 !== null && t3.tag === 5 && t3.type === `form` ? ac2(t3) : xm.r(e3);
  }
  var wm = typeof document > `u` ? null : document;
  function Tm(e3, t3, n3) {
    var r3 = wm;
    if (r3 && typeof t3 == `string` && t3) {
      var i3 = cn2(t3);
      i3 = `link[rel="` + e3 + `"][href="` + i3 + `"]`, typeof n3 == `string` && (i3 += `[crossorigin="` + n3 + `"]`), ym.has(i3) || (ym.add(i3), e3 = { rel: e3, crossOrigin: n3, href: t3 }, r3.querySelector(i3) === null && (t3 = r3.createElement(`link`), np2(t3, `link`, e3), Ht2(t3), r3.head.appendChild(t3)));
    }
  }
  function Em(e3) {
    xm.D(e3), Tm(`dns-prefetch`, e3, null);
  }
  function Dm(e3, t3) {
    xm.C(e3, t3), Tm(`preconnect`, e3, t3);
  }
  function Om(e3, t3, n3) {
    xm.L(e3, t3, n3);
    var r3 = wm;
    if (r3 && e3 && t3) {
      var i3 = `link[rel="preload"][as="` + cn2(t3) + `"]`;
      t3 === `image` && n3 && n3.imageSrcSet ? (i3 += `[imagesrcset="` + cn2(n3.imageSrcSet) + `"]`, typeof n3.imageSizes == `string` && (i3 += `[imagesizes="` + cn2(n3.imageSizes) + `"]`)) : i3 += `[href="` + cn2(e3) + `"]`;
      var a3 = i3;
      switch (t3) {
        case `style`:
          a3 = Pm(e3);
          break;
        case `script`:
          a3 = Rm(e3);
      }
      if (!(vm.has(a3) || (e3 = T2({ rel: `preload`, href: t3 === `image` && n3 && n3.imageSrcSet ? void 0 : e3, as: t3 }, n3), vm.set(a3, e3), r3.querySelector(i3) !== null || t3 === `style` && r3.querySelector(Fm(a3)) || t3 === `script` && r3.querySelector(zm(a3))))) {
        var o3 = r3.createElement(`link`);
        np2(o3, `link`, e3), t3 === `style` && (o3[It2] = true, o3.onload = o3.onerror = function() {
          Ut2(o3);
        }), Ht2(o3), r3.head.appendChild(o3);
      }
    }
  }
  function km(e3, t3) {
    xm.m(e3, t3);
    var n3 = wm;
    if (n3 && e3) {
      var r3 = t3 && typeof t3.as == `string` ? t3.as : `script`, i3 = `link[rel="modulepreload"][as="` + cn2(r3) + `"][href="` + cn2(e3) + `"]`, a3 = i3;
      switch (r3) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a3 = Rm(e3);
      }
      if (!vm.has(a3) && (e3 = T2({ rel: `modulepreload`, href: e3 }, t3), vm.set(a3, e3), n3.querySelector(i3) === null)) {
        switch (r3) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n3.querySelector(zm(a3))) return;
        }
        r3 = n3.createElement(`link`), np2(r3, `link`, e3), Ht2(r3), n3.head.appendChild(r3);
      }
    }
  }
  function Am(e3, t3, n3) {
    xm.S(e3, t3, n3);
    var r3 = wm;
    if (r3 && e3) {
      var i3 = Vt2(r3).hoistableStyles, a3 = Pm(e3);
      t3 ||= `default`;
      var o3 = i3.get(a3);
      if (!o3) {
        var s3 = { loading: 0, preload: null };
        if (o3 = r3.querySelector(Fm(a3))) s3.loading = 5;
        else {
          e3 = T2({ rel: `stylesheet`, href: e3, "data-precedence": t3 }, n3), (n3 = vm.get(a3)) && Hm(e3, n3);
          var c3 = o3 = r3.createElement(`link`);
          Ht2(c3), np2(c3, `link`, e3), c3._p = new Promise(function(e4, t4) {
            c3.onload = e4, c3.onerror = t4;
          }), c3.addEventListener(`load`, function() {
            s3.loading |= 1;
          }), c3.addEventListener(`error`, function() {
            s3.loading |= 2;
          }), s3.loading |= 4, Vm(o3, t3, r3);
        }
        o3 = { type: `stylesheet`, instance: o3, count: 1, state: s3 }, i3.set(a3, o3);
      }
    }
  }
  function jm(e3, t3) {
    xm.X(e3, t3);
    var n3 = wm;
    if (n3 && e3) {
      var r3 = Vt2(n3).hoistableScripts, i3 = Rm(e3), a3 = r3.get(i3);
      a3 || (a3 = n3.querySelector(zm(i3)), a3 || (e3 = T2({ src: e3, async: true }, t3), (t3 = vm.get(i3)) && Um(e3, t3), a3 = n3.createElement(`script`), Ht2(a3), np2(a3, `link`, e3), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
    }
  }
  function Mm(e3, t3) {
    xm.M(e3, t3);
    var n3 = wm;
    if (n3 && e3) {
      var r3 = Vt2(n3).hoistableScripts, i3 = Rm(e3), a3 = r3.get(i3);
      a3 || (a3 = n3.querySelector(zm(i3)), a3 || (e3 = T2({ src: e3, async: true, type: `module` }, t3), (t3 = vm.get(i3)) && Um(e3, t3), a3 = n3.createElement(`script`), Ht2(a3), np2(a3, `link`, e3), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
    }
  }
  function Nm(e3, t3, n3, r3) {
    var a3 = (a3 = Me2.current) ? bm(a3) : null;
    if (!a3) throw Error(i2(446));
    switch (e3) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        return typeof n3.precedence == `string` && typeof n3.href == `string` ? (n3 = Pm(n3.href), t3 = Vt2(a3).hoistableStyles, r3 = t3.get(n3), r3 || (r3 = { type: `style`, instance: null, count: 0, state: null }, t3.set(n3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      case `link`:
        if (n3.rel === `stylesheet` && typeof n3.href == `string` && typeof n3.precedence == `string`) {
          e3 = Pm(n3.href);
          var o3 = Vt2(a3).hoistableStyles, s3 = o3.get(e3);
          if (s3 || (a3 = a3.ownerDocument || a3, s3 = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, o3.set(e3, s3), (o3 = a3.querySelector(Fm(e3))) ? o3._p || (s3.instance = o3, s3.state.loading = 5) : (o3 = vm.get(e3), o3 || (o3 = { rel: `preload`, as: `style`, href: n3.href, crossOrigin: n3.crossOrigin, integrity: n3.integrity, media: n3.media, hrefLang: n3.hrefLang, referrerPolicy: n3.referrerPolicy }, vm.set(e3, o3)), Lm(a3, e3, o3, s3.state))), t3 && r3 === null) throw Error(i2(528, ``));
          return s3;
        }
        if (t3 && r3 !== null) throw Error(i2(529, ``));
        return null;
      case `script`:
        return t3 = n3.async, n3 = n3.src, typeof n3 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (n3 = Rm(n3), t3 = Vt2(a3).hoistableScripts, r3 = t3.get(n3), r3 || (r3 = { type: `script`, instance: null, count: 0, state: null }, t3.set(n3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      default:
        throw Error(i2(444, e3));
    }
  }
  function Pm(e3) {
    return `href="` + cn2(e3) + `"`;
  }
  function Fm(e3) {
    return `link[rel="stylesheet"][` + e3 + `]`;
  }
  function Im(e3) {
    return T2({}, e3, { "data-precedence": e3.precedence, precedence: null });
  }
  function Lm(e3, t3, n3, r3) {
    if (t3 = e3.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`)) {
      if (true !== t3[It2]) {
        r3.loading = 1;
        return;
      }
    } else t3 = e3.createElement(`link`), t3[It2] = true, t3.onload = t3.onerror = Ut2.bind(null, t3), np2(t3, `link`, n3), Ht2(t3), e3.head.appendChild(t3);
    r3.preload = t3, t3.addEventListener(`load`, function() {
      return r3.loading |= 1;
    }), t3.addEventListener(`error`, function() {
      return r3.loading |= 2;
    });
  }
  function Rm(e3) {
    return `[src="` + cn2(e3) + `"]`;
  }
  function zm(e3) {
    return `script[async]` + e3;
  }
  function Bm(e3, t3, n3) {
    if (t3.count++, t3.instance === null) switch (t3.type) {
      case `style`:
        var r3 = e3.querySelector(`style[data-href~="` + cn2(n3.href) + `"]`);
        if (r3) return t3.instance = r3, Ht2(r3), r3;
        var a3 = T2({}, n3, { "data-href": n3.href, "data-precedence": n3.precedence, href: null, precedence: null });
        return r3 = (e3.ownerDocument || e3).createElement(`style`), Ht2(r3), np2(r3, `style`, a3), Vm(r3, n3.precedence, e3), t3.instance = r3;
      case `stylesheet`:
        a3 = Pm(n3.href);
        var o3 = e3.querySelector(Fm(a3));
        if (o3) return t3.state.loading |= 4, t3.instance = o3, Ht2(o3), o3;
        r3 = Im(n3), (a3 = vm.get(a3)) && Hm(r3, a3), o3 = (e3.ownerDocument || e3).createElement(`link`), Ht2(o3);
        var s3 = o3;
        return s3._p = new Promise(function(e4, t4) {
          s3.onload = e4, s3.onerror = t4;
        }), np2(o3, `link`, r3), t3.state.loading |= 4, Vm(o3, n3.precedence, e3), t3.instance = o3;
      case `script`:
        return o3 = Rm(n3.src), (a3 = e3.querySelector(zm(o3))) ? (t3.instance = a3, Ht2(a3), a3) : (r3 = n3, (a3 = vm.get(o3)) && (r3 = T2({}, n3), Um(r3, a3)), e3 = e3.ownerDocument || e3, a3 = e3.createElement(`script`), Ht2(a3), np2(a3, `link`, r3), e3.head.appendChild(a3), t3.instance = a3);
      case `void`:
        return null;
      default:
        throw Error(i2(443, t3.type));
    }
    else t3.type === `stylesheet` && !(t3.state.loading & 4) && (r3 = t3.instance, t3.state.loading |= 4, Vm(r3, n3.precedence, e3));
    return t3.instance;
  }
  function Vm(e3, t3, n3) {
    for (var r3 = n3.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i3 = r3.length ? r3[r3.length - 1] : null, a3 = i3, o3 = 0; o3 < r3.length; o3++) {
      var s3 = r3[o3];
      if (s3.dataset.precedence === t3) a3 = s3;
      else if (a3 !== i3) break;
    }
    a3 ? a3.parentNode.insertBefore(e3, a3.nextSibling) : (t3 = n3.nodeType === 9 ? n3.head : n3, t3.insertBefore(e3, t3.firstChild));
  }
  function Hm(e3, t3) {
    e3.crossOrigin ??= t3.crossOrigin, e3.referrerPolicy ??= t3.referrerPolicy, e3.title ??= t3.title;
  }
  function Um(e3, t3) {
    e3.crossOrigin ??= t3.crossOrigin, e3.referrerPolicy ??= t3.referrerPolicy, e3.integrity ??= t3.integrity;
  }
  var Wm = null;
  function Gm(e3, t3, n3) {
    if (Wm === null) {
      var r3 = /* @__PURE__ */ new Map(), i3 = Wm = /* @__PURE__ */ new Map();
      i3.set(n3, r3);
    } else i3 = Wm, r3 = i3.get(n3), r3 || (r3 = /* @__PURE__ */ new Map(), i3.set(n3, r3));
    if (r3.has(e3)) return r3;
    for (r3.set(e3, null), n3 = n3.getElementsByTagName(e3), i3 = 0; i3 < n3.length; i3++) {
      var a3 = n3[i3];
      if (!(a3[Ft2] || a3[kt2] || e3 === `link` && a3.getAttribute(`rel`) === `stylesheet`) && a3.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o3 = a3.getAttribute(t3) || ``;
        o3 = e3 + o3;
        var s3 = r3.get(o3);
        s3 ? s3.push(a3) : r3.set(o3, [a3]);
      }
    }
    return r3;
  }
  function Km(e3, t3, n3) {
    e3 = e3.ownerDocument || e3, e3.head.insertBefore(n3, t3 === `title` ? e3.querySelector(`head > title`) : null);
  }
  function qm(e3, t3, n3) {
    if (n3 === 1 || t3.itemProp != null) return false;
    switch (e3) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``) break;
        return true;
      case `link`:
        if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError) break;
        switch (t3.rel) {
          case `stylesheet`:
            return e3 = t3.disabled, typeof t3.precedence == `string` && e3 == null;
          default:
            return true;
        }
      case `script`:
        if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`) return true;
    }
    return false;
  }
  function Jm(e3, t3) {
    return e3 === `img` && t3.src != null && t3.src !== `` && t3.onLoad == null && t3.loading !== `lazy`;
  }
  function Ym(e3) {
    return !(e3.type === `stylesheet` && !(e3.state.loading & 3));
  }
  function Xm(e3) {
    return (e3.width || 100) * (e3.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
  }
  function Zm(e3, t3) {
    typeof t3.decode == `function` && (e3.imgCount++, t3.complete || (e3.imgBytes += Xm(t3), e3.suspenseyImages.push(t3)), e3 = rh.bind(e3), t3.decode().then(e3, e3));
  }
  function Qm(e3, t3, n3, r3) {
    if (n3.type === `stylesheet` && (typeof r3.media != `string` || false !== matchMedia(r3.media).matches) && !(n3.state.loading & 4)) {
      if (n3.instance === null) {
        var i3 = Pm(r3.href), a3 = t3.querySelector(Fm(i3));
        if (a3) {
          t3 = a3._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e3.count++, e3 = nh.bind(e3), t3.then(e3, e3)), n3.state.loading |= 4, n3.instance = a3, Ht2(a3);
          return;
        }
        a3 = t3.ownerDocument || t3, r3 = Im(r3), (i3 = vm.get(i3)) && Hm(r3, i3), a3 = a3.createElement(`link`), Ht2(a3);
        var o3 = a3;
        o3._p = new Promise(function(e4, t4) {
          o3.onload = e4, o3.onerror = t4;
        }), np2(a3, `link`, r3), n3.instance = a3;
      }
      e3.stylesheets === null && (e3.stylesheets = /* @__PURE__ */ new Map()), e3.stylesheets.set(n3, t3), (t3 = n3.state.preload) && !(n3.state.loading & 3) && (e3.count++, n3 = nh.bind(e3), t3.addEventListener(`load`, n3), t3.addEventListener(`error`, n3));
    }
  }
  var $m = 0;
  function eh(e3, t3) {
    return e3.stylesheets && e3.count === 0 && ah(e3, e3.stylesheets), 0 < e3.count || 0 < e3.imgCount ? function(n3) {
      var r3 = setTimeout(function() {
        if (e3.stylesheets && ah(e3, e3.stylesheets), e3.unsuspend) {
          var t4 = e3.unsuspend;
          e3.unsuspend = null, t4();
        }
      }, 6e4 + t3);
      0 < e3.imgBytes && $m === 0 && ($m = 62500 * op2());
      var i3 = setTimeout(function() {
        if (e3.waitingForImages = false, e3.count === 0 && (e3.stylesheets && ah(e3, e3.stylesheets), e3.unsuspend)) {
          var t4 = e3.unsuspend;
          e3.unsuspend = null, t4();
        }
      }, (e3.imgBytes > $m ? 50 : 800) + t3);
      return e3.unsuspend = n3, function() {
        e3.unsuspend = null, clearTimeout(r3), clearTimeout(i3);
      };
    } : null;
  }
  function th(e3) {
    if (e3.count === 0 && (e3.imgCount === 0 || !e3.waitingForImages)) {
      if (e3.stylesheets) ah(e3, e3.stylesheets);
      else if (e3.unsuspend) {
        var t3 = e3.unsuspend;
        e3.unsuspend = null, t3();
      }
    }
  }
  function nh() {
    this.count--, th(this);
  }
  function rh() {
    this.imgCount--, th(this);
  }
  var ih = null;
  function ah(e3, t3) {
    e3.stylesheets = null, e3.unsuspend !== null && (e3.count++, ih = /* @__PURE__ */ new Map(), t3.forEach(oh, e3), ih = null, nh.call(e3));
  }
  function oh(e3, t3) {
    if (!(t3.state.loading & 4)) {
      var n3 = ih.get(e3);
      if (n3) var r3 = n3.get(null);
      else {
        n3 = /* @__PURE__ */ new Map(), ih.set(e3, n3);
        for (var i3 = e3.querySelectorAll(`link[data-precedence],style[data-precedence]`), a3 = 0; a3 < i3.length; a3++) {
          var o3 = i3[a3];
          (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) && (n3.set(o3.dataset.precedence, o3), r3 = o3);
        }
        r3 && n3.set(null, r3);
      }
      i3 = t3.instance, o3 = i3.getAttribute(`data-precedence`), a3 = n3.get(o3) || r3, a3 === r3 && n3.set(null, i3), n3.set(o3, i3), this.count++, r3 = nh.bind(this), i3.addEventListener(`load`, r3), i3.addEventListener(`error`, r3), a3 ? a3.parentNode.insertBefore(i3, a3.nextSibling) : (e3 = e3.nodeType === 9 ? e3.head : e3, e3.insertBefore(i3, e3.firstChild)), t3.state.loading |= 4;
    }
  }
  var sh = { $$typeof: le2, Provider: null, Consumer: null, _currentValue: Te2, _currentValue2: Te2, _threadCount: 0 };
  function ch(e3, t3, n3, r3, i3, a3, o3, s3, c3) {
    this.tag = 1, this.containerInfo = e3, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = vt2(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt2(0), this.hiddenUpdates = vt2(null), this.identifierPrefix = r3, this.onUncaughtError = i3, this.onCaughtError = a3, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lh(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d2) {
    return e3 = new ch(e3, t3, n3, o3, c3, l3, u3, d2, s3), t3 = 1, true === a3 && (t3 |= 24), a3 = Li2(3, null, null, t3), e3.current = a3, a3.stateNode = e3, t3 = Fa2(), t3.refCount++, e3.pooledCache = t3, t3.refCount++, a3.memoizedState = { element: r3, isDehydrated: n3, cache: t3 }, vo2(a3), e3;
  }
  function uh(e3) {
    return e3 ? (e3 = Fi2, e3) : Fi2;
  }
  function dh(e3, t3, n3, r3, i3, a3) {
    i3 = uh(i3), r3.context === null ? r3.context = i3 : r3.pendingContext = i3, r3 = bo2(t3), r3.payload = { element: n3 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n3 = xo2(e3, r3, t3), n3 !== null && (Pd2(n3, e3, t3), So2(n3, e3, t3));
  }
  function fh(e3, t3) {
    if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
      var n3 = e3.retryLane;
      e3.retryLane = n3 !== 0 && n3 < t3 ? n3 : t3;
    }
  }
  function ph(e3, t3) {
    fh(e3, t3), (e3 = e3.alternate) && fh(e3, t3);
  }
  function mh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      var t3 = Mi2(e3, 67108864);
      t3 !== null && Pd2(t3, e3, 67108864), ph(e3, 67108864);
    }
  }
  function hh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      var t3 = jd2();
      t3 = wt2(t3);
      var n3 = Mi2(e3, t3);
      n3 !== null && Pd2(n3, e3, t3), ph(e3, t3);
    }
  }
  var gh = true;
  function _h(e3, t3, n3, r3) {
    var i3 = E2.T;
    E2.T = null;
    var a3 = D2.p;
    try {
      D2.p = 2, yh(e3, t3, n3, r3);
    } finally {
      D2.p = a3, E2.T = i3;
    }
  }
  function vh(e3, t3, n3, r3) {
    var i3 = E2.T;
    E2.T = null;
    var a3 = D2.p;
    try {
      D2.p = 8, yh(e3, t3, n3, r3);
    } finally {
      D2.p = a3, E2.T = i3;
    }
  }
  function yh(e3, t3, n3, r3) {
    if (gh) {
      var i3 = bh(r3);
      if (i3 === null) Kf2(e3, t3, r3, xh, n3), Mh(e3, r3);
      else if (Ph(i3, e3, t3, n3, r3)) r3.stopPropagation();
      else if (Mh(e3, r3), t3 & 4 && -1 < jh.indexOf(e3)) {
        for (; i3 !== null; ) {
          var a3 = zt2(i3);
          if (a3 !== null) switch (a3.tag) {
            case 3:
              if (a3 = a3.stateNode, a3.current.memoizedState.isDehydrated) {
                var o3 = ft2(a3.pendingLanes);
                if (o3 !== 0) {
                  var s3 = a3;
                  for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o3; ) {
                    var c3 = 1 << 31 - at2(o3);
                    s3.entanglements[1] |= c3, o3 &= ~c3;
                  }
                  Ef2(a3), !(G2 & 6) && (gd2 = Je2() + 500, Df2(0, false));
                }
              }
              break;
            case 31:
            case 13:
              s3 = Mi2(a3, 2), s3 !== null && Pd2(s3, a3, 2), zd2(), ph(a3, 2);
          }
          if (a3 = bh(r3), a3 === null && Kf2(e3, t3, r3, xh, n3), a3 === i3) break;
          i3 = a3;
        }
        i3 !== null && r3.stopPropagation();
      } else Kf2(e3, t3, r3, null, n3);
    }
  }
  function bh(e3) {
    return e3 = Tn2(e3), Sh(e3);
  }
  var xh = null;
  function Sh(e3) {
    if (xh = null, e3 = Rt2(e3), e3 !== null) {
      var t3 = o2(e3);
      if (t3 === null) e3 = null;
      else {
        var n3 = t3.tag;
        if (n3 === 13) {
          if (e3 = s2(t3), e3 !== null) return e3;
          e3 = null;
        } else if (n3 === 31) {
          if (e3 = c2(t3), e3 !== null) return e3;
          e3 = null;
        } else if (n3 === 3) {
          if (t3.stateNode.current.memoizedState.isDehydrated) return t3.tag === 3 ? t3.stateNode.containerInfo : null;
          e3 = null;
        } else t3 !== e3 && (e3 = null);
      }
    }
    return xh = e3, null;
  }
  function Ch(e3) {
    switch (e3) {
      case `beforetoggle`:
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `seeked`:
      case `submit`:
      case `toggle`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `fullscreenerror`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 2;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `resize`:
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch (Ye2()) {
          case Xe2:
            return 2;
          case Ze2:
            return 8;
          case Qe2:
          case $e2:
            return 32;
          case et2:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = false, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Mh(e3, t3) {
    switch (e3) {
      case `focusin`:
      case `focusout`:
        Th = null;
        break;
      case `dragenter`:
      case `dragleave`:
        Eh = null;
        break;
      case `mouseover`:
      case `mouseout`:
        Dh = null;
        break;
      case `pointerover`:
      case `pointerout`:
        Oh.delete(t3.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        kh.delete(t3.pointerId);
    }
  }
  function Nh(e3, t3, n3, r3, i3, a3) {
    return e3 === null || e3.nativeEvent !== a3 ? (e3 = { blockedOn: t3, domEventName: n3, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i3] }, t3 !== null && (t3 = zt2(t3), t3 !== null && mh(t3)), e3) : (e3.eventSystemFlags |= r3, t3 = e3.targetContainers, i3 !== null && t3.indexOf(i3) === -1 && t3.push(i3), e3);
  }
  function Ph(e3, t3, n3, r3, i3) {
    switch (t3) {
      case `focusin`:
        return Th = Nh(Th, e3, t3, n3, r3, i3), true;
      case `dragenter`:
        return Eh = Nh(Eh, e3, t3, n3, r3, i3), true;
      case `mouseover`:
        return Dh = Nh(Dh, e3, t3, n3, r3, i3), true;
      case `pointerover`:
        var a3 = i3.pointerId;
        return Oh.set(a3, Nh(Oh.get(a3) || null, e3, t3, n3, r3, i3)), true;
      case `gotpointercapture`:
        return a3 = i3.pointerId, kh.set(a3, Nh(kh.get(a3) || null, e3, t3, n3, r3, i3)), true;
    }
    return false;
  }
  function Fh(e3) {
    var t3 = Rt2(e3.target);
    if (t3 !== null) {
      var n3 = o2(t3);
      if (n3 !== null) {
        if (t3 = n3.tag, t3 === 13) {
          if (t3 = s2(n3), t3 !== null) {
            e3.blockedOn = t3, Dt2(e3.priority, function() {
              hh(n3);
            });
            return;
          }
        } else if (t3 === 31) {
          if (t3 = c2(n3), t3 !== null) {
            e3.blockedOn = t3, Dt2(e3.priority, function() {
              hh(n3);
            });
            return;
          }
        } else if (t3 === 3 && n3.stateNode.current.memoizedState.isDehydrated) {
          e3.blockedOn = n3.tag === 3 ? n3.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e3.blockedOn = null;
  }
  function Ih(e3) {
    if (e3.blockedOn !== null) return false;
    for (var t3 = e3.targetContainers; 0 < t3.length; ) {
      var n3 = bh(e3.nativeEvent);
      if (n3 === null) {
        n3 = e3.nativeEvent;
        var r3 = new n3.constructor(n3.type, n3);
        wn2 = r3, n3.target.dispatchEvent(r3), wn2 = null;
      } else return t3 = zt2(n3), t3 !== null && mh(t3), e3.blockedOn = n3, false;
      t3.shift();
    }
    return true;
  }
  function Lh(e3, t3, n3) {
    Ih(e3) && n3.delete(t3);
  }
  function Rh() {
    wh = false, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
  }
  function zh(e3, n3) {
    e3.blockedOn === n3 && (e3.blockedOn = null, wh || (wh = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, Rh)));
  }
  var Bh = null;
  function Vh(e3) {
    Bh !== e3 && (Bh = e3, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
      Bh === e3 && (Bh = null);
      for (var t3 = 0; t3 < e3.length; t3 += 3) {
        var n3 = e3[t3], r3 = e3[t3 + 1], i3 = e3[t3 + 2];
        if (typeof r3 != `function`) {
          if (Sh(r3 || n3) === null) continue;
          break;
        }
        var a3 = zt2(n3);
        a3 !== null && (e3.splice(t3, 3), t3 -= 3, rc2(a3, { pending: true, data: i3, method: n3.method, action: r3 }, r3, i3));
      }
    }));
  }
  function Hh(e3) {
    function t3(t4) {
      return zh(t4, e3);
    }
    Th !== null && zh(Th, e3), Eh !== null && zh(Eh, e3), Dh !== null && zh(Dh, e3), Oh.forEach(t3), kh.forEach(t3);
    for (var n3 = 0; n3 < Ah.length; n3++) {
      var r3 = Ah[n3];
      r3.blockedOn === e3 && (r3.blockedOn = null);
    }
    for (; 0 < Ah.length && (n3 = Ah[0], n3.blockedOn === null); ) Fh(n3), n3.blockedOn === null && Ah.shift();
    if (n3 = (e3.ownerDocument || e3).$$reactFormReplay, n3 != null) for (r3 = 0; r3 < n3.length; r3 += 3) {
      var i3 = n3[r3], a3 = n3[r3 + 1], o3 = i3[At2] || null;
      if (typeof a3 == `function`) o3 || Vh(n3);
      else if (o3) {
        var s3 = null;
        if (a3 && a3.hasAttribute(`formAction`)) {
          if (i3 = a3, o3 = a3[At2] || null) s3 = o3.formAction;
          else if (Sh(i3) !== null) continue;
        } else s3 = o3.action;
        typeof s3 == `function` ? n3[r3 + 1] = s3 : (n3.splice(r3, 3), r3 -= 3), Vh(n3);
      }
    }
  }
  function Uh() {
    function e3(e4) {
      e4.canIntercept && e4.info === `react-transition` && e4.intercept({ handler: function() {
        return new Promise(function(e5) {
          return i3 = e5;
        });
      }, focusReset: `manual`, scroll: `manual` });
    }
    function t3() {
      i3 !== null && (i3(), i3 = null), r3 || setTimeout(n3, 20);
    }
    function n3() {
      if (!r3 && !navigation.transition) {
        var e4 = navigation.currentEntry;
        e4 && e4.url != null && navigation.navigate(e4.url, { state: e4.getState(), info: `react-transition`, history: `replace` });
      }
    }
    if (typeof navigation == `object`) {
      var r3 = false, i3 = null;
      return navigation.addEventListener(`navigate`, e3), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n3, 100), function() {
        r3 = true, navigation.removeEventListener(`navigate`, e3), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i3 !== null && (i3(), i3 = null);
      };
    }
  }
  function Wh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.render = Wh.prototype.render = function(e3) {
    var t3 = this._internalRoot;
    if (t3 === null) throw Error(i2(409));
    var n3 = t3.current;
    dh(n3, jd2(), e3, t3, null, null);
  }, Gh.prototype.unmount = Wh.prototype.unmount = function() {
    var e3 = this._internalRoot;
    if (e3 !== null) {
      this._internalRoot = null;
      var t3 = e3.containerInfo;
      dh(e3.current, 2, null, e3, null, null), zd2(), t3[M2] = null;
    }
  };
  function Gh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.unstable_scheduleHydration = function(e3) {
    if (e3) {
      var t3 = Et2();
      e3 = { blockedOn: null, target: e3, priority: t3 };
      for (var n3 = 0; n3 < Ah.length && t3 !== 0 && t3 < Ah[n3].priority; n3++) ;
      Ah.splice(n3, 0, e3), n3 === 0 && Fh(e3);
    }
  };
  var Kh = n2.version;
  if (Kh !== `19.3.0`) throw Error(i2(527, Kh, `19.3.0`));
  D2.findDOMNode = function(e3) {
    var t3 = e3._reactInternals;
    if (t3 === void 0) throw typeof e3.render == `function` ? Error(i2(188)) : (e3 = Object.keys(e3).join(`,`), Error(i2(268, e3)));
    return e3 = u2(t3), e3 = e3 === null ? null : f2(e3), e3 = e3 === null ? null : e3.stateNode, e3;
  };
  var qh = { bundleType: 0, version: `19.3.0`, rendererPackageName: `react-dom`, currentDispatcherRef: E2, reconcilerVersion: `19.3.0` };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jh.isDisabled && Jh.supportsFiber) try {
      rt2 = Jh.inject(qh), j2 = Jh;
    } catch {
    }
  }
  e2.createRoot = function(e3, t3) {
    if (!a2(e3)) throw Error(i2(299));
    var n3 = false, r3 = ``, o3 = Ec2, s3 = Dc2, c3 = Oc2;
    return t3 != null && (true === t3.unstable_strictMode && (n3 = true), t3.identifierPrefix !== void 0 && (r3 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (o3 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (s3 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (c3 = t3.onRecoverableError)), t3 = lh(e3, 1, false, null, null, n3, r3, null, o3, s3, c3, Uh), e3[M2] = t3.current, Wf2(e3), new Wh(t3);
  };
})), _ = o(((e2, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e3) {
      console.error(e3);
    }
  }
  n2(), t2.exports = g();
})), v = l(d(), 1), y = l(_(), 1), b = o(((e2) => {
  var t2 = Symbol.for(`react.transitional.element`), n2 = Symbol.for(`react.fragment`);
  function r2(e3, n3, r3) {
    var i2 = null;
    if (r3 !== void 0 && (i2 = `` + r3), n3.key !== void 0 && (i2 = `` + n3.key), `key` in n3) for (var a2 in r3 = {}, n3) a2 !== `key` && (r3[a2] = n3[a2]);
    else r3 = n3;
    return n3 = r3.ref, { $$typeof: t2, type: e3, key: i2, ref: n3 === void 0 ? null : n3, props: r3 };
  }
  e2.Fragment = n2, e2.jsx = r2, e2.jsxs = r2;
})), x = o(((e2, t2) => {
  t2.exports = b();
})), S = (0, v.createContext)({});
function ee(e2) {
  let t2 = (0, v.useRef)(null);
  return t2.current === null && (t2.current = e2()), t2.current;
}
var te = typeof window < `u` ? v.useLayoutEffect : v.useEffect, C = (0, v.createContext)(null);
function w(e2, t2) {
  e2.indexOf(t2) === -1 && e2.push(t2);
}
function T(e2, t2) {
  let n2 = e2.indexOf(t2);
  n2 > -1 && e2.splice(n2, 1);
}
var ne = (e2, t2, n2) => n2 > t2 ? t2 : n2 < e2 ? e2 : n2, re = {}, ie = (e2) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e2), ae = (e2) => typeof e2 == `object` && !!e2, oe = (e2) => /^0[^.\s]+$/u.test(e2);
function se(e2) {
  let t2;
  return () => (t2 === void 0 && (t2 = e2()), t2);
}
var ce = (e2) => e2, le = (...e2) => e2.reduce((e3, t2) => (n2) => t2(e3(n2))), ue = (e2, t2, n2) => {
  let r2 = t2 - e2;
  return r2 ? (n2 - e2) / r2 : 1;
}, de = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e2) {
    return w(this.subscriptions, e2), () => this.remove(e2);
  }
  remove(e2) {
    T(this.subscriptions, e2);
  }
  notify(e2, t2, n2) {
    let r2 = this.subscriptions.length;
    if (r2) {
      if (r2 === 1) this.subscriptions[0](e2, t2, n2);
      else for (let i2 = 0; i2 < r2; i2++) {
        let r3 = this.subscriptions[i2];
        r3 && r3(e2, t2, n2);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}, fe = (e2) => e2 * 1e3, pe = (e2) => e2 / 1e3, me = (e2, t2) => t2 ? 1e3 / t2 * e2 : 0, he = (e2, t2, n2) => {
  let r2 = t2 - e2;
  return ((n2 - e2) % r2 + r2) % r2 + e2;
}, ge = (e2, t2, n2) => e2 * (3 * (1 - e2) * ((1 - e2) * t2 + e2 * n2) + e2 * e2);
function _e(e2, t2, n2, r2) {
  return e2 === t2 && n2 === r2 ? ce : (i2) => {
    let a2 = 0, o2 = 1, s2 = i2;
    for (let t3 = 0; ; t3++) {
      s2 >= a2 && s2 <= o2 || (s2 = (a2 + o2) / 2);
      let r3 = ge(s2, e2, n2) - i2;
      if (r3 * r3 < 1e-28 || t3 === 40) break;
      r3 > 0 ? o2 = s2 : a2 = s2, s2 -= r3 * 1e-7 / (ge(s2 + 1e-7, e2, n2) - i2 - r3);
    }
    return ge(s2, t2, r2);
  };
}
var ve = (e2) => (t2) => t2 <= 0.5 ? e2(2 * t2) / 2 : (2 - e2(2 * (1 - t2))) / 2, ye = (e2) => (t2) => 1 - e2(1 - t2), be = _e(0.33, 1.53, 0.69, 0.99), xe = ye(be), Se = ve(xe), Ce = (e2) => e2 >= 1 ? 1 : (e2 *= 2) < 1 ? 0.5 * xe(e2) : 0.5 * (2 - 2 ** (-10 * (e2 - 1))), we = (e2) => 1 - Math.sin(Math.acos(e2)), E = ye(we), D = ve(we), Te = _e(0.42, 0, 1, 1), Ee = _e(0, 0, 0.58, 1), De = _e(0.42, 0, 0.58, 1), Oe = (e2) => Array.isArray(e2) && typeof e2[0] != `number`;
function ke(e2, t2) {
  return Oe(e2) ? e2[he(0, e2.length, t2)] : e2;
}
var O = (e2) => Array.isArray(e2) && typeof e2[0] == `number`, Ae = { linear: ce, easeIn: Te, easeInOut: De, easeOut: Ee, circIn: we, circInOut: D, circOut: E, backIn: xe, backInOut: Se, backOut: be, anticipate: Ce }, je = (e2) => typeof e2 == `string`, Me = (e2) => {
  if (O(e2)) {
    e2.length;
    let [t2, n2, r2, i2] = e2;
    return _e(t2, n2, r2, i2);
  }
  return je(e2) ? (Ae[e2], `${e2}`, Ae[e2]) : e2;
}, k = { delta: 0, timestamp: 0, isProcessing: false }, Ne;
function Pe() {
  Ne = void 0;
}
var A = { now: () => (Ne === void 0 && A.set(k.isProcessing || re.useManualTiming ? k.timestamp : performance.now()), Ne), set: (e2) => {
  Ne = e2, queueMicrotask(Pe);
} }, Fe = (e2) => Math.round(e2 * 1e5) / 1e5, Ie = (e2) => (t2) => typeof t2 == `string` && t2.startsWith(e2), Le = Ie(`--`), Re = Ie(`var(--`), ze = (e2) => Re(e2) ? Be.test(e2.split(`/*`)[0].trim()) : false, Be = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ve(e2) {
  return typeof e2 == `string` && e2.split(`/*`)[0].includes(`var(--`);
}
var He = { test: (e2) => typeof e2 == `number`, parse: parseFloat, transform: (e2) => e2 }, Ue = { ...He, transform: (e2) => ne(0, 1, e2) }, We = { ...He, default: 1 }, Ge = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ke(e2) {
  return e2 == null;
}
var qe = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Je = (e2, t2) => (n2) => !!(typeof n2 == `string` && qe.test(n2) && n2.startsWith(e2) || t2 && !Ke(n2) && Object.prototype.hasOwnProperty.call(n2, t2)), Ye = (e2, t2, n2) => (r2) => {
  if (typeof r2 != `string`) return r2;
  let [i2, a2, o2, s2] = r2.match(Ge);
  return { [e2]: parseFloat(i2), [t2]: parseFloat(a2), [n2]: parseFloat(o2), alpha: s2 === void 0 ? 1 : parseFloat(s2) };
}, Xe = (e2) => ne(0, 255, e2), Ze = { ...He, transform: (e2) => Math.round(Xe(e2)) }, Qe = { test: Je(`rgb`, `red`), parse: Ye(`red`, `green`, `blue`), transform: ({ red: e2, green: t2, blue: n2, alpha: r2 = 1 }) => `rgba(` + Ze.transform(e2) + `, ` + Ze.transform(t2) + `, ` + Ze.transform(n2) + `, ` + Fe(Ue.transform(r2)) + `)` };
function $e(e2) {
  let t2 = ``, n2 = ``, r2 = ``, i2 = ``;
  return e2.length > 5 ? (t2 = e2.substring(1, 3), n2 = e2.substring(3, 5), r2 = e2.substring(5, 7), i2 = e2.substring(7, 9)) : (t2 = e2.substring(1, 2), n2 = e2.substring(2, 3), r2 = e2.substring(3, 4), i2 = e2.substring(4, 5), t2 += t2, n2 += n2, r2 += r2, i2 += i2), { red: parseInt(t2, 16), green: parseInt(n2, 16), blue: parseInt(r2, 16), alpha: i2 ? parseInt(i2, 16) / 255 : 1 };
}
var et = { test: Je(`#`), parse: $e, transform: Qe.transform }, tt = (e2) => ({ test: (t2) => typeof t2 == `string` && t2.endsWith(e2) && t2.split(` `).length === 1, parse: parseFloat, transform: (t2) => `${t2}${e2}` }), nt = tt(`deg`), rt = tt(`%`), j = tt(`px`), it = tt(`vh`), at = tt(`vw`), ot = { ...rt, parse: (e2) => rt.parse(e2) / 100, transform: (e2) => rt.transform(e2 * 100) }, st = { test: Je(`hsl`, `hue`), parse: Ye(`hue`, `saturation`, `lightness`), transform: ({ hue: e2, saturation: t2, lightness: n2, alpha: r2 = 1 }) => `hsla(` + Math.round(e2) + `, ` + rt.transform(Fe(t2)) + `, ` + rt.transform(Fe(n2)) + `, ` + Fe(Ue.transform(r2)) + `)` }, ct = { test: (e2) => Qe.test(e2) || et.test(e2) || st.test(e2), parse: (e2) => Qe.test(e2) ? Qe.parse(e2) : st.test(e2) ? st.parse(e2) : et.parse(e2), transform: (e2) => typeof e2 == `string` ? e2 : e2.hasOwnProperty(`red`) ? Qe.transform(e2) : st.transform(e2), getAnimatableNone: (e2) => {
  let t2 = ct.parse(e2);
  return t2.alpha = 0, ct.transform(t2);
} }, lt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, ut = new RegExp(Ge.source), dt = new RegExp(lt.source, `i`);
function ft(e2) {
  return isNaN(e2) && typeof e2 == `string` && (ut.test(e2) || dt.test(e2));
}
var pt = `number`, mt = `color`, ht = `var`, gt = `var(`, _t = "${}", vt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yt(e2) {
  let t2 = e2.toString();
  return ut.test(t2) || dt.test(t2);
}
function bt(e2) {
  let t2 = e2.toString(), n2 = [], r2 = { color: [], number: [], var: [] }, i2 = [], a2 = 0;
  return { values: n2, split: t2.replace(vt, (e3) => (ct.test(e3) ? (r2.color.push(a2), i2.push(mt), n2.push(ct.parse(e3))) : e3.startsWith(gt) ? (r2.var.push(a2), i2.push(ht), n2.push(e3)) : (r2.number.push(a2), i2.push(pt), n2.push(parseFloat(e3))), ++a2, _t)).split(_t), indexes: r2, types: i2 };
}
function xt(e2) {
  return bt(e2).values;
}
function St({ split: e2, types: t2 }) {
  let n2 = e2.length;
  return (r2) => {
    let i2 = ``;
    for (let a2 = 0; a2 < n2; a2++) if (i2 += e2[a2], r2[a2] !== void 0) {
      let e3 = t2[a2];
      i2 += e3 === pt ? Fe(r2[a2]) : e3 === mt ? ct.transform(r2[a2]) : r2[a2];
    }
    return i2;
  };
}
function Ct(e2) {
  return St(bt(e2));
}
var wt = (e2) => typeof e2 == `number` ? 0 : ct.test(e2) ? ct.getAnimatableNone(e2) : e2, Tt = (e2, t2) => typeof e2 == `number` ? t2?.trim().endsWith(`/`) ? e2 : 0 : wt(e2);
function Et(e2) {
  let t2 = bt(e2);
  return St(t2)(t2.values.map((e3, n2) => Tt(e3, t2.split[n2])));
}
var Dt = { test: ft, parse: xt, createTransformer: Ct, getAnimatableNone: Et };
function Ot(e2, t2, n2) {
  return n2 < 0 && (n2 += 1), n2 > 1 && --n2, n2 < 1 / 6 ? e2 + (t2 - e2) * 6 * n2 : n2 < 1 / 2 ? t2 : n2 < 2 / 3 ? e2 + (t2 - e2) * (2 / 3 - n2) * 6 : e2;
}
function kt({ hue: e2, saturation: t2, lightness: n2, alpha: r2 }) {
  e2 /= 360, t2 /= 100, n2 /= 100;
  let i2 = 0, a2 = 0, o2 = 0;
  if (!t2) i2 = a2 = o2 = n2;
  else {
    let r3 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, s2 = 2 * n2 - r3;
    i2 = Ot(s2, r3, e2 + 1 / 3), a2 = Ot(s2, r3, e2), o2 = Ot(s2, r3, e2 - 1 / 3);
  }
  return { red: Math.round(i2 * 255), green: Math.round(a2 * 255), blue: Math.round(o2 * 255), alpha: r2 };
}
function At(e2, t2) {
  return (n2) => n2 > 0 ? t2 : e2;
}
var M = (e2, t2, n2) => e2 + (t2 - e2) * n2, jt = (e2, t2, n2) => {
  let r2 = e2 * e2, i2 = n2 * (t2 * t2 - r2) + r2;
  return i2 < 0 ? 0 : Math.sqrt(i2);
}, Mt = [et, Qe, st], Nt = (e2) => Mt.find((t2) => t2.test(e2));
function Pt(e2) {
  let t2 = Nt(e2);
  if (!t2) return `${e2}`, false;
  let n2 = t2.parse(e2);
  return t2 === st && (n2 = kt(n2)), n2;
}
var Ft = (e2, t2) => {
  let n2 = Pt(e2), r2 = Pt(t2);
  if (!n2 || !r2) return At(e2, t2);
  let i2 = { ...n2 };
  return (e3) => (i2.red = jt(n2.red, r2.red, e3), i2.green = jt(n2.green, r2.green, e3), i2.blue = jt(n2.blue, r2.blue, e3), i2.alpha = M(n2.alpha, r2.alpha, e3), Qe.transform(i2));
}, It = /* @__PURE__ */ new Set([`none`, `hidden`]);
function Lt(e2, t2) {
  return It.has(e2) ? (n2) => n2 <= 0 ? e2 : t2 : (n2) => n2 >= 1 ? t2 : e2;
}
function Rt(e2, t2) {
  return (n2) => M(e2, t2, n2);
}
function zt(e2) {
  return typeof e2 == `number` ? Rt : typeof e2 == `string` ? ze(e2) ? At : ct.test(e2) ? Ft : Ut : Array.isArray(e2) ? Bt : typeof e2 == `object` ? ct.test(e2) ? Ft : Vt : At;
}
function Bt(e2, t2) {
  let n2 = [...e2], r2 = n2.length, i2 = e2.map((e3, n3) => zt(e3)(e3, t2[n3]));
  return (e3) => {
    for (let t3 = 0; t3 < r2; t3++) n2[t3] = i2[t3](e3);
    return n2;
  };
}
function Vt(e2, t2) {
  let n2 = { ...e2, ...t2 }, r2 = {};
  for (let i2 in n2) e2[i2] !== void 0 && t2[i2] !== void 0 && (r2[i2] = zt(e2[i2])(e2[i2], t2[i2]));
  return (e3) => {
    for (let t3 in r2) n2[t3] = r2[t3](e3);
    return n2;
  };
}
function Ht(e2, t2) {
  let n2 = [], r2 = { color: 0, var: 0, number: 0 };
  for (let i2 = 0; i2 < t2.values.length; i2++) {
    let a2 = t2.types[i2], o2 = e2.indexes[a2][r2[a2]], s2 = e2.values[o2] ?? 0;
    n2[i2] = s2, r2[a2]++;
  }
  return n2;
}
var Ut = (e2, t2) => {
  let n2 = Dt.createTransformer(t2), r2 = bt(e2), i2 = bt(t2);
  return r2.indexes.var.length === i2.indexes.var.length && r2.indexes.color.length === i2.indexes.color.length && r2.indexes.number.length >= i2.indexes.number.length ? It.has(e2) && !i2.values.length || It.has(t2) && !r2.values.length ? Lt(e2, t2) : le(Bt(Ht(r2, i2), i2.values), n2) : (`${e2}${t2}`, At(e2, t2));
}, Wt = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function Gt(e2, t2) {
  let n2 = Wt.exec(e2);
  if (!n2) return;
  let r2 = Wt.exec(t2);
  if (!r2 || n2[2] !== r2[2]) return;
  let i2 = n2[2], a2 = parseFloat(n2[1]), o2 = parseFloat(r2[1]);
  return (e3) => Fe(M(a2, o2, e3)) + i2;
}
function Kt(e2, t2, n2) {
  if (typeof e2 == `number` && typeof t2 == `number` && typeof n2 == `number`) return M(e2, t2, n2);
  if (typeof e2 == `string` && typeof t2 == `string`) {
    let n3 = Gt(e2, t2);
    if (n3) return n3;
  }
  return zt(e2)(e2, t2);
}
var qt = [`setup`, `read`, `resolveKeyframes`, `preUpdate`, `update`, `preRender`, `render`, `postRender`];
function Jt(e2) {
  let t2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), r2 = false, i2 = false, a2 = /* @__PURE__ */ new Set(), o2 = { delta: 0, timestamp: 0, isProcessing: false };
  function s2(t3) {
    a2.has(t3) && (n2.add(t3), e2()), t3(o2);
  }
  let c2 = { schedule: (e3, i3 = false, o3 = false) => {
    let s3 = o3 && r2 ? t2 : n2;
    return i3 && a2.add(e3), s3.add(e3), e3;
  }, cancel: (e3) => {
    n2.delete(e3), a2.delete(e3);
  }, process: (e3) => {
    if (o2 = e3, r2) {
      i2 = true;
      return;
    }
    r2 = true;
    let a3 = t2;
    t2 = n2, n2 = a3, t2.forEach(s2), t2.clear(), r2 = false, i2 && (i2 = false, c2.process(e3));
  } };
  return c2;
}
var Yt = 40;
function Xt(e2, t2, n2 = { delta: 0, timestamp: 0, isProcessing: false }) {
  let r2 = false, i2 = true, a2 = () => r2 = true, o2 = qt.reduce((e3, t3) => (e3[t3] = Jt(a2), e3), {}), { setup: s2, read: c2, resolveKeyframes: l2, preUpdate: u2, update: d2, preRender: f2, render: p2, postRender: m2 } = o2, h2 = () => {
    let a3 = re.useManualTiming, o3 = a3 ? n2.timestamp : performance.now();
    r2 = false, a3 || (n2.delta = i2 ? 1e3 / 60 : Math.max(Math.min(o3 - n2.timestamp, Yt), 1)), n2.timestamp = o3, n2.isProcessing = true, s2.process(n2), c2.process(n2), l2.process(n2), u2.process(n2), d2.process(n2), f2.process(n2), p2.process(n2), m2.process(n2), n2.isProcessing = false, r2 && t2 && (i2 = false, e2(h2));
  }, g2 = () => {
    r2 = true, i2 = true, n2.isProcessing || e2(h2);
  };
  return { schedule: qt.reduce((e3, t3) => {
    let n3 = o2[t3];
    return e3[t3] = (e4, t4 = false, i3 = false) => (r2 || g2(), n3.schedule(e4, t4, i3)), e3;
  }, {}), cancel: (e3) => {
    for (let t3 = 0; t3 < qt.length; t3++) o2[qt[t3]].cancel(e3);
  }, state: n2, steps: o2 };
}
var { schedule: N, cancel: P, steps: Zt } = Xt(typeof requestAnimationFrame < `u` ? requestAnimationFrame : ce, true, k), Qt = (e2) => {
  let t2 = ({ timestamp: t3 }) => e2(t3);
  return { start: (e3 = true) => N.update(t2, e3), stop: () => P(t2), now: () => k.isProcessing ? k.timestamp : A.now() };
}, $t = (e2, t2, n2 = 10) => {
  let r2 = ``, i2 = Math.max(Math.round(t2 / n2), 2);
  for (let t3 = 0; t3 < i2; t3++) r2 += Math.round(e2(t3 / (i2 - 1)) * 1e4) / 1e4 + `, `;
  return `linear(${r2.substring(0, r2.length - 2)})`;
}, en = 2e4;
function tn(e2, t2 = 50, n2 = en, r2) {
  let i2 = 0, a2 = e2.next(i2);
  for (r2?.push(a2.value); !a2.done && i2 < n2; ) i2 += t2, a2 = e2.next(i2), r2?.push(a2.value);
  return i2 >= n2 ? 1 / 0 : i2;
}
function nn(e2, t2 = 100, n2) {
  let { keyframes: r2, velocity: i2 } = e2, a2 = r2 && r2[r2.length - 1] - r2[0], o2 = n2({ ...e2, velocity: i2 && a2 ? i2 * t2 / a2 : i2, keyframes: [0, t2] }), s2 = Math.min(tn(o2), en);
  return { type: `keyframes`, ease: (e3) => o2.next(s2 * e3).value / t2, duration: pe(s2) };
}
var rn = { stiffness: 100, damping: 10, mass: 1, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05 }, an = (e2) => e2 < 0 ? 1 / Math.max(1 + e2, rn.minDamping) : Math.max(1 - e2, rn.minDamping);
function on(e2, t2) {
  if (!(e2 > 1)) return 1;
  let n2 = Math.sqrt(e2 * e2 - 1), r2 = e2 - n2, i2 = e2 + n2, a2 = 2 * n2 * Math.exp(-t2) * (1 + t2);
  return ln((e3) => i2 * Math.exp(-r2 * e3) - r2 * Math.exp(-i2 * e3) - a2, (e3) => Math.exp(-i2 * e3) - Math.exp(-r2 * e3), t2) / t2;
}
function sn(e2, t2) {
  return e2 * Math.sqrt(1 - t2 * t2);
}
var cn = 12;
function ln(e2, t2, n2) {
  let r2 = n2;
  for (let n3 = 1; n3 < cn; n3++) r2 -= e2(r2) / t2(r2);
  return r2;
}
var un = 1e-3;
function dn({ duration: e2 = rn.duration, bounce: t2 = rn.bounce }) {
  let n2, r2;
  rn.maxDuration;
  let i2 = an(t2);
  e2 = ne(rn.minDuration, rn.maxDuration, pe(e2)), i2 < 1 ? (n2 = (t3) => {
    let n3 = t3 * i2, r3 = n3 * e2, a3 = sn(t3, i2), o3 = Math.exp(-r3);
    return un - n3 / a3 * o3;
  }, r2 = (t3) => {
    let r3 = t3 * i2 * e2, a3 = i2 * i2 * t3 * t3 * e2, o3 = Math.exp(-r3), s3 = sn(t3 * t3, i2);
    return (-n2(t3) + un > 0 ? -1 : 1) * -a3 * o3 / s3;
  }) : (n2 = (t3) => -1e-3 + Math.exp(-t3 * e2) * (t3 * e2 + 1), r2 = (t3) => Math.exp(-t3 * e2) * (-t3 * (e2 * e2)));
  let a2 = 5 / e2, o2 = ln(n2, r2, a2), s2 = o2 * on(i2, o2 * e2), c2 = s2 * s2;
  return { stiffness: c2, damping: i2 * 2 * Math.sqrt(c2), duration: fe(e2) };
}
var fn = (e2, t2) => (t2 ? e2 >= 0 : e2 > 0) && e2 < 1 / 0;
function pn(e2, t2) {
  if (fn(e2, t2)) return e2;
}
function mn(e2) {
  let t2 = pn(e2.stiffness), n2 = pn(e2.damping, true), r2 = pn(e2.mass), i2 = { ...e2, stiffness: t2 ?? rn.stiffness, damping: n2 ?? rn.damping, mass: r2 ?? rn.mass, isResolvedFromDuration: false, isTimeDefined: (t2 ?? n2 ?? r2) === void 0 && (e2.duration !== void 0 || e2.bounce !== void 0) };
  if (i2.isTimeDefined) {
    if (e2.visualDuration) {
      let t3 = an(e2.bounce || 0), n3 = 2 * Math.PI / (e2.visualDuration * 1.2) * on(t3, 2 * Math.PI / 1.2);
      i2.stiffness = n3 * n3, i2.damping = 2 * t3 * Math.sqrt(i2.stiffness);
    } else Object.assign(i2, dn(i2)), i2.isResolvedFromDuration = true;
    (!fn(i2.stiffness) || !fn(i2.damping, true)) && (i2.stiffness = rn.stiffness, i2.damping = rn.damping);
  }
  return i2;
}
function hn(e2 = rn.visualDuration, t2 = rn.bounce) {
  let n2 = typeof e2 == `object` ? e2 : { visualDuration: e2, keyframes: [0, 1], bounce: t2 }, r2 = n2.keyframes[0], i2 = n2.keyframes[n2.keyframes.length - 1], a2 = { done: false, value: r2 }, { stiffness: o2, damping: s2, mass: c2, duration: l2, isResolvedFromDuration: u2, isTimeDefined: d2 } = mn({ ...n2 }), f2 = (e3) => d2 ? 0 : -pe(e3), p2 = s2 / (2 * Math.sqrt(o2 * c2)), m2 = pe(Math.sqrt(o2 / c2)), h2 = p2 * m2, g2 = { target: i2, delta: i2 - r2, velocity: f2(n2.velocity || 0) || 0, restSpeed: 0, restDelta: 0 }, _2 = () => {
    let e3 = Math.abs(g2.delta) < 5;
    g2.restSpeed = n2.restSpeed || (e3 ? rn.restSpeed.granular : rn.restSpeed.default), g2.restDelta = n2.restDelta || (e3 ? rn.restDelta.granular : rn.restDelta.default);
  };
  _2();
  let v2, y2, b2;
  if (p2 < 1) {
    let e3 = sn(m2, p2), t3 = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    b2 = () => {
      t3.A = (g2.velocity + h2 * g2.delta) / e3, t3.sinC = h2 * t3.A + g2.delta * e3, t3.cosC = h2 * g2.delta - t3.A * e3;
    };
    let n3 = (n4) => {
      n4 !== t3.t && (t3.t = n4, t3.env = Math.exp(-h2 * n4), t3.sin = Math.sin(e3 * n4), t3.cos = Math.cos(e3 * n4));
    };
    v2 = (e4) => (n3(e4), g2.target - t3.env * (t3.A * t3.sin + g2.delta * t3.cos)), y2 = (e4) => (n3(e4), t3.env * (t3.sinC * t3.sin + t3.cosC * t3.cos));
  } else if (p2 === 1) {
    v2 = (e4) => g2.target - Math.exp(-m2 * e4) * (g2.delta + (g2.velocity + m2 * g2.delta) * e4);
    let e3 = { C: 0 };
    b2 = () => {
      e3.C = g2.velocity + m2 * g2.delta;
    }, y2 = (t3) => Math.exp(-m2 * t3) * (m2 * e3.C * t3 - g2.velocity);
  } else {
    let e3 = m2 * Math.sqrt(p2 * p2 - 1), t3 = h2 - e3, n3 = h2 + e3, r3 = d2 ? 1 / 0 : 300 / e3, i3 = (e4, t4) => Math.exp(t4 > r3 ? -e4 * r3 - h2 * (t4 - r3) : -e4 * t4), a3 = { S: 0, F: 0 };
    b2 = () => {
      let t4 = (g2.velocity + h2 * g2.delta) / e3;
      a3.S = (g2.delta + t4) / 2, a3.F = (g2.delta - t4) / 2;
    }, v2 = (e4) => g2.target - a3.S * i3(t3, e4) - a3.F * i3(n3, e4), y2 = (e4) => t3 * a3.S * i3(t3, e4) + n3 * a3.F * i3(n3, e4);
  }
  b2();
  let x2 = u2 && l2 || null, S2 = { calculatedDuration: x2, retarget: (e3, t3) => {
    g2.target = e3[e3.length - 1], g2.delta = g2.target - e3[0], g2.velocity = f2(t3), n2.restSpeed && n2.restDelta || _2(), S2.calculatedDuration = x2, a2.done = false, b2();
  }, velocity: (e3) => fe(y2(e3)), next: (e3) => {
    let t3 = v2(e3);
    if (u2) a2.done = e3 >= l2;
    else {
      let n3 = fe(y2(e3));
      a2.done = Math.abs(n3) <= g2.restSpeed && Math.abs(g2.target - t3) <= g2.restDelta;
    }
    return a2.value = a2.done ? g2.target : t3, a2;
  }, toString: () => {
    let e3 = Math.min(tn(S2), en), t3 = $t((t4) => S2.next(e3 * t4).value, e3, 30);
    return e3 + `ms ` + t3;
  }, toTransition: () => {
  } };
  return S2;
}
hn.applyToOptions = (e2) => {
  let t2 = nn(e2, 100, hn);
  return e2.ease = t2.ease, e2.duration = fe(t2.duration), e2.type = `keyframes`, e2;
};
function gn({ keyframes: e2, velocity: t2 = 0, power: n2 = 0.8, timeConstant: r2 = 325, bounceDamping: i2 = 10, bounceStiffness: a2 = 500, modifyTarget: o2, min: s2, max: c2, restDelta: l2 = 0.5, restSpeed: u2 }) {
  let d2 = e2[0], f2 = { done: false, value: d2 }, p2 = (e3) => e3 < s2 || e3 > c2, m2 = (e3) => s2 === void 0 ? c2 : c2 === void 0 || Math.abs(s2 - e3) < Math.abs(c2 - e3) ? s2 : c2, h2 = n2 * t2, g2 = d2 + h2, _2 = o2 === void 0 ? g2 : o2(g2);
  _2 !== g2 && (h2 = _2 - d2);
  let v2 = (e3) => -h2 * Math.exp(-e3 / r2), y2 = (e3) => {
    let t3 = v2(e3);
    f2.done = Math.abs(t3) <= l2, f2.value = f2.done ? _2 : _2 + t3;
  }, b2, x2, S2 = (e3) => {
    p2(f2.value) && (b2 = e3, x2 = hn({ keyframes: [f2.value, m2(f2.value)], velocity: -v2(e3) / r2 * 1e3, damping: i2, stiffness: a2, restDelta: l2, restSpeed: u2 }));
  };
  return S2(0), { calculatedDuration: null, next: (e3) => {
    let t3 = false;
    return !x2 && b2 === void 0 && (t3 = true, y2(e3), S2(e3)), b2 !== void 0 && e3 >= b2 ? x2.next(e3 - b2) : (!t3 && y2(e3), f2);
  } };
}
function _n(e2, t2, n2) {
  let r2 = [], i2 = n2 || re.mix || Kt, a2 = e2.length - 1;
  for (let n3 = 0; n3 < a2; n3++) {
    let a3 = i2(e2[n3], e2[n3 + 1]);
    t2 && (a3 = le(Array.isArray(t2) ? t2[n3] || ce : t2, a3)), r2.push(a3);
  }
  return r2;
}
function vn(e2, t2, { clamp: n2 = true, ease: r2, mixer: i2 } = {}) {
  let a2 = e2.length;
  if (t2.length, a2 === 1) return () => t2[0];
  if (a2 === 2 && t2[0] === t2[1]) return () => t2[1];
  let o2 = e2[0] === e2[1];
  e2[0] > e2[a2 - 1] && (e2 = [...e2].reverse(), t2 = [...t2].reverse());
  let s2 = _n(t2, r2, i2), c2 = s2.length, l2 = (n3) => {
    if (o2 && n3 < e2[0]) return t2[0];
    let r3 = 0;
    if (c2 > 1) for (; r3 < e2.length - 2 && !(n3 < e2[r3 + 1]); r3++) ;
    let i3 = ue(e2[r3], e2[r3 + 1], n3);
    return s2[r3](i3);
  };
  return n2 ? (t3) => l2(ne(e2[0], e2[a2 - 1], t3)) : l2;
}
function yn(e2, t2) {
  let n2 = e2[e2.length - 1];
  for (let r2 = 1; r2 <= t2; r2++) {
    let i2 = ue(0, t2, r2);
    e2.push(M(n2, 1, i2));
  }
}
function bn(e2) {
  let t2 = [0];
  return yn(t2, e2.length - 1), t2;
}
function xn(e2, t2) {
  return e2.map((e3) => e3 * t2);
}
function Sn(e2, t2) {
  return e2.map(() => t2 || De).splice(0, e2.length - 1);
}
function Cn({ duration: e2 = 300, keyframes: t2, times: n2, ease: r2 = `easeInOut` }) {
  let i2 = Oe(r2) ? r2.map(Me) : Me(r2) || De, a2 = { done: false, value: t2[0] };
  if (t2.length === 2 && !Array.isArray(i2) && (!n2 || n2.length !== 2 || n2[0] === 0 && n2[1] === 1)) {
    let [n3, r3] = t2, o3 = n3 === r3 ? void 0 : (re.mix || Kt)(n3, r3);
    return { calculatedDuration: e2, next: (t3) => (a2.value = o3 ? o3(i2(e2 > 0 ? ne(0, 1, t3 / e2) : 1)) : r3, a2.done = t3 >= e2, a2) };
  }
  let o2 = vn(xn(n2 && n2.length === t2.length ? n2 : bn(t2), e2), t2, { ease: Array.isArray(i2) ? i2 : Sn(t2, i2) });
  return { calculatedDuration: e2, next: (t3) => (a2.value = o2(t3), a2.done = t3 >= e2, a2) };
}
var wn = 5;
function Tn(e2, t2, n2) {
  let r2 = Math.max(t2 - wn, 0);
  return me(n2 - e2(r2), t2 - r2);
}
function En(e2, t2, n2 = 0) {
  return t2 <= 0 ? n2 : e2.velocity ? e2.velocity(t2) : Tn((t3) => e2.next(t3).value, t2, e2.next(t2).value);
}
var Dn = (e2) => e2 !== null;
function On(e2, { repeat: t2, repeatType: n2 = `loop` }, r2, i2 = 1) {
  let a2 = e2.filter(Dn), o2 = i2 < 0 || t2 && n2 !== `loop` && t2 % 2 == 1 ? 0 : a2.length - 1;
  return !o2 || r2 === void 0 ? a2[o2] : r2;
}
var kn = { decay: gn, inertia: gn, tween: Cn, keyframes: Cn, spring: hn };
function An(e2) {
  typeof e2.type == `string` && (e2.type = kn[e2.type]);
}
var jn = 40, Mn = (e2, t2) => t2 - e2 > jn && !re.useManualTiming ? t2 : e2;
function Nn(e2, t2) {
  return { kind: e2, animation: t2, timestamp: A.now(), frameTimestamp: k.timestamp, frameIsProcessing: k.isProcessing };
}
function Pn(e2, t2, n2) {
  let r2 = globalThis.__MOTION_INSPECT__;
  if (r2) try {
    r2({ ...Nn(`animation-start`, e2), options: n2 ? { ...t2, ...n2 } : t2 });
  } catch {
  }
}
function Fn(e2, t2) {
  let n2 = globalThis.__MOTION_INSPECT__;
  if (n2) try {
    n2({ ...Nn(`layout-animation-start`, e2), node: t2 });
  } catch {
  }
}
var In = class {
  constructor() {
    this.isResolved = false;
  }
  get finished() {
    return this._finished ||= this.isResolved ? Promise.resolve() : new Promise((e2) => {
      this._resolve = e2;
    }), this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = void 0, this.isResolved = false;
  }
  notifyFinished() {
    this.isResolved = true, this._resolve?.();
  }
  then(e2, t2) {
    return this.finished.then(e2, t2);
  }
}, Ln = (e2) => e2 / 100, Rn = (e2) => Math.round(e2 * 1e4) / 1e4, zn = class extends In {
  constructor(e2) {
    super(), this.state = `idle`, this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: false, value: void 0 }, this.stop = () => {
      let { motionValue: e3 } = this.options;
      e3 && e3.updatedAt !== A.now() && this.tick(A.now()), this.isStopped = true, this.state !== `idle` && (this.teardown(), this.options.onStop?.());
    }, this.options = e2, this.initAnimation(), this.play(), e2.autoplay === false && this.pause(), Pn(this, this.options);
  }
  initAnimation() {
    let { options: e2 } = this;
    An(e2);
    let { type: t2 = Cn, repeat: n2 = 0, repeatDelay: r2 = 0, repeatType: i2, velocity: a2 = 0 } = e2, { keyframes: o2 } = e2, s2 = t2 || Cn;
    s2 !== Cn && typeof o2[0] != `number` && (this.mixKeyframes = le(Ln, Kt(o2[0], o2[1])), o2 = [0, 100]);
    let c2 = s2(o2 === e2.keyframes ? e2 : { ...e2, keyframes: o2 });
    i2 === `mirror` && (this.mirroredGenerator = s2({ ...e2, keyframes: [...o2].reverse(), velocity: -a2 })), c2.calculatedDuration === null && (c2.calculatedDuration = tn(c2));
    let { calculatedDuration: l2 } = c2;
    this.calculatedDuration = l2, this.resolvedDuration = l2 + r2, this.totalDuration = this.resolvedDuration * (n2 + 1) - r2, this.generator = c2;
  }
  updateTime(e2) {
    let t2 = Math.round(e2 - this.startTime) * this.playbackSpeed;
    this.currentTime = this.holdTime === null ? t2 : this.holdTime;
  }
  tick(e2, t2 = false) {
    let { generator: n2, totalDuration: r2, calculatedDuration: i2 } = this;
    if (this.startTime === null) return n2.next(0);
    let { delay: a2 = 0, keyframes: o2, type: s2, onUpdate: c2, finalKeyframe: l2 } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = Mn(this.startTime, e2)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, e2) : this.speed < 0 && (this.startTime = Math.min(e2 - r2 / this.speed, this.startTime)), t2 ? this.currentTime = e2 : this.updateTime(e2);
    let u2 = this.currentTime - a2 * (this.playbackSpeed >= 0 ? 1 : -1), d2 = this.playbackSpeed >= 0 ? u2 < 0 : u2 > r2;
    this.currentTime = Math.max(u2, 0), this.state === `finished` && this.holdTime === null && (this.currentTime = r2);
    let f2 = this.generate(this.currentTime, d2), { done: p2 } = f2;
    !d2 && i2 !== null && (p2 = this.playbackSpeed >= 0 ? this.currentTime >= r2 : this.currentTime <= 0);
    let m2 = this.holdTime === null && (this.state === `finished` || this.state === `running` && p2);
    return m2 && s2 !== gn && (f2.value = On(o2, this.options, l2, this.speed)), c2 && c2(f2.value), m2 && this.finish(), f2;
  }
  at(e2) {
    return this.holdTime ?? Rn((e2 - this.startTime) * this.playbackSpeed);
  }
  sampleAt(e2, t2) {
    let { options: n2, totalDuration: r2 } = this, i2 = this.at(e2) - (n2.delay || 0);
    return i2 >= r2 && n2.type !== gn ? On(n2.keyframes, n2, t2 ? void 0 : n2.finalKeyframe) : this.generate(Math.max(i2, 0), i2 < 0).value;
  }
  generate(e2, t2) {
    let { generator: n2, totalDuration: r2, mixKeyframes: i2, mirroredGenerator: a2, resolvedDuration: o2 } = this, { keyframes: s2, repeat: c2, repeatType: l2, repeatDelay: u2 } = this.options, d2 = e2, f2 = n2;
    if (c2) {
      let t3 = Math.min(e2, r2) / o2, n3 = Math.floor(t3), i3 = t3 % 1;
      !i3 && t3 >= 1 && (i3 = 1), i3 === 1 && n3--, n3 = Math.min(n3, c2 + 1), n3 % 2 && (l2 === `reverse` ? (i3 = 1 - i3, u2 && (i3 -= u2 / o2)) : l2 === `mirror` && (f2 = a2)), d2 = ne(0, 1, i3) * o2;
    }
    let p2;
    return t2 ? (this.delayState.value = s2[0], p2 = this.delayState) : p2 = f2.next(d2), i2 && !t2 && (p2.value = i2(p2.value)), p2;
  }
  then(e2, t2) {
    return this.finished.then(e2, t2);
  }
  get duration() {
    return pe(this.calculatedDuration);
  }
  get iterationDuration() {
    let { delay: e2 = 0 } = this.options || {};
    return this.duration + pe(e2);
  }
  get time() {
    return pe(this.currentTime);
  }
  set time(e2) {
    e2 = fe(e2), this.currentTime = e2, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e2 : this.driver && (this.startTime = this.driver.now() - e2 / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = `paused`, this.holdTime = e2, this.tick(e2));
  }
  getGeneratorVelocity() {
    return En(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e2) {
    let t2 = this.playbackSpeed !== e2;
    t2 && this.driver && this.updateTime(A.now()), this.playbackSpeed = e2, t2 && this.driver && (this.time = pe(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    let { driver: e2 = Qt, startTime: t2 } = this.options;
    this.driver ||= e2((e3) => this.tick(e3)), this.options.onPlay?.();
    let n2 = this.driver.now();
    this.state === `finished` ? (this.updateFinished(), this.startTime = n2) : this.holdTime === null ? this.startTime ||= t2 ?? (this.pendingStartTime = n2) : this.startTime = n2 - this.holdTime / (this.playbackSpeed || 1), this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = `running`, this.driver.start();
  }
  pause() {
    this.state = `paused`, this.updateTime(A.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== `running` && this.play(), this.state = `finished`, this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = `finished`, this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = `idle`, this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver &&= (this.driver.stop(), void 0);
  }
  sample(e2) {
    return this.startTime = 0, this.tick(e2, true);
  }
  attachTimeline(e2) {
    return this.options.allowFlatten && (this.options.type = `keyframes`, this.options.ease = `linear`, this.initAnimation()), this.driver?.stop(), e2.observe(this);
  }
}, Bn = /* @__PURE__ */ new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function Vn(e2) {
  let [t2, n2] = e2.slice(0, -1).split(`(`);
  if (t2 === `drop-shadow`) return e2;
  let [r2] = n2.match(Ge) || [];
  if (!r2) return e2;
  let i2 = n2.replace(r2, ``), a2 = +!!Bn.has(t2);
  return r2 !== n2 && (a2 *= 100), t2 + `(` + a2 + i2 + `)`;
}
var Hn = /\b([a-z-]*)\(.*?\)/gu, Un = { ...Dt, getAnimatableNone: (e2) => {
  let t2 = e2.match(Hn);
  return t2 ? t2.map(Vn).join(` `) : e2;
} }, Wn = { ...Dt, getAnimatableNone: (e2) => {
  let t2 = Dt.parse(e2);
  return Dt.createTransformer(e2)(t2.map((e3) => typeof e3 == `number` ? 0 : typeof e3 == `object` ? { ...e3, alpha: 1 } : e3));
} }, Gn = { ...He, transform: Math.round }, Kn = { rotate: nt, pathRotation: nt, rotateX: nt, rotateY: nt, rotateZ: nt, scale: We, scaleX: We, scaleY: We, scaleZ: We, skew: nt, skewX: nt, skewY: nt, distance: j, translateX: j, translateY: j, translateZ: j, x: j, y: j, z: j, perspective: j, transformPerspective: j, opacity: Ue, originX: ot, originY: ot, originZ: j }, qn = { borderWidth: j, borderTopWidth: j, borderRightWidth: j, borderBottomWidth: j, borderLeftWidth: j, borderRadius: j, borderTopLeftRadius: j, borderTopRightRadius: j, borderBottomRightRadius: j, borderBottomLeftRadius: j, width: j, maxWidth: j, height: j, maxHeight: j, top: j, right: j, bottom: j, left: j, inset: j, insetBlock: j, insetBlockStart: j, insetBlockEnd: j, insetInline: j, insetInlineStart: j, insetInlineEnd: j, padding: j, paddingTop: j, paddingRight: j, paddingBottom: j, paddingLeft: j, paddingBlock: j, paddingBlockStart: j, paddingBlockEnd: j, paddingInline: j, paddingInlineStart: j, paddingInlineEnd: j, margin: j, marginTop: j, marginRight: j, marginBottom: j, marginLeft: j, marginBlock: j, marginBlockStart: j, marginBlockEnd: j, marginInline: j, marginInlineStart: j, marginInlineEnd: j, fontSize: j, backgroundPositionX: j, backgroundPositionY: j, ...Kn, zIndex: Gn, fillOpacity: Ue, strokeOpacity: Ue, numOctaves: Gn }, Jn = { ...qn, color: ct, backgroundColor: ct, outlineColor: ct, fill: ct, stroke: ct, borderColor: ct, borderTopColor: ct, borderRightColor: ct, borderBottomColor: ct, borderLeftColor: ct, filter: Un, WebkitFilter: Un, mask: Wn, WebkitMask: Wn }, Yn = (e2) => Jn[e2], Xn = /* @__PURE__ */ new Set([Un, Wn]);
function Zn(e2, t2) {
  let n2 = Yn(e2);
  return Xn.has(n2) || (n2 = Dt), n2.getAnimatableNone ? n2.getAnimatableNone(t2) : void 0;
}
function Qn(e2) {
  for (let t2 = 1; t2 < e2.length; t2++) e2[t2] ?? (e2[t2] = e2[t2 - 1]);
}
var $n = (e2) => e2 * 180 / Math.PI, er = (e2) => nr($n(Math.atan2(e2[1], e2[0]))), tr = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (e2) => (Math.abs(e2[0]) + Math.abs(e2[3])) / 2, rotate: er, rotateZ: er, skewX: (e2) => $n(Math.atan(e2[1])), skewY: (e2) => $n(Math.atan(e2[2])), skew: (e2) => (Math.abs(e2[1]) + Math.abs(e2[2])) / 2 }, nr = (e2) => (e2 %= 360, e2 < 0 && (e2 += 360), e2), rr = er, ir = (e2) => Math.sqrt(e2[0] * e2[0] + e2[1] * e2[1]), ar = (e2) => Math.sqrt(e2[4] * e2[4] + e2[5] * e2[5]), or = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: ir, scaleY: ar, scale: (e2) => (ir(e2) + ar(e2)) / 2, rotateX: (e2) => nr($n(Math.atan2(e2[6], e2[5]))), rotateY: (e2) => nr($n(Math.atan2(-e2[2], e2[0]))), rotateZ: rr, rotate: rr, skewX: (e2) => $n(Math.atan(e2[4])), skewY: (e2) => $n(Math.atan(e2[1])), skew: (e2) => (Math.abs(e2[1]) + Math.abs(e2[4])) / 2 };
function sr(e2) {
  return +!!e2.includes(`scale`);
}
function cr(e2, t2) {
  if (!e2 || e2 === `none`) return sr(t2);
  let n2 = e2.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r2, i2;
  if (n2) r2 = or, i2 = n2;
  else {
    let t3 = e2.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r2 = tr, i2 = t3;
  }
  if (!i2) return sr(t2);
  let a2 = r2[t2], o2 = i2[1].split(`,`).map(ur);
  return typeof a2 == `function` ? a2(o2) : o2[a2];
}
var lr = (e2, t2) => {
  let { transform: n2 = `none` } = getComputedStyle(e2);
  return cr(n2, t2);
};
function ur(e2) {
  return parseFloat(e2.trim());
}
var dr = [`transformPerspective`, `x`, `y`, `z`, `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skew`, `skewX`, `skewY`], fr = /* @__PURE__ */ new Set([...dr, `pathRotation`]), pr = (e2) => e2 === He || e2 === j, mr = /* @__PURE__ */ new Set([`x`, `y`, `z`]), hr = dr.filter((e2) => !mr.has(e2));
function gr(e2) {
  let t2 = [];
  return hr.forEach((n2) => {
    let r2 = e2.getValue(n2);
    if (r2 !== void 0) {
      let e3 = r2.get(), i2 = +!!n2.startsWith(`scale`);
      if (e3 === i2) return;
      t2.push([n2, e3]), r2.set(i2);
    }
  }), t2;
}
var _r = /* @__PURE__ */ new Set([`bottom`, `right`]);
function vr(e2, t2, n2, r2, i2, a2) {
  let o2 = parseFloat(e2);
  if (!isNaN(o2)) return o2;
  let { min: s2, max: c2 } = t2()[n2], l2 = c2 - s2;
  return a2 === `border-box` ? l2 : l2 - parseFloat(r2) - parseFloat(i2);
}
var yr = { width: ({ width: e2, paddingLeft: t2 = `0`, paddingRight: n2 = `0`, boxSizing: r2 }, i2) => vr(e2, i2, `x`, t2, n2, r2), height: ({ height: e2, paddingTop: t2 = `0`, paddingBottom: n2 = `0`, boxSizing: r2 }, i2) => vr(e2, i2, `y`, t2, n2, r2), top: ({ top: e2 }) => parseFloat(e2), left: ({ left: e2 }) => parseFloat(e2), bottom: ({ top: e2 }, t2) => {
  let { y: n2 } = t2();
  return parseFloat(e2) + (n2.max - n2.min);
}, right: ({ left: e2 }, t2) => {
  let { x: n2 } = t2();
  return parseFloat(e2) + (n2.max - n2.min);
}, x: ({ transform: e2 }) => cr(e2, `x`), y: ({ transform: e2 }) => cr(e2, `y`) };
yr.translateX = yr.x, yr.translateY = yr.y;
var br = /* @__PURE__ */ new Set(), xr = false, Sr = false, Cr = false;
function wr() {
  if (Sr) {
    let e2 = [], t2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set();
    br.forEach((r3) => {
      r3.needsMeasurement && (e2.push(r3), t2.add(r3.element), _r.has(r3.name) && n2.add(r3.element));
    });
    let r2 = /* @__PURE__ */ new Map();
    n2.forEach((e3) => {
      let t3 = gr(e3);
      t3.length && (r2.set(e3, t3), e3.render());
    }), e2.forEach((e3) => e3.measureInitialState()), t2.forEach((e3) => {
      e3.render();
      let t3 = r2.get(e3);
      t3 && t3.forEach(([t4, n3]) => {
        e3.getValue(t4)?.set(n3);
      });
    }), e2.forEach((e3) => e3.measureEndState()), e2.forEach((e3) => {
      e3.suspendedScrollY !== void 0 && window.scrollTo(0, e3.suspendedScrollY);
    });
  }
  Sr = false, xr = false, br.forEach((e2) => e2.complete(Cr)), br.clear();
}
function Tr() {
  br.forEach((e2) => {
    e2.readKeyframes(), e2.needsMeasurement && (Sr = true);
  });
}
function Er() {
  Cr = true, Tr(), wr(), Cr = false;
}
function Dr(e2, t2, n2) {
  if (typeof e2 == `string`) {
    if (ie(e2) || oe(e2)) return parseFloat(e2);
    if (!Dt.test(e2) && Dt.test(n2)) return Zn(t2, n2);
  }
  return e2 ?? void 0;
}
var Or = class {
  constructor(e2, t2, n2, r2, i2, a2 = false) {
    this.state = `pending`, this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...e2], this.onComplete = t2, this.name = n2, this.motionValue = r2, this.element = i2, this.isAsync = a2;
  }
  scheduleResolve() {
    this.state = `scheduled`, this.isAsync ? (br.add(this), xr || (xr = true, N.read(Tr), N.resolveKeyframes(wr))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let { unresolvedKeyframes: e2, name: t2, element: n2, motionValue: r2 } = this;
    if (e2[0] === null) {
      let i2 = r2?.get(), a2 = e2[e2.length - 1];
      if (i2 !== void 0) e2[0] = i2;
      else if (n2 && t2) {
        let r3 = Dr(n2.readValue(t2, a2), t2, a2);
        r3 !== void 0 && (e2[0] = r3);
      }
      e2[0] === void 0 && (e2[0] = a2), r2 && i2 === void 0 && r2.set(e2[0]);
    }
    Qn(e2);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e2 = false) {
    this.state = `complete`, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e2), br.delete(this);
  }
  cancel() {
    this.state === `scheduled` && (br.delete(this), this.state = `pending`);
  }
  resume() {
    this.state === `pending` && this.scheduleResolve();
  }
}, kr = (e2) => e2.startsWith(`--`);
function Ar(e2, t2, n2) {
  kr(t2) ? e2.style.setProperty(t2, n2) : e2.style[t2] = n2;
}
var jr = {};
function Mr(e2, t2) {
  let n2 = se(e2);
  return () => jr[t2] ?? n2();
}
var Nr = Mr(() => window.ScrollTimeline !== void 0, `scrollTimeline`), Pr = Mr(() => window.ViewTimeline !== void 0, `viewTimeline`), Fr = Mr(() => {
  try {
    document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
  } catch {
    return false;
  }
  return true;
}, `linearEasing`), Ir = ([e2, t2, n2, r2]) => `cubic-bezier(${e2}, ${t2}, ${n2}, ${r2})`, Lr = { linear: `linear`, ease: `ease`, easeIn: `ease-in`, easeOut: `ease-out`, easeInOut: `ease-in-out`, circIn: Ir([0, 0.65, 0.55, 1]), circOut: Ir([0.55, 0, 1, 0.45]), backIn: Ir([0.31, 0.01, 0.66, -0.59]), backOut: Ir([0.33, 1.53, 0.69, 0.99]) };
function Rr(e2, t2) {
  if (e2) return typeof e2 == `function` ? Fr() ? $t(e2, t2) : `ease-out` : O(e2) ? Ir(e2) : Array.isArray(e2) ? e2.map((e3) => Rr(e3, t2) || Lr.easeOut) : Lr[e2];
}
function zr(e2, t2, n2, { delay: r2 = 0, duration: i2 = 300, repeat: a2 = 0, repeatType: o2 = `loop`, ease: s2 = `easeOut`, times: c2 } = {}, l2 = void 0) {
  let u2 = { [t2]: n2 };
  c2 && (u2.offset = c2);
  let d2 = Rr(s2, i2);
  Array.isArray(d2) && (u2.easing = d2);
  let f2 = { delay: r2, duration: i2, easing: Array.isArray(d2) ? `linear` : d2, fill: `both`, iterations: a2 + 1, direction: o2 === `reverse` ? `alternate` : `normal` };
  return l2 && (f2.pseudoElement = l2), e2.animate(u2, f2);
}
function Br(e2) {
  return typeof e2 == `function` && `applyToOptions` in e2;
}
function Vr({ type: e2, ...t2 }) {
  return Br(e2) && Fr() ? e2.applyToOptions(t2) : (t2.duration ??= 300, t2.ease ??= `easeOut`, t2);
}
var Hr = class extends In {
  constructor(e2) {
    if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !e2) return;
    let { element: t2, name: n2, keyframes: r2, pseudoElement: i2, allowFlatten: a2 = false, finalKeyframe: o2, onComplete: s2 } = e2;
    this.isPseudoElement = !!i2, this.allowFlatten = a2, this.options = e2, e2.type;
    let c2 = Vr(e2);
    this.animation = zr(t2, n2, r2, c2, i2), c2.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i2) {
        let e3 = On(r2, this.options, o2, this.speed);
        this.updateMotionValue && this.updateMotionValue(e3), Ar(t2, n2, e3), this.animation.cancel();
      }
      s2?.(), this.notifyFinished();
    }, Pn(this, e2, c2);
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === `finished` && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    let { state: e2 } = this;
    e2 !== `idle` && e2 !== `finished` && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    let e2 = this.options?.element;
    !this.isPseudoElement && e2?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    let e2 = this.animation.effect?.getComputedTiming?.().duration || 0;
    return pe(Number(e2));
  }
  get iterationDuration() {
    let { delay: e2 = 0 } = this.options || {};
    return this.duration + pe(e2);
  }
  get time() {
    return pe(Number(this.animation.currentTime) || 0);
  }
  set time(e2) {
    let t2 = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = fe(e2), t2 && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e2) {
    e2 < 0 && (this.finishedTime = null), this.animation.playbackRate = e2;
  }
  get state() {
    return this.finishedTime === null ? this.animation.playState : `finished`;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e2) {
    this.manualStartTime = this.animation.startTime = e2;
  }
  attachTimeline({ timeline: e2, onAttach: t2, observe: n2 }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }), this.animation.onfinish = null, e2 && Nr() ? (this.animation.timeline = e2, t2?.(this.animation), ce) : n2(this);
  }
}, Ur = { anticipate: Ce, backInOut: Se, circInOut: D };
function Wr(e2) {
  return e2 in Ur;
}
function Gr(e2) {
  typeof e2.ease == `string` && Wr(e2.ease) && (e2.ease = Ur[e2.ease]);
}
var Kr = class extends Hr {
  constructor(e2) {
    Gr(e2), An(e2), super(e2), e2.startTime !== void 0 && e2.autoplay !== false && (this.startTime = e2.startTime), this.options = e2;
  }
  elapsed() {
    return this.state === `running` ? (A.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  sample(e2) {
    if (!this.sampler) {
      let { motionValue: e3, onUpdate: t2, onComplete: n2, onPlay: r2, onStop: i2, element: a2, ...o2 } = this.options;
      this.sampler = new zn({ ...o2, autoplay: false }), this.sampler.stop();
    }
    return this.sampler.sample(Math.max(0, e2)).value;
  }
  liveValue() {
    let { state: e2 } = this;
    if (e2 === `running` || e2 === `paused`) return this.sample(this.elapsed());
  }
  updateMotionValue(e2) {
    let { motionValue: t2, element: n2, name: r2 } = this.options;
    if (!t2) return;
    if (e2 !== void 0) {
      t2.set(e2);
      return;
    }
    let { speed: i2 } = this, a2 = this.elapsed(), o2 = this.state === `running` && i2 ? ne(0, 10, a2) : 0, s2 = this.sample(a2);
    n2 && r2 && Ar(n2, r2, s2), t2.setWithVelocity(this.sample(a2 - o2 * Math.sign(i2)), s2, o2 / Math.abs(i2 || 1));
  }
}, qr = (e2, t2) => t2 !== `zIndex` && !!(typeof e2 == `number` || Array.isArray(e2) || typeof e2 == `string` && (Dt.test(e2) || e2 === `0`) && !e2.startsWith(`url(`));
function Jr(e2) {
  let t2 = e2[0];
  if (e2.length === 1) return true;
  for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2] !== t2) return true;
}
function Yr(e2, t2, n2, r2) {
  let i2 = e2[0];
  if (i2 === null) return false;
  if (t2 === `display` || t2 === `visibility`) return true;
  let a2 = e2[e2.length - 1], o2 = qr(i2, t2), s2 = qr(a2, t2);
  return !o2 || !s2 ? (o2 !== s2 && `${t2}${i2}${a2}${o2 ? a2 : i2}`, false) : Jr(e2) || (n2 === `spring` || Br(n2)) && r2;
}
function Xr(e2) {
  e2.duration = 0, e2.type = `keyframes`;
}
var Zr = /* @__PURE__ */ new Set([`opacity`, `clipPath`, `filter`, `transform`, `backgroundColor`]), Qr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function $r(e2) {
  for (let t2 = 0; t2 < e2.length; t2++) if (typeof e2[t2] == `string` && Qr.test(e2[t2])) return true;
  return false;
}
var ei = /* @__PURE__ */ new Set([`color`, `backgroundColor`, `outlineColor`, `fill`, `stroke`, `borderColor`, `borderTopColor`, `borderRightColor`, `borderBottomColor`, `borderLeftColor`]), ti = se(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function ni(e2) {
  let { motionValue: t2, name: n2, repeatDelay: r2, repeatType: i2, damping: a2, type: o2, keyframes: s2 } = e2;
  if (!n2 || !(Zr.has(n2) || ei.has(n2))) return false;
  let c2 = t2?.owner?.current;
  if (!(c2 instanceof HTMLElement) && !(c2 instanceof SVGElement)) return false;
  let { onUpdate: l2, transformTemplate: u2 } = t2.owner.getProps();
  return ti() && (Zr.has(n2) || ei.has(n2) && $r(s2)) && (n2 !== `transform` || !u2) && !l2 && !r2 && i2 !== `mirror` && a2 !== 0 && o2 !== `inertia`;
}
var ri = (e2, t2) => t2 && typeof e2 == `number` ? t2.transform(e2) : e2, ii = { x: `translateX`, y: `translateY`, z: `translateZ`, transformPerspective: `perspective` }, ai = dr.length;
function oi(e2, t2, n2) {
  let r2 = ``, i2 = true;
  for (let a3 = 0; a3 < ai; a3++) {
    let o2 = dr[a3], s2 = e2[o2];
    if (s2 === void 0) continue;
    let c2 = true;
    if (typeof s2 == `number`) c2 = s2 === +!!o2.startsWith(`scale`);
    else {
      let e3 = parseFloat(s2);
      c2 = o2.startsWith(`scale`) ? e3 === 1 : e3 === 0;
    }
    if (!c2 || n2) {
      let e3 = ri(s2, qn[o2]);
      if (!c2) {
        i2 = false;
        let t3 = ii[o2] || o2;
        r2 += `${t3}(${e3}) `;
      }
      n2 && (t2[o2] = e3);
    }
  }
  let a2 = e2.pathRotation;
  return a2 && (i2 = false, r2 += `rotate(${ri(a2, qn.pathRotation)}) `), r2 = r2.trim(), n2 ? r2 = n2(t2, i2 ? `` : r2) : i2 && (r2 = `none`), r2;
}
var si = /* @__PURE__ */ new WeakMap(), ci = 200, li = 1e-3, ui = 0.1, di = 1e-3, fi = 100, pi = (e2) => /^(linear|ease(In|Out|InOut))$/.test(e2), mi = (e2, t2) => e2 - t2, hi = (e2, t2, n2) => {
  let r2 = [];
  for (let i2 = 0; i2 <= n2; i2++) r2.push(M(e2, t2, i2 / n2));
  return r2;
}, gi = (e2) => e2.motionValue.owner, _i = (e2) => si.get(e2), vi = (e2, t2) => e2.latestValues ? e2.latestValues[t2] : e2.getValue(t2)?.get(), yi = ({ name: e2, motionValue: t2 }) => e2 && dr.includes(e2) && t2?.owner?.current instanceof HTMLElement && ti() && Fr();
function bi(e2) {
  let t2 = gi(e2), { onUpdate: n2, transformTemplate: r2 } = t2.getProps();
  return !e2.isHandoff && !n2 && !e2.hasOnUpdate && !r2 && e2.type !== `inertia` && (vi(t2, `transform`) || `none`) === `none` && !vi(t2, `pathRotation`) && !t2.projection?.isProjecting();
}
var xi = class extends zn {
  constructor(e2) {
    let t2 = gi(e2).current, { driver: n2 = Qt } = e2, r2 = bi(e2);
    e2.driver = (e3) => {
      let r3 = n2(e3);
      return { js: r3, now: r3.now, start: (e4 = true) => {
        let n3 = _i(t2);
        !n3 || n3.isJS ? r3.start(e4) : n3.schedule(false, !e4);
      }, stop: () => {
        r3.stop();
        let e4 = _i(t2);
        e4?.schedule(!e4.isFinishing);
      } };
    }, super(e2), this.canAccelerate = r2;
    let { stop: i2 } = this;
    this.stop = () => {
      this.isAccelerated() && this.sync(), i2();
    };
  }
  get group() {
    return _i(gi(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  get name() {
    return this.options.name;
  }
  timing() {
    let { startTime: e2, speed: t2, totalDuration: n2 } = this, { delay: r2 = 0, repeatType: i2 } = this.options;
    return this.holdTime === null ? n2 === 1 / 0 ? [e2 + r2 / t2, this.resolvedDuration * (i2 === `loop` ? 1 : 2) / t2 || 1] : [e2 + (r2 + n2) / t2, 0] : [1 / 0, 0];
  }
  isAccelerated() {
    let { group: e2, state: t2 } = this;
    return e2?.tracks.has(this) && !e2.isJS && this.canAccelerate && (t2 === `running` || t2 === `paused`);
  }
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(A.now()) : void 0;
  }
  tween() {
    let { keyframes: e2, type: t2, ease: n2, times: r2, repeat: i2, delay: a2 = 0 } = this.options, o2 = O(n2) ? Ir(n2) : pi(n2) && Lr[n2];
    if (o2 && !i2 && !r2 && e2.length === 2 && t2 === Cn && this.holdTime === null) {
      let e3 = this.startTime + a2 / this.speed;
      return [e3, e3 + this.resolvedDuration / this.speed, o2];
    }
  }
  boundaries(e2, t2) {
    let { startTime: n2, speed: r2, resolvedDuration: i2, options: a2 } = this, { delay: o2 = 0, repeat: s2 = 0, repeatDelay: c2 = 0, repeatType: l2, times: u2, keyframes: d2, type: f2 } = a2, p2 = (f2 || Cn) === Cn ? u2 || bn(d2) : [0, 1], m2 = n2 + o2 / r2, h2 = [];
    if (this.holdTime !== null || !(i2 > 0)) return h2;
    for (let n3 = Math.max(0, Math.floor((e2 - m2) * r2 / i2)); n3 <= s2; n3++) {
      let a3 = m2 + n3 * i2 / r2;
      if (a3 > t2) break;
      for (let o3 of p2) {
        let s3 = a3 + (n3 % 2 && l2 && l2 !== `loop` ? 1 - o3 : o3) * (i2 - c2) / r2;
        s3 > e2 && s3 < t2 && h2.push(s3);
      }
    }
    return h2;
  }
  numberAt(e2) {
    return parseFloat(this.sampleAt(e2, true));
  }
  sync() {
    let e2 = A.now();
    this.options.motionValue.setWithVelocity(this.sampleAt(e2 - 10, true), this.sampleAt(e2, true), 10);
  }
  play() {
    this.isStopped || ((this.group || Si(gi(this.options))).tracks.add(this), super.play());
  }
  pause() {
    super.pause(), this.isAccelerated() && (this.sync(), this.group.schedule(false));
  }
  complete() {
    super.complete();
    let { group: e2 } = this;
    e2 && !e2.isJS && this.canAccelerate && this.tick(A.now());
  }
  get time() {
    return this.isAccelerated() ? pe(ne(0, this.totalDuration, this.at(A.now()) - (this.options.delay || 0))) : super.time;
  }
  set time(e2) {
    super.time = e2;
  }
  attachTimeline(e2) {
    return this.canAccelerate = false, this.group?.demote(true), super.attachTimeline(e2);
  }
};
function Si(e2) {
  let t2 = e2.current, n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), i2 = {}, a2 = [], o2 = /* @__PURE__ */ new Map(), s2 = [], c2 = false, l2 = false, u2 = false, d2 = -1 / 0, f2 = (e3) => {
    for (let t3 of n2) if (t3.name === e3) return true;
  }, p2 = (t3, n3) => {
    let o3 = {};
    for (let s3 of t3 === void 0 ? dr : a2) {
      let a3 = r2.get(s3), c3 = t3 === void 0 ? vi(e2, s3) : a3 ? a3.sampleAt(n3 > t3 && !a3.timing()[1] ? n3 : t3) : i2[s3];
      c3 !== void 0 && (o3[s3] = c3);
    }
    return o3;
  }, m2 = (e3, t3) => {
    let n3 = ``, r3 = p2(e3, t3);
    for (let e4 in r3) n3 += (ii[e4] || e4) + `(` + ri(r3[e4], qn[e4]) + `) `;
    return n3 || `none`;
  }, h2 = (e3 = p2()) => {
    t2.style.transform = oi(e3, {});
  }, g2 = (e3 = true) => {
    e3 && h2(), s2.forEach(({ animation: e4 }) => e4.cancel()), s2 = [];
  }, _2 = (e3, t3, n3 = 1 / 0) => {
    let r3 = { animation: e3, offset: t3, end: n3 };
    e3.startTime = A.now() + t3, n3 < 1 / 0 && (e3.onfinish = () => {
      r3.isDone = true, s2.some((e4) => e4.end === 1 / 0) && (e3.cancel(), s2 = s2.filter((e4) => e4 !== r3)), w2.schedule(false);
    }), e3.oncancel = () => s2.includes(r3) && w2.demote(), s2.push(r3);
  }, v2 = (e3, t3, n3) => {
    let r3 = (t4, n4) => Math.abs(e3(n4) - e3(t4)), i3 = r3(t3, n3);
    for (; n3 - t3 > 0.01; ) {
      let e4 = (t3 + n3) / 2;
      r3(t3, e4) > r3(e4, n3) ? n3 = e4 : t3 = e4;
    }
    return r3(t3, n3) > i3 / 2 ? [t3, n3] : [];
  }, y2 = (e3, t3, n3, r3) => {
    let i3 = Math.min(ci, Math.max(2, Math.ceil((n3 - t3) / 10)));
    if (r3.length * 4 > i3) return;
    let a3 = hi(t3, n3, i3).concat(r3).sort(mi), o3 = (e4) => ue(t3, n3, e4), s3, c3;
    for (let t4 of e3) {
      let e4 = a3.map((e5) => t4.numberAt(e5)), [n4] = e4, r4 = e4[e4.length - 1] - n4, i4 = e4.map((e5) => r4 ? (e5 - n4) / r4 : e5 - n4);
      if (!r4) {
        if (i4.some((e5) => !(Math.abs(e5) <= li))) return;
      } else if (!s3) s3 = i4, c3 = (e5) => (t4.numberAt(e5) - n4) / r4;
      else if (i4.some((e5, t5) => !(Math.abs(e5 - s3[t5]) <= li))) return;
    }
    if (!s3 || s3.every((e4, t4) => Math.abs(e4 - o3(a3[t4])) <= li)) return `linear`;
    let l3 = [], u3 = (e4, t4 = c3(e4)) => l3.push(Rn(t4) + ` ` + Rn(o3(e4) * 100) + `%`);
    return s3.forEach((e4, t4) => {
      t4 && Math.abs(e4 - s3[t4 - 1]) > 0.2 && v2(c3, a3[t4 - 1], a3[t4]).forEach((e5) => u3(e5)), u3(a3[t4], e4);
    }), `linear(` + l3 + `)`;
  }, b2 = (e3, t3, n3, r3) => {
    let i3 = [t3], a3 = (t4, n4) => e3.every((e4) => !(Math.abs(e4.numberAt((t4 + n4) / 2) - (e4.numberAt(t4) + e4.numberAt(n4)) / 2) > (e4.name.startsWith(`scale`) ? di : ui))), o3 = (t4, n4, r4) => {
      if (n4 - t4 < 1 || a3(t4, n4)) i3.push(n4);
      else if (r4 < 4) o3(t4, (t4 + n4) / 2, r4 + 1), o3((t4 + n4) / 2, n4, r4 + 1);
      else {
        for (let r5 of e3) i3.push(...v2((e4) => r5.numberAt(e4), t4, n4));
        i3.push(n4);
      }
    }, s3 = hi(t3, n3, Math.ceil((n3 - t3) / 100));
    for (let e4 of r3) s3.push(e4, Math.min(e4 + 0.01, n3));
    let c3 = t3;
    for (let e4 of s3.sort(mi)) e4 > c3 && o3(c3, e4, 0), c3 = e4;
    return i3.sort(mi);
  }, x2 = (e3) => {
    let t3;
    for (let n3 of e3) {
      let e4 = n3.tween();
      if (!e4 || t3?.some((t4, n4) => n4 < 2 ? Math.abs(e4[n4] - t4) > 1 : e4[n4] !== t4)) return;
      t3 = e4;
    }
    return t3;
  }, S2 = (e3, n3, r3, i3 = { fill: `both` }, a3, o3) => {
    let s3 = e3.flatMap((e4) => e4.boundaries(n3, r3)), c3 = o3 || y2(e3, n3, r3, s3), l3 = c3 ? [n3, r3] : b2(e3, n3, r3, s3), u3 = l3.map((e4) => m2(e4, a3)), d3 = { transform: u3 };
    return c3 || (d3.offset = l3.map((e4) => ue(n3, r3, e4))), u3.every((e4) => e4 === u3[0]) && (h2(p2(n3, a3)), d3 = null), t2.animate(d3, { ...i3, duration: r3 - n3, easing: c3 || `linear` });
  }, ee2 = (c3) => {
    let l3 = c3, u3 = 0, d3 = 0, f3 = [], p3 = [], m3 = /* @__PURE__ */ new Set();
    r2.clear(), o2 = /* @__PURE__ */ new Map();
    for (let e3 of n2) {
      r2.set(e3.name, e3);
      let [t3, n3] = e3.timing(), i3 = t3 === 1 / 0;
      if (o2.set(e3, [e3.at(c3), e3.speed, i3]), i3) e3.sync();
      else {
        if (e3.speed < 0) return;
        if (n3) {
          if (u3) {
            let e4 = (t3 - d3) / n3;
            if (Math.abs(n3 - u3) > 1 || Math.abs(e4 - Math.round(e4)) * u3 > 1) return;
          } else u3 = n3, d3 = t3;
          p3.push(e3);
        } else m3.add(t3);
        f3.push(e3), l3 = Math.max(l3, t3);
      }
    }
    i2 = {}, a2 = dr.filter((t3) => {
      if (r2.has(t3)) return true;
      let n3 = i2[t3] = vi(e2, t3);
      return n3 !== void 0 && parseFloat(n3) !== +!!t3.startsWith(`scale`);
    }), g2(false);
    let h3 = !u3 && x2(f3);
    try {
      if (h3 && h3[1] > c3) {
        let [e3, t3, n3] = h3;
        _2(S2(f3, e3, t3, void 0, void 0, n3), e3 - c3, t3 - e3);
      } else l3 > c3 && (_2(S2(f3, c3, l3), 0, l3 - c3), m3.forEach((e3) => e3 < l3 - 1 && _2(t2.animate(null, { duration: e3 - c3 }), 0, e3 - c3)));
      if (u3) {
        let e3 = d3 + Math.floor((l3 - d3) / u3) * u3;
        _2(S2(p3, e3, e3 + u3, { iterations: 1 / 0, iterationStart: (l3 - e3) / u3, fill: `forwards` }, l3), l3 - c3);
      }
    } catch {
      return;
    }
    return s2.length || g2(), true;
  }, te2 = (e3) => {
    let t3, r3 = 0;
    for (let i3 of n2) {
      let n3 = o2.get(i3);
      if (!n3) return false;
      let [a3, s3, c3] = n3, l3 = i3.at(e3), u3 = i3.timing()[0] === 1 / 0;
      if (c3) {
        if (u3 && l3 === a3) continue;
        return false;
      }
      let d3 = (l3 - a3) / s3, f3 = u3 ? 0 : i3.speed / s3;
      if (t3 === void 0) t3 = d3, r3 = f3;
      else if (Math.abs(d3 - t3) > 1 || f3 !== r3) return false;
    }
    if (t3 === void 0) return true;
    if (!s2.length) return false;
    for (let { offset: e4, end: n3, isDone: r4 } of s2) {
      let i3 = t3 - e4;
      if (n3 < 1 / 0 && (r4 ? i3 < n3 - 1 : i3 < 0 || i3 >= n3)) return false;
    }
    for (let { animation: n3, offset: i3, isDone: a3 } of s2) {
      if (a3) continue;
      let o3 = t3 - i3;
      r3 ? (n3.playbackRate = r3, n3.startTime = e3 - o3 / r3) : (n3.pause(), n3.currentTime = o3);
    }
    return true;
  }, C2 = () => {
    let r3 = A.now();
    if (w2.isJS || (w2.isFinishing = true, n2.forEach((t3) => {
      let [n3, a4] = t3.timing();
      t3.state === `running` && t3.speed > 0 && !a4 && n3 <= r3 + 1 && (t3.complete(), i2[t3.name] = vi(e2, t3.name), o2.has(t3) || (c2 = true));
    }), w2.isFinishing = false), l2 = false, n2.forEach(({ state: e3 }, t3) => {
      (e3 === `idle` || e3 === `finished`) && n2.delete(t3);
    }), !n2.size) {
      si.delete(t2), w2.isJS || g2();
      return;
    }
    for (let e3 of n2) if (!e3.canAccelerate) return w2.demote(true);
    w2.isJS && (w2.isJS = false, c2 = true, n2.forEach((e3) => e3.js?.stop()));
    let a3 = c2, s3 = u2;
    if (c2 = u2 = false, a3 || !te2(r3)) {
      if (s3) {
        if (r3 - d2 < fi) return w2.demote();
        d2 = r3;
      }
      if (!ee2(r3)) return w2.demote();
    }
  }, w2 = { tracks: n2, isJS: false, isFinishing: false, schedule(e3, t3) {
    c2 ||= e3, u2 ||= !!t3, l2 || (l2 = true, k.isProcessing ? N.render(C2, false, true) : queueMicrotask(C2));
  }, check() {
    if (!w2.isJS) {
      for (let t3 in i2) if (vi(e2, t3) !== i2[t3] && !f2(t3)) return w2.schedule(true, true);
    }
  }, demote(e3) {
    w2.isJS || (n2.forEach((t3) => {
      t3.isAccelerated() && t3.sync(), e3 || (t3.canAccelerate = false);
    }), w2.isJS = true, o2 = /* @__PURE__ */ new Map(), g2(), n2.forEach((e4) => e4.state === `running` && e4.js?.start()));
  } };
  return si.set(t2, w2), w2;
}
var Ci = class extends In {
  constructor(e2) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = A.now();
    let { keyframes: t2, name: n2, motionValue: r2, element: i2 } = e2, a2 = e2;
    a2.autoplay ??= true, a2.delay ??= 0, a2.type ??= `keyframes`, a2.repeat ??= 0, a2.repeatDelay ??= 0, a2.repeatType ??= `loop`;
    let o2 = i2?.KeyframeResolver || Or;
    this.keyframeResolver = new o2(t2, (e3, t3, n3) => this.onKeyframesResolved(e3, t3, a2, !n3), n2, r2, i2), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e2, t2, n2, r2) {
    this.keyframeResolver = void 0;
    let { name: i2, type: a2, velocity: o2, delay: s2, isHandoff: c2, onUpdate: l2 } = n2;
    this.resolvedAt = A.now();
    let u2 = true;
    Yr(e2, i2, a2, o2) || (u2 = false, (re.instantAnimations || !s2) && l2?.(On(e2, n2, t2)), e2[0] = e2[e2.length - 1], Xr(n2), n2.repeat = 0);
    let { onComplete: d2 } = n2;
    n2.finalKeyframe = t2, n2.keyframes = e2, n2.onComplete = () => {
      d2?.(), this.notifyFinished();
    };
    let f2 = u2 && !c2 && ni(n2), p2 = !f2 && yi(n2);
    r2 && (f2 || p2 || this.resolvedAt !== this.createdAt) && (n2.startTime ??= Mn(this.createdAt, this.resolvedAt));
    let m2;
    if (f2) {
      n2.element = n2.motionValue?.owner?.current;
      try {
        m2 = new Kr(n2);
      } catch {
        m2 = new zn(n2);
      }
    } else m2 = p2 ? new xi(n2) : new zn(n2);
    this.pendingTimeline &&= (this.stopTimeline = m2.attachTimeline(this.pendingTimeline), void 0), this._animation = m2;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(e2, t2) {
    return this.finished.finally(e2).then(() => {
    });
  }
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Er()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e2) {
    this.animation.time = e2;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e2) {
    this.animation.speed = e2;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e2) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e2) : this.pendingTimeline = e2, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}, wi = class {
  constructor(e2) {
    this.stop = () => this.runAll(`stop`), this.animations = e2.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e2) => e2.finished));
  }
  getAll(e2) {
    return this.animations[0][e2];
  }
  setAll(e2, t2) {
    for (let n2 = 0; n2 < this.animations.length; n2++) this.animations[n2][e2] = t2;
  }
  attachTimeline(e2) {
    let t2 = this.animations.map((t3) => t3.attachTimeline(e2));
    return () => {
      t2.forEach((e3, t3) => {
        e3 && e3(), this.animations[t3].stop();
      });
    };
  }
  get time() {
    return this.getAll(`time`);
  }
  set time(e2) {
    this.setAll(`time`, e2);
  }
  get speed() {
    return this.getAll(`speed`);
  }
  set speed(e2) {
    this.setAll(`speed`, e2);
  }
  get state() {
    return this.getAll(`state`);
  }
  get startTime() {
    return this.getAll(`startTime`);
  }
  get duration() {
    return Ti(this.animations, `duration`);
  }
  get iterationDuration() {
    return Ti(this.animations, `iterationDuration`);
  }
  runAll(e2) {
    this.animations.forEach((t2) => t2[e2]());
  }
  play() {
    this.runAll(`play`);
  }
  pause() {
    this.runAll(`pause`);
  }
  cancel() {
    this.runAll(`cancel`);
  }
  complete() {
    this.runAll(`complete`);
  }
};
function Ti(e2, t2) {
  let n2 = 0;
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2][t2];
    i2 !== null && i2 > n2 && (n2 = i2);
  }
  return n2;
}
var Ei = class extends wi {
  then(e2, t2) {
    return this.finished.finally(e2).then(() => {
    });
  }
};
function Di(e2, t2, n2, r2 = 0, i2 = 1) {
  let a2 = Array.from(e2).sort((e3, t3) => e3.sortNodePosition(t3)).indexOf(t2), o2 = e2.size, s2 = (o2 - 1) * r2;
  return typeof n2 == `function` ? n2(a2, o2) : i2 === 1 ? a2 * r2 : s2 - a2 * r2;
}
var Oi = 30, ki = (e2) => !isNaN(parseFloat(e2)), Ai = { current: void 0 }, ji = class {
  constructor(e2, t2 = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e3) => {
      let t3 = A.now();
      if (this.updatedAt !== t3 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e3), this.current !== this.prev && (this.notifyChange(), this.dependents)) for (let e4 of this.dependents) e4.dirty();
    }, this.hasAnimated = false, this.setCurrent(e2), this.owner = t2.owner;
  }
  setCurrent(e2) {
    this.current = e2, this.updatedAt = A.now(), this.canTrackVelocity === null && e2 !== void 0 && (this.canTrackVelocity = ki(this.current));
  }
  setPrevFrameValue(e2 = this.current) {
    this.prevFrameValue = e2, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(e2) {
    return this.on(`change`, e2);
  }
  on(e2, t2) {
    var n2;
    return e2 === `change` ? this.onChangeSubscribe(t2) : ((n2 = this.events)[e2] || (n2[e2] = new de())).add(t2);
  }
  onChangeSubscribe(e2) {
    let { events: t2 } = this;
    return !t2.change && !this.changeSubscriber ? this.changeSubscriber = e2 : (t2.change || (t2.change = new de(), t2.change.add(this.changeSubscriber), this.changeSubscriber = void 0), t2.change.add(e2)), () => {
      this.changeSubscriber === e2 ? this.changeSubscriber = void 0 : t2.change?.remove(e2), this.stopIfUnobserved();
    };
  }
  stopIfUnobserved() {
    N.read(() => {
      !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
    });
  }
  clearListeners() {
    this.changeSubscriber = void 0;
    for (let e2 in this.events) this.events[e2].clear();
  }
  attach(e2, t2) {
    this.passiveEffect = e2, this.stopPassiveEffect = t2;
  }
  set(e2) {
    this.passiveEffect ? this.passiveEffect(e2, this.updateAndNotify) : this.updateAndNotify(e2);
  }
  setWithVelocity(e2, t2, n2) {
    this.set(t2), this.prev = void 0, this.prevFrameValue = e2, this.prevUpdatedAt = this.updatedAt - n2;
  }
  jump(e2, t2 = true) {
    this.updateAndNotify(e2), this.prev = e2, this.prevUpdatedAt = this.prevFrameValue = void 0, t2 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.notifyChange();
  }
  notifyChange() {
    let { current: e2, changeSubscriber: t2 } = this;
    t2 ? t2(e2) : this.events.change?.notify(e2);
  }
  addDependent(e2) {
    this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e2);
  }
  removeDependent(e2) {
    this.dependents && this.dependents.delete(e2);
  }
  get() {
    Ai.current && Ai.current.push(this);
    let e2 = this.animation?.liveValue?.();
    return e2 === void 0 ? this.current : e2;
  }
  getCurrent() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let e2 = A.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e2 - this.updatedAt > Oi) return 0;
    let t2 = Math.min(this.updatedAt - this.prevUpdatedAt, Oi);
    return me(parseFloat(this.current) - parseFloat(this.prevFrameValue), t2);
  }
  start(e2) {
    return this.stop(), new Promise((t2) => {
      this.hasAnimated = true;
      let n2 = false, r2;
      r2 = e2(() => {
        n2 = true, this.events.animationComplete?.notify(), this.animation === r2 && this.clearAnimation(), t2();
      }), n2 || (this.animation = r2), this.events.animationStart?.notify();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = void 0;
  }
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
};
function Mi(e2, t2) {
  return new ji(e2, t2);
}
function Ni(e2, t2) {
  if (e2?.inherit && t2) {
    let { inherit: n2, ...r2 } = e2;
    return { ...t2, ...r2 };
  }
  return e2;
}
function Pi(e2, t2) {
  let n2 = e2?.[t2] ?? e2?.default ?? e2;
  return n2 === e2 ? n2 : Ni(n2, e2);
}
var Fi = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 }, Ii = (e2) => ({ type: `spring`, stiffness: 550, damping: e2 === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), Li = { type: `keyframes`, duration: 0.8 }, Ri = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, zi = (e2, { keyframes: t2 }) => t2.length > 2 ? Li : fr.has(e2) ? e2.startsWith(`scale`) ? Ii(t2[1]) : Fi : Ri, Bi = /* @__PURE__ */ new Set([`when`, `delay`, `delayChildren`, `staggerChildren`, `staggerDirection`, `repeat`, `repeatType`, `repeatDelay`, `from`, `elapsed`]);
function Vi(e2) {
  for (let t2 in e2) if (!Bi.has(t2)) return true;
  return false;
}
var Hi = (e2, t2, n2, r2 = {}, i2, a2) => (o2) => {
  let s2 = Pi(r2, e2) || {}, c2 = s2.delay || r2.delay || 0, { elapsed: l2 = 0 } = r2;
  l2 -= fe(c2);
  let u2 = { keyframes: Array.isArray(n2) ? n2 : [null, n2], ease: `easeOut`, velocity: t2.getVelocity(), ...s2, delay: -l2, onUpdate: (e3) => {
    t2.set(e3), s2.onUpdate && s2.onUpdate(e3);
  }, onComplete: () => {
    o2(), s2.onComplete && s2.onComplete();
  }, name: e2, motionValue: t2, element: a2 ? void 0 : i2, hasOnUpdate: !!s2.onUpdate };
  Vi(s2) || Object.assign(u2, zi(e2, u2)), u2.duration &&= fe(u2.duration), u2.repeatDelay &&= fe(u2.repeatDelay), u2.from !== void 0 && (u2.keyframes[0] = u2.from);
  let d2 = false;
  if ((u2.type === false || u2.duration === 0 && !u2.repeatDelay) && (Xr(u2), u2.delay === 0 && (d2 = true)), (re.instantAnimations || re.skipAnimations || i2?.shouldSkipAnimations || s2.skipAnimations) && (d2 = true, Xr(u2), u2.delay = 0), u2.allowFlatten = !s2.type && !s2.ease, d2 && !a2 && t2.get() !== void 0) {
    let e3 = On(u2.keyframes, s2);
    if (e3 !== void 0) {
      N.update(() => {
        u2.onUpdate(e3), u2.onComplete();
      });
      return;
    }
  }
  return s2.isSync ? new zn(u2) : new Ci(u2);
}, Ui = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Wi(e2) {
  let t2 = Ui.exec(e2);
  if (!t2) return [,];
  let [, n2, r2, i2] = t2;
  return [`--${n2 ?? r2}`, i2];
}
function Gi(e2, t2, n2 = 1) {
  `${e2}`;
  let [r2, i2] = Wi(e2);
  if (!r2) return;
  let a2 = window.getComputedStyle(t2).getPropertyValue(r2);
  if (a2) {
    let e3 = a2.trim();
    return ie(e3) ? parseFloat(e3) : e3;
  }
  return ze(i2) ? Gi(i2, t2, n2 + 1) : i2;
}
function Ki(e2) {
  let t2 = [{}, {}];
  return e2?.values.forEach((e3, n2) => {
    t2[0][n2] = e3.get(), t2[1][n2] = e3.getVelocity();
  }), t2;
}
function qi(e2, t2, n2, r2) {
  let i2 = (t3) => typeof t3 == `function` ? t3(n2 === void 0 ? e2.custom : n2, ...Ki(r2)) : t3;
  return t2 = i2(t2), typeof t2 == `string` && (t2 = e2.variants && e2.variants[t2]), i2(t2);
}
function Ji(e2, t2, n2) {
  return qi(e2.getProps(), t2, n2, e2);
}
var Yi = (e2, t2) => t2 === `exit` ? e2.presenceContext?.custom : void 0, Xi = /* @__PURE__ */ new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...dr]), Zi = (e2) => Array.isArray(e2);
function Qi(e2, t2, n2) {
  e2.hasValue(t2) ? e2.getValue(t2).set(n2) : e2.addValue(t2, Mi(n2));
}
function $i(e2) {
  return Zi(e2) ? e2[e2.length - 1] || 0 : e2;
}
function ea(e2, t2) {
  let { transitionEnd: n2 = {}, transition: r2 = {}, ...i2 } = Ji(e2, t2) || {};
  i2 = { ...i2, ...n2 };
  for (let t3 in i2) Qi(e2, t3, $i(i2[t3]));
}
var F = (e2) => !!(e2 && e2.getVelocity);
function ta(e2) {
  return !!(F(e2) && e2.add);
}
function na(e2, t2) {
  let n2 = e2.getValue(`willChange`);
  if (ta(n2)) return n2.add(t2);
  if (!n2 && re.WillChange) {
    let n3 = new re.WillChange(`auto`);
    e2.addValue(`willChange`, n3), n3.add(t2);
  }
}
function ra(e2) {
  return e2.replace(/([A-Z])/g, (e3) => `-${e3.toLowerCase()}`);
}
var ia = `data-` + ra(`framerAppearId`);
function aa(e2) {
  return e2.props[ia];
}
var oa = typeof window < `u`;
function sa({ protectedKeys: e2, needsAnimating: t2 }, n2) {
  let r2 = n2 in e2 && !t2[n2];
  return t2[n2] = false, r2;
}
function I(e2, t2, { delay: n2 = 0, transitionOverride: r2, type: i2 } = {}) {
  let { transition: a2, transitionEnd: o2, ...s2 } = t2, c2 = e2.getDefaultTransition();
  a2 = a2 ? Ni(a2, c2) : c2;
  let l2 = a2?.reduceMotion, u2 = a2?.skipAnimations;
  r2 && (a2 = r2);
  let d2 = [], f2 = i2 && e2.animationState?.getState()[i2], p2 = a2?.path;
  p2 && p2.animateVisualElement(e2, s2, a2, n2, d2);
  for (let t3 in s2) {
    let r3 = e2.getValue(t3, e2.latestValues[t3] ?? null), i3 = s2[t3];
    if (i3 === void 0 || f2 && sa(f2, t3)) continue;
    let o3 = { delay: n2, ...Pi(a2 || {}, t3) };
    u2 && (o3.skipAnimations = true);
    let c3 = r3.get();
    if (c3 !== void 0 && !r3.isAnimating() && !Array.isArray(i3) && i3 === c3 && !o3.velocity) {
      N.update(() => r3.set(i3));
      continue;
    }
    let p3 = false;
    if (oa && window.MotionHandoffAnimation) {
      let n3 = aa(e2);
      if (n3) {
        let e3 = window.MotionHandoffAnimation(n3, t3, N);
        e3 !== null && (o3.startTime = e3, p3 = true);
      }
    }
    na(e2, t3);
    let m2 = l2 ?? e2.shouldReduceMotion;
    r3.start(Hi(t3, r3, i3, m2 && Xi.has(t3) ? { type: false } : o3, e2, p3));
    let h2 = r3.animation;
    h2 && d2.push(h2);
  }
  if (o2) {
    let t3 = () => N.update(() => {
      o2 && ea(e2, o2);
    });
    d2.length ? Promise.all(d2).then(t3) : t3();
  }
  return d2;
}
function L(e2, t2, n2 = {}) {
  let r2 = Ji(e2, t2, Yi(e2, n2.type)), i2 = n2.transitionOverride || (r2?.transition ?? (e2.getDefaultTransition() || {})), a2 = () => Promise.all(r2 ? I(e2, r2, n2) : []), o2 = (r3 = 0) => {
    let { variantChildren: a3 } = e2, { delayChildren: o3 = 0, staggerChildren: s3, staggerDirection: c2 } = i2, l2 = [];
    return a3?.forEach((e3) => {
      e3.notify(`AnimationStart`, t2), l2.push(L(e3, t2, { ...n2, delay: r3 + (typeof o3 == `function` ? 0 : o3) + Di(a3, e3, o3, s3, c2) }).then(() => e3.notify(`AnimationComplete`, t2)));
    }), Promise.all(l2);
  }, { when: s2 } = i2;
  return s2 ? s2 === `beforeChildren` ? a2().then(() => o2()) : o2().then(a2) : Promise.all([a2(), o2(n2.delay)]);
}
function ca(e2, t2, n2 = {}) {
  return e2.notify(`AnimationStart`, t2), (Array.isArray(t2) ? Promise.all(t2.map((t3) => L(e2, t3, n2))) : typeof t2 == `string` ? L(e2, t2, n2) : Promise.all(I(e2, Ji(e2, t2, n2.custom), n2))).then(() => {
    e2.notify(`AnimationComplete`, t2);
  });
}
var la = { test: (e2) => e2 === `auto`, parse: (e2) => e2 }, ua = (e2) => (t2) => t2.test(e2), da = [He, j, rt, nt, at, it, la], fa = (e2) => da.find(ua(e2));
function pa(e2) {
  return typeof e2 == `number` ? e2 === 0 : e2 === null || e2 === `none` || e2 === `0` || oe(e2);
}
var ma = /* @__PURE__ */ new Set([`auto`, `none`, `0`]);
function ha(e2, t2, n2) {
  let r2 = 0, i2;
  for (; r2 < e2.length && !i2; ) {
    let t3 = e2[r2];
    typeof t3 == `string` && !ma.has(t3) && yt(t3) && (i2 = e2[r2]), r2++;
  }
  if (i2 && n2) for (let r3 of t2) e2[r3] !== i2 && (e2[r3] = Zn(n2, i2));
}
var ga = class extends Or {
  constructor(e2, t2, n2, r2, i2) {
    super(e2, t2, n2, r2, i2, true);
  }
  scheduleResolve() {
    if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement)) return this.complete();
    super.scheduleResolve();
  }
  canReadNow() {
    let { unresolvedKeyframes: e2, element: t2, motionValue: n2 } = this, r2 = e2[0] ?? n2?.get();
    if (!t2?.current || r2 === void 0) return false;
    for (let t3 = 0; t3 < e2.length; t3++) if (Ve(t3 ? e2[t3] : r2)) return false;
    return true;
  }
  readKeyframes() {
    let { unresolvedKeyframes: e2, element: t2, name: n2 } = this;
    if (!t2 || !t2.current) return;
    super.readKeyframes();
    for (let n3 = 0; n3 < e2.length; n3++) {
      let r3 = e2[n3];
      if (typeof r3 == `string` && (r3 = r3.trim(), ze(r3))) {
        let i3 = Gi(r3, t2.current);
        i3 !== void 0 && (e2[n3] = i3), n3 === e2.length - 1 && (this.finalKeyframe = r3);
      }
    }
    if (this.resolveNoneKeyframes(), !Xi.has(n2) || e2.length !== 2) return;
    let [r2, i2] = e2;
    if (typeof r2 == `number` && typeof i2 == `number`) return;
    let a2 = fa(r2), o2 = fa(i2);
    if (Ve(r2) !== Ve(i2) && yr[n2]) this.needsMeasurement = true;
    else if (a2 !== o2) {
      if (pr(a2) && pr(o2)) for (let t3 = 0; t3 < e2.length; t3++) {
        let n3 = e2[t3];
        typeof n3 == `string` && (e2[t3] = parseFloat(n3));
      }
      else yr[n2] && (this.needsMeasurement = true);
    }
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e2, name: t2 } = this, n2 = [];
    for (let t3 = 0; t3 < e2.length; t3++) (e2[t3] === null || pa(e2[t3])) && n2.push(t3);
    n2.length && ha(e2, n2, t2);
  }
  measure() {
    let { element: e2, name: t2 } = this;
    return yr[t2](window.getComputedStyle(e2.current), () => e2.measureViewportBox());
  }
  measureInitialState() {
    let { element: e2, unresolvedKeyframes: t2, name: n2 } = this;
    if (!e2 || !e2.current) return;
    n2 === `height` && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), t2[0] = this.measuredOrigin;
    let r2 = t2[t2.length - 1];
    r2 !== void 0 && this.motionValue?.jump(r2, false);
  }
  measureEndState() {
    let { element: e2, unresolvedKeyframes: t2 } = this;
    if (!e2 || !e2.current) return;
    this.motionValue?.jump(this.measuredOrigin, false);
    let n2 = t2.length - 1, r2 = t2[n2];
    t2[n2] = this.measure(), r2 !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r2), this.removedTransforms?.length && this.removedTransforms.forEach(([t3, n3]) => {
      e2.getValue(t3).set(n3);
    }), this.resolveNoneKeyframes();
  }
}, _a = [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius`], va = [];
function ya(e2) {
  typeof e2.test == `function` && e2.read, ba(e2), va.unshift(e2);
}
function ba(e2) {
  T(va, e2);
}
function xa(e2) {
  return va.find((t2) => t2.test(e2));
}
function Sa(e2, t2, n2 = {}, r2) {
  let i2 = [], { velocity: a2 } = n2, o2 = n2.reduceMotion ?? r2?.shouldReduceMotion;
  for (let s3 in t2) {
    if (s3 === `transition` || s3 === `transitionEnd`) continue;
    let c2 = t2[s3];
    if (c2 === void 0) continue;
    let l2 = e2(s3), u2 = l2.get();
    u2 !== void 0 && !l2.isAnimating() && !Array.isArray(c2) && c2 === u2 && !a2 ? N.update(() => l2.set(c2)) : (l2.start(Hi(s3, l2, c2, o2 && Xi.has(s3) ? { type: false } : n2, r2)), l2.animation && i2.push(l2.animation));
  }
  let { transitionEnd: s2 } = t2;
  if (s2) {
    let t3 = () => N.update(() => {
      for (let t4 in s2) e2(t4).set(s2[t4]);
    });
    i2.length ? Promise.all(i2).then(t3) : t3();
  }
  return i2;
}
function Ca(e2, t2, n2, r2, i2) {
  return Sa((r3) => {
    let a2 = e2.get(t2, r3);
    if (!a2) {
      let o2;
      if (!i2) {
        let i3 = n2[r3];
        o2 = wa(i3) ?? e2.read(t2, r3, i3), `${r3}`;
      }
      a2 = Mi(o2, { owner: i2 }), e2(t2, { [r3]: a2 });
    }
    return a2;
  }, n2, r2, i2);
}
function wa(e2) {
  let t2 = Array.isArray(e2) ? e2[0] : void 0;
  return t2 === null ? void 0 : t2;
}
function Ta(e2) {
  return ae(e2) && `offsetHeight` in e2 && !(`ownerSVGElement` in e2);
}
function Ea(e2) {
  return ae(e2) && `ownerSVGElement` in e2;
}
function Da(e2, t2, n2) {
  if (e2 == null) return [];
  if (e2 instanceof EventTarget) return [e2];
  if (typeof e2 == `string`) {
    let r2 = document;
    t2 && (r2 = t2.current);
    let i2 = n2?.[e2] ?? r2.querySelectorAll(e2);
    return i2 ? Array.from(i2) : [];
  }
  return Array.from(e2).filter((e3) => e3 != null);
}
var Oa = class {
  constructor(e2 = N.render) {
    this.step = e2, this.values = /* @__PURE__ */ new Map(), this.pending = [], this.numPending = 0, this.flush = () => {
      let { pending: e3, numPending: t2 } = this;
      this.numPending = 0;
      for (let n2 = 0; n2 < t2; n2++) e3[n2]();
    };
  }
  set(e2, t2, n2, r2) {
    if (this.values.get(e2)?.onRemove(), r2) for (let e3 of this.values.values()) e3.value === r2 && (n2 = e3.render);
    let i2 = () => n2 && this.schedule(n2);
    t2.get() !== void 0 && i2();
    let a2 = t2.on(`change`, i2), o2 = () => {
      a2(), n2 && !r2 && this.cancel(n2), this.values.get(e2)?.onRemove === o2 && this.values.delete(e2);
    };
    return this.values.set(e2, { value: t2, render: r2 ? void 0 : n2, onRemove: o2 }), o2;
  }
  get(e2) {
    return this.values.get(e2)?.value;
  }
  release() {
    let e2 = /* @__PURE__ */ new Map();
    return this.values.forEach((t2, n2) => {
      e2.set(n2, t2.value), t2.onRemove();
    }), this.transformKeys = this.transformValues = void 0, e2;
  }
  schedule(e2) {
    let { pending: t2, numPending: n2 } = this;
    for (let r2 = 0; r2 < n2; r2++) if (t2[r2] === e2) return;
    n2 || this.step(this.flush), t2[this.numPending++] = e2;
  }
  cancel(e2) {
    let { pending: t2 } = this;
    for (let n2 = 0; n2 < this.numPending; n2++) if (t2[n2] === e2) {
      t2[n2] = t2[--this.numPending];
      return;
    }
  }
};
function ka(e2, { step: t2, ...n2 } = {}) {
  let r2 = /* @__PURE__ */ new WeakMap();
  return Object.assign((n3, i2) => {
    let a2 = r2.get(n3) ?? new Oa(t2);
    r2.set(n3, a2);
    let o2 = [];
    for (let t3 in i2) {
      let r3 = i2[t3], s2 = e2(n3, a2, t3, r3);
      o2.push(s2);
    }
    return () => {
      for (let e3 of o2) e3();
    };
  }, n2, { get: (e3, t3) => r2.get(e3)?.get(t3), flush: (e3) => r2.get(e3)?.flush(), state: (e3) => r2.get(e3) });
}
var Aa = {};
function ja(e2) {
  let t2 = ``, { transformKeys: n2 = [], transformValues: r2 = {} } = e2;
  for (let e3 = 0; e3 < n2.length; e3++) {
    let i3 = n2[e3], a2 = r2[i3].getCurrent();
    a2 !== void 0 && (typeof a2 == `number` ? a2 : parseFloat(a2)) !== +!!i3.startsWith(`scale`) && (t2 += (t2 && ` `) + (Aa[i3] || (Aa[i3] = (ii[i3] || i3) + `(`)) + ri(a2, Kn[i3]) + `)`);
  }
  let i2 = e2.get(`pathRotation`)?.get();
  return i2 && (t2 += (t2 && ` `) + `rotate(` + ri(i2, Kn.pathRotation) + `)`), t2 || `none`;
}
var Ma = /* @__PURE__ */ new Set([`originX`, `originY`, `originZ`]), Na = (e2, t2) => ri(e2.get(t2)?.get(), qn[t2]), Pa = (e2, t2, n2, r2) => {
  let i2, a2;
  if (fr.has(n2)) {
    if (n2 !== `pathRotation`) {
      let e3 = t2.transformKeys ??= [];
      (t2.transformValues ??= {})[n2] = r2, e3.includes(n2) || (e3.push(n2), e3.sort((e4, t3) => dr.indexOf(e4) - dr.indexOf(t3)));
    }
    t2.get(`transform`) || (!Ta(e2) && !t2.get(`transformBox`) && Pa(e2, t2, `transformBox`, new ji(`fill-box`)), t2.set(`transform`, new ji(`none`), () => {
      si.get(e2)?.check(), e2.style.transform = ja(t2);
    })), a2 = t2.get(`transform`);
  } else Ma.has(n2) ? (t2.get(`transformOrigin`) || t2.set(`transformOrigin`, new ji(``), () => {
    let n3 = Na(t2, `originX`) ?? `50%`, r3 = Na(t2, `originY`) ?? `50%`, i3 = Na(t2, `originZ`) ?? 0;
    e2.style.transformOrigin = `${n3} ${r3} ${i3}`;
  }), a2 = t2.get(`transformOrigin`)) : i2 = kr(n2) ? () => {
    e2.style.setProperty(n2, r2.getCurrent());
  } : () => {
    e2.style[n2] = ri(r2.getCurrent(), qn[n2]);
  };
  return t2.set(n2, r2, i2, a2);
}, Fa = (e2) => Ta(e2) || Ea(e2), Ia = (e2, t2) => {
  if (fr.has(t2)) return lr(e2, t2);
  let n2 = getComputedStyle(e2), r2 = kr(t2) ? n2.getPropertyValue(t2) : n2[t2];
  return typeof r2 == `string` && r2.trim() || 0;
}, La = ka(Pa, { test: Fa, read: Ia });
function Ra(e2, t2, n2) {
  let { style: r2, vars: i2, transformOrigin: a2 } = e2, o2 = false, s2 = false;
  for (let e3 in t2) {
    let n3 = t2[e3];
    if (fr.has(e3)) o2 = true;
    else if (Le(e3)) i2[e3] = n3;
    else {
      let t3 = ri(n3, qn[e3]);
      e3.startsWith(`origin`) ? (s2 = true, a2[e3] = t3) : r2[e3] = t3;
    }
  }
  if (t2.transform || (o2 || n2 ? r2.transform = oi(t2, e2.transform, n2) : r2.transform &&= `none`), s2) {
    let { originX: e3 = `50%`, originY: t3 = `50%`, originZ: n3 = 0 } = a2;
    r2.transformOrigin = `${e3} ${t3} ${n3}`;
  }
}
var za = { offset: `stroke-dashoffset`, array: `stroke-dasharray` }, Ba = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function Va(e2, t2, n2 = 1, r2 = 0, i2 = true) {
  e2.pathLength = 1;
  let a2 = i2 ? za : Ba;
  e2[a2.offset] = `${-r2}`, e2[a2.array] = `${t2} ${n2}`;
}
var Ha = [`transform`, `opacity`, `clipPath`, `filter`, `offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function Ua(e2, { attrX: t2, attrY: n2, attrScale: r2, pathLength: i2, pathSpacing: a2 = 1, pathOffset: o2 = 0, ...s2 }, c2, l2, u2) {
  if (Ra(e2, s2, l2), c2) {
    e2.style.viewBox && (e2.attrs.viewBox = e2.style.viewBox);
    return;
  }
  e2.attrs = e2.style, e2.style = {};
  let { attrs: d2, style: f2 } = e2;
  for (let e3 of Ha) d2[e3] !== void 0 && (f2[e3] = d2[e3], delete d2[e3]);
  (f2.transform || d2.transformOrigin) && (f2.transformOrigin = d2.transformOrigin ?? `50% 50%`, delete d2.transformOrigin), f2.transform && (f2.transformBox = u2?.transformBox ?? `fill-box`, delete d2.transformBox), t2 !== void 0 && (d2.x = t2), n2 !== void 0 && (d2.y = n2), r2 !== void 0 && (d2.scale = r2), i2 !== void 0 && Va(d2, i2, a2, o2, false);
}
function Wa(e2, t2) {
  if (!(t2 in e2)) return false;
  let n2 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e2), t2) || Object.getOwnPropertyDescriptor(e2, t2);
  return n2 && typeof n2.set == `function`;
}
var Ga = (e2, t2, n2, r2, i2 = n2) => {
  let a2 = Wa(e2, i2);
  !a2 && (i2.startsWith(`data`) || i2.startsWith(`aria`)) && (i2 = ra(i2));
  let o2 = qn[n2] || qn[i2], s2 = a2 ? () => {
    e2[i2] = ri(r2.get(), qn[n2]);
  } : () => {
    let t3 = ri(r2.get(), o2);
    t3 == null ? e2.removeAttribute(i2) : e2.setAttribute(i2, String(t3));
  };
  return t2.set(n2, r2, s2);
};
function Ka(e2, t2, n2, r2) {
  return N.render(() => e2.setAttribute(`pathLength`, `1`)), n2 === `pathOffset` ? t2.set(n2, r2, () => {
    let t3 = r2.get();
    e2.setAttribute(`stroke-dashoffset`, `${-t3}`);
  }) : (t2.get(`stroke-dasharray`) || t2.set(`stroke-dasharray`, new ji(`1 1`), () => {
    let n3 = t2.get(`pathLength`)?.get() ?? 1, r3 = t2.get(`pathSpacing`)?.get();
    e2.setAttribute(`stroke-dasharray`, `${n3} ${r3 ?? 1 - Number(n3)}`);
  }), t2.set(n2, r2, void 0, t2.get(`stroke-dasharray`)));
}
var qa = ka((e2, t2, n2, r2) => n2.startsWith(`path`) ? Ka(e2, t2, n2, r2) : n2.startsWith(`attr`) ? Ga(e2, t2, n2, r2, Ja(n2)) : (fr.has(n2) || Ma.has(n2) || kr(n2) || n2 in e2.style ? Pa : Ga)(e2, t2, n2, r2), { test: Ea, read: (e2, t2) => fr.has(t2) ? qn[t2]?.default || 0 : kr(t2) || Ha.includes(t2) ? Ia(e2, t2) || e2.getAttribute(ra(t2)) || 0 : (t2 = Ja(t2), e2.getAttribute(ra(t2)) ?? e2.getAttribute(t2) ?? void 0) });
function Ja(e2) {
  return e2.replace(/^attr([A-Z])/, (e3, t2) => t2.toLowerCase());
}
function Ya({ top: e2, left: t2, right: n2, bottom: r2 }) {
  return { x: { min: t2, max: n2 }, y: { min: e2, max: r2 } };
}
function Xa({ x: e2, y: t2 }) {
  return { top: t2.min, right: e2.max, bottom: t2.max, left: e2.min };
}
function Za(e2, t2) {
  if (!t2) return e2;
  let n2 = t2({ x: e2.left, y: e2.top }), r2 = t2({ x: e2.right, y: e2.bottom });
  return { top: n2.y, left: n2.x, bottom: r2.y, right: r2.x };
}
function Qa(e2) {
  return e2 === void 0 || e2 === 1;
}
function $a({ scale: e2, scaleX: t2, scaleY: n2 }) {
  return !Qa(e2) || !Qa(t2) || !Qa(n2);
}
function eo(e2) {
  return $a(e2) || to(e2) || e2.z || e2.rotate || e2.rotateX || e2.rotateY || e2.skewX || e2.skewY;
}
function to(e2) {
  return no(e2.x) || no(e2.y);
}
function no(e2) {
  return e2 && e2 !== `0%`;
}
function ro(e2, t2, n2) {
  return n2 + t2 * (e2 - n2);
}
function io(e2, t2, n2, r2, i2) {
  return i2 !== void 0 && (e2 = ro(e2, i2, r2)), ro(e2, n2, r2) + t2;
}
function ao(e2, t2 = 0, n2 = 1, r2, i2) {
  e2.min = io(e2.min, t2, n2, r2, i2), e2.max = io(e2.max, t2, n2, r2, i2);
}
function oo(e2, { x: t2, y: n2 }) {
  ao(e2.x, t2.translate, t2.scale, t2.originPoint), ao(e2.y, n2.translate, n2.scale, n2.originPoint);
}
var so = 0.999999999999, co = 1.0000000000001;
function lo(e2, t2, n2, r2 = false) {
  let i2 = n2.length;
  if (!i2) return;
  t2.x = t2.y = 1;
  let a2, o2;
  for (let s2 = 0; s2 < i2; s2++) {
    a2 = n2[s2], o2 = a2.projectionDelta;
    let { visualElement: i3 } = a2.options;
    i3 && i3.props.style && i3.props.style.display === `contents` || (r2 && a2.options.layoutScroll && a2.scroll && a2 !== a2.root && (uo(e2.x, -a2.scroll.offset.x), uo(e2.y, -a2.scroll.offset.y)), o2 && (t2.x *= o2.x.scale, t2.y *= o2.y.scale, oo(e2, o2)), r2 && eo(a2.latestValues) && mo(e2, a2.latestValues, a2.layout?.layoutBox));
  }
  t2.x < co && t2.x > so && (t2.x = 1), t2.y < co && t2.y > so && (t2.y = 1);
}
function uo(e2, t2) {
  e2.min += t2, e2.max += t2;
}
function fo(e2, t2, n2, r2, i2 = 0.5) {
  ao(e2, t2, n2, M(e2.min, e2.max, i2), r2);
}
function po(e2, t2) {
  return typeof e2 == `string` ? parseFloat(e2) / 100 * (t2.max - t2.min) : e2;
}
function mo(e2, t2, n2) {
  let r2 = n2 ?? e2;
  fo(e2.x, po(t2.x, r2.x), t2.scaleX, t2.scale, t2.originX), fo(e2.y, po(t2.y, r2.y), t2.scaleY, t2.scale, t2.originY);
}
function ho(e2, t2) {
  return Ya(Za(e2.getBoundingClientRect(), t2));
}
function go(e2, t2, n2) {
  let r2 = ho(e2, n2), { scroll: i2 } = t2;
  return i2 && (uo(r2.x, i2.offset.x), uo(r2.y, i2.offset.y)), r2;
}
var _o = {}, vo = (e2) => Ea(e2) ? qa : La, yo = class {
  constructor(e2, t2) {
    this.effect = e2, this.current = t2, this.KeyframeResolver = ga;
  }
  getValue(e2) {
    return this.effect.get(this.current, e2);
  }
  readValue(e2, t2) {
    return this.effect.read(this.current, e2, t2);
  }
  render() {
    this.effect.flush(this.current);
  }
  measureViewportBox() {
    return ho(this.current);
  }
  getProps() {
    return _o;
  }
};
function bo(e2, t2, n2, r2) {
  if (r2) return Sa((e3) => r2.getValue(e3, null), t2, n2, r2);
  let i2 = vo(e2);
  return Ca(i2, e2, t2, n2, new yo(i2, e2));
}
var xo = ka((e2, t2, n2, r2) => t2.set(n2, r2, () => {
  e2[n2] = r2.get();
}), { test: (e2) => ae(e2), read: (e2, t2) => {
  let n2 = e2[t2];
  return typeof n2 == `string` || typeof n2 == `number` ? n2 : void 0;
} }), { schedule: So, cancel: Co } = Xt(queueMicrotask, false), wo = { x: false, y: false };
function To() {
  return wo.x || wo.y;
}
function Eo(e2) {
  return e2 === `x` || e2 === `y` ? wo[e2] ? null : (wo[e2] = true, () => {
    wo[e2] = false;
  }) : wo.x || wo.y ? null : (wo.x = wo.y = true, () => {
    wo.x = wo.y = false;
  });
}
function Do(e2, t2) {
  let n2 = Da(e2), r2 = new AbortController();
  return [n2, { passive: true, ...t2, signal: r2.signal }, () => r2.abort()];
}
function Oo(e2) {
  return !(e2.pointerType === `touch` || To());
}
function ko(e2, t2, n2 = {}) {
  let [r2, i2, a2] = Do(e2, n2);
  return r2.forEach((e3) => {
    let n3 = false, r3 = false, a3, o2 = () => {
      e3.removeEventListener(`pointerleave`, u2);
    }, s2 = (e4) => {
      a3 &&= (a3(e4), void 0), o2();
    }, c2 = (e4) => {
      n3 = false, window.removeEventListener(`pointerup`, c2), window.removeEventListener(`pointercancel`, c2), r3 && (r3 = false, s2(e4));
    }, l2 = () => {
      n3 = true, window.addEventListener(`pointerup`, c2, i2), window.addEventListener(`pointercancel`, c2, i2);
    }, u2 = (e4) => {
      e4.pointerType !== `touch` && (n3 ? r3 = true : s2(e4));
    };
    e3.addEventListener(`pointerenter`, (n4) => {
      if (!Oo(n4)) return;
      r3 = false;
      let o3 = t2(e3, n4);
      typeof o3 == `function` && (a3 = o3, e3.addEventListener(`pointerleave`, u2, i2));
    }, i2), e3.addEventListener(`pointerdown`, l2, i2);
  }), a2;
}
var Ao = (e2, t2) => t2 ? e2 === t2 || Ao(e2, t2.parentElement) : false, jo = (e2) => e2.pointerType === `mouse` ? typeof e2.button != `number` || e2.button <= 0 : e2.isPrimary !== false, Mo = /* @__PURE__ */ new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function No(e2) {
  return Mo.has(e2.tagName) || e2.isContentEditable === true;
}
var Po = /* @__PURE__ */ new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Fo(e2) {
  return Po.has(e2.tagName) || e2.isContentEditable === true;
}
var Io = /* @__PURE__ */ new WeakSet();
function Lo(e2) {
  return (t2) => {
    t2.key === `Enter` && e2(t2);
  };
}
function Ro(e2, t2) {
  e2.dispatchEvent(new PointerEvent(`pointer` + t2, { isPrimary: true, bubbles: true }));
}
var zo = (e2, t2) => {
  let n2 = e2.currentTarget;
  if (!n2) return;
  let r2 = Lo(() => {
    if (Io.has(n2)) return;
    Ro(n2, `down`);
    let e3 = Lo(() => {
      Ro(n2, `up`);
    });
    n2.addEventListener(`keyup`, e3, t2), n2.addEventListener(`blur`, () => Ro(n2, `cancel`), t2);
  });
  n2.addEventListener(`keydown`, r2, t2), n2.addEventListener(`blur`, () => n2.removeEventListener(`keydown`, r2), t2);
};
function Bo(e2) {
  return jo(e2) && !To();
}
var Vo = /* @__PURE__ */ new WeakSet();
function Ho(e2, t2, n2 = {}) {
  let [r2, i2, a2] = Do(e2, n2), o2 = (e3) => {
    let r3 = e3.currentTarget;
    if (!Bo(e3) || Vo.has(e3)) return;
    Io.add(r3), n2.stopPropagation && Vo.add(e3);
    let a3 = t2(r3, e3), o3 = { ...i2, capture: true }, s2 = (e4, t3) => {
      window.removeEventListener(`pointerup`, c2, o3), window.removeEventListener(`pointercancel`, l2, o3), Io.has(r3) && Io.delete(r3), Bo(e4) && typeof a3 == `function` && a3(e4, { success: t3 });
    }, c2 = (e4) => {
      s2(e4, r3 === window || r3 === document || n2.useGlobalTarget || Ao(r3, e4.target));
    }, l2 = (e4) => {
      s2(e4, false);
    };
    window.addEventListener(`pointerup`, c2, o3), window.addEventListener(`pointercancel`, l2, o3);
  };
  return r2.forEach((e3) => {
    (n2.useGlobalTarget ? window : e3).addEventListener(`pointerdown`, o2, i2), Ta(e3) && (e3.addEventListener(`focus`, (e4) => zo(e4, i2)), !No(e3) && !e3.hasAttribute(`tabindex`) && (e3.tabIndex = 0));
  }), a2;
}
var Uo = /* @__PURE__ */ new WeakMap(), Wo, Go = (e2, t2, n2) => (r2, i2) => i2 && i2[0] ? i2[0][e2 + `Size`] : Ea(r2) && `getBBox` in r2 ? r2.getBBox()[t2] : r2[n2], R = Go(`inline`, `width`, `offsetWidth`), z = Go(`block`, `height`, `offsetHeight`);
function Ko({ target: e2, borderBoxSize: t2 }) {
  Uo.get(e2)?.forEach((n2) => {
    n2(e2, { get width() {
      return R(e2, t2);
    }, get height() {
      return z(e2, t2);
    } });
  });
}
function qo(e2) {
  e2.forEach(Ko);
}
function Jo() {
  typeof ResizeObserver < `u` && (Wo = new ResizeObserver(qo));
}
function Yo(e2, t2) {
  Wo || Jo();
  let n2 = Da(e2);
  return n2.forEach((e3) => {
    let n3 = Uo.get(e3);
    n3 || (n3 = /* @__PURE__ */ new Set(), Uo.set(e3, n3)), n3.add(t2), Wo?.observe(e3);
  }), () => {
    n2.forEach((e3) => {
      let n3 = Uo.get(e3);
      n3?.delete(t2), n3?.size || Wo?.unobserve(e3);
    });
  };
}
var Xo = /* @__PURE__ */ new Set(), Zo;
function Qo() {
  Zo = () => {
    let e2 = { get width() {
      return window.innerWidth;
    }, get height() {
      return window.innerHeight;
    } };
    Xo.forEach((t2) => t2(e2));
  }, window.addEventListener(`resize`, Zo);
}
function $o(e2) {
  return Xo.add(e2), Zo || Qo(), () => {
    Xo.delete(e2), !Xo.size && typeof Zo == `function` && (window.removeEventListener(`resize`, Zo), Zo = void 0);
  };
}
function B(e2, t2) {
  return typeof e2 == `function` ? $o(e2) : Yo(e2, t2);
}
var es = { value: null, addProjectionMetrics: null };
function ts(e2) {
  return Ea(e2) && e2.tagName === `svg`;
}
function ns(...e2) {
  let t2 = !Array.isArray(e2[0]), n2 = t2 ? 0 : -1, r2 = e2[0 + n2], i2 = e2[1 + n2], a2 = e2[2 + n2], o2 = e2[3 + n2], s2 = vn(i2, a2, o2);
  return t2 ? s2(r2) : s2;
}
var rs = /* @__PURE__ */ new Set(), is = ({ timestamp: e2 }) => {
  rs.forEach((t2) => t2.tick(e2));
}, as = class extends In {
  constructor(e2) {
    super(), this.state = `idle`, this.startTime = 0, this.currentTime = 0, this.started = false, this.hasNextTarget = false, this.nextTarget = 0, this.stop = () => {
      this.state !== `idle` && (this.teardown(), this.options.onStop?.());
    }, this.options = e2, this.factory = e2.type, this.generator = this.factory(e2);
    let { driver: t2 } = e2;
    t2 && (this.driver = t2((e3) => this.tick(e3))), this.startTime = this.now(), this.state = `running`, this.driver ? this.driver.start() : (rs.size || N.update(is, true), rs.add(this));
  }
  setTarget(e2, t2) {
    this.nextTarget = e2, this.nextVelocity = t2, this.hasNextTarget = true;
  }
  retarget(e2, t2) {
    let { options: n2, generator: r2 } = this;
    n2.keyframes = e2, n2.velocity = t2, this.startTime = this.now(), this.currentTime = 0, r2.retarget ? r2.retarget(e2, t2) : this.generator = this.factory(n2);
  }
  tick(e2) {
    let { options: t2, hasNextTarget: n2 } = this, { delay: r2 = 0, onUpdate: i2, onPlay: a2 } = t2;
    this.started || (this.startTime = Mn(this.startTime, e2));
    let o2 = Math.round(e2 - this.startTime) - r2, s2 = this.currentTime = Math.max(0, o2), c2 = this.generator.next(s2), l2 = o2 < 0 ? t2.keyframes[0] : c2.value;
    if (n2) {
      this.hasNextTarget = false;
      let { keyframes: e3 } = t2;
      e3[0] = l2, e3[1] = this.nextTarget, this.retarget(e3, this.nextVelocity ?? this.getGeneratorVelocity());
    }
    (n2 || !this.started) && (this.started = true, a2?.()), this.state === `running` && (i2?.(l2), c2.done && o2 >= 0 && !n2 && !this.hasNextTarget && this.state === `running` && (this.notifyFinished(), this.teardown(), this.state = `finished`, t2.onComplete?.()));
  }
  getGeneratorVelocity() {
    return En(this.generator, this.currentTime, this.options.velocity);
  }
  now() {
    return this.driver ? this.driver.now() : A.now();
  }
  teardown() {
    this.state = `idle`, this.driver ? this.driver.stop() : (rs.delete(this), rs.size || P(is));
  }
}, os = (e2) => typeof e2 == `number` ? e2 : parseFloat(e2);
function ss(e2, t2, n2) {
  let r2 = e2.get(), i2 = null, a2, o2 = typeof r2 == `string` ? r2.replace(/[\d.-]/g, ``) : void 0, s2 = (e3) => a2(o2 ? e3 + o2 : e3), c2 = () => e2.events.animationStart?.notify(), l2 = () => {
    i2 &&= (i2.stop(), null), e2.animation = void 0;
  };
  if (e2.attach((t3, r3) => {
    a2 = r3;
    let o3 = os(t3);
    if (i2?.state === `running`) {
      i2.setTarget(o3, n2.velocity);
      return;
    }
    let u2 = os(e2.get()), d2 = i2 ? i2.getGeneratorVelocity() : e2.getVelocity();
    if (l2(), u2 === o3) return;
    let f2 = i2 = new as({ keyframes: [u2, o3], velocity: d2, restDelta: 1e-3, restSpeed: 0.01, ...n2, onUpdate: s2, onPlay: c2 });
    e2.animation = f2, f2.then(() => {
      i2 === f2 && (i2 = null, e2.animation = void 0, e2.events.animationComplete?.notify());
    });
  }, l2), F(t2)) {
    let r3 = n2.skipInitialAnimation === true, i3 = t2.on(`change`, (t3) => {
      r3 ? (r3 = false, e2.jump(cs(t3, o2), false)) : e2.set(cs(t3, o2));
    }), a3 = e2.on(`destroy`, i3);
    return () => {
      i3(), a3();
    };
  }
  return l2;
}
function cs(e2, t2) {
  return t2 ? e2 + t2 : e2;
}
function ls(e2, t2, n2) {
  return ss(e2, t2, { ...n2, type: hn });
}
var us = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), ds = () => ({ x: us(), y: us() }), fs = () => ({ min: 0, max: 0 }), ps = () => ({ x: fs(), y: fs() }), ms = /* @__PURE__ */ new WeakMap();
function hs(e2) {
  return typeof e2 == `object` && !!e2 && typeof e2.start == `function`;
}
function gs(e2) {
  return typeof e2 == `string` || Array.isArray(e2);
}
var _s = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`], vs = [`initial`, ..._s];
function ys(e2) {
  if (hs(e2.animate)) return true;
  for (let t2 = 0; t2 < vs.length; t2++) if (gs(e2[vs[t2]])) return true;
  return false;
}
function bs(e2) {
  return !!(ys(e2) || e2.variants);
}
function xs(e2, t2, n2) {
  for (let r2 in t2) {
    let i2 = t2[r2], a2 = n2[r2];
    if (F(i2)) e2.addValue(r2, i2);
    else if (F(a2)) e2.addValue(r2, Mi(i2, { owner: e2 }));
    else if (a2 !== i2) {
      if (e2.hasValue(r2)) {
        let t3 = e2.getValue(r2);
        t3.liveStyle === true ? t3.jump(i2) : t3.hasAnimated || t3.set(i2);
      } else {
        let t3 = e2.getStaticValue(r2);
        e2.addValue(r2, Mi(t3 === void 0 ? i2 : t3, { owner: e2 }));
      }
    }
  }
  for (let r2 in n2) t2[r2] === void 0 && e2.removeValue(r2);
  return t2;
}
var Ss = { current: null }, Cs = { current: false }, ws = typeof window < `u`;
function Ts() {
  if (Cs.current = true, ws) {
    if (window.matchMedia) {
      let e2 = window.matchMedia(`(prefers-reduced-motion)`), t2 = () => Ss.current = e2.matches;
      e2.addEventListener(`change`, t2), t2();
    } else Ss.current = false;
  }
}
var Es = [`AnimationStart`, `AnimationComplete`, `Update`, `BeforeLayoutMeasure`, `LayoutMeasure`, `LayoutAnimationStart`, `LayoutAnimationComplete`], Ds = {};
function Os(e2) {
  Ds = e2;
}
function ks() {
  return Ds;
}
var As = class {
  scrapeMotionValuesFromProps(e2, t2, n2) {
    return {};
  }
  constructor({ parent: e2, props: t2, presenceContext: n2, reducedMotionConfig: r2, skipAnimations: i2, blockInitialAnimation: a2, visualState: o2 }, s2 = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Or, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify(`Update`, this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      let e3 = A.now();
      this.renderScheduledAt < e3 && (this.renderScheduledAt = e3, N.render(this.render, false, true));
    };
    let { latestValues: c2, renderState: l2 } = o2;
    this.latestValues = c2, this.baseTarget = { ...c2 }, this.initialValues = t2.initial ? { ...c2 } : {}, this.renderState = l2, this.parent = e2, this.props = t2, this.presenceContext = n2, this.depth = e2 ? e2.depth + 1 : 0, this.reducedMotionConfig = r2, this.skipAnimationsConfig = i2, this.options = s2, this.blockInitialAnimation = !!a2, this.isControllingVariants = ys(t2), this.isVariantNode = bs(t2), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e2 && e2.current);
    let { willChange: u2, ...d2 } = this.scrapeMotionValuesFromProps(t2, {}, this);
    for (let e3 in d2) {
      let t3 = d2[e3];
      c2[e3] !== void 0 && F(t3) && t3.set(c2[e3]);
    }
  }
  mount(e2) {
    if (this.hasBeenMounted) for (let e3 in this.initialValues) this.values.get(e3)?.jump(this.initialValues[e3]), this.latestValues[e3] = this.initialValues[e3];
    if (this.current = e2, ms.set(e2, this), this.projection && !this.projection.instance && this.projection.mount(e2), this.isVariantNode && !this.isControllingVariants) {
      let e3 = this;
      do
        e3 = e3.props.inherit !== false && e3.parent;
      while (e3 && !e3.isVariantNode);
      if (e3) {
        let { variantChildren: t2 } = e3;
        t2.add(this), this.removeFromVariantTree = () => t2.delete(this);
      }
    }
    this.values.forEach((e3, t2) => this.bindToMotionValue(t2, e3)), this.reducedMotionConfig === `never` ? this.shouldReduceMotion = false : this.reducedMotionConfig === `always` ? this.shouldReduceMotion = true : (Cs.current || Ts(), this.shouldReduceMotion = Ss.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
  }
  unmount() {
    this.projection && this.projection.unmount(), P(this.notifyUpdate), P(this.render), this.valueSubscriptions.forEach((e2) => e2()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (let e2 in this.events) this.events[e2].clear();
    for (let e2 in this.features) {
      let t2 = this.features[e2];
      t2 && (t2.unmount(), t2.isMounted = false);
    }
    this.current = null;
  }
  addChild(e2) {
    this.children.add(e2), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e2);
  }
  removeChild(e2) {
    this.children.delete(e2), this.enteringChildren && this.enteringChildren.delete(e2);
  }
  bindToMotionValue(e2, t2) {
    if (this.valueSubscriptions.has(e2) && this.valueSubscriptions.get(e2)(), t2.accelerate && Zr.has(e2) && this.current instanceof HTMLElement) {
      let { factory: n3, keyframes: r3, times: i3, ease: a2, duration: o2 } = t2.accelerate, s2 = new Hr({ element: this.current, name: e2, keyframes: r3, times: i3, ease: a2, duration: fe(o2) }), c2 = n3(s2);
      this.valueSubscriptions.set(e2, () => {
        c2(), s2.cancel();
      });
      return;
    }
    let n2 = fr.has(e2);
    n2 && this.onBindTransform && this.onBindTransform();
    let r2 = t2.on(`change`, (t3) => {
      this.latestValues[e2] = t3, this.props.onUpdate && N.preRender(this.notifyUpdate), n2 && (this.projection && (this.projection.isTransformDirty = true), si.get(this.current)?.check()), this.scheduleRender();
    }), i2;
    typeof window < `u` && window.MotionCheckAppearSync && (i2 = window.MotionCheckAppearSync(this, e2, t2)), this.valueSubscriptions.set(e2, () => {
      r2(), i2 && i2();
    });
  }
  sortNodePosition(e2) {
    return !this.current || !e2.current || !this.sortInstanceNodePosition || this.type !== e2.type ? 0 : this.sortInstanceNodePosition(this.current, e2.current);
  }
  updateFeatures() {
    let e2 = `animation`;
    for (e2 in Ds) {
      let t2 = Ds[e2];
      if (!t2) continue;
      let { isEnabled: n2, Feature: r2 } = t2;
      if (!this.features[e2] && r2 && n2(this.props) && (this.features[e2] = new r2(this)), this.features[e2]) {
        let t3 = this.features[e2];
        t3.isMounted ? t3.update() : (t3.mount(), t3.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ps();
  }
  getStaticValue(e2) {
    return this.latestValues[e2];
  }
  setStaticValue(e2, t2) {
    this.latestValues[e2] = t2;
  }
  update(e2, t2) {
    let { transformTemplate: n2, onUpdate: r2 } = this.props;
    (e2.transformTemplate || n2) && this.scheduleRender(), (e2.transformTemplate && !n2 || e2.onUpdate && !r2) && si.get(this.current)?.demote(), this.prevProps = this.props, this.props = e2, this.prevPresenceContext = this.presenceContext, this.presenceContext = t2;
    for (let t3 = 0; t3 < Es.length; t3++) {
      let n3 = Es[t3];
      this.propEventSubscriptions[n3] && (this.propEventSubscriptions[n3](), delete this.propEventSubscriptions[n3]);
      let r3 = e2[`on` + n3];
      r3 && (this.propEventSubscriptions[n3] = this.on(n3, r3));
    }
    this.prevMotionValues = xs(this, this.scrapeMotionValuesFromProps(e2, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e2) {
    return this.props.variants ? this.props.variants[e2] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  addValue(e2, t2) {
    let n2 = this.values.get(e2);
    if (t2 !== n2) {
      n2 && this.removeValue(e2), this.bindToMotionValue(e2, t2), this.values.set(e2, t2);
      let r2 = t2.get();
      r2 !== void 0 && (this.latestValues[e2] = r2);
    }
  }
  removeValue(e2) {
    this.values.delete(e2);
    let t2 = this.valueSubscriptions.get(e2);
    t2 && (t2(), this.valueSubscriptions.delete(e2)), delete this.latestValues[e2], this.removeValueFromRenderState(e2, this.renderState);
  }
  hasValue(e2) {
    return this.values.has(e2);
  }
  getValue(e2, t2) {
    if (this.props.values && this.props.values[e2]) return this.props.values[e2];
    let n2 = this.values.get(e2);
    return n2 === void 0 && t2 !== void 0 && (n2 = Mi(t2 ?? this.getDefaultValue?.(e2), { owner: this }), this.addValue(e2, n2)), n2;
  }
  readValue(e2, t2) {
    let n2 = this.latestValues[e2] !== void 0 || !this.current ? this.latestValues[e2] : this.getBaseTargetFromProps(this.props, e2) ?? this.readValueFromInstance(this.current, e2, this.options);
    return n2 != null && (typeof n2 == `string` && (ie(n2) || oe(n2)) ? n2 = parseFloat(n2) : typeof n2 != `number` && !Dt.test(n2) && Dt.test(t2) && (n2 = Zn(e2, t2)), this.setBaseTarget(e2, F(n2) ? n2.get() : n2)), F(n2) ? n2.get() : n2;
  }
  setBaseTarget(e2, t2) {
    this.baseTarget[e2] = t2;
  }
  on(e2, t2) {
    return this.events[e2] || (this.events[e2] = new de()), this.events[e2].add(t2);
  }
  notify(e2, ...t2) {
    this.events[e2] && this.events[e2].notify(...t2);
  }
  scheduleRenderMicrotask() {
    So.render(this.render);
  }
}, js = class extends As {
  constructor() {
    super(...arguments), this.KeyframeResolver = ga;
  }
  sortInstanceNodePosition(e2, t2) {
    return e2.compareDocumentPosition(t2) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e2, t2) {
    let n2 = e2.style;
    return n2 ? n2[t2] : void 0;
  }
  removeValueFromRenderState(e2, { vars: t2, style: n2 }) {
    delete t2[e2], delete n2[e2];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let { children: e2 } = this.props;
    F(e2) && (this.childSubscription = e2.on(`change`, (e3) => {
      this.current && (this.current.textContent = `${e3}`);
    }));
  }
}, Ms = class {
  constructor(e2) {
    this.isMounted = false, this.node = e2;
  }
  update() {
  }
};
function Ns(e2, { style: t2, vars: n2 }, r2, i2) {
  let a2 = e2.style, o2;
  for (o2 in t2) a2[o2] = t2[o2];
  for (o2 in i2?.applyProjectionStyles(a2, r2), n2) a2.setProperty(o2, n2[o2]);
}
var Ps = {};
function Fs(e2, { layout: t2, layoutId: n2 }) {
  return fr.has(e2) || e2.startsWith(`origin`) || (t2 || n2 !== void 0) && (!!Ps[e2] || e2 === `opacity`);
}
function Is(e2, t2, n2) {
  let r2 = e2.style, i2 = t2?.style, a2 = {};
  if (!r2) return a2;
  for (let t3 in r2) (F(r2[t3]) || i2 && F(i2[t3]) || Fs(t3, e2) || n2?.getValue(t3)?.liveStyle !== void 0) && (a2[t3] = r2[t3]);
  return a2;
}
function Ls(e2) {
  return window.getComputedStyle(e2);
}
var Rs = class extends js {
  constructor() {
    super(...arguments), this.type = `html`, this.renderInstance = Ns;
  }
  mount(e2) {
    e2.style, super.mount(e2);
  }
  readValueFromInstance(e2, t2) {
    if (fr.has(t2)) return this.projection?.isProjecting ? sr(t2) : lr(e2, t2);
    {
      let n2 = Ls(e2), r2 = (Le(t2) ? n2.getPropertyValue(t2) : n2[t2]) || 0;
      return typeof r2 == `string` ? r2.trim() : r2;
    }
  }
  measureInstanceViewportBox(e2, { transformPagePoint: t2 }) {
    return ho(e2, t2);
  }
  build(e2, t2, n2) {
    Ra(e2, t2, n2.transformTemplate);
  }
  scrapeMotionValuesFromProps(e2, t2, n2) {
    return Is(e2, t2, n2);
  }
}, zs = /* @__PURE__ */ new Set([`baseFrequency`, `diffuseConstant`, `kernelMatrix`, `kernelUnitLength`, `keySplines`, `keyTimes`, `limitingConeAngle`, `markerHeight`, `markerWidth`, `numOctaves`, `targetX`, `targetY`, `surfaceScale`, `specularConstant`, `specularExponent`, `stdDeviation`, `tableValues`, `viewBox`, `gradientTransform`, `pathLength`, `startOffset`, `textLength`, `lengthAdjust`]), Bs = (e2) => typeof e2 == `string` && e2.toLowerCase() === `svg`;
function Vs(e2, t2, n2, r2) {
  Ns(e2, t2, void 0, r2);
  for (let n3 in t2.attrs) e2.setAttribute(zs.has(n3) ? n3 : ra(n3), t2.attrs[n3]);
}
function Hs(e2, t2, n2) {
  let r2 = Is(e2, t2, n2);
  for (let n3 in e2) if (F(e2[n3]) || F(t2[n3])) {
    let t3 = dr.indexOf(n3) === -1 ? n3 : `attr` + n3.charAt(0).toUpperCase() + n3.substring(1);
    r2[t3] = e2[n3];
  }
  return r2;
}
var Us = class extends js {
  constructor() {
    super(...arguments), this.type = `svg`, this.isSVGTag = false, this.measureInstanceViewportBox = ps;
  }
  getBaseTargetFromProps(e2, t2) {
    return fr.has(t2) ? super.getBaseTargetFromProps(e2, t2) ?? sr(t2) : e2[t2];
  }
  getDefaultValue(e2) {
    return fr.has(e2) ? this.latestValues[e2] ?? sr(e2) : void 0;
  }
  readValueFromInstance(e2, t2) {
    if (fr.has(t2)) {
      let e3 = Yn(t2);
      return e3 && e3.default || 0;
    }
    if (Ha.includes(t2)) {
      let n2 = getComputedStyle(e2)[t2];
      if (typeof n2 == `string` && n2) return n2.trim();
    }
    return t2 = zs.has(t2) ? t2 : ra(t2), e2.getAttribute(t2);
  }
  scrapeMotionValuesFromProps(e2, t2, n2) {
    return Hs(e2, t2, n2);
  }
  build(e2, t2, n2) {
    Ua(e2, t2, this.isSVGTag, n2.transformTemplate, n2.style);
  }
  renderInstance(e2, t2, n2, r2) {
    Vs(e2, t2, n2, r2);
  }
  mount(e2) {
    this.isSVGTag = Bs(e2.tagName), super.mount(e2);
  }
};
function Ws(e2, t2) {
  if (!Array.isArray(t2)) return false;
  let n2 = t2.length;
  if (n2 !== e2.length) return false;
  for (let r2 = 0; r2 < n2; r2++) if (t2[r2] !== e2[r2]) return false;
  return true;
}
var Gs = [..._s].reverse();
function Ks(e2) {
  let t2 = (t3) => Promise.all(t3.map(({ animation: t4, options: n3 }) => ca(e2, t4, n3))), n2 = Js(), r2 = true, i2 = false;
  function a2(a3) {
    let { props: o3, parent: s2, manuallyAnimateOnMount: c2 } = e2, l2 = r2 || i2, u2 = [], d2 = /* @__PURE__ */ new Set(), f2 = {}, p2 = 1 / 0, m2 = e2;
    do
      m2 = m2.props.inherit !== false && m2.parent;
    while (m2 && !m2.isControllingVariants);
    if (Gs.forEach((t3, r3) => {
      let i3 = n2[t3], h3 = o3[t3], g2 = m2 && m2.props[t3], _2 = h3 === void 0 ? gs(g2) || g2 === false ? g2 : void 0 : h3, v2 = gs(_2), y2 = t3 === a3 ? i3.isActive : null;
      y2 === false && (p2 = r3);
      let b2 = v2 && h3 === void 0 && !(l2 && c2);
      if (i3.protectedKeys = { ...f2 }, !i3.isActive && y2 === null || !_2 && !i3.prevProp || hs(_2) || typeof _2 == `boolean`) return;
      if (t3 === `exit` && i3.isActive && y2 !== true) {
        f2 = { ...f2, ...i3.prevResolvedValues };
        return;
      }
      let x2 = qs(i3.prevProp, _2), S2 = x2 || v2 && (y2 && !b2 || r3 > p2), ee2 = false, te2 = Array.isArray(_2) ? _2 : [_2], C2 = {};
      if (y2 !== false) for (let n3 of te2) {
        let { transition: r4, transitionEnd: i4, ...a4 } = Ji(e2, n3, Yi(e2, t3)) || {};
        C2 = { ...C2, ...a4, ...i4 };
      }
      let { prevResolvedValues: w2 } = i3;
      for (let t4 in { ...w2, ...C2 }) {
        if (t4 in f2) continue;
        let n3 = C2[t4], r4 = w2[t4], a4 = Array.isArray(n3) && Array.isArray(r4) ? !Ws(n3, r4) || x2 : n3 !== r4;
        if (a4 && n3 == null) d2.add(t4);
        else if (a4 || n3 !== void 0 && d2.has(t4)) {
          S2 = true, d2.delete(t4) && (ee2 = true), i3.needsAnimating[t4] = true;
          let n4 = e2.getValue(t4);
          n4 && (n4.liveStyle = false);
        } else i3.protectedKeys[t4] = true;
      }
      if (i3.prevProp = _2, i3.prevResolvedValues = C2, i3.isActive && (f2 = { ...f2, ...C2 }), S2 && (!(b2 && x2) || ee2)) for (let n3 of te2) {
        let r4 = { type: t3 };
        if (typeof n3 == `string` && l2 && c2 && s2?.enteringChildren) {
          let t4 = Ji(s2, n3)?.transition?.delayChildren;
          r4.delay = Di(s2.enteringChildren, e2, t4);
        }
        u2.push({ animation: n3, options: r4 });
      }
    }), d2.size) {
      let { initial: t3 } = o3, n3 = {}, r3 = typeof t3 != `boolean` && Ji(e2, Array.isArray(t3) ? t3[0] : t3, e2.presenceContext?.custom);
      r3 && r3.transition && (n3.transition = r3.transition), d2.forEach((i3) => {
        let a4 = e2.getValue(i3);
        a4 && (a4.liveStyle = true);
        let s3 = r3 && !Array.isArray(t3) ? r3[i3] : void 0, c3 = e2.getBaseTargetFromProps(o3, i3);
        n3[i3] = (s3 === void 0 ? c3 !== void 0 && !F(c3) ? c3 : e2.initialValues[i3] === void 0 ? e2.baseTarget[i3] : void 0 : s3) ?? null;
      }), u2.push({ animation: n3 });
    }
    let h2 = l2 && e2.blockInitialAnimation || r2 && !c2 && (o3.initial === false || o3.initial === o3.animate);
    return r2 = i2 = false, !h2 && u2.length ? t2(u2) : Promise.resolve();
  }
  function o2(t3, r3) {
    if (n2[t3].isActive === r3) return Promise.resolve();
    e2.variantChildren?.forEach((e3) => e3.animationState?.setActive(t3, r3)), n2[t3].isActive = r3;
    let i3 = a2(t3);
    for (let e3 in n2) n2[e3].protectedKeys = {};
    return i3;
  }
  return { animateChanges: a2, setActive: o2, setAnimateFunction: (n3) => {
    t2 = n3(e2);
  }, getState: () => n2, reset: () => {
    n2 = Js(), i2 = true;
  } };
}
function qs(e2, t2) {
  return typeof t2 == `string` ? t2 !== e2 : Array.isArray(t2) ? !Ws(t2, e2) : false;
}
function Js() {
  let e2 = {};
  for (let t2 of _s) e2[t2] = { isActive: t2 === `animate`, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
  return e2;
}
function Ys(e2, t2) {
  e2.min = t2.min, e2.max = t2.max;
}
function Xs(e2, t2) {
  Ys(e2.x, t2.x), Ys(e2.y, t2.y);
}
function Zs(e2, t2) {
  e2.translate = t2.translate, e2.scale = t2.scale, e2.originPoint = t2.originPoint, e2.origin = t2.origin;
}
var Qs = 0.9999, $s = 1.0001, ec = -0.01, tc = 0.01;
function nc(e2) {
  return e2.max - e2.min;
}
function rc(e2, t2, n2) {
  return Math.abs(e2 - t2) <= n2;
}
function ic(e2, t2, n2, r2 = 0.5) {
  e2.origin = r2, e2.originPoint = M(t2.min, t2.max, e2.origin), e2.scale = nc(n2) / nc(t2), e2.translate = M(n2.min, n2.max, e2.origin) - e2.originPoint, (e2.scale >= Qs && e2.scale <= $s || isNaN(e2.scale)) && (e2.scale = 1), (e2.translate >= ec && e2.translate <= tc || isNaN(e2.translate)) && (e2.translate = 0);
}
function ac(e2, t2, n2, r2) {
  ic(e2.x, t2.x, n2.x, r2 ? r2.originX : void 0), ic(e2.y, t2.y, n2.y, r2 ? r2.originY : void 0);
}
function oc(e2, t2, n2, r2 = 0) {
  e2.min = (r2 ? M(n2.min, n2.max, r2) : n2.min) + t2.min, e2.max = e2.min + nc(t2);
}
function sc(e2, t2, n2, r2) {
  oc(e2.x, t2.x, n2.x, r2?.x), oc(e2.y, t2.y, n2.y, r2?.y);
}
function cc(e2, t2, n2, r2 = 0) {
  let i2 = r2 ? M(n2.min, n2.max, r2) : n2.min;
  e2.min = t2.min - i2, e2.max = e2.min + nc(t2);
}
function lc(e2, t2, n2, r2) {
  cc(e2.x, t2.x, n2.x, r2?.x), cc(e2.y, t2.y, n2.y, r2?.y);
}
function uc(e2, t2, n2, r2, i2) {
  return e2 -= t2, e2 = ro(e2, 1 / n2, r2), i2 !== void 0 && (e2 = ro(e2, 1 / i2, r2)), e2;
}
function dc(e2, t2 = 0, n2 = 1, r2 = 0.5, i2, a2 = e2, o2 = e2) {
  if (rt.test(t2) && (t2 = parseFloat(t2), t2 = M(o2.min, o2.max, t2 / 100) - o2.min), typeof t2 != `number`) return;
  let s2 = M(a2.min, a2.max, r2);
  e2 === a2 && (s2 -= t2), e2.min = uc(e2.min, t2, n2, s2, i2), e2.max = uc(e2.max, t2, n2, s2, i2);
}
function fc(e2, t2, [n2, r2, i2], a2, o2) {
  dc(e2, t2[n2], t2[r2], t2[i2], t2.scale, a2, o2);
}
var pc = [`x`, `scaleX`, `originX`], mc = [`y`, `scaleY`, `originY`];
function hc(e2, t2, n2, r2) {
  fc(e2.x, t2, pc, n2 ? n2.x : void 0, r2 ? r2.x : void 0), fc(e2.y, t2, mc, n2 ? n2.y : void 0, r2 ? r2.y : void 0);
}
function gc(e2) {
  return e2.translate === 0 && e2.scale === 1;
}
function _c(e2) {
  return gc(e2.x) && gc(e2.y);
}
function vc(e2, t2) {
  return e2.min === t2.min && e2.max === t2.max;
}
function yc(e2, t2) {
  return vc(e2.x, t2.x) && vc(e2.y, t2.y);
}
function bc(e2, t2) {
  return Math.round(e2.min) === Math.round(t2.min) && Math.round(e2.max) === Math.round(t2.max);
}
function xc(e2, t2) {
  return bc(e2.x, t2.x) && bc(e2.y, t2.y);
}
function Sc(e2) {
  return nc(e2.x) / nc(e2.y);
}
function Cc(e2, t2) {
  return e2.translate === t2.translate && e2.scale === t2.scale && e2.originPoint === t2.originPoint;
}
function wc(e2) {
  return [e2(`x`), e2(`y`)];
}
function Tc(e2, t2) {
  return t2.max === t2.min ? 0 : e2 / (t2.max - t2.min) * 100;
}
var Ec = { correct: (e2, t2) => {
  if (!t2.target) return e2;
  if (typeof e2 == `string`) {
    if (j.test(e2)) e2 = parseFloat(e2);
    else return e2;
  }
  return `${Tc(e2, t2.target.x)}% ${Tc(e2, t2.target.y)}%`;
} }, Dc = { correct: (e2, { treeScale: t2, projectionDelta: n2 }) => {
  let r2 = e2, i2 = Dt.parse(e2);
  if (i2.length > 5) return r2;
  let a2 = Dt.createTransformer(e2), o2 = typeof i2[0] == `number` ? 0 : 1, s2 = n2.x.scale * t2.x, c2 = n2.y.scale * t2.y;
  i2[0 + o2] /= s2, i2[1 + o2] /= c2;
  let l2 = M(s2, c2, 0.5);
  return typeof i2[2 + o2] == `number` && (i2[2 + o2] /= l2), typeof i2[3 + o2] == `number` && (i2[3 + o2] /= l2), a2(i2);
} };
function Oc(e2, t2, n2) {
  let r2 = ``, i2 = e2.x.translate / t2.x, a2 = e2.y.translate / t2.y, o2 = n2?.z || 0;
  if ((i2 || a2 || o2) && (r2 = `translate3d(${i2}px, ${a2}px, ${o2}px) `), (t2.x !== 1 || t2.y !== 1) && (r2 += `scale(${1 / t2.x}, ${1 / t2.y}) `), n2) {
    let { transformPerspective: e3, rotate: t3, pathRotation: i3, rotateX: a3, rotateY: o3, skewX: s3, skewY: c3 } = n2;
    e3 && (r2 = `perspective(${e3}px) ${r2}`), t3 && (r2 += `rotate(${t3}deg) `), i3 && (r2 += `rotate(${i3}deg) `), a3 && (r2 += `rotateX(${a3}deg) `), o3 && (r2 += `rotateY(${o3}deg) `), s3 && (r2 += `skewX(${s3}deg) `), c3 && (r2 += `skewY(${c3}deg) `);
  }
  let s2 = e2.x.scale * t2.x, c2 = e2.y.scale * t2.y;
  return (s2 !== 1 || c2 !== 1) && (r2 += `scale(${s2}, ${c2})`), r2 || `none`;
}
var kc = _a.length, Ac = (e2) => typeof e2 == `number` || j.test(e2);
function jc(e2, t2, n2, r2, i2, a2) {
  i2 ? (e2.opacity = M(0, n2.opacity ?? 1, Nc(r2)), e2.opacityExit = M(t2.opacity ?? 1, 0, Pc(r2))) : a2 && (e2.opacity = M(t2.opacity ?? 1, n2.opacity ?? 1, r2));
  for (let i3 = 0; i3 < kc; i3++) {
    let a3 = _a[i3], o2 = Mc(t2, a3), s2 = Mc(n2, a3);
    (o2 !== void 0 || s2 !== void 0) && (o2 ||= 0, s2 ||= 0, o2 === 0 || s2 === 0 || Ac(o2) === Ac(s2) ? (e2[a3] = Math.max(M(os(o2), os(s2), r2), 0), (rt.test(s2) || rt.test(o2)) && (e2[a3] += `%`)) : e2[a3] = s2);
  }
  (t2.rotate || n2.rotate) && (e2.rotate = M(t2.rotate || 0, n2.rotate || 0, r2));
}
function Mc(e2, t2) {
  return e2[t2] === void 0 ? e2.borderRadius : e2[t2];
}
var Nc = Fc(0, 0.5, E), Pc = Fc(0.5, 0.95, ce);
function Fc(e2, t2, n2) {
  return (r2) => r2 < e2 ? 0 : r2 > t2 ? 1 : n2(ue(e2, t2, r2));
}
function Ic(e2, t2, n2) {
  let r2 = F(e2) ? e2 : Mi(e2);
  return r2.start(Hi(``, r2, t2, n2)), r2.animation;
}
function Lc(e2, t2, n2, r2 = { passive: true }) {
  return e2.addEventListener(t2, n2, r2), () => e2.removeEventListener(t2, n2, r2);
}
var Rc = (e2, t2) => e2.depth - t2.depth, zc = class {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(e2) {
    w(this.children, e2), this.isDirty = true;
  }
  remove(e2) {
    T(this.children, e2), this.isDirty = true;
  }
  forEach(e2) {
    this.isDirty && this.children.sort(Rc), this.isDirty = false, this.children.forEach(e2);
  }
};
function Bc(e2, t2) {
  let n2 = A.now(), r2 = ({ timestamp: i2 }) => {
    let a2 = i2 - n2;
    a2 >= t2 && (P(r2), e2(a2 - t2));
  };
  return N.setup(r2, true), () => P(r2);
}
function Vc(e2) {
  return F(e2) ? e2.get() : e2;
}
var Hc = class {
  constructor() {
    this.members = [];
  }
  add(e2) {
    w(this.members, e2);
    for (let t2 = this.members.length - 1; t2 >= 0; t2--) {
      let n2 = this.members[t2];
      if (n2 === e2 || n2 === this.lead || n2 === this.prevLead) continue;
      let r2 = n2.instance;
      (!r2 || r2.isConnected === false) && !n2.snapshot && (T(this.members, n2), n2.unmount());
    }
    e2.scheduleRender();
  }
  remove(e2) {
    if (T(this.members, e2), e2 === this.prevLead && (this.prevLead = void 0), e2 === this.lead) {
      let e3 = this.members[this.members.length - 1];
      e3 && this.promote(e3);
    }
  }
  relegate(e2) {
    for (let t2 = this.members.indexOf(e2) - 1; t2 >= 0; t2--) {
      let e3 = this.members[t2];
      if (e3.isPresent !== false && e3.instance?.isConnected !== false) return this.promote(e3), true;
    }
    return false;
  }
  promote(e2, t2) {
    let n2 = this.lead;
    if (e2 !== n2 && (this.prevLead = n2, this.lead = e2, e2.show(), n2)) {
      n2.updateSnapshot(), e2.scheduleRender();
      let { layoutDependency: r2 } = n2.options, { layoutDependency: i2 } = e2.options;
      (r2 === void 0 || r2 !== i2) && (e2.resumeFrom = n2, t2 && (n2.preserveOpacity = true), n2.snapshot && (e2.snapshot = n2.snapshot, e2.snapshot.latestValues = n2.animationValues || n2.latestValues), e2.root?.isUpdating && (e2.isLayoutDirty = true)), e2.options.crossfade === false && n2.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e2) => {
      e2.options.onExitComplete?.(), e2.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((e2) => e2.instance && e2.scheduleRender(false));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}, Uc = { borderRadius: { ...Ec, applyTo: [..._a] }, borderTopLeftRadius: Ec, borderTopRightRadius: Ec, borderBottomLeftRadius: Ec, borderBottomRightRadius: Ec, boxShadow: Dc }, Wc = { hasAnimatedSinceResize: true, hasEverUpdated: false };
Object.assign(Ps, { ...Uc, ...Ps });
var Gc = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }, Kc = [``, `X`, `Y`, `Z`], qc = 1e3, Jc = 0;
function Yc(e2, t2, n2, r2) {
  let { latestValues: i2 } = t2;
  i2[e2] && (n2[e2] = i2[e2], t2.setStaticValue(e2, 0), r2 && (r2[e2] = 0));
}
var Xc = ({ instance: e2 }) => e2 && si.get(e2)?.demote();
function Zc(e2) {
  if (e2.hasCheckedOptimisedAppear = true, e2.root === e2) return;
  let { visualElement: t2 } = e2.options;
  if (!t2) return;
  let n2 = aa(t2);
  if (window.MotionHasOptimisedAnimation(n2, `transform`)) {
    let { layout: t3, layoutId: r3 } = e2.options;
    window.MotionCancelOptimisedAnimation(n2, `transform`, N, !(t3 || r3));
  }
  let { parent: r2 } = e2;
  r2 && !r2.hasCheckedOptimisedAppear && Zc(r2);
}
function Qc({ attachResizeListener: e2, defaultParent: t2, measureScroll: n2, checkIsScrollRoot: r2, resetTransform: i2 }) {
  return class {
    constructor(e3 = {}, n3 = t2?.()) {
      this.id = Jc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, es.value && (Gc.nodes = Gc.calculatedTargetDeltas = Gc.calculatedProjections = 0), this.nodes.forEach(tl), this.nodes.forEach(fl), this.nodes.forEach(pl), this.nodes.forEach(nl), es.addProjectionMetrics && es.addProjectionMetrics(Gc);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e3, this.root = n3 ? n3.root || n3 : this, this.path = n3 ? [...n3.path, n3] : [], this.parent = n3, this.depth = n3 ? n3.depth + 1 : 0;
      for (let e4 = 0; e4 < this.path.length; e4++) this.path[e4].shouldResetTransform = true;
      this.root === this && (this.nodes = new zc());
    }
    addEventListener(e3, t3) {
      return this.eventHandlers.has(e3) || this.eventHandlers.set(e3, new de()), this.eventHandlers.get(e3).add(t3);
    }
    notifyListeners(e3, ...t3) {
      let n3 = this.eventHandlers.get(e3);
      n3 && n3.notify(...t3);
    }
    hasListeners(e3) {
      return this.eventHandlers.has(e3);
    }
    mount(t3) {
      if (this.instance) return;
      this.isSVG = Ea(t3) && !ts(t3), this.instance = t3;
      let { layoutId: n3, layout: r3, visualElement: i3 } = this.options;
      if (i3 && !i3.current && i3.mount(t3), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r3 || n3) && (this.isLayoutDirty = true), e2) {
        let n4, r4 = 0, i4 = () => this.root.updateBlockedByResize = false;
        N.read(() => {
          r4 = window.innerWidth;
        }), e2(t3, () => {
          let e3 = window.innerWidth;
          e3 !== r4 && (r4 = e3, this.root.updateBlockedByResize = true, n4 && n4(), n4 = Bc(i4, 250), Wc.hasAnimatedSinceResize && (Wc.hasAnimatedSinceResize = false, this.nodes.forEach(dl)));
        });
      }
      n3 && this.root.registerSharedNode(n3, this), this.options.animate !== false && i3 && (n3 || r3) && this.addEventListener(`didUpdate`, ({ delta: e3, hasLayoutChanged: t4, hasRelativeLayoutChanged: n4, layout: r4 }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        let a2 = this.options.transition || i3.getDefaultTransition() || bl, { onLayoutAnimationStart: o2, onLayoutAnimationComplete: s2 } = i3.getProps(), c2 = !this.targetLayout || !xc(this.targetLayout, r4), l2 = !t4 && n4;
        if (this.options.layoutRoot || this.resumeFrom || l2 || t4 && (c2 || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          let t5 = { ...Pi(a2, `layout`), onPlay: o2, onComplete: s2 };
          (i3.shouldReduceMotion || this.options.layoutRoot) && (t5.delay = 0, t5.type = false), this.startAnimation(t5), this.setAnimationOrigin(e3, l2, t5.path);
        } else t4 || dl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = r4;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let e3 = this.getStack();
      e3 && e3.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), P(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(ml), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e3 } = this.options;
      return e3 && e3.getProps().transformTemplate;
    }
    willUpdate(e3 = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Zc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      Xc(this), this.isLayoutDirty = true;
      for (let e4 = 0; e4 < this.path.length; e4++) {
        let t4 = this.path[e4];
        t4.shouldResetTransform = true, Xc(t4), (typeof t4.latestValues.x == `string` || typeof t4.latestValues.y == `string`) && (t4.isLayoutDirty = true), t4.updateScroll(`snapshot`), t4.options.layoutRoot && t4.willUpdate(false), t4.isAnimationBlocked && (t4.dragSnapshot ||= t4.measure(), this.dragAncestor = t4);
      }
      let { layoutId: t3, layout: n3 } = this.options;
      if (t3 === void 0 && !n3) return;
      let r3 = this.getTransformTemplate();
      this.prevTransformTemplateValue = r3 ? r3(this.latestValues, ``) : void 0, this.updateSnapshot(), e3 && this.notifyListeners(`willUpdate`);
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        let e4 = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = false, this.clearAllSnapshots(), e4 && this.nodes.forEach(al), this.nodes.forEach(il);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ol);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(cl), this.nodes.forEach(ll), this.nodes.forEach(ul), this.nodes.forEach($c), this.nodes.forEach(el)) : this.nodes.forEach(ol), this.clearAllSnapshots();
      let e3 = A.now();
      k.delta = ne(0, 1e3 / 60, e3 - k.timestamp), k.timestamp = e3, k.isProcessing = true, Zt.update.process(k), Zt.preRender.process(k), Zt.render.process(k), k.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, So.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(rl), this.sharedNodes.forEach(hl);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, N.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      N.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot && this.instance && (this.snapshot = this.measure(), this.snapshot && !nc(this.snapshot.measuredBox.x) && !nc(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let e4 = 0; e4 < this.path.length; e4++) this.path[e4].updateScroll();
      let e3 = this.layout;
      this.layout = this.measure(false), this.layoutCorrected ||= ps(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners(`measure`, this.layout.layoutBox);
      let { visualElement: t3 } = this.options;
      t3 && t3.notify(`LayoutMeasure`, this.layout.layoutBox, e3 ? e3.layoutBox : void 0);
    }
    updateScroll(e3 = `measure`) {
      let t3 = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e3 && (t3 = false), t3 && this.instance) {
        let t4 = r2(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: e3, isRoot: t4, offset: n2(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : t4 };
      }
    }
    resetTransform() {
      if (!i2) return;
      let e3 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      e3 && Xc(this);
      let t3 = this.projectionDelta && !_c(this.projectionDelta), n3 = this.getTransformTemplate(), r3 = n3 ? n3(this.latestValues, ``) : void 0, a2 = r3 !== this.prevTransformTemplateValue;
      e3 && this.instance && (t3 || eo(this.latestValues) || a2) && (i2(this.instance, r3), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(e3 = true) {
      let t3 = this.measurePageBox(), n3 = this.removeElementScroll(t3);
      return e3 && (n3 = this.removeTransform(n3)), Cl(n3), { animationId: this.root.animationId, measuredBox: t3, layoutBox: n3, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      let { visualElement: e3 } = this.options;
      if (!e3) return ps();
      let t3 = e3.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Tl))) {
        let { scroll: e4 } = this.root;
        e4 && (uo(t3.x, e4.offset.x), uo(t3.y, e4.offset.y));
      }
      return t3;
    }
    removeElementScroll(e3) {
      let t3 = ps();
      if (Xs(t3, e3), this.scroll?.wasRoot) return t3;
      for (let n3 = 0; n3 < this.path.length; n3++) {
        let r3 = this.path[n3], { scroll: i3, options: a2 } = r3;
        r3 !== this.root && i3 && a2.layoutScroll && (i3.wasRoot && Xs(t3, e3), uo(t3.x, i3.offset.x), uo(t3.y, i3.offset.y));
      }
      return t3;
    }
    applyTransform(e3, t3 = false, n3) {
      let r3 = n3 || ps();
      Xs(r3, e3);
      for (let e4 = 0; e4 < this.path.length; e4++) {
        let n4 = this.path[e4];
        !t3 && n4.options.layoutScroll && n4.scroll && n4 !== n4.root && (uo(r3.x, -n4.scroll.offset.x), uo(r3.y, -n4.scroll.offset.y)), eo(n4.latestValues) && mo(r3, n4.latestValues, n4.layout?.layoutBox);
      }
      return eo(this.latestValues) && mo(r3, this.latestValues, this.layout?.layoutBox), r3;
    }
    removeTransform(e3) {
      let t3 = ps();
      Xs(t3, e3);
      for (let e4 = 0; e4 < this.path.length; e4++) {
        let n3 = this.path[e4];
        if (!eo(n3.latestValues)) continue;
        let r3;
        n3.instance && ($a(n3.latestValues) && n3.updateSnapshot(), r3 = ps(), Xs(r3, n3.measurePageBox())), hc(t3, n3.latestValues, n3.snapshot?.layoutBox, r3);
      }
      return eo(this.latestValues) && hc(t3, this.latestValues), t3;
    }
    setTargetDelta(e3) {
      this.targetDelta = e3, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(e3) {
      this.options = { ...this.options, ...e3, crossfade: e3.crossfade === void 0 || e3.crossfade };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== k.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(e3 = false) {
      let t3 = this.getLead();
      this.isProjectionDirty ||= t3.isProjectionDirty, this.isTransformDirty ||= t3.isTransformDirty, this.isSharedProjectionDirty ||= t3.isSharedProjectionDirty;
      let n3 = !!this.resumingFrom || this !== t3;
      if (!(e3 || n3 && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      let { layout: r3, layoutId: i3 } = this.options;
      if (!this.layout || !(r3 || i3)) return;
      this.resolvedRelativeTargetAt = k.timestamp;
      let a2 = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== false && a2 && a2.layout ? this.createRelativeTarget(a2, this.layout.layoutBox, a2.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = ps(), this.targetWithTransforms = ps()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), sc(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, false, this.target) : Xs(this.target, this.layout.layoutBox), oo(this.target, this.targetDelta)) : Xs(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, this.options.layoutAnchor !== false && a2 && !!a2.resumingFrom == !!this.resumingFrom && !a2.options.layoutScroll && a2.target && this.animationProgress !== 1 ? this.createRelativeTarget(a2, this.target, a2.target) : this.relativeParent = this.relativeTarget = void 0), es.value && Gc.calculatedTargetDeltas++);
    }
    getClosestProjectingParent() {
      if (!(!this.parent || $a(this.parent.latestValues) || to(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(e3, t3, n3) {
      this.relativeParent = e3, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ps(), this.relativeTargetOrigin = ps(), lc(this.relativeTargetOrigin, t3, n3, this.options.layoutAnchor || void 0), Xs(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e3 = this.getLead(), t3 = !!this.resumingFrom || this !== e3, n3 = true;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n3 = false), t3 && (this.isSharedProjectionDirty || this.isTransformDirty) && (n3 = false), this.resolvedRelativeTargetAt === k.timestamp && (n3 = false), n3) return;
      let { layout: r3, layoutId: i3 } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r3 || i3)) return;
      Xs(this.layoutCorrected, this.layout.layoutBox);
      let a2 = this.treeScale.x, o2 = this.treeScale.y;
      lo(this.layoutCorrected, this.treeScale, this.path, t3), e3.layout && !e3.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e3.target = e3.layout.layoutBox, e3.targetWithTransforms = ps());
      let { target: s2 } = e3;
      s2 ? (!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Zs(this.prevProjectionDelta.x, this.projectionDelta.x), Zs(this.prevProjectionDelta.y, this.projectionDelta.y)), ac(this.projectionDelta, this.layoutCorrected, s2, this.latestValues), (this.treeScale.x !== a2 || this.treeScale.y !== o2 || !Cc(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners(`projectionUpdate`, s2)), es.value && Gc.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(e3 = true) {
      if (this.options.visualElement?.scheduleRender(), e3) {
        let e4 = this.getStack();
        e4 && e4.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ds(), this.projectionDelta = ds(), this.projectionDeltaWithTransform = ds();
    }
    setAnimationOrigin(e3, t3 = false, n3) {
      let r3 = this.snapshot, i3 = r3 ? r3.latestValues : {}, a2 = { ...this.latestValues }, o2 = ds();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t3;
      let s2 = ps(), c2 = (r3 ? r3.source : void 0) !== (this.layout ? this.layout.source : void 0), l2 = this.getStack(), u2 = !l2 || l2.members.length <= 1, d2 = !(!c2 || u2 || this.options.crossfade !== true || this.path.some(yl));
      this.animationProgress = 0;
      let f2, p2 = n3?.interpolateProjection(e3);
      this.mixTargetDelta = (t4) => {
        let n4 = t4 / 1e3, r4 = p2?.(n4);
        r4 ? (o2.x.translate = r4.x, o2.x.scale = M(e3.x.scale, 1, n4), o2.x.origin = e3.x.origin, o2.x.originPoint = e3.x.originPoint, o2.y.translate = r4.y, o2.y.scale = M(e3.y.scale, 1, n4), o2.y.origin = e3.y.origin, o2.y.originPoint = e3.y.originPoint) : (gl(o2.x, e3.x, n4), gl(o2.y, e3.y, n4)), this.setTargetDelta(o2), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (lc(s2, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), vl(this.relativeTarget, this.relativeTargetOrigin, s2, n4), f2 && yc(this.relativeTarget, f2) && (this.isProjectionDirty = false), f2 ||= ps(), Xs(f2, this.relativeTarget)), c2 && (this.animationValues = a2, jc(a2, i3, this.latestValues, n4, d2, u2)), r4 && r4.rotate !== void 0 && (this.animationValues ||= a2, this.animationValues.pathRotation = r4.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n4;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(e3) {
      this.notifyListeners(`animationStart`), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (P(this.pendingAnimation), void 0), this.pendingAnimation = N.update(() => {
        Wc.hasAnimatedSinceResize = true, this.motionValue ||= Mi(0), this.motionValue.jump(0, false), this.currentAnimation = Ic(this.motionValue, [0, 1e3], { ...e3, velocity: 0, isSync: true, onUpdate: (t3) => {
          this.mixTargetDelta(t3), e3.onUpdate && e3.onUpdate(t3);
        }, onComplete: () => {
          e3.onComplete && e3.onComplete(), this.completeAnimation();
        } }), Fn(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      let e3 = this.getStack();
      e3 && e3.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners(`animationComplete`);
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(qc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      let e3 = this.getLead(), { targetWithTransforms: t3, layout: n3, latestValues: r3 } = e3, { target: i3 } = e3;
      if (t3 && i3 && n3) {
        if (this !== e3 && this.layout && n3 && wl(this.options.animationType, this.layout.layoutBox, n3.layoutBox)) {
          i3 = this.target || ps();
          let t4 = nc(this.layout.layoutBox.x);
          i3.x.min = e3.target.x.min, i3.x.max = i3.x.min + t4;
          let n4 = nc(this.layout.layoutBox.y);
          i3.y.min = e3.target.y.min, i3.y.max = i3.y.min + n4;
        }
        Xs(t3, i3), mo(t3, r3), ac(this.projectionDeltaWithTransform, this.layoutCorrected, t3, r3);
      }
    }
    registerSharedNode(e3, t3) {
      this.sharedNodes.has(e3) || this.sharedNodes.set(e3, new Hc()), this.sharedNodes.get(e3).add(t3);
      let n3 = t3.options.initialPromotionConfig;
      t3.promote({ transition: n3 ? n3.transition : void 0, preserveFollowOpacity: n3 && n3.shouldPreserveFollowOpacity ? n3.shouldPreserveFollowOpacity(t3) : void 0 });
    }
    isLead() {
      let e3 = this.getStack();
      return !e3 || e3.lead === this;
    }
    getLead() {
      let { layoutId: e3 } = this.options;
      return e3 && this.getStack()?.lead || this;
    }
    getPrevLead() {
      let { layoutId: e3 } = this.options;
      return e3 ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e3 } = this.options;
      if (e3) return this.root.sharedNodes.get(e3);
    }
    promote({ needsReset: e3, transition: t3, preserveFollowOpacity: n3 } = {}) {
      let r3 = this.getStack();
      r3 && r3.promote(this, n3), e3 && (this.projectionDelta = void 0, this.needsReset = true), t3 && this.setOptions({ transition: t3 });
    }
    relegate() {
      let e3 = this.getStack();
      return e3 ? e3.relegate(this) : false;
    }
    resetSkewAndRotation() {
      let { visualElement: e3 } = this.options;
      if (!e3) return;
      let t3 = false, { latestValues: n3 } = e3;
      if ((n3.z || n3.rotate || n3.rotateX || n3.rotateY || n3.rotateZ || n3.skewX || n3.skewY) && (t3 = true), !t3) return;
      let r3 = {};
      n3.z && Yc(`z`, e3, r3, this.animationValues);
      for (let t4 = 0; t4 < Kc.length; t4++) Yc(`rotate${Kc[t4]}`, e3, r3, this.animationValues), Yc(`skew${Kc[t4]}`, e3, r3, this.animationValues);
      e3.render();
      for (let t4 in r3) e3.setStaticValue(t4, r3[t4]), this.animationValues && (this.animationValues[t4] = r3[t4]);
      e3.scheduleRender();
    }
    applyProjectionStyles(e3, t3) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e3.visibility = `hidden`;
        return;
      }
      let n3 = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, e3.visibility = ``, e3.opacity = ``, e3.pointerEvents = Vc(t3?.pointerEvents) || ``, e3.transform = n3 ? n3(this.latestValues, ``) : `none`;
        return;
      }
      let r3 = this.getLead();
      if (!this.projectionDelta || !this.layout || !r3.target) {
        this.options.layoutId && (e3.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e3.pointerEvents = Vc(t3?.pointerEvents) || ``), this.hasProjected && !eo(this.latestValues) && (e3.transform = n3 ? n3({}, ``) : `none`, this.hasProjected = false);
        return;
      }
      e3.visibility = ``;
      let i3 = r3.animationValues || r3.latestValues;
      this.applyTransformsToTarget();
      let a2 = Oc(this.projectionDeltaWithTransform, this.treeScale, i3);
      n3 && (a2 = n3(i3, a2)), e3.transform = a2;
      let { x: o2, y: s2 } = this.projectionDelta;
      e3.transformOrigin = `${o2.origin * 100}% ${s2.origin * 100}% 0`, e3.opacity = r3.animationValues ? r3 === this ? i3.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i3.opacityExit : r3 === this ? i3.opacity === void 0 ? `` : i3.opacity : i3.opacityExit === void 0 ? 0 : i3.opacityExit;
      for (let t4 in Ps) {
        if (i3[t4] === void 0) continue;
        let { correct: n4, applyTo: o3, isCSSVariable: s3 } = Ps[t4], c2 = a2 === `none` ? i3[t4] : n4(i3[t4], r3);
        if (o3) {
          let t5 = o3.length;
          for (let n5 = 0; n5 < t5; n5++) e3[o3[n5]] = c2;
        } else s3 ? this.options.visualElement.renderState.vars[t4] = c2 : e3[t4] = c2;
      }
      this.options.layoutId && (e3.pointerEvents = r3 === this ? Vc(t3?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((e3) => e3.currentAnimation?.stop()), this.root.nodes.forEach(il), this.root.sharedNodes.clear();
    }
  };
}
function $c(e2) {
  e2.updateLayout(), sl(e2);
}
function el(e2) {
  let t2 = e2.resumeFrom?.snapshot || e2.snapshot;
  if (e2.isLead() && e2.layout && t2 && e2.hasListeners(`didUpdate`)) {
    let { layoutBox: n2, measuredBox: r2 } = e2.layout, { animationType: i2 } = e2.options, a2 = t2.source !== e2.layout.source;
    if (i2 === `size`) wc((e3) => {
      let r3 = a2 ? t2.measuredBox[e3] : t2.layoutBox[e3], i3 = nc(r3);
      r3.min = n2[e3].min, r3.max = r3.min + i3;
    });
    else if (i2 === `x` || i2 === `y`) {
      let e3 = i2 === `x` ? `y` : `x`;
      Ys(a2 ? t2.measuredBox[e3] : t2.layoutBox[e3], n2[e3]);
    } else wl(i2, t2.layoutBox, n2) && wc((r3) => {
      let i3 = a2 ? t2.measuredBox[r3] : t2.layoutBox[r3], o3 = nc(n2[r3]);
      i3.max = i3.min + o3, e2.relativeTarget && !e2.currentAnimation && (e2.isProjectionDirty = true, e2.relativeTarget[r3].max = e2.relativeTarget[r3].min + o3);
    });
    let o2 = ds();
    ac(o2, n2, t2.layoutBox);
    let s2 = ds();
    a2 ? ac(s2, e2.applyTransform(r2, true), t2.measuredBox) : ac(s2, n2, t2.layoutBox);
    let c2 = !_c(o2), l2 = false;
    if (!e2.resumeFrom) {
      let r3 = e2.getClosestProjectingParent();
      if (r3 && !r3.resumeFrom) {
        let { snapshot: i3, layout: a3 } = r3;
        if (i3 && a3) {
          let o3 = e2.options.layoutAnchor || void 0, s3 = ps();
          lc(s3, t2.layoutBox, i3.layoutBox, o3);
          let c3 = ps();
          lc(c3, n2, a3.layoutBox, o3), xc(s3, c3) || (l2 = true), r3.options.layoutRoot && (e2.relativeTarget = c3, e2.relativeTargetOrigin = s3, e2.relativeParent = r3);
        }
      }
    }
    e2.notifyListeners(`didUpdate`, { layout: n2, snapshot: t2, delta: s2, layoutDelta: o2, hasLayoutChanged: c2, hasRelativeLayoutChanged: l2 });
  } else if (e2.isLead()) {
    let { onExitComplete: t3 } = e2.options;
    t3 && t3();
  }
  e2.options.transition = void 0;
}
function tl(e2) {
  es.value && Gc.nodes++, e2.parent && (e2.isProjecting() || (e2.isProjectionDirty = e2.parent.isProjectionDirty), e2.isSharedProjectionDirty ||= !!(e2.isProjectionDirty || e2.parent.isProjectionDirty || e2.parent.isSharedProjectionDirty), e2.isTransformDirty ||= e2.parent.isTransformDirty);
}
function nl(e2) {
  e2.isProjectionDirty = e2.isSharedProjectionDirty = e2.isTransformDirty = false;
}
function rl(e2) {
  e2.clearSnapshot();
}
function il(e2) {
  e2.clearMeasurements();
}
function al(e2) {
  e2.isLayoutDirty = true, e2.updateLayout();
}
function ol(e2) {
  e2.isLayoutDirty = false;
}
function sl(e2) {
  let { snapshot: t2, dragAncestor: n2 } = e2, r2 = n2?.layout;
  if (!t2 || !r2 || e2.resumeFrom || e2.isAnimationBlocked) return;
  let i2 = n2.dragSnapshot;
  wc((e3) => uo(t2.layoutBox[e3], r2.layoutBox[e3].min - i2.layoutBox[e3].min));
}
function cl(e2) {
  e2.isAnimationBlocked && e2.layout && !e2.isLayoutDirty && (e2.snapshot = e2.dragSnapshot || e2.layout, e2.isLayoutDirty = true);
}
function ll(e2) {
  e2.relativeTarget && e2.relativeParent?.isLayoutDirty && (e2.currentAnimation ? e2.isLayoutDirty = true : (e2.targetDelta = void 0, e2.removeRelativeTarget()));
}
function ul(e2) {
  let { visualElement: t2 } = e2.options;
  t2 && t2.getProps().onBeforeLayoutMeasure && t2.notify(`BeforeLayoutMeasure`), e2.resetTransform();
}
function dl(e2) {
  e2.finishAnimation(), e2.targetDelta = e2.relativeTarget = e2.target = void 0, e2.isProjectionDirty = true;
}
function fl(e2) {
  e2.resolveTargetDelta();
}
function pl(e2) {
  e2.calcProjection();
}
function ml(e2) {
  e2.resetSkewAndRotation();
}
function hl(e2) {
  e2.removeLeadSnapshot();
}
function gl(e2, t2, n2) {
  e2.translate = M(t2.translate, 0, n2), e2.scale = M(t2.scale, 1, n2), e2.origin = t2.origin, e2.originPoint = t2.originPoint;
}
function _l(e2, t2, n2, r2) {
  e2.min = M(t2.min, n2.min, r2), e2.max = M(t2.max, n2.max, r2);
}
function vl(e2, t2, n2, r2) {
  _l(e2.x, t2.x, n2.x, r2), _l(e2.y, t2.y, n2.y, r2);
}
function yl(e2) {
  return e2.animationValues && e2.animationValues.opacityExit !== void 0;
}
var bl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, V = (e2) => typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e2), xl = V(`applewebkit/`) && !V(`chrome/`) ? Math.round : ce;
function Sl(e2) {
  e2.min = xl(e2.min), e2.max = xl(e2.max);
}
function Cl(e2) {
  Sl(e2.x), Sl(e2.y);
}
function wl(e2, t2, n2) {
  return e2 === `position` || e2 === `preserve-aspect` && !rc(Sc(t2), Sc(n2), 0.2);
}
function Tl(e2) {
  return e2 !== e2.root && e2.scroll?.wasRoot;
}
var El = Qc({ attachResizeListener: (e2, t2) => Lc(e2, `resize`, t2), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0, y: document.documentElement.scrollTop || document.body?.scrollTop || 0 }), checkIsScrollRoot: () => true }), Dl = { current: void 0 }, Ol = Qc({ measureScroll: (e2) => ({ x: e2.scrollLeft, y: e2.scrollTop }), defaultParent: () => {
  if (!Dl.current) {
    let e2 = new El({});
    e2.mount(window), e2.setOptions({ layoutScroll: true }), Dl.current = e2;
  }
  return Dl.current;
}, resetTransform: (e2, t2) => {
  e2.style.transform = t2 === void 0 ? `none` : t2;
}, checkIsScrollRoot: (e2) => window.getComputedStyle(e2).position === `fixed` }), kl = (0, v.createContext)({ transformPagePoint: (e2) => e2, isStatic: false, reducedMotion: `never` });
function Al(e2, t2) {
  if (typeof e2 == `function`) return e2(t2);
  e2 != null && (e2.current = t2);
}
function jl(...e2) {
  return (t2) => {
    let n2 = false, r2 = e2.map((e3) => {
      let r3 = Al(e3, t2);
      return !n2 && typeof r3 == `function` && (n2 = true), r3;
    });
    if (n2) return () => {
      for (let t3 = 0; t3 < r2.length; t3++) {
        let n3 = r2[t3];
        typeof n3 == `function` ? n3() : Al(e2[t3], null);
      }
    };
  };
}
function Ml(...e2) {
  return v.useCallback(jl(...e2), e2);
}
var H = x(), Nl = class extends v.Component {
  getSnapshotBeforeUpdate(e2) {
    let t2 = this.props.childRef.current;
    if (Ta(t2) && e2.isPresent && !this.props.isPresent && this.props.pop !== false) {
      let e3 = t2.offsetParent, n2 = Ta(e3) && e3.offsetWidth || 0, r2 = Ta(e3) && e3.offsetHeight || 0, i2 = getComputedStyle(t2), a2 = this.props.sizeRef.current;
      a2.height = parseFloat(i2.height), a2.width = parseFloat(i2.width), a2.top = t2.offsetTop, a2.left = t2.offsetLeft, a2.right = n2 - a2.width - a2.left, a2.bottom = r2 - a2.height - a2.top, a2.direction = i2.direction;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function Pl({ children: e2, isPresent: t2, anchorX: n2, anchorY: r2, root: i2, pop: a2 }) {
  let o2 = (0, v.useId)(), s2 = (0, v.useRef)(null), c2 = (0, v.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: `ltr` }), { nonce: l2 } = (0, v.useContext)(kl), u2 = Ml(s2, a2 === false ? void 0 : e2.props?.ref ?? e2?.ref);
  return (0, v.useInsertionEffect)(() => {
    let { width: e3, height: u3, top: d2, left: f2, right: p2, bottom: m2, direction: h2 } = c2.current;
    if (t2 || a2 === false || !s2.current || !e3 || !u3) return;
    let g2 = h2 === `rtl`, _2 = n2 === `left` ? g2 ? `right: ${p2}` : `left: ${f2}` : g2 ? `left: ${f2}` : `right: ${p2}`, v2 = r2 === `bottom` ? `bottom: ${m2}` : `top: ${d2}`, y2 = s2.current;
    y2.dataset.motionPopId = o2;
    let b2 = y2.ownerDocument, x2 = b2.createElement(`style`);
    l2 && (x2.nonce = l2);
    let S2 = i2 ?? b2.head;
    return S2.appendChild(x2), x2.sheet && x2.sheet.insertRule(`
          [data-motion-pop-id="${o2}"] {
            position: absolute !important;
            width: ${e3}px !important;
            height: ${u3}px !important;
            ${_2}px !important;
            ${v2}px !important;
          }
        `), () => {
      s2.current?.removeAttribute(`data-motion-pop-id`), S2.contains(x2) && S2.removeChild(x2);
    };
  }, [t2]), (0, H.jsx)(Nl, { isPresent: t2, childRef: s2, sizeRef: c2, pop: a2, children: a2 === false ? e2 : v.cloneElement(e2, { ref: u2 }) });
}
var Fl = ({ children: e2, initial: t2, isPresent: n2, onExitComplete: r2, custom: i2, presenceAffectsLayout: a2, mode: o2, anchorX: s2, anchorY: c2, root: l2 }) => {
  let u2 = ee(Il), d2 = (0, v.useId)(), f2 = (0, v.useRef)(n2), p2 = (0, v.useRef)(r2);
  te(() => {
    f2.current = n2, p2.current = r2;
  });
  let m2 = true, h2 = (0, v.useMemo)(() => (m2 = false, { id: d2, initial: t2, isPresent: n2, custom: i2, onExitComplete: (e3) => {
    u2.set(e3, true);
    for (let e4 of u2.values()) if (!e4) return;
    r2 && r2();
  }, register: (e3) => (u2.set(e3, false), () => {
    u2.delete(e3), !f2.current && !u2.size && p2.current?.();
  }) }), [n2, u2, r2]);
  return a2 && m2 && (h2 = { ...h2 }), (0, v.useMemo)(() => {
    u2.forEach((e3, t3) => u2.set(t3, false));
  }, [n2]), v.useEffect(() => {
    !n2 && !u2.size && r2 && r2();
  }, [n2]), e2 = (0, H.jsx)(Pl, { pop: o2 === `popLayout`, isPresent: n2, anchorX: s2, anchorY: c2, root: l2, children: e2 }), (0, H.jsx)(C.Provider, { value: h2, children: e2 });
};
function Il() {
  return /* @__PURE__ */ new Map();
}
function Ll(e2 = true) {
  let t2 = (0, v.useContext)(C);
  if (t2 === null) return [true, null];
  let { isPresent: n2, onExitComplete: r2, register: i2 } = t2, a2 = (0, v.useId)();
  (0, v.useEffect)(() => {
    if (e2) return i2(a2);
  }, [e2]);
  let o2 = (0, v.useCallback)(() => e2 && r2 && r2(a2), [a2, r2, e2]);
  return !n2 && r2 ? [false, o2] : [true];
}
var Rl = (e2) => e2.key || ``;
function zl(e2) {
  let t2 = [];
  return v.Children.forEach(e2, (e3) => {
    (0, v.isValidElement)(e3) && t2.push(e3);
  }), t2;
}
var Bl = ({ children: e2, custom: t2, initial: n2 = true, onExitComplete: r2, presenceAffectsLayout: i2 = true, mode: a2 = `sync`, propagate: o2 = false, anchorX: s2 = `left`, anchorY: c2 = `top`, root: l2 }) => {
  let [u2, d2] = Ll(o2), f2 = (0, v.useMemo)(() => zl(e2), [e2]), p2 = o2 && !u2 ? [] : f2.map(Rl), m2 = (0, v.useRef)(true), h2 = ee(() => /* @__PURE__ */ new Map()), g2 = (0, v.useRef)(/* @__PURE__ */ new Set()), [_2, y2] = (0, v.useState)(f2), [b2, x2] = (0, v.useState)(f2);
  te(() => {
    o2 && !u2 && !b2.length && d2?.();
  }, [u2, o2, b2.length, d2]), te(() => {
    m2.current = false;
    for (let e3 = 0; e3 < b2.length; e3++) {
      let t3 = Rl(b2[e3]);
      p2.includes(t3) ? (h2.delete(t3), g2.current.delete(t3)) : h2.get(t3) !== true && h2.set(t3, false);
    }
  }, [b2, p2.length, p2.join(`-`)]);
  let C2 = [];
  if (f2 !== _2) {
    let e3 = [...f2], t3 = 0;
    for (let n3 of b2) {
      let r3 = p2.indexOf(Rl(n3));
      r3 === -1 ? (e3.splice(t3++, 0, n3), C2.push(n3)) : t3 = r3 + C2.length + 1;
    }
    return C2.every((e4) => h2.get(Rl(e4))) ? e3 = f2 : a2 === `wait` && (e3 = C2), x2(zl(e3)), y2(f2), null;
  }
  let { forceRender: w2 } = (0, v.useContext)(S);
  return (0, H.jsx)(H.Fragment, { children: b2.map((e3) => {
    let _3 = Rl(e3), v2 = o2 && !u2 ? false : f2 === b2 || p2.includes(_3);
    return (0, H.jsx)(Fl, { isPresent: v2, initial: !m2.current || n2 ? void 0 : false, custom: t2, presenceAffectsLayout: i2, mode: a2, root: l2, onExitComplete: v2 ? void 0 : () => {
      if (g2.current.has(_3)) return;
      if (h2.has(_3)) g2.current.add(_3), h2.set(_3, true);
      else return;
      let e4 = true;
      h2.forEach((t3) => {
        t3 || (e4 = false);
      }), e4 && (w2?.(), y2([]), o2 && d2?.(), r2 && r2());
    }, anchorX: s2, anchorY: c2, children: e3 }, _3);
  }) });
}, Vl = (0, v.createContext)({ strict: false }), Hl = { animation: [`animate`, `variants`, `whileHover`, `whileTap`, `exit`, `whileInView`, `whileFocus`, `whileDrag`], exit: [`exit`], drag: [`drag`, `dragControls`], focus: [`whileFocus`], hover: [`whileHover`, `onHoverStart`, `onHoverEnd`], tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`], pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`], inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`], layout: [`layout`, `layoutId`] }, Ul = false;
function Wl() {
  if (Ul) return;
  let e2 = {};
  for (let t2 in Hl) e2[t2] = { isEnabled: (e3) => Hl[t2].some((t3) => !!e3[t3]) };
  Os(e2), Ul = true;
}
function Gl() {
  return Wl(), ks();
}
function Kl(e2) {
  let t2 = Gl();
  for (let n2 in e2) t2[n2] = { ...t2[n2], ...e2[n2] };
  Os(t2);
}
function ql({ children: e2, ...t2 }) {
  let n2 = (0, v.useContext)(kl);
  t2 = { ...n2, ...t2 }, t2.transition = Ni(t2.transition, n2.transition), t2.isStatic = ee(() => t2.isStatic);
  let r2 = (0, v.useMemo)(() => t2, [JSON.stringify(t2.transition), t2.transformPagePoint, t2.reducedMotion, t2.skipAnimations, t2.isValidProp]);
  return (0, H.jsx)(kl.Provider, { value: r2, children: e2 });
}
var Jl = (0, v.createContext)({});
function Yl(e2, t2) {
  if (ys(e2)) {
    let { initial: t3, animate: n2 } = e2;
    return { initial: t3 === false || gs(t3) ? t3 : void 0, animate: gs(n2) ? n2 : void 0 };
  }
  return e2.inherit === false ? {} : t2;
}
function Xl(e2) {
  let { initial: t2, animate: n2 } = Yl(e2, (0, v.useContext)(Jl));
  return (0, v.useMemo)(() => ({ initial: t2, animate: n2 }), [Zl(t2), Zl(n2)]);
}
function Zl(e2) {
  return Array.isArray(e2) ? e2.join(` `) : e2;
}
var Ql = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function $l(e2, t2, n2) {
  for (let r2 in t2) !F(t2[r2]) && !Fs(r2, n2) && (e2[r2] = t2[r2]);
}
function eu({ transformTemplate: e2 }, t2) {
  return (0, v.useMemo)(() => {
    let n2 = Ql();
    return Ra(n2, t2, e2), Object.assign({}, n2.vars, n2.style);
  }, [t2]);
}
function tu(e2, t2) {
  let n2 = e2.style || {}, r2 = {};
  return $l(r2, n2, e2), Object.assign(r2, eu(e2, t2)), r2;
}
function nu(e2, t2) {
  let n2 = {}, r2 = tu(e2, t2);
  return e2.drag && e2.dragListener !== false && (n2.draggable = false, r2.userSelect = r2.WebkitUserSelect = r2.WebkitTouchCallout = `none`, r2.touchAction = e2.drag === true ? `none` : `pan-${e2.drag === `x` ? `y` : `x`}`), e2.tabIndex === void 0 && (e2.onTap || e2.onTapStart || e2.whileTap) && (n2.tabIndex = 0), n2.style = r2, n2;
}
var ru = () => ({ ...Ql(), attrs: {} });
function iu(e2, t2, n2, r2) {
  let i2 = (0, v.useMemo)(() => {
    let n3 = ru();
    return Ua(n3, t2, Bs(r2), e2.transformTemplate, e2.style), { ...n3.attrs, style: { ...n3.style } };
  }, [t2]);
  if (e2.style) {
    let t3 = {};
    $l(t3, e2.style, e2), i2.style = { ...t3, ...i2.style };
  }
  return i2;
}
var au = new Set(`animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));
function ou(e2) {
  return e2.startsWith(`while`) || e2.startsWith(`drag`) && e2 !== `draggable` || e2.startsWith(`layout`) || e2.startsWith(`onTap`) || e2.startsWith(`onPan`) || e2.startsWith(`onLayout`) || au.has(e2);
}
function U(e2, t2) {
  return e2.startsWith(`on`) ? !ou(e2) : t2?.(e2) ?? !ou(e2);
}
function su(e2, t2, n2, r2) {
  let i2 = {};
  for (let a2 in e2) (a2 !== `values` || typeof e2.values != `object`) && (F(e2[a2]) || (U(a2, r2) || n2 === true && ou(a2) || !t2 && !ou(a2) || e2.draggable && a2.startsWith(`onDrag`)) && (i2[a2] = e2[a2]));
  return i2;
}
var cu = [`animate`, `circle`, `defs`, `desc`, `ellipse`, `g`, `image`, `line`, `filter`, `marker`, `mask`, `metadata`, `path`, `pattern`, `polygon`, `polyline`, `rect`, `stop`, `switch`, `symbol`, `svg`, `text`, `tspan`, `use`, `view`];
function lu(e2) {
  return typeof e2 != `string` || e2.includes(`-`) ? false : !!(cu.indexOf(e2) > -1 || /[A-Z]/u.test(e2));
}
function uu(e2, t2, n2, { latestValues: r2 }, i2, a2 = false, o2, s2) {
  let c2 = (o2 ?? lu(e2) ? iu : nu)(t2, r2, i2, e2), l2 = su(t2, typeof e2 == `string`, a2, s2), u2 = e2 === v.Fragment ? {} : { ...l2, ...c2, ref: n2 }, { children: d2 } = t2, f2 = (0, v.useMemo)(() => F(d2) ? d2.get() : d2, [d2]);
  return (0, v.createElement)(e2, { ...u2, children: f2 });
}
function du({ scrapeMotionValuesFromProps: e2, createRenderState: t2 }, n2, r2, i2) {
  return { latestValues: fu(n2, r2, i2, e2), renderState: t2() };
}
function fu(e2, t2, n2, r2) {
  let i2 = {}, a2 = r2(e2, {});
  for (let e3 in a2) i2[e3] = Vc(a2[e3]);
  let { initial: o2, animate: s2 } = e2, c2 = ys(e2), l2 = bs(e2);
  t2 && l2 && !c2 && e2.inherit !== false && (o2 === void 0 && (o2 = t2.initial), s2 === void 0 && (s2 = t2.animate));
  let u2 = n2 ? n2.initial === false : false;
  u2 ||= o2 === false;
  let d2 = u2 ? s2 : o2;
  if (d2 && typeof d2 != `boolean` && !hs(d2)) {
    let t3 = Array.isArray(d2) ? d2 : [d2];
    for (let n3 = 0; n3 < t3.length; n3++) {
      let r3 = qi(e2, t3[n3]);
      if (r3) {
        let { transitionEnd: e3, transition: t4, ...n4 } = r3;
        for (let e4 in n4) {
          let t5 = n4[e4];
          if (Array.isArray(t5)) {
            let e5 = u2 ? t5.length - 1 : 0;
            t5 = t5[e5];
          }
          t5 !== null && (i2[e4] = t5);
        }
        for (let t5 in e3) i2[t5] = e3[t5];
      }
    }
  }
  return i2;
}
var pu = (e2) => (t2, n2) => {
  let r2 = (0, v.useContext)(Jl), i2 = (0, v.useContext)(C), a2 = () => du(e2, t2, r2, i2);
  return n2 ? a2() : ee(a2);
}, mu = pu({ scrapeMotionValuesFromProps: Is, createRenderState: Ql }), hu = pu({ scrapeMotionValuesFromProps: Hs, createRenderState: ru }), gu = Symbol.for(`motionComponentSymbol`);
function _u(e2, t2, n2) {
  let r2 = (0, v.useRef)(n2);
  (0, v.useInsertionEffect)(() => {
    r2.current = n2;
  });
  let i2 = (0, v.useRef)(null);
  return (0, v.useCallback)((n3) => {
    n3 && e2.onMount?.(n3), t2 && (n3 ? t2.mount(n3) : t2.unmount());
    let a2 = r2.current;
    if (typeof a2 == `function`) {
      if (n3) {
        let e3 = a2(n3);
        typeof e3 == `function` && (i2.current = e3);
      } else i2.current ? (i2.current(), i2.current = null) : a2(n3);
    } else a2 && (a2.current = n3);
  }, [t2]);
}
var vu = (0, v.createContext)({});
function yu(e2) {
  return e2 && typeof e2 == `object` && Object.prototype.hasOwnProperty.call(e2, `current`);
}
function bu(e2, t2, n2, r2, i2, a2) {
  let { visualElement: o2 } = (0, v.useContext)(Jl), s2 = (0, v.useContext)(Vl), c2 = (0, v.useContext)(C), l2 = (0, v.useContext)(kl), u2 = l2.reducedMotion, d2 = l2.skipAnimations, f2 = (0, v.useRef)(null), p2 = (0, v.useRef)(false);
  r2 ||= s2.renderer, !f2.current && r2 && (f2.current = r2(e2, { visualState: t2, parent: o2, props: n2, presenceContext: c2, blockInitialAnimation: c2 ? c2.initial === false : false, reducedMotionConfig: u2, skipAnimations: d2, isSVG: a2 }), p2.current && f2.current && (f2.current.manuallyAnimateOnMount = true));
  let m2 = f2.current, h2 = (0, v.useContext)(vu);
  m2 && !m2.projection && i2 && (m2.type === `html` || m2.type === `svg`) && xu(f2.current, n2, i2, h2);
  let g2 = (0, v.useRef)(false);
  (0, v.useInsertionEffect)(() => {
    m2 && g2.current && m2.update(n2, c2);
  });
  let _2 = n2[ia], y2 = (0, v.useRef)(!!_2 && typeof window < `u` && !window.MotionHandoffIsComplete?.(_2) && window.MotionHasOptimisedAnimation?.(_2));
  return te(() => {
    p2.current && m2 && (m2.animationState?.animateChanges(), m2.enteringChildren = void 0);
  }, []), te(() => {
    p2.current = true, m2 && (g2.current = true, window.MotionIsMounted = true, m2.updateFeatures(), m2.scheduleRenderMicrotask(), y2.current && m2.animationState && m2.animationState.animateChanges());
  }), (0, v.useEffect)(() => {
    m2 && (!y2.current && m2.animationState && m2.animationState.animateChanges(), y2.current &&= (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(_2);
    }), false), m2.enteringChildren = void 0);
  }), m2;
}
function xu(e2, t2, n2, r2) {
  let { layoutId: i2, layout: a2, drag: o2, dragConstraints: s2, layoutScroll: c2, layoutRoot: l2, layoutAnchor: u2, layoutCrossfade: d2 } = t2;
  e2.projection = new n2(e2.latestValues, t2[`data-framer-portal-id`] ? void 0 : W(e2.parent)), e2.projection.setOptions({ layoutId: i2, layout: a2, alwaysMeasureLayout: !!o2 || s2 && yu(s2), visualElement: e2, animationType: typeof a2 == `string` ? a2 : `both`, initialPromotionConfig: r2, crossfade: d2, layoutScroll: c2, layoutRoot: l2, layoutAnchor: u2 });
}
function W(e2) {
  if (e2) return e2.options.allowProjection === false ? W(e2.parent) : e2.projection;
}
function Su(e2, { forwardMotionProps: t2 = false, type: n2 } = {}, r2, i2) {
  r2 && Kl(r2);
  let a2 = n2 ? n2 === `svg` : lu(e2), o2 = a2 ? hu : mu;
  function s2(n3, s3) {
    let c3, l2 = { ...(0, v.useContext)(kl), ...n3, layoutId: Cu(n3) }, { isStatic: u2, isValidProp: d2 } = l2, f2 = Xl(n3), p2 = o2(n3, u2);
    if (!u2 && typeof window < `u`) {
      wu(l2, r2);
      let t3 = Tu(l2);
      c3 = t3.MeasureLayout, f2.visualElement = bu(e2, p2, l2, i2, t3.ProjectionNode, a2);
    }
    return (0, H.jsxs)(Jl.Provider, { value: f2, children: [c3 && f2.visualElement ? (0, H.jsx)(c3, { visualElement: f2.visualElement, ...l2 }) : null, uu(e2, n3, _u(p2, f2.visualElement, s3), p2, u2, t2, a2, d2)] });
  }
  s2.displayName = `motion.${typeof e2 == `string` ? e2 : `create(${e2.displayName ?? e2.name ?? ``})`}`;
  let c2 = (0, v.forwardRef)(s2);
  return c2[gu] = e2, c2;
}
function Cu({ layoutId: e2 }) {
  let t2 = (0, v.useContext)(S).id;
  return t2 && e2 !== void 0 ? t2 + `-` + e2 : e2;
}
function wu(e2, t2) {
  (0, v.useContext)(Vl).strict;
}
function Tu(e2) {
  let { drag: t2, layout: n2 } = Gl();
  if (!t2 && !n2) return {};
  let r2 = { ...t2, ...n2 };
  return { MeasureLayout: t2?.isEnabled(e2) || n2?.isEnabled(e2) ? r2.MeasureLayout : void 0, ProjectionNode: r2.ProjectionNode };
}
function Eu(e2, t2) {
  if (typeof Proxy > `u`) return Su;
  let n2 = /* @__PURE__ */ new Map(), r2 = (n3, r3) => Su(n3, r3, e2, t2);
  return new Proxy((e3, t3) => r2(e3, t3), { get: (i2, a2) => a2 === `create` ? r2 : (n2.has(a2) || n2.set(a2, Su(a2, void 0, e2, t2)), n2.get(a2)) });
}
var Du = (e2, t2) => t2.isSVG ?? lu(e2) ? new Us(t2) : new Rs(t2, { allowProjection: e2 !== v.Fragment }), Ou = class extends Ms {
  constructor(e2) {
    super(e2), e2.animationState ||= Ks(e2);
  }
  updateAnimationControlsSubscription() {
    let { animate: e2 } = this.node.getProps();
    hs(e2) && (this.unmountControls = e2.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    let { animate: e2 } = this.node.getProps(), { animate: t2 } = this.node.prevProps || {};
    e2 !== t2 && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}, ku = 0, Au = { animation: { Feature: Ou }, exit: { Feature: class extends Ms {
  constructor() {
    super(...arguments), this.id = ku++;
  }
  update() {
    let { presenceContext: e2, prevPresenceContext: t2, animationState: n2 } = this.node;
    if (!e2 || !n2) return;
    let { isPresent: r2, onExitComplete: i2 } = e2, a2 = t2?.isPresent;
    if (r2 === a2) return;
    if (r2 && a2 === false) {
      if (this.exit === true) {
        let { initial: e3 } = this.node.getProps();
        if (e3 && !Array.isArray(e3)) {
          let { transition: t3, transitionEnd: n3, ...r3 } = Ji(this.node, e3) || {};
          for (let e4 in r3) this.node.getValue(e4)?.jump(r3[e4]);
        }
        this.node.blockInitialAnimation = false, n2.reset(), n2.animateChanges();
      } else n2.setActive(`exit`, false);
      this.exit = void 0;
      return;
    }
    let o2 = this.exit = n2.setActive(`exit`, !r2);
    i2 && !r2 && o2.then(() => {
      this.exit === o2 && (this.exit = true, i2(this.id));
    });
  }
  mount() {
    let { register: e2, onExitComplete: t2 } = this.node.presenceContext || {};
    t2 && t2(this.id), e2 && (this.unmount = e2(this.id));
  }
  unmount() {
  }
} } };
function ju(e2) {
  return { point: { x: e2.pageX, y: e2.pageY } };
}
var Mu = (e2) => (t2) => jo(t2) && e2(t2, ju(t2));
function Nu(e2, t2, n2, r2) {
  return Lc(e2, t2, Mu(n2), r2);
}
var Pu = ({ current: e2 }) => e2 ? e2.ownerDocument.defaultView : null, Fu = (e2, t2) => Math.abs(e2 - t2);
function Iu(e2, t2) {
  let n2 = Fu(e2.x, t2.x), r2 = Fu(e2.y, t2.y);
  return Math.sqrt(n2 ** 2 + r2 ** 2);
}
var Lu = /* @__PURE__ */ new Set([`auto`, `scroll`]), Ru = class {
  constructor(e2, t2, { transformPagePoint: n2, contextWindow: r2 = window, dragSnapToOrigin: i2 = false, distanceThreshold: a2 = 3, element: o2 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e3) => {
      this.handleScroll(e3.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      this.hasPendingMove = false, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = zu(this.lastRawMoveEventInfo, this.transformPagePoint));
      let e3 = Vu(this.lastMoveEventInfo, this.history), t3 = this.startEvent !== null, n3 = Iu(e3.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!t3 && !n3) return;
      let { point: r3 } = e3;
      this.history.push({ ...r3, timestamp: A.now() });
      let { onStart: i3, onMove: a3 } = this.handlers;
      t3 || (i3 && i3(this.lastMoveEvent, e3), this.startEvent = this.lastMoveEvent), a3 && a3(this.lastMoveEvent, e3);
    }, this.handlePointerMove = (e3, t3) => {
      this.lastMoveEvent = e3, this.lastRawMoveEventInfo = t3, this.lastMoveEventInfo = zu(t3, this.transformPagePoint), this.hasPendingMove = true, N.update(this.updatePoint, true);
    }, this.handlePointerUp = (e3, t3) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      let { onEnd: n3, onSessionEnd: r3, resumeAnimation: i3 } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && i3 && i3(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      let a3 = Vu(e3.type === `pointercancel` ? this.lastMoveEventInfo : zu(t3, this.transformPagePoint), this.history);
      this.startEvent && n3 && n3(e3, a3), r3 && r3(e3, a3);
    }, !jo(e2)) return;
    this.dragSnapToOrigin = i2, this.handlers = t2, this.transformPagePoint = n2, this.distanceThreshold = a2, this.contextWindow = r2 || window;
    let s2 = zu(ju(e2), this.transformPagePoint), { point: c2 } = s2, { timestamp: l2 } = k;
    this.history = [{ ...c2, timestamp: l2 }];
    let { onSessionStart: u2 } = t2;
    u2 && u2(e2, Vu(s2, this.history));
    let d2 = { passive: true, capture: true };
    this.removeListeners = le(Nu(this.contextWindow, `pointermove`, this.handlePointerMove, d2), Nu(this.contextWindow, `pointerup`, this.handlePointerUp, d2), Nu(this.contextWindow, `pointercancel`, this.handlePointerUp, d2)), o2 && this.startScrollTracking(o2);
  }
  startScrollTracking(e2) {
    let t2 = e2.parentElement;
    for (; t2; ) {
      let e3 = getComputedStyle(t2);
      (Lu.has(e3.overflowX) || Lu.has(e3.overflowY)) && this.scrollPositions.set(t2, { x: t2.scrollLeft, y: t2.scrollTop }), t2 = t2.parentElement;
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }), window.addEventListener(`scroll`, this.onElementScroll, { capture: true }), window.addEventListener(`scroll`, this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener(`scroll`, this.onElementScroll, { capture: true }), window.removeEventListener(`scroll`, this.onWindowScroll);
    };
  }
  handleScroll(e2) {
    let t2 = this.scrollPositions.get(e2);
    if (!t2) return;
    let n2 = e2 === window, r2 = n2 ? { x: window.scrollX, y: window.scrollY } : { x: e2.scrollLeft, y: e2.scrollTop }, i2 = { x: r2.x - t2.x, y: r2.y - t2.y };
    (i2.x !== 0 || i2.y !== 0) && (n2 ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i2.x, this.lastMoveEventInfo.point.y += i2.y) : this.history.length > 0 && (this.history[0].x -= i2.x, this.history[0].y -= i2.y), this.scrollPositions.set(e2, r2), N.update(this.updatePoint, true));
  }
  updateHandlers(e2) {
    this.handlers = e2;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), P(this.updatePoint);
  }
};
function zu(e2, t2) {
  return t2 ? { point: t2(e2.point) } : e2;
}
function Bu(e2, t2) {
  return { x: e2.x - t2.x, y: e2.y - t2.y };
}
function Vu({ point: e2 }, t2) {
  return { point: e2, delta: Bu(e2, Uu(t2)), offset: Bu(e2, Hu(t2)), velocity: Wu(t2, 0.1) };
}
function Hu(e2) {
  return e2[0];
}
function Uu(e2) {
  return e2[e2.length - 1];
}
function Wu(e2, t2) {
  if (e2.length < 2) return { x: 0, y: 0 };
  let n2 = e2.length - 1, r2 = null, i2 = Uu(e2);
  for (; n2 >= 0 && (r2 = e2[n2], !(i2.timestamp - r2.timestamp > fe(t2))); ) n2--;
  if (!r2) return { x: 0, y: 0 };
  r2 === e2[0] && e2.length > 2 && i2.timestamp - r2.timestamp > fe(t2) * 2 && (r2 = e2[1]);
  let a2 = pe(i2.timestamp - r2.timestamp);
  if (a2 === 0) return { x: 0, y: 0 };
  let o2 = { x: (i2.x - r2.x) / a2, y: (i2.y - r2.y) / a2 };
  return o2.x === 1 / 0 && (o2.x = 0), o2.y === 1 / 0 && (o2.y = 0), o2;
}
function Gu(e2, { min: t2, max: n2 }, r2) {
  return t2 !== void 0 && e2 < t2 ? e2 = r2 ? M(t2, e2, r2.min) : Math.max(e2, t2) : n2 !== void 0 && e2 > n2 && (e2 = r2 ? M(n2, e2, r2.max) : Math.min(e2, n2)), e2;
}
function Ku(e2, t2, n2) {
  return { min: t2 === void 0 ? void 0 : e2.min + t2, max: n2 === void 0 ? void 0 : e2.max + n2 - (e2.max - e2.min) };
}
function qu(e2, { top: t2, left: n2, bottom: r2, right: i2 }) {
  return { x: Ku(e2.x, n2, i2), y: Ku(e2.y, t2, r2) };
}
function Ju(e2, t2) {
  let n2 = t2.min - e2.min, r2 = t2.max - e2.max;
  return t2.max - t2.min < e2.max - e2.min && ([n2, r2] = [r2, n2]), { min: n2, max: r2 };
}
function Yu(e2, t2) {
  return { x: Ju(e2.x, t2.x), y: Ju(e2.y, t2.y) };
}
function Xu(e2, t2) {
  let n2 = 0.5, r2 = nc(e2), i2 = nc(t2);
  return i2 > r2 ? n2 = ue(t2.min, t2.max - r2, e2.min) : r2 > i2 && (n2 = ue(e2.min, e2.max - i2, t2.min)), ne(0, 1, n2);
}
function Zu(e2, t2) {
  let n2 = {};
  return t2.min !== void 0 && (n2.min = t2.min - e2.min), t2.max !== void 0 && (n2.max = t2.max - e2.min), n2;
}
var Qu = 0.35;
function $u(e2 = Qu) {
  return e2 === false ? e2 = 0 : e2 === true && (e2 = Qu), { x: ed(e2, `left`, `right`), y: ed(e2, `top`, `bottom`) };
}
function ed(e2, t2, n2) {
  return { min: G(e2, t2), max: G(e2, n2) };
}
function G(e2, t2) {
  return typeof e2 == `number` ? e2 : e2[t2] || 0;
}
var K = /* @__PURE__ */ new WeakMap(), q = class {
  constructor(e2) {
    this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = ps(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e2;
  }
  start(e2, { snapToCursor: t2 = false, distanceThreshold: n2 } = {}) {
    let { presenceContext: r2 } = this.visualElement;
    if (r2 && r2.isPresent === false) return;
    let i2 = (e3) => {
      t2 && this.snapToCursor(e3), this.stopAnimation();
    }, a2 = (e3, t3) => {
      let { drag: n3, dragPropagation: r3, onDragStart: i3 } = this.getProps();
      if (n3 && !r3 && (this.openDragLock && this.openDragLock(), this.openDragLock = Eo(n3), !this.openDragLock)) return;
      this.latestPointerEvent = e3, this.latestPanInfo = t3, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), wc((e4) => {
        let t4 = this.getAxisMotionValue(e4).get() || 0;
        if (rt.test(t4)) {
          let { projection: n4 } = this.visualElement;
          if (n4 && n4.layout) {
            let r4 = n4.layout.layoutBox[e4];
            r4 && (t4 = nc(r4) * (parseFloat(t4) / 100));
          }
        }
        this.originPoint[e4] = t4;
      }), i3 && N.update(() => i3(e3, t3), false, true), na(this.visualElement, `transform`);
      let { animationState: a3 } = this.visualElement;
      a3 && a3.setActive(`whileDrag`, true);
    }, o2 = (e3, t3) => {
      this.latestPointerEvent = e3, this.latestPanInfo = t3;
      let { dragPropagation: n3, dragDirectionLock: r3, onDirectionLock: i3, onDrag: a3 } = this.getProps();
      if (!n3 && !this.openDragLock) return;
      let { offset: o3 } = t3;
      r3 && this.currentDirection === null ? (this.currentDirection = nd(o3), this.currentDirection !== null && i3 && i3(this.currentDirection)) : (this.updateAxis(`x`, t3.point, o3), this.updateAxis(`y`, t3.point, o3), this.visualElement.render(), a3 && N.update(() => a3(e3, t3), false, true));
    }, s2 = (e3, t3) => {
      this.latestPointerEvent = e3, this.latestPanInfo = t3, this.stop(e3, t3), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c2 = () => {
      let { dragSnapToOrigin: e3 } = this.getProps();
      (e3 || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: l2 } = this.getProps();
    this.panSession = new Ru(e2, { onSessionStart: i2, onStart: a2, onMove: o2, onSessionEnd: s2, resumeAnimation: c2 }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: l2, distanceThreshold: n2, contextWindow: Pu(this.visualElement), element: this.visualElement.current });
  }
  stop(e2, t2) {
    let n2 = e2 || this.latestPointerEvent, r2 = t2 || this.latestPanInfo, i2 = this.isDragging;
    if (this.cancel(), !i2 || !r2 || !n2) return;
    let { velocity: a2 } = r2;
    this.startAnimation(a2);
    let { onDragEnd: o2 } = this.getProps();
    o2 && N.postRender(() => o2(n2, r2));
  }
  cancel() {
    this.isDragging = false;
    let { projection: e2, animationState: t2 } = this.visualElement;
    e2 && (e2.isAnimationBlocked = false), this.endPanSession();
    let { dragPropagation: n2 } = this.getProps();
    !n2 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t2 && t2.setActive(`whileDrag`, false);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(e2, t2, n2) {
    let { drag: r2 } = this.getProps();
    if (!n2 || !td(e2, r2, this.currentDirection)) return;
    let i2 = this.getAxisMotionValue(e2), a2 = this.originPoint[e2] + n2[e2];
    this.constraints && this.constraints[e2] && (a2 = Gu(a2, this.constraints[e2], this.elastic[e2])), i2.set(a2);
  }
  resolveConstraints() {
    let { dragConstraints: e2, dragElastic: t2 } = this.getProps(), n2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout, r2 = this.constraints;
    e2 && yu(e2) ? this.constraints ||= this.resolveRefConstraints() : this.constraints = e2 && n2 ? qu(n2.layoutBox, e2) : false, this.elastic = $u(t2), r2 !== this.constraints && !yu(e2) && n2 && this.constraints && !this.hasMutatedConstraints && wc((e3) => {
      this.constraints !== false && this.getAxisMotionValue(e3) && (this.constraints[e3] = Zu(n2.layoutBox[e3], this.constraints[e3]));
    });
  }
  resolveRefConstraints() {
    let { dragConstraints: e2, onMeasureDragConstraints: t2 } = this.getProps();
    if (!e2 || !yu(e2)) return false;
    let n2 = e2.current, { projection: r2 } = this.visualElement;
    if (!r2 || !r2.layout) return false;
    r2.root && (r2.root.scroll = void 0, r2.root.updateScroll());
    let i2 = go(n2, r2.root, this.visualElement.getTransformPagePoint()), a2 = Yu(r2.layout.layoutBox, i2);
    if (t2) {
      let e3 = t2(Xa(a2));
      this.hasMutatedConstraints = !!e3, e3 && (a2 = Ya(e3));
    }
    return a2;
  }
  startAnimation(e2) {
    let { drag: t2, dragMomentum: n2, dragElastic: r2, dragTransition: i2, dragSnapToOrigin: a2, onDragTransitionEnd: o2 } = this.getProps(), s2 = this.constraints || {}, c2 = wc((o3) => {
      if (!td(o3, t2, this.currentDirection)) return;
      let c3 = s2 && s2[o3] || {};
      (a2 === true || a2 === o3) && (c3 = { min: 0, max: 0 });
      let l2 = r2 ? 200 : 1e6, u2 = r2 ? 40 : 1e7, d2 = { type: `inertia`, velocity: n2 ? e2[o3] : 0, bounceStiffness: l2, bounceDamping: u2, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i2, ...c3 };
      return this.startAxisValueAnimation(o3, d2);
    });
    return Promise.all(c2).then(o2);
  }
  startAxisValueAnimation(e2, t2) {
    let n2 = this.getAxisMotionValue(e2);
    return na(this.visualElement, e2), n2.start(Hi(e2, n2, 0, t2, this.visualElement, false));
  }
  stopAnimation() {
    wc((e2) => this.getAxisMotionValue(e2).stop());
  }
  getAxisMotionValue(e2) {
    let t2 = `_drag${e2.toUpperCase()}`;
    return this.visualElement.getProps()[t2] || this.visualElement.getValue(e2, this.visualElement.latestValues[e2] ?? 0);
  }
  snapToCursor({ clientX: e2, clientY: t2 }) {
    let { drag: n2 } = this.getProps(), r2 = { x: e2, y: t2 }, i2 = this.visualElement.getTransformPagePoint()?.(r2) || r2, a2 = this.visualElement.measureViewportBox();
    wc((e3) => {
      if (!td(e3, n2, this.currentDirection)) return;
      let t3 = this.getAxisMotionValue(e3), { min: r3, max: o2 } = a2[e3];
      t3.set((t3.get() || 0) + i2[e3] - M(r3, o2, 0.5));
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    let { drag: e2, dragConstraints: t2 } = this.getProps(), { projection: n2 } = this.visualElement;
    if (!yu(t2) || !n2 || !this.constraints) return;
    this.stopAnimation();
    let r2 = this.constraints, i2 = { x: 0, y: 0 };
    wc((e3) => {
      let t3 = this.getAxisMotionValue(e3).get();
      i2[e3] = Xu({ min: t3, max: t3 }, r2[e3]);
    });
    let { transformTemplate: a2 } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a2 ? a2({}, ``) : `none`, n2.root && n2.root.updateScroll(), n2.updateLayout(), this.constraints = false, this.resolveConstraints(), wc((t3) => {
      let n3 = this.getAxisMotionValue(t3);
      if (!td(t3, e2, null) || !n3.get()) return;
      let { min: r3, max: a3 } = this.constraints[t3];
      n3.set(M(r3, a3, i2[t3]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    K.set(this.visualElement, this);
    let e2 = this.visualElement.current, t2 = Nu(e2, `pointerdown`, (t3) => {
      let { drag: n3, dragListener: r3 = true } = this.getProps(), i3 = t3.target, a3 = i3 !== e2 && Fo(i3);
      n3 && r3 && !a3 && this.start(t3);
    }), n2, r2 = () => {
      let { dragConstraints: t3 } = this.getProps();
      yu(t3) && t3.current && (this.constraints = this.resolveRefConstraints(), n2 ||= Y(e2, t3.current, () => this.scalePositionWithinConstraints()));
    }, { projection: i2 } = this.visualElement, a2 = i2.addEventListener(`measure`, r2);
    i2 && !i2.layout && (i2.root && i2.root.updateScroll(), i2.updateLayout()), N.read(r2);
    let o2 = Lc(window, `resize`, () => this.scalePositionWithinConstraints()), s2 = i2.addEventListener(`didUpdate`, (({ delta: e3, hasLayoutChanged: t3 }) => {
      this.isDragging && t3 && (wc((t4) => {
        let n3 = this.getAxisMotionValue(t4);
        n3 && (this.originPoint[t4] += e3[t4].translate, n3.set(n3.get() + e3[t4].translate));
      }), this.visualElement.render());
    }));
    return () => {
      o2(), t2(), a2(), s2 && s2(), n2 && n2();
    };
  }
  getProps() {
    let e2 = this.visualElement.getProps(), { drag: t2 = false, dragDirectionLock: n2 = false, dragPropagation: r2 = false, dragConstraints: i2 = false, dragElastic: a2 = Qu, dragMomentum: o2 = true } = e2;
    return { ...e2, drag: t2, dragDirectionLock: n2, dragPropagation: r2, dragConstraints: i2, dragElastic: a2, dragMomentum: o2 };
  }
};
function J(e2) {
  let t2 = true;
  return () => {
    t2 ? t2 = false : e2();
  };
}
function Y(e2, t2, n2) {
  let r2 = B(e2, J(n2)), i2 = B(t2, J(n2));
  return () => {
    r2(), i2();
  };
}
function td(e2, t2, n2) {
  return (t2 === true || t2 === e2) && (n2 === null || n2 === e2);
}
function nd(e2, t2 = 10) {
  let n2 = null;
  return Math.abs(e2.y) > t2 ? n2 = `y` : Math.abs(e2.x) > t2 && (n2 = `x`), n2;
}
var rd = class extends Ms {
  constructor(e2) {
    super(e2), this.removeGroupControls = ce, this.removeListeners = ce, this.controls = new q(e2);
  }
  mount() {
    let { dragControls: e2 } = this.node.getProps();
    e2 && (this.removeGroupControls = e2.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ce;
  }
  update() {
    let { dragControls: e2 } = this.node.getProps(), { dragControls: t2 } = this.node.prevProps || {};
    e2 !== t2 && (this.removeGroupControls(), e2 && (this.removeGroupControls = e2.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}, id = (e2) => (t2, n2) => {
  e2 && N.update(() => e2(t2, n2), false, true);
}, ad = class extends Ms {
  constructor() {
    super(...arguments), this.removePointerDownListener = ce;
  }
  onPointerDown(e2) {
    this.session = new Ru(e2, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: Pu(this.node) });
  }
  createPanHandlers() {
    let { onPanSessionStart: e2, onPanStart: t2, onPan: n2, onPanEnd: r2 } = this.node.getProps();
    return { onSessionStart: id(e2), onStart: id(t2), onMove: id(n2), onEnd: (e3, t3) => {
      delete this.session, r2 && N.postRender(() => r2(e3, t3));
    } };
  }
  mount() {
    this.removePointerDownListener = Nu(this.node.current, `pointerdown`, (e2) => this.onPointerDown(e2));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}, X = false, od = class extends v.Component {
  componentDidMount() {
    let { visualElement: e2, layoutGroup: t2, switchLayoutGroup: n2, layoutId: r2 } = this.props, { projection: i2 } = e2;
    i2 && (t2.group && t2.group.add(i2), n2 && n2.register && r2 && n2.register(i2), X && i2.root.didUpdate(), i2.addEventListener(`animationComplete`, () => {
      this.safeToRemove();
    }), i2.setOptions({ ...i2.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })), Wc.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(e2) {
    let { layoutDependency: t2, visualElement: n2, drag: r2, isPresent: i2 } = this.props, { projection: a2 } = n2;
    return a2 && (a2.isPresent = i2, e2.layoutDependency !== t2 && a2.setOptions({ ...a2.options, layoutDependency: t2 }), X = true, r2 || e2.layoutDependency !== t2 || t2 === void 0 || e2.isPresent !== i2 ? a2.willUpdate() : this.safeToRemove(), e2.isPresent !== i2 && (i2 ? a2.promote() : a2.relegate() || N.postRender(() => {
      let e3 = a2.getStack();
      (!e3 || !e3.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    let { visualElement: e2, layoutAnchor: t2 } = this.props, { projection: n2 } = e2;
    n2 && (n2.options.layoutAnchor = t2, n2.root.didUpdate(), So.postRender(() => {
      !n2.currentAnimation && n2.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    let { visualElement: e2, layoutGroup: t2, switchLayoutGroup: n2 } = this.props, { projection: r2 } = e2;
    X = true, r2 && (r2.scheduleCheckAfterUnmount(), t2 && t2.group && t2.group.remove(r2), n2 && n2.deregister && n2.deregister(r2));
  }
  safeToRemove() {
    let { safeToRemove: e2 } = this.props;
    e2 && e2();
  }
  render() {
    return null;
  }
};
function sd(e2) {
  let [t2, n2] = Ll(), r2 = (0, v.useContext)(S);
  return (0, H.jsx)(od, { ...e2, layoutGroup: r2, switchLayoutGroup: (0, v.useContext)(vu), isPresent: t2, safeToRemove: n2 });
}
var cd = { pan: { Feature: ad }, drag: { Feature: rd, ProjectionNode: Ol, MeasureLayout: sd } };
function ld(e2, t2, n2) {
  let { props: r2 } = e2;
  e2.animationState && r2.whileHover && e2.animationState.setActive(`whileHover`, n2 === `Start`);
  let i2 = r2[`onHover` + n2];
  i2 && N.postRender(() => i2(t2, ju(t2)));
}
var ud = class extends Ms {
  mount() {
    let { current: e2 } = this.node;
    e2 && (this.unmount = ko(e2, (e3, t2) => (ld(this.node, t2, `Start`), (e4) => ld(this.node, e4, `End`))));
  }
  unmount() {
  }
}, dd = class extends Ms {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let e2 = false;
    try {
      e2 = this.node.current.matches(`:focus-visible`);
    } catch {
      e2 = true;
    }
    e2 && this.node.animationState && (this.node.animationState.setActive(`whileFocus`, true), this.isActive = true);
  }
  onBlur() {
    this.isActive && this.node.animationState && (this.node.animationState.setActive(`whileFocus`, false), this.isActive = false);
  }
  mount() {
    this.unmount = le(Lc(this.node.current, `focus`, () => this.onFocus()), Lc(this.node.current, `blur`, () => this.onBlur()));
  }
  unmount() {
  }
};
function fd(e2, t2, n2) {
  let { props: r2 } = e2;
  if (e2.current instanceof HTMLButtonElement && e2.current.disabled) return;
  e2.animationState && r2.whileTap && e2.animationState.setActive(`whileTap`, n2 === `Start`);
  let i2 = r2[`onTap` + (n2 === `End` ? `` : n2)];
  i2 && N.postRender(() => i2(t2, ju(t2)));
}
var pd = class extends Ms {
  mount() {
    let { current: e2 } = this.node;
    if (!e2) return;
    let { globalTapTarget: t2, propagate: n2 } = this.node.props;
    this.unmount = Ho(e2, (e3, t3) => (fd(this.node, t3, `Start`), (e4, { success: t4 }) => fd(this.node, e4, t4 ? `End` : `Cancel`)), { useGlobalTarget: t2, stopPropagation: n2?.tap === false });
  }
  unmount() {
  }
}, md = /* @__PURE__ */ new WeakMap(), hd = /* @__PURE__ */ new WeakMap(), gd = (e2) => {
  let t2 = md.get(e2.target);
  t2 && t2(e2);
}, _d = (e2) => {
  e2.forEach(gd);
};
function vd({ root: e2, ...t2 }) {
  let n2 = e2 || document;
  hd.has(n2) || hd.set(n2, {});
  let r2 = hd.get(n2), i2 = JSON.stringify(t2);
  return r2[i2] || (r2[i2] = new IntersectionObserver(_d, { root: e2, ...t2 })), r2[i2];
}
function yd(e2, t2, n2) {
  let r2 = vd(t2);
  return md.set(e2, n2), r2.observe(e2), () => {
    md.delete(e2), r2.unobserve(e2);
  };
}
var bd = { some: 0, all: 1 }, xd = class extends Ms {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  startObserver() {
    this.stopObserver?.();
    let { viewport: e2 = {} } = this.node.getProps(), { root: t2, margin: n2, amount: r2 = `some`, once: i2 } = e2, a2 = { root: t2 ? t2.current : void 0, rootMargin: n2, threshold: typeof r2 == `number` ? r2 : bd[r2] }, o2 = (e3) => {
      let { isIntersecting: t3 } = e3;
      if (this.isInView === t3 || (this.isInView = t3, i2 && !t3 && this.hasEnteredView)) return;
      t3 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive(`whileInView`, t3);
      let { onViewportEnter: n3, onViewportLeave: r3 } = this.node.getProps(), a3 = t3 ? n3 : r3;
      a3 && a3(e3);
    };
    this.stopObserver = yd(this.node.current, a2, o2);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > `u`) return;
    let { props: e2, prevProps: t2 } = this.node;
    [`amount`, `margin`, `root`].some(Sd(e2, t2)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = false, this.isInView = false;
  }
};
function Sd({ viewport: e2 = {} }, { viewport: t2 = {} } = {}) {
  return (n2) => e2[n2] !== t2[n2];
}
var Cd = { inView: { Feature: xd }, tap: { Feature: pd }, focus: { Feature: dd }, hover: { Feature: ud } }, wd = { layout: { ProjectionNode: Ol, MeasureLayout: sd } }, Td = Eu({ ...Au, ...Cd, ...cd, ...wd }, Du), Ed = 50, Dd = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 }), Od = () => ({ time: 0, x: Dd(), y: Dd() }), kd = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }, Ad = /* @__PURE__ */ new WeakMap();
function jd(e2, t2) {
  let n2 = e2 === document.scrollingElement, r2 = n2 && document.body || e2, i2 = Ad.get(r2);
  i2 || Ad.set(r2, i2 = getComputedStyle(r2));
  let { writingMode: a2, flexDirection: o2 } = i2, s2 = t2 === `x` !== /^[vs]/.test(a2);
  return (s2 ? i2.direction === `rtl` != (a2 === `sideways-lr`) : a2.endsWith(`rl`)) !== (!n2 && i2.display.includes(`flex`) && (s2 === (o2[0] === `c`) ? i2.flexWrap : o2).endsWith(`reverse`));
}
function Md(e2, t2, n2, r2) {
  let i2 = n2[t2], { length: a2, position: o2 } = kd[t2], s2 = i2.current, c2 = n2.time, l2 = e2[`scroll${o2}`];
  i2.current = jd(e2, t2) ? -l2 || 0 : l2, i2.containerLength = e2[`client${a2}`], i2.targetLength = e2[`scroll${a2}`], i2.scrollLength = i2.targetLength - i2.containerLength, i2.offset.length = 0, i2.offset[0] = 0, i2.offset[1] = i2.scrollLength, i2.progress = ne(0, 1, ue(0, i2.scrollLength, i2.current));
  let u2 = r2 - c2;
  i2.velocity = u2 > Ed ? 0 : me(i2.current - s2, u2);
}
function Nd(e2, t2, n2) {
  for (let r2 in kd) Md(e2, r2, t2, n2);
  t2.time = n2;
}
var Pd = { start: 0, center: 0.5, end: 1 };
function Fd(e2, t2, n2 = 0) {
  let r2 = 0;
  if (e2 in Pd && (e2 = Pd[e2]), typeof e2 == `string`) {
    let t3 = parseFloat(e2);
    e2.endsWith(`px`) ? r2 = t3 : e2.endsWith(`%`) ? e2 = t3 / 100 : e2.endsWith(`vw`) ? r2 = t3 / 100 * document.documentElement.clientWidth : e2.endsWith(`vh`) ? r2 = t3 / 100 * document.documentElement.clientHeight : e2 = t3;
  }
  return typeof e2 == `number` && (r2 = t2 * e2), n2 + r2;
}
var Id = [0, 0];
function Ld(e2, t2, n2, r2) {
  let i2 = Array.isArray(e2) ? e2 : Id, a2 = 0, o2 = 0;
  return typeof e2 == `number` ? i2 = [e2, e2] : typeof e2 == `string` && (e2 = e2.trim(), i2 = e2.includes(` `) ? e2.split(` `) : [e2, Pd[e2] ? e2 : `0`]), a2 = Fd(i2[0], n2, r2), o2 = Fd(i2[1], t2), a2 - o2;
}
var Rd = { All: [[0, 0], [1, 1]] };
function zd(e2, t2) {
  let n2 = e2.length - 1;
  if (n2 < 1) return 0;
  let r2 = e2[0] > e2[n2], i2 = (t3) => e2[r2 ? n2 - t3 : t3];
  if (e2[0] === e2[1] && t2 < i2(0)) return +!!r2;
  let a2 = 0;
  for (; a2 < n2 - 1 && t2 >= i2(a2 + 1); ) a2++;
  let o2 = (a2 + ue(i2(a2), i2(a2 + 1), t2)) / n2;
  return r2 ? 1 - o2 : o2;
}
function Bd(e2, t2) {
  let { offset: n2 = Rd.All, axis: r2 = `y` } = t2, i2 = e2[r2];
  i2.offset.length = 0;
  let a2 = n2.length;
  for (let e3 = 0; e3 < a2; e3++) i2.offset[e3] = Ld(n2[e3], i2.containerLength, i2.targetLength, i2.targetOffset);
  i2.progress = ne(0, 1, zd(i2.offset, i2.current));
}
function Vd(e2, t2) {
  let n2 = { x: 0, y: 0 }, r2 = e2;
  for (; r2 && r2 !== t2; ) if (Ta(r2)) n2.x += r2.offsetLeft, n2.y += r2.offsetTop, r2 = r2.offsetParent;
  else if (r2.tagName === `svg`) {
    let e3 = r2.getBoundingClientRect();
    r2 = r2.parentElement;
    let t3 = r2.getBoundingClientRect();
    n2.x += e3.left - t3.left, n2.y += e3.top - t3.top;
  } else if (r2 instanceof SVGGraphicsElement) {
    let { x: e3, y: t3 } = r2.getBBox();
    n2.x += e3, n2.y += t3;
    let i2 = null, a2 = r2.parentNode;
    for (; !i2; ) a2.tagName === `svg` && (i2 = a2), a2 = r2.parentNode;
    r2 = i2;
  } else break;
  return n2;
}
function Hd(e2) {
  return `getBBox` in e2 && e2.tagName !== `svg` ? e2.getBBox() : { width: e2.clientWidth, height: e2.clientHeight };
}
function Ud(e2, t2, n2, r2 = {}) {
  let { target: i2 } = r2, a2 = i2 || r2.offset;
  return { measure: (t3) => {
    if (a2) {
      n2.time = t3.time;
      for (let e3 in kd) {
        let r3 = e3, { offset: i3 } = n2[r3];
        Object.assign(n2[r3], t3[r3]), n2[r3].offset = i3;
      }
      if (i2 && i2 !== e2) {
        let t4 = Vd(i2, e2), r3 = Hd(i2);
        n2.x.targetOffset = t4.x, n2.y.targetOffset = t4.y, n2.x.targetLength = r3.width, n2.y.targetLength = r3.height;
      }
      Bd(n2, r2);
    }
  }, notify: (e3) => t2(a2 ? n2 : e3) };
}
var Wd = /* @__PURE__ */ new WeakMap(), Gd = /* @__PURE__ */ new WeakMap(), Kd = /* @__PURE__ */ new WeakMap(), qd = /* @__PURE__ */ new WeakMap(), Jd = (e2) => e2 === document.scrollingElement ? window : e2;
function Yd(e2, { container: t2 = document.scrollingElement, trackContentSize: n2 = false, ...r2 } = {}) {
  if (!t2) return ce;
  let i2 = Kd.get(t2);
  i2 || (i2 = /* @__PURE__ */ new Set(), Kd.set(t2, i2));
  let a2 = Ud(t2, e2, Od(), r2);
  if (i2.add(a2), !Wd.has(t2)) {
    let e3 = Od(), n3 = () => {
      Nd(t2, e3, k.timestamp);
      for (let t3 of i2) t3.measure(e3);
      N.preUpdate(r3);
    }, r3 = () => {
      for (let t3 of i2) t3.notify(e3);
    }, a3 = () => N.read(n3);
    Wd.set(t2, a3);
    let o3 = Jd(t2);
    window.addEventListener(`resize`, a3), t2 !== document.documentElement && Gd.set(t2, B(t2, a3)), o3.addEventListener(`scroll`, a3), a3();
  }
  if (n2 && !qd.has(t2)) {
    let e3 = Wd.get(t2), n3 = { width: t2.scrollWidth, height: t2.scrollHeight }, r3 = N.read(() => {
      let r4 = t2.scrollWidth, i3 = t2.scrollHeight;
      (n3.width !== r4 || n3.height !== i3) && (e3(), n3.width = r4, n3.height = i3);
    }, true);
    qd.set(t2, r3);
  }
  let o2 = Wd.get(t2);
  return N.read(o2, false, true), () => {
    P(o2);
    let e3 = Kd.get(t2);
    if (!e3 || (e3.delete(a2), e3.size)) return;
    Kd.delete(t2);
    let n3 = Wd.get(t2);
    Wd.delete(t2), n3 && (Jd(t2).removeEventListener(`scroll`, n3), Gd.get(t2)?.(), window.removeEventListener(`resize`, n3));
    let r3 = qd.get(t2);
    r3 && (P(r3), qd.delete(t2));
  };
}
function Xd(e2) {
  return typeof window > `u` ? false : e2 ? Pr() : Nr();
}
var Zd = /* @__PURE__ */ new Map();
function Qd({ container: e2, target: t2, axis: n2 }) {
  let r2 = Zd.get(e2);
  r2 || (r2 = /* @__PURE__ */ new Map(), Zd.set(e2, r2));
  let i2 = t2 ?? `self`, a2 = r2.get(i2);
  return a2 || (a2 = {}, r2.set(i2, a2)), a2[n2] || (a2[n2] = t2 ? new ViewTimeline({ subject: t2, axis: n2 }) : new ScrollTimeline({ source: e2, axis: n2 }));
}
var $d = (e2) => {
  if (/v/u.test(e2)) return [];
  let t2 = Ld(e2, 0, 0, 0);
  return [Ld(e2, 0, 1, 0) - t2, t2 - Ld(e2, 1, 0, 0), t2];
}, ef = ([e2, t2, n2]) => !n2 && (t2 === 0 || t2 === 1) && `${t2 ? `entry` : `exit`}-crossing ${e2 * 100}%`;
function tf(e2 = Rd.All) {
  if (e2.length !== 2) return;
  let [t2, n2] = e2.map($d), r2 = [ef(t2), ef(n2)], i2 = n2[0] - t2[0], a2 = t2[1] - n2[1];
  if (r2[0] && r2[1] && (i2 || a2)) return { points: r2, a: i2, b: a2, cover: !t2[0] && i2 === 1 && a2 === 1 };
}
function nf(e2, t2) {
  let { target: n2, container: r2, axis: i2 } = t2, a2 = n2 && tf(t2.offset), o2 = Xd(n2) && (n2 ? !!a2 : !t2.offset), s2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Set(), l2, u2 = false, d2 = (e3, t3) => {
    let [n3, r3] = a2.points;
    t3.effect.updateTiming({ direction: u2 ? e3 === `normal` ? `reverse` : `alternate-reverse` : e3 }), Object.assign(t3, { rangeStart: u2 ? r3 : n3, rangeEnd: u2 ? n3 : r3 }), t3.play();
  }, f2 = [e2.attachTimeline({ get timeline() {
    return o2 ? Qd(t2) : void 0;
  }, onAttach: a2 && ((e3) => {
    let t3 = e3.effect.getTiming().direction;
    s2.set(e3, t3), d2(t3, e3);
  }), observe: (e3) => (e3.pause(), c2.add(e3), l2 ||= Yd((e4) => {
    c2.forEach((t3) => {
      t3.time = t3.iterationDuration * e4[i2].progress;
    });
  }, t2), () => c2.delete(e3)) })];
  if (o2 && a2) {
    let { a: e3, b: t3 } = a2, o3 = i2 === `y` ? `clientHeight` : `clientWidth`, c3 = () => {
      u2 !== (u2 = e3 * n2[o3] + t3 * r2[o3] < 0) && s2.forEach(d2);
    };
    c3(), e3 * t3 < 0 && f2.push(B(c3), B([n2, r2], c3));
  }
  return () => {
    f2.forEach((e3) => e3()), l2?.();
  };
}
function rf(e2, { axis: t2 = `y`, source: n2, container: r2 = document.scrollingElement, ...i2 } = {}) {
  if (!r2) return ce;
  let a2 = { axis: t2, container: n2 || r2, ...i2 };
  return typeof e2 == `function` ? Yd((n3) => e2(n3[t2].progress, n3), a2) : nf(e2, a2);
}
var af = () => ({ scrollX: Mi(0), scrollY: Mi(0), scrollXProgress: Mi(0), scrollYProgress: Mi(0) }), of = (e2) => e2 ? !e2.current : false;
function sf(e2, t2, n2, r2) {
  return { factory: (i2) => {
    let a2, o2 = () => {
      of(n2) || of(r2) ? So.read(o2) : a2 = rf(i2, { ...t2, axis: e2, container: n2?.current || void 0, target: r2?.current || void 0 });
    };
    return So.read(o2), () => {
      Co(o2), a2?.();
    };
  }, times: [0, 1], keyframes: [0, 1], ease: (e3) => e3, duration: 1 };
}
function cf(e2, t2) {
  return typeof window > `u` ? false : e2 ? Pr() && !!tf(t2) : Nr() && !t2;
}
function lf({ container: e2, target: t2, ...n2 } = {}) {
  let r2 = ee(af);
  cf(t2, n2.offset) && (r2.scrollXProgress.accelerate = sf(`x`, n2, e2, t2), r2.scrollYProgress.accelerate = sf(`y`, n2, e2, t2));
  let i2 = (0, v.useRef)(null), a2 = (0, v.useRef)(false), o2 = (0, v.useCallback)(() => (i2.current = rf((e3, { x: t3, y: n3 }) => {
    r2.scrollX.set(t3.current), r2.scrollXProgress.set(t3.progress), r2.scrollY.set(n3.current), r2.scrollYProgress.set(n3.progress);
  }, { ...n2, container: e2?.current || void 0, target: t2?.current || void 0 }), () => {
    i2.current?.();
  }), [e2, t2, JSON.stringify(n2.offset)]);
  return te(() => {
    if (a2.current = false, of(e2) || of(t2)) a2.current = true;
    else return o2();
  }, [o2]), (0, v.useEffect)(() => {
    if (!a2.current) return;
    let n3, r3 = () => {
      let r4 = of(e2), i3 = of(t2);
      !r4 && !i3 && (n3 = o2());
    };
    return So.read(r3), () => {
      Co(r3), n3?.();
    };
  }, [o2]), r2;
}
function uf(e2) {
  let t2 = ee(() => Mi(e2)), { isStatic: n2 } = (0, v.useContext)(kl);
  if (n2) {
    let [, n3] = (0, v.useState)(e2);
    (0, v.useEffect)(() => t2.on(`change`, n3), []);
  }
  return t2;
}
function df(e2, t2) {
  let n2 = uf(t2()), r2 = () => n2.set(t2());
  return r2(), te(() => {
    let t3 = () => N.preRender(r2, false, true), n3 = e2.map((e3) => e3.on(`change`, t3));
    return r2(), () => {
      n3.forEach((e3) => e3()), P(r2);
    };
  }), n2;
}
function ff(e2) {
  Ai.current = [], e2();
  let t2 = df(Ai.current, e2);
  return Ai.current = void 0, t2;
}
function pf(e2, t2, n2, r2) {
  if (typeof e2 == `function`) return ff(e2);
  if (n2 !== void 0 && !Array.isArray(n2) && typeof t2 != `function`) return mf(e2, t2, n2, r2);
  let i2 = typeof t2 == `function` ? t2 : ns(t2, n2, r2), a2 = Array.isArray(e2) ? Z(e2, i2) : Z([e2], ([e3]) => i2(e3)), o2 = Array.isArray(e2) ? void 0 : e2.accelerate;
  if (o2 && !o2.isTransformed && typeof t2 != `function` && Array.isArray(n2) && r2?.clamp !== false) {
    let e3 = r2?.ease;
    a2.accelerate = { ...o2, times: [0, ...t2, 1], keyframes: [n2[0], ...n2, n2[n2.length - 1]], isTransformed: true, ...e3 ? { ease: Array.isArray(e3) ? [e3[0], ...e3] : e3 } : {} };
  }
  return a2;
}
function Z(e2, t2) {
  let n2 = ee(() => []);
  return df(e2, () => {
    n2.length = 0;
    let r2 = e2.length;
    for (let t3 = 0; t3 < r2; t3++) n2[t3] = e2[t3].get();
    return t2(n2);
  });
}
function mf(e2, t2, n2, r2) {
  let i2 = ee(() => Object.keys(n2)), a2 = ee(() => ({}));
  for (let o2 of i2) a2[o2] = pf(e2, t2, n2[o2], r2);
  return a2;
}
function hf(e2, t2, n2) {
  let { isStatic: r2 } = (0, v.useContext)(kl), i2 = () => F(e2) ? e2.get() : e2;
  if (r2) return pf(i2);
  let a2 = uf(i2());
  return (0, v.useInsertionEffect)(() => n2(a2, e2, t2), [a2, JSON.stringify(t2)]), a2;
}
function gf(e2, t2 = {}) {
  return hf(e2, t2, ls);
}
function _f(e2) {
  return typeof e2 == `object` && !Array.isArray(e2);
}
function vf(e2, t2, n2, r2) {
  return e2 == null ? [] : typeof e2 == `string` && _f(t2) ? Da(e2, n2, r2) : e2 instanceof NodeList ? Array.from(e2) : Array.isArray(e2) ? e2.filter((e3) => e3 != null) : [e2];
}
function yf(e2, t2, n2) {
  return e2 * (t2 + 1) + n2 * t2;
}
function bf(e2, t2, n2, r2) {
  return typeof t2 == `number` ? t2 : t2.startsWith(`-`) || t2.startsWith(`+`) ? Math.max(0, e2 + parseFloat(t2)) : t2 === `<` ? n2 : t2.startsWith(`<`) ? Math.max(0, n2 + parseFloat(t2.slice(1))) : r2.get(t2) ?? e2;
}
function xf(e2, t2, n2) {
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2];
    i2.at > t2 && i2.at < n2 && (T(e2, i2), r2--);
  }
}
function Sf(e2, t2, n2, r2, i2, a2) {
  xf(e2, i2, a2);
  for (let o2 = 0; o2 < t2.length; o2++) e2.push({ value: t2[o2], at: M(i2, a2, r2[o2]), easing: ke(n2, o2) });
}
function Cf(e2, t2, n2 = 0) {
  let r2 = t2 + 1 + t2 * n2;
  for (let t3 = 0; t3 < e2.length; t3++) e2[t3] = e2[t3] / r2;
}
function wf(e2, t2) {
  return e2.at === t2.at ? e2.value === null ? 1 : t2.value === null ? -1 : 0 : e2.at - t2.at;
}
var Tf = `easeInOut`, Ef = 20;
function Df(e2, { defaultTransition: t2 = {}, ...n2 } = {}, r2, i2) {
  let a2 = t2.duration || 0.3, o2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map(), c2 = {}, l2 = /* @__PURE__ */ new Map(), u2 = 0, d2 = 0, f2 = 0;
  for (let n3 = 0; n3 < e2.length; n3++) {
    let o3 = e2[n3];
    if (typeof o3 == `string`) {
      l2.set(o3, d2);
      continue;
    }
    if (!Array.isArray(o3)) {
      l2.set(o3.name, bf(d2, o3.at, u2, l2));
      continue;
    }
    let [p2, m2, h2 = {}] = o3;
    h2.at !== void 0 && (d2 = bf(d2, h2.at, u2, l2));
    let g2 = 0, _2 = (e3, n4, r3, o4 = 0, s3 = 0) => {
      let c3 = Af(e3), { delay: l3 = 0, times: u3 = bn(c3), type: p3 = t2.type || `keyframes`, repeat: m3, repeatType: h3, repeatDelay: _3 = 0, ...v2 } = n4, { ease: y2 = t2.ease || `easeOut`, duration: b2 } = n4, x2 = typeof l3 == `function` ? l3(o4, s3) : l3, S2 = c3.length, ee2 = Br(p3) ? p3 : i2?.[p3 || `keyframes`];
      if (S2 <= 2 && ee2) {
        let e4 = 100;
        if (S2 === 2 && Nf(c3)) {
          let t3 = c3[1] - c3[0];
          e4 = Math.abs(t3);
        }
        let n5 = { ...t2, ...v2 };
        b2 !== void 0 && (n5.duration = fe(b2));
        let r4 = nn(n5, e4, ee2);
        y2 = r4.ease, b2 = r4.duration;
      }
      b2 ??= a2;
      let te2 = d2 + x2;
      u3.length === 1 && u3[0] === 0 && (u3[1] = 1);
      let C2 = u3.length - c3.length;
      if (C2 > 0 && yn(u3, C2), c3.length === 1 && c3.unshift(null), m3 && `${m3}${Ef}`, m3 && m3 < Ef) {
        let e4 = b2 > 0 ? _3 / b2 : 0;
        b2 = yf(b2, m3, _3);
        let t3 = [...c3], n5 = [...u3];
        y2 = Array.isArray(y2) ? [...y2] : [y2];
        let r4 = [...y2], i3 = h3 === `reverse` || h3 === `mirror`, a3 = t3, o5 = r4;
        i3 && (a3 = [...t3].reverse(), h3 === `reverse` && (o5 = [...r4].reverse().map((e5) => typeof e5 == `function` ? ye(e5) : e5)));
        for (let s4 = 0; s4 < m3; s4++) {
          let l4 = i3 && s4 % 2 == 0, d3 = l4 ? a3 : t3, f3 = l4 ? o5 : r4, p4 = (s4 + 1) * (1 + e4);
          e4 > 0 && (c3.push(c3[c3.length - 1]), u3.push(p4), y2.push(`linear`)), c3.push(...d3);
          for (let e5 = 0; e5 < d3.length; e5++) u3.push(n5[e5] + p4), y2.push(e5 === 0 ? `linear` : ke(f3, e5 - 1));
        }
        Cf(u3, m3, e4);
      }
      let w2 = te2 + b2;
      Sf(r3, c3, y2, u3, te2, w2), g2 = Math.max(x2 + b2, g2), f2 = Math.max(w2, f2);
    };
    if (F(p2)) {
      let e3 = Of(p2, s2);
      _2(m2, h2, kf(`default`, e3));
    } else {
      let e3 = vf(p2, m2, r2, c2), t3 = e3.length;
      for (let n4 = 0; n4 < t3; n4++) {
        m2 = m2, h2 = h2;
        let r3 = e3[n4], i3 = Of(r3, s2);
        for (let e4 in m2) _2(m2[e4], jf(h2, e4), kf(e4, i3), n4, t3);
      }
    }
    u2 = d2, d2 += g2;
  }
  return s2.forEach((e3, r3) => {
    for (let i3 in e3) {
      let a3 = e3[i3];
      a3.sort(wf);
      let s3 = [], c3 = [], l3 = [];
      for (let e4 = 0; e4 < a3.length; e4++) {
        let { at: t3, value: n3, easing: r4 } = a3[e4];
        s3.push(n3), c3.push(ue(0, f2, t3)), l3.push(r4 || `easeOut`);
      }
      c3[0] !== 0 && (c3.unshift(0), s3.unshift(s3[0]), l3.unshift(Tf)), c3[c3.length - 1] !== 1 && (c3.push(1), s3.push(null)), o2.has(r3) || o2.set(r3, { keyframes: {}, transition: {} });
      let u3 = o2.get(r3);
      u3.keyframes[i3] = s3;
      let { type: d3, ...p2 } = t2;
      u3.transition[i3] = { ...p2, duration: f2, ease: l3, times: c3, ...n2 };
    }
  }), o2;
}
function Of(e2, t2) {
  return !t2.has(e2) && t2.set(e2, {}), t2.get(e2);
}
function kf(e2, t2) {
  return t2[e2] || (t2[e2] = []), t2[e2];
}
function Af(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function jf(e2, t2) {
  return e2 && e2[t2] ? { ...e2, ...e2[t2] } : { ...e2 };
}
var Mf = (e2) => typeof e2 == `number`, Nf = (e2) => e2.every(Mf);
function Pf(e2, t2) {
  return F(e2) || typeof e2 == `number` || typeof e2 == `string` && !_f(t2);
}
function Ff(e2, t2, n2, r2) {
  let i2 = [];
  if (Pf(e2, t2)) i2.push(Ic(e2, _f(t2) && t2.default || t2, n2 && (n2.default || n2)));
  else {
    if (e2 == null) return i2;
    let a2 = vf(e2, t2, r2), o2 = a2.length;
    for (let e3 = 0; e3 < o2; e3++) {
      let r3 = a2[e3], s2 = { ...n2 };
      `delay` in s2 && typeof s2.delay == `function` && (s2.delay = s2.delay(e3, o2)), r3 instanceof Element ? i2.push(...bo(r3, t2, s2, ms.get(r3))) : i2.push(...Ca(xa(r3) ?? xo, r3, t2, s2));
    }
  }
  return i2;
}
function If(e2, t2, n2) {
  let r2 = [];
  return Df(e2.map((e3) => {
    if (Array.isArray(e3) && typeof e3[0] == `function`) {
      let t3 = e3[0], n3 = Mi(0);
      return n3.on(`change`, t3), e3.length === 1 ? [n3, [0, 1]] : e3.length === 2 ? [n3, [0, 1], e3[1]] : [n3, e3[1], e3[2]];
    }
    return e3;
  }), t2, n2, { spring: hn }).forEach(({ keyframes: e3, transition: t3 }, n3) => {
    r2.push(...Ff(n3, e3, t3));
  }), r2;
}
function Lf(e2) {
  return Array.isArray(e2) && e2.some(Array.isArray);
}
function Rf(e2 = {}) {
  let { scope: t2, reduceMotion: n2, skipAnimations: r2 } = e2;
  function i2(e3, i3, a2) {
    let o2 = [], s2, c2 = {};
    if (n2 !== void 0 && (c2.reduceMotion = n2), r2 !== void 0 && (c2.skipAnimations = r2), Lf(e3)) {
      let { onComplete: n3, ...r3 } = i3 || {};
      typeof n3 == `function` && (s2 = n3), o2 = If(e3, { ...c2, ...r3 }, t2);
    } else {
      let { onComplete: n3, ...r3 } = a2 || {};
      typeof n3 == `function` && (s2 = n3), o2 = Ff(e3, i3, { ...c2, ...r3 }, t2);
    }
    let l2 = new Ei(o2);
    return s2 && l2.finished.then(s2), t2 && (t2.animations.push(l2), l2.finished.then(() => {
      T(t2.animations, l2);
    })), l2;
  }
  return i2;
}
var zf = Object.assign(Rf(), { addEffect: ya, removeEffect: ba }), Bf = { some: 0, all: 1 };
function Vf(e2, t2, { root: n2, margin: r2, amount: i2 = `some` } = {}) {
  let a2 = Da(e2), o2 = /* @__PURE__ */ new WeakMap(), s2 = new IntersectionObserver((e3) => {
    e3.forEach((e4) => {
      let n3 = o2.get(e4.target);
      if (e4.isIntersecting !== !!n3) {
        if (e4.isIntersecting) {
          let n4 = t2(e4.target, e4);
          typeof n4 == `function` ? o2.set(e4.target, n4) : s2.unobserve(e4.target);
        } else typeof n3 == `function` && (n3(e4), o2.delete(e4.target));
      }
    });
  }, { root: n2, rootMargin: r2, threshold: typeof i2 == `number` ? i2 : Bf[i2] });
  return a2.forEach((e3) => s2.observe(e3)), () => s2.disconnect();
}
function Q(e2, { root: t2, margin: n2, amount: r2, once: i2 = false, initial: a2 = false } = {}) {
  let [o2, s2] = (0, v.useState)(a2);
  return (0, v.useEffect)(() => {
    if (!e2.current || i2 && o2) return;
    let a3 = () => (s2(true), i2 ? void 0 : () => s2(false)), c2 = { root: t2 && t2.current || void 0, margin: n2, amount: r2 };
    return Vf(e2.current, a3, c2);
  }, [t2, e2, n2, i2, r2]), o2;
}
var Hf = { stiffness: 500, damping: 28, mass: 0.5 }, Uf = 32, Wf = `a, button, [role="button"], input, textarea, select, summary, [data-cursor="hover"]`;
function Gf() {
  let e2 = uf(-32), t2 = uf(-32), n2 = gf(e2, Hf), r2 = gf(t2, Hf), [i2, a2] = (0, v.useState)(false), [o2, s2] = (0, v.useState)(false), [c2, l2] = (0, v.useState)(`idle`), [u2, d2] = (0, v.useState)(false);
  if ((0, v.useEffect)(() => {
    let e3 = window.matchMedia(`(hover: hover) and (pointer: fine)`), t3 = () => a2(e3.matches);
    return t3(), e3.addEventListener(`change`, t3), () => e3.removeEventListener(`change`, t3);
  }, []), (0, v.useEffect)(() => {
    if (!i2) return;
    let a3 = true, o3 = (i3) => {
      e2.set(i3.clientX - Uf / 2), t2.set(i3.clientY - Uf / 2), a3 && (n2.jump(i3.clientX - Uf / 2), r2.jump(i3.clientY - Uf / 2), a3 = false, s2(true));
    }, c3 = (e3) => {
      let t3 = e3.target instanceof Element ? e3.target : null;
      t3 && (t3.closest(`[data-cursor="lens"]`) ? l2(`lens`) : t3.closest(Wf) ? l2(`hover`) : l2(`idle`));
    }, u3 = () => d2(true), f3 = () => d2(false), p2 = () => s2(false), m2 = () => s2(true);
    return window.addEventListener(`mousemove`, o3, { passive: true }), window.addEventListener(`mouseover`, c3, { passive: true }), window.addEventListener(`mousedown`, u3), window.addEventListener(`mouseup`, f3), document.documentElement.addEventListener(`mouseleave`, p2), document.documentElement.addEventListener(`mouseenter`, m2), () => {
      window.removeEventListener(`mousemove`, o3), window.removeEventListener(`mouseover`, c3), window.removeEventListener(`mousedown`, u3), window.removeEventListener(`mouseup`, f3), document.documentElement.removeEventListener(`mouseleave`, p2), document.documentElement.removeEventListener(`mouseenter`, m2);
    };
  }, [i2, e2, t2, n2, r2]), !i2) return null;
  let f2 = u2 ? 0.7 : c2 === `lens` ? 5.5 : c2 === `hover` ? 2.4 : 1;
  return (0, H.jsx)(Td.div, { "aria-hidden": `true`, className: `pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference`, style: { x: n2, y: r2, width: Uf, height: Uf }, animate: { scale: f2, opacity: +!!o2 }, transition: { scale: Hf, opacity: { duration: 0.2 } } });
}
function Kf({ sections: e2 }) {
  let [t2, n2] = (0, v.useState)(``), [r2, i2] = (0, v.useState)(false);
  return (0, v.useEffect)(() => {
    let t3 = [`top`, ...e2.map((e3) => e3.id)].map((e3) => document.getElementById(e3)).filter(Boolean), r3 = new IntersectionObserver((e3) => {
      e3.forEach((e4) => {
        e4.isIntersecting && n2(e4.target.id === `top` ? `` : e4.target.id);
      });
    }, { rootMargin: `-45% 0px -50% 0px` });
    return t3.forEach((e3) => r3.observe(e3)), () => r3.disconnect();
  }, [e2]), (0, v.useEffect)(() => {
    if (!r2) return;
    let e3 = (e4) => e4.key === `Escape` && i2(false);
    return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
  }, [r2]), (0, H.jsx)(`header`, { className: `fixed inset-x-0 top-0 z-40`, children: (0, H.jsxs)(`nav`, { "aria-label": `Primary`, className: `mx-auto mt-4 flex max-w-7xl items-start justify-between px-4 md:px-9`, children: [(0, H.jsx)(`a`, { href: `#top`, "aria-label": `Sachchidanand Singh, back to top`, className: `glass grid h-11 w-11 place-items-center rounded-full font-display text-xl leading-none`, children: `SS` }), (0, H.jsx)(`ul`, { className: `glass hidden items-center gap-0.5 rounded-full p-1 md:flex`, children: e2.filter(section=>["objective","projects","webtools","experience","publications","contact"].includes(section.id)).map(({ id: e3, title: n3 }) => (0, H.jsx)(`li`, { children: (0, H.jsxs)(`a`, { href: `#${e3}`, "aria-current": t2 === e3 ? `true` : void 0, className: `relative block rounded-full px-4 py-2 text-sm text-haze transition-colors hover:text-snow aria-[current=true]:text-snow`, children: [t2 === e3 && (0, H.jsx)(Td.span, { layoutId: `nav-pill`, className: `absolute inset-0 rounded-full bg-white/10`, transition: { type: `spring`, stiffness: 420, damping: 34 } }), (0, H.jsx)(`span`, { className: `relative`, children: n3 })] }) }, e3)) }), (0, H.jsxs)(`div`, { className: `relative md:hidden`, children: [(0, H.jsx)(`button`, { type: `button`, "aria-expanded": r2, "aria-controls": `mobile-menu`, onClick: () => i2((e3) => !e3), className: `glass h-11 rounded-full px-5 text-sm`, children: r2 ? `Close` : `Menu` }), (0, H.jsx)(Bl, { children: r2 && (0, H.jsx)(Td.ul, { id: `mobile-menu`, initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.2 }, className: `glass absolute right-0 top-14 w-52 rounded-3xl p-2`, children: e2.map(({ id: e3, title: t3 }) => (0, H.jsx)(`li`, { children: (0, H.jsx)(`a`, { href: `#${e3}`, onClick: () => i2(false), className: `block rounded-2xl px-4 py-2.5 text-[15px] text-haze hover:bg-white/10 hover:text-snow`, children: t3 }) }, e3)) }) })] })] }) });
}
function qf() {
  let { scrollYProgress: e2 } = lf(), t2 = gf(e2, { stiffness: 140, damping: 28, mass: 0.4 });
  return (0, H.jsx)(Td.div, { "aria-hidden": `true`, className: `fixed inset-x-0 top-0 z-50 h-px origin-left bg-snow/80`, style: { scaleX: t2 } });
}
function Jf({ as: e2 = `div`, className: t2 = ``, children: n2, ...r2 }) {
  return (0, H.jsx)(e2, { onPointerMove: (e3) => {
    let t3 = e3.currentTarget, n3 = t3.getBoundingClientRect();
    t3.style.setProperty(`--mx`, `${e3.clientX - n3.left}px`), t3.style.setProperty(`--my`, `${e3.clientY - n3.top}px`);
  }, className: `glass ${t2}`, ...r2, children: n2 });
}
var Yf = { width: 18, height: 18, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: 1.6, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": true }, Xf = (e2) => (0, H.jsxs)(`svg`, { ...Yf, ...e2, children: [(0, H.jsx)(`path`, { d: `M7 17 17 7` }), (0, H.jsx)(`path`, { d: `M8 7h9v9` })] }), Zf = (e2) => (0, H.jsx)(`svg`, { ...Yf, ...e2, children: (0, H.jsx)(`path`, { d: `M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z` }) }), Qf = (e2) => (0, H.jsxs)(`svg`, { ...Yf, ...e2, children: [(0, H.jsx)(`rect`, { x: `3`, y: `5`, width: `18`, height: `14`, rx: `2` }), (0, H.jsx)(`path`, { d: `m3 7 9 6 9-6` })] }), $f = (e2) => (0, H.jsxs)(`svg`, { ...Yf, ...e2, children: [(0, H.jsx)(`path`, { d: `M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z` }), (0, H.jsx)(`circle`, { cx: `12`, cy: `10`, r: `2.5` })] }), ep = (e2) => (0, H.jsxs)(`svg`, { ...Yf, ...e2, children: [(0, H.jsx)(`rect`, { x: `9`, y: `9`, width: `11`, height: `11`, rx: `2` }), (0, H.jsx)(`path`, { d: `M5 15V6a2 2 0 0 1 2-2h9` })] }), $ = (e2) => (0, H.jsx)(`svg`, { ...Yf, ...e2, children: (0, H.jsx)(`path`, { d: `m5 12.5 4.5 4.5L19 7.5` }) }), tp = [0.22, 1, 0.36, 1], np = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: tp } } }, rp = { once: true, amount: `some`, margin: `0px 0px -12% 0px` }, ip = { name: `SACHCHIDANAND SINGH`, designation: `Assistant Professor`, unit: `School of Civil and Environmental Engineering`, institute: `Indian Institute of Technology Mandi`, address: `A11, North Campus, Indian Institute of Technology Mandi, Kamand, Mandi District, Himachal Pradesh 175075, India`, phone: `+91-9016852859`, phoneHref: `tel:+919016852859`, email: `sachchidanand@iitmandi.ac.in` }, ap = `I aim to contribute to cutting-edge research and technology development in hydrology, water resources, the cryosphere, and geospatial sciences through innovation, collaboration, and capacity building, while continuously enhancing professional excellence and supporting the achievement of organizational goals and societal needs.`, op = [{ title: `Flash floods, cloudbursts and flood modelling`, text: `Chamoli flash-flood mapping on Google Earth Engine, flash-flood-prone reaches of the Beas, the 2018 Kerala floods and cloudburst-induced floods in the Upper Beas.` }, { title: `Landslide susceptibility and hazard zonation`, text: `AHP-based susceptibility in the Beas basin, hazard zonation in the Alaknanda basin and pre- and post-landslide studies at Pernote, Ramban.` }, { title: `Sub-basin and watershed prioritisation`, text: `RUSLE, morphometric, hydrologic and semi-empirical methods for ranking mountain sub-basins against erosion and flash-flood-induced landslides.` }, { title: `Snow, glacier and the cryosphere`, text: `Snow cover and glacier dynamics from C- and L-band SAR in the north-west Himalaya, now extended to cryosphere monitoring at IIT Mandi.` }, { title: `Water and air quality from Earth observation`, text: `Water quality index with AHP and GIS, in-situ quality against Landsat 8 reflectance, and air-quality impacts of lockdowns and forest fires.` }, { title: `Reservoirs, UAVs and 3D urban modelling`, text: `Revised capacity of Gobind Sagar reservoir, and CityGML 3D models from UAV data to estimate solar potential.` }], sp = [{ role: `Assistant Professor`, org: `Indian Institute of Technology Mandi`, place: `Mandi, Himachal Pradesh`, period: `5 October 2026 – present`, current: true, duties: `Teaching and mentoring students in Water Resources, conducting advanced research in hydrology, cryosphere monitoring, and geospatial sciences, and contributing to institutional growth through academic and administrative responsibilities.` }, { role: `Scientist-B`, org: `National Institute of Hydrology`, place: `Jammu, Jammu & Kashmir`, period: `28 July 2023 – 4 October 2026`, duties: `Research activities, including field studies, data analysis, training, capacity building, workshops, and project management.` }, { role: `Senior Engineer`, org: `Larsen and Toubro ECC`, place: `Rudraprayag, Uttarakhand & Valsad, Gujarat`, period: `30 June 2014 – 21 March 2016`, duties: `Site Establishment and Planning Works for the Construction of Railway Bridges.` }], cp = [{ degree: `Ph.D.`, years: `2019-24`, institute: `Indian Institute of Technology, Roorkee`, cgpa: 9.714, note: `Coursework CGPA`, extra: `Supervisor: Prof. M. L. Kansal, WRDM, IIT Roorkee` }, { degree: `M.Tech (RS and GIS-Water Resources)`, years: `2017-19`, institute: `Indian Institute of Remote Sensing, Dehradun`, cgpa: 8.45, extra: `Awarded by Andhra University` }, { degree: `B.Tech (Civil Engineering)`, years: `2010-14`, institute: `National Institute of Technology, Durgapur`, cgpa: 8.17 }], lp = [{ level: `Intermediate`, year: `2009`, score: `87.00 %`, board: `ISC Board`, school: `St. John's Marhauli, Varanasi` }, { level: `SSC`, year: `2007`, score: `89.14 %`, board: `ICSE Board`, school: `St. John's Marhauli, Varanasi` }], up = [{ name: `GIS and remote sensing`, items: [`Q-GIS`, `ArcGIS`, `Google Earth Engine`, `WebGIS`, `GeoServer`, `Google Earth`] }, { name: `Hydrologic and hydraulic modelling`, items: [`HEC-HMS`, `HEC-RAS`, `SWAT`] }, { name: `Programming`, items: [`Python`] }], dp = [{ title: `Mapathon Winner and Champion`, org: `FOSSEE (Free and Open-Source Software for Education), IIT Bombay, in association with ISRO and AICTE`, marks: [{ big: `2022`, small: `Winner` }, { big: `2023`, small: `Champion` }] }, { title: `Best Presentation Award`, org: `Two-Day Symposium on \u201CAdvances in Flood Modeling and Computational & Experimental Hydraulics for Steep Mountain Streams\u201D, Dr. B.R. Ambedkar NIT Jalandhar, 11 to 12 September 2026`, marks: [{ big: `Sept 2026`, small: `NIT Jalandhar` }] }, { title: `Certificate of Award, Special Mention`, org: `Ministry of Housing and Urban Affairs`, marks: [{ big: `2022` }] }], fp = [{ year: `2010-14`, text: `Student Half Free-ship, National Institute of Technology Durgapur` }, { year: `2017-19`, text: `Golden Jubilee Institute Fellowship, Indian Institute of Remote Sensing and ISRO` }, { year: `2019`, text: `Best Paper Award, 1st International Conference on Unmanned Aerial Systems in Geomatics (UASG 2019), IIT Roorkee Noida Campus` }, { year: `2021`, text: `Co-PREPARE Conference Grant (CCG), Universit\xE4t Potsdam and IIT Roorkee` }], pp = { journals: 16, chapters: 14 }, mp = [{ rank: 1, featured: true, kind: `journal`, year: 2025, venue: `Landslides`, title: `Pre- and post-landslide phenomena in Pernote area, Ramban District, Jammu and Kashmir, India: implications for early warning, mitigation, and preparedness`, authors: `Mir, R.A., Aziz, K., {{Singh, S.}}, Sharma, S., Shah, Z. A. & Ahmed, R.`, doi: `10.1007/s10346-025-02469-z` }, { rank: 2, featured: true, kind: `journal`, year: 2024, venue: `Quaternary Science Advances, 14, 100180`, title: `Landslide susceptibility evaluation in the Beas River Basin of North-Western Himalaya: A geospatial analysis employing the Analytical Hierarchy Process (AHP) method`, authors: `Singh, M., Khajuria, V., {{Singh, S.}}, & Singh, K.`, doi: `10.1016/j.qsa.2024.100180` }, { rank: 3, kind: `journal`, year: 2023, venue: `Environ Sci Pollut Res`, title: `A comparative study of morphometric, hydrologic, and semi-empirical methods for the prioritization of sub-watersheds against flash flood-induced landslides in a part of the Indian Himalayan Region`, authors: `{{Singh, S.}}, Kansal, M.L.`, doi: `10.1007/s11356-023-30613-6` }, { rank: 4, featured: true, kind: `journal`, year: 2023, venue: `Environ Dev Sustain`, title: `Sub-basin prioritisation using RUSLE in a Mountainous River Basin of Uttarakhand (India)`, authors: `{{Singh, S.}}, Kansal, M.L.`, doi: `10.1007/s10668-023-02989-5` }, { rank: 5, kind: `journal`, year: 2022, venue: `Water, 14(12), 1879`, title: `Flood Management Issues in Hilly Regions of Uttarakhand (India) under Changing Climatic Conditions`, authors: `Kansal, M. L., & {{Singh, S.}}`, doi: `10.3390/w14121879` }, { rank: 6, kind: `conference`, year: 2023, venue: `World Environmental and Water Resources Congress 2023, pp. 32\u201344`, title: `Landslide Hazard Zonation in the Alaknanda River Basin Using Innovative Techniques`, authors: `{{Singh, S.}}, Kansal, M.L., Tyagi, A.`, doi: `10.1061/9780784484852.004` }, { rank: 7, kind: `chapter`, year: 2022, venue: `5th World Congress on Disaster Management, ed. S. A. Babu, Routledge, p. 631`, title: `Cloudburst Induced Flood Assessment in the North-Western Himalayan Region\u2014A Case Study of Upper Beas Basin`, authors: `{{Singh, S.}}, Kansal, M. L.`, doi: `10.4324/9781003341932` }, { rank: 8, kind: `journal`, year: 2022, venue: `Earth Sci Inform 15, 1073\u20131086`, title: `Chamoli flash-flood mapping and evaluation with a supervised classifier and NDWI thresholding using Sentinel-2 optical data in Google earth engine`, authors: `{{Singh, S.}}, Kansal, M.L`, doi: `10.1007/s12145-022-00786-8` }, { rank: 9, kind: `chapter`, year: 2022, venue: `Civil Engineering for Disaster Risk Reduction, Springer Tracts in Civil Engineering, Springer, Singapore`, title: `Cloudburst\u2014A Major Disaster in The Indian Himalayan States`, authors: `{{Singh, S.}}, Kansal, M.L.`, doi: `10.1007/978-981-16-5312-4_9` }, { rank: 10, kind: `journal`, year: 2022, venue: `Atmosphere 13(12):2090`, title: `Status of Air Pollution during COVID-19-Induced Lockdown in Delhi, India`, authors: `Singh H., Meraj G., {{Singh S.}}, Shrivastava V., Sharma V., Farooq M., Kanga S., Singh S. K., Kumar P.`, doi: `10.3390/atmos13122090` }, { rank: 11, kind: `journal`, year: 2022, venue: `International Journal of Environmental Analytical Chemistry`, title: `Assessment of water quality index using Analytic Hierarchy Process (AHP) and GIS: a case study of a struggling Asan River`, authors: `Mishra, A. P., {{Singh, S.}}, Jani, M., Singh, K. A., Pande, C. B. & Varade, A. M.`, doi: `10.1080/03067319.2022.2032015` }, { rank: 12, kind: `journal`, year: 2022, venue: `Forests, 13(1):4`, title: `Impact of Forest Fires on Air Quality in Wolgan Valley, New South Wales, Australia\u2014A Mapping and Monitoring Study Using Google Earth Engine`, authors: `{{Singh S.}}, Singh H., Sharma V., Shrivastava V., Kumar P., Kanga S., Sahu N., Meraj G., Farooq M., Singh S. K.`, doi: `10.3390/f13010004` }, { rank: 13, kind: `journal`, year: 2021, venue: `International Journal of Environmental Analytical Chemistry`, title: `An Assessment of In-situ Water Quality Parameters and its variation with Landsat 8 Level 1 Surface Reflectance datasets`, authors: `Mishra, A. P., Khali, H., {{Singh, S.}}, Pande, C. B., Singh, R. & Shardesh K. Chaurasia`, doi: `10.1080/03067319.2021.1954175` }, { rank: 14, kind: `journal`, year: 2020, venue: `Natural Hazards, 105(3), 2431\u20132453`, title: `Identification of flash-floods-prone river reaches in Beas River basin using GIS-based multi-criteria technique: validation using field and satellite observations`, authors: `{{Singh, S.}}, Dhote, P. R., Thakur, P. K., Chouksey, A., & Aggarwal, S. P.`, doi: `10.1007/s11069-020-04406-w` }, { rank: 15, kind: `chapter`, year: 2020, venue: `Flash Floods: Challenges and its Management, The Institution of Engineers Centenary Publication, p. 185`, title: `Flash Flood Hazard mapping using Satellite Images and GIS: A Case Study of Alaknanda River Basin`, authors: `{{Singh, S.}}, & Kansal, M. L.`, url: `https://www.ieindia.org/webui/ajax/Downloads/WebUI_PDF/Publication/Flash_Floods_Challenges_and_its_Management.pdf?v.20210212.1`, linkLabel: `Open publication PDF` }, { rank: 16, kind: `conference`, year: 2020, venue: `Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLIII-B3-2020, 1263\u20131270`, title: `Synergistic Use of Remote Sensing, GIS and Hydrological Models for Study of August 2018 Kerala Floods`, authors: `Thakur, P. K., Ranjan, R., {{Singh, S.}}, Dhote, P. R., Sharma, V., Srivastav, V., Dhasmana, M., Aggarwal, S. P., Chauhan, P., Nikam, B. R., Garg, V., and Chouksey, A.`, doi: `10.5194/isprs-archives-XLIII-B3-2020-1263-2020` }, { rank: 17, kind: `conference`, year: 2020, venue: `Proceedings of UASG 2019, ed. Jain K., Khoshelham K., Zhu X., Tiwari A., Lecture Notes in Civil Engineering vol 51, Springer, Cham`, title: `CityGML Based 3D Modeling of Urban Area Using UAV Dataset for Estimation of Solar Potential`, authors: `Harikesh, {{Singh S.}}, Shrivastava V., Sharma V.`, doi: `10.1007/978-3-030-37393-1_30`, badge: `Best paper` }, { rank: 18, kind: `conference`, year: 2018, venue: `Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLII-5, 589\u2013595`, title: `Estimation of Revised Capacity in Gobind Sagar Reservoir using Google Earth Engine and GIS`, authors: `{{Singh, S.}}, Dhasmana, M. K., Shrivastava, V., Sharma, V., Pokhriyal, N., Thakur, P. K., Aggarwal, S. P., Nikam, B. R., Garg, V., Chouksey, A., and Dhote, P. R.`, doi: `10.5194/isprs-archives-XLII-5-589-2018` }, { rank: 19, kind: `conference`, year: 2018, venue: `Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLII-5, 375\u2013382`, title: `Snow Cover and Glacier Dynamics Study Using C-and L-Band SAR Datasets in Parts of Northwest Himalaya`, authors: `Thakur, P. K., Garg, V., Nikam, B. R., {{Singh, S.}}, Jasmine, Chouksey, A., Dhote, P. R., Aggarwal, S. P., Chauhan, P., and Kumar, A. S.`, doi: `10.5194/isprs-archives-XLII-5-375-2018` }, { rank: 20, kind: `conference`, year: 2018, venue: `Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLII-5, 567\u2013573`, title: `Seasonal Comparison of Era-Interim Precipitation Dataset for Entire Indian Region`, authors: `Sharma, V., Pandey, K., Thakur, P. K., Aggarwal, S. P., Nikam, B. R., Dhasmana, M. K., Shrivastava, V., and {{Singh, S.}}`, doi: `10.5194/isprs-archives-XLII-5-567-2018` }], hp = { journal: `Journal`, chapter: `Book chapter`, conference: `Conference` }, gp = new URL(`portrait-BADol7GD.png`, import.meta.url).href, _p = ip.name.split(` `), vp = `group inline-flex max-w-full items-center gap-2.5 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[15px] text-snow transition-colors [overflow-wrap:anywhere] hover:bg-snow hover:text-night md:rounded-full`;
function yp() {
  let e2 = 0;
  return (0, H.jsx)(`section`, { id: `top`, className: `relative flex min-h-[100svh] items-end pb-14 pt-32 md:pb-20`, children: (0, H.jsxs)(`div`, { className: `mx-auto w-full max-w-7xl px-5 md:px-10`, children: [(0,H.jsx)(`p`, {className:`research-eyebrow`,children:`AQUASCHOLAR · HYDROLOGY & EARTH OBSERVATION`}),(0, H.jsx)(`h1`, { "aria-label": `Sachchidanand Singh`, "data-cursor": `lens`, className: `font-display text-[min(13.6vw,12.2rem)] leading-[0.92] tracking-[-0.015em] text-snow`, children: _p.map((t2) => (0, H.jsx)(`span`, { "aria-hidden": `true`, className: `block overflow-hidden pb-[0.06em]`, children: [...t2].map((t3) => (0, H.jsx)(Td.span, { className: `inline-block will-change-transform`, initial: { y: `108%` }, animate: { y: 0 }, transition: { delay: 0.2 + e2++ * 0.04, duration: 1, ease: tp }, children: t3 }, e2)) }, t2)) }), (0, H.jsx)(Td.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.15, duration: 0.9, ease: tp }, className: `mt-8 md:mt-12`, children: (0, H.jsxs)(Jf, { className: `flex flex-col gap-6 rounded-[28px] p-5 md:flex-row md:items-center md:justify-between md:p-6`, children: [(0, H.jsxs)(`div`, { className: `flex items-center gap-5`, children: [(0, H.jsx)(`img`, { src: gp, alt: `Portrait of Sachchidanand Singh`, width: 88, height: 113, className: `h-[113px] w-[88px] shrink-0 rounded-2xl border border-white/10 object-cover grayscale contrast-[1.05]` }), (0, H.jsxs)(`div`, { children: [(0, H.jsx)(`p`, { className: `text-xl font-medium leading-tight md:text-2xl`, children: ip.designation }), (0, H.jsx)(`p`, { className: `mt-1.5 max-w-[34ch] text-[15px] leading-snug text-haze md:max-w-none`, children: ip.unit }), (0, H.jsx)(`p`, { className: `text-[15px] leading-snug text-haze`, children: ip.institute })] })] }), (0, H.jsxs)(`div`, { className: `flex flex-wrap gap-2.5 md:justify-end`, children: [(0, H.jsxs)(`a`, { href: `./assets/Sachchidanand-Singh-CV-October-2026.docx`, download: `Sachchidanand-Singh-CV-October-2026.docx`, className: vp, children: [(0, H.jsx)(Xf, {}), `Download CV · DOCX`] }), (0, H.jsxs)(`a`, { href: `mailto:${ip.email}`, className: vp, children: [(0, H.jsx)(Qf, {}), (0, H.jsxs)(`span`, { children: [ip.email.split(`@`)[0], `@`, (0, H.jsx)(`wbr`, {}), ip.email.split(`@`)[1]] })] })] })] }) })] }) });
}
function bp() {
  return (0, H.jsxs)(`div`, { className: `space-y-6`, children: [(0, H.jsx)(Jf, { className: `rounded-[32px] p-7 md:p-10`, children: (0, H.jsx)(`p`, { className: `font-display text-[1.7rem] leading-[1.22] text-snow md:text-[2.35rem]`, children: ap }) }), (0, H.jsxs)(Jf, { className: `rounded-[28px] p-7 md:p-9`, children: [(0, H.jsx)(`h3`, { className: `font-display text-3xl`, children: `Research themes` }), (0, H.jsx)(`dl`, { className: `mt-6 grid gap-x-10 gap-y-7 md:grid-cols-2`, children: op.map((e2) => (0, H.jsxs)(`div`, { className: `border-t border-white/10 pt-4`, children: [(0, H.jsx)(`dt`, { className: `font-medium leading-snug text-snow`, children: e2.title }), (0, H.jsx)(`dd`, { className: `mt-2 text-[15px] leading-relaxed text-haze`, children: e2.text })] }, e2.title)) })] })] });
}
function xp() {
  let e2 = (0, v.useRef)(null), { scrollYProgress: t2 } = lf({ target: e2, offset: [`start 65%`, `end 65%`] }), n2 = gf(t2, { stiffness: 120, damping: 26, mass: 0.4 });
  return (0, H.jsxs)(`div`, { ref: e2, className: `relative pl-9 md:pl-12`, children: [(0, H.jsx)(`div`, { "aria-hidden": `true`, className: `absolute bottom-4 left-[11px] top-4 w-px bg-white/10 md:left-[15px]` }), (0, H.jsx)(Td.div, { "aria-hidden": `true`, className: `absolute bottom-4 left-[11px] top-4 w-px origin-top bg-snow/80 md:left-[15px]`, style: { scaleY: n2 } }), (0, H.jsx)(`ol`, { className: `space-y-6`, children: sp.map((e3) => (0, H.jsxs)(`li`, { className: `relative`, children: [(0, H.jsxs)(`span`, { "aria-hidden": `true`, className: `absolute -left-[34px] top-9 grid h-[11px] w-[11px] place-items-center md:-left-[38px]`, children: [e3.current && (0, H.jsx)(`span`, { className: `absolute inline-flex h-full w-full animate-ping rounded-full bg-snow/50 [animation-duration:2.6s]` }), (0, H.jsx)(`span`, { className: `relative h-[11px] w-[11px] rounded-full border ${e3.current ? `border-snow bg-snow` : `border-haze bg-night`}` })] }), (0, H.jsxs)(Jf, { as: `article`, className: `rounded-[28px] p-6 md:p-8`, children: [(0, H.jsxs)(`div`, { className: `flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`, children: [(0, H.jsx)(`h3`, { className: `font-display text-3xl leading-tight md:text-4xl`, children: e3.role }), (0, H.jsx)(`p`, { className: `text-sm tabular-nums text-haze`, children: e3.period })] }), (0, H.jsx)(`p`, { className: `mt-2 text-lg text-snow`, children: e3.org }), (0, H.jsx)(`p`, { className: `text-[15px] text-haze`, children: e3.place }), (0, H.jsx)(`p`, { className: `mt-5 max-w-prose text-[15.5px] leading-relaxed text-haze`, children: e3.duties })] })] }, e3.org)) })] });
}
function Sp({ value: e2 }) {
  return (0, H.jsxs)(`div`, { className: `relative grid h-[68px] w-[68px] shrink-0 place-items-center md:h-[84px] md:w-[84px]`, role: `img`, "aria-label": `CGPA ${e2}`, children: [(0, H.jsxs)(`svg`, { viewBox: `0 0 84 84`, className: `absolute inset-0 -rotate-90`, "aria-hidden": `true`, children: [(0, H.jsx)(`circle`, { cx: `42`, cy: `42`, r: `37`, fill: `none`, stroke: `rgba(255,255,255,0.1)`, strokeWidth: `3` }), (0, H.jsx)(Td.circle, { cx: `42`, cy: `42`, r: `37`, fill: `none`, stroke: `#edf1f5`, strokeWidth: `3`, strokeLinecap: `round`, initial: { pathLength: 0 }, whileInView: { pathLength: e2 / 10 }, viewport: { once: true, margin: `0px 0px -10% 0px` }, transition: { duration: 1.4, ease: tp, delay: 0.2 } })] }), (0, H.jsx)(`span`, { className: `font-display text-xl leading-none tabular-nums md:text-2xl`, children: e2 })] });
}
function Cp() {
  return (0, H.jsxs)(`div`, { className: `space-y-5`, children: [(0, H.jsx)(Jf, { className: `divide-y divide-white/10 rounded-[32px]`, children: cp.map((e2) => (0, H.jsxs)(`article`, { className: `flex items-center justify-between gap-6 p-6 md:p-8`, children: [(0, H.jsxs)(`div`, { className: `min-w-0`, children: [(0, H.jsx)(`p`, { className: `text-sm tabular-nums text-haze`, children: e2.years }), (0, H.jsx)(`h3`, { className: `mt-1 font-display text-[1.75rem] leading-tight md:text-4xl`, children: e2.degree }), (0, H.jsx)(`p`, { className: `mt-2 text-snow`, children: e2.institute }), e2.extra && (0, H.jsx)(`p`, { className: `mt-1 text-[15px] text-haze`, children: e2.extra })] }), (0, H.jsxs)(`div`, { className: `flex w-[5.5rem] shrink-0 flex-col items-center gap-1.5 text-center md:w-28`, children: [(0, H.jsx)(Sp, { value: e2.cgpa }), (0, H.jsx)(`span`, { className: `text-xs leading-tight text-haze`, children: e2.note ?? `CGPA` })] })] }, e2.degree)) }), (0, H.jsx)(Jf, { className: `glass-soft rounded-[24px] px-6 py-5 md:px-8`, children: (0, H.jsx)(`ul`, { className: `grid gap-4 md:grid-cols-2`, children: lp.map((e2) => (0, H.jsxs)(`li`, { className: `text-[15px] leading-snug`, children: [(0, H.jsxs)(`p`, { className: `text-snow`, children: [e2.level, ` `, (0, H.jsx)(`span`, { className: `tabular-nums text-haze`, children: e2.year })] }), (0, H.jsxs)(`p`, { className: `mt-0.5 text-haze`, children: [e2.score, `, `, e2.board] }), (0, H.jsx)(`p`, { className: `text-haze`, children: e2.school })] }, e2.level)) }) })] });
}
var wp = { rest: { y: 0, scale: 1, backgroundColor: `rgba(237,241,245,0.05)`, color: `#edf1f5`, borderColor: `rgba(255,255,255,0.16)` }, hover: { y: -5, scale: 1.07, backgroundColor: `rgba(237,241,245,1)`, color: `#05080c`, borderColor: `rgba(237,241,245,1)` }, tap: { y: -1, scale: 0.96 } };
function Tp({ children: e2 }) {
  return (0, H.jsx)(Td.li, { "data-cursor": `hover`, variants: wp, initial: `rest`, whileHover: `hover`, whileTap: `tap`, transition: { type: `spring`, stiffness: 420, damping: 20, mass: 0.6 }, className: `select-none rounded-full border px-5 py-2.5 text-[15.5px]`, children: e2 });
}
function Ep() {
  return (0, H.jsx)(Jf, { className: `space-y-9 rounded-[32px] p-7 md:p-10`, children: up.map((e2) => (0, H.jsxs)(`div`, { children: [(0, H.jsx)(`h3`, { className: `text-sm text-haze`, children: e2.name }), (0, H.jsx)(`ul`, { className: `mt-3.5 flex flex-wrap gap-2.5`, children: e2.items.map((e3) => (0, H.jsx)(Tp, { children: e3 }, e3)) })] }, e2.name)) });
}
function Dp() {
  return (0, H.jsxs)(`div`, { className: `space-y-5`, children: [(0, H.jsx)(Jf, { className: `divide-y divide-white/10 rounded-[32px]`, children: dp.map((e2) => (0, H.jsxs)(`article`, { className: `grid gap-4 p-6 md:grid-cols-[12.5rem_1fr] md:gap-8 md:p-8`, children: [(0, H.jsx)(`div`, { className: `flex flex-row flex-wrap gap-x-8 gap-y-3 md:flex-col md:gap-4`, children: e2.marks.map((e3) => (0, H.jsxs)(`div`, { children: [(0, H.jsx)(`p`, { className: `font-display text-[2.6rem] leading-none tabular-nums md:text-5xl`, children: e3.big }), e3.small && (0, H.jsx)(`p`, { className: `mt-1 text-sm text-haze`, children: e3.small })] }, e3.big)) }), (0, H.jsxs)(`div`, { children: [(0, H.jsx)(`h3`, { className: `text-xl font-medium leading-snug md:text-2xl`, children: e2.title }), (0, H.jsx)(`p`, { className: `mt-2 max-w-prose text-[15.5px] leading-relaxed text-haze`, children: e2.org })] })] }, e2.title)) }), (0, H.jsx)(Jf, { className: `glass-soft rounded-[24px] px-6 py-2 md:px-8`, children: (0, H.jsx)(`ul`, { className: `divide-y divide-white/[0.07]`, children: fp.map((e2) => (0, H.jsxs)(`li`, { className: `grid gap-1 py-4 md:grid-cols-[7rem_1fr] md:gap-6`, children: [(0, H.jsx)(`p`, { className: `text-sm tabular-nums text-haze`, children: e2.year }), (0, H.jsx)(`p`, { className: `text-[15.5px] leading-snug text-snow/90`, children: e2.text })] }, e2.text)) }) })] });
}
function Op({ to: e2, decimals: t2 = 0, duration: n2 = 1.6 }) {
  let r2 = (0, v.useRef)(null), i2 = Q(r2, { once: true, margin: `0px 0px -10% 0px` });
  return (0, v.useEffect)(() => {
    if (!i2 || !r2.current) return;
    let a2 = zf(0, e2, { duration: n2, ease: [0.22, 1, 0.36, 1], onUpdate: (e3) => {
      r2.current && (r2.current.textContent = e3.toFixed(t2));
    } });
    return () => a2.stop();
  }, [i2, e2, t2, n2]), (0, H.jsx)(`span`, { ref: r2, className: `tabular-nums`, children: e2.toFixed(t2) });
}
var kp = 6;
function Ap({ text: e2, className: t2 = `` }) {
  let n2 = e2.split(/\{\{(.+?)\}\}/g);
  return (0, H.jsx)(`p`, { className: t2, children: n2.map((e3, t3) => t3 % 2 ? (0, H.jsx)(`span`, { className: `font-medium text-snow`, children: e3 }, t3) : (0, H.jsx)(v.Fragment, { children: e3 }, t3)) });
}
function jp({ pub: e2 }) {
  let t2 = e2.url ?? `https://doi.org/${e2.doi}`, n2 = e2.linkLabel ?? `doi.org/${e2.doi}`;
  return (0, H.jsxs)(Td.a, { href: t2, target: `_blank`, rel: `noopener noreferrer`, "aria-label": `${e2.linkLabel ?? `Open DOI`}: ${e2.title} (opens in a new tab)`, initial: `rest`, whileHover: `hover`, whileFocus: `hover`, whileTap: `tap`, className: `inline-flex max-w-full items-center gap-2 text-[14px] text-snow`, children: [(0, H.jsxs)(`span`, { className: `relative min-w-0 truncate`, children: [n2, (0, H.jsx)(Td.span, { "aria-hidden": `true`, variants: { rest: { scaleX: 0 }, hover: { scaleX: 1 } }, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, className: `absolute -bottom-0.5 left-0 h-px w-full origin-left bg-snow` })] }), (0, H.jsx)(Td.span, { "aria-hidden": `true`, variants: { rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 }, tap: { x: 1, y: -1 } }, transition: { type: `spring`, stiffness: 500, damping: 18 }, className: `shrink-0`, children: (0, H.jsx)(Xf, { width: 16, height: 16 }) })] });
}
function Mp({ pub: e2 }) {
  return (0, H.jsx)(Td.article, { whileHover: { y: -5 }, transition: { type: `spring`, stiffness: 300, damping: 24 }, className: `h-full min-w-0`, children: (0, H.jsxs)(Jf, { className: `flex h-full flex-col rounded-[28px] p-6 md:p-7`, children: [(0, H.jsxs)(`div`, { className: `flex items-baseline justify-between gap-4`, children: [(0, H.jsx)(`p`, { className: `min-w-0 text-sm leading-snug text-haze`, children: e2.venue }), (0, H.jsx)(`p`, { className: `font-display text-3xl leading-none tabular-nums`, children: e2.year })] }), (0, H.jsx)(`h4`, { className: `mt-5 font-display text-[1.65rem] leading-[1.15] md:text-[1.8rem]`, children: e2.title }), (0, H.jsx)(Ap, { text: e2.authors, className: `mt-4 text-[13.5px] leading-relaxed text-haze` }), (0, H.jsx)(`div`, { className: `mt-auto pt-6`, children: (0, H.jsx)(jp, { pub: e2 }) })] }) });
}
function Np({ pub: e2 }) {
  return (0, H.jsxs)(Td.li, { layout: `position`, initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8, transition: { duration: 0.15 } }, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }, className: `grid grid-cols-[2.2rem_1fr] gap-x-3 px-5 py-5 transition-colors hover:bg-white/[0.035] md:grid-cols-[3rem_1fr] md:px-7`, children: [(0, H.jsx)(`p`, { className: `pt-0.5 text-sm tabular-nums text-firn`, children: String(e2.rank).padStart(2, `0`) }), (0, H.jsxs)(`div`, { className: `min-w-0`, children: [(0, H.jsxs)(`h4`, { className: `font-medium leading-snug text-snow`, children: [e2.title, e2.badge && (0, H.jsx)(`span`, { className: `ml-2 inline-block translate-y-[-1px] rounded-full bg-snow px-2.5 py-0.5 align-middle text-[11px] font-medium leading-none text-night`, children: e2.badge })] }), (0, H.jsx)(Ap, { text: e2.authors, className: `mt-1.5 text-[13.5px] leading-relaxed text-haze` }), (0, H.jsxs)(`p`, { className: `mt-1.5 text-[13.5px] leading-relaxed text-haze`, children: [e2.venue, `, `, (0, H.jsx)(`span`, { className: `tabular-nums`, children: e2.year }), (0, H.jsx)(`span`, { className: `ml-2 rounded-full border border-white/10 px-2 py-px text-[11.5px] text-haze`, children: hp[e2.kind] })] }), (0, H.jsx)(`div`, { className: `mt-3`, children: (0, H.jsx)(jp, { pub: e2 }) })] })] });
}
function Pp() {
  let [e2, t2] = (0, v.useState)(`all`), [n2, r2] = (0, v.useState)(false), i2 = (0, v.useMemo)(() => mp.filter((e3) => e3.featured), []), a2 = (0, v.useMemo)(() => {
    let e3 = (e4) => mp.filter(e4).length;
    return [{ id: `all`, label: `All`, n: mp.length }, { id: `journal`, label: `Journals`, n: e3((e4) => e4.kind === `journal`) }, { id: `other`, label: `Chapters and conferences`, n: e3((e4) => e4.kind !== `journal`) }];
  }, []), o2 = mp.filter((t3) => e2 === `all` ? true : e2 === `journal` ? t3.kind === `journal` : t3.kind !== `journal`), s2 = n2 ? o2 : o2.slice(0, kp), c2 = o2.length - s2.length;
  return (0, H.jsxs)(`div`, { className: `space-y-10`, children: [(0, H.jsxs)(`p`, { className: `font-display text-[2rem] leading-[1.15] md:text-[2.7rem]`, children: [(0, H.jsx)(Op, { to: pp.journals }), ` international journals,`, ` `, (0, H.jsx)(Op, { to: pp.chapters }), ` chapters in books and conferences.`] }), (0, H.jsx)(`div`, { className: `grid grid-cols-[minmax(0,1fr)] gap-5`, children: i2.map((e3) => (0, H.jsx)(Mp, { pub: e3 }, e3.rank)) }), (0, H.jsxs)(`div`, { children: [(0, H.jsxs)(`div`, { className: `mb-4 flex flex-wrap items-end justify-between gap-4`, children: [(0, H.jsx)(`h3`, { className: `font-display text-3xl`, children: `Best 20 publications` }), (0, H.jsx)(`div`, { role: `group`, "aria-label": `Filter publications`, className: `glass flex rounded-full p-1`, children: a2.map((n3) => (0, H.jsxs)(`button`, { type: `button`, "aria-pressed": e2 === n3.id, onClick: () => {
    t2(n3.id), r2(false);
  }, className: `relative rounded-full px-3.5 py-1.5 text-[13.5px] text-haze transition-colors hover:text-snow aria-pressed:text-night`, children: [e2 === n3.id && (0, H.jsx)(Td.span, { layoutId: `pub-filter`, className: `absolute inset-0 rounded-full bg-snow`, transition: { type: `spring`, stiffness: 420, damping: 34 } }), (0, H.jsxs)(`span`, { className: `relative`, children: [n3.label, ` `, (0, H.jsx)(`span`, { className: `tabular-nums opacity-70`, children: n3.n })] })] }, n3.id)) })] }), (0, H.jsxs)(Jf, { className: `overflow-hidden rounded-[28px]`, children: [(0, H.jsx)(`ol`, { className: `divide-y divide-white/[0.07]`, children: (0, H.jsx)(Bl, { initial: false, mode: `popLayout`, children: s2.map((e3) => (0, H.jsx)(Np, { pub: e3 }, e3.rank)) }) }), (c2 > 0 || n2) && o2.length > kp && (0, H.jsx)(`div`, { className: `border-t border-white/[0.07] p-3 text-center`, children: (0, H.jsx)(`button`, { type: `button`, onClick: () => r2((e3) => !e3), "aria-expanded": n2, className: `rounded-full px-5 py-2 text-sm text-snow transition-colors hover:bg-white/10`, children: n2 ? `Show fewer` : `Show ${c2} more` }) })] })] })] });
}
function Fp() {
  let [e2, t2] = (0, v.useState)(false);
  return (0, H.jsxs)(Jf, { className: `rounded-[32px] p-7 md:p-10`, children: [(0, H.jsx)(`p`, { className: `max-w-[24ch] font-display text-[2rem] leading-[1.12] md:text-[2.8rem]`, children: `Research in hydrology, the cryosphere and geospatial science, built on collaboration.` }), (0, H.jsxs)(`div`, { className: `mt-9 flex flex-wrap items-center gap-3`, children: [(0, H.jsxs)(Td.a, { href: `mailto:${ip.email}`, whileHover: { scale: 1.03, y: -2 }, whileTap: { scale: 0.97 }, transition: { type: `spring`, stiffness: 420, damping: 22 }, className: `inline-flex max-w-full items-center gap-2.5 rounded-3xl bg-snow px-6 py-3 text-[15.5px] font-medium text-night [overflow-wrap:anywhere] md:rounded-full`, children: [(0, H.jsx)(Qf, {}), (0, H.jsxs)(`span`, { children: [ip.email.split(`@`)[0], `@`, (0, H.jsx)(`wbr`, {}), ip.email.split(`@`)[1]] })] }), (0, H.jsxs)(`button`, { type: `button`, onClick: async () => {
    try {
      await navigator.clipboard.writeText(ip.email), t2(true), setTimeout(() => t2(false), 2e3);
    } catch {
    }
  }, className: `inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[15px] text-snow transition-colors hover:bg-white/10`, children: [e2 ? (0, H.jsx)($, {}) : (0, H.jsx)(ep, {}), e2 ? `Email copied` : `Copy email`] }), (0, H.jsx)(`span`, { className: `sr-only`, role: `status`, "aria-live": `polite`, children: e2 ? `Email address copied to clipboard` : `` })] }), (0, H.jsxs)(`dl`, { className: `mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_1.5fr]`, children: [(0, H.jsxs)(`div`, { children: [(0, H.jsxs)(`dt`, { className: `flex items-center gap-2 text-sm text-haze`, children: [(0, H.jsx)(Zf, { width: 16, height: 16 }), ` Mobile`] }), (0, H.jsx)(`dd`, { className: `mt-1.5`, children: (0, H.jsx)(`a`, { href: ip.phoneHref, className: `text-lg text-snow underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-snow`, children: ip.phone }) })] }), (0, H.jsxs)(`div`, { children: [(0, H.jsxs)(`dt`, { className: `flex items-center gap-2 text-sm text-haze`, children: [(0, H.jsx)($f, { width: 16, height: 16 }), ` Office`] }), (0, H.jsx)(`dd`, { className: `mt-1.5 max-w-[40ch] leading-relaxed text-snow`, children: ip.address })] })] })] });
}
function Ip() {
  return (0, H.jsx)(`footer`, { className: `relative z-10 border-t border-white/10 bg-night/60 backdrop-blur-md`, children: (0, H.jsxs)(`div`, { className: `mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-haze md:px-10`, children: [(0, H.jsxs)(`p`, { children: [`\xA9 `, (/* @__PURE__ */ new Date()).getFullYear(), ` Sachchidanand Singh. `, ip.institute, `.`] }), (0, H.jsx)(`a`, { href: `#top`, className: `rounded-full border border-white/15 px-4 py-2 text-snow transition-colors hover:bg-white/10`, children: `Back to top` })] }) });
}
var Lp = `modulepreload`, Rp = function(e2, t2) {
  return new URL(e2, t2).href;
}, zp = {}, Bp = function(e2) {
  return e2.pathname.endsWith(`.css`);
}, Vp = function(e2, t2, n2) {
  if (t2 in e2) return e2[t2];
  let r2 = n2();
  if (!r2) {
    e2[t2] = void 0;
    return;
  }
  let i2 = r2.then(() => {
    e2[t2] = void 0;
  }, (n3) => {
    throw e2[t2] = void 0, n3;
  });
  return e2[t2] = i2, i2;
}, Hp = function(e2, t2, n2) {
  let r2 = Promise.resolve();
  if (t2 && t2.length > 0) {
    let o2 = function(e4) {
      return Promise.all(e4.map((e5) => Promise.resolve(e5).then((e6) => ({ status: `fulfilled`, value: e6 }), (e6) => ({ status: `rejected`, reason: e6 }))));
    }, s2 = function(e4) {
      return import.meta.resolve ? new URL(import.meta.resolve(e4)) : new URL(e4, import.meta.url);
    };
    let e3, i3 = document.querySelector(`meta[property=csp-nonce]`), a2 = i3?.nonce || i3?.getAttribute(`nonce`);
    r2 = o2(t2.map((t3) => {
      t3 = Rp(t3, n2);
      let r3 = s2(t3), i4 = Bp(r3);
      return Vp(zp, r3.href, () => {
        if (e3 === void 0) {
          e3 = { all: /* @__PURE__ */ new Set(), styles: /* @__PURE__ */ new Set() };
          let t5 = document.getElementsByTagName(`link`);
          for (let n3 = t5.length - 1; n3 >= 0; n3--) {
            let r4 = t5[n3];
            e3.all.add(r4.href), r4.rel === `stylesheet` && e3.styles.add(r4.href);
          }
        }
        if ((i4 ? e3.styles : e3.all).has(r3.href)) return;
        let t4 = document.createElement(`link`);
        if (t4.rel = i4 ? `stylesheet` : Lp, i4 || (t4.as = `script`), t4.crossOrigin = ``, t4.href = r3.href, a2 && t4.setAttribute(`nonce`, a2), document.head.appendChild(t4), i4) return new Promise((e4, n3) => {
          t4.addEventListener(`load`, e4), t4.addEventListener(`error`, () => n3(Error(`Unable to preload CSS for ${r3}`)));
        });
      });
    }).filter((e4) => e4 !== void 0));
  }
  function i2(e3) {
    let t3 = new Event(`vite:preloadError`, { cancelable: true });
    if (t3.payload = e3, window.dispatchEvent(t3), !t3.defaultPrevented) throw e3;
  }
  return r2.then((t3) => {
    for (let e3 of t3 || []) e3.status === `rejected` && i2(e3.reason);
    return e2().catch(i2);
  });
}, Up = (0, v.lazy)(() => Hp(() => import("./Scene3D-WniomFe_.js"), [], import.meta.url));
function Wp({ id: e2, title: t2, children: n2 }) {
  return (0, H.jsx)(`section`, { id: e2, "aria-labelledby": `${e2}-title`, className: `relative scroll-mt-20 py-20 md:py-28`, children: (0, H.jsxs)(`div`, { className: `mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-12 md:gap-10 md:px-10`, children: [(0, H.jsx)(Td.header, { className: `min-w-0 md:col-span-4`, variants: np, initial: `hidden`, whileInView: `visible`, viewport: rp, children: (0, H.jsx)(`div`, { className: `md:sticky md:top-28`, children: (0, H.jsx)(`h2`, { id: `${e2}-title`, className: `font-display text-5xl leading-none tracking-tight md:text-7xl`, children: t2 }) }) }), (0, H.jsx)(Td.div, { className: `min-w-0 md:col-span-8`, variants: np, initial: `hidden`, whileInView: `visible`, viewport: rp, children: n2 })] }) });
}

const fullProfile = {"research":["Snow Cover Monitoring and Modelling","Climate Change Impact Assessment","Remote Sensing and GIS Applications in Water Resources","Google Earth Engine and Cloud-Based Geospatial Analytics","Flood, Flash Flood and GLOF Hazard Assessment","Landslide Susceptibility and Risk Modelling","Hydrological and Hydraulic Modelling (HEC-HMS, HEC-RAS)","Machine Learning Applications in Earth Sciences","Water Resources Planning and Management"],"projects":["PI - Development of a User-Friendly Web-Portal for Integrated Snow Cover and Meteorological Analysis with Land Use Change Detection Using Google Earth Engine, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Web-Based Decision Support Portal (Completed).","Co-PI - Comprehensive Mapping of Water Budget Dynamics and Reservoir Sedimentation in the Upper Krishna Basin using Google Earth Engine, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Product (Completed).","Co-PI - Site Suitability Mapping for Rainwater Harvesting and Spring Rejuvenation in the Tawi Basin, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Decision Support System and Thematic Maps (Completed).","Co-I - Mass Balance of Phuche and Khardung Glaciers, Ladakh Range with Implications for Downstream Water Availability under Changing Climate, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Technical Report and Glacier Mass Balance Dataset (Completed).","Co-PI - Understanding Cryospheric Processes in Response to Climate Change and Atmospheric Pollutants: A Case Study of Jhelum Basin, Kashmir Himalaya, India, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Cryosphere Monitoring Framework and Scientific Database (Ongoing).","Co-PI - Basin Scale Inventorying of Rock Glaciers for Hydrological Storage Estimation and Hazard Vulnerability Assessment, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Rock Glacier Inventory and Hazard Assessment Database (Ongoing).","Co-PI - Glacial and Landslide Lake Outburst Flood (G/LLOF) Studies in Veshaw Catchment of Jhelum River Basin, Kashmir Himalaya, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Hazard Assessment Maps and Technical Report (Ongoing).","Co-PI - Mass Balance Study of Phuche and Khardung Glaciers, Ladakh Range: Impact on Downstream Water Availability and Atmospheric Pollutant Effect in a Changing Climate, Research Project, Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: Glacier Mass Balance Assessment and Climate Impact Analysis (Ongoing)."],"service":["Officer-in-Charge (O.C.), Remote Sensing & GIS Laboratory, NIH-WHRC, Jammu - Managed geospatial laboratory infrastructure, software resources, data processing facilities, and technical support for research and training activities.","Officer-in-Charge (O.C.), Rajbhasha (Official Language), NIH-WHRC, Jammu - Coordinated implementation of Rajbhasha policies and organized official language promotion activities.","GeM Secondary User, NIH-WHRC, Jammu - Assisted in procurement and purchase processes through the Government e-Marketplace (GeM) portal.","Deputy Officer-in-Charge (Dy. O.C.), Glacier Field Station, South Pullu, Ladakh - Assisted in management of field station operations, scientific instruments, and glacier monitoring activities.","Officer-in-Charge (O.C.), Generator, NIH-WHRC, Jammu - Oversaw operation, maintenance, and uninterrupted power backup support for the Centre.","Nodal Officer, Implementation of ET-Based Irrigation Performance Assessment Tool (CWC-NIH) - Coordinated implementation activities for Jammu & Kashmir and Himachal Pradesh.","Nodal Officer, Swachhata Hi Seva (SHS-2025) - Coordinated cleanliness and awareness activities under the national campaign.","Nodal Officer, Swachhata Pakhwada-2026 - Coordinated planning and execution of Swachhata Pakhwada activities at NIH-WHRC"],"guidance":["Co-supervised Mr. Deepanshu Sahu (M. Tech., Geoinformatics, SGVU) on “Spatio-Temporal Analysis of Wetland Suitability for Migratory Birds in Keoladeo National Park using Geospatial Techniques.”","Co-supervised Mr. Vishnu Sharma (M. Tech., Geoinformatics, SGVU) on “Spatio-Temporal Flood Hazard Zonation in Gujarat Using Remote Sensing and AHP-Based Multi-Criteria Analysis.”","Co-supervised Mr. Akshay Kumar (M.A., Geography, CU Uttarakhand) on “Comparative Analysis of Glacial Lake Outburst Flood Modeling for Kedartal and Padam Lake Using Remote Sensing and Geospatial Techniques.”"],"fieldwork":["06-09 August 2024 - Conducted field investigations in the Lidder and Sind catchments of the Upper Jhelum Basin, Jammu & Kashmir.","19-29 July 2024 - Participated in glaciological field investigations on Phuche and Khardung glaciers, Leh-Ladakh, for glacier mass balance and cryosphere monitoring studies.","05-20 October 2024 - Conducted glacier field surveys on Phuche and Khardung glaciers, Ladakh, including retrieval of meteorological sensors and ground temperature loggers.","14-28 July 2025 - Participated in a high-altitude glaciological field campaign on Phuche and Khardung glaciers in the Ganglas catchment, Leh District, Ladakh, for mass balance and hydrometeorological observations.","12-17 October 2025 - Undertook field investigations at the South Pullu Glacier Field Station and the Khardung-Phuche glacier catchments, Ladakh, for glacier monitoring and field instrumentation activities."],"webapps":["HIMCHITRA -A cloud-based portal for operational snow cover mapping, terrain analysis, and weather monitoring in the Western Himalaya using Google Earth Engine.","Flood Mapping and Monitoring Web Tool -Cloud-based application for near-real-time flood mapping using Sentinel-1 SAR and optical satellite datasets.","CSV-to-Shapefile Converter and GIS Utility Tools -Web-based geospatial data processing utilities.","Water Quality Assessment Dashboard -Satellite-based water quality monitoring tool utilizing Sentinel-2 datasets."],"memberships":["Member, Technical Advisory Committee (TAC) for projects related to Mitigation of Floods (Riverine) and Erosion (Riverine and Coastal) under the National Disaster Mitigation Fund (NDMF).","Member, Committee for Landslide Risk Mitigation in the Union Territory of Jammu & Kashmir.","Individual Member, International Society for Photogrammetry and Remote Sensing (ISPRS) Student Consortium.","Life Member, Indian Society of Remote Sensing (ISRS)."],"references":["Dr. Riyaz Ahmad Mir, Sc-C and In-charge, NIH-Western Himalayan Regional Centre Jammu, Mail Id: riyazmir.nihr@gov.in ","Prof. M. L. Kansal., Department of Water Resources Development and Management, IIT Roorkee, Mail id: mlk@wr.iitr.ac.in","Dr. P. K. Thakur, Scientist/Engineer – SG & Group Head, IIRS, ISRO, Water Resources Department, Mail id: wrd_office@iirs.gov.in"]};
const sharedTools = [
 {title:'WASAP · Water Surface Mapper',text:'Surface-water mapping with Google Earth Engine.',href:'https://learningiit.users.earthengine.app/view/surfacewater',label:'Open Earth Engine app'},
 {title:'Landsat Timelapse GIF Generator',text:'Explore land and water changes through Landsat time-lapse imagery.',href:'https://ee-nihr.projects.earthengine.app/view/timelapse',label:'Open Earth Engine app'},
 {title:'Nitrogen Oxide Visualization',text:'An Earth Engine visualization of nitrogen oxides around the coronavirus period.',href:'https://learningiit.users.earthengine.app/view/nitrogen-oxides-visualization-after-effects-of-corona',label:'Open Earth Engine app'},
 {title:'Australia Forest Fire Visualization',text:'Explore the earlier Earth Engine forest-fire visualization.',href:'https://learningiit.users.earthengine.app/view/forest-fire-australia',label:'Open Earth Engine app'},
 {title:'River Management Simulator',text:'A browser experiment in river health, budgets and environmental decisions.',href:'./apps/river-management.html',label:'Open simulator'},
 {title:'Custom Flappy Bird',text:'Choose a character image and navigate the arcade course.',href:'./apps/flappy-bird.html',label:'Play experiment'},
 {title:'Endless Runner',text:'A browser game with a custom character image, obstacles and coins.',href:'./apps/endless-runner.html',label:'Play experiment'},
 {title:'No-Cost EMI & GST Calculator',text:'The previously shared calculator for payments, fees and interest-tax breakdowns.',href:'./apps/emi-calculator.html',label:'Open calculator'}
];
function profileCard(title,text,tag,href,label) {
 return (0,H.jsxs)(Jf,{as:'article',className:'profile-card',children:[
  tag&&(0,H.jsx)('p',{className:'profile-tag',children:tag}),
  (0,H.jsx)('h3',{children:title}),text&&(0,H.jsx)('p',{className:'profile-copy',children:text}),
  href&&(0,H.jsx)('a',{className:'profile-link',href,...(href.startsWith('https:')?{target:'_blank',rel:'noopener noreferrer'}:{}),children:label})
 ]},title);
}
function profileList(items) {return (0,H.jsx)(Jf,{className:'profile-card',children:(0,H.jsx)('ul',{className:'profile-list',children:items.map(text=>(0,H.jsx)('li',{children:text},text))})});}
function FullOverview(){return (0,H.jsxs)('div',{className:'space-y-5',children:[(0,H.jsx)(bp,{}),(0,H.jsx)(Jf,{className:'profile-card',children:(0,H.jsx)('nav',{'aria-label':'Explore the full portfolio',className:'portfolio-directory',children:Gp.filter(s=>s.id!=='objective').map(s=>(0,H.jsx)('a',{href:'#'+s.id,children:s.title},s.id))})})]})}
function ResearchAreas(){return profileList(fullProfile.research)}
function ResearchProjects(){return (0,H.jsxs)('div',{className:'space-y-5',children:[(0,H.jsx)('p',{className:'text-haze',children:'Eight National Institute of Hydrology research projects. Roles and completion status follow the full October 2026 CV.'}),...fullProfile.projects.map(p=>{const [title,meta]=p.split(', Research Project, ');return profileCard(title,meta.replace('Duration: 24 months, Funding: >10 lakhs, Sponsored by: National Institute of Hydrology, Outcome: ','Outcome: '),'24 MONTHS · FUNDING > ₹10 LAKH · NIH')})]})}
function StudentGuidance(){return profileList(fullProfile.guidance)}
function FieldExperience(){return (0,H.jsx)('div',{className:'space-y-5',children:[...fullProfile.fieldwork].reverse().map(p=>{const [date,...text]=p.split(' - ');return profileCard(date,text.join(' - '),'FIELD CAMPAIGN')})})}
function ProfessionalService(){return (0,H.jsxs)('div',{className:'space-y-5',children:[(0,H.jsx)('p',{className:'text-haze',children:'Responsibilities documented during service at NIH–Western Himalayan Regional Centre.'}),profileList(fullProfile.service),(0,H.jsx)('h3',{className:'font-display text-3xl',children:'Committees & professional memberships'}),profileList(fullProfile.memberships)]})}
function AcademicReferences(){return (0,H.jsx)(Jf,{className:'profile-card',children:(0,H.jsxs)('details',{children:[(0,H.jsx)('summary',{className:'profile-summary',children:'Academic references'}),(0,H.jsx)('ul',{className:'profile-list',children:fullProfile.references.map(p=>(0,H.jsx)('li',{children:p},p))})]})})}
function WebTools(){return (0,H.jsxs)('div',{className:'space-y-5',children:[
 (0,H.jsx)('h3',{className:'font-display text-3xl',children:'Research & institutional applications'}),
 (0,H.jsx)('p',{className:'text-haze',children:'Scientific, training and operational products listed in the full CV. These applications are not currently available in the public domain. Contact me for research enquiries.'}),
 (0,H.jsx)('div',{className:'profile-grid',children:fullProfile.webapps.map(p=>{const [title,...text]=p.split(/[ ]+-[ ]*/);return profileCard(title,text.join(' – '),'INSTITUTIONAL ACCESS','mailto:'+ip.email,'Enquire about this tool')})}),
 (0,H.jsx)('h3',{className:'font-display text-3xl',children:'Previously shared web tools'}),
 (0,H.jsx)('p',{className:'text-haze',children:'Browser tools are included within this website. Earth Engine links open their separate hosted applications.'}),
 (0,H.jsx)('div',{className:'profile-grid',children:sharedTools.map(p=>profileCard(p.title,p.text,p.href.startsWith('https:')?'EARTH ENGINE':'BROWSER TOOL',p.href,p.label))})
 ]})}

var Gp = [
{id:'objective',title:'About',Body:FullOverview},{id:'research',title:'Research areas',Body:ResearchAreas},
{id:'projects',title:'Projects',Body:ResearchProjects},{id:'webtools',title:'Web tools',Body:WebTools},
{id:'experience',title:'Experience',Body:xp},{id:'education',title:'Education',Body:Cp},
{id:'guidance',title:'Student guidance',Body:StudentGuidance},{id:'fieldwork',title:'Fieldwork',Body:FieldExperience},
{id:'skills',title:'Skills',Body:Ep},{id:'awards',title:'Awards',Body:Dp},
{id:'publications',title:'Publications',Body:Pp},{id:'service',title:'Service & memberships',Body:ProfessionalService},
{id:'references',title:'References',Body:AcademicReferences},{id:'contact',title:'Contact',Body:Fp}];

function Kp() {
  return (0, H.jsxs)(ql, { reducedMotion: `user`, children: [(0, H.jsx)(`a`, { href: `#main`, className: `skip-link`, children: `Skip to content` }), (0, H.jsx)(`div`, { className: `campus-background`, "aria-hidden": true, children: (0, H.jsx)(`img`, { src: `./assets/mountain-campus.webp`, alt: ``, fetchPriority: `high`, width: 1916, height: 821 }) }), (0, H.jsx)(`div`, { className: `vignette`, "aria-hidden": `true` }), (0, H.jsx)(`div`, { className: `grain`, "aria-hidden": `true` }), (0, H.jsx)(qf, {}), (0, H.jsx)(Kf, { sections: Gp }), (0, H.jsxs)(`main`, { id: `main`, className: `relative z-10`, children: [(0, H.jsx)(yp, {}), Gp.map(({ id: e2, title: t2, Body: n2 }) => (0, H.jsx)(Wp, { id: e2, title: t2, children: (0, H.jsx)(n2, {}) }, e2))] }), (0, H.jsx)(Ip, {})] });
}
(0, y.createRoot)(document.getElementById(`root`)).render((0, H.jsx)(v.StrictMode, { children: (0, H.jsx)(Kp, {}) }));
export { s as a, o as i, p as n, l as o, d as r, x as t };

