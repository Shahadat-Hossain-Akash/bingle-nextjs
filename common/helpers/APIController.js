const {default: axios} = require("axios");

export const API_URL = "http://127.0.0.1:8000/api/v1";

export const createJWTInterceptor = () => {
    const jwt = axios.create({baseURL: API_URL});

    jwt
        .interceptors
        .response
        .use((response) => {
            return response;
        }, (error) => {
            return Promise.reject(error);
        });

    return jwt;
};

const client = createJWTInterceptor();

const APIController = {
    public: {
        getServer: () => {
            const url = "/server/";
            return client.get(url);
        }
    }
};

export default APIController;
