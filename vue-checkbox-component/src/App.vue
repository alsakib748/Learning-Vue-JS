<script setup>

import { ref, reactive } from 'vue';
import PersonComponent from './components/PersonComponent.vue';
import NameComponent from './components/NameComponent.vue';
import NameComponentX from './components/NameComponentX.vue';
import Checkbox from './components/Checkbox.vue';

const person = reactive({
  name: 'John Doe',
  email: 'john.doe@example.com'
});

const taskDone = ref(true);

const fname = ref('John');
const lname = ref('Doe');

</script>

<template>

  <div class="">

    <div class="">
      <img src="./assets/vue.svg" alt="" class="">
      <h1 class="text-2xl">Component Model</h1>
    </div>

    <div class="">
      Original Name: {{ person.name }} <br />
      Task Done: {{ taskDone }} <br />
    </div>

    <br />

    <div class="">
      <label for="">Component</label>
      <Checkbox v-model="taskDone" label="Completed this edisode" />
    </div>

    <!-- <div class="">
            <label for="">Component</label>
            <NameComponent v-model:fname="fname" v-model:lname="lname" />
        </div> -->

    <!-- <div class="">
            <label for="">Name</label>
            <p>
                <input type="text" v-model="person.name" />
            </p>
        </div> -->

    <!-- <div class="">
            <label for="">Component</label>
            <PersonComponent :person="person" />
        </div> -->

  </div>

</template>

<style scoped></style>
