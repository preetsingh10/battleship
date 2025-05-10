const arrayEqual = require("./arrayEqual");

function displayShipsOnBoard(
  allGridCells,
  shipObject,

) {
  if (shipObject === undefined) {
    throw new Error("please select a ship to place ");
  }
  // coordintates are expected to be an array like [1,1]
  // playerObject.placeShip(shipObject.name, direction, coOrdinate);
  const SHIP_NAMES = [
    "Carrier",
    "BattleShip",
    "Submarine",
    "Destroyer",
    "Cruiser",
  ];

  shipObject.position.forEach((coOrdinate) => {
    allGridCells.forEach((cell) => {
      const overlaping = SHIP_NAMES.some((name) => cell.classList.contains(name));
      if (arrayEqual([+cell.dataset.x, +cell.dataset.y], coOrdinate)) {
        if (overlaping) {
          throw new Error("ship overlapping");
        }
       
        cell.classList.add(shipObject.name);
      }
    });
  });
}
module.exports = displayShipsOnBoard;
