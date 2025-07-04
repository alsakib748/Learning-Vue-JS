<script setup>

const tasks = [
  "Complete project proposal",
  "Update website content",
  "Fix bug in user authentication",
  "Prepare presentation slides",
  "Test new feature implementation",
];

</script>

<template>

  <section class="">
    <section class="">
      <div class="mb-2 w-96 p-2 border border-gray-600 text-left" v-for="(task, index) in tasks">
        {{ index + 1 }}. {{ task }}
      </div>
    </section>
  </section>

</template>

<style scoped></style>
