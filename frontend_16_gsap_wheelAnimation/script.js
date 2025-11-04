window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".scrol", {
      transform: "translateX(-200%)",
      repeat: -1,
      ease: "none",
      duration: 3
    })

    gsap.to(".scrol img", {
      rotate: 180
    })

  } else {
    gsap.to(".scrol", {
      transform: "translateX(0%)",
      repeat: -1,
      ease: "none",
      duration: 3
    })

    gsap.to(".scrol img", {
      rotate: 0
    })
  }
})