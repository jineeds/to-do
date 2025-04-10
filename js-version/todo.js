// todo.js
// addEvenListner을 사용해서 배열없이 바로 li출력하는 방식임
// document.addEventListener('DOMContentLoaded', () => {
//   const input = document.getElementById('todoInput');
//   const addBtn = document.getElementById('addBtn');
//   const list = document.getElementById('todoList');

//   addBtn.addEventListener('click', () => {
//     const todoText = input.value.trim();
//     if (!todoText) return;

//     const li = document.createElement('li');
//     li.textContent = todoText;
//     list.appendChild(li);
//     input.value = '';
//   });
// });

// addTodo() + todos.push() + renderTodos() 배열에 저장하고 배열 기반으로 리스트 출력
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todoInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('todoList');

  const todos = [];

  const addTodo = () => {
    const todoText = input.value.trim();

    console.log(todoText);

    if (!todoText) return;

    const newTodo = {
      text: todoText,
      done: false,
    };

    todos.push(newTodo);
    renderTodos();
    input.value = '';
  };

  const renderTodos = () => {
    list.innerHTML = '';

    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.textContent = todo.text;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '삭제';
      deleteBtn.style.marginLeft = '10px';

      deleteBtn.addEventListener('click', () => {
        deleteTodo(index);
      });
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  };

  // ✅ 여기서 addTodo 함수 연결!
  addBtn.addEventListener('click', addTodo);

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
  };
});
