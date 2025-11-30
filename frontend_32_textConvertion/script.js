let p = document.querySelector("h3")
let charecter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let text = p.innerText

let intervalId;

p.addEventListener("mouseenter", () => {
  clearInterval(intervalId)
  iteration = 0

  intervalId = setInterval(() => {
    let str = text.split('').map((char, idx) => {
      if (idx < iteration) {
        return char

      }
      return charecter[Math.floor(Math.random() * charecter.length)]
    }).join("")

    p.innerText = str

    iteration += 0.25

    if (iteration >= text.length) {
      clearInterval(intervalId)
    }

  }, 30)
})


