<script setup>
  const props = defineProps({variant: String, label: String});
</script>

<template>
  <v-btn :variant="variant">{{ label }}</v-btn>
</template>


