<template>
    <div class="filter">
        <div class="filter__container">
            <v-breadcrumbs :items="links" color="#00000080"></v-breadcrumbs>
            <div class="filter__content">
                <FilterPanel v-model="filterObject.filters"></FilterPanel>
                <FilterProductBox v-model="filterObject.sortOption"></FilterProductBox>
            </div>
            <v-pagination
                v-model="filterObject.pageNumber"
                :length="totalPage"
                active-color="#db4444"
                class="filter__pagination"
            ></v-pagination>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, computed, watch } from 'vue'
import FilterPanel from './component/FilterPanel.vue'
import FilterProductBox from './component/FilterProductBox.vue'
import { useGamepadsStore } from '../../stores/gamepad.js'
import { storeToRefs } from 'pinia'

const { loadProductWithPagination, loadItemsList } = useGamepadsStore()
const { getProductsListTotalNumber } = storeToRefs(useGamepadsStore())
const filterObject = ref({
    pageNumber: 1,
    prePageNumber: 3,
    sortOption: null,
    filters: {}
})
const totalPage = computed(() => Math.ceil(getProductsListTotalNumber.value / filterObject.value.prePageNumber))

watch(filterObject.value, (newVal) => {
    if (newVal) {
        loadProductWithPagination({
            page: newVal.pageNumber - 1,
            prePage: newVal.prePageNumber,
            sort: newVal.sortOption,
            newPrice: [newVal.filters.minPrice, newVal.filters.maxPrice],
            title: newVal.filters.search,
            rating: newVal.filters.rating
        })
    }
})

onBeforeMount(() => {
    loadProductWithPagination({
        page: filterObject.value.pageNumber - 1,
        prePage: filterObject.value.prePageNumber
    })
})

const links = [
    {
        title: 'Home',
        disabled: false,
        href: '/'
    },
    {
        title: 'Catalog',
        disabled: false,
        href: '/catalog',
        active: true
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';

.filter {
    // .filter__container

    &__container {
        @include adaptiveValue('padding-top', 170, 60);
        @include adaptiveValue('padding-bottom', 140, 40);
    }

    // .filter__content

    &__content {
        display: grid;
        grid-template-columns: toRem(300) 1fr;
        column-gap: toRem(30);
    }

    // .filter__pagination

    &__pagination {
    }
}

.filter {
    // .filter__container

    &__container {
    }

    // .filter__pagination

    &__pagination {
    }
}
</style>
