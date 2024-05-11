<template>
    <section class="our-benefits">
        <div class="our-benefits__container">
            <a class="our-benefits__card">
                <div class="our-benefits__icon-wrapper">
                    <IconBase width="35" height="32" viewBox="0 0 35 32">
                        <component :is="IconShop" />
                    </IconBase>
                </div>
                <h4 class="our-benefits__title">10.5k</h4>
                <p class="our-benefits__subtitle">Sallers active our site</p>
            </a>
        </div>
    </section>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconShop from '@/components/icons/iconsSrc/benefits/IconShop.vue'
// const serviceContent = [
//     {
//         icon: IconDelivery,
//         title: 'FREE AND FAST DELIVERY',
//         text: 'Free delivery for all orders over $140'
//     },
//     {
//         icon: IconCustomer,
//         title: '24/7 CUSTOMER SERVICE',
//         text: 'Friendly 24/7 customer support'
//     },
//     {
//         icon: IconShield,
//         title: 'MONEY BACK GUARANTEE',
//         text: 'We return money within 30 days'
//     }
// ]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.our-benefits {
    // .our-benefits__container

    &__container {
    }

    // .our-benefits__card

    &__card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: toRem(4);
        border: toRem(1.5) solid rgba(0, 0, 0, 0.1);
        padding: toRem(30) toRem(25);
        max-width: toRem(270);
        transition: all 0.3s;
        @media (any-hover: hover) {
            &:hover {
                background: $secondColor;
                color: white;
                &__icon-wrapper {
                    color: #000;
                }
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
            z-index: -2;
            position: absolute;
            content: '';
            width: toRem(80);
            height: toRem(80);
            border-radius: 50%;
            background-color: rgba(47, 46, 48, 0.303);
        }
        &::after {
            z-index: -1;
            content: '';
            background-color: #000;
            width: toRem(55);
            height: toRem(55);
            border-radius: 50%;
            position: absolute;
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
