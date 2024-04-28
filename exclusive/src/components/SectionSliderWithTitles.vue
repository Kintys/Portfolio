<template>
    <div class="section-slider">
        <div class="section-slider__headline">
            <div class="section-slider__title-wrapper">
                <MainTitleBlock :title-text="titleParams" />
                <slot name="timer"> </slot>
            </div>
            <div class="section-slider__arrow">
                <div class="section-slider__prev-arrow prev-arrow">
                    <IconBase width="24" height="24" viewBox="0 0 24 24" icon-color="transparent">
                        <IconSliderArrow />
                    </IconBase>
                </div>
                <div class="section-slider__next-arrow next-arrow">
                    <IconBase width="24" height="24" viewBox="0 0 24 24" icon-color="transparent">
                        <IconSliderArrow />
                    </IconBase>
                </div>
            </div>
        </div>
        <swiper-container
            class="section-slider__wrapper"
            :slides-per-view="4"
            :space-between="30"
            :breakpoints="{
                // 768: {
                //     slidesPerView: 3
                // }
            }"
            :grid-rows="3"
            :navigation="{
                nextEl: '.next-arrow',
                prevEl: '.prev-arrow'
            }"
        >
            <swiper-slide v-for="item in productData" :key="item.id">
                <slot name="main"><ProductCart :product-item="item" /></slot>
            </swiper-slide>
        </swiper-container>
        <slot name="action"> </slot>
    </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle'

register()
import IconBase from '@/components/icons/IconBase.vue'
import IconSliderArrow from '@/components/icons/iconsSrc/IconSliderArrow.vue'

defineProps({
    productData: {
        type: Array
    },
    titleParams: {
        type: Object
    }
})

import MainTitleBlock from '@/components/MainTitleBlock.vue'

import ProductCart from '@/components/ProductCart.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.section-slider {
    // .section-slider__headline

    &__headline {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        &:not(:last-child) {
            margin-bottom: toRem(60);
        }
    }
    &__title-wrapper {
        display: grid;
        grid-template-columns: repeat(2, auto);
        @include adaptiveValue('column-gap', 87, 30);
    }
    // .section-slider__arrow

    &__arrow {
        display: flex;
        column-gap: toRem(30);
        padding-bottom: toRem(8);
    }

    // .section-slider__prev-arrow

    &__prev-arrow {
    }

    // .section-slider__next-arrow

    &__next-arrow {
    }

    // .section-slider__wrapper

    &__wrapper {
        height: 1200px;
    }
}
.prev-arrow {
}
.next-arrow {
}

.prev-arrow,
.next-arrow {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
        content: '';
        width: toRem(46);
        position: absolute;
        z-index: -1;
        height: toRem(46);
        border-radius: 50%;
        background-color: #f5f5f5;
    }
}
.next-arrow {
    transform: rotate(180deg);
}
</style>
