<template>
    <MainMasterPage>
        <div class="cart">
            <v-breadcrumbs :items="items" color="#00000080" class="items-cart__breadcrumbs"></v-breadcrumbs>
            <CartItems />
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
        href: '/'
    },
    {
        title: 'cart',
        disabled: false,
        href: 'cart',
        active: true
    }
]
</script>

<style lang="scss" scoped></style>
<!-- <v-breadcrumbs :items="items" color="#00000080" class="items-cart__breadcrumbs"></v-breadcrumbs> -->
<!-- const items = [
    {
        title: 'Home',
        disabled: false,
        href: '/'
    },
    {
        title: 'Contact',
        disabled: false,
        href: 'contact',
        active: true
    }
] -->
