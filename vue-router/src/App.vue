<script setup>

import Sidebar from './components/Sidebar.vue';

</script>

<template>

  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">A Wonderful Blog
  </header>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <Sidebar />
    </aside>
    <main class="w-full min-h-screen p-5 prose">
      <!-- <router-view :key="$route.fullPath"></router-view> -->
      <!-- another way -->
      <router-view></router-view>
    </main>
    <router-view name="right"></router-view>
  </section>
  <footer></footer>

</template>

<style scoped></style>
