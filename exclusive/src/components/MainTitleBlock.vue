<template>
    <div class="headline">
        <div class="headline__category">{{ titleText.cat }}</div>
        <h2 class="headline__title">{{ titleText.title }}</h2>
    </div>
</template>

<script setup>
defineProps({
    titleText: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.headline {
    // .headline__category
    display: grid;
    row-gap: toRem(24);
    text-transform: capitalize;

    &__category {
        color: $secondColor;
        font-weight: 600;
        line-height: 125%; /* 125% */
        display: flex;
        align-items: center;
        column-gap: toRem(16);
        &::before {
            content: '';
            background-color: $secondColor;
            width: toRem(20);
            height: toRem(40);
            border-radius: toRem(3);
        }
    }

    // .headline__title

    &__title {
        @media (min-width: toEm(450)) {
            text-wrap: nowrap;
        }
        font-family: $interFont;
        font-size: toRem(36);
        font-weight: 600;
        letter-spacing: 1.44px;
    }
}
</style>
