import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/home-page/HomeView.vue'

import { isAuth, isRouteAvailable } from '@/router/userPermissions.js'
import { useBurgerMenu } from '@/modulesHelpers/lib/burger'
const { toggleClass } = useBurgerMenu()
export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            useInMenu: true
        }
    },
    {
        path: '/singUp',
        children: [
            {
                path: '',
                name: 'sign Up',
                component: () => import('@/pages/login-page/CreateNewAccountView.vue'),
                meta: {
                    requireAuth: false,
                    useInMenu: true
                }
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/pages/login-page/LoginPage.vue'),
                meta: {
                    requireAuth: false,
                    useInMenu: false
                }
            }
        ]
    },
    {
        path: '/',
        name: 'Contact',
        meta: {
            requireAuth: false,
            useInMenu: true
        },
        component: () => import('@/pages/contact-page/ContactPage.vue')
    },
    {
        path: '/',
        name: 'About',
        component: () => import('@/pages/about-page/AboutView.vue'),
        meta: {
            requireAuth: false,
            useInMenu: true
        }
    },
    {
        path: '/product:id',
        name: 'product',
        component: () => import('@/pages/product-pages/ProductView.vue'),
        meta: {
            requireAuth: true,
            useInMenu: false
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/pages/cart-pages/CartView.vue'),
        meta: {
            requireAuth: true,
            useInMenu: false
        }
    },

    {
        path: '/catalog',
        name: 'catalog',
        component: () => import('@/pages/filter-page/FilterPage.vue'),
        meta: {
            requireAuth: true,
            useInMenu: true
        }
    },

    {
        path: '/admin',
        name: 'admin',
        component: () => import('../pages/admin-page/AdminPage.vue'),
        meta: {
            requireAuth: true,
            hasAccess: (permissions) => permissions,

            useInMenu: true
        }
    },

    {
        path: '/:path(.*)*',
        name: 'pageNotFound',
        meta: {
            requireAuth: false,
            useInMenu: false
        },
        component: () => import('@/pages/PageNotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(async (to) => {
    toggleClass('remove')
    if (to.meta?.requireAuth) {
        if (!isAuth())
            return {
                name: 'login',
                redirect: to.fullPath
            }
        if (!isRouteAvailable(to)) {
            return {
                name: 'pageNotFound'
            }
        }
    }
})

export default router
