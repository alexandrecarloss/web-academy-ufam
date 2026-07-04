export declare function cadastrarCliente(dados: {
    cpf: string;
    nome: string;
    celular: string;
    email: string;
    data_nasc: Date;
    enderecoInicial: {
        logradouro: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    };
}): Promise<runtime.Types.Result.GetResult<import("./generated/models").$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>>;
export declare function buscarClientePorCpf(cpf: string): Promise<any>;
export declare function atualizarCelularCliente(cpf: string, novoCelular: string): Promise<runtime.Types.Result.GetResult<import("./generated/models").$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>>;
export declare function deletarCliente(cpf: string): Promise<runtime.Types.Result.GetResult<import("./generated/models").$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>>;
//# sourceMappingURL=clientService.d.ts.map