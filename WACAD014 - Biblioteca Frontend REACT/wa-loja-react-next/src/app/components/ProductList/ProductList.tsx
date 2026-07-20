import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList() {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    </>
  );
}
