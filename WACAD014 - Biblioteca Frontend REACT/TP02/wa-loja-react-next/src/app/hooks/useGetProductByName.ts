import { useQuery } from "@tanstack/react-query";
import { getProductByName } from "../services/products"; 

export function useGetProductByName(name: string) {
    const { data, isPending, isError } = useQuery({
        queryKey: ['productByName'], 
        queryFn: () => getProductByName(name),
        retry: false
    });

    return { product: data, isPending, isError };
}