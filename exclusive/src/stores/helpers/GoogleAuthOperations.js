import { auth } from '@/firebase-config.js'
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithCredential
} from 'firebase/auth'

class GoogleAuthOperations {
    constructor({ saveCredentialsInLocalStorage = true, authCredentialLocalStorageKey = 'authCredential' } = {}) {
        this.saveCredentialsInLocalStorage = saveCredentialsInLocalStorage
        this.authCredentialLocalStorageKey = authCredentialLocalStorageKey
    }
    saveLoginUserData(loginResult) {
        //--------- user access token -------
        // This gives you a Google Access Token. You can use it to access the Google API.
        let credential = GoogleAuthProvider.credentialFromResult(loginResult)
        localStorage.setItem(this.authCredentialLocalStorageKey, JSON.stringify(credential))
    }
    loginWithGoogleAccountPopup() {
        return new Promise((resolve, reject) => {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then((loginResult) => {
                    if (this.saveCredentialsInLocalStorage) this.saveLoginUserData(loginResult)

                    resolve(loginResult?.user)
                })
                .catch((error) => {
                    reject(error)
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                })
        })
    }
    loginWithCredential(credential) {
        if (!credential && this.authCredentialLocalStorageKey) {
            credential = localStorage.getItem(this.authCredentialLocalStorageKey)
        }
        return new Promise((resolve, reject) => {
            if (credential) {
                credential = JSON.parse(credential)
                credential = GoogleAuthProvider.credential(credential.idToken)
                signInWithCredential(auth, credential)
                    .then((loginResult) => {
                        if (this.saveCredentialsInLocalStorage) this.saveLoginUserData(loginResult)
                        resolve(loginResult)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            } else resolve(false)
        })
    }

    signUpWithWithEmailAndPassword({ email, password }) {
        return new Promise((resolve, reject) => {
            if (!email || !password) reject(false)
            else {
                const auth = getAuth()
                createUserWithEmailAndPassword(auth, email, password)
                    .then((loginResult) => {
                        resolve(loginResult?.user)
                    })
                    .catch((error) => {
                        reject(error)
                        // const errorCode = error.code;
                        // const errorMessage = error.message;
                    })
            }
        })
    }
    signInWithWithEmailAndPassword({ email, password }) {
        return new Promise((resolve, reject) => {
            if (!email || !password) reject(false)
            else {
                const auth = getAuth()
                signInWithEmailAndPassword(auth, email, password)
                    .then((loginResult) => {
                        resolve(loginResult?.user)
                    })
                    .catch((error) => {
                        reject(error)
                        // const errorCode = error.code;
                        // const errorMessage = error.message;
                    })
            }
        })
    }

    logout() {
        return new Promise((resolve, reject) => {
            signOut(auth)
                .then(() => {
                    localStorage.removeItem(this.authCredentialLocalStorageKey)
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

export default new GoogleAuthOperations(import.meta.VITE_SAVE_CREDENTIALS_IN_LOCAL_STORE)
