<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();
// store.count = 10;
// store.secondCount = 20;

// Mutating State passing Object
store.$patch({
    count: store.count + 10,
    name: 'Sakib',
});

// Mutating State passing Function
store.$patch((state) => {
    state.items.push("Vue 3 & Pinia");
    state.count = 30;
});

// Replacing State
store.$state = { count: 50 }

console.log(store);

</script>

<template>
    <h1>A Component</h1>
    <h2 class=""> Count : {{ store.count }} </h2>
    <h2 class="">Double Count : {{ store.doubleCount }}</h2>
    <!-- <h2 class="">Second Count : {{ store.secondCount }}</h2> -->
    <button @click="store.increment">Increment</button>

    <h2 class="">Name: {{ store.name }}</h2>
    <h2 class="">Items: {{ store.items }}</h2>
</template>

<style scoped></style>