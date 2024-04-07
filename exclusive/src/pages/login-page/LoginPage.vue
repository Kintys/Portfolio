<template>
    <SingUpPage
        ><SingUpForm v-model:newEmail="email" v-model:newPass="password" :form-params="login">
            <template #login-actions>
                <div class="auth">
                    <div class="auth__actions">
                        <button
                            type="button"
                            @click="loginWithEmailAndPassword(email, password)"
                            class="auth__button button-main"
                        >
                            {{ login.buttonLogin }}
                        </button>
                        <a class="auth__link" href="#">{{ login.forgetPass }}</a>
                    </div>
                </div>
            </template>
        </SingUpForm>
    </SingUpPage>
</template>

<script setup>
import { ref } from 'vue'
import SingUpPage from '@/pages/login-page/SingUpPage.vue'
import SingUpForm from '@/pages/login-page/SingUpForm.vue'
import { login } from '@/pages/login-page/setting.js'
const email = ref(null)
const password = ref(null)
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';

.auth {
    &__actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // .auth__button

    &__button {
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
}
</style>
