<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { usePcStore } from '@/stores/pc'
import { useLaptopsStore } from './stores/laptops'
import { useHeadphonesStore } from './stores/headphone'
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
const { loadItemsList: loadHeadphoneList } = useHeadphonesStore()
const { loadItemsList: loadLaptopsList } = useLaptopsStore()
const { loadItemsList: loadPcList } = usePcStore()
const { loadUserOrderById, saveUserOrderWithSendBeacon } = useCartStore()
const { loginWithGoogleToken } = useAuthStore()
const { isAuthenticated } = storeToRefs(useAuthStore())
onMounted(async () => {
    loadHeadphoneList()
    loadLaptopsList()
    loadPcList()
    loginWithGoogleToken()
    window.addEventListener('beforeunload', handleBeforeUnload)
})
watchEffect(() => {
    if (isAuthenticated.value) loadUserOrderById()
})

const handleBeforeUnload = (event) => {
    saveUserOrderWithSendBeacon()
    event.returnValue = ''
}

onUnmounted(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
