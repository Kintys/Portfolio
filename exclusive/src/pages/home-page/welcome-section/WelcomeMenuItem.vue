<template>
    <v-expansion-panels>
        <div v-for="item in itemData" :key="item" class="menu-welcome__link">
            <v-expansion-panel v-if="item.dropDown" bg-color="none" class="menu-welcome__panel ex-panel" :tile="false">
                <v-expansion-panel-title class="ex-panel__title">{{ item.titleLink }}</v-expansion-panel-title>
                <v-expansion-panel-text class="ex-panel__text">
                    <router-link
                        v-for="subListItem in item.subList"
                        :key="subListItem"
                        :to="{ name: subListItem.link }"
                        class="ex-panel__link"
                        >{{ subListItem.titleLink }}</router-link
                    ></v-expansion-panel-text
                >
            </v-expansion-panel>

            <router-link v-else :to="{ name: item.link }">{{ item.titleLink }}</router-link>
        </div>
    </v-expansion-panels>
</template>

<script setup>
defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../node_modules/vuetify/dist/vuetify';
@import '@/style/lib/adaptive';
.v-expansion-panel {
    border-radius: 0;
    :deep() {
        .v-expansion-panel__shadow {
            box-shadow: none;
        }
        .v-expansion-panel-title {
            padding: 0;
            min-height: 0;
            &--active {
                min-height: 0;
            }
        }
    }
}
.v-expansion-panel--active > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
    min-height: 0;
}
</style>
