"use client";

import { useGetProductByName } from "@/app/hooks/useGetProductByName";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const productName = params.product as string;

  const { product, isPending, isError } = useGetProductByName(productName);

  if (isPending) {
    return (
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">Caregando...</div>
        </div>
      </div>
    );
  }

  if (isError || (!isPending && !product)) {
    return (
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            <div>
              Ocorreu um erro ou o produto não foi encontrado. Tente novamente!
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

            <h5 className="card-title mb-4 fw-bold">
              Nome produto: {product.nome}{" "}
            </h5>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
              <Image
                key={product.id}
                src={product.fotos[0].src}
                alt={product.fotos[0].titulo}
                width={300}
                height={320}
              />
            </div>

            <p className="card-text fw-medium">
              Valor: R${product.preco}
            </p>
            <p className="card-text fw-medium">
              Descrição: {product.descricao}
            </p>
            <p className="card-text fw-medium">
              Anunciado por: {product.usuario_id}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
