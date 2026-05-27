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
const listaContainer = document.getElementById('lista-lembretes');
const btnSalvar = document.getElementById('btn-salvar');
const btnCancelar = document.getElementById('btn-cancelar');
function renderizarLembretes() {
    listaContainer.innerHTML = '';
    const todos = gerenciador.listarTodos();
    if (todos.length === 0) {
        listaContainer.innerHTML = `
      <div class="text-center py-5 text-muted border rounded bg-white shadow-sm">
        <p class="mb-0 fs-5">Nenhum lembrete cadastrado ainda.</p>
        <small>Use o formulário acima para começar!</small>
      </div>
    `;
        return;
    }
    todos.forEach(lembrete => {
        const card = document.createElement('div');
        card.className = 'card shadow-sm border-start border-primary border-4 animate-fade-in';
        const dataInsFormatada = lembrete.dataInsercao.toLocaleString('pt-BR');
        const dataLimFormatada = lembrete.dataLimite
            ? new Date(lembrete.dataLimite).toLocaleString('pt-BR')
            : 'Não definida';
        card.innerHTML = `
      <div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h3 class="h5 card-title mb-1 text-dark fw-bold">${lembrete.titulo}</h3>
            <p class="card-text text-secondary small mb-3">${lembrete.descricao ?? '<span class="text-muted text-opacity-50"><i>Sem descrição.</i></span>'}</p>
            
            <div class="d-flex flex-wrap gap-2 text-muted" style="font-size: 0.8rem;">
              <span class="badge bg-light text-dark border">
                <strong>Criado em:</strong> ${dataInsFormatada}
              </span>
              <span class="badge ${lembrete.dataLimite ? 'bg-warning-subtle text-warning-focus' : 'bg-light text-muted'} border">
                <strong>Prazo:</strong> ${dataLimFormatada}
              </span>
            </div>
          </div>
          
          <div class="d-flex gap-1">
            <button class="btn btn-sm btn-outline-warning btn-editar" data-id="${lembrete.id}" title="Editar">Editar</button>
            <button class="btn btn-sm btn-outline-danger btn-excluir" data-id="${lembrete.id}" title="Excluir">Excluir</button>
          </div>
        </div>
      </div>
    `;
        card.querySelector('.btn-editar')?.addEventListener('click', () => carregarParaEdicao(lembrete.id));
        card.querySelector('.btn-excluir')?.addEventListener('click', () => excluirLembrete(lembrete.id));
        listaContainer.appendChild(card);
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
    btnSalvar.className = "btn btn-warning px-4 text-white";
    btnCancelar.classList.remove('d-none');
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
    btnSalvar.className = "btn btn-primary px-4";
    btnCancelar.classList.add('d-none');
}
renderizarLembretes();
export {};
//# sourceMappingURL=app.js.map