<script setup>

import { ref, reactive } from 'vue';

const location = reactive({
  name: 'Dhaka',
  weather: 'Sunny',
})

function changeLocation(newLocation) {
  location.name = newLocation;
}

</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="">Events & Reactivity in Vue.js</h1>
    <div class="">
      <button class="bg-blue-500 px-4 py-2 rounded-md" @click="changeLocation('Dhaka')">
        Dhaka
      </button>
      <button class="bg-indigo-500 px-4 py-2 rounded-md" @click="changeLocation('Rajshahi')">
        Rajshahi
      </button>
      <button class="bg-indigo-500 px-4 py-2 rounded-md" @click="changeLocation('Khulna')">
        Khulna
      </button>
    </div>
    <h1 class="text-2xl m-10">Current Location: {{ location.name }}</h1>
  </section>
</template>

<style scoped></style>
