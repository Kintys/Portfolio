<template>
    <v-form class="send-form" ref="form" @submit.prevent="sendEmail">
        <form class="form" ref="formTemplate">
            <input type="phone" name="user_phone" :value="phone" />
            <input type="email" name="user_email" :value="email" />
        </form>
        <div class="send-form-field">
            <v-text-field
                variant="outlined"
                label="Your phone"
                placeholder="+1(__)___-__-__"
                class="input"
                :rules="nameRules.phoneRules"
                base-color="#000"
                clearable
                color="#000"
                maxlength="10"
                v-model="phone"
                :value="getDividedPhoneNumber"
                @click:clear="onClear"
                name="user_phone"
            ></v-text-field>
            <v-text-field
                variant="outlined"
                base-color="#000"
                color="#000"
                label="Your email"
                :rules="nameRules.emailRules"
                placeholder="Email"
                class="input"
                hide-details="auto"
                clearable
                v-model="email"
                name="user_email"
            ></v-text-field>
            <v-btn class="button-main" @click.prevent="sendEmail"
                >Send email</v-btn
            >
        </div>
        <v-checkbox
            v-model="checkbox"
            class="checkbox"
            color="#000"
            :rules="nameRules.checkboxRules"
            required
            name="user_agree"
        >
            <template v-slot:label>
                <div class="checkbox-text">
                    By clicking on the button,you agree to the
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }">
                            <a
                                target="_blank"
                                href="#"
                                v-bind="props"
                                @click.stop
                                class="personal-rules"
                            >
                                terms of processing personal data
                            </a>
                        </template>
                        Opens in new window
                    </v-tooltip>
                </div>
            </template>
        </v-checkbox>
    </v-form>
</template>

<script setup>
import { ref, computed } from "vue";
import emailjs from "@emailjs/browser";
const checkbox = ref(false);
const phone = ref(null);
const form = ref(null);
const formTemplate = ref(null);
const email = ref(null);
const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRules = ref({
    phoneRules: [
        (value) => {
            if (value?.length <= 10) return true;
            return "Phone number needs to be at least 10 digits!";
        },
    ],
    emailRules: [
        (value) => {
            if (validRegex.test(value)) return true;
            return "Must be a valid e-mail!";
        },
    ],
    checkboxRules: [(v) => !!v || "You must agree to continue!"],
});

const getDividedPhoneNumber = computed(() =>
    (phone.value ?? "").replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})/g,
        "+1($1)$2-$3-$4"
    )
);

function onClear() {
    phone.value = null;
}

async function sendEmail() {
    const { valid } = await form.value.validate();
    if (valid) createForm();
}

function createForm() {
    emailjs
        .sendForm("service_jk5a3z3", "template_b0r95zp", formTemplate.value, {
            publicKey: "IgXLm12XkrQHhfgEt",
        })
        .then(
            () => {
                console.log("SUCCESS!");
            },
            (error) => {
                console.log("FAILED...", error.text);
            }
        );
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/button";
@import "@/assets/style/lib/mixins";

.send-form {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 1fr;
    @include adaptiveValue("row-gap", 25, 20);
}
.send-form-field {
    display: grid;
    // display: flex;
    grid-template-columns: 1fr 1fr auto;
    @media (max-width: em(1199)) {
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
    @media (max-width: em(920)) {
        grid-template-columns: 1fr;
    }
    gap: toRem(30);
}
.form {
    display: none;
}
.input {
    color: rgb(255, 255, 255);
    width: 100%;
    .input__control {
        display: block;
    }
}
.button-main {
    background: #000;
    @media ((min-width: em(920)) and (max-width: em(1199))) {
        grid-column-start: -3;
        grid-column-end: -1;
        justify-self: center;
    }

    @media (any-hover: hover) {
        &:hover {
            background: white;
            color: #000;
            transition: all 0.5s;
        }
    }
}
.checkbox {
    justify-self: center;
    padding: toRem(0) 5%;
}
.checkbox-text {
    color: rgb(239, 231, 226);
    font-family: Fira Sans;
    font-size: toRem(13);
    line-height: 134.09%;
}
</style>
