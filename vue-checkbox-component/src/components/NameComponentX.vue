<script setup>

import { ref, reactive } from 'vue';

const props = defineProps([
    'modelValue'
]);

const nameParts = props.modelValue.split(' ');
const fname = ref(nameParts[0]);
const lname = ref(nameParts[1]);

const emit = defineEmits(['update:modelValue']);

const updateName = () => {
    emit('update:modelValue', `${fname.value} ${lname.value}`);
};

</script>

<template>

    <p>
        <label for="">First Name</label> <br />
        <input type="text" v-model="fname" @input="updateName()" class="border border-orange-500 rounded-lg p-2">
    </p>

    <p>
        <label for="">Last Name</label> <br />
        <input type="text" v-model="lname" @input="updateName()" class="border border-orange-500 rounded-lg p-2">
    </p>

</template>

<style scoped></style>
