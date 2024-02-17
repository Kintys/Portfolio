<template>
    <div class="wrapper">
        <HeaderComp />
        <main class="main">
            <slot>213213</slot>
        </main>
        <footer>213213</footer>
    </div>
</template>

<script setup>
import HeaderComp from '@/page/master-page/header/HeaderBlock.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';

.container {
    @include adaptiveValue('font-size', 30, 10);
}
</style>
