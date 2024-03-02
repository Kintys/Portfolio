<template>
    <div class="container">
        <TitlePageComponents
            title="Testimonials"
            subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, eius expedita! Asperiores, corporis
                velit vel illum sapiente neque quibusdam deserunt aperiam eveniet ad sunt incidunt temporibus
                consequuntur atque explicabo harum?"
        />
        <TestimonialsSlider />
    </div>
</template>

<script setup>
import TestimonialsSlider from "@/page/home-page/testimonials-section/TestimonialsSlider.vue";
import TitlePageComponents from "@/components/TitlePageComponents.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.container {
    @include adaptiveValue("padding-left", 45, 20);
    @include adaptiveValue("padding-right", 45, 20);
    @include adaptiveValue("padding-top", 240, 100);
}
.main-headline {
    &:not(:last-child) {
        margin-bottom: toRem(60);
    }
}
</style>
