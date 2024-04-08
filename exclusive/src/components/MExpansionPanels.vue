<template>
    <div class="spoller">
        <div @click="onOpenSpoller" class="spoller__titles">
            <span class="spoller__label">{{ label }}</span>
            <span class="spoller__icons" :class="{ show: isViewportSize }">
                <IconBase
                    icon-name="arrow"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    icon-color="white"
                    class="spoller__icon"
                    icon="chevron-down"
                    :class="{ ['icon-up']: isVisibleMenuSpoller }"
                >
                    <IconArrow
                /></IconBase>
            </span>
        </div>
        <Transition name="slide-down">
            <div class="spoller__box" v-show="isVisibleMenuSpoller">
                <slot name="spoller-container">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores iste dolore facere at. Neque
                    temporibus nihil ab atque rem, corrupti, dolores debitis necessitatibus tempora placeat quaerat.
                    Harum eius nesciunt odit?
                </slot>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import IconBase from '@/components/icons/IconBase.vue'
import IconArrow from '@/components/icons/iconsSrc/IconArrow.vue'
import { ref, onMounted, onBeforeMount } from 'vue'
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    viewportSize: {
        type: Number,
        default: 0
    }
})
const isVisibleMenuSpoller = ref(null)
const isViewportSize = ref(null)
function onOpenSpoller() {
    if (!isViewportSize.value) return
    else {
        !isVisibleMenuSpoller.value ? (isVisibleMenuSpoller.value = true) : (isVisibleMenuSpoller.value = false)
    }
}
function getViewportWidth() {
    window.innerWidth <= props.viewportSize ? (isViewportSize.value = true) : (isViewportSize.value = false)
    isViewportSize.value ? (isVisibleMenuSpoller.value = false) : (isVisibleMenuSpoller.value = true)
}

onMounted(() => {
    getViewportWidth()
    window.addEventListener('resize', getViewportWidth)
})
onBeforeMount(() => {
    window.removeEventListener('resize', getViewportWidth)
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.spoller {
    // .spoller__titles
    &__titles {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    // .spoller__label

    &__label {
        font-size: toRem(20);
        font-weight: 500;
        line-height: 140%; /* 140% */
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }
    // .spoller__icons
    &__icons {
        display: none;
    }
    // .spoller__icon

    &__icon {
        transition: all 0.3s;
        margin-left: toRem(3);
    }
    &__box {
        font-size: toRem(13);
        font-weight: 400;
        line-height: 210%;
    }
}
.slide-down-enter-active {
    transition: all 0.3s linear;
}

.slide-down-leave-active {
    transition: all 0.3s linear;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-4px);
    opacity: 0;
    transition: all 0.3s linear;
}
.icon-up {
    transform: rotate(180deg);
}
.show {
    display: block;
}
</style>
