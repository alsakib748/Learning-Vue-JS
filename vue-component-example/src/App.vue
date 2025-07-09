<script setup>

import { ref, reactive } from 'vue';
import PersonComponent from './components/PersonComponent.vue';

import NameComponent from './components/NameComponent.vue';

const person = reactive({
  name: 'John Doe',
  email: 'john@gmail.com',
});

const fname = ref('John');
const lname = ref('Doe');


</script>

<template>

  <div class="">

    <div class="">
      <img src="./assets/vue.svg" alt="" class="">
      <h1 class="">Component Example</h1>
    </div>

    <div class="">
      Original First Name: {{ fname }} <br />
      Original Last Name: {{ lname }}
    </div>

    <div class="">
      <label for="">Component</label>
      <NameComponent v-model:fname="fname" v-model:lname="lname" />
    </div>


    <!-- <div class="">
      <label for="">Name</label>
      <p>
        <input type="text" v-model="person.name" />
      </p>
    </div>

    <div class="">
      <label for="">Component</label>
      <PersonComponent :person="person" />
    </div> -->

  </div>

</template>

<style scoped></style>
