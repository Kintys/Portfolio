import { ref } from 'vue'

export function useFocus() {
    const focusesList = ref([])

    function onFocus(currentIndex, addClass) {
        console.log(focusesList.value)
        focusesList.value.forEach((item, index) => {
            if (index === currentIndex) item.firstElementChild.classList.add(addClass)
            else item.firstElementChild.classList.remove(addClass)
        })
    }
    function offFocus(addClass) {
        focusesList.value.forEach((item) => {
            item.classList.remove(addClass)
        })
    }
    return { focusesList, onFocus, offFocus }
}
