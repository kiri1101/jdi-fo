<script setup>
import moment from 'moment'

const emit = defineEmits(['refresh'])
const config = useRuntimeConfig()
const receiptStore = useReceiptStore()
const localePath = useLocalePath()
const payStore = usePaymentStore()
const { e, s, w } = useNotify()
const { locale } = useI18n()
const { label, color, paymentMethod, invoiceStatus } = useTransaction()
const clientInfo = receiptStore.receiptInfo.client
const showPayment = ref(false)
const showPaymentMessage = ref('1')
const methodMessage = ref('')
const paymentMessages = ref({})
const isLoading = ref(false)
const showTimer = ref(true)
const formError = ref([])
const form = ref({
  amount: receiptStore.receiptInfo.invoice.balanceDue,
  method: '',
  phone: '',
  invoice: receiptStore.receiptInfo.invoice.invoiceCode,
  client: receiptStore.receiptInfo.client.cref,
  lang: locale.value,
})

onMounted(() => {
  if (!isPaid) {
    receiptStore.receiptInfo.paymentMethodList.forEach(method => {
      let msg = method.message.split('/')
      paymentMessages.value[method.meanCode.toLowerCase()] = {
        en: msg[0],
        fr: msg[1],
      }
    })
  }
})

const { remaining, start } = useCountdown(
  Number(config.public.settings.payTimeout),
  {
    onComplete() {
      checkStatus()
    },
    onTick() {},
  }
)

