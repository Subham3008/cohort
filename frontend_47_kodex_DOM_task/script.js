
const btn = document.querySelector("#clickBtn")



{/*-task1-- */ }
const p = document.querySelector("p")
const pbtn = document.querySelector("#pBtn")

let flag = false
pbtn.addEventListener('click', function () {
  if (flag === false) {
    p.textContent = 'Welcome'
    flag = true
  } else {
    p.textContent = 'Hello'
    flag = false
  }
})

{/*-task2-- */ }
const colorBox = document.querySelector('.color-box')
const colorBtn = document.querySelector('#boxColorChangeBtn')
let count = 0
colorBtn.addEventListener("click", function () {
  count++

  if (count == 1) {
    return colorBox.style.backgroundColor = 'red'
  }
  else if (count == 2) {
    return colorBox.style.backgroundColor = 'green'
  }
  else if (count == 3) {
    count = 0
    return colorBox.style.backgroundColor = 'blue'
  }
})

{/*-task3-- */ }
const textBox = document.querySelector('.text-box')
const showAndHideBtn = document.querySelector('#showAndHideBtn')

let display = false
showAndHideBtn.addEventListener('click', function () {
  display = !display
  textBox.style.display = display ? 'none' : 'flex'
  showAndHideBtn.innerHTML = display ? 'show' : 'hidden'
})

{/*-task4-- */ }
const leftBtn = document.querySelector('#leftBtn')
const rightBtn = document.querySelector('#rightBtn')
const box = document.querySelector("#box")

rightBtn.addEventListener('click', function () {
  box.style.animationName = 'rotate'
})

leftBtn.addEventListener('click', function () {
  box.style.animationName = 'riverseRotate'
})

{/*-task7-- */ }
const task7 = document.querySelector('.task7')
const paragraph = document.createElement('p')
const input = document.createElement('input')
task7.appendChild(input)

input.addEventListener('input', function () {
  task7.appendChild(paragraph)
  paragraph.innerHTML = input.value
  paragraph.style.color = 'green'
  paragraph.style.fontSize = 'large'
})

{/*--task10--- */ }
const stopBtn = document.querySelector('#stop')
const readyBtn = document.querySelector('#ready')
const goBtn = document.querySelector('#go')

const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')

function resetLight() {
  red.style.backgroundColor = 'rgb(199, 210, 210)'
  yellow.style.backgroundColor = 'rgb(199, 210, 210)'
  green.style.backgroundColor = 'rgb(199, 210, 210)'
}


stopBtn.addEventListener('click', function () {
  resetLight()
  red.style.backgroundColor = 'red'
})
readyBtn.addEventListener('click', function () {
  resetLight()
  yellow.style.backgroundColor = 'yellow'
})
goBtn.addEventListener('click', function () {
  resetLight()
  green.style.backgroundColor = 'green'
})
