import { Aluno, Turma } from "./types.js";
const minhaTurma = new Turma("1", "Educação Física - Manhã");
const form = document.getElementById('aluno-form');
const inputId = document.getElementById('aluno-id');
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const inputAltura = document.getElementById('altura');
const inputPeso = document.getElementById('peso');
const formTitle = document.getElementById('form-title');
const btnSalvar = document.getElementById('btn-salvar');
const btnCancelar = document.getElementById('btn-cancelar');
const tabelaCorpo = document.getElementById('tabela-alunos-corpo');
const statTotal = document.getElementById('stat-total');
const statIdade = document.getElementById('stat-idade');
const statAltura = document.getElementById('stat-altura');
const statPeso = document.getElementById('stat-peso');
function obterClasseCssImc(imc) {
    if (imc < 18.5)
        return 'table-warning';
    if (imc < 25)
        return 'table-success';
    if (imc < 30)
        return 'table-primary';
    if (imc < 35)
        return 'table-warning';
    if (imc < 40)
        return 'table-warning';
    return 'table-danger';
}
function atualizarInterface() {
    if (!statTotal || !statIdade || !statAltura || !statPeso || !tabelaCorpo)
        return;
    statTotal.innerText = minhaTurma.getNumAlunos().toString();
    statIdade.innerText = minhaTurma.getMediaIdades().toString();
    statAltura.innerText = minhaTurma.getMediaAlturas().toFixed(2);
    statPeso.innerText = minhaTurma.getMediaPesos().toFixed(1);
    tabelaCorpo.innerHTML = '';
    if (minhaTurma.alunos.length === 0) {
        tabelaCorpo.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-4">Nenhum aluno cadastrado na turma.</td></tr>`;
        return;
    }
    minhaTurma.alunos.forEach((aluno) => {
        const tr = document.createElement('tr');
        const imc = aluno.getImc();
        tr.className = obterClasseCssImc(imc);
        tr.innerHTML = `
            <td class="fw-semibold">${aluno.nomeCompleto}</td>
            <td>${aluno.idade} anos</td>
            <td>${aluno.altura.toFixed(2)} m</td>
            <td>${aluno.peso.toFixed(1)} kg</td>
            <td><span class="badge bg-secondary">${aluno.getImc()}</span></td>
            <td class="text-end px-4">
                <button class="btn btn-sm btn-outline-warning me-1" onclick="prepararEdicao('${aluno.id}')">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deletarAluno('${aluno.id}')">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tabelaCorpo.appendChild(tr);
    });
}
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!inputId || !inputNome || !inputIdade || !inputAltura || !inputPeso)
            return;
        const id = inputId.value;
        const nome = inputNome.value;
        const idade = parseInt(inputIdade.value);
        const altura = parseFloat(inputAltura.value);
        const peso = parseFloat(inputPeso.value);
        if (id) {
            minhaTurma.editarAluno(id, { nomeCompleto: nome, idade, altura, peso });
        }
        else {
            const novoId = Date.now().toString();
            const novoAluno = new Aluno(novoId, nome, idade, altura, peso);
            minhaTurma.adicionarAluno(novoAluno);
        }
        resetarFormulario();
        atualizarInterface();
    });
}
window.prepararEdicao = function (id) {
    const aluno = minhaTurma.alunos.find((a) => a.id === id);
    if (aluno && inputId && inputNome && inputIdade && inputAltura && inputPeso && formTitle && btnSalvar && btnCancelar) {
        inputId.value = aluno.id;
        inputNome.value = aluno.nomeCompleto;
        inputIdade.value = aluno.idade.toString();
        inputAltura.value = aluno.altura.toString();
        inputPeso.value = aluno.peso.toString();
        formTitle.innerHTML = `<i class="bi bi-pencil-square"></i> Editar Aluno`;
        btnSalvar.innerText = "Atualizar Dados";
        btnSalvar.className = "btn btn-warning";
        btnCancelar.classList.remove('d-none');
    }
};
window.deletarAluno = function (id) {
    if (confirm("Tem certeza que deseja remover este aluno?")) {
        minhaTurma.removerAluno(id);
        atualizarInterface();
        if (inputId && inputId.value === id)
            resetarFormulario();
    }
};
if (btnCancelar) {
    btnCancelar.addEventListener('click', resetarFormulario);
}
function resetarFormulario() {
    if (!form || !inputId || !formTitle || !btnSalvar || !btnCancelar)
        return;
    form.reset();
    inputId.value = '';
    formTitle.innerHTML = `<i class="bi bi-person-plus"></i> Adicionar Aluno`;
    btnSalvar.innerText = "Salvar Aluno";
    btnSalvar.className = "btn btn-success";
    btnCancelar.classList.add('d-none');
}
async function gerarAlunosAleatorios(quantidade) {
    try {
        const resposta = await fetch(`https://randomuser.me/api/?results=${quantidade}&nat=br`);
        const dados = await resposta.json();
        return dados.results.map((user) => {
            const alturaAleatoria = parseFloat((Math.random() * (1.95 - 1.50) + 1.50).toFixed(2));
            const pesoAleatorio = parseFloat((Math.random() * (95 - 50) + 50).toFixed(1));
            return new Aluno(user.login.uuid, `${user.name.first} ${user.name.last}`, user.dob.age, alturaAleatoria, pesoAleatorio);
        });
    }
    catch (erro) {
        console.error("Erro ao buscar alunos da API:", erro);
        return [];
    }
}
const btnRandomUser = document.getElementById('btn-random-user');
if (btnRandomUser) {
    btnRandomUser.addEventListener('click', async () => {
        const novosAlunos = await gerarAlunosAleatorios(1);
        const [alunoGerado] = novosAlunos;
        if (alunoGerado) {
            minhaTurma.adicionarAluno(alunoGerado);
            atualizarInterface();
        }
        else {
            alert("Erro ao buscar dados da API RandomUser");
        }
    });
}
//# sourceMappingURL=app.js.map