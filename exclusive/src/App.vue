<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useSomeProductStore } from '@/stores/someProduct.js'
const { loadItemsList } = useSomeProductStore()
const { loginWithGoogleToken } = useAuthStore()
onMounted(() => {
    loginWithGoogleToken()
    loadItemsList()
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
