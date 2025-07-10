<script setup>

import { ref, reactive } from 'vue';

import TextComponents from './components/TextComponents.vue';

const name = ref('John Doe');
const email = ref('john@gmail.com');


</script>

<template>

  <div class="">
    <div class="">
      <img src="./assets/vue.svg" alt="" class="">
      <h1 class="">Component Model</h1>
    </div>

    <div class="">
      Original Name: {{ name }}<br />
      Original Name: {{ email }}
    </div>

    <div class="">
      <label for="">Name</label>
      <p>
        <input type="text" v-model="name" class="border border-purple-500 p-2 rounded-lg" />
      </p>
    </div>

    <div class="">
      <label for="">Email</label>
      <p>
        <input type="email" v-model="email" class="border border-purple-500 p-2 rounded-lg" />
      </p>
    </div>

    <br />

    <div class="">
      <label for="" style="font-weight: bold;">Component</label><br /><br />
      <TextComponents label="Name" v-model="name" />
      <TextComponents label="Email" v-model="email" />
    </div>

  </div>

</template>

<style scoped></style>
