<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();
// store.count = 10;
// store.secondCount = 20;
console.log(store);
</script>

<template>
    <hr />
    <h1>B Component</h1>
    <h2 class="">Count : {{ store.count }}</h2>
    <h2 class="">Double Count : {{ store.doubleCount }} </h2>
    <!-- <h2 class="">Second Count : {{ store.secondCount }}</h2> -->
    <button @click="store.increment">Increment</button>

    <h2 class="">Name: {{ store.name }}</h2>
    <h2 class="">Items: {{ store.items }}</h2>
</template>

<style scoped></style>