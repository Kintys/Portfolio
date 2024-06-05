<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useGamepadsStore } from '@/stores/gamepad.js'
const { loadItemsList } = useGamepadsStore()
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
@/stores/gamepad.js
