<template>
    <v-layout>
        <v-navigation-drawer expand-on-hover rail>
            <v-list-item
                prepend-avatar="https://lh3.googleusercontent.com/a/ACg8ocIt5QbT3CZUveUZosUTuauGuW8e6B1vbKNUqETSvWwlUAFv6g=s360-c-no"
                title="Admin"
                nav
            >
                <template v-slot:append> </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" v-model:selected="selectedComponent">
                <v-list-item :prepend-icon="mdiHome" :to="{ name: 'home' }" title="Home"></v-list-item>
                <template v-for="itemValue of listProps">
                    <v-list-item
                        :prepend-icon="itemValue.icon"
                        :title="itemValue.title"
                        :value="itemValue.value"
                    ></v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const selectedComponent = ref([])
const emit = defineEmits(['update:active'])

watchEffect(async () => {
    emit('update:active', selectedComponent.value)
})

//===========================================================

import { mdiHome } from '@mdi/js'
import { mdiAccountGroupOutline } from '@mdi/js'
import { mdiShopping } from '@mdi/js'
import { mdiPlus } from '@mdi/js'

const listProps = [
    {
        icon: mdiShopping,
        title: 'Products',
        value: 'AdminProductsList'
    },
    {
        icon: mdiPlus,
        title: 'Add product',
        value: 'AdminEditBlock'
    },
    {
        icon: mdiAccountGroupOutline,
        title: 'User',
        value: 'AdminUserBlock'
    }
]
</script>

<style lang="scss" scoped></style>
