<script setup>
defineProps(['producto']);
defineEmits(['click']);
import placeholder from '../assets/placeholder.png';
</script>

<template>
  <v-card
    class="pa-2 d-flex ga-4 flex-column"
    @click="$emit('click', producto)"
  >
    <div class="imagen">
      <img :src="producto.imagen ?? placeholder" />
    </div>
    <h6 class="text-h5 text-center">{{ producto.nombre }}</h6>
    <p class="text-h5 font-weight-bold text-center">${{ producto.precio }}</p>
  </v-card>
</template>

<style scoped>
div.imagen {
  width: 12em;
  height: 12em;
}

div.imagen img {
  max-width: 100%;
  max-height: 100%;
}
</style>
