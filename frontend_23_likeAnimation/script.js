let img = document.querySelector("img")
let like = document.querySelector("#like")

img.addEventListener("dblclick", function () {
  like.style.opacity = 1
  like.style.transform = 'translate(-50%,-60%) scale(1) rotate(0deg)'
  setTimeout(() => {
    like.style.transform = 'translate(-50%,-380%) scale(1) rotate(60deg)'
    // like.style.opacity = 0
  }, 800);
  setTimeout(() => {
    like.style.opacity = 0
  }, 1000);
  setTimeout(() => {
    like.style.transform = 'translate(-50%,-60%) scale(0) rotate(-60deg)'
  }, 1200);

})