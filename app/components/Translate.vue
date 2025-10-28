<script setup>
const { dark } = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
})
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const translate = ref()

const toggleLocale = event => translate.value.toggle(event)

const activeLocale = lang => (lang === locale.value ? true : false)
</script>

<template>
  <div>
    <icon-dark
      v-if="dark"
      prime-icon="pi-language"
      @click.prevent="toggleLocale"
    />

    <icon-light v-else prime-icon="pi-language" @click.prevent="toggleLocale" />

    <Popover ref="translate">
      <ul class="w-24">
        <li v-for="locale in locales" :key="locale.code">
          <NuxtLink
            :to="switchLocalePath(locale.code)"
            class="flex flex-row items-center justify-between p-1 text-sm cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            {{ locale.name }}

            <i
              v-show="activeLocale(locale.code)"
              class="pi pi-check-circle"
              style="font-size: 0.8rem; font-weight: 600"
            />
          </NuxtLink>
        </li>
      </ul>
    </Popover>
  </div>
</template>
