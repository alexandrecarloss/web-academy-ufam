import { prisma } from "./client";
export async function cadastrarCliente(dados) {
    return await prisma.cliente.create({
        data: {
            cpf: dados.cpf,
            nome: dados.nome,
            celular: dados.celular,
            email: dados.email,
            data_nasc: dados.data_nasc,
            enderecos: {
                create: dados.enderecoInicial,
            },
        },
        include: {
            enderecos: true,
        },
    });
}
export async function buscarClientePorCpf(cpf) {
    return await prisma.cliente.findUnique({
        where: { cpf },
        include: { enderecos: true },
    });
}
export async function atualizarCelularCliente(cpf, novoCelular) {
    return await prisma.cliente.update({
        where: { cpf },
        data: { celular: novoCelular },
    });
}
export async function deletarCliente(cpf) {
    await prisma.endereco.deleteMany({
        where: { cliente_cpf: cpf },
    });
    return await prisma.cliente.delete({
        where: { cpf },
    });
}
//# sourceMappingURL=clientService.js.map