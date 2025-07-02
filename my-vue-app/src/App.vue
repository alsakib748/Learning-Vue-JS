<script setup>

import {data} from './data/data.js';

</script>

<template>
      <div class="container mx-auto flex items-center justify-center min-h-screen flex-col">
      <h1 class="mt-10 text-xl text-gray-700">{{ data.message }}</h1>
      <h2 class="mt-10 text-xl text-gray-700">
        Today is <span>{{ data.date }}</span>
      </h2>
      <h2 class="mt-10 text-xl text-gray-700">
        You have <span>{{ data.tasks[2] }} tasks for today</span>
      </h2>
    </div>
</template>

<style scoped>

</style>


