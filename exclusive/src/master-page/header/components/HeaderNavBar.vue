<template>
    <nav ref="nav" class="nav">
        <ul class="nav__list">
            <li v-for="route in visibleMenuItems" :key="route.name" class="nav__item">
                <router-link class="nav__link hover-link" :to="{ name: `${route.name}` }">{{ route.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed } from 'vue'
import { routes } from '@/router/index'
import { isRouteAvailable } from '@/router/userPermissions.js'

function checkRoutesList(routeItems, menuItemsRoutes) {
    for (const routeItem of routeItems) {
        if (routeItem.children) checkRoutesList(routeItem.children, menuItemsRoutes)
        else if (routeItem.meta?.useInMenu && isRouteAvailable(routeItem)) {
            menuItemsRoutes.push({
                name: routeItem.name
            })
        }
    }
}

const visibleMenuItems = computed(() => {
    const menuItemsRoutes = []
    checkRoutesList(routes, menuItemsRoutes)
    return menuItemsRoutes
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';
@import '@/style/lib/hover-link';
.nav {
    @media (min-width: toEm(790)) {
        display: grid;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: toEm(790)) {
        overflow: auto;
        position: fixed;
        background-color: #f74242fb;
        color: white;
        width: 50%;
        height: 100vh;
        z-index: 10;
        top: 0;
        left: -100%;
        transition: all 0.3s;
        padding: toRem(0) toRem(15) toRem(15) toRem(15);
        @include adaptiveValue('padding-top', 30, 20);
        &::before {
            content: '';
            position: fixed;
            width: 50%;
            height: toRem(48);
            top: 0;
            left: -100%;
            background-color: f74242fb(137, 46, 46, 0.815);
            z-index: -1;
        }
    }
    // .nav__list

    &__list {
        display: flex;
        padding: toRem(0) toRem(5);
        flex-wrap: wrap;
        gap: toRem(10);
        @include adaptiveValue('padding-top', 70, 50, 1, $mobile, $mobileSmall);
        @include adaptiveValue('column-gap', 48, 10, 0, $maxWidth, $mobile);
        @media (max-width: toEm(790)) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: toRem(30);
            font-size: toRem(24);
        }
    }
    &__item {
        text-transform: capitalize;
        padding: toRem(0) toRem(3);
    }
}
</style>
