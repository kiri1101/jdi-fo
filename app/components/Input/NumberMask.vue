<script setup>
defineProps({
  customClass: {
    type: String,
    default: '',
  },
  borderRadius: {
    type: String,
    default: 'rounded',
  },
  borderColor: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <InputMask
    :pt="{
      root: ['w-full rounded h-9', customClass, borderRadius, borderColor],
    }"
  />
</template>
