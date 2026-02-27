# My To-Do List - AV1

Uma aplicação web simples de Lista de Tarefas desenvolvida com **HTML**, **CSS** e **JavaScript puro**, conforme requisitos da avaliação AV1.

## 📁 Estrutura do Projeto

```
HatsuneMiku/
├── index.html           # HTML principal
├── css/
│   └── style.css        # Estilos da aplicação
├── js/
│   └── script.js        # Lógica JavaScript
├── Assets/
│   └── images/          # Imagens do projeto
└── README.md            # Este arquivo
```

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** - Digite na caixa de texto e clique em "Add" (ou pressione Enter)
- ✅ **Marcar como concluído** - Clique no texto para marcar/desmarcar a tarefa
- ✅ **Deletar tarefas** - Clique no "×" para remover uma tarefa
- ✅ **Validação** - Impede tarefas vazias com mensagem de erro clara no DOM
- ✅ **Interface responsiva** - Funciona bem em diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e responsividade
- **JavaScript Puro** - Lógica da aplicação (sem frameworks)

## 📋 Conteúdos Implementados

### JavaScript Essencial
- ✅ Variáveis (`let`, `const`)
- ✅ Tipos básicos (string, array, object)
- ✅ Funções (`render()`, `validarTarefa()`, `adicionarTarefa()`, etc.)
- ✅ Array para armazenar tarefas
- ✅ Manipulação de dados

### DOM Básico
- ✅ `querySelector()` para selecionar elementos
- ✅ `textContent` para atualizar conteúdo
- ✅ `classList` para manipulação de classes
- ✅ Re-renderização automática da lista

### Eventos
- ✅ `addEventListener()` (sem onclick inline)
- ✅ Evento de `submit` do formulário
- ✅ Prevenção do comportamento padrão com `preventDefault()`
- ✅ Validação de input com `trim()`

### Validação
- ✅ Uso de `trim()` para remover espaços
- ✅ Mensagem de erro clara exibida no DOM (não apenas alert)
- ✅ Mensagem desaparece quando o usuário começa a digitar
- ✅ Não permite tarefas vazias no array

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Digite uma tarefa na caixa de entrada
3. Clique em "Add" ou pressione **Enter**
4. Clique no texto para marcar como concluído
5. Clique no "×" para deletar a tarefa

## 📝 Critérios de Avaliação (AV1)

| Critério | Pontos | Status |
|----------|--------|--------|
| Create + Read funcionando | 2,0 | ✅ |
| Validação + Feedback | 1,5 | ✅ |
| DOM + Eventos corretos | 1,0 | ✅ |
| Organização do projeto/código | 0,5 | ✅ |
| **Total** | **5,0** | ✅ |

## 📂 Arquivos Principais

### [index.html](index.html)
- Estrutura HTML com formulário
- Elementos para entrada de tarefa
- Container para exibição da lista
- Div para mensagens de erro

### [css/style.css](css/style.css)
- Design responsivo
- Gradiente de fundo
- Estilos para lista, input e botão
- Estilos para validação (mensagem de erro)
- Estilos para tarefa concluída

### [js/script.js](js/script.js)
- Array `tarefas` para armazenar dados
- Funções essenciais:
  - `validarTarefa(texto)` - Valida se tarefa é vazia
  - `adicionarTarefa(texto)` - Adiciona nova tarefa
  - `removerTarefa(id)` - Deleta tarefa
  - `alternarConclusao(id)` - Marca/desmarca tarefa
  - `render()` - Atualiza a interface

## 💡 Notas de Desenvolvimento

- O código segue boas práticas de organização com funções bem definidas
- Cada função tem docstring explicando seu propósito
- Separação clara entre lógica (JS), apresentação (HTML) e estilo (CSS)
- Preparado para a segunda parte da avaliação (AV2) - Evolução da aplicação

## 🎯 Próximos Passos (AV2)

Este projeto foi organizado e estruturado para facilitar a evolução:
- Adicionar persistência em localStorage
- Implementar edição de tarefas
- Adicionar categorias/prioridades
- Melhorias visuais e animações
- Tests e validações avançadas

---

**Autor:** Student Aviator  
**Data:** Fevereiro de 2026  
**Versão:** 1.0 (AV1)
