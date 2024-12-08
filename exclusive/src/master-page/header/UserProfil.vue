<template>
    <v-menu class="user-profil" location="bottom center">
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" size="34">
                <v-avatar v-if="!getCurrentUser.avatar" size="34" color="secondary">
                    {{ userAvatar }}
                </v-avatar>
                <v-avatar v-else :image="getCurrentUser.avatar" size="34"> </v-avatar>
            </v-btn>
        </template>
        <v-list bg-color="#000" class="card" tile="false">
            <!-- <v-list-item>
                <v-btn class="btn" variant="text">
                    <router-link :to="{ name: 'account' }">My account</router-link></v-btn
                >
            </v-list-item> -->
            <v-list-item>
                <v-btn class="btn" @click="logOutUser" variant="text">Logout</v-btn>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/users'
import { useAuthStore } from '@/stores/auth'

//===========================================

import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()

//===========================================================
const { getCurrentUser } = storeToRefs(useUsersStore())
const { logOut } = useAuthStore()

const userAvatar = computed(
    () => getCurrentUser.value.username[0].toUpperCase() || getCurrentUser.value.email[0].toUpperCase()
)

function logOutUser() {
    logOut()
    router.push({ name: 'login' })
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';
.user-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card {
    top: toRem(5);
    text-align: center;
    padding: 0;
}
.btn {
    font-family: $poppinsFont;
    font-weight: 400;
    @include adaptiveValue('font-size', 16, 14);
    transition: all 0.3s;
    &:hover {
        background-color: $secondColor;
    }
}
</style>
