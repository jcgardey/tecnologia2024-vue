<script setup>
defineProps(['feriado']);
import dayjs from 'dayjs';
</script>

<template>
  <v-card class="pa-4">
    <h5 class="text-subtitle1">
      {{ feriado.nombre }} - {{ dayjs(feriado.fecha).format('DD/MM/YYYY') }}
    </h5>
    <h6
      class="text-overline"
      :class="{ 'text-red': feriado.tipo === 'inamovible' }"
    >
      {{ feriado.tipo }}
    </h6>
  </v-card>
</template>
