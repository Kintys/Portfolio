<template>
    <footer class="footer"><p class="rights-text">© All rights reserved</p></footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.footer {
    display: flex;
    width: 100%;
    background-color: rgb(37, 29, 26);
    color: white;
    justify-content: center;
    align-items: center;
    @include adaptiveValue('padding-bottom', 56, 30);
    @include adaptiveValue('padding-top', 56, 30);
}
.rights-text {
}
</style>
