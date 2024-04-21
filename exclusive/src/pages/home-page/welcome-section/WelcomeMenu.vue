<template>
    <ul class="menu-welcome">
        <li v-for="item in itemParams" :key="item.titleLink" class="menu-welcome__item">
            <WelcomeMenuItem :item-data="item" />
        </li>
    </ul>
</template>

<script setup>
import WelcomeMenuItem from '../../home-page/welcome-section/WelcomeMenuItem.vue'

const itemParams = [
    {
        titleLink: 'Woman’s Fashion',
        dropDown: true,
        subList: [
            {
                titleLink: '123213',
                link: 'home'
            }
        ]
    },
    {
        titleLink: 'Men’s Fashion',
        dropDown: true,
        subList: [
            {
                titleLink: '123213',
                link: 'home'
            },
            {
                titleLink: '123213',
                link: 'home'
            },
            {
                titleLink: '123213',
                link: 'home'
            }
        ]
    },
    {
        titleLink: 'Home & Lifestyle',
        link: 'home'
    },
    {
        titleLink: 'Medicine',
        link: 'home'
    },
    {
        titleLink: 'Baby’s & Toys',
        link: 'home'
    },
    {
        titleLink: 'Groceries & Pets',
        link: 'home'
    },
    {
        titleLink: 'Health & Beauty',
        link: 'home'
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.menu-welcome {
    // .menu-welcome__item
    max-width: toRem(217);
    display: grid;
    row-gap: toRem(16);

    &__item {
    }
}
</style>
