let menu = document.querySelector(".nav i")
let close = document.querySelector(".menu i")

let tl = gsap.timeline()

tl.to(".menu", {
  right: 0,
  duration: 0.6,
})

tl.from(".menu h4", {
  x: 150,
  duration: 0.5,
  stagger: 0.3,
  opacity: 0
})
tl.from(".menu i", {
  opacity: 0,
  scale:0,
})

tl.pause()

menu.addEventListener('click', function () {
  tl.play()
})

close.addEventListener('click', function () {
  tl.reverse()
})