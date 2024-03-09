<template>
    <HeaderBlock class="header">
        <div class="container">
            <RouterLink :to="{ name: 'home' }" class="logo">
                <v-img
                    width="42"
                    max-height="44"
                    aspect-ratio="1"
                    cover
                    :src="logoImg"
                ></v-img>
                <h2>Cool Barber</h2>
            </RouterLink>
            <NavBar
                @closeMenu="closeMenu"
                class="nav"
                :class="{ 'menu-open': showMenu }"
            />
            <div
                class="icon-menu"
                :class="{ 'open-icon': showMenu }"
                @click="activeMenu()"
            >
                <span></span>
            </div>
            <DynamicAdapt destination=".nav" breakpoint="992">
                <div class="contacts">
                    <div class="address">
                        <RouterLink
                            :to="{ name: 'contacts' }"
                            class="address-text"
                            >302 W 50th St, NY, NY 10019</RouterLink
                        >
                        <v-img
                            width="42"
                            max-height="44"
                            :src="localImg"
                        ></v-img>
                    </div>
                    <div class="phone">
                        <a href="8 (800) 000-00-00" class="phone-text"
                            >8 (800) 000-00-00
                            <sub>Daily from 9 to 20</sub>
                        </a>
                        <v-img
                            width="42"
                            max-height="44"
                            :src="phoneImg"
                        ></v-img>
                    </div>
                </div>
            </DynamicAdapt>
        </div>
    </HeaderBlock>
</template>

<script setup>
import HeaderBlock from "@/page/master-page/header/HeaderBlock.vue";
import NavBar from "@/page/master-page/header/NavBar.vue";
import logoImg from "@/assets/img/header/logo/logo.svg";
import localImg from "@/assets/img/header/icon/local.svg";
import phoneImg from "@/assets/img/header/icon/phone.svg";
import DynamicAdapt from "@/components/DynamicAdapt.vue";

import { burgerMenu } from "@/helpersFunc/burger";
const { activeMenu, showMenu, close } = burgerMenu();
function closeMenu(event) {
    if (event) close();
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
@import "@/assets/style/lib/burger";
.header {
    background-color: transparent;
    color: white;
    @media (max-width: em(991.98)) {
        background-color: #251d1a;
    }
}
.container {
    font-family: Fira Sans;
    display: grid;
    grid-template-columns: auto 1fr auto;
    @include adaptiveValue("height", 120, 50);
    align-items: center;
    @include adaptiveValue("column-gap", 10, 8);
    @media (max-width: em(991.98)) {
        grid-template-columns: auto 1fr;
    }
}
.logo {
    display: flex;
    @include adaptiveValue("column-gap", 15, 10);
    align-items: center;
    @include adaptiveValue("margin-right", 30, 10);
    z-index: 5;
}
.contacts {
    display: grid;
    grid-template-columns: repeat(2, auto);
    // display: flex;
    align-items: center;
    @include adaptiveValue("column-gap", 54, 20);
    @media (max-width: em(991.98)) {
        grid-template-columns: auto;
        row-gap: toRem(20);
        justify-items: end;
        justify-content: center;
    }
}
.address,
.phone {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    column-gap: toRem(10);
}

.address-text {
    max-width: toRem(102);
}
.phone-text {
    display: grid;
    justify-items: end;
    row-gap: toRem(8);
}
.icon-menu {
    justify-self: end;
}
</style>
