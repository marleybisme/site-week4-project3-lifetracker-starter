import axios from 'axios';


class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "lifetracker_token"
    }

    setToken(token) {
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }

    async request({endpoint, method=`GET`, data={}}) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        if(this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const res = await axios({url, method, data, headers})
            return {data: res?.data, error: null}
        } catch (err) {
            console.error({errorResponse: err})
            const message = err?.response?.data?.err?.message
            return { data: null, error: message || String(err)}
        }
    }

    // async listPosts() {
    //     return await this.request({ endpoint: `posts`,  method: `GET`})
    // }

    // async createPost(post) {
    //     return await this.request({ endpoint: `posts`, method: `POST`, data: post})
    // }

    async fetchUserFromToken() {
        return await this.request({ endpoint: `auth/me`, method: `GET`})
    }

    async loginUser(credentials) {
        console.log("api hit")
        return await this.request({endpoint: `auth/login`, method: `POST`, data: credentials })
    }
    async signupUser(credentials) {
        return await this.request({endpoint: `auth/register`, method: `POST`, data: credentials })
    }

    async enterNutrition(nutritionData) {
        return await this.request({endpoint: `auth/nutrition`, method: `POST`, data: nutritionData})
    }

}

export default new ApiClient("http://localhost:3001");
