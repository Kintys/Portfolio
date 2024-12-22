<template>
    <div class="top-header">
        <div class="top-header__container">
            <div class="top-header__info">
                <p class="top-header__text">
                    <span
                        class="top-header__span"
                        abindex="0"
                        data-descr="For All Swim Suits And Free Express Delivery - OFF 50%!"
                        ><span>{{ shortText }}</span>
                    </span>
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
import { ref, computed } from 'vue'
import MSelect from '@/components/MSelect.vue'
import langParams from '@/master-page/header/settings'

const selectedLang = ref(null)
const text = 'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!'
const shortText = computed(() => {
    if (screenWidth.value < 790 && screenWidth.value) return text.substring(0, 11)
    else return text
})

//===========================================================
import { onResize } from '@/modulesHelpers/lib/resize.js'
const { currentWindowWidth: screenWidth } = onResize()
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
        position: relative;
    }

    // .top-header__text

    &__text {
        line-height: toRem(20);
        letter-spacing: toRem(0.5);
        margin-right: toRem(8);
        animation: line-text 20s linear infinite;
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
    &__span {
        display: flex;
        column-gap: toRem(200);
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
