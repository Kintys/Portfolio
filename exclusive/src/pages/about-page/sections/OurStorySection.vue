<template>
    <section class="our-story">
        <div class="our-story__container">
            <v-breadcrumbs class="our-story__breadcrumb" :items="breadcrumbsLinks" color="#00000080"></v-breadcrumbs>
            <div class="our-story__content">
                <article class="our-story__description">
                    <h3 class="our-story__title">Our Story</h3>
                    <p class="our-story__text">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                        presense in Bangladesh. Supported by wide range of tailored marketing, data and service
                        solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across
                        the region.
                    </p>
                    <p class="our-story__text">
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                        diverse assotment in categories ranging from consumer.
                    </p>
                </article>
                <div class="our-story__picture"><img :src="sectionPhoto" class="ibg ibg–contain" /></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import sectionPhoto from '@/assets/aboutPage/story/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone.png'
const breadcrumbsLinks = [
    {
        title: 'Home',
        disabled: false,
        href: '/'
    },
    {
        title: 'About',
        disabled: false,
        href: 'About',
        active: true
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.our-story {
    // .our-story__container
    @include adaptiveValue('padding-top', 140, 80);
    &__container {
        position: relative;
        min-height: toRem(609+42);
    }

    // .our-story__breadcrumb

    &__breadcrumb {
        &:not(:last-child) {
            margin-bottom: toRem(42);
        }
    }

    // .our-story__content

    &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: toRem(25);
    }

    // .our-story__description

    &__description {
        padding-right: toRem(40);
    }
    // .our-story__title

    &__title {
        font-family: $interFont;
        @include adaptiveValue('font-size', 54, 24);
        font-weight: 600;
        line-height: 118.519%; /* 118.519% */
        letter-spacing: toRem(3.24);
        &:not(:last-child) {
            margin-bottom: toRem(42);
        }
    }

    // .our-story__text

    &__text {
        line-height: 162.5%; /* 162.5% */
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .our-story__picture

    &__picture {
        position: absolute;
        z-index: -1;
        padding-right: toRem(15);
        @media (min-width: toEm(900)) {
            top: toRem(42);
            right: -12.3%;
        }
        img {
            aspect-ratio: 837 / 609;
        }
        // @media (max-width: toEm(1045)) {
        //     max-width: toRem(600);
        // }
    }
}
</style>
