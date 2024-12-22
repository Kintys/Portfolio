<template>
    <a class="category-card" @click.prevent="$emit('click')">
        <div class="category-card__content">
            <div class="category-card__image">
                <IconBase
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    icon-color="transparent"
                    class="icon"
                    v-bind="$attrs"
                >
                    <component :is="catCardItemData.icon" v-bind="$attrs" class="icon" />
                </IconBase>
            </div>
            <h6 class="category-card__title">{{ catCardItemData.title }}</h6>
        </div>
    </a>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'

defineProps({
    catCardItemData: {
        type: Object,
        default: () => ({})
    }
})
defineEmits(['click'])
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.category-card {
    cursor: pointer;
    // .category-card__content
    max-width: toRem(170);
    min-height: toRem(145);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: toRem(4);
    border: toRem(1.5) solid rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    &--focus {
        background-color: $secondColor;
        :deep() {
            g path,
            line {
                stroke: #fff;
            }
        }
        [class*='__title'] {
            color: #fff;
        }
    }
    &__content {
        display: grid;
        row-gap: toRem(12);
    }

    // .category-card__image

    &__image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    // .category-card__title

    &__title {
        text-transform: capitalize;
        line-height: 150%; /* 150% */
    }
}
</style>
