export class Tv {
    id;
    modelo;
    fabricante;
    preco;
    resolucao;
    polegadas;
    constructor(id, modelo, fabricante, preco, resolucao, polegadas) {
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.preco = preco;
        this.resolucao = resolucao;
        this.polegadas = polegadas;
    }
}
export class Celular {
    id;
    modelo;
    fabricante;
    preco;
    memoria;
    constructor(id, modelo, fabricante, preco, memoria) {
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.preco = preco;
        this.memoria = memoria;
    }
}
export class Bicicleta {
    id;
    modelo;
    fabricante;
    preco;
    tamanhoAro;
    constructor(id, modelo, fabricante, preco, tamanhoAro) {
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.preco = preco;
        this.tamanhoAro = tamanhoAro;
    }
}
export class Carrinho {
    _produtos = [];
    getProdutos() {
        return this._produtos;
    }
    adicionarProduto(produto) {
        this._produtos.push(produto);
    }
    removerProduto(id) {
        this._produtos = this._produtos.filter(p => p.id !== id);
    }
    calcularTotal() {
        return this._produtos.reduce((total, p) => total + p.preco, 0);
    }
    obterQuantidadeItens() {
        return this._produtos.length;
    }
}
//# sourceMappingURL=types.js.map