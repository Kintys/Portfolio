<template>
    <div class="container">
        <div class="benefits">
            <article class="benefits-item">
                <v-img :src="benefitImg_01" class="image" />
                <h4 class="title">Briefly describe the benefit</h4>
                <p class="subtitle">Long text, in two lines, for clarity and detail</p>
            </article>
            <article class="benefits-item">
                <v-img :src="benefitImg_02" class="image" />
                <h4 class="title">Briefly describe the benefit</h4>
                <p class="subtitle">Long text, in two lines, for clarity and detail</p>
            </article>
            <article class="benefits-item">
                <v-img :src="benefitImg_03" class="image" />
                <h4 class="title">Briefly describe the benefit</h4>
                <p class="subtitle">Long text, in two lines, for clarity and detail</p>
            </article>
        </div>
    </div>
</template>

<script setup>
import benefitImg_01 from '@/assets/img/main/section-one/benefit/01.svg'
import benefitImg_02 from '@/assets/img/main/section-one/benefit/02.svg'
import benefitImg_03 from '@/assets/img/main/section-one/benefit/03.svg'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.container {
    @include adaptiveValue('padding-top', 110, 70);
}
.benefits {
    display: grid;
    @include gridCards(fill, toRem(300), 1fr, toRem(10));
    justify-items: center;
}
.benefits-item {
    display: grid;
    justify-items: center;
    grid-template-columns: toRem(300);
    font-family: Fira Sans;
    row-gap: toRem(10);
    text-align: center;
    padding: toRem(0) toRem(5);
}
.image {
    width: toRem(80);
    height: toRem(80);
}
.title {
    color: rgb(239, 231, 226);
    font-size: toRem(24);
    font-weight: 600;
    line-height: 135%;
}
.subtitle {
    color: rgb(183, 170, 162);
    font-size: toRem(16);
    font-weight: 400;
    line-height: 150%;
}
</style>
