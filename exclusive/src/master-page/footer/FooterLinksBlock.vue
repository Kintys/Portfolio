<template>
    <div class="footer-nav-bar">
        <MExpansionPanels :label="columnTitle" :viewportSize="767.98">
            <template #spoller-container>
                <ul class="footer-nav-bar__list">
                    <li v-for="linkData in linksParams" :key="linkData.title" class="footer-nav-bar__item">
                        <router-link :to="{ name: `${linkData.link}` }" class="footer-nav-bar__link">{{
                            linkData.title
                        }}</router-link>
                    </li>
                </ul>
            </template>
        </MExpansionPanels>
    </div>
</template>

<script setup>
import MExpansionPanels from '@/components/MExpansionPanels.vue'
defineProps({
    columnTitle: {
        type: String,
        default: ''
    },
    linksParams: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.footer-nav-bar {
    // .footer-nav-bar__title

    &__title {
        font-size: toRem(20);
        font-weight: 500;
        line-height: 140%; /* 140% */
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .footer-nav-bar__list

    &__list {
        display: grid;
        row-gap: toRem(16);
    }

    // .footer-nav-bar__item

    &__item {
    }

    // .footer-nav-bar__link

    &__link {
        line-height: 150%; /* 150% */
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
