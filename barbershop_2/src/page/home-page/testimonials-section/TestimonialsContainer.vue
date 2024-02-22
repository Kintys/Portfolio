<template>
    <div class="container">
        <div class="main-headline">
            <h4 class="main-title">Testimonials</h4>
            <p class="main-subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, eius expedita! Asperiores, corporis
                velit vel illum sapiente neque quibusdam deserunt aperiam eveniet ad sunt incidunt temporibus
                consequuntur atque explicabo harum?
            </p>
        </div>
        <TestimonialsSlider />
    </div>
</template>

<script setup>
import TestimonialsSlider from '@/page/home-page/testimonials-section/TestimonialsSlider.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.container {
    @include adaptiveValue('padding-top', 120, 80);
    @include adaptiveValue('padding-left', 40, 20);
    @include adaptiveValue('padding-right', 40, 20);
}
.main-headline {
    &:not(:last-child) {
        margin-bottom: toRem(60);
    }
}
</style>
