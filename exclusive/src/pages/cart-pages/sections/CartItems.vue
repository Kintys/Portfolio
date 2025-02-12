<template>
    <section class="items-cart">
        <div v-if="getWindowSize" class="items-cart__mobile mobile-cart">
            <div class="mobile-cart__titles item-wrapper item-wrapper--triple item-wrapper--small-box">
                <span>Product</span><span>Price</span><span>Quantity</span>
            </div>
            <ul class="mobile-cart__list">
                <li class="mobile-cart__items">
                    <div
                        v-for="cartProduct of cartList"
                        :key="cartProduct.productId"
                        class="mobile-cart__item item-wrapper item-wrapper--triple"
                    >
                        <span class="item-wrapper__picture">
                            <button
                                @click.prevent="deleteProductInOrderList(cartProduct.productId)"
                                class="item-wrapper__delete"
                            >
                                <font-awesome-icon :icon="['fas', 'circle-xmark']" class="item-wrapper__icon" />
                            </button>
                            <v-img :width="54" :height="54" :src="cartProduct.image" class="item-wrapper__img" />
                            <span v-ellipses:10>{{ cartProduct.title }} </span>
                        </span>
                        <span>${{ cartProduct.price }}</span
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
                        <span>Subtotal</span><span>${{ totalPrice }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else class="items-cart__desktop desktop-cart">
            <div class="desktop-cart__titles item-wrapper item-wrapper--small-box">
                <span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span>
            </div>
            <ul class="desktop-cart__list">
                <li
                    v-for="cartProduct of cartList"
                    :key="cartProduct.productId"
                    class="desktop-cart__item item-wrapper"
                >
                    <span class="item-wrapper__picture">
                        <button
                            @click.prevent="deleteProductInOrderList(cartProduct.productId)"
                            class="item-wrapper__delete"
                        >
                            <font-awesome-icon :icon="['fas', 'circle-xmark']" class="item-wrapper__icon" />
                        </button>
                        <v-img :width="54" :height="54" :src="cartProduct.image" class="item-wrapper__img" />
                        <span v-ellipses:10> {{ cartProduct.title }}</span>
                    </span>
                    <span>${{ cartProduct.price }}</span>
                    <span class="item-wrapper__number">
                        <v-number-input
                            :reverse="false"
                            controlVariant="stacked"
                            :hideInput="false"
                            :max="cartProduct.quantity"
                            :min="1"
                            v-model="cartProduct.amount"
                            @update:modelValue="($event) => changeAmountInOrderList(cartProduct.productId, $event)"
                            inset
                            variant="outlined"
                        >
                        </v-number-input></span
                    ><span>${{ cartProduct.subtotal.toFixed(2) }}</span>
                </li>
            </ul>
        </div>
        <div class="items-cart__actions">
            <v-btn class="items-cart__btn button-main">Return To Shop</v-btn>
            <v-btn @click="saveUserOrderWithSendBeacon()" class="items-cart__btn button-main">Update Cart</v-btn>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

//===========================================================

import { onResize } from '@/modulesHelpers/lib/resize.js'
const { currentWindowWidth: windowsWidth } = onResize()
const getWindowSize = computed(() => (windowsWidth.value <= 600 ? true : false))
//===========================================================

import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart.js'
import { vEllipses } from '@/directive/ellipses'
const { changeAmountInOrderList, deleteProductInOrderList, saveUserOrderWithSendBeacon } = useCartStore()
const { getCartProductList } = storeToRefs(useCartStore())

//===========================================================

const cartList = computed(() =>
    getCartProductList.value?.map((product) => {
        return { ...product, subtotal: parseFloat(product.price) * parseFloat(product.amount) }
    })
)

const totalPrice = computed(() =>
    cartList.value?.reduce((acc, product) => {
        return (acc += product.subtotal)
    }, 0)
)
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/button';
.items-cart {
    // .items-cart__container

    &__container {
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
