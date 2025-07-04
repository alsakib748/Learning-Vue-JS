<script setup>

const bgRed = 'bg-red-400';
const bgIndigo = 'bg-indigo-400';
const bgGreen = "bg-green-400";
const bgBlue = "bg-blue-400";

const weekday = true;

const colors = {
  bgColor: 'bg-yellow-100 ',
  borderColor: 'border-yellow-500',
  textColor: 'text-blue-900',
};

const messageType = 'warning';

if ('error' == messageType) {
  colors.bgColor = 'bg-red-100',
    colors.borderColor = 'border-red-500',
    colors.textColor = 'text-white-500'
}

if ('warning' == messageType) {
  colors.bgColor = 'bg-green-100',
    colors.borderColor = 'border-green-500',
    colors.textColor = 'text-green-900'
}

</script>

<template>
  <section class="container mx-auto">

    <h1 class="text-center text-3xl py-12">Calss & Style Binding</h1>

    <section class="flex flex-row justify-between space-x-10 w-full">
      <div class="w-1/3 h-16 p-4 rounded-lg text-white" :class="bgBlue">Al Sakib Ayon</div>
      <div class="w-1/3 h-16 p-4 rounded-lg text-white" v-bind:class="bgIndigo">Al Sakib Ayon</div>
      <div class="w-1/3 h-16 p-4 rounded-lg text-white" :class="bgGreen">Al Sakib Ayon</div>
    </section>

    <section class="mt-10">
      <div class="h-16 flex items-center jusity-center text-white text-center"
        :class="weekday ? 'bg-red-600 text-2xl' : 'bg-green-600 text-4xl'">
        It's a weekday
      </div>
    </section>

    <section class="mt-10">
      <div class="h-16 flex items-center jusity-center text-white text-center"
        :class="[weekday ? 'bg-red-600' : 'bg-green-600', weekday == true ? 'text-2xl' : 'text-4xl']">
        It's a weekday
      </div>
    </section>

    <section class="mt-10">
      <div class="border-t-4 rounded-b h-16 flex items-center jusity-center text-white"
        :class="[colors.bgColor, colors.borderColor, colors.textColor]">
        <p class="font-bold">Our privcy policy hs chnged</p>
        <p class="text-sm">Mke sure you know how these chnges ffect you.</p>
      </div>
    </section>

  </section>
</template>

<style scoped></style>
