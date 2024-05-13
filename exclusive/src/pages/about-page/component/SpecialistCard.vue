<template>
    <article class="specialist-card">
        <div class="specialist-card__image">
            <img :src="specialist.photo" alt="Image" />
        </div>
        <div class="specialist-card__description">
            <h4 class="specialist-card__title">{{ specialist.name }}</h4>
            <p class="specialist-card__position">{{ specialist.position }}</p>
        </div>
        <div class="specialist-card__social-media">
            <a :href="specialist.links.twitter">
                <IconBase width="23" height="24" viewBox="0 0 23 24" iconColor="transparent">
                    <IconTwitter />
                </IconBase>
            </a>
            <a :href="specialist.links.inst">
                <IconBase width="20" height="20" viewBox="0 0 20 20" iconColor="transparent">
                    <IconInstagram />
                </IconBase>
            </a>
            <a :href="specialist.links.in">
                <IconBase width="24" height="24" viewBox="0 0 24 24" iconColor="transparent">
                    <IconLinkedin />
                </IconBase>
            </a>
        </div>
    </article>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconTwitter from '@/components/icons/iconsSrc/social-media/IconTwitter.vue'
import IconInstagram from '@/components/icons/iconsSrc/social-media/IconInstagram.vue'
import IconLinkedin from '@/components/icons/iconsSrc/social-media/IconLinkedin.vue'

defineProps({
    specialist: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.specialist-card {
    // .specialist-card__image
    max-width: toRem(370);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    max-height: toRem(564);
    &__image {
        padding: toRem(15) toRem(15) toRem(0) toRem(15);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        background-color: #f5f5f5;
        border-radius: toRem(4);
        height: toRem(391);
        &:not(:last-child) {
            margin-bottom: toRem(32);
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
</style>
