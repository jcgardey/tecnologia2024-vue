<script setup>
import Text  from './Text.vue';

    defineProps({label: String, value: String, checked: {type: Boolean, default: false}, name: String});
</script>
<template>
    <div class="radio-item">
        <input type="radio" :name="name" :value="value" :checked="checked" />
        <Text variant="label" :content="label" />
    </div>
</template>

<style>
    div.radio-item {
        display: flex;
        margin: 6px 0;
        align-items: center;
    }

    input[type='radio'] {
        margin: 5px;
    }
</style>