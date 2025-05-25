import { user } from "..";
import { computerPlayer } from "..";
import { gamaeStatus } from "./gameStatus";
import { renderBoard, updateBoard } from "./renderBoard";
import { renderDisplayBoard } from "./renderDisplayBoard";
export function enableAttacking() {
  const openantBoardDiv = document.querySelector(".openant-board");
  const allOpenantCells = openantBoardDiv.querySelectorAll(".cell");
  allOpenantCells.forEach((cell) => {
    cell.addEventListener(
      "click",
      () => {
        user.attack(computerPlayer.playerBoard, [
          +cell.dataset.x,
          +cell.dataset.y,
        ]);
        updateBoard(computerPlayer, "openant-board");
        renderDisplayBoard(gamaeStatus());
        // the openants turn for the attack
        computerPlayer.attack(user.playerBoard, [
          Math.floor(Math.random() * 10) + 1,
          Math.floor(Math.random() * 10) + 1,
        ]);
        updateBoard(user, "user-board");
        renderDisplayBoard(gamaeStatus());
      },

      { once: true }
    );
  });
}
