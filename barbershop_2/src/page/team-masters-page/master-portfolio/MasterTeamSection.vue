<template>
    <section class="container">
        <MasterCards
            v-for="master in masterData"
            :profile="master.description"
            :master-images-portfolio="master.portfolio"
            :key="master.description.name"
        />
    </section>
</template>

<script setup>
import MasterCards from "./MasterCards";
import { masterData } from "./settings";
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.container {
    @include adaptiveValue("padding-top", 120, 50);
    display: grid;
    @include adaptiveValue("row-gap", 90, 30);
}
</style>
