const wordNavP = document.querySelectorAll(".word-nav p")
const allToolbar = document.querySelectorAll(".toolbar")
const page = document.querySelector(".page")
const pageBorder = document.querySelector(".page-border")
const pageSize = document.querySelector("#pageSize");


const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
const fontIncrease = document.querySelector("#fontIncrease");
const fontDecrease = document.querySelector("#fontDecrease");
const pageColorBtn = document.querySelector("#pageColor");
const pageColor = document.querySelector(".pageColor");
const colorCloseBtn = document.querySelector("#colorClose");
const allColorBtn = document.querySelectorAll(".color");
const borderCloseBtn = document.querySelector("#borderClose");
const pageBordersBtn = document.querySelector("#pageBorders");
const borderPanel = document.querySelector(".border-panel");

const borderStyle = document.querySelector("#borderStyle");
const borderWidth = document.querySelector("#borderWidth");
const borderColor = document.querySelector("#borderColor");


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

  if (pageColor.style.top === "100px") {
    pageColor.style.top = "-100%";
  } else {
    pageColor.style.top = "100px";
  }
})

colorCloseBtn.addEventListener('click', function () {
  pageColor.style.top = "-100%"
})

{/*--all btn color--*/ }
allColorBtn.forEach(function (btn) {
  btn.style.backgroundColor = btn.dataset.color;
  btn.addEventListener('click', function () {
    page.style.backgroundColor = btn.dataset.color
  })
});

pageBordersBtn.addEventListener('click', function () {
  if (borderPanel.style.top === "100px") {
    borderPanel.style.top = "-100%";
  } else {
    borderPanel.style.top = "100px"
  }
})

borderCloseBtn.addEventListener('click', function () {
  borderPanel.style.top = "-100%"
})

/*--border design--*/
function updateBorder() {

  pageBorder.style.borderStyle = borderStyle.value;
  pageBorder.style.borderWidth = borderWidth.value + "px";
  pageBorder.style.borderColor = borderColor.value;

}

borderStyle.addEventListener("change", updateBorder);
borderWidth.addEventListener("input", updateBorder);
borderColor.addEventListener("input", updateBorder);

/*--layout--*/
/*--page size selection--*/
const pageSizesArr = [
  {
    name: "A3",
    value: "a3",
    width: "1123px",
    height: "1587px"
  },
  {
    name: "A4",
    value: "a4",
    width: "794px",
    height: "1123px"
  },
  {
    name: "A5",
    value: "a5",
    width: "559px",
    height: "794px"
  },
  {
    name: "Letter",
    value: "letter",
    width: "816px",
    height: "1056px"
  },
  {
    name: "Legal",
    value: "legal",
    width: "816px",
    height: "1344px"
  }
];

pageSize.addEventListener('change', function () {
  const selectedSize = pageSizesArr.find(size => {
    return size.value == this.value
  })

  if (selectedSize) {
    page.style.height = selectedSize.height
    page.style.width = selectedSize.width
  }
})

const orientationValue = document.querySelector("#orientation")

orientationValue.addEventListener("change", function () {

  const styles = window.getComputedStyle(page);
  let width = styles.width;
  let height = styles.height;

  if (this.value === "landscape") {
    page.style.width = height
    page.style.height = width
  }

  if (this.value === "portrait") {
    page.style.width = width
    page.style.height = height
  }

})
