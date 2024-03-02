<template>
    <nav class="nav-menu">
        <div class="nav-list">
            <router-link
                @click="onCloseMenu"
                v-for="router in routerList"
                :key="router.name"
                :to="{ name: router.name }"
                class="nav-link"
                >{{ router.name }}</router-link
            >
        </div>
    </nav>
</template>

<script setup>
import { routes } from "@/router/index";
import { computed } from "vue";

const emit = defineEmits(["closeMenu"]);

function onCloseMenu() {
    emit("closeMenu", true);
}

function getNewRouterList(routeItems, menuItemsRoutes) {
    for (const routeItem of routeItems) {
        if (routeItem.children)
            getNewRouterList(routeItem.children, menuItemsRoutes);
        else {
            menuItemsRoutes.push({
                name: routeItem.name,
            });
        }
    }
}
const routerList = computed(() => {
    const menuItemsRoutes = [];
    getNewRouterList(routes, menuItemsRoutes);
    return menuItemsRoutes;
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.nav-menu {
    @media (max-width: em(991.98)) {
        position: fixed;
        padding: toRem(0) toRem(30) toRem(30) toRem(30);
        @include adaptiveValue("padding-top", 140, 70);
        flex-wrap: nowrap;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #3b322d;
        transition: bottom 0.4s linear;
        overflow: auto;
        &::before {
            content: "";
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            background-color: #251d1a;
            @include adaptiveValue("min-height", 120, 50);
        }
    }
}
.nav-list {
    display: flex;
    flex-wrap: wrap;
    @include adaptiveValue("column-gap", 20, 5);
    @include adaptiveValue("row-gap", 10, 8);
    @media (max-width: em(991.98)) {
        flex-direction: column;
        row-gap: toRem(20);
        font-size: toRem(20);
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }
}
.nav-link {
}

.nav-link::first-letter {
    text-transform: uppercase;
}
</style>
