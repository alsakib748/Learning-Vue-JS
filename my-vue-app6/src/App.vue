<script setup>
import { ref } from 'vue';
const location = "Dhaka";
// const weather = "t";
const weather = ref("s");
</script>

<template>

  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-2xl text-center py-10">Logic in Vue.js</h1>
    <br />
    <div class="w-1/3 bg-gray-200 p-10 flex items-center flex-col space-y-10">
      <h1 class="text-3xl">{{ location }}</h1>

      <!-- <div v-show="weather == 's'" class="flex flex-col items-center justify-center">
        <h2 class="text-2xl" id="sunny">Wether: Sunny</h2>
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/066/505/non_2x/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png"
          alt="" class="rounded-full w-96 h-96">
        </div> -->


      <template v-if="weather == 's'">
        <h2 class="text-2xl" id="sunny">Wether: Sunny</h2>
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/066/505/non_2x/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png"
          alt="" class="rounded-full w-96 h-96">
      </template>

      <!-- todo: Note: v-if render new every time. but v-show contain the events -->

      <div v-show="weather == 'pc'">
        <h2 class="text-2xl">Wether: Partly Cloudy</h2>
        <img src="https://clipartcraft.com/images/sunny-clipart-rainy-5.png" alt="" class="rounded-full w-96 h-96">
      </div>

      <div v-show="weather == 'r'">
        <h2 class="text-2xl">Wether: Rainy</h2>
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.p2pyUauiaNTvdyI9Na6TNAAAAA?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="" class="rounded-full w-96 h-96">
      </div>

      <div v-show="weather == 't'">
        <h2 class="text-2xl">Wether: Thunderstorm</h2>

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/994/880/small_2x/weather-report-3d-ui-icon-sun-and-rain-cloud-icon-png.png"
          alt="" class="rounded-full w-96 h-96">
      </div>

      <!-- todo: Note: Template is used to render multiple elements but it's not show on output . It's alternative of div -->

      <h2 class="text-2xl" v-if="weather == 'c'">Wether: Cyclone</h2>

      <input type="text" name="" placeholder="Weather Status
      " class="text-center p-5 text-2xl" id="" v-model="weather" />

    </div>
  </section>

</template>

<style scoped></style>
