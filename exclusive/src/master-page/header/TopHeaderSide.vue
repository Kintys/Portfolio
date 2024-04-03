<template>
    <div class="top-header">
        <div class="top-header__container">
            <div class="top-header__info">
                <p class="top-header__text">
                    <span abindex="0" data-descr="For All Swim Suits And Free Express Delivery - OFF 50%!">{{
                        shortText
                    }}</span>
                </p>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import MSelect from '@/components/MSelect.vue'
import langParams from '../header/settings'

const selectedLang = ref(null)
const text = 'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!'
const screenWidth = ref(null)
const shortText = computed(() => {
    if (screenWidth.value < 790) return text.substring(0, 11)
    else return text
})

function getDynamicInnerWidth() {
    screenWidth.value = window.innerWidth
}

onMounted(() => window.addEventListener('resize', getDynamicInnerWidth))
onBeforeUnmount(() => {
    window.removeEventListener('resize', getDynamicInnerWidth)
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/variables';
@import '@/style/lib/mixins';
.top-header {
    background-color: $mainColor;
    // .top-header__container
    z-index: 100;

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
        @media (max-width: toEm(790)) {
            span[data-descr] {
                position: relative;
                cursor: help;
            }
            span[data-descr]:hover::after,
            span[data-descr]:focus::after {
                content: attr(data-descr);
                position: absolute;
                top: toRem(24);
                left: toRem(-30);
                min-width: toRem(250);
                border: toRem(2) #aaaaaa solid;
                border-radius: toRem(4);
                background-color: $mainColor;
                padding: toRem(10);
                color: #fafafa;
                font-size: 14px;
                z-index: 1;
            }
        }
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
