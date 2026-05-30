export interface Produto {
    id: string;
    modelo: string;
    fabricante: string;
    preco: number; 
}

export class Tv implements Produto {
    constructor(
        public id: string,
        public modelo: string,
        public fabricante: string,
        public preco: number,
        public resolucao: string,
        public polegadas: string
    ) {}
}

export class Celular implements Produto {
    constructor(
        public id: string,
        public modelo: string,
        public fabricante: string,
        public preco: number,
        public memoria: string
    ) {}
}

export class Bicicleta implements Produto {
    constructor(
        public id: string,
        public modelo: string,
        public fabricante: string,
        public preco: number,
        public tamanhoAro: string
    ) {}
}

export interface ICarrinho<T extends Produto> {
    getProdutos(): readonly T[];
    adicionarProduto(produto: T): void;
    removerProduto(id: string): void;
    calcularTotal(): number;
}

export class Carrinho<T extends Produto> implements ICarrinho<T> {
    private _produtos: T[] = [];

    getProdutos(): readonly T[] {
        return this._produtos;
    }

    adicionarProduto(produto: T): void {
        this._produtos.push(produto);
    }

    removerProduto(id: string): void {
        this._produtos = this._produtos.filter(p => p.id !== id);
    }

    calcularTotal(): number {
        return this._produtos.reduce((total, p) => total + p.preco, 0);
    }

    obterQuantidadeItens(): number {
        return this._produtos.length;
    }
}