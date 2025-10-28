import tailwindcss from '@tailwindcss/vite'
import Aura from '@primeuix/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false,
        },
      },
    },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Francais', file: 'fr.json' },
    ],
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  runtimeConfig: {
    private: {
      receipt: {
        search: process.env.API_RECEIPT_SEARCH || '',
      },
      payment: {
        init: process.env.API_PAYMENT_INIT || '',
        checkStatus: process.env.API_PAYMENT_CHECK_STATUS || '',
      },
      history: process.env.API_HISTORY_SEARCH || '',
    },
    public: {
      appName: process.env.APP_NAME || 'JAWDI',
      baseURL: process.env.BASE_URL || '',
      server: {
        search: process.env.SERVER_RECEIPT_SEARCH || '',
        payment: {
          init: process.env.SERVER_PAYMENT_INIT || '',
          checkStatus: process.env.SERVER_PAYMENT_CHECK_STATUS || '',
        },
        history: process.env.SERVER_HISTORY_SEARCH || '',
      },
      validation: {
        zod: {
          min: process.env.ZOD_MIN_LENGTH || '0',
          max: process.env.ZOD_MAX_LENGTH || '0',
          num: {
            min: process.env.ZOD_NUM_MIN_CHAR || '0',
          },
          phone: {
            min: process.env.ZOD_PHONE_MIN_LENGTH || '9',
          },
        },
      },
      settings: {
        toastLife: process.env.TOAST_LIFECYCLE_IN_SECONDS,
        payTimeout: process.env.PAYMENT_TIME_OUT_IN_S,
        currency: process.env.CURRENCY,
        origin: process.env.ORIGIN,
      },
    },
  },
})
