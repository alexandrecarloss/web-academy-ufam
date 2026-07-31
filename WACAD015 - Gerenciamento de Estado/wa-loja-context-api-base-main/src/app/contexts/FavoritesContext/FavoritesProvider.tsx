'use client'

import { Product } from "@/app/types/product"
import React, { createContext, useState } from "react"

type FavoriteContextType = {
  favorites: Product[]
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>
}

export const FavoritesContext = createContext<FavoriteContextType>({
  favorites: [],
  setFavorites: () => {}
})

const FavoritesProvider = ({ children }: {children: React.ReactNode}) => {
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