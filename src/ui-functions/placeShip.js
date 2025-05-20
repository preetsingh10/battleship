import { renderBoard } from "./renderBoard";
import { readyMessageAndButton } from "./readyMessageAndButton";
import { renderDisplayBoard } from "./renderDisplayBoard";
export function placeShip(userObject) {
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
    } catch (error) {
      alert(error.message);
    }

    renderBoard(userObject, "user-board");
    selectedShip = null;
    if (userObject.allShipsPlaced()) {
      renderDisplayBoard(readyMessageAndButton());
    }
  }
  const userBoard = document.querySelector(".user-board");
  userBoard.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
      cellClickEvent(e);
    }
  });
}
