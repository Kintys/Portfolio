import { ref } from "vue";
const showMenu = ref(false);

export function bookMenu() {
    const html = ref(document.querySelector("html"));
    function activeBookMenu() {
        showMenu.value = !showMenu.value;
        setTimeout(() => {
            showMenu.value
                ? html.value.classList.add("lock")
                : html.value.classList.remove("lock");
        }, 500);
    }
    return {
        showMenu,
        activeBookMenu,
    };
}
