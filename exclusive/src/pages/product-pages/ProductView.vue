<template>
    <MainMasterPage><ProductDetailsSection /><RelatedItemsSection /> </MainMasterPage>
</template>

<script setup>
import { onBeforeMount, onUpdated, computed } from 'vue'
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import ProductDetailsSection from '@/pages/product-pages/sections/ProductDetailsSection.vue'
import RelatedItemsSection from '@/pages/product-pages/sections/RelatedItemsSection.vue'
//===========================================================
import { useProductStore } from '@/stores/product.js'
import { useRoute } from 'vue-router'
const { loadItemById } = useProductStore()

const route = useRoute()
const productId = computed(() => route.params.id)
onBeforeMount(async () => {
    await loadItemById(productId.value)
})
onUpdated(async () => {
    await loadItemById(productId.value)
})
</script>

<style lang="scss" scoped></style>
