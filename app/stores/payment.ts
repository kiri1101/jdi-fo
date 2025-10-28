interface PaymentResponse {
  pesake: {
    code: string | number
    detail: string
    detail_error: string
    level: string
  }
  data: object
}

export const usePaymentStore = defineStore(
  'payment',
  () => {
    const response = ref<object>({})

    const checkStatusResponse = ref<object>({})

    const updateResponse = (resp: PaymentResponse) => (response.value = resp)

    const updateCheckStatusResponse = (resp: PaymentResponse) =>
      (checkStatusResponse.value = resp)

    const reset = () => (response.value = {})

    const resetCheckStatus = () => (checkStatusResponse.value = {})

    return {
      response,
      checkStatusResponse,
      updateResponse,
      reset,
      updateCheckStatusResponse,
      resetCheckStatus,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
