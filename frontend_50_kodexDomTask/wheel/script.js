const body = document.body
let nav = document.querySelector('nav')



body.addEventListener('wheel', function (dets) {
  if (dets.deltaY > 0) {
    nav.style.transform = 'translateY(-100%)'
  } else {
    nav.style.transform = 'translateY(0%)'
  }
})