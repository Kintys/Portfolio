<template>
    <section class="specialist">
        <div class="specialist__container">
            <swiper-container
                class="specialist__box"
                :slides-per-view="3"
                :space-between="60"
                :centered-slides="false"
                :loop="true"
                :pagination="{
                    clickable: true,
                    el: '.specialist__bullet'
                }"
                :autoplay="{
                    delay: 4000,
                    pauseOnMouseEnter: true
                }"
                :breakpoints="{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 40
                    },
                    400: {
                        slidesPerView: 1.5,
                        spaceBetween: 40
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    660: {
                        slidesPerView: 2.3,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2.6,
                        spaceBetween: 40
                    },
                    950: {
                        slidesPerView: 2.6,
                        spaceBetween: 40
                    },
                    1065: {
                        slidesPerView: 3.5,
                        spaceBetween: 50
                    },
                    1140: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    }
                }"
                :params="params"
                :modules="Pagination"
            >
                <swiper-slide v-for="slide in specialistData" :key="slide.id">
                    <SpecialistCard :specialist="slide" />
                </swiper-slide>
            </swiper-container>
            <div class="specialist__bullet-wrapper"><div class="specialist__bullet"></div></div>
        </div>
    </section>
</template>

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
    // .specialist__container

    &__container {
        @include adaptiveValue('padding-top', 140, 80);
    }

    // .specialist__box

    &__box {
        &:not(:last-child) {
            margin-bottom: toRem(40);
        }
    }
    &__bullet-wrapper {
        width: 100%;
        transform: translate(40%, 0);
    }
    // .specialist__bullet

    &__bullet {
        // position: absolute;
        // bottom: 0;
        // left: 0;
        z-index: 2;
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
