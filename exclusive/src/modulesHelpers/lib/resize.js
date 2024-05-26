import { ref, onMounted, onUnmounted } from 'vue'

export function onResize() {
    const currentWindowWidth = ref(null)

    function getDynamicInnerWidth() {
        currentWindowWidth.value = window.innerWidth
    }
    onMounted(() => {
        getDynamicInnerWidth()
        window.addEventListener('resize', getDynamicInnerWidth)
    })
    onUnmounted(() => {
        window.removeEventListener('resize', getDynamicInnerWidth)
    })
    return {
        currentWindowWidth
    }
}
