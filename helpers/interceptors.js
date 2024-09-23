import { API_URL } from "@/common/helpers/APIController"

const { default: axios } = require("axios")


const useJWTInterceptor = () => {
    const jwt = axios.create({baseURL: API_URL})

    jwt.interceptors.response.use(
        (response) => {
            return response
        }
    )

    return jwt
}

export default useJWTInterceptor