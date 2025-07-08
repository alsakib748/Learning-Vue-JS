<script setup>

import { ref } from 'vue';

import { countries } from './data/countries.js';

const search = ref('');

function getFilteredCountries() {

  return countries.filter(country => {
    return country.name.toLowerCase().startsWith(search.value.toLowerCase());
  });

}

</script>

<template>

  <section class="">
    <h1 class="">Vue Form</h1>
    <p class="text-start">{{ Search }}</p>
    <br />
    <p class="text-start">
      Search: <input type="text" class="border border-gray-300 rounded-md p-2" v-model="search" />
    </p>
    <br />
    <p class="flex flex-col items-start justify-start text-start">
    <ul>
      <li v-for="country in getFilteredCountries()" :key="country.code">
        {{ country.name }}
      </li>
    </ul>
    </p>
  </section>

</template>

<style scoped></style>
