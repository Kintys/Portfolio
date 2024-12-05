import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { computed } from 'vue'
import RequestManager from './helpers/RequestManager'

export const useGamepadsStore = defineStore('products', () => {
    const productsStore = getStoreTemplate('products')
    const { getItemsList, itemsList, collectionDB } = productsStore

    const getProductsList = computed(() => getItemsList.value.data?.documents || getItemsList.value.data)
    const getProductsListTotalNumber = computed(() => getItemsList.value.data?.totalNumber)

    async function loadProductWithPagination(page, limit, sortOpt, minValue, maxValue, search, rating) {
        itemsList.value = await collectionDB.loadItemListWithFilterParams({
            page: page,
            perPage: limit,
            sort: `newPrice:${sortOpt}`,
            newPrice: [`gte:${minValue}`, `lte:${maxValue}`],
            title: search,
            rating: rating
        })
    }
    async function loginWithGoogle(path) {
        const auth = await RequestManager.getRequest(path)
        console.log(auth)
    }
    return {
        getProductsList,
        getProductsListTotalNumber,
        loadProductWithPagination,
        loginWithGoogle,
        ...productsStore
    }
})
