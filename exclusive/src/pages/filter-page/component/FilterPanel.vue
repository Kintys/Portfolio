<template>
    <aside class="filter-panel">
        <div class="filter-panel__inputs-search inputs">
            <v-btn class="inputs__btn button-main">Apply</v-btn>
            <v-text-field
                v-model="filterParams.search"
                label="Search.."
                variant="outlined"
                class="inputs__search"
            ></v-text-field>
            <div class="inputs__price price">
                <v-range-slider
                    v-model="filterParams.rangePrice"
                    :min="1"
                    :max="1000"
                    step="1"
                    strict
                    thumb-label="true"
                    hide-details="auto"
                ></v-range-slider>

                <!-- <v-text-field
                    v-model="filterParams.minPrice"
                    label="Min"
                    type="number"
                    variant="outlined"
                    class="price__input"
                ></v-text-field>
                <v-text-field
                    v-model="filterParams.maxPrice"
                    label="Max"
                    type="number"
                    variant="outlined"
                    class="price__input"
                ></v-text-field> -->
            </div>
        </div>
        <div class="filter-panel__expansion-panels panels-expansion">
            <v-list class="panels-expansion__list list">
                <v-list-group value="Category" fluid="true" class="list__group">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            prepend-icon="mdi-account-circle"
                            title="Category"
                            class="list__item"
                        ></v-list-item>
                    </template>
                    <v-list-item v-for="category in categories" :key="category.id" class="list__item">
                        <v-checkbox
                            :label="category.title"
                            :value="category.value"
                            :multiple="true"
                            v-model="filterParams.category"
                        ></v-checkbox>
                    </v-list-item>
                </v-list-group>
            </v-list>
            <v-list class="panels-expansion__list list" active-strategy="leaf">
                <v-list-group value="Brand" fluid="true" class="list__group">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            prepend-icon="mdi-account-circle"
                            title="Brand"
                            slim="true"
                            class="list__item"
                        ></v-list-item>
                    </template>
                    <v-list-item v-for="brand in getBrandsList" :key="brand.id" class="list__item">
                        <v-checkbox
                            :multiple="true"
                            :label="brand.name"
                            v-model="filterParams.brands"
                            :value="brand._id"
                        ></v-checkbox>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </div>
    </aside>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'
import { ref, watch } from 'vue'
const emit = defineEmits(['update:modelValue'])

//===========================================================

import { useFiltersStore } from '@/stores/filters.js'
import { storeToRefs } from 'pinia'
const { getBrandsList } = storeToRefs(useFiltersStore())

//===========================================================

const categories = ref([
    { id: uuidv4(), title: "Pc's", value: 'pcs' },
    { id: uuidv4(), title: 'Gamepads', value: 'gamepads' },
    { id: uuidv4(), title: 'Laptops', value: 'laptops' },
    { id: uuidv4(), title: 'Headphones', value: 'headphones' }
])
const filterParams = ref({
    search: '',
    brands: [],
    category: [],
    rangePrice: [1, 1000]
})

watch(filterParams.value, (newVal) => {
    if (newVal) {
        emit('update:modelValue', newVal)
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';

.filter-panel {
    display: flex;
    flex-direction: column;
    max-width: toRem(300);
    row-gap: toRem(10);
}
.inputs {
    display: grid;
    padding: toRem(20);
    row-gap: toRem(20);
    border-radius: toRem(10);
    box-shadow: 0 toRem(1) toRem(13) 0 rgba(0, 0, 0, 0.05);
    // .inputs__btn
}

.panels-expansion {
    // .panels-expansion__list
    padding: toRem(20);
    row-gap: toRem(20);
    border-radius: toRem(10);
    box-shadow: 0 toRem(1) toRem(13) 0 rgba(0, 0, 0, 0.05);
}

.list {
    // .list__item

    &__item {
        display: flex;
        justify-content: space-between;
        :deep() {
            .v-list-item__prepend {
                display: none;
            }
        }
    }

    &__stars {
        display: flex;
    }
}
.price {
    display: flex;
    column-gap: toRem(8);
    // .price__input

    &__input {
        margin: toRem(2);
    }
}
</style>
@/stores/product @/stores/filters.js
