<template>
    <div class="product-images" v-if="currentImage">
        <div class="product-images__preview preview">
            <swiper-container
                class="preview__thumbs-swiper"
                slides-per-view="4"
                space-between="26"
                watch-slides-progress
                height="600"
                freeMode="true"
                :direction="changeSwiperDirection()"
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
                    <!-- width="120" height="120"  -->
                    <div class="preview__thumbs-photo">
                        <v-img :src="slide.thumbnailURL" width="120" height="120" />
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>

        <div class="product-images__product-photo product-photo">
            <swiper-container
                style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
                class="product-photo__main-swiper"
                thumbs-swiper=".preview__thumbs-swiper"
                :slides-per-view="1"
                :space-between="16"
                watch-slides-progress
                effect="fade"
            >
                <swiper-slide v-for="(slide, index) in currentImage" :key="index" id="gallery">
                    <div class="product-photo__main-photo">
                        <a :href="slide.largeURL" target="_blank" rel="noreferrer">
                            <v-img :src="slide.thumbnailURL" :width="520" :height="520" class="product-photo__img" />
                        </a>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

import { register } from 'swiper/element/bundle'

register()

//===========================================================
import { onResize } from '@/modulesHelpers/lib/resize.js'
const { currentWindowWidth: windowWidth } = onResize()
function changeSwiperDirection() {
    return windowWidth.value <= 768 ? 'horizontal' : 'vertical'
}

//===========================================================
import { useProductStore } from '@/stores/product.js'
import { storeToRefs } from 'pinia'
const { getCurrentItem } = storeToRefs(useProductStore())

const currentImage = computed(() => {
    return getCurrentItem.value?.images?.map((img) => {
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
        grid-template-columns: toRem(170) toRem(650);
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
        padding: toRem(4);
        img {
            width: 100%;
        }
    }
    // .product-photo__img

    &__img {
        padding: toRem(10);
    }
}
.preview {
    // .preview__thumbs-swiper

    &__thumbs-swiper {
        // max-height: toRem(600);
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
