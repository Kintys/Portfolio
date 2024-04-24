<template>
    <a class="card">
        <div class="card__image-card">
            <div class="card__img"><v-img :src="productItem.img" /></div>
            <span class="card__discount">{{ productItem.discount }}</span>
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
            <h4 class="card__title">{{ productItem.productTitle }}</h4>
            <div class="card__costs">
                <span class="card__new-price">${{ productItem.prices.oldPrice }}</span
                ><span class="card__old-price">${{ productItem.prices.newPrice }}</span>
            </div>
            <Rating :v-model="productItem.review.rating" :stars="5" readonly :cancel="false" class="card__review">
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
            ><span class="card__review-number">({{ productItem.review.evaluation }})</span>
        </div>
    </a>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconWishList from '@/components/icons/iconsSrc/IconWishList.vue'
import IconShow from '@/components/icons/iconsSrc/IconShow.vue'
import IconRatingStarYellow from '../components/icons/iconsSrc/IconRatingStarYellow.vue'
import IconRatingStarGray from '../components/icons/iconsSrc/IconRatingStarGray.vue'
import Rating from 'primevue/rating'

defineProps({
    productItem: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.card {
    // .card__image-card
    max-width: toRem(270);
    max-height: toRem(350);
    display: grid;
    row-gap: toRem(16);
    &__image-card {
        display: grid;
        align-content: center;
        justify-content: center;
        min-height: toRem(250);
        background-color: #f5f5f5;
        position: relative;
        &:hover .card__add-to-cart {
            visibility: visible;
            pointer-events: auto;
            opacity: 1;
        }
    }

    // .card__img

    &__img {
        width: toRem(200);
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

    // .card__actions

    &__actions {
        position: absolute;
        right: 5%;
        top: 6%;
        display: grid;
        gap: toRem(18);
    }

    &__icon {
        z-index: 3;
    }

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
        display: flex;
        flex-direction: column;
        row-gap: toRem(8);
        font-weight: 500;
        line-height: 150%; /* 150% */
    }

    // .card__costs

    &__costs {
        display: flex;
        column-gap: toRem(12);
    }

    // .card__new-price

    &__new-price {
        color: $secondColor;
    }

    // .card__old-price

    &__old-price {
        opacity: 0.5;
        position: relative;
        &::after {
            content: '';
            background: #000;
            height: toRem(1.5);
            width: 100%;
            position: absolute;
            top: 45%;
            left: 0;
        }
    }

    // .card__review

    &__review {
        display: flex;
    }
}
</style>
