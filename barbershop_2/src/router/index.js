import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getNewRouterList } from "@/router/helpers";
export const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        children: [
            {
                path: "/about",
                name: "about",
            },
            {
                path: "/testimonials",
                name: "testimonials",
            },
            {
                path: "/contacts",
                name: "contacts",
            },
        ],
    },
    {
        path: "/our-masters",
        name: "our masters",
        component: () => import("@/views/TeamMastersView.vue"),
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: () => import("@/views/TeamMastersView.vue"),
    },
];
const routerList = getNewRouterList(routes);
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else {
            for (let index = 0; index < routerList.length; index++) {
                if (to.path === "/" && routerList[index].path === "/") {
                    return {
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    };
                } else if (to.path === routerList[index].path) {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve({
                                el: `#${to.name}`,
                                behavior: "smooth",
                            });
                        }, 500);
                    });
                }
            }
        }
    },
});

export default router;
