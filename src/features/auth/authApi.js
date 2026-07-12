import api from "../../services/axios";

export const registerApi = async (data) => {
    const response = await api.post("/register",data);
    return response.data;
}

export const loginApi = async (data) => {
    const response = await api.post("/login",data);
    return response.data;
}
