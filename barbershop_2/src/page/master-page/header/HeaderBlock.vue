<template>
    <header
        class="headroom"
        :class="{ 'headroom--unpinned ': headerValue.scrolled, 'headroom--pinned': !headerValue.scrolled }"
    >
        <slot></slot>
    </header>
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
    limitPosition: {
        type: Number,
        default: 200
    },
    timer: {
        type: Number,
        default: 1000
    }
})

const headerValue = reactive({
    lastPosition: 0,
    scrolled: false
})
function handleScroll() {
    if (headerValue.lastPosition !== window.scrollY) {
        if (headerValue.lastPosition < window.scrollY && props.limitPosition < window.scrollY) {
            headerValue.scrolled = true
            setTimeout(() => {
                headerValue.scrolled = false
            }, props.timer)
        }
        if (headerValue.lastPosition > window.scrollY) {
            headerValue.scrolled = false
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
@import '@/assets/style/lib/mixins';
.headroom {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 30;
    transition: all 300ms linear;
}

.headroom--pinned {
    transform: translateY(0%);
}
.headroom--unpinned {
    transform: translateY(-100%);
}
</style>
