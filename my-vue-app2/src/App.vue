<script setup lang="ts">
const images = [
  {
    image: 'https://ts3.mm.bing.net/th?id=OIP.qkD9L5DJ462op4izzgRmPwHaEo&pid=15.1',
    title: 'Weter surrounded by trees end mountins...',
    link: 'https://ts3.mm.bing.net/th?id=OIP.qkD9L5DJ462op4izzgRmPwHaEo&pid=15.1'
  },
  {
    image: 'https://bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?w=294&h=166&c=7&r=0&o=7&cb=thvnextc2&pid=1.7&rm=3',
    title: 'Brown wooden dock between evender flower field...',
    link: 'https://bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?w=294&h=166&c=7&r=0&o=7&cb=thvnextc2&pid=1.7&rm=3'
  },
  {
    image: 'https://bing.com/th/id/OIP.AsUunR9cGH3mXZpGbhGdGwHaEo?w=256&h=180&c=7&r=0&o=7&cb=thvnextc2&pid=1.7&rm=3',
    title: 'Brown house ner body of wter...',
    link: 'https://bing.com/th/id/OIP.AsUunR9cGH3mXZpGbhGdGwHaEo?w=256&h=180&c=7&r=0&o=7&cb=thvnextc2&pid=1.7&rm=3'
  }
]

</script>

<template>
  <section class="w-full max-w-6xl mx-auto p-4">
    <h1 class="text-center text-4xl">Data Project</h1>
    <section class="w-full mx-auto p-4 flex items-between gap-4">
      <div class="">
        <img :src="images[0].image" alt="" class="" v-bind:title="images[0].title" style="width: 100%; height: 200px" />
        <h2 class="my-3">{{ images[0].title }}</h2>
        <a v-bind:href="images[0].link" target="_blank"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Imge
          Source</a>
      </div>

      <div class="">
        <img :src="images[1].image" alt="" class="" v-bind:title="images[1].title" style="width: 100%; height: 200px" />
        <h2 class="my-3">{{ images[1].title }}</h2>
        <a :href="images[1].link" target="_blank"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Imge
          Source</a>
      </div>

      <div class="">
        <img v-bind:src="images[2].image" alt="" class="" :title="images[2].title" style="width: 100%; height: 200px" />
        <h2 class="my-3">{{ images[2].title }}</h2>
        <a :href="images[2].link" target="_blank"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Imge
          Source</a>
      </div>
    </section>
  </section>

  <!-- todo: v-bind or : are same things -->

</template>

<style scoped></style>
