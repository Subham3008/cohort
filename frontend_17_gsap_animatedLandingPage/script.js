function page1Animation() {
  let tl = gsap.timeline()

  tl.from(".sec1 .left h1, .right a, .right button", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.5
  })

  tl.from(".sec2 .left h1", {
    x: -200,
    opacity: 0,
    duration: 0.5
  })

  tl.from(".sec2 .left p", {
    x: -200,
    opacity: 0,
    duration: 0.4
  })

  tl.from(".sec2 .left button", {
    opacity: 0,
    duration: 0.4
  })

  tl.from(".sec2 .right img", {
    opacity: 0,
    duration: 0.5,
    x: 200
  }, "-=0.7")

  tl.from(".sec3 img", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5
  })

}

page1Animation();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec4",
    scroller: " body",
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  }
})

tl2.from(".sec4 .top", {
  y: 30,
  opacity: 0,
})

tl2.from(".sec4 .first .left", {
  x: -300,
  opacity: 0,
  duration: 1,
}, "first-row")

tl2.from(".sec4 .first .right", {
  x: 300,
  opacity: 0,
  duration: 1,
}, "first-row")

tl2.from(".sec4 .second .left", {
  x: -300,
  opacity: 0,
  duration: 1,
}, "second-row")

tl2.from(".sec4 .second .right", {
  x: 300,
  opacity: 0,
  duration: 1,
}, "second-row")