<template>
    <div class="slider">
        <swiper-container
            class="slider__box"
            :slides-per-view="1"
            :space-between="10"
            :centered-slides="false"
            :loop="true"
            :pagination="{
                clickable: true,
                el: '.slider__bullet'
            }"
            :autoplay="{
                delay: 4000,
                pauseOnMouseEnter: true
            }"
            :modules="Pagination"
        >
            <swiper-slide v-for="(slide, index) in sliderData" :key="index">
                <component :is="slide.img" />
            </swiper-slide>
        </swiper-container>

        <div class="slider__pagination">
            <div class="slider__bullet"></div>
        </div>
    </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import IphoneBanner from '@/components/banners/IphoneBanner.vue'
import { register } from 'swiper/element/bundle'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
register()

const sliderData = shallowRef([
    {
        img: IphoneBanner
    },
    {
        img: IphoneBanner
    },
    {
        img: IphoneBanner
    },
    {
        img: IphoneBanner
    },
    {
        img: IphoneBanner
    }
])
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.slider {
    @include adaptiveValue('width', 892, 310, 0, 1180, 320);
    position: relative;
    display: flex;
    flex-direction: column;

    // .slider__box

    &__box {
    }

    // .slider__pagination

    &__pagination {
    }

    &__bullet {
        display: flex;
        justify-content: center;
        position: relative;
        transform: translate(0, -50%);
        padding-bottom: toRem(8);
        z-index: 2;
        :deep() {
            .swiper-pagination-bullet {
                background-color: rgba(255, 255, 255, 1);
                width: toRem(12);
                height: toRem(12);
            }
            .swiper-pagination-bullet-active {
                background-color: $secondColor;
            }
        }
    }
}
</style>
