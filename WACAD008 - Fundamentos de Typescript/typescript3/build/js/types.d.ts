export interface Produto {
    id: string;
    modelo: string;
    fabricante: string;
    preco: number;
}
export declare class Tv implements Produto {
    id: string;
    modelo: string;
    fabricante: string;
    preco: number;
    resolucao: string;
    polegadas: string;
    constructor(id: string, modelo: string, fabricante: string, preco: number, resolucao: string, polegadas: string);
}
export declare class Celular implements Produto {
    id: string;
    modelo: string;
    fabricante: string;
    preco: number;
    memoria: string;
    constructor(id: string, modelo: string, fabricante: string, preco: number, memoria: string);
}
export declare class Bicicleta implements Produto {
    id: string;
    modelo: string;
    fabricante: string;
    preco: number;
    tamanhoAro: string;
    constructor(id: string, modelo: string, fabricante: string, preco: number, tamanhoAro: string);
}
export interface ICarrinho<T extends Produto> {
    getProdutos(): readonly T[];
    adicionarProduto(produto: T): void;
    removerProduto(id: string): void;
    calcularTotal(): number;
}
export declare class Carrinho<T extends Produto> implements ICarrinho<T> {
    private _produtos;
    getProdutos(): readonly T[];
    adicionarProduto(produto: T): void;
    removerProduto(id: string): void;
    calcularTotal(): number;
    obterQuantidadeItens(): number;
}
//# sourceMappingURL=types.d.ts.map