let main = document.querySelector('.main')
let cursor = document.querySelector('.cursor')
let image = document.querySelector(".image")

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  })

})

image.addEventListener("mouseenter", function () {
  cursor.innerHTML = 'view more',
    cursor.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  gsap.to(cursor, {
    scale: 4,
  })

})

image.addEventListener("mouseleave", function () {
  cursor.innerHTML = '',
    cursor.style.backgroundColor = "rgba(255, 255, 255)";
  gsap.to(cursor, {
    scale: 1,
  })

})