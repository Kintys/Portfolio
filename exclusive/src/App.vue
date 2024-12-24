<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
const { loadUserOrderById } = useCartStore()
const { loginWithGoogleToken } = useAuthStore()

onMounted(async () => {
    loginWithGoogleToken()
    loadUserOrderById()
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
