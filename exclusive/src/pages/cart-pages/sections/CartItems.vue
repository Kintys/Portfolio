<template>
    <section class="items-cart">
        <div class="items-cart__container">
            <v-breadcrumbs :items="items" color="#00000080" class="items-cart__breadcrumbs"></v-breadcrumbs>
            <header class="items-cart__titles item-wrapper item-wrapper--small-box">
                <span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span>
            </header>
            <ul class="items-cart__list">
                <li class="items-cart__item item-wrapper">
                    <span class="item-wrapper__img"><v-img :width="54" :height="54" :src="photo" />LCD Monitor</span
                    ><span>$650</span
                    ><span
                        ><v-number-input
                            :reverse="false"
                            controlVariant="stacked"
                            label=""
                            :hideInput="false"
                            inset
                            variant="outlined"
                        ></v-number-input></span
                    ><span>${{ 650 }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import photo from '@/assets/productPage/01.png'
const items = [
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
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.items-cart {
    // .items-cart__container

    &__container {
        @include adaptiveValue('padding-top', 140, 80);
        line-height: 150%; /* 150% */
    }

    // .items-cart__breadcrumbs

    &__breadcrumbs {
        &:not(:last-child) {
            margin-bottom: toRem(80);
        }
    }

    // .items-cart__titles

    &__titles {
    }

    // .items-cart__list

    &__list {
    }
    &__item {
    }
}
.item-wrapper {
    padding: toRem(0) toRem(37);
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    align-items: center;
    border-radius: toRem(4);
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: toRem(102);
    &--small-box {
        height: toRem(72);
    }
    span {
        padding: toRem(3);
    }
    &__img {
        display: flex;
        align-items: center;
        gap: toRem(8);
    }
}
</style>
