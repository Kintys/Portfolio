import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { computed } from 'vue'
import RequestManager from './helpers/RequestManager'

export const useGamepadsStore = defineStore('products', () => {
    const productsStore = getStoreTemplate('products')
    const { getItemsList, itemsList, collectionDB } = productsStore

    const getProductsList = computed(() => getItemsList.value.data?.documents || getItemsList.value.data)
    const getProductsListTotalNumber = computed(() => getItemsList.value.data?.totalNumber)

    async function loadProductWithPagination(filterProps) {
        const filterParams = copyWithoutNullAndUndefined(filterProps)
        try {
            console.log(filterParams)
            itemsList.value = await collectionDB.loadItemListWithFilterParams(filterParams)
        } catch (error) {
            return
        }
    }
    async function loginWithGoogle(path) {
        const auth = await RequestManager.getRequest(path)
        console.log(auth)
    }
    function copyWithoutNullAndUndefined(filterProps) {
        const newObj = {}
        for (const params in filterProps) {
            if (filterProps[params] !== null && filterProps[params] !== undefined) {
                if (Array.isArray(filterProps[params]) && params === 'newPrice')
                    newObj[params] = [`gte:${filterProps[params][0]}`, `lte:${filterProps[params][1]}`]
                if (params === 'sort') newObj[params] = `${filterProps[params].field}:${filterProps[params].value}`
                else newObj[params] = filterProps[params]
            }
        }
        return newObj
    }

    return {
        getProductsList,
        getProductsListTotalNumber,
        loadProductWithPagination,
        loginWithGoogle,
        ...productsStore
    }
})
