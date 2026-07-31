'use client'

import { Product } from "@/app/types/product"
import React, { createContext, useState } from "react"

type FavoriteContextType = {
  favorites: Product[]
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>> | ((value: Product[]) => {})
}

export const FavoritesContext = createContext<FavoriteContextType>({
  favorites: [],
  setFavorites: () => ({})
})

interface FavoritesProviderProps {
  children: React.ReactNode
}

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Product[]>([])

  const values = {
    favorites,
    setFavorites
  }

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider