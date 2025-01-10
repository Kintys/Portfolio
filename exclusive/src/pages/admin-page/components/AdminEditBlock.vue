<template>
    <div class="editor-product">
        <header class="editor-product__header header-editor">
            <h2 class="header-editor__title">Add New Product</h2>
        </header>
        <v-form class="editor-product__body product-editor" ref="form">
            <div class="product-editor__wrapper">
                <section class="product-editor__info">
                    <header class="product-editor__header">
                        <h4 class="product-editor__title">Basic</h4>
                    </header>
                    <div class="product-editor__body input-product">
                        <v-text-field
                            v-model="inputValues.title"
                            required
                            class="input-product__input title-input"
                            label="Product title"
                            variant="outlined"
                            :rules="[
                                (v) => !!v || 'Item is required',
                                (v) => (v && v.length >= 2) || 'Name must be 2 characters or less'
                            ]"
                        >
                        </v-text-field>
                        <div class="input-product__selects">
                            <v-select
                                label="Brands"
                                :items="selectItems"
                                :return-object="true"
                                hide-details="auto"
                                v-model="inputValues.brands_id"
                                variant="outlined"
                                class="input-product__select"
                                :rules="[(v) => !!v || 'Item is required']"
                            ></v-select>
                            <v-select
                                v-if="!isProduct"
                                label="Category"
                                :items="categoryProps"
                                :return-object="true"
                                hide-details="auto"
                                v-model="category"
                                variant="outlined"
                                class="input-product__select"
                                :rules="[(v) => !!v || 'Item is required']"
                            ></v-select>
                        </div>
                        <v-textarea
                            v-model="inputValues.description"
                            autocomplete="email"
                            label="Full description"
                            :height="200"
                            auto-grow
                            rows="9"
                            variant="outlined"
                            :rules="[
                                (v) => !!v || 'Item is required',
                                (v) => (v && v.length >= 10) || 'Minimum length is 10 characters'
                            ]"
                        ></v-textarea>
                        <v-text-field
                            v-model="inputValues.quantity"
                            required
                            class="input-product__input new-price-input"
                            label="Quantity"
                            variant="outlined"
                            :rules="[
                                (v) => !!v || 'Item is required',
                                (v) => !isNaN(Number(v)) || 'Item must be number'
                            ]"
                        >
                        </v-text-field>
                    </div>
                </section>
                <section class="product-editor__info input-product">
                    <div class="input-product__prices">
                        <v-text-field
                            v-model="inputValues.oldPrice"
                            required
                            class="input-product__input price-input"
                            label="Old price"
                            variant="outlined"
                            :rules="[(v) => !isNaN(Number(v)) || 'Item must be number']"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="inputValues.newPrice"
                            required
                            class="input-product__input price-input"
                            label="New price"
                            variant="outlined"
                            :rules="[
                                (v) => !!v || 'Item is required',
                                (v) => !isNaN(Number(v)) || 'Item must be number'
                            ]"
                        >
                        </v-text-field>
                    </div>
                </section>
                <section class="product-editor__info input-product">
                    <div class="input-product__rating">
                        <v-select
                            label="Rating"
                            :items="[1, 2, 3, 4, 5]"
                            v-model="inputValues.rating"
                            variant="outlined"
                            class="input-product__select"
                            hide-details="auto"
                            :rules="[(v) => !!v || 'Item is required']"
                        >
                            ></v-select
                        >
                        <v-text-field
                            v-model="inputValues.evaluation"
                            required
                            class="input-product__input evaluation-input"
                            label="Evaluation"
                            variant="outlined"
                        >
                        </v-text-field>
                    </div>
                </section>
            </div>
            <aside class="product-editor__file-rider file-editor">
                <h4 class="file-editor__title">Media</h4>
                <div class="file-editor__upload">
                    <v-file-upload
                        accept="image/png, image/jpeg, image/bmp"
                        density="compact"
                        variant="compact"
                        counter
                        title=" "
                        :clearable="true"
                        :multiple="true"
                        width="100%"
                        height="250"
                        hide-details="auto"
                        v-model="files"
                        :rules="[
                            (v) => !!v || 'Item is required',
                            (v) => (v && v.length === 4) || 'Image must be 5 characters'
                        ]"
                    >
                        <template #icon>
                            <div class="file-editor__icon">
                                <IconBase width="200" height="300" view-box="0 0 512 512">
                                    <IconUpload />
                                </IconBase>
                            </div>
                        </template>
                    </v-file-upload>
                    <small class="error-massage" :class="{ 'error-massage__show': errorMessages }">{{
                        errorMessages
                    }}</small>
                </div>
            </aside>
            <v-btn color="success" @click="validate()"> {{ buttonText }}</v-btn>
        </v-form>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect, onUnmounted, onMounted } from 'vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconUpload from '@/components/icons/iconsSrc/IconUpload.vue'

import { useFiltersStore } from '@/stores/filters'
import { storeToRefs } from 'pinia'

const { getBrandsList } = storeToRefs(useFiltersStore())

import { useAdminStore } from '@/stores/admin.js'

import { useRouter } from 'vue-router'
const router = useRouter()

const { clearProductItem, sendProduct } = useAdminStore()
const { getProductItem } = storeToRefs(useAdminStore())

const category = ref(null)
const errorMessages = ref('')
const files = ref([])
const isProduct = ref(null)
const form = ref('')

