<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { usePcStore } from '@/stores/pc'
import { useLaptopsStore } from './stores/laptops'
import { useHeadphonesStore } from './stores/headphone'
const { loadItemsList: loadHeadphoneList } = useHeadphonesStore()
const { loadItemsList: loadLaptopsList } = useLaptopsStore()
const { loadItemsList: loadPcList } = usePcStore()
const { loadUserOrderById, saveUserOrderWithSendBeacon } = useCartStore()
const { loginWithGoogleToken } = useAuthStore()

onMounted(async () => {
    loadHeadphoneList()
    loadLaptopsList()
    loadPcList()
    loginWithGoogleToken()
    loadUserOrderById()
    window.addEventListener('beforeunload', handleBeforeUnload)
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
