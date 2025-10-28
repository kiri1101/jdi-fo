<script setup>
defineProps({
  primeIcon: String,
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <i
    :class="[
      'p-1 text-sm transition duration-300 ease-linear rounded cursor-pointer pi hover:bg-blue-500 hover:text-white',
      primeIcon,
      { 'bg-blue-500 text-white': isActive },
    ]"
  />
</template>
