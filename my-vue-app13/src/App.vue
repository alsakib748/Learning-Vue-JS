<script setup>

const icons = [
  {
    title: "Sunny",
    icon: "https://openweathermap.org/img/wn/01d@2x.png"
  },

  {
    title: "Partly Cloudy",
    icon: "https://openweathermap.org/img/wn/02d@2x.png"
  },

  {
    title: "Rainy",
    icon: "https://openweathermap.org/img/wn/10d@2x.png"
  },

  {
    title: "Thunderstorm",
    icon: "https://openweathermap.org/img/wn/11d@2x.png"
  },

];

</script>

<template>

  <section class="mx-auto container">
    <section class="mx-auto container space-y-3 p-5 border border-gray-500 w-80 flex flex-col items-center">
      <div v-for="icon in icons" :key="icon.title" class="text-center">
        <h2 class="text-2xl">{{ icon.title }}</h2>
        <img :src="icon.icon" :alt="icon.title" class="w-16 h-16">
      </div>
    </section>
  </section>

</template>

<style scoped></style>
