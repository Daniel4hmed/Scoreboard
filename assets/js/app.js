let homePointsElement = document.getElementById("home-points");
let guestPointsElement = document.getElementById("guest-points");

let homePlayer = document.getElementById("home");
let guestPlayer = document.getElementById("guest");

let homePoints = 0;
let guestPoints = 0;

function add1PointToHome() {
  homePoints += 1;
  homePointsElement.textContent = homePoints;
  highlightLeader();
}

function add2PointsToHome() {
  homePoints += 2;
  homePointsElement.textContent = homePoints;
  highlightLeader();
}

function add3PointsToHome() {
  homePoints += 3;
  homePointsElement.textContent = homePoints;
  highlightLeader();
}

function add1PointToGuest() {
  guestPoints += 1;
  guestPointsElement.textContent = guestPoints;
  highlightLeader();
}

function add2PointsToGuest() {
  guestPoints += 2;
  guestPointsElement.textContent = guestPoints;
  highlightLeader();
}

function add3PointsToGuest() {
  guestPoints += 3;
  guestPointsElement.textContent = guestPoints;
  highlightLeader();
}

function highlightLeader() {
  if (homePoints > guestPoints) {
    homePlayer.textContent = ">> HOME";
    guestPlayer.textContent = "GUEST";
  } else if (guestPoints > homePoints) {
    guestPlayer.textContent = ">> GUEST";
    homePlayer.textContent = "HOME";
  } else {
    guestPlayer.textContent = "GUEST";
    homePlayer.textContent = "HOME";
  }
}

function newGame() {
  homePoints = 0;
  guestPoints = 0;
  homePointsElement.textContent = homePoints;
  guestPointsElement.textContent = guestPoints;
  highlightLeader();
}