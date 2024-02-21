<template>
    <div class="imag-body">
        <div class="box">
            <v-img class="photo stretch" :src="aboutImg_1"></v-img>
            <v-img class="photo" :src="aboutImg_2"></v-img>
            <v-img class="photo" :src="aboutImg_3"></v-img>
        </div>
        <div class="box">
            <v-img class="photo" :src="aboutImg_4"></v-img>
            <v-img class="photo" :src="aboutImg_5"></v-img>
            <v-img class="photo stretch" :src="aboutImg_6"></v-img>
        </div>
    </div>
</template>

<script setup>
import aboutImg_1 from '@/assets/img/main/about-us/01.webp'
import aboutImg_2 from '@/assets/img/main/about-us/02.webp'
import aboutImg_3 from '@/assets/img/main/about-us/03.webp'
import aboutImg_4 from '@/assets/img/main/about-us/04.webp'
import aboutImg_5 from '@/assets/img/main/about-us/05.webp'
import aboutImg_6 from '@/assets/img/main/about-us/06.webp'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.imag-body {
    display: grid;
    grid-template-columns: repeat(2, auto);
    @include adaptiveValue('gap', 15, 5);
    @media (max-width: em(479.98)) {
        grid-template-columns: auto;
    }
}
.box {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
    @include adaptiveValue('gap', 15, 5);
}
.stretch {
    grid-column: span 2;
}
.photo {
    @media (min-width: em(991.98)) {
        filter: grayscale(0.8);
        transition: all 0.6s ease 0s;
    }
    @media (any-hover: hover) {
        &:hover {
            transform: scale(1.02);
            filter: grayscale(0);
        }
    }
}
</style>
