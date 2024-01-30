//Первое задание
const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');

const modal = document.getElementById('modal');
const editInput = document.getElementById('edit-input');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const errorMsg = document.getElementById('error-msg');
const todoText = document.querySelector('.todo-text');

createButton.onclick = () => createTodo();
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo();
    }
};

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Нельзя вводить пустоту или пробелы');
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'block_text');

    const divButtons = document.createElement('button');
    divButtons.setAttribute('class', 'div_buttons');

    const text = document.createElement('h3');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');

    deleteButton.innerHTML = 'DELETE';
    editButton.innerHTML = 'EDIT';

    text.innerHTML = input.value;
    divButtons.append(editButton, deleteButton);
    div.append(text, divButtons);

    deleteButton.onclick = () => div.remove();
    text.addEventListener('click', () => text.classList.toggle('toggle'));

    todoList.prepend(div);
    input.value = '';

    editButton.addEventListener('click', () => {
        openModal(editInput, saveBtn, cancelBtn, errorMsg, text);
    });

    function openModal(editInput, saveBtn, cancelBtn, errorMsg, text) {
        modal.style.display = 'block';
        editInput.value = text.textContent;

        cancelBtn.onclick = () => closeModal();
        saveBtn.onclick = () => {
            const newText = editInput.value.trim();
            if (newText === '') {
                errorMsg.textContent = 'Пустоту вводить нельзя';
            } else {
                text.textContent = newText;
                closeModal();
                errorMsg.textContent = '';
            }
        };
    }

    function closeModal() {
        modal.style.display = 'none';
        editInput.value = '';
        errorMsg.textContent = '';
    }
};

//Второе задание

const countInput = document.getElementById('count-input');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

incrementBtn.addEventListener('click', () => {
    updateCounter(1);
});

decrementBtn.addEventListener('click', () => {
    updateCounter(-1);
});

function updateCounter(value) {
    let currentValue = parseInt(countInput.value);
    currentValue += value;
    countInput.value = currentValue;
    updateColor(currentValue);
}

function updateColor(value) {
    countInput.classList.remove('green', 'gray', 'red');
    if (value > 0) {
        countInput.classList.add('green');
    } else if (value < 0) {
        countInput.classList.add('red');
    } else {
        countInput.classList.add('gray');
    }
}