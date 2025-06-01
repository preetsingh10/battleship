import {
  updateBoard,
  hoverUpdates,
  notValidPlacementUpdates,
  disableBoard,
} from "./renderBoard";
import { readyMessageAndButton } from "./readyMessageAndButton";
import { renderDisplayBoard } from "./renderDisplayBoard";

export function placeShip(userObject) {
  const userBoard = document.querySelector(".user-board");
  const userCells = userBoard.querySelectorAll(".cell");
  const userShipButtons = document.querySelectorAll(".ship-button");
  let selectedShip;
  let direction = "horizontal";
  let shipCoordinates;
  userShipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedShip = button.textContent;
    });
  });
  userBoard.addEventListener("click", (e) => {
    if(selectedShip === undefined){
      return
    }
    if (e.target.classList.contains("cell")) {
      cellClickEvent(e);
    }
  });
  function cellClickEvent(e) {
    try {
      const coordinates = [+e.target.dataset.x, +e.target.dataset.y];

      userObject.placeShip(selectedShip, direction, coordinates);
      document.getElementById(selectedShip).classList.add("ship_placed_button");
      selectedShip = null;
    } catch (error) {
      alert(error.message);
    }
    updateBoard(userObject, "user-board");

    selectedShip = undefined;
    // when all ships are placed
    if (userObject.allShipsPlaced()) {
      renderDisplayBoard(readyMessageAndButton());
      userCells.forEach((cell) => {
        cell.classList.remove("hoverUpdate");
      });

      updateBoard(userObject, "user-board");
      disableBoard("user-board");
    }
  }

  window.addEventListener("keydown", spaceBarFunction);
  function spaceBarFunction(e) {
    if (e.code === "Space") {
      e.preventDefault();
      if (direction === "horizontal") {
        direction = "vertical";
      } else if (direction === "vertical") {
        direction = "horizontal";
      }
    }
  }

  userCells.forEach((cell) => {
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
          direction
        );
        hoverUpdates(shipCoordinates, "user-board");
        cell.addEventListener("mouseleave", () => {
          cell.classList.remove("notValidPlacement");
          cell.classList.remove("hoverUpdate");
        });
      } catch (error) {
        console.log(error.message);
        notValidPlacementUpdates(shipCoordinates, "user-board");
      }
    }

    cell.addEventListener("mouseenter", mouseenterFunction);
    cell.addEventListener("mouseleave", mouseLeaveFunction);
  });
  function mouseLeaveFunction(e) {
    userCells.forEach((cell) => {
      cell.classList.remove("notValidPlacement");
    });
  }
}
