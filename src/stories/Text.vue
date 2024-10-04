<script setup>
    defineProps({content: String, variant: String, color: String})
</script>

<template>
    <h1 :style="{color}" v-if="variant === 'title'" class="title">{{ content }}</h1>
    <h2 v-if="variant === 'subtitle'" class="subtitle">{{ content }}</h2>
    <p v-if="variant === 'body'" class="body">{{ content }}</p>
    <label v-if="variant === 'label'" class="label">{{ content }}</label>
</template>

<style>
    h1, h2, h3, p, .label {
        font-family: Arial, Helvetica, sans-serif;
    }

    h1.title {
        font-size: 36px;
        letter-spacing: 0.1em;
        font-weight: 700;
    }

    h2.subtitle {
        font-size: 28px;
        font-size: 500;
        color: rgb(91, 91, 91);
    }

    p.body {
        font-size: 16px;
    }
</style>