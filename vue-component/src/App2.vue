<script setup>

import { ref, reactive } from 'vue';

const name = ref('John Doe');

</script>

<template>

  <div class="">
    <div class="">
      <img src="./assets/vue.svg" alt="Vue Logo" class="">
      <h1 class="">Component Model</h1>
    </div>

    <div class="">
      Original Name: {{ name }}
    </div>

    <div class="">
      <label for="">Name</label>
      <p>
        <input type="text" v-model="name" class="border border-gray-500 rounded p-2" />
      </p>
    </div>

  </div>

</template>

<style scoped></style>
