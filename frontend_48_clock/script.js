function documentSelectot(id) {
  return document.querySelector(id)
}

{/*--Digital clock-- */ }
let hour = documentSelectot("#hDigital")
let minutes = documentSelectot("#mDigital")
let second = documentSelectot("#sDigital")

{/*--Analog clock-- */ }
let hHand = documentSelectot("#hHand")
let mHand = documentSelectot("#mHand")
let sHand = documentSelectot("#sHand")

{/*-clock function-- */ }
function clock() {
  let time = new Date()

  let currentHour = time.getHours() % 12
  let currentMinutes = time.getMinutes()
  let currentSecond = time.getSeconds()

  hour.textContent = `${currentHour}`.padStart(2, "0");
  minutes.textContent = `${currentMinutes}`.padStart(2, "0");
  second.textContent = `${currentSecond}`.padStart(2, "0");

  let hDeg = 360 / 12 * currentHour - 90
  let mDeg = 360 / 60 * currentMinutes - 90
  let sDeg = 360 / 60 * currentSecond - 90
  hHand.style.transform = `translateY(-50%) rotate(${hDeg}deg)`
  mHand.style.transform = `translateY(-50%) rotate(${mDeg}deg)`
  sHand.style.transform = `translateY(-50%) rotate(${sDeg}deg)`

}

setInterval(clock, 1000);