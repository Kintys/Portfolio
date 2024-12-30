<template>
    <div class="editor-product">
        <header class="editor-product__header header-editor">
            <h2 class="header-editor__title">Add New Product</h2>
            <section class="header-editor__actions">
                <v-btn class="header-editor__btn button-main button-main--small">Save</v-btn>
            </section>
        </header>
        <div class="editor-product__body product-editor">
            <section class="product-editor__info">
                <header class="product-editor__header">
                    <h4 class="product-editor__title">Basic</h4>
                </header>
                <div class="product-editor__body input-product">
                    <v-text-field
                        v-model="input"
                        required
                        class="input-product__input title-input"
                        label="Product title"
                        variant="outlined"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="input"
                        required
                        class="input-product__input quantity-input"
                        label="Product title"
                        variant="outlined"
                    >
                    </v-text-field>
                    <v-textarea
                        v-model="input"
                        autocomplete="email"
                        label="Full description"
                        :height="200"
                        auto-grow
                        rows="9"
                        variant="outlined"
                    ></v-textarea>
                    <div class="input-product__prices">
                        <v-text-field
                            v-model="input"
                            required
                            class="input-product__input discount-input"
                            label="Product title"
                            variant="outlined"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="input"
                            required
                            class="input-product__input old-price-input"
                            label="Product title"
                            variant="outlined"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="input"
                            required
                            class="input-product__input new-price-input"
                            label="Product title"
                            variant="outlined"
                        >
                        </v-text-field>
                    </div>

                    <!-- <v-text-field
                        v-model="input"
                        required
                        class="input-product__input brand-input"
                        label="Product title"
                        variant="outlined"
                    >
                    </v-text-field> -->
                </div>
            </section>
            <aside class="product-editor__file-rider file-editor">
                <h4 class="file-editor__title">Media</h4>
            </aside>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')

const testData = {
    _id: 'fd4cd2c6-bb20-11ef-ac6c-d8f3bc34',
    title: 'CyberPowerPC Gamer Xtreme VR Gaming PC, Intel Core i5-13400F 2.5GHz, GeForce RTX 4060 8GB, 16GB DDR5, 1TB PCIe Gen4 SSD, WiFi Ready & Windows 11 Home (GXiVR8060A24)',
    images: [
        'https://m.media-amazon.com/images/I/71CE5f1By6L._AC_SX466_.jpg',
        'https://m.media-amazon.com/images/I/710V7zQzQLL._AC_SX466_.jpg',
        'https://m.media-amazon.com/images/I/71ieoJBWnUL._AC_SX466_.jpg',
        'https://m.media-amazon.com/images/I/81WjqVa7VSL._AC_SX466_.jpg'
    ],
    discount: '',
    brand: 'Asus',
    oldPrice: null,
    newPrice: '900.00',
    quantity: 10,
    rating: 2,
    description:
        'System: Intel Core i5-13400F 2.5GHz 6+4 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Windows 11 Home 64-bit\r\nGraphics: NVIDIA GeForce RTX 4060 8GB Graphics | 1x HDMI | 2x DisplayPort\r\nConnectivity: 5 x USB 3.1 | 4 x USB 2.0 | 1 x LAN 1G | WiFi 5 | Bluetooth 4.2 | 7.1 Channel Audio | Keyboard and Mouse\r\nTempered Side Case Panel | Custom RGB Lighting\r\n1 Year Parts & Labor Warranty, Free Lifetime Tech Support',
    evaluation: 24,
    colors: ['#A1887F', '#FF7043', '#E65100']
}
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
    grid-template-columns: toRem(600) toRem(250);
    gap: toRem(30);

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
}

.input-product {
    // .input-product__input

    &__input {
    }
    &__prices {
        display: flex;
        gap: toRem(20);
    }
}
.title-input {
}
.discount-input {
}
.old-price-input {
}
.new-price-input {
}
.quantity-input {
}
</style>
