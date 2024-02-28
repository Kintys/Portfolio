<template>
    <div class="container">
        <div class="body">
            <div class="headline">
                <h4 class="title">
                    Get in consultation with our expert barbers
                </h4>
                <p class="subtitle">Expand Call-to-Action Details</p>
            </div>
            <ConsultationSendForm />
        </div>
    </div>
</template>

<script setup>
import ConsultationSendForm from "./ConsultationSendForm.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.container {
    @include adaptiveValue("padding-top", 120, 20);
    &:not(:last-child) {
        @include adaptiveValue("margin-bottom", 120, 80);
    }
}
.body {
    @include adaptiveValue("padding-left", 150, 5, 0, 1200, 320);
    @include adaptiveValue("padding-right", 150, 5, 0, 1200, 320);
    @include adaptiveValue("padding-top", 70, 15, 0, 1200, 320);
    @include adaptiveValue("padding-bottom", 70, 15, 0, 1200, 320);
    background-color: rgb(255, 110, 64);
}
.headline {
    color: rgb(0, 0, 0);
    font-family: "Playfair Display Variable", serif;
    &:not(:last-child) {
        @include adaptiveValue("margin-bottom", 35, 20);
    }
    text-align: center;
}
.title {
    @include adaptiveValue("font-size", 36, 26);
    font-weight: 900;
    line-height: 133%;
    &:not(:last-child) {
        margin-bottom: toRem(12);
    }
}
.subtitle {
    color: rgb(59, 50, 45);
    font-family: Fira Sans;
    @include adaptiveValue("font-size", 21, 18);
    line-height: 143%;
}
</style>
