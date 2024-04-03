<template>
    <header
        class="headroom"
        :class="{
            'headroom--unpinned ': headerValue.scrolled,
            'headroom--pinned': !headerValue.scrolled,
            'scroll-up': headerValue.scrolledUp,
            'start-scroll': headerValue.startScroll,
            'headroom--small': headerValue.startScroll
        }"
    >
        <slot></slot>
    </header>
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue'
const emit = defineEmits(['windowsScroll'])
const props = defineProps({
    limitPosition: {
        type: Number,
        default: 500
    },
    timer: {
        type: Number,
        default: 1000
    }
})

const headerValue = reactive({
    lastPosition: 0,
    scrolled: false,
    scrolledUp: false
})
function handleScroll() {
    emit('windowsScroll', window.scrollY)
    if (headerValue.lastPosition !== window.scrollY) {
        if (headerValue.lastPosition < window.scrollY && props.limitPosition < window.scrollY) {
            headerValue.startScroll = true
            headerValue.scrolled = true
            headerValue.scrolledUp = false
            setTimeout(() => {
                headerValue.scrolled = false
            }, props.timer)
        }
        if (headerValue.lastPosition > window.scrollY) {
            headerValue.scrolled = false
            headerValue.scrolledUp = true
            setTimeout(() => {
                headerValue.scrolledUp = false
            }, 100)

            // move down
        }
        headerValue.lastPosition = window.scrollY
    } else return
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.headroom {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 30;
    transition: top 500ms linear;
}

.headroom--pinned {
    top: 0;
}
.headroom--unpinned {
    top: -100%;
}
.scroll-up {
    transition: top 200ms linear;
}
</style>
