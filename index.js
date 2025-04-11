let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let fighterStats = {
  "🐉": 10,
  "🐥": 2,
  "🐊": 7,
  "💩": 1,
  "🦍": 8,
  "🐢": 3,
  "🐩": 4,
  "🦭": 5,
  "🦀": 4,
  "🐝": 3,
  "🤖": 9,
  "🐘": 7,
  "🐸": 4,
  "🕷": 3,
  "🐆": 6,
  "🦕": 8,
  "🦁": 9
}

let fighter1El = document.getElementById("fighter1")
let fighter2El = document.getElementById("fighter2")
let power1El = document.getElementById("power1")
let power2El = document.getElementById("power2")
let winnerEl = document.getElementById("winner")
let score1El = document.getElementById("score1")
let score2El = document.getElementById("score2")
let fightButton = document.getElementById("fightButton")
let resetButton = document.getElementById("resetButton")

let score1 = 0
let score2 = 0

fightButton.addEventListener("click", function () {
  let index1 = Math.floor(Math.random() * fighters.length)
  let index2 = Math.floor(Math.random() * fighters.length)

  while (index2 === index1) {
    index2 = Math.floor(Math.random() * fighters.length)
  }

  let fighter1 = fighters[index1]
  let fighter2 = fighters[index2]

  let power1 = fighterStats[fighter1]
  let power2 = fighterStats[fighter2]

  fighter1El.textContent = fighter1
  fighter2El.textContent = fighter2
  power1El.textContent = `Power: ${power1}`
  power2El.textContent = `Power: ${power2}`

  if (power1 > power2) {
    score1++
    winnerEl.textContent = `${fighter1} wins with ${power1} vs ${power2}!`
  } else if (power2 > power1) {
    score2++
    winnerEl.textContent = `${fighter2} wins with ${power2} vs ${power1}!`
  } else {
    winnerEl.textContent = `It's a draw! Both have ${power1}`
  }

  score1El.textContent = score1
  score2El.textContent = score2
})

resetButton.addEventListener("click", function () {
  score1 = 0
  score2 = 0
  score1El.textContent = "0"
  score2El.textContent = "0"
  fighter1El.textContent = ""
  fighter2El.textContent = ""
  power1El.textContent = ""
  power2El.textContent = ""
  winnerEl.textContent = ""
})
