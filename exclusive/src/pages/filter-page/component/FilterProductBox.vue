<template>
    <section class="filter-product">
        <div class="filter-product__top-bar top-bar">
            <v-select
                label="Sort"
                :items="selectedItems"
                v-model="sortOption"
                variant="outlined"
                class="top-bar__select"
                hide-details="false"
            ></v-select>
        </div>
        <div class="filter-product__list-product">
            <template v-for="product of productData" :key="product._id"
                ><ProductCard :product-item="product"></ProductCard
            ></template>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from 'vue'
import { useGamepadsStore } from '@/stores/gamepad'
import ProductCard from '../../../components/ProductCard.vue'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['update:modelValue'])

const { getProductsList } = storeToRefs(useGamepadsStore())
const sortOption = ref('asc')

const productData = computed(() => getProductsList.value)

const selectedItems = [
    {
        title: 'Ascending prices',
        value: 'asc'
    },
    {
        title: 'Descending prices',
        value: 'desc'
    }
]

watch(sortOption, (newSort) => {
    if (newSort) {
        emit('update:modelValue', newSort)
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';
.filter-product {
    // .filter-product__nav-bar

    &__top-bar {
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }

    // .filter-product__list-product

    &__list-product {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: toRem(20);
    }
}

.top-bar {
    // .top-bar__select
    padding: toRem(8) toRem(15);
    border-radius: toRem(4);
    box-shadow: 0 toRem(1) toRem(13) 0 rgba(0, 0, 0, 0.05);
    display: grid;
    justify-content: end;

    &__select {
        width: toRem(250);
    }
}
</style>
