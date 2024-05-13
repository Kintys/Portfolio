<template>
    <section class="specialist">
        <div class="specialist__container">
            <swiper-container
                class="slider__box"
                :slides-per-view="3"
                :space-between="60"
                :centered-slides="false"
                :loop="true"
                :pagination="{
                    clickable: true,
                    el: '.slider__bullet'
                }"
                :autoplay="{
                    delay: 4000,
                    pauseOnMouseEnter: true
                }"
                :breakpoints="{
                    // 768: {
                    //     slidesPerView: 3
                    // }
                }"
                :params="params"
                :modules="Pagination"
            >
                <swiper-slide v-for="slide in specialistData" :key="slide.id">
                    <SpecialistCard :specialist="slide" />
                </swiper-slide>
            </swiper-container>
            <div class="slider__bullet"></div>
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

<style lang="scss" scoped></style>
