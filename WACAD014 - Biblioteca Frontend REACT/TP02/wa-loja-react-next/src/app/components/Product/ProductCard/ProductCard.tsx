import { useFavoriteProduct } from "@/app/hooks/useFavoritProduct";
import { ProductItemType } from "@/app/types/product";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'

interface ProductItemProps {
  productItem: ProductItemType;
  addToCart?: (product: ProductItemType) => void;
}

// Helper para transformar nomes com acento e maiúsculas em slugs amigáveis para URL
const formatSlug = (str: string): string => {
  return str
    .normalize("NFD") // Decompõe caracteres acentuados (ex: "â" -> "a" + "^")
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos/diacríticos
    .toLowerCase() // Converte para minúsculo ("Câmera" -> "camera")
    .trim()
    .replace(/\s+/g, "-"); // Substitui espaços por hífen, se houver
};

export function ProductCard(props: ProductItemProps) {
  const { productItem, addToCart } = props;
  const { fotos, nome, preco } = productItem;
  const router = useRouter();

  const viewProductDetails = (productName: string): void => {
    router.push(`/product/${formatSlug(productName)}`);
  };

  const { addFavorite, isPending } = useFavoriteProduct(
    () => toast.success('Favoritado com sucesso!'),
    () => toast.error('Ocorreu um erro! Tente novamente.')
  );

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={fotos[0].src}
          className="card-img-top"
          alt={fotos[0].titulo}
          width={300}
          height={320}
          onClick={() => viewProductDetails(nome)}
          style={{ cursor: "pointer" }}
        />
        <div className="card-body bg-light">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text text-secondary">R$ {preco}</p>

          {addToCart && (
            <button
              className="btn btn-dark d-block w-100"
              type="button"
              onClick={() => addToCart(productItem)}
            >
              Adicionar no carrinho
            </button>
          )}

          <button
            className="btn btn-light d-block w-100 mt-2"
            type="button"
            onClick={() => addFavorite(productItem)}
          >
            {isPending ? 'Favoritando...' : 'Favoritar'}
          </button>
        </div>
      </div>
    </div>
  );
}