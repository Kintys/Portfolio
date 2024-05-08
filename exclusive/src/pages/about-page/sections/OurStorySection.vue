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
                <v-img :src="sectionPhoto" :max-width="650" aspect-ratio="1/1" />
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
    &__container {
        position: relative;
    }

    // .our-story__breadcrumb

    &__breadcrumb {
        &:not(:last-child) {
            margin-bottom: toRem(42);
        }
    }

    // .our-story__content

    &__content {
        display: flex;
        column-gap: toRem(25);
        justify-content: space-between;
    }

    // .our-story__description

    &__description {
        flex: 0 1 toRem(525);
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
    }
}
</style>
