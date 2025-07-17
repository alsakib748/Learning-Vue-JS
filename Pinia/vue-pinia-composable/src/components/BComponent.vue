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

    <button @click="store.increment">Increment</button>

    <!-- todo: Using Composables in Pinia Store -->

    <h2 class="">Full Name: {{ store.comName.firstName }}</h2>
    <h2 class="">Last Name: {{ store.comName.lastName }}</h2>

</template>

<style scoped></style>