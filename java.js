// Selecionando os elementos do DOM
const inputRequisito = document.getElementById('reqInput');
const btnAdicionar = document.getElementById('addBtn');
const listaRequisitos = document.getElementById('reqList');

// Função para adicionar um novo item à lista
function adicionarRequisito() {
    const texto = inputRequisito.value.trim();

    // Verifica se o campo não está vazio
    if (texto !== '') {
        // Cria um novo elemento de lista (li)
        const novoItem = document.createElement('li');
        novoItem.textContent = texto;

        // Adiciona um evento de clique para marcar como concluído/analisado
        novoItem.addEventListener('click', function() {
            novoItem.classList.toggle('completed');
        });

        // Adiciona o item à lista (ul)
        listaRequisitos.appendChild(novoItem);

        // Limpa o campo de input e devolve o foco
        inputRequisito.value = '';
        inputRequisito.focus();
    } else {
        alert('Por favor, insira uma descrição válida.');
    }
}

// Escuta o clique no botão
btnAdicionar.addEventListener('click', adicionarRequisito);

// Permite adicionar pressionando a tecla "Enter" no teclado
inputRequisito.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarRequisito();
    }
});