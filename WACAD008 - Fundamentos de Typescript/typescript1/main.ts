import { GerenciadorLembretes } from './GerenciadorLembretes';

const APP = new GerenciadorLembretes();

console.log("Adicionando lembretes...");
const tarefa1 = APP.adicionar({
  titulo: "Estudar para a prova de TypeScript",
  descricao: "Rever conceitos de Interfaces e Generics",
  dataLimite: new Date('2026-05-30T23:59:00')
});

const tarefa2 = APP.adicionar({
  titulo: "Comprar pó de café"
});

console.log("Lista após inserção:", APP.listarTodos());

console.log("\nEditando a tarefa 1...");
APP.editar(tarefa1.id, {
  titulo: "Estudar MUITO TypeScript",
  descricao: "Focar em Typescript Avançado"
});

console.log("Lista após edição:", APP.listarTodos());

console.log(`\nExcluindo a tarefa de id: ${tarefa2.id}`);
APP.excluir(tarefa2.id);

console.log("Lista final:", APP.listarTodos());