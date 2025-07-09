<script setup>

import TextComponent from './TextComponent.vue';
import PersonComponent from './components/PersonComponent.vue';

const props = defineProps([
  'label', 'modelValue'
]);

const emit = defineEmits(['update:modelValue']);

</script>

<template>

  <p>
    <label for="">Name</label> <br />
    <input type="text" v-model="person.name" /> <br />
    <label for="">Email</label>
    <input type="text" v-model="person.email" /> <br />
  </p>

  <div class="">
    <label for="">Component</label>
    <PersonComponent :person="person" />
  </div>

</template>

<style scoped></style>
