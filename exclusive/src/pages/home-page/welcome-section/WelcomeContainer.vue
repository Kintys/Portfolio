<template>
    <div class="welcome-section__container">
        <WelcomeMenu class="welcome-section__menu menu-welcome" />
        <WelcomeMainSlider />
    </div>
</template>

<script setup>
import WelcomeMenu from '../welcome-section/WelcomeMenu.vue'
import WelcomeMainSlider from '@/pages/home-page/welcome-section/WelcomeMainSlider.vue'
</script>

<style lang="scss" scoped></style>
