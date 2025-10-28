<script setup>
const config = useRuntimeConfig()
const { t } = useI18n()

useHead({
  title: `${t('meta.home.title')} - ${config.public.appName}`,
  meta: [{ name: 'description', content: 'My JAWDI application.' }],
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <header class="grid w-full h-full md:grid-cols-2" aria-label="Home page">
    <section
      class="flex flex-col space-y-6 text-center bg-mobile-shiny md:bg-none"
    >
      <div class="flex justify-end p-3">
        <Translate :dark="true" />
      </div>

      <div
        class="flex flex-col justify-center h-full max-w-2xl px-4 mx-auto space-y-3"
      >
        <div class="flex flex-col items-center space-y-10">
          <Logo />

          <h1
            class="text-2xl font-bold text-blue-100 sm:text-blue-600 xs:text-3xl lg:text-4xl"
          >
            {{ $t('page.home.welcome_message') }} {{ config.public.appName }}
          </h1>
        </div>

        <p
          class="text-sm text-center text-blue-200 md:text-[#64748b] xs:text-base lg:text-lg"
        >
          {{ $t('page.home.hero_message') }}
        </p>

        <div
          class="flex flex-col justify-center w-full mt-6 space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        >
          <button-primary-button
            @click="navigateTo($localePath('/receipt/new'))"
            :label="$t('page.button.pay_bill')"
            pt:label="text-sm"
            aria-label="Pay a bill"
          />

          <button-outline-w-b-label-button
            @click="navigateTo($localePath('/receipt/history'))"
            :label="$t('page.button.get_history')"
            severity="info"
            variant="outlined"
            pt:root="hover:secondary-blue"
            pt:label="text-sm"
            aria-label="View payment history"
          />
        </div>
      </div>

      <footer
        class="flex justify-between px-4 py-3 text-xs font-normal text-white md:text-[#64748b]"
      >
        <span class="uppercase">
          <span class="mr-0.5">&copy;</span>{{ currentYear }} -
          {{ config.public.appName }}
        </span>
        <span class="ml-1">{{ $t('page.footer.rights') }}</span>
      </footer>
    </section>

    <section class="flex-col hidden p-4 space-y-5 bg-blue-500 md:flex">
      <div class="flex justify-end w-full pt-1.5 pr-3">
        <Translate :dark="true" />
      </div>

      <div class="flex flex-col items-center justify-center grow">
        <p class="text-3xl font-bold text-center text-white">
          {{ $t('page.home.hero_message_1') }}
        </p>

        <img
          src="/assets/svg/cc_payment.svg"
          class="object-contain object-center h-96"
          alt="Credit card payment illustration"
        />
      </div>
    </section>
  </header>
</template>

<style scoped>
.card-icon {
  font-size: 1.5rem;
}

@media (min-width: 640px) {
  .card-icon {
    font-size: 2rem;
  }
}

.security-icon {
  font-size: 1.25rem;
}
</style>
