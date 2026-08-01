import axios from "axios";

export const api = axios.create({
    baseURL: "https://favorites-context-api-json-server-m.vercel.app"
})