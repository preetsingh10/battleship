import { user } from "..";
import { computerPlayer } from "..";
export function gamaeStatus() {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("gameStatusContainer");
  const shipsLeftHeading = document.createElement("div");
  shipsLeftHeading.textContent = "Ships left: ";
  shipsLeftHeading.classList.add("shipsLeftHeading");
  const userShipsLabel = document.createElement("div");
  userShipsLabel.textContent = "Your Ships: ";
  let userShipsLeft = document.createElement("div");
  userShipsLeft.textContent = user.shipsLeft();
  const openantLabel = document.createElement("div");
  openantLabel.textContent = "Enemy Ships: ";
  let openantShipsLeft = document.createElement("div");
  openantShipsLeft.textContent = computerPlayer.shipsLeft();
  const winnerMessage = document.createElement("div");
  winnerMessage.classList.add("winner-message");

  outerDiv.append(
    shipsLeftHeading,
    userShipsLabel,
    userShipsLeft,
    openantLabel,
    openantShipsLeft
  );
  if (user.allShipSunk()) {
    outerDiv.innerHTML = " ";
    winnerMessage.textContent = "💀 You Loose Commander 💀";
    outerDiv.append(winnerMessage);
    document.querySelector(".openant-board").classList.add("no-clicks");
  }
  if (computerPlayer.allShipSunk()) {
    outerDiv.innerHTML = " ";
    winnerMessage.textContent = "🎉 You Win Commander 🎉";
    outerDiv.append(winnerMessage);
    document.querySelector(".openant-board").classList.add("no-clicks");
  }
  return outerDiv;
}
