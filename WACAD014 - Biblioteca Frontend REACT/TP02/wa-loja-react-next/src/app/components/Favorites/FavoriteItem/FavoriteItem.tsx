import { ProductItemType } from "@/app/types/product";
import { toast } from "react-toastify";
import { useRemoveFavorite } from "@/app/hooks/useRemoveFavorite";
import { useQueryClient } from "@tanstack/react-query";

interface FavoriteCardProps {
  favorite: ProductItemType;
}

export function FavoriteItem({ favorite }: FavoriteCardProps) {
    const queryClient = useQueryClient();
  const { id, nome, preco } = favorite;

  const handleSuccess = () => {
    toast.success('Produto favorito removido!')
    queryClient.invalidateQueries({ queryKey: ['favoriteList'] })
  }

  const handleError = () => {
    toast.error('Erro ao excluir produto favorito. Tente novamente.')
  }

  const { removeFavoriteProduct } = useRemoveFavorite(handleSuccess, handleError)

  return (
    <>
      <tr key={id}>
        <td>{nome}</td>
        <td>R$ {preco}</td>
        
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFavoriteProduct(id)}
          >
            Remover
          </button>
        </td>
      </tr>
    </>
  );
}
