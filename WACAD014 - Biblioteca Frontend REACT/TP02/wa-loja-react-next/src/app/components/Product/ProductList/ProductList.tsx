import { ProductCard } from "../ProductCard/ProductCard";
import { ProductItemType } from "../../../types/product";
import { useProductList } from "@/app/hooks/useProductList";

interface ProductListProps {
  addToCart: (product: ProductItemType) => void;
}

export function ProductList({ addToCart }: ProductListProps) {
  const { products, isPending, isError } = useProductList()
  if (isPending) return 'Buscando dados...'

  if (isError) return 'Ocorreu um erro! Tente novamente.'

  if (!products) return 'Não há produtos disponíveis no momento'

  console.log(products)

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {products.map((product: ProductItemType) => (
          <ProductCard key={product.id} productItem={product} addToCart={addToCart}/>
        ))}
      </div>
    </>
  );
}
