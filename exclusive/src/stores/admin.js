import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './product'
export const useAdminStore = defineStore('admin', () => {
    const productItem = ref(null)
    const { loadItemById } = useProductStore()
    async function loadProductItemById(id) {
        try {
            productItem.value = await loadItemById(id)
        } catch (error) {
            console.log(error)
        }
    }
})
