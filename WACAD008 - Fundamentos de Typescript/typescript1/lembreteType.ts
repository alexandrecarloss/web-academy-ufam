export interface Lembrete {
    id: string;
    titulo: string;
    dataInsercao: Date;
    dataLimite?: Date;
    descricao?: string;
    concluido: boolean;
}

export type CriarLembreteInput = Omit<Lembrete, 'id' | 'dataInsercao' | 'concluido'>;

export type EditarLembreteInput = Partial<CriarLembreteInput>;



