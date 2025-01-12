<template>
    <article class="specialist-card">
        <div class="specialist-card__image">
            <v-img :src="specialist.photo" class="specialist-card__picture" alt="Image" />
        </div>
        <div class="specialist-card__description">
            <h4 class="specialist-card__title">{{ specialist.name }}</h4>
            <p class="specialist-card__position">{{ specialist.position }}</p>
        </div>
        <div class="specialist-card__social-media social-media">
            <a class="social-media__icon" :href="specialist.links.twitter">
                <font-awesome-icon :icon="faTwitterSquare" class="twitter-icon" />
            </a>
            <a
                :href="specialist.links.inst"
                target="_instagram"
                aria-label="A great place to find out what friends are up to!"
                class="social-media__icon instagram-icon"
            >
                <div class="bg">
                    <div class="inner">
                        <font-awesome-icon :icon="faInstagram" />
                    </div>
                </div>
            </a>
            <a class="social-media__icon" :href="specialist.links.in">
                <FontAwesomeIcon :icon="faLinkedinIn" class="linkedin-icon" />
            </a>
        </div>
    </article>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faTwitterSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

defineProps({
    specialist: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/hover-link';
.specialist-card {
    // .specialist-card__image

    max-width: toRem(370);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: toEm(500)) {
        max-width: toRem(280);
        max-height: toRem(464);
    }
    &__image {
        padding: toRem(15) toRem(8) toRem(0) toRem(8);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-color: #f5f5f5;
        border-radius: toRem(4);
        width: 100%;
        min-height: toRem(391);
        &:not(:last-child) {
            margin-bottom: toRem(32);
        }
    }
    &__picture {
        width: toRem(236);
        height: toRem(391);
        @media (max-width: toEm(500)) {
            width: toRem(136);
            height: toRem(291);
        }
    }
    // .specialist-card__description

    &__description {
        display: flex;
        row-gap: toRem(8);
        width: 100%;
        flex-direction: column;
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    // .specialist-card__title

    &__title {
        font-family: $interFont;
        @include adaptiveValue('font-size', 32, 24);
        font-weight: 500;
        line-height: 93.75%; /* 93.75% */
        letter-spacing: 1.28px;
    }

    // .specialist-card__position

    &__position {
        line-height: 150%; /* 150% */
    }

    // .specialist-card__social-media

    &__social-media {
        width: 100%;
        display: flex;
        align-items: center;
        gap: toRem(16);
    }
}

.social-media {
    // .social-media__icon

    &__icon {
        @include adaptiveValue('font-size', 28, 25);
    }
}
</style>
