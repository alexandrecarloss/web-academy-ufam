import { ProductItemType } from "@/app/types/product";
import { FavoriteItem } from '../FavoriteItem/FavoriteItem'
import { useFavoriteList } from "@/app/hooks/useFavoriteList";

export function FavoriteList() {
  const { favorites, isPending, isError } = useFavoriteList()

  if (isPending) return 'Buscando dados...'

  if (isError) return 'Ocorreu um erro! Tente novamente.'

  if (!favorites) return 'Não há favoritos disponíveis no momento'

  return (
    <>
      <div className="card mb-4">
        <div className="row card-body">
          <h5 className="card-title mb-4 fw-light">Produtos favoritos</h5>
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Valor </th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody>
                {favorites.map((favorite: ProductItemType) => (
                  <FavoriteItem key={favorite.id} favorite={favorite} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
