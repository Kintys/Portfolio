<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
    <RouterView />
</template>

<style scoped></style>
