<template>
    <form class="send-form">
        <div class="send-form-field">
            <v-text-field
                variant="outlined"
                :rules="rules"
                label="Your phone"
                placeholder="+1(__)___-__-__"
                class="input"
                hide-details="auto"
                clearable
                max-width="320"
                base-color="#000"
                color="#000"
            ></v-text-field>
            <v-text-field
                variant="outlined"
                base-color="#000"
                color="#000"
                :rules="rules"
                label="Your email"
                placeholder="Email"
                class="input"
                hide-details="auto"
                clearable
            ></v-text-field>
            <v-btn class="button-main">Send email</v-btn>
        </div>
        <v-checkbox v-model="checkbox" class="checkbox" :focused="focused" color="#000">
            <template v-slot:label>
                <div class="checkbox-text">
                    By clicking on the button,you agree to the
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }">
                            <a target="_blank" href="#" v-bind="props" @click.stop class="personal-rules">
                                terms of processing personal data
                            </a>
                        </template>
                        Opens in new window
                    </v-tooltip>
                </div>
            </template>
        </v-checkbox>
    </form>
</template>

<script setup>
import { ref } from 'vue'
const checkbox = ref(false)
const focused = ref(true)
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/button';
.send-form {
    display: grid;
    grid-template-rows: repeat(2, auto);
    @include adaptiveValue('row-gap', 25, 20);
}
.send-form-field {
    display: flex;
    gap: toRem(20);
}
.input {
    color: rgb(255, 255, 255);
}
.button-main {
    background: #000;
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
    // display: flex;
}
.checkbox-text {
    color: rgb(239, 231, 226);
    font-family: Fira Sans;
    font-size: toRem(13);
    line-height: 134.09%;
}
.personal-rules {
}
</style>
