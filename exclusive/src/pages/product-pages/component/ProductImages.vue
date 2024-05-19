<template>
    <div class="product-images">
        <div class="product-images__product-photo">
            <swiper-container
                class="product-images__main-img"
                :slides-per-view="1"
                :space-between="10"
                :centered-slides="false"
                :thumbs="{ swiper: thumbsSwiper }"
                :breakpoints="{
                    // 768: {
                    //     slidesPerView: 3
                    // }
                }"
                :modules="Thumbs"
            >
                <swiper-slide
                    ><div v-for="(photo, i) in images" :key="i">
                        <img :src="photo.img" alt="Image" />
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
        <div class="product-images__preview">
            <swiper-container
                class="product-images__prev"
                :slides-per-view="4"
                :space-between="10"
                :centered-slides="false"
                watch-slides-progress
                @swiper="setThumbsSwiper"
                :breakpoints="{
                    // 768: {
                    //     slidesPerView: 3
                    // }
                }"
                :modules="Thumbs"
            >
                <swiper-slide
                    ><div v-for="(photo, i) in images" :key="i">
                        <img :src="photo.img" alt="Image" />
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { register } from 'swiper/element/bundle'
import { Thumbs } from 'swiper/modules'
import phone_1 from '@/assets/productPage/01.png'
import phone_2 from '@/assets/productPage/02.png'
import phone_3 from '@/assets/productPage/03.png'
import phone_4 from '@/assets/productPage/04.png'
import phone_5 from '@/assets/productPage/05.png'

const images = [
    {
        img: phone_1
    },
    {
        img: phone_2
    },
    {
        img: phone_3
    },
    {
        img: phone_4
    },
    {
        img: phone_5
    }
]

register()

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}
</script>

<style lang="scss" scoped></style>
