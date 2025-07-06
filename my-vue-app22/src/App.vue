<script setup>

import { ref, onMounted } from 'vue';

const newItem = ref(16);

let chart = null;

const dataset = [
  300, 50, 100
];

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Pink'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: dataset,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(43, 105, 86)',
      'rgb(21, 21, 186)',
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: "pie",
  data: data,
}

onMounted(() => {
  // Wait for Chart.js to be available
  // if (typeof Chart !== 'undefined') {
  const ctx = document.getElementById('chart');
  chart = new Chart(ctx, config);
  // } else {
  //   console.error('Chart.js is not loaded');
  // }
});

function updateChart() {
  dataset.push(newItem.value);
  chart.data.datasets[0].data = dataset;
  chart.update();
}

</script>

<template>

  <div class="mx-auto w-[400px] h-[400px] bg-gray-400">
    <canvas id="chart">

    </canvas>
  </div>

  <div class="mt-20">
    <input type="text" name="" id="" v-model="newItem"
      class="p-2 border border-gray-500 hover:border-purple-800 focus:border-purple-800 rounded w-full mb-2">
    <button @click="updateChart()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full">
      Add New Value To Chart
    </button>
  </div>

</template>

<style scoped></style>
