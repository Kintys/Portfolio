<template>
    <TopHeaderSide />
    <HeaderHat>
        <div class="header">
            <div class="header__container">
                <router-link :to="{ name: 'home' }" class="header__logo">Exclusive</router-link>
                <HeaderNavBar class="header__nav" :class="{ 'menu-open': showMenu }" />
                <DynamicAdapt destination=".nav" breakpoint="790">
                    <div class="header__search search-comp">
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
                    </div>
                </DynamicAdapt>
                <HeaderActionsPanel class="header__actions" />
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

import { burgerMenu } from '@/modulesHelpers/lib/burger'
const { showMenu, activeMenu } = burgerMenu()
</script>

<style lang="scss" scoped>
@import '../../style/lib/adaptive';
@import '@/style/lib/variables';
@import '@/style/lib/burger.scss';
.header {
    // .header__container
    &__nav {
    }

    &__container {
        z-index: 50;
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        align-items: center;
        @include adaptiveValue('padding-top', 40+48, 55);
        @include adaptiveValue('padding-bottom', 16, 14);
        background-color: #ffff;
    }

    // .header__logo

    &__logo {
        font-family: $interFont;
        font-size: toRem(24);
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 0.72px;
        padding-right: toRem(5);
    }

    // .header__search

    &__search {
    }
}
.search-comp {
    padding: toRem(0) toRem(3);
    @include adaptiveValue('margin-right', 19, 0, 0, $maxWidth, $tablet);
    // .search-comp__label

    &__label {
        position: relative;
        height: toRem(38);
        @media (max-width: toEm($mobile)) {
            max-width: toRem(243);
        }
        @media (min-width: toEm($tablet)) {
            @include adaptiveValue('width', 243, 220, 0, $maxWidth, $mobile);
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
</style>
