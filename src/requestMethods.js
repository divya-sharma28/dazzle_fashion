import axios from "axios";

const TOKEN = localStorage.getItem('access_token');
// console.log(TOKEN)
export const publicRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export const userRequest= axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers:{access_token: `Bearer ${TOKEN}`}
});