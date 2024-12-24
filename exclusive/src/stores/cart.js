import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { computed, ref } from 'vue'
import { useUsersStore } from './users'
export const useCartStore = defineStore('cart', () => {
    //state
    const userStore = useUsersStore()
    const userOrder = ref({
        email: '',
        orderId: '',
        cartProductList: []
    })

    const timerStop = ref('')

    //getters
    const getCartList = computed(() => userOrder.value)
    const getCartProductList = computed(() => userOrder.value.cartProductList)
    const findProductInCartProductList = computed(() => {
        return (productId) => {
            return getCartProductList.value.findIndex((product) => product.productId === productId)
        }
    })
    //actions
    async function addProductToOrders(product) {
        try {
            if (!product) throw new Error('Product incorrect!')
            userOrder.value.orderId = await createOrderId(userOrder.value.orderId)

            const productIndex = findProductInCartProductList.value(product.productId)

            if (productIndex === -1) {
                userOrder.value.cartProductList.push({ ...product })
                return true
            }

            userOrder.value.cartProductList[productIndex].amount++
        } catch (error) {
            return error.massage
        }
    }
    async function createOrderId(orderId) {
        if (orderId) return orderId
        else {
            timerStop.value = null
            const newOrderId = uuidv4()

            localStorage.setItem('orderId', newOrderId)
            timerStop.value = setTimeout(() => {
                deleteOrderId()
            }, 300000)
            return newOrderId
        }
    }
    async function deleteOrderId() {
        const orderId = localStorage.getItem('orderId')
        if (!orderId) return
        else {
            localStorage.removeItem('orderId')
            userOrder.value.orderId = ''
            if (timerStop.value) {
                clearTimeout(timerStop.value)
                timerStop.value = null
            }
        }
    }

    async function sendUserOrder() {
        const userEmail = userStore.getCurrentUser.value?.email ?? ''
        if (!userEmail) return
        else {
            userOrder.value['email'] = userEmail
            await deleteOrderId()
        }
    }
    async function loadUserOrderById() {
        const orderId = localStorage.getItem('orderId')
        if (orderId) userOrder.value.orderId = orderId
    }
    async function changeAmountInOrderList(productId, value) {
        try {
            if (!productId) throw new Error('Product Id incorrect!')
            const productIndex = findProductInCartProductList.value(productId)
            userOrder.value.cartProductList[productIndex].amount = parseInt(value)
        } catch (error) {
            console.log(error.massage)
        }
    }
    async function deleteProductInOrderList(productId) {
        userOrder.value.cartProductList = userOrder.value.cartProductList.filter(
            (product) => product.productId !== productId
        )
    }
    return {
        getCartProductList,
        addProductToOrders,
        loadUserOrderById,
        changeAmountInOrderList,
        deleteProductInOrderList,
        userOrder
    }
})
