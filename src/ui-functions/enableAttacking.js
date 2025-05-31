import { user } from "..";
import { computerPlayer } from "..";
import { gamaeStatus } from "./gameStatus";
import { disableBoard, enableBoard, updateBoard } from "./renderBoard";
import { renderDisplayBoard } from "./renderDisplayBoard";
export function enableAttacking() {
  const openantBoardDiv = document.querySelector(".openant-board");
  const allOpenantCells = openantBoardDiv.querySelectorAll(".cell");
  allOpenantCells.forEach((cell) => {
    let canAttack = true;
    cell.addEventListener(
      "click",
      () => {
        if (canAttack === false) return;
        user.attack(computerPlayer.playerBoard, [
          +cell.dataset.x,
          +cell.dataset.y,
        ]);
        updateBoard(computerPlayer, "openant-board", true);
        disableBoard("openant-board"); // disabling the openant board for no interuptions while openant attacks
        renderDisplayBoard(gamaeStatus());
        // the openants turn for the attack
        computerPlayer.attack(user.playerBoard, randomAttackCoordinates());
        canAttack = false;
        setTimeout(() => {
          updateBoard(user, "user-board");
          enableBoard("openant-board");
        }, 500);

        renderDisplayBoard(gamaeStatus());
      },

      { once: true }
    );
  });
}
function randomAttackCoordinates() {
  const randomCoordinates = [
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
  ];
  const userMatchedCell = document.getElementById(
    `user-board: x:${randomCoordinates[0]}, y:${randomCoordinates[1]}`
  );
  if (userMatchedCell.dataset.attacked === "true") {
    return randomAttackCoordinates();
  }
  return randomCoordinates;
}
