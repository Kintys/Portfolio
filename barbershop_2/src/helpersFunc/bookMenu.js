import { ref } from "vue";
const showMenu = ref(false);

export function bookMenu() {
    const html = ref(document.querySelector("html"));
    const body = ref(document.querySelector("body"));
    const bodyLockStatus = ref(true);
    function activeBookMenu() {
        showMenu.value = !showMenu.value;

        if (showMenu.value) {
            bodyLock();
            html.value.classList.add("lock");
        } else {
            html.value.classList.remove("lock");
            bodyUnlock();
        }
    }
    function bodyUnlock(delay = 500) {
        if (bodyLockStatus.value) {
            setTimeout(() => {
                body.value.style.paddingRight = "0px";
            }, delay);
            bodyLockStatus.value = false;
            setTimeout(function () {
                bodyLockStatus.value = true;
            }, delay);
        }
    }
    function bodyLock() {
        body.value.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
    }

    return {
        showMenu,
        activeBookMenu,
    };
}
