import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGeneralStore } from './general'
import { useUsersStore } from './users'
import authOperations from './helpers/GoogleAuthOperations.js'

export const useAuthStore = defineStore('auth', () => {
    const generalStore = useGeneralStore()
    const usersStore = useUsersStore()
    const { generalApiOperation } = generalStore

    const user = ref(null)

    const getUser = computed(() => user.value)

    async function signUpWithWithEmailAndPassword(email, password) {
        generalApiOperation({
            operation: () => authOperations.signUpWithWithEmailAndPassword({ email, password })
        }).then(async (res) => {
            user.value = res

            await usersStore.addUserWithCustomId({
                id: user?.value?.uid,
                data: {
                    email,
                    permissions: {
                        create: false,
                        read: true,
                        update: false,
                        delete: false
                    }
                }
            })
        })
    }

    async function signInWithWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            generalApiOperation({
                operation: () => authOperations.signInWithWithEmailAndPassword({ email, password })
            })
                .then((res) => {
                    user.value = res
                    usersStore
                        .loadUserById(user.value.uid)
                        .then(() => {
                            resolve(res)
                        })
                        .catch((error) => reject(error))
                })
                .catch((error) => reject(error))
        })
    }

    function loginWithGoogleAccount() {
        return new Promise((resolve, reject) => {
            generalApiOperation({
                operation: () => authOperations.loginWithGoogleAccountPopup()
            })
                .then((res) => {
                    user.value = res

                    usersStore
                        .addUserWithCustomId({
                            id: user?.value?.uid,
                            data: {
                                email: user?.value?.email,
                                permissions: {
                                    create: false,
                                    read: true,
                                    update: false,
                                    delete: true
                                }
                            }
                        })
                        .then(() => {
                            usersStore.loadUserById(user.value.uid).then(() => {
                                resolve(res)
                            })
                        })
                })
                .catch((error) => reject(error))
        })
    }
    function loginWithGoogleToken() {
        return new Promise((resolve, reject) => {
            generalApiOperation({
                operation: () => authOperations.loginWithCredential()
            })
                .then((res) => {
                    if (res) {
                        user.value = res.user

                        usersStore
                            .addUserWithCustomId({
                                id: user?.value?.uid,
                                data: {
                                    email: user?.value?.email,
                                    permissions: {
                                        create: false,
                                        read: true,
                                        update: false,
                                        delete: true
                                    }
                                }
                            })
                            .then(() => {
                                usersStore.loadUserById(user.value.uid).then(() => {
                                    resolve(res)
                                })
                            })
                    } else return
                })
                .catch((error) => reject(error))
        })
    }

    function logOut() {
        generalApiOperation({
            operation: () => authOperations.logout()
        })
        usersStore.currentUser = null
    }

    async function getAuthData() {
        return user.value
    }

    return {
        signUpWithWithEmailAndPassword,
        signInWithWithEmailAndPassword,
        loginWithGoogleAccount,
        logOut,
        getUser,
        getAuthData,
        loginWithGoogleToken
    }
})
