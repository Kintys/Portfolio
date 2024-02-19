import { ref } from 'vue'

export function burgerMenu() {
    const showMenu = ref(false)
    function activeMenu() {
        const html = document.querySelector('html')
        showMenu.value = !showMenu.value
        showMenu.value ? html.classList.add('lock') : html.classList.remove('lock')
    }
    return {
        activeMenu,
        showMenu
    }
}
