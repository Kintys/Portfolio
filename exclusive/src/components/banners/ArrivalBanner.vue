<template>
    <div
        class="arrival"
        :class="{
            'img-right': bannerData.position.right,
            'img-bottom': bannerData.position.bottom
        }"
    >
        <v-img
            :src="bannerData.src"
            :max-width="bannerData.width"
            :max-height="bannerData.height"
            class="arrival__img"
            aspect-ratio="1/1"
        />
        <div
            class="arrival__headline"
            :style="{
                left: titlePosition.left,
                bottom: titlePosition.bottom
            }"
        >
            <h6 class="arrival__title">{{ bannerData.title }}</h6>
            <p class="arrival__description">{{ bannerData.description }}</p>
            <a class="arrival__link hover-link">Shop Now</a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    bannerData: {
        type: Object,
        default: () => ({})
    },
    titlePosition: {
        type: Object,
        default: () => ({
            left: '1.5rem',
            bottom: '1.5rem'
        })
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/hover-link';

.arrival {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: toRem(4);
    background-color: #0d0d0d;
    &:not(:last-child) {
        margin-bottom: toRem(20);
    }
    // .arrival__img
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &__headline {
        color: #fafafa;
        position: relative;
        max-width: toRem(255);
        display: grid;
        row-gap: toRem(16);
        position: absolute;
    }

    // .arrival__title

    &__title {
        font-family: $interFont;
        @include adaptiveValue('font-size', 24, 18);
        font-weight: 600;
        letter-spacing: toRem(0.72);
    }

    // .arrival__description

    &__description {
        @include adaptiveValue('font-size', 14, 12);
        line-height: 150%;
    }

    // .arrival__link

    &__link {
        font-weight: 500;
        line-height: 150%; /* 150% */
        justify-self: start;
        cursor: pointer;
    }
}
.img-right {
    justify-content: flex-end;
    align-items: flex-end;
}
// .img-center {
// }
.img-bottom {
    justify-content: center;
    align-items: flex-end;
}
.hover-link {
    &::after,
    &::before {
        background-color: #fafafa;
    }
}
</style>
