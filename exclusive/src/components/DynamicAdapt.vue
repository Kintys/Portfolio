<template ref="currentElement">
    <div ref="currentElement">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
    destination: {
        type: String,
        requited: true
    },
    breakpoint: {
        type: String,
        default: '767'
    },
    place: {
        type: Object,
        default: () => ({
            firstPosition: 'append',
            secondPosition: 'append'
        })
    },
    displayWidth: {
        type: String,
        default: 'max'
    }
})

const currentElement = ref(null)
const parent = ref(null)
const destinationElement = ref(null)
const matchMedia = ref(null)

onMounted(() => {
    parent.value = currentElement.value.parentNode
    destinationElement.value = document.querySelector(props.destination)

    matchMedia.value = window.matchMedia(`(${props.displayWidth}-width: ${props.breakpoint}px)`)

    if (matchMedia.value.matches) moveTo()

    matchMedia.value.addEventListener('change', () => {
        if (matchMedia.value.matches) moveTo()
        else moveBack()
    })
})
onBeforeUnmount(() => {
    matchMedia.value.removeEventListener('change', () => {
        if (matchMedia.value.matches) moveTo()
        else moveBack()
    })
})
function moveTo() {
    destinationElement.value[props.place.firstPosition](currentElement.value)
    destinationElement.value.prepend
}
function moveBack() {
    parent.value[props.place.secondPosition](currentElement.value)
}
</script>

<style lang="scss" scoped></style>
