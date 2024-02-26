<template>
    <GoogleMap
        api-key="YOUR_GOOGLE_MAPS_API_KEY"
        style="width: 100%; height: 650px"
        :center="center"
        :zoom="15"
    >
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
const center = { lat: 40.762341971385986, lng: -73.98668110364332 };
</script>

<style lang="scss" scoped></style>
