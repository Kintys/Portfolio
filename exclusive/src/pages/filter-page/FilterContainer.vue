<template>
    <div class="filter">
        <div class="filter__container">
            <v-breadcrumbs :items="links" color="#00000080"></v-breadcrumbs>
            <div class="filter__content">
                <FilterPanel></FilterPanel>
                <FilterProductBox></FilterProductBox>
            </div>
            <v-pagination :length="4" active-color="#db4444" class="filter__pagination"></v-pagination>
        </div>
    </div>
</template>

<script setup>
import FilterPanel from './component/FilterPanel.vue'
import FilterProductBox from './component/FilterProductBox.vue'

const links = [
    {
        title: 'Home',
        disabled: false,
        href: '/'
    },
    {
        title: 'Catalog',
        disabled: false,
        href: '/catalog',
        active: true
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';

.filter {
    // .filter__container

    &__container {
        @include adaptiveValue('padding-top', 170, 60);
        @include adaptiveValue('padding-bottom', 140, 40);
    }

    // .filter__content

    &__content {
        display: grid;
        grid-template-columns: toRem(300) 1fr;
        column-gap: toRem(30);
    }

    // .filter__pagination

    &__pagination {
    }
}

.filter {
    // .filter__container

    &__container {
    }

    // .filter__pagination

    &__pagination {
    }
}
</style>
