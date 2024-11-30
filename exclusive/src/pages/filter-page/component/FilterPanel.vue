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
                <v-text-field
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
                ></v-text-field>
            </div>
        </div>
        <div class="filter-panel__expansion-panels panels-expansion">
            <v-list v-model:opened="opensPanels" class="panels-expansion__list list" active-strategy="leaf">
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
                    <v-list-item v-for="(title, i) in brand" :key="i" class="list__item">
                        <v-checkbox :label="title" v-model="filterParams.brand" :value="title"></v-checkbox>
                    </v-list-item>
                </v-list-group>
            </v-list>
            <v-list v-model:opened="opensPanels" class="panels-expansion__list list">
                <v-list-group value="Rating" fluid="true" class="list__group">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            prepend-icon="mdi-account-circle"
                            title="Rating"
                            class="list__item"
                        ></v-list-item>
                    </template>
                    <v-list-item v-for="(number, index) in rating" :key="index" class="list__item">
                        <v-checkbox v-model="filterParams.rating" :value="number"
                            ><template v-slot:label>
                                <Rating
                                    :model-value="number"
                                    :length="number"
                                    readonly
                                    :cancel="false"
                                    class="list__stars"
                                >
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
                                </Rating> </template
                        ></v-checkbox>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </div>
    </aside>
</template>

<script setup>
import IconBase from '../../../components/icons/IconBase.vue'
import IconRatingStarYellow from '../../../components/icons/iconsSrc/IconRatingStarYellow.vue'
import IconRatingStarGray from '../../../components/icons/iconsSrc/IconRatingStarGray.vue'
import Rating from 'primevue/rating'
import { ref } from 'vue'
const opensPanels = ref(['Brand', 'Rating'])
const brand = ref(['Management', 'Settings'])
const rating = ref([5, 4, 3, 2])
const filterParams = ref({
    search: '',
    brand: [],
    rating: [],
    minPrice: 1,
    maxPrice: 10000
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
