<template>
    <div class="card-aside__box">
        <div class="card-aside__headline-card">
            <slot name="icon">
                <div class="card-aside__icon">{{ cardData.icon }}</div>
            </slot>
            <h4 class="card-aside__title">{{ cardData.title }}</h4>
        </div>
        <div class="card-aside__text-block">
            <p class="card-aside__main-text">{{ cardData.text }}</p>
            <p v-for="link in cardData.links" :key="link.headerText" class="card-aside__subtext">
                {{ link.titleLink }}:
                <a :href="link.href" lass="card-aside__link"> {{ link.textLink }}</a>
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    cardData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.card-aside {
    // .card-aside__box

    &__box {
        width: 100%;
        display: grid;
        row-gap: toRem(32);
        line-height: 150%;
        @media (max-width: toEm($tablet)) {
            justify-items: center;
            text-align: center;
        }
    }

    // .card-aside__headline-card

    &__headline-card {
        display: flex;
        align-items: center;
        column-gap: toRem(16);
    }

    // .card-aside__title

    &__title {
        text-transform: capitalize;
        font-weight: 500;
    }

    // .card-aside__text-block

    &__text-block {
        font-size: toRem(14);
        display: grid;
        row-gap: toRem(16);
        @media (max-width: toEm($tablet)) {
            justify-items: center;
        }
    }
    // .card-aside__subtext

    &__subtext {
        display: flex;
        align-items: center;
    }
}
</style>
