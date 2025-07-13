<script setup>

import { ref, reactive } from 'vue';

import Button from './components/Button.vue';

</script>

<template>

  <div class="">

    <div class="">
      <img src="./assets/vue.svg" alt="" class="">
      <h1 class="text-2xl">Vue Slots</h1>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestias sit reprehenderit doloremque praesentium
      fugiat delectus velit dolore. Modi velit officia placeat hic iusto ipsa unde ut cum quibusdam a.
    </p>

    <br />
    <br />

    <div class="">
      <label for="">Component</label>
      <br /> <br />

      <Button>
        <!-- <template v-slot:licon> -->
        <!-- todo: Shortcut of v-slot is # -->
        <template #licon>
          <i class="fas fa-home"></i>
        </template>
        <template #default>Don't Click Me</template>
        <!-- <template v-slot:ricon> -->
        <template #ricon>
          <i class="fab fa-github"></i>
        </template>
      </Button>

      <!-- <Button label="Button 1" />
      <Button label="Button 2" /> -->

    </div>

  </div>

</template>

<style scoped></style>
