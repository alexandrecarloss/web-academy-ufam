"use client";
import { ProductList } from "./components/Product/ProductList/ProductList";
import { CartSummary } from "./components/Cart/CartSummary/CartSummary";
import { mockProducts } from "./mocks/products";
import { mockCartItems } from "./mocks/cartItem";
import { useState } from "react";
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

  // const qtdTotalItens = mockCartItems.reduce((acc, item) => {
  //   return acc + item.quantidade;
  // }, 0);
  // const totalCompra = mockCartItems.reduce((acc, item) => {
  //   return acc + item.quantidade * item.preco;
  // }, 0);
  return (
    <>
      <main>
        <div className="container p-5">
          <CartSummary
            qtdTotalItems={qtdTotalItems}
            totalPurchase={totalPurchase}
          />
          <ProductList productItems={mockProducts} addToCart={addToCart} />
        </div>
      </main>
    </>
  );
}
