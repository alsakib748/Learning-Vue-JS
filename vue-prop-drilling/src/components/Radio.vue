<script setup>

import { computed } from 'vue';

const props = defineProps([
    'label', 'modelValue', 'value'
]);

const emit = defineEmits(['update:modelValue']);

const radioValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});

</script>

<template>
    <p>
        <label for="">{{ label }}</label>
        <input class="ml-2 rounded-full" type="radio" :value="value" v-model="radioValue" />
    </p>
</template>

<style scoped></style>