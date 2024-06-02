import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useSomeProductStore = defineStore('someProduct', () => {
    return getStoreTemplate('someProduct')
})
