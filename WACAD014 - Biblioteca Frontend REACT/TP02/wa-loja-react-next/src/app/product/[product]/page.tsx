"use client";

import { useGetProductByName } from "@/app/hooks/useGetProductByName";
import { Foto } from "@/app/types/product";
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
          <div className="card-body">Carregando...</div>
        </div>
      </div>
    );
  }

  if (isError || (!isPending && !product)) {
    return (
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body text-danger">
            Ocorreu um erro ou o produto não foi encontrado. Tente novamente!
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
              Nome produto: {product.nome}
            </h5>

            <div
              id="productImagesCarousel"
              className="carousel slide mb-4"
              data-bs-ride="carousel"
              style={{ maxWidth: "500px" }} 
            >
              <div className="carousel-indicators">
                {product.fotos.map((_: Foto, index: number) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#productImagesCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="carousel-inner rounded bg-light">
                {product.fotos.map((foto: Foto, index: number) => (
                  <div
                    key={foto.src}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "360px" }}>
                      <Image
                        src={foto.src}
                        alt={foto.titulo || product.nome}
                        width={300}
                        height={320}
                        style={{ objectFit: "contain" }}
                        className="rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {product.fotos.length > 1 && (
                <>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#productImagesCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark rounded-circle"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Anterior</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#productImagesCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark rounded-circle"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Próximo</span>
                  </button>
                </>
              )}
            </div>

            <p className="card-text fw-medium">Valor: R$ {product.preco}</p>
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