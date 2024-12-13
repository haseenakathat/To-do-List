document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('todoForm').addEventListener('submit', addTodo);
});

function addTodo(event) {
  event.preventDefault();

  var task = document.getElementById('todoTask').value;
  var date = document.getElementById('todoDate').value;

  var template = document.getElementById('todoTemplate').content.cloneNode(true);
  template.querySelector('.task').textContent = task;
  template.querySelector('.date').textContent = date;

  document.getElementById('todoList').appendChild(template);
  document.getElementById('todoTask').value = '';

  var todoDiv = document.querySelector('#todoList .todo-item:last-child');
  todoDiv.querySelector('.markDone').addEventListener('click', function() {
      todoDiv.classList.toggle('done');
  });
  todoDiv.querySelector('.removeTodo').addEventListener('click', function() {
      todoDiv.remove();
  });
  todoDiv.querySelector('.editTodo').addEventListener('click', function() {
      editTodoInline(todoDiv);
  });
}

function editTodoInline(todoItem) {
  var task = todoItem.querySelector('.task');
  var date = todoItem.querySelector('.date');

  var taskInput = document.createElement('input');
  taskInput.value = task.textContent;
  var dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.value = date.textContent;

  task.replaceWith(taskInput);
  date.replaceWith(dateInput);

  var saveButton = todoItem.querySelector('.editTodo');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', function() {
      task.textContent = taskInput.value;
      date.textContent = dateInput.value;

      taskInput.replaceWith(task);
      dateInput.replaceWith(date);
      saveButton.textContent = 'Edit Todo';
  });
}


  