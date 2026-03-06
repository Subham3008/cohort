let history = JSON.parse(localStorage.getItem("bmiHistoryList")) || []

let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let username = document.querySelector("#name")
let bmiValue = document.querySelector("#bmi-value")
let healthCategory = document.querySelector("#health-category")
let healthCard = document.querySelector(".health-card")
let historyBtn = document.querySelector(".historyBtn")
let bmiHistory = document.querySelector(".bmiHistory")
let closeBtn = document.querySelector("#closeBtn")
let bmis = document.querySelector(".bmis")


{/*--calculate BMI-- */ }
function calculateBMI() {
  let h = height.value
  let w = weight.value
  let n = username.value

  //create date

  const today = new Date().toLocaleDateString()

  //input validation
  if (!n || !h || !w) {
    alert("All fields are required")
    return
  }

  if (h <= 0 || w <= 0) {
    alert("Please enter positive values")
    return
  }

  //bmi claculation
  let bmi = (w / ((h / 100) * (h / 100))).toFixed(2)

  bmiValue.textContent = bmi

  let health = ""

  if (bmi <= 18.5) {
    health = "Underweight"
    healthCard.style.backgroundColor = "orange"
  } else if (bmi <= 24.9) {
    health = "Normal weight"
    healthCard.style.backgroundColor = "green"
  } else if (bmi <= 29.9) {
    health = "Overweight"
    healthCard.style.backgroundColor = "gold"
  } else {
    health = "Obese"
    healthCard.style.backgroundColor = "red"
  }

  healthCategory.textContent = health

  //create BMI object
  let bmiObj = {
    username: username.value,
    height: height.value,
    weight: weight.value,
    date: today,
    bmiValue: bmi,
    health: health,
  }

  history.push(bmiObj)

  localStorage.setItem("bmiHistoryList", JSON.stringify(history))

  renderHistory()

}


{/*--reset BMI-- */ }
function resetBMI() {

  height.value = ""
  weight.value = ""
  username.value = ""

  username.focus()

  bmiValue.textContent = "0.00"
  healthCategory.textContent = "Category"
  healthCard.style.backgroundColor = "aquamarine"
}

historyBtn.addEventListener('click', function () {
  bmiHistory.style.display = "block"
})

closeBtn.addEventListener('click', function () {
  bmiHistory.style.display = "none"
})


//render history

function renderHistory() {
  let result = ""
  history.forEach((e) => {
    result += `<div class="bmi">
          <h3>${e.username}</h3>
          <p>Height: <span>${e.height}</span>(cm)</p>
          <p>Weight: <span>${e.weight}</span>(kg)</p>
          <p>Your BMI Value: <span>${e.bmiValue}</span></p>
          <p>Health Category: <span>${e.health}</span></p>
          <p>Date: <span>${e.date}</span></p>
          <button class="btns deleteBtn">Delete</button>
        </div>`
  })

  bmis.innerHTML = result
}

renderHistory()
