<template>
    <div class="wrapper">
        <HeaderContainer />
        <main class="main">
            <slot></slot>
        </main>
        <FooterContainer />
    </div>
</template>

<script setup>
import FooterContainer from '@/master-page/footer/FooterContainer.vue'
import HeaderContainer from '@/master-page/header/HeaderContainer.vue'
</script>

<style lang="scss" scoped>
.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @supports (overflow: clip) {
        overflow: clip;
    }
    // Pushes footer
    > main {
        flex: 1 1 auto;
    }
    // Fix for sliders
    > * {
        min-width: 0;
    }
}
</style>
