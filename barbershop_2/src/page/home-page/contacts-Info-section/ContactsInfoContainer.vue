<template>
    <div class="box">
        <ContactInfoForm />
        <GoogleMap :api-key="mapsKey" :center="center" :zoom="17" class="map">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script setup>
const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
import { GoogleMap, Marker } from "vue3-google-map";
const center = { lat: 40.76236635022632, lng: -73.98667037480803 };
import ContactInfoForm from "@/page/home-page/contacts-Info-section/ContactInfoForm.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.box {
    position: relative;
    min-height: toRem(650);
    @media (max-width: em(1070)) {
        display: grid;
        justify-items: center;
    }
}
.map {
    width: 100%;
    height: toRem(650);
    @media (min-width: em(1070)) {
        position: absolute;
        top: -3%;
        left: 0;
    }
}
</style>
