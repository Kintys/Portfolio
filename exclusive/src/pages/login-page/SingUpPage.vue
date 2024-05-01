<template>
    <MainMasterPage>
        <section class="login">
            <div class="login__container">
                <v-img cover :src="loginPhoto" class="login__bg-img"></v-img>
                <div class="login__block">
                    <slot>
                        <SingUpForm :form-params="create" />
                    </slot>
                </div>
            </div>
        </section>
    </MainMasterPage>
</template>

<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import loginPhoto from '@/assets/loginPage/01.png'
import SingUpForm from '@/pages/login-page/SingUpForm.vue'
import { create } from '@/pages/login-page/setting.js'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';
.login {
    // .login__container

    &__container {
        @include adaptiveValue('padding-top', 122, 80);
        @include adaptiveValue('padding-bottom', 140, 50);
        display: grid;
        grid-template-columns: minmax(200px, 700px) auto;
        align-items: center;
        position: relative;
        @media (max-width: toEm($mobile)) {
            grid-template-columns: auto;
        }
    }

    &__bg-img {
        @media (min-width: toEm($mobile)) {
            transform: translate(-20.5%, 0);
        }
        @media (max-width: toEm($mobile)) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: rgba(128, 128, 128, 0.626);
            }
        }
    }
}
</style>
