const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

// Add task on Enter key press
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Add a new task to the list
function addTask() {
  const text = input.value.trim();
  if (!text) return;

  // Create list item
  const li = document.createElement('li');

  // Checkbox to mark task as done
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    li.classList.toggle('done', checkbox.checked);
  });

  // Task text
  const span = document.createElement('span');
  span.textContent = text;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.title = 'Delete task';
  deleteBtn.addEventListener('click', function () {
    li.remove();
    updateEmpty();
  });

  // Assemble the list item
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear input and update empty message
  input.value = '';
  updateEmpty();
}

// Show or hide the empty state message
function updateEmpty() {
  emptyMsg.style.display = list.children.length === 0 ? 'block' : 'none';
}

// Run on page load
updateEmpty();
