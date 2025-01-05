<template>
    <a @click.prevent="goToDetailsProduct" class="card" v-if="productItem">
        <div class="card__image-card">
            <div class="card__img"><v-img :src="productItem?.image" /></div>
            <span v-if="productItem.discount" class="card__discount">{{ productItem.discount }}</span>
            <div v-if="showActionsBtn" class="card__actions">
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
            <v-btn v-if="showAddBtn" @click.stop="addToCartList()" class="card__add-to-cart">Add to Cart</v-btn>
        </div>
        <div class="card__description">
            <h4 class="card__title">{{ productItem.title }}</h4>
            <div class="card__costs">
                <p class="card__price">
                    <span class="card__new-price">${{ productItem.newPrice }}</span
                    ><span v-if="productItem.oldPrice" class="card__old-price">${{ productItem.oldPrice }}</span>
                </p>
            </div>

            <slot name="cart-butt">
                <div class="card__review">
                    <Rating v-model="productItem.rating" :stars="5" readonly :cancel="false" class="card__stars">
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
                    ><span class="card__review-number">({{ productItem.evaluation }})</span>
                </div>
            </slot>
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
import { useRouter } from 'vue-router'

const props = defineProps({
    productItem: {
        type: Object,
        default: () => ({})
    },
    showAddBtn: {
        type: Boolean,
        default: true
    },
    showActionsBtn: {
        type: Boolean,
        default: true
    },
    isMoveToRef: {
        type: Boolean,
        default: true
    }
})
const router = useRouter()
function goToDetailsProduct() {
    if (!props.isMoveToRef) return
    router.push({
        name: 'product',
        params: {
            id: props.productItem._id
        }
    })
}
//===========================================================
import { useCartStore } from '@/stores/cart.js'
const { addProductToOrders } = useCartStore()
async function addToCartList() {
    try {
        await addProductToOrders({
            productId: props.productItem._id,
            image: props.productItem.image,
            price: props.productItem.newPrice,
            title: props.productItem.title,
            quantity: props.productItem.quantity,
            amount: 1
        })
    } catch (error) {
        console.error(error.massage)
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.card {
    // .card__image-card

    width: toRem(250);
    max-height: toRem(580);
    padding: toRem(10);
    transition: all 0.3s;
    border-radius: toRem(4);
    @media (any-hover: hover) {
        &:hover {
            //
            background: rgba(128, 128, 128, 0.253);
        }
    }
    &__image-card {
        display: grid;
        align-content: center;
        justify-content: center;
        height: toRem(300);
        background-color: #f5f5f5;
        position: relative;
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
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
        border-radius: toRem(0);
        opacity: 0;
        padding: 0;
    }

    // .card__description

    &__description {
        display: flex;
        flex-direction: column;
        row-gap: toRem(8);
        height: toRem(240);
        font-weight: 500;
        line-height: 150%; /* 150% */
    }

    // .card__costs

    &__costs {
        display: flex;
        flex-grow: 1;
        column-gap: toRem(12);
    }
    &__price {
        display: flex;
        align-items: flex-start;
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
        align-items: center;
        column-gap: toRem(10);
    }
    &__stars {
        display: flex;
    }
    &__review-number {
        font-size: toRem(14);
        font-weight: 600;
        line-height: 150%; /* 150% */
        opacity: 0.5;
        padding-bottom: toRem(4);
    }
}
</style>
