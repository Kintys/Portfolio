import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const usePcStore = defineStore('pc', () => {
    const pcStore = getStoreTemplate('products/pcs')
    return {
        ...pcStore
    }
})
