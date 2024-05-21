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
                :modules="Thumbs"
                :slides-per-view="1"
                :thumbs="{ swiper: thumbsSwiper }"
                class="product-photo__main-swiper"
            >
                <swiper-slide v-for="(slide, index) in imagesValue" :key="index" id="gallery">
                    <div class="product-photo__main-photo">
                        <a
                            :href="slide.largeURL"
                            :data-pswp-width="slide.width"
                            :data-pswp-height="slide.height"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img :src="slide.thumbnailURL" />
                        </a>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'
import phone_1 from '@/assets/productPage/01.png'
import phone_2 from '@/assets/productPage/02.png'
import phone_3 from '@/assets/productPage/03.png'
import phone_4 from '@/assets/productPage/04.png'
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
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const lightbox = ref(null)
onMounted(() => {
    if (!lightbox.value) {
        lightbox.value = new PhotoSwipeLightbox({
            gallery: '#' + 'gallery',
            children: 'a',
            pswpModule: () => import('photoswipe')
        })
        lightbox.value.init()
    }
})
onUnmounted(() => {
    if (lightbox.value) {
        lightbox.value.destroy()
        lightbox.value = null
    }
})

const imagesValue = [
    {
        largeURL: phone_1,
        thumbnailURL: phone_1,
        width: 720,
        height: 720
    },
    {
        largeURL: phone_2,
        thumbnailURL: phone_2,
        width: 600,
        height: 338
    },
    {
        largeURL: phone_3,
        thumbnailURL: phone_3,
        width: 600,
        height: 600
    },
    {
        largeURL: phone_4,
        thumbnailURL: phone_4,
        width: 720,
        height: 720
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
    grid-template-rows: toRem(500);
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
            width: toRem(140);
        }
    }
}
</style>
