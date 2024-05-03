<template>
    <section class="welcome-section"><WelcomeContainer /></section>
</template>

<script setup>
import WelcomeContainer from '@/pages/home-page/welcome-section/WelcomeContainer.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.welcome-section {
    @include adaptiveValue('padding-top', 140, 60);
}
</style>
