export interface Usuario {
  id: string;
  username: string;
  senhaPlanejada: string;
}

export interface SessaoAtiva {
  usuarioId: string;
  username: string;
  tokenSimulado: string;
}

export interface Lembrete {
  id: string;
  titulo: string;
  dataInsercao: Date;
  dataLimite?: Date | undefined;
  descricao?: string | undefined;
}

export type CriarLembreteInput = Omit<Lembrete, "id" | "dataInsercao">;
export type EditarLembreteInput = Partial<CriarLembreteInput>;
