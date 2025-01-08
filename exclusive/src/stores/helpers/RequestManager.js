import axios from 'axios'
export default class RequestManager {
    static apiBase = 'http://localhost:3000/api/v1'

    static http = axios

    static tokenName = 'exclusive_token'

    static getServerRoute(path) {
        return `${RequestManager.apiBase}${path}`
    }
    static saveUserToken(token) {
        localStorage.setItem(RequestManager.tokenName, token)
    }
    static deleteUserToken() {
        localStorage.removeItem('exclusive_token')
        return true
    }
    static getToken() {
        return localStorage.getItem(RequestManager.tokenName)
    }

    static async getRequest(path, params, addAuthorization = true) {
        const headers = { 'Content-Type': 'application/json' }
        if (addAuthorization && RequestManager.getToken()) {
            headers['Authorization'] = `Bearer ${RequestManager.getToken()}`
        }
        try {
            const response = await RequestManager.http.get(RequestManager.getServerRoute(path), {
                params,
                headers: headers
            })

            if (response.status !== 200) throw new Error(response.data.error)
            else {
                return response.data
            }
        } catch (error) {
            return error
        }
    }
    static async postFormRequest(path, body, addAuthorization = true) {
        const headers = {}
        //    const headers = { 'Content-Type': 'multipart/form-data' }
        if (addAuthorization && RequestManager.getToken()) {
            headers['Authorization'] = `Bearer ${RequestManager.getToken()}`
        }
        try {
            const response = await RequestManager.http.post(RequestManager.getServerRoute(path), body, {
                headers: headers
            })
            if (response.status >= 300 && response.status <= 500) throw new Error(response.data)
            else return response.data
        } catch (error) {
            return error
        }
    }

    static async postRequest(path, body, addAuthorization = true) {
        const headers = { 'Content-Type': 'application/json' }
        if (addAuthorization && RequestManager.getToken()) {
            headers['Authorization'] = `Bearer ${RequestManager.getToken()}`
        }
        try {
            const response = await RequestManager.http.post(RequestManager.getServerRoute(path), body, {
                headers: headers
            })
            if (response.status >= 300 && response.status <= 500) return response.data.errors
            else return response.data
        } catch (error) {
            if (error.response) {
                return {
                    status: error.response.status,
                    message: error.response.data?.message || 'An error occurred',
                    errors: error.response.data?.errors || []
                }
            } else if (error.request) {
                return {
                    status: 0,
                    message: 'No response received from server',
                    errors: []
                }
            } else {
                return {
                    status: -1,
                    message: error.message,
                    errors: []
                }
            }
        }
    }

    static async deleteRequest(path, data, addAuthorization = true) {
        const headers = { 'Content-Type': 'application/json' }
        if (addAuthorization && RequestManager.getToken()) {
            headers['Authorization'] = `Bearer ${RequestManager.getToken()}`
        }
        try {
            const response = await RequestManager.http.delete(RequestManager.getServerRoute(path), {
                headers: headers,
                params: data
            })
            if (response.status >= 300 && response.status <= 500) throw new Error(response.data)
            else return response.data
        } catch (error) {
            return error
        }
    }
    static async getRequestWithBlob(path, addAuthorization = true) {
        const headers = {}
        if (addAuthorization && RequestManager.getToken()) {
            headers['Authorization'] = `Bearer ${RequestManager.getToken()}`
        }
        try {
            const response = await RequestManager.http.get(path, {
                headers,
                responseType: 'blob'
            })

            if (response.status >= 300 && response.status <= 500) throw new Error(response.data)
            return await response.data
        } catch (error) {
            return error
        }
    }

    static handleFileSelect(event, imgSelector) {
        const file = event.target.files[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = function (e) {
                const imgElement = document.querySelector(imgSelector)
                imgElement.src = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
}
