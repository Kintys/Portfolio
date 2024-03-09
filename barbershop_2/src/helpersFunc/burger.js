import { ref } from "vue";

export function burgerMenu() {
    const showMenu = ref(false);
    const html = ref(document.querySelector("html"));
    function activeMenu() {
        showMenu.value = !showMenu.value;
        setTimeout(() => {
            showMenu.value
                ? html.value.classList.add("lock")
                : html.value.classList.remove("lock");
        }, 500);
    }
    function close() {
        if (showMenu.value) {
            showMenu.value = false;
            html.value.classList.remove("lock");
        }
    }
    return {
        close,
        activeMenu,
        showMenu,
    };
}
