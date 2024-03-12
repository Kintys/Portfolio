<template>
    <div class="card">
        <v-img :src="getImageUrl(titleData.imageCard)" />
        <h6 class="title">{{ titleData.titleCard }}</h6>
        <ul class="list">
            <li
                class="item-list"
                v-for="service in priceList"
                :key="service.name"
            >
                <span class="item-title">{{ service.name }}</span>
                <span class="item-business-time"
                    >{{ service.businessTime }} min</span
                >
                <b class="item-price"> ${{ service.price }}</b>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    priceList: {
        type: Object,
        default: () => ({}),
    },
    titleData: {
        type: Object,
        default: () => ({}),
    },
});

const getImageUrl = (name) => {
    return new URL(`../../../assets/img/${name}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.card {
    font-family: Fira Sans;
    display: grid;
    grid-template-columns: toRem(280);
    grid-template-rows: repeat(3, auto);
    row-gap: toRem(20);
    max-height: toRem(579);
}
.title {
    font-size: toRem(30);
    font-weight: 500;
    line-height: 133%;
    color: rgb(239, 231, 226);
}
.item-list {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    column-gap: toRem(9);
    &:not(:last-child) {
        margin-bottom: toRem(10);
    }
}

.item-title {
    color: rgb(239, 231, 226);
    font-size: toRem(16);
    line-height: 175%;
}
.item-business-time {
    color: rgb(183, 170, 162);
    line-height: 175%;
}
.item-price {
    color: rgb(255, 255, 255);
    font-size: toRem(16);
    font-weight: 700;
    line-height: 150%;
}
</style>
