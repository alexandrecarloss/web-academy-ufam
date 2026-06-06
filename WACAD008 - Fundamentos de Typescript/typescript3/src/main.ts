import { Carrinho, Tv, Celular, Bicicleta } from './types.js';

const carrinho = new Carrinho();

const productTypeSelect = document.getElementById('productType') as HTMLSelectElement;
const btnAdicionar = document.getElementById('btnAdicionar') as HTMLButtonElement;
const tabelaCorpo = document.getElementById('tabelaCorpo') as HTMLTableSectionElement;
const displayValorTotal = document.getElementById('displayValorTotal') as HTMLElement;
const displayTotalItens = document.getElementById('displayTotalItens') as HTMLElement;
const displayCategorias = document.getElementById('displayCategorias') as HTMLElement;


function atualizarInterface() {
    if (!tabelaCorpo || !displayValorTotal || !displayTotalItens || !displayCategorias) return;

    tabelaCorpo.innerHTML = '';

    const produtosNoCarrinho = carrinho.getProdutos();

    if (produtosNoCarrinho.length === 0) {
        tabelaCorpo.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    <i class="bi bi-cart-x h3 d-block mb-2"></i>
                    Nenhum produto no carrinho.
                </td>
            </tr>`;
    } else {
        produtosNoCarrinho.forEach(produto => {
            let badgeHTML = '';
            let detalhesHTML = '';

            if (produto instanceof Tv) {
                badgeHTML = `<span class="badge bg-primary mb-1"><i class="bi bi-tv me-1"></i> TV</span>`;
                detalhesHTML = `${produto.polegadas}" • ${produto.resolucao}`;
            } else if (produto instanceof Celular) {
                badgeHTML = `<span class="badge bg-warning text-dark mb-1"><i class="bi bi-phone me-1"></i> Celular</span>`;
                detalhesHTML = `${produto.memoria}`;
            } else if (produto instanceof Bicicleta) {
                badgeHTML = `<span class="badge bg-info text-dark mb-1"><i class="bi bi-bicycle me-1"></i> Bicicleta</span>`;
                detalhesHTML = `Aro ${produto.tamanhoAro}`;
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="ps-4">
                    ${badgeHTML}
                    <div class="text-muted small">${detalhesHTML}</div>
                </td>
                <td class="fw-semibold">${produto.modelo}</td>
                <td>${produto.fabricante}</td>
                <td class="text-end fw-bold text-dark">R$ ${produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                <td class="text-center">
                    <button class="btn btn-outline-danger btn-sm btn-remover" data-id="${produto.id}" title="Remover produto">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `;
            tabelaCorpo.appendChild(tr);
        });
    }

    displayValorTotal.textContent = `R$ ${carrinho.calcularTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    
    const qtdItens = carrinho.obterQuantidadeItens();
    displayTotalItens.textContent = `${qtdItens} ${qtdItens === 1 ? 'item' : 'itens'}`;

    let totalTvs = 0;
    let totalCels = 0;
    let totalBikes = 0;

    produtosNoCarrinho.forEach(p => {
        if (p instanceof Tv) totalTvs++;
        if (p instanceof Celular) totalCels++;
        if (p instanceof Bicicleta) totalBikes++;
    });

    displayCategorias.innerHTML = `
        <span class="badge bg-primary">${totalTvs} TV</span>
        <span class="badge bg-warning text-dark">${totalCels} Cel</span>
        <span class="badge bg-info text-dark">${totalBikes} Bike</span>
    `;

    vincularEventosRemover();
}

function adicionarProdutoDoFormulario() {
    if (!productTypeSelect) return;
    console.log('Adicionando produto do formulário...');

    const tipo = productTypeSelect.value;
    const modelo = (document.getElementById('modelo') as HTMLInputElement).value.trim();
    const fabricante = (document.getElementById('fabricante') as HTMLInputElement).value.trim();
    const precoInput = (document.getElementById('preco') as HTMLInputElement).value;

    if (!modelo || !fabricante || !precoInput) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const preco = parseFloat(precoInput);
    const id = Date.now().toString(); 

    let novoProduto;

    switch (tipo) {
        case 'tv':
            const resolucao = (document.getElementById('resolucao') as HTMLInputElement).value || 'Não informada';
            const polegadas = (document.getElementById('polegadas') as HTMLInputElement).value || 'N/A';
            novoProduto = new Tv(id, modelo, fabricante, preco, resolucao, polegadas);
            break;
        case 'celular':
            const memoria = (document.getElementById('memoria') as HTMLInputElement).value || 'Não informada';
            novoProduto = new Celular(id, modelo, fabricante, preco, memoria);
            break;
        case 'bicicleta':
            const tamanhoAro = (document.getElementById('tamanhoAro') as HTMLInputElement).value || 'N/A';
            novoProduto = new Bicicleta(id, modelo, fabricante, preco, tamanhoAro);
            break;
        default:
            return;
    }

    carrinho.adicionarProduto(novoProduto);
    limparFormulario();
    atualizarInterface();
}

function vincularEventosRemover() {
    const botoesRemover = document.querySelectorAll('.btn-remover');
    botoesRemover.forEach(botao => {
        const elementoBotao = botao as HTMLButtonElement;
        elementoBotao.onclick = function() {
            const id = elementoBotao.getAttribute('data-id');
            if (id) {
                carrinho.removerProduto(id);
                atualizarInterface(); 
            }
        };
    });
}

function limparFormulario() {
    (document.getElementById('modelo') as HTMLInputElement).value = '';
    (document.getElementById('fabricante') as HTMLInputElement).value = '';
    (document.getElementById('preco') as HTMLInputElement).value = '';
    (document.getElementById('resolucao') as HTMLInputElement).value = '';
    (document.getElementById('polegadas') as HTMLInputElement).value = '';
    (document.getElementById('memoria') as HTMLInputElement).value = '';
    (document.getElementById('tamanhoAro') as HTMLInputElement).value = '';
}

if (btnAdicionar) {
    btnAdicionar.onclick = adicionarProdutoDoFormulario;
}

atualizarInterface();