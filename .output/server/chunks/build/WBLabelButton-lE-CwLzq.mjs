import script from './index-Cd02S5MF.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "ButtonOutlineWBLabelButton",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "w-full"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      _push(ssrRenderComponent(_component_Button, mergeProps({
        variant: "outlined",
        pt: {
          root: `${__props.width}`,
          icon: {
            style: { "font-size": "0.85rem" }
          }
        }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Outline/WBLabelButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1bd71fc3"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=WBLabelButton-lE-CwLzq.mjs.map
