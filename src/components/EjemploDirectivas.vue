<script setup>
    const clicks = 0;

    const valores = ['Juan', 'Jose', 'Pedro'];

    function onClick() {
        alert('Click');
    }

    const numero = 10

    const nombre = 'clase'
</script>

<template>
  <div>
    <button v-on:click="onClick">Click</button>
    
    <h4>Mostrando una lista de valores</h4>
    <ul>
        <li v-for="valor in valores">{{ valor }}</li>
    </ul>

    <p v-if="numero > 10">Numero grande</p>
    <p v-else>Numero chico</p>

    <h4 v-bind:class="nombre">Atributo dinamico</h4>
  </div>
</template>

<style scoped>

div {
    padding: 5px;
    margin: 10px;
    border-radius: 5px;
}

button {
    background-color: blue;
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.3em;
    border: none;
}
</style>