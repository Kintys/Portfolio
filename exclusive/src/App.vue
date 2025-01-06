<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { usePcStore } from '@/stores/pc'
const { loadItemsList } = usePcStore()
const { loadUserOrderById } = useCartStore()
const { loginWithGoogleToken } = useAuthStore()

onMounted(async () => {
    loadItemsList()
    loginWithGoogleToken()
    loadUserOrderById()
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
