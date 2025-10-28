import { ref, withCtx, unref, createTextVNode, withDirectives, toDisplayString, createVNode, vShow, createBlock, openBlock, Fragment, renderList, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CP638tQN.mjs';
import script from './index-DhGLZj8T.mjs';
import { _ as _export_sfc, a as useI18n, g as useSwitchLocalePath } from './server.mjs';
import script$1 from './index-Cd02S5MF.mjs';

const _sfc_main$3 = {
  __name: "IconDark",
  __ssrInlineRender: true,
  props: {
    primeIcon: String,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<i${ssrRenderAttrs(mergeProps({
        class: [
          "p-1 text-sm transition duration-300 ease-linear rounded cursor-pointer pi hover:bg-white hover:text-[#334155] text-white",
          __props.primeIcon,
          { "bg-white text-primary": __props.isActive }
        ]
      }, _attrs))}></i>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Dark.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "IconLight",
  __ssrInlineRender: true,
  props: {
    primeIcon: String,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<i${ssrRenderAttrs(mergeProps({
        class: [
          "p-1 text-sm transition duration-300 ease-linear rounded cursor-pointer pi hover:bg-blue-500 hover:text-white",
          __props.primeIcon,
          { "bg-blue-500 text-white": __props.isActive }
        ]
      }, _attrs))}></i>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Light.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Translate",
  __ssrInlineRender: true,
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const translate = ref();
    const toggleLocale = (event) => translate.value.toggle(event);
    const activeLocale = (lang) => lang === locale.value ? true : false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_dark = _sfc_main$3;
      const _component_icon_light = _sfc_main$2;
      const _component_Popover = script;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.dark) {
        _push(ssrRenderComponent(_component_icon_dark, {
          "prime-icon": "pi-language",
          onClick: toggleLocale
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_icon_light, {
          "prime-icon": "pi-language",
          onClick: toggleLocale
        }, null, _parent));
      }
      _push(ssrRenderComponent(_component_Popover, {
        ref_key: "translate",
        ref: translate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="w-24"${_scopeId}><!--[-->`);
            ssrRenderList(unref(locales), (locale2) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(switchLocalePath)(locale2.code),
                class: "flex flex-row items-center justify-between p-1 text-sm cursor-pointer hover:bg-blue-500 hover:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(locale2.name)} <i class="pi pi-check-circle" style="${ssrRenderStyle([
                      { "font-size": "0.8rem", "font-weight": "600" },
                      activeLocale(locale2.code) ? null : { display: "none" }
                    ])}"${_scopeId2}></i>`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(locale2.name) + " ", 1),
                      withDirectives(createVNode("i", {
                        class: "pi pi-check-circle",
                        style: { "font-size": "0.8rem", "font-weight": "600" }
                      }, null, 512), [
                        [vShow, activeLocale(locale2.code)]
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "w-24" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale2) => {
                  return openBlock(), createBlock("li", {
                    key: locale2.code
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(switchLocalePath)(locale2.code),
                      class: "flex flex-row items-center justify-between p-1 text-sm cursor-pointer hover:bg-blue-500 hover:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(locale2.name) + " ", 1),
                        withDirectives(createVNode("i", {
                          class: "pi pi-check-circle",
                          style: { "font-size": "0.8rem", "font-weight": "600" }
                        }, null, 512), [
                          [vShow, activeLocale(locale2.code)]
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Translate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ButtonPrimaryButton",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "w-full"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$1;
      _push(ssrRenderComponent(_component_Button, mergeProps({
        pt: {
          root: __props.width,
          icon: {
            style: "font-size: 0.8rem"
          }
        }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/PrimaryButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de8134a4"]]);

export { _sfc_main$1 as _, __nuxt_component_1 as a, _sfc_main$2 as b };
//# sourceMappingURL=PrimaryButton-CKvHtW81.mjs.map
