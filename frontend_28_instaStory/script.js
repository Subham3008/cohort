let users =
  [
    { dp: "https://images.unsplash.com/photo-1679217121503-264c00693d18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1679217125041-6f81624038d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1611886658071-b51744fac077?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1700059317901-31c34c4e59bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8" },
    { dp: "https://images.unsplash.com/photo-1645887365982-2cd4de013b9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1645220270116-a5956d903b58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8" },
    { dp: "https://images.unsplash.com/photo-1603372042694-cb8eadd4596d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8", story: "https://plus.unsplash.com/premium_photo-1700152005175-bd50971fd1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" },
    { dp: "https://images.unsplash.com/photo-1673767087873-2e2d1f886369?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1611601164701-cc6acd64a984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" }
  ]

let storys = document.querySelector(".storys")
let story = document.querySelector(".story")
let fullScreen = document.querySelector(".outer")
let line = document.querySelector(".line")
let storyLine = document.querySelector(".story-line")

let clot = ""
users.forEach(function (dets, idx) {
  clot += ` <div class="story">
          <img id="${idx}"
            src="${dets.dp}"
            alt="">
        </div>`

})
storys.innerHTML = clot
let count = 0;

storys.addEventListener("click", function (dets) {
  // console.log(users[dets.target.id]);
  fullScreen.style.backgroundImage = `url(${users[dets.target.id].story})`
  fullScreen.style.display = "block"


  let int = setInterval(() => {
    count++
    storyLine.style.display = "block"
    line.style.width = count + "%"

    // if (count >= 100) {
    //   clearInterval(int)
    //   fullScreen.style.display = "none"
    //   storyLine.style.display = "none"
    //   count = 0
    // }
  }, 30);

  setTimeout(() => {
    clearInterval(int)
    fullScreen.style.display = "none"
    storyLine.style.display = "none"
    count = 0
  }, 3000);

})