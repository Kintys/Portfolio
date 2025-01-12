<template>
    <section class="specialist">
        <div class="specialist__container">
            <div class="specialist__wrapper">
                <swiper-container
                    class="specialist__swiper-slider"
                    :slides-per-view="3"
                    :space-between="60"
                    :centered-slides="false"
                    :loop="true"
                    :pagination="{
                        clickable: true,
                        el: '.specialist__bullet'
                    }"
                    aspect-ratio="1/1"
                    cover
                    :breakpoints="{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 30
                        },
                        540: {
                            slidesPerView: 1.5
                        },
                        700: {
                            slidesPerView: 1.8
                        },
                        768: {
                            slidesPerView: 2.2
                        },
                        950: {
                            slidesPerView: 2.6
                        },
                        1065: {
                            slidesPerView: 2.8
                        },
                        1140: {
                            slidesPerView: 3,
                            spaceBetween: 60
                        }
                    }"
                    :modules="Pagination"
                >
                    <swiper-slide v-for="slide in specialistData" :key="slide.id">
                        <SpecialistCard :specialist="slide" />
                    </swiper-slide>
                </swiper-container>
                <div class="specialist__bullet-wrapper"><div class="specialist__bullet"></div></div>
            </div>
        </div>
    </section>
</template>
<!--    :autoplay="{
                    delay: 4000,
                    pauseOnMouseEnter: true
                }" -->
<script setup>
import { register } from 'swiper/element/bundle'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

import SpecialistCard from '@/pages/about-page/component/SpecialistCard.vue'
import manager from '@/assets/aboutPage/specialist/01.png'
import boss from '@/assets/aboutPage/specialist/02.png'
import managerWoman from '@/assets/aboutPage/specialist/03.png'

register()

const specialistData = [
    {
        id: 1,
        name: 'Tom Cruise',
        position: 'Founder & Chairman',
        photo: manager,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    },
    {
        id: 2,
        name: 'Emma Watson',
        position: 'Managing Director',
        photo: managerWoman,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    },
    {
        id: 3,
        name: 'Will Smith',
        position: 'Product Designer',
        photo: boss,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    },
    {
        id: 4,
        name: 'Tom Cruise',
        position: 'Founder & Chairman',
        photo: manager,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    },
    {
        id: 5,
        name: 'Emma Watson',
        position: 'Managing Director',
        photo: managerWoman,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    },
    {
        id: 6,
        name: 'Will Smith',
        position: 'Product Designer',
        photo: boss,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    },
    {
        id: 7,
        name: 'Tom Cruise',
        position: 'Founder & Chairman',
        photo: manager,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    },
    {
        id: 8,
        name: 'Emma Watson',
        position: 'Managing Director',
        photo: managerWoman,
        links: {
            twitter: 'https://twitter.com/?lang=pl',
            inst: 'https://www.instagram.com/',
            in: 'https://pl.linkedin.com/'
        }
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.specialist {
    @include adaptiveValue('padding-bottom', 140, 80);
    // .specialist__container

    &__container {
        @include adaptiveValue('padding-top', 80, 40);
    }

    // .specialist__wrapper

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    // .specialist__swiper-slider

    &__swiper-slider {
        &:not(:last-child) {
            margin-bottom: toRem(40);
        }
    }

    // .specialist__bullet-wrapper

    &__bullet-wrapper {
        align-self: center;
    }
    // .specialist__bullet
    &__bullet {
        :deep() {
            .swiper-pagination-bullet {
                background-color: gray;
                width: toRem(16);
                height: toRem(16);
            }
            .swiper-pagination-bullet-active {
                background-color: $secondColor;
            }
        }
    }
}
</style>
