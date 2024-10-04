<script setup>
    defineProps(['item']);
</script>

<template>
    <v-card class="pa-4 d-flex justify-space-between align-center">
        <p class="text-h6">{{ item }}</p>
        <v-btn variant="outlined" color="error" @click="$emit('delete', item)">Eliminar</v-btn>
    </v-card>
</template>