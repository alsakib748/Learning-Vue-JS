<script setup>

const activeIndex = ref(0);
const accordions = reactive([
  {
    heading: 'What is term?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis quam quasi quis!',
    isOpen: true
  },
  {
    heading: 'When to use accordion components?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis quam quasi quis!',
    isOpen: false
  },
  {
    heading: 'How Can it be defined?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis quam quasi quis!',
    isOpen: false
  },
  {
    heading: 'Chambe?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum voluptatibus reprehenderit, excepturi quidem optio doloribus iste suscipit minima in aperiam eum dignissimos, sit assumenda nostrum perspiciatis quam quasi quis!',
    isOpen: false
  }
]);

</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-2xl m-10">Accordion</h1>

    <section class="">

      <div class="border border-gray-300 rounded-lg mb-3" v-for="accordion in accordions" :key="accordion.heading">
        <div class="flex items-center gap-2 border-b border-gray-300 cursor-pointer"
          @click="accordion.isOpen = !accordion.isOpen">
          <div class="flex items-center gap-2 p-4">
            <i class="fa-solid fa-plus text-2xl"></i>
            <h3 class="text-2xl">{{ accordion.heading }}</h3>
          </div>
        </div>

        <div class="flex items-center p-3" v-show="accordion.isOpen">
          <p class="text-start">
            {{ accordion.content }}
          </p>
        </div>
      </div>

      <div class="border border-gray-300 rounded-lg mb-3" v-for="(accordion, index) in accordions"
        :key="accordion.heading">
        <div class="flex items-center gap-2 border-b border-gray-300 cursor-pointer" @click="activeIndex = index">
          <div class="flex items-center gap-2 p-4">
            <i class="fa-solid fa-plus text-2xl"></i>
            <h3 class="text-2xl">{{ accordion.heading }}</h3>
          </div>
        </div>

        <div class="flex items-center p-3" v-show="index == activeIndex">
          <p class="text-start">
            {{ accordion.content }}
          </p>
        </div>
      </div>

    </section>

  </section>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
