<template>
    <section class="our-product">
        <OurProductContainer />
    </section>
</template>

<script setup>
import OurProductContainer from '@/pages/home-page/our-product/OurProductContainer.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.our-product {
    @include adaptiveValue('padding-top', 140, 80);
}
</style>
