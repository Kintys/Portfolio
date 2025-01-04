<template>
    <div class="product-admin-list">
        <header class="product-admin-list__header">
            <v-select
                label="All Category"
                :items="selectedItems"
                :return-object="true"
                v-model="sortOption"
                variant="outlined"
                class="product-admin-list__select"
                hide-details="false"
            ></v-select>
        </header>
        <section class="product-admin-list__items-product product-items">
            <template v-for="cardProduct of testProduct" :key="cardProduct._id">
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
            v-model="temp"
            :length="3"
            active-color="#db4444"
            class="product-admin-list__pagination"
        ></v-pagination>
    </div>
</template>

<script setup>
import ProductCard from '../../../components/ProductCard.vue'
import { ref } from 'vue'
const sortOption = ref(null)
const selectedItems = [
    { field: 'rating', title: 'Ascending rating', value: 'asc' },
    { field: 'rating', title: 'Descending rating', value: 'desc' },
    { field: 'newPrice', title: 'Ascending prices', value: 'asc' },
    { field: 'newPrice', title: 'Descending prices', value: 'desc' }
]
const emit = defineEmits(['update:modelValue'])
function editProduct(id) {
    emit('update:modelValue', id)
}

const testProduct = [
    {
        _id: '3fa0194f-bfc5-11ef-ae33-d8f3bc341a96',
        title: 'Havic HV G-92 Gamepad',
        image: 'https://firebasestorage.googleapis.com/v0/b/exclusive-shop-c0f66.appspot.com/o/Gamepad%2F2023120115561510ba16954.png?alt=media&token=5572e4d7-9865-4794-b5dd-e389fd77e264',
        discount: '-18%',
        brand: 'Samsung',
        oldPrice: '180.00',
        newPrice: '158.00',
        quantity: 10,
        rating: 5,
        description:
            'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        evaluation: 15
    },
    {
        _id: '3fa0194f-bfc5-11ef-ae33-d8f3bc341a96',
        title: 'Havic HV G-92 Gamepad',
        image: 'https://firebasestorage.googleapis.com/v0/b/exclusive-shop-c0f66.appspot.com/o/Gamepad%2F2023120115561510ba16954.png?alt=media&token=5572e4d7-9865-4794-b5dd-e389fd77e264',
        discount: '-18%',
        brand: 'Samsung',
        oldPrice: '180.00',
        newPrice: '158.00',
        quantity: 10,
        rating: 5,
        description:
            'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        evaluation: 15
    },
    {
        _id: '3fa0194f-bfc5-11ef-ae33-d8f3bc341a96',
        title: 'Havic HV G-92 Gamepad',
        image: 'https://firebasestorage.googleapis.com/v0/b/exclusive-shop-c0f66.appspot.com/o/Gamepad%2F2023120115561510ba16954.png?alt=media&token=5572e4d7-9865-4794-b5dd-e389fd77e264',
        discount: '-18%',
        brand: 'Samsung',
        oldPrice: '180.00',
        newPrice: '158.00',
        quantity: 10,
        rating: 5,
        description:
            'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        evaluation: 15
    },
    {
        _id: '3fa0194f-bfc5-11ef-ae33-d8f3bc341a96',
        title: 'Havic HV G-92 Gamepad',
        image: 'https://firebasestorage.googleapis.com/v0/b/exclusive-shop-c0f66.appspot.com/o/Gamepad%2F2023120115561510ba16954.png?alt=media&token=5572e4d7-9865-4794-b5dd-e389fd77e264',
        discount: '-18%',
        brand: 'Samsung',
        oldPrice: '180.00',
        newPrice: '158.00',
        quantity: 10,
        rating: 5,
        description:
            'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        evaluation: 15
    },
    {
        _id: '3fa0194f-bfc5-11ef-ae33-d8f3bc341a96',
        title: 'Havic HV G-92 Gamepad',
        image: 'https://firebasestorage.googleapis.com/v0/b/exclusive-shop-c0f66.appspot.com/o/Gamepad%2F2023120115561510ba16954.png?alt=media&token=5572e4d7-9865-4794-b5dd-e389fd77e264',
        discount: '-18%',
        brand: 'Samsung',
        oldPrice: '180.00',
        newPrice: '158.00',
        quantity: 10,
        rating: 5,
        description:
            'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        evaluation: 15
    },
    {
        _id: '3fa0194f-bfc5-11ef-ae33-d8f3bc341a96',
        title: 'Havic HV G-92 Gamepad',
        image: 'https://firebasestorage.googleapis.com/v0/b/exclusive-shop-c0f66.appspot.com/o/Gamepad%2F2023120115561510ba16954.png?alt=media&token=5572e4d7-9865-4794-b5dd-e389fd77e264',
        discount: '-18%',
        brand: 'Samsung',
        oldPrice: '180.00',
        newPrice: '158.00',
        quantity: 10,
        rating: 5,
        description:
            'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        evaluation: 15
    }
]
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
