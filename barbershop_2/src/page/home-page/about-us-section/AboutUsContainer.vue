<template>
    <div class="container">
        <header class="head">
            <h4 class="title">About Us</h4>
            <p class="subtitle">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            </p>
        </header>
        <ImageBoxComponent class="image-box" />
        <footer class="actions">
            <v-btn class="button-main">Our masters and their masterpieces</v-btn>
            <v-btn class="button-transparent">Our Instagram</v-btn>
        </footer>
    </div>
</template>

<script setup>
import ImageBoxComponent from '@/page/home-page/about-us-section/ImageBoxComponent.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/button';
@import '@/assets/style/lib/mixins';
.container {
    @include adaptiveValue('padding-top', 245, 100);
}
.head {
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: toRem(12);
    text-align: center;
    grid-template-columns: minmax(200, 580);
    justify-content: center;
    &:not(:last-child) {
        margin-bottom: toRem(60);
    }
}
.title {
    color: rgb(255, 255, 255);
    font-family: Fira Sans;
    font-size: toRem(48);
    font-weight: 700;
    line-height: 125%;
}
.subtitle {
    color: rgb(239, 231, 226);
    font-family: Fira Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0%;
    text-align: center;
}
.image-box {
    @include adaptiveValue('margin-bottom', 163, 50);
}
.actions {
    display: flex;
    @include adaptiveValue('gap', 30, 20);
    justify-content: center;
    align-items: center;
    @media (max-width: em(767.98)) {
        flex-direction: column;
    }
}
.button-main {
    @media (max-width: em(479.98)) {
        letter-spacing: 0;
    }
}
.button-transparent {
    padding: toRem(24) toRem(40) toRem(24) toRem(40);
}
</style>
