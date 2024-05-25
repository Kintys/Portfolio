<template>
    <div class="product-description">
        <header class="product-description__header">
            <h4 class="product-description__title">Havic HV G-92 Gamepad</h4>
            <div class="product-description__subtitle">
                <div class="product-description__reviews review">
                    <div class="review">
                        <Rating v-model="rating" :stars="5" readonly :cancel="false" class="review__stars">
                            <template #onicon>
                                <IconBase width="16" height="15">
                                    <IconRatingStarYellow />
                                </IconBase>
                            </template>
                            <template #officon>
                                <IconBase width="16" height="15">
                                    <IconRatingStarGray />
                                </IconBase>
                            </template> </Rating
                        ><span class="review__number">(130)</span>
                    </div>
                </div>
                <div class="product-description__availability">In Stock</div>
            </div>
            <div class="product-description__price">$192.00</div>
            <div class="product-description__text">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install
                & mess free removal Pressure sensitive.
            </div>
        </header>
        <div class="product-description__options">
            <div class="product-description__colors">
                <v-radio-group label="Colours:" v-model="color" inline :height="8" :width="8">
                    <v-radio color="red" value="red"></v-radio>
                    <v-radio color="red-darken-3" value="red-darken-3"></v-radio>
                    <v-radio color="indigo" value="indigo"></v-radio>
                    <v-radio color="indigo-darken-3" value="indigo-darken-3"></v-radio>
                    <v-radio color="orange" value="orange"></v-radio>
                    <v-radio color="orange-darken-3" value="orange-darken-3"></v-radio>
                </v-radio-group>
            </div>
            <div class="product-description__product-size checkbox-size">
                <span>Size:</span>
                <label
                    v-for="(itemSize, index) in sizeList"
                    :key="index"
                    class="checkbox-size__wrapper"
                    ref="focusesList"
                    @click="selectSize(index)"
                >
                    {{ itemSize }}
                    <input class="checkbox-size__input" type="radio" :value="itemSize" v-model="size"
                /></label>
            </div>
            <div class="product-description__actions">
                <div class="product-description__quantity quantity-inp">
                    <button class="quantity-inp__minus" @click="onDecreasingNumberOfProducts">-</button>
                    <span class="quantity-inp__number">{{ numberProduct }}</span
                    ><button class="quantity-inp__plus" @click="onIncreasingNumberOfProducts">+</button>
                </div>
                <v-btn class="product-description__buy-now button-main">Buy Now</v-btn>
                <button class="product-description__wish-list-button">
                    <IconBase width="32" height="32" viewBox="0 0 32 30" icon-color="transparent"
                        ><IconWishList
                    /></IconBase>
                </button>
            </div>
        </div>
        <footer class="product-description__delivery">
            <div class="product-description__free-delivery free-delivery">
                <div class="free-delivery__icon-box"><font-awesome-icon :icon="['faT', 'truck-fast']" size="xl" /></div>
                <div class="free-delivery__text-block">
                    <h6 class="free-delivery__title">Free Delivery</h6>
                    <a href="#" class="free-delivery__link">Enter your postal code for Delivery Availability</a>
                </div>
            </div>
            <div class="product-description__return-delivery return-delivery">
                <div class="free-delivery__icon-box">
                    <font-awesome-icon :icon="['fas', 'arrows-rotate']" flip="vertical" size="xl" />
                </div>
                <div class="return-delivery__text-block">
                    <h6 class="return-delivery__title">Return Delivery</h6>
                    <p class="return-delivery__text">
                        Free 30 Days Delivery Returns. <a href="#" class="return-delivery__link">Details</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const color = ref(null)
const size = ref(null)
const numberProduct = ref(1)
//===========================================================

import { useFocus } from '@/modulesHelpers/lib/focusFunc.js'
const { focusesList, onActive } = useFocus()

function selectSize(index) {
    onActive(index, 'active')
}
//===========================================================

const sizeList = ref(['xs', 's', 'm', 'l', 'xl'])
const rating = ref(4)
//===========================================================

//===========================================================
function onIncreasingNumberOfProducts() {
    numberProduct.value++
}
function onDecreasingNumberOfProducts() {
    if (numberProduct.value <= 1) numberProduct.value = 1
    else numberProduct.value--
}

//===========================================================

