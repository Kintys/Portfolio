export const vClickOutside = {
    beforeMount(el, binding) {
        el._clickOutsideHandler = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(false)
            }
        }
        document.addEventListener('click', el._clickOutsideHandler)
    },
    unmounted(el) {
        document.removeEventListener('click', el._clickOutsideHandler)
    }
}
