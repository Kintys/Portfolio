<template>
    <div class="welcome">
        <div class="container">
            <div class="body">
                <v-img :src="barbershopImg" class="bg-image" />
                <div class="headline">
                    <h1 class="title">Men’s Barbershop in The Middle East</h1>
                    <div class="subtitle-action">
                        <v-btn class="subtitle-button button-transparent"
                            >THE HIGHEST RATED</v-btn
                        >
                        <p class="subtitle-text">
                            Text that is placed at the bottom of the heading to
                            reveal details
                        </p>
                    </div>
                </div>
                <v-btn
                    @click="activeBookMenu"
                    class="sing-up-button button-main"
                    >Book now</v-btn
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { bookMenu } from "@/helpersFunc/bookMenu";
import barbershopImg from "@/assets/img/main/section-one/barbershop.webp";
const { activeBookMenu } = bookMenu();
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
@import "@/assets/style/lib/button";
.welcome {
}
.container {
    padding-left: toRem(10);
    padding-right: toRem(10);
    @include adaptiveValue("padding-top", 140, 70);
}
.body {
    max-width: toRem(1180); /* 1180/1210 */
    max-height: toRem(1000);
    position: relative;
}
.bg-image {
    position: relative;
    z-index: 0;
    &:not(:last-child) {
        margin-bottom: toRem(20);
    }
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(102, 102, 102, 0.205);
        top: 0;
        left: 0;
        z-index: 2;
    }
}
.headline {
    position: absolute;
    display: flex;
    width: 100%;

    @media (min-width: em(991.99)) {
        top: 4%; /* 40/1000 */
        left: 5.084746%; /* 60/1180 */
        align-items: flex-end;
        @include adaptiveValue("column-gap", 46, 0, 0, 1200, 1015);
    }
    @media (max-width: em(991.98)) {
        padding-top: toRem(20);
        display: grid;
        grid-template-rows: 1fr;
        justify-items: center;
        text-align: center;
        top: 0;
        left: 0;
    }
}
.title {
    color: rgb(255, 255, 255);
    font-family: Playfair Display;
    @include adaptiveValue("font-size", 70, 25);
    max-width: toRem(625);
    max-height: toRem(154);
    font-weight: 900;
    line-height: 110%;
    &:not(:last-child) {
        margin-bottom: toRem(20);
    }
}
.subtitle-action {
    @media (max-width: em(991.98)) {
        display: grid;
        justify-items: center;
    }
}
.subtitle-button {
    max-width: toRem(221);
    @include adaptiveValue("padding-bottom", 10, 8);
    @include adaptiveValue("padding-top", 10, 8);
    @include adaptiveValue("padding-left", 25, 15);
    @include adaptiveValue("padding-right", 25, 15);
    @include adaptiveValue("font-size", 14, 12);
    &:not(:last-child) {
        margin-bottom: toRem(29);
    }
}
.subtitle-text {
    max-width: toRem(271);
    color: rgb(239, 231, 226);
    font-family: Fira Sans;
    @include adaptiveValue("font-size", 17, 14);
    line-height: 150%;
}
.sing-up-button {
    @media (min-width: em(992)) {
        position: absolute;
        bottom: 6%; /* 60/1000 */
        left: 5.254237%; /* 62/1180 */
    }
    @media (max-width: em(991.98)) {
        width: 100%;
    }
}
</style>
