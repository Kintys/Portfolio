<template>
    <div class="login-form">
        <h4 class="login-form__title">{{ formParams.title }}</h4>
        <p v-if="formParams.subtitle" class="login-form__subtitle">{{ formParams.subtitle }}</p>
        <slot name="login-inputs">
            <div class="login-form__forms">
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
                <div class="auth__sing-in">
                    <button
                        type="button"
                        @click="loginWithEmailAndPassword(email, password)"
                        class="auth__button button-main"
                    >
                        Log In
                    </button>
                    <a class="auth__link" href="#"> Forget Password?</a>
                </div>
            </div>
        </slot>
    </div>
    <!-- :disabled="!isValidForm" -->
</template>

<script setup>
import { ref, reactive } from 'vue'
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
const passwordRules = reactive([
    {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters'
    }
])
const show1 = ref(false)

// const emit = defineEmits(['update:newEmail', 'update:newPass'])

// import { useRouter } from 'vue-router'
// const router = useRouter()

// import { useAuthStore } from '@/stores/auth'
// const { signInWithWithEmailAndPassword, loginWithGoogleAccount } = useAuthStore()

// const email = ref(null)
// const password = ref(null)

// // watch([email, password], ([new_email, new_password]) => {
// //     emit('update:newEmail', new_email)
// //     emit('update:newPass', new_password)
// // })

// const isValidForm = computed(() => email.value && password.value)

// function loginWithEmailAndPassword(email, password) {
//     signInWithWithEmailAndPassword(email, password).then(() => {
//         router.push({
//             name: 'home'
//         })
//     })
// }
// function loginWithGoogleEmailPopup() {
//     loginWithGoogleAccount().then(() => {
//         router.push({
//             name: 'home'
//         })
//     })
// }
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
        min-height: toRem(147);
    }

    // .login-form__input

    &__input {
    }

    // .login-form__actions

    &__actions {
    }
}
.auth {
    // .auth__sing-in

    &__sing-in {
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
        font-size: toRem(16);
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
