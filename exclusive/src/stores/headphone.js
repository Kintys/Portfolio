import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useHeadphonesStore = defineStore('headphones', () => {
    const { getItemsList, itemsList, loadItemsList } = getStoreTemplate('products/headphones')
    return {
        getItemsList,
        itemsList,
        loadItemsList
    }
})
