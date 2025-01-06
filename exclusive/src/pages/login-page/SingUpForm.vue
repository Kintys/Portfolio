<template>
    <form class="login-form">
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
                    label="Email"
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
                    <v-btn
                        type="button"
                        @click="singUpWithEmail(name, email, password)"
                        :disabled="!isValidForm"
                        class="auth__button button-main"
                    >
                        {{ formParams.buttonCreate }}
                    </v-btn>
                </div>
                <div class="auth__links">
                    <p>{{ formParams.hasAcc }}</p>
                    <router-link :to="{ name: 'login' }" class="auth__link">{{ formParams.link }}</router-link>
                </div>
            </div>
        </slot>
        <SnackBar v-model:open="openSnackBar" />
        <AgreementsDialog v-model:open="openAgreementsWindows" v-model:evidence="dialogAnswer" />
    </form>
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
const { signInWithEmailAndPassword } = useAuthStore()

const name = ref(null)
const email = ref(null)
const password = ref(null)

watch([email, password], ([new_email, new_password]) => {
    emit('update:newEmail', new_email)
    emit('update:newPass', new_password)
})

const isValidForm = computed(() => name.value && email.value && password.value)

async function singUpWithEmail(name, email, password) {
    if (!isValidForm.value) return
    signInWithEmailAndPassword({
        username: name,
        email: email,
        password: password
    }).then(() => {
        openSnackBar.value = true
        router.push('/')
        return
    })
}

//=====================================================================
import SnackBar from '@/components/SnackBar.vue'
const openSnackBar = ref(false)

//=====================================================================
import AgreementsDialog from '@/pages/login-page/AgreementsDialog.vue'
const openAgreementsWindows = ref(false)
const dialogAnswer = ref(null)

//=====================================================================
</script>

<style lang="scss" scoped>
@import '@/style/lib/button';

.login-form {
    // .login-form__title
    color: $mainColor;
    @media (min-width: toEm($mobile)) {
        padding-right: toRem(30);
    }

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
