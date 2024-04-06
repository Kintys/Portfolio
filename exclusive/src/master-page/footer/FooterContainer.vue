<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <FooterLogoColumn class="footer__logo" />
                <FooterSupportBlock class="footer__support" /><FooterLinksBlock
                    class="footer__links"
                    v-for="item in navLinksData"
                    :key="item.headTitle"
                    :columnTitle="item.headTitle"
                    :linksParams="item.linksValue"
                />
                <FooterDownloadAndSocialBlock class="footer__app" />
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
@import '@/style/lib/variables';

.footer {
    background-color: #000;
    color: #fafafa;

    // .footer__container

    &__container {
    }

    // .footer__content

    &__content {
        @include adaptiveValue('padding-top', 80, 20);
        @include adaptiveValue('padding-bottom', 60, 10);
        display: grid;
        grid-template-columns: repeat(5, auto);
        @include adaptiveValue('column-gap', 40, 10);
        @include adaptiveValue('row-gap', 30, 20);
        @media (max-width: toEm(1083)) {
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
            grid-auto-columns: auto;
        }
        @media (max-width: toEm($mobile)) {
            display: flex;
            flex-direction: column;
        }
    }

    // .footer__logo

    &__logo {
        grid-column: 1/2;
    }

    // .footer__support

    &__support {
    }

    // .footer__links

    &__links {
    }

    // .footer__app

    &__app {
        @media (max-width: toEm(1083)) {
            grid-column: -3 / -1;
            justify-self: end;
        }
    }
}
</style>
