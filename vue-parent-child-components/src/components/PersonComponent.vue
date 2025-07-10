<script setup>

import TextComponent from './TextComponent.vue';

const props = defineProps([
    'person'
]);

</script>

<template>

    <!-- <p>
        <label for="">Name</label><br />
        <input type="text" v-model="person.name"><br /><br />
        <label for="">Email</label><br />
        <input type="email" v-model="person.email"><br />
    </p> -->

    <TextComponent label="Name" v-model="person.name" />
    <TextComponent label="Email" v-model="person.email" />

</template>

<style scoped></style>