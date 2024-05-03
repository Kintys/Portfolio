<template>
    <section class="category-section"><CategoryContainer /></section>
</template>

<script setup>
import CategoryContainer from '@/pages/home-page/categories-section/CategoryContainer.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.category-section {
    @include adaptiveValue('padding-top', 140, 60);
}
</style>
