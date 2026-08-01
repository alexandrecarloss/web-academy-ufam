'use client'

import { createContext, ReactNode } from 'react'
import { calculateDiscountedPrice } from "@/app/helpers"
import { Product } from "@/app/types/product"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { favoritesService } from "@/app/services/favoritesService"
import { toast } from 'react-toastify'

type FavoriteContextType = {
  favorites: Product[]
  isLoading: boolean
  isError: boolean
  checkIsFavorite: (id: string) => boolean
  removeFavorite: (id: string) => void
  addToFavorites: (product: Product) => void
  totalFavoriteValue: number
  isPendingMutation: boolean
}

export const FavoritesContext = createContext<FavoriteContextType>({
  favorites: [],
  isLoading: false,
  isError: false,
  checkIsFavorite: () => false,
  removeFavorite: () => {},
  addToFavorites: () => {},
  totalFavoriteValue: 0,
  isPendingMutation: false
})

export default function FavoritesProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient()

  const { data: favorites = [], isLoading, isError } = useQuery<Product[]>({
    queryKey: ['favorites'],
    queryFn: favoritesService.getFavorites
  })

  const addMutation = useMutation<Product, Error, Product>({
    mutationFn: favoritesService.addFavorite,
    onSuccess: (product: Product) => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
      toast.success(`Produto "${product?.nome || 'item'}" adicionado aos favoritos!`)
    },
    onError: (error: Error) => {
      toast.error(`Erro ao adicionar aos favoritos: ${error.message}`)
    }
  })

  const removeMutation = useMutation<void, Error, string>({
    mutationFn: favoritesService.removeFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
      toast.success('Produto removido dos favoritos!')
    },
    onError: (error: Error) => {
      toast.error(`Erro ao remover dos favoritos: ${error.message}`)
    }
  })

  const checkIsFavorite = (id: string) => {
    return favorites.some((item: Product) => item.id === id)
  }

  const addToFavorites = (product: Product) => {
    addMutation.mutate(product)
  }

  const removeFavorite = (id: string) => {
    removeMutation.mutate(id)
  }

  const totalFavoriteValue = favorites.reduce((acc: number, product: Product) => {
    return (
      acc + calculateDiscountedPrice(Number(product.preco), product.desconto)
    )
  }, 0)

  const isPendingMutation = addMutation.isPending || removeMutation.isPending

  const values = {
    favorites,
    isLoading,
    isError,
    checkIsFavorite,
    removeFavorite,
    addToFavorites,
    totalFavoriteValue,
    isPendingMutation
  }

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  )
}