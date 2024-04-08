<template>
    <v-sheet class="d-flex flex-column">
        <v-snackbar :timeout="2000" color="#db4444" v-model="open" variant="flat" location="button right">
            <v-icon color="white" :icon="$mdiCheckCircle" /> Snackbar with <strong>outlined</strong> variant.
        </v-snackbar>
        <button @click="onClick">click</button>
    </v-sheet>
</template>
<script setup>
import { ref } from 'vue'
const open = ref(false)

function onClick() {
    open.value = !open.value
}
</script>
<style></style>
