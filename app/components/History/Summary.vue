<script setup>
const config = useRuntimeConfig()
const historyStore = useHistoryStore()
const { formatAmount, formatDate, filterPayment } = useUtils()
const { invoiceStatus } = useTransaction()
const { e, s } = useNotify()
const { t, locale } = useI18n()
const isLoading = ref(false)
const searchIndex = ref('')
const filter = ref()
const filteredBills = ref([])
const filterOption = ref('')
const formError = ref([])

onMounted(() => (filteredBills.value = historyStore.list.payments))

const toggleFilter = event => filter.value.toggle(event)

const showBillList = computed(() =>
  filteredBills.value.length > 0 ? true : false
)
const isFilterActive = computed(() =>
  filterOption.value.trim().length > 0 ? true : false
)

const filteringBills = status => {
  toggleFilter()
  filterOption.value = status
  filteredBills.value = filterPayment(status, historyStore.list.payments)
}

const clearFilter = () => {
  filterOption.value = ''
  filteredBills.value = historyStore.list.payments
}

const submit = async () => {
  isLoading.value = true

  try {
    const { apiResponse, validError } = await $fetch(
      config.public.server.history,
      {
        method: 'POST',
        body: {
          clientId: searchIndex.value,
          lang: locale.value,
        },
        key: 'history',
      }
    )

    // Set validation errors
    formError.value = validError

    console.log('search receipt response in summary: ', apiResponse)

    // handle API response errors
    if (apiResponse === null) {
      e(t('page.error.http_500'))
    } else if (typeof apiResponse.pesake.code === 'number') {
      e(apiResponse.pesake.detail)
    } else if (Object.keys(apiResponse?.data).length > 0) {
      // update history data
      historyStore.updateList(apiResponse.data)
      // flash success alert
      s(t('page.success.history_found'))
    }
  } catch (error) {
    e(t('page.error.global'))
    console.log('history summary error: ', error)
  } finally {
    isLoading.value = false
  }
}

