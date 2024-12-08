<template>
    <SingUpPage
        ><SingUpForm v-model:newEmail="email" v-model:newPass="password" :form-params="login">
            <template #login-actions>
                <div class="auth">
                    <div class="auth__actions">
                        <v-btn type="button" @click="loginWithEmail(email, password)" class="auth__button button-main">
                            {{ login.buttonLogin }}
                        </v-btn>
                        <a class="auth__link" href="#">{{ login.forgetPass }}</a>
                    </div>
                    <div class="auth__google">
                        <button
                            type="button"
                            @click="loginWithGooglePopUp"
                            class="auth__google-btn button-main button-main--trans"
                        >
                            <IconBase width="24" height="25" viewBox="0 0 24 25"><IconGoogle /></IconBase>
                            {{ login.buttonGoogle }}
                        </button>
                    </div>
                    <div class="auth__links">
                        <p>{{ login.createAcc }}</p>
                        <router-link :to="{ path: '/singUp' }" class="auth__create-link">{{ login.link }}</router-link>
                    </div>
                </div>
            </template>
        </SingUpForm>
    </SingUpPage>
    <SnackBar v-model:open="openSnackBar" />
</template>

<script setup>
import { ref } from 'vue'
import SingUpPage from '@/pages/login-page/SingUpPage.vue'
import SingUpForm from '@/pages/login-page/SingUpForm.vue'
import { login } from '@/pages/login-page/setting.js'

import { useAuthStore } from '@/stores/auth'
const { loginWithGoogleAccount, loginEmail } = useAuthStore()

//===========================================================
import { useRouter } from 'vue-router'
const router = useRouter()
function loginWithEmail(email, password) {
    loginEmail({
        email: email,
        password: password
    })
}

async function loginWithGooglePopUp() {
    await loginWithGoogleAccount()
        .then((answer) => {
            if (answer) {
                openSnackBar.value = true
                return
            }
        })
        .then(() => {
            router.back()
        })
}
const email = ref(null)
const password = ref(null)

//===========================================================
import IconBase from '@/components/icons/IconBase.vue'
import IconGoogle from '@/components/icons/iconsSrc/IconGoogle.vue'

//=====================================================================
import SnackBar from '@/components/SnackBar.vue'
const openSnackBar = ref(false)
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';

.auth {
    display: flex;
    flex-direction: column;
    row-gap: toRem(20);
    &__actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__google-btn {
        display: flex;
        width: 100%;
    }

    // .auth__link

    &__link {
        color: $secondColor;
        line-height: 150%; /* 150% */
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &__links {
        display: flex;
        line-height: 150%; /* 150% */
        column-gap: toRem(16);
        justify-content: center;
    }
    // .auth__link

    &__create-link {
        font-weight: 500;
        line-height: 150%; /* 150% */
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
