"use client";

import { CartList } from "../components/CartList/CartList";
import { CartSummary } from "../components/CartSummary/CartSummary";

export default function Cart() {
  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <CartList />
            </div>
          </div>

          <CartSummary/>
        </div>
      </main>
    </>
  );
}
