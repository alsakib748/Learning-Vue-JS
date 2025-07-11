<script setup>

import ComponentB from './ComponentB.vue';
const props = defineProps(['course']);

</script>

<template>

    <p>
        Course Name in Component A: {{ course.name }}
    </p>

    <p class="">
        <ComponentB :course="course" />
    </p>

</template>

<style scoped></style>