<template>
    <v-form ref="form" class="form__box">
        <div class="form__input-group">
            <v-text-field v-model="name" label="Name" required> </v-text-field>
            <v-text-field v-model="name" label="Name" required> </v-text-field>
            <v-text-field v-model="name" label="Name" required> </v-text-field>
        </div>
        <div class="form__massage-field">
            <v-textarea autocomplete="email" label="Email" :height="200" auto-grow></v-textarea>
        </div>
        <button class="form__button button-main">Send Massage</button>
    </v-form>
</template>

<script setup>
import { ref } from 'vue'
const form = ref(null)
const name = ref(null)
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/button';
.form {
    // .form__box

    &__box {
        padding: toRem(40) toRem(31);
        box-shadow: 0px toRem(1) toRem(13) 0px rgba(0, 0, 0, 0.05);
        display: grid;
        grid-template-rows: auto 1fr auto;
    }

    // .form__input-group

    &__input-group {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: toRem(16);
    }

    // .form__massage-field

    &__massage-field {
    }

    // .form__button

    &__button {
        justify-self: end;
    }
}
</style>
