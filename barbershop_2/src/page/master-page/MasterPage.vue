<template>
    <div class="wrapper">
        <HeaderContainer />
        <main class="main">
            <slot>213213</slot>
        </main>
        <FooterContainer />
    </div>
</template>

<script setup>
import HeaderContainer from '@/page/master-page/header/HeaderContainer.vue'
import FooterContainer from '@/page/master-page/footer/FooterContainer.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';

.container {
    @include adaptiveValue('font-size', 30, 10);
}
</style>
