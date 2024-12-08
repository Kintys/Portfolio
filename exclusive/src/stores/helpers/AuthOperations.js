import RequestManager from './RequestManager'

class AuthOperations {
    static apiUrl = RequestManager.apiBase

    static getWindowsParams(windowWidth = 620, windowHeight = 620) {
        const screenWidth = window.screen.width
        const screenHeight = window.screen.height

        const left = Math.max(0, (screenWidth - windowWidth) / 2)
        const top = Math.max(0, (screenHeight - windowHeight) / 2)

        return `left=${left},top=${top},width=${windowWidth},height=${windowHeight}`
    }

    static authWithGoogleEmail = () => {
        const windowFeatures = AuthOperations.getWindowsParams()
        const authWindow = window.open(`${this.apiUrl}/auth/login/google`, 'google', windowFeatures)

        return new Promise((resolve, reject) => {
            const interval = setInterval(async () => {
                if (!authWindow || authWindow.closed) {
                    clearInterval(interval)
                    reject(new Error('Auth window was closed by the user.'))
                    return
                }

                try {
                    const url = authWindow.location.href
                    if (url.includes('token=')) {
                        const queryParams = new URLSearchParams(new URL(url).search)
                        const token = queryParams.get('token')
                        RequestManager.saveUserToken(token)
                        if (token) {
                            authWindow.close()
                            clearInterval(interval)

                            try {
                                const user = await AuthOperations.loadUserByToken('/auth/user')
                                resolve(user)
                            } catch (err) {
                                reject(err)
                            }
                        }
                    }
                } catch (err) {
                    throw new Error('URL is Incorrect')
                }
            }, 1000)
        })
    }
    static loginWithEmailAndPassword(userData) {
        return new Promise((resolve, reject) => {
            RequestManager.postRequest('/auth/login', userData, false)
                .then((user) => {
                    if (!user.token) throw new Error('Token is incorrect')
                    RequestManager.saveUserToken(user.token)

                    return resolve({
                        data: user.user,
                        auth: RequestManager.getToken()
                    })
                })
                .catch((error) => reject(error))
        })
    }

    static loadUserByToken(path) {
        return new Promise((resolve, reject) => {
            RequestManager.getRequest(path)
                .then((user) => {
                    return resolve({
                        data: user.user,
                        auth: RequestManager.getToken()
                    })
                })
                .catch((error) => reject(error))
        })
    }
    static createNewUserWithEmailAndPassword(userData) {
        return new Promise((resolve, reject) => {
            RequestManager.postRequest('/auth/signup', userData, false)
                .then((user) => {
                    if (!user.token) throw new Error('Token is incorrect')
                    RequestManager.saveUserToken(user.token)

                    return resolve({
                        data: user.user,
                        auth: RequestManager.getToken()
                    })
                })
                .catch((err) => {
                    return reject(err)
                })
        })
    }
    static logout() {
        return new Promise((resolve, reject) => {
            RequestManager.deleteUserToken()
                .then((res) => {
                    if (res && !RequestManager.getToken()) return resolve(true)
                })
                .catch((err) => {
                    return reject(err)
                })
        })
    }
}
export default AuthOperations
