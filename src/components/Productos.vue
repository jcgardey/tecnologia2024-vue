<script setup>
import { ref, onMounted } from 'vue';
import Producto from './Producto.vue';
import ModalNuevoProducto from './ModalNuevoProducto.vue';
import ModalEditarProducto from './ModalEditarProducto.vue';

const productos = ref([]);
const loading = ref(false);

// comentario de ejemplo
// otro comentario
const crearProducto = ref(false);
const productoSeleccionado = ref(null);
// comentario nuevo

function getProductos() {
  loading.value = true;
  fetch('http://localhost:8005/productos')
    .then((response) => response.json())
    .then((data) => {
      productos.value = data;
      loading.value = false;
    });
}

function productoCreado() {
  crearProducto.value = false;
  getProductos();
}

function productoEditado() {
  productoSeleccionado.value = null;
  getProductos();
}

function seleccionarProducto(producto) {
  console.log(producto);
  productoSeleccionado.value = producto;
}

onMounted(getProductos);
</script>

<template>
  <div class="d-flex flex-column ga-4 align-start">
    <v-btn @click="crearProducto = true">Nuevo producto</v-btn>
    <div class="d-flex ga-4">
      <Producto
        v-for="producto in productos"
        :producto="producto"
        :key="producto.id"
        @click="seleccionarProducto"
      />
    </div>
  </div>
  <ModalNuevoProducto
    :visible="crearProducto"
    @cancel="crearProducto = false"
    @success="productoCreado"
  />
  <ModalEditarProducto
    :visible="productoSeleccionado !== null"
    v-if="productoSeleccionado !== null"
    @cancel="productoSeleccionado = null"
    @success="productoEditado"
    :producto="productoSeleccionado"
  />
</template>
