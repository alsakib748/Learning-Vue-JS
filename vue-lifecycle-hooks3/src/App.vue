<script setup>

import { ref, onMounted, nextTick } from 'vue';

const items = ref([
  'https://picjumbo.com/wp-content/uploads/beautiful-nature-scenery-free-photo-2210x1473.jpg',
  'https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0',
  'https://static.vecteezy.com/system/resources/thumbnails/025/181/167/small_2x/sunset-over-a-field-with-nature-ai-generative-photo.jpg',
  'https://cdn.pixabay.com/photo/2018/03/03/03/11/tree-3194803_1280.jpg',
  'https://tse4.mm.bing.net/th/id/OIF.7a0dogY0WWnZtpcT8QUaEA?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://wallpaperaccess.com/full/2711104.jpg',
]);

let carousel = null;

const newItem = ref('https://i.pinimg.com/originals/06/e3/ac/06e3ac6783906a49e193e922627ecf6b.jpg');

function addNewItem() {
  items.value.push(newItem.value);
  carousel.destroy();
  nextTick(function () {
    carousel = new Flickity("#carousel", {
      autoPlay: 2000,
      wrapAround: true,
      prevNextButtons: true,
      pageDots: true,
      draggable: true,
    });
  });
}

onMounted(() => {
  carousel = new Flickity("#carousel", {
    autoPlay: 2000,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    draggable: true,
  });
});

</script>

<template>

  <div class="my-10">
    <input type="text" v-model="newItem"
      class="input input-primary border border-gray-500 hover:border-purple-800 focus:border-purple-800 p-2 rounded w-full mb-2">
    <button @click="addNewItem()"
      class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      Add Image To Carousel
    </button>
  </div>

  <div class="mx-auto items" id="carousel">
    <div :style="`background-image: url(${item})`" class="item" v-for="item, index in items" :key="item">
      {{ index + 1 }}
    </div>
  </div>

</template>

<style scoped>
.items {
  width: 600px;
  height: 400px;
}

.item {
  width: 600px;
  height: 400px;
  background-color: #ccc;
  background-size: cover;
}
</style>
