import type { H3Event } from 'h3'

export const fetch = (event: H3Event) => {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: config.public.baseURL,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
