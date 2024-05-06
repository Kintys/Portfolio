<template>
    <section class="special-offer-section">
        <div class="special-offer-section__container">
            <BannerWrapper :offer-props="offerData" />
        </div>
    </section>
</template>

<script setup>
import BannerWrapper from '@/components/banners/BannerWrapper.vue'
import productImg from '@/assets/homePage/specialOffer/01.png'
const offerData = {
    category: 'categories',
    title: 'Enhance Your Music Experience',
    timer: {
        propsYear: 2024,
        propsMonth: 4,
        propsDay: 10,
        propsHour: 8,
        propsMinutes: 20,
        propsSeconds: 10,
        propsMllSecond: 10
    },
    img: productImg
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.special-offer-section {
    @include adaptiveValue('padding-top', 140, 80);
}
</style>
