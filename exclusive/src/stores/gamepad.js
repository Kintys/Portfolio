import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useGamepadsStore = defineStore('gamepads', () => {
    return getStoreTemplate('gamepads')
})
