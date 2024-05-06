<template>
    <div class="service-block">
        <div class="service-block__container">
            <div class="service-block__block">
                <div v-for="(serviceItem, i) in serviceContent" :key="i" class="service-block__wrapper">
                    <div class="service-block__image">
                        <IconBase width="40" height="40" viewBox="0 0 40 40" iconColor="transparent">
                            <component :is="serviceItem.icon" />
                        </IconBase>
                    </div>
                    <div class="service-block__description">
                        <h8 class="service-block__title">{{ serviceItem.title }}</h8>
                        <p class="service-block__text">{{ serviceItem.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconDelivery from '@/components/icons/iconsSrc/service/IconDelivery.vue'
import IconCustomer from '@/components/icons/iconsSrc/service/IconCustomer.vue'
import IconShield from '@/components/icons/iconsSrc/service/IconShield.vue'

const serviceContent = [
    {
        icon: IconDelivery,
        title: 'FREE AND FAST DELIVERY',
        text: 'Free delivery for all orders over $140'
    },
    {
        icon: IconCustomer,
        title: '24/7 CUSTOMER SERVICE',
        text: 'Friendly 24/7 customer support'
    },
    {
        icon: IconShield,
        title: 'MONEY BACK GUARANTEE',
        text: 'We return money within 30 days'
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.service-block {
    @include adaptiveValue('padding-top', 140, 80);
    @include adaptiveValue('padding-bottom', 140, 80);
    // .service-block__container

    &__container {
        display: grid;
        justify-content: center;
        @media (max-width: toEm(870)) {
            justify-items: center;
        }
        grid-template-columns: minmax(auto, toRem(950));
    }

    &__block {
        display: grid;
        @include gridCards(fit, toRem(200), toRem(260));
        @media (min-width: toEm(870)) {
            justify-content: space-between;
        }
    }

    // .service-block__wrapper

    &__wrapper {
        display: grid;
        justify-items: center;
        @include adaptiveValue('row-gap', 24, 18);
        text-align: center;
        @media (max-width: toEm(870)) {
            &:last-child {
                grid-column: 1/3;
            }
        }
        @media (max-width: toEm(600)) {
            @media (max-width: toEm(870)) {
                &:last-child {
                    grid-column: 1/2;
                }
            }
        }
    }

    &__image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: toRem(80);
        height: toRem(80);
        z-index: 2;
        position: relative;
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
    // .service-block__description

    &__description {
        display: grid;
        row-gap: toRem(8);
    }

    // .service-block__title

    &__title {
        font-size: toRem(20);
        font-weight: 600;
        line-height: 140%; /* 140% */
        text-transform: uppercase;
    }

    // .service-block__text

    &__text {
        font-size: toRem(14);
        line-height: 150%; /* 150% */
    }
}
</style>
