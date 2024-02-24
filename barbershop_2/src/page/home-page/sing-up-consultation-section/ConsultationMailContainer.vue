<template>
    <div class="container">
        <div class="body">
            <div class="headline">
                <h4 class="title">Get in consultation with our expert barbers</h4>
                <p class="subtitle">Expand Call-to-Action Details</p>
            </div>
            <ConsultationSendForm />
        </div>
    </div>
</template>

<script setup>
import ConsultationSendForm from './ConsultationSendForm.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.container {
    @include adaptiveValue('padding-top', 120, 80);
}
.body {
    padding: toRem(70) toRem(150);
    background-color: rgb(255, 110, 64);
}
.headline {
    color: rgb(0, 0, 0);
    font-family: 'Playfair Display Variable', serif;
    &:not(:last-child) {
        @include adaptiveValue('margin-bottom', 35, 20);
    }
    text-align: center;
}
.title {
    font-size: toRem(36);
    font-weight: 900;
    line-height: 133%;
    &:not(:last-child) {
        margin-bottom: toRem(12);
    }
}
.subtitle {
    color: rgb(59, 50, 45);
    font-family: Fira Sans;
    font-size: toRem(21);
    line-height: 143%;
}
</style>
