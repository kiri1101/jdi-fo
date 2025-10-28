<script setup>
defineProps({
  width: {
    type: String,
    default: 'w-full',
  },
})
</script>

<template>
  <Button
    variant="outlined"
    :pt="{
      root: width,
      icon: 'text-xs',
    }"
  />
</template>

<style scoped>
.p-button-outlined:not(:disabled):hover {
  background: #3b82f6;
  border-color: #3b82f6;
  color: #fff;
}

.p-button-outlined {
  background: transparent;
  border-color: #3b82f6;
  color: #3b82f6;
}
</style>
