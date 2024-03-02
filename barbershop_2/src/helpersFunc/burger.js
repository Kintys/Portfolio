import { ref } from "vue";

export function burgerMenu() {
    const showMenu = ref(false);
    function activeMenu() {
        const html = document.querySelector("html");
        showMenu.value = !showMenu.value;
        setTimeout(() => {
            showMenu.value
                ? html.classList.add("lock")
                : html.classList.remove("lock");
        }, 500);
    }
    return {
        activeMenu,
        showMenu,
    };
}
