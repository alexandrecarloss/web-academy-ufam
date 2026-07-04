import { prisma } from "./client";

export async function cadastrarCliente(dados: {
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
}) {
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

export async function buscarClientePorCpf(cpf: string) {
  return await prisma.cliente.findUnique({
    where: { cpf },
    include: { enderecos: true }, 
  });
}

export async function atualizarCelularCliente(cpf: string, novoCelular: string) {
  return await prisma.cliente.update({
    where: { cpf },
    data: { celular: novoCelular },
  });
}

export async function deletarCliente(cpf: string) {
  await prisma.endereco.deleteMany({
    where: { cliente_cpf: cpf },
  });

  return await prisma.cliente.delete({
    where: { cpf },
  });
}