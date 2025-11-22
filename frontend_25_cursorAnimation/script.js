// let elem = document.querySelectorAll(".elem")

// elem.forEach(function (val) {
//   val.addEventListener("mouseenter", function () {
//     val.childNodes[3].style.opacity = 1
//   })
//   val.addEventListener("mouseleave", function () {
//     val.childNodes[3].style.opacity = 0
//   })
//   val.addEventListener("mousemove", function (del) {
//     val.childNodes[3].style.left = del.x + "px"
//     val.childNodes[3].style.top = del.y + "px"
//   })

// })

//---------------------------------------
// let elems = document.querySelectorAll(".elem");

// elems.forEach(function (val) {
//   let img = val.querySelector(".elem img");

//   val.addEventListener("mouseenter", function () {
//     img.style.opacity = 1;
//   });

//   val.addEventListener("mouseleave", function () {
//     img.style.opacity = 0;
//   });

//   val.addEventListener("mousemove", function (e) {
//     let rect = val.getBoundingClientRect();

//     img.style.left = (e.clientX - rect.left) + "px";
//     img.style.top = (e.clientY - rect.top) + "px";
//   });
// });
//-------------------------------------------------------
let elems = document.querySelectorAll(".elem");

elems.forEach(function (val) {
  let img = val.querySelector("img");

  val.addEventListener("mouseenter", function () {
    img.style.opacity = 1;
  });

  val.addEventListener("mouseleave", function () {
    img.style.opacity = 0;
  });

  val.addEventListener("mousemove", function (e) {
    let rect = val.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // boundary limit
    let halfSize = 50; // image is 100px so half = 50

    x = Math.max(halfSize, Math.min(x, rect.width - halfSize));
    y = Math.max(halfSize, Math.min(y, rect.height - halfSize));

    img.style.left = x + "px";
    img.style.top = y + "px";
  });
});

