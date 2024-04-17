<template>
    <ul>
        <li class="menu-welcome__item"><WelcomeMenuItem :item-data="itemParams" /></li>
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
        titleLink: 'Woman’s Fashion',
        link: 'home'
    }
]
</script>

<style lang="scss" scoped></style>
