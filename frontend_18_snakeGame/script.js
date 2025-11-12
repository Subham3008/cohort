const board = document.querySelector('.board');
const blockWidth = 40;
const blockHeight = 40;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

for(let i=0; i<rows*cols; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    board.appendChild(block);
}