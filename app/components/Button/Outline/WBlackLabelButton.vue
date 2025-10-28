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
      root: `${width}`,
      icon: {
        style: { 'font-size': '0.85rem' },
      },
    }"
  />
</template>

<style scoped>
.p-button-outlined:not(:disabled):hover {
  background: #334155;
  border-color: #334155;
  color: #fff;
}

.p-button-outlined {
  background: transparent;
  border-color: #334155;
  color: #fff;
}

@media (min-width: 640px) {
  .p-button-outlined {
    background: transparent;
    border-color: #334155;
    color: #334155;
  }
}
</style>
