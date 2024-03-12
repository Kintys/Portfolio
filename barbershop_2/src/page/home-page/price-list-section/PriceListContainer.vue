<template>
    <div class="container">
        <TitlePageComponents
            title="Our Price"
            subtitle="Subheading that reveals the details of the title and calls for the targeted action"
        />
        <div class="cards">
            <PriceListCards
                v-for="itemPrice in priceList"
                :key="itemPrice.imageCard"
                :price-list="getPriceList"
                :title-data="itemPrice"
            />
            {{ getPriceList }}
        </div>
        <v-checkbox label="Checkbox"></v-checkbox>
    </div>
</template>

<script setup>
import TitlePageComponents from "@/components/TitlePageComponents.vue";
import PriceListCards from "../price-list-section/PriceListCards.vue";
import { priceList } from "./settings.js";

import { useServiceList } from "@/stores/service";
const { getItemsList: getPriceList } = useServiceList();
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.container {
    @include adaptiveValue("padding-top", 240, 100);
}
.cards {
    @include gridCards(fit, toRem(220), toRem(280), toRem(20));
    @include adaptiveValue("padding-top", 60, 30);
    justify-content: center;
}
</style>
