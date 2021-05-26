// variables
var todoForm = document.getElementById('todo-form');
var todoList = document.getElementById('todos');
var doneList = document.getElementById('dones');
var todoInput = document.getElementById('todo-input');
var editInput = document.getElementById('edit-input');
// SITA ATSIKOMENTUOTI PIRMAM UZKROVIMUI
// var duomenys = [
//     {
//         todo: 'Pirmas',
//         done: true,
//     },
//     {
//         todo: 'Antras',
//         done: false,
//     },
//     {
//         todo: 'Trecias',
//         done: false,
//     }
// ];
// duomenys = JSON.stringify(duomenys);
// localStorage.setItem('Sarasas', duomenys);
var duomenys = localStorage.getItem('Sarasas');
duomenys = JSON.parse(duomenys);
// Add todo
todoForm.addEventListener('submit', e => {
    e.preventDefault();
    var duomenys = localStorage.getItem('Sarasas');
    duomenys = JSON.parse(duomenys);
    if (todoInput.value === '') {
        todoInput.classList.add('is-invalid');
    } else {
        todoInput.classList.remove('is-invalid');
        var newTodo = `<div class="border border-1 shadow-sm p-3 mb-3  rounded todo-item">
        <h4 class="mb-3 input-name">${todoInput.value}</h4>
        <button type="button" class="btn btn-danger delete">Delete</button>
        <button type="button" class="btn btn-success move-todo">Move to Done</button>
        <button type="button" class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</button>
    </div>`;
        todoList.innerHTML += newTodo;
        todoForm.reset();
    }
});

// Delete todo item / move todo item
document.querySelector('body').addEventListener('click', e => {
    // Delete todo
    if (e.target.classList.contains('delete')) {
        var duomenys = localStorage.getItem('Sarasas');
        duomenys = JSON.parse(duomenys);
        e.target.closest('.todo-item').remove();
        // move todo to done
    } else if (e.target.classList.contains('move-todo')) {
        var duomenys = localStorage.getItem('Sarasas');
        duomenys = JSON.parse(duomenys);
        doneList.appendChild(e.target.closest('.todo-item'));
        e.target.innerText = 'Move Back';
        e.target.classList.remove('move-todo');
        e.target.classList.add('move-done');
        // move todo to list
    } else if (e.target.classList.contains('move-done')) {
        var duomenys = localStorage.getItem('Sarasas');
        duomenys = JSON.parse(duomenys);
        todoList.appendChild(e.target.closest('.todo-item'));
        e.target.innerText = 'Move to Done';
        e.target.classList.add('move-todo');
        e.target.classList.remove('move-done');
        // Paspaudziam edit mygtuka
    } else if (e.target.classList.contains('edit')) {
        h4 = e.target.closest('.todo-item').querySelector('h4');
        var h4text = h4.innerText;
        editInput.value = h4text;
    }
});

// confirm edit todo
document.querySelector('.edit-submit').addEventListener('click', () => {
    var duomenys = localStorage.getItem('Sarasas');
    duomenys = JSON.parse(duomenys);
    h4.innerText = editInput.value;
});