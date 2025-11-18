let body = document.querySelector('body')
let main = document.createElement('main')
let btn = document.createElement('button')
body.appendChild(main)
main.appendChild(btn)
btn.innerText = "Click & See the magic"

btn.addEventListener("click", function () {
  // console.log("hello");
  let x = Math.random() * 90
  let y = Math.random() * 90
  let c1 = Math.floor(Math.random() * 256)
  let c2 = Math.floor(Math.random() * 256)
  let c3 = Math.floor(Math.random() * 256)
  let box = document.createElement('div')
  main.appendChild(box)
  box.style.height = "50px"
  box.style.width = "50px"
  box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
  box.style.position = "absolute"
  box.style.left = x + "%"
  box.style.top = y + "%"


})

