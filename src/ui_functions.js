const displayShipsOnBoard = require("../utility/displayShipsOnBoard");
const createBoard = require("../utility/createBoard");
const displayShips = require("../utility/displayShips");
const {
  updateShipButton,
  allShipsPlaced,
} = require("../utility/uiState/updateShipButton");
// game body div
const gameBody = document.querySelector(".game-body");
// start Button
const startButton = document.querySelector(".start-button");

function displayUserBoard(playerObject) {
  let selectedShip;

  // creating board for user
  displayGrid("user-board", "user-grid", "user-cells");

  // after displaying grid this function will display ships if they are placed on it
  const userShips = document.querySelector(".user-ships");
  displayShips(playerObject, userShips);

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

  allShipsButtons.forEach((shipButton) => {
    shipButton.classList.add("ship-button");
    shipButton.addEventListener("click", () => {
      selectedShip = shipButton.id;
    });
  });

  // event fired upon clicking on the grid cells
  let userCells = document.querySelectorAll(".user-cells");
  let shipObject;
  userCells.forEach((cellUnit) => {
    cellUnit.addEventListener("click", () => {
      playerObject.allShips.some((ship) => {
        if (ship.name === selectedShip) {
          shipObject = ship;
        }
      });
      try {
        playerObject.placeShip(shipObject.name, "horizontal", [
          +cellUnit.dataset.x,
          +cellUnit.dataset.y,
        ]);
       displayShipsOnBoard(userCells,shipObject)
        updateShipButton(allShipsButtons, playerObject.allShips);
      } catch (error) {
        alert(error.message);
      }
      if (allShipsPlaced(allShipsButtons)) {
        startButton.addEventListener("click", () => {
          gameStart = true;
        });
        gameBody.removeChild(userShips);
        startButton.style.display = "block";
      }
      console.log(`${shipObject.name}: ${shipObject.position}`)
    });
  });
}
function displayOpenantBoard(playerObject) {
  displayGrid("openant-board", "openant-grid", "openant-cells"); // this function will make a grid inside openant-board
  placeShipsRandomly("openant-grid", playerObject);
}

// ==================================================
// =============== Helper Functions =================
// ==================================================
function displayGrid(classOfContainerDiv, classNameForGrid, classNameForCells) {
  /**
   * it takes an class of outer div and the class name which will be assigned to the newly formed grid.
   * it takes class name for cells and assign it to all the child cells based upon parent div
   * */
  const containerDiv = document.querySelector(`.${classOfContainerDiv}`);
  const playerGrid = createBoard();
  containerDiv.appendChild(playerGrid);
  playerGrid.classList.add(classNameForGrid);
  const cells = containerDiv.querySelectorAll(".cell");
  cells.forEach((cell) => cell.classList.add(classNameForCells));
}
function placeShipsRandomly(containerDiv, playerObject) {
  const containerDivElement = document.querySelector(`.${containerDiv}`);
  const openantCells = containerDivElement.querySelectorAll(".cell");

  playerObject.allShips.forEach((ship) => {
    let placed = false;
    while (placed === false) {
      try {
        playerObject.genrateRandomShipPostion();
       
        displayShipsOnBoard(openantCells, ship);
        placed = true;
      } catch (error) {}
    }
  });
}
module.exports = { displayUserBoard, displayGrid, displayOpenantBoard };