import Rating from 'primevue/rating'
import IconBase from '@/components/icons/IconBase.vue'
import IconWishList from '@/components/icons/iconsSrc/IconWishList.vue'
import IconRatingStarYellow from '@/components/icons/iconsSrc/IconRatingStarYellow.vue'
import IconRatingStarGray from '@/components/icons/iconsSrc/IconRatingStarGray.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/button';
.product-description {
    // .product-description__header
    display: flex;
    flex-direction: column;
    max-height: toRem(600);
    &__header {
        border-bottom: toRem(1) solid rgba(0, 0, 0, 0.5);
        padding-bottom: toRem(24);
    }

    // .product-description__title

    &__title {
        font-family: $interFont;
        @include adaptiveValue('font-size', 24, 18);
        font-weight: 600;
        line-height: 100%; /* 100% */
        letter-spacing: toRem(0.72);
        text-transform: capitalize;
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }
    &__subtitle {
        display: flex;
        align-items: center;
        column-gap: toRem(16);
        &:not(:last-child) {
            margin-bottom: toRem(17);
        }
    }

    // .product-description__reviews

    &__reviews {
    }

    // .product-description__availability

    &__availability {
        display: flex;
        align-items: center;
        column-gap: toRem(16);
        color: #0f6;
        font-size: toRem(14);
        line-height: 150%;
        &::before {
            content: '';
            width: toRem(1);
            height: toRem(16);
            background: rgba(0, 0, 0, 0.5);
        }
    }

    // .product-description__price

    &__price {
        text-transform: uppercase;
        font-family: $interFont;
        @include adaptiveValue('font-size', 24, 18);
        line-height: 100%; /* 100% */
        letter-spacing: toRem(0.72);
        font-weight: 600;
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .product-description__text

    &__text {
        font-size: toRem(14);
        line-height: 150%; /* 150% */
        max-width: toRem(375);
    }

    // .product-description__options

    &__options {
        flex-grow: 1;
        &:not(:last-child) {
            margin-bottom: toRem(40);
        }
    }

    // .product-description__colors

    &__colors {
        font-family: $interFont;
        :deep() {
            .v-input__control {
                flex-direction: row;
            }
            .v-radio-group > .v-input__control > .v-label + .v-selection-control-group {
                margin-top: 0;
            }
            .v-radio-group > .v-input__control > .v-label {
                margin-inline-start: 0;
                opacity: 1;
            }
            .v-input__details {
                display: none;
            }
        }
        &:not(:last-child) {
            margin-bottom: toRem(8);
        }
    }

    // .product-description__product-size

    &__product-size {
        display: flex;
        align-items: center;
        :deep() {
            .v-input__details {
                display: none;
            }
        }
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .product-description__actions

    &__actions {
        display: flex;
        align-items: center;
        column-gap: toRem(16);
    }

    // .product-description__quantity

    &__quantity {
    }

    // .product-description__buy-now

    &__buy-now {
        padding: toRem(22) toRem(47.3);
    }

    // .product-description__wish-list-button

    &__wish-list-button {
        border: toRem(1) solid rgba(0, 0, 0, 0.5);
        border-radius: toRem(4);
        padding: toRem(1.5) toRem(3);
    }

    // .product-description__delivery

    &__delivery {
        border-radius: toRem(4);
        border: toRem(1) solid rgba(0, 0, 0, 0.5);
    }

    // .product-description__free-delivery

    &__free-delivery {
    }

    // .product-description__return-delivery

    &__return-delivery {
    }
}
.quantity-inp {
    // .quantity-inp__minus
    width: toRem(160);
    height: toRem(44);
    border: toRem(1) solid rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: toRem(4);

    &__minus,
    &__plus {
        width: toRem(40);
        height: toRem(43);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: toRem(30);
        transition: all 0.3s;
        @media (any-hover: hover) {
            &:hover {
                color: #ffff;
                background-color: $secondColor;
            }
        }
    }
    &__plus {
        border-radius: toRem(0) toRem(4) toRem(4) toRem(0);
        outline: toRem(2) solid black;
    }
    &__minus {
        border-radius: toRem(4) toRem(0) toRem(0) toRem(4);
        outline: toRem(2) solid black;
    }
    // .quantity-inp__number

    &__number {
        width: toRem(80);
        display: flex;
        align-items: center;
        justify-content: center;
        height: toRem(44);
        border-left: toRem(1) solid rgba(0, 0, 0, 0.5);
        border-right: toRem(1) solid rgba(0, 0, 0, 0.5);
        font-size: toRem(20);
        font-weight: 500;
        line-height: 140%; /* 140% */
    }

    // .quantity-inp__plus
}
.product-description {
    // .product-description__free-delivery

    &__free-delivery {
    }

    // .product-description__return-delivery

    &__return-delivery {
    }
}
.product-description {
    // .product-description__delivery

    &__delivery {
    }

    // .product-description__free-delivery

    &__free-delivery {
    }

    // .product-description__return-delivery

    &__return-delivery {
    }
}

.free-delivery,
.return-delivery {
    &:not(:last-child) {
        border-bottom: toRem(1) solid rgba(0, 0, 0, 0.5);
    }
    display: flex;
    align-items: center;
    column-gap: toRem(16);
    padding: toRem(20) toRem(15);

    &__text-block {
    }
    &__icon-box {
        width: toRem(32);
    }

    // .free-delivery__title

    &__title {
        font-weight: 500;
        line-height: 150%; /* 150% */
        &:not(:last-child) {
            margin-bottom: toRem(8);
        }
    }

    // .free-delivery__link
    &__text,
    &__link {
        font-size: toRem(12);
        font-weight: 500;
        line-height: 150%;
    }
    &__link {
        @media (any-hover: hover) {
            &:hover {
                text-decoration-line: underline;
            }
        }
    }
}

.review {
    display: flex;
    align-items: center;
    column-gap: toRem(10);
    &__stars {
        display: flex;
    }
    &__number {
        font-size: toRem(14);
        font-weight: 600;
        line-height: 150%; /* 150% */
        opacity: 0.5;
    }
}

.checkbox-size {
    // .checkbox-size__wrapper
    display: flex;
    column-gap: toRem(16);

    &__wrapper {
        cursor: pointer;
        width: toRem(32);
        height: toRem(32);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: toRem(4);
        border: toRem(1) solid rgba(0, 0, 0, 0.5);
        font-size: toRem(14);
        font-weight: 500;
        line-height: 150%;
        transition: all 0.3s;
        position: relative;
        text-transform: uppercase;
    }
    &__input {
        cursor: pointer;
        position: absolute;
        opacity: 0;
    }
}
.active {
    background-color: $secondColor;
    color: #fff;
}
</style>