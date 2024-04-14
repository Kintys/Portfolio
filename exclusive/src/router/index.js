import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/home-page/HomeView.vue'

import { isAuthenticated, isRouteAvailable } from '@/router/userPermissions.js'
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
                name: 'sign up',
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
        component: HomeView,
        meta: {
            requireAuth: true,
            useInMenu: true
        }
    },
    {
        path: '/account',
        name: 'account',
        component: HomeView,
        meta: {
            requireAuth: false,
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
    if (to.meta?.requireAuth) {
        if (!isAuthenticated())
            return {
                name: 'login'
            }
        if (!isRouteAvailable(to)) {
            return {
                name: 'pageNotFound'
            }
        }
    }
})

export default router
