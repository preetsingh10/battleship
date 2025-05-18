import { displayAttackedCoordinates } from "./ui_functions";

export function userAttack(userPlayerObject, openantPlayerObject) {
  const openantCells = document.querySelectorAll(".openant-cells");
  openantCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      userPlayerObject.attack(openantPlayerObject.playerBoard, [
        +cell.dataset.x,
        +cell.dataset.y,
      ]);
      displayAttackedCoordinates(openantCells, openantPlayerObject);
      if (cell.dataset.attacked != "true") {
        cell.classList.add("missedAttack");
      }
      console.log([+cell.dataset.x, +cell.dataset.y], "i got clicked");
    });
  });
}
function openantAttack(userPlayerObject, openantPlayerObject) {
  const randomAttackCoOrdinates = [
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
  ];
  const enemyBoard = userPlayerObject.playerBoard
  openantPlayerObject.attack(enemyBoard,randomAttackCoOrdinates)
}
