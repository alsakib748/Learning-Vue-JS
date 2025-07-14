<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
            <!-- <li>
                <a href="" class="text-white">Login</a>
            </li>
            <li>
                <a href="#" class="text-white">Logout</a>
            </li>
            <li>
                <a href="" class="text-white">Dashboard</a>
            </li> -->
            <li>
                <!-- <a href="" class="text-white">Home</a> -->
                <!-- <router-link to="/">Home</router-link> OR -->
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <!-- <a href="" class="text-white">About</a> -->
                <!-- <RouterLink to="/about"></RouterLink> -->
                <!-- <router-link to="/about">About</router-link> OR -->
                <router-link :to="{ name: 'about' }">About</router-link>
            </li>
            <li>
                <!-- <a href="" class="text-white">Contact</a> -->
                <router-link to="/contact">Contact</router-link>
            </li>
            <li>
                <!-- <a href="" class="text-white">Blog</a> -->
                <!-- <RouterLink to="/blog"></RouterLink> -->
                <router-link to="/blog">Blog</router-link>
            </li>
            <!-- <li>
                <a href="" class="text-white">Post 1</a>
            </li>
            <li>
                <a href="" class="text-white">Post 2</a>
            </li>
            <li>
                <a href="" class="text-white">Post 3</a>
            </li> -->

        </ul>
    </section>
</template>

<style scoped></style>