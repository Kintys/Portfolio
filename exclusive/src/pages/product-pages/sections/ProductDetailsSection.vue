<template>
    <section class="product-details">
        <div class="product-details__container">
            <ProductImages class="product-details__images" />
            <ProductDescription class="product-details__description" />
        </div>
    </section>
</template>

<script setup>
import ProductImages from '@/pages/product-pages/component/ProductImages.vue'
import ProductDescription from '@/pages/product-pages/component/ProductDescription.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.product-details {
    // .product-details__container

    &__container {
        display: flex;
        justify-content: space-between;
        @include adaptiveValue('padding-top', 140, 80);
    }

    // .product-details__images

    &__images {
        flex: 0 1 58.333333%; /* 700/1200 */
        padding-right: toRem(5);
    }

    // .product-details__description

    &__description {
        flex: 0 1 33.333333%; /* 400/1200 */
    }
}
</style>
