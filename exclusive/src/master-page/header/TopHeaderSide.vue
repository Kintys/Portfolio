<template>
    <div class="top-header">
        <div class="top-header__container">
            <div class="top-header__info">
                <p class="top-header__text">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <router-link :to="{ name: 'home' }" class="top-header__link">ShopNow</router-link>
            </div>
            <div class="top-header__actions">
                <MSelect
                    :clearBtn="false"
                    :optionsList="langParams"
                    v-model="selectedLang"
                    :selectFirstElement="true"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MSelect from '@/components/MSelect.vue'
import langParams from '../header/settings'

const selectedLang = ref(null)
</script>

<style lang="scss" scoped>
@import '@/style/lib/variables';
@import '@/style/lib/mixins';
.top-header {
    background-color: $mainColor;
    // .top-header__container

    &__container {
        padding-top: toRem(12);
        padding-bottom: toRem(12);
        display: flex;
        align-items: center;
    }

    // .top-header__info

    &__info {
        display: flex;
        justify-content: center;
        color: #fafafa;
        font-size: toRem(14);
        flex-grow: 1;
        align-items: center;
    }

    // .top-header__text

    &__text {
        line-height: toRem(20);
        letter-spacing: toRem(0.5);
        margin-right: toRem(8);
    }

    // .top-header__link

    &__link {
        font-weight: 600;
        line-height: 171%;
        @media (any-hover: hover) {
            &:hover {
                text-decoration-line: underline;
            }
        }
    }

    // .top-header__actions
}
</style>
