<script setup>
const tasks = [
  { id: 1, title: "Complete project proposal", status: "In Progress" },
  { id: 2, title: "Update website content", status: "Completed" },
  { id: 3, title: "Fix bug in user authentication", status: "In Progress" },
  { id: 4, title: "Prepare presentation slides", status: "Pending" },
  { id: 5, title: "Test new feature implementation", status: "Completed" },
];


function getCompletedTasks() {
  return tasks.filter(task => "Completed" == task.status)
}

function getTasksInProgress() {
  return tasks.filter(task => "In Progress" == task.status);
}

</script>

<template>
  <section class="">
    <section class="">
      <!-- <div class="mb-2 w-96 p-2 border border-gray-600 text-left" v-for="(task, index) in tasks" :key="task.id">
        {{ task.id }}. {{ task.title }}
      </div> -->
      <!-- <div class="mb-2 w-96 p-2 border border-gray-600 text-left" v-for="(task, index) in tasks" :key="index">
        {{ task.id }}. {{ task.title }}
      </div> -->
      <div class="mb-2 w-96 p-2 border border-gray-600 text-left" v-for="(task, index) in getCompletedTasks()"
        :key="task.id">
        {{ task.id }}. {{ task.title }}
      </div>
      <br />
      <hr />
      <br />
      <div class="mb-2 w-96 p-2 border border-gray-600 text-left" v-for="(task, index) in getTasksInProgress()"
        :key="task.id">
        {{ task.id }}. {{ task.title }}
      </div>

    </section>
  </section>
</template>

<style scoped></style>
