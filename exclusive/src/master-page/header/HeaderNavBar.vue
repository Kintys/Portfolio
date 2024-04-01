<template>
    <nav class="nav">
        <ul class="nav__list">
            <li v-for="route in routes" :key="route.name" class="nav__link">
                <router-link :to="{ name: `${route.name}` }">{{ route.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { routes } from '@/router/index'
</script>

<style lang="scss" scoped></style>
