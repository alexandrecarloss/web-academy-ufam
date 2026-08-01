import { api } from "./api"
import { Product } from "@/app/types/product"

export const favoritesService = {
  getFavorites: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>("/favoritos")
    return response.data
  },

  addFavorite: async (product: Product): Promise<Product> => {
    const response = await api.post<Product>("/favoritos", product)
    return response.data
  },

  removeFavorite: async (id: string): Promise<void> => {
    await api.delete(`/favoritos/${id}`)
  }
}