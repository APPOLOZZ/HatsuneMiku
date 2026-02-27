let tarefas = [];

const formulario = document.querySelector('#formulario-tarefa');
const inputTarefa = document.querySelector('#input-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const mensagemErro = document.querySelector('#mensagem-erro');

function validarTarefa(texto) {
  return texto.trim() !== '';
}

function limparMensagemErro() {
  mensagemErro.textContent = '';
  mensagemErro.classList.remove('ativo');
}

function exibirMensagemErro(mensagem) {
  mensagemErro.textContent = mensagem;
  mensagemErro.classList.add('ativo');
}

function adicionarTarefa(texto) {
  if (!validarTarefa(texto)) {
    exibirMensagemErro('Por favor, digite uma tarefa válida!');
    return;
  }

  limparMensagemErro();

  const tarefa = {
    id: Date.now(),
    texto: texto.trim(),
    concluida: false
  };

  tarefas.push(tarefa);
  inputTarefa.value = '';
  render();
}

function removerTarefa(id) {
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  render();
}

function alternarConclusao(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
    render();
  }
}

function render() {
  listaTarefas.innerHTML = '';

  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    
    if (tarefa.concluida) {
      li.classList.add('concluida');
    }

    li.innerHTML = `
      <span class="texto-tarefa">${tarefa.texto}</span>
      <button class="btn-deletar">×</button>
    `;

    li.querySelector('.texto-tarefa').addEventListener('click', () => {
      alternarConclusao(tarefa.id);
    });

    li.querySelector('.btn-deletar').addEventListener('click', (e) => {
      e.stopPropagation();
      removerTarefa(tarefa.id);
    });

    listaTarefas.appendChild(li);
  });
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  adicionarTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('input', () => {
  if (inputTarefa.value.trim() !== '') {
    limparMensagemErro();
  }
});

render();

