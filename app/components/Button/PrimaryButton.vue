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
    :pt="{
      root: width,
      icon: {
        style: 'font-size: 0.8rem',
      },
    }"
  />
</template>

<style scoped>
.p-button {
  background: #2563eb;
  border: 1px solid #2563eb;
}

.p-button:not(:disabled):hover {
  background: #3b82f6;
  border-color: #3b82f6;
}
</style>
