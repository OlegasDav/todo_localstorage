// variables
var todoForm = document.getElementById('todo-form');
var todoList = document.getElementById('todos');
var doneList = document.getElementById('dones');
var todoInput = document.getElementById('todo-input');
var editInput = document.getElementById('edit-input');
// Global h4
// var h4;
// Add todo
todoForm.addEventListener('submit', e => {
    e.preventDefault();
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
    if (e.target.classList.contains('delete')) {
        e.target.closest('.todo-item').classList.add('delete-animation');
        setTimeout(function () {
            e.target.closest('.todo-item').remove();
        }, 1000);
    } else if (e.target.classList.contains('move-todo')) {
        e.target.closest('.todo-item').classList.remove('edit-animation');
        doneList.appendChild(e.target.closest('.todo-item'));
        e.target.innerText = 'Move Back';
        e.target.classList.remove('move-todo');
        e.target.classList.add('move-done');
    } else if (e.target.classList.contains('move-done')) {
        e.target.closest('.todo-item').classList.remove('edit-animation');
        todoList.appendChild(e.target.closest('.todo-item'));
        e.target.innerText = 'Move to Done';
        e.target.classList.add('move-todo');
        e.target.classList.remove('move-done');
    } else if (e.target.classList.contains('edit')) {
        // Paspaudziam edit mygtuka
        h4 = e.target.closest('.todo-item').querySelector('h4');
        var h4text = h4.innerText;
        editInput.value = h4text;
    }
});

document.querySelector('.edit-submit').addEventListener('click', () => {
    h4.innerText = editInput.value;
    h4.parentElement.closest('.todo-item').classList.add('edit-animation');
    setTimeout(function () {
        h4.parentElement.closest('.todo-item').classList.remove('edit-animation');
    }, 1000);
});