import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Compra
 *
 */
export type CompraModel = runtime.Types.Result.DefaultSelection<Prisma.$CompraPayload>;
export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null;
    _avg: CompraAvgAggregateOutputType | null;
    _sum: CompraSumAggregateOutputType | null;
    _min: CompraMinAggregateOutputType | null;
    _max: CompraMaxAggregateOutputType | null;
};
export type CompraAvgAggregateOutputType = {
    codigo: number | null;
    desconto: number | null;
    total: number | null;
    endereco_codigo: number | null;
};
export type CompraSumAggregateOutputType = {
    codigo: number | null;
    desconto: number | null;
    total: number | null;
    endereco_codigo: number | null;
};
export type CompraMinAggregateOutputType = {
    codigo: number | null;
    forma_pagamento: $Enums.FormaPagamento | null;
    data_hora: Date | null;
    desconto: number | null;
    total: number | null;
    cliente_cpf: string | null;
    endereco_codigo: number | null;
};
export type CompraMaxAggregateOutputType = {
    codigo: number | null;
    forma_pagamento: $Enums.FormaPagamento | null;
    data_hora: Date | null;
    desconto: number | null;
    total: number | null;
    cliente_cpf: string | null;
    endereco_codigo: number | null;
};
export type CompraCountAggregateOutputType = {
    codigo: number;
    forma_pagamento: number;
    data_hora: number;
    desconto: number;
    total: number;
    cliente_cpf: number;
    endereco_codigo: number;
    _all: number;
};
export type CompraAvgAggregateInputType = {
    codigo?: true;
    desconto?: true;
    total?: true;
    endereco_codigo?: true;
};
export type CompraSumAggregateInputType = {
    codigo?: true;
    desconto?: true;
    total?: true;
    endereco_codigo?: true;
};
export type CompraMinAggregateInputType = {
    codigo?: true;
    forma_pagamento?: true;
    data_hora?: true;
    desconto?: true;
    total?: true;
    cliente_cpf?: true;
    endereco_codigo?: true;
};
export type CompraMaxAggregateInputType = {
    codigo?: true;
    forma_pagamento?: true;
    data_hora?: true;
    desconto?: true;
    total?: true;
    cliente_cpf?: true;
    endereco_codigo?: true;
};
export type CompraCountAggregateInputType = {
    codigo?: true;
    forma_pagamento?: true;
    data_hora?: true;
    desconto?: true;
    total?: true;
    cliente_cpf?: true;
    endereco_codigo?: true;
    _all?: true;
};
export type CompraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: Prisma.CompraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Compras to fetch.
     */
    orderBy?: Prisma.CompraOrderByWithRelationInput | Prisma.CompraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CompraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Compras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType;
};
export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
    [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompra[P]> : Prisma.GetScalarType<T[P], AggregateCompra[P]>;
};
export type CompraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompraWhereInput;
    orderBy?: Prisma.CompraOrderByWithAggregationInput | Prisma.CompraOrderByWithAggregationInput[];
    by: Prisma.CompraScalarFieldEnum[] | Prisma.CompraScalarFieldEnum;
    having?: Prisma.CompraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompraCountAggregateInputType | true;
    _avg?: CompraAvgAggregateInputType;
    _sum?: CompraSumAggregateInputType;
    _min?: CompraMinAggregateInputType;
    _max?: CompraMaxAggregateInputType;
};
export type CompraGroupByOutputType = {
    codigo: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date;
    desconto: number;
    total: number;
    cliente_cpf: string;
    endereco_codigo: number;
    _count: CompraCountAggregateOutputType | null;
    _avg: CompraAvgAggregateOutputType | null;
    _sum: CompraSumAggregateOutputType | null;
    _min: CompraMinAggregateOutputType | null;
    _max: CompraMaxAggregateOutputType | null;
};
type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompraGroupByOutputType[P]>;
}>>;
export type CompraWhereInput = {
    AND?: Prisma.CompraWhereInput | Prisma.CompraWhereInput[];
    OR?: Prisma.CompraWhereInput[];
    NOT?: Prisma.CompraWhereInput | Prisma.CompraWhereInput[];
    codigo?: Prisma.IntFilter<"Compra"> | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFilter<"Compra"> | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFilter<"Compra"> | Date | string;
    desconto?: Prisma.FloatFilter<"Compra"> | number;
    total?: Prisma.FloatFilter<"Compra"> | number;
    cliente_cpf?: Prisma.StringFilter<"Compra"> | string;
    endereco_codigo?: Prisma.IntFilter<"Compra"> | number;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    endereco?: Prisma.XOR<Prisma.EnderecoScalarRelationFilter, Prisma.EnderecoWhereInput>;
    compras_produtos?: Prisma.CompraProdutoListRelationFilter;
};
export type CompraOrderByWithRelationInput = {
    codigo?: Prisma.SortOrder;
    forma_pagamento?: Prisma.SortOrder;
    data_hora?: Prisma.SortOrder;
    desconto?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    cliente_cpf?: Prisma.SortOrder;
    endereco_codigo?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    endereco?: Prisma.EnderecoOrderByWithRelationInput;
    compras_produtos?: Prisma.CompraProdutoOrderByRelationAggregateInput;
    _relevance?: Prisma.CompraOrderByRelevanceInput;
};
export type CompraWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number;
    AND?: Prisma.CompraWhereInput | Prisma.CompraWhereInput[];
    OR?: Prisma.CompraWhereInput[];
    NOT?: Prisma.CompraWhereInput | Prisma.CompraWhereInput[];
    forma_pagamento?: Prisma.EnumFormaPagamentoFilter<"Compra"> | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFilter<"Compra"> | Date | string;
    desconto?: Prisma.FloatFilter<"Compra"> | number;
    total?: Prisma.FloatFilter<"Compra"> | number;
    cliente_cpf?: Prisma.StringFilter<"Compra"> | string;
    endereco_codigo?: Prisma.IntFilter<"Compra"> | number;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    endereco?: Prisma.XOR<Prisma.EnderecoScalarRelationFilter, Prisma.EnderecoWhereInput>;
    compras_produtos?: Prisma.CompraProdutoListRelationFilter;
}, "codigo">;
export type CompraOrderByWithAggregationInput = {
    codigo?: Prisma.SortOrder;
    forma_pagamento?: Prisma.SortOrder;
    data_hora?: Prisma.SortOrder;
    desconto?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    cliente_cpf?: Prisma.SortOrder;
    endereco_codigo?: Prisma.SortOrder;
    _count?: Prisma.CompraCountOrderByAggregateInput;
    _avg?: Prisma.CompraAvgOrderByAggregateInput;
    _max?: Prisma.CompraMaxOrderByAggregateInput;
    _min?: Prisma.CompraMinOrderByAggregateInput;
    _sum?: Prisma.CompraSumOrderByAggregateInput;
};
export type CompraScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompraScalarWhereWithAggregatesInput | Prisma.CompraScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompraScalarWhereWithAggregatesInput | Prisma.CompraScalarWhereWithAggregatesInput[];
    codigo?: Prisma.IntWithAggregatesFilter<"Compra"> | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoWithAggregatesFilter<"Compra"> | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeWithAggregatesFilter<"Compra"> | Date | string;
    desconto?: Prisma.FloatWithAggregatesFilter<"Compra"> | number;
    total?: Prisma.FloatWithAggregatesFilter<"Compra"> | number;
    cliente_cpf?: Prisma.StringWithAggregatesFilter<"Compra"> | string;
    endereco_codigo?: Prisma.IntWithAggregatesFilter<"Compra"> | number;
};
export type CompraCreateInput = {
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente: Prisma.ClienteCreateNestedOneWithoutComprasInput;
    endereco: Prisma.EnderecoCreateNestedOneWithoutComprasInput;
    compras_produtos?: Prisma.CompraProdutoCreateNestedManyWithoutCompraInput;
};
export type CompraUncheckedCreateInput = {
    codigo?: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente_cpf: string;
    endereco_codigo: number;
    compras_produtos?: Prisma.CompraProdutoUncheckedCreateNestedManyWithoutCompraInput;
};
export type CompraUpdateInput = {
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutComprasNestedInput;
    endereco?: Prisma.EnderecoUpdateOneRequiredWithoutComprasNestedInput;
    compras_produtos?: Prisma.CompraProdutoUpdateManyWithoutCompraNestedInput;
};
export type CompraUncheckedUpdateInput = {
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente_cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco_codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    compras_produtos?: Prisma.CompraProdutoUncheckedUpdateManyWithoutCompraNestedInput;
};
export type CompraCreateManyInput = {
    codigo?: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente_cpf: string;
    endereco_codigo: number;
};
export type CompraUpdateManyMutationInput = {
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type CompraUncheckedUpdateManyInput = {
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente_cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco_codigo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CompraListRelationFilter = {
    every?: Prisma.CompraWhereInput;
    some?: Prisma.CompraWhereInput;
    none?: Prisma.CompraWhereInput;
};
export type CompraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CompraOrderByRelevanceInput = {
    fields: Prisma.CompraOrderByRelevanceFieldEnum | Prisma.CompraOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CompraCountOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
    forma_pagamento?: Prisma.SortOrder;
    data_hora?: Prisma.SortOrder;
    desconto?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    cliente_cpf?: Prisma.SortOrder;
    endereco_codigo?: Prisma.SortOrder;
};
export type CompraAvgOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
    desconto?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    endereco_codigo?: Prisma.SortOrder;
};
export type CompraMaxOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
    forma_pagamento?: Prisma.SortOrder;
    data_hora?: Prisma.SortOrder;
    desconto?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    cliente_cpf?: Prisma.SortOrder;
    endereco_codigo?: Prisma.SortOrder;
};
export type CompraMinOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
    forma_pagamento?: Prisma.SortOrder;
    data_hora?: Prisma.SortOrder;
    desconto?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    cliente_cpf?: Prisma.SortOrder;
    endereco_codigo?: Prisma.SortOrder;
};
export type CompraSumOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
    desconto?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    endereco_codigo?: Prisma.SortOrder;
};
export type CompraScalarRelationFilter = {
    is?: Prisma.CompraWhereInput;
    isNot?: Prisma.CompraWhereInput;
};
export type CompraCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutClienteInput, Prisma.CompraUncheckedCreateWithoutClienteInput> | Prisma.CompraCreateWithoutClienteInput[] | Prisma.CompraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutClienteInput | Prisma.CompraCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.CompraCreateManyClienteInputEnvelope;
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
};
export type CompraUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutClienteInput, Prisma.CompraUncheckedCreateWithoutClienteInput> | Prisma.CompraCreateWithoutClienteInput[] | Prisma.CompraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutClienteInput | Prisma.CompraCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.CompraCreateManyClienteInputEnvelope;
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
};
export type CompraUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutClienteInput, Prisma.CompraUncheckedCreateWithoutClienteInput> | Prisma.CompraCreateWithoutClienteInput[] | Prisma.CompraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutClienteInput | Prisma.CompraCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.CompraUpsertWithWhereUniqueWithoutClienteInput | Prisma.CompraUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.CompraCreateManyClienteInputEnvelope;
    set?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    disconnect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    delete?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    update?: Prisma.CompraUpdateWithWhereUniqueWithoutClienteInput | Prisma.CompraUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.CompraUpdateManyWithWhereWithoutClienteInput | Prisma.CompraUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.CompraScalarWhereInput | Prisma.CompraScalarWhereInput[];
};
export type CompraUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutClienteInput, Prisma.CompraUncheckedCreateWithoutClienteInput> | Prisma.CompraCreateWithoutClienteInput[] | Prisma.CompraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutClienteInput | Prisma.CompraCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.CompraUpsertWithWhereUniqueWithoutClienteInput | Prisma.CompraUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.CompraCreateManyClienteInputEnvelope;
    set?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    disconnect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    delete?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    update?: Prisma.CompraUpdateWithWhereUniqueWithoutClienteInput | Prisma.CompraUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.CompraUpdateManyWithWhereWithoutClienteInput | Prisma.CompraUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.CompraScalarWhereInput | Prisma.CompraScalarWhereInput[];
};
export type CompraCreateNestedManyWithoutEnderecoInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutEnderecoInput, Prisma.CompraUncheckedCreateWithoutEnderecoInput> | Prisma.CompraCreateWithoutEnderecoInput[] | Prisma.CompraUncheckedCreateWithoutEnderecoInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutEnderecoInput | Prisma.CompraCreateOrConnectWithoutEnderecoInput[];
    createMany?: Prisma.CompraCreateManyEnderecoInputEnvelope;
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
};
export type CompraUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutEnderecoInput, Prisma.CompraUncheckedCreateWithoutEnderecoInput> | Prisma.CompraCreateWithoutEnderecoInput[] | Prisma.CompraUncheckedCreateWithoutEnderecoInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutEnderecoInput | Prisma.CompraCreateOrConnectWithoutEnderecoInput[];
    createMany?: Prisma.CompraCreateManyEnderecoInputEnvelope;
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
};
export type CompraUpdateManyWithoutEnderecoNestedInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutEnderecoInput, Prisma.CompraUncheckedCreateWithoutEnderecoInput> | Prisma.CompraCreateWithoutEnderecoInput[] | Prisma.CompraUncheckedCreateWithoutEnderecoInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutEnderecoInput | Prisma.CompraCreateOrConnectWithoutEnderecoInput[];
    upsert?: Prisma.CompraUpsertWithWhereUniqueWithoutEnderecoInput | Prisma.CompraUpsertWithWhereUniqueWithoutEnderecoInput[];
    createMany?: Prisma.CompraCreateManyEnderecoInputEnvelope;
    set?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    disconnect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    delete?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    update?: Prisma.CompraUpdateWithWhereUniqueWithoutEnderecoInput | Prisma.CompraUpdateWithWhereUniqueWithoutEnderecoInput[];
    updateMany?: Prisma.CompraUpdateManyWithWhereWithoutEnderecoInput | Prisma.CompraUpdateManyWithWhereWithoutEnderecoInput[];
    deleteMany?: Prisma.CompraScalarWhereInput | Prisma.CompraScalarWhereInput[];
};
export type CompraUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutEnderecoInput, Prisma.CompraUncheckedCreateWithoutEnderecoInput> | Prisma.CompraCreateWithoutEnderecoInput[] | Prisma.CompraUncheckedCreateWithoutEnderecoInput[];
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutEnderecoInput | Prisma.CompraCreateOrConnectWithoutEnderecoInput[];
    upsert?: Prisma.CompraUpsertWithWhereUniqueWithoutEnderecoInput | Prisma.CompraUpsertWithWhereUniqueWithoutEnderecoInput[];
    createMany?: Prisma.CompraCreateManyEnderecoInputEnvelope;
    set?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    disconnect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    delete?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    connect?: Prisma.CompraWhereUniqueInput | Prisma.CompraWhereUniqueInput[];
    update?: Prisma.CompraUpdateWithWhereUniqueWithoutEnderecoInput | Prisma.CompraUpdateWithWhereUniqueWithoutEnderecoInput[];
    updateMany?: Prisma.CompraUpdateManyWithWhereWithoutEnderecoInput | Prisma.CompraUpdateManyWithWhereWithoutEnderecoInput[];
    deleteMany?: Prisma.CompraScalarWhereInput | Prisma.CompraScalarWhereInput[];
};
export type EnumFormaPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.FormaPagamento;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CompraCreateNestedOneWithoutCompras_produtosInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutCompras_produtosInput, Prisma.CompraUncheckedCreateWithoutCompras_produtosInput>;
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutCompras_produtosInput;
    connect?: Prisma.CompraWhereUniqueInput;
};
export type CompraUpdateOneRequiredWithoutCompras_produtosNestedInput = {
    create?: Prisma.XOR<Prisma.CompraCreateWithoutCompras_produtosInput, Prisma.CompraUncheckedCreateWithoutCompras_produtosInput>;
    connectOrCreate?: Prisma.CompraCreateOrConnectWithoutCompras_produtosInput;
    upsert?: Prisma.CompraUpsertWithoutCompras_produtosInput;
    connect?: Prisma.CompraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompraUpdateToOneWithWhereWithoutCompras_produtosInput, Prisma.CompraUpdateWithoutCompras_produtosInput>, Prisma.CompraUncheckedUpdateWithoutCompras_produtosInput>;
};
export type CompraCreateWithoutClienteInput = {
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    endereco: Prisma.EnderecoCreateNestedOneWithoutComprasInput;
    compras_produtos?: Prisma.CompraProdutoCreateNestedManyWithoutCompraInput;
};
export type CompraUncheckedCreateWithoutClienteInput = {
    codigo?: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    endereco_codigo: number;
    compras_produtos?: Prisma.CompraProdutoUncheckedCreateNestedManyWithoutCompraInput;
};
export type CompraCreateOrConnectWithoutClienteInput = {
    where: Prisma.CompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompraCreateWithoutClienteInput, Prisma.CompraUncheckedCreateWithoutClienteInput>;
};
export type CompraCreateManyClienteInputEnvelope = {
    data: Prisma.CompraCreateManyClienteInput | Prisma.CompraCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type CompraUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.CompraWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompraUpdateWithoutClienteInput, Prisma.CompraUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.CompraCreateWithoutClienteInput, Prisma.CompraUncheckedCreateWithoutClienteInput>;
};
export type CompraUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.CompraWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompraUpdateWithoutClienteInput, Prisma.CompraUncheckedUpdateWithoutClienteInput>;
};
export type CompraUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.CompraScalarWhereInput;
    data: Prisma.XOR<Prisma.CompraUpdateManyMutationInput, Prisma.CompraUncheckedUpdateManyWithoutClienteInput>;
};
export type CompraScalarWhereInput = {
    AND?: Prisma.CompraScalarWhereInput | Prisma.CompraScalarWhereInput[];
    OR?: Prisma.CompraScalarWhereInput[];
    NOT?: Prisma.CompraScalarWhereInput | Prisma.CompraScalarWhereInput[];
    codigo?: Prisma.IntFilter<"Compra"> | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFilter<"Compra"> | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFilter<"Compra"> | Date | string;
    desconto?: Prisma.FloatFilter<"Compra"> | number;
    total?: Prisma.FloatFilter<"Compra"> | number;
    cliente_cpf?: Prisma.StringFilter<"Compra"> | string;
    endereco_codigo?: Prisma.IntFilter<"Compra"> | number;
};
export type CompraCreateWithoutEnderecoInput = {
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente: Prisma.ClienteCreateNestedOneWithoutComprasInput;
    compras_produtos?: Prisma.CompraProdutoCreateNestedManyWithoutCompraInput;
};
export type CompraUncheckedCreateWithoutEnderecoInput = {
    codigo?: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente_cpf: string;
    compras_produtos?: Prisma.CompraProdutoUncheckedCreateNestedManyWithoutCompraInput;
};
export type CompraCreateOrConnectWithoutEnderecoInput = {
    where: Prisma.CompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompraCreateWithoutEnderecoInput, Prisma.CompraUncheckedCreateWithoutEnderecoInput>;
};
export type CompraCreateManyEnderecoInputEnvelope = {
    data: Prisma.CompraCreateManyEnderecoInput | Prisma.CompraCreateManyEnderecoInput[];
    skipDuplicates?: boolean;
};
export type CompraUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: Prisma.CompraWhereUniqueInput;
    update: Prisma.XOR<Prisma.CompraUpdateWithoutEnderecoInput, Prisma.CompraUncheckedUpdateWithoutEnderecoInput>;
    create: Prisma.XOR<Prisma.CompraCreateWithoutEnderecoInput, Prisma.CompraUncheckedCreateWithoutEnderecoInput>;
};
export type CompraUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: Prisma.CompraWhereUniqueInput;
    data: Prisma.XOR<Prisma.CompraUpdateWithoutEnderecoInput, Prisma.CompraUncheckedUpdateWithoutEnderecoInput>;
};
export type CompraUpdateManyWithWhereWithoutEnderecoInput = {
    where: Prisma.CompraScalarWhereInput;
    data: Prisma.XOR<Prisma.CompraUpdateManyMutationInput, Prisma.CompraUncheckedUpdateManyWithoutEnderecoInput>;
};
export type CompraCreateWithoutCompras_produtosInput = {
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente: Prisma.ClienteCreateNestedOneWithoutComprasInput;
    endereco: Prisma.EnderecoCreateNestedOneWithoutComprasInput;
};
export type CompraUncheckedCreateWithoutCompras_produtosInput = {
    codigo?: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente_cpf: string;
    endereco_codigo: number;
};
export type CompraCreateOrConnectWithoutCompras_produtosInput = {
    where: Prisma.CompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompraCreateWithoutCompras_produtosInput, Prisma.CompraUncheckedCreateWithoutCompras_produtosInput>;
};
export type CompraUpsertWithoutCompras_produtosInput = {
    update: Prisma.XOR<Prisma.CompraUpdateWithoutCompras_produtosInput, Prisma.CompraUncheckedUpdateWithoutCompras_produtosInput>;
    create: Prisma.XOR<Prisma.CompraCreateWithoutCompras_produtosInput, Prisma.CompraUncheckedCreateWithoutCompras_produtosInput>;
    where?: Prisma.CompraWhereInput;
};
export type CompraUpdateToOneWithWhereWithoutCompras_produtosInput = {
    where?: Prisma.CompraWhereInput;
    data: Prisma.XOR<Prisma.CompraUpdateWithoutCompras_produtosInput, Prisma.CompraUncheckedUpdateWithoutCompras_produtosInput>;
};
export type CompraUpdateWithoutCompras_produtosInput = {
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutComprasNestedInput;
    endereco?: Prisma.EnderecoUpdateOneRequiredWithoutComprasNestedInput;
};
export type CompraUncheckedUpdateWithoutCompras_produtosInput = {
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente_cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco_codigo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CompraCreateManyClienteInput = {
    codigo?: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    endereco_codigo: number;
};
export type CompraUpdateWithoutClienteInput = {
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    endereco?: Prisma.EnderecoUpdateOneRequiredWithoutComprasNestedInput;
    compras_produtos?: Prisma.CompraProdutoUpdateManyWithoutCompraNestedInput;
};
export type CompraUncheckedUpdateWithoutClienteInput = {
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    endereco_codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    compras_produtos?: Prisma.CompraProdutoUncheckedUpdateManyWithoutCompraNestedInput;
};
export type CompraUncheckedUpdateManyWithoutClienteInput = {
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    endereco_codigo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CompraCreateManyEnderecoInput = {
    codigo?: number;
    forma_pagamento: $Enums.FormaPagamento;
    data_hora: Date | string;
    desconto?: number;
    total: number;
    cliente_cpf: string;
};
export type CompraUpdateWithoutEnderecoInput = {
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutComprasNestedInput;
    compras_produtos?: Prisma.CompraProdutoUpdateManyWithoutCompraNestedInput;
};
export type CompraUncheckedUpdateWithoutEnderecoInput = {
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente_cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    compras_produtos?: Prisma.CompraProdutoUncheckedUpdateManyWithoutCompraNestedInput;
};
export type CompraUncheckedUpdateManyWithoutEnderecoInput = {
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    forma_pagamento?: Prisma.EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento;
    data_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    desconto?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    cliente_cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type CompraCountOutputType
 */
export type CompraCountOutputType = {
    compras_produtos: number;
};
export type CompraCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    compras_produtos?: boolean | CompraCountOutputTypeCountCompras_produtosArgs;
};
/**
 * CompraCountOutputType without action
 */
export type CompraCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     */
    select?: Prisma.CompraCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CompraCountOutputType without action
 */
export type CompraCountOutputTypeCountCompras_produtosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompraProdutoWhereInput;
};
export type CompraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    codigo?: boolean;
    forma_pagamento?: boolean;
    data_hora?: boolean;
    desconto?: boolean;
    total?: boolean;
    cliente_cpf?: boolean;
    endereco_codigo?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    endereco?: boolean | Prisma.EnderecoDefaultArgs<ExtArgs>;
    compras_produtos?: boolean | Prisma.Compra$compras_produtosArgs<ExtArgs>;
    _count?: boolean | Prisma.CompraCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["compra"]>;
export type CompraSelectScalar = {
    codigo?: boolean;
    forma_pagamento?: boolean;
    data_hora?: boolean;
    desconto?: boolean;
    total?: boolean;
    cliente_cpf?: boolean;
    endereco_codigo?: boolean;
};
export type CompraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"codigo" | "forma_pagamento" | "data_hora" | "desconto" | "total" | "cliente_cpf" | "endereco_codigo", ExtArgs["result"]["compra"]>;
export type CompraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    endereco?: boolean | Prisma.EnderecoDefaultArgs<ExtArgs>;
    compras_produtos?: boolean | Prisma.Compra$compras_produtosArgs<ExtArgs>;
    _count?: boolean | Prisma.CompraCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CompraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Compra";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        endereco: Prisma.$EnderecoPayload<ExtArgs>;
        compras_produtos: Prisma.$CompraProdutoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        codigo: number;
        forma_pagamento: $Enums.FormaPagamento;
        data_hora: Date;
        desconto: number;
        total: number;
        cliente_cpf: string;
        endereco_codigo: number;
    }, ExtArgs["result"]["compra"]>;
    composites: {};
};
export type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompraPayload, S>;
export type CompraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompraCountAggregateInputType | true;
};
export interface CompraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Compra'];
        meta: {
            name: 'Compra';
        };
    };
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: Prisma.SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: Prisma.SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     *
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     *
     * // Only select the `codigo`
     * const compraWithCodigoOnly = await prisma.compra.findMany({ select: { codigo: true } })
     *
     */
    findMany<T extends CompraFindManyArgs>(args?: Prisma.SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     *
     */
    create<T extends CompraCreateArgs>(args: Prisma.SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompraCreateManyArgs>(args?: Prisma.SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     *
     */
    delete<T extends CompraDeleteArgs>(args: Prisma.SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompraUpdateArgs>(args: Prisma.SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompraUpdateManyArgs>(args: Prisma.SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: Prisma.SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma.Prisma__CompraClient<runtime.Types.Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(args?: Prisma.Subset<T, CompraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompraCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraAggregateArgs>(args: Prisma.Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>;
    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CompraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompraGroupByArgs['orderBy'];
    } : {
        orderBy?: CompraGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Compra model
     */
    readonly fields: CompraFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Compra.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CompraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    endereco<T extends Prisma.EnderecoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnderecoDefaultArgs<ExtArgs>>): Prisma.Prisma__EnderecoClient<runtime.Types.Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    compras_produtos<T extends Prisma.Compra$compras_produtosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Compra$compras_produtosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Compra model
 */
export interface CompraFieldRefs {
    readonly codigo: Prisma.FieldRef<"Compra", 'Int'>;
    readonly forma_pagamento: Prisma.FieldRef<"Compra", 'FormaPagamento'>;
    readonly data_hora: Prisma.FieldRef<"Compra", 'DateTime'>;
    readonly desconto: Prisma.FieldRef<"Compra", 'Float'>;
    readonly total: Prisma.FieldRef<"Compra", 'Float'>;
    readonly cliente_cpf: Prisma.FieldRef<"Compra", 'String'>;
    readonly endereco_codigo: Prisma.FieldRef<"Compra", 'Int'>;
}
/**
 * Compra findUnique
 */
export type CompraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * Filter, which Compra to fetch.
     */
    where: Prisma.CompraWhereUniqueInput;
};
/**
 * Compra findUniqueOrThrow
 */
export type CompraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * Filter, which Compra to fetch.
     */
    where: Prisma.CompraWhereUniqueInput;
};
/**
 * Compra findFirst
 */
export type CompraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * Filter, which Compra to fetch.
     */
    where?: Prisma.CompraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Compras to fetch.
     */
    orderBy?: Prisma.CompraOrderByWithRelationInput | Prisma.CompraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Compras.
     */
    cursor?: Prisma.CompraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Compras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Compras.
     */
    distinct?: Prisma.CompraScalarFieldEnum | Prisma.CompraScalarFieldEnum[];
};
/**
 * Compra findFirstOrThrow
 */
export type CompraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * Filter, which Compra to fetch.
     */
    where?: Prisma.CompraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Compras to fetch.
     */
    orderBy?: Prisma.CompraOrderByWithRelationInput | Prisma.CompraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Compras.
     */
    cursor?: Prisma.CompraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Compras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Compras.
     */
    distinct?: Prisma.CompraScalarFieldEnum | Prisma.CompraScalarFieldEnum[];
};
/**
 * Compra findMany
 */
export type CompraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * Filter, which Compras to fetch.
     */
    where?: Prisma.CompraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Compras to fetch.
     */
    orderBy?: Prisma.CompraOrderByWithRelationInput | Prisma.CompraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Compras.
     */
    cursor?: Prisma.CompraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Compras.
     */
    skip?: number;
    distinct?: Prisma.CompraScalarFieldEnum | Prisma.CompraScalarFieldEnum[];
};
/**
 * Compra create
 */
export type CompraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * The data needed to create a Compra.
     */
    data: Prisma.XOR<Prisma.CompraCreateInput, Prisma.CompraUncheckedCreateInput>;
};
/**
 * Compra createMany
 */
export type CompraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: Prisma.CompraCreateManyInput | Prisma.CompraCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Compra update
 */
export type CompraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * The data needed to update a Compra.
     */
    data: Prisma.XOR<Prisma.CompraUpdateInput, Prisma.CompraUncheckedUpdateInput>;
    /**
     * Choose, which Compra to update.
     */
    where: Prisma.CompraWhereUniqueInput;
};
/**
 * Compra updateMany
 */
