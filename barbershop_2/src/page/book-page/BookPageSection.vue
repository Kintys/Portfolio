<template>
    <div class="container">
        <v-form ref="form" @submit.prevent="sendEmail">
            <form class="from-template" ref="formTemplate">
                <input type="text" name="user_name" :value="userName" />
                <input type="email" name="user_email" :value="userEmail" />
                <input type="data" name="user_data" :value="fullDateView" />
                <input type="text" name="user_hour" :value="time?.HH" />
                <input type="text" name="user_minute" :value="time?.mm" />
            </form>
            <v-text-field
                variant="outlined"
                label="Your name"
                placeholder="Name"
                class="input"
                :rules="nameRules.nameRules"
                base-color="#000"
                clearable
                color="#000"
                v-model="userName"
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
                v-model="userEmail"
            ></v-text-field>
            <v-row justify="center">
                <v-date-picker
                    view-mode="month"
                    width="400"
                    v-model="userData"
                    hide-header="true"
                ></v-date-picker>
            </v-row>
            <VueTimepicker
                class="timepicker"
                v-model="time"
                hide-disabled-items
                format="HH:mm"
                :hour-range="[[9, 17]]"
                :minute-range="[0, 15, 30, 45]"
            />
        </v-form>
        <v-btn @click="sendEmail">book</v-btn>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDate } from "vuetify";
import emailjs from "@emailjs/browser";
import VueTimepicker from "vue3-timepicker";
// CSS

const time = ref(null);
const dateConstructor = useDate();
const userName = ref(null);
const userEmail = ref(null);
const userData = ref(null);
const form = ref(null);
const formTemplate = ref(null);
const fullDateView = computed(() => {
    return dateConstructor.format(userData.value, "fullDateWithWeekday");
});

const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRules = ref({
    nameRules: [(v) => !!v || "You must enter a first name."],
    emailRules: [
        (value) => {
            if (validRegex.test(value)) return true;
            return "Must be a valid e-mail!";
        },
    ],
});

async function sendEmail() {
    const { valid } = await form.value.validate();
    if (valid) createForm();
}

function createForm() {
    emailjs
        .sendForm("service_jk5a3z3", "template_uojhabm", formTemplate.value, {
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
@import "@/assets/style/lib/mixins";
.container {
    background: #fff;
    padding-top: 100px;
}
.from-template {
    display: none;
}
</style>
