<script setup>

import { ref, reactive } from 'vue';

import ComponentA from './components/ComponentA.vue';

// import PersonComponent from './components/PersonComponent.vue';
// import NameComponent from './components/NameComponent.vue';
// import NameComponentX from './components/NameComponentX.vue';
// import Checkbox from './components/Checkbox.vue';
// import Radio from './components/Radio.vue';

// const person = reactive({
//   name: 'John Doe',
//   email: 'john.doe@example.com'
// });

// // todo: For Checkbox Component
// const taskDone = ref(true);

// // todo: For Radio Component 
// const fruit = ref('apple');

// const fname = ref('John');
// const lname = ref('Doe');

const course = reactive({
  name: 'Vue 3',
  price: 299,
});

</script>

<template>

  <div class="">

    <div class="">
      <img src="./assets/vue.svg" alt="" class="">
      <h1 class="text-2xl">Prop Drilling & Slots</h1>
    </div>

    <div class="">
      <label for="">Component</label>
      <p>
        <ComponentA :course="course" />
      </p>
    </div>

    <!-- <div class="">
      Fruit: {{ fruit }} <br />
    </div> -->

    <!-- <div class="">
      Original Name: {{ person.name }} <br />
      Task Done: {{ taskDone }} <br />
    </div>

    <br />

    <div class="">
      <label for="">Component</label>
      <Checkbox v-model="taskDone" label="Completed this edisode" />
    </div> -->

    <!-- <div class="">
            <label for="">Component</label>
            <NameComponent v-model:fname="fname" v-model:lname="lname" />
        </div> -->

    <!-- <div class="">
            <label for="">Name</label>
            <p>
                <input type="text" v-model="person.name" />
            </p>
        </div> -->

    <!-- <div class="">
            <label for="">Component</label>
            <PersonComponent :person="person" />
        </div> -->

  </div>

</template>

<style scoped></style>
