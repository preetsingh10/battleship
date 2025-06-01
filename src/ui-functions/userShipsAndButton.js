export function userShipsAndButtons(userPlayerObject) {
  // userPLayerObject is referred to the human player not for computer player
  const outputDiv = document.createElement("div");
  outputDiv.classList.add("user_ship_button_container");

  const headingText = document.createElement("div");
  headingText.textContent = "Place your ships commander";
  headingText.classList.add("headingTextForShipButtons");
  const spaceBarInstructions = document.createElement('div')
  spaceBarInstructions.textContent = "Press Space Bar to change the direction of the ships"
  spaceBarInstructions.classList.add('spacebarInstruction')
  outputDiv.appendChild(headingText);
  outputDiv.append(spaceBarInstructions)
  userPlayerObject.allShips.forEach((ship) => {
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");
    for (let i = 1; i <= ship.length; i++) {
      const shipBody = document.createElement("div");
      shipBody.classList.add(`${ship.name}`);
      shipBody.classList.add("cell");
      shipContainer.appendChild(shipBody);
    }
    const shipButton = document.createElement("button");
    shipButton.classList.add("ship-button");
    shipButton.id = ship.name;
    shipButton.textContent = ship.name;

    outputDiv.appendChild(shipButton);
    outputDiv.appendChild(shipContainer);
  });

  return outputDiv;
}
