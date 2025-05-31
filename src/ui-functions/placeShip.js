import {
  updateBoard,
  hoverUpdates,
  notValidPlacementUpdates,
} from "./renderBoard";
import { readyMessageAndButton } from "./readyMessageAndButton";
import { renderDisplayBoard } from "./renderDisplayBoard";
export function placeShip(userObject) {
  const userBoard = document.querySelector(".user-board");
  const userCells = userBoard.querySelectorAll(".cell");
  const userShipButtons = document.querySelectorAll(".ship-button");
  let selectedShip;
  userShipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedShip = button.textContent;
    });
  });
  function cellClickEvent(e) {
    if (!selectedShip) {
      return console.error("no ship is selected");
    }
    const coordinates = [+e.target.dataset.x, +e.target.dataset.y];

    try {
      userObject.placeShip(selectedShip, "horizontal", coordinates);
      document.getElementById(selectedShip).classList.add("ship_placed_button");
      selectedShip = null;
    } catch (error) {
      alert(error.message);
    }
    updateBoard(userObject, "user-board");

    selectedShip = null;
    if (userObject.allShipsPlaced()) {
      renderDisplayBoard(readyMessageAndButton());
    }
  }

  userBoard.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
      cellClickEvent(e);
    }
  });

  userCells.forEach((cell) => {
    let shipCoordinates;
    function mouseenterFunction(e) {
      try {
        userCells.forEach((userCell) => {
          userCell.classList.remove("notValidPlacement");
          userCell.classList.remove("hoverUpdate");
        });
        let coordinates = [+e.target.dataset.x, +e.target.dataset.y];
        const shipObject = userObject.returnShipObject(selectedShip);
        shipCoordinates = shipObject.generateCordinates(
          coordinates,
          shipObject.length,
          "horizontal"
        );
        hoverUpdates(shipCoordinates, "user-board");
      } catch (error) {
        console.log(error.message);
        notValidPlacementUpdates(shipCoordinates, "user-board");
      }
    }
    function mouseLeaveFunction(e) {
      cell.classList.remove("notValidPlacement");
    }
    cell.addEventListener("mouseenter", mouseenterFunction);
    cell.addEventListener("mouseleave", mouseLeaveFunction);
  });
}
