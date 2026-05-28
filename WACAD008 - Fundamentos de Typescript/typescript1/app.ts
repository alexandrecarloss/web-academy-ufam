import type {
  SessaoAtiva,
  Usuario,
  Lembrete,
  CriarLembreteInput,
  EditarLembreteInput,
} from "./types";

class ServicoAutenticacao {
  private usuarios: Usuario[] = [];
  private sessaoAtual: SessaoAtiva | null = null;

  constructor() {
    this.carregarUsuarios();

    if (this.usuarios.length === 0) {
      this.usuarios.push({
        id: crypto.randomUUID(),
        username: "admin",
        senhaPlanejada: "123",
      });
      this.salvarUsuarios();
    }
  }

  private carregarUsuarios(): void {
    const dados = localStorage.getItem("app_usuarios");
    if (dados) {
      this.usuarios = JSON.parse(dados) as Usuario[];
    }
  }

  private salvarUsuarios(): void {
    localStorage.setItem("app_usuarios", JSON.stringify(this.usuarios));
  }

  public cadastrar(
    usernameInput: string,
    senhaInput: string,
  ): { sucesso: boolean; mensagem: string } {
    const usuarioLimpo = usernameInput.trim();
    if (!usuarioLimpo || !senhaInput) {
      return { sucesso: false, mensagem: "Preencha todos os campos!" };
    }

    const usuarioExiste = this.usuarios.some(
      (u) => u.username.toLowerCase() === usuarioLimpo.toLowerCase(),
    );

    if (usuarioExiste) {
      return {
        sucesso: false,
        mensagem: "Este nome de usuário já está cadastrado!",
      };
    }

    this.usuarios.push({
      id: crypto.randomUUID(),
      username: usuarioLimpo,
      senhaPlanejada: senhaInput,
    });

    this.salvarUsuarios();
    return {
      sucesso: true,
      mensagem:
        "Usuário cadastrado com sucesso! Agora você já pode fazer login.",
    };
  }

  public login(usernameInput: string, senhaInput: string): boolean {
    const encontrado = this.usuarios.find(
      (u) =>
        u.username.toLowerCase() === usernameInput.trim().toLowerCase() &&
        u.senhaPlanejada === senhaInput,
    );

    if (encontrado) {
      this.sessaoAtual = {
        usuarioId: encontrado.id,
        username: encontrado.username,
        tokenSimulado: crypto.randomUUID(),
      };
      return true;
    }
    return false;
  }

  public logout(): void {
    this.sessaoAtual = null;
  }

  public estaAutenticado(): boolean {
    return this.sessaoAtual !== null;
  }

  public obterUsuarioAtual(): string | undefined {
    return this.sessaoAtual?.username;
  }

  public obterIdUsuarioAtual(): string | undefined {
    return this.sessaoAtual?.usuarioId;
  }
}

const auth = new ServicoAutenticacao();

class GerenciadorLembretes {
  private lembretes: Lembrete[] = [];

  public adicionar(dados: CriarLembreteInput): Lembrete {
    const novo: Lembrete = {
      id: crypto.randomUUID(),
      titulo: dados.titulo,
      descricao: dados.descricao,
      usuarioId: auth.estaAutenticado() ? auth.obterIdUsuarioAtual() ?? "desconhecido": "desconhecido",
      dataLimite: dados.dataLimite,
      dataInsercao: new Date(),
    };
    this.lembretes.push(novo);
    return novo;
  }

  public listarTodos(): Lembrete[] {
    return this.lembretes;
  }

  public listarPorUsuario(usuarioId: string): Lembrete[] {
    return this.lembretes.filter((L) => L.usuarioId === usuarioId);
  }

  public buscarPorId(id: string): Lembrete | undefined {
    return this.lembretes.find((l) => l.id === id);
  }

  public editar(id: string, novosDados: EditarLembreteInput): void {
    const lembrete = this.buscarPorId(id);
    if (lembrete) {
      Object.assign(lembrete, novosDados);
    }
  }

  public excluir(id: string): void {
    this.lembretes = this.lembretes.filter((l) => l.id !== id);
  }
}

const gerenciador = new GerenciadorLembretes();

const telaLogin = document.getElementById("tela-login") as HTMLDivElement;
const telaApp = document.getElementById("tela-app") as HTMLDivElement;
const btnCadastrar = document.getElementById(
  "btn-cadastrar",
) as HTMLButtonElement;
const formLogin = document.getElementById("form-login") as HTMLFormElement;
const inputUser = document.getElementById("login-username") as HTMLInputElement;
const inputPass = document.getElementById("login-senha") as HTMLInputElement;
const msgErro = document.getElementById("login-erro") as HTMLDivElement;

const txtUsuarioLogado = document.getElementById(
  "usuario-logado",
) as HTMLSpanElement;
const btnLogout = document.getElementById("btn-logout") as HTMLButtonElement;

function gerenciarVisibilidadeTelas(): void {
  if (auth.estaAutenticado()) {
    telaLogin.classList.add("d-none");
    telaApp.classList.remove("d-none");
    txtUsuarioLogado.textContent = auth.obterUsuarioAtual() ?? "";
    renderizarLembretes();
  } else {
    telaLogin.classList.remove("d-none");
    telaApp.classList.add("d-none");
  }
}

