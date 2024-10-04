<script setup>
import { ref, onMounted } from 'vue';
const feriados = ref([]);
const loading = ref(false);

function getFeriados() {
  loading.value = true;
  fetch('https://api.argentinadatos.com/v1/feriados/2024')
    .then((response) => response.json())
    .then((data) => {
      feriados.value = data;
      loading.value = false;
    });
}
onMounted(getFeriados);
</script>

<template>
  <h3>Feriados 2024</h3>
  <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
  <div class="pa-4" v-else>
    <v-list>
      <v-list-item v-for="feriado in feriados" :key="feriado.fecha">
        <v-list-item-content>
          <v-text-field label="Nombre" :value="feriado.nombre" />
          <v-list-item-subtitle>{{ feriado.tipo }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
