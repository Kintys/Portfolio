import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from '@/stores/users'

function getCurrentUserWithNewPermissions(currentUserObj, rulesValue) {
    return {
        id: currentUserObj.id,
        data: {
            email: currentUserObj.email,
            permissions: {
                ...currentUserObj.permissions,
                rules: rulesValue
            }
        }
    }
}

export const useAgreementsStore = defineStore('agreements', () => {
    const usersStore = useUsersStore()
    const dialogWindow = ref(false)
    const currentUser = ref(null)
    const showDialog = computed(() => dialogWindow.value)

    async function openDialog() {
        dialogWindow.value = true
    }
    async function closeDialog() {
        dialogWindow.value = false
    }
    async function acceptUserAnswer() {
        const addRules = getCurrentUserWithNewPermissions(currentUser.value, true)
        console.log(addRules)
        usersStore.updateUser(addRules)
    }
    async function rejectUserAnswer() {
        const addRules = getCurrentUserWithNewPermissions(currentUser.value, false)
        usersStore.updateUser(addRules)
    }

    async function loadCurrentUser() {
        currentUser.value = await usersStore.getCurrentUser
    }
    async function checkAcceptRules() {
        await loadCurrentUser()
        const hasRules = currentUser.value.permissions.rules
        if (!hasRules) {
            openDialog()
        } else return
    }

    return {
        showDialog,
        checkAcceptRules,
        acceptUserAnswer,
        rejectUserAnswer,
        closeDialog
    }
})
