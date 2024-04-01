<template>
    <TopHeaderSide />
    <header class="header">
        <div class="header__container">
            <router-link :to="{ name: 'home' }" class="header__logo">Exclusive</router-link>
            <HeaderNavBar />
            <div class="header__search search-comp">
                <label class="search-comp__label">
                    <input type="text" class="search-comp__input" />
                    <IconBase
                        class="search-comp__icon"
                        width="32"
                        height="32"
                        icon-name="search"
                        view-box="0 0 32 32"
                        icon-color="transparent"
                        ><IconMagnifyingGlass
                    /></IconBase>
                </label>
            </div>
            <HeaderSearchPanel />
        </div>
    </header>
</template>

<script setup>
import TopHeaderSide from '@/master-page/header/TopHeaderSide.vue'
import HeaderNavBar from '@/master-page/header/HeaderNavBar.vue'
import HeaderSearchPanel from '@/master-page/header/HeaderSearchPanel.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconMagnifyingGlass from '@/components/icons/iconsSrc/IconMagnifyingGlass.vue'
</script>

<style lang="scss" scoped>
@import '../../style/lib/adaptive';
.header {
    // .header__container

    &__container {
        display: grid;
        grid-template-columns: repeat(4, auto);
        @include adaptiveValue('margin', 30, 50);
    }

    // .header__logo

    &__logo {
    }

    // .header__search

    &__search {
    }
}
.search-comp {
    // .search-comp__label

    &__label {
    }

    // .search-comp__input

    &__input {
    }

    // .search-comp__icon

    &__icon {
    }
}
</style>
