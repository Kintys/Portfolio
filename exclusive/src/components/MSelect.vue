<template>
    <div class="m-select" ref="dropDown">
        <div class="m-select__label">
            <span v-if="prefix" class="m-select__prefix">{{ prefix }}</span
            ><span class="m-select__label-text">{{ currentLabel }}</span>
            <span
                ><span v-show="clearBtn && selectedOption" @click="onClearLabel" class="m-select__clear"></span
                ><v-icon
                    @click="onOpen()"
                    class="m-select__icon"
                    style="transition: all 0.3s"
                    :class="{ ['icon-up']: isMenuVisible }"
                    ><IconBase icon-name="arrow" viewBox="0 0 24 24" width="24" height="24" icon-color="white">
                        <IconArrow /></IconBase></v-icon
            ></span>
            <transition name="slide-fade">
                <div v-if="isMenuVisible" class="m-select__options">
                    <span
                        v-for="(option, i) in optionsList"
                        @click="onSelect(option)"
                        :key="i"
                        class="m-select__options-item"
                        >{{ option.name ?? option }}</span
                    >
                </div>
            </transition>
        </div>
    </div>
</template>
<script setup>
import { computed, ref, defineEmits, onMounted, onBeforeUnmount } from 'vue'
import IconBase from '../components/icons/IconBase.vue'
import IconArrow from '../components/icons/iconsSrc/IconArrow.vue'
const props = defineProps({
    prefix: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    optionsList: {
        type: Array,
        default: () => []
    },
    modelValue: {
        default: null
    },
    clearBtn: {
        type: Boolean
    },
    selectFirstElement: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:modelValue'])
const dropDown = ref(null)
const selectedOption = ref(null)
const isMenuVisible = ref(false)
const currentLabel = computed(() => {
    const label = selectedOption.value?.name || selectedOption?.value || props.label
    if (label.length > 7) return label.substr(0, 7) + '..'
    else return label
})

function onSelect(opt) {
    selectedOption.value = opt
    emit('update:modelValue', opt.value || opt)
    isMenuVisible.value = false
}
function onOpen() {
    !isMenuVisible.value ? (isMenuVisible.value = true) : (isMenuVisible.value = false)
}

function onClose(element) {
    if (!dropDown.value.contains(element.target)) {
        isMenuVisible.value = false
    }
}
function onClearLabel() {
    selectedOption.value = null
}
onMounted(() => {
    if (props.selectFirstElement) onSelect(props.optionsList[0])
    window.addEventListener('click', onClose)
})
onBeforeUnmount(() => {
    window.removeEventListener('click', onClose)
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/mixins';
@import '@/style/lib/select';
</style>
