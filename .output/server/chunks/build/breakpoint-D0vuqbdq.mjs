import { ref, computed, shallowRef, mergeProps, hasInjectionContext, nextTick, toValue, watchEffect, getCurrentInstance, inject, isRef, watch, shallowReadonly, getCurrentScope, onScopeDispose, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import script from './index-DwowyFOw.mjs';
import { s as storages, f as useToast, b as useRuntimeConfig } from './server.mjs';
import { defineStore } from 'pinia';

const _sfc_main$1 = {
  __name: "LogoWhiteBlue",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "w-16 h-16"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 100 100",
        class: __props.size,
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M35 25 L35 55 Q35 65 45 65 Q55 65 55 55 L55 45" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round"></path><rect x="60" y="30" width="15" height="20" rx="2" fill="#2563eb" opacity="0.9"></rect><line x1="63" y1="35" x2="72" y2="35" stroke="#fff" stroke-width="1"></line><line x1="63" y1="38" x2="70" y2="38" stroke="#fff" stroke-width="1"></line><line x1="63" y1="41" x2="72" y2="41" stroke="#fff" stroke-width="1"></line><line x1="63" y1="44" x2="68" y2="44" stroke="#fff" stroke-width="1"></line></svg>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo/WhiteBlue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "InputTextInput",
  __ssrInlineRender: true,
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    customClass: {
      type: String,
      default: ""
    },
    borderRadius: {
      type: String,
      default: "rounded"
    },
    borderColor: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = script;
      _push(ssrRenderComponent(_component_InputText, mergeProps({
        type: __props.inputType,
        class: ["w-full rounded h-9", __props.customClass, __props.borderRadius, __props.borderColor],
        autocomplete: "off"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/TextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useReceiptStore = defineStore(
  "receipt",
  () => {
    const receiptInfo = ref({});
    const updateReceiptInfo = (receipt) => receiptInfo.value = receipt;
    const resetReceiptInfo = () => receiptInfo.value = {};
    return {
      receiptInfo,
      updateReceiptInfo,
      resetReceiptInfo
    };
  },
  {
    persist: {
      storage: storages.localStorage()
    }
  }
);
const useNotify = () => {
  const toast = useToast();
  const config = useRuntimeConfig();
  const s = (message, title = "Success") => toast.add({
    severity: "success",
    summary: title,
    detail: message,
    life: parseInt(config.public.settings.toastLife)
  });
  const e = (message, title = "Error") => toast.add({
    severity: "error",
    summary: title,
    detail: message,
    life: parseInt(config.public.settings.toastLife)
  });
  const i = (message, title = "Info") => toast.add({
    severity: "info",
    summary: title,
    detail: message,
    life: parseInt(config.public.settings.toastLife)
  });
  const w = (message, title = "Warning") => toast.add({
    severity: "warn",
    summary: title,
    detail: message,
    life: parseInt(config.public.settings.toastLife)
  });
  return { s, e, i, w };
};
const useTransaction = () => {
  const label = (status) => {
    let output;
    switch (status.toLowerCase()) {
      case "t":
        output = {
          en: "Paid",
          fr: "Payer"
        };
        break;
      case "c":
        output = {
          en: "Canceled",
          fr: "Annuler"
        };
        break;
      case "e":
        output = {
          en: "Pending",
          fr: "En cours"
        };
        break;
      case "x":
        output = {
          en: "Expired",
          fr: "Expirer"
        };
        break;
      case "o":
        output = {
          en: "Operator error",
          fr: "Erreur opérateur"
        };
        break;
      default:
        output = {
          en: "Pending",
          fr: "En cours"
        };
        break;
    }
    return output;
  };
  const color = (status) => {
    let output;
    switch (status.toLowerCase()) {
      case "t":
        output = "success";
        break;
      case "c":
        output = "danger";
        break;
      case "e":
        output = "warn";
        break;
      case "x":
        output = "info";
        break;
      case "o":
        output = "secondary";
        break;
      default:
        output = "contrast";
        break;
    }
    return output;
  };
  const paymentMethod = (code) => {
    let output;
    switch (code.toLowerCase()) {
      case "orange-money":
        output = "OM";
        break;
      case "mobile-money":
        output = "MM";
        break;
      case "yoomee-money":
        output = "YM";
        break;
      case "express-union":
        output = "EU";
        break;
      default:
        output = "PM";
        break;
    }
    return output;
  };
  const invoiceStatus = (status) => {
    let output;
    switch (status) {
      case "unpaid":
        output = "contrast";
        break;
      case "partial":
        output = "info";
        break;
      case "paid":
        output = "success";
        break;
      case "late":
        output = "danger";
        break;
      case "cancelled":
        output = "warn";
        break;
      default:
        output = "secondary";
        break;
    }
    return output;
  };
  return {
    label,
    color,
    paymentMethod,
    invoiceStatus
  };
};
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = /* @__NO_SIDE_EFFECTS__ */ (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
const isClient = false;
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?\d+\.?\d*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = shallowRef(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    if (isActive.value)
      timer = setInterval(cb, intervalValue);
  }
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        ;
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
  const isMounted = shallowRef(false);
  getCurrentInstance();
  return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
  const isMounted = /* @__PURE__ */ useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? /* @__PURE__ */ injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
// @__NO_SIDE_EFFECTS__
function useBreakpoints(breakpoints, options = {}) {
  function getValue2(k, delta) {
    let v = toValue(breakpoints[toValue(k)]);
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window: window2 = defaultWindow, strategy = "min-width", ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const ssrSupport = typeof ssrWidth === "number";
  const mounted = ssrSupport ? shallowRef(false) : { value: true };
  if (ssrSupport) {
    tryOnMounted(() => mounted.value = !!window2);
  }
  function match(query, size) {
    if (!mounted.value && ssrSupport) {
      return query === "min" ? ssrWidth >= pxValue(size) : ssrWidth <= pxValue(size);
    }
    if (!window2)
      return false;
    return window2.matchMedia(`(${query}-width: ${size})`).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(() => `(min-width: ${getValue2(k)})`, options);
  };
  const smallerOrEqual = (k) => {
    return useMediaQuery(() => `(max-width: ${getValue2(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => strategy === "min-width" ? greaterOrEqual(k) : smallerOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  function current() {
    const points = Object.keys(breakpoints).map((k) => [k, shortcutMethods[k], pxValue(getValue2(k))]).sort((a, b) => a[2] - b[2]);
    return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
  }
  return Object.assign(shortcutMethods, {
    greaterOrEqual,
    smallerOrEqual,
    greater(k) {
      return useMediaQuery(() => `(min-width: ${getValue2(k, 0.1)})`, options);
    },
    smaller(k) {
      return useMediaQuery(() => `(max-width: ${getValue2(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(() => `(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match("min", getValue2(k, 0.1));
    },
    isGreaterOrEqual(k) {
      return match("min", getValue2(k));
    },
    isSmaller(k) {
      return match("max", getValue2(k, -0.1));
    },
    isSmallerOrEqual(k) {
      return match("max", getValue2(k));
    },
    isInBetween(a, b) {
      return match("min", getValue2(a)) && match("max", getValue2(b, -0.1));
    },
    current,
    active() {
      const bps = current();
      return computed(() => bps.value.length === 0 ? "" : bps.value.at(strategy === "min-width" ? -1 : 0));
    }
  });
}
function useCountdown(initialCountdown, options) {
  var _a, _b;
  const remaining = shallowRef(toValue(initialCountdown));
  const intervalController = useIntervalFn(() => {
    var _a2, _b2;
    const value = remaining.value - 1;
    remaining.value = value < 0 ? 0 : value;
    (_a2 = options == null ? void 0 : options.onTick) == null ? void 0 : _a2.call(options);
    if (remaining.value <= 0) {
      intervalController.pause();
      (_b2 = options == null ? void 0 : options.onComplete) == null ? void 0 : _b2.call(options);
    }
  }, (_a = options == null ? void 0 : options.interval) != null ? _a : 1e3, { immediate: (_b = options == null ? void 0 : options.immediate) != null ? _b : false });
  const reset = (countdown) => {
    var _a2;
    remaining.value = (_a2 = toValue(countdown)) != null ? _a2 : toValue(initialCountdown);
  };
  const stop = () => {
    intervalController.pause();
    reset();
  };
  const resume = () => {
    if (!intervalController.isActive.value) {
      if (remaining.value > 0) {
        intervalController.resume();
      }
    }
  };
  const start = (countdown) => {
    reset(countdown);
    intervalController.resume();
  };
  return {
    remaining,
    reset,
    stop,
    start,
    pause: intervalController.pause,
    resume,
    isActive: intervalController.isActive
  };
}
const _imports_0 = "" + __buildAssetsURL("searching.DvYYvCA4.svg");
const useBreakpoint = () => {
  const breakpoints = /* @__PURE__ */ useBreakpoints(breakpointsTailwind);
  const canShowBillModal = computed(() => breakpoints.isSmaller("md"));
  return { breakpoints, canShowBillModal };
};

export { _imports_0 as _, useBreakpoint as a, useNotify as b, _sfc_main$1 as c, _sfc_main as d, useCountdown as e, useTransaction as f, useReceiptStore as u };
//# sourceMappingURL=breakpoint-D0vuqbdq.mjs.map
