class GerenciadorLembretes {
    lembretes = [];
    adicionar(dados) {
        const novo = {
            id: crypto.randomUUID(),
            titulo: dados.titulo,
            descricao: dados.descricao,
            dataLimite: dados.dataLimite,
            dataInsercao: new Date()
        };
        this.lembretes.push(novo);
        return novo;
    }
    listarTodos() {
        return this.lembretes;
    }
    buscarPorId(id) {
        return this.lembretes.find(l => l.id === id);
    }
    editar(id, novosDados) {
        const lembrete = this.buscarPorId(id);
        if (lembrete) {
            Object.assign(lembrete, novosDados);
        }
    }
    excluir(id) {
        this.lembretes = this.lembretes.filter(l => l.id !== id);
    }
}
const gerenciador = new GerenciadorLembretes();
const form = document.getElementById('form-lembrete');
const inputId = document.getElementById('lembrete-id');
const inputTitulo = document.getElementById('titulo');
const inputDataLimite = document.getElementById('data-limite');
const inputDescricao = document.getElementById('descricao');
const listaUl = document.getElementById('lista-lembretes');
const btnSalvar = document.getElementById('btn-salvar');
const btnCancelar = document.getElementById('btn-cancelar');
function renderizarLembretes() {
    listaUl.innerHTML = '';
    const todos = gerenciador.listarTodos();
    if (todos.length === 0) {
        listaUl.innerHTML = '<p style="text-align:center; color:#6b7280;">Nenhum lembrete para exibir.</p>';
        return;
    }
    todos.forEach(lembrete => {
        const li = document.createElement('li');
        li.className = 'lembrete-item';
        const dataInsFormatada = lembrete.dataInsercao.toLocaleString('pt-BR');
        const dataLimFormatada = lembrete.dataLimite
            ? new Date(lembrete.dataLimite).toLocaleString('pt-BR')
            : 'Não definida';
        li.innerHTML = `
      <div class="lembrete-header">
        <h3 class="lembrete-titulo">${lembrete.titulo}</h3>
        <div class="lembrete-datas">
          <strong>Criado em:</strong> ${dataInsFormatada}<br>
          <strong>Prazo:</strong> ${dataLimFormatada}
        </div>
      </div>
      <p class="lembrete-descricao">${lembrete.descricao ?? '<i>Sem descrição.</i>'}</p>
      <div class="lembrete-acoes">
        <button class="btn-editar" data-id="${lembrete.id}">Editar</button>
        <button class="btn-excluir" data-id="${lembrete.id}">Excluir</button>
      </div>
    `;
        li.querySelector('.btn-editar')?.addEventListener('click', () => carregarParaEdicao(lembrete.id));
        li.querySelector('.btn-excluir')?.addEventListener('click', () => excluirLembrete(lembrete.id));
        listaUl.appendChild(li);
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const idAtual = inputId.value;
    const dados = {
        titulo: inputTitulo.value,
        descricao: inputDescricao.value ? inputDescricao.value : undefined,
        dataLimite: inputDataLimite.value ? new Date(inputDataLimite.value) : undefined
    };
    if (idAtual) {
        gerenciador.editar(idAtual, dados);
    }
    else {
        gerenciador.adicionar(dados);
    }
    resetarFormulario();
    renderizarLembretes();
});
function carregarParaEdicao(id) {
    const lembrete = gerenciador.buscarPorId(id);
    if (!lembrete)
        return;
    inputId.value = lembrete.id;
    inputTitulo.value = lembrete.titulo;
    inputDescricao.value = lembrete.descricao ?? '';
    if (lembrete.dataLimite) {
        const dataIso = new Date(lembrete.dataLimite).toISOString().slice(0, 16);
        inputDataLimite.value = dataIso;
    }
    else {
        inputDataLimite.value = '';
    }
    btnSalvar.textContent = "Salvar Alterações";
    btnCancelar.classList.remove('hidden');
}
function excluirLembrete(id) {
    if (confirm("Tem certeza que deseja apagar este lembrete?")) {
        gerenciador.excluir(id);
        renderizarLembretes();
        if (inputId.value === id)
            resetarFormulario();
    }
}
btnCancelar.addEventListener('click', resetarFormulario);
function resetarFormulario() {
    form.reset();
    inputId.value = '';
    btnSalvar.textContent = "Adicionar Lembrete";
    btnCancelar.classList.add('hidden');
}
renderizarLembretes();
export {};
//# sourceMappingURL=app.js.map