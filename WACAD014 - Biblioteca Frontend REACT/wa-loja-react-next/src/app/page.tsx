"use client";
import { ProductList } from "./components/ProductList/ProductList";
import { CartSummary } from "./components/CartSummary/CartSummary";

export default function Products() {
  return (
    <>
      <main>
        <div className="container p-5">
          <CartSummary/>
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ProductList/>
        </div>
      </main>
    </>
  );
}
