<template>
    <div class="flash-sale-timer">
        <div class="flash-sale-timer__wrapper">
            <span class="flash-sale-timer__title">Days</span>
            <span class="flash-sale-timer__time">{{ displayDays }}</span>
        </div>
        <span class="flash-sale-timer__divide-dots">
            <span class="flash-sale-timer__dot"></span> <span class="flash-sale-timer__dot"></span
        ></span>
        <div class="flash-sale-timer__wrapper">
            <span class="flash-sale-timer__title">Hours</span>
            <span class="flash-sale-timer__time">{{ displayHours }}</span>
        </div>
        <span class="flash-sale-timer__divide-dots">
            <span class="flash-sale-timer__dot"></span> <span class="flash-sale-timer__dot"></span
        ></span>
        <div class="flash-sale-timer__wrapper">
            <span class="flash-sale-timer__title">Minutes</span>
            <span class="flash-sale-timer__time">{{ displayMinutes }}</span>
        </div>
        <span class="flash-sale-timer__divide-dots">
            <span class="flash-sale-timer__dot"></span> <span class="flash-sale-timer__dot"></span
        ></span>
        <div class="flash-sale-timer__wrapper">
            <span class="flash-sale-timer__title">Seconds</span>
            <span class="flash-sale-timer__time">{{ displaySeconds }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
const displaySeconds = ref(0)
const displayMinutes = ref(0)
const displayHours = ref(0)
const displayDays = ref(0)
// const props = defineProps({
//     addTime: {
//         type: Array,
//         default: () => []
//     }
// })

const _seconds = computed(() => 1000)
const _minutes = computed(() => _seconds.value * 60)
const _hours = computed(() => _minutes.value * 60)
const _days = computed(() => _hours.value * 24)

function showRemaining() {
    const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(2024, 4, 24, 10, 30, 10, 10)
        const distance = end.getTime() - now.getTime()

        if (distance < 0) clearInterval(timer)

        const days = Math.floor(distance / _days.value)
        const hours = Math.floor((distance % _days.value) / _hours.value)
        const minutes = Math.floor((distance % _hours.value) / _minutes.value)
        const seconds = Math.floor((distance % _minutes.value) / _seconds.value)

        displaySeconds.value = seconds < 10 ? '0' + seconds : seconds
        displayMinutes.value = minutes < 10 ? '0' + minutes : minutes
        displayHours.value = hours < 10 ? '0' + hours : hours
        displayDays.value = days < 10 ? '0' + days : days
    }, 1000)
}
onMounted(() => {
    showRemaining()
})
</script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.flash-sale-timer {
    display: flex;
    align-items: flex-end;
    column-gap: toRem(17);
    &__wrapper {
        display: grid;
        position: relative;
        row-gap: toRem(4);
    }

    // .flash-sale-timer__title

    &__title {
        font-size: toRem(12);
        font-weight: 500;
        line-height: 150%; /* 150% */
    }

    // .flash-sale-timer__time

    &__time {
        font-family: $interFont;
        font-size: toRem(32);
        font-weight: 700;
        line-height: 93.75%; /* 93.75% */
        letter-spacing: 1.28px;
    }

    // .flash-sale-timer__divide-dots

    &__divide-dots {
        display: grid;
        align-content: end;
        row-gap: toRem(8);
        padding-bottom: toRem(4);
    }

    // .flash-sale-timer__dot

    &__dot {
        background-color: #db4444;
        width: toRem(6);
        height: toRem(6);
        border-radius: 50%;
    }
}
</style>
