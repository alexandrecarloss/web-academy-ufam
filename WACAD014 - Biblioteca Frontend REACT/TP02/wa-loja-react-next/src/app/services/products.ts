import { api } from './api';

export function getProductsList() {
    return api.get('/produto').then((response) => response.data)
}
