<template>
    <div
        class="section-slider"
        :class="{
            'section-slider--border': isBorder
        }"
    >
        <div class="section-slider__headline">
            <div class="section-slider__title-wrapper">
                <MainTitleBlock :title-text="titleParams" />
                <div class="section-slider__timer"><slot name="timer"> </slot></div>
            </div>
            <slot name="arrow">
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
            </slot>
        </div>
        <swiper-container
            class="section-slider__wrapper"
            :slides-per-view="sliderParams.sliderPerView"
            :space-between="sliderParams.sliderBetween"
            :loop="isLoop"
            :grid="{
                fill: 'row',
                rows: showGridRows
            }"
            :breakpoints="sliderParams.breakpoints"
            :navigation="{
                nextEl: '.next-arrow',
                prevEl: '.prev-arrow'
            }"
        >
            <slot name="main">
                <swiper-slide v-for="item in productData" :key="item.id">
                    <ProductCard :product-item="item" />
                </swiper-slide>
            </slot>
        </swiper-container>
        <slot v-if="showAction" name="action">
            <v-btn @click="showGridRows++" class="section-slider__button button-main button-main--padding-regular"
                >View All Products</v-btn
            >
        </slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showGridRows = ref(1)

import { register } from 'swiper/element/bundle'

register()
import IconBase from '@/components/icons/IconBase.vue'
import IconSliderArrow from '@/components/icons/iconsSrc/IconSliderArrow.vue'

defineProps({
    isLoop: {
        type: Boolean,
        default: false
    },
    showAction: {
        type: Boolean,
        default: false
    },
    sliderParams: {
        type: Object,
        default: () => ({})
    },
    productData: {
        type: Array
    },
    titleParams: {
        type: Object
    },
    isBorder: {
        type: Boolean,
        default: true
    }
})

import MainTitleBlock from '@/components/MainTitleBlock.vue'

import ProductCard from '@/components/ProductCard.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/button';
.section-slider {
    display: grid;
    @include adaptiveValue('row-gap', 60, 40);
    // .section-slider__headline
    @include adaptiveValue('padding-bottom', 60, 30);

    &--border {
        border-bottom: toRem(1) solid rgba(0, 0, 0, 0.301);
    }
    &__headline {
        display: flex;
        justify-content: space-between;
        @media (min-width: toEm($mobile)) {
            align-items: flex-end;
        }
        @media (max-width: toEm($mobile)) {
            flex-direction: column;
            row-gap: toRem(40);
        }
    }
    &__title-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: end;
        row-gap: toRem(20);
        @media (min-width: toEm($mobile)) {
            @include adaptiveValue('column-gap', 87, 30);
            grid-template-columns: repeat(2, auto);
        }
        @media (max-width: toEm(585)) {
            grid-template-columns: auto;
            text-align: center;
        }
    }
    &__timer {
        justify-self: center;
    }
    // .section-slider__arrow

    &__arrow {
        display: flex;
        column-gap: toRem(30);
        padding-bottom: toRem(5);
        @media (min-width: toEm($mobile)) {
            padding-right: toRem(15);
        }
        @media (max-width: toEm($mobile)) {
            align-self: center;
        }
    }

    &__button {
        justify-self: center;
    }
    // .section-slider__wrapper

    &__wrapper {
        display: grid;
        // grid-template-rows: repeat(2, toRem(750));
    }
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
