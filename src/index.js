import "./styles/style.css";

const createBoard = require("../utility/createBoard");
const displayShips = require("../utility/displayShips");
const placeShips = require("../utility/placeShips");
const Player = require("../Player");
const player = new Player();
let gameStart = false;

// creating boards for user
const userBoard = document.querySelector(".user-board");
const userShips = document.querySelector(".user-ships");
const userGrid = createBoard();
userGrid.classList = "user-grid";
displayShips(player, userShips);
userBoard.appendChild(userGrid);

// getting the ship buttons through their id
const battleshipButton = document.getElementById("BattleShip");
const carrierButton = document.getElementById("Carrier");
const cruiserButton = document.getElementById("Cruiser");
const submarineButton = document.getElementById("Submarine");
const destroyerButton = document.getElementById("Destroyer");

const allShipsButtons = [
  battleshipButton,
  carrierButton,
  cruiserButton,
  submarineButton,
  destroyerButton,
];
let selectedShip;
allShipsButtons.forEach((shipButton) => {
  shipButton.addEventListener("click", () => {
    selectedShip = shipButton.id;
  });
});

// event fired upon clicking on the grid cells
let cell = document.querySelectorAll(".cell");
// if (gameStart === false && selectedShip !== undefined) {
    
// }
let shipObject;
cell.forEach((cellUnit) => {
  cellUnit.addEventListener("click", () => {
    player.allShips.some((ship) => {
      if (ship.name === selectedShip) {
        shipObject = ship;
      }
    });
    try {
        placeShips(cell, shipObject, player, [
            +cellUnit.dataset.x,
            +cellUnit.dataset.y,
          ]);
    } catch (error) {
        alert(error.message)
    }
  
    console.log(selectedShip);
  });
});
