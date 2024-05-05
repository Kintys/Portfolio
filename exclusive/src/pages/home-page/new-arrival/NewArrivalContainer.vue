<template>
    <div class="new-arrival__container">
        <div class="new-arrival__block">
            <ArrivalBanner
                :banner-data="psData"
                :title-position="{
                    bottom: '2rem',
                    left: '2rem'
                }"
            />
        </div>
        <div class="new-arrival__block block-arrival">
            <ArrivalBanner :banner-data="womanData" class="block-arrival__item block-arrival__item--span" />
            <ArrivalBanner :banner-data="speakersData" class="block-arrival__item" />
            <ArrivalBanner :banner-data="gucciData" class="block-arrival__item" />
        </div>
    </div>
</template>

<script setup>
import ArrivalBanner from '../../../components/banners/ArrivalBanner.vue'
import ps_5 from '../../../assets/homePage/new-arrival/ps5.png'
import womanWithHat from '../../../assets/homePage/new-arrival/attractive-woman-wearing-hat-posing-black-background.png'
import speakers from '../../../assets/homePage/new-arrival/speakers.png'
import gucci from '../../../assets/homePage/new-arrival/gucci.png'
const psData = {
    src: ps_5,
    width: 511,
    height: 511,
    position: {
        bottom: true
    },
    title: 'PlayStation 5',
    description: 'Black and White version of the PS5 coming out on sale.'
}
const womanData = {
    src: womanWithHat,
    width: 432,
    height: 286,
    position: {
        right: true
    },
    title: 'Women’s Collections',
    description: 'Featured woman collections that give you another vibe.'
}
const speakersData = {
    src: speakers,
    width: 190,
    height: 221,
    position: {
        bottom: true
    },
    title: 'Speakers',
    description: 'Amazon wireless speakers.'
}
const gucciData = {
    src: gucci,
    width: 201,
    height: 203,
    position: {
        bottom: true
    },
    title: 'Perfume',
    description: 'GUCCI INTENSE OUD EDP.'
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.new-arrival {
    // .new-arrival__container

    &__container {
        display: grid;
        @media (min-width: toEm(540)) {
            @include gridCards(fill, toRem(520), 1fr);
        }
        // grid-template-columns: repeat(2, 1fr);
        @include adaptiveValue('gap', 30, 15);
    }

    // .new-arrival__block

    &__block {
    }
}
.block-arrival {
    display: grid;
    @include adaptiveValue('gap', 30, 15);
    @media (min-width: toEm(530)) {
        grid-template-columns: repeat(2, 1fr);
        &__item {
            &--span {
                grid-column: 1 / 3;
            }
        }
    }
}
</style>
