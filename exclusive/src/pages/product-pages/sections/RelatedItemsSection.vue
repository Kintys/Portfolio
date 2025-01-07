<template>
    <section class="related-items">
        <div class="related-items__container items-related">
            <div class="items-related__headline">
                <MainTitleBlock :title-text="sectionTitle" class="items-related__titles-block" />
            </div>
            <div class="items-related__content">
                <div class="items-related__card" v-for="relatedItem in bestProductList" :key="relatedItem._id">
                    <ProductCard :product-item="relatedItem" :is-move-to-ref="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import MainTitleBlock from '@/components/MainTitleBlock.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useHeadphonesStore } from '@/stores/headphone'
import { storeToRefs } from 'pinia'

const { getItemsList } = storeToRefs(useHeadphonesStore())
const bestProductList = computed(() => getItemsList.value.slice(0, 4))
//===========================================================

const sectionTitle = {
    cat: 'This Month',
    title: 'Best Selling Products '
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.related-items {
    // .related-items__container

    &__container {
        @include adaptiveValue('padding-top', 140, 80);
        @include adaptiveValue('padding-bottom', 140, 80);
    }
}

.items-related {
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
