
const editBtn = document.getElementById('edit-btn');
const inputs = document.querySelectorAll('input');


function loadFromLocalStorage() {
    inputs.forEach(input => {
      
        const storedValue = localStorage.getItem(input.id);
        if (storedValue) {
            input.value = storedValue; 
        }
    });
}

loadFromLocalStorage();

editBtn.addEventListener('click', () => {
    if (editBtn.textContent === 'Editar Informações') {
        
        inputs.forEach(input => {
            input.removeAttribute('readonly');
            input.style.backgroundColor = '#ffffff'; 
            input.style.cursor = 'text';
        });
        editBtn.textContent = 'Salvar Alterações';
        editBtn.classList.add('editing');
    } else {
        
        inputs.forEach(input => {
            input.setAttribute('readonly', true);
            input.style.backgroundColor = '#f0f0f0'; 
            input.style.cursor = 'not-allowed';
            
            
            localStorage.setItem(input.id, input.value);
        });
        editBtn.textContent = 'Editar Informações';
        editBtn.classList.remove('editing');
    }
});
