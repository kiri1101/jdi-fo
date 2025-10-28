interface Response {
  pesake: {
    code: string | number
    detail: string
    detail_error: string
    level: string
  }
  data: object
}

export const useHistoryStore = defineStore(
  'history',
  () => {
    const list = ref<object>({})

    const updateList = (history: Response) => (list.value = history)

    const resetList = () => (list.value = {})

    return {
      list,
      updateList,
      resetList,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
