<template>
    <v-menu class="user-profil" location="bottom center">
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" size="34">
                <v-avatar v-if="getUser.photoURL" :image="getUser.photoURL" size="34"> </v-avatar>
                <v-avatar v-else size="34">
                    <IconBase
                        class="icon icon-user"
                        icon-name="user"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        icon-color="transparent"
                        ><IconUser
                    /></IconBase>
                </v-avatar>
            </v-btn>
        </template>
        <v-list bg-color="#000" class="card" tile="false">
            <v-list-item>
                <v-btn class="btn" variant="text">
                    <router-link :to="{ name: 'account' }">My account</router-link></v-btn
                >
            </v-list-item>
            <v-list-item>
                <v-btn class="btn" @click="logOutUser" variant="text">Logout</v-btn>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import IconUser from '@/components/icons//iconsSrc/IconUser.vue'
const { logOut } = useAuthStore()
const { getUser } = storeToRefs(useAuthStore())
//===========================================
import { useRouter } from 'vue-router'
const router = useRouter()

function logOutUser() {
    logOut()
    router.go()
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
