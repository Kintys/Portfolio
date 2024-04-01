<template>
    <div class="header__actions">
        <IconBase icon-name="wish-list" viewBox="0 0 32 32" width="32" height="32" icon-color="transparent"
            ><IconWishList
        /></IconBase>
        <IconBase icon-name="cart" viewBox="0 0 24 24" width="24" height="24" icon-color="transparent"
            ><IconCart
        /></IconBase>
        <IconBase icon-name="user" viewBox="0 0 32 32" width="32" height="32" icon-color="transparent"
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

<style lang="scss" scoped></style>
