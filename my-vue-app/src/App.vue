<script setup>

const messge = 'Welcome. Get ready to master Vue.js 3';

const date = "30th June, 2025";

function getDate(){
  const date = new Date();
  return date.toDateString();
}

const data = {
  message: 'Welcome. Get ready to master Vue.js 3',
  date: '30th June, 2025',
}

</script>

<template>
      <div class="container mx-auto flex items-center justify-center min-h-screen flex-col">
      <h1>{{ data.message }}</h1>
      <h2 class="mt-10 text-xl text-gray-700">
        Today is <span>{{ data.date }}</span>
      </h2>
    </div>
</template>

<style scoped>

</style>


