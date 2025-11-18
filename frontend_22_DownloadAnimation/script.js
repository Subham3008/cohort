let btn = document.querySelector("button");
let inner = document.querySelector(".inner")
let h2 = document.querySelector("h2")
let h1 = document.querySelector("h1")
let main = document.querySelector("main")
let count = 0

btn.addEventListener("click", function () {
  btn.style.pointerEvents = 'none'
  let num = 50 + Math.floor(Math.random() * 50)

  let int = setInterval(() => {
    count++
    inner.style.width = count + "%"
    h2.innerText = count + "%"
    btn.innerText = "Downloading.."
    h1.innerText = `Your file has been downloaded within ${num / 10} sec`
  }, num);

  setTimeout(() => {
    clearInterval(int)
    btn.innerText = "Downloaded"
    btn.style.opacity = 0.5
    h1.innerText = "Your file has been downloaded successfully."
  }, num * 100);

})