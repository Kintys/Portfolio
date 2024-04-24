<template>
    <div class="menu-welcome__link">
        <v-expansion-panels v-if="itemData.dropDown">
            <v-expansion-panel class="menu-welcome__panel ex-panel" :tile="false">
                <v-expansion-panel-title disable-icon-rotate class="ex-panel__title hover-link-color"
                    >{{ itemData.titleLink }}
                    <template v-slot:actions="{ expanded }">
                        <v-icon color="error">
                            <IconBase
                                :class="!expanded ? 'arrow-open' : 'arrow-close'"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <IconArrow color="#000" />
                            </IconBase>
                        </v-icon>
                    </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text class="ex-panel__text">
                    <router-link
                        v-for="subListItem in itemData.subList"
                        :key="subListItem"
                        :to="{ name: subListItem.link }"
                        class="ex-panel__link"
                        >{{ subListItem.titleLink }}</router-link
                    ></v-expansion-panel-text
                >
            </v-expansion-panel>
        </v-expansion-panels>
        <router-link v-else :to="{ name: itemData.link }" class="hover-link-color">{{
            itemData.titleLink
        }}</router-link>
    </div>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconArrow from '@/components/icons/iconsSrc/IconArrow.vue'
defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.ex-panel {
    // .ex-panel__title

    &__title {
    }

    // .ex-panel__text

    &__text {
    }

    // .ex-panel__link

    &__link {
        padding: toRem(5);
        border-radius: toRem(2);
        @media (any-hover: hover) {
            &:hover {
                background-color: rgba(0, 0, 0, 0.108);
            }
        }
    }
}
.v-expansion-panel {
    border-radius: toRem(2);
    :deep() {
        .v-expansion-panel__shadow {
            box-shadow: none;
        }
        .v-expansion-panel-title {
            padding: 0;
            min-height: 0;
            font-size: toRem(16);
            &--active {
                min-height: 0;
            }
        }
        .v-expansion-panel-text__wrapper {
            display: flex;
            flex-direction: column;
            row-gap: toRem(8);
            align-items: flex-start;
        }
    }
}
.v-expansion-panel--active > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
    min-height: 0;
}

.arrow-open,
.arrow-close {
    transition: all 0.3s;
}
.arrow-open {
    transform: rotate(-90deg);
}
.arrow-close {
    transform: rotate(0);
}
:root {
    .v-theme--light {
        --v-hover-opacity: 0;
    }
}
.hover-link-color {
    transition: all 0.2s;
    @media (any-hover: hover) {
        &:hover {
            color: $secondColor;
        }
    }
}
</style>
