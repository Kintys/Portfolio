<template>
    <section class="our-product">
        <div class="our-product__container">
            <SectionSliderWithTitles
                :product-data="getItemsList"
                :title-params="sectionTitle"
                :slider-params="sliderParams"
                :show-action="true"
                :is-border="false"
            />
        </div>
    </section>
</template>

<script setup>
import SectionSliderWithTitles from '@/components/SectionSliderWithTitles.vue'
import { useHeadphonesStore } from '@/stores/headphone.js'
import { storeToRefs } from 'pinia'

const { getItemsList } = storeToRefs(useHeadphonesStore())

const sectionTitle = {
    cat: 'Our Products',
    title: 'Explore Our Products '
}

const sliderParams = {
    sliderPerView: 4,
    sliderBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 10
        },
        350: {
            slidesPerView: 1.5
        },
        480: {
            slidesPerView: 1.7
        },
        630: {
            slidesPerView: 2.5
        },
        768: {
            slidesPerView: 3.2
        },
        830: {
            slidesPerView: 3.5,
            spaceBetween: 15
        },
        1070: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1200: {
            spaceBetween: 30
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.our-product {
    @include adaptiveValue('padding-top', 140, 80);
}
</style>
