<script setup>
  defineProps({label: String, placeholder: String, variant: String})
</script>

<template>
    <v-text-field :variant="variant" :label="label" :value="value" :placeholder="placeholder" />
</template>
