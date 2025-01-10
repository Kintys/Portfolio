import { useAuthStore } from '@/stores/auth'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'

export function isAuth() {
    return useAuthStore().isAuthenticated
}

export function isRouteAvailable(routeItem) {
    const { getCurrentUserPermissions, getCurrentUser } = storeToRefs(useUsersStore())

    return (
        !routeItem.meta?.requireAuth ||
        (routeItem.meta?.hasAccess && routeItem.meta.hasAccess(getCurrentUserPermissions?.value)) ||
        (!routeItem.meta?.hasAccess && getCurrentUser?.value)
    )
}
