import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useProductStore } from './product'
import { useFiltersStore } from './filters'
import RequestManager from './helpers/RequestManager'

export const useAdminStore = defineStore('admin', () => {
    const productItem = ref(null)
    const { loadItemById } = useProductStore()
    const { getBrandsList } = storeToRefs(useFiltersStore())
    const test = ref(null)

    async function loadProductItemById(id) {
        try {
            productItem.value = await loadItemById(id)
        } catch (error) {
            console.log(error)
        }
    }

    async function sendProduct(data) {
        try {
            return await RequestManager.postFormRequest('/products/add', data)
        } catch (error) {
            console.error(error)
        }
    }
    async function clearProductItem() {
        productItem.value = null
    }

    async function urlToFile(url, fileName) {
        try {
            const blob = await RequestManager.getRequestWithBlob(url, false)
            return new File([blob], fileName, { type: blob.type })
        } catch (error) {
            console.error(`Error converting URL (${url}) to file:`, error)
            throw error
        }
    }

    async function processImages(images) {
        try {
            return await Promise.all(images.map((image, i) => urlToFile(image, `image${i}`)))
        } catch (error) {
            console.error('Error processing image files:', error)
            return []
        }
    }

    function getBrandData(brandName, brandsList) {
        const brand = brandsList.find((b) => b.name === brandName)
        return brand ? { title: brand.name, value: brand._id } : null
    }

    const getProductItem = computed(async () => {
        if (!productItem.value) return null

        const newProduct = {}
        const brandsList = getBrandsList.value || []
        const brandData = getBrandData(productItem.value.brand, brandsList)

        if (brandData) {
            newProduct['brands_id'] = brandData
        }

        const images = productItem.value.images || []
        newProduct['images'] = await processImages(images)

        Object.keys(productItem.value).forEach((key) => {
            if (key !== 'brand' && key !== 'images') {
                newProduct[key] = productItem.value[key]
            }
        })

        return newProduct
    })

    return { test, getProductItem, sendProduct, loadProductItemById, clearProductItem, urlToFile }
})
