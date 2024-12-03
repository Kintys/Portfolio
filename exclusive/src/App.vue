<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
const { loginWithGoogleToken } = useAuthStore()
onMounted(() => {
    loginWithGoogleToken()
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
@/stores/gamepad.js
