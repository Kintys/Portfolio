<template>
    <div class="contact-page__container">
        <v-breadcrumbs :items="items" color="#00000080"></v-breadcrumbs>
        <div class="contact-page__content page-contact-block">
            <ContactAsideInfoPanel class="page-contact-block__aside-info-panel aside-panel" />
            <ContactSendForm class="page-contact-block__form contact-form" />
        </div>
    </div>
</template>

<script setup>
import ContactAsideInfoPanel from '@/pages/contact-page/ContactAsideInfoPanel.vue'
import ContactSendForm from '@/pages/contact-page/ContactSendForm.vue'
const items = [
    {
        title: 'Home',
        disabled: false,
        href: '/',
        active: true
    },
    {
        title: 'Contact',
        disabled: true
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';
.contact-page {
    // .contact-page__container

    &__container {
        display: grid;
        @include adaptiveValue('padding-top', 170, 60);
        @include adaptiveValue('row-gap', 80, 40);
        @include adaptiveValue('padding-bottom', 140, 40);
    }

    // .contact-page__content

    &__content {
        display: grid;
        gap: toRem(30);
        @media (min-width: toEm($tablet)) {
            grid-template-columns: auto 1fr;
            max-height: toRem(457);
        }
    }
}
.page-contact-block {
    // .page-contact-block__aside-info-panel

    &__aside-info-panel {
        @media (max-width: toEm($tablet)) {
            grid-row: 2;
        }
    }
}
</style>
