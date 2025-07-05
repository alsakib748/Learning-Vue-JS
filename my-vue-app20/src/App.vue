<script setup>

import { ref, reactive } from 'vue';

const about = ref("Hello");

const links = [
  {
    name: "Google",
    url: "https://www.google.com",
    about: "Google is a search engine"
  },
  {
    name: "Microsoft",
    url: "https://www.microsoft.com",
    about: "Microsoft Corporation Ltd."
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    about: "Facebook is social media platform"
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    about: "Twitter is Sharing platform"
  }
];

function setText(text) {
  about.value = text;
}

</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Events & Reactivity in Vue.js</h1>
    <h2 class="mt-10">{{ about }}</h2>
    <div class="container mx-auto flex space-x-5 justify-center m-[1000px]">
      <a v-for="link in links" :key="link.name" href="#" @click.prevent="setText(link.about)" class="">{{ link.name
      }}</a>
    </div>
  </section>
</template>

<style scoped></style>
