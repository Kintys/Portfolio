<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="props.width"
        :height="props.height"
        :viewBox="props.viewBox"
        :aria-labelledby="props.iconName"
        role="presentation"
    >
        <title :id="props.iconName" lang="en">{{ iconName }} icon</title>
        <g :fill="props.iconColor">
            <slot></slot>
        </g>
    </svg>
</template>

<script setup>
const props = defineProps({
    iconName: {
        type: String,
        default: 'box'
    },
    width: {
        type: [Number, String],
        default: 18
    },
    height: {
        type: [Number, String],
        default: 18
    },
    iconColor: {
        type: String,
        default: 'currentColor'
    },
    viewBox: {
        type: String,
        default: '0 0 18 18'
    }
})
</script>

<style lang="scss" scoped></style>
