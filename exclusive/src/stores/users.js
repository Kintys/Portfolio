import DbOperations from './helpers/DbOperations'

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGeneralStore } from './general'

export const useUsersStore = defineStore('users', () => {
    const { generalApiOperation } = useGeneralStore()

    const currentUser = ref(null)

    async function addUser(userData) {
        currentUser.value = await generalApiOperation({
            operation: () => userData
        })
    }

    const getCurrentUser = computed(() => currentUser.value)
    const getCurrentUserPermissions = computed(() => {
        if (currentUser.value) return currentUser.value.isAdmin === 'true'
        else return false
    })
    return {
        addUser,
        getCurrentUserPermissions,
        currentUser,
        getCurrentUser
    }
})
