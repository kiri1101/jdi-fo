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
  <InputNumber
    :class="['w-full rounded h-9', customClass, borderRadius, borderColor]"
    fluid
  />
</template>

<style>
.p-inputtext:enabled:focus {
  border-color: #3b82f6;
}
</style>
