import { ProductItemType } from "@/app/types/product";
import Image from "next/image";

interface ProductItemProps {
  productItem: ProductItemType;
  addToCart: (product: ProductItemType) => void;
}

export function ProductCard(props: ProductItemProps) {
  const { productItem, addToCart } = props;
  const { fotos, nome, preco } = productItem;
  return (
    <>
      <div className="col">
        <div className="card shadow-sm h-100">
          <Image
            src={fotos[0].src}
            className="card-img-top"
            alt={fotos[0].titulo}
            width={300}
            height={320}
          />
          <div className="card-body bg-light">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text text-secondary">R$ {preco}</p>
            <button
              className="btn btn-dark d-block w-100"
              type="button"
              onClick={() => addToCart(productItem)}
            >
              Adicionar no carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
