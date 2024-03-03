<template>
    <div class="container">
        <div class="body">
            <v-img
                :src="getImageUrl('masters/headline/bg.png')"
                class="image"
            />
            <div class="title-block">
                <h1 class="title main-title">
                    Our craftsmen make visitors beautiful and happier
                </h1>
                <a class="subtitle main-subtitle" href="#"
                    >Text placed at the bottom of the title to reveal details</a
                >
            </div>
        </div>
    </div>
</template>

<script setup>
const getImageUrl = (name) => {
    return new URL(`../../../assets/img/${name}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.container {
    @include adaptiveValue("padding-top", 120, 60);
}
.body {
    position: relative;
}
.image {
    width: 100%;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00000020;
    }
}
.title-block {
    position: absolute;
    top: 9.52381%; /* 40/420 */
    left: 4.237288%; /* 50/1180 */
    @media (max-width: em(991)) {
        text-align: center;
    }
}
.title {
    @include adaptiveValue("font-size", 70, 22);
    font-family: Playfair-Display;
    font-weight: 900;
    line-height: 110%;
    &:not(:last-child) {
        @include adaptiveValue("margin-bottom", 32, 8);
    }
}
.subtitle {
    color: rgb(239, 231, 226);
    @include adaptiveValue("font-size", 18, 12);
    max-width: toRem(228);
}
</style>
