import axios from 'axios'
export default class RequestManager {
    static apiBase = 'http://localhost:3000/api/v1'

    static http = axios

    static getServerRoute(path) {
        return `${RequestManager.apiBase}${path}`
    }

    static isAuthenticated() {
        return localStorage.getItem('jwt_token')
    }

    // static async onLogout() {
    //     try {
    //         localStorage.removeItem('jwt_token')
    //         return true
    //     } catch (error) {
    //         console.error('Error during logout:', error)
    //     }
    // }

    static async doPostRequest(url, data, redirectRoute, callback, addAuthorization = true) {
        try {
            // Налаштування заголовків запиту
            const headers = { 'Content-Type': 'application/json' }
            // Якщо маршрут потребує автентифікації і користувач виконав автентифікацію
            if (addAuthorization && RequestManager.isAuthenticated()) {
                // Додаємо токен до заголовків запиту
                headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
            }

            // Виконання запиту
            const response = await fetch(RequestManager.getServerRoute(url), {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })

            const resData = await response.json()

            // Обробка успішного запиту
            if (response.ok) {
                if (callback) {
                    callback(resData)
                }
                window.location.href = redirectRoute
            } else {
                const result = await response.json()
                this.showErrors(result.errors)
            }
        } catch (error) {
            console.error('Error:', error)
            this.showErrors([{ message: 'Network error. Please try again later.' }])
        }
    }

    // Метод для відображення помилок
    // static showErrors(errors, errorsContainerSelector = '#errors') {
    //     let errorsContainer = document.querySelector(errorsContainerSelector)
    //     if (!errorsContainer) {
    //         // Якщо контейнер для помилок не існує, створюємо його
    //         errorsContainer = document.createElement('div')
    //         errorsContainer.id = errorsContainerSelector.replace('#', '')
    //         document.body.append(errorsContainer)
    //     }
    //     errorsContainer.innerHTML = ''
    //     errors.forEach((error) => {
    //         const errorMessage = document.createElement('div')
    //         errorMessage.classList.add('error-message')
    //         errorMessage.textContent = error.message
    //         errorsContainer.append(errorMessage)
    //     })
    // }

    // Метод для виконання POST запиту з даними форми

    static async getRequest(path, params, addAuthorization = true) {
        const headers = { 'Content-Type': 'application/json' }
        if (addAuthorization && RequestManager.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
        }
        try {
            const response = await RequestManager.http.get(RequestManager.getServerRoute(path), {
                params,
                headers
            })
            if (response.status !== 200) throw new Error(response.data.error)
            else {
                return response.data
            }
        } catch (error) {
            return error
        }
    }

    static async postRequest(path, data) {
        try {
            const response = await RequestManager.http.post(RequestManager.getServerRoute(path), {
                data
            })
            if (!response.ok) throw new Error(response.data)
            else return response.data
        } catch (error) {
            return error
        }
        // const headers = {}
        // if (addAuthorization && RequestManager.isAuthenticated()) {
        //     headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
        // }
        // const formData = new FormData(form)
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: headers,
        //     body: formData
        // })
        // const data = await response.json()
        // return data
    }

    // Загальний метод для виконання POST запиту
    static async postRequest(route, body, addAuthorization = true) {
        const headers = { 'Content-Type': 'application/json' }
        if (addAuthorization && RequestManager.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
        }

        const response = await fetch(route, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
        const data = await response.json()
        return data
    }

    // Метод для виконання DELETE запиту
    static async deleteRequest(route, id, addAuthorization = true) {
        const headers = { 'Content-Type': 'application/json' }
        if (addAuthorization && RequestManager.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
        }

        const response = await fetch(route, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({ id })
        })
        const data = await response.json()
        window.location.reload(true)
        return data
    }

    // Метод для обробки вибору файлу
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

    // Метод для виконання GET запиту
    static async fetchData(url, addAuthorization = true) {
        let response
        try {
            const headers = { 'Content-Type': 'application/json' }
            if (addAuthorization && RequestManager.isAuthenticated()) {
                headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
            }

            response = await fetch(this.getServerRoute(url), {
                method: 'GET',
                headers: headers
            })

            if (response.ok) {
                const data = await response.json()
                return data
            } else {
                const result = await response.json()
                this.showErrors(result.errors)
                return null
            }
        } catch (error) {
            console.error('Error:', error)
            this.showErrors([{ message: 'Network error. Please try again later.' }])
            return null
        }
    }

    // Метод для отримання налаштувань
    static async fetchSettings() {
        return this.fetchData('/settings', false)
    }
}
