import { ProductCard } from "../ProductCard/ProductCard";
import { ProductItemType } from "../../../types/product";

interface ProductListProps {
  productItems: ProductItemType[];
  addToCart: (product: ProductItemType) => void;
}

export function ProductList({ productItems, addToCart }: ProductListProps) {
  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {productItems.map((item) => (
          <ProductCard key={item.id} productItem={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}
