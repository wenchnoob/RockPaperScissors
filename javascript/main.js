const rockHtml = `<img class="gameElem" id="rock" src="../resources/emptyrock.png"></img>`
const paperHtml = `<img class="gameElem" id="paper" src="../resources/emptypaper.png">`
const scissorsHtml = `<img class="gameElem" id="scissors" src="../resources/emptyscissors.png">`

const gameContainer = document.getElementById("gameContainer");
gameContainer.innerHTML = rockHtml + paperHtml + scissorsHtml;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


