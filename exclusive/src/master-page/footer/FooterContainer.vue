<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <FooterLogoColumn />
                <FooterSupportBlock /><FooterLinksBlock
                    v-for="item in navLinksData"
                    :key="item.headTitle"
                    :columnTitle="item.headTitle"
                    :linksParams="item.linksValue"
                />
                <FooterDownloadAndSocialBlock />
            </div>
            <FooterCopyrightPanel />
        </div>
    </footer>
</template>

<script setup>
import FooterDownloadAndSocialBlock from '../footer/FooterDownloadAndSocialBlock.vue'
import FooterCopyrightPanel from '@/master-page/footer/FooterCopyrightPanel.vue'
import FooterLogoColumn from '@/master-page/footer/FooterLogoColumn.vue'
import FooterLinksBlock from '@/master-page/footer/FooterLinksBlock.vue'
import FooterSupportBlock from '@/master-page/footer/FooterSupportBlock.vue'
import navLinksData from '@/master-page/footer/settings.js'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.footer {
    background-color: #000;
    color: #fafafa;

    &__content {
        @include adaptiveValue('padding-top', 80, 20);
        @include adaptiveValue('padding-bottom', 60, 10);
        display: grid;
        grid-template-columns: repeat(5, auto);
        @include adaptiveValue('column-gap', 60, 40);
    }
}
</style>
