<template>
    <v-sheet class="d-flex flex-column">
        <v-snackbar :timeout="2000" color="#db4444" v-model="open" variant="flat" location="button right">
            <v-icon icon="$success" color="green" size="30" /><span class="text">Success</span>
        </v-snackbar>
    </v-sheet>
</template>
<script setup>
const open = defineModel('open')
</script>
<style></style>
