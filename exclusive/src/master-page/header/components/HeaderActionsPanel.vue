<template>
    <div class="actions">
        <router-link :to="{ name: 'cart' }" class="icon icon-cart">
            <IconBase
                class="icon-cart__photo"
                icon-name="cart"
                viewBox="-3 -4 32 32"
                width="32"
                height="32"
                icon-color="transparent"
                ><IconCart />
            </IconBase>
            <span v-if="cartNumber" class="icon-cart__number">{{ cartNumber }}</span>
        </router-link>
        <section v-if="isAuthenticated" class="actions__profile">
            <IconBase
                class="icon icon-wish-list"
                icon-name="wish-list"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                icon-color="transparent"
                ><IconWishList
            /></IconBase>
            <UserProfil />
        </section>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconWishList from '@/components/icons/iconsSrc/IconWishList.vue'
import IconCart from '@/components/icons/iconsSrc/IconCart.vue'
import UserProfil from '@/master-page/header/components/UserProfil.vue'
// ===========================
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const { isAuthenticated } = storeToRefs(useAuthStore())

const { getCartProductList } = storeToRefs(useCartStore())
const cartNumber = computed(() => getCartProductList.value?.length)
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';

.actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: toRem(10);

    @include adaptiveValue('column-gap', 8, 2, 0, 1200, 768);
    &__profile {
        display: flex;
        align-items: center;
        column-gap: toRem(8);
    }
}
.icon {
    margin: 0 toRem(1);
}
.icon-cart {
    position: relative;

    // .icon-cart__photo

    &__photo {
    }

    // .icon-cart__number

    &__number {
        width: toRem(16);
        height: toRem(16);
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: toRem(10);
        color: white;
        z-index: 2;
        &::after {
            content: '';
            display: block;
            position: absolute;
            background-color: $secondColor;
            width: toRem(16);
            height: toRem(16);
            border-radius: 50%;
            z-index: -1;
        }
    }
}
</style>
