let path = "M 100 80 Q 500 80 900 80"
let finalPath = "M 100 80 Q 500 80 900 80"

let string = document.querySelector(".string")
string.addEventListener("mousemove", function (dets) {
  path = `M 100 80 Q ${dets.x} ${dets.y} 900 80`

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out"
  })
})

string.addEventListener("mouseleave", function () {
  let finalPath = "M 100 80 Q 500 80 900 80"

  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.1)"
  })
})