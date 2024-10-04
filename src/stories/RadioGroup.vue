<script setup>
import RadioItem from './RadioItem.vue';

    defineProps({items: Array, value: String, name: String, inline: {type: Boolean, default: false} })
</script>

<template>
    <div class="radio-group" :class="{inline}">
        <RadioItem v-for="item in items" :name="name" :label="item.label" :checked="value === item.value" :value="item.value"  />
    </div>
</template>

<style>
    div.radio-group {
        display: flex;
        flex-direction: column;
    }

    div.radio-group.inline {
        flex-direction: row;
    }
</style>