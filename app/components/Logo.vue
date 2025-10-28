<script setup>
defineProps({
  size: {
    type: String,
    default: 'w-16 h-16',
  },
})
</script>

<template>
  <svg viewBox="0 0 100 100" :class="size" xmlns="http://www.w3.org/2000/svg">
    <!-- Background circle -->
    <circle
      cx="50"
      cy="50"
      r="48"
      fill="#2563eb"
      stroke="#3b82f6"
      stroke-width="2"
    />

    <!-- Letter J -->
    <path
      d="M35 25 L35 55 Q35 65 45 65 Q55 65 55 55 L55 45"
      fill="none"
      stroke="#ffffff"
      stroke-width="4"
      stroke-linecap="round"
    />

    <!-- Document/Invoice icon integrated -->
    <rect
      x="60"
      y="30"
      width="15"
      height="20"
      rx="2"
      fill="#ffffff"
      opacity="0.9"
    />

    <!-- Lines representing invoice content -->
    <line x1="63" y1="35" x2="72" y2="35" stroke="#2563eb" stroke-width="1" />
    <line x1="63" y1="38" x2="70" y2="38" stroke="#2563eb" stroke-width="1" />
    <line x1="63" y1="41" x2="72" y2="41" stroke="#2563eb" stroke-width="1" />
    <line x1="63" y1="44" x2="68" y2="44" stroke="#2563eb" stroke-width="1" />
  </svg>
</template>
