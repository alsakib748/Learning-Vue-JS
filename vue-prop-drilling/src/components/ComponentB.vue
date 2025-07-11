<script setup>

import ComponentC from './ComponentC.vue'
const props = defineProps(['course']);

</script>

<template>

    <p>
        Course Name in Component B: {{ course.name }}
    </p>

    <p class="">
        <ComponentC :course="course" />
    </p>

</template>

<style scoped></style>