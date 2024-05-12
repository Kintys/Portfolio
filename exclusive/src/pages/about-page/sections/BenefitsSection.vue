<template>
    <section class="our-benefits">
        <div class="our-benefits__container">
            <article v-for="(cardItem, i) in benefitsArr" :key="i" class="our-benefits__card">
                <div class="our-benefits__icon-wrapper">
                    <IconBase
                        :width="cardItem.iconParams.width"
                        :height="cardItem.iconParams.width"
                        :viewBox="cardItem.iconParams.viewBox"
                    >
                        <component
                            :is="cardItem.iconParams.iconSrc"
                            :class="{
                                'bg-fill': cardItem.iconParams.fill
                            }"
                        />
                    </IconBase>
                </div>
                <h4 class="our-benefits__title">{{ cardItem.title }}</h4>
                <p class="our-benefits__subtitle">{{ cardItem.text }}</p>
            </article>
        </div>
    </section>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconShop from '@/components/icons/iconsSrc/benefits/IconShop.vue'
import IconSsymbol from '@/components/icons/iconsSrc/benefits/IconSsymbol.vue'
import IconPaket from '@/components/icons/iconsSrc/benefits/IconPaket.vue'
import IconBag from '@/components/icons/iconsSrc/benefits/IconBag.vue'
const benefitsArr = [
    {
        iconParams: {
            iconSrc: IconShop,
            width: '35',
            height: '32',
            viewBox: '0 0 35 32'
        },
        title: '10.5k',
        text: 'Sallers active our site'
    },
    {
        iconParams: {
            iconSrc: IconSsymbol,
            width: '40',
            height: '40',
            viewBox: '0 0 40 40'
        },
        title: '33k',
        text: 'Mopnthly Produduct Sale'
    },
    {
        iconParams: {
            iconSrc: IconPaket,
            width: '40',
            height: '40',
            viewBox: '0 0 40 40',
            fill: true
        },
        title: '45.5k',
        text: 'Customer active in our site'
    },
    {
        iconParams: {
            iconSrc: IconBag,
            width: '34',
            height: '38',
            viewBox: '0 0 34 38',
            fill: true
        },
        title: '25k',
        text: 'Anual gross sale in our site'
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.our-benefits {
    // .our-benefits__container

    &__container {
        display: flex;
        gap: toRem(30);
        flex-wrap: wrap;
        justify-content: center;
    }

    // .our-benefits__card

    &__card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 1 toRem(270);
        flex-direction: column;
        border-radius: toRem(4);
        border: toRem(1.5) solid rgba(0, 0, 0, 0.1);
        padding: toRem(30) toRem(25);
        transition: all 0.5s;
        @media (any-hover: hover) {
            &:hover {
                background: $secondColor;
                color: #fff;
            }
        }
    }

    // .our-benefits__icon-wrapper

    &__icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: toRem(80);
        height: toRem(80);

        z-index: 2;
        position: relative;
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
        &::before {
            transition: all 0.5s;
            z-index: -2;
            position: absolute;
            content: '';
            width: toRem(80);
            height: toRem(80);
            border-radius: 50%;
            background-color: rgba(47, 46, 48, 0.303);
        }
        &::after {
            transition: all 0.5s;
            z-index: -1;
            content: '';
            background-color: #000;
            width: toRem(55);
            height: toRem(55);
            border-radius: 50%;
            position: absolute;
        }
        @media (any-hover: hover) {
            .our-benefits__card:hover & {
                :deep() {
                    transition: stroke 0.3s;
                    g,
                    path {
                        stroke: #000000;
                        .bg-fill {
                            fill: #000;
                            fill-rule: #000;
                            clip-rule: #000;
                        }
                    }
                }
                &::after {
                    background: #fff;
                }
                &::before {
                    background: rgba(255, 255, 255, 0.3);
                }
            }
        }
    }

    // .our-benefits__title

    &__title {
        font-family: $interFont;
        @include adaptiveValue('font-size', 32, 24);
        font-weight: 700;
        line-height: 93.75%; /* 93.75% */
        letter-spacing: 1.28px;
        &:not(:last-child) {
            margin-bottom: toRem(12);
        }
    }

    // .our-benefits__subtitle

    &__subtitle {
        line-height: 150%; /* 150% */
    }
}
</style>
