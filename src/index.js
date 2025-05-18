import "./styles/style.css";
import { renderBoard } from "./renderBoard";
const Player = require("../Player");

const user = new Player();
const computerPlayer = new Player();
let gameStart = false;
computerPlayer.genrateRandomShipPostion()
const userBoard = document.querySelector('.user-board')
// renderBoard(user,userBoard)
const openantBoard = document.querySelector('.openant-board')
renderBoard(computerPlayer,openantBoard)
