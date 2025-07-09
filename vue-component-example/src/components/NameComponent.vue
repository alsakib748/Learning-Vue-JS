<script setup>

const props = defineProps([
    'fname', 'lname'
]);

const emit = defineEmits(['update:fname', 'update:lname']);

</script>

<template>

    <p>
        <label for="">First Name</label> <br />
        <input type="text" class="border border-gray-500 rounded p-2" :value="fname"
            @input="$emit('update:fname', $event.target.value)" />
    </p>

    <p>
        <label for="">Last Name</label> <br />
        <input type="text" :value="lname" class="border border-gray-500 rounded p-2"
            @input="$emit('update:lname', $event.target.value)" />
    </p>

</template>

<style scoped></style>