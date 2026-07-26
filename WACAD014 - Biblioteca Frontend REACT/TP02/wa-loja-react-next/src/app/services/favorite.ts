import { ProductItemType } from "../types/product";
import { favoriteApi } from './api'

export async function addFavoriteProduct(product: ProductItemType) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return favoriteApi
    .post<ProductItemType>('/favoritos', product)
    .then((response) => response.data)
}