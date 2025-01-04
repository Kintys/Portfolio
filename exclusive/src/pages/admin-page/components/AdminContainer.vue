!
<template>
    <div class="admin">
        <AdminNavBar v-model:active="selectedComponent" />
        <div class="admin__container">
            <transition>
                <keep-alive>
                    <component :is="activeComponents" v-model="event" :productId="productId" />
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script setup>
import AdminNavBar from '@/pages/admin-page/components/AdminNavBar.vue'
import { useFiltersStore } from '@/stores/filters.js'
const { loadBrandsList } = useFiltersStore()
import { onBeforeMount } from 'vue'
import { ref, defineAsyncComponent, watchEffect, watch } from 'vue'
const event = ref(null)
const productId = ref(null)

const components = new Map([
    ['AdminProductsList', () => defineAsyncComponent(() => import('./AdminProductsList.vue'))],
    ['AdminEditBlock', () => defineAsyncComponent(() => import('./AdminEditBlock.vue'))],
    ['AdminUserBlock', () => defineAsyncComponent(() => import('./AdminUserBlock.vue'))]
])

const activeComponents = ref('')
const selectedComponent = ref('')
watchEffect(() => {
    changeComponents(selectedComponent?.value[0])
})
watchEffect(() => {
    productId.value = event.value
    changeComponents('AdminEditBlock')
    productId.value = null
})

function changeComponents(nameComp) {
    const loadComponent = components.get(nameComp)
    if (loadComponent) activeComponents.value = loadComponent()
}
onBeforeMount(async () => {
    await loadBrandsList()
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive.scss';
.admin {
    height: 100%;
    // .admin__container

    &__container {
        max-width: toRem(1390);
        @include adaptiveValue('padding-top', 100, 60);
        @include adaptiveValue('padding-bottom', 140, 40);
    }
}
</style>
