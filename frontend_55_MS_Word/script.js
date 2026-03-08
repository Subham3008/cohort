const wordNavP = document.querySelectorAll(".word-nav p")
const allToolbar = document.querySelectorAll(".toolbar")

const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
const fontIncrease = document.querySelector("#fontIncrease");
const fontDecrease = document.querySelector("#fontDecrease");


{/*--word nav items toggle and show toolbar items-- */ }
wordNavP.forEach(elem => {
  elem.addEventListener("click", function () {
    wordNavP.forEach(e => e.classList.remove("active"))
    elem.classList.add("active")
    allToolbar.forEach(tool => {
      if (elem.id == tool.dataset.tab) {
        tool.style.display = "block"
      } else {
        tool.style.display = "none"
      }
    })
  })
});

{/*---toolbar functionality add */ }
{/*---home toolbar---*/ }

function getSelectionRange() {

  const selection = window.getSelection();

  if (!selection.rangeCount) return null;

  return selection.getRangeAt(0);

}

function applyFormat(style, value){

  const range = getSelectionRange();
  if(!range) return;

  const span = document.createElement("span");

  span.style[style] = value;

  span.appendChild(range.extractContents());

  range.insertNode(span);

}

bold.addEventListener("click", () => {
  applyFormat("fontWeight", "bold");
});

italic.addEventListener("click", () => {
  applyFormat("fontStyle", "italic");
});

underline.addEventListener("click", () => {
  applyFormat("textDecoration", "underline");
});

