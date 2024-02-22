<template>
    <div class="swiper-box">
        <swiper
            :slides-per-view="4"
            :loop="true"
            :navigation="{
                nextEl: '.next-arrow',
                prevEl: '.prev-arrow'
            }"
            :modules="modules"
            :breakpoints="{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },

                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                920: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }"
        >
            <swiper-slide v-for="slide in testimonialsData" :key="slide.name">
                <article class="person-card">
                    <v-img :src="getImageUrl(slide.image)" class="img" />
                    <h5 class="name">{{ slide.name }}</h5>
                    <p class="description">
                        Describe the feedback or end result the person received after interacting with you. What exactly
                        did it give him. You can describe the result in numbers to be specific.
                    </p>
                    <a class="link" href="#">Read full testimonial</a>
                </article>
            </swiper-slide>
        </swiper>
        <div class="arrows">
            <IconBase class="icon next-arrow" icon-name="arrow" viewBox="0 0 34 34" width="44" height="44">
                <rect width="34" height="34" rx="17" /><IconArrow
            /></IconBase>
            <IconBase class="icon prev-arrow" icon-name="arrow" viewBox="0 0 34 34" width="44" height="44"
                ><rect width="34" height="34" rx="17" /><IconArrow
            /></IconBase>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
const modules = ref([Navigation])

import IconBase from '@/components/icons/IconBase.vue'
import IconArrow from '@/components/icons/iconsSrc/IconArrow.vue'
const testimonialsData = ref([
    {
        name: 'Darrell Steward',
        image: 'img/main/testimonials/01.webp'
    },
    {
        name: 'Marvin McKinney',
        image: 'img/main/testimonials/02.webp'
    },
    {
        name: 'Ronald Richards',
        image: 'img/main/testimonials/03.webp'
    },
    {
        name: 'Cody Fisher',
        image: 'img/main/testimonials/04.webp'
    },
    {
        name: 'Ronald Richards',
        image: 'img/main/testimonials/03.webp'
    },
    {
        name: 'Marvin McKinney',
        image: 'img/main/testimonials/02.webp'
    }
])

const getImageUrl = (name) => {
    return new URL(`../../../assets/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.swiper-box {
    position: relative;
}
.person-card {
    font-family: Fira Sans;
    color: rgb(255, 255, 255);
    display: grid;
    grid-template-rows: auto, auto, 1fr, auto;
    grid-template-columns: minmax(200, 280);
    row-gap: toRem(24);
    @media (max-width: em(920)) {
        text-align: center;
        justify-items: center;
    }
}
.img {
    width: toRem(280);
    height: toRem(280);
}
.name {
    font-size: toRem(14);
    font-weight: 700;
    line-height: 150%;
}
.description {
    font-size: toRem(16);
    line-height: 150%;
}
.link {
    color: rgb(255, 110, 64);
    font-size: toRem(14);
    line-height: 135%;
}

.icon {
    position: absolute;
    top: 50%;
    @media (max-width: em(500)) {
        top: -10%;
    }
    @media (any-hover: hover) {
        &:hover {
            rect {
                transition: all 0.4s;
                fill: #b7aaa2;
            }
        }
    }
}

.next-arrow {
    transform: rotate(180deg);
    right: -4%;
    margin-left: toRem(10);
    @media (max-width: em(500)) {
        right: 30%;
        margin-left: toRem(10);
    }
}
.prev-arrow {
    left: -4%;
    @media (max-width: em(500)) {
        left: 30%;
        margin-right: toRem(10);
    }
}
</style>
