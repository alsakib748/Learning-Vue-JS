<script setup>
const image = "https://assets.atdw-online.com.au/images/a11021df8ac18bcfc096922562e5b24f.jpeg?rect=222";
const title = "Water surrounded by trees and mountains";
const link = "https://assets.atdw-online.com.au/images/a11021df8ac18bcfc096922562e5b24f.jpeg?rect=222";
</script>

<template>
    <section class="continer mx-auto p-10">
      <h1 class="text-4xl mb-10 text-left">Data Project</h1>
      <section class="main flex space-x-4">
        <div class="flex space-y-4 flex-col w-1/2">
          <img
            :title="title"
            :src="image"
            :alt="title"
            class="w-full h-full object-cover"
          />
          <h2 class="text-4xl mb-10 text-left">{{ title }}</h2>
          <a
            target="_blank"
            :href="link"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Image Source
          </a>
        </div>
      </section>
    </section>
</template>

<style scoped>

</style>
