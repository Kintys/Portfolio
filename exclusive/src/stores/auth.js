import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGeneralStore } from './general'
import { useUsersStore } from './users'
import AuthOperations from './helpers/AuthOperations.js'

export const useAuthStore = defineStore('auth', () => {
    const generalStore = useGeneralStore()
    const usersStore = useUsersStore()
    const { generalApiOperation } = generalStore

    const auth = ref(null)

    const isAuthenticated = computed(() => (auth.value && usersStore.getCurrentUser ? true : false))

    async function loginEmail(userData) {
        return new Promise((resolve, reject) => {
            generalApiOperation({
                operation: () =>
                    AuthOperations.loginWithEmailAndPassword(userData)
                        .then((userData) => {
                            return resolve(registerUserToStore(userData))
                        })
                        .catch((error) => reject(error))
            })
        })
    }

    async function signInWithEmailAndPassword(newUserData) {
        return new Promise((resolve, reject) => {
            generalApiOperation({
                operation: () => AuthOperations.createNewUserWithEmailAndPassword(newUserData)
            })
                .then((userData) => {
                    return resolve(registerUserToStore(userData))
                })
                .catch((error) => reject(error))
        })
    }
    function loginWithGoogleAccount() {
        return new Promise((resolve, reject) => {
            generalApiOperation({
                operation: () => AuthOperations.authWithGoogleEmail()
            })
                .then((userData) => {
                    if (userData) {
                        return resolve(registerUserToStore(userData))
                    } else throw new Error('user is not defined')
                })
                .catch((error) => reject(error))
        })
    }
    function loginWithGoogleToken() {
        if (isAuthenticated.value) return
        return new Promise((resolve, reject) => {
            generalApiOperation({
                operation: () => AuthOperations.loadUserByToken('/auth/user')
            })
                .then((userData) => {
                    if (userData) {
                        return resolve(registerUserToStore(userData))
                    } else throw new Error('user is not defined')
                })
                .catch((error) => reject(error))
        })
    }
    function registerUserToStore(userData) {
        auth.value = userData.auth
        usersStore.addUser(userData.data)
        return true
    }

    function logOut() {
        generalApiOperation({
            operation: () => AuthOperations.logout()
        })
        auth.value = null
        usersStore.currentUser = null
    }

    return {
        signInWithEmailAndPassword,
        loginWithGoogleAccount,
        logOut,
        loginEmail,
        isAuthenticated,
        loginWithGoogleToken
    }
})
