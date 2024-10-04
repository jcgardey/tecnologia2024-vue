<script setup>
  import Navegacion from './components/Navegacion.vue';
</script>

<template>
  <div class="ma-8">
    <Navegacion />
    <div class="pa-8">
      <RouterView /> <!-- Muestra el componente que coincida con la ruta del navegador | ver router/index.js -->
    </div>
  </div>
</template>

