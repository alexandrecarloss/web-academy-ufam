import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
export declare const ModelName: {
    readonly Cliente: "Cliente";
    readonly Endereco: "Endereco";
    readonly Compra: "Compra";
    readonly Categoria: "Categoria";
    readonly Subcategoria: "Subcategoria";
    readonly Produto: "Produto";
    readonly ProdutoSerie: "ProdutoSerie";
    readonly CompraProduto: "CompraProduto";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ClienteScalarFieldEnum: {
    readonly cpf: "cpf";
    readonly nome: "nome";
    readonly celular: "celular";
    readonly email: "email";
    readonly data_nasc: "data_nasc";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const EnderecoScalarFieldEnum: {
    readonly id: "id";
    readonly logradouro: "logradouro";
    readonly numero: "numero";
    readonly estado: "estado";
    readonly cep: "cep";
    readonly bairro: "bairro";
    readonly cidade: "cidade";
    readonly cliente_cpf: "cliente_cpf";
};
export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum];
export declare const CompraScalarFieldEnum: {
    readonly codigo: "codigo";
    readonly forma_pagamento: "forma_pagamento";
    readonly data_hora: "data_hora";
    readonly desconto: "desconto";
    readonly total: "total";
    readonly cliente_cpf: "cliente_cpf";
    readonly endereco_codigo: "endereco_codigo";
};
export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum];
export declare const CategoriaScalarFieldEnum: {
    readonly codigo: "codigo";
    readonly nome: "nome";
};
export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum];
export declare const SubcategoriaScalarFieldEnum: {
    readonly codigo: "codigo";
    readonly nome: "nome";
    readonly codigo_categoria: "codigo_categoria";
};
export type SubcategoriaScalarFieldEnum = (typeof SubcategoriaScalarFieldEnum)[keyof typeof SubcategoriaScalarFieldEnum];
export declare const ProdutoScalarFieldEnum: {
    readonly codigo: "codigo";
    readonly nome: "nome";
    readonly quantidade: "quantidade";
    readonly preco: "preco";
    readonly fabricante: "fabricante";
    readonly modelo: "modelo";
    readonly subcategoria_codigo: "subcategoria_codigo";
};
export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum];
export declare const ProdutoSerieScalarFieldEnum: {
    readonly numero_serie: "numero_serie";
    readonly produto_codigo: "produto_codigo";
};
export type ProdutoSerieScalarFieldEnum = (typeof ProdutoSerieScalarFieldEnum)[keyof typeof ProdutoSerieScalarFieldEnum];
export declare const CompraProdutoScalarFieldEnum: {
    readonly compra_codigo: "compra_codigo";
    readonly produto_codigo: "produto_codigo";
    readonly quantidade: "quantidade";
};
export type CompraProdutoScalarFieldEnum = (typeof CompraProdutoScalarFieldEnum)[keyof typeof CompraProdutoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const ClienteOrderByRelevanceFieldEnum: {
    readonly cpf: "cpf";
    readonly nome: "nome";
    readonly celular: "celular";
    readonly email: "email";
};
export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum];
export declare const EnderecoOrderByRelevanceFieldEnum: {
    readonly logradouro: "logradouro";
    readonly numero: "numero";
    readonly estado: "estado";
    readonly cep: "cep";
    readonly bairro: "bairro";
    readonly cidade: "cidade";
    readonly cliente_cpf: "cliente_cpf";
};
export type EnderecoOrderByRelevanceFieldEnum = (typeof EnderecoOrderByRelevanceFieldEnum)[keyof typeof EnderecoOrderByRelevanceFieldEnum];
export declare const CompraOrderByRelevanceFieldEnum: {
    readonly cliente_cpf: "cliente_cpf";
};
export type CompraOrderByRelevanceFieldEnum = (typeof CompraOrderByRelevanceFieldEnum)[keyof typeof CompraOrderByRelevanceFieldEnum];
export declare const CategoriaOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
};
export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum];
export declare const SubcategoriaOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
};
export type SubcategoriaOrderByRelevanceFieldEnum = (typeof SubcategoriaOrderByRelevanceFieldEnum)[keyof typeof SubcategoriaOrderByRelevanceFieldEnum];
export declare const ProdutoOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
    readonly fabricante: "fabricante";
    readonly modelo: "modelo";
};
export type ProdutoOrderByRelevanceFieldEnum = (typeof ProdutoOrderByRelevanceFieldEnum)[keyof typeof ProdutoOrderByRelevanceFieldEnum];
export declare const ProdutoSerieOrderByRelevanceFieldEnum: {
    readonly numero_serie: "numero_serie";
};
export type ProdutoSerieOrderByRelevanceFieldEnum = (typeof ProdutoSerieOrderByRelevanceFieldEnum)[keyof typeof ProdutoSerieOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map