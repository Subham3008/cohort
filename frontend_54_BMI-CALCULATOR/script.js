let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let bmiValue = document.querySelector("#bmi-value")
let healthCategory = document.querySelector("#health-category")


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
  } else if (bmi <= 24.9) {
    healthCategory.textContent = "Normal weight"
  } else if (bmi <= 29.9) {
    healthCategory.textContent = "Overweight"
  } else {
    healthCategory.textContent = "Obese"
  }

}


{/*--reset BMI-- */ }
function resetBMI() {

  height.value = ""
  weight.value = ""

  height.focus()

  bmiValue.textContent = "0.00"
  healthCategory.textContent = "Health Category"
}
