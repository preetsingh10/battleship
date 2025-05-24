import { renderBoard } from "./renderBoard";
import { renderDisplayBoard } from "./renderDisplayBoard";
import { computerPlayer } from "..";
import { gamaeStatus } from "./gameStatus";
import { enableAttacking } from "./enableAttacking";
export function readyMessageAndButton() {
  const outerDiv = document.createElement("div");

  const readyHeading = document.createElement("div");
  readyHeading.textContent = "Are you ready for battle ?";
  readyHeading.classList.add("readyHeading");
  const readyButton = document.createElement("button");
  readyButton.classList.add("readyButton");
  readyButton.addEventListener("click", () => {
    renderBoard(computerPlayer, "openant-board");
    renderDisplayBoard(gamaeStatus());
    enableAttacking()
  });
  readyButton.textContent = "Ready";
  outerDiv.appendChild(readyHeading);
  outerDiv.appendChild(readyButton);
  return outerDiv;
}
