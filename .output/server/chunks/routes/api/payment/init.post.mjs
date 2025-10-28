import { c as defineEventHandler, u as useRuntimeConfig, f as fetch, r as readValidatedBody, e as errorMap } from '../../../_/nitro.mjs';
import * as z from 'zod';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@intlify/utils';
import 'vue-router';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
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
import '@primeuix/styles/inputtext';
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
import '@primeuix/styles/button';
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
import '@primeuix/styles/popover';
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
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'node:crypto';

const init_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const msg = `Must be at least ${config.public.validation.zod.min} characters long`;
  const paymentInitSchema = z.object({
    amount: z.number().min(Number(config.public.validation.zod.min), msg),
    method: z.literal([
      "MOBILE-MONEY",
      "ORANGE-MONEY",
      "EXPRESS-UNION",
      "YOOMEE-MONEY"
    ]),
    phone: z.string().min(Number(config.public.validation.zod.phone.min), msg),
    invoice: z.string().min(Number(config.public.validation.zod.min), msg),
    client: z.string().min(Number(config.public.validation.zod.min), msg),
    lang: z.literal(["en", "fr"])
  });
  const api = fetch();
  const payload = await readValidatedBody(
    event,
    (body) => paymentInitSchema.safeParse(body)
  );
  let respError = {
    response: {},
    code: 0
  };
  const response = payload.success ? await api(config.private.payment.init, {
    method: "POST",
    body: {
      invoiceCode: payload.data.invoice.trim(),
      clientCode: payload.data.client.trim(),
      payerNumber: Number(payload.data.phone.replaceAll("-", "")),
      paymentAmount: Number(payload.data.amount),
      paymentMean: payload.data.method.trim(),
      currency: "XAF",
      lang: payload.data.lang,
      origin: config.public.settings.origin
    }
  }).catch((error) => {
    respError.response = error.data;
    respError.code = error.status;
    return null;
  }) : null;
  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
    errResponse: respError.code !== 0 ? respError : null
  };
});

export { init_post as default };
//# sourceMappingURL=init.post.mjs.map
