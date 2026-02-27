// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

// Array para armazenar as tarefas
let tarefas = [];

// Elementos do DOM
const formulario = document.querySelector('#formulario-tarefa');
const inputTarefa = document.querySelector('#input-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const mensagemErro = document.querySelector('#mensagem-erro');

// ========================================
// FUNÇÕES DE VALIDAÇÃO
// ========================================

/**
 * Valida se a tarefa é válida (não vazia e com trim)
 * @param {string} texto - O texto da tarefa a validar
 * @returns {boolean} - true se válida, false se inválida
 */
function validarTarefa(texto) {
  return texto.trim() !== '';
}

/**
 * Limpa a mensagem de erro do DOM
 */
function limparMensagemErro() {
  mensagemErro.textContent = '';
  mensagemErro.classList.remove('ativo');
}

/**
 * Exibe uma mensagem de erro no DOM
 * @param {string} mensagem - A mensagem a exibir
 */
function exibirMensagemErro(mensagem) {
  mensagemErro.textContent = mensagem;
  mensagemErro.classList.add('ativo');
}

// ========================================
// FUNÇÕES DE MANIPULAÇÃO DE TAREFAS
// ========================================

/**
 * Adiciona uma nova tarefa ao array e atualiza a UI
 * @param {string} texto - O texto da tarefa a adicionar
 */
function adicionarTarefa(texto) {
  // Validação
  if (!validarTarefa(texto)) {
    exibirMensagemErro('Por favor, digite uma tarefa válida!');
    return;
  }

  // Limpar mensagem de erro anterior
  limparMensagemErro();

  // Criar objeto tarefa
  const tarefa = {
    id: Date.now(),
    texto: texto.trim(),
    concluida: false
  };

  // Adicionar ao array
  tarefas.push(tarefa);

  // Limpar input
  inputTarefa.value = '';

  // Re-renderizar lista
  render();
}

/**
 * Remove uma tarefa do array e atualiza a UI
 * @param {number} id - O ID da tarefa a remover
 */
function removerTarefa(id) {
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  render();
}

/**
 * Alterna o estado de conclusão de uma tarefa
 * @param {number} id - O ID da tarefa a alternar
 */
function alternarConclusao(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
    render();
  }
}

// ========================================
// FUNÇÕES DE RENDERIZAÇÃO (DOM)
// ========================================

/**
 * Renderiza (atualiza) a lista de tarefas na tela
 * Lê o array de tarefas e atualiza o DOM
 */
function render() {
  // Limpar lista
  listaTarefas.innerHTML = '';

  // Iterar sobre as tarefas e criar elementos
  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    
    // Adicionar classe 'concluida' se a tarefa foi marcada
    if (tarefa.concluida) {
      li.classList.add('concluida');
    }

    // Conteúdo da tarefa (texto + botão de deletar)
    li.innerHTML = `
      <span class="texto-tarefa">${tarefa.texto}</span>
      <button class="btn-deletar">×</button>
    `;

    // Evento de clique no item (alternar conclusão)
    li.querySelector('.texto-tarefa').addEventListener('click', () => {
      alternarConclusao(tarefa.id);
    });

    // Evento de clique no botão deletar
    li.querySelector('.btn-deletar').addEventListener('click', (e) => {
      e.stopPropagation(); // Impedir propagação do clique
      removerTarefa(tarefa.id);
    });

    // Adicionar à lista
    listaTarefas.appendChild(li);
  });
}

// ========================================
// EVENTOS
// ========================================

/**
 * Evento de submit do formulário
 */
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Previne comportamento padrão (reload)
  adicionarTarefa(inputTarefa.value);
});

/**
 * Evento de input para limpar mensagem de erro quando o usuário começa a digitar
 */
inputTarefa.addEventListener('input', () => {
  if (inputTarefa.value.trim() !== '') {
    limparMensagemErro();
  }
});

// ========================================
// INICIALIZAÇÃO
// ========================================

// Renderizar lista inicial (vazia)
render();

