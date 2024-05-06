<template>
    <section class="category-section">
        <div class="category-section__container">
            <SectionSliderWithTitles :title-params="sectionTitle" :slider-params="sliderParams" :is-loop="true">
                <template #main>
                    <swiper-slide v-for="(itemCard, i) in categoryData" :key="i" ref="focusesList">
                        <CategoryCard :cat-card-item-data="itemCard" @click="onSelectedCategory(i)" />
                    </swiper-slide>
                </template>
            </SectionSliderWithTitles>
        </div>
    </section>
</template>

<script setup>
import CategoryCard from '@/pages/home-page/categories-section/CategoryCard.vue'

//====================================================
import { useFocus } from '@/modulesHelpers/lib/focusFunc.js'
const { focusesList, onFocus } = useFocus()

function onSelectedCategory(catIndex) {
    onFocus(catIndex, 'category-card--focus')
}
//===================================================
const sectionTitle = {
    cat: 'Categories',
    title: 'Browse By Category '
}

//===================================================
import SectionSliderWithTitles from '@/components/SectionSliderWithTitles.vue'
import IconCatCamera from '@/components/icons/iconsSrc/category/IconCatCamera.vue'
import IconCatPhone from '@/components/icons/iconsSrc/category/IconCatPhone.vue'
import IconCatComputer from '@/components/icons/iconsSrc/category/IconCatComputer.vue'
import IconCatGaming from '@/components/icons/iconsSrc/category/IconCatGaming.vue'
import IconCatSmartWatch from '@/components/icons/iconsSrc/category/IconCatSmartWatch.vue'
import IconCatHeadPhones from '@/components/icons/iconsSrc/category/IconCatHeadPhones.vue'
const categoryData = [
    {
        icon: IconCatPhone,
        title: 'Phones'
    },
    {
        icon: IconCatComputer,
        title: 'Computers'
    },
    {
        icon: IconCatSmartWatch,
        title: 'SmartWatch'
    },
    {
        icon: IconCatCamera,
        title: 'Camera'
    },
    {
        icon: IconCatHeadPhones,
        title: 'HeadPhones'
    },
    {
        icon: IconCatGaming,
        title: 'Gaming'
    },
    {
        icon: IconCatCamera,
        title: 'Camera'
    }
]
//===========================================================

const sliderParams = {
    sliderPerView: 6,
    sliderBetween: 30,
    breakpoints: {
        319: {
            slidesPerView: 1.8,
            spaceBetween: 10
        },
        400: {
            slidesPerView: 2.5,
            spaceBetween: 10
        },
        500: {
            slidesPerView: 2.8
        },
        580: {
            slidesPerView: 3.2
        },
        620: {
            slidesPerView: 3.4
        },
        767: {
            slidesPerView: 4.2
        },
        880: {
            slidesPerView: 5.2
        },
        998: {
            slidesPerView: 5.5
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.category-section {
    @include adaptiveValue('padding-top', 140, 80);
}
</style>
