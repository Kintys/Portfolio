<template>
    <div class="product-images">
        <div class="product-images__preview preview">
            <swiper
                :modules="[Thumbs, Navigation]"
                :slides-per-view="4"
                :space-between="16"
                class="preview__thumbs-swiper"
                @swiper="setThumbsSwiper"
                ref="swiperRef"
                :direction="changeSwiperDirection()"
                :freeMode="true"
                :breakpoints="{
                    320: {
                        slidesPerView: 1.5
                    },
                    450: {
                        slidesPerView: 2.5
                    },
                    600: {
                        slidesPerView: 3.5
                    },
                    768: {
                        slidesPerView: 4
                    }
                }"
            >
                <swiper-slide v-for="(slide, index) in currentImage" :key="index">
                    <div class="preview__thumbs-photo"><img :src="slide.thumbnailURL" /></div>
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
                <swiper-slide v-for="(slide, index) in currentImage" :key="index" id="gallery">
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'

import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

//===========================================================
const swiperRef = ref(null)
const lightbox = ref(null)
//===========================================================
import { onResize } from '@/modulesHelpers/lib/resize.js'
const { currentWindowWidth: windowWidth } = onResize()
function changeSwiperDirection() {
    return windowWidth.value <= 768 ? 'horizontal' : 'vertical'
}
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

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}
//===========================================================
import { storeToRefs } from 'pinia'
import { useGamepadsStore } from '@/stores/gamepad.js'
const { getItemsList } = storeToRefs(useGamepadsStore())
const currentImage = computed(() => {
    return getItemsList.value[0].images.map((img) => {
        return {
            largeURL: img,
            thumbnailURL: img,
            width: 720,
            height: 720
        }
    })
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.product-images {
    gap: toRem(30);
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: toEm($mobile)) {
        display: grid;
        grid-template-columns: toRem(170) toRem(500);
        grid-template-rows: toRem(600);
    }

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
        @include adaptiveValue('max-height', 600, 400, 0, 480, 320);
    }

    // .product-photo__main-photo

    &__main-photo {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: toRem(4);
        background-color: #f5f5f5;
        @include adaptiveValue('height', 600, 400, 0, 480, 320);
        // height: toRem(600);
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
        display: grid;
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
@/stores/product.js
