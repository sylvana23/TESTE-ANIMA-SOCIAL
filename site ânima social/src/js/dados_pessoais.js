// script.js

// Selecionar os elementos da página
const editBtn = document.getElementById('edit-btn');
const inputs = document.querySelectorAll('input');

// Adicionar evento ao botão "Editar"
editBtn.addEventListener('click', () => {
    if (editBtn.textContent === 'Editar Informações') {
        // Tornar campos editáveis
        inputs.forEach(input => {
            input.removeAttribute('readonly');
            input.style.backgroundColor = '#ffffff'; // Fundo branco ao editar
            input.style.cursor = 'text';
        });
        editBtn.textContent = 'Salvar Alterações';
        editBtn.classList.add('editing');
    } else {
        // Salvar as alterações e tornar os campos apenas leitura novamente
        inputs.forEach(input => {
            input.setAttribute('readonly', true);
            input.style.backgroundColor = '#f0f0f0'; // Fundo cinza quando apenas leitura
            input.style.cursor = 'not-allowed';
        });
        editBtn.textContent = 'Editar Informações';
        editBtn.classList.remove('editing');
    }
});
