<script setup>

// import { inject } from 'vue';
import { provide } from 'vue';
import ComponentB from './ComponentB.vue';

// const course = inject('course');

provide('course-stock', 100);

</script>

<template>

    <p>
        <!-- Course Name in Component A: {{ course.name }} -->
        Component A
    </p>

    <p class="">
        <ComponentB />
    </p>

</template>

<style scoped></style>