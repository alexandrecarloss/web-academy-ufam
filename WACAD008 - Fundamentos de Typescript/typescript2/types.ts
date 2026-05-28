class Aluno {
    constructor(
        public id: string,
        public nomeCompleto: string,
        public idade: number,
        public altura: number,
        public peso: number,
        public genero: string
    ) {}

    public getImc(): number {
        const alturaEmMetros = this.altura;
        return parseFloat((this.peso / (alturaEmMetros * alturaEmMetros)).toFixed(2));
    }
}

class Turma {
    public id: string;
    public nome: string;
    public alunos: Aluno[];

    constructor(id: string, nome: string) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }

    getNumAlunos(): number {
        return this.alunos.length;
    }

    getMediaIdades(): number {
        if (this.alunos.length === 0) return 0;
        const soma = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        return parseFloat((soma / this.alunos.length).toFixed(2));
    }

    getMediaAlturas(): number {
        if (this.alunos.length === 0) return 0;
        const soma = this.alunos.reduce((acc, aluno) => acc + aluno.altura, 0);
        return parseFloat((soma / this.alunos.length).toFixed(2));
    }

    getMediaPesos(): number {
        if (this.alunos.length === 0) return 0;
        const soma = this.alunos.reduce((acc, aluno) => acc + aluno.peso, 0);
        return parseFloat((soma / this.alunos.length).toFixed(2));
    }

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    editarAluno(id: string, dadosAtualizados: Partial<Omit<Aluno, 'id'>>): boolean {
        const aluno = this.alunos.find(a => a.id === id);
        if (!aluno) return false;
        Object.assign(aluno, dadosAtualizados);
        return true;
    }

    removerAluno(id: string): boolean {
        const index = this.alunos.findIndex(a => a.id === id);
        if (index === -1) return false;
        this.alunos.splice(index, 1);
        return true;
    }
}