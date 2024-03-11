<script setup>
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { useBarberList } from "@/stores/barbers";
const { loadItemsList: loadBarbersList } = useBarberList();
import { useServiceList } from "@/stores/service";
const { loadItemsList: loadServiceList } = useServiceList();

onBeforeMount(() => {
    loadBarbersList();
    loadServiceList();
});
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
