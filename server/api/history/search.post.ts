import { fetch } from '@@/server/utils/fetch'
import { z, errorMap } from '@@/server/utils/zod'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const msg = `Must be at least ${config.public.validation.zod.min} characters long`

  const receiptSearchSchema = z.object({
    clientId: z.string().min(Number(config.public.validation.zod.min), msg),
    lang: z.literal(['en', 'fr']),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    receiptSearchSchema.safeParse(body)
  )

  let respError = {
    response: {},
    code: 0,
  }

  type HistorySearchResponse = {
    pesake: {
      code: string
      level: string
      detail: string
      detail_error: string
    }
    data: object
  }

  const response: HistorySearchResponse | null = payload.success
    ? ((await api(config.private.history, {
        method: 'POST',
        body: {
          clientCode: payload.data.clientId.trim(),
          lang: payload.data.lang,
          origin: config.public.settings.origin,
        },
      }).catch(error => {
        respError.response = error.data
        respError.code = error.status
        return null
      })) as HistorySearchResponse | null)
    : null

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
    errResponse: respError.code !== 0 ? respError : null,
  }
})
