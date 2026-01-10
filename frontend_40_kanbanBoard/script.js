const taskData = {}
const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const columns = [todo, progress, done];
const tasks = document.querySelectorAll('.task');
const toggleModalBtn = document.querySelector('#toggle-modal');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal .bg');
const addNewTaskBtn = document.querySelector('#add-new-task');

let dragElement = null

/*Add task*/
function addTask(title, description, column) {
  const div = document.createElement('div')
  div.classList.add('task')
  div.setAttribute('draggable', true)
  div.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <button>Delete</button>`

  column.appendChild(div)

  div.addEventListener('drag', (e) => {
    dragElement = div;
  })

  const deleteBtn = div.querySelector('button')
  deleteBtn.addEventListener('click', () => {
    div.remove()
    updateTaskCount()
  })

  return div
}

/*Local Storage save method*/
function updateTaskCount() {
  columns.forEach((col) => {
    const tasks = col.querySelectorAll('.task')
    const count = col.querySelector('.right')
    count.innerText = tasks.length

    taskData[col.id] = Array.from(tasks).map((task) => {
      return {
        title: task.querySelector('h2').innerText,
        description: task.querySelector('p').innerText
      }
    })
    localStorage.setItem('taskData', JSON.stringify(taskData))
    count.innerText = tasks.length
  })
}

/*check data is available in localStorage*/
if (localStorage.getItem('taskData')) {
  const data = JSON.parse(localStorage.getItem('taskData'))
  for (const col in data) {
    const column = document.querySelector(`#${col}`)
    data[col].forEach((task) => {
      addTask(task.title, task.description, column)
    })
  }
  updateTaskCount()
}

tasks.forEach((task) => {
  task.addEventListener('drag', (e) => {
    dragElement = task;
  })
})

/* Handle drag enter and drag leave to add a border to the column */
function dropIndropOut(column) {
  column.addEventListener('dragenter', (e) => {
    e.preventDefault();
    column.classList.add('hover-over')
  })

  column.addEventListener('dragleave', (e) => {
    e.preventDefault();
    column.classList.remove('hover-over')
  })

  column.addEventListener('dragover', (e) => {
    e.preventDefault();
  })

  column.addEventListener('drop', (e) => {
    e.preventDefault();
    column.appendChild(dragElement);
    column.classList.remove('hover-over')
    updateTaskCount()
  })
}

dropIndropOut(todo);
dropIndropOut(progress);
dropIndropOut(done);

toggleModalBtn.addEventListener('click', () => {
  modal.classList.toggle('active')
})

modalBg.addEventListener('click', () => {
  modal.classList.remove('active')
})

addNewTaskBtn.addEventListener('click', () => {
  const taskTitle = document.querySelector('#task-title').value
  const taskDesc = document.querySelector('#task-description').value

  addTask(taskTitle, taskDesc, todo)
  updateTaskCount()
  modal.classList.remove('active')

  document.querySelector('#task-title').value = ''
  document.querySelector('#task-description').value = ''
})
