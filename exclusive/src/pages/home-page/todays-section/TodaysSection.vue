<template>
    <section class="todays-section">
        <div class="todays-section__container">
            <SectionSliderWithTitles
                :product-data="productArr"
                :title-params="sectionTitle"
                :slider-params="sliderParams"
                :show-action="true"
            >
                <template #timer>
                    <CounterComponent
                        :add-time="{
                            propsYear: 2024,
                            propsMonth: 5,
                            propsDay: 24,
                            propsHour: 10,
                            propsMinutes: 30,
                            propsSeconds: 10,
                            propsMllSecond: 10
                        }"
                    />
                </template>
            </SectionSliderWithTitles>
        </div>
    </section>
</template>
<script setup>
import SectionSliderWithTitles from '@/components/SectionSliderWithTitles.vue'
import CounterComponent from '@/components/CounterComponent.vue'
import img from '@/assets/01.png'
const sectionTitle = {
    cat: "today's",
    title: 'flash sales'
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

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.todays-section {
    @include adaptiveValue('padding-top', 140, 60);
}
</style>
