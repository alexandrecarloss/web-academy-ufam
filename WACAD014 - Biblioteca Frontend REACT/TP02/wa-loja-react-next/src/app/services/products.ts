import { api } from './api';

export function getProductsList() {
    return api.get('/produto').then((response) => response.data)
}

export function getProductByName(name: string) {
    return api.get(`/produto/${name}`).then((response) => response.data)
}