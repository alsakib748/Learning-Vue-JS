<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();
</script>

<template>
    <hr />
    <h1>B Component</h1>
    <h2 class="">Count : {{ store.count }}</h2>
    <h2 class="">Double Count : {{ store.doubleCount }} </h2>
    <button @click="store.increment">Increment</button>
</template>

<style scoped></style>