<script setup>
import { ref } from 'vue';
import ToDoItem from './ToDoItem.vue';
const items = ref([]);

const newItemName = ref('');

function crearItem() {
  items.value.push(newItemName.value);
  newItemName.value = '';
}

function eliminarItem(item) {
  items.value = items.value.filter((i) => i !== item);
}
</script>

<template>
  <h1 class="text-h3">ToDo Items</h1>
  <form class="my-4" v-on:submit.prevent="crearItem">
    <div>
      <v-text-field
        variant="outlined"
        label="Nuevo item"
        v-model="newItemName"
      />
    </div>
    <div>
      <v-btn
        type="submit"
        :disabled="newItemName.length == 0"
        variant="outlined"
        >Confirmar</v-btn
      >
    </div>
  </form>
  <div class="d-flex flex-column ga-4">
    <ToDoItem v-for="item in items" :item="item" @delete="eliminarItem" />
  </div>
</template>