const inputValues = ref({
    title: '',
    quantity: null,
    description: '',
    oldPrice: null,
    newPrice: null,
    evaluation: null,
    rating: null,
    brands_id: null
})
const categoryProps = ['gamepads', 'pcs', 'laptops', 'headphones']

const buttonText = computed(() => (isProduct.value ? 'Update' : 'Add new'))
const selectItems = computed(
    () =>
        getBrandsList.value.map((brand) => {
            return {
                title: brand.name,
                value: brand._id
            }
        }) ?? []
)

function checkFile() {
    if (!files.value || files.value.length === 0) {
        errorMessages.value = 'Item is required'
        return false
    }

    if (files.value.length < 4) {
        errorMessages.value = 'You must upload at least 4 images'
        return false
    }

    errorMessages.value = ''
    return true
}

async function validate() {
    const validFileUpload = checkFile()
    const { valid } = await form.value.validate()
    if (valid && validFileUpload) await sendForm()
}

async function sendForm() {
    try {
        let formData = new FormData()
        formData.append('data', JSON.stringify({ ...inputValues.value, brands_id: inputValues.value.brands_id.value }))
        formData.append('category', JSON.stringify(category.value))
        files.value.forEach((file) => formData.append('images', file))

        const result = await sendProduct(formData)
        if (result) router.back()
    } catch (err) {
        console.error(err)
    }
}

watchEffect(() => {
    if (files.value) errorMessages.value = ''
})
onMounted(async () => {
    isProduct.value = await getProductItem.value
    if (isProduct.value) {
        const { title, quantity, description, oldPrice, newPrice, evaluation, rating, brands_id, images } =
            isProduct.value
        inputValues.value = { title, quantity, description, oldPrice, newPrice, evaluation, rating, brands_id }
        files.value = images
    }
})
onUnmounted(async () => {
    await clearProductItem()
    inputValues.value = {
        title: '',
        quantity: null,
        description: '',
        oldPrice: null,
        newPrice: null,
        evaluation: null,
        rating: null,
        brands_id: null,
        images: []
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';
@import '@/style/lib/adaptive.scss';
.editor-product {
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(toRem(420), toRem(1200));
    // .editor-product__header

    &__header {
    }

    // .editor-product__body

    &__body {
    }
}
.header-editor {
    display: flex;
    justify-self: center;
    max-width: toRem(800);
    width: 100%;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
        margin-bottom: toRem(20);
    }

    // .header-editor__title

    &__title {
        color: #495057;
        font-weight: 600;
        line-height: 1.5;
        font-size: toRem(30);
    }

    // .header-editor__actions

    &__actions {
    }

    // .header-editor__btn

    &__btn {
    }
}
.product-editor {
    display: grid;
    grid-template-columns: toRem(600) toRem(350);
    gap: toRem(30);
    &__wrapper {
        display: grid;
        gap: toRem(30);
    }

    // .product-editor__info

    &__info {
        padding: toRem(20.8);
        border-radius: toRem(4);
        box-shadow: 0 0.0625rem 0.8125rem 0 rgba(0, 0, 0, 0.05);
    }

    // .product-editor__header

    &__header {
        padding: toRem(20.8) toRem(20.8);
        border-bottom: toRem(1) solid rgba(222, 226, 230, 0.7);
    }

    // .product-editor__title

    &__title {
        color: #495057;
        font-weight: 600;
        line-height: 1.5;
        font-size: toRem(18);
    }

    // .product-editor__body

    &__body {
    }

    // .product-editor__label

    &__label {
    }

    // .input-product__input

    &__input {
    }
}
.input-editor {
    display: flex;
    flex-direction: column;
    input {
        background-color: #f4f5f9;
        border: 2px solid #f4f5f9;
        font-size: 13px;
        -webkit-box-shadow: none;
        box-shadow: none;
        padding-left: 20px;
        color: #4f5d77;
        width: 100%;
        border-radius: 20px;
        height: 45px;
    }
}

.file-editor {
    border-radius: toRem(4);

    box-shadow: 0 0.0625rem 0.8125rem 0 rgba(0, 0, 0, 0.05);

    // .file-editor__title

    &__title {
        color: #495057;
        font-weight: 600;
        line-height: 1.5;
        font-size: toRem(18);
        padding: toRem(20.8) toRem(20.8);
        border-bottom: toRem(1) solid rgba(222, 226, 230, 0.7);
    }
    // .file-editor__icon

    &__icon {
        overflow: hidden;
    }
}

.input-product {
    // .input-product__input
    display: grid;
    gap: toRem(10);
    &__input {
    }
    &__prices {
        display: flex;
        gap: toRem(20);
        justify-content: space-between;
    }
    // .input-product__selects

    &__selects {
        display: flex;
        gap: toRem(10);
        justify-content: space-between;
        min-height: toRem(78);
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }
    &__rating {
        display: flex;
        justify-content: space-between;
        gap: toRem(10);
    }
    // .input-product__select

    &__select {
        max-width: toRem(200);
    }
}
.evaluation-input {
    :deep() {
        .v-field__outline {
            height: toRem(67);
        }
    }
}
.price-input {
    max-width: toRem(200);
}

.error-massage {
    padding-left: toRem(15);
    color: #b40d2b;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
    &__show {
        bottom: 0;
        opacity: 1;
        visibility: visible;
    }
}
</style>
