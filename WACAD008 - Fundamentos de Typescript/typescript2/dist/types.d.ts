export declare class Aluno {
    id: string;
    nomeCompleto: string;
    idade: number;
    altura: number;
    peso: number;
    constructor(id: string, nomeCompleto: string, idade: number, altura: number, peso: number);
    getImc(): number;
}
export declare class Turma {
    id: string;
    nome: string;
    alunos: Aluno[];
    constructor(id: string, nome: string);
    getNumAlunos(): number;
    getMediaIdades(): number;
    getMediaAlturas(): number;
    getMediaPesos(): number;
    adicionarAluno(aluno: Aluno): void;
    editarAluno(id: string, dadosAtualizados: Partial<Omit<Aluno, 'id'>>): boolean;
    removerAluno(id: string): boolean;
}
//# sourceMappingURL=types.d.ts.map