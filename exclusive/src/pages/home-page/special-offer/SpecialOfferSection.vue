<template>
    <section class="special-offer-section"><SpecialOfferContainer /></section>
</template>

<script setup>
import SpecialOfferContainer from '@/pages/home-page/special-offer/SpecialOfferContainer.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.special-offer-section {
    @include adaptiveValue('padding-top', 140, 80);
}
</style>
