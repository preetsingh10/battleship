import "./styles/style.css";
import { userAttack } from "./userAttack";

const { displayUserBoard, displayOpenantBoard } = require("./ui_functions");
const Player = require("../Player");

const user = new Player();
const computerPlayer = new Player();
let gameStart = false;

const userBoardClickEent = displayUserBoard(user);
// start button element
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
  const userCells = document.querySelectorAll(".user-cells");
  userCells.forEach((cell) => {
    cell.removeEventListener("click",userBoardClickEent);
  });
  startButton.style.display = "none";
  gameStart = true;
  displayOpenantBoard(computerPlayer);
  userAttack(user, computerPlayer);
});
// while (gameStart === true) {
//   try {
//     // userAttack(user,computerPlayer);
//     // checkWhoWins(gameStart);
//   } catch (error) {}
//   try {
//     // openantAttack();
//     // checkWhoWins(gameStart);
//   } catch (error) {}
// }
