<script setup>
import { ref, watch } from 'vue';
import FeriadoItem from './FeriadoItem.vue';

const feriados = ref([]);
const loading = ref(false);
const year = ref('2024');
const error = ref('');

function getFeriados() {
  loading.value = true;
  fetch(`https://api.argentinadatos.com/v1/feriados/${year.value}`)
    .then((response) => response.json())
    .then((data) => {
      feriados.value = data;
      loading.value = false;
      error.value = '';
    })
    .catch((err) => {
      error.value = 'Error al obtener los feriados';
      loading.value = false;
    });
}
// se ejecuta cada vez que cambia year
watch(year, getFeriados, { immediate: true });
</script>

<template>
  <h3>Feriados por año</h3>
  <v-text-field v-model="year" variant="outlined" label="Año" />
  <div v-if="loading" class="d-flex justify-center align-center height-screen">
    <v-progress-circular indeterminate></v-progress-circular>
  </div>
  <div class="pa-4 d-flex flex-column ga-8" v-else>
    <v-alert v-if="error" color="error">{{ error }}</v-alert>
    <FeriadoItem
      v-else
      v-for="feriado in feriados"
      :feriado="feriado"
      :key="feriado.fecha"
    />
  </div>
</template>
