import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  nuxtApp.provide(
    'apiFetch',
    $fetch.create({
      baseURL: config.public.baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  )
})
