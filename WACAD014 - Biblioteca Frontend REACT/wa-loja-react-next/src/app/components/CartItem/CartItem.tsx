export function CartItem() {
    const getProductTotal = (price: number, quantity: number): number =>
    price * quantity;
  return (
    <>
      <tr key="prod-1">
        <td>Monitor UltraWide 34&quot;</td>
        <td>R$ {(2200).toFixed(2)}</td>
        <td>1</td>

        <td>R$ {getProductTotal(2200, 1).toFixed(2)}</td>
        <td>
          <button className="btn btn-danger btn-sm">Remover</button>
        </td>
      </tr>
    </>
  );
}
