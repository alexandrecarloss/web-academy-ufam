export class Aluno {
    id;
    nomeCompleto;
    idade;
    altura;
    peso;
    constructor(id, nomeCompleto, idade, altura, peso) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    getImc() {
        const alturaEmMetros = this.altura;
        return parseFloat((this.peso / (alturaEmMetros * alturaEmMetros)).toFixed(2));
    }
}
export class Turma {
    id;
    nome;
    alunos;
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        if (this.alunos.length === 0)
            return 0;
        const soma = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        return parseFloat((soma / this.alunos.length).toFixed(1));
    }
    getMediaAlturas() {
        if (this.alunos.length === 0)
            return 0;
        const soma = this.alunos.reduce((acc, aluno) => acc + aluno.altura, 0);
        return parseFloat((soma / this.alunos.length).toFixed(2));
    }
    getMediaPesos() {
        if (this.alunos.length === 0)
            return 0;
        const soma = this.alunos.reduce((acc, aluno) => acc + aluno.peso, 0);
        return parseFloat((soma / this.alunos.length).toFixed(1));
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    editarAluno(id, dadosAtualizados) {
        const aluno = this.alunos.find(a => a.id === id);
        if (!aluno)
            return false;
        Object.assign(aluno, dadosAtualizados);
        return true;
    }
    removerAluno(id) {
        const index = this.alunos.findIndex(a => a.id === id);
        if (index === -1)
            return false;
        this.alunos.splice(index, 1);
        return true;
    }
}
//# sourceMappingURL=types.js.map