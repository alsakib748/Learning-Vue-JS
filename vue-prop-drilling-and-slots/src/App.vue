<script setup>

import { ref, reactive, provide } from 'vue';

import ComponentA from './components/ComponentA.vue';

const course = reactive({
  name: 'Vue 3',
  price: 299,
});

provide('course', course);

</script>

<template>

  <div class="">

    <div class="">
      <img src="./assets/vue.svg" alt="" class="">
      <h1 class="text-2xl">Prop Drilling & Slots</h1>
    </div>

    <div class="">
      <label for="">Component</label>
      <p>
        <ComponentA />
      </p>
    </div>

  </div>

</template>

<style scoped></style>
