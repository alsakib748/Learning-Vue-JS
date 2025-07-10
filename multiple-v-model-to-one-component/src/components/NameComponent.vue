<script setup>

const props = defineProps([
    'fname', 'lname'
]);

const emit = defineEmits(['update:fname', 'update:lname']);

</script>

<template>

    <p>
        <label for="">First Name</label> <br />
        <input type="text" :value="fname" @input="$emit('update:fname', $event.target.value)"
            class="border border-orange-500 rounded-lg p-2">
    </p>

    <p>
        <label for="">Last Name</label> <br />
        <input type="text" :value="lname" @input="$emit('update:lname', $event.target.value)"
            class="border border-orange-500 rounded-lg p-2">
    </p>

</template>

<style scoped></style>
