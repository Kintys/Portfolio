<template>
    <nav class="nav">
        <ul class="nav__list">
            <li v-for="route in visibleMenuItems" :key="route.name" class="nav__link">
                <router-link :to="{ name: `${route.name}` }">{{ route.name }}</router-link>
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
.nav {
    display: grid;
    align-items: center;
    justify-content: center;
    @media (max-width: toEm(790)) {
        overflow: auto;
        position: fixed;
        background-color: #f74242fb;
        color: white;
        width: 40%;
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
            width: 40%;
            height: toRem(48);
            top: 0;
            left: -100%;
            background-color: f74242fb(137, 46, 46, 0.815);
            z-index: -1;
        }
        // &::after {
        //     content: '';
        //     position: fixed;
        //     width: 100%;
        //     height: 100vh;
        //     top: 0;
        //     left: -100%;
        //     background-color: rgba(0, 0, 0, 0.007);
        //     z-index: -1;
        //     @include adaptiveValue('min-height', 120, 50);
        // }
    }
    // .nav__list

    &__list {
        display: flex;
        padding: toRem(0) toRem(5);
        flex-wrap: wrap;
        justify-content: center;
        @include adaptiveValue('column-gap', 48, 10, 0, $maxWidth, $mobile);
        @media (max-width: toEm(790)) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: toRem(30);
            font-size: toRem(24);
        }
    }

    // .nav__link

    &__link {
        text-transform: capitalize;
        padding: toRem(0) toRem(3);
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
