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
                <div class="header__search search-comp">
                    <DynamicAdapt destination=".nav" breakpoint="790">
                        <div class="search-comp__label">
                            <input type="text" class="search-comp__input" placeholder="What are you looking for?" />
                            <IconBase
                                class="search-comp__icon"
                                width="24"
                                height="24"
                                icon-name="search"
                                view-box="0 0 24 24"
                                icon-color="transparent"
                                ><IconMagnifyingGlass
                            /></IconBase>
                        </div>
                    </DynamicAdapt>
                </div>
                <HeaderActionsPanel v-if="getCurrentUser" :ref="navBar" class="header__actions" />
                <div class="icon-menu" :class="{ 'open-icon': showMenu }" @click="activeMenu()">
                    <span></span>
                </div>
            </div>
        </div>
    </HeaderHat>
</template>

<script setup>
import TopHeaderSide from '@/master-page/header/TopHeaderSide.vue'
import HeaderNavBar from '@/master-page/header/HeaderNavBar.vue'
import HeaderActionsPanel from '@/master-page/header/HeaderActionsPanel.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconMagnifyingGlass from '@/components/icons/iconsSrc/IconMagnifyingGlass.vue'
import DynamicAdapt from '@/components/DynamicAdapt.vue'
import HeaderHat from '@/master-page/header/HeaderHat.vue'
// ======================
import { burgerMenu } from '@/modulesHelpers/lib/burger'
const { showMenu, activeMenu } = burgerMenu()
// ======================
import { ref } from 'vue'
const smallCont = ref(false)
const navBar = ref(false)
function onScroll(scroll) {
    if (scroll >= 48) smallCont.value = true
    else smallCont.value = false
}
// ===========================
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/users'
const { getCurrentUser } = storeToRefs(useUsersStore())
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
.search-comp {
    padding: toRem(0) toRem(3);
    @include adaptiveValue('margin-right', 19, 0, 0, $maxWidth, $tablet);
    // .search-comp__label

    &__label {
        position: relative;
        height: toRem(38);
        @media (min-width: toEm($mobile)) {
            @include adaptiveValue('width', 233, 210, 0, $maxWidth, 824);
        }
    }

    // .search-comp__input

    &__input {
        width: 100%;
        padding: toRem(7) toRem(36) toRem(7) toRem(20);
        border-radius: toRem(4);
        background: #f5f5f5;
        position: relative;
        &:focus {
            outline: black solid toRem(1);
        }
        &::placeholder {
            font-size: toRem(12);
            line-height: 150%;
        }
    }

    // .search-comp__icon

    &__icon {
        position: absolute;
        right: 4.938272%; /* 12/243 */
        top: 18.4%;
        width: toRem(24);
        height: toRem(24);
        cursor: pointer;
        z-index: 5;
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
