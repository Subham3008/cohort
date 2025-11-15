const box = document.querySelector("#box")
const btn = document.querySelector("#btn")
const winnerTeam = document.querySelector("#winner-team")
const main = document.querySelector("main")
const teamFullName = document.querySelector("#h1")
const captain = document.querySelector("#h2")
const trophie = document.querySelector("#h3")

let arr = [
  {
    team: 'CSK',
    primary: 'yellow',
    secondary: 'violet',
    fullName: 'Chennai Super Kings',
    captain: 'Ruturaj Gaikwad',
    trophies: '5 trophies'
  },
  {
    team: 'RCB',
    primary: 'red',
    secondary: 'white',
    fullName: 'Royal Challengers Bengaluru',
    captain: 'Faf du Plessis',
    trophies: '1 trophy'
  },
  {
    team: 'MI',
    primary: 'blue',
    secondary: 'green',
    fullName: 'Mumbai Indians',
    captain: 'Hardik Pandya',
    trophies: '5 trophies'
  },
  {
    team: 'KKR',
    primary: 'purple',
    secondary: 'gray',
    fullName: 'Kolkata Knight Riders',
    captain: 'Shreyas Iyer',
    trophies: '3 trophies'
  },
  {
    team: 'SRH',
    primary: 'orange',
    secondary: 'pink',
    fullName: 'Sunrisers Hyderabad',
    captain: 'Pat Cummins',
    trophies: '1 trophy'
  }
];



btn.addEventListener("click", () => {

  const winner = arr[Math.floor(Math.random() * arr.length)]
  winnerTeam.innerText = winner.team

  main.style.backgroundColor = winner.primary
  box.style.backgroundColor = winner.secondary
  btn.style.backgroundColor = winner.secondary
  teamFullName.innerText = winner.fullName
  captain.innerText = "Captain: " + winner.captain;
  trophie.innerText = "Trophy: " + winner.trophies;


})
