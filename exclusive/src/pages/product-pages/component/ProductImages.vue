<template>
    <div class="product-images">
        <div class="product-images__preview preview">
            <swiper
                :modules="Thumbs"
                :slides-per-view="4"
                :space-between="16"
                class="preview__thumbs-swiper"
                @swiper="setThumbsSwiper"
                :direction="'vertical'"
            >
                <swiper-slide v-for="(slide, index) in images" :key="index">
                    <div class="preview__thumbs-photo"><img :src="slide.img" /></div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="product-images__product-photo product-photo">
            <swiper
                :slides-per-view="1"
                effect="fade"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="[Thumbs, EffectFade]"
                class="product-photo__main-swiper"
            >
                <swiper-slide v-for="(slide, index) in images" :key="index">
                    <div class="product-photo__main-photo"><img :src="slide.img" /></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/effect-fade'
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
    }
]

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.product-images {
    @include adaptiveValue('padding-top', 100, 50);
    padding-bottom: toRem(200);
    // .product-images__product-photo
    display: grid;
    grid-template-columns: toRem(170) toRem(500);
    gap: toRem(30);
    &__product-photo {
    }

    // .product-images__preview

    &__preview {
    }
}
.product-photo {
    // .product-photo__main-swiper

    &__main-swiper {
        max-height: toRem(600);
    }

    // .product-photo__main-photo

    &__main-photo {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: toRem(4);
        background-color: #f5f5f5;
        height: toRem(600);
        padding: toRem(20);
        img {
            width: 100%;
        }
    }
}
.preview {
    // .preview__thumbs-swiper

    &__thumbs-swiper {
        max-height: toRem(600);
    }

    // .preview__thumbs-photo

    &__thumbs-photo {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        display: grid;
        grid-template-columns: toRem(170);
        grid-template-rows: toRem(138);
        justify-items: center;
        align-items: center;
        border-radius: toRem(4);
        background-color: #f5f5f5;
        img {
            width: toRem(130);
        }
    }
}
</style>