watch(
  () => formError.value,
  error => {
    if (error && error.length > 0) {
      e(error[0].message)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div
    class="w-full max-w-2xl p-2 mx-auto space-y-4 bg-white border border-gray-300 rounded-md"
  >
    <ul
      class="flex flex-col md:flex-row md:items-center justify-between pb-2.5 border-b border-gray-200 space-y-3 md:space-y-0"
    >
      <li class="flex flex-row items-center space-x-1.5">
        <span class="p-1.5 bg-emerald-200 rounded">
          <i class="pi pi-user text-emerald-700" />
        </span>

        <span>
          <h5 class="text-base font-semibold">
            {{ $t('page.history.label.client_history') }}
          </h5>
          <h6 class="text-sm">
            {{ $t('page.history.label.view_bill') }}
          </h6>
        </span>
      </li>
      <li class="flex flex-row items-center space-x-1">
        <span v-show="isLoading">
          <i class="text-blue-500 pi pi-spinner animate-spin" />
        </span>

        <InputGroup>
          <input-text-input
            id="searchIndex"
            v-model="searchIndex"
            custom-class="uppercase"
            border-radius="rounded-md"
            border-color="border-gray-300"
            autocomplete="off"
            :placeholder="$t('page.history.label.client')"
          />

          <InputGroupAddon>
            <button-primary-button
              @click.prevent="submit"
              icon="pi pi-search"
              pt:root="h-[2.20rem]"
            />
          </InputGroupAddon>
        </InputGroup>
      </li>
    </ul>

    <div class="pb-3 space-y-2">
      <div
        class="px-1.5 py-2 rounded bg-blue-100 border border-gray-300 space-y-1"
      >
        <p class="pb-0.5 space-x-2 text-sm border-b border-gray-300">
          <span class="font-semibold text-slate-900">
            {{ $t('page.history.label.bills') }}
          </span>
          <span class="font-semibold text-slate-500">
            {{ $t('page.history.label.gb_recap') }}
          </span>
        </p>

        <ol class="flex flex-row flex-wrap justify-between gap-3">
          <li class="flex flex-col font-bold">
            <span class="text-xs text-slate-500">
              {{ $t('page.history.label.stats.total') }}
            </span>
            <span class="text-xl sm:text-2xl">
              {{ formatAmount(historyStore.list.totals.totalInvoices) }}
            </span>
          </li>
          <li class="flex flex-col font-bold">
            <span class="text-xs text-slate-500">
              {{ $t('page.history.label.stats.paid') }}
            </span>
            <span class="text-xl sm:text-2xl">
              {{ formatAmount(historyStore.list.totals.totalPaidInvoices) }}
            </span>
          </li>
          <li class="flex flex-col font-bold">
            <span class="text-xs text-slate-500">
              {{ $t('page.history.label.stats.unpaid') }}
            </span>
            <span class="text-xl sm:text-2xl">
              {{ formatAmount(historyStore.list.totals.totalUnpaidInvoices) }}
            </span>
          </li>
          <li class="flex flex-col font-bold">
            <span class="text-xs text-slate-500">
              {{ $t('page.history.label.stats.partial') }}
            </span>
            <span class="text-xl sm:text-2xl">
              {{
                formatAmount(
                  historyStore.list.totals.totalPartiallypaidInvoices
                )
              }}
            </span>
          </li>
          <li class="flex flex-col font-bold">
            <span class="text-xs text-slate-500">
              {{ $t('page.history.label.stats.late') }}
            </span>
            <span class="text-xl sm:text-2xl">
              {{ formatAmount(historyStore.list.totals.totalLateInvoices) }}
            </span>
          </li>
        </ol>
      </div>

      <ol
        class="grid grid-cols-2 px-1.5 py-2 rounded bg-blue-100 border border-gray-300 divide-x-2 divide-gray-500"
      >
        <li class="flex flex-col font-bold">
          <span class="text-xs text-slate-500">
            {{ $t('page.history.label.stats.amount.total') }}
          </span>
          <span class="text-xl sm:text-2xl">
            {{ formatAmount(historyStore.list.totals.totalAmount)
            }}{{ config.public.settings.currency }}
          </span>
        </li>
        <li class="flex flex-col font-bold text-right">
          <span class="text-xs text-slate-500">
            {{ $t('page.history.label.stats.amount.paid') }}
          </span>
          <span class="text-xl sm:text-2xl">
            {{ formatAmount(historyStore.list.totals.totalPaidInvoicesAmount)
            }}{{ config.public.settings.currency }}
          </span>
        </li>
      </ol>
    </div>

    <div class="space-y-3" aria-label="Payment history">
      <h5 class="flex items-center pb-1 space-x-1 border-b border-gray-300">
        <icon-light prime-icon="pi pi-filter" @click.prevent="toggleFilter" />
        <span class="font-semibold">
          {{ $t('page.history.label.stats.filter') }}
        </span>
        <icon-light
          v-if="isFilterActive"
          prime-icon="pi pi-times-circle"
          style="font-size: 0.9rem"
          @click.prevent="clearFilter"
        />

        <Popover ref="filter">
          <ul class="w-28">
            <li
              @click.prevent="filteringBills('paid')"
              class="flex flex-row items-center justify-between p-1 text-sm cursor-pointer rounded-xs hover:bg-blue-500 hover:text-white"
            >
              Paid

              <i
                v-show="filterOption === 'paid'"
                class="pi pi-check-circle"
                style="font-size: 0.8rem; font-weight: 600"
              />
            </li>
            <li
              @click.prevent="filteringBills('unpaid')"
              class="flex flex-row items-center justify-between p-1 text-sm cursor-pointer hover:bg-blue-500 hover:text-white rounded-xs"
            >
              Unpaid

              <i
                v-show="filterOption === 'unpaid'"
                class="pi pi-check-circle"
                style="font-size: 0.8rem; font-weight: 600"
              />
            </li>
            <li
              @click.prevent="filteringBills('late')"
              class="flex flex-row items-center justify-between p-1 text-sm cursor-pointer hover:bg-blue-500 hover:text-white rounded-xs"
            >
              Late

              <i
                v-show="filterOption === 'late'"
                class="pi pi-check-circle"
                style="font-size: 0.8rem; font-weight: 600"
              />
            </li>
          </ul>
        </Popover>
      </h5>

      <ul
        v-if="showBillList"
        class="space-y-4 divide-y divide-gray-300 sm:w-72 md:w-auto"
      >
        <li
          v-for="payment in filteredBills"
          :key="payment.transactionId"
          class="flex flex-row justify-between py-1"
        >
          <div class="flex flex-row items-center space-x-2">
            <i class="p-2 text-white bg-gray-700 rounded-full pi pi-receipt" />

            <h5 class="flex flex-col">
              <span class="text-xs sm:text-sm"
                >#{{ payment.invoice.invoiceCode }}</span
              >
              <span class="text-xs">
                <i
                  class="mr-1 pi pi-user"
                  style="font-size: 0.7rem; font-weight: 600"
                />
                {{ payment.client.firstName }} {{ payment.client.lastName }}
              </span>
              <span class="font-bold sm:text-lg"
                >{{ formatAmount(payment.amount)
                }}{{ config.public.settings.currency }}</span
              >
            </h5>
          </div>

          <div class="flex flex-col items-end space-y-1">
            <span class="text-xs font-semibold tracking-tight">
              {{ formatDate(payment.invoice.issueDate) }}
            </span>

            <span
              class="flex flex-col items-center space-x-2 space-y-1 sm:space-y-0 sm:flex-row"
            >
              <Badge
                :value="payment.invoice.status"
                size="small"
                :severity="invoiceStatus(payment.invoice.status)"
                class="capitalize"
              />

              <nuxt-link
                v-if="payment?.url !== null"
                :to="payment?.url"
                target="_blank"
              >
                <i
                  class="transition duration-200 ease-linear cursor-pointer hover:text-blue-500 pi pi-cloud-download download-icon"
                />
              </nuxt-link>
            </span>
          </div>
        </li>
      </ul>

      <div
        v-else
        class="flex flex-col items-center justify-center h-full space-y-4"
      >
        <img
          src="/assets/svg/searching.svg"
          class="object-contain object-center h-44"
          alt="Credit card payment illustration"
        />

        <h5 class="text-xs font-medium text-center text-secondary">
          {{ $t('page.history.empty_bill') }}
        </h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-icon {
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .download-icon {
    font-size: 1.2rem;
  }
}
</style>
