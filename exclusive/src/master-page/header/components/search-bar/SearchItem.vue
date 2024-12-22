<template>
    <!-- router link -->
    <div class="search-item">
        <div class="search-item__body item-search">
            <v-img
                :src="productItem.image"
                :max-width="80"
                :max-height="80"
                aspect-ratio="16/9"
                class="item-search__image"
                :alt="productItem.title"
            />
            <div class="item-search__content">
                <h2 v-ellipses:23.keep-word class="item-search__title">{{ productItem.title }}</h2>
                <section class="item-search__rating">
                    <Rating v-model="productItem.rating" :stars="5" readonly :cancel="false" class="item-search__stars">
                        <template #onicon>
                            <IconBase width="16" height="15">
                                <IconRatingStarYellow />
                            </IconBase>
                        </template>
                        <template #officon>
                            <IconBase width="16" height="15">
                                <IconRatingStarGray />
                            </IconBase>
                        </template>
                    </Rating>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    productItem: {
        type: Object,
        default: () => ({})
    }
})
import { vEllipses } from '../../../../directive/ellipses'
import Rating from 'primevue/rating'
import IconBase from '@/components/icons/IconBase.vue'
import IconRatingStarYellow from '@/components/icons/iconsSrc/IconRatingStarYellow.vue'
import IconRatingStarGray from '@/components/icons/iconsSrc/IconRatingStarGray.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';
.search-item {
    // .search-item__body
    max-width: toRem(320);
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: toRem(10);
    }

    &__body {
        padding: toRem(8);
        transition: all 0.3s;
        border-radius: toRem(10);
        @media (any-hover: hover) {
            &:hover {
                background: #0000000f;
            }
        }
    }
}
.item-search {
    display: flex;
    align-items: center;
    column-gap: toRem(5);
    // .item-search__image

    &__image {
        width: toRem(80);
        height: toRem(60);
        padding-right: toRem(2);
    }
    // .item-search__title

    &__title {
        margin-bottom: toRem(10);
    }

    &__stars {
        display: flex;
    }
}
</style>
