<template>
    <div class="product-admin-list">
        <header class="product-admin-list__header">
            <v-select
                label="All Category"
                :items="categoryProps"
                :return-object="true"
                v-model="filterObject.categoryOptions"
                variant="outlined"
                class="product-admin-list__select"
                hide-details="false"
            ></v-select>
        </header>
        <section class="product-admin-list__items-product product-items">
            <template v-for="cardProduct of productData" :key="cardProduct._id">
                <ProductCard
                    :productItem="cardProduct"
                    :showAddBtn="false"
                    :showActionsBtn="false"
                    :is-move-to-ref="false"
                >
                    <template #cart-butt>
                        <div class="product-items edit-actions">
                            <v-btn
                                @click="editProduct(cardProduct._id)"
                                class="edit-actions__btn-edit button-main button-main--tiny"
                                >Edit</v-btn
                            >
                            <v-btn class="edit-actions__btn-delete button-main button-main--tiny">Delete</v-btn>
                        </div>
                    </template>
                </ProductCard>
            </template>
        </section>
        <v-pagination
            v-model="filterObject.pageNumber"
            :length="totalPage"
            active-color="#db4444"
            class="product-admin-list__pagination"
        ></v-pagination>
    </div>
</template>

<script setup>
import ProductCard from '../../../components/ProductCard.vue'
import { ref, onBeforeMount, computed, watch } from 'vue'

const categoryProps = [
    { title: 'All product', value: [] },
    { title: 'gamepads', value: 'gamepads' },
    { title: 'pcs', value: 'pcs' },
    { title: 'laptops', value: 'laptops' },
    { title: 'headphones', value: 'headphones' }
]
import { useAdminStore } from '@/stores/admin.js'
const { loadProductItemById } = useAdminStore()

import { useFiltersStore } from '@/stores/filters'
import { storeToRefs } from 'pinia'
const { getProductsListTotalNumber, getProductsList } = storeToRefs(useFiltersStore())
const { loadProductWithPagination } = useFiltersStore()
const productData = computed(() => getProductsList.value)
const totalPage = computed(() => Math.ceil(getProductsListTotalNumber.value / filterObject.value.prePageNumber))

const filterObject = ref({
    pageNumber: 1,
    prePageNumber: 10,
    categoryOptions: null
})

const emit = defineEmits(['update:active'])
async function editProduct(id) {
    await loadProductItemById(id)
    emit('update:active', ['AdminEditBlock'])
}

watch(filterObject.value, (newVal) => {
    if (newVal) {
        loadProductWithPagination({
            page: newVal.pageNumber - 1,
            perPage: newVal.prePageNumber,
            category: [newVal.categoryOptions?.value]
        })
    }
})

onBeforeMount(async () => {
    await loadProductWithPagination({
        page: filterObject.value.pageNumber - 1,
        perPage: filterObject.value.prePageNumber
    })
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';

.product-admin-list {
    // .product-admin-list__header

    &__header {
        display: grid;
        justify-items: end;
        border-radius: toRem(4) toRem(4) 0 0;
        padding: toRem(10) toRem(18);
        border-bottom: toRem(1) solid rgba(222, 226, 230, 0.7);
        box-shadow: 0 0.0625rem 0.8125rem 0 rgba(0, 0, 0, 0.05);
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }

    // .product-admin-list__select

    &__select {
        max-width: toRem(250);
        width: 100%;
    }
    &__items-product {
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }
    // .product-admin-list__pagination

    &__pagination {
    }
}
.product-items {
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-items: center;

    gap: toRem(10);
}
.edit-actions {
    // .edit-actions__btn-edit
    display: flex;
    justify-content: space-between;

    &__btn-edit {
        background: blue;
        @media (any-hover: hover) {
            &:hover {
                background: rgba(0, 0, 255, 0.738);
            }
        }
    }
}
</style>
