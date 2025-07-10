<script setup>

// todo: v-model == modelValue
// const props = defineProps([
//     'label', 'modelValue'
// ]);

// const emit = defineEmits(['update:modelValue']);

const props = defineProps([
    'person'
]);

</script>

<template>

    <p>
        <!-- <label for="">{{ label }}</label><br /> -->
        <!-- <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="border border-purple-500 p-2 rounded-lg"> -->
        <label for="">Name</label><br />
        <input type="text" class="border border-purple-500 p-2 rounded-lg" v-model="person.name" /><br />

        <label for="">Email</label><br />
        <input type="email" class="border border-purple-500 p-2 rounded-lg" v-model="person.email" /><br />
    </p>

</template>

<style scoped></style>