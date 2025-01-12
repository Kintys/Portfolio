<template>
    <MainMasterPage>
        <div class="cart">
            <div class="cart__container">
                <v-breadcrumbs :items="items" color="#00000080" class="cart__breadcrumbs"></v-breadcrumbs>
                <CartItems />
            </div>
        </div>
    </MainMasterPage>
</template>

<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import CartItems from '@/pages/cart-pages/sections/CartItems.vue'
const items = [
    {
        title: 'Home',
        disabled: false,
        href: '/',
        active: true
    },
    {
        title: 'Cart',
        disabled: true,
        href: '#'
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';
.cart {
    // .cart__container

    &__container {
        @include adaptiveValue('padding-top', 140, 80);
        @include adaptiveValue('padding-bottom', 140, 80);
    }
    &__breadcrumbs {
        &:not(:last-child) {
            margin-bottom: toRem(80);
        }
    }
}
</style>
