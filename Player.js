const gameboard = require("./Gameboard");
class Player {
  isComputer = false;
  constructor(name, isComputer) {
    this.name = name;
    this.isComputer = isComputer;
  }
  playerBoard = new gameboard();
  allShips = this.playerBoard.allShips;

  placeShip(shipName, direction, coordinates) {
    this.allShips.some((ship) => {
      if (ship.name === shipName && ship.isPlaced() === false) {
        return this.playerBoard.placeShip(ship, direction, coordinates);
      }
    });
  }

  attack(enemyBoard, [x, y]) {
    return enemyBoard.receiveAttack(x, y);
  }
  receiveAttack([x, y]) {
    return this.playerBoard.receiveAttack(x, y);
  }
}
module.exports = Player
