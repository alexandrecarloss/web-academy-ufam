import { CartItem } from "../CartItem/CartItem";

export function CartList() {
  return (
    <>
      <div className="table-responsive">
        <table className="table ">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Valor Unitário</th>
              <th>Quantidade</th>
              <th>Valor Total</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </table>
      </div>
    </>
  );
}
