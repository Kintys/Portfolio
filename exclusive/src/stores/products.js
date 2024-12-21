import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { computed, ref } from 'vue'
import RequestManager from './helpers/RequestManager'

export const useProductsStore = defineStore('products', () => {
    const productsStore = getStoreTemplate('products')
    const { getItemsList, itemsList, collectionDB } = productsStore
    const brandsList = ref([])

    const getProductsList = computed(() => getItemsList.value.data?.documents || getItemsList.value.data)
    const getProductsListTotalNumber = computed(() => getItemsList.value.data?.totalNumber)
    const getBrandsList = computed(() => brandsList.value)

    async function loadProductWithPagination(filterProps) {
        const filterParams = copyWithoutNullAndUndefined(filterProps)
        try {
            itemsList.value = await collectionDB.loadItemListWithFilterParams(filterParams)
        } catch (error) {
            return
        }
    }
    async function loadBrandsList() {
        try {
            brandsList.value = await collectionDB.loadWithEndPoint('brands')
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
                    newObj[params] = `gte:${filterProps[params][0]}-lte:${filterProps[params][1]}`
                else if (params === 'sort') newObj[params] = `${filterProps[params].field}:${filterProps[params].value}`
                else newObj[params] = filterProps[params]
            }
        }
        console.log(newObj)
        return newObj
    }

    return {
        getProductsList,
        getProductsListTotalNumber,
        getBrandsList,
        loadProductWithPagination,
        loadBrandsList,
        loginWithGoogle,
        ...productsStore
    }
})
