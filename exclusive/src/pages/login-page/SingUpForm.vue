<template>
    <div class="login-form">
        <h4 class="login-form__title">{{ formParams.title }}</h4>
        <p v-if="formParams.subtitle" class="login-form__subtitle">{{ formParams.subtitle }}</p>
        <slot name="login-inputs">
            <div class="login-form__forms">
                <v-text-field
                    v-if="formParams.inputName"
                    label="Name"
                    type="text"
                    hide-details="auto"
                    :rules="nameRules"
                    v-model="name"
                    class="login-form__input"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    label="Email or Phone Number"
                    hide-details="auto"
                    :rules="emailRules"
                    v-model="email"
                    class="login-form__input"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    :rules="[passwordRules.required, passwordRules.min]"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                    variant="underlined"
                    class="login-form__input"
                ></v-text-field>
            </div>
        </slot>
        <slot name="login-actions"
            ><div class="login-form__actions auth">
                <div class="auth__sing-up-btn">
                    <button
                        type="button"
                        @click="singUpWithEmail(email, password)"
                        class="auth__button button-main"
                        :disabled="!isValidForm"
                    >
                        {{ formParams.buttonCreate }}
                    </button>
                    <button
                        type="button"
                        @click="loginWithGoogleEmailPopup"
                        class="auth__button button-main button-main-trans"
                    >
                        <IconBase width="24" height="25" viewBox="0 0 24 25"><IconGoogle /></IconBase>
                        {{ formParams.buttonGoogle }}
                    </button>
                </div>
                <div class="auth__links">
                    <p>{{ formParams.hasAcc }}</p>
                    <router-link :to="{ name: 'login' }" class="auth__link">{{ formParams.link }}</router-link>
                </div>
            </div>
        </slot>
        <SnackBar v-model:open="openSnackBar" />
        <AgreementsDialog v-model:open="openAgreementsWindows" v-model:evidence="dialogAnswer" />
    </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue'
defineProps({
    formParams: {
        type: Object,
        required: true
    }
})
const emailRules = reactive([
    (value) => !!value || 'Required.',
    (value) => {
        const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'The email is incorrect. Please make sure all fields are filled in'
    }
])
const passwordRules = reactive([(value) => !!value || 'Required.', (v) => v.length >= 8 || 'Min 8 characters'])
const nameRules = reactive([(value) => !!value || 'Required.'])

const show1 = ref(false)

const emit = defineEmits(['update:newEmail', 'update:newPass'])

import { useRouter } from 'vue-router'
const router = useRouter()

import { useAuthStore } from '@/stores/auth'
const { loginWithGoogleAccount, signUpWithWithEmailAndPassword } = useAuthStore()
const name = ref(null)
const email = ref(null)
const password = ref(null)

watch([email, password], ([new_email, new_password]) => {
    emit('update:newEmail', new_email)
    emit('update:newPass', new_password)
})

const isValidForm = computed(() => name.value && email.value && password.value)

async function singUpWithEmail(email, password) {
    signUpWithWithEmailAndPassword(email, password).then(() => {
        openSnackBar.value = true
        setTimeout(() => {
            router.push({ name: 'login' })
        }, 3000)
    })
}
async function loginWithGoogleEmailPopup() {
    openAgreementsWindows.value = true
    await adoptingRules().then(() => {
        loginWithGoogleAccount().then(() => {
            openSnackBar.value = true
            setTimeout(() => {
                router.push({ name: 'name' })
            }, 3000)
        })
    })
} //=====================================================================
import IconBase from '@/components/icons/IconBase.vue'
import IconGoogle from '@/components/icons/iconsSrc/IconGoogle.vue'

//=====================================================================
import SnackBar from '@/components/SnackBar.vue'
const openSnackBar = ref(false)

//=====================================================================
import AgreementsDialog from '@/pages/login-page/AgreementsDialog.vue'
const openAgreementsWindows = ref(false)
const dialogAnswer = ref(null)
async function adoptingRules() {
    return dialogAnswer.value ? true : false
}
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';

.login-form {
    // .login-form__title
    color: $mainColor;

    &__title {
        font-family: $interFont;
        @include adaptiveValue('font-size', 36, 26);
        font-weight: 500;
        line-height: 83.333%; /* 83.333% */
        letter-spacing: toRem(1.44);
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .login-form__subtitle

    &__subtitle {
        font-size: toRem(16);
        line-height: 150%; /* 150% */
        &:not(:last-child) {
            margin-bottom: toRem(48);
        }
    }

    // .login-form__forms

    &__forms {
        display: flex;
        flex-direction: column;
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }

    // .login-form__input

    &__input {
        min-height: toRem(75);
    }

    // .login-form__actions

    &__actions {
    }
}
.auth {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    row-gap: toRem(16);
    justify-items: center;
    // .auth__button
    &__sing-up-btn {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: toRem(16);
    }
    &__button {
    }
    &__links {
        display: flex;
        line-height: 150%; /* 150% */
        column-gap: toRem(16);
    }
    // .auth__link

    &__link {
        font-weight: 500;
        line-height: 150%; /* 150% */
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    // .auth__google

    &__google {
    }

    // .auth__google-btn

    &__google-btn {
    }
}
.button-main {
}
</style>
