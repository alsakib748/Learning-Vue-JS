<script setup>

import { ref, reactive } from 'vue';

const displayImage = ref(true);

</script>

<template>

  <section class="mx-auto container">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="mb-10">{{ displayImage }}</p>
    <label for="" class="">Display Random Image</label>
    <input type="checkbox" class="ml-2" v-model="displayImage">
    <p class="mt-5">
      <input type="radio" name="display" v-model="displayImage" :value="true"> On <br />
      <input type="radio" name="display" v-model="displayImage" :value="false"> Off <br />
    </p>
    <img v-show="displayImage"
      :src="`https://picjumbo.com/wp-content/uploads/beautiful-nature-scenery-free-photo-2210x1473.jpg`"
      class="mt-10 mx-auto w-[500px]">
    <!-- <img v-show="displayImage" :src="`https://source.unsplash.com/random?version=${Math.random()}`"
      class="mt-10 mx-auto w-[500px]"> -->
  </section>

</template>

<style scoped></style>
