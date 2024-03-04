<template>
    <div class="container">
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
            name="user_Name"
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

        <v-row justify="center">
            <v-date-picker
                view-mode="month"
                width="400"
                v-model="data"
                hide-header="true"
            ></v-date-picker>
        </v-row>
        <VueTimepicker
            hide-disabled-items
            format="HH:mm "
            :hour-range="[[9, 17]]"
            :minute-range="[0, 15, 30, 45]"
        />
    </div>
    {{ fullDateView }}
</template>

<script setup>
import { ref, computed } from "vue";
import { useDate } from "vuetify";
import VueTimepicker from "vue3-timepicker";

// CSS
import "vue3-timepicker/dist/VueTimepicker.css";
const dateConstructor = useDate();
const userName = ref(null);
const email = ref(null);
const data = ref(null);
const fullDateView = computed(() => {
    return dateConstructor.format(data.value, "fullDateWithWeekday");
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
</script>

<style lang="scss" scoped>
.container {
    background: #fff;
    padding-top: 100px;
}
</style>
