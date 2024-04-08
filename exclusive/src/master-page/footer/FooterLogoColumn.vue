<template>
    <div class="logo-block">
        <router-link :to="{ name: 'home' }" class="logo-block__logo logo">Exclusive</router-link>
        <div class="logo-block__block-subscribe">
            <div class="logo-block__subscribe">Subscribe</div>
            <div class="logo-block__send-email subscribe-email">
                <p class="subscribe-email__offer">Get 10% off your first order</p>
                <EmailFormSend />
            </div>
        </div>
    </div>
</template>

<script setup>
import EmailFormSend from '../footer/email-form/EmailFormSend.vue'
</script>

<style lang="scss" scoped>
@import '@/style/common/logo.scss';
@import '@/style/lib/variables';

.logo-block {
    display: grid;
    gap: toRem(24);
    // .logo-block__logo
    @media (max-width: toEm($mobile)) {
        grid-template-columns: auto;
        text-align: center;
        justify-items: center;
    }
    &__block-subscribe {
        display: flex;
        flex-direction: column;
        row-gap: toRem(24);
    }
}

.subscribe-email {
    // .subscribe-email__offer
    &__offer {
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }
}
</style>
