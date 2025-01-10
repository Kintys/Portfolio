<template>
    <div class="menu-welcome">
        <ul class="menu-welcome__list">
            <li v-for="item in itemParams" :key="item.titleLink" class="menu-welcome__item">
                <WelcomeMenuItem :item-data="item" />
            </li>
        </ul>
    </div>
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
    // max-width: toRem(217);
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    text-wrap: nowrap;
    width: 14px;
    // &::before {
    //     position: absolute;
    //     content: '';
    //     left: 0;
    //     top: 0;
    //     height: 100%;
    //     background: #fff;
    // }
    transition: width 0.3s;
    &::after {
        content: '';
        width: toRem(0.3);
        height: 150%;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: -50%;
        right: 0;
        z-index: 10;
    }
    &:hover {
        width: 217px;
    }
    // @media (any-hover: hover) {
    //     &:hover {
    //         width: 217px;
    //     }
    // }
    &__list {
        display: grid;
        row-gap: toRem(20);
    }

    // .menu-welcome__item
    &__item {
    }
}
</style>
