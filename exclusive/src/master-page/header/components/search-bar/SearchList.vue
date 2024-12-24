<template>
    <div v-if="isSearchList && clickOutSide" v-click-outside="closeList" class="search-list">
        <SearchItem v-for="(product, i) of getFoundItemsList" :key="i" :product-item="product" />
    </div>
</template>

<script setup>
import { vClickOutside } from '@/directive/clickOutside.js'
const props = defineProps({
    isList: {
        type: Boolean,
        default: false
    }
})
import { storeToRefs } from 'pinia'
import SearchItem from './SearchItem.vue'
import { useFiltersStore } from '@/stores/filters.js'
import { computed, ref } from 'vue'
const clickOutSide = ref(true)
const { getFoundItemsList } = storeToRefs(useFiltersStore())

const isSearchList = computed(() => {
    if (!(getFoundItemsList.value?.length > 0 && props.isList)) return false
    clickOutSide.value = true
    return true
})

async function closeList(close) {
    clickOutSide.value = close
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';
.search-list {
    padding: toRem(5);
    width: toRem(325);
    max-height: toRem(350);
    overflow: auto;
    background: #fff;
    border-radius: toRem(4);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;
    @media (any-hover: hover) {
        &:hover {
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }
    }

    &::-webkit-scrollbar {
        width: toRem(7);
        transition: all 0.3s;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: toRem(10);
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: toRem(10);

        &:hover {
            background: #555;
        }
    }
}
</style>
@/stores/filters.js
