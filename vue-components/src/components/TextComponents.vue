<script setup>

const props = defineProps([
    'label', 'modelValue'
]);

const emit = defineEmits(['update:modelValue']);

</script>

<template>

    <p>
        <label for="">{{ label }}</label><br />
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="border border-purple-500 p-2 rounded-lg">
    </p>

</template>

<style scoped></style>