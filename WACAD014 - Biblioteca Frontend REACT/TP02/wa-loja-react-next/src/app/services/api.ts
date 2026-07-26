import axios from "axios";

export const api = axios.create({
    baseURL: "https://ranekapi.origamid.dev/json/api"
})

export const favoriteApi = axios.create({
    baseURL: 'https://favorites-json-server-gamma.vercel.app/'
})