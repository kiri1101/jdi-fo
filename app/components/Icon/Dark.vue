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
      'p-1 text-sm transition duration-300 ease-linear rounded cursor-pointer pi hover:bg-white hover:text-[#334155] text-white',
      primeIcon,
      { 'bg-white text-primary': isActive },
    ]"
  />
</template>
