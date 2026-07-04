import express from "express";
import path from "path";
import { cadastrarCliente, buscarClientePorCpf, atualizarCelularCliente, deletarCliente } from "./clientService.js";
import { prisma } from "./client";
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany({
            include: { enderecos: true }
        });
        res.render("clientes", { clientes, erro: null });
    }
    catch (error) {
        res.render("clientes", { clientes: [], erro: "Erro ao buscar clientes." });
    }
});
app.post("/clientes", async (req, res) => {
    const { cpf, nome, celular, email, data_nasc, logradouro, numero, bairro, cidade, estado, cep } = req.body;
    try {
        await cadastrarCliente({
            cpf,
            nome,
            celular,
            email,
            data_nasc: new Date(data_nasc),
            enderecoInicial: { logradouro, numero, bairro, cidade, estado, cep }
        });
        res.redirect("/");
    }
    catch (error) {
        const clientes = await prisma.cliente.findMany({ include: { enderecos: true } });
        res.render("clientes", { clientes, erro: "Erro ao cadastrar: CPF ou Email já existem." });
    }
});
app.post("/clientes/:cpf/editar", async (req, res) => {
    const { cpf } = req.params;
    const { celular } = req.body;
    try {
        await atualizarCelularCliente(cpf, celular);
        res.redirect("/");
    }
    catch (error) {
        res.redirect("/?erro=Erro ao atualizar");
    }
});
app.post("/clientes/:cpf/deletar", async (req, res) => {
    const { cpf } = req.params;
    try {
        await deletarCliente(cpf);
        res.redirect("/");
    }
    catch (error) {
        res.redirect("/?erro=Erro ao deletar");
    }
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map