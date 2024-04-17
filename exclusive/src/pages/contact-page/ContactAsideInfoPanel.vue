<template>
    <div class="aside-panel__box">
        <ContactCardInfo
            v-for="itemCard in cardProps"
            :key="itemCard.text"
            class="aside-panel__card card-aside"
            :card-data="itemCard"
        >
            <template #icon>
                <a :href="itemCard.links.href">
                    <IconBase width="40" height="43" viewBox="0 -2 41 41" icon-color="#DB4444">
                        <component :is="itemCard.icon"></component>
                    </IconBase>
                </a>
            </template>
        </ContactCardInfo>
    </div>
</template>

<script setup>
import ContactCardInfo from '@/pages/contact-page/ContactCardInfo.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconPhone from '@/components/icons/iconsSrc/IconPhone.vue'
import IconLetter from '@/components/icons/iconsSrc/IconLetter.vue'
const cardProps = [
    {
        icon: IconPhone,
        title: 'call to us',
        text: 'We are available 24/7, 7 days a week.',
        links: [{ titleLink: 'Phone', href: 'tel:+8801611112222', textLink: '+8801611112222' }]
    },
    {
        icon: IconLetter,
        title: 'write to US',
        text: 'Fill out our form and we will contact you within 24 hours.',
        links: [
            { titleLink: 'Emails', textLink: 'customer@exclusive.com' },
            { titleLink: 'Emails', textLink: 'support@exclusive.com' }
        ]
    }
]
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';

.aside-panel {
    // .aside-panel__box
    &__box {
        padding: toRem(40) toRem(35);
        border-radius: toRem(4);
        box-shadow: 0 toRem(1) toRem(13) 0 rgba(0, 0, 0, 0.05);
        @media (min-width: toEm($tablet)) {
            max-width: toRem(340);
        }
    }

    // .aside-panel__card

    &__card {
        &:not(:first-child) {
            padding-top: toRem(32);
        }
        &:not(:last-child) {
            padding-bottom: toRem(32);
            border-bottom: toRem(2) solid rgba(0, 0, 0, 0.503);
        }
    }
}
</style>
