<template>
    <section class="best-product-section">
        <div class="best-product-section__container product-best">
            <div class="product-best__headline">
                <MainTitleBlock :title-text="sectionTitle" class="product-best__titles-block" />
                <v-btn class="product-best__button button-main button-main--small">View All</v-btn>
            </div>
            <div class="product-best__content">
                <div class="product-best__card" v-for="bestProduct in getItemsList" :key="bestProduct._id">
                    <ProductCard :product-item="bestProduct" :is-move-to-ref="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import MainTitleBlock from '@/components/MainTitleBlock.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useLaptopsStore } from '@/stores/laptops.js'
import { storeToRefs } from 'pinia'
const { getItemsList } = storeToRefs(useLaptopsStore())
//===========================================================

const sectionTitle = {
    cat: 'This Month',
    title: 'Best Selling Products '
}
//===========================================================
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/button';
.best-product-section {
    @include adaptiveValue('padding-top', 140, 80);
}
.product-best {
    display: grid;
    row-gap: toRem(60);
    // .product-best__headline

    &__headline {
        display: flex;
        justify-content: space-between;
        @media (max-width: toEm($mobile)) {
            flex-direction: column;
            row-gap: toRem(20);
        }
        @media (max-width: toEm(585)) {
            text-align: center;
        }
    }

    // .product-best__button

    &__button {
        @media (min-width: toEm($mobile)) {
            align-self: flex-end;
        }
    }

    // .product-best__content

    &__content {
        display: grid;
        @media (max-width: toEm(823)) {
            justify-content: center;
        }
        @include gridCards(fit, toRem(250), auto);
        @include adaptiveValue('gap', 30, 10);
    }
}
</style>
