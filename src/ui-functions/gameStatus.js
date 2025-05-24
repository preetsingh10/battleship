import { user } from "..";
import { computerPlayer } from "..";
export function gamaeStatus() {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("gameStatusContainer");
  const shipsLeftHeading = document.createElement("div");
  shipsLeftHeading.textContent = "Ships left: ";
  shipsLeftHeading.classList.add('shipsLeftHeading')
  const userShipsLabel = document.createElement("div");
  userShipsLabel.textContent = "User Ships: ";
  let userShipsLeft = document.createElement("div");
  userShipsLeft.textContent = user.shipsLeft();
  const openantLabel = document.createElement("div");
  openantLabel.textContent = "Enemy Ships: ";
  let openantShipsLeft = document.createElement("div");
  openantShipsLeft.textContent = computerPlayer.shipsLeft();

outerDiv.append(shipsLeftHeading,userShipsLabel,userShipsLeft,openantLabel, openantShipsLeft)
return outerDiv
}
