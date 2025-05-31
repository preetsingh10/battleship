import "./styles/style.css";
import { renderBoard } from "./ui-functions/renderBoard";
import { renderDisplayBoard } from "./ui-functions/renderDisplayBoard";
import { userShipsAndButtons } from "./ui-functions/userShipsAndButton";
import { placeShip } from "./ui-functions/placeShip";

const Player = require("../Player");

export const user = new Player();
export const computerPlayer = new Player();
let gameStart = false;
computerPlayer.genrateRandomShipPostion();

// belown functions will render the gameplay
renderBoard("user-board");
renderDisplayBoard(userShipsAndButtons(user));

// now its the ship placing stage where user will place the ships on the board
placeShip(user);

// startGame();
