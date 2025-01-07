<template>
    <v-sheet class="d-flex flex-column">
        <v-snackbar :timeout="2000" color="#db4444" v-model="open" variant="flat" location="button right">
            <v-icon v-if="!error" icon="$success" color="green" size="30" />
            <v-icon v-else icon="$error" color="green" size="30" />
            <span class="text">{{ massage }}</span>
        </v-snackbar>
    </v-sheet>
</template>
<script setup>
const open = defineModel('open')
defineProps({
    massage: {
        type: String,
        default: 'Success'
    },
    error: {
        type: Boolean,
        default: false
    }
})
</script>
<style></style>
