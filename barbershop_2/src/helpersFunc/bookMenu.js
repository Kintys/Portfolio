import { ref } from "vue";
const showMenu = ref(false);

export function bookMenu() {
    const html = ref(document.querySelector("html"));
    const body = ref(document.querySelector("body"));
    const el = ref(document.querySelectorAll("[data-lp]"));
    const bodyLockStatus = ref(true);
    function activeBookMenu() {
        showMenu.value = !showMenu.value;
        setTimeout(() => {
            if (showMenu.value) {
                bodyLock();
                html.value.classList.add("lock");
            } else {
                html.value.classList.remove("lock");
                bodyUnlock();
            }
        }, 500);
    }
    function bodyUnlock(delay = 500) {
        if (bodyLockStatus.value) {
            setTimeout(() => {
                body.value.style.paddingRight = "0px";
                el.value.style.paddingRight = "0px";
                // document.documentElement.classList.remove("lock");
            }, delay);
            bodyLockStatus.value = false;
            setTimeout(function () {
                bodyLockStatus.value = true;
            }, delay);
        }
    }
    function bodyLock(delay = 500) {
        if (bodyLockStatus.value) {
            el.value.style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            body.value.style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            // document.documentElement.classList.add("lock");
            bodyLockStatus.value = false;
            setTimeout(function () {
                bodyLockStatus.value = true;
            }, delay);
        }
    }

    return {
        showMenu,
        activeBookMenu,
    };
}
