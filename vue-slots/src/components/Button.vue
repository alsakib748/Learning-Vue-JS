<script setup>

const props = defineProps(['label']);

</script>

<template>

    <button
        class="my-4 block mx-auto px-3 py-2 bg-purple-500 text-white text-1xl rounded-lg hover:bg-orange-600 hover:text-white">
        <div class="">
            <slot name="licon"></slot>
            <span class="mx-2">
                <slot>
                    {{ label }}
                </slot>
            </span>
            <slot name="ricon"></slot>
        </div>
    </button>

</template>

<style scoped></style>