import "./styles/style.css";
import { renderBoard } from "./ui-functions/renderBoard";
import { renderDisplayBoard } from "./ui-functions/renderDisplayBoard";
import { userShipsAndButtons } from "./ui-functions/userShipsAndButton";
import { placeShip } from "./ui-functions/placeShip";
const Player = require("../Player");

const user = new Player();
const computerPlayer = new Player();
let gameStart = false;
computerPlayer.genrateRandomShipPostion();

try {
  // belown functions will render the gameplay
  renderBoard(user, "user-board");
  renderDisplayBoard(userShipsAndButtons(user));
  renderBoard(computerPlayer, "openant-board");

  // now its the ship placing stage where user will place the ships on the board
  placeShip(user);
} catch (error) {
  alert(error.message);
}
