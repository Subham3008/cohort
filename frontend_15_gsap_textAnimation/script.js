function textAnimation() {
  let h1 = document.querySelector("h1")
  h1Text = h1.textContent

  let splittedText = h1Text.split("")
  let halfValue = splittedText.length / 2

  let clutter = ""

  splittedText.forEach(function (elem, indx) {
    if (indx < halfValue) {
      clutter += `<span class = "a">${elem}</span>`
    } else {
      clutter += `<span class = "b">${elem}</span>`
    }
  })
  h1.innerHTML = clutter
}

textAnimation()

gsap.from("main h1 .a", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0
})

gsap.from(" main h1 .b", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0
})