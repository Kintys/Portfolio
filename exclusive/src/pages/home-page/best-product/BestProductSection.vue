<template>
    <section class="best-product-section">
        <BestProductContainer />
    </section>
</template>

<script setup>
import BestProductContainer from '@/pages/home-page/best-product/BestProductContainer.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.best-product-section {
    @include adaptiveValue('padding-top', 140, 80);
}
</style>
