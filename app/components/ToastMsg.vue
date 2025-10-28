<script setup>
const pt = {
  summary: 'text-base tracking-tight font-semibold',
  detail: 'text-sm font-medium tracking-tight',
  messageText: 'gap-0.5',
  messageIcon: 'self-center stroke-2',
  messageContent: 'gap-3',
  closeButton:
    'border border-transparent focus:outline-none focus:ring-0 rounded active:border-white focus:border-white',
}
</script>

<template>
  <Toast :pt="pt" success-icon="pi pi-check-circle" />
</template>
