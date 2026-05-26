interface Lembrete {
  id: string;
  titulo: string;
  dataInsercao: Date;
  dataLimite?: Date | undefined;
  descricao?: string | undefined;
}

type CriarLembreteInput = Omit<Lembrete, 'id' | 'dataInsercao'>;
type EditarLembreteInput = Partial<CriarLembreteInput>;

class GerenciadorLembretes {
  private lembretes: Lembrete[] = [];

  public adicionar(dados: CriarLembreteInput): Lembrete {
    const novo: Lembrete = {
      id: crypto.randomUUID(),
      titulo: dados.titulo,
      descricao: dados.descricao,
      dataLimite: dados.dataLimite,
      dataInsercao: new Date()
    };
    this.lembretes.push(novo);
    return novo;
  }

  public listarTodos(): Lembrete[] {
    return this.lembretes;
  }

  public buscarPorId(id: string): Lembrete | undefined {
    return this.lembretes.find(l => l.id === id);
  }

  public editar(id: string, novosDados: EditarLembreteInput): void {
    const lembrete = this.buscarPorId(id);
    if (lembrete) {
      Object.assign(lembrete, novosDados);
    }
  }

  public excluir(id: string): void {
    this.lembretes = this.lembretes.filter(l => l.id !== id);
  }
}

const gerenciador = new GerenciadorLembretes();

const form = document.getElementById('form-lembrete') as HTMLFormElement;
const inputId = document.getElementById('lembrete-id') as HTMLInputElement;
const inputTitulo = document.getElementById('titulo') as HTMLInputElement;
const inputDataLimite = document.getElementById('data-limite') as HTMLInputElement;
const inputDescricao = document.getElementById('descricao') as HTMLTextAreaElement;
const listaUl = document.getElementById('lista-lembretes') as HTMLUListElement;

const btnSalvar = document.getElementById('btn-salvar') as HTMLButtonElement;
const btnCancelar = document.getElementById('btn-cancelar') as HTMLButtonElement;

function renderizarLembretes(): void {
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

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const idAtual = inputId.value;
  const dados: CriarLembreteInput = {
    titulo: inputTitulo.value,
    descricao: inputDescricao.value ? inputDescricao.value : undefined,
    dataLimite: inputDataLimite.value ? new Date(inputDataLimite.value) : undefined
  };

  if (idAtual) {
    gerenciador.editar(idAtual, dados);
  } else {
    gerenciador.adicionar(dados);
  }

  resetarFormulario();
  renderizarLembretes();
});

function carregarParaEdicao(id: string): void {
  const lembrete = gerenciador.buscarPorId(id);
  if (!lembrete) return;

  inputId.value = lembrete.id;
  inputTitulo.value = lembrete.titulo;
  inputDescricao.value = lembrete.descricao ?? '';
  
  if (lembrete.dataLimite) {
    const dataIso = new Date(lembrete.dataLimite).toISOString().slice(0, 16);
    inputDataLimite.value = dataIso;
  } else {
    inputDataLimite.value = '';
  }

  btnSalvar.textContent = "Salvar Alterações";
  btnCancelar.classList.remove('hidden');
}

function excluirLembrete(id: string): void {
  if (confirm("Tem certeza que deseja apagar este lembrete?")) {
    gerenciador.excluir(id);
    renderizarLembretes();
    if (inputId.value === id) resetarFormulario();
  }
}

btnCancelar.addEventListener('click', resetarFormulario);

function resetarFormulario(): void {
  form.reset();
  inputId.value = '';
  btnSalvar.textContent = "Adicionar Lembrete";
  btnCancelar.classList.add('hidden');
}

renderizarLembretes();