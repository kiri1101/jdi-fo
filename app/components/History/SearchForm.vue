<script setup>
const emit = defineEmits(['showHistory'])

const config = useRuntimeConfig()
const historyStore = useHistoryStore()
const { s, e } = useNotify()
const { t, locale } = useI18n()
const form = ref({
  clientId: '',
  lang: locale.value,
})
const invalidInput = ref({
  clientId: false,
})
const formError = ref([])
const isLoading = ref(false)

const resetInvalidInput = () =>
  (invalidInput.value = {
    clientId: false,
  })

const errorMessage = name => {
  const error = formError.value.find(e => e.name === name)
  return error ? error.message : ''
}

const submit = async () => {
  isLoading.value = true

  try {
    const { apiResponse, validError } = await $fetch(
      config.public.server.history,
      {
        method: 'POST',
        body: form.value,
        key: 'history',
      }
    )

    // Set validation errors
    formError.value = validError

    console.log('search history response: ', apiResponse)

    // handle API response errors
    if (apiResponse === null) {
      e(t('page.error.http_500'))
    } else if (typeof apiResponse?.pesake?.code === 'number') {
      e(apiResponse?.pesake?.detail)
    } else if (Object.keys(apiResponse?.data).length > 0) {
      // update history data
      historyStore.updateList(apiResponse.data)
      // flash success alert
      s(t('page.success.history_found'))
      // show receipt
      emit('showHistory', true)
    }
  } catch (error) {
    e(t('page.error.global'))
    console.log('signin error: ', error)
  } finally {
    isLoading.value = false
  }
}

watch(
  () => formError.value,
  error => {
    invalidInput.value =
      error && error.length > 0
        ? {
            clientId: error.some(e => e.name === 'clientId'),
          }
        : resetInvalidInput()
  },
  { immediate: true }
)
</script>

<template>
  <div
    class="flex flex-col w-full max-w-md mx-auto space-y-2 rounded-md shadow primary-slate p-7"
  >
    <logo-white-blue size="w-24 h-24" class="self-center" />

    <h4 class="text-lg font-semibold text-center capitalize text-secondary">
      {{ $t('page.history.form.title') }}
    </h4>

    <form @submit.prevent="submit" aria-label="Search client form">
      <div>
        <label for="clientId" class="text-xs text-secondary">
          {{ $t('page.history.label.client') }}
        </label>

        <input-text-input
          id="clientId"
          v-model="form.clientId"
          custom-class="uppercase"
          border-radius="rounded-md"
          border-color="border-gray-300"
          autocomplete="off"
        />

        <p
          class="text-xs text-red-500 transition duration-300 ease-out animate-swingIn-top-fwd"
          v-if="invalidInput.clientId"
        >
          {{ errorMessage('clientId') }}
        </p>
      </div>

      <button-primary-button
        type="submit"
        :label="$t('page.button.search')"
        :loading="isLoading"
        icon="pi pi-search"
        iconPos="right"
        pt:label="text-sm"
        width="w-full mt-5"
        class="h-9"
        aria-label="Search payment history"
      />
    </form>
  </div>
</template>
