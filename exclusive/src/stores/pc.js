import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const usePcStore = defineStore('pc', () => {
    const { getItemsList, itemsList, loadItemsList } = getStoreTemplate('products/pcs')
    return {
        getItemsList,
        itemsList,
        loadItemsList
    }
})
