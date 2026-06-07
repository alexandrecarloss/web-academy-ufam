import getEnv from "../utils/getEnv.js"
import type { Product } from "../types/product.js";

const env = getEnv()

export const getProducts = async () => {
    const response = await fetch(env.PATH_API)
    return response.json()
}

export const createProduct = async(product: Product) => {
    const response = await fetch(env.PATH_API, {
        method: "POST",
        body: JSON.stringify(product),
    })
    return response.json()
}