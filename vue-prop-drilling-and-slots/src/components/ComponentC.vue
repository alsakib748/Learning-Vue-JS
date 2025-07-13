<script setup>

import { inject } from 'vue';
const course = inject('course');
const stock = inject('course-stock');
</script>

<template>

    <p>
        Course Name in Component C: {{ course.name }}
    </p>

    <br />

    <p class="">
        <input type="text" v-model="course.name" class="border border-orange-800 rounded-lg px-4 py-2" />
    </p>

    <p>
        Course Stock: {{ stock }}
    </p>

    <br />

</template>

<style scoped></style>