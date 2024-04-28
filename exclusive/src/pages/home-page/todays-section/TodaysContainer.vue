<template>
    <div class="todays-section__container">
        <SectionSliderWithTitles :product-data="productArr" :title-params="sectionTitle">
            <template #timer>
                <CounterComponent />
            </template>
        </SectionSliderWithTitles>
    </div>
</template>

<script setup>
import SectionSliderWithTitles from '../../../components/SectionSliderWithTitles.vue'
import CounterComponent from '../../../components/CounterComponent.vue'
import img from '../../../assets/01.png'
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
</script>

<style lang="scss" scoped>
.arrow {
    display: flex;
    column-gap: toRem(8);
}
.prev-arrow,
.next-arrow {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
        content: '';
        width: toRem(46);
        position: absolute;
        z-index: -1;
        height: toRem(46);
        border-radius: 50%;
        background-color: #f5f5f5;
    }
}
.next-arrow {
    transform: rotate(180deg);
}
</style>
