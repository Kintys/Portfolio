<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__content"><FooterLogoColumn /></div>
            <FooterCopyrightPanel />
        </div>
    </footer>
</template>

<script setup>
import FooterCopyrightPanel from '@/master-page/footer/FooterCopyrightPanel.vue'
import FooterLogoColumn from '@/master-page/footer/FooterLogoColumn.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.footer {
    background-color: #000;
    color: #fff;

    // .footer__container

    &__container {
    }
    &__content {
        @include adaptiveValue('padding-top', 80, 20);
        @include adaptiveValue('padding-bottom', 60, 10);
    }
}
//  @include adaptiveValue('padding-top', 80, 20);
// @include adaptiveValue('padding-bottom', 60, 10);
</style>
