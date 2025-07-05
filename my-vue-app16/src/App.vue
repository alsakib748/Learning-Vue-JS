<script setup>
import { ref } from 'vue';
const accordionIndex = ref(0);
</script>

<template>

  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-2xl m-10">Accordion</h1>

    <section class="">

      <div @click="accordionIndex = 0" class="border border-gray-300 rounded-lg mb-3">
        <div class="flex items-center gap-2 border-b border-gray-300 cursor-pointer">
          <div class="flex items-center gap-2 p-4">
            <i class="fa-solid fa-plus text-2xl"></i>
            <h3 class="text-2xl">What is term?</h3>
          </div>
        </div>

        <!-- <div class="flex items-center p-3" :class="accordionIndex == 0 ? '' : 'hidden'"> -->
        <div class="flex items-center p-3" v-show="accordionIndex == 0">
          <p class="text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi
            quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis
            quam quasi quis!
          </p>
        </div>
      </div>

      <div @click="accordionIndex = 1" class="border border-gray-300 rounded-lg mb-3">
        <div class="flex items-center gap-2 border-b border-gray-300 cursor-pointer">
          <div class="flex items-center gap-2 p-4">
            <i class="fa-solid fa-plus text-2xl"></i>
            <h3 class="text-2xl">How can it be defined?</h3>
          </div>
        </div>

        <div class="flex items-center p-3" v-show="accordionIndex == 1">
          <p class="text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi
            quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis
            quam quasi quis!
          </p>
        </div>
      </div>

      <div @click="accordionIndex = 2" class="border border-gray-300 rounded-lg mb-3">
        <div class="flex items-center gap-2 border-b border-gray-300 cursor-pointer">
          <div class="flex items-center gap-2 p-4">
            <i class="fa-solid fa-plus text-2xl"></i>
            <h3 class="text-2xl">When to use accordion components?</h3>
          </div>
        </div>

        <div class="flex items-center p-3 " :class="accordionIndex == 2 ? '' : 'hidden'">
          <p class="text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi
            quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis
            quam quasi quis!
          </p>
        </div>
      </div>

      <div @click="accordionIndex = 3" class="border border-gray-300 rounded-lg mb-3">
        <div class="flex items-center gap-2 border-b border-gray-300 cursor-pointer">
          <div class="flex items-center gap-2 p-4">
            <i class="fa-solid fa-plus text-2xl"></i>
            <h3 class="text-2xl">Chamber reached do he nothing be?</h3>
          </div>
        </div>

        <div class="flex items-center p-3" :class="accordionIndex == 3 ? '' : 'hidden'">
          <p class="text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi
            quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis
            quam quasi quis!
          </p>
        </div>
      </div>

    </section>

  </section>

</template>

<style scoped></style>
