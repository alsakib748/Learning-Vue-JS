<script setup>

import TextComponent from './TextComponent.vue';

const props = defineProps([
    'person'
]);

</script>

<template>
    <TextComponent label="Name" v-model="person.name" />
    <TextComponent label="Email" v-model="person.email" />
</template>

<style scoped></style>