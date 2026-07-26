import { ProductItemType } from "../types/product";
import { favoriteApi } from './api'

export async function addFavoriteProduct(product: ProductItemType) {
    new Promise((resolve) => setTimeout(resolve, 1000))

    return favoriteApi
    .post<ProductItemType>('/favoritos', product)
    .then((response) => response.data)
}

export function getFavoriteProducts() {
    return favoriteApi.get('/favoritos').then((response) => response.data)
}

export function removeFavoriteProduct(id: string) {
    return favoriteApi.delete<ProductItemType>(`/favoritos/${id}`)
}