const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const tasks = document.querySelectorAll('.task');
let dragElement = null

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
    // column.classList.remove('hover-over')
    // console.log("column", column);

  })
}

dropIndropOut(todo);
dropIndropOut(progress);
dropIndropOut(done);

