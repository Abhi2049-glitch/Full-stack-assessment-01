const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    li.classList.toggle('done', checkbox.checked);
  });
  
  const span = document.createElement('span');
  span.textContent = text;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.title = 'Delete task';
  deleteBtn.addEventListener('click', function () {
    li.remove();
    updateEmpty();
  });
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = '';
  updateEmpty();
}

function updateEmpty() {
  emptyMsg.style.display = list.children.length === 0 ? 'block' : 'none';
}

updateEmpty();
