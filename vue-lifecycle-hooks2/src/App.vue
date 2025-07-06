<script setup>

import { ref, onUpdated } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const message = ref('Hello World!');

onUpdated(() => {
  console.log("App.vue updated!");
});

</script>

<template>

  <div class="">
    <a href="https://vitejs.dev" target="_blank" class="">
      <img src="/vite.svg" alt="Vite logo" class="logo">
    </a>
    <a href="https://vuejs.org" target="_blank" class="">
      <img src="./assets/vue.svg" alt="Vue logo" class="logo">
    </a>
  </div>

  <h1 class="">{{ message }}</h1>

  <button @click="message = 'Hello From Sakib'" style="background-color: burlywood;">Update Message</button>

  <HelloWorld msg="Vite + Vue" />

</template>

<style scoped></style>
