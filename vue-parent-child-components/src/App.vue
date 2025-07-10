<script setup>

import { ref, reactive } from 'vue';

import TextComponent from './components/TextComponent.vue';

const name = ref('John Doe');
const email = ref('john@gmail.com');

const person = reactive({
  name: 'John Doe',
  email: 'john@doe.com'
});

</script>

<template>

  <div class="">
    <div class="">
      <img src="./assets/vue.svg" alt="" class="">
      <h1 class="">Component Model</h1>
    </div>

    <div class="">
      Original Name: {{ person.name }}<br />
      Original Name: {{ person.email }}
    </div>

    <div class="">
      <label for="">Name</label>
      <p>
        <input type="text" v-model="person.name" class="border border-purple-500 p-2 rounded-lg" />
      </p>
    </div>

    <div class="">
      <label for="">Email</label>
      <p>
        <input type="email" v-model="person.email" class="border border-purple-500 p-2 rounded-lg" />
      </p>
    </div>

    <br />

    <!-- <div class="">
      <label for="" style="font-weight: bold;">Component</label><br /><br />
      <TextComponents label="Name" v-model="name" />
      <TextComponents label="Email" v-model="email" />
    </div> -->

    <div class="">
      <label for="" style="font-weight: bold;">Component</label><br /><br />
      <TextComponent :person="person" />
    </div>

  </div>

</template>

<style scoped></style>
