import { fetch } from '@@/server/utils/fetch'
import { z, errorMap } from '@@/server/utils/zod'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const msg = `Must be at least ${config.public.validation.zod.min} characters long`

  const checkPaymentSchema = z.object({
    order: z.string().min(Number(config.public.validation.zod.min), msg),
    invoice: z.string().min(Number(config.public.validation.zod.min), msg),
    client: z.string().min(Number(config.public.validation.zod.min), msg),
    lang: z.literal(['en', 'fr']),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    checkPaymentSchema.safeParse(body)
  )

  let respError = {
    response: {},
    code: 0,
  }

  type InitResponse = {
    pesake: {
      code: string
      level: string
      detail: string
      detail_error: string
    }
    data: object
  }

  const response: InitResponse | null = payload.success
    ? ((await api(config.private.payment.checkStatus, {
        method: 'POST',
        body: {
          invoiceCode: payload.data.invoice.trim(),
          clientCode: payload.data.client.trim(),
          orderNumber: payload.data.order.trim(),
          lang: payload.data.lang,
          origin: config.public.settings.origin,
        },
      }).catch(error => {
        respError.response = error.data
        respError.code = error.status
        return null
      })) as InitResponse | null)
    : null

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
    errResponse: respError.code !== 0 ? respError : null,
  }
})
