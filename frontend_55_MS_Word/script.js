const wordNavP = document.querySelectorAll(".word-nav p")
const allToolbar = document.querySelectorAll(".toolbar")
const page = document.querySelector("#page")

const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
const fontIncrease = document.querySelector("#fontIncrease");
const fontDecrease = document.querySelector("#fontDecrease");
const pageColorBtn = document.querySelector("#pageColor");
const pageColor = document.querySelector(".pageColor");
const colorCloseBtn = document.querySelector("#colorClose");
const allColorBtn = document.querySelectorAll(".color");


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

function applyFormat(style, value) {

  const selection = window.getSelection();
  const range = getSelectionRange();
  if (!range) return;

  const parent = selection.anchorNode.parentElement;

  // toggle off
  if (parent.style[style] === value) {
    parent.style[style] = "normal";
    return;
  }

  const span = document.createElement("span");
  span.style[style] = value;

  span.appendChild(range.extractContents());
  range.insertNode(span);

  // 🔥 selection restore
  selection.removeAllRanges();
  const newRange = document.createRange();
  newRange.selectNodeContents(span);
  selection.addRange(newRange);
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


{/*--Design--*/ }
{/*--page color--*/ }

pageColorBtn.addEventListener('click', function () {
  pageColor.style.top = "100px"
})

colorCloseBtn.addEventListener('click', function () {
  pageColor.style.top = "-100%"
})

{/*--all btn color--*/ }
allColorBtn.forEach(btn => {
  btn.style.backgroundColor = btn.dataset.color;
  btn.addEventListener('click', function () {
    page.style.backgroundColor = btn.dataset.color
  })
});