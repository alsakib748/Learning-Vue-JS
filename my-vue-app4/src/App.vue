<script setup>
import people from "./data/data.js";
</script>

<template>
  <section class="container mx-auto">
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold">Data Example</h1>
      <div class="flex flex-row items-center justify-center h-screen gap-20">

        <div class="flex flex-col items-center justify-center">
          <img :src="people[0].image" class="w-96 h-96" alt="" title="">
          <h2 class="text-3xl font-bold">{{ people[0].name }}</h2>
          <h3 class="text-2xl font-bold">{{ people[0].title }}</h3>
          <p class="text-gray-500">{{ people[0].description }}</p>
        </div>

        <div class="flex flex-col items-center justify-center">
          <img :src="people[1].image" alt="" class="w-96 h-96" title="">
          <h2 class="text-3xl font-bold">{{ people[1].name }}</h2>
          <h3 class="text-2xl font-bold">{{ people[1].title }}</h3>
          <p class="text-gray-500">{{ people[1].description }}</p>
        </div>

        <div class="flex flex-col items-center justify-center">
          <img
            src="https://th.bing.com/th/id/R.565fcf3dadf6fa8ab2c1ad1ea521da67?rik=wHIV5FJDSCeC2Q&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2f0%2f0a%2fJimmy_Dore_by_Gage_Skidmore_2.jpg%2f220px-Jimmy_Dore_by_Gage_Skidmore_2.jpg&ehk=pOiKhdfTKiWOikW96%2fIEJg5GzCVbuffJozB64S40fiE%3d&risl=&pid=ImgRaw&r=0"
            class="w-96 h-96" alt="" title="">
          <h2 class="text-3xl font-bold">Jimmy Doe</h2>
          <h3 class="text-2xl font-bold">CMO, Doe Corporation</h3>
          <p class="text-gray-500">968 Ocala Street, Orlando, Florida</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped></style>
