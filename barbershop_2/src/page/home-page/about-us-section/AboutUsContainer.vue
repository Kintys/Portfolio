<template>
    <div class="container">
        <TitlePageComponents
            class="head"
            title="About Us"
            subtitle=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt"
        />
        <ImageBoxComponent class="image-box" />
        <footer class="actions">
            <router-link :to="{ name: 'our masters' }"
                ><v-btn class="button-main"
                    >Our masters and their masterpieces</v-btn
                ></router-link
            >
            <v-btn class="button-transparent">Our Instagram</v-btn>
        </footer>
    </div>
</template>

<script setup>
import ImageBoxComponent from "@/page/home-page/about-us-section/ImageBoxComponent.vue";
import TitlePageComponents from "@/components/TitlePageComponents.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/button";
@import "@/assets/style/lib/mixins";
.container {
    @include adaptiveValue("padding-top", 240, 100);
}
.head {
    &:not(:last-child) {
        margin-bottom: toRem(60);
    }
}

.image-box {
    @include adaptiveValue("margin-bottom", 163, 50);
}
.actions {
    display: flex;
    @include adaptiveValue("gap", 30, 20);
    justify-content: center;
    align-items: center;
    @media (max-width: em(767.98)) {
        flex-direction: column;
    }
}
.button-main {
    @media (max-width: em(479.98)) {
        letter-spacing: 0;
    }
}
.button-transparent {
    padding: toRem(24) toRem(40) toRem(24) toRem(40);
}
</style>
