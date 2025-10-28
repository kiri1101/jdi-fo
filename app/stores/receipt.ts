interface Response {
  pesake: {
    code: string | number
    detail: string
    detail_error: string
    level: string
  }
  data: object
}

export const useReceiptStore = defineStore(
  'receipt',
  () => {
    const receiptInfo = ref<object>({})

    const updateReceiptInfo = (receipt: Response) =>
      (receiptInfo.value = receipt)

    const resetReceiptInfo = () => (receiptInfo.value = {})

    return {
      receiptInfo,
      updateReceiptInfo,
      resetReceiptInfo,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
