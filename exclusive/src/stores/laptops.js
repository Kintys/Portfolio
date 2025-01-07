import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useLaptopsStore = defineStore('laptops', () => {
    const { getItemsList, itemsList, loadItemsList } = getStoreTemplate('products/laptops')
    return {
        getItemsList,
        itemsList,
        loadItemsList
    }
})
