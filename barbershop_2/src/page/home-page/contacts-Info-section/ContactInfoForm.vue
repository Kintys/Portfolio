<template>
    <div class="container">
        <div class="body">
            <h4 class="title">Contacts</h4>
            <div class="info-link">
                <IconBase
                    width="54.000000"
                    height="54.000000"
                    viewBox="0 0 54 54"
                    icon-name="icon-local"
                    ><IconLocal
                /></IconBase>
                <a class="info-text">8 (800) 000-00-00</a>
            </div>
            <div class="info-link">
                <IconBase
                    width="54.000000"
                    height="54.000000"
                    viewBox="0 0 54 54"
                    icon-name="icon-Messange"
                    ><IconMessange
                /></IconBase>
                <a class="info-text">info@sitename.com</a>
            </div>
            <div class="info-link">
                <IconBase
                    width="54.000000"
                    height="54.000000"
                    viewBox="0 0 54 54"
                    icon-name="icon-phone"
                    ><IconPhone
                /></IconBase>
                <a class="info-text">302 W 50th St, NY, NY 10019</a>
            </div>
            <div class="info-link">
                <IconBase
                    width="54.000000"
                    height="54.000000"
                    viewBox="0 0 54 54"
                    icon-name="icon-time"
                    ><IconTime
                /></IconBase>
                <p class="info-text">Daily from 9 to 20</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconBase from "@/components/icons/IconBase.vue";
import IconLocal from "@/components/icons/iconsSrc/IconLocal.vue";
import IconMessange from "@/components/icons/iconsSrc/IconMessange.vue";
import IconPhone from "@/components/icons/iconsSrc/IconPhone.vue";
import IconTime from "@/components/icons/iconsSrc/IconTime.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
.body {
    @include adaptiveValue("padding-left", 48, 30);
    @include adaptiveValue("padding-right", 48, 30);
    @include adaptiveValue("padding-bottom", 65, 50);
    @include adaptiveValue("padding-top", 65, 50);
    padding: toRem(65) toRem(48);
    background-color: rgb(37, 29, 26);
    color: rgb(255, 255, 255);
    max-width: toRem(480);
    z-index: 2;
    position: relative;
    margin-bottom: toRem(20);
}
.title {
    font-family: Fira Sans;
    font-size: toRem(48);
    font-weight: 700;
    line-height: 125%;
    &:not(:last-child) {
        margin-bottom: toRem(34);
    }
}
.info-link {
    display: flex;
    align-items: center;
    @include adaptiveValue("column-gap", 30, 20);
    &:not(:last-child) {
        margin-bottom: toRem(21);
    }
}
.info-text {
    @include adaptiveValue("font-size", 21, 14);
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-weight: 400;
    line-height: 143%;
    letter-spacing: 0%;
    text-align: left;
}
</style>