const month = computed(() =>
  moment
    .parseZone(receiptStore.receiptInfo.invoice.issueDate)
    .format('MMMM, YYYY')
)
const issueDate = computed(() =>
  moment
    .parseZone(receiptStore.receiptInfo.invoice.issueDate)
    .format('DD/MM/YYYY')
)
const dueDate = computed(() =>
  moment
    .parseZone(receiptStore.receiptInfo.invoice.dueDate)
    .format('DD/MM/YYYY')
)
const isPaid = computed(() => Boolean(receiptStore.receiptInfo.invoice.is_pay))
const displayedEmail = computed(() =>
  clientInfo.email.length > 0 ? clientInfo.email : clientInfo.email2
)
const formattedTime = computed(() => {
  const m = Math.floor(remaining.value / 60)
  const s = remaining.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

const toggleTimerVisibility = () => (showTimer.value = !showTimer.value)

const showingPayment = () => {
  showPayment.value = true
  console.log('open payment: ', isPaid.value)
}

const totalItemPrize = (qyt, unitPrize) =>
  formatAmount(Number(qyt) * Number(unitPrize))

const formatAmount = amount => new Intl.NumberFormat('en-US').format(amount)

const chosenPaymentMethod = method => {
  form.value.method = method
  methodMessage.value = paymentMessages.value[method.toLowerCase()].en
}

const showDownloadIcon = status => (status.toLowerCase() === 't' ? true : false)

const pay = async () => {
  isLoading.value = true

  const { apiResponse, validError } = await $fetch(
    config.public.server.payment.init,
    {
      method: 'POST',
      body: form.value,
      key: 'payInit',
    }
  )

  // Set validation errors
  formError.value = validError

  console.log('Payment init response:', apiResponse)
  console.log('Payment init validation error:', validError)
  console.log('Payment init payload:', form.value)

  // handle API response errors
  if (apiResponse === null) {
    e('No response from server')
    isLoading.value = false
    showPaymentMessage.value = '1'
  } else if (typeof apiResponse.pesake.code === 'number') {
    e(apiResponse.pesake.detail)
    isLoading.value = false
    showPaymentMessage.value = '1'
  } else if (Object.keys(apiResponse?.data).length > 0) {
    // show confirmation message
    showPaymentMessage.value = '0'
    // update response data
    payStore.updateResponse(apiResponse.data)
    // flash success alert
    s('Payment initiated successfully.')
    // start countdown timer
    start()
  }
}

const checkStatus = async () => {
  try {
    const { apiResponse, validError } = await $fetch(
      config.public.server.payment.checkStatus,
      {
        method: 'POST',
        body: {
          order: payStore.response.payment.orderNumber,
          invoice: receiptStore.receiptInfo.invoice.invoiceCode,
          client: receiptStore.receiptInfo.client.cref,
          lang: locale.value,
        },
        key: 'payCheck',
      }
    )

    // Set validation errors
    formError.value = validError

    console.log('Payment check response:', apiResponse)
    console.log('Payment check validation error:', validError)
    console.log('Payment check payload:', form.value)

    // handle API response errors
    if (apiResponse === null) {
      e('No response from server')
    } else if (typeof apiResponse.pesake.code === 'number') {
      e(apiResponse.pesake.detail)
    } else if (Object.keys(apiResponse?.data).length > 0) {
      // update response data
      payStore.updateCheckStatusResponse(apiResponse.data)
      // act as per status
      switch (apiResponse.data.payment.status) {
        case 'E':
          w('Transaction pending. Please wait...')
          methodMessage.value =
            'The payment is taking longer than expected. Please contact customer service.'
          toggleTimerVisibility()
          break
        case 'X':
          w('Transaction expired. Please try again.')
          break
        case 'O':
          w('Transaction failed. Please try again.')
          break
        case 'C':
          w('Transaction canceled! Please try again.')
          break
        case 'T':
          w('Transaction successful!')
          showPayment.value = false
          await navigateTo({
            path: localePath('/receipt/new'),
            query: {
              receipt_id: receiptStore.receiptInfo.invoice.invoiceCode,
              account_id: receiptStore.receiptInfo.client.cref,
            },
          })
          break

        default:
          break
      }
    }
  } catch (error) {
    //
  } finally {
    isLoading.value = false
    showPaymentMessage.value = '0'
  }
}
</script>

<template>
  <div
    class="w-full max-w-2xl pb-3 mx-auto space-y-4 border border-gray-300 rounded-md"
  >
    <div
      class="flex flex-col justify-between gap-4 px-6 py-4 text-white sm:flex-row sm:items-center bg-gradient-to-r from-blue-500 to-blue-400 rounded-t-md"
    >
      <span>
        <h2 class="text-xl font-bold">
          {{ $t('page.bill.number') }} #{{
            receiptStore.receiptInfo.invoice.invoiceCode
          }}
        </h2>
        <h5 class="text-sm">{{ $t('page.bill.period') }} - {{ month }}</h5>
      </span>

      <Badge
        :value="receiptStore.receiptInfo.invoice.status"
        size="small"
        :severity="invoiceStatus(receiptStore.receiptInfo.invoice.status)"
      />
    </div>

    <ul
      class="flex flex-col flex-wrap justify-between gap-4 px-6 sm:flex-row"
      aria-label="Receipt deadline and client information"
    >
      <li class="flex items-center space-x-4">
        <i class="pi pi-user text-secondary" />

        <span class="text-xs">
          <h5 class="text-secondary">{{ $t('page.bill.label.client') }}</h5>
          <h4 class="font-semibold text-primary">
            {{ clientInfo.firstName }} {{ clientInfo.lastName }}
          </h4>
          <h5 class="text-secondary">
            {{ displayedEmail }}
          </h5>
        </span>
      </li>
      <li class="flex items-center space-x-4">
        <i class="pi pi-calendar text-secondary" />

        <span class="text-xs">
          <h5 class="text-secondary">
            {{ $t('page.bill.label.emission_date') }}
          </h5>
          <h4 class="text-sm font-semibold text-primary">
            {{ issueDate }}
          </h4>
        </span>
      </li>
      <li class="flex items-center space-x-4">
        <i class="pi pi-calendar text-secondary" />

        <span class="text-xs">
          <h5 class="text-secondary">{{ $t('page.bill.label.due_date') }}</h5>
          <h4 class="text-sm font-semibold text-primary">
            {{ dueDate }}
          </h4>
        </span>
      </li>
    </ul>

    <div class="px-6" aria-label="Details of services">
      <span
        class="flex items-center pb-2 mb-4 space-x-1 font-semibold border-b border-gray-300 text-primary"
      >
        <i class="pi pi-receipt text-secondary" />

        <h3>{{ $t('page.bill.label.bill_details') }}</h3>
      </span>
    </div>

    <table
      class="w-full px-1 py-1 text-sm bg-blue-400 border-collapse divide-y divide-gray-300 table-auto sm:px-6"
    >
      <thead class="text-left text-white uppercase text-secondary">
        <tr>
          <th class="p-3 text-xs font-semibold">
            {{ $t('page.bill.table.desc') }}
          </th>
          <th class="p-3 text-xs font-semibold">
            {{ $t('page.bill.table.qty') }}
          </th>
          <th class="p-3 text-xs font-semibold">
            {{ $t('page.bill.table.prize') }}
          </th>
          <th class="p-3 text-xs font-semibold">
            {{ $t('page.bill.table.total') }}
          </th>
        </tr>
      </thead>
      <tbody class="text-sm bg-white divide-y divide-gray-300">
        <tr
          v-for="item in receiptStore.receiptInfo.items"
          :key="item.articleRef"
        >
          <td class="p-3">{{ item.articleName }}</td>
          <td class="p-3">{{ item.quantity }}</td>
          <td class="p-3">{{ formatAmount(item.price) }}F</td>
          <td class="p-3">{{ totalItemPrize(item.quantity, item.price) }}F</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-end">
      <div
        class="flex flex-col self-end w-full max-w-xs px-2 space-y-2 text-sm"
      >
        <span class="flex items-center justify-between">
          <h5>{{ $t('page.bill.table.total_exc_vat') }}:</h5>
          <h5>{{ formatAmount(receiptStore.receiptInfo.invoice.amount) }}F</h5>
        </span>

        <span class="flex items-center justify-between">
          <h5>{{ $t('page.bill.table.discount') }}:</h5>
          <h5>{{ receiptStore.receiptInfo.invoice.discount }}F</h5>
        </span>

        <span
          class="flex items-center justify-between pt-3 font-bold border-t border-gray-300"
        >
          <h5>{{ $t('page.bill.table.ttc_total') }}:</h5>
          <h5>{{ formatAmount(receiptStore.receiptInfo.invoice.amount) }}F</h5>
        </span>

        <span class="flex items-center justify-between font-bold text-red-500">
          <h5>{{ $t('page.bill.table.amount_pay') }}:</h5>
          <h5>
            {{ formatAmount(receiptStore.receiptInfo.invoice.balanceDue) }}F
          </h5>
        </span>
      </div>
    </div>

    <div class="px-3 space-y-3" aria-label="Payment history">
      <h5 class="flex items-center pb-1 space-x-1 border-b border-gray-300">
        <i class="pi pi-history" style="font-weight: 600" />
        <span class="font-semibold">{{ $t('page.bill.pay_history') }}</span>
      </h5>

      <ul class="space-y-4 divide-y divide-gray-300">
        <li
          v-for="transaction in receiptStore.receiptInfo.transList"
          :key="transaction.orderNumber"
          class="flex flex-row justify-between py-1"
        >
          <div class="flex flex-row items-center space-x-2">
            <span
              class="px-2 py-2.5 text-xs font-semibold text-white bg-gray-700 rounded-full"
            >
              {{ paymentMethod(transaction.paymentMean) }}
            </span>

            <h5 class="flex flex-col">
              <span class="text-xs">{{ transaction.orderNumber }}</span>
              <span class="text-lg font-semibold">
                {{ formatAmount(Number(transaction.paidAmount)) }}F
              </span>
            </h5>
          </div>

          <div class="flex flex-col items-end">
            <span class="text-xs font-semibold tracking-tight">
              {{ moment(transaction.createdAt).format('DD MMM, YYYY') }}
            </span>

            <span class="flex items-center space-x-2">
              <Badge
                :value="label(transaction.status).en"
                size="small"
                :severity="color(transaction.status)"
              />

              <template v-if="showDownloadIcon(transaction.status)">
                <nuxt-link :to="transaction?.url" target="_blank">
                  <i
                    class="transition duration-200 ease-linear cursor-pointer hover:text-blue-500 pi pi-cloud-download download-icon"
                  />
                </nuxt-link>
              </template>
            </span>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="flex flex-col xs:flex-row items-end justify-end px-1.5 xs:space-x-2"
    >
      <nuxt-link
        :to="receiptStore.receiptInfo.invoice.url"
        target="_blank"
        class="flex items-center justify-center px-3 w-full sm:w-28 h-7 text-sm font-semibold border border-gray-900 rounded-md hover:bg-[#334155] hover:text-white transition duration-200 ease-linear"
      >
        <i class="pi pi-download mr-1.5" />
        {{ $t('page.bill.download') }}
      </nuxt-link>

      <button-outline-w-b-label-button
        v-if="!isPaid"
        icon="pi pi-credit-card"
        label="Payer"
        pt:label="text-sm"
        aria-label="Search receipt"
        width="w-full sm:w-24"
        class="mt-3 h-7 sm:mt-0"
        @click.prevent="showingPayment"
      />
    </div>

    <Dialog
      v-if="!isPaid"
      v-model:visible="showPayment"
      modal
      header="Pay your bill"
      :style="{ width: '25rem' }"
    >
      <div class="p-3 space-y-2 border-t border-gray-300">
        <p class="flex flex-col bg-sky-100 rounded-md p-3 space-y-0.5">
          <span class="font-semibold">
            {{ $t('page.bill.number') }} #{{
              receiptStore.receiptInfo.invoice.invoiceCode
            }}
          </span>
          <span class="text-sm text-blue-600"
            >{{ $t('page.bill.period') }} - {{ month }}</span
          >
          <span class="text-3xl font-bold">
            {{ formatAmount(receiptStore.receiptInfo.invoice.balanceDue) }}F
          </span>
        </p>

        <form @submit.prevent="pay" aria-label="Payment form">
          <div>
            <label for="amount" class="text-xs text-secondary">
              {{ $t('page.bill.label.to_pay') }}
            </label>

            <input-number-input
              id="amount"
              inputId="amount"
              v-model="form.amount"
              custom-class="uppercase"
              border-radius="rounded-md"
              border-color="border-gray-300"
              autocomplete="off"
            />
          </div>

          <div>
            <label for="phone" class="text-xs text-secondary">
              {{ $t('page.bill.label.phone') }}
            </label>

            <input-number-mask
              id="phone"
              v-model="form.phone"
              mask="9-99-99-99-99"
              custom-class="uppercase"
              border-radius="rounded-md"
              border-color="border-gray-300"
            />
          </div>

          <div class="flex flex-col mt-2">
            <p class="text-xs font-semibold text-secondary">
              {{ $t('page.bill.label.payment_method') }}
            </p>

            <ul class="flex flex-row self-center py-2 space-x-4">
              <li
                v-for="method in receiptStore.receiptInfo.paymentMethodList"
                :key="method.code"
              >
                <img
                  v-if="method.code === 'OM'"
                  @click.prevent="chosenPaymentMethod(method.meanCode)"
                  src="/image/om-logo.png"
                  :class="[
                    'size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md',
                    {
                      'ring-2 ring-offset-2 ring-orange-400':
                        form.method === method.meanCode,
                    },
                  ]"
                  alt="Orange money logo"
                />

                <img
                  v-if="method.code === 'MOMO'"
                  @click.prevent="chosenPaymentMethod(method.meanCode)"
                  src="/assets/image/mtn-logo.png"
                  :class="[
                    'size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md',
                    {
                      'ring-2 ring-offset-2 ring-yellow-400':
                        form.method === method.meanCode,
                    },
                  ]"
                  alt="MTN mobile money logo"
                />

                <img
                  v-if="method.code === 'EU'"
                  @click.prevent="chosenPaymentMethod(method.meanCode)"
                  src="/assets/image/eum-logo.png"
                  :class="[
                    'size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md',
                    {
                      'ring-2 ring-offset-2 ring-blue-400':
                        form.method === method.meanCode,
                    },
                  ]"
                  alt="Express union money logo"
                />

                <img
                  v-if="method.code === 'YUM'"
                  @click.prevent="chosenPaymentMethod(method.meanCode)"
                  src="/assets/image/yoomee.jpg"
                  :class="[
                    'size-14 hover:cursor-pointer hover:scale-105 transition duration-200 ease-linear object-contain rounded-md',
                    {
                      'ring-2 ring-offset-2 ring-red-400':
                        form.method === method.meanCode,
                    },
                  ]"
                  alt="Yoomee money logo"
                />
              </li>
            </ul>

            <Accordion v-model:value="showPaymentMessage">
              <AccordionPanel value="0">
                <AccordionContent
                  :pt="{
                    content: 'px-0 pb-0 bg-transparent',
                  }"
                >
                  <div class="h-[1px] w-full bg-gray-300 my-2" />

                  <div
                    class="relative flex flex-col p-2 mt-2 rounded-lg bg-sky-100"
                  >
                    <p class="text-sm tracking-tight leading-3.5 text-center">
                      {{ methodMessage }}
                    </p>

                    <h1
                      v-show="showTimer"
                      class="text-2xl font-bold text-center"
                    >
                      {{ formattedTime }}
                    </h1>

                    <button
                      v-show="!showTimer"
                      type="button"
                      class="flex items-center bg-slate-700 text-white px-2 py-0.5 rounded space-x-1 cursor-pointer hover:shadow hover:bg-emerald-300 transition duration-200 ease-linear justify-center w-24 mx-auto mt-2"
                    >
                      {{ $t('page.bill.contact') }}
                      <i class="ml-1 pi pi-whatsapp" />
                    </button>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>

            <button-primary-button
              type="submit"
              :label="`${$t('page.button.pay')} ${formatAmount(form.amount)}F`"
              iconPos="right"
              :loading="isLoading"
              pt:label="text-sm"
              width="w-full mt-3"
              class="h-9"
              aria-label="Search receipt"
            />
          </div>
        </form>
      </div>
    </Dialog>
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
