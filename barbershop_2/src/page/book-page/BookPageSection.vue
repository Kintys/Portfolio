<template>
    <div data-lp class="container popup">
        <button type="button" class="close-pupop" @click="activeBookMenu">
            <v-icon icon="mdi-close" />
        </button>
        <v-autocomplete
            clearable
            label="Barber"
            :items="getBarberName"
            variant="outlined"
            base-color="#fff"
            color="#fff"
            v-model="chooseBarber"
        ></v-autocomplete>
        <v-autocomplete
            clearable
            label="coiffure"
            :items="getServiceTitle"
            base-color="#fff"
            color="#fff"
            variant="outlined"
            v-model="chooseService"
        ></v-autocomplete>
        <v-form class="form" ref="form" @submit.prevent="sendEmail">
            <form class="from-template" ref="formTemplate">
                <input type="text" name="user_name" :value="userName" />
                <input type="email" name="user_email" :value="userEmail" />
                <input type="data" name="user_data" :value="fullDateView" />
                <input type="text" name="user_hour" :value="time?.HH" />
                <input type="text" name="user_minute" :value="time?.mm" />
                <input type="text" name="barber_name" :value="chooseBarber" />
                <input
                    type="text"
                    name="service_name"
                    :value="getChooseService?.name"
                />
                <input
                    type="number"
                    name="service_cost"
                    :value="getChooseService?.price"
                />
            </form>
            <v-text-field
                variant="outlined"
                label="Your name"
                placeholder="Name"
                class="input"
                :rules="nameRules.nameRules"
                base-color="#fff"
                clearable
                color="#fff"
                v-model="userName"
            ></v-text-field>
            <v-text-field
                variant="outlined"
                base-color="#fff"
                color="#fff"
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
                    bg-color="rgb(37, 29, 26)"
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
            <v-btn @click="sendEmail" class="button-main">book</v-btn>
        </v-form>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDate } from "vuetify";
import emailjs from "@emailjs/browser";
import VueTimepicker from "vue3-timepicker";

import { storeToRefs } from "pinia";
import { useBarberList } from "@/stores/barbers.js";
const { getItemsList: getBarberList } = storeToRefs(useBarberList());
const getBarberName = computed(() =>
    getBarberList.value.map((name) => name.name)
);

import { useServiceList } from "@/stores/service";
const { getItemsList: getServiceList } = storeToRefs(useServiceList());

const getServiceTitle = computed(() =>
    getServiceList.value.map((service) => service.name)
);

const getChooseService = computed(() => {
    const newArr = getServiceList.value.filter(
        (service) => service.name === chooseService.value
    );
    return newArr[0];
});

import { bookMenu } from "@/helpersFunc/bookMenu";
const { activeBookMenu } = bookMenu();
// CSS
const dateConstructor = useDate();
const time = ref(null);
const userName = ref(null);
const userEmail = ref(null);
const userData = ref(null);
const form = ref(null);
const formTemplate = ref(null);
const chooseBarber = ref(null);
const chooseService = ref(null);
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
// const popup = ref(null);
// const body = ref(document.querySelector("body"));

// const bodyUnlock = computed(() => {
//     if (!showMenu) {
//         setTimeout(() => {
//             body.value.style.paddingRight = "0px";
//             popup.value.style.paddingRight = "0px";
//             // document.documentElement.classList.remove("lock");
//         }, 500);
//     }
// });
// const bodyLock = computed(() => {
//     if (showMenu.value) {
//         popup.value.style.paddingRight =
//             window.innerWidth -
//             document.querySelector(".wrapper").offsetWidth +
//             "px";
//         body.value.style.paddingRight =
//             window.innerWidth -
//             document.querySelector(".wrapper").offsetWidth +
//             "px";
//     }
// });
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
@import "@/assets/style/lib/button";
.container {
    position: fixed;
    transition: right 0.3s;
    z-index: 100;
    right: -200%;
    padding: toRem(50) toRem(30) toRem(30) toRem(30);
    background-color: rgb(37, 29, 26);
    height: 100%;
    overflow: auto;
    &::before {
        width: 100vw;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(37, 29, 26, 0.093);
    }
}
.form {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
}
.from-template {
    display: none;
}
.close-pupop {
    font-size: toRem(20);
    color: white;
    position: absolute;
    right: 5%;
    top: 2%;
    &:not(:last-child) {
        margin-bottom: toRem(20);
    }
}
</style>
