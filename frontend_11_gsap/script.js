gsap.from(".img1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: 60
})

gsap.from(".img2", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  x: 60
})

gsap.from(".img3", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60
})

gsap.from("main .sec1 h1,h3", {
  delay: 0.4,
  opacity: 0,
  duration: 1
})

gsap.from("main .sec2 h5, main .sec2 h1, main .sec2 h4", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".sec2",
    scroller: "body",
    start: "top 80%",
  }
});
