<template>
    <div class="body">
        <v-img :src="getImageUrl(props.masterImage)" class="image" />
        <h4 class="title main-title">{{ props.masterTitle }}</h4>
        <div class="descriptions">
            <p class="text main-subtitle">{{ props.eduDescription }}</p>
            <p class="text main-subtitle">{{ props.specialDescription }}</p>
        </div>
    </div>
</template>

<script setup>
const getImageUrl = (name) => {
    return new URL(`../../../assets/img/${name}`, import.meta.url).href;
};
const props = defineProps({
    masterImage: {
        type: String,
        requite: true,
    },
    masterTitle: {
        type: String,
        default: "",
    },
    eduDescription: {
        type: String,
        default: "",
    },
    specialDescription: {
        type: String,
        default: "",
    },
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.body {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    background: rgb(37, 29, 26);
    width: 100%;
    align-items: center;
    gap: toRem(10);
    @media (max-width: em(950)) {
        grid-template-columns: auto;
        justify-items: center;
        text-align: center;
    }
}
.image {
    width: toRem(180);
    height: toRem(180);
    @media (min-width: em(950)) {
        @include adaptiveValue("margin-right", 50, 10);
    }
    @media (max-width: em(950)) {
        margin-top: toRem(10);
    }
}
.descriptions {
    display: grid;
    gap: toRem(20);
    @media (min-width: em(450)) {
        grid-template-columns: repeat(2, auto);
    }
    @include adaptiveValue("column-gap", 56, 10);
}
.text {
    max-width: toRem(245);
    @include adaptiveValue("font-size", 18, 12);
}
</style>
