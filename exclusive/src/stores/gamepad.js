import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { computed } from 'vue'

export const useGamepadsStore = defineStore('products', () => {
    const productsStore = getStoreTemplate('products')
    const { getItemsList, itemsList, collectionDB } = productsStore

    const getProductsList = computed(() => getItemsList.value.data?.documents)
    const getProductsListTotalNumber = computed(() => getItemsList.value.data?.totalNumber)

    async function loadProductWithPagination(page, limit, sortOpt, minValue, maxValue, search, rating) {
        console.log(search)
        itemsList.value = await collectionDB.loadItemListWithFilterParams({
            page: page,
            perPage: limit,
            sort: `newPrice:${sortOpt}`,
            newPrice: [`gte:${minValue}`, `lte:${maxValue}`],
            title: search,
            rating: rating
        })
    }
    return {
        getProductsList,
        getProductsListTotalNumber,
        loadProductWithPagination,
        ...productsStore
    }
})
