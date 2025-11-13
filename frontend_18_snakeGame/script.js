const board = document.querySelector('.board');
const startBtn = document.querySelector('.btn-start')
const modal = document.querySelector('.modal');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');
const restartBtn = document.querySelector('.btn-restart');
const highScoreElement = document.querySelector('#high-score');
const scoreElement = document.querySelector('#score');
const timerElement = document.querySelector('#time');

const blockWidth = 40;
const blockHeight = 40;

let highscore = localStorage.getItem('highscore') || 0;
let score = 0;
let time = `00:00`;

highScoreElement.innerText = highscore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
const blocks = [];
let snake = [{ x: 3, y: 4 }]; //initial snake of length 3
let direction = 'down';
let intervalId = null;
let timerIntrvalId = null;
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


  //food consume logic
  if (head.x == food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove('food');
    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
    blocks[`${food.x}-${food.y}`].classList.add('food');
    snake.push(head);

    score += 10;
    scoreElement.innerText = score;

    if (score >= highscore) {
      highscore = score;
      highScoreElement.innerText = highscore;
      localStorage.setItem('highscore', highscore.toString());
    }
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
  }, 200)

  timerIntrvalId = setInterval(() => {
    let [min, sec] = time.split(':').map(Number)
    if (sec === 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }
    time = `${min}:${sec}`
    timerElement.innerText = time;
  }, 1000)


})

restartBtn.addEventListener('click', restartGame)

function restartGame() {
  blocks[`${food.x}-${food.y}`].classList.remove('food');
  snake.forEach(segment => {
    blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
  })

  score = 0;
  time = `00:00`;

  scoreElement.innerText = score;
  timerElement.innerText = time;
  highScoreElement.innerText = highscore;

  modal.style.display = 'none';
  direction = 'down';
  snake = [{ x: 3, y: 4 }];
  food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
  intervalId = setInterval(() => {
    render();
  }, 200)
}