<script setup>
const receiptStore = useReceiptStore()
const config = useRuntimeConfig()
const { t } = useI18n()
const showReceipt = ref(false)
const currentYear = new Date().getFullYear()
const { canShowBillModal } = useBreakpoint()

useHead({
  title: `${t('meta.invoice.title')} - ${config.public.appName}`,
  meta: [{ name: 'description', content: 'My JAWDI application.' }],
})

onMounted(() => receiptStore.resetReceiptInfo())

const openingReceipt = () => (showReceipt.value = true)
</script>

<template>
  <header
    class="grid w-full h-full md:grid-cols-[auto_1fr] lg:grid-cols-2"
    aria-label="New receipt page"
  >
    <section
      class="flex flex-col px-4 bg-topography"
      aria-label="Search receipt form"
    >
      <nuxt-link :to="$localePath('/')" class="py-1">
        <i
          class="p-1.5 text-sm text-blue-400 transition duration-300 ease-linear rounded-full cursor-pointer bg-slate-200 hover:bg-slate-50 pi pi-arrow-circle-left hover:text-blue-500"
          style="font-size: 1.7rem"
        />
      </nuxt-link>

      <div class="flex flex-col items-center justify-center h-full">
        <receipt-search-form @show-receipt="openingReceipt" />
      </div>
    </section>

    <section
      class="grid-rows-[auto_1fr_auto] items-center hidden h-full space-y-5 overflow-y-auto md:grid"
      aria-label="Receipt information"
    >
      <div class="flex justify-end w-full pt-1.5 pr-3">
        <Translate />
      </div>

      <div v-if="showReceipt" class="flex items-center w-full h-full px-1">
        <receipt-summary />
      </div>

      <div
        v-else
        class="flex flex-col items-center justify-center h-full space-y-4"
      >
        <img
          src="/assets/svg/searching.svg"
          class="object-contain object-center h-96"
          alt="Credit card payment illustration"
        />

        <h5 class="text-xs font-medium text-center text-secondary">
          {{ $t('page.bill.empty_bill') }}
        </h5>
      </div>

      <p
        class="flex justify-between w-full px-2 py-1 text-xs font-semibold text-right"
      >
        <span>
          <span class="mr-0.5">&copy;</span>{{ currentYear }} -
          {{ config.public.appName }}
        </span>

        <span>{{ $t('page.footer.rights') }}</span>
      </p>
    </section>

    <template v-if="canShowBillModal">
      <Dialog v-model:visible="showReceipt" maximizable modal>
        <receipt-summary />
      </Dialog>
    </template>
  </header>
</template>
