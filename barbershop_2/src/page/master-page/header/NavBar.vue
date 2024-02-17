<template>
    <nav class="nav">
        <router-link v-for="router in routes" :key="router.name" :to="{ name: router.name }" class="nav-link">{{
            router.name
        }}</router-link>
    </nav>
</template>

<script setup>
import { routes } from '@/router/index'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.nav {
    display: flex;
    flex-wrap: wrap;
    @include adaptiveValue('column-gap', 20, 5);
    @include adaptiveValue('row-gap', 10, 8);
}
.nav-link {
}

.nav-link::first-letter {
    text-transform: uppercase;
}
</style>
