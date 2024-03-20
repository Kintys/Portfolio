import { ref } from "vue";
const showMenu = ref(false);

export function bookMenu() {
    const html = ref(document.querySelector("html"));
    function activeBookMenu() {
        showMenu.value = !showMenu.value;
        if (showMenu.value) {
            const wrapper = document.querySelector(".wrapper");
            console.log(wrapper.offsetWidth);
            console.log(window.innerWidth);
            html.value.style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            html.value.classList.add("lock");
        } else {
            html.value.classList.remove("lock");
            bodyUnlock();
        }
    }
    function bodyUnlock() {
        html.value.style.paddingRight = "0px";
    }

    return {
        showMenu,
        activeBookMenu,
    };
}
