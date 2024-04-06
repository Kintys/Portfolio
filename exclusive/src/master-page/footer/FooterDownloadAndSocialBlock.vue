<template>
    <div class="downland-app">
        <MExpansionPanels label="Download App" :viewportSize="767.98">
            <template #spoller-container>
                <p class="downland-app__sale-opt">Save $3 with App New User Only</p>
                <div class="downland-app__apps-links apps-links">
                    <IconBase width="80" height="80" viewBox="0 0 80 80">
                        <IconQcode />
                    </IconBase>
                    <div class="apps-links__app-img">
                        <IconBase width="106" height="40" viewBox="0 0 106 32">
                            <IconGooglePlay class="apps-links__google" />
                        </IconBase>
                        <IconAppleStore class="apps-links__apple-store" />
                    </div>
                </div>
            </template>
        </MExpansionPanels>
    </div>
</template>

<script setup>
import MExpansionPanels from '@/components/MExpansionPanels.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconAppleStore from '@/components/icons/iconsSrc/IconAppleStore.vue'
import IconQcode from '@/components/icons/iconsSrc/IconQcode.vue'
import IconGooglePlay from '@/components/icons/iconsSrc/IconGooglePlay.vue'
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
@import '@/style/lib/variables';
.downland-app {
    // .downland-app__title

    &__title {
        font-size: toRem(20);
        font-weight: 500;
        line-height: 140%; /* 140% */
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .downland-app__sale-opt

    &__sale-opt {
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    // .downland-app__apps-links

    &__apps-links {
    }
}
.apps-links {
    // .apps-links__app-img
    display: flex;
    gap: toRem(10);

    &__app-img {
        display: grid;
    }

    // .apps-links__google

    &__google {
        cursor: pointer;
    }

    // .apps-links__apple-store

    &__apple-store {
        cursor: pointer;
    }
}
</style>