export type CompraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: Prisma.XOR<Prisma.CompraUpdateManyMutationInput, Prisma.CompraUncheckedUpdateManyInput>;
    /**
     * Filter which Compras to update
     */
    where?: Prisma.CompraWhereInput;
    /**
     * Limit how many Compras to update.
     */
    limit?: number;
};
/**
 * Compra upsert
 */
export type CompraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: Prisma.CompraWhereUniqueInput;
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: Prisma.XOR<Prisma.CompraCreateInput, Prisma.CompraUncheckedCreateInput>;
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CompraUpdateInput, Prisma.CompraUncheckedUpdateInput>;
};
/**
 * Compra delete
 */
export type CompraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
    /**
     * Filter which Compra to delete.
     */
    where: Prisma.CompraWhereUniqueInput;
};
/**
 * Compra deleteMany
 */
export type CompraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: Prisma.CompraWhereInput;
    /**
     * Limit how many Compras to delete.
     */
    limit?: number;
};
/**
 * Compra.compras_produtos
 */
export type Compra$compras_produtosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: Prisma.CompraProdutoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompraProduto
     */
    omit?: Prisma.CompraProdutoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraProdutoInclude<ExtArgs> | null;
    where?: Prisma.CompraProdutoWhereInput;
    orderBy?: Prisma.CompraProdutoOrderByWithRelationInput | Prisma.CompraProdutoOrderByWithRelationInput[];
    cursor?: Prisma.CompraProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompraProdutoScalarFieldEnum | Prisma.CompraProdutoScalarFieldEnum[];
};
/**
 * Compra without action
 */
export type CompraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: Prisma.CompraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Compra
     */
    omit?: Prisma.CompraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompraInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Compra.d.ts.map