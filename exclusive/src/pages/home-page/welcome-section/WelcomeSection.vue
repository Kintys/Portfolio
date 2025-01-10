<template>
    <section class="welcome-section">
        <div class="welcome-section__container">
            <div class="welcome-section__menu"><WelcomeMenu /></div>
            <div class="welcome-section__slider"><WelcomeMainSlider /></div>
        </div>
    </section>
</template>

<script setup>
import WelcomeMenu from '@/pages/home-page/welcome-section/WelcomeMenu.vue'
import WelcomeMainSlider from '@/pages/home-page/welcome-section/WelcomeMainSlider.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/adaptive';
.welcome-section {
    @include adaptiveValue('padding-top', 140, 60);
    // .welcome-section__container

    &__container {
        display: grid;
        grid-template-columns: toRem(233) auto;
        @include adaptiveValue('column-gap', 58, 20, 0, 1400, 1200);
        position: relative;
    }

    // .welcome-section__menu

    &__menu {
        display: grid;
        position: relative;
    }
}
</style>
