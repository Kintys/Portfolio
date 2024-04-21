<template>
    <div class="banner">
        <div class="banner__info">
            <div class="banner__headline hat-banner">
                <a class="hat-banner__icon"><v-img :src="appleLogo" width="40" height="49" /></a>
                <h3 class="hat-banner__title">iPhone 14 Series</h3>
            </div>
            <p class="banner__text">Up to 10% off Voucher</p>
            <div class="banner__link link-banner">
                <a class="link-banner__text-link hover-link">Shop Now</a>
                <IconBase class="link-banner__arrow" width="19" height="16" viewBox="0 0 19 16">
                    <IconArrowRight />
                </IconBase>
            </div>
        </div>
        <div class="banner__image">
            <v-img :src="phone" max-width="446" max-height="276" class="banner__photo" />
        </div>
    </div>
</template>

<script setup>
import IconBase from '../components/icons/IconBase.vue'
import IconArrowRight from '../components/icons/iconsSrc/IconArrowRight.vue'
import phone from '@/assets/homePage/welcomeSection/01.png'
import appleLogo from '../assets/homePage/welcomeSection/icon/Apple_gray_logo.png'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';
@import '@/style/lib/hover-link';
.banner {
    max-width: toRem(892);
    max-height: toRem(344);
    background: $mainColor;
    color: #fafafa;
    display: flex;
    display: grid;
    grid-template-columns: toRem(294) toRem(446);
    padding-top: toRem(38);
    padding-bottom: toRem(31);
    justify-content: end;
    column-gap: toRem(93);
    // .banner__info

    &__info {
        cursor: default;
        display: grid;
        row-gap: toRem(21);
    }

    // .banner__headline

    &__headline {
    }

    // .banner__text

    &__text {
        font-family: $interFont;
        @include adaptiveValue('font-size', 48, 30);
        font-weight: 600;
        line-height: 125%; /* 125% */
        letter-spacing: toRem(1.92);
    }

    // .banner__link

    &__link {
    }

    // .banner__image

    &__image {
    }

    // .banner__photo

    &__photo {
    }
}
.hat-banner {
    // .hat-banner__icon
    display: flex;
    align-items: center;
    column-gap: toRem(24);

    &__icon {
    }

    // .hat-banner__title

    &__title {
        padding-top: toRem(5);
        font-size: toRem(14);
        line-height: 150%; /* 150% */
    }
}
.link-banner {
    display: flex;
    align-items: center;
    column-gap: toRem(8);

    // .link-banner__text-link

    &__text-link {
        cursor: pointer;
        &::after,
        &::before {
            background: #fafafa;
        }
    }
    &__arrow {
        animation-name: move-arrow;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;

        @media (any-hover: hover) {
            &:hover {
                animation-play-state: paused;
            }
        }
    }
}

@keyframes move-arrow {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(30%);
    }
}
</style>
