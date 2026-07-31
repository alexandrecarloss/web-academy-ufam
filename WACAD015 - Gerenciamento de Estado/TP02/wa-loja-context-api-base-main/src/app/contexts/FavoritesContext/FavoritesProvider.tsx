'use client'

import { calculateDiscountedPrice } from "@/app/helpers"
import { Product } from "@/app/types/product"
import React, { createContext, useState } from "react"

type FavoriteContextType = {
  favorites: Product[]
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>
  checkIsFavorite: (id: string) => boolean
  removeFavorite: (id: string) => void
  addToFavorites: (product: Product) => void
  totalFavoriteValue: number
}

export const FavoritesContext = createContext<FavoriteContextType>({
  favorites: [],
  setFavorites: () => {},
  checkIsFavorite: () => false,
  removeFavorite: () => {},
  addToFavorites: () => {},
  totalFavoriteValue: 0
})

const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([])

  const checkIsFavorite = (id: string) => 
    favorites.some((item) => item.id === id)

  const removeFavorite = (id: string) => {
    setFavorites((currentFavorites) => currentFavorites.filter((item) => item.id !== id))
  }

  const addToFavorites = (productToAdd: Product) => {
    setFavorites((currentFavorites) => [...currentFavorites, productToAdd])
  }

  const totalFavoriteValue = favorites.reduce((acc, product) => {
    return (
      acc + calculateDiscountedPrice(Number(product.preco), product.desconto)
    )
  }, 0)

  const values = {
    favorites,
    setFavorites,
    checkIsFavorite,
    removeFavorite,
    addToFavorites,
    totalFavoriteValue
  }

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider