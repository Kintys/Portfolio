<template>
    <v-form ref="form" class="form__box" @submit.prevent="sendEmail">
        <div class="form__input-group">
            <v-text-field v-model="name" :rules="formRules.nameRules" required class="form__input input-contact">
                <template v-slot:label>
                    <span class="input-contact__label">Your Name</span
                    ><span class="input-contact__required-star">*</span>
                </template>
            </v-text-field>
            <v-text-field v-model="email" :rules="formRules.emailRules" required class="form__input input-contact"
                ><template v-slot:label>
                    <span class="input-contact__label">Your Email</span
                    ><span class="input-contact__required-star">*</span>
                </template>
            </v-text-field>
            <v-text-field v-model="phone" :rules="formRules.phoneRules" required class="form__input input-contact"
                ><template v-slot:label>
                    <span class="input-contact__label">Your Phone</span
                    ><span class="input-contact__required-star">*</span>
                </template>
            </v-text-field>
        </div>
        <div class="form__massage-field">
            <v-textarea
                v-model="message"
                autocomplete="email"
                label="Your Massage"
                :height="200"
                :rules="formRules.messageRules"
                auto-grow
                rows="9"
            ></v-textarea>
        </div>
        <v-btn :loading="loading" @click.prevent="sendEmail" class="form__button button-main">Send Massage</v-btn>
    </v-form>
    <SnackBar v-model:open="openSnackBar" />
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'
import SnackBar from '@/components/SnackBar.vue'
const openSnackBar = ref(false)

//============================================
const form = ref(null)
const name = ref(null)
const email = ref(null)
const phone = ref(null)
const message = ref(null)
const loading = ref(false)
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const formRules = ref({
    nameRules: [(v) => !!v || 'Required.'],
    phoneRules: [
        (value) => {
            if (value?.length <= 9) return true
            return 'Phone number needs to be at least 9 digits!'
        }
    ],
    emailRules: [
        (value) => {
            if (validRegex.test(value)) return true
            return 'Must be a valid e-mail!'
        }
    ],
    messageRules: [(v) => !!v || 'Not be empty.']
})

async function sendEmail() {
    const { valid } = await form.value.validate()
    if (valid) createForm()
}

function createForm() {
    loading.value = true
    emailjs
        .send(
            'service_me1awkf',
            'template_14by1vq',
            {
                userName: name.value,
                userEmail: email.value,
                userPhone: phone.value,
                userMessage: message.value
            },
            '5E06cvOzNp9N1SFkH'
        )
        .then(
            (result) => {
                loading.value = false
                openSnackBar.value = true
                console.log('SUCCESS!', result.text)
            },
            (error) => {
                loading.value = false
                console.log('FAILED...', error.text)
            }
        )
}
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
.input-contact {
    // .input-contact__label

    &__label {
    }

    // .input-contact__required-star

    &__required-star {
        padding-left: toRem(3);
        color: #db4444;
    }
}
</style>
