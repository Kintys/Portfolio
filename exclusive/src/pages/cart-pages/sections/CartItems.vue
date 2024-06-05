<template>
    <section class="items-cart">
        <div class="items-cart__container">
            <div v-if="getWindowSize" class="items-cart__mobile mobile-cart">
                <div class="mobile-cart__titles item-wrapper item-wrapper--triple item-wrapper--small-box">
                    <span>Product</span><span>Price</span><span>Quantity</span>
                </div>
                <ul class="mobile-cart__list">
                    <li class="mobile-cart__items">
                        <div class="mobile-cart__item item-wrapper item-wrapper--triple">
                            <span class="item-wrapper__picture">
                                <button class="item-wrapper__delete">
                                    <font-awesome-icon :icon="['fas', 'circle-xmark']" class="item-wrapper__icon" />
                                </button>
                                <v-img :width="54" :height="54" :src="photo" class="item-wrapper__img" />LCD Monitor
                            </span>
                            <span>$650</span
                            ><span class="item-wrapper__number"
                                ><v-number-input
                                    :reverse="false"
                                    controlVariant="stacked"
                                    label=""
                                    :hideInput="false"
                                    inset
                                    variant="outlined"
                                >
                                </v-number-input
                            ></span>
                        </div>
                        <div class="mobile-cart__item item-wrapper item-wrapper--small-box item-wrapper--double">
                            <span>Subtotal</span><span>${{ 650 }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-else class="items-cart__desktop desktop-cart">
                <div class="desktop-cart__titles item-wrapper item-wrapper--small-box">
                    <span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span>
                </div>
                <ul class="desktop-cart__list">
                    <li class="desktop-cart__item item-wrapper">
                        <span class="item-wrapper__picture">
                            <button class="item-wrapper__delete">
                                <font-awesome-icon :icon="['fas', 'circle-xmark']" class="item-wrapper__icon" />
                            </button>
                            <v-img :width="54" :height="54" :src="getItemsList[0].photo" class="item-wrapper__img" />LCD
                            Monitor </span
                        ><span>$650</span
                        ><span class="item-wrapper__number"
                            ><v-number-input
                                :reverse="false"
                                controlVariant="stacked"
                                :hideInput="false"
                                inset
                                variant="outlined"
                            >
                            </v-number-input></span
                        ><span>$650</span>
                    </li>
                </ul>
            </div>
            <div class="items-cart__actions">
                <v-btn class="items-cart__btn button-main">Return To Shop</v-btn>
                <v-btn class="items-cart__btn button-main">Update Cart</v-btn>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

//===========================================================
import photo from '@/assets/productPage/01.png'

//===========================================================

import { onResize } from '@/modulesHelpers/lib/resize.js'
const { currentWindowWidth: windowsWidth } = onResize()
const getWindowSize = computed(() => (windowsWidth.value <= 600 ? true : false))

import { storeToRefs } from 'pinia'
import { useSomeProductStore } from '@/stores/someProduct.js'
const { getItemsList } = storeToRefs(useSomeProductStore())
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/button';
.items-cart {
    // .items-cart__container

    &__container {
        @include adaptiveValue('padding-top', 140, 80);
        line-height: 150%; /* 150% */
    }

    // .items-cart__breadcrumbs

    &__breadcrumbs {
        &:not(:last-child) {
            margin-bottom: toRem(80);
        }
    }
    // .items-cart__actions

    &__actions {
        @media (min-width: toEm($mobile)) {
            justify-content: space-between;
            display: flex;
        }
    }
    // .items-cart__btn

    &__btn {
        @media (max-width: toEm($mobile)) {
            width: 100%;
        }
        background-color: transparent;
        color: #000;
        &:not(:last-child) {
            margin-bottom: toRem(10);
        }
    }
}
.desktop-cart,
.mobile-cart {
    &,
    &__titles,
    &__item,
    &__list {
        &:not(:last-child) {
            @include adaptiveValue('margin-bottom', 40, 20);
        }
    }
}

.item-wrapper {
    @include adaptiveValue('padding-right', 32, 10);
    @include adaptiveValue('padding-left', 32, 10);
    display: grid;
    grid-template-columns: repeat(4, minMax(toRem(100), toRem(200)));
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    border-radius: toRem(4);
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: toRem(102);
    &--small-box {
        height: toRem(72);
    }
    &--triple {
        grid-template-columns: repeat(3, minMax(toRem(80), toRem(200)));
    }

    &--double {
        display: flex;
    }
    span {
        margin: toRem(0) toRem(6);
        &:first-child {
            justify-self: start;
        }
        &:last-child {
            justify-self: end;
        }
    }

    &__picture {
        display: flex;
        align-items: center;
        gap: toRem(8);
        position: relative;
    }
    &__img {
        @media (max-width: toEm(379)) {
            display: none;
        }
    }
    &__delete {
        position: absolute;
        top: 0;
        left: 0;
        color: $secondColor;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        &::after {
            content: '';
            position: absolute;
            @include adaptiveValue('width', 18, 14);
            @include adaptiveValue('height', 18, 14);
            border-radius: 50%;
            background-color: #fff;
            z-index: -1;
        }
        @media (max-width: toEm(379)) {
            top: 0; /* 20/102 */
            left: 100%; /* 30/1170 */
        }
        @include adaptiveValue('font-size', 24, 16);
    }
    &__number {
        max-width: toRem(80);
        :deep() {
            .v-input__details {
                display: none;
            }
        }
    }
}
</style>
@/stores/gamepad.js
