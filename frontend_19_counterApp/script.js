const h3 = document.querySelector("h3");
const addBtn = document.querySelector("#addBtn");
const decBtn = document.querySelector("#decBtn");
let count = 0;

addBtn.addEventListener("click", function () {
  count++;
  if (count < 0) {
    h3.style.color = "red";
  }
  else {
    h3.style.color = "rgb(197, 197, 197)";
  }
  h3.innerText = count;
})

decBtn.addEventListener("click", function () {
  count--;
  if (count < 0) {
    h3.style.color = "red";
  }
  else {
    h3.style.color = "rgb(197, 197, 197)";
  }
  h3.innerText = count;
})