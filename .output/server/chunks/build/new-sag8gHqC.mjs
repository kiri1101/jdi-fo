import { _ as __nuxt_component_0 } from './nuxt-link-CP638tQN.mjs';
import { u as useReceiptStore, a as useBreakpoint, _ as _imports_0$1, b as useNotify, c as _sfc_main$1$2, d as _sfc_main$5, e as useCountdown, f as useTransaction } from './breakpoint-D0vuqbdq.mjs';
import { _ as _sfc_main$1$1, a as __nuxt_component_1 } from './PrimaryButton-CKvHtW81.mjs';
import { ref, mergeProps, withCtx, createVNode, unref, isRef, watch, computed, createTextVNode, toDisplayString, withDirectives, vShow, withModifiers, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { a as useI18n, u as useHead, b as useRuntimeConfig, _ as _export_sfc, d as useRoute, e as useLocalePath, s as storages, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './WBLabelButton-lE-CwLzq.mjs';
import script$5 from './index-CvHpbBLk.mjs';
import script$6 from './index-B1UYJNaF.mjs';
import script$4 from './index-CRuWI5E5.mjs';
import script$3 from './index-BCj7Lm5q.mjs';
import script$2 from './index-CVAnvv07.mjs';
import script from './index-CS8sdzmN.mjs';
import script$1 from './index-DcctWVMg.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import moment from 'moment';
import { defineStore } from 'pinia';
import './index-DwowyFOw.mjs';
import '@primeuix/utils';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/styles/inputtext';
import './index-DhGLZj8T.mjs';
import '@primeuix/utils/zindex';
import './index-p2BB5KWr.mjs';
import './index-De0dg7Ws.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import './index-rAVNvoJo.mjs';
import '@primeuix/utils/eventbus';
import './index-D21vFaAL.mjs';
import './index-2dA4pXcI.mjs';
import '@primeuix/styles/ripple';
import '@primeuix/styles/popover';
import './index-Cd02S5MF.mjs';
import './index-SKZaUXlw.mjs';
import './index-BLn-pl6M.mjs';
import '@primeuix/styles/button';
import 'vue-router';
import '@intlify/utils';
import 'deep-pick-omit';
import '@primeuix/styles/base';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import 'node:url';
import 'node:crypto';
import './index-BHPxzwA3.mjs';
import './index-Bb2_MOLm.mjs';
import './index-C2NXbyCT.mjs';
import './index-w-bYDrUM.mjs';
import './index-CemNMTbd.mjs';
import './index-BN3Nv0zP.mjs';
import './index-C_BIMYbC.mjs';
import './index-Din928lO.mjs';

const _sfc_main$4 = {
  __name: "ReceiptSearchForm",
  __ssrInlineRender: true,
  emits: ["showReceipt"],
  setup(__props, { emit: __emit }) {
    useRoute();
    useReceiptStore();
    useNotify();
    const { t, locale } = useI18n();
    const form = ref({
      receiptId: "",
      clientId: "",
      lang: locale.value
    });
    const invalidInput = ref({
      receiptId: false,
      clientId: false
    });
    const formError = ref([]);
    const isLoading = ref(false);
    const resetInvalidInput = () => invalidInput.value = {
      receiptId: false,
      clientId: false
    };
    const errorMessage = (name) => {
      const error = formError.value.find((e) => e.name === name);
      return error ? error.message : "";
    };
    watch(
      () => formError.value,
      (error) => {
        invalidInput.value = error && error.length > 0 ? {
          receiptId: error.some((e) => e.name === "receiptId"),
          clientId: error.some((e) => e.name === "clientId")
        } : resetInvalidInput();
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_logo_white_blue = _sfc_main$1$2;
      const _component_input_text_input = _sfc_main$5;
      const _component_button_primary_button = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full max-w-md mx-auto space-y-2 rounded-md shadow primary-slate p-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_logo_white_blue, {
        size: "w-24 h-24",
        class: "self-center"
      }, null, _parent));
      _push(`<h4 class="text-lg font-semibold text-center capitalize text-secondary">${ssrInterpolate(_ctx.$t("page.bill.form.title"))}</h4><form aria-label="Search receipt form"><div><label for="receiptId" class="text-xs text-secondary">${ssrInterpolate(_ctx.$t("page.bill.form.label.receipt"))}</label>`);
      _push(ssrRenderComponent(_component_input_text_input, {
        id: "receiptId",
        modelValue: unref(form).receiptId,
        "onUpdate:modelValue": ($event) => unref(form).receiptId = $event,
        "custom-class": "uppercase",
        "border-radius": "rounded-md",
        "border-color": "border-gray-300",
        autocomplete: "off"
      }, null, _parent));
      if (unref(invalidInput).receiptId) {
        _push(`<p class="text-xs text-red-500 transition duration-300 ease-out animate-swingIn-top-fwd">${ssrInterpolate(errorMessage("receiptId"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="clientId" class="text-xs text-secondary">${ssrInterpolate(_ctx.$t("page.bill.form.label.client"))}</label>`);
      _push(ssrRenderComponent(_component_input_text_input, {
        id: "clientId",
        modelValue: unref(form).clientId,
        "onUpdate:modelValue": ($event) => unref(form).clientId = $event,
        "custom-class": "uppercase",
        "border-radius": "rounded-md",
        "border-color": "border-gray-300",
        autocomplete: "off"
      }, null, _parent));
      if (unref(invalidInput).clientId) {
        _push(`<p class="text-xs text-red-500 transition duration-300 ease-out animate-swingIn-top-fwd">${ssrInterpolate(errorMessage("clientId"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_button_primary_button, {
        type: "submit",
        label: _ctx.$t("page.button.search"),
        loading: unref(isLoading),
        icon: "pi pi-search",
        iconPos: "right",
        "pt:label": "text-sm",
        width: "w-full mt-5",
        class: "h-9",
        "aria-label": "Search receipt"
      }, null, _parent));
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Receipt/SearchForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "InputNumberInput",
  __ssrInlineRender: true,
  props: {
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
      const _component_InputNumber = script$5;
      _push(ssrRenderComponent(_component_InputNumber, mergeProps({
        class: ["w-full rounded h-9", __props.customClass, __props.borderRadius, __props.borderColor],
        fluid: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/NumberInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "InputNumberMask",
  __ssrInlineRender: true,
  props: {
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
      const _component_InputMask = script$6;
      _push(ssrRenderComponent(_component_InputMask, mergeProps({
        pt: {
          root: ["w-full rounded h-9", __props.customClass, __props.borderRadius, __props.borderColor]
        }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/NumberMask.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/image/om-logo.png");
const _imports_1 = "" + __buildAssetsURL("mtn-logo.-KaC1Mbg.png");
const _imports_2 = "" + __buildAssetsURL("eum-logo.BVF3JoAU.png");
const _imports_3 = "" + __buildAssetsURL("yoomee.D5jq43eE.jpg");
const usePaymentStore = defineStore(
  "payment",
  () => {
    const response = ref({});
    const checkStatusResponse = ref({});
    const updateResponse = (resp) => response.value = resp;
    const updateCheckStatusResponse = (resp) => checkStatusResponse.value = resp;
    const reset = () => response.value = {};
    const resetCheckStatus = () => checkStatusResponse.value = {};
    return {
      response,
      checkStatusResponse,
      updateResponse,
      reset,
      updateCheckStatusResponse,
      resetCheckStatus
    };
  },
  {
    persist: {
      storage: storages.localStorage()
    }
  }
);
const _sfc_main$1 = {
  __name: "ReceiptSummary",
  __ssrInlineRender: true,
  emits: ["refresh"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    const receiptStore = useReceiptStore();
    const localePath = useLocalePath();
    const payStore = usePaymentStore();
    const { e, s, w } = useNotify();
    const { locale } = useI18n();
    const { label, color, paymentMethod, invoiceStatus } = useTransaction();
    const clientInfo = receiptStore.receiptInfo.client;
    const showPayment = ref(false);
    const showPaymentMessage = ref("1");
    const methodMessage = ref("");
    const paymentMessages = ref({});
    const isLoading = ref(false);
    const showTimer = ref(true);
    const formError = ref([]);
    const form = ref({
      amount: receiptStore.receiptInfo.invoice.balanceDue,
      method: "",
      phone: "",
      invoice: receiptStore.receiptInfo.invoice.invoiceCode,
      client: receiptStore.receiptInfo.client.cref,
      lang: locale.value
    });
    const { remaining, start } = useCountdown(
      Number(config.public.settings.payTimeout),
      {
        onComplete() {
          checkStatus();
        },
        onTick() {
        }
      }
    );
    const month = computed(
      () => moment.parseZone(receiptStore.receiptInfo.invoice.issueDate).format("MMMM, YYYY")
    );
    const issueDate = computed(
      () => moment.parseZone(receiptStore.receiptInfo.invoice.issueDate).format("DD/MM/YYYY")
    );
    const dueDate = computed(
      () => moment.parseZone(receiptStore.receiptInfo.invoice.dueDate).format("DD/MM/YYYY")
    );
    const isPaid = computed(() => Boolean(receiptStore.receiptInfo.invoice.is_pay));
    const displayedEmail = computed(
      () => clientInfo.email.length > 0 ? clientInfo.email : clientInfo.email2
    );
    const formattedTime = computed(() => {
      const m = Math.floor(remaining.value / 60);
      const s2 = remaining.value % 60;
      return `${m.toString().padStart(2, "0")}:${s2.toString().padStart(2, "0")}`;
    });
    const toggleTimerVisibility = () => showTimer.value = !showTimer.value;
    const showingPayment = () => {
      showPayment.value = true;
      console.log("open payment: ", isPaid.value);
    };
    const totalItemPrize = (qyt, unitPrize) => formatAmount(Number(qyt) * Number(unitPrize));
    const formatAmount = (amount) => new Intl.NumberFormat("en-US").format(amount);
    const chosenPaymentMethod = (method) => {
      form.value.method = method;
      methodMessage.value = paymentMessages.value[method.toLowerCase()].en;
    };
    const showDownloadIcon = (status) => status.toLowerCase() === "t" ? true : false;
    const pay = async () => {
      isLoading.value = true;
      const { apiResponse, validError } = await $fetch(
        config.public.server.payment.init,
        {
          method: "POST",
          body: form.value,
          key: "payInit"
        }
      );
      formError.value = validError;
      console.log("Payment init response:", apiResponse);
      console.log("Payment init validation error:", validError);
      console.log("Payment init payload:", form.value);
      if (apiResponse === null) {
        e("No response from server");
        isLoading.value = false;
        showPaymentMessage.value = "1";
      } else if (typeof apiResponse.pesake.code === "number") {
        e(apiResponse.pesake.detail);
        isLoading.value = false;
        showPaymentMessage.value = "1";
      } else if (Object.keys(apiResponse?.data).length > 0) {
        showPaymentMessage.value = "0";
        payStore.updateResponse(apiResponse.data);
        s("Payment initiated successfully.");
        start();
      }
    };
    const checkStatus = async () => {
      try {
        const { apiResponse, validError } = await $fetch(
          config.public.server.payment.checkStatus,
          {
            method: "POST",
            body: {
              order: payStore.response.payment.orderNumber,
              invoice: receiptStore.receiptInfo.invoice.invoiceCode,
              client: receiptStore.receiptInfo.client.cref,
              lang: locale.value
            },
            key: "payCheck"
          }
        );
        formError.value = validError;
        console.log("Payment check response:", apiResponse);
        console.log("Payment check validation error:", validError);
        console.log("Payment check payload:", form.value);
        if (apiResponse === null) {
          e("No response from server");
        } else if (typeof apiResponse.pesake.code === "number") {
          e(apiResponse.pesake.detail);
        } else if (Object.keys(apiResponse?.data).length > 0) {
          payStore.updateCheckStatusResponse(apiResponse.data);
          switch (apiResponse.data.payment.status) {
            case "E":
              w("Transaction pending. Please wait...");
              methodMessage.value = "The payment is taking longer than expected. Please contact customer service.";
              toggleTimerVisibility();
              break;
            case "X":
              w("Transaction expired. Please try again.");
              break;
            case "O":
              w("Transaction failed. Please try again.");
              break;
            case "C":
              w("Transaction canceled! Please try again.");
              break;
            case "T":
              w("Transaction successful!");
              showPayment.value = false;
              await navigateTo({
                path: localePath("/receipt/new"),
                query: {
                  receipt_id: receiptStore.receiptInfo.invoice.invoiceCode,
                  account_id: receiptStore.receiptInfo.client.cref
                }
              });
              break;
            default:
              break;
          }
        }
      } catch (error) {
      } finally {
        isLoading.value = false;
        showPaymentMessage.value = "0";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = script$1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_button_outline_w_b_label_button = __nuxt_component_1$1;
      const _component_Dialog = script;
      const _component_input_number_input = _sfc_main$3;
      const _component_input_number_mask = _sfc_main$2;
      const _component_Accordion = script$2;
      const _component_AccordionPanel = script$3;
      const _component_AccordionContent = script$4;
      const _component_button_primary_button = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-2xl pb-3 mx-auto space-y-4 border border-gray-300 rounded-md" }, _attrs))} data-v-3483cda3><div class="flex flex-col justify-between gap-4 px-6 py-4 text-white sm:flex-row sm:items-center bg-gradient-to-r from-blue-500 to-blue-400 rounded-t-md" data-v-3483cda3><span data-v-3483cda3><h2 class="text-xl font-bold" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.number"))} #${ssrInterpolate(unref(receiptStore).receiptInfo.invoice.invoiceCode)}</h2><h5 class="text-sm" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.period"))} - ${ssrInterpolate(unref(month))}</h5></span>`);
      _push(ssrRenderComponent(_component_Badge, {
        value: unref(receiptStore).receiptInfo.invoice.status,
        size: "small",
        severity: unref(invoiceStatus)(unref(receiptStore).receiptInfo.invoice.status)
      }, null, _parent));
      _push(`</div><ul class="flex flex-col flex-wrap justify-between gap-4 px-6 sm:flex-row" aria-label="Receipt deadline and client information" data-v-3483cda3><li class="flex items-center space-x-4" data-v-3483cda3><i class="pi pi-user text-secondary" data-v-3483cda3></i><span class="text-xs" data-v-3483cda3><h5 class="text-secondary" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.label.client"))}</h5><h4 class="font-semibold text-primary" data-v-3483cda3>${ssrInterpolate(unref(clientInfo).firstName)} ${ssrInterpolate(unref(clientInfo).lastName)}</h4><h5 class="text-secondary" data-v-3483cda3>${ssrInterpolate(unref(displayedEmail))}</h5></span></li><li class="flex items-center space-x-4" data-v-3483cda3><i class="pi pi-calendar text-secondary" data-v-3483cda3></i><span class="text-xs" data-v-3483cda3><h5 class="text-secondary" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.label.emission_date"))}</h5><h4 class="text-sm font-semibold text-primary" data-v-3483cda3>${ssrInterpolate(unref(issueDate))}</h4></span></li><li class="flex items-center space-x-4" data-v-3483cda3><i class="pi pi-calendar text-secondary" data-v-3483cda3></i><span class="text-xs" data-v-3483cda3><h5 class="text-secondary" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.label.due_date"))}</h5><h4 class="text-sm font-semibold text-primary" data-v-3483cda3>${ssrInterpolate(unref(dueDate))}</h4></span></li></ul><div class="px-6" aria-label="Details of services" data-v-3483cda3><span class="flex items-center pb-2 mb-4 space-x-1 font-semibold border-b border-gray-300 text-primary" data-v-3483cda3><i class="pi pi-receipt text-secondary" data-v-3483cda3></i><h3 data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.label.bill_details"))}</h3></span></div><table class="w-full px-1 py-1 text-sm bg-blue-400 border-collapse divide-y divide-gray-300 table-auto sm:px-6" data-v-3483cda3><thead class="text-left text-white uppercase text-secondary" data-v-3483cda3><tr data-v-3483cda3><th class="p-3 text-xs font-semibold" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.desc"))}</th><th class="p-3 text-xs font-semibold" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.qty"))}</th><th class="p-3 text-xs font-semibold" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.prize"))}</th><th class="p-3 text-xs font-semibold" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.total"))}</th></tr></thead><tbody class="text-sm bg-white divide-y divide-gray-300" data-v-3483cda3><!--[-->`);
      ssrRenderList(unref(receiptStore).receiptInfo.items, (item) => {
        _push(`<tr data-v-3483cda3><td class="p-3" data-v-3483cda3>${ssrInterpolate(item.articleName)}</td><td class="p-3" data-v-3483cda3>${ssrInterpolate(item.quantity)}</td><td class="p-3" data-v-3483cda3>${ssrInterpolate(formatAmount(item.price))}F</td><td class="p-3" data-v-3483cda3>${ssrInterpolate(totalItemPrize(item.quantity, item.price))}F</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="flex justify-end" data-v-3483cda3><div class="flex flex-col self-end w-full max-w-xs px-2 space-y-2 text-sm" data-v-3483cda3><span class="flex items-center justify-between" data-v-3483cda3><h5 data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.total_exc_vat"))}:</h5><h5 data-v-3483cda3>${ssrInterpolate(formatAmount(unref(receiptStore).receiptInfo.invoice.amount))}F</h5></span><span class="flex items-center justify-between" data-v-3483cda3><h5 data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.discount"))}:</h5><h5 data-v-3483cda3>${ssrInterpolate(unref(receiptStore).receiptInfo.invoice.discount)}F</h5></span><span class="flex items-center justify-between pt-3 font-bold border-t border-gray-300" data-v-3483cda3><h5 data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.ttc_total"))}:</h5><h5 data-v-3483cda3>${ssrInterpolate(formatAmount(unref(receiptStore).receiptInfo.invoice.amount))}F</h5></span><span class="flex items-center justify-between font-bold text-red-500" data-v-3483cda3><h5 data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.table.amount_pay"))}:</h5><h5 data-v-3483cda3>${ssrInterpolate(formatAmount(unref(receiptStore).receiptInfo.invoice.balanceDue))}F </h5></span></div></div><div class="px-3 space-y-3" aria-label="Payment history" data-v-3483cda3><h5 class="flex items-center pb-1 space-x-1 border-b border-gray-300" data-v-3483cda3><i class="pi pi-history" style="${ssrRenderStyle({ "font-weight": "600" })}" data-v-3483cda3></i><span class="font-semibold" data-v-3483cda3>${ssrInterpolate(_ctx.$t("page.bill.pay_history"))}</span></h5><ul class="space-y-4 divide-y divide-gray-300" data-v-3483cda3><!--[-->`);
      ssrRenderList(unref(receiptStore).receiptInfo.transList, (transaction) => {
        _push(`<li class="flex flex-row justify-between py-1" data-v-3483cda3><div class="flex flex-row items-center space-x-2" data-v-3483cda3><span class="px-2 py-2.5 text-xs font-semibold text-white bg-gray-700 rounded-full" data-v-3483cda3>${ssrInterpolate(unref(paymentMethod)(transaction.paymentMean))}</span><h5 class="flex flex-col" data-v-3483cda3><span class="text-xs" data-v-3483cda3>${ssrInterpolate(transaction.orderNumber)}</span><span class="text-lg font-semibold" data-v-3483cda3>${ssrInterpolate(formatAmount(Number(transaction.paidAmount)))}F </span></h5></div><div class="flex flex-col items-end" data-v-3483cda3><span class="text-xs font-semibold tracking-tight" data-v-3483cda3>${ssrInterpolate(unref(moment)(transaction.createdAt).format("DD MMM, YYYY"))}</span><span class="flex items-center space-x-2" data-v-3483cda3>`);
        _push(ssrRenderComponent(_component_Badge, {
          value: unref(label)(transaction.status).en,
          size: "small",
          severity: unref(color)(transaction.status)
        }, null, _parent));
        if (showDownloadIcon(transaction.status)) {
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: transaction?.url,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="transition duration-200 ease-linear cursor-pointer hover:text-blue-500 pi pi-cloud-download download-icon" data-v-3483cda3${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "transition duration-200 ease-linear cursor-pointer hover:text-blue-500 pi pi-cloud-download download-icon" })
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div></li>`);
      });
      _push(`<!--]--></ul></div><div class="flex flex-col xs:flex-row items-end justify-end px-1.5 xs:space-x-2" data-v-3483cda3>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(receiptStore).receiptInfo.invoice.url,
        target: "_blank",
        class: "flex items-center justify-center px-3 w-full sm:w-28 h-7 text-sm font-semibold border border-gray-900 rounded-md hover:bg-[#334155] hover:text-white transition duration-200 ease-linear"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-download mr-1.5" data-v-3483cda3${_scopeId}></i> ${ssrInterpolate(_ctx.$t("page.bill.download"))}`);
          } else {
            return [
              createVNode("i", { class: "pi pi-download mr-1.5" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("page.bill.download")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(isPaid)) {
        _push(ssrRenderComponent(_component_button_outline_w_b_label_button, {
          icon: "pi pi-credit-card",
          label: "Payer",
          "pt:label": "text-sm",
          "aria-label": "Search receipt",
          width: "w-full sm:w-24",
          class: "mt-3 h-7 sm:mt-0",
          onClick: showingPayment
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(isPaid)) {
        _push(ssrRenderComponent(_component_Dialog, {
          visible: unref(showPayment),
          "onUpdate:visible": ($event) => isRef(showPayment) ? showPayment.value = $event : null,
          modal: "",
          header: "Pay your bill",
          style: { width: "25rem" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-3 space-y-2 border-t border-gray-300" data-v-3483cda3${_scopeId}><p class="flex flex-col bg-sky-100 rounded-md p-3 space-y-0.5" data-v-3483cda3${_scopeId}><span class="font-semibold" data-v-3483cda3${_scopeId}>${ssrInterpolate(_ctx.$t("page.bill.number"))} #${ssrInterpolate(unref(receiptStore).receiptInfo.invoice.invoiceCode)}</span><span class="text-sm text-blue-600" data-v-3483cda3${_scopeId}>${ssrInterpolate(_ctx.$t("page.bill.period"))} - ${ssrInterpolate(unref(month))}</span><span class="text-3xl font-bold" data-v-3483cda3${_scopeId}>${ssrInterpolate(formatAmount(unref(receiptStore).receiptInfo.invoice.balanceDue))}F </span></p><form aria-label="Payment form" data-v-3483cda3${_scopeId}><div data-v-3483cda3${_scopeId}><label for="amount" class="text-xs text-secondary" data-v-3483cda3${_scopeId}>${ssrInterpolate(_ctx.$t("page.bill.label.to_pay"))}</label>`);
              _push2(ssrRenderComponent(_component_input_number_input, {
                id: "amount",
                inputId: "amount",
                modelValue: unref(form).amount,
                "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                "custom-class": "uppercase",
                "border-radius": "rounded-md",
                "border-color": "border-gray-300",
                autocomplete: "off"
              }, null, _parent2, _scopeId));
              _push2(`</div><div data-v-3483cda3${_scopeId}><label for="phone" class="text-xs text-secondary" data-v-3483cda3${_scopeId}>${ssrInterpolate(_ctx.$t("page.bill.label.phone"))}</label>`);
              _push2(ssrRenderComponent(_component_input_number_mask, {
                id: "phone",
                modelValue: unref(form).phone,
                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                mask: "9-99-99-99-99",
                "custom-class": "uppercase",
                "border-radius": "rounded-md",
                "border-color": "border-gray-300"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col mt-2" data-v-3483cda3${_scopeId}><p class="text-xs font-semibold text-secondary" data-v-3483cda3${_scopeId}>${ssrInterpolate(_ctx.$t("page.bill.label.payment_method"))}</p><ul class="flex flex-row self-center py-2 space-x-4" data-v-3483cda3${_scopeId}><!--[-->`);
              ssrRenderList(unref(receiptStore).receiptInfo.paymentMethodList, (method) => {
                _push2(`<li data-v-3483cda3${_scopeId}>`);
                if (method.code === "OM") {
                  _push2(`<img${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass([
                    "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                    {
                      "ring-2 ring-offset-2 ring-orange-400": unref(form).method === method.meanCode
                    }
                  ])}" alt="Orange money logo" data-v-3483cda3${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (method.code === "MOMO") {
                  _push2(`<img${ssrRenderAttr("src", _imports_1)} class="${ssrRenderClass([
                    "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                    {
                      "ring-2 ring-offset-2 ring-yellow-400": unref(form).method === method.meanCode
                    }
                  ])}" alt="MTN mobile money logo" data-v-3483cda3${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (method.code === "EU") {
                  _push2(`<img${ssrRenderAttr("src", _imports_2)} class="${ssrRenderClass([
                    "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                    {
                      "ring-2 ring-offset-2 ring-blue-400": unref(form).method === method.meanCode
                    }
                  ])}" alt="Express union money logo" data-v-3483cda3${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (method.code === "YUM") {
                  _push2(`<img${ssrRenderAttr("src", _imports_3)} class="${ssrRenderClass([
                    "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                    {
                      "ring-2 ring-offset-2 ring-red-400": unref(form).method === method.meanCode
                    }
                  ])}" alt="Yoomee money logo" data-v-3483cda3${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul>`);
              _push2(ssrRenderComponent(_component_Accordion, {
                value: unref(showPaymentMessage),
                "onUpdate:value": ($event) => isRef(showPaymentMessage) ? showPaymentMessage.value = $event : null
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AccordionPanel, { value: "0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AccordionContent, { pt: {
                            content: "px-0 pb-0 bg-transparent"
                          } }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="h-[1px] w-full bg-gray-300 my-2" data-v-3483cda3${_scopeId4}></div><div class="relative flex flex-col p-2 mt-2 rounded-lg bg-sky-100" data-v-3483cda3${_scopeId4}><p class="text-sm tracking-tight leading-3.5 text-center" data-v-3483cda3${_scopeId4}>${ssrInterpolate(unref(methodMessage))}</p><h1 class="text-2xl font-bold text-center" style="${ssrRenderStyle(unref(showTimer) ? null : { display: "none" })}" data-v-3483cda3${_scopeId4}>${ssrInterpolate(unref(formattedTime))}</h1><button type="button" class="flex items-center bg-slate-700 text-white px-2 py-0.5 rounded space-x-1 cursor-pointer hover:shadow hover:bg-emerald-300 transition duration-200 ease-linear justify-center w-24 mx-auto mt-2" style="${ssrRenderStyle(!unref(showTimer) ? null : { display: "none" })}" data-v-3483cda3${_scopeId4}>${ssrInterpolate(_ctx.$t("page.bill.contact"))} <i class="ml-1 pi pi-whatsapp" data-v-3483cda3${_scopeId4}></i></button></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "h-[1px] w-full bg-gray-300 my-2" }),
                                  createVNode("div", { class: "relative flex flex-col p-2 mt-2 rounded-lg bg-sky-100" }, [
                                    createVNode("p", { class: "text-sm tracking-tight leading-3.5 text-center" }, toDisplayString(unref(methodMessage)), 1),
                                    withDirectives(createVNode("h1", { class: "text-2xl font-bold text-center" }, toDisplayString(unref(formattedTime)), 513), [
                                      [vShow, unref(showTimer)]
                                    ]),
                                    withDirectives(createVNode("button", {
                                      type: "button",
                                      class: "flex items-center bg-slate-700 text-white px-2 py-0.5 rounded space-x-1 cursor-pointer hover:shadow hover:bg-emerald-300 transition duration-200 ease-linear justify-center w-24 mx-auto mt-2"
                                    }, [
                                      createTextVNode(toDisplayString(_ctx.$t("page.bill.contact")) + " ", 1),
                                      createVNode("i", { class: "ml-1 pi pi-whatsapp" })
                                    ], 512), [
                                      [vShow, !unref(showTimer)]
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AccordionContent, { pt: {
                              content: "px-0 pb-0 bg-transparent"
                            } }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-[1px] w-full bg-gray-300 my-2" }),
                                createVNode("div", { class: "relative flex flex-col p-2 mt-2 rounded-lg bg-sky-100" }, [
                                  createVNode("p", { class: "text-sm tracking-tight leading-3.5 text-center" }, toDisplayString(unref(methodMessage)), 1),
                                  withDirectives(createVNode("h1", { class: "text-2xl font-bold text-center" }, toDisplayString(unref(formattedTime)), 513), [
                                    [vShow, unref(showTimer)]
                                  ]),
                                  withDirectives(createVNode("button", {
                                    type: "button",
                                    class: "flex items-center bg-slate-700 text-white px-2 py-0.5 rounded space-x-1 cursor-pointer hover:shadow hover:bg-emerald-300 transition duration-200 ease-linear justify-center w-24 mx-auto mt-2"
                                  }, [
                                    createTextVNode(toDisplayString(_ctx.$t("page.bill.contact")) + " ", 1),
                                    createVNode("i", { class: "ml-1 pi pi-whatsapp" })
                                  ], 512), [
                                    [vShow, !unref(showTimer)]
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AccordionPanel, { value: "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_AccordionContent, { pt: {
                            content: "px-0 pb-0 bg-transparent"
                          } }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "h-[1px] w-full bg-gray-300 my-2" }),
                              createVNode("div", { class: "relative flex flex-col p-2 mt-2 rounded-lg bg-sky-100" }, [
                                createVNode("p", { class: "text-sm tracking-tight leading-3.5 text-center" }, toDisplayString(unref(methodMessage)), 1),
                                withDirectives(createVNode("h1", { class: "text-2xl font-bold text-center" }, toDisplayString(unref(formattedTime)), 513), [
                                  [vShow, unref(showTimer)]
                                ]),
                                withDirectives(createVNode("button", {
                                  type: "button",
                                  class: "flex items-center bg-slate-700 text-white px-2 py-0.5 rounded space-x-1 cursor-pointer hover:shadow hover:bg-emerald-300 transition duration-200 ease-linear justify-center w-24 mx-auto mt-2"
                                }, [
                                  createTextVNode(toDisplayString(_ctx.$t("page.bill.contact")) + " ", 1),
                                  createVNode("i", { class: "ml-1 pi pi-whatsapp" })
                                ], 512), [
                                  [vShow, !unref(showTimer)]
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_button_primary_button, {
                type: "submit",
                label: `${_ctx.$t("page.button.pay")} ${formatAmount(unref(form).amount)}F`,
                iconPos: "right",
                loading: unref(isLoading),
                "pt:label": "text-sm",
                width: "w-full mt-3",
                class: "h-9",
                "aria-label": "Search receipt"
              }, null, _parent2, _scopeId));
              _push2(`</div></form></div>`);
            } else {
              return [
                createVNode("div", { class: "p-3 space-y-2 border-t border-gray-300" }, [
                  createVNode("p", { class: "flex flex-col bg-sky-100 rounded-md p-3 space-y-0.5" }, [
                    createVNode("span", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.bill.number")) + " #" + toDisplayString(unref(receiptStore).receiptInfo.invoice.invoiceCode), 1),
                    createVNode("span", { class: "text-sm text-blue-600" }, toDisplayString(_ctx.$t("page.bill.period")) + " - " + toDisplayString(unref(month)), 1),
                    createVNode("span", { class: "text-3xl font-bold" }, toDisplayString(formatAmount(unref(receiptStore).receiptInfo.invoice.balanceDue)) + "F ", 1)
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(pay, ["prevent"]),
                    "aria-label": "Payment form"
                  }, [
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "amount",
                        class: "text-xs text-secondary"
                      }, toDisplayString(_ctx.$t("page.bill.label.to_pay")), 1),
                      createVNode(_component_input_number_input, {
                        id: "amount",
                        inputId: "amount",
                        modelValue: unref(form).amount,
                        "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                        "custom-class": "uppercase",
                        "border-radius": "rounded-md",
                        "border-color": "border-gray-300",
                        autocomplete: "off"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "phone",
                        class: "text-xs text-secondary"
                      }, toDisplayString(_ctx.$t("page.bill.label.phone")), 1),
                      createVNode(_component_input_number_mask, {
                        id: "phone",
                        modelValue: unref(form).phone,
                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                        mask: "9-99-99-99-99",
                        "custom-class": "uppercase",
                        "border-radius": "rounded-md",
                        "border-color": "border-gray-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col mt-2" }, [
                      createVNode("p", { class: "text-xs font-semibold text-secondary" }, toDisplayString(_ctx.$t("page.bill.label.payment_method")), 1),
                      createVNode("ul", { class: "flex flex-row self-center py-2 space-x-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(receiptStore).receiptInfo.paymentMethodList, (method) => {
                          return openBlock(), createBlock("li", {
                            key: method.code
                          }, [
                            method.code === "OM" ? (openBlock(), createBlock("img", {
                              key: 0,
                              onClick: withModifiers(($event) => chosenPaymentMethod(method.meanCode), ["prevent"]),
                              src: _imports_0,
                              class: [
                                "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                                {
                                  "ring-2 ring-offset-2 ring-orange-400": unref(form).method === method.meanCode
                                }
                              ],
                              alt: "Orange money logo"
                            }, null, 10, ["onClick"])) : createCommentVNode("", true),
                            method.code === "MOMO" ? (openBlock(), createBlock("img", {
                              key: 1,
                              onClick: withModifiers(($event) => chosenPaymentMethod(method.meanCode), ["prevent"]),
                              src: _imports_1,
                              class: [
                                "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                                {
                                  "ring-2 ring-offset-2 ring-yellow-400": unref(form).method === method.meanCode
                                }
                              ],
                              alt: "MTN mobile money logo"
                            }, null, 10, ["onClick"])) : createCommentVNode("", true),
                            method.code === "EU" ? (openBlock(), createBlock("img", {
                              key: 2,
                              onClick: withModifiers(($event) => chosenPaymentMethod(method.meanCode), ["prevent"]),
                              src: _imports_2,
                              class: [
                                "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                                {
                                  "ring-2 ring-offset-2 ring-blue-400": unref(form).method === method.meanCode
                                }
                              ],
                              alt: "Express union money logo"
                            }, null, 10, ["onClick"])) : createCommentVNode("", true),
                            method.code === "YUM" ? (openBlock(), createBlock("img", {
                              key: 3,
                              onClick: withModifiers(($event) => chosenPaymentMethod(method.meanCode), ["prevent"]),
                              src: _imports_3,
                              class: [
                                "size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md",
                                {
                                  "ring-2 ring-offset-2 ring-red-400": unref(form).method === method.meanCode
                                }
                              ],
                              alt: "Yoomee money logo"
                            }, null, 10, ["onClick"])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ]),
                      createVNode(_component_Accordion, {
                        value: unref(showPaymentMessage),
                        "onUpdate:value": ($event) => isRef(showPaymentMessage) ? showPaymentMessage.value = $event : null
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AccordionPanel, { value: "0" }, {
                            default: withCtx(() => [
                              createVNode(_component_AccordionContent, { pt: {
                                content: "px-0 pb-0 bg-transparent"
                              } }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "h-[1px] w-full bg-gray-300 my-2" }),
                                  createVNode("div", { class: "relative flex flex-col p-2 mt-2 rounded-lg bg-sky-100" }, [
                                    createVNode("p", { class: "text-sm tracking-tight leading-3.5 text-center" }, toDisplayString(unref(methodMessage)), 1),
                                    withDirectives(createVNode("h1", { class: "text-2xl font-bold text-center" }, toDisplayString(unref(formattedTime)), 513), [
                                      [vShow, unref(showTimer)]
                                    ]),
                                    withDirectives(createVNode("button", {
                                      type: "button",
                                      class: "flex items-center bg-slate-700 text-white px-2 py-0.5 rounded space-x-1 cursor-pointer hover:shadow hover:bg-emerald-300 transition duration-200 ease-linear justify-center w-24 mx-auto mt-2"
                                    }, [
                                      createTextVNode(toDisplayString(_ctx.$t("page.bill.contact")) + " ", 1),
                                      createVNode("i", { class: "ml-1 pi pi-whatsapp" })
                                    ], 512), [
                                      [vShow, !unref(showTimer)]
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["value", "onUpdate:value"]),
                      createVNode(_component_button_primary_button, {
                        type: "submit",
                        label: `${_ctx.$t("page.button.pay")} ${formatAmount(unref(form).amount)}F`,
                        iconPos: "right",
                        loading: unref(isLoading),
                        "pt:label": "text-sm",
                        width: "w-full mt-3",
                        class: "h-9",
                        "aria-label": "Search receipt"
                      }, null, 8, ["label", "loading"])
                    ])
                  ], 32)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Receipt/Summary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3483cda3"]]);
const _sfc_main = {
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    useReceiptStore();
    const config = useRuntimeConfig();
    const { t } = useI18n();
    const showReceipt = ref(false);
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const { canShowBillModal } = useBreakpoint();
    useHead({
      title: `${t("meta.invoice.title")} - ${config.public.appName}`,
      meta: [{ name: "description", content: "My JAWDI application." }]
    });
    const openingReceipt = () => showReceipt.value = true;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_receipt_search_form = _sfc_main$4;
      const _component_Translate = _sfc_main$1$1;
      const _component_receipt_summary = __nuxt_component_3;
      const _component_Dialog = script;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "grid w-full h-full md:grid-cols-[auto_1fr] lg:grid-cols-2",
        "aria-label": "New receipt page"
      }, _attrs))}><section class="flex flex-col px-4 bg-topography" aria-label="Search receipt form">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.$localePath("/"),
        class: "py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="p-1.5 text-sm text-blue-400 transition duration-300 ease-linear rounded-full cursor-pointer bg-slate-200 hover:bg-slate-50 pi pi-arrow-circle-left hover:text-blue-500" style="${ssrRenderStyle({ "font-size": "1.7rem" })}"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                class: "p-1.5 text-sm text-blue-400 transition duration-300 ease-linear rounded-full cursor-pointer bg-slate-200 hover:bg-slate-50 pi pi-arrow-circle-left hover:text-blue-500",
                style: { "font-size": "1.7rem" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col items-center justify-center h-full">`);
      _push(ssrRenderComponent(_component_receipt_search_form, { onShowReceipt: openingReceipt }, null, _parent));
      _push(`</div></section><section class="grid-rows-[auto_1fr_auto] items-center hidden h-full space-y-5 overflow-y-auto md:grid" aria-label="Receipt information"><div class="flex justify-end w-full pt-1.5 pr-3">`);
      _push(ssrRenderComponent(_component_Translate, null, null, _parent));
      _push(`</div>`);
      if (unref(showReceipt)) {
        _push(`<div class="flex items-center w-full h-full px-1">`);
        _push(ssrRenderComponent(_component_receipt_summary, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex flex-col items-center justify-center h-full space-y-4"><img${ssrRenderAttr("src", _imports_0$1)} class="object-contain object-center h-96" alt="Credit card payment illustration"><h5 class="text-xs font-medium text-center text-secondary">${ssrInterpolate(_ctx.$t("page.bill.empty_bill"))}</h5></div>`);
      }
      _push(`<p class="flex justify-between w-full px-2 py-1 text-xs font-semibold text-right"><span><span class="mr-0.5">©</span>${ssrInterpolate(unref(currentYear))} - ${ssrInterpolate(unref(config).public.appName)}</span><span>${ssrInterpolate(_ctx.$t("page.footer.rights"))}</span></p></section>`);
      if (unref(canShowBillModal)) {
        _push(ssrRenderComponent(_component_Dialog, {
          visible: unref(showReceipt),
          "onUpdate:visible": ($event) => isRef(showReceipt) ? showReceipt.value = $event : null,
          maximizable: "",
          modal: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_receipt_summary, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_receipt_summary)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/receipt/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-sag8gHqC.mjs.map
