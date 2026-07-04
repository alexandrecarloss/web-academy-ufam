import { cadastrarCliente, buscarClientePorCpf, atualizarCelularCliente, deletarCliente, } from "./clientService";
import { prisma } from "./client";
async function main() {
    console.log("=== Iniciando Testes de CRUD com Prisma ===");
    const cpfTeste = "12345678901";
    try {
        await deletarCliente(cpfTeste);
    }
    catch (e) { }
    console.log("\n1. Cadastrando novo cliente...");
    const novoCliente = await cadastrarCliente({
        cpf: cpfTeste,
        nome: "Carlos Alexandre Souza",
        celular: "92999998888",
        email: "carlos.souza@exemplo.com",
        data_nasc: new Date("1998-05-15"),
        enderecoInicial: {
            logradouro: "Avenida Principal",
            numero: "123",
            bairro: "Centro",
            cidade: "Iranduba",
            estado: "AM",
            cep: "69405000",
        },
    });
    console.log("Cliente criado com sucesso!", JSON.stringify(novoCliente, null, 2));
    console.log("\n2. Buscando dados do cliente no banco...");
    const clienteBuscado = await buscarClientePorCpf(cpfTeste);
    console.log("Dados encontrados:", JSON.stringify(clienteBuscado, null, 2));
    console.log("\n3. Atualizando o telefone do cliente...");
    const clienteAtualizado = await atualizarCelularCliente(cpfTeste, "92988887777");
    console.log("Telefone atualizado:", clienteAtualizado.celular);
    // console.log("\n4. Removendo cliente do banco...");
    // await deletarCliente(cpfTeste);
    // console.log("Cliente removido com sucesso.");
}
main()
    .catch((e) => {
    console.error("Erro durante a execução:", e);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=index.js.map