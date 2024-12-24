import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useProductStore = defineStore('products', () => {
    const productsStore = getStoreTemplate('products')

    return {
        ...productsStore
    }
})
