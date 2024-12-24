<template>
    <TopHeaderSide />
    <HeaderHat @windows-scroll="onScroll">
        <div class="header">
            <div
                class="header__container"
                :class="{
                    'header-padding-scroll': smallCont,
                    'header-padding': !smallCont
                }"
            >
                <router-link :to="{ name: 'home' }" class="header__logo logo">Exclusive</router-link>
                <HeaderNavBar class="header__nav" :class="{ 'menu-open': showMenu }" />
                <SearchBar :is-scrolling="isScrolling" />
                <HeaderActionsPanel class="header__actions" />
                <div class="icon-menu" :class="{ 'open-icon': showMenu }" @click="activeMenu()">
                    <span></span>
                </div>
            </div>
        </div>
    </HeaderHat>
</template>

<script setup>
import TopHeaderSide from '@/master-page/header/components/TopHeaderSide.vue'
import HeaderNavBar from '@/master-page/header/components/HeaderNavBar.vue'
import HeaderActionsPanel from '@/master-page/header/components/HeaderActionsPanel.vue'
import SearchBar from '@/master-page/header/components/search-bar/SearchBar.vue'
import HeaderHat from '@/master-page/header/components/HeaderHat.vue'
// ======================
import { burgerMenu } from '@/modulesHelpers/lib/burger'
const { showMenu, activeMenu } = burgerMenu()
// ======================
import { ref } from 'vue'
const isScrolling = ref(false)
const smallCont = ref(false)
function onScroll(scroll, scrolled) {
    if (scroll >= 48) {
        isScrolling.value = scrolled
        smallCont.value = true
    } else smallCont.value = false
}
</script>

<style lang="scss" scoped>
@import '../../style/lib/adaptive';
@import '@/style/lib/variables';
@import '@/style/lib/burger.scss';
@import '@/style/common/logo.scss';
.header {
    &__container {
        z-index: 50;
        // @include adaptiveValue('padding-top', 40+48, 55);
        // @include adaptiveValue('padding-bottom', 16, 14);
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        align-items: center;
        border-bottom: toRem(1) solid rgba(0, 0, 0, 0.304);
        @media (max-width: toEm(790)) {
            grid-template-columns: 1fr auto auto auto;
        }
    }

    // .header__logo

    &__logo {
        padding-right: toRem(5);
    }
}

.header-padding-scroll,
.header-padding {
    transition: all 0.5s;
}
.header-padding-scroll {
    padding-top: toRem(16);
    padding-bottom: toRem(16);
}
.header-padding {
    @include adaptiveValue('padding-top', 40+48, 55);
    @include adaptiveValue('padding-bottom', 16, 14);
    transition: all 0.5s;
}
</style>
