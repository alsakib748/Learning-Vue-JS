<script setup>

</script>

<template>

    <aside class="w-[450px] bg-black">
        <section class="mt-[40px] text-white p-5">
            <h2 class="text-2xl text-white">Tags</h2>
            <br />
            <ul class="flex flex-col space-y-5">
                <li>
                    <router-link :to="{ name: 'tag', params: { tag: 'travel' } }">
                        Travel
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'tag', params: { tag: 'food' } }">
                        Food
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'tag', params: { tag: 'lifestyle' } }">Lifestyle</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'tag', params: { tag: 'tech' } }">
                        Tech
                    </router-link>
                </li>
            </ul>
        </section>
    </aside>

</template>

<style scoped></style>