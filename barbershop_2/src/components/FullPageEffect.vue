<template>
    <slot> <button style="width: 100px; background: #000" @click="calculateSectionOffsets">click</button> </slot>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
const props = defineProps({
    isMoveDelay: {
        type: Number,
        default: 400
    }
})

const isMove = ref(false)
const activeSection = ref(0)
// const touchStartY = ref(false)
const offsets = reactive([])
const section = ref([])
function calculateSectionOffsets() {
    for (let i = 0; i < section.value.length; i++) {
        const sectionOffSet = section.value[i].offsetTop
        offsets.push(sectionOffSet)
    }
}
function handleMouseWheel(e) {
    if (e.wheelDelta > 1 && !isMove.value) {
        console.log(e.wheelDelta)
        // moveUp()
    } else if (e.wheelDelta < 1 && !isMove.value) {
        console.log(e.wheelDelta)
        moveDown()
    }
}
function moveDown() {
    isMove.value = true
    activeSection.value++
    // if (activeSection.value < 0) return
    scrollToSection(activeSection.value)
}
// function moveUp() {
//     isMove.value = true
//     activeSection.value--
//     // if (activeSection.value > offsets.length - 1) return
//     scrollToSection(activeSection.value)
// }
function scrollToSection(sectionId) {
    activeSection.value = sectionId
    isMove.value = true
    if (section.value) {
        section.value[sectionId].scrollIntoView({ behavior: 'smooth' })
    }

    setTimeout(() => {
        isMove.value = false
    }, props.isMoveDelay)
}
onMounted(() => {
    // window.addEventListener('DOMMouseScroll', handleMouseWheelDOM) // Mozilla Firefox
    window.addEventListener('mousewheel', handleMouseWheel, { passive: false }) // Other browsers
    section.value = document.getElementsByTagName('section')
})
</script>

<style lang="scss" scoped></style>
