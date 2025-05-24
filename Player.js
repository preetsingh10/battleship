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
  shipsLeft(){
    return this.allShips.filter(ship=>{
      if(ship.hitPoints !== 0){
        return true
      }
    }).length
  }

  attack(enemyBoard, [x, y]) {
    return enemyBoard.receiveAttack(x, y);
  }
  receiveAttack([x, y]) {
    return this.playerBoard.receiveAttack(x, y);
  }
  allShipsPlaced() {
    return this.allShips.every(ship=> ship.placed == true);
  }
  allShipSunk() {
    return this.playerBoard.allShipsSunk();
  }
  genrateRandomShipPostion() {
    const direction = ["horizontal", "vertical"];

    this.allShips.forEach((ship) => {
      if (ship.placed === false) {
        let placed = false;

        while (placed === false) {
          try {
            let randomCordinate = [
              Math.floor(Math.random() * 10) + 1,
              Math.floor(Math.random() * 10) + 1,
            ];
            let randomDirection =
              direction[Math.floor(Math.random() * direction.length)];
            this.placeShip(ship.name, randomDirection, randomCordinate);
            placed = true;
          } catch (error) {}
        }
      }
    });
  }
}

module.exports = Player;
