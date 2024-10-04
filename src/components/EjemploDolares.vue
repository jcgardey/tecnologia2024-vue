<script setup>
import { ref, watch, onMounted } from 'vue';
import dayjs from 'dayjs';

const dolares = ref(['blue', 'mayorista', 'oficial']);
const dolarElegido = ref('blue');

const cotizacion = ref(null);

const fecha = ref(new Date());

function getCotizacionPorFecha() {
  const fechaFormateada = dayjs(fecha.value).format('YYYY/MM/DD');
  fetch(
    `https://api.argentinadatos.com/v1/cotizaciones/dolares/${dolarElegido.value}/${fechaFormateada}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cotizacion.value = data;
    });
}

watch([fecha, dolarElegido], getCotizacionPorFecha);
</script>

<template>
  <h3>Cotizaciones del dolar</h3>
  <div class="d-flex">
    <div class="d-flex flex-column">
      <v-autocomplete
        variant="outlined"
        label="Tipo de dolar"
        :items="dolares"
        v-model="dolarElegido"
      />
      <v-date-picker text="Elegir fecha" v-model="fecha" />
    </div>
    <div class="pa-8" v-if="cotizacion">
      <p class="text-h5">Compra: ${{ cotizacion.compra }}</p>
      <p class="text-h5">Venta: ${{ cotizacion.venta }}</p>
    </div>
  </div>
</template>
