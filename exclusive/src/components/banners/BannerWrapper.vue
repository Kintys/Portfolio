<template>
    <div class="special-offer-banner">
        <div class="special-offer__block description-offer">
            <div class="description-offer__headline">
                <span class="description-offer__subtitle-cat">{{ offerProps.category }}</span>
                <h6 class="description-offer__title">{{ offerProps.title }}</h6>
            </div>
            <div class="description-offer__timer">
                <CounterComponent :add-time="offerProps.timer" />
            </div>
            <div class="description-offer__action">
                <v-btn class="description-offer__button button-main button-main--small">Buy Now!</v-btn>
            </div>
        </div>
        <div class="special-offer-banner__block offer-picture">
            <div class="offer-picture__background"></div>
            <v-img :src="offerProps.img" max-width="600" max-height="420" class="offer-picture__img" />
        </div>
    </div>
</template>

<script setup>
import CounterComponent from '@/components/CounterComponent.vue'
defineProps({
    offerProps: {
        type: Object
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/button';

.special-offer-banner {
    // .special-offer-banner
    display: flex;
    background: #000;
    justify-content: space-between;
    @include adaptiveValue('padding-top', 69, 20, 0, 1200, $mobile);
    @include adaptiveValue('padding-bottom', 69, 20, 0, 1200, $mobile);
    @include adaptiveValue('padding-left', 56, 20, 0, 1200, $mobile);
    @include adaptiveValue('padding-right', 56, 20, 0, 1200, $mobile);
    @media (max-width: toEm(800)) {
        flex-direction: column-reverse;
        row-gap: toRem(30);
    }
    @media (min-width: toEm(800)) {
        align-items: center;
    }
}
.description-offer {
    @media (min-width: toEm(800)) {
        padding-right: toRem(8);
    }
    // .description-offer__headline
    flex: 1 1 45%; /* 470/1200 */
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__headline {
        &:not(:last-child) {
            margin-bottom: toRem(40);
        }
        display: grid;
        row-gap: toRem(32);
        font-weight: 600;
    }

    // .description-offer__subtitle-cat

    &__subtitle-cat {
        color: #0f6;
        line-height: 125%; /* 125% */
        @include adaptiveValue('font-size', 16, 14);
    }

    // .description-offer__title

    &__title {
        color: #fafafa;
        font-family: $interFont;
        @include adaptiveValue('font-size', 48, 24);
        line-height: 125%; /* 125% */
        letter-spacing: 1.92px;
        @media (max-width: toEm(800)) {
            text-align: center;
        }
    }

    // .description-offer__timer

    &__timer {
        @media (max-width: toEm(800)) {
            align-self: center;
        }
        cursor: default;
        &:not(:last-child) {
            margin-bottom: toRem(40);
        }
    }
    &__button {
        @media (max-width: toEm(800)) {
            width: 100%;
        }
    }
}
.button-main {
    background-color: #0f6;
    &:hover {
        background: #fafafa;
        color: $secondColor;
    }
}

.offer-picture {
    // .offer-picture__background
    flex: 1 1 50%; /* 600/1200 */

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &__background {
        position: absolute;
        border-radius: toRem(504);
        opacity: 0.3;
        width: 100%;
        height: 100%;
        background: #d9d9d9;
        filter: blur(toRem(100));
    }

    // .offer-picture__img

    &__img {
        @media (max-width: toEm(800)) {
            @include adaptiveValue('width', 400, 250, 0, $mobile, 320);
        }
    }
}

:deep() {
    .flash-sale-timer {
        // .flash-sale-timer__wrapper
        display: grid;
        grid-template-columns: repeat(4, minmax(toRem(42), toRem(62)));
        @include adaptiveValue('column-gap', 24, 10);

        &__wrapper {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            position: relative;
            row-gap: toRem(0);
            z-index: 2;
            &::before {
                content: '';
                position: absolute;
                background-color: #fff;
                border-radius: 50%;
                z-index: -1;
                width: toRem(62);
                height: toRem(62);
            }
        }

        // .flash-sale-timer__title

        &__title {
            font-size: toRem(11);
            line-height: 163.636%; /* 125% */
        }

        // .flash-sale-timer__time

        &__time {
            font-size: toRem(16);
            font-weight: 800;
            // line-height: 125%; /* 125% */
        }

        // .flash-sale-timer__divide-dots

        &__divide-dots {
            display: none;
        }

        // .flash-sale-timer__dot

        &__dot {
            display: none;
        }
    }
}
</style>
