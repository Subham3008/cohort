const board = document.querySelector('.board');
const startBtn = document.querySelector('.btn-start')
const modal = document.querySelector('.modal');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');
const restartBtn = document.querySelector('.btn-restart');
const highScore = document.querySelector('#high-score');
const score = document.querySelector('#score');
const tomer = document.querySelector('#timer');
const blockWidth = 40;
const blockHeight = 40;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
const blocks = [];
let snake = [{ x: 3, y: 4 }]; //initial snake of length 3
let direction = 'down';
let intervalId = null;
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };

/*block design*/
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement('div');
    block.classList.add('block');
    board.appendChild(block);
    // block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;

  }
}

function render() {

  blocks[`${food.x}-${food.y}`].classList.add('food'); //food add

  let head = null;
  if (direction === 'left') {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === 'right') {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === 'up') {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === 'down') {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    clearInterval(intervalId);
    modal.style.display = 'flex';
    startGame.style.display = 'none';
    gameOver.style.display = 'flex';
    return;
  }



  if (head.x == food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove('food');
    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
    blocks[`${food.x}-${food.y}`].classList.add('food');
    snake.push(head);
  }



  snake.forEach(segment => {
    blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
  })


  snake.unshift(head);
  snake.pop()

  snake.forEach(segment => {
    blocks[`${segment.x}-${segment.y}`].classList.add('fill');
  })
}

/*snake movment*/
// intervalId = setInterval(() => {
//   render();
// }, 300)

/*key press function*/
addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    direction = 'left';
  } else if (e.key === 'ArrowRight') {
    direction = 'right';
  } else if (e.key === 'ArrowUp') {
    direction = 'up';
  } else if (e.key === 'ArrowDown') {
    direction = 'down';
  }
})

startBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  intervalId = setInterval(() => {
    render();
  }, 300)

})

restartBtn.addEventListener('click', restartGame)

function restartGame() {
  blocks[`${food.x}-${food.y}`].classList.remove('food');
  snake.forEach(segment => {
    blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
  })

  modal.style.display = 'none';
  direction = 'down';
  snake = [{ x: 3, y: 4 }];
  food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
  intervalId = setInterval(() => {
    render();
  }, 300)
}