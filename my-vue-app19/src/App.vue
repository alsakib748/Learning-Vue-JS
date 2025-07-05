<script setup>

import { ref, reactive } from 'vue';

const images = [

  {
    thumb: "https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0",
    full: "https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    thumb: "https://static.vecteezy.com/system/resources/thumbnails/025/181/167/small_2x/sunset-over-a-field-with-nature-ai-generative-photo.jpg",
    full: "https://static.vecteezy.com/system/resources/thumbnails/025/181/167/small_2x/sunset-over-a-field-with-nature-ai-generative-photo.jpg",
  },
  {
    thumb: "https://tse3.mm.bing.net/th/id/OIP.eh5RRJ5l1pqHQDN1ubb1VAHaEx?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    full: "https://tse3.mm.bing.net/th/id/OIP.eh5RRJ5l1pqHQDN1ubb1VAHaEx?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    thumb: "https://wallpapercave.com/wp/wp6705749.jpg",
    full: "https://wallpapercave.com/wp/wp6705749.jpg",
  },

];

const fullImage = ref('https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0');

function setImage(image) {
  fullImage.value = image.full;
}

</script>

<template>

  <section class="w-full container mx-auto max-w-7xl">

    <section class="">

      <h1 class="">Events & Reactivity</h1>
      <br />
      <div class="">
        <div class="flex flex-row items-center justify-center gap-4 mx-auto">
          <div @click="setImage(image)" class="" v-for="image in images" :key="image.thumb">
            <img :src="image.thumb" alt="" class="h-40 w-48 cursor-pointer">
          </div>
          <!-- <div class="">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/025/181/167/small_2x/sunset-over-a-field-with-nature-ai-generative-photo.jpg"
              alt="" class="h-40 w-48 cursor-pointer">
          </div>
          <div class="">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.eh5RRJ5l1pqHQDN1ubb1VAHaEx?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="" class="h-40 w-48 cursor-pointer">
          </div>
          <div class="">
            <img src="https://wallpapercave.com/wp/wp6705749.jpg" alt="" class="h-40 w-48 cursor-pointer">
          </div> -->
        </div>
        <div class="">
          <br />
          <img :src="fullImage" class="h-96 w-204 cursor-pointer">
        </div>
      </div>

    </section>

  </section>

</template>

<style scoped></style>
