import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { computed } from 'vue'

export const useGamepadsStore = defineStore('products', () => {
    const productsStore = getStoreTemplate('products')
    const { getItemsList, itemsList, collectionDB } = productsStore

    const getProductsList = computed(() => getItemsList.value.data)
    const getProductsListTotalNumber = computed(() => getItemsList.value.totalNumber)

    async function loadProductWithPagination(page, limit) {
        itemsList.value = await collectionDB.loadItemListWithFilterParams({
            page: page,
            prePage: limit
        })
    }
    return {
        getProductsList,
        getProductsListTotalNumber,
        loadProductWithPagination,
        ...productsStore
    }
})
