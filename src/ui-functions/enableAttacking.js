import { user } from "..";
import { computerPlayer } from "..";
import arrayEqual from "../../utility/arrayEqual";
import { gamaeStatus } from "./gameStatus";
import { updateBoard } from "./renderBoard";
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
        updateBoard(computerPlayer, "openant-board", true);
        renderDisplayBoard(gamaeStatus());
        // the openants turn for the attack
        computerPlayer.attack(user.playerBoard, randomAttackCoordinates());
        updateBoard(user, "user-board");
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
  return randomCoordinates

}
