<template>
    <div class="copyright-panel">
        <div class="copyright-panel__content">
            <span class="copyright-panel__icon">&copy;</span>
            <p class="copyright-panel__text">Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.copyright-panel {
    // .copyright-panel__content
    padding: toRem(8) toRem(0);
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
        display: flex;
        align-items: center;
        column-gap: toRem(3);
    }

    // .copyright-panel__icon

    &__icon {
        color: #fff;
    }

    // .copyright-panel__text

    &__text {
        font-size: toRem(16);
        font-size: toRem(14);
        line-height: 150%; /* 150% */
        color: #fff;
    }
}
</style>
