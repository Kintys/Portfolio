<template>
    <form class="subscribe-email__form" action="#">
        <input type="email" placeholder="Enter your email" class="subscribe-email__email-input" />
        <IconBase icon-name="send-arrow" width="24" height="24" view-box="0 0 24 24" class="subscribe-email__icon"
            ><IconSendArrow
        /></IconBase>
    </form>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconSendArrow from '@/components/icons/iconsSrc/IconSendArrow.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.subscribe-email {
    // .subscribe-email__form

    &__form {
        position: relative;
        max-width: toRem(217);
    }

    // .subscribe-email__email-input

    &__email-input {
        width: 100%;
        color: white;
        padding: toRem(12) toRem(40) toRem(12) toRem(16);
        border-radius: toRem(4);
        outline: toRem(2) solid white;
        &:focus {
            outline: toRem(2) solid rgba(255, 255, 255, 0.288);
        }
    }

    // .subscribe-email__icon

    &__icon {
        position: absolute;
        top: 25%; /* 12/48 */
        right: 6.912442%; /* 15/217 */
        cursor: pointer;
        color: transparent;
    }
}
</style>
