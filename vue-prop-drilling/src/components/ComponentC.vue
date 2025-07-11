<script setup>

const props = defineProps(['course']);

</script>

<template>

    <p>
        Course Name in Component C: {{ course.name }}
    </p>

    <br />

    <p class="">
        <input type="text" v-model="course.name" class="border border-orange-800 rounded-lg px-4 py-2" />
    </p>

</template>

<style scoped></style>