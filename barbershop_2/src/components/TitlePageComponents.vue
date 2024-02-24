<template>
    <header class="main-headline">
        <h4 class="main-title">{{ title }}</h4>
        <p class="main-subtitle">
            {{ subtitle }}
        </p>
    </header>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.main-title {
    color: rgb(255, 255, 255);
    font-family: Fira Sans;
    font-size: toRem(48);
    font-weight: 700;
    line-height: 125%;
}
.main-subtitle {
    color: rgb(239, 231, 226);
    font-family: Fira Sans;
    font-size: toRem(15);
    font-weight: 400;
    line-height: 160%;
}
.main-headline {
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: toRem(12);
    text-align: center;
    grid-template-columns: minmax(toRem(200), toRem(580));
    justify-content: center;
}
</style>
