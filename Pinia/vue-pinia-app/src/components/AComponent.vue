<!-- 
    todo: State become ref
    todo: Getter become Computed Property
    todo: Actions become Methods/Function
-->

<script setup>

import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';
const store = useCounterStore();
// console.log(store);
// todo: We can not destructure like this 
// const { count, doubleCount, increment } = store; (It's not work)
// Correct way to destructure
const { count, doubleCount } = storeToRefs(store);

// This action can be destructured normally
const { increment } = store;
</script>

<template>
    <h1>A Component</h1>
    <!-- <h2 class=""> Count : {{ store.count }} </h2>
    <h2 class="">Double Count : {{ store.doubleCount }}</h2>
    <button @click="store.increment">Increment</button> -->

    <h2 class=""> Count : {{ count }} </h2>
    <h2 class="">Double Count : {{ doubleCount }}</h2>
    <button class="" @click="increment">Increment</button>

</template>

<style scoped></style>