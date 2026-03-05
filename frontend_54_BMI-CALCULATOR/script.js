let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let bmiValue = document.querySelector("#bmi-value")
let healthCategory = document.querySelector("#health-category")

function calculateBMI() {
  let h = height.value
  let w = weight.value

  let bmi = w / (h * h)

  bmiValue.textContent = bmi.toFixed(2)

  if (bmi <= 18.5) {
    return healthCategory.textContent = "Underweight"
  } else if (bmi > 18.5 && bmi <= 24.9) {
    return healthCategory.textContent = "Normal weight"
  } else if (bmi > 24.9 && bmi <= 29.9) {
    return healthCategory.textContent = "Overweight"
  } else if (bmi > 29.9) {
    return healthCategory.textContent = "Obese"
  }

}
