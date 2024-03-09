<template>
    <div class="wrapper">
        <HeaderContainer />

        <main class="main">
            <BookPageSection :class="{ 'show-book-menu': showMenu }" />
            <slot>213213</slot>
        </main>
        <v-btn style="z-index: 100" @click="activeMenu">open</v-btn>
        <v-btn style="z-index: 150" @click="activeMenu">open</v-btn>
        <FooterContainer />
    </div>
</template>

<script setup>
import { burgerMenu } from "@/helpersFunc/burger";
const { showMenu, activeMenu } = burgerMenu();
import BookPageSection from "@/page/book-page/BookPageSection.vue";
import HeaderContainer from "@/page/master-page/header/HeaderContainer.vue";
import FooterContainer from "@/page/master-page/footer/FooterContainer.vue";
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
}
.show-book-menu {
    left: 0;
}
</style>
