<template>
    <div class="box">
        <MasterTitleDescription
            :master-title="props.profile.name"
            :master-image="props.profile.img"
            :edu-description="props.profile.descriptions.edu"
            :special-description="props.profile.descriptions.special"
        />
        <MasterImageCards :images="getMasterImagesArr" class="master-image" />
        <v-btn
            :disabled="loading"
            :loading="loading"
            @click="onShowMore"
            class="button-main button"
        >
            show more
        </v-btn>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import MasterTitleDescription from "@/page/team-masters-page/master-portfolio/MasterTitleDescription";
import MasterImageCards from "@/page/team-masters-page/master-portfolio/MasterImageCards";

const props = defineProps({
    profile: {
        type: Object,
        default: () => ({}),
    },
    masterImagesPortfolio: {
        type: Array,
        default: () => [],
    },
});

const loading = ref(false);
const showMoreNumber = ref(4);

function onShowMore() {
    loading.value = true;
    if (showMoreNumber.value === props.masterImagesPortfolio.length) {
        setTimeout(() => {
            loading.value = false;
        }, 1000);
        return;
    } else {
        setTimeout(() => {
            showMoreNumber.value += 4;
            loading.value = false;
        }, 2000);
    }
}
const getMasterImagesArr = computed(() => {
    let imagesArr = [];
    for (let index = 0; index < showMoreNumber.value; index++) {
        imagesArr.push(props.masterImagesPortfolio[index]);
    }
    return imagesArr;
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/lib/mixins";
@import "@/assets/style/lib/button";
.box {
    display: grid;
    gap: toRem(20);
}
.master-image {
    display: grid;
    justify-content: center;
    @include gridCards(fill, toRem(280), 1fr, toRem(20));
}
.button {
    justify-self: center;
    max-width: toRem(258);
}
</style>
