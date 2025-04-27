function displayShips(player,outerDiv) {
    let selectedShip

  // it takes the player object as a parameter
  //outerDiv parameter takes the outer div node object to display the ships inside it
  player.allShips.forEach((ship) => {
    let shipBody = document.createElement("div");
    let shipButton = document.createElement('button')
    shipButton.textContent = ship.name
    shipButton.id = ship.name
    shipBody.classList = "ship-body";
    shipBody.draggable = true
    for (let i = 0; i < ship.length; i++) {
      let shipBodyUnit = document.createElement("div");
      shipBodyUnit.classList = "ship-body-unit";
      shipBody.appendChild(shipBodyUnit);
    }
    outerDiv.appendChild(shipButton)
    outerDiv.appendChild(shipBody)
  });

}
module.exports = displayShips;
