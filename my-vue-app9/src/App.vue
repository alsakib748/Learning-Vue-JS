<script setup>

// < !--todo: List Rendering-- >
const items = [1, 2, 3, 4, 5];

</script>

<template>
  <section class="container mx-auto">
    <h1 class="text-center text-3xl py-12">Loop</h1>
    <section class="flex flex-col items-center justify-center space-y-2 w-full mx-auto">
      <!-- todo: List Rendering -->
      <div class="p-5 border border-gray-600 w-40 text-center" v-for="item in items">{{ item }}</div>
      <!-- <div class="p-5 border border-gray-600 w-40 text-center" v-for="n in 10">{{ n }}</div> -->
      <!-- <div class="p-5 border border-gray-600 w-40">2</div>
      <div class="p-5 border border-gray-600 w-40">3</div>
      <div class="p-5 border border-gray-600 w-40">4</div>
      <div class="p-5 border border-gray-600 w-40">5</div> -->
    </section>
  </section>
</template>

<style scoped></style>
