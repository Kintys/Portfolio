import { ref, watch } from 'vue'

export function useBurgerMenu(targetElement = 'html', lockClass = 'lock') {
    const showMenu = ref(false)
    const element = ref(document.querySelector(targetElement))

    const toggleMenu = () => {
        showMenu.value = !showMenu.value
    }
    const toggleClass = (action) => {
        element.value.classList[`${action}`](lockClass)
    }
    watch(showMenu, (isOpen) => {
        if (!element.value) return
        if (isOpen) {
            toggleClass('add')
        } else {
            toggleClass('remove')
        }
    })

    return {
        showMenu,
        toggleMenu,
        toggleClass
    }
}
