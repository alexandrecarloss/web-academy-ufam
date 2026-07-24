"use client";
import { ProductList } from "./components/Product/ProductList/ProductList";
import { CartSummary } from "./components/Cart/CartSummary/CartSummary";
import { useEffect, useState } from "react";
import { ProductItemType } from "./types/product";

export default function Products() {
  const [qtdTotalItems, setQtdTotalItems] = useState<number>(0);
  const [totalPurchase, setTotalPurchase] = useState<number>(0);

  const addToCart = (product: ProductItemType): void => {
    const precoProduto =
      typeof product.preco === "string"
        ? parseFloat(product.preco)
        : product.preco;
    setQtdTotalItems((prevQtd) => prevQtd + 1);
    setTotalPurchase((prevTotal) => prevTotal + precoProduto);
  };
  
  useEffect(() => {
    console.log("Testando o use effect")
  }, [])

  return (
    <>
      <main>
        <div className="container p-5">
          <CartSummary
            qtdTotalItems={qtdTotalItems}
            totalPurchase={totalPurchase}
          />
          <ProductList addToCart={addToCart} />
        </div>
      </main>
    </>
  );
}
