<script setup>
import { ref } from 'vue';

const props = defineProps(['visible', 'producto']);

const nombre = ref(props.producto.nombre);
const precio = ref(props.producto.precio);
const loading = ref(false);

const emit = defineEmits(['cancel', 'success']);

function editarProducto() {
  loading.value = true;
  fetch(`http://localhost:8005/productos/${props.producto.id}`, {
    method: 'PUT',
    body: JSON.stringify({ nombre: nombre.value, precio: precio.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((producto) => {
      emit('success');
      loading.value = false;
    });
}
</script>

<template>
  <v-dialog v-model="props.visible" width="auto">
    <v-card class="pa-4" title="Editar Producto" width="600">
      <form @submit.prevent="editarProducto" class="d-flex ga-4 flex-column">
        <v-text-field v-model="nombre" variant="outlined" label="Nombre" />
        <v-text-field v-model="precio" variant="outlined" label="Precio" />
        <div class="d-flex ga-2 justify-end">
          <v-btn
            variant="text"
            type="button"
            text="Cancelar"
            @click="$emit('cancel')"
          />
          <v-btn
            variant="outlined"
            text="Aceptar"
            type="submit"
            :loading="loading"
          />
        </div>
      </form>
    </v-card>
  </v-dialog>
</template>
