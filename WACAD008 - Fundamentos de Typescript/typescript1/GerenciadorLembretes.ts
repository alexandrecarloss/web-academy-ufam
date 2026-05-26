import { Lembrete, CriarLembreteInput, EditarLembreteInput } from './lembreteType';

export class GerenciadorLembretes {
  private lembretes: Lembrete[] = [];

  public adicionar(dados: CriarLembreteInput): Lembrete {
    const novoLembrete: Lembrete = {
      id: crypto.randomUUID(), 
      titulo: dados.titulo,
      descricao: dados.descricao,
      dataLimite: dados.dataLimite,
      dataInsercao: new Date(), 
      concluido: false        
    };

    this.lembretes.push(novoLembrete);
    return novoLembrete;
  }

  public listarTodos(): Lembrete[] {
    return this.lembretes;
  }

  public editar(id: string, novosDados: EditarLembreteInput): Lembrete | null {
    const lembrete = this.lembretes.find(l => l.id === id);

    if (!lembrete) {
      console.error(`Lembrete com ID ${id} não encontrado.`);
      return null;
    }

    Object.assign(lembrete, novosDados);
    return lembrete;
  }

  public excluir(id: string): boolean {
    const indice = this.lembretes.findIndex(l => l.id === id);

    if (indice === -1) {
      return false;
    }

    this.lembretes.splice(indice, 1);
    return true;
  }
}