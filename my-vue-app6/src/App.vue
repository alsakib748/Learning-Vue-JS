<script setup>
const location = "Dhaka";
const weather = "pc";
</script>

<template>

  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-2xl text-center py-10">Logic in Vue.js</h1>
    <br />
    <div class="w-1/3 bg-gray-200 p-10 flex items-center flex-col space-y-10">
      <h1 class="text-3xl">{{ location }}</h1>
      <h2 class="text-2xl" v-show="weather == 's'">Wether: Sunny</h2>
      <h2 class="text-2xl" v-show="weather == 'pc'">Wether: Partly Cloudy</h2>
      <h2 class="text-2xl" v-show="weather == 'r'">Wether: Rainy</h2>
      <h2 class="text-2xl" v-show="weather == 't'">Wether: Thunderstorm</h2>
      <h2 class="text-2xl" v-show="weather == 'c'">Wether: Cyclone</h2>
      <img v-show="weather == 's'" src="https://clipartcraft.com/images/sunny-clipart-rainy-5.png" alt=""
        class="rounded-full w-96 h-96">
      <img v-show="weather == 'pc'"
        src="https://static.vecteezy.com/system/resources/previews/012/066/505/non_2x/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png"
        alt="" class="rounded-full w-96 h-96">
      <img v-show="weather == 'r'"
        src="https://tse4.mm.bing.net/th/id/OIP.p2pyUauiaNTvdyI9Na6TNAAAAA?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="" class="rounded-full w-96 h-96">
      <img v-show="weather == 't'"
        src="https://static.vecteezy.com/system/resources/thumbnails/027/994/880/small_2x/weather-report-3d-ui-icon-sun-and-rain-cloud-icon-png.png"
        alt="" class="rounded-full w-96 h-96">
    </div>
  </section>

</template>

<style scoped></style>
