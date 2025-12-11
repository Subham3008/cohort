let windowButton = document.querySelector(".window-btn")
let cameraButton = document.querySelector(".camera-btn")
let vsCodeButton = document.querySelector(".vs-code-btn")
let fileButton = document.querySelector(".file-btn")
let vsCodeCloseButton = document.querySelector("#vs-code-close")
let cameraCloseButton = document.querySelector("#camera-close")
let fileCloseButton = document.querySelector("#file-close")
const windows = document.querySelector(".windows")
const camera = document.querySelector(".camera")
const vsCode = document.querySelector(".vs-code")
const file = document.querySelector(".file")
const menu = document.querySelector(".right-click")
const monitor = document.querySelector(".monitor")


function toggleWindow() {
  let count = 0
  windowButton.addEventListener("click", function () {
    if (count == 0) {
      count++
      windows.style.bottom = "10%";
    } else {
      count--
      windows.style.bottom = "-100%";
    }

  })
}
toggleWindow();

function toggleCamera() {
  let count = 0
  cameraButton.addEventListener("click", function () {
    if (count == 0) {
      count++
      camera.style.bottom = "10%";
      camera.style.display = "block"
      cameraButton.style.borderBottom = "3px solid rgb(8, 152, 242)";
      cameraButton.style.paddingBottom = "3px";
    } else {
      count--
      camera.style.bottom = "-100%";
    }
  })
  cameraCloseButton.addEventListener("click", function () {
    camera.style.display = "none"
    cameraButton.style.borderBottom = "none";
    count--
  })
}
toggleCamera();

function toggleVsCode() {
  let count = 0
  vsCodeButton.addEventListener("click", function () {
    if (count == 0) {
      count++
      vsCode.style.bottom = "10%";
      vsCode.style.display = "block"
      vsCodeButton.style.borderBottom = "3px solid rgb(8, 152, 242)";
      vsCodeButton.style.paddingBottom = "3px";
    } else {
      count--
      vsCode.style.bottom = "-100%";
    }
  })

  vsCodeCloseButton.addEventListener("click", function () {
    vsCode.style.display = "none"
    vsCodeButton.style.borderBottom = "none";
    count--
  })
}
toggleVsCode();


function toggleFile() {
  let count = 0
  fileButton.addEventListener("click", function () {
    if (count == 0) {
      count++
      file.style.bottom = "10%";
      file.style.display = "block";
      fileButton.style.borderBottom = "3px solid rgb(8, 152, 242)";
    } else {
      count--
      file.style.bottom = "-100%";
    }
  })
  fileCloseButton.addEventListener("click", function () {
    file.style.display = "none"
    fileButton.style.borderBottom = "none";
    count--

  })
}
toggleFile();

monitor.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  menu.style.left = e.clientX-150 + "px";
  menu.style.top = e.clientY-70 + "px";
  menu.style.display = "block";
});

window.addEventListener("click", function () {
  menu.style.display = "none";
});

