<script setup>
const number = 16;
const animal = "Tiger";
const searchUrl = "https://www.pexels.com/search/";
const message = "Welcome. Get Redy to mster <em>Vue.js 3</em>";
const date = "<strong>30th June, 2025</strong>";
</script>

<template>
  <div class="">
    <h1>Welcome to my Vue App</h1>
    <h2 class="text-3xl font-bold">{{ number }} / 4 = {{ number / 4 }}</h2>
    <h2 class="text-3xl font-bold">{{ number }} is {{ number % 2 == 0 ? 'even' : 'odd' }}</h2>
    <h2 class="text-3xl font-bold">
      <a target="_blank" :href="searchUrl + animal.toLowerCase()">Search for {{ animal }}</a>
    </h2>
    <br />
    <h2 class="text-3xl font-bold">
      <a target="_blank" :href="`https://www.pexels.com/search/${animal.toLowerCase()}`">Search for {{ animal }}</a>

      <br />

      <h2>Another Exmple</h2>

      <br />


      <h2 v-html="message"></h2>
      <p>Today is <span v-html="date"></span></p>

    </h2>
  </div>
</template>

<style scoped></style>
