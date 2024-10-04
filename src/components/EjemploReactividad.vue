<script setup>
    import { ref } from 'vue'

    const cantidad = ref(0);
    
    function incrementar() {
        cantidad.value = cantidad.value + 1;
    }
    function decrementar() {
        cantidad.value = cantidad.value - 1;
    }
</script>
<template>
    <button v-on:click="incrementar">Incrementar</button>
    <button v-on:click="decrementar">Decrementar</button>
    <h3>Cantidad: {{ cantidad }}</h3>
</template>

<style scoped>
    h3 {
        font-size: 1.8em;
        margin: 10px;
    }
    button {
        background-color: orange;
        padding: 8px;
        border-radius: 3px;
        border: none;
        color: white;
        margin: 20px;
        font-size: 1.2em;
    }
</style>
