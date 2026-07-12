import axios from "axios";

const baseUrl = "http://localhost:5001/api";
const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "content-Type": "application/json"
    }
})

// Request Interceptor

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("config: ", config);
        
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401){
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }

);

export default api;