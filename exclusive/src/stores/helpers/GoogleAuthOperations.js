import { auth } from '@/firebase-config.js'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

class GoogleAuthOperations {
  constructor({
    saveCredentialsInLocalStorage = true,
    authCredentialLocalStorageKey = 'authCredential'
  } = {}) {
    this.saveCredentialsInLocalStorage = saveCredentialsInLocalStorage
    this.authCredentialLocalStorageKey = authCredentialLocalStorageKey
  }

  loginWithGoogleAccountPopup() {
    return new Promise((resolve, reject) => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((loginResult) => {
          resolve(loginResult?.user)
        })
        .catch((error) => {
          reject(error)
          // const errorCode = error.code;
          // const errorMessage = error.message;
        })
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
