<template>
    <div class="search-bar">
        <div @keydown="search($event)" class="search-bar__label">
            <input type="text" class="search-bar__input" placeholder="What are you looking for?" />
            <IconBase
                class="search-bar__icon"
                width="24"
                height="24"
                icon-name="search"
                view-box="0 0 24 24"
                icon-color="transparent"
            >
                <IconMagnifyingGlass
            /></IconBase>
        </div>
        <SearchList class="search-bar__list" :isList="showList" />
    </div>
</template>

<script setup>
const props = defineProps({
    isScrolling: { type: Object }
})
import SearchList from './SearchList.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconMagnifyingGlass from '@/components/icons/iconsSrc/IconMagnifyingGlass.vue'
import { useFiltersStore } from '@/stores/filters.js'
import { ref, watch, toRef } from 'vue'
const isScrolling = toRef(props, 'isScrolling')

const { loadProductWithSearchTextFilter } = useFiltersStore()
const showList = ref(false)
async function search($event) {
    try {
        const searchText = $event.target.value
        if (searchText.length >= 2) {
            showList.value = true
            await loadProductWithSearchTextFilter({
                search: searchText
            })
        } else {
            showList.value = false
        }
    } catch (error) {
        console.error(error.massage)
    }
}
watch(isScrolling, (newVal) => {
    if (newVal) showList.value = false
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';
@import '@/style/lib/variables';
.search-bar {
    padding: toRem(0) toRem(3);
    @include adaptiveValue('margin-right', 19, 0, 0, $maxWidth, $tablet);
    position: relative;
    display: grid;
    // .search-bar__label
    &__list {
        position: absolute;
        top: toRem(55);
        right: toRem(-10);
        transition: all 0.3s;
    }
    &__label {
        position: relative;
        height: toRem(38);
        @media (min-width: toEm($mobile)) {
            @include adaptiveValue('width', 233, 210, 0, $maxWidth, 824);
        }
    }

    // .search-bar__input

    &__input {
        width: 100%;
        padding: toRem(7) toRem(36) toRem(7) toRem(20);
        border-radius: toRem(4);
        background: #f5f5f5;
        position: relative;
        &:focus {
            outline: black solid toRem(1);
        }
        &::placeholder {
            font-size: toRem(12);
            line-height: 150%;
        }
    }

    // .search-bar__icon

    &__icon {
        position: absolute;
        right: 4.938272%; /* 12/243 */
        top: 18.4%;
        width: toRem(24);
        height: toRem(24);
        z-index: 5;
    }
    &__error {
        position: absolute;
        bottom: 0;
        opacity: 0;
        visibility: hidden;
        left: toRem(3);
        color: rgba(196, 5, 5, 0.941);
        transition: all 0.3s;
    }
}
</style>
@/stores/filters.js
