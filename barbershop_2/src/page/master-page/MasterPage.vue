<template>
    <div class="wrapper">
        <HeaderContainer />
        <BookPageSection :class="{ 'show-book-menu': showMenu }" />
        <main class="main">
            <slot>213213</slot>
        </main>
        <FooterContainer />
    </div>
</template>

<script setup>
import { bookMenu } from "@/helpersFunc/bookMenu";
const { showMenu } = bookMenu();
import BookPageSection from "@/page/book-page/BookPageSection.vue";
import HeaderContainer from "@/page/master-page/header/HeaderContainer.vue";
import FooterContainer from "@/page/master-page/footer/FooterContainer.vue";
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
}
.show-book-menu {
    right: 0;
}
</style>
