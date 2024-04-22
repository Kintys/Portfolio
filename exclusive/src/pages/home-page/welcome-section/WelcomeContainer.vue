<template>
    <div class="welcome-section__container">
        <div class="welcome-section__menu"><WelcomeMenu /></div>
        <div class="welcome-section__slider"><WelcomeMainSlider /></div>
    </div>
</template>

<script setup>
import WelcomeMenu from '../welcome-section/WelcomeMenu.vue'
import WelcomeMainSlider from '@/pages/home-page/welcome-section/WelcomeMainSlider.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.welcome-section {
    // .welcome-section__container

    &__container {
        display: grid;
        grid-template-columns: toRem(233) auto;
        @include adaptiveValue('column-gap', 58, 20, 0, 1400, 1200);
    }

    // .welcome-section__menu

    &__menu {
        display: grid;
        grid-template-columns: 1fr auto;
        position: relative;
        &::after {
            content: '';
            width: toRem(0.3);
            height: 150%;
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: -50%;
            right: 0;
        }
    }
    &__slider {
    }
}
</style>
