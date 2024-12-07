import RequestManager from './RequestManager'

class AuthOperations {
    static loginWithGoogle = (apiUrl) => {
        if (!apiUrl) return console.warn('host must be required')

        const windowFeatures = 'left=100,top=100,width=620,height=620'
        const authWindow = window.open(`${apiUrl}`, 'google', windowFeatures)

        const apiHost = AuthOperations.getBaseUrlFromLink(apiUrl)

        const messageListener = (event) => {
            if (event.origin !== apiHost) return

            window.removeEventListener('message', messageListener)

            authWindow.close()

            return (userData = JSON.parse(atob(event.data)))
        }

        window.addEventListener('message', messageListener)
    }
    static getBaseUrlFromLink(link) {
        const url = new URL(link)
        return `${url.protocol}//${url.host}`
    }
    static async getUserByToken(path) {
        return await RequestManager.getRequest(path)
    }
}
export default AuthOperations
// http://localhost:3000/api/v1/auth/login/google
