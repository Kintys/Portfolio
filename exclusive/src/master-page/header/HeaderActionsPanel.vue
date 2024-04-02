<template>
    <div class="actions">
        <IconBase
            class="icon icon-wish-list"
            icon-name="wish-list"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            icon-color="transparent"
            ><IconWishList
        /></IconBase>
        <IconBase
            class="icon icon-cart"
            icon-name="cart"
            viewBox="-3 -4 32 32"
            width="32"
            height="32"
            icon-color="transparent"
            ><IconCart
        /></IconBase>
        <IconBase
            class="icon icon-user"
            icon-name="user"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            icon-color="transparent"
            ><IconUser
        /></IconBase>
    </div>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconWishList from '@/components/icons/iconsSrc/IconWishList.vue'
import IconCart from '@/components/icons/iconsSrc/IconCart.vue'
import IconUser from '@/components/icons//iconsSrc/IconUser.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.actions {
    display: flex;
    justify-content: flex-end;
    @include adaptiveValue('column-gap', 8, 2, 0, 1200, 768);
}
.icon {
    margin: toRem(0) toRem(2);
}
.icon-wish-list {
}
.icon-cart {
}
.icon-user {
}
</style>
