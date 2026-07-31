'use client'
import { FavoritesContext } from "@/app/contexts/FavoritesContext/FavoritesProvider"
import { useContext } from "react"

export function useFavoritesContext() {
  const favoriteContext = useContext(FavoritesContext)

  if (!favoriteContext) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesProvider'
    )
  }

  return favoriteContext
}