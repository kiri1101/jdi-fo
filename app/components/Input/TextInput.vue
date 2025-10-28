<script setup>
defineProps({
  inputType: {
    type: String,
    default: 'text',
  },
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
  <InputText
    :type="inputType"
    :class="['w-full rounded h-9', customClass, borderRadius, borderColor]"
    autocomplete="off"
  />
</template>

<style>
.p-inputtext:enabled:focus {
  border-color: #3b82f6;
}
</style>
