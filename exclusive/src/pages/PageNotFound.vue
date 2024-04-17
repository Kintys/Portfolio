<template>
    <MainMasterPage>
        <div class="page404">
            <div class="page404__container">
                <v-breadcrumbs :items="items" color="#00000080"></v-breadcrumbs>
                <div class="page404__content">
                    <div class="page404__headline">
                        <h1 class="page404__title">404 Not Found</h1>
                        <p class="page404__subtitle">Your visited page not found. You may go home page</p>
                    </div>
                    <div class="page404__action">
                        <v-btn class="page404__button button-main">
                            <router-link :to="{ name: 'home' }">Back to home page</router-link>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </MainMasterPage>
</template>

<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
const items = [
    {
        title: 'Home',
        disabled: false,
        href: '/'
    },
    {
        title: '404 Error',
        disabled: false,
        href: 'pageNotFound',
        active: true
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';

.page404 {
    // .page404__container

    &__container {
        display: grid;
        @include adaptiveValue('padding-top', 170, 60);
        @include adaptiveValue('row-gap', 140, 20);
        @include adaptiveValue('padding-bottom', 140, 40);
    }

    // .page404__content

    &__content {
        display: grid;
        justify-items: center;
        @include adaptiveValue('row-gap', 80, 40);
    }

    // .page404__headline

    &__headline {
        display: flex;
        flex-direction: column;
        font-family: $interFont;
        align-items: center;
        text-align: center;
        @include adaptiveValue('row-gap', 40, 25);
    }

    // .page404__title

    &__title {
        @include adaptiveValue('font-size', 110, 60);
        font-weight: 500;
        line-height: 104.545%;
        letter-spacing: toRem(3.3);
    }

    // .page404__subtitle

    &__subtitle {
        line-height: 150%;
    }
}
</style>
