<template>
    <div class="menu-welcome">
        <font-awesome-icon class="menu-welcome__icon" :icon="['fas', 'list']" />
        <div class="menu-welcome__body">
            <ul class="menu-welcome__list">
                <li v-for="item in itemParams" :key="item.titleLink" class="menu-welcome__item">
                    <WelcomeMenuItem :item-data="item" />
                </li>
            </ul>
        </div>
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
    @media (max-width: toEm($mobile)) {
        transition: all 0.3s;
        width: toRem(30);
        height: toRem(30);
    }
    &__body {
        padding-top: toRem(10);
        padding-bottom: toRem(10);
        padding-left: toRem(35);
        padding-right: toRem(10);
        position: relative;
        @media (min-width: toEm($mobile)) {
            width: toRem(250);
            height: 100%;
            &::after {
                content: '';
                width: toRem(0.3);
                height: 150%;
                background: rgba(0, 0, 0, 0.3);
                position: absolute;
                top: -50%;
                right: 0.2px;
                z-index: 10;
            }
        }
    }

    &__show {
        width: toRem(250);
    }

    // .menu-welcome__icon

    &__icon {
        font-size: toRem(30);
        display: none;
        @media (max-width: toEm($mobile)) {
            display: block;
        }
    }
    &__list {
        display: grid;
        row-gap: toRem(20);
    }

    // .menu-welcome__item
    &__item {
    }
}
</style>
