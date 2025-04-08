// todo.js
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todoInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('todoList');

  addBtn.addEventListener('click', () => {
    const todoText = input.value.trim();
    if (!todoText) return;

    const li = document.createElement('li');
    li.textContent = todoText;
    list.appendChild(li);
    input.value = '';
  });
});
