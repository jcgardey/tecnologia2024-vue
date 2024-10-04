<script setup>   
    function onClick() {
        alert('Click');
    }
</script>

<template> 
    <button v-on:click="onClick">Click</button>
</template>

<style scoped>
button {
    background-color: blue;
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.3em;
    border: none;
}
</style>