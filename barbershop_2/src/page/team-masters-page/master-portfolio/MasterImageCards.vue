<template>
    <div>
        <v-img
            v-for="img in images"
            :key="img.src"
            :src="getImageUrl(img.src)"
            class="image"
        />
    </div>
</template>

<script setup>
const getImageUrl = (name) => {
    return new URL(`../../../assets/img/${name}`, import.meta.url).href;
};
defineProps({
    images: {
        type: Array,
        default: () => [],
    },
});
</script>

<style lang="scss" scoped></style>
