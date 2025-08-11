let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")

let count = 0
let countStr = 0

function add1() {
    count += 1
    homeScore.textContent = count
}

function add2() {
    count += 2
    homeScore.textContent = count
}
function add3() {
    count += 3
    homeScore.textContent = count  
}

function add11() {
    countStr += 1
    guestScore.textContent = countStr
}

function add22() {
    countStr += 2
    guestScore.textContent = countStr
}
function add33() {
    countStr += 3
    guestScore.textContent = countStr
}

function reset() {
   count = 0                          // Reset count to 0 first
    homeScore.textContent = count      // Then display 0
    countStr = 0                       // Reset countStr to 0 first
    guestScore.textContent = countStr  // Then display 0
}