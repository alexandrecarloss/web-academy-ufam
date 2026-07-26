import { ProductItemType } from "../types/product";

export const mockFavoriteItems: ProductItemType[] = [
  {
    id: "notebook-3",
    fotos: [
      {
        titulo: "notebook-4",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg",
      },
      {
        titulo: "smartwatch-3",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg",
      },
    ],
    nome: "Notebook",
    preco: "2300",
    desconto: 15,
    descricao: "descrição legal",
    vendido: "false",
    usuario_id: "lobo@origamid.com",
  },
  {
    id: "smartphone-2",
    fotos: [
      {
        titulo: "smartphone-3",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone-2.jpg",
      },
      {
        titulo: "tablet-3",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/tablet-2.jpg",
      },
    ],
    nome: "Smartphone",
    preco: "2399",
    desconto: 8,
    descricao: "descrição legal",
    vendido: "false",
    usuario_id: "lobo@origamid.com",
  }
]