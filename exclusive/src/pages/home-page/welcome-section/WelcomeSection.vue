<template>
    <section class="welcome-section">
        <div class="welcome-section__container">
            <div class="welcome-section__wrapper-menu">
                <div
                    @touchstart="handleTouchStart"
                    @touchmove="handleTouchMove"
                    @touchend="handleTouchEnd"
                    @click="addClass = !addClass"
                    class="welcome-section__menu"
                >
                    <WelcomeMenu
                        :class="{
                            'menu-welcome__show': addClass
                        }"
                    />
                </div>
            </div>
            <div class="welcome-section__slider"><WelcomeMainSlider /></div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import WelcomeMenu from '@/pages/home-page/welcome-section/WelcomeMenu.vue'
import WelcomeMainSlider from '@/pages/home-page/welcome-section/WelcomeMainSlider.vue'

const addClass = ref(false)
const touchStartX = ref(0)
const touchEndX = ref(0)

function showMenu() {
    addClass.value = true
}

function hideMenu() {
    addClass.value = false
}

function handleTouchStart(event) {
    touchStartX.value = event.touches[0].clientX
}

function handleTouchMove(event) {
    touchEndX.value = event.touches[0].clientX
}

function handleTouchEnd() {
    const swipeDistance = touchStartX.value - touchEndX.value

    if (swipeDistance > 50) {
        hideMenu()
    } else if (swipeDistance < -50) {
        showMenu()
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';
.welcome-section {
    @include adaptiveValue('padding-top', 140, 140);
    // .welcome-section__container

    &__container {
        display: grid;
        @media (min-width: toEm($tablet)) {
            grid-template-columns: minmax(200px, 233px) auto;
            // grid-template-columns: toRem(233) auto;
        }
        justify-content: center;
        @include adaptiveValue('column-gap', 58, 20, 0, 1400, 1200);
        position: relative;
    }

    // .welcome-section__wrapper-menu

    &__wrapper-menu {
        height: toRem(30);
        position: relative;
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }

    // .welcome-section__menu

    &__menu {
        @media (max-width: toEm($tablet)) {
            background-color: #fff;
            overflow: hidden;
            z-index: 10;
            text-wrap: nowrap;
            padding-right: toRem(10);
            touch-action: manipulation;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
