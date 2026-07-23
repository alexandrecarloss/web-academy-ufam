"use client";

import { useState } from "react";
import { CartList } from "../components/Cart/CartList/CartList";
import { CartSummary } from "../components/Cart/CartSummary/CartSummary";
import { mockCartItems } from "../mocks/cartItem";
import { CartItemType } from "../types/cart";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(mockCartItems);

  const qtdTotalItems = cartItems.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  const totalPurchase = cartItems.reduce(
    (acc, item) => acc + item.quantidade * item.preco,
    0
  );
  
  const removeItemFromCart = (id: string): void => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <main>
        <div className="container p-5">
          <CartList cartItems={cartItems}
          removeItemFromCart={removeItemFromCart} />
          <CartSummary
            qtdTotalItems={qtdTotalItems}
            totalPurchase={totalPurchase}
          />
        </div>
      </main>
    </>
  );
}
