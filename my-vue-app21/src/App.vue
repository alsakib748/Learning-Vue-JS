<script setup>

import { ref } from 'vue';
const message = ref('Hello Vue 3');

const space = ref(0);

function spacePressed() {
  space.value++;
  message.value = "Space pressed " + space.value + " times";
}

function pressedWhat(event) {
  message.value = "You pressed " + event.key;
}

function buttonPressed() {
  message.value = "You clicked the button";
}

function ctrlRightClicked() {
  message.value = "Ctrl + Right Click";
}

function divClicked() {
  alert("Div Clicked");
}

function buttonClicked() {
  alert("Button Clicked");
}

</script>

<template>

  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-4">
      Events & Reactivity in Vue.js
    </h1>
    <h2 class="mt-10">{{ message }}</h2>
    <form @submit.prevent action="https://google.com/search" class="">
      <div class="container mx-auto flex space-5 justify-center m-5">
        <input @keyup.space="spacePressed" name="q" type="text" class="border border-gray-500 bg-white p-5"
          placeholder="Press Space">
      </div>
      <div class="container mx-auto flex space-5 justify-center m-5">
        <input @keyup="pressedWhat($event)" name="text" type="text" class="border border-gray-500 bg-white p-5"
          placeholder="Type Something">
      </div>

      <button @click.prevent="buttonPressed()" class=""
        style="background-color: rgb(38, 38, 150);color:white;margin: 0 10px;">
        Button
      </button>

      <button @click.ctrl.right="ctrlRightClicked()" class="" style="background-color: rgb(17, 146, 129);color:white">
        Ctrl + Right Click
      </button>


      <div class="bg-gray-200 w-[500px] h-80 mt-5 flex items-center justify-center" @click="divClicked()">
        <button @click.stop="buttonClicked()"
          class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          style="background-color: rgb(17, 146, 129);color:white">
          Button
        </button>
      </div>


    </form>
  </section>

</template>

<style scoped></style>