formLogin.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  msgErro.classList.add("d-none");

  const sucesso = auth.login(inputUser.value, inputPass.value);

  if (sucesso) {
    formLogin.reset();
    gerenciarVisibilidadeTelas();
  } else {
    msgErro.textContent = "Usuário ou senha incorretos!";
    msgErro.classList.remove("d-none");
  }
});

btnCadastrar.addEventListener("click", (e: Event) => {
  e.preventDefault();
  msgErro.classList.add("d-none");

  const username = inputUser.value;
  const senha = inputPass.value;

  const resultado = auth.cadastrar(username, senha);

  if (resultado.sucesso) {
    alert(resultado.mensagem);
    formLogin.reset();
  } else {
    msgErro.textContent = resultado.mensagem;
    msgErro.classList.remove("d-none");
  }
});

btnLogout.addEventListener("click", () => {
  auth.logout();
  gerenciarVisibilidadeTelas();
});

const form = document.getElementById("form-lembrete") as HTMLFormElement;
const inputId = document.getElementById("lembrete-id") as HTMLInputElement;
const inputTitulo = document.getElementById("titulo") as HTMLInputElement;
const inputDataLimite = document.getElementById(
  "data-limite",
) as HTMLInputElement;
const inputDescricao = document.getElementById(
  "descricao",
) as HTMLTextAreaElement;
const listaContainer = document.getElementById(
  "lista-lembretes",
) as HTMLDivElement;

const btnSalvar = document.getElementById("btn-salvar") as HTMLButtonElement;
const btnCancelar = document.getElementById(
  "btn-cancelar",
) as HTMLButtonElement;

function renderizarLembretes(): void {
  listaContainer.innerHTML = "";
  const todos = gerenciador.listarPorUsuario(auth.obterIdUsuarioAtual() ?? "desconhecido");

  if (todos.length === 0) {
    listaContainer.innerHTML = `
      <div class="text-center py-5 text-muted border rounded bg-white shadow-sm">
        <p class="mb-0 fs-5">Nenhum lembrete cadastrado ainda.</p>
        <small>Use o formulário acima para começar!</small>
      </div>
    `;
    return;
  }

  todos.forEach((lembrete) => {
    const card = document.createElement("div");
    card.className = "card shadow-sm border-start border-primary border-4 mb-3";

    const dataInsFormatada = lembrete.dataInsercao.toLocaleString("pt-BR");
    const dataLimFormatada = lembrete.dataLimite
      ? new Date(lembrete.dataLimite).toLocaleString("pt-BR")
      : "Não definida";

    card.innerHTML = `
      <div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h3 class="h5 card-title mb-1 text-dark fw-bold">${
              lembrete.titulo
            }</h3>
            <p class="card-text text-secondary small mb-3">${
              lembrete.descricao ??
              '<span class="text-muted text-opacity-50"><i>Sem descrição.</i></span>'
            }</p>
            
            <div class="d-flex flex-wrap gap-2 text-muted" style="font-size: 0.8rem;">
              <span class="badge bg-light text-dark border">
                <strong>Criado em:</strong> ${dataInsFormatada}
              </span>
              <span class="badge ${
                lembrete.dataLimite
                  ? "bg-warning-subtle text-warning-focus"
                  : "bg-light text-muted"
              } border">
                <strong>Prazo:</strong> ${dataLimFormatada}
              </span>
            </div>
          </div>
          
          <div class="d-flex gap-1">
            <button class="btn btn-sm btn-outline-warning btn-editar" data-id="${
              lembrete.id
            }">Editar</button>
            <button class="btn btn-sm btn-outline-danger btn-excluir" data-id="${
              lembrete.id
            }">Excluir</button>
          </div>
        </div>
      </div>
    `;

    card
      .querySelector(".btn-editar")
      ?.addEventListener("click", () => carregarParaEdicao(lembrete.id));
    card
      .querySelector(".btn-excluir")
      ?.addEventListener("click", () => excluirLembrete(lembrete.id));

    listaContainer.appendChild(card);
  });
}

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const idAtual = inputId.value;
  const dados: CriarLembreteInput = {
    titulo: inputTitulo.value,
    descricao: inputDescricao.value ? inputDescricao.value : undefined,
    usuarioId: auth.estaAutenticado() ? auth.obterIdUsuarioAtual() ?? "desconhecido": "desconhecido",
    dataLimite: inputDataLimite.value
      ? new Date(inputDataLimite.value)
      : undefined,
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
  inputDescricao.value = lembrete.descricao ?? "";

  if (lembrete.dataLimite) {
    const dataIso = new Date(lembrete.dataLimite).toISOString().slice(0, 16);
    inputDataLimite.value = dataIso;
  } else {
    inputDataLimite.value = "";
  }

  btnSalvar.textContent = "Salvar Alterações";
  btnSalvar.className = "btn btn-warning px-4 text-white";
  btnCancelar.classList.remove("d-none");
}

function excluirLembrete(id: string): void {
  if (confirm("Tem certeza que deseja apagar este lembrete?")) {
    gerenciador.excluir(id);
    renderizarLembretes();
    if (inputId.value === id) resetarFormulario();
  }
}

btnCancelar.addEventListener("click", resetarFormulario);

function resetarFormulario(): void {
  form.reset();
  inputId.value = "";
  btnSalvar.textContent = "Adicionar Lembrete";
  btnSalvar.className = "btn btn-primary px-4";
  btnCancelar.classList.add("d-none");
}

gerenciarVisibilidadeTelas();
