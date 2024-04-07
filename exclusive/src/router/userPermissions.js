import { useAuthStore } from '@/stores/auth'
import { useUsersStore } from '@/stores/users'

export function isAuthenticated() {
  return useAuthStore().getUser
}

export function isRouteAvailable(routeItem) {
  const { getCurrentUserPermissions, getCurrentUser } = useUsersStore()
  return (
    !routeItem.meta?.requireAuth ||
    (routeItem.meta?.hasAccess && routeItem.meta.hasAccess(getCurrentUserPermissions)) ||
    (!routeItem.meta?.hasAccess && getCurrentUser?.value)
  )
}
