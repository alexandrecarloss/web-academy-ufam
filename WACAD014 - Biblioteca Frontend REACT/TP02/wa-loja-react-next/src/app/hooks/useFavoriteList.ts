import { useQuery } from "@tanstack/react-query";
import { getFavoriteProducts } from "../services/favorite";

export function useFavoriteList() {
    const { data, isPending, isError } = useQuery({
        queryKey: ['favoriteList'],
        queryFn: () => getFavoriteProducts()
    })

    return { favorites: data, isPending, isError }
}