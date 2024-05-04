<template>
    <div class="our-product__container">
        <SectionSliderWithTitles
            :product-data="productArr"
            :title-params="sectionTitle"
            :slider-params="sliderParams"
            :show-action="true"
            :is-border="false"
        />
    </div>
</template>

<script setup>
import SectionSliderWithTitles from '@/components/SectionSliderWithTitles.vue'
import img from '@/assets/01.png'
const sectionTitle = {
    cat: 'Our Products',
    title: 'Explore Our Products '
}
const productArr = [
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: '5',
            evaluation: '88'
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: '88'
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: '88'
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: '4',
            evaluation: '88'
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: '88'
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: '88'
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: '88'
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: 88
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: 88
        }
    },
    {
        img: img,
        discount: '-40%',
        title: 'HAVIT HV-G92 Gamepa',
        prices: {
            newPrice: '120',
            oldPrice: '160'
        },
        review: {
            rating: 4,
            evaluation: 88
        }
    }
]
const sliderParams = {
    sliderPerView: 4,
    sliderBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 10
        },
        350: {
            slidesPerView: 1.5
        },
        480: {
            slidesPerView: 1.7
        },
        630: {
            slidesPerView: 2.5
        },
        768: {
            slidesPerView: 3.2
        },
        830: {
            slidesPerView: 3.5,
            spaceBetween: 15
        },
        1070: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1200: {
            spaceBetween: 30
        }
    }
}
</script>

<style lang="scss" scoped></style>
