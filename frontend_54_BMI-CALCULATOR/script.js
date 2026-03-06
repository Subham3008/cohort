let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let bmiValue = document.querySelector("#bmi-value")
let healthCategory = document.querySelector("#health-category")
let healthCard = document.querySelector(".health-card")


{/*--calculate BMI-- */ }
function calculateBMI() {
  let h = height.value
  let w = weight.value

  //input validation
  if (!h || !w) {
    alert("All fields are required")
    return
  }

  if (h <= 0 || w <= 0) {
    alert("Please enter positive values")
    return
  }

  //bmi claculation
  let bmi = w / ((h / 100) * (h / 100))

  bmiValue.textContent = bmi.toFixed(2)

  if (bmi <= 18.5) {
    healthCategory.textContent = "Underweight"
    healthCard.style.backgroundColor = "orange"
  } else if (bmi <= 24.9) {
    healthCategory.textContent = "Normal weight"
    healthCard.style.backgroundColor = "green"
  } else if (bmi <= 29.9) {
    healthCategory.textContent = "Overweight"
    healthCard.style.backgroundColor = "gold"
  } else {
    healthCategory.textContent = "Obese"
    healthCard.style.backgroundColor = "red"
  }

}


{/*--reset BMI-- */ }
function resetBMI() {

  height.value = ""
  weight.value = ""

  height.focus()

  bmiValue.textContent = "0.00"
  healthCategory.textContent = "Category"
  healthCard.style.backgroundColor = "aquamarine"
}
