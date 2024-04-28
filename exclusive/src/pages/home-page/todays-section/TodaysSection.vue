<template>
    <section class="todays-section"><TodaysContainer /></section>
</template>

<script setup>
import TodaysContainer from '../../../pages/home-page/todays-section/TodaysContainer.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.todays-section {
    @include adaptiveValue('padding-top', 140, 60);
}
</style>
