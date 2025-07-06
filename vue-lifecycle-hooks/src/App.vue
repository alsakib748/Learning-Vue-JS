<script setup>

import { ref, onBeforeMount, onMounted, watch, onUnmounted, onUpdated } from 'vue';

const status = ref([])

const apiResponse = ref(null);

onBeforeMount(() => {
  console.log("Before mount");
  status.value.push("Before mount!");

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => {
      apiResponse.value = json;
    });
});

// onBeforeMount(function () {
//   console.log('mounted');
//   status.value.push("mounted");
// })

onMounted(() => {
  console.log('Mounted');
  status.value.push("Mounted");
});

</script>

<template>

  <section class="mx-auto container">
    <h1 class="my-5">Lifecycle Hooks</h1>
    <div class="flex justify-between mt-20">
      <div class="w-1/2">
        <img src="" alt="" class="">
      </div>
      <div class="text-2xl w-1/2">
        {{ status }}
      </div>
      <p class="mt-10">{{ apiResponse }}</p>
    </div>
  </section>

</template>

<style scoped></style>
