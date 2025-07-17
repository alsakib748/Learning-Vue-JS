<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();
</script>

<template>
    <h1>A Component</h1>
    <h2 class=""> Count : {{ store.count }} </h2>
    <h2 class="">Double Count : {{ store.doubleCount }}</h2>
    <button @click="store.increment">Increment</button>

    <!-- todo: Using Composables in Pinia Store -->

    <h2 class="">Full Name: {{ store.comName.firstName }}</h2>
    <h2 class="">Last Name: {{ store.comName.lastName }}</h2>

    <h1 class="">Another Setup Store Data</h1>

    <h2 class="">Count: {{ store.student.count }}</h2>
    <h2 class="">First Name From Student Store Setup: {{ store.student.composableName.firstName }}</h2>
    <h2 class="">Last Name From Student Store Setup: {{ store.student.composableName.lastName }}</h2>

</template>

<style scoped></style>