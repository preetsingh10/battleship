import "./styles/style.css";

const { displayUserBoard, displayGrid, displayOpenantBoard} = require("./ui_functions");
const Player = require("../Player");

const user = new Player();
const computerPlayer = new Player()
let gameStart = false;



displayUserBoard(user);
displayOpenantBoard(computerPlayer)
// start button element
const startButton = document.querySelector('.start-button')
startButton.addEventListener('click', ()=>{
  displayGrid('openant-board', 'openant-grid','openant-cells')
  startButton.style.display = 'none'
  displayOpenantBoard(computerPlayer)
})

// startButton.addEventListener("click", () => {
//   while (gameStart === true) {}
// });
