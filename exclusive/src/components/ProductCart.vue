<template>
    <div class="card">
        <div class="card__image-card">
            <div class="card__img"><v-img :src="productImage" /></div>
            <span class="card__discount">-40%</span>
            <div class="card__actions">
                <button class="card__wish-list-btn">
                    <div class="card__circle">
                        <IconBase width="20" height="20" viewBox="4 2 24 24" icon-color="transparent" class="card__icon"
                            ><IconWishList
                        /></IconBase>
                    </div></button
                ><button class="card__show-product-btn">
                    <div class="card__circle">
                        <IconBase
                            width="24"
                            height="24"
                            viewBox="-1 -4 24 24"
                            icon-color="transparent"
                            class="card__icon"
                            ><IconShow
                        /></IconBase>
                    </div>
                </button>
            </div>
            <v-btn class="card__add-to-cart">Add to Cart</v-btn>
        </div>
        <div class="card__description">
            <h4 class="card__title">HAVIT HV-G92 Gamepad</h4>
            <div class="card__costs">
                <span class="card__new-price">$120</span><span class="card__old-price">$160</span>
            </div>
            <div class="card__review">
                <star-rating :inline="true" :star-size="13" :read-only="true" :show-rating="false" rating="4" /><span
                    class="card__review-number"
                ></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import productImage from '@/assets/01.png'
import StarRating from 'vue-star-rating'
import IconBase from '@/components/icons/IconBase.vue'
import IconWishList from '@/components/icons/iconsSrc/IconWishList.vue'
import IconShow from '@/components/icons/iconsSrc/IconShow.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.card {
    max-width: toRem(270);
    max-height: toRem(350);
    &__image-card {
        display: grid;
        align-items: center;
        min-height: toRem(250);
        background-color: #f5f5f5;
        position: relative;

        &:hover .cart__add-to-cart {
            visibility: visible;
            pointer-events: auto;
            opacity: 1;
        }
    }

    // .card__img

    &__img {
        max-width: toRem(180);
        height: toRem(180);
    }

    // .card__discount

    &__discount {
        position: absolute;
        top: 4.444444%; /* 12/270 */
        left: 4.444444%;
        color: white;
        padding: toRem(4) toRem(12);
        border-radius: toRem(4);
        background: $secondColor;
        font-size: toRem(12);
        line-height: 150%; /* 150% */
    }
    &__circle {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &::before {
            content: '';
            background-color: #fff;
            position: absolute;
            width: toRem(34);
            height: toRem(34);
            border-radius: 50%;
            transition: all 0.3s;
        }
        @media (any-hover: hover) {
            &:hover::before {
                background-color: $secondColor;
            }
        }
    }

    &__actions {
        position: absolute;
        right: 5%;
        top: 6%;
        display: grid;
        gap: toRem(18);
    }

    &__wish-list-btn {
    }

    // .card__show-product-brn

    &__show-product-btn {
    }

    // .card__icon

    &__icon {
        z-index: 3;
    }

    // .card__add-to-cart

    &__add-to-cart {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #000;
        color: #fff;
        font-weight: 500;
        line-height: 150%;
        border-radius: 0 0 toRem(4) toRem(4);
        opacity: 0;
    }

    // .card__description

    &__description {
    }

    // .card__title

    &__title {
    }

    // .card__costs

    &__costs {
    }

    // .card__new-price

    &__new-price {
    }

    // .card__old-price

    &__old-price {
    }

    // .card__review

    &__review {
    }

    // .card__review-number

    &__review-number {
    }
}
</style>
