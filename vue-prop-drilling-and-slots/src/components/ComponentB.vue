<script setup>

import { inject } from 'vue';
import ComponentC from './ComponentC.vue'

const course = inject('course');

</script>

<template>

    <p>
        Course Name in Component B: {{ course.name }}
    </p>

    <p class="">
        <ComponentC />
    </p>

</template>

<style scoped></style>