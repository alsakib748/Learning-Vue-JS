<script setup>

const bgOrange = 'background-color: rgba(245,146,60,1)';
const bgIndigo = 'background-color: rgba(129, 140, 248 ,1)';
const bgGreen = 'background-color: rgba(52,211,153,1)';
const bgRed = 'background-color: rgba(220,38, 38,1)';
const bgDarkGreen = 'background-color: rgba(5,150, 105,1)';

const colors = {
  borderColor: 'rgba(20,184,166,1)',
  color: 'rgba(19, 78, 74, 1)',
  backgroundColor: 'rgba(204,251,241,1)'
}

const weekday = true;

const messageType = 'success';

if (messageType == 'error') {
  const colors = {
    borderColor: 'rgba(127,29,29,1)',
    color: 'rgba(19, 78, 74, 1)',
    backgroundColor: 'rgba(254,226,226,1)'
  }
}

</script>

<template>
  <section class="container mx-auto">

    <h1 class="text-center text-3xl py-12">Calss & Style Binding</h1>

    <section class="flex flex-row justify-between space-x-10 w-full">
      <div class="w-1/3 h-16 p-4 rounded-lg text-white" :style="bgIndigo">Al Sakib Ayon</div>
      <div class="w-1/3 h-16 p-4 rounded-lg text-white" :style="bgGreen">Al Sakib Ayon</div>
      <div class="w-1/3 h-16 p-4 rounded-lg text-white" :style="bgOrange">Al Sakib Ayon</div>
    </section>

    <section class="mt-10">
      <div class="h-16 flex items-center jusity-center text-white text-center"
        :style="[weekday == true ? [bgRed, 'font-size: 20px;'] : [bgDarkGreen, 'font-weight: bold;'], weekday == true ? 'font-size: 20px;' : 'font-size: 40px;']">
        It's a weekday
      </div>
    </section>

    <section class="mt-10">
      <div class="border-t-4 rounded-b h-16 flex items-center jusity-center text-white" :style="colors">
        <p class="font-bold">Our privcy policy hs chnged</p>
        <p class="text-sm">Mke sure you know how these chnges ffect you.</p>
      </div>
    </section>

  </section>
</template>

<style scoped></style>
